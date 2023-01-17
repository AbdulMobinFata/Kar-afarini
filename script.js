//Sidebar section

const menuCloseBtn = document.querySelector(".x-icon");
const menuOpenBtn = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".navbar-3-1");

// menuOpenBtn.addEventListener('click', () => {
//     navLinks.style.right = "0%";
// });

// menuCloseBtn.addEventListener('click', () => {
//     navLinks.style.right = "-100%";
// });

// Slider section

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * 33 + '%)'; 
        indicator.classList.add('selected');
    });
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+(sectionIndex) * 33 + '%)';
});

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+(sectionIndex) * 33 + '%)';
});

// Submenu of sidebar section

const navLink = document.querySelector(".nav-links");

const menuItem = document.querySelector(".menu-item a");

const eduSubMenu = document.querySelector(".menu-item .edu-sub-menu");
let bookSubMenu = document.querySelector(".book-sub-menu");
let designSubMenu = document.querySelector(".design-sub-menu");
let productSubMenu = document.querySelector(".product-sub-menu");
let marketSubMenu = document.querySelector(".market-sub-menu");

eduSubMenu.addEventListener('click', () => {
    navLink.classList.toggle("show1"); 
});