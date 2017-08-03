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
        console.log(thisVal);
        $selectSpan.html(thisVal);
    });
    $('.form-group').on('click', function () {
        $('.form-group').removeClass('act');
        $(this).addClass('act');
    });
});