
(function (global) {

var originalRequire = global.require;
var originalDefine = global.define;

function requirejs() {
  var args = Array.prototype.slice.call(arguments);
  console.log('requirejs');
  console.log(args);
  var result = originalRequire.apply(this, args);
  console.log(result);
  return result;
};

requirejs.prototype = originalRequire;

requirejs.config = originalRequire.config;

function define() {
  var args = Array.prototype.slice.call(arguments);
  console.log('define');
  console.log(args);
  var result = originalDefine.apply(this, args);
  console.log(result);
  return result;
}

define.prototype = originalDefine;
define.amd = originalDefine.amd;

global.require = global.requirejs = requirejs;
global.define = define;

})(window);
