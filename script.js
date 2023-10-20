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
        const makeString = String(makeLi.value)
        makeLi.innerHTML = input.value;
        input.value = "";

        const makeBtn = document.createElement("button");
        makeBtn.textContent = "Delete Task"
        makeBtn.classList.add("dlt")
        makeLi.appendChild(makeBtn);
    }
})



const makeArr = Array.from(dlt);
const makeArrLi = Array.from(li);

makeArr.map((dltBtn) => {
    dltBtn.addEventListener("click", () => {
        console.log("dlt");
        makeArrLi.map((allLi) => {
            console.log(allLi);
            
        })
    })
})