const btnLeft = document.querySelector('.btn-left')
//const btn-left = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

const right = document.querySelector('.right')
const container = document.querySelector('.container')
const split = document.querySelectorAll('.split')

btnLeft.addEventListener('click', () => container.classList.add('hover-left'));
btnLeft.addEventListener('mouseleave', () => container.classList.remove('hover-left'));


btnRight.addEventListener('click', () => container.classList.add('hover-right'));
btnRight.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
