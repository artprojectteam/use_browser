/*!
Use Browser Information v1.0.0
Add class to html tag and use javascript variable

Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/use_browser
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.UseBrowser = factory());
}(this, (function () { 'use strict';

  var main = (function (ua, appv) {
    return {
      a: 'a'
    };
  })(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase());

  return main;

})));
