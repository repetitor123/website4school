// Кнопка rtl працює так собі
$(document).ready(function() {
  const $html = $('html');
  const $ls = localStorage;
  const $demo = $('#demoSwitcher');
  const $cssTheme = $('#cssTheme');
  const $cssRtl = $('#cssRtl');
  const $btnRtl = $('.js-switch-rtl');
  const $btnColor = $('.js-toggle-theme');

  if ($ls.getItem('theme')) {
    $cssTheme.attr('href', $ls.getItem('theme'));

    $btnColor.removeClass('is-active')
    .eq($ls.getItem('active')).addClass('is-active');
  }

  if ($ls.getItem('rtl')) {
    $html.addClass('rtl');
    $cssRtl.attr('href', $ls.getItem('rtl'));
    $btnRtl.addClass('is-active');
  } else {
    $html.removeClass('rtl');
    $cssRtl.attr('href', '#');
    $btnRtl.removeClass('is-active');
  }

  $demo.on('click', '.js-toggle-theme', function(e) {
    e.preventDefault();

    const $this = $(this);

    $this.addClass('is-active').siblings().removeClass('is-active');

    $ls.setItem('theme', $this.data('path'));

    $ls.setItem('active', $this.index());

    $cssTheme.attr('href', $ls.getItem('theme'));
  });

  $demo.on('click', '.js-switch-rtl', function() {
    const $this = $(this);

    if ($this.hasClass('is-active')) {
      $html.removeClass('rtl');
      $this.removeClass('is-active');
      $ls.removeItem('rtl');
    } else {
      $html.addClass('rtl');
      $this.addClass('is-active');
      $ls.setItem('rtl', [$this.data('switch')]);
    }

    $cssRtl.attr('href', $ls.getItem('rtl'));
  });
});
