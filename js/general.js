const toggleButton = document.getElementById('theme-toggle');
const taskbar = document.getElementById('taskbar');
const toggleButtonIcon = document.createElement('span');
toggleButtonIcon.id = 'theme-toggle-icon'; 
toggleButton.appendChild(toggleButtonIcon);

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-mode');
toggleButtonIcon.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    taskbar.classList.replace('dark-mode', 'light-mode');
    document.body.classList.replace('dark-mode', 'light-mode');
    toggleButtonIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    taskbar.classList.replace('light-mode', 'dark-mode');
    document.body.classList.replace('light-mode', 'dark-mode');
    toggleButtonIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }
});