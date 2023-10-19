const p = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

// p.textContent = "Task Add Successful..."

button.addEventListener("click", () => {
    button.style.backgroundColor = "lightgreen"
    const makeLi = document.createElement("li");
    ul.append(makeLi);
    const makeString = String(makeLi.value)
    makeLi.innerHTML = input.value;
})

const allLi = li.forEach( (e) => {
    e.addEventListener("click", () => {
        e.remove()
    })
} )