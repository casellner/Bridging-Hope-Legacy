var express = require("express");
var cors = require("cors");
var mariadb = require("mariadb");


/* Need for later
app.get("/", (req, res) => {
  res.send("I'm inside docker!");
});
*/
const port = 3000;
app.listen(port, () => {
  console.log(`Express listening at http://0.0.0.0:${port}`);
});

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


//checking user and password
app.post("/login", (req, res) => {
    console.log(req.body);

    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      res.json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
});

 