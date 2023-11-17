const p = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const dlt = document.querySelectorAll(".dlt");
const makeLi = document.createElement("li");


button.addEventListener("click", () => {

    if (input.value == "") {
        p.textContent = "Please Add A Task...";
        p.style.color = "red";
        console.log("no");
        button.style.backgroundColor = "red";
        button.style.color = "white";
    } else {
        p.textContent = "Task Add Successful...";
        p.style.color = "lightgreen";
        button.style.backgroundColor = "lightgreen"
        button.style.color = "black"
        ul.appendChild(makeLi);
        const makeString = String(makeLi.value);
        makeLi.innerHTML = input.value;
        input.value = "";

        const makeBtn = document.createElement("button");
        makeBtn.textContent = "Delete Task";
        makeBtn.classList.add("dlt");
        makeLi.appendChild(makeBtn);
    }
})

ul.addEventListener("click", (event) => {

    if (event.target.nodeName == "BUTTON") {
        console.log("dlt");
        const listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
});

localStorage.setItem("name", "subham")