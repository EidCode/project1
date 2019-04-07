/*global $, alert, console*/
$(document).ready(function () {
    'use strict';
    $('html').niceScroll();
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
        $('.intro').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 3);
        });
    });
    $('.intro').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 3);
    });
    $('.header .arrow i').click(function () {
        $('body, html').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    var goLeft = $('.testim .container .go-left'),
        goRigt = $('.testim .container .go-rigt');
    function check() {
        if ($('.client:first').hasClass('active')) {
        
            goLeft.fadeOut();
        } else {
            goLeft.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
        
            goRigt.fadeOut();
        } else {
            goRigt.fadeIn();
        }
          
    }
    check();
    $('.testim i').click(function () {
        if ($(this).hasClass('go-rigt')) {
            $('.testim .active').fadeOut(1000, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(1000);
                check();
            });
        }
        if ($(this).hasClass('go-left')) {
            $('.testim .active').fadeOut(1000, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(1000);
                check();
            });
        }
    });
   
    
});