// acceder al boton hamburguesa desde javascript
var menuToggle = document.querySelector(".menu-toggle");

// acceder al menú (nav-menú) desde javascript
var navMenu = document.querySelector(".nav-menu");

// captura el evento click del botón hamburguesa para alternar la visutalización del nemú
menuToggle.onclick = () =>{
    navMenu.classList.toggle("show")
}