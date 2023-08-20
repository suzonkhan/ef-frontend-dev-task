function showSearch() {
    document.getElementById("search-wrapper").classList.add("show-search-bar");
}

function hideSearch() {
    document.getElementById("search-wrapper").classList.remove("show-search-bar");
}

document.getElementById("pc-menu-item").addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("show-sub-menu")
})
document.getElementById("mobile-menu-trigger").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Hello")
    this.classList.toggle("close-popup-menu")
    document.getElementsByClassName("navigation")[0].classList.toggle("popup-menu-activated");
})