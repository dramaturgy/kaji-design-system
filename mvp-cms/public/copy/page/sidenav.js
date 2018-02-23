$(function() {

  function initSidenavToggle() {
    var $toggle = $('#js_cms_navbar_toggle_btn')
    ,   $sidenav = $('#js_cms_sidenav')
    ,   $toggleIcon = $toggle.find('.js-cms-navbar-toggle-icon');

    $toggle.on('click', function(e) {
      e.preventDefault();
      $sidenav.toggleClass('sm-open');
      $toggleIcon.toggleClass('d-none')
      $('body').toggleClass('has-sidenav-open');
    });

  }

  initSidenavToggle();

});