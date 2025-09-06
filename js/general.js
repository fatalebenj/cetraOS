const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
let darkMode = false;

toggleButton.addEventListener("click", () => {
    darkMode = !darkMode
    body.classList.toggle("darktheme");
    document.getElementById("taskbar").classList.toggle("darktheme");
    toggleButton.classList.toggle("darktheme");

    if (darkMode == true){
        toggleButton.innerHTML === '<i class="fa-light fa-moon"></i>';
    }
    else {
        toggleButton.innerHTML === '<i class="fa-light fa-sun"></i>';
    }

})