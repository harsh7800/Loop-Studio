const menuBtn = document.getElementById('menubtn');
const navbar = document.getElementById("navbar-container");
const navBtn = document.getElementById('navbtn-container')

menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('menu');
      navBtn.classList.toggle('show');
});