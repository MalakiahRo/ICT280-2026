document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("userForm");
    const input = document.getElementById("username");
    const greeting = document.getElementById("greeting");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        greeting.textContent =
            "Welcome, " + input.value + "! Ready to build some ships in Space Engineers?";
    });

});