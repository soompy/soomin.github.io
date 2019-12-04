(function () {
    // 헤더
    // .gnb_li에 hover했을때, 
    // .gnb_area_bg와 해당 gnb_s가
    // 나타나도록 visibility: visible;값을
    // 준다.
    var gnbLi = document.querySelectorAll('.gnb_li');
    var gnbS = document.querySelectorAll('.gnb_s');
    var gnbBg = document.querySelector('.gnb_area_bg');

    gnbLi.forEach(hover => {
        if (hover) {
            gnbBg.style.visibility = 'visible';
        } else {
            gnbBg.style.visibility = 'hidden';
        }
    });

})();


(function (m_menu) {

})();



(function () {

    // .type_tab li를 클릭하면 .type_tab li.active 클래스가 들어오면서 
    // 동시에 .search_box input의 내용이 드러난다.

})();


(function () {

    // .pag li a를 누르면 ++ --를 사용한다.
    // .sell_list_btn li span을 누르면 ++ --된다.

})();