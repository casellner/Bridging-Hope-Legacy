const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 4433;

const intSalt = 10;
const mariadb = require("mariadb");

const pool = mariadb.createPool({
	host: "localhost",
	user: "root",
	password: "123",
	connectionLimit: 10,
	database: "BridgingHope",
	port: 3306
});

var app = express();
app.use(cors());
app.use(express.json());  

function hashPassword(strPassword){
    return bcrypt.hashSync(strPassword, intSalt);
}
  
function validatePassword(strPassword, strHash){
    return bcrypt.compareSync(strPassword, strHash);
}
  
  //delete unwanted characters
function clean(str) {
    return str.replace(/[^0-9a-zA-Z_\-@.\s]/gi, "");
}   
app.get('/alive', () => {
    console.log("hiya")
});

app.post("/api/signin", (req, res) => { 
    console.log("entered sign in function")
    const { username, password } = req.body;
    console.log("received", username, " ", password)

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    console.log("attempting to connect to database")
    pool.getConnection().then(connection => {
        console.log("connected to database")
        let query = 'SELECT userID, password FROM tblUser WHERE username = ?';
        connection.execute(query, [username])
        .then(results => {
            if (results.length > 0) {
                const user = results[0];
                if (validatePassword(password, user.password)) {
                    console.log('Logged in successfully')
                    res.json({ message: 'Logged in successfully', userId: user.UserID });
                } else {
                    console.log('Invalid credentials')
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            } else {
                console.log('User not found')
                res.status(404).json({ message: 'User not found' });
            }
        }).catch(err => {
            console.error("Error retrieving user", err);
            res.status(500).json({ status: "error", message: "Error retrieving user" });
        }).finally(() => {
            connection.release();
        });
    }).catch(err => {
        console.error("Error connecting to the database", err);
        res.status(500).json({ status: "error", message: "Error connecting to the database" });
    });
});

//BE SURE TO ADD A FOREIGN KEY 'orgID' REFERNCING 'tblOrganization' TO 'tblClient' OR THIS WILL NOT WORK!!
app.post("/api/register", (req, res) => {
    const { username, email, password, firstName, lastName, organization } = req.body;

    //rejects the input if user didn't fill all fields
    if (!username || !email || !password || !firstName || !lastName || !organization) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    pool.getConnection().then(connection => {
        //Checks to see if username already exists
        let query = 'SELECT username, email FROM tblUser WHERE username = ?';
        connection.execute(query, [username])
        .then(results => {
            if (results.length > 0) {
                console.log('Username or email already exists');
                res.status(409).json({ message: 'Username or email already exists' });
            } else {
                const hashedPassword = hashPassword(password); //hashes user password
                const newUserID = uuidv4(); //creates a new uuid for the user
                const newVolunteerID = uuidv4(); //creates a new uuid for the volunteer
                
                //this query is for inserting a new user into table
                query = 'INSERT INTO tblUser (userID, username, email, password) VALUES (?, ?, ?, ?)';
                connection.execute(query, [newUserID, username, email, hashedPassword])
                .then(result => {
                    console.log('User registered successfully');
                }).catch(err => {
                    console.error("Error registering user", err);
                    res.status(500).json({ message: 'Error registering user' });
                });
                
                //nested set of queries for linking organization and a new volunteer
                query = 'SELECT orgID FROM tblOrganization WHERE orgName = (?)';
                connection.execute(query, [organization])
                .then(result => {
                    const orgID = result[0].orgID; //sets the orgID const based on what organization the user selected
                    //creates the new volunteer based on the info the user entered
                    query = 'INSERT INTO tblVolunteer (volunteerID, firstName, lastName, userID) VALUES (?,?,?,?)';
                    connection.execute(query, [newVolunteerID, firstName, lastName, newUserID])
                        .then(result => {
                            const volunteerID = result.insertId.toString(); // Convert BigInt to Number
                            console.log('Volunteer registered successfully');
                            res.status(201).json({ message: 'Volunteer registered successfully', volunteerID });
                                //this query linked the volunteer to their selected orgnization
                                query = 'INSERT INTO tblVolunteerOrgList (volunteerID, orgID, isActive) VALUES (?,?,?)';
                                connection.execute(query, [newVolunteerID, orgID, true])
                                .then(result => { 
                                    console.log('volunteer linked successfully');
                                }).catch(err => {
                                    console.error("Error linking volunteer", err);
                                    res.status(500).json({ message: 'Error linking volunteer' });
                                });
                        }).catch(err => {
                            console.error("Error registering volunteer", err);
                            res.status(500).json({ message: 'Error registering volunteer' });
                        });
                }).catch(err => {
                    console.error("Error finding organization", err);
                    res.status(500).json({ message: 'Error finding organization' });
                });
            }
        }).catch(err => {
            console.error("Error checking for existing user", err);
            res.status(500).json({ message: 'Error checking for existing user' });
        }).finally(() => {
            connection.release();
        });

    }).catch(err => {
        console.error("Error connecting to the database", err);
        res.status(500).json({ message: 'Error connecting to the database' });
    });
});

/*Added this to database to allow for password reset
CREATE TABLE tblPasswordReset (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userID VARCHAR(36) NOT NULL,         -- Assuming userID is a UUID or similar unique identifier
    resetToken VARCHAR(36) NOT NULL,     -- UUID token for password reset
    expiresAt TIMESTAMP NULL,            -- Optional expiration date for the reset token
    FOREIGN KEY (userID) REFERENCES tblUser(userID) ON DELETE CASCADE
);

ALTER TABLE tblUser
ADD COLUMN otp VARCHAR(6),               -- To store the OTP
ADD COLUMN otpExpire DATETIME;           -- To store the OTP expiration time

*/
// All the information for the password reset email: 
// bridginghopereset@gmail.com
// password: C@pstone24
// It is also connected to my phone #, once the next group fully takes over we can change it to someone else
app.post("/api/forgot-password", (req, res) => {   
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    pool.getConnection().then((connection) => {
        const query = 'SELECT userID FROM tblUser WHERE email = ?';
        connection.execute(query, [email])
            .then((results) => {
                if (results.length > 0) {
                    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
                    const otpExpire = new Date(Date.now() + 300 * 1000); // OTP expires in 5 minute
                    const userId = results[0].userID;

                    const saveOtpQuery = 'UPDATE tblUser SET otp = ?, otpExpire = ? WHERE email = ?';
                    connection.execute(saveOtpQuery, [otp, otpExpire, email])
                        .then(() => {
                            const transporter = nodemailer.createTransport({
                                service: 'Gmail',
                                auth: {
                                    user: 'bridginghopereset@gmail.com',    	//bridging hope email I made only for reset
                                    pass: 'knku hjrb xpmr rmbs',       	 	//app password
                                },
                            });

                            const mailOptions = {
                                from: 'Bridging Hope Password Reset',
                                to: email,
                                subject: 'Password Reset OTP',
                                text: `Your OTP is ${otp} (valid for 5 minute).`,
                            };

                            transporter.sendMail(mailOptions, (error) => {
                                if (error) {
                                    console.error("Error sending email:", error);
                                    return res.status(500).json({ message: 'Failed to send OTP email' });
                                }

                                res.status(200).json({ message: 'OTP sent to your email' });
                            });
                        })
                        .catch((err) => {
                            console.error("Error updating OTP:", err);
                            res.status(500).json({ message: 'Failed to save OTP' });
                        });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((err) => {
                console.error("Error finding user:", err);
                res.status(500).json({ message: 'Failed to find user' });
            })
            .finally(() => {
                connection.release();
            });
    }).catch((err) => {
        console.error("Error connecting to the database:", err);
        res.status(500).json({ message: 'Database connection failed' });
    });
});

app.post("/api/reset-password", (req, res) => {
    const { otp, password, confirmPassword } = req.body;

    console.log("Received request to reset password"); // Log request start

    // Validate input fields
    if (!otp || !password || !confirmPassword) {
        console.log("Missing required fields:", { otp, password, confirmPassword });
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    pool.getConnection().then((connection) => {
        console.log("Connected to the database");

        // Check if OTP exists and is valid
        const query = 'SELECT * FROM tblUser WHERE otp = ? AND otpExpire > NOW()';
        console.log("Checking OTP validity:", otp);
        
        connection.execute(query, [otp])
            .then(async (results) => {
                if (results.length === 0) {
                    console.log("Invalid or expired OTP");
                    return res.status(400).json({ message: 'Invalid or expired OTP' });
                }

                console.log("OTP is valid. Proceeding to reset password");

                // Hash the new password
                const hashedPassword = await bcrypt.hash(password, 10);
                console.log("Password hashed successfully");

                // Update the user's password and clear the OTP
                const updatePasswordQuery = 'UPDATE tblUser SET password = ?, otp = NULL, otpExpire = NULL WHERE otp = ?';
                console.log("Updating password in the database");
                
                connection.execute(updatePasswordQuery, [hashedPassword, otp])
                    .then(() => {
                        console.log("Password reset successfully for OTP:", otp);
                        res.status(200).json({ message: 'Password reset successful' });
                    })
                    .catch((err) => {
                        console.error("Error updating password:", err);
                        res.status(500).json({ message: 'Failed to reset password', error: err });
                    });
            })
            .catch((err) => {
                console.error("Error validating OTP:", err);
                res.status(500).json({ message: 'Failed to validate OTP', error: err });
            })
            .finally(() => {
                console.log("Releasing database connection");
                connection.release();
            });
    }).catch((err) => {
        console.error("Error connecting to the database:", err);
        res.status(500).json({ message: 'Database connection failed', error: err });
    });
});
  
app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});
