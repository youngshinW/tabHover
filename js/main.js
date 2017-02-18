'use strict';
$(document).ready(function () {

    var oldIndex = null  //0번째
    var currentIndex = 0;
    var $tabMenu = $('.tab_menu li')
    var $tabContents = $('.tab_contents li')

    $tabMenu.on('click', function () {
        oldIndex = currentIndex;
        currentIndex = $(this).index(); //사용자가 클릭한 번호로 갱신

        $tabMenu.not($(this)).removeClass('active');
        $(this).addClass('active');

        $tabContents.eq(oldIndex).hide();
        $tabContents.eq(currentIndex).show();
    });

});