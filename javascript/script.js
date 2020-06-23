//element selector
const toggleBtn = document.querySelector(".header-content-navBtn");
const headerNav = document.querySelector(".header-nav");

window.onload = function() {
    this.loadMenu();
};

//functions 

function loadMenu() {
    toggleBtn.addEventListener('click', () => {
        headerNav.classList.toggle("show-navBtn");
        setTimeout(() => {
            headerNav.classList.remove("show-navBtn");
        }, 5000);
    });
};