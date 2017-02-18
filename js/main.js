'use strict'; //플러그인 개념으로 만든 tab.js를 main.js로 호출해서 쓴다.
$(document).ready(function () {
    // new: tab변수에 새로운 클래스인 TabMenu를 집어 넣어라.
    var tab1 = new TabMenu({
        selector: '.tab1', //fade가 false인 상태로 duration도 0이 된다. 효과 없음.
    });

    var tab2 = new TabMenu({
        selector: '.tab2',
        fade: true,
        duration: 400
    });

});
