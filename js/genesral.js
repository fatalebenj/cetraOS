const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
let darkMode = false;

toggleButton.addEventListener("click", () => {
    darkMode = !darkMode
    body.classList.toggle("darktheme");
    document.getElementById("taskbar").classList.toggle("darktheme");
    toggleButton.classList.toggle("darktheme");
    if (document.body.classList.contains('darktheme')) {
        toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
    } else {
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})