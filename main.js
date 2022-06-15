// Oculta la barra de navegación durante el scroll

window.onscroll = function(e) { 

  
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.desktop');
    let height = -header.clientHeight;
    header.style.transition = 'transform 0.1s';

    (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
      ? header.style.transform = 'translateY(0px)'
      : header.style.transform = 'translateY(' + height + 'px)'

    this.lastScroll = scrollY;
    this.loaded = true;
}

console.log(window.innerWidth)



// Nav 
 
const navMenu = document.getElementById("nav-mobile"), 
      navToggle = document.getElementById("nav-toggle-mobile"),
      navClose = document.getElementById("nav-close-mobile")

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

const navLinks = document.querySelectorAll(".nav-item a")

function linkAction(){
  navMenu.classList.remove("show-menu")
}

const removeLinkSelector = () => {
  navLinks.forEach(link => {
  link.classList.remove("active-link")
  })
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    removeLinkSelector()
    link.classList.toggle("active-link")
  })
})


// TEMAS 

const theme = document.querySelector("#theme-button"); 
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span")

const openThemeModal = () => {
  themeModal.style.display = "grid"; 
}

theme.addEventListener("click", openThemeModal)

const closeThemeModal = (e) => {
  if(e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none"
  }
}

themeModal.addEventListener("click", closeThemeModal)

// Fuentes 

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
  size.classList.remove("active")
  })
}

fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    let fontSize;
    removeSizeSelector()
    size.classList.toggle("active") 
    if(size.classList.contains("font-size-1")) {
      fontSize = "12px"
    }
    else if(size.classList.contains("font-size-2")) {
      fontSize = "14px"
    }
    else if(size.classList.contains("font-size-3")) {
      fontSize = "16px"
    }
    else if(size.classList.contains("font-size-4")) {
      fontSize = "18px"
    }

    document.querySelector("html").style.fontSize = fontSize;

  })
} )


