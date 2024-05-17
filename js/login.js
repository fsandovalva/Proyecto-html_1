document.getElementById("loginButton").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert('Por favor, ingresa nombre de usuario y contraseña.');
    } else {
        window.location.href = "index.html";
    }
});
