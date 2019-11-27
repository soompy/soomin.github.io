(function () {
    // 모바일메뉴
    $(document).ready(function () {
        $(".button a").click(function () {
            $(".overlay").fadeToggle(200);
            $(this).toggleClass('btn-open').toggleClass('btn-close');
        });
    });
    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
})();


(function (topFunction) {
    // top 버튼 기능
    var mybutton = document.getElementById('myBtn');
  
    window.onscroll = function (){scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = 'block';
        } else {
            mybutton.style.display = 'none';            
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})();