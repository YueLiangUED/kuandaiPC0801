/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-02 16:54:44
*/

$(document).ready(function(){
    // select功能
    $('select').on('change', function () {
        var $formGroup = $(this).parents('.form-group');
        var $selectSpan = $formGroup.find('.select-span');
        var thisVal = $(this).val();
        $selectSpan.html(thisVal);
    });
    $('.form-group').on('click', function () {
        $('.form-group').removeClass('act');
        $(this).addClass('act');
    });
    $('.router-side ul li').on('click', function () {
        var thisIndex = $(this).index();
        $('.router-item').hide();
        var thisItem = $('.router-item')[thisIndex];
        $(thisItem).show();

        $('.router-side ul li').removeClass('act');
        $(this).addClass('act');
        $(window).scrollTop(0);
    });
    $('.kd-btn-group-tab .kd-btn').on('click', function () {
        var thisIndex = $(this).index();
        $('.tab-img').hide();
        var thisItem = $('.tab-img')[thisIndex];
        $(thisItem).show();

        $('.kd-btn-group-tab .kd-btn').removeClass('act');
        $(this).addClass('act');
    });
});