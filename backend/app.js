const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 4433;
const intSalt = 10;
const mariadb = require("mariadb");

const pool = mariadb.createPool({
	host: "localhost",
	user: "root",
	password: "toor",
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

app.post("/api/signin", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    pool.getConnection().then(connection => {
        //query that checks to see if user exits
        let query = 'SELECT userID, password FROM tblUser WHERE username = ?';
        connection.execute(query, [username])
        .then(results => {
            if (results.length > 0) {
                const user = results[0];
                if (validatePassword(password, user.password)) {
                    console.log('Logged in successfully')
                    res.json({ message: 'Logged in successfully', userId: user.UserID });
                } else {
                    console.log('Incorrect password')
                    res.status(401).json({ message: 'Incorrect password' });
                }
            } else {
                console.log('User does not exist')
                res.status(404).json({ message: 'User does not exist' });
            }
        }).catch(err => {
            console.error("User does not exist", err);
            res.status(500).json({ status: "error", message: "User does not exist" });
        }).finally(() => {
            connection.release();
        });
        
    }).catch(err => {
        console.error("Error connecting to the database", err);
        res.status(500).json({ status: "error", message: "Error connecting to the database" });
    });
});

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

app.post("/api/register_client", (req, res) => {
    const { firstName, lastName, email, DOB, phone, photo, addressLine1, addressLine2, city, state, zip } = req.body;

    const newClientID = uuidv4();
    const newAddressID = uuidv4();
    const newPhoneID = uuidv4();

    let z = parseInt(zip);
    let dob_r;

    if (DOB == ''){
        dob_r = null;
    }else{
        dob_r = DOB;
    }

    pool.getConnection().then(connection => {
        let query = 'INSERT INTO tblAddress (addressID, addressLine1, addressLine2, city, state, zip) VALUES (?,?,?,?,?,?)';
        connection.execute(query, [newAddressID, addressLine1, addressLine2, city, state, z])
        .then(result => { 
            //const addressID = result.insertId.toString(); // Convert BigInt to Number
            console.log('Address created successfully'); 
            //res.status(201).json({ message: 'Volunteer registered successfully', addressID });
            const areaCode =  parseInt(phone.slice(0,3));
            const number = parseInt(phone.slice(3,10));
            query = 'INSERT INTO tblPhone (phoneID, areaCode, number) VALUES (?,?,?)';
            connection.execute(query, [newPhoneID, areaCode, number])
            .then(result => { 
                //const clientID = result.insertId.toString(); // Convert BigInt to Number
                console.log('Phone created successfully'); 
                //res.status(201).json({ message: 'Client registered successfully', clientID });
           
                query = 'INSERT INTO tblClient (clientID, firstName, lastName, email, DOB, photo, addressID, phoneID) VALUES (?,?,?,?,?,?,?,?)';
                connection.execute(query, [newClientID, firstName, lastName, email, dob_r, photo, newAddressID, newPhoneID])
                .then(result => { 
                    //const clientID = result.insertId.toString(); // Convert BigInt to Number
                    console.log('Client registered successfully'); 
                    //res.status(201).json({ message: 'Client registered successfully', clientID });
                }).catch(err => {
                    console.error('Error registering client', err);
                    res.status(500).json({ message: 'Error registering client' });
                });
            }).catch(err => {
                console.error('Error creating phone object', err);
                res.status(500).json({ message: 'Error creating phone object' });
            });   
        }).catch(err => {
            console.error('Error creating address object', err);
            res.status(500).json({ message: 'Error creating address object' });
        }).finally(() => {
            connection.release();
        });
    }).catch(err => {
        console.error("Error connecting to the database", err);
        res.status(500).json({ message: 'Error connecting to the database' });
    });
});

app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});

