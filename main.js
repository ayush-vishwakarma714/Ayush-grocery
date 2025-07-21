let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');

};


let shoppingCart = document.querySelector('.shopping-cart-a');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};


let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
};

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
 navbar.classList.toggle('active');
 searchForm.classList.remove('active');
 shoppingCart.classList.remove('active');
 loginForm.classList.remove('active');
};


window.onscroll = () => 
  {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 };
 
