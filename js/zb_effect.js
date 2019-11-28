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