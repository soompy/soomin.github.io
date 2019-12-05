(function () {
    var overlay = document.getElementById('overlay');
    var burger = document.getElementById('hamburger1');

    burger.addEventListener('click', function () {
        overlay.classList.toggle('overlay_show');
    })
})();

