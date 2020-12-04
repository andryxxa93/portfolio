window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const close = menu.querySelector(".menu__close")

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menu.addEventListener('click', (e) => {
        if (e.target.parentNode.tagName === "LI") {
            e.preventDefault();
            menu.classList.remove('active');
        } else if (e.target.className === "menu__overlay")
            menu.classList.remove('active');
    });

    const percent =  document.querySelectorAll('.skills__grid-percent'),
         lines = document.querySelectorAll('.skills__grid-baseline span');

    percent.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
});