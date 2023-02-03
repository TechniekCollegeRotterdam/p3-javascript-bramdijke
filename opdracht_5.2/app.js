const nav = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => { 
    if (lastScrollY < window.scrollY) {
        nav.classList.add("hide");
    }
    else {
        nav.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

