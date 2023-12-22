// const p = document.querySelector("p");
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const ul = document.querySelector("ul");
// const li = document.querySelectorAll("li");
// const dlt = document.querySelectorAll(".dlt");
// const makeLi = document.createElement("li");

//(now we can write sql queries in our CLI)
// step : 1 cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
// step : 2 .\mysql.exe -u root -p
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todoapp',
  password: '#adsuforever24'
});

let q = "insert into work (todothis) values (?)";


try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
} catch (error) {
  console.log(error);
}
connection.end();