const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 8000;
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
app.get('/', () => {
    console.log("hiya")
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    pool.getConnection().then(connection => {
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

//BE SURE TO ADD A FOREIGN KEY 'orgID' REFERNCING 'tblOrganization' TO 'tblClient' OR THIS WILL NTO WORK!!
app.post("/register", (req, res) => {
    const { username, password, firstName, lastName, organization } = req.body;

    // Validate input
    if (!username || !password || !firstName || !lastName || !organization) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    pool.getConnection().then(connection => {
        // Check if username already exists
        
        let query = 'SELECT username FROM tblUser WHERE username = ?';
        connection.execute(query, [username])
        .then(results => {
            if (results.length > 0) {
                console.log('Username already exists');
                res.status(409).json({ message: 'Username already exists' });
            } else {
                // Hash password and insert new user
                const hashedPassword = hashPassword(password);
                const newUserID = uuidv4();
                const newClientID = uuidv4();
                
                query = 'INSERT INTO tblUser (userID, username, password) VALUES (?, ?, ?)';
                connection.execute(query, [newUserID, username, hashedPassword])
                .then(result => {
                    const userId = result.insertId.toString(); // Convert BigInt to Number
                    console.log('User registered successfully');
                }).catch(err => {
                    console.error("Error inserting user", err);
                    res.status(500).json({ message: 'Error registering user' });
                });
                query = 'SELECT orgID FROM tblOrganization WHERE orgName = (?)';
                connection.execute(query, [organization])
                .then(result => {
                    const orgID = result[0].orgID; //sets the orgID const
                    console.log(orgID)
                    query = 'INSERT INTO tblClient (clientID, firstName, lastName, userID, orgID) VALUES (?,?,?,?,?)';
                    connection.execute(query, [newClientID, firstName, lastName, newUserID, orgID])
                        .then(result => {
                            const userId = result.insertId.toString(); // Convert BigInt to Number
                            console.log('Client registered successfully');
                            res.status(201).json({ message: 'User registered successfully', userId });
                    }).catch(err => {
                        console.error("Error inserting user", err);
                        res.status(500).json({ message: 'Error registering user' });
                    });
                }).catch(err => {
                    console.error("Error inserting user", err);
                    res.status(500).json({ message: 'Error registering user' });
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


app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});
