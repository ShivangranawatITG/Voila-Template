let btn = document.getElementById("searching")
const settingsBtn = document.getElementById('setting');
const hamburger = document.getElementById('hamburger');
const hamburger_show = document.getElementById('hamburger-bar');
const sidePanel = document.getElementById('sidePanel');


btn.addEventListener("click", function () {
    let search = document.getElementById("sarch-bar-pages");
    search.style.visibility = "visible"
    search.style.opacity = "1"
    search.style.transitionDelay = "0s"
    let dis = document.getElementById("search-bg")
    dis.style.display = "block"
})


let btn2 = document.getElementById("search-close")
btn2.addEventListener("click", function () {
    let search = document.getElementById("sarch-bar-pages");
    search.style.visibility = "hidden"
    let dis = document.getElementById("search-bg")
    dis.style.display = "none"
})


settingsBtn.addEventListener('click', () => {
    sidePanel.classList.toggle('open');
});

function closePanel() {
    sidePanel.classList.remove('open');
}

hamburger.addEventListener('click', () => {
    hamburger_show.classList.toggle('active');
})
function close_head() {
    hamburger_show.classList.remove('active');
}