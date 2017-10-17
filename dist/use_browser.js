/*!
Use Browser Information v0.0.1
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

  var asyncGenerator = function () {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(function (arg) {
              resume("next", arg);
            }, function (arg) {
              resume("throw", arg);
            });
          } else {
            settle(result.done ? "return" : "normal", result.value);
          }
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    return {
      wrap: function (fn) {
        return function () {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function (value) {
        return new AwaitValue(value);
      }
    };
  }();





  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Core = function () {
    function Core() {
      classCallCheck(this, Core);
    }

    /**
     * Core data initialize
     * @param ua {string}
     * @param appv {string}
     */
    Core.initialize = function initialize(ua, appv) {
      this.ua = ua;
      this.appv = appv;
      this.is_edge = this.isIndexSearch('edge');
      this.is_chrome = this.isIndexSearch('chrome');
      this.is_safari = this.isIndexSearch('safari');
      this.is_mobile = this.isIndexSearch('mobile');
      this.is_android = this.isIndexSearch('android');
    };

    /**
     * String index search
     * @param str
     * @returns {boolean}
     */


    Core.isIndexSearch = function isIndexSearch(str) {
      return !!~this.ua.indexOf(str);
    };

    /**
     * Version search
     * @param str
     * @returns {boolean}
     */


    Core.isVersionSearch = function isVersionSearch(str) {
      return !!~this.appv.indexOf(str);
    };

    /**
     * Does true exist in the object
     * @param obj {object}
     * @returns {boolean}
     */


    Core.hasTrue = function hasTrue(obj) {
      for (var key in obj) {
        if (obj[key] === true) return true;
      }
      return false;
    };

    /**
     * array concat
     * @returns {{}}
     */


    Core.concatArr = function concatArr() {
      var args = Array.prototype.slice.call(arguments);
      var res = {};

      var _loop = function _loop(i, iLen) {
        var obj = args[i];
        Object.keys(obj).forEach(function (r) {
          if (obj.hasOwnProperty(r)) res[r] = obj[r];
        });
      };

      for (var i = 0, iLen = args.length; i < iLen; i++) {
        _loop(i, iLen);
      }

      return res;
    };

    return Core;
  }();

  /**
   * html tag add class
   */
  var _class = function () {
    function _class(prefix) {
      classCallCheck(this, _class);

      this.no_prefix = prefix;
      this._html_class = ['js'];
    }

    /**
     * setup class strings
     * @param obj {*} object array
     */


    createClass(_class, [{
      key: 'html_class',
      set: function set$$1(obj) {
        var _this = this;

        Object.keys(obj).forEach(function (keys) {
          var target = obj[keys];
          var res = target ? keys : _this.no_prefix + keys;

          _this._html_class.push(res);
        });
      }

      /**
       * get class string array
       * @returns {Array}
       */
      ,
      get: function get$$1() {
        return this._html_class;
      }
    }]);
    return _class;
  }();

  /**
   * get ie versions
   * @returns {{msie: boolean, msie9: boolean, msie10: boolean, msie11: boolean, msie_edge: (boolean|*)}}
   */
  var getIE = (function () {
    var str = 'msie';
    var msie = {
      msie: false,
      msie9: Core.isVersionSearch(str + ' 9.'),
      msie10: Core.isVersionSearch(str + ' 10.'),
      msie11: Core.isIndexSearch('trident/7'),
      msie_edge: Core.isIndexSearch('applewebkit') && Core.is_edge
    };

    msie.msie = Core.hasTrue(msie);
    return msie;
  });

  /**
   * get browser type
   * @returns {{chrome: (*|boolean), mobile_chrome: (*|boolean), safari: (*|boolean), mobile_safari: (*|boolean), firefox: boolean, android_default: (*|boolean)}}
   */
  var getBrowser = (function () {
    var is_chrome = Core.is_chrome && Core.is_safari && !Core.is_edge;
    var is_safari = Core.is_safari && !Core.is_chrome && !Core.is_edge;

    return {
      chrome: is_chrome,
      mobile_chrome: is_chrome && Core.is_mobile,
      safari: is_safari && !Core.is_mobile,
      mobile_safari: is_safari && Core.is_mobile,
      firefox: Core.isIndexSearch('firefox'),
      android_default: Core.is_android && !Core.is_chrome
    };
  });

  /**
   * browser engine
   * @returns {{webkit: boolean, gecko: boolean}}
   */
  var getEngine = (function () {
    return {
      webkit: Core.isIndexSearch('webkit/'), // Safari,Chrome
      gecko: Core.isIndexSearch('gecko/') || Core.isIndexSearch('fxios/') // Firefox(fxiosはiOS版Firefox)
    };
  });

  /**
   * get tablet
   * @returns {{iPad: boolean, android_tablet: (*|boolean)}}
   */
  var getTablet = (function () {
    return {
      iPad: Core.isIndexSearch('ipad'),
      android_tablet: Core.is_android && !!Core.is_mobile || Core.isIndexSearch('a1_07') || Core.isIndexSearch('sc-01c') // A1-07, SC-01C is Tablet, But wrote "mobile"(2013.02 now)
    };
  });

  /**
   * get mobile
   * @param is_android_tablet {boolean}
   * @returns {{iPhone: boolean, iPod: boolean, android: (*|boolean)}}
   */
  var getMobile = (function (is_android_tablet) {
    return {
      iPhone: Core.isIndexSearch('iphone'),
      iPod: Core.isIndexSearch('ipod'),
      android: Core.is_android && Core.is_mobile && !is_android_tablet
    };
  });

  /**
   * which device
   * @param tablet {object}
   * @param mobile {object}
   * @returns {{tablet: boolean, mobile: boolean, desktop: boolean}}
   */
  var getDevice = (function (tablet, mobile) {
    var is_tablet = Core.hasTrue(tablet);
    var is_mobile = Core.hasTrue(mobile);

    return {
      tablet: is_tablet,
      mobile: is_mobile,
      desktop: !is_tablet && !is_mobile
    };
  });

  /**
   * get os
   * @param tablet {object}
   * @param mobile {object}
   * @returns {{windows: boolean, osx: boolean, ios: *, android: *}}
   */
  var getOS = (function (tablet, mobile) {
    return {
      windows: Core.isIndexSearch('windows'),
      osx: Core.isIndexSearch('intel mac os x'),
      ios: tablet.iPad || mobile.iPhone || mobile.iPod,
      android: Core.is_android
    };
  });

  var main = (function (ua, appv) {
    var createClass = new _class('no-');
    Core.initialize(ua, appv);

    var browser = Core.concatArr(getIE(), getBrowser());
    createClass.html_class = browser;

    var engine = getEngine();
    createClass.html_class = engine;

    var tablet = getTablet();
    createClass.html_class = tablet;

    var mobile = getMobile(tablet.android_tablet);
    createClass.html_class = mobile;

    var device = getDevice(tablet, mobile);
    createClass.html_class = device;

    var os = getOS(tablet, mobile);
    createClass.html_class = os;

    // add class
    var _cls = createClass.html_class.join(' ');
    var _html = document.getElementsByTagName('html');
    _html[0].className += ' ' + _cls;

    return {
      ua: ua,
      app_version: appv,
      browser: browser,
      engine: engine,
      tablet: tablet,
      mobile: mobile,
      device: device,
      os: os
    };
  })(window.navigator.userAgent.toLowerCase(), window.navigator.appVersion.toLowerCase());

  return main;

})));
