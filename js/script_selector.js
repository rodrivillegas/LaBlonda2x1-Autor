var animationContainer = document.getElementById("animation-container");
var content = document.getElementById("content");
var seleccionadorTragos = document.getElementById("seleccionador_tragos");

// Ocultar el contenido y los botones de selección de tragos por defecto
content.style.display = "none";
seleccionadorTragos.style.display = "none";

// Esperar a que la animación termine y luego mostrar el contenido y los botones de selección de tragos
animationContainer.addEventListener("animationend", function () {
  animationContainer.style.display = "none";
  content.style.display = "block";
  seleccionadorTragos.style.display = "block";
});

// Función para mostrar los Tragos y cargar el script correspondiente
function mostrarTragos(tipo) {
  document.getElementById("seleccionador_tragos").style.display = "none";
  content.style.display = "block";
  animationContainer.style.display = "none";

  if (tipo === "2x1LaMignon") {
    cargarScript("./js/script2x1LaMignon.js");
  }
  if (tipo === "LaMignon") {
    cargarScript("./js/scriptLaMignon.js");
  }
  if (tipo === "2x1Aperol") {
    cargarScript("./js/script2x1Aperol.js");
  } 
  if (tipo === "2x1Mojito") {
    cargarScript("./js/script2x1Mojito.js");
  } 
  if (tipo === "Aperol") {
    cargarScript("./js/scriptAperol.js");
  }
  if (tipo === "FernetBotella") {
    cargarScript("./js/scriptFernetBotella.js");
  }
  if (tipo === "Tutorial") {
    cargarScript("./js/scriptTutorial.js");
  }
  else if (tipo === "TragosDeAutor") {
    cargarScript("./js/scriptTragosDeAutor.js");
  }
}

// Función para cargar un script en el documento
function cargarScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}
