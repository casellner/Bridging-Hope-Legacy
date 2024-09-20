const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 3000;
const intSalt = 10;
const mariadb = require("mariadb");

const db_pool = mariadb.createPool({
	host: "localhost",
	user: process.env["MARIADB_USER"],
	password: process.env["MARIADB_PASSWORD"],
	connectionLimit: 5,
	database: "BridgingHope",
	port: port
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

function verifySession (req) {
//  return true;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      let strSessionID = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
      //Build function to query database and gather information about the user including name and role
      db_pool.getConnection(function(err,connection) {
          if (err){
              console.log("Error connecting to database");
              console.log(err);
              
              res.status(500).json({status:"error",message:"Error connecting to database"});
          } else {
              let strCommand = 'SELECT * FROM tblSessions LEFT JOIN tblUsers on tblSessions.UserID = tblUsers.UserID LEFT JOIN tblUserPermissions on tblSessions.UserID = tblUserPermissions.UserID';
              
              db_pool.query(strCommand, [strPurchaseOrderItemCategoryID], function (err, result) {
                  if(err){
                      console.log("Error verifying session");
                      console.log(err);
                      
                      return "error"
                  } else {
                      return result;
                  }
              });
          }
      });
      return req.query.token;
  }
  return false;
}

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    db_pool.getConnection().then(connection => {
        let query = "SELECT UserID, Password FROM tbUser WHERE Username = ?";
        connection.query(query, [username])
        .then(results => {
            if (results.length > 0) {
                const user = results[0];
                if (validatePassword(password, user.Password)) {
                    res.json({ message: 'Logged in successfully', userId: user.UserID });
                } else {
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            } else {
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

app.get("/clientcontacts/:clientcontactid",(req,res,next) => {
  if(verifySession(req) == true){
      let strClientContactID = req.params.clientcontactid;
      db_pool.getConnection(function(err,connection) {
          if (err){
              console.log("Error connecting to database");
              console.log(err);
              
              res.status(500).json({status:"error",message:"Error connecting to database"});
          } else {
              let strCommand = 'SELECT * FROM tblClientContacts';
              if(strClientContactID != null){
                  strCommand = 'SELECT * FROM tblClientContacts WHERE ClientContactID = ?';
              }
              db_pool.query(strCommand, [strClientContactID], function (err, result) {
                  if(err){
                      console.log("Error retrieving record");
                      console.log(err);
                      
                      res.status(500).json({status:"error",message:"Error retrieving client contact"});
                  } else {
                      if(result.length == 0){
                          res.status(404).json({status:"error",message:"Client Contact not found"});
                      } else {
                          res.status(200).json(result);
                      }
                  }
              });
          }
          connection.release();
      });
  } else {
      res.status(401).json({status:"error",message:"Unauthorized"});
  }
})

app.get("/alive",(req,res,next) => {
  res.status(200).json({message:"alive"});
})
/*
app.get("/users", (req, res) => {
    if (verifySession(req) == true) {
      db_pool.getConnection((err, connection) => {
        if (err) {
          console.log("Error connecting to the database", err);
          res.status(500).json({ status: "error", message: "Error connecting to the database" });
        } else {
          let query = "SELECT * FROM tblUser";
          db_pool.query(query, [], (err, result) => {
            if (err) {
              console.log("Error retrieving users", err);
              res.status(500).json({ status: "error", message: "Error retrieving users" });
            } else {
              res.status(200).json(result);
            }
          });
          connection.release();
        }
      });
    } else {
      res.status(401).json({ status: "error", message: "Unauthorized" });
    }
  });
  */

  app.get("/clients/:clientId?", (req, res) => {
    let query = req.params.clientId ? 
        "SELECT * FROM tbClient WHERE ClientID = ?" : 
        "SELECT * FROM tbClient";
    
    db_pool.getConnection().then(connection => {
        connection.query(query, [req.params.clientId])
        .then(results => {
            res.json(results);
        }).catch(err => {
            console.error("Error retrieving clients", err);
            res.status(500).json({ status: "error", message: "Error retrieving clients" });
        }).finally(() => {
            connection.release();
        });
    }).catch(err => {
        console.error("Error connecting to the database", err);
        res.status(500).json({ status: "error", message: "Error connecting to the database" });
    });
});

app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});
