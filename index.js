// ANIMACIÓN TYPED.JS (para el texto de title)
typedDots = new Typed('#madeWith', {
    strings:["PASIÓN", "CALIDAD", "The Sweet Bookstore"],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay:2000,
    loop: true,
    showCursor: true
});

// ANIMACIÓN VANILLATILT (para la clase card)
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 1000,
    "max-glare": 0.7,
});



// CAMBIAR PRODUCTOS DESTACADOS

//contador
var counter = 0;

//LISTA DE FONDOS
var backgrounds = [
    'url(img/tartas.jpg)',
    'url(img/apto_diabéticos.jpg)',
    'url(img/postres_variados.jpg)',
    'url(img/panes.jpg)'
  ];

//FUNCIÓN PARA CAMBIAR DE PRODUCTO
function changeBox() {
  var boxes = document.querySelectorAll('.box');
  var backg = document.getElementById("sec2");
  //Recorre todos los elementos de clase "box"
  boxes.forEach(function(box, index) {
    //Comprueba si el elemento anterior es igual al número del contador para, si es true, ocultarlo
    if (index === counter) {
      box.classList.remove('visible');
      box.classList.add('hidden');
    }
    //Comprueba si el elemento es igual al número del contador para, si es true, hacerlo visible y cambiar
    //al siguiente fondo
    else if (index === (counter + 1) % boxes.length) {
      box.classList.remove('hidden');
      box.classList.add('visible');
      backg.style.backgroundImage = backgrounds[index];
    }
  });
  
  //Suma 1 al contador teniendo en cuenta la cantidad de elementos de la clase "box"
  counter = (counter + 1) % boxes.length;
}


//MENU

document.getElementById('menuDPL').addEventListener('click', function(){
  
  let menu = document.getElementById('menu-desplegable'),
      button = this;
  // menu.style.transform = "translateX(-100%)";
  menu.classList.toggle('animar');
  button.classList.toggle('menu-active');
  // contenedor.classList.toggle('blur');
  
});