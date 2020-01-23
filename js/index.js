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
    event.target.style.backgroundColor = '#FFEBCD';
})

body.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = '';
})


// Propagation
body.addEventListener('click', () => {
    body.style.backgroundColor = 'lightgray';
    console.log('end');
})

const sectionPicks = document.querySelector('.content-pick');
sectionPicks.addEventListener('click', (event) => {
    sectionPicks.style.backgroundColor = 'purple';
    event.stopPropagation();
    console.log('second middle');
})

const destination = document.querySelector('.destination');
destination.addEventListener('click', () => {
    destination.style.backgroundColor = 'lightblue';
    console.log('first middle');
})

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    button.style.backgroundColor = 'green';
    console.log('start');
})

// Change background color when mouse is down and up
const footer = document.querySelector('footer');
footer.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = '#C0C0C0';
})

footer.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = '';
})