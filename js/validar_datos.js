function validateForm() {
    var titulo = document.getElementById("titulo").value;
    var reseña = document.getElementById("reseña").value;
    var nombre = document.getElementById("nombre").value;
    
    if (titulo.trim() === "") {
        alert("Por favor completa el campo 'Título de la Serie'.");
        return false;
    }
    if (reseña.trim() === "") {
        alert("Por favor completa el campo 'Reseña'.");
        return false;
    }
    if (nombre.trim() === "") {
        alert("Por favor completa el campo 'Tu Nombre'.");
        return false;
    }

    // Mostrar el mensaje de éxito
    showSuccessMessage();
    return true;

    function showSuccessMessage() {
        // Mostrar el div de éxito
        var successDiv = document.getElementById("successMessage");
        successDiv.style.display = "block";
}}