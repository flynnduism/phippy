$(document).ready(function() {

  // Registers a jQuery method "textMetrics"
  // which calculates the height and width of a text string
  (function($) {
    $.textMetrics = function(el) {
      var h = 0, w = 0;
      var div = document.createElement('div');

      document.body.appendChild(div);
      $(div).css({
        position: 'absolute',
        left: -1000,
        top: -1000,
        display: 'none'
      });

      $(div).html($(el).html());
      var styles = ['font-size','font-style', 'font-weight',
        'font-family','line-height', 'text-transform', 'letter-spacing'];
      $(styles).each(function() {
        var s = this.toString();
        $(div).css(s, $(el).css(s));
      });

      h = $(div).outerHeight();
      w = $(div).outerWidth();

      $(div).remove();

      return {
        height: h,
        width: w
      };
    }
  })(jQuery);

  // active classes on sticky menu
  $(function() {
    $('.services-nav-wrapper a').click(function() {
      $('.services-nav-wrapper a').removeClass('active');
      $(this).addClass('active');
    });
  });

  // smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 400);
          // return false;
        }
      }
    });
  });

  // toggle contents in the packages modal
  $(".package-item .button").click(function() {
    var activePackage = event.target.id
    var activePackageTitle = $(this).attr('title')

    $("[class*='show-package-']").removeClass (function (index, css) {
        return (css.match (/(^|\s)show-package-\S+/g) || []).join(' ');
    }).addClass("col-md-6");
    $("#package-modal").addClass(activePackage);

    $("#package-choice").val(activePackageTitle);

    $('#package-modal').foundation('reveal', 'open');
  });

  $(document).foundation();

});




// use headroom.js for sticky topbar
(function() {
  var searchBar = document.querySelector(".services-nav-wrapper");
  new Headroom(searchBar, {
    offset: 0,
    classes: {
      "initial": "headroom",
      "pinned": "headroom--pinned",
      "unpinned": "headroom--unpinned",
      "top" : "headroom--top",
      "notTop" : "headroom--not-top"
    }
  }).init();
}());
