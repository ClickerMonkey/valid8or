!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("v8",[],e):"object"==typeof exports?exports.v8=e():t.v8=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),u=function(){function t(t,e,n){this.check=t,this.parent=e,this.comparator=this.getComparator.bind(this),this.message(n||"invalid")}return t.prototype.newInstance=function(){return new this.constructor(function(t,e){return e(t)})},t.prototype.message=function(t){return this.getMessage=i.isGetMessage(t)?t:function(){return t},this},t.prototype.withComparator=function(t){return this.comparator=t,this},t.prototype.reverseComparator=function(){var t=this.comparator;return this.comparator=function(e,n){return t(n,e)},this},t.prototype.validate=function(t){return new this.constructor(t,this)},t.prototype.transform=function(t){return this.validate(function(e,n,i,u){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return r=n,[4,t.call(this,e)];case 1:return[2,r.apply(void 0,[o.sent()])]}})})})},t.prototype.eval=function(t,e){return this.validate(function(n,u,s,a){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return r=this.parse(n),this.isValid(r,n)?[3,1]:(i.resolve(t)?i.isEmpty(n)&&void 0!==e?s(i.resolve(e)):a(this.getMessage(n)):s(void 0!==e?i.resolve(e):n),[3,3]);case 1:return[4,u(r)];case 2:o.sent(),o.label=3;case 3:return[2]}})})}).message("check")},t.prototype.required=function(t){return this.eval(!0,t).message("required")},t.prototype.optional=function(t){return this.eval(!1,t).message("optional")},t.prototype.is=function(t){return this.validate(function(e,n,i,u){return r(this,void 0,void 0,function(){return o(this,function(r){switch(r.label){case 0:return[4,t(e)];case 1:return r.sent()?[3,2]:(u(this.getMessage(e)),[3,4]);case 2:return[4,n(e)];case 3:r.sent(),r.label=4;case 4:return[2]}})})})},t.prototype.oneOf=function(t){var e=this;return this.is(function(n){return-1!==i.resolve(t).findIndex(function(t){return 0===e.comparator(n,t)})}).message("oneOf")},t.prototype.notOneOf=function(t){var e=this;return this.is(function(n){return-1===i.resolve(t).findIndex(function(t){return 0===e.comparator(n,t)})}).message("notOneOf")},t.prototype.equals=function(t){var e=this;return this.is(function(n){return 0===e.comparator(n,i.resolve(t))}).message("equals")},t.prototype.lessThan=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))<0}).message("lessThan")},t.prototype.lessThanEqual=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))<=0}).message("lessThanEqual")},t.prototype.max=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))<=0}).message("max")},t.prototype.greaterThan=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))>0}).message("greaterThan")},t.prototype.greaterThanEqual=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))>=0}).message("greaterThanEqual")},t.prototype.between=function(t,e){var n=this;return this.is(function(r){return n.comparator(r,i.resolve(t))>=0&&n.comparator(r,i.resolve(e))<=0}).message("between")},t.prototype.min=function(t){var e=this;return this.is(function(n){return e.comparator(n,i.resolve(t))>=0}).message("min")},t.prototype.fail=function(){return this.validate(function(t,e,n,i){return r(this,void 0,void 0,function(){return o(this,function(e){return i(this.getMessage(t)),[2]})})})},t.prototype.or=function(t){return this.validate(function(e,n,i,u){return r(this,void 0,void 0,function(){var r,i,s,a,c,f;return o(this,function(o){switch(o.label){case 0:r=this.newInstance(),i=t(r),s=0,o.label=1;case 1:return s<i.length?[4,i[s].runAsTuple(e)]:[3,5];case 2:return a=o.sent(),c=a[0],f=a[1],a[2],c&&void 0!==f?[4,n(f)]:[3,4];case 3:return[2,o.sent()];case 4:return s++,[3,1];case 5:return u(this.getMessage(e)),[2]}})})})},t.prototype.json=function(){return this.transform(function(t){if(i.isString(t))try{t=JSON.parse(t)}catch(t){}return t})},t.prototype.nullify=function(){return this.transform(function(t){return null})},t.prototype.remove=function(){return this.transform(function(t){})},t.prototype.set=function(t){return this.transform(function(e){return i.resolve(t)})},t.prototype.run=function(t,e,n,i){return r(this,void 0,void 0,function(){var r=this;return o(this,function(o){switch(o.label){case 0:return this.parent?[4,this.parent.run(t,function(t){return r.check(t,e,n,i)},n,i)]:[3,2];case 1:return o.sent(),[3,4];case 2:return[4,this.check(t,e,n,i)];case 3:o.sent(),o.label=4;case 4:return[2]}})})},t.prototype.runAsTuple=function(t){return r(this,void 0,void 0,function(){var e,n,i,u=this;return o(this,function(s){switch(s.label){case 0:return e=!0,n=void 0,i=void 0,[4,this.run(t,function(t){return r(u,void 0,void 0,function(){return o(this,function(e){return n=t,[2]})})},function(t){n=t},function(t){i=t,e=!1})];case 1:return s.sent(),[2,[e,n,i]]}})})},t.prototype.runAsPromise=function(t){return r(this,void 0,void 0,function(){var e=this;return o(this,function(n){return[2,new Promise(function(n,i){e.run(t,function(t){return r(e,void 0,void 0,function(){return o(this,function(e){return[2,n(t)]})})},n,i)})]})})},t}();e.Validator=u},function(t,e,n){"use strict";function r(t){return"string"==typeof t}function o(t){return r(t)?t.trim().length>0:null!=t}function i(t){return"function"==typeof t}Object.defineProperty(e,"__esModule",{value:!0}),e.isGetMessage=function(t){return i(t)},e.resolve=function(t){return i(t)?t():t},e.trimIfString=function(t){return r(t)?t.trim():t},e.isString=r,e.isEmpty=o,e.isPlainObject=function(t){return null!==t&&!Array.isArray(t)&&"object"==typeof t},e.isFunction=i,e.toArray=function(t){return Array.isArray(t)?t:o(t)?[]:[t]}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(1);e.obj=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(t){return t},e.prototype.isValid=function(t,e){return a.isPlainObject(t)},e.prototype.getComparator=function(t,e){for(var n in t)if(!(n in e))return 1;for(var n in e)if(!(n in t))return-1;return 0},e.prototype.props=function(t){return this.validate(function(e,n,r,o){return i(this,void 0,void 0,function(){var r,i,s,a,c,f,p,l,h,y,d;return u(this,function(u){switch(u.label){case 0:for(a in r={},i=!0,s=[],t)s.push(a);c=0,u.label=1;case 1:return c<s.length?(f=s[c],(p=t[f])?[4,p.runAsTuple(e[f])]:[3,3]):[3,4];case 2:l=u.sent(),h=l[0],y=l[1],d=l[2],h?void 0!==y?e[f]=y:delete e[f]:(r[f]=d,i=!1),u.label=3;case 3:return c++,[3,1];case 4:return i?[4,n(e)]:[3,6];case 5:return u.sent(),[3,7];case 6:o(r),u.label=7;case 7:return[2]}})})})},e.prototype.instanceOf=function(t){return this.is(function(e){return e instanceof t}).message("instanceOf")},e.prototype.wrap=function(t){return this.transform(function(e){return new t(e)})},e}(s.Validator);e.ValidatorObject=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(1);e.int=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})}).withParser(parseInt)},e.float=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})}).withParser(parseFloat)};var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.parser=parseFloat,e}return o(e,t),e.prototype.parse=function(t){return this.parser(a.trimIfString(t))},e.prototype.isValid=function(t,e){return isFinite(t)},e.prototype.getComparator=function(t,e){return t-e},e.prototype.withParser=function(t){return this.parser=t,this},e.prototype.isPositive=function(){return this.is(function(t){return t>=0}).message("isPositive")},e.prototype.isNegative=function(){return this.is(function(t){return t<0}).message("isNegative")},e.prototype.floor=function(){return this.transform(function(t){return Math.floor(t)})},e.prototype.abs=function(){return this.transform(function(t){return Math.abs(t)})},e.prototype.neg=function(){return this.transform(function(t){return-t})},e.prototype.ceil=function(){return this.transform(function(t){return Math.ceil(t)})},e.prototype.round=function(){return this.transform(function(t){return Math.round(t)})},e}(s.Validator);e.ValidatorNumber=c},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(1)),r(n(0)),r(n(5)),r(n(6)),r(n(7)),r(n(8)),r(n(3)),r(n(2)),r(n(9)),r(n(10)),r(n(11))},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);e.any=function(){var t=this;return new a(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(t){return t},e.prototype.isValid=function(t,e){return void 0!==t},e.prototype.getComparator=function(t,e){return 0},e}(s.Validator);e.ValidatorAny=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(1);e.arr=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(t){return a.isEmpty(t)?t:a.toArray(t)},e.prototype.isValid=function(t,e){return Array.isArray(t)},e.prototype.getComparator=function(t,e){var n=t.length-e.length;if(0!==n)return n;var r=this.getTypeComparator();if(!r)throw"Cannot compare arrays before a type with a comparator is specified";for(var o=0;o<t.length;o++){var i=r(t[o],e[o]);if(0!==i)return i}return 0},e.prototype.getTypeValidator=function(){return this.typeValidator?this.typeValidator:this.parent&&this.parent.getTypeValidator?this.parent.getTypeValidator():void 0},e.prototype.getTypeComparator=function(){var t=this.getTypeValidator();if(t)return t.comparator},e.prototype.type=function(t,e){return void 0===e&&(e=!1),this.validate(function(n,r,o,s){return i(this,void 0,void 0,function(){var o,i,a,c,f,p,l,h,y;return u(this,function(u){switch(u.label){case 0:this.typeValidator=t,o=[],i=n.slice(),a=[],c=!0,y=0,u.label=1;case 1:return y<n.length?[4,t.runAsTuple(n[y])]:[3,4];case 2:f=u.sent(),p=f[0],l=f[1],h=f[2],p?i[y]=l:e?a.push(y):(o[y]=h,c=!1),u.label=3;case 3:return y++,[3,1];case 4:if(!c)return[3,6];if(a.length>0)for(y=a.length-1;y>=0;y--)i.splice(a[y],1);return[4,r(i)];case 5:return u.sent(),[3,7];case 6:s(o),u.label=7;case 7:return[2]}})})})},e.prototype.minLength=function(t){return this.is(function(e){return e.length>=a.resolve(t)}).message("minLength")},e.prototype.maxLength=function(t){return this.is(function(e){return e.length<=a.resolve(t)}).message("maxLength")},e.prototype.every=function(t){return this.is(function(e){return e.every(t)}).message("every")},e.prototype.some=function(t){return this.is(function(e){return e.some(t)}).message("some")},e.prototype.reverse=function(){return this.transform(function(t){return t.slice().reverse()})},e.prototype.filter=function(t){return this.transform(function(e){return e.filter(t)})},e.prototype.sort=function(t){return void 0===t&&(t=this.getTypeComparator()),this.transform(function(e){return e.slice().sort(t)})},e.prototype.map=function(t){return this.transform(function(e){return e.map(t)})},e.prototype.unique=function(t){return this.is(function(e){if(!t&&!(t=this.getTypeComparator()))throw"Cannot ensure unique values when a type or comparator has not been specified";for(var n=0;n<e.length-1;n++)for(var r=1;r<e.length;r++)if(0===t(e[n],e[r]))return!1;return!0}).message("unique")},e.prototype.removeDuplicates=function(t){return this.transform(function(e){if(!t&&!(t=this.getTypeComparator()))throw"Cannot remove duplicate values when a type or comparator has not been specified";for(var n=e.slice(),r=0;r<n.length-1;r++)for(var o=r+1;o<n.length;o++)0===t(n[r],n[o])&&n.splice(o--,1);return n})},e}(s.Validator);e.ValidatorArray=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);e.bool=function(){var t=this;return new a(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.truthy=/^(true|1|yes|y)$/i,e.falsy=/^(false|0|no|n)$/i,e}return o(e,t),e.prototype.parse=function(t){return!!this.truthy.test(t+"")||!this.falsy.test(t+"")&&t},e.prototype.isValid=function(t,e){return"boolean"==typeof t},e.prototype.getComparator=function(t,e){return(t?1:0)-(e?1:0)},e.prototype.withTruthy=function(t){return this.truthy=t,this},e.prototype.withFalsy=function(t){return this.falsy=t,this},e}(s.Validator);e.ValidatorBoolean=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),a=n(1);e.date=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(t){return new Date(t)},e.prototype.isValid=function(t,e){return t instanceof Date&&isFinite(t.getTime())},e.prototype.getComparator=function(t,e){return t.getTime()-e.getTime()},e.prototype.isWeekday=function(t){return this.is(function(e){return-1!==a.resolve(t).indexOf(e.getDay())}).message("isWeekday")},e.prototype.isDayOfMonth=function(t){return this.is(function(e){return-1!==a.resolve(t).indexOf(e.getDate())}).message("isDayOfMonth")},e.prototype.isMonth=function(t){return this.is(function(e){return-1!==a.resolve(t).indexOf(e.getMonth())}).message("isMonth")},e.prototype.endOfDay=function(){return this.transform(function(t){return t.setHours(23,59,59,999),t})},e.prototype.startOfDay=function(){return this.transform(function(t){return t.setHours(0,0,0,0),t})},e.prototype.endOfWeek=function(){return this.transform(function(t){return t.setDate(t.getDate()+(6-t.getDay())),t})},e.prototype.startOfWeek=function(){return this.transform(function(t){return t.setDate(t.getDate()-t.getDay()),t})},e.prototype.endOfMonth=function(){return this.transform(function(t){return t.setDate(1),t.setMonth(t.getMonth()+1),t.setDate(0),t})},e.prototype.startOfMonth=function(){return this.transform(function(t){return t.setDate(1),t})},e.prototype.endOfYear=function(){return this.transform(function(t){return t.setDate(1),t.setMonth(12),t.setDate(0),t})},e.prototype.startOfYear=function(){return this.transform(function(t){return t.setDate(1),t.setMonth(0),t})},e.prototype.getTime=function(){return this.transform(function(t){return t.getTime()})},e}(s.Validator);e.ValidatorDate=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=n(0);e.str=function(){var t=this;return new c(function(e,n){return i(t,void 0,void 0,function(){return u(this,function(t){return[2,n(e)]})})})};var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(t){return null==t?t:t+""},e.prototype.isValid=function(t,e){return s.isString(t)},e.prototype.getComparator=function(t,e){return t.localeCompare(e)},e.prototype.insensitive=function(){return this.withComparator(function(t,e){return t.toLowerCase().localeCompare(e.toLowerCase())})},e.prototype.exists=function(){return this.is(function(t){return t.length>0}).message("exists")},e.prototype.isLower=function(){return this.is(function(t){return t.toLowerCase()===t}).message("isLower")},e.prototype.isUpper=function(){return this.is(function(t){return t.toUpperCase()===t}).message("isUpper")},e.prototype.like=function(t){return this.is(function(e){return s.resolve(t).test(e)}).message("like")},e.prototype.unlike=function(t){return this.is(function(e){return!s.resolve(t).test(e)}).message("unlike")},e.prototype.minLength=function(t){return this.is(function(e){return e.length>=s.resolve(t)}).message("minLength")},e.prototype.maxLength=function(t){return this.is(function(e){return e.length<=s.resolve(t)}).message("maxLength")},e.prototype.colorHex=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=!1),this.like(t?e?/^#[0-9a-f]{6}$/i:/^#?[0-9a-f]{6}$/i:/^[0-9a-f]{6}$/i).message("colorHex")},e.prototype.colorShortHex=function(t,e){return void 0===t&&(t=!0),void 0===e&&(e=!1),this.like(t?e?/^#[0-9a-f]{3}$/i:/^#?[0-9a-f]{3}$/i:/^[0-9a-f]{3}$/i).message("colorShortHex")},e.prototype.colorRGB=function(t){return void 0===t&&(t=!1),this.like(t?/^rgb\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*\)$/i:/^rgb\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*\)$/i).message("colorRGB")},e.prototype.colorRGBA=function(t){return void 0===t&&(t=!1),this.like(t?/^rgba\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\d\s*%|[1-9]\d\s*%|100\s*%)\s*,\s*[01]?\.?\d*\s*\)$/i:/^rgba\s*\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*[01]?\.?\d*\s*\)$/i).message("colorRGBA")},e.prototype.color=function(t,e,n){return void 0===t&&(t=!1),void 0===e&&(e=!0),void 0===n&&(n=!1),this.or(function(r){return[r.colorHex(e,n),r.colorShortHex(e,n),r.colorRGB(t),r.colorRGBA(t)]}).message("color")},e.prototype.linkless=function(){return this.unlike(/(\.|dot)\s*([a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)/i).message("linkless")},e.prototype.uuid=function(){return this.like(/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/).message("uuid")},e.prototype.ipv4=function(){return this.like(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/).message("ipv4")},e.prototype.ipv6=function(){return this.like(/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/).message("ipv6")},e.prototype.isbn=function(){return this.like(/^(ISBN\s)?(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/).message("isbn")},e.prototype.phoneUS=function(){return this.like(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/).message("phoneUS")},e.prototype.zipUS=function(){return this.like(/^\d{5}$|^\d{5}-\d{4}$/).message("zipUS")},e.prototype.alphaNumeric=function(){return this.like(/^[a-zA-Z0-9]*$/).message("alphaNumeric")},e.prototype.alpha=function(){return this.like(/^[a-zA-Z]*$/).message("alpha")},e.prototype.token=function(){return this.like(/^\w*$/).message("token")},e.prototype.hex=function(){return this.like(/^[0-9a-f]$/i).message("hex")},e.prototype.base64=function(){return this.like(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/).message("base64")},e.prototype.http=function(){return this.like(/http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/).message("http")},e.prototype.https=function(){return this.like(/https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/).message("https")},e.prototype.url=function(t){return void 0===t&&(t=!1),(t?this.or(function(t){return[t.http(),t.https()]}):this.like(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)).message("url")},e.prototype.email=function(){return this.like(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/).message("email")},e.prototype.creditCard=function(){return this.like(/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/).message("creditCard")},e.prototype.replace=function(t,e){return this.transform(function(n){return n.replace(s.resolve(t),s.resolve(e))})},e.prototype.truncate=function(t){return this.transform(function(e){return e.length<=t?e:e.substring(0,t)})},e.prototype.trim=function(){return this.transform(function(t){return t.trim()})},e.prototype.ltrim=function(){return this.transform(function(t){return t.replace(/^\s+/,"")})},e.prototype.rtrim=function(){return this.transform(function(t){return t.replace(/\s+$/,"")})},e.prototype.lower=function(){return this.transform(function(t){return t.toLowerCase()})},e.prototype.upper=function(){return this.transform(function(t){return t.toUpperCase()})},e.prototype.strip=function(t){return this.transform(function(e){return e.replace(t,"")})},e.prototype.encode=function(){return this.transform(function(t){return encodeURI(t)})},e.prototype.encodeComponent=function(){return this.transform(function(t){return encodeURIComponent(t)})},e.prototype.decode=function(){return this.transform(function(t){return decodeURI(t)})},e.prototype.decodeComponent=function(){return this.transform(function(t){return decodeURIComponent(t)})},e.prototype.normalizeEmail=function(){var t=/\+.*$/,e=/\.|\+.*$/g,n={"gmail.com":{cut:e},"googlemail.com":{cut:e,aliasOf:"gmail.com"},"hotmail.com":{cut:t},"live.com":{cut:e},"outlook.com":{cut:t}};return this.transform(function(t){var e=t.toLowerCase().split(/@/);if(2!==e.length)return t;var r=e[0],o=e[1];return n[o]&&(n[o].cut&&(r=r.replace(n[o].cut,"")),n[o].aliasOf&&(o=n[o].aliasOf)),r+"@"+o})},e}(a.Validator);e.ValidatorString=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(3);e.geo=function(t){return r.obj().json().eval(t).props({lat:o.float().required().message("Latitude is required").between(-90,90).message(function(t){return"Latitude must be between -90 and 90 degrees: "+t}),lng:o.float().required().message("Longitude is required").between(-180,180).message(function(t){return"Longitude must be between -180 and 180 degrees: "+t})}).transform(function(t){var e=t.lat;return{type:"Point",coordinates:[t.lng,e]}})}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.getRouteHandler=function(t,e){return void 0===e&&(e=!0),function(n,u){var s=this,a=i.obj().json().eval(e).props(n);return function(e,n,i){return r(s,void 0,void 0,function(){var r,s,c;return o(this,function(o){switch(o.label){case 0:return[4,a.runAsTuple(e[t])];case 1:return r=o.sent(),s=r[0],r[1],c=r[2],s||void 0===c?i():u(c,e,n,i),[2]}})})}}}}])});
//# sourceMappingURL=valid8or.js.map