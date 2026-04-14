let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let done = document.createElement("button");
    let inputText = input.value;
    li.textContent = inputText;
    btn.textContent = "Delete";
    done.textContent = "Done";
    li.append(btn,done);
    ul.append(li);
    btn.addEventListener("click", () => {
        li.remove();
    });
    done.addEventListener(("click"), () => {
        li.classList.toggle("strike");
    });
});
