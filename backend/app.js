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
    console.log(username)
    console.log(password)
    pool.getConnection().then(connection => {
        let query = 'SELECT userID, password FROM tblUser WHERE username = ?';
        connection.execute(query, [username])
        .then(results => {
            if (results.length > 0) {
                const user = results[0];
                if (password === user.password) {
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

/*pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          //conn.query(" INSERT INTO tblClient (clientID, lastName, email) VALUES ('1234', 'goodbye!', 'meow@gmail.com')", [1, "mariadb"])
          return conn.query("SELECT * FROM tblUser", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
          pool.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
          pool.end();
        })
        
    }).catch(err => {
      //not connected
      pool.end();
});*/

app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});
