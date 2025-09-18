 const header = document.querySelector("header")
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY>130);
})
let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  menulist.classList.toggle('open');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  menulist.classList.remove('open');
}

var typed = new Typed(".input",{
  strings:["Web Designer.","Dark Knight.","Web Developer."],
  typeSpeed: 120,
  backSpeed: 70,
  loop: true
})

const img1 = document.getElementById("myImage");
    function changeImage(newSrc) {
      img1.style.transform = 'scale(0.9)';
      setTimeout(() => {
        img1.src = newSrc;
        img1.style.transform = 'scale(1)';
      }, 500);
    }

    img1.addEventListener("mousedown", function () {
      changeImage("pngfind.com-pokemon-ball-png-82928.png");
    });

    img1.addEventListener("mouseup", function () {
      changeImage("pngfind.com-pokeball-png-1832287.png");
    });

    img1.addEventListener("mouseout", function () {
      changeImage("pngfind.com-pokeball-png-1832287.png");
    });