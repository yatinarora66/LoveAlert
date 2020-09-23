(function ($) {
  'use strict';
  // Mean Menu JS
  jQuery('.mean-menu').meanmenu({
    meanScreenWidth: '0',
  });

  // Preloader JS
  $(function () {
    $('body').addClass('loaded');
  });

  // Nice Select JS
  $('select').niceSelect();

  // Header Sticky JS
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('.navbar-area').addClass('is-sticky');
    } else {
      $('.navbar-area').removeClass('is-sticky');
    }
  });

  // Sidebar Modal JS
  $('.burger-menu').on('click', function () {
    $('.sidebar-modal').toggleClass('active');
  });
  $('.sidebar-modal-close-btn').on('click', function () {
    $('.sidebar-modal').removeClass('active');
  });

  // Click Event JS
  $('.go-top').on('click', function () {
    $('html, body').animate({ scrollTop: '0' }, 500);
  });

  // Animation JS
  new WOW().init();

  // Tabs JS
  $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
  $('.tab ul.tabs li').on('click', function (g) {
    var tab = $(this).closest('.tab'),
      index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab
      .find('.tab_content')
      .find('div.tabs_item')
      .not('div.tabs_item:eq(' + index + ')')
      .slideUp();
    tab
      .find('.tab_content')
      .find('div.tabs_item:eq(' + index + ')')
      .slideDown();
    g.preventDefault();
  });

  // Input Plus & Minus Number JS
  $('.input-counter').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find('.plus-btn'),
      btnDown = spinner.find('.minus-btn'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
    btnDown.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });
})(jQuery);
