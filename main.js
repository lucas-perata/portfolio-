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

// links navbar

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
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span"); 
let root = document.querySelector(":root"); 
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


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

colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    
    let primaryHue; 

    if(color.classList.contains("color-1")){
      primaryHue = 252
    }
    else if(color.classList.contains("color-2")){
      primaryHue = 52
    }
    else if(color.classList.contains("color-3")){
      primaryHue = 352
    }
    else if(color.classList.contains("color-4")){
      primaryHue = 152
    }
    else if(color.classList.contains("color-5")){
      primaryHue = 202
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  })
})

// Elimina la clase active de los botones

const removeColorSelector = () => {
  colorPalette.forEach(button => {
  button.classList.remove("active")
  })
}

colorPalette.forEach(button =>{
  button.addEventListener("click",()=>{
    removeColorSelector()
    button.classList.toggle("active")
  })
})

// TEMAS MOBILE 

const themeMobile = document.querySelector("#theme-button-mobile"); 



const openThemeModalMobile = () => {
  themeModal.style.display = "grid"; 
}

themeMobile.addEventListener("click", openThemeModal)

// FONDOS

let lightColorLightness; 
let whiteColorLightness; 
let darkColorLightness; 

// Cambio BACKGROUND 

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness)
  root.style.setProperty("--white-color-lightness", whiteColorLightness)
  root.style.setProperty("--dark-color-lightness", darkColorLightness)
}

Bg1.addEventListener("click", () => {
  
  Bg1.classList.add("active")
  Bg2.classList.remove("active")
  Bg3.classList.remove("active")
  window.location.reload()
})

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%"
  whiteColorLightness = "20%"
  lightColorLightness = "15%"
  Bg2.classList.add("active")
  Bg1.classList.remove("active")
  Bg3.classList.remove("active")
  changeBG()
}) 

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%"
  whiteColorLightness = "20%"
  lightColorLightness = "0%"
  Bg3.classList.add("active")
  Bg2.classList.remove("active")
  Bg1.classList.remove("active")
  changeBG()
})

// Porfolio filtros 

const filterContainer = document.querySelector(".portfolio-filter-inner"), 
      filterBtns = filterContainer.children, 
      totalFilterBtn = filterBtns.length, 
      portfolioItems = document.querySelectorAll(".portfolio-item"), 
      totalPortfolioItem = portfolioItems.length; 

      for(let i=0; i<totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function(){
          filterContainer.querySelector(".active").classList.remove("active")
          this.classList.add("active")

          const filterValue = this.getAttribute("data-filter"); 
          for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue == portfolioItems[k].getAttribute("data-category")) {
              portfolioItems[k].classList.remove("hide")
              portfolioItems[k].classList.add("show")
            }
            else if (filterValue === "all"){
              portfolioItems[k].classList.remove("hide")
              portfolioItems[k].classList.add("show")
            }
            else {
              portfolioItems[k].classList.add("hide")
              portfolioItems[k].classList.remove("show")
            }
          }
        })
      }

