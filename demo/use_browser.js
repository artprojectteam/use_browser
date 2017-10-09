/*!
Use Browser Information v0.0.1
Add class to html tag and use javascript variable

Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/use_browser
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.UseBrowser=n()}(this,function(){"use strict";!function(){function e(e){this.value=e}function n(n){function i(t,o){try{var s=n[t](o),a=s.value;a instanceof e?Promise.resolve(a.value).then(function(e){i("next",e)},function(e){i("throw",e)}):r(s.done?"return":"normal",s.value)}catch(e){r("throw",e)}}function r(e,n){switch(e){case"return":t.resolve({value:n,done:!0});break;case"throw":t.reject(n);break;default:t.resolve({value:n,done:!1})}(t=t.next)?i(t.key,t.arg):o=null}var t,o;this._invoke=function(e,n){return new Promise(function(r,s){var a={key:e,arg:n,resolve:r,reject:s,next:null};o?o=o.next=a:(t=o=a,i(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}();var e=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,i,r){return i&&e(n.prototype,i),r&&e(n,r),n}}(),i=function(){function n(){e(this,n)}return n.initialize=function(e,n){this.ua=e,this.appv=n,this.is_edge=this.isIndexSearch("edge"),this.is_chrome=this.isIndexSearch("chrome"),this.is_safari=this.isIndexSearch("safari"),this.is_mobile=this.isIndexSearch("mobile"),this.is_android=this.isIndexSearch("android")},n.isIndexSearch=function(e){return this.ua.indexOf(e)>=0},n.isVersionSearch=function(e){return this.appv.indexOf(e)>=0},n.hasTrue=function(e){for(var n in e)if(!0===e[n])return!0;return!1},n.concatArr=function(){for(var e=Array.prototype.slice.call(arguments),n={},i=0,r=e.length;i<r;i++)!function(i,r){var t=e[i];Object.keys(t).forEach(function(e){t.hasOwnProperty(e)&&(n[e]=t[e])})}(i);return n},n}(),r=function(){function i(n){e(this,i),this.no_prefix=n,this._html_class=["js"]}return i.prototype.addClasses=function(){var e=this.html_class.join(" ");document.getElementsByTagName("html")[0].className+=" "+e},n(i,[{key:"html_class",set:function(e){var n=this;Object.keys(e).forEach(function(i){var r=e[i]?i:n.no_prefix+i;n._html_class.push(r)})},get:function(){return this._html_class}}]),i}(),t=function(){var e={msie:!1,msie9:i.isVersionSearch("msie 9."),msie10:i.isVersionSearch("msie 10."),msie11:i.isIndexSearch("trident/7"),msie_edge:i.isIndexSearch("applewebkit")&&i.is_edge};return e.msie=i.hasTrue(e),e},o=function(){var e=i.is_chrome&&i.is_safari&&!i.is_edge,n=i.is_safari&&!i.is_chrome&&!i.is_edge;return{chrome:e,mobile_chrome:e&&i.is_mobile,safari:n&&!i.is_mobile,mobile_safari:n&&i.is_mobile,firefox:i.isIndexSearch("firefox"),android_default:i.is_android&&!i.is_chrome}},s=function(){return{webkit:i.isIndexSearch("webkit/"),gecko:i.isIndexSearch("gecko/")||i.isIndexSearch("fxios/")}},a=function(){return{iPad:i.isIndexSearch("ipad"),android_tablet:i.is_android&&!!i.is_mobile||i.isIndexSearch("a1_07")||i.isIndexSearch("sc-01c")}},c=function(e){return{iPhone:i.isIndexSearch("iphone"),iPod:i.isIndexSearch("ipod"),android:i.is_android&&i.is_mobile&&!e}},u=function(e,n){var r=i.hasTrue(e),t=i.hasTrue(n);return{tablet:r,mobile:t,desktop:!r&&!t}},h=function(e,n){return{windows:i.isIndexSearch("windows"),osx:i.isIndexSearch("intel mac os x"),ios:e.iPad||n.iPhone||n.iPod,android:i.is_android}};return function(e,n){var f=new r("no-");i.initialize(e,n);var d=i.concatArr(t(),o());f.html_class=d;var l=s();f.html_class=l;var m=a();f.html_class=m;var _=c(m.android_tablet);f.html_class=_;var v=u(m,_);f.html_class=v;var p=h(m,_);return f.html_class=p,f.addClasses(),{ua:e,app_version:n,browser:d,engine:l,tablet:m,mobile:_,device:v,os:p}}(window.navigator.userAgent.toLowerCase(),window.navigator.appVersion.toLowerCase())});