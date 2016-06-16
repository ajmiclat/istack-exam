$(document).ready(function () {
  var projectImg = $('#projectImage');
  var projectModal = $('#projectModal');
  var PATH = 'images/';
  $('#works .content').click(function (ev) {
    var img = $(this).attr('data-img');
    projectImg.attr('src', PATH + img);
    projectModal.modal('show');
  });
});
