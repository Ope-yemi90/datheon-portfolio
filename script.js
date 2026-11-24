
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Project Modal
const projectModal = document.getElementById("project-modal");
const viewButtons = document.querySelectorAll(".view-project");
const closeModal = document.querySelector(".close-modal");

viewButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        projectModal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function() {
    projectModal.style.display = "none";
});
projectModal.addEventListener("click", function(event) {
    if (event.target === projectModal) {
        projectModal.style.display = "none";
    }
});