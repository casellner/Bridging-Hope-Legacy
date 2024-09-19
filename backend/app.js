const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const port = 3000;
const intSalt = 10;
var mariadb = require("mariadb");

const conCEROC = mysql.createPool({ // can change 
  host: "YOURDATABASEHOST",
  user: "YOURDATABASEUSER",
  password: "YOURDATABASEPWD",
  database: "YOURDATABASENAME"
});

var app = express();
app.use(cors());
app.use(express.json());  
/* Need for later
app.get("/", (req, res) => {
  res.send("I'm inside docker!");
});
*/
function hashPassword(strPassword){
  return bcrypt.hashSync(strPassword, intSalt);
}

function validatePassword(strPassword, strHash){
  return bcrypt.compareSync(strPassword, strHash);
}

function verifySession (req) {
//  return true;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      let strSessionID = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
      //Build function to query database and gather information about the user including name and role
      conCEROC.getConnection(function(err,connection) {
          if (err){
              console.log("Error connecting to database");
              console.log(err);
              
              res.status(500).json({status:"error",message:"Error connecting to database"});
          } else {
              let strCommand = 'SELECT * FROM tblSessions LEFT JOIN tblUsers on tblSessions.UserID = tblUsers.UserID LEFT JOIN tblUserPermissions on tblSessions.UserID = tblUserPermissions.UserID';
              
              conCEROC.query(strCommand, [strPurchaseOrderItemCategoryID], function (err, result) {
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

app.get("/clientcontacts/:clientcontactid",(req,res,next) => {
  if(verifySession(req) == true){
      let strClientContactID = req.params.clientcontactid;
      conCEROC.getConnection(function(err,connection) {
          if (err){
              console.log("Error connecting to database");
              console.log(err);
              
              res.status(500).json({status:"error",message:"Error connecting to database"});
          } else {
              let strCommand = 'SELECT * FROM tblClientContacts';
              if(strClientContactID != null){
                  strCommand = 'SELECT * FROM tblClientContacts WHERE ClientContactID = ?';
              }
              conCEROC.query(strCommand, [strClientContactID], function (err, result) {
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

const db_pool = mariadb.createPool({
	host: "localhost",
	user: process.env["MARIADB_USER"],
	password: process.env["MARIADB_PASSWORD"],
	connectionLimit: 5,
	database: "",/*INSERT DATA BASE NAME*/
	port: 3000
});

var app = express();
app.use(express.json());
app.use(cors());

//delete unwanted characters
function clean(str) {
	return str.replace(/[^0-9a-zA-Z_\-@.\s]/gi, "");
}


//checking for correct user and password
app.post("/login", (req, res) => {
    console.log(req.body);

    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      res.json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
});

app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});
