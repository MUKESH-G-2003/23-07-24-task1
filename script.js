
addEventListener('click', changeColor);

let list = ["red", "yellow", "green", "blue"];
let i = 0;

function changeColor() {
    if (i > list.length) {
        i = 0;
    }
    const container = document.getElementById("container");
    const text = document.getElementById("clr");
    container.style.backgroundColor = list[i];
    text.innerHTML = list[i];
        i++;
}
