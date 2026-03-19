
document.getElementById("btnText").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerHTML = text;
});


document.getElementById("btnColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});


document.getElementById("btnSize").addEventListener("click", function () {
    document.getElementById("heading").style.fontSize = "40px";
});


document.getElementById("btnToggle").addEventListener("click", function () {
    let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});