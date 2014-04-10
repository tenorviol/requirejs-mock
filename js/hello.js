
define(['bower_components/jquery/dist/jquery', 'js/message'], function ($, message) {

  var args = Array.prototype.slice.call(arguments);
  console.log('define hello');
  console.log(args);

  return {
    doIt: function(sel) {
      $(sel).html(message);
    }
  };

});
