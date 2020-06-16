function tab(){
    var cnt = 0;
    $(".state").hide().first().show();
    $(".list_tab li").removeClass("active").first().addClass("active");

    $(".list_tab li").on("click",function(e){
        cnt = $(this).index();
        $(".list_tab li").removeClass();
        $(this).addClass("active");
        $(".state").hide();
        $('.state').eq(cnt).show();        
	})
}

$(document).ready(function(){
    tab();
})