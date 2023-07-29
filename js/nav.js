let lastScrollTop = 0;
const delta = 50;
const navContainer = document.querySelector('.nav-container');
const navbarHeight = navContainer.offsetHeight;

window.addEventListener('scroll', (event) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - st) > delta) {
        navContainer.classList.toggle('nav-up', st > lastScrollTop && st > navbarHeight);
        navContainer.classList.toggle('nav-down', st < lastScrollTop || st + window.innerHeight < document.documentElement.scrollHeight - delta);
        lastScrollTop = st;
    }

    const wButton = document.querySelector('.w-nav-button')
    const wNavbar = document.querySelector('.nav-container')

    // Click on close button from the burger to close the burger on anchor link click
    const anchorLinks = document.querySelectorAll('.anchor-menu-link')
    anchorLinks.forEach((link) => {
        link.addEventListener('click', () => {
            wButton.click()
        })
    })

    let navbarOpen = false;
    wButton.addEventListener('click', () => {

        const bodyEl = document.body
        if (!navbarOpen) {
            bodyEl.style.setProperty("overflow", "hidden", "important")

        } else {
            bodyEl.style.setProperty("overflow", "auto", "important")
        }
        navbarOpen = !navbarOpen
    })
    wNavbar.addEventListener('click', (e) => {

        if(!e.target.classList.contains('nav-logo') && !e.target.classList.contains('link-switcher') && !e.target.classList.contains('logo')){
            e.preventDefault();e.stopPropagation();
        }
    })
});