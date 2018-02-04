$('document').ready(function () {
    console.log("Page Loaded!");
    toggleMenu();
});

function toggleMenu() {
    $('#menu-btn').click(function () {
        $('.navbar').animate({left: '0%'});
        // console.log("works!");
    });
    $('#close-btn').click(function () {
       $('.navbar').animate({left: '-60%'});
        // console.log("close");
    });
}


