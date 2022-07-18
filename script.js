/** @format */

const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelectorAll('.nav-item');

const openModal = () => {
  logo.classList.toggle('active');
  navMenu.classList.remove('desktop');
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

const closeModal = () => {
  navMenu.classList.add('desktop');
  logo.classList.remove('active');
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  openModal();
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    closeModal();
  });
});
