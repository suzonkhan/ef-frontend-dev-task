function showSearch() {
    document.getElementById("search-wrapper").classList.add("show-search-bar");
}

function hideSearch() {
    document.getElementById("search-wrapper").classList.remove("show-search-bar");
}

document.getElementById("pc-menu-item").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Hello")
    document.getElementById("pc-megamenu-panel").classList.toggle("show-panel");
})