
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

const btnHovers = document.querySelectorAll(".ripple");
btnHovers.forEach((btnHover) => {
    btnHover.onmousemove = (e) => {
        const x = e.pageX - btnHover.offsetLeft;
        const y = e.pageY - btnHover.offsetTop;
    
        btnHover.style.setProperty('--x', x + 'px');
        btnHover.style.setProperty('--y', y + 'px');
    }
})

window.addEventListener('scroll', () => {
    var header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 100);
})



let section_counter = document.querySelector('.home__status');
let counters = document.querySelectorAll('.counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 500;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 30);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();
    });
  },
);

CounterObserver.observe(section_counter);