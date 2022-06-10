window.onscroll = function(e) { 
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('header');
    let height = -header.clientHeight;
    header.style.transition = 'transform 0.1s';

    (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
      ? header.style.transform = 'translateY(0px)'
      : header.style.transform = 'translateY(' + height + 'px)'

    this.lastScroll = scrollY;
    this.loaded = true;
}