/**
 * Created by Jonathan Zhang on 2017/5/21.
 */
;$(function ()
{
    'use strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger =$('#sidebar_trigger');
    
    function showSidebar() {
        mask.fadeIn();
        sidebar.animate({'right':0});
    }

    function hideSidebar() {
        mask.fadeOut();
        sidebar.animate({'right': -300});
    }

    sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);
})