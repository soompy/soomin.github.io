$(document).ready(function () {
    gnb();
    //range();
    typeTab();
    paging();
    mobile();
});



function gnb() {
    $(".gnb_s").removeClass("on");
    // $(this).siblings(".gnb_s").removeClass("on");
    $(".gnb_area_bg").removeClass("on");

    $(".gnb_li > a").hover(function(e){
        $(".gnb_area_bg").addClass("on");
        $(this).siblings(".gnb_s").addClass("on");
    })

    $(".header_lst_area").mouseleave(function(e){
        $(".gnb_area_bg").removeClass("on");
        $(".gnb_s").removeClass("on");
    })
}


function typeTab() {
    $(".type_tab li").removeClass("active");
    $(".search_box input")

    $(".type_tab li").hover(function(e){
        $(this).addClass("active");
    })
    $(".type_tab li").mouseleave(function(e){
        $(this).removeClass("active");
    })

}



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
