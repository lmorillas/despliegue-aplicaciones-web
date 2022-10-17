$(function() {
    var g;
    /* hide some navigation and other unnecessary elements if displayed in an iFrame */
    if (window.self != window.top) {
      $('aside.td-sidebar').hide();
      $('nav.td-breadcrumbs').hide();
      $('header').hide();
      $('footer').hide();
    }
  });
  