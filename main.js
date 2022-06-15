// Oculta la barra de navegación durante el scroll

window.onscroll = function(e) { 

  if (window.innerWidth < 768) {
    header.classList.remove("desktop") 
   }
   else {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.desktop');
    let height = -header.clientHeight;
    header.style.transition = 'transform 0.1s';

    (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
      ? header.style.transform = 'translateY(0px)'
      : header.style.transform = 'translateY(' + height + 'px)'

    this.lastScroll = scrollY;
    this.loaded = true;}
}

console.log(window.innerWidth)



// Nav 
 
const navMenu = document.getElementById("nav-menu"), 
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// SHOW MENU 

if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// HIDE MENU 

if(navClose){
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

// ELIMINAR MENU MOBILE 

const navLinks = document.querySelectorAll(".nav-link")

function linkAction(){
  
  navMenu.classList.remove("show-menu")
}

navLinks.forEach (l => l.addEventListener("click", linkAction))