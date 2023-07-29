function getCurrentLang() {
    const url = new URL(window.location.href)
    const defaultLang = 'fr';
    const lang = url.pathname.split('/')?.[0]

    return lang;
}

document.addEventListener("DOMContentLoaded", (event) => {

})