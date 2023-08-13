document.addEventListener("DOMContentLoaded", function() {
    let miDiv = document.getElementById("miDiv");
    let botonSaludar = document.getElementById("botonSaludar");

    miDiv.addEventListener("click", function(event) {
        alert("Hola! Soy el div");
    });

    botonSaludar.addEventListener("click", function(event) {
        event.stopPropagation(); 
        alert("Hola!");
    });
});

