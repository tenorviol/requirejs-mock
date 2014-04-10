
(function (global) {

var originalRequire = global.require;
var originalDefine = global.define;

function requirejs() {
  var args = Array.prototype.slice.call(arguments);
  console.log('requirejs');
  console.log(args);
  return originalRequire.apply(this, args);
};

requirejs.prototype = originalRequire;

requirejs.config = originalRequire.config;

function define() {
  var args = Array.prototype.slice.call(arguments);
  console.log('define');
  console.log(args);
  return originalDefine.apply(this, args);
}

define.prototype = originalDefine;
define.amd = true;

global.require = global.requirejs = requirejs;
global.define = define;

})(window);
