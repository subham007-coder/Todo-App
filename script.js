const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
const mongoose = require('mongoose');
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


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
    const todos = await Todo.find().maxTimeMS(30000);;
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
    let {id} = req.params;
    let deletedChat = await Todo.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/");
});

app.listen("8080", () => {
    console.log("res send");
});