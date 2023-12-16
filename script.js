// const p = document.querySelector("p");
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const ul = document.querySelector("ul");
// const li = document.querySelectorAll("li");
// const dlt = document.querySelectorAll(".dlt");
// const makeLi = document.createElement("li");

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


const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }))

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
    },
    time_now: {
        type: Date,
    }
});
const Todo = mongoose.model("Todo", todoSchema);

// const todo1 = new Todo({
//     todoName: "Next add todo by user",
//     time_now: new Date(),
// });

// todo1.save()
//     .then(console.log("todo was save"))
//     .catch(err => console.log(err));

main()
    .then(res => { console.log("i am mongoose function call"); })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo');
}

app.get("/", async (req, res) => {
    let todos = await Todo.find();
    res.render("index.ejs", { todos });
})

app.get("/todo/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/add", async (req, res) => {
    let { newTodo } = req.body;
    let addTodo = new Todo({
        todoName: newTodo,
        time_now: new Date(),
    });
    await addTodo.save()
        .then(res => { console.log("todo was save") })
        .catch(err => { console.log(err) });
    res.redirect("/");
});

app.delete("/todo/:id", async (req, res) => {
    // res.send("delete send");
    let {id} = req.params;
    let deletedChat = await Todo.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/");
})

app.listen("8080", () => {
    console.log("res send");
});