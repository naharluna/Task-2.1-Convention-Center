document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".navbar__mobile-menu-toggle");
const menu = document.querySelector(".navbar__mobile-menu-items");

toggle.addEventListener("click", function(){

menu.classList.toggle("active");

});

});

// Change Navbar  background on scroll
window.addEventListener('scroll',function(){
    // console.log(window.scrollY);

    const navbar = document.querySelector('.navbar'); 


    if (window.scrollY > 0){
        navbar.classList.add('navbar-scroll')
    }
   else{
        navbar.classList.remove('navbar-scroll')
    }
});

// Hero Slider

const slides = document.querySelectorAll(".hero__slide");
const dots = document.querySelectorAll(".hero__dot");
const nextBtn = document.querySelector(".hero__arrow--right");
const prevBtn = document.querySelector(".hero__arrow--left");

let index = 0;

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");

}

nextBtn.addEventListener("click", () => {

index++;

if(index >= slides.length){
    index = 0;
}

showSlide(index);

});

prevBtn.addEventListener("click", () => {

index--;

if(index < 0){
    index = slides.length - 1;
}

showSlide(index);

});

/* Dot click */

dots.forEach((dot, i) => {

dot.addEventListener("click", () => {

index = i;
    showSlide(index);
});

});

/* Auto slide */

setInterval(() => {

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}, 5000);

window.closePopup = function () {
  document.getElementById("offerpopup").style.display = "none";
};


// FAQ 
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq__question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });
});