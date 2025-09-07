const toggleButton = document.getElementById('theme-toggle');
const taskbar = document.getElementById('taskbar');
const toggleButtonIcon = document.createElement('span');
toggleButtonIcon.id = 'theme-toggle-icon'; 
toggleButton.appendChild(toggleButtonIcon);

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-mode');
toggleButtonIcon.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-earth-americas"></i>' : '<i class="fa-solid fa-cloud"></i>';

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    taskbar.classList.replace('dark-mode', 'light-mode');
    document.body.classList.replace('dark-mode', 'light-mode');
    toggleButtonIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    taskbar.classList.replace('light-mode', 'dark-mode');
    document.body.classList.replace('light-mode', 'dark-mode');
    toggleButtonIcon.innerHTML = '<i class="fa-solid fa-earth-americas"></i>';
    localStorage.setItem('theme', 'dark');
  }
});

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('clock').innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

document.addEventListener("DOMContentLoaded", () => {
  const setupScreen = document.getElementById("setup-screen");
  const saveBtn = document.getElementById("save-username");
  const greetEl = document.getElementById("greeting");

  // Try to load saved username - check for both null and empty string
  let savedName = localStorage.getItem("username");

  if (savedName && savedName.trim() !== "") {
    showGreeting(savedName);
    setupScreen.style.display = "none"; // Explicitly hide setup screen
  } else {
    setupScreen.style.display = "flex";
  }

  saveBtn.addEventListener("click", () => {
    const input = document.getElementById("username-input").value.trim();
    if (input.length > 0) {
      localStorage.setItem("username", input);
      savedName = input;
      setupScreen.style.display = "none";
      showGreeting(savedName);
    }
  });

  // Allow Enter key to save username
  document.getElementById("username-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveBtn.click();
    }
  });

  function showGreeting(name) {
    if (greetEl) {
      greetEl.textContent = `Hello, ${name}!`;
    }
  }
});