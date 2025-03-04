const keyDiv = document.getElementById("key");
const newDiv = document.createElement("div");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    keyDiv.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    keyDiv.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    keyDiv.style.backgroundColor = "lightskyblue";
  } else if (event.key === "q") {
    crearNuevoDiv("purple");
  } else if (event.key === "w") {
    crearNuevoDiv("gray");
  } else if (event.key === "e") {
    crearNuevoDiv("brown");
  }
});

function crearNuevoDiv(color) {
  newDiv.classList.add("new-div");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
