const hambargerMenuBtn = document.querySelector('.hambarger-menu');
const closeBtn = document.querySelector('.hambarger-menu-close');

const navContainer = document.querySelector('.nav-container');
const overlay = document.querySelector('.body-overlay');

hambargerMenuBtn.addEventListener('click', ()=>{
    navContainer.classList.remove('hide');
    overlay.classList.add('overlay');
})
closeBtn.addEventListener('click', ()=>{
    navContainer.classList.add('hide');
    overlay.classList.remove('overlay');
})
overlay.addEventListener('click',()=>{
    navContainer.classList.add('hide');
    overlay.classList.remove('overlay');
})