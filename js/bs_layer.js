/*

var ly = $(".layer");
// var lybg = $(".ly_bg");

$(".join_btn a").on("click",function () {
    ly.css({display: "block"});
})

*/



(function () {
    var ly_bg = document.getElementById('ly_bg');
    var ly = document.getElementById('layer');
    var no = document.getElementById('no');
    var join = document.getElementById('join');

    ly_bg.addEventListener('click',function () {
        ly.style.display = "none";
        ask_join.style.display = "none";
    })
    no.addEventListener('click',function () {
        ly.style.display = "none";
        ask_join.style.display = "none";
    })
    join.addEventListener('click',function () {
        ly.style.display = ""
    })







})






