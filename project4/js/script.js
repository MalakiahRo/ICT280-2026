document.getElementById("userForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("username").value;

    document.getElementById("greeting").textContent =
        "Welcome, " + name + "! Ready to build some ships in Space Engineers?";

});