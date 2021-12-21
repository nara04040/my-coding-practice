const canvas = document.getElementById("jsCansvas");

function onMouseMove(event) {
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove");
}
