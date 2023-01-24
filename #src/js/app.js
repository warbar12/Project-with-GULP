const navBar = document.querySelector('.header-nav-item');
const links = document.querySelectorAll('.header-nav-item-link');
const hamMenu = document.querySelector('.ham-menu');
let divice = window.innerWidth > 769 ? "desktop" : 'mobile'

window.addEventListener("resize", () => {
  divice = window.innerWidth > 769 ? "desktop" : 'mobile';
  links.forEach(item => item.style.display = divice === 'mobile' ? "none" : "block");
})

hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle("active");
  document.querySelector(".ham-menu-link").classList.toggle('active')
})