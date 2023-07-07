// Script para mantener la animación en la campana
// al quitar el ratón de encima
  
var mantenerCampana = document.querySelectorAll('.Campana');

mantenerCampana.forEach(function(item) {
  var animationClass = 'tilt-shaking';
  var isAnimating = false;

  item.addEventListener('mouseover', function() {
    if (!isAnimating) {
      item.classList.add(animationClass);
      isAnimating = true;

      item.addEventListener('animationend', animationEndHandler);
    }
  });

  function animationEndHandler() {
    item.classList.remove(animationClass);
    isAnimating = false;

    item.removeEventListener('animationend', animationEndHandler);
  }
});

  //menu hamburguesa funcion para que se abra
  document.getElementById("funcionCollapse").onclick = function() {
    // Lógica de la función
    var element = document.getElementById("opciones");
    if(element.classList.contains("show"))
    {
      element.classList.remove("show");
    }
    else{
      element.classList.add("show");
    }
  };


//Animación para el texto de Libro Del Mes

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.TextoConAnimacion');
  
      if (entry.isIntersecting) {
        square.classList.add('AnimacionTexto');
        return; // Añade clase de animación
      }
  
      // Elimina la clase de animación
      square.classList.remove('AnimacionTexto');
    });
  });
  
  observer.observe(document.querySelector('.SeccionLibroMes'));




