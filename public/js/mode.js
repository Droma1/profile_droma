$(document).ready(function(){
    // Detectar la preferencia del usuario
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplicar la clase dark-mode si el usuario prefiere el modo oscuro
if (userPrefersDark) {
    document.body.classList.add('dark-mode');
}

// Alternar entre modos cuando se hace clic en el botón
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Guardar la preferencia del usuario en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Aplicar la preferencia guardada del usuario
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}
});