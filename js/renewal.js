$(document).ready(function () {
    gnb();
    typeTab();
    paging();
    listBtn();
    mGnb();
});



function gnb() {
    $(".gnb_area_bg").removeClass("on");
    $(".gnb_s").removeClass("on");
    
    $(".gnb_li > a").hover(function(e){
        $(".gnb_area_bg").addClass("on");
        $(this).next(".gnb_s").addClass("on");
    })

    $(".header_lst_area").mouseleave(function(e){
        $(".gnb_area_bg").removeClass("on");
        $(".gnb_s").removeClass("on");
    })
}


function typeTab() {
    var  cnt = 0;
    $(".search_box input").hide().first().show();
    $(".type_tab li").removeClass("active");

    $(".type_tab li").hover(function(e){
        cnt = $(this).index();
        $(this).addClass("active");
        $(".search_box input").hide().eq(cnt).show();
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
    $(".pagination li a").removeClass().first().addClass("active");
    $li.on("click", function () {
        $li.children("a").removeClass();
        $(this).children("a").addClass("active");
    })
}



function listBtn() {
    var first = "";
    var last = $(".room_list li").last();

    $(".sell_list_btn .prev span").on("click",function(e){     
        $(".room_list").css("left","+=193px");
        $(".room_list").prepend(last);
        $(".room_list").css("left","0");

    })
    $(".sell_list_btn .next span").on("click",function(e){
        first = $(".room_list li").first();
        $(".room_list").css("left","-=193px");
        $(".room_list").append(first);
        $(".room_list").css("left","0");
    })
}


function mGnb(){
    $(".hamburger1").click(function(){
        $(".overlay").addClass("overlay_show");
        $(".hamburger1").click(function(){
            $(".overlay").removeClass("overlay_show");
        })
    })
}