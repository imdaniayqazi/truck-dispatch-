// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter, 20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// ======================
// DARK MODE
// ======================

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

themeBtn.innerHTML = "☀️";

localStorage.setItem("theme","dark");

}else{

themeBtn.innerHTML = "🌙";

localStorage.setItem("theme","light");

}

});

// Load Saved Theme

window.addEventListener("load", () => {

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark-mode");

themeBtn.innerHTML = "☀️";

}

});

// ======================
// NAVBAR SHADOW ON SCROLL
// ======================

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow =
"none";

}

});

// ======================
// SMOOTH REVEAL EFFECT
// ======================

const revealElements =
document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

revealElements.forEach(el => {

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

});

// Initial State

revealElements.forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = ".6s";

});

// ======================
// FAKE TRUCK TRACKING
// ======================

const progressBar =
document.querySelector(".progress-bar");

if(progressBar){

let width = 70;

setInterval(() => {

if(width < 100){

width++;

progressBar.style.width =
width + "%";

progressBar.innerText =
width + "%";

}

}, 3000);

}