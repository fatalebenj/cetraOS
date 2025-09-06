const toggleButton = document.getElementById('theme-toggle');
const taskbar = document.getElementById('taskbar');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-mode');
toggleButton.textContent = savedTheme === 'dark' ? '🌙' : '🌞';

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    taskbar.classList.replace('dark-mode', 'light-mode');
    document.body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  } else {
    taskbar.classList.replace('light-mode', 'dark-mode');
    document.body.classList.replace('light-mode', 'dark-mode');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});