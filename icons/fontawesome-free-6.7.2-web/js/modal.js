// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el botón "Ver Propiedad"
var botonesVerPropiedad = document.querySelectorAll(".boton-verPropiedad-block");

// Obtener el elemento para cerrar el modal
var cerrarModal = document.getElementById("cerrarModal");

// Función para abrir el modal
function abrirModal(titulo, descripcion, precio, imagen, caracteristicas) {
    // Rellenar el modal con los detalles de la propiedad
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;
    document.getElementById("modalPrecio").textContent = "Precio: $" + precio;
    document.getElementById("modalImagen").src = imagen;
    
    // Llenar las características
    var caracteristicasList = document.getElementById("modalCaracteristicas");
    caracteristicasList.innerHTML = "";
    caracteristicas.forEach(function(caracteristica) {
        var li = document.createElement("li");
        li.textContent = caracteristica;
        caracteristicasList.appendChild(li);
    });

    // Mostrar el modal
    modal.style.display = "block";
}

// Asignar el evento a cada botón "Ver Propiedad"
botonesVerPropiedad.forEach(function(boton, index) {
    boton.addEventListener("click", function() {
        // Aquí debes pasar los datos específicos de cada propiedad
        var titulo = "Departamento " + (index + 1);
        var descripcion = "Descripción detallada del departamento " + (index + 1);
        var precio = "5500";
        var imagen = "img/departamento" + (index + 1) + ".jpeg"; // Ajusta la imagen según el índice
        var caracteristicas = [
            "3 Dormitorios",
            "2 Baños",
            "1 Estacionamiento"
        ];

        abrirModal(titulo, descripcion, precio, imagen, caracteristicas);
    });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
cerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
