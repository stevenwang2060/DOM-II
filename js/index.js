// Your code goes here
let username = '';

// Prompts for a name
window.addEventListener('load', (event) => {
    username = prompt("Welcome to Fun Bus! What's your name?");
    if (username == null || username == "") {
        txt = "No name was entered! Your new name is now Stranger.";
        username = 'Stranger';
    } else {
        txt = "Thank you!";
    }
    alert(txt);
})

// Selects logo and nav links
const logo = document.querySelector('.logo-heading');
const navs = document.querySelectorAll('.nav-link');

// Alert for clicking on each link
navs[0].addEventListener('click', (event) => {
    txt = `This link doesn't currently go anywhere!`;
    alert(txt);

    event.preventDefault();
})

navs[1].addEventListener('click', (event) => {
    txt = `Hey, ${username}, our About Us page is currently under construction.`
    alert(txt);

    event.preventDefault();
})

navs[2].addEventListener('click', (event) => {
    txt = `Sorry, ${username}, I'm sure you're excited to read about our travels but our blog page is not ready yet!`
    alert(txt);

    event.preventDefault();
})

navs[3].addEventListener('click', (event) => {
    txt = `Hi, ${username}! The contact page will be updated soon!`;
    alert(txt);

    event.preventDefault();
})

// Header selector
const header = document.querySelector('.main-navigation');

// Changes header, nav, and logo styles when mouse is over header
header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'gold';
    logo.style.color = 'black';
    header.style.borderBottom = '2px dashed darkslategray';
    header.style.transition = '1s';
    navs.forEach((link) => {
        link.style.fontWeight = 'bold';
        link.style.transitionDelay = '0s';
    })
    logo.style.fontWeight = 'bold';
    logo.style.transitionDelay = '0s';
})

// Changes header, nav, and logo styles when mouse is leaves header
header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = 'lightyellow';
    header.style.borderBottom = '2px dashed #C0C0C0';
    header.style.transition = '1s';
    navs.forEach((link) => {
        link.style.fontWeight = 'normal';
        link.style.transitionDelay = '0.33s';
    })
    logo.style.fontWeight = 'normal';
    logo.style.transitionDelay = '0.33s';
})

// Create tiny bus picture

let babyBus = document.createElement('img');

babyBus.setAttribute('class', 'tiny-bus-img');
babyBus.setAttribute('src', 'img/tinybus.gif');
babyBus.style.width = '5%';
babyBus.style.margin = '-50% 10px 1%';


header.appendChild(babyBus);

// Make tiny bus picture move across the screen as you scroll up and down
let accumulate = 0;
let screenWidth = screen.width + 475;

function drive (event) {
    if (accumulate > screenWidth) {
        babyBus.style.transform = `translateX(${accumulate}%)`;
        
    } else {
        accumulate = accumulate + 75;
        babyBus.style.transform =  `translateX(${accumulate}%)`;
    }
}

window.addEventListener('wheel', drive);

// Create number input
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let btn4 = document.createElement('button');

btn1.textContent = '1️⃣'
btn1.style.color = 'white';
btn1.style.backgroundColor = 'black';
btn1.style.border = '3px outset grey';
btn1.style.fontFamily = "'Indie Flower', cursive";
btn1.style.fontSize = '2rem';
btn1.style.padding = '5px';
btn1.style.width = '50px';
btn1.style.position = 'fixed';
btn1.style.bottom = '0';
btn1.style.textAlign = 'center';

btn2.textContent = '2️⃣'
btn2.style.color = 'white';
btn2.style.backgroundColor = 'black';
btn2.style.border = '3px outset grey';
btn2.style.fontFamily = "'Indie Flower', cursive";
btn2.style.fontSize = '2rem';
btn2.style.padding = '5px';
btn2.style.width = '50px';
btn2.style.position = 'fixed';
btn2.style.bottom = '0';
btn2.style.left = '49px';
btn2.style.textAlign = 'center';

btn3.textContent = '3️⃣'
btn3.style.color = 'white';
btn3.style.backgroundColor = 'black';
btn3.style.border = '3px outset grey';
btn3.style.fontFamily = "'Indie Flower', cursive";
btn3.style.fontSize = '2rem';
btn3.style.padding = '5px';
btn3.style.width = '50px';
btn3.style.position = 'fixed';
btn3.style.bottom = '0';
btn3.style.left = '98px';
btn3.style.textAlign = 'center';

btn4.textContent = '🔃'
btn4.style.color = 'white';
btn4.style.backgroundColor = 'black';
btn4.style.border = '3px outset grey';
btn4.style.fontFamily = "'Indie Flower', cursive";
btn4.style.fontSize = '2rem';
btn4.style.padding = '5px';
btn4.style.width = '50px';
btn4.style.position = 'fixed';
btn4.style.bottom = '0';
btn4.style.left = '147px';
btn4.style.textAlign = 'center';

let inputDivParent = document.querySelector('html');

inputDivParent.appendChild(btn1);
inputDivParent.appendChild(btn2);
inputDivParent.appendChild(btn3);
inputDivParent.appendChild(btn4);

// Coloring
let body = document.querySelector('body');
let pictures = document.querySelectorAll('img');
let bottomBtns = document.querySelectorAll('.btn');

btn1.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'darkred';
    body.style.color = 'khaki';
    pictures[1].style.border = '5px solid khaki';
    pictures[2].style.border = '5px solid khaki';
    pictures[3].style.border = '5px solid khaki';
    pictures[4].style.border = '5px solid khaki';
})

btn2.addEventListener('dblclick', () => {
    body.style.backgroundImage = "url('https://emoji.slack-edge.com/T4JUEB3ME/marioquestion/b6ce9c49a0ca51de.gif')";
    body.style.backgroundSize = 'cover';
    body.style.color = 'black';
    body.style.fontWeight = 'bold';
    pictures[1].setAttribute('src', 'https://media.giphy.com/media/ue3OPWawMJrmE/giphy.gif');
    pictures[1].style.width = '100%';
    pictures[1].style.border = '5px solid black';
    pictures[2].setAttribute('src', 'https://media.giphy.com/media/X6hiFJjvTDAAw/giphy.gif');
    pictures[2].style.border = '5px solid black';
    pictures[3].setAttribute('src', 'https://i.pinimg.com/originals/93/39/06/933906b4ff35d05aafa76e9d5e22e23e.gif');
    pictures[3].style.border = '5px solid black';
    pictures[4].setAttribute('src', 'https://media.giphy.com/media/WWYSFIZo4fsLC/giphy.gif');
    pictures[4].style.border = '5px solid black';
    bottomBtns[0].style.backgroundImage = "url('https://media.giphy.com/media/3bc8pP1rVdfgN1uoMV/giphy.gif')";
    bottomBtns[0].style.color = 'black';
    bottomBtns[0].style.fontWeight = 'bold';
    bottomBtns[1].style.backgroundImage = "url('https://media.giphy.com/media/OTYiFlofk3EaI/giphy.gif')";
    bottomBtns[1].style.color = 'black';
    bottomBtns[1].style.fontWeight = 'bold';
    bottomBtns[2].style.backgroundImage = "url('https://media.giphy.com/media/3ov9jQqeeHygU7zXrO/giphy.gif/giphy.gif')";
    bottomBtns[2].style.color = 'white';
    bottomBtns[2].style.fontWeight = 'bold';
})

btn3.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'lime';
    body.style.color = 'navy';
    pictures[1].style.border = '5px solid navy';
    pictures[2].style.border = '5px solid navy';
    pictures[3].style.border = '5px solid navy';
    pictures[4].style.border = '5px solid navy';
})

btn4.addEventListener('dblclick', () => {
    location.reload();
})


pictures.forEach(pic => {
    pic.addEventListener('mousedown', () => {
        pic.style.transform = 'scale(1.2)';
        pic.style.borderRadius = '50px';
    })

    pic.addEventListener('mouseup', () => {
        pic.style.transform = 'scale(1)';
    })
})

bottomBtns.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(1.2)';
    })

    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    })
})

let rightClick = document.createElement('div');

rightClick.textContent = "Right-click me!"
rightClick.style.width = '20%';
rightClick.style.margin = '0 auto';
rightClick.style.textAlign = 'center';
rightClick.style.backgroundColor = 'black';
rightClick.style.color = 'lightblue';
rightClick.style.lineHeight = '2';
rightClick.style.borderRadius = '40%';
rightClick.style.fontSize = '2rem';

body.prepend(rightClick);

rightClick.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert('Hello! Right-clicking seems to work here!');
})

window.addEventListener('resize', () => {
    babyBus.style.display = 'none';
    alert(`Hey, ${username}! You made our tiny bus disappear!`);
})

let lastSection = document.querySelector('.content-pick');
let dest = document.querySelectorAll('.destination');

dest.forEach(box => {
    box.addEventListener('mousedown', (event) => {
        box.style.backgroundColor = 'teal';
        event.stopPropagation()
    })
    
    box.addEventListener('mouseup', (event) => {
        box.style.backgroundColor = 'rgba(255,182,193,0)';
        event.stopPropagation()
    })
})

lastSection.addEventListener('mousedown', () => {
    lastSection.style.backgroundColor = 'gold'; 
})

lastSection.addEventListener('mouseup', () => {
    lastSection.style.backgroundColor = 'rgba(255,182,193,0)'; 
})



bottomBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        dest.forEach(box => {
            box.style.backgroundColor = 'rgba(255,182,193,0.5)';
        })
    })

    btn.addEventListener('mouseout', () => {
        dest.forEach(box => {
            box.style.backgroundColor = 'rgba(255,182,193,0)';
        })
    })
})

bottomBtns.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(1.2)';
    })

    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    })
})