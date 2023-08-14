// HEADER SCROLL

const header = document.querySelector(".header");

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add("header__bg");
    } else {
        header.classList.remove("header__bg");
    }
};

// ANCHORS

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener('click', (e) => {
        e.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 20,
            behavior: "smooth"
        });
    });
});

// ---------BURGER MENU----------

const burgerBtn = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerClose = document.querySelector('.header__close');
const navLinks = document.querySelectorAll('.header__list-link');

burgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav-active');
});

headerClose.addEventListener('click', () => {
    headerNav.classList.remove('header__nav-active');
});

if (window.innerWidth < 1030) {
    navLinks.forEach(item => item.addEventListener('click', () => {
        headerNav.classList.remove('header__nav-active');
    }));
};

// ---------SELECT DROPDOWN----------

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {

    const dropdownBtn = dropDownWrapper.querySelector('.dropdown__btn');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__btn-list');
    const dropDownItem = dropDownList.querySelectorAll('.dropdown__btn-item');

dropdownBtn.addEventListener('click', () => {
    dropDownList.classList.toggle('dropdown__btn-list-active');
    dropdownBtn.classList.add('dropdown__btn-active');
});

dropDownItem.forEach(item => item.addEventListener('click', (e) => {
    e.stopPropagation();
    dropDownList.classList.remove('dropdown__btn-list-active');
    dropdownBtn.innerText = item.innerText;
    dropdownBtn.focus();
}));

document.addEventListener("click", (e) => {
    if (e.target !== dropdownBtn) {
        dropDownList.classList.remove('dropdown__btn-list-active');
        dropdownBtn.classList.remove('dropdown__btn-active');
    }
});
});

// ---------DATA----------

new AirDatepicker('.intro__date', {
    range: true,
    multipleDatesSeparator: ' - '
});

// SWIPER

new Swiper (".swiper", {
    loop: true,
    mousewheel: {
        sensitivity: 1,
    },
    autoplay: {
        delay: 1000,
    },
});

// ---------GALLERY----------

const imageItem = document.querySelectorAll('.impression__image');
const photoGallery = document.querySelector('.impression__photo-gallery');
const photoImg = document.querySelector('.impression__photo-gallery img');
const photoBtnClose = document.querySelector('.impression__gallery-btn');

imageItem.forEach(img => img.addEventListener('click', () => {
    photoGallery.style.display = 'block';
    photoImg.src = img.getAttribute('src');
    document.querySelector('body').classList.add('offcsroll');
}));

photoBtnClose.addEventListener('click', () => {
    photoGallery.style.display = 'none';
    document.querySelector('body').classList.remove('offcsroll');
});

