// Crear el botón "Home"
var homeButton = document.createElement("div");
homeButton.textContent = "REGRESAR 🏡";
homeButton.id = "homeButton"; // Asignar el ID para aplicar los estilos CSS
homeButton.classList.add("boton-seleccion"); // Agregar la clase existente para mantener el estilo

// Agregar el evento de click al botón "Home" para que refresque la página
homeButton.addEventListener("click", function () {
  // Mostrar el SweetAlert2 con el mensaje de advertencia
  Swal.fire({
    title: "¿Seguro quieres volver al menú principal?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    customClass: {
      container: "cartelConfirmaPedido",
    },
  }).then((result) => {
    // Si el usuario hace clic en "Aceptar" en el SweetAlert2, entonces recargamos la página
    if (result.isConfirmed) {
      location.reload();
    }
  });
});

// Agregar el botón "Home" al contenedor deseado (por ejemplo, el cuerpo del documento)
document.body.appendChild(homeButton);

const productosJSON = `
{
  "Tutorial": [
    {
      "imagen": "./assets/Screen1final.jpg"
    },
    {
        "imagen": "./assets/Screen2final.jpg"
    },
    {
        "imagen": "./assets/Screen3final.jpg"
    },
    {
        "imagen": "./assets/Screen4final.jpg"
    },
    {
        "imagen": "./assets/Screen5final.jpg"
    }
  ]
}
`;

const productos = JSON.parse(productosJSON);

function construirContenidoProductos() {
  let contenidoProductos = "";

  for (const categoria in productos) {
    contenidoProductos += `<div class="${categoria} opciones-categoria">`;

    productos[categoria].forEach((producto) => {
      contenidoProductos += `
            <div class="imagen">
                <img
                    src="${producto.imagen}"
                    alt="Imagen de ${producto.nombre}"
                
                />
            </div>
      `;
    });

    contenidoProductos += "</div>";
  }

  return contenidoProductos;
}

const productosContainer = document.getElementById(
  "productos-containerTragosDeAutor"
);
productosContainer.innerHTML = construirContenidoProductos();
