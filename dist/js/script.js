
const headerNav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".burger__btn");
burgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
})

const links = document.querySelectorAll(".nav__link");
links.forEach((link) => {
    link.addEventListener("click", () => {
        link.nextElementSibling.classList.toggle("open");
        link.querySelector(".link__btn").classList.toggle("open")
    })
})

const btnHover = document.querySelector(".footer__sbcrbBtn a");
btnHover.onmousemove = function(e) {
    const x = e.pageX - btnHover.offsetLeft;
    const y = e.pageY - btnHover.offsetTop;

    btnHover.style.setProperty('--x', x + 'px');
    btnHover.style.setProperty('--y', y + 'px');
}