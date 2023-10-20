const p = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const dlt = document.querySelectorAll(".dlt");
const makeLi = document.createElement("li");

// p.textContent = "Task Add Successful..."

button.addEventListener("click", () => {
    button.style.backgroundColor = "lightgreen"
    ul.appendChild(makeLi);
    const makeString = String(makeLi.value)
    makeLi.innerHTML = input.value;
    input.value = "";

    const makeBtn = document.createElement("button");
    makeBtn.textContent = "Delete Task"
    makeBtn.classList.add("dlt")

    makeLi.appendChild(makeBtn);
})
const inpage = li.forEach((li) => {
    dlt.forEach((allBtn) => {
        // console.log(allBtn);
        allBtn.addEventListener("click", () => {
            console.log("remove");
            li.remove()
            makeLi.remove()
        })
    })

})
