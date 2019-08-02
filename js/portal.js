// $(document).ready(function () {
//     $(".tit_tabcont").click(function () {
//         var tab_id = $(this).attr('data-tab');
//
//         $(".tit_tabcont").removeClass("active");
//         $(".wrap_tabcont").removeClass("active");
//
//         $(this).addClass("active");
//         $("#" + tab_id).addClass("active");
//     })
// })

$(document).ready(function () {
    $(".tit_tabcont").click(function () {
        var tab_id = $(this).attr('data-tab');

        $(".tit_tabcont").removeClass("active");
        $(".wrap_tabcont").removeClass("active");

        $(this).addClass("active");
        $("#" + tab_id).addClass("active");
    })
})

