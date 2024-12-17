function navbar() {
    var menu = document.querySelector("#menu");
    var nav = document.querySelector("aside");
    var close = document.querySelector("#close");
    var items = document.querySelectorAll(".item");

    menu.addEventListener("click", function () {
        nav.style.transform = "translateY(0%)";
    })

    close.addEventListener("click", function () {
        nav.style.transform = "translateY(-100%)";
    })

    // Close the navigation menu when any item is clicked
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            nav.style.transform = "translateY(-100%)";
        });
    });

}
navbar()

