$(document).ready(function () {
  var projectImg = $('#projectImage');
  var projectModal = $('#projectModal');
  var PATH = 'images/';
  $('#works .content').click(function (ev) {
    var img = $(this).attr('data-img');
    projectImg.attr('src', PATH + img);
    projectModal.modal('show');
  });

  $('header a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
