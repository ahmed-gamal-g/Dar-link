// start NavBar

let Nav = document.querySelector(".Nav")
let navLink = document.querySelector(".lnk")
let navLink2 = document.querySelector(".lnk2")
let navLink3 = document.querySelector(".lnk3")
let navLink4 = document.querySelector(".lnk4")
let LogoNav = document.querySelector(".Logo-nav")


window.onscroll = function () {
  if (this.scrollY > 100) {
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



// start wiber

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
              // when window width is >= 320px
              1: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              
              820: {
                slidesPerView: 4,
                spaceBetween: 40
              }
        }
     
  });

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },  slidesPerView: 1,
//     // Responsive breakpoints
//     breakpoints: {
//       // when window width is >= 320px
//       1: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//         slidesPerView: 2,
//         spaceBetween: 30
//       },
//       // when window width is >= 640px
//       640: {
//         slidesPerView: 3,
//         spaceBetween: 40
//       }
//     }
//   });

// end wiber







