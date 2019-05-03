$(function() {
  var dimmerButton = $('.dim');
  var dimmer = $('.dimmer');
  var exit = $('.exit');
  dimmerButton.on('click', function() {
    dimmer.show();
  });
  exit.on('click', function() {
    dimmer.hide();
  });
});
