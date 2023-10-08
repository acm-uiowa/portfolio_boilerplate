let changeColorBtn = document.getElementById("btn");
let isBlue = false;

const changeColor = () => {
    if (isBlue == true) {
        document.getElementById("title").style.color = "red";
    } else {
        document.getElementById("title").style.color = "blue";
    }
    isBlue = !isBlue;
}

changeColorBtn.onclick = changeColor;