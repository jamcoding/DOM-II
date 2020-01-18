// Your code goes here
// Change header logo font color
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'red';
})

logo.addEventListener('mouseleave', (event) => {
    event.target.style.color = '';
})

// Hide image on right click
const images = document.querySelectorAll('img');
images[0].addEventListener('contextmenu', (event) => {
    event.target.style.display = 'none';
})

// Increase image on double click and change back on single click
images[1].addEventListener('dblclick', (event) => {
    event.target.style.transform = 'scale(1.2)';
    event.style.transition = "all 0.3s";
})

images[1].addEventListener('click', (event) => {
    event.target.style.transform = 'scale(1)';
    event.style.transition = "all 0.3s";
})

// Body background color white on load
const body = document.querySelector('body');
body.addEventListener('onload', (event) => {
    event.target.style.backgroundColor = 'white';
})

// Change background color on key down and key up
body.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = '#C0C0C0';
})

body.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = '#FFEBCD';
})

// Change paragraph color when selecting
const paragraph = document.querySelectorAll('p');
paragraph.addEventListener('select', (event) => {
    event.target.style.color = 'green';
})