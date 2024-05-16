// Toggle navbar
const toggleNavbar = document.querySelector('.navbar_toggle_icon a');
toggleNavbar.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});
