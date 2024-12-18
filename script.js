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


function sidebar() {
    var sidebar = document.querySelector("#sidebar");
    var open = document.querySelector("#sidebar-opn");
    var icon = document.querySelector("#arrow");
    var check = true;

    open.addEventListener("click", function () {
        if (check) {
            sidebar.style.transform = "translateX(0%)";
            icon.style.transform = "rotate(180deg)";
            check = false;
        } else {
            sidebar.style.transform = "translateX(-150%)";
            icon.style.transform = "rotate(0deg)";
            check = true;
        }
    })
}
sidebar();