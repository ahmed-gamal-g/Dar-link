// start NavBar

let Nav = document.querySelector(".Nav")
let navLink = document.querySelector(".lnk")
let navLink2 = document.querySelector(".lnk2")
let navLink3 = document.querySelector(".lnk3")
let navLink4 = document.querySelector(".lnk4")
let LogoNav = document.querySelector(".Logo-nav")


window.onscroll = function () {
  if (this.scrollY > 10) {
    Nav.style.cssText = `background-color:white;
     border-radius: 0 0 15px 15px;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.425);
     `
    navLink.style.cssText = "color: black !important;"
    navLink2.style.cssText = "color: black !important;"
    navLink3.style.cssText = "color: black !important;"
    navLink4.style.cssText = "color: black !important;"
    LogoNav.style.cssText = "color: black !important;"
  } else {
    Nav.style.cssText = "background-color:none;"
    navLink.style.cssText = "color: white !important;"
    navLink2.style.cssText = "color: white !important;"
    navLink3.style.cssText = "color: white !important;"
    navLink4.style.cssText = "color: white !important;"
    LogoNav.style.cssText = "color: white !important;"
  }
}

// end NavBar