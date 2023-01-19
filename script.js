//Sidebar section

const menuCloseBtn = document.querySelector(".x-icon");
const menuOpenBtn = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".navbar-3-1");

menuOpenBtn.addEventListener('click', () => {
    navLinks.style.right = "0%";
});

menuCloseBtn.addEventListener('click', () => {
    navLinks.style.right = "-100%";
});

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

// const eduMenuItem = document.querySelector("#edu-menu-item");
// const eduSubMenu = document.querySelector("#edu-sub-menu");

// const bookMenuItem = document.querySelector("#book-menu-item");
// const bookSubMenu = document.querySelector("#book-sub-menu");

// const designMenuItem = document.querySelector("#design-menu-item");
// const designSubMenu = document.querySelector("#design-sub-menu");

// const productMenuItem = document.querySelector("#product-menu-item");
// const productSubMenu = document.querySelector("#product-sub-menu");

// const marketMenuItem = document.querySelector("#market-menu-item");
// const marketSubMenu = document.querySelector("#market-sub-menu");

// const chevronDown = document.querySelectorAll(".bx-chevron-down")

// eduMenuItem.addEventListener('click', () => {
//     eduSubMenu.classList.toggle("show1");
// });

// bookMenuItem.addEventListener('click', () => {
//     bookSubMenu.classList.toggle("show1");
// });

// designMenuItem.addEventListener('click', () => {
//     designSubMenu.classList.toggle("show1");
// });

// productMenuItem.addEventListener('click', () => {
//     productSubMenu.classList.toggle("show1");
// });

// marketMenuItem.addEventListener('click', () => {
//     marketSubMenu.classList.toggle("show1");
//     chevronDown.style.transform = 'rotate(180deg)';
// });

// Acordian dropdown menu section

let orgMenus = document.querySelectorAll('.menu-item');
let subMenu = document.querySelectorAll('.sub-menu');

orgMenus.forEach(orgMenu => {
    orgMenu.addEventListener('click', () => {
        if (orgMenu.classList.contains('show1')) {
            orgMenu.classList.remove('show1');
        }
        else {
            orgMenus.forEach(orgMenuList => {
                orgMenuList.classList.remove('show1');
            })
            orgMenu.classList.toggle('show1')
        }
    });
});


 