$(document).ready(function () {
   //range();
    paging();
    moving();
});

function range() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
}

function paging() {
    var $li = $(".pagination li");
    $(".pagination li a").removeClass();
    $li.on("click", function () {
        $li.children("a").removeClass();
        $(this).children("a").addClass("active");
    })
}

function moving() {
    var $roomList = $(".room_list");
    var $prev = $(".prev");
    var $next = $(".next");

    $prev.on("click", function () {
        $roomList.css("marginLeft", "-1000px").animate({left:0},500);
    })

    $next.on("click", function () {
        $roomList.css("left", "+1000px");
    })
}