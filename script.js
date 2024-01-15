// Function for About Me
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}


// Menu Bar

let sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0px";
}
function closeMenu() {
    sideMenu.style.right = "-150px";
}


// Open Resume

function openResume() {
    window.open('Images/Resume.pdf', '_blank');
}



