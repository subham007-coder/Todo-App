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

  try {
    connection.query("show tables", (err, result) => {
        if (err) throw err;
        console.log(result);
    })
  } catch (error) {
    console.log(error);
  }

// button.addEventListener("click", () => {

//     if (input.value == "") {
//         p.textContent = "Please Add A Task...";
//         p.style.color = "red";
//         button.style.backgroundColor = "red";
//         button.style.color = "white";
//     } else {
//         p.textContent = "Task Add Successful...";
//         p.style.color = "lightgreen";
//         button.style.backgroundColor = "lightgreen";
//         button.style.color = "black";
//         ul.appendChild(makeLi);
//         const makeString = String(makeLi.value);
//         makeLi.innerHTML = input.value;

//         const makeBtn = document.createElement("button");
//         makeBtn.textContent = "Delete Task";
//         makeBtn.classList.add("dlt");
//         makeLi.appendChild(makeBtn);
//     };
// });

// ul.addEventListener("click", (event) => {
//     if (event.target.nodeName == "BUTTON") {
//         const listItem = event.target.parentElement;
//         listItem.remove();
//     }
// });


