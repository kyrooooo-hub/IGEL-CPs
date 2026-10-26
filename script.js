const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
    message.textContent =
        "Hello! My Git and GitHub project is working successfully!";
});
