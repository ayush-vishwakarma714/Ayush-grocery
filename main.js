let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};


let shoppingCart = document.querySelector('.shopping-cart-a');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
};


let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
};
