$(document).ready(function(){
  // Detectar la preferencia del usuario
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = $('.icon-theme');

  // Aplicar la clase dark-mode si el usuario prefiere el modo oscuro
  
  if (userPrefersDark) {
    $('body').addClass('dark-mode');
    theme.addClass('icon-sun-inv');
  }

  // Alternar entre modos cuando se hace clic en el botón
  $('#toggle-dark-mode').on('click', function() {
    $('body').toggleClass('dark-mode');
    
    // Guardar la preferencia del usuario en localStorage
    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      theme.toggleClass('icon-moon icon-sun-inv');
    } else {
      localStorage.setItem('theme', 'light');
      theme.toggleClass('icon-sun-inv icon-moon');
    }
  });

  // Aplicar la preferencia guardada del usuario
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    $('body').toggleClass('dark-mode', savedTheme === 'dark');
    if (savedTheme === 'light') {
        theme.removeClass('icon-sun-inv').addClass('icon-moon');
      }
  }
  // Script para ocultar la ventana emergente al aceptar las cookies
  //var cookieStatus = localStorage.setItem('cookieStatus','true');
  if(!localStorage.getItem('cookieStatus')){
    $('.contenedor-cookie').html('<div class="pantalla"></div>'+
      '<div class="cookie-popup">'+
          'Este sitio web utiliza cookies. Al continuar navegando, aceptas nuestra política de cookies.'+
          '<label class="btn-links" id="cookie-btn" >Aceptar</label>'+
      '</div>');
  }
  
  $('#cookie-btn').click(function(){
    // Aquí puedes guardar la preferencia del usuario en una cookie o localStorage
    localStorage.setItem('cookieStatus','true');
    $('.contenedor-cookie').html('');
  });

});