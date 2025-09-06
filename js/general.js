const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("darktheme");
    document.getElementById("taskbar").classList.toggle("darktheme");
    document.getElementById("theme-toggle").classList.toggle("darktheme");
})