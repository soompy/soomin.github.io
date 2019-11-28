$(document).ready(function () {
    //range();
    paging();
    mobile();
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
