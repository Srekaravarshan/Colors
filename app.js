const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const home = document.querySelector("#home_page")
    const about = document.querySelector("#about_page")
    const services = document.querySelector("#service_page")
    const signUp = document.querySelector("#signup_page")

    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600) {
        home.classList.add('highlight')
        about.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        about.classList.add('highlight')
        home.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        services.classList.add('highlight')
        about.classList.remove('highlight')
        home.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

window.addEventListener('click', highlightMenu)
window.addEventListener('scroll', highlightMenu)

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)