const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.style.right = "0px";
    })
}

if (bar) {
    close.addEventListener('click', () => {
        nav.style.right = "-300px";
    })
}