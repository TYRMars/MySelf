/**
 * Created by Jonathan Zhang on 2017/5/21.
 */
;$(function ()
{
    'use strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        back_top = $('.backtotop'),
        sidebar_trigger =$('#sidebar_trigger');
    
    function showSidebar() {
        mask.fadeIn();
        sidebar.animate({'right':0});
    }

    function hideSidebar() {
        mask.fadeOut();
        sidebar.animate({'right': -300});
    }

    function totop() {
        $('html,body').animate({
            scrollTop:0
        },800)
    }

    $(window).on('scroll',function () {
       if($(window).scrollTop() > $(window).height())
       {
           back_top.fadeIn();
       }
       else
       {
          back_top.fadeOut();
       }
    });

    $(window).trigger('scroll');

    sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);
    back_top.on('click',totop);
})