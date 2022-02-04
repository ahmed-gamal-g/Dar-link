
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



let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let txtone = document.querySelector('.text1');
let txttwo = document.querySelector('.text2');
let txtthree = document.querySelector('.text3');
let txtfour = document.querySelector('.text4');
let slider1 = document.querySelector('.slider1');
let slider2 = document.querySelector('.slider2');
let slider3 = document.querySelector('.slider3');
let slider4 = document.querySelector('.slider4');


 one.onclick = function(){
    slider1.style.cssText= `
    color: #d2bf8b;  
    border:1px solid #d2bf8b !important;`
    slider2.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider3.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider4.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    txtone.style.display = 'block';
    txttwo.style.display = 'none';
    txtthree.style.display = 'none';
    txtfour.style.display = 'none';
}
two.onclick = function(){
    slider1.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider2.style.cssText= `
    color: #d2bf8b;  
    border:1px solid #d2bf8b !important;`
    slider3.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider4.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    txtone.style.display = 'none';
    txttwo.style.display = 'block';
    txtthree.style.display = 'none';
    txtfour.style.display = 'none';
}
three.onclick = function(){
    slider1.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider2.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider3.style.cssText= `
    color: #d2bf8b;  
    border:1px solid #d2bf8b !important;`
    slider4.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    txtone.style.display = 'none';
    txttwo.style.display = 'none';
    txtthree.style.display = 'block';
    txtfour.style.display = 'none';
}
four.onclick = function(){
    slider1.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider2.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider3.style.cssText= `
    color: #427c93;  
    border:1px solid transparent`
    slider4.style.cssText= `
    color: #d2bf8b;  
    border:1px solid #d2bf8b !important;`
    txtone.style.display = 'none';
    txttwo.style.display = 'none';
    txtthree.style.display = 'none';
    txtfour.style.display = 'block';
}
