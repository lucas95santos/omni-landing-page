const navbarEl = document.querySelector('nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarEl.getBoundingClientRect().height) {
        navbarEl.classList.add('nav-with-background');
    } else {
        navbarEl.classList.remove('nav-with-background');
    }
});
