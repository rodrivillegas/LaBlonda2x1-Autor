var animationContainer = document.getElementById("animation-container");
var content = document.getElementById("content");

// Esperar a que la animación termine y luego ocultarla y mostrar el contenido
animationContainer.addEventListener("animationend", function () {
  animationContainer.style.display = "none";
  content.style.display = "block";
});

// Función para ocultar la animación y mostrar el contenido de los tragos
function mostrarTragos(tipo) {
  document.getElementById("seleccionador_tragos").style.display = "none";
  content.style.display = "block";
  animationContainer.style.display = "none";

  if (tipo === "2x1") {
    cargarScript("./js/script2x1.js");
  } else if (tipo === "TragosDeAutor") {
    cargarScript("./js/scriptTragosDeAutor.js");
  }
}

// Función para mostrar los Tragos 2x1
function mostrarTragos2x1() {
    document.getElementById('seleccionador_tragos').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    cargarScript('./js/script2x1.js');
  }
  
  // Función para mostrar los Tragos de Autor
  function mostrarTragosDeAutor() {
    document.getElementById('seleccionador_tragos').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    cargarScript('./js/scriptTragosDeAutor.js');
  }
  
  // Función para cargar un script en el documento
  function cargarScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  }

  // script_selector.js

// Función para ocultar la animación y mostrar el contenido de los tragos
function mostrarTragos(tipo) {
    document.getElementById('seleccionador_tragos').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('animation-container').style.display = 'none';
  
    if (tipo === '2x1') {
      cargarScript('./js/script2x1.js');
    } else if (tipo === 'TragosDeAutor') {
      cargarScript('./js/scriptTragosDeAutor.js');
    }
  }
  
  // Función para cargar un script en el documento
  function cargarScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  }
  

  