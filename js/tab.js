'use strict';
function TabMenu(options) {
    this.init(options); //this는 TabMenu를 가리킨다. this = class class개념은 대문자로 시작한다.
    this.initEvent();
}
//객체단위
TabMenu.prototype = {

    //구조정리
    init: function (opt) {
        this.opt = opt; //this가 붙어있어야 어디서든 사용 가능하다.
        this.$tabMenu = $(this.opt.selector).find('.tab_menu li');
        this.$tabContents = $(this.opt.selector).find('.tab_contents li');
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

        var duration = 0;

        if (this.opt.fade === true) {
            //duration = this.opt.duration ? this.opt.duration : 400; //3항연산자 작성법
            if (this.opt.duration === true){
                duration = this.opt.duration;
            } else {
                duration = 400;
            } //if 조건문 작성법
        }

        this.$tabContents.eq(this.oldIndex).stop(false, true).fadeOut(duration);
        this.$tabContents.eq(this.currentIndex).stop(false, true).fadeIn(duration);
    }

};