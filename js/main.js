'use strict';
$(document).ready(function () {

    var tab = new TabMenu(); // new: tab변수에 새로운 클래스인 TabMenu를 집어 넣어라.

});

function TabMenu() {
    this.init(); //this는 TabMenu를 가리킨다. this = class class개념은 대문자로 시작한다.
    this.initEvent();
}
//객체단위
TabMenu.prototype = {

    //구조정리
    init: function () {
        this.$tabMenu = $('.tab_menu li');
        this.$tabContents = $('.tab_contents li');
        this.oldIndex = null;
        this.currentIndex = 0;
    }, //구조가 끝나면 쉼표 꼭

    //시작하자마자 실행할 이벤트틀
    initEvent: function () {
        var _this = this; //tabMenu

        this.$tabMenu.on('click', function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    //번호 갱신 기능
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    //메뉴 변경 기능
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass('active');
        $this.addClass('active');
    },

    //이미지 변경 기능
    toggleContent: function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }

};