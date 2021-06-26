/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        showNavBar("navbar")
    } else {
        hideNavBar("navbar")
    }
    prevScrollpos = currentScrollPos;
}

function showNavBar(navBarId) {
    document.getElementById(navBarId).style.top = "0";
}

function hideNavBar(navBarId) {
    document.getElementById(navBarId).style.top = "-50px";
}
