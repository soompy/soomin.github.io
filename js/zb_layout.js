$(document).ready(function(){
    gnb();
})

function gnb(){
    var cnt = 0;

    $(".gnb_li > a").hover(function(e){
        $(this).siblings(".gnb_s").addClass("on");

        /*
        if(gnb){
            $(this).siblings(".gnb_s").addClass("on");
        }else{
            $(this).siblings(".gnb_s").removeClass("on");
        }
        */
    })
}
