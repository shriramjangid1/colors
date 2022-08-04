const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')
const navLogo = document.querySelector('#navbarLogo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu)


const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#homePage')
    const aboutMenu = document.querySelector('#about')
    const serviceMenu = document.querySelector('#servicepage')
    let scrollPos = window.scrollY;
    console.log(scrollPos)

    if(window.innerWidth > 1000 && scrollPos < 590){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }else if(window.innerWidth > 1000 && scrollPos < 937){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return;
    }else if(window.innerWidth > 1000 && scrollPos > 900){
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }

    if ((elem && window.innerWIdth < 1000 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
      }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)
