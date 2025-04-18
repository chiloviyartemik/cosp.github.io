/*let title = document.querySelector("h1")

let name1 = "uga_buga"

console.log(name1)

buttonClass.style.fontSize = "50px"

buttonClass.style.color = "green"

let h1 = document.querySelector(".h")

button.addEventListener("click", function(){
    h1.style.color = "blue"
})
*/
let burger = document.querySelector(".burger")

let nav = document.querySelector("nav")

burger.addEventListener('click',function(){
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})

$('.carusel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="images/Arrow_left.svg">',
    nextArrow: '<img src="images/Arrow_right.svg">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });