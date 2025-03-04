let color1 = document.getElementById("color_1");
let color2 = document.getElementById("color_2");
let color3 = document.getElementById("color_3");
let color4 = document.getElementById("color_4");

function pintarNegro(event) {
    event.target.style.backgroundColor = "black";
}

color1.addEventListener("click", pintarNegro);
color2.addEventListener("click", pintarNegro);
color3.addEventListener("click", pintarNegro);
color4.addEventListener("click", pintarNegro);