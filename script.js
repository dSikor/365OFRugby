$(document).ready(function() {

  $('.menu-elements ul a:last').css('border-bottom', 'none');
  
const menuBTN = document.querySelector('.section-nav-tit__btn');
const menuElements = document.querySelector('.menu-elements');

let menuOpen = false;
menuBTN.addEventListener('click',()=>{
  if(!menuOpen){
    menuBTN.classList.add('open');
    menuElements.classList.add('show');
    menuOpen = true;
  }else{
    menuBTN.classList.remove('open');
    menuElements.classList.remove('show');
    menuOpen = false;
  }
});

    window.onresize = function(event) {
    menuBTN.classList.remove('open');
    menuElements.classList.remove('show');
    menuOpen = false;
    };



//dasdsadasdasdsad


    // $('.icon-one').click(function() {
    //   $('.icon-one').toggleClass('active-one');
    // });
  })