(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      Stable is ', '\n\n      <select onchange=', '>\n        ', '\n      </select>\n\n      <p>\n        All of the following methods are available under the <code>diff</code>\n        namespace and you can alternatively import them individually using\n        CommonJS or ES-2015 modules. The examples shown use the ES-2015 modules\n        format. If you want to use this format as well, you\'ll need a\n        transpiler like <a href="https://babeljs.io/">Babel</a>.\n      </p>\n\n      <hr>\n\n      <ul class="methods">\n        ', '\n      </ul>\n\n      <hr>\n\n      <section class="comments">\n        ', '\n        </section>\n    '], ['\n      Stable is ', '\n\n      <select onchange=', '>\n        ', '\n      </select>\n\n      <p>\n        All of the following methods are available under the <code>diff</code>\n        namespace and you can alternatively import them individually using\n        CommonJS or ES-2015 modules. The examples shown use the ES-2015 modules\n        format. If you want to use this format as well, you\'ll need a\n        transpiler like <a href="https://babeljs.io/">Babel</a>.\n      </p>\n\n      <hr>\n\n      <ul class="methods">\n        ', '\n      </ul>\n\n      <hr>\n\n      <section class="comments">\n        ', '\n        </section>\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['<option\n          data-ref="', '"\n          ', '\n        >\n          ', '\n        </option>'], ['<option\n          data-ref="', '"\n          ', '\n        >\n          ', '\n        </option>']),
    _templateObject3 = _taggedTemplateLiteral(['<li>\n          <a href="#', '">', '<strong class="args">(', ')</strong></a>\n        </li>'], ['<li>\n          <a href="#', '">', '<strong class="args">(', ')</strong></a>\n        </li>']),
    _templateObject4 = _taggedTemplateLiteral(['\n            <div class="comment">\n              <a class="header" id="', '" href="#', '"><h4 class="api-method">', '<strong class="args">(', ')</strong></h4></a>\n\n              <p class="push-left">\n                <a class="methods" href="#api">&nbsp; Back to API</a> |\n                <a class="view-on-github" href="', '">\n                  <i class="fa fa-github" aria-hidden="true"></i> View source on GitHub\n                </a>\n              </p>\n\n              <div>\n                ', '\n              </div>\n\n              <h5>', '</h5>\n\n              ', '\n\n              <h5>Arguments</h5>\n\n              ', '\n\n              <h5>Return value</h5>\n\n              ', '\n\n              <div class="gap"></div>\n              <hr>\n            </div>\n          '], ['\n            <div class="comment">\n              <a class="header" id="', '" href="#', '"><h4 class="api-method">', '<strong class="args">(', ')</strong></h4></a>\n\n              <p class="push-left">\n                <a class="methods" href="#api">&nbsp; Back to API</a> |\n                <a class="view-on-github" href="', '">\n                  <i class="fa fa-github" aria-hidden="true"></i> View source on GitHub\n                </a>\n              </p>\n\n              <div>\n                ', '\n              </div>\n\n              <h5>', '</h5>\n\n              ', '\n\n              <h5>Arguments</h5>\n\n              ', '\n\n              <h5>Return value</h5>\n\n              ', '\n\n              <div class="gap"></div>\n              <hr>\n            </div>\n          ']),
    _templateObject5 = _taggedTemplateLiteral(['\n                <pre><code class="javascript hljs">\n                  ', '\n                </code></pre>\n              '], ['\n                <pre><code class="javascript hljs">\n                  ', '\n                </code></pre>\n              ']),
    _templateObject6 = _taggedTemplateLiteral(['\n                <table class="details">\n                  <thead>\n                    <tr>\n                      <th>Name</th>\n                      <th>Description</th>\n                      <th>Default value</th>\n                      <th>Required</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    ', '\n                  </tbody>\n                </table>\n              '], ['\n                <table class="details">\n                  <thead>\n                    <tr>\n                      <th>Name</th>\n                      <th>Description</th>\n                      <th>Default value</th>\n                      <th>Required</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    ', '\n                  </tbody>\n                </table>\n              ']),
    _templateObject7 = _taggedTemplateLiteral(['<tr>\n                      <td class="strong">', '</td>\n                      <td>', '</td>\n                      <td><code>', '</code></td>\n                      <td>', '</td>\n                    </tr>'], ['<tr>\n                      <td class="strong">', '</td>\n                      <td>', '</td>\n                      <td><code>', '</code></td>\n                      <td>', '</td>\n                    </tr>']),
    _templateObject8 = _taggedTemplateLiteral(['\n                No arguments to display\n              '], ['\n                No arguments to display\n              ']),
    _templateObject9 = _taggedTemplateLiteral(['<p>\n                ', '\n              </p>'], ['<p>\n                ', '\n              </p>']),
    _templateObject10 = _taggedTemplateLiteral(['\n      No API data loaded.\n    '], ['\n      No API data loaded.\n    ']);

var _diffhtml = require('diffhtml');

require('proxy-polyfill/proxy.min');

require('whatwg-fetch');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _hljs = hljs,
    highlightAuto = _hljs.highlightAuto;

var ApiBrowser = function () {
  _createClass(ApiBrowser, [{
    key: 'render',
    value: function render() {
      var _this = this;

      setTimeout(function () {
        return _this.onRender();
      }, 10);

      return this.state.latestStable ? (0, _diffhtml.html)(_templateObject, this.state.latestStable, this.switchVersion.bind(this), this.state.refs.map(function (ref, i) {
        return (0, _diffhtml.html)(_templateObject2, encodeURIComponent(ref), ref === _this.state.ref ? 'selected' : '', _this.prettyPrint(ref, i));
      }), this.state.comments.map(function (comment) {
        return (0, _diffhtml.html)(_templateObject3, comment.ctx.name, comment.ctx.name, _this.makeArgs(comment.tags.filter(function (tag) {
          return tag.type === 'param';
        })));
      }), this.state.comments.map(function (comment) {
        var ref = _this.state.ref.split('/').slice(-1)[0];
        var url = _this.state.url + '/blob/' + ref + '/lib/index.js#L' + comment.codeStart;
        var returnValue = comment.tags.filter(function (tag) {
          return tag.type === 'return';
        });
        var examples = comment.tags.filter(function (tag) {
          return tag.type === 'example';
        });
        var params = comment.tags.filter(function (tag) {
          return tag.type === 'param';
        });

        return (0, _diffhtml.html)(_templateObject4, comment.ctx.name, comment.ctx.name, comment.ctx.name, _this.makeArgs(params), url, _this.strip('br', comment.description.full), examples.length > 1 ? 'Examples' : 'Example', examples.length ? examples.map(function (tag) {
          return (0, _diffhtml.html)(_templateObject5, (0, _diffhtml.html)(highlightAuto(_this.trimCode(tag.string), ['javascript']).value));
        }) : 'No examples', params.length ? (0, _diffhtml.html)(_templateObject6, params.map(function (tag) {
          return (0, _diffhtml.html)(_templateObject7, _this.getName(tag.name), tag.description ? (0, _diffhtml.html)(tag.description) : 'n/a', _this.getDefault(tag.name), String(!tag.optional));
        })) : (0, _diffhtml.html)(_templateObject8), returnValue.length ? (0, _diffhtml.html)(_templateObject9, returnValue[0].string) : (0, _diffhtml.html)('<code>undefined</code>'));
      })) : (0, _diffhtml.html)(_templateObject10);
    }
  }]);

  function ApiBrowser(mount) {
    var _this2 = this;

    _classCallCheck(this, ApiBrowser);

    this.mount = mount;

    var debounce = function debounce() {
      clearTimeout(debounce.timeout);
      debounce.timeout = setTimeout(function () {
        return (0, _diffhtml.innerHTML)(mount, _this2.render());
      }, 10);
    };

    var bindState = {
      get: function get(o, k) {
        return o[k];
      },
      set: function set(o, k, v) {
        o[k] = v;return !debounce();
      }
    };

    this.state = new Proxy({
      url: 'http://github.com/tbranyen/diffhtml',
      isFetching: false,
      ref: null,
      refs: null,
      comments: null,
      latestStable: null,
      output: null,
      repo: null,
      version: null
    }, bindState);

    var ref = location.pathname.slice(1);

    if (ref) {
      this.state.ref = ref;
    }

    this.state.isFetching = false;

    this.request = this.fetch(ref).then(function () {
      if (!ref) {
        _this2.state.ref = _this2.state.refs[1];
      }
      _this2.state.isFetching = false;
    });
  }

  _createClass(ApiBrowser, [{
    key: 'trimCode',
    value: function trimCode(src) {
      var whitespaceRegex = /(\s+).*/;
      var match = whitespaceRegex.exec(src);

      if (match) {
        var length = match[1].length;
        var leading = new RegExp(Array(length).fill('').join(' '), 'g');
        return src.replace(leading, '');
      }

      return src;
    }
  }, {
    key: 'makeArgs',
    value: function makeArgs(params) {
      return params.map(function (param) {
        return param.optional ? '[' + param.name + ']' : param.name;
      }).join(', ');
    }
  }, {
    key: 'switchVersion',
    value: function switchVersion(ev) {
      var option = ev.target.children[ev.target.selectedIndex];
      this.state.ref = option.dataset.ref;
      this.fetch(option.dataset.ref);
      location.href = '/' + option.dataset.ref + '#api';
    }
  }, {
    key: 'getName',
    value: function getName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return name.split('=')[0];
    }
  }, {
    key: 'getDefault',
    value: function getDefault() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var parts = name.split('=');

      return parts.length > 1 ? parts[1] : 'undefined';
    }
  }, {
    key: 'strip',
    value: function strip(tagName, contents) {
      var tree = (0, _diffhtml.html)(contents);

      var filter = function filter(childNodes) {
        return childNodes.map(function (childNode) {
          if (childNode.nodeName === tagName) {
            return (0, _diffhtml.createElement)('#text', null, ' ');
          }

          childNode.childNodes = filter(childNode.childNodes);

          return childNode;
        });
      };

      if (tree.childNodes) {
        tree.childNodes = filter(tree.childNodes);
      }

      if (Array.isArray(tree)) {
        tree = filter(tree);
      }

      return tree;
    }
  }, {
    key: 'prettyPrint',
    value: function prettyPrint(ref, count) {
      if (ref.indexOf('refs/heads') > -1) {
        return ref.slice('refs/heads/'.length) + ' (unstable) branch';
      } else if (ref.indexOf('refs/tags') > -1) {
        if (count === 1) {
          return 'v' + ref.slice('refs/tags/'.length) + ' (stable) tag';
        } else {
          return 'v' + ref.slice('refs/tags/'.length) + ' (outdated) tag';
        }
      } else if (ref.indexOf('refs/remotes') > -1) {
        return ref.slice('refs/remotes/'.length) + ' remote branch';
      }
    }
  }, {
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (version) {
      var _this3 = this;

      var request = fetch('/api/' + (version ? version : ''));
      var parseJSON = request.then(function (resp) {
        return resp.json();
      });

      return parseJSON.then(function (state) {
        return Object.assign(_this3.state, state);
      });
    })
  }]);

  return ApiBrowser;
}();

var browser = new ApiBrowser(document.querySelector('#api-browser'));
var sem = 0;

browser.onRender = function () {
  sem++;

  if (sem !== 2) {
    return;
  }

  var setTarget = function setTarget(selector) {
    var target = document.querySelector('a[href=\'' + selector + '\']');

    if (target) {
      [].concat(_toConsumableArray(document.querySelectorAll('.target'))).forEach(function (el) {
        return el.classList.remove('target');
      });
      target.classList.add('target');

      var link = document.querySelector(selector);

      if (link) {
        link.scrollIntoView(true);
      }
    }
  };

  var hash = location.hash;

  // This is due to the lack of server-side rendering for API docs. This should
  // be rectified.
  setTimeout(function () {
    return setTarget(hash);
  }, 100);

  var scrollTop = document.body.scrollTop;

  // Set up the anchor monitoring.
  var timeout = null;

  // Get all the headers in `section#content`.
  var nodes = document.querySelectorAll(('' + ['h1', 'h2', 'h3', 'h4', 'h5', 'a[id].header'].map(function (selector) {
    return '\n      section#content ' + selector + '\n    ';
  }).join(', ').trim()).trim());

  // Make up a table full of offsets.
  var headerTable = [].concat(_toConsumableArray(nodes)).map(function (el) {
    var top = el.getBoundingClientRect().top + scrollTop;
    var selector = '#' + el.id;
    var anchor = document.querySelector('nav a[href=\'' + selector + '\']');
    return { el: el, top: top, anchor: anchor };
  }).slice(1).filter(function (meta) {
    return meta.anchor;
  });

  var clearAll = function clearAll() {
    headerTable.forEach(function (meta) {
      return meta.anchor.classList.remove('target');
    });
  };

  var update = function update() {
    // Bring back some of the padding, so we can see the section title...
    scrollTop = document.body.scrollTop + 60;

    headerTable.sort(function (a, b) {
      return b.top - a.top;
    }).some(function (meta) {
      if (scrollTop > meta.top) {
        clearAll();

        if (scrollTop) {
          meta.anchor.classList.add('target');
          history.replaceState('', {}, meta.anchor.href);
        } else {
          history.replaceState('', {}, '/');
        }

        return true;
      }
    });
  };

  var delay = true;

  // Initial page delay.
  setTimeout(function () {
    delay = false;
  }, 100);

  var monitorAnchorTags = function monitorAnchorTags(options) {
    return function (ev) {
      if (delay) {
        return;
      }

      // If the timeout exists, return early.
      if (timeout) {
        return;
      }

      // Set a debounce timeout.
      timeout = setTimeout(function () {
        timeout = null;
        update();
      }, 200);
    };
  };

  document.onscroll = monitorAnchorTags();

  document.querySelector('nav ul').onclick = function (ev) {
    if (ev.target.parentNode.matches('a')) {
      ev.stopPropagation();
      ev.stopImmediatePropagation();

      timeout = true;
      setTarget(ev.target.parentNode.getAttribute('href'), { update: false });
      setTimeout(function () {
        return timeout = false;
      }, 200);
    }
  };

  document.querySelector('.open-menu').onclick = function (ev) {
    ev.stopImmediatePropagation();

    var body = document.querySelector('body');
    var content = document.querySelector('section#content');

    if (body.classList.contains('open')) {
      return body.onclick();
    }

    body.classList.add('open');

    body.onclick = function () {
      body.classList.remove('open');
      body.onclick = null;
    };
  };
};

},{"diffhtml":5,"proxy-polyfill/proxy.min":3,"whatwg-fetch":4}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
(function (global){
(function(d){function k(a){return a?"object"==typeof a||"function"==typeof a:!1}if(!d.Proxy){var l=null;d.a=function(a,c){function d(){}if(!k(a)||!k(c))throw new TypeError("Cannot create proxy with a non-object as target or handler");l=function(){d=function(b){throw new TypeError("Cannot perform '"+b+"' on a proxy that has been revoked");}};var f=c;c={get:null,set:null,apply:null,construct:null};for(var g in f){if(!(g in c))throw new TypeError("Proxy polyfill does not support trap '"+g+"'");c[g]=
f[g]}"function"==typeof f&&(c.apply=f.apply.bind(f));var e=this,m=!1,n="function"==typeof a;if(c.apply||c.construct||n)e=function(){var b=this&&this.constructor===e;d(b?"construct":"apply");if(b&&c.construct)return c.construct.call(this,a,arguments);if(!b&&c.apply)return c.apply(a,this,arguments);if(n)return b?(b=Array.prototype.slice.call(arguments),b.unshift(a),new (a.bind.apply(a,b))):a.apply(this,arguments);throw new TypeError(b?"not a constructor":"not a function");},m=!0;var p=c.get?function(b){d("get");
return c.get(this,b,e)}:function(b){d("get");return this[b]},r=c.set?function(b,a){d("set");c.set(this,b,a,e)}:function(a,c){d("set");this[a]=c},q={};Object.getOwnPropertyNames(a).forEach(function(b){m&&b in e||(Object.defineProperty(e,b,{enumerable:!!Object.getOwnPropertyDescriptor(a,b).enumerable,get:p.bind(a,b),set:r.bind(a,b)}),q[b]=!0)});f=!0;Object.setPrototypeOf?Object.setPrototypeOf(e,Object.getPrototypeOf(a)):e.__proto__?e.__proto__=a.__proto__:f=!1;if(c.get||!f)for(var h in a)q[h]||Object.defineProperty(e,
h,{get:p.bind(a,h)});Object.seal(a);Object.seal(e);return e};d.a.b=function(a,c){return{proxy:new d.a(a,c),revoke:l}};d.a.revocable=d.a.b;d.Proxy=d.a}})("undefined"!==typeof module&&module.exports?global:window);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (typeof input === 'string') {
      this.url = input
    } else {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split('\r\n').forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

},{}],5:[function(require,module,exports){
(function (process,global){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.diff = global.diff || {})));
}(this, (function (exports) { 'use strict';

// Associates DOM Nodes with state objects.
var StateCache = new Map();

// Associates Virtual Tree Elements with DOM Nodes.
var NodeCache = new Map();

// Caches all middleware. You cannot unset a middleware once it has been added.
var MiddlewareCache = new Set();

// Cache transition functions.
var TransitionCache = new Map();

// A modest size.
var size = 10000;

var free = new Set();
var allocate = new Set();
var _protect = new Set();
var shape = function shape() {
  return {
    rawNodeName: '',
    nodeName: '',
    nodeValue: '',
    nodeType: 1,
    key: '',
    childNodes: [],
    attributes: {}
  };
};

// Creates a pool to query new or reused values from.
var memory$1 = { free: free, allocated: allocate, protected: _protect };

// Prime the free memory pool with VTrees.
for (var i = 0; i < size; i++) {
  free.add(shape());
}

// Cache the values object, we'll refer to this iterator which is faster
// than calling it every single time. It gets replaced once exhausted.
var freeValues = free.values();

// Cache VTree objects in a pool which is used to get
var Pool = {
  size: size,
  memory: memory$1,

  get: function get() {
    var _freeValues$next = freeValues.next(),
        _freeValues$next$valu = _freeValues$next.value,
        value = _freeValues$next$valu === undefined ? shape() : _freeValues$next$valu,
        done = _freeValues$next.done;

    // This extra bit of work allows us to avoid calling `free.values()` every
    // single time an object is needed.


    if (done) {
      freeValues = free.values();
    }

    free.delete(value);
    allocate.add(value);
    return value;
  },
  protect: function protect(value) {
    allocate.delete(value);
    _protect.add(value);
  },
  unprotect: function unprotect(value) {
    if (_protect.has(value)) {
      _protect.delete(value);
      free.add(value);
    }
  }
};

var memory = Pool.memory;
var protect = Pool.protect;
var unprotect = Pool.unprotect;

/**
 * Ensures that an vTree is not recycled during a render cycle.
 *
 * @param vTree
 * @return vTree
 */

function protectVTree(vTree) {
  protect(vTree);

  for (var i = 0; i < vTree.childNodes.length; i++) {
    protectVTree(vTree.childNodes[i]);
  }

  return vTree;
}

/**
 * Allows an vTree to be recycled during a render cycle.
 *
 * @param vTree
 * @return
 */
function unprotectVTree(vTree) {
  unprotect(vTree);

  for (var i = 0; i < vTree.childNodes.length; i++) {
    unprotectVTree(vTree.childNodes[i]);
  }

  return vTree;
}

/**
 * Moves all unprotected allocations back into available pool. This keeps
 * diffHTML in a consistent state after synchronizing.
 */
function cleanMemory() {
  memory.allocated.forEach(function (vTree) {
    return memory.free.add(vTree);
  });
  memory.allocated.clear();

  // Clean out unused elements, if we have any elements cached that no longer
  // have a backing VTree, we can safely remove them from the cache.
  NodeCache.forEach(function (node, descriptor) {
    if (!memory.protected.has(descriptor)) {
      NodeCache.delete(descriptor);
    }
  });
}

// Namespace.
var namespace = 'http://www.w3.org/2000/svg';

// List of SVG elements.
var elements = ['altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use', 'view', 'vkern'];

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Support loading diffHTML in non-browser environments.
var g = (typeof global === 'undefined' ? 'undefined' : _typeof$1(global)) === 'object' ? global : window;
var element$1 = g.document ? document.createElement('div') : null;

/**
 * Decodes HTML strings.
 *
 * @see http://stackoverflow.com/a/5796718
 * @param string
 * @return unescaped HTML
 */
function decodeEntities(string) {
  // If there are no HTML entities, we can safely pass the string through.
  if (!element$1 || !string || !string.indexOf || !string.includes('&')) {
    return string;
  }

  element$1.innerHTML = string;
  return element$1.textContent;
}

/**
 * Tiny HTML escaping function, useful to protect against things like XSS and
 * unintentionally breaking attributes with quotes.
 *
 * @param {String} unescaped - An HTML value, unescaped
 * @return {String} - An HTML-safe string
 */
function escape(unescaped) {
  return unescaped.replace(/[&<>]/g, function (match) {
    return "&#" + match.charCodeAt(0) + ";";
  });
}

var marks = new Map();
var prefix = 'diffHTML';
var DIFF_PERF = 'diff_perf';

var hasSearch = typeof location !== 'undefined';
var hasArguments = typeof process !== 'undefined' && process.argv;
var nop = function nop() {};

var makeMeasure = (function (domNode, vTree) {
  // Check for these changes on every check.
  var wantsSearch = hasSearch && location.search.includes(DIFF_PERF);
  var wantsArguments = hasArguments && process.argv.includes(DIFF_PERF);
  var wantsPerfChecks = wantsSearch || wantsArguments;

  // If the user has not requested they want perf checks, return a nop
  // function.
  if (!wantsPerfChecks) {
    return nop;
  }

  return function (name) {
    // Use the Web Component name if it's available.
    if (domNode && domNode.host) {
      name = domNode.host.constructor.name + ' ' + name;
    } else if (typeof vTree.rawNodeName === 'function') {
      name = vTree.rawNodeName.name + ' ' + name;
    }

    var endName = name + '-end';

    if (!marks.has(name)) {
      marks.set(name, performance.now());
      performance.mark(name);
    } else {
      var totalMs = (performance.now() - marks.get(name)).toFixed(3);

      marks.delete(name);

      performance.mark(endName);
      performance.measure(prefix + ' ' + name + ' (' + totalMs + 'ms)', name, endName);
    }
  };
});

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArray = Array.isArray;

var fragmentName = '#document-fragment';

function createTree(input, attributes, childNodes) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  // If no input was provided then we return an indication as such.
  if (!input) {
    return null;
  }

  // If the first argument is an array, we assume this is a DOM fragment and
  // the array are the childNodes.
  if (isArray(input)) {
    childNodes = [];

    for (var i = 0; i < input.length; i++) {
      var newTree = createTree(input[i]);
      if (!newTree) {
        continue;
      }
      var isFragment = newTree.nodeType === 11;

      if (typeof newTree.rawNodeName === 'string' && isFragment) {
        var _childNodes;

        (_childNodes = childNodes).push.apply(_childNodes, _toConsumableArray$1(newTree.childNodes));
      } else {
        childNodes.push(newTree);
      }
    }

    return createTree(fragmentName, null, childNodes);
  }

  var isObject = (typeof input === 'undefined' ? 'undefined' : _typeof$2(input)) === 'object';

  // Crawl an HTML or SVG Element/Text Node etc. for attributes and children.
  if (input && isObject && 'parentNode' in input) {
    attributes = {};
    childNodes = [];

    // When working with a text node, simply save the nodeValue as the
    // initial value.
    if (input.nodeType === 3) {
      childNodes = input.nodeValue;
    }
    // Element types are the only kind of DOM node we care about attributes
    // from. Shadow DOM, Document Fragments, Text, Comment nodes, etc. can
    // ignore this.
    else if (input.nodeType === 1 && input.attributes.length) {
        attributes = {};

        for (var _i = 0; _i < input.attributes.length; _i++) {
          var _input$attributes$_i = input.attributes[_i],
              name = _input$attributes$_i.name,
              value = _input$attributes$_i.value;

          // If the attribute's value is empty, seek out the property instead.

          if (value === '' && name in input) {
            attributes[name] = input[name];
            continue;
          }

          attributes[name] = value;
        }
      }

    // Get the child nodes from an Element or Fragment/Shadow Root.
    if (input.nodeType === 1 || input.nodeType === 11) {
      if (input.childNodes.length) {
        childNodes = [];

        for (var _i2 = 0; _i2 < input.childNodes.length; _i2++) {
          childNodes.push(createTree(input.childNodes[_i2]));
        }
      }
    }

    var vTree = createTree(input.nodeName, attributes, childNodes);
    NodeCache.set(vTree, input);
    return vTree;
  }

  // Assume any object value is a valid VTree object.
  if (isObject) {
    return input;
  }

  // Support JSX-style children being passed.
  if (rest.length) {
    childNodes = [childNodes].concat(rest);
  }

  // Allocate a new VTree from the pool.
  var entry = Pool.get();
  var isTextNode = input === '#text';
  var isString = typeof input === 'string';

  entry.key = '';
  entry.rawNodeName = input;
  entry.nodeName = isString ? input.toLowerCase() : '#document-fragment';
  entry.childNodes.length = 0;
  entry.nodeValue = '';
  entry.attributes = {};

  if (isTextNode) {
    var _nodes = arguments.length === 2 ? attributes : childNodes;
    var nodeValue = isArray(_nodes) ? _nodes.join('') : _nodes;

    entry.nodeType = 3;
    entry.nodeValue = String(nodeValue || '');

    return entry;
  }

  if (input === fragmentName || typeof input !== 'string') {
    entry.nodeType = 11;
  } else if (input === '#comment') {
    entry.nodeType = 8;
  } else {
    entry.nodeType = 1;
  }

  var useAttributes = isArray(attributes) || (typeof attributes === 'undefined' ? 'undefined' : _typeof$2(attributes)) !== 'object';
  var nodes = useAttributes ? attributes : childNodes;
  var nodeArray = isArray(nodes) ? nodes : [nodes];

  if (nodes && nodeArray.length) {
    for (var _i3 = 0; _i3 < nodeArray.length; _i3++) {
      var newNode = nodeArray[_i3];

      // Assume objects are vTrees.
      if ((typeof newNode === 'undefined' ? 'undefined' : _typeof$2(newNode)) === 'object') {
        entry.childNodes.push(newNode);
      }
      // Cover generate cases where a user has indicated they do not want a
      // node from appearing.
      else if (newNode) {
          entry.childNodes.push(createTree('#text', null, newNode));
        }
    }
  }

  if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof$2(attributes)) === 'object' && !isArray(attributes)) {
    entry.attributes = attributes;
  }

  // If is a script tag and has a src attribute, key off that.
  if (entry.nodeName === 'script' && entry.attributes.src) {
    entry.key = String(entry.attributes.src);
  }

  // Set the `key` prop if passed as an attr, overrides `script[src]`.
  if (entry.attributes && 'key' in entry.attributes) {
    entry.key = String(entry.attributes.key);
  }

  return entry;
}

var empty = {};

// Reuse these maps, it's more performant to clear them than to recreate.
var oldKeys = new Map();
var newKeys = new Map();

var propToAttrMap = {
  className: 'class',
  htmlFor: 'for'
};

var addTreeOperations = function addTreeOperations(TREE_OPS, patchset) {
  var INSERT_BEFORE = patchset.INSERT_BEFORE,
      REMOVE_CHILD = patchset.REMOVE_CHILD,
      REPLACE_CHILD = patchset.REPLACE_CHILD;

  // We want to look if anything has changed, if nothing has we won't add it to
  // the patchset.

  if (INSERT_BEFORE || REMOVE_CHILD || REPLACE_CHILD) {
    TREE_OPS.push(patchset);
  }
};

function syncTree(oldTree, newTree, patches) {
  if (!newTree) {
    throw new Error('Missing new tree to sync into');
  }

  // Create new arrays for patches or use existing from a recursive call.
  patches = patches || {
    TREE_OPS: [],
    NODE_VALUE: [],
    SET_ATTRIBUTE: [],
    REMOVE_ATTRIBUTE: []
  };

  var _patches = patches,
      TREE_OPS = _patches.TREE_OPS,
      NODE_VALUE = _patches.NODE_VALUE,
      SET_ATTRIBUTE = _patches.SET_ATTRIBUTE,
      REMOVE_ATTRIBUTE = _patches.REMOVE_ATTRIBUTE;

  // Build up a patchset object to use for tree operations.

  var patchset = {
    INSERT_BEFORE: null,
    REMOVE_CHILD: null,
    REPLACE_CHILD: null
  };

  // Seek out attribute changes first, but only from element Nodes.
  if (newTree.nodeType === 1) {
    var oldAttributes = oldTree ? oldTree.attributes : empty;
    var newAttributes = newTree.attributes;

    // Search for sets and changes.

    for (var key in newAttributes) {
      var value = newAttributes[key];

      if (key in oldAttributes && oldAttributes[key] === newAttributes[key]) {
        continue;
      }

      if (oldTree) {
        oldAttributes[key] = value;
      }

      // Alias prop names to attr names for patching purposes.
      if (key in propToAttrMap) {
        key = propToAttrMap[key];
      }

      SET_ATTRIBUTE.push(oldTree || newTree, key, value);
    }

    if (oldTree) {
      // Search for removals.
      for (var _key in oldAttributes) {
        if (_key in newAttributes) {
          continue;
        }
        REMOVE_ATTRIBUTE.push(oldTree || newTree, _key);
        delete oldAttributes[_key];
      }
    }
  }

  // If both VTrees are text nodes and the values are different, change the
  // NODE_VALUE.
  if (newTree.nodeName === '#text') {
    if (oldTree && oldTree.nodeName === '#text') {
      if (oldTree.nodeValue !== newTree.nodeName) {
        NODE_VALUE.push(oldTree, newTree.nodeValue, oldTree.nodeValue);
        oldTree.nodeValue = newTree.nodeValue;
        addTreeOperations(TREE_OPS, patchset);
        return patches;
      }
    } else {
      NODE_VALUE.push(newTree, newTree.nodeValue, null);
      addTreeOperations(TREE_OPS, patchset);
      return patches;
    }
  }

  // If there was no oldTree specified, this is a new element so scan for
  // attributes.
  if (!oldTree) {
    // Dig into all nested children for attribute changes.
    for (var i = 0; i < newTree.childNodes.length; i++) {
      syncTree(null, newTree.childNodes[i], patches);
    }

    return patches;
  }

  var oldNodeName = oldTree.nodeName;
  var newNodeName = newTree.nodeName;


  if (oldNodeName !== newNodeName && newTree.nodeType !== 11) {
    throw new Error('Sync failure, cannot compare ' + newNodeName + ' with ' + oldNodeName);
  }

  var oldChildNodes = oldTree.childNodes;
  var newChildNodes = newTree.childNodes;

  // Determines if any of the elements have a key attribute. If so, then we can
  // safely assume keys are being used here for optimization/transition
  // purposes.

  var hasOldKeys = oldChildNodes.some(function (vTree) {
    return vTree.key;
  });
  var hasNewKeys = newChildNodes.some(function (vTree) {
    return vTree.key;
  });

  // If we are working with keys, we can follow an optimized path.
  if (hasOldKeys || hasNewKeys) {
    oldKeys.clear();
    newKeys.clear();

    // Put the old `childNode` VTree's into the key cache for lookup.
    for (var _i = 0; _i < oldChildNodes.length; _i++) {
      var vTree = oldChildNodes[_i];

      // Only add references if the key exists, otherwise ignore it. This
      // allows someone to specify a single key and keep that element around.
      if (vTree.key) {
        oldKeys.set(vTree.key, vTree);
      }
    }

    // Put the new `childNode` VTree's into the key cache for lookup.
    for (var _i2 = 0; _i2 < newChildNodes.length; _i2++) {
      var _vTree = newChildNodes[_i2];

      // Only add references if the key exists, otherwise ignore it. This
      // allows someone to specify a single key and keep that element around.
      if (_vTree.key) {
        newKeys.set(_vTree.key, _vTree);
      }
    }

    // Do a single pass over the new child nodes.
    for (var _i3 = 0; _i3 < newChildNodes.length; _i3++) {
      var oldChildNode = oldChildNodes[_i3];
      var newChildNode = newChildNodes[_i3];
      var newKey = newChildNode.key;

      // If there is no old element to compare to, this is a simple addition.

      if (!oldChildNode) {
        // Prefer an existing match to a brand new element.
        var optimalNewNode = newChildNode;

        if (patchset.INSERT_BEFORE === null) {
          patchset.INSERT_BEFORE = [];
        }
        patchset.INSERT_BEFORE.push(oldTree, optimalNewNode, null);
        oldChildNodes.push(optimalNewNode);
        syncTree(null, optimalNewNode, patches);
        continue;
      }

      var oldKey = oldChildNode.key;

      // Remove the old Node and insert the new node (aka replace).

      if (!newKeys.has(oldKey) && !oldKeys.has(newKey)) {
        if (patchset.REPLACE_CHILD === null) {
          patchset.REPLACE_CHILD = [];
        }
        patchset.REPLACE_CHILD.push(newChildNode, oldChildNode);
        oldChildNodes.splice(oldChildNodes.indexOf(oldChildNode), 1, newChildNode);
        continue;
      }
      // Remove the old node instead of replacing.
      else if (!newKeys.has(oldKey)) {
          if (patchset.REMOVE_CHILD === null) {
            patchset.REMOVE_CHILD = [];
          }
          patchset.REMOVE_CHILD.push(oldChildNode);
          oldChildNodes.splice(oldChildNodes.indexOf(oldChildNode), 1);
          _i3 = _i3 - 1;
          continue;
        }

      // If there is a key set for this new element, use that to figure out
      // which element to use.
      if (newKey !== oldKey) {
        var _optimalNewNode = newChildNode;

        // Prefer existing to new and remove from old position.
        if (newKey && oldKeys.has(newKey)) {
          _optimalNewNode = oldKeys.get(newKey);
          oldChildNodes.splice(oldChildNodes.indexOf(_optimalNewNode), 1);
        } else if (newKey) {
          _optimalNewNode = newChildNode;
        }

        if (patchset.INSERT_BEFORE === null) {
          patchset.INSERT_BEFORE = [];
        }
        patchset.INSERT_BEFORE.push(oldTree, _optimalNewNode, oldChildNode);
        oldChildNodes.splice(_i3, 0, _optimalNewNode);
        continue;
      }

      // If the element we're replacing is totally different from the previous
      // replace the entire element, don't bother investigating children.
      if (oldChildNode.nodeName !== newChildNode.nodeName) {
        if (patchset.REPLACE_CHILD === null) {
          patchset.REPLACE_CHILD = [];
        }
        patchset.REPLACE_CHILD.push(newChildNode, oldChildNode);
        oldTree.childNodes[_i3] = newChildNode;
        syncTree(null, newChildNode, patches);
        continue;
      }

      syncTree(oldChildNode, newChildNode, patches);
    }
  }

  // No keys used on this level, so we will do easier transformations.
  else {
      // Do a single pass over the new child nodes.
      for (var _i4 = 0; _i4 < newChildNodes.length; _i4++) {
        var _oldChildNode = oldChildNodes[_i4];
        var _newChildNode = newChildNodes[_i4];

        // If there is no old element to compare to, this is a simple addition.
        if (!_oldChildNode) {
          if (patchset.INSERT_BEFORE === null) {
            patchset.INSERT_BEFORE = [];
          }
          patchset.INSERT_BEFORE.push(oldTree, _newChildNode, null);
          oldChildNodes.push(_newChildNode);
          syncTree(null, _newChildNode, patches);
          continue;
        }

        // If the element we're replacing is totally different from the previous
        // replace the entire element, don't bother investigating children.
        if (_oldChildNode.nodeName !== _newChildNode.nodeName) {
          if (patchset.REPLACE_CHILD === null) {
            patchset.REPLACE_CHILD = [];
          }
          patchset.REPLACE_CHILD.push(_newChildNode, _oldChildNode);
          oldTree.childNodes[_i4] = _newChildNode;
          syncTree(null, _newChildNode, patches);
          continue;
        }

        syncTree(_oldChildNode, _newChildNode, patches);
      }
    }

  // We've reconciled new changes, so we can remove any old nodes and adjust
  // lengths to be equal.
  if (oldChildNodes.length !== newChildNodes.length) {
    for (var _i5 = newChildNodes.length; _i5 < oldChildNodes.length; _i5++) {
      if (patchset.REMOVE_CHILD === null) {
        patchset.REMOVE_CHILD = [];
      }
      patchset.REMOVE_CHILD.push(oldChildNodes[_i5]);
    }

    oldChildNodes.length = newChildNodes.length;
  }

  addTreeOperations(TREE_OPS, patchset);

  return patches;
}

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Adapted implementation from:
// https://github.com/ashi009/node-fast-html-parser

var hasNonWhitespaceEx = /\S/;
var doctypeEx = /<!.*>/i;
var attrEx = /\b([_a-z][_a-z0-9\-]*)\s*(=\s*("([^"]+)"|'([^']+)'|(\S+)))?/ig;
var spaceEx = /[^ ]/;
var tokenEx = /__DIFFHTML__([^_]*)__/;
var tagEx = /<!--[^]*?(?=-->)-->|<(\/?)([a-z\-\_][a-z0-9\-\_]*)\s*([^>]*?)(\/?)>/ig;

var blockText = new Set(['script', 'noscript', 'style', 'code', 'template']);

var selfClosing = new Set(['meta', 'img', 'link', 'input', 'area', 'br', 'hr', 'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

var kElementsClosedByOpening = {
  li: { li: true },
  p: { p: true, div: true },
  td: { td: true, th: true },
  th: { td: true, th: true }
};

var kElementsClosedByClosing = {
  li: { ul: true, ol: true },
  a: { div: true },
  b: { div: true },
  i: { div: true },
  p: { div: true },
  td: { tr: true, table: true },
  th: { tr: true, table: true }
};

/**
 * Interpolate dynamic supplemental values from the tagged template into the
 * tree.
 *
 * @param currentParent
 * @param string
 * @param supplemental
 */
var interpolateValues = function interpolateValues(currentParent, string) {
  var _currentParent$childN;

  var supplemental = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // If this is text and not a doctype, add as a text node.
  if (string && !doctypeEx.test(string) && !tokenEx.test(string)) {
    return currentParent.childNodes.push(createTree('#text', string));
  }

  var childNodes = [];
  var parts = string.split(tokenEx);
  var length = parts.length;


  for (var i = 0; i < parts.length; i++) {
    var value = parts[i];

    if (!value) {
      continue;
    }

    // When we split on the token expression, the capture group will replace
    // the token's position. So all we do is ensure that we're on an odd
    // index and then we can source the correct value.
    if (i % 2 === 1) {
      var innerTree = supplemental.children[value];
      if (!innerTree) {
        continue;
      }
      var isFragment = innerTree.nodeType === 11;

      if (typeof innerTree.rawNodeName === 'string' && isFragment) {
        childNodes.push.apply(childNodes, _toConsumableArray(innerTree.childNodes));
      } else {
        childNodes.push(innerTree);
      }
    } else if (!doctypeEx.test(value)) {
      childNodes.push(createTree('#text', value));
    }
  }

  (_currentParent$childN = currentParent.childNodes).push.apply(_currentParent$childN, childNodes);
};

/**
 * HTMLElement, which contains a set of children.
 *
 * Note: this is a minimalist implementation, no complete tree structure
 * provided (no parentNode, nextSibling, previousSibling etc).
 *
 * @param {String} nodeName - DOM Node name
 * @param {Object} rawAttrs - DOM Node Attributes
 * @param {Object} supplemental - Interpolated data from a tagged template
 * @return {Object} vTree
 */
var HTMLElement = function HTMLElement(nodeName, rawAttrs, supplemental) {
  var match = null;

  // Support dynamic tag names like: `<${MyComponent} />`.
  if (match = tokenEx.exec(nodeName)) {
    return HTMLElement(supplemental.tags[match[1]], rawAttrs, supplemental);
  }

  var attributes = {};

  // Migrate raw attributes into the attributes object used by the VTree.
  for (var _match; _match = attrEx.exec(rawAttrs || '');) {
    var name = _match[1];
    var value = _match[6] || _match[5] || _match[4] || _match[1];
    var tokenMatch = value.match(tokenEx);

    // If we have multiple interpolated values in an attribute, we must
    // flatten to a string. There are no other valid options.
    if (tokenMatch && tokenMatch.length) {
      var parts = value.split(tokenEx);
      var length = parts.length;


      var hasToken = tokenEx.exec(name);
      var newName = hasToken ? supplemental.attributes[hasToken[1]] : name;

      for (var i = 0; i < parts.length; i++) {
        var _value = parts[i];

        if (!_value) {
          continue;
        }

        // When we split on the token expression, the capture group will
        // replace the token's position. So all we do is ensure that we're on
        // an odd index and then we can source the correct value.
        if (i % 2 === 1) {
          if (attributes[newName]) {
            attributes[newName] += supplemental.attributes[_value];
          } else {
            attributes[newName] = supplemental.attributes[_value];
          }
        } else {
          if (attributes[newName]) {
            attributes[newName] += _value;
          } else {
            attributes[newName] = _value;
          }
        }
      }
    } else if (tokenMatch = tokenEx.exec(name)) {
      var nameAndValue = supplemental.attributes[tokenMatch[1]];
      var _hasToken = tokenEx.exec(value);
      var getValue = _hasToken ? supplemental.attributes[_hasToken[1]] : value;

      attributes[nameAndValue] = value === '""' ? '' : getValue;
    } else {
      attributes[name] = value === '""' ? '' : value;
    }
  }

  return createTree(nodeName, attributes, []);
};

/**
 * Parses HTML and returns a root element
 *
 * @param {String} html - String of HTML markup to parse into a Virtual Tree
 * @param {Object} supplemental - Dynamic interpolated data values
 * @param {Object} options - Contains options like silencing warnings
 * @return {Object} - Parsed Virtual Tree Element
 */
function parse(html, supplemental) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var root = createTree('#document-fragment', null, []);
  var stack = [root];
  var currentParent = root;
  var lastTextPos = -1;
  var preLastTextPos = -1;

  // If there are no HTML elements, treat the passed in html as a single
  // text node.
  if (html.indexOf('<') === -1 && html) {
    interpolateValues(currentParent, html, supplemental);
    return root;
  }

  // Look through the HTML markup for valid tags.
  for (var match, text; match = tagEx.exec(html);) {
    if (lastTextPos > -1) {
      if (lastTextPos + match[0].length < tagEx.lastIndex) {
        text = html.slice(lastTextPos, tagEx.lastIndex - match[0].length);

        // Do not process leading whitespace in a tagged template.
        if (preLastTextPos === -1 ? hasNonWhitespaceEx.test(text) : text) {
          interpolateValues(currentParent, text, supplemental);
        }
      }
    }

    var matchOffset = tagEx.lastIndex - match[0].length;

    if (lastTextPos === -1 && matchOffset > 0) {
      var string = html.slice(0, matchOffset);

      if (string && hasNonWhitespaceEx.test(string) && !doctypeEx.exec(string)) {
        interpolateValues(currentParent, string, supplemental);
      }
    }

    preLastTextPos = lastTextPos;
    lastTextPos = tagEx.lastIndex;

    // This is a comment (TODO support these).
    if (match[0][1] === '!') {
      continue;
    }

    if (!match[1]) {
      // not </ tags
      var attrs = {};

      if (!match[4] && kElementsClosedByOpening[currentParent.rawNodeName]) {
        if (kElementsClosedByOpening[currentParent.rawNodeName][match[2]]) {
          stack.pop();
          currentParent = stack[stack.length - 1];
        }
      }

      currentParent = currentParent.childNodes[currentParent.childNodes.push(HTMLElement(match[2], match[3], supplemental)) - 1];

      stack.push(currentParent);

      if (blockText.has(match[2])) {
        // A little test to find next </script> or </style> ...
        var closeMarkup = '</' + match[2] + '>';
        var index = html.indexOf(closeMarkup, tagEx.lastIndex);
        var length = match[2].length;


        if (index === -1) {
          lastTextPos = tagEx.lastIndex = html.length + 1;
        } else {
          lastTextPos = index + closeMarkup.length;
          tagEx.lastIndex = lastTextPos;
          match[1] = true;
        }

        var newText = html.slice(match.index + match[0].length, index);
        interpolateValues(currentParent, newText.trim(), supplemental);
      }
    }

    if (match[1] || match[4] || selfClosing.has(match[2])) {
      if (match[2] !== currentParent.rawNodeName && options.strict) {
        var nodeName = currentParent.rawNodeName;

        // Find a subset of the markup passed in to validate.
        var markup = html.slice(tagEx.lastIndex - match[0].length).split('\n').slice(0, 3);

        // Position the caret next to the first non-whitespace character.
        var caret = Array(spaceEx.exec(markup[0]).index).join(' ') + '^';

        // Craft the warning message and inject it into the markup.
        markup.splice(1, 0, caret + '\nPossibly invalid markup. Saw ' + match[2] + ', expected ' + nodeName + '...\n        ');

        // Throw an error message if the markup isn't what we expected.
        throw new Error('\n\n' + markup.join('\n'));
      }

      var tokenMatch = tokenEx.exec(match[2]);

      // </ or /> or <br> etc.
      while (currentParent) {
        // Self closing dynamic nodeName.
        if (match[4] === '/' && tokenMatch) {
          stack.pop();
          currentParent = stack[stack.length - 1];

          break;
        }
        // Not self-closing, so seek out the next match.
        else if (tokenMatch) {
            var value = supplemental.tags[tokenMatch[1]];

            if (currentParent.rawNodeName === value) {
              stack.pop();
              currentParent = stack[stack.length - 1];

              break;
            }
          }

        if (currentParent.rawNodeName === match[2]) {
          stack.pop();
          currentParent = stack[stack.length - 1];

          break;
        } else {
          var tag = kElementsClosedByClosing[currentParent.rawNodeName];

          // Trying to close current tag, and move on
          if (tag) {
            if (tag[match[2]]) {
              stack.pop();
              currentParent = stack[stack.length - 1];

              continue;
            }
          }

          // Use aggressive strategy to handle unmatching markups.
          break;
        }
      }
    }
  }

  // Find any last remaining text after the parsing completes over tags.
  var remainingText = html.slice(lastTextPos === -1 ? 0 : lastTextPos).trim();

  // Ensure that all values are properly interpolated through the remaining
  // markup after parsing.
  if (remainingText) {
    interpolateValues(currentParent, remainingText, supplemental);
  }

  // This is an entire document, so only allow the HTML children to be
  // body or head.
  if (root.childNodes.length && root.childNodes[0].nodeName === 'html') {
    (function () {
      // Store elements from before body end and after body end.
      var head = { before: [], after: [] };
      var body = { after: [] };
      var HTML = root.childNodes[0];

      var beforeHead = true;
      var beforeBody = true;

      // Iterate the children and store elements in the proper array for
      // later concat, replace the current childNodes with this new array.
      HTML.childNodes = HTML.childNodes.filter(function (el) {
        // If either body or head, allow as a valid element.
        if (el.nodeName === 'body' || el.nodeName === 'head') {
          if (el.nodeName === 'head') beforeHead = false;
          if (el.nodeName === 'body') beforeBody = false;

          return true;
        }
        // Not a valid nested HTML tag element, move to respective container.
        else if (el.nodeType === 1) {
            if (beforeHead && beforeBody) head.before.push(el);else if (!beforeHead && beforeBody) head.after.push(el);else if (!beforeBody) body.after.push(el);
          }
      });

      // Ensure the first element is the HEAD tag.
      if (!HTML.childNodes[0] || HTML.childNodes[0].nodeName !== 'head') {
        var headInstance = createTree('head', null, []);
        var existing = headInstance.childNodes;

        existing.unshift.apply(existing, head.before);
        existing.push.apply(existing, head.after);
        HTML.childNodes.unshift(headInstance);
      } else {
        var _existing = HTML.childNodes[0].childNodes;

        _existing.unshift.apply(_existing, head.before);
        _existing.push.apply(_existing, head.after);
      }

      // Ensure the second element is the body tag.
      if (!HTML.childNodes[1] || HTML.childNodes[1].nodeName !== 'body') {
        var bodyInstance = createTree('body', null, []);
        var _existing2 = bodyInstance.childNodes;

        _existing2.push.apply(_existing2, body.after);
        HTML.childNodes.push(bodyInstance);
      } else {
        var _existing3 = HTML.childNodes[1].childNodes;
        _existing3.push.apply(_existing3, body.after);
      }
    })();
  }

  // Reset regular expression positions per parse.
  attrEx.lastIndex = 0;
  tagEx.lastIndex = 0;

  return root;
}



var internals = Object.freeze({
	StateCache: StateCache,
	NodeCache: NodeCache,
	MiddlewareCache: MiddlewareCache,
	TransitionCache: TransitionCache,
	protectVTree: protectVTree,
	unprotectVTree: unprotectVTree,
	cleanMemory: cleanMemory,
	namespace: namespace,
	elements: elements,
	decodeEntities: decodeEntities,
	escape: escape,
	makeMeasure: makeMeasure,
	Pool: Pool,
	parse: parse
});

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * If diffHTML is rendering anywhere asynchronously, we need to wait until it
 * completes before this render can be executed. This sets up the next
 * buffer, if necessary, which serves as a Boolean determination later to
 * `bufferSet`.
 *
 * @param {Object} nextTransaction - The Transaction instance to schedule
 * @return {Boolean} - Value used to terminate a transaction render flow
 */
function schedule(transaction) {
  // The state is a global store which is shared by all like-transactions.
  var state = transaction.state;

  // If there is an in-flight transaction render happening, push this
  // transaction into a queue.

  if (state.isRendering) {
    var _ret = function () {
      // Resolve an existing transaction that we're going to pave over in the
      // next statement.
      if (state.nextTransaction) {
        state.nextTransaction.promises[0].resolve(state.nextTransaction);
      }

      // Set a pointer to this current transaction to render immediatately after
      // the current transaction completes.
      state.nextTransaction = transaction;

      var deferred = {};
      var resolver = new Promise(function (resolve) {
        return deferred.resolve = resolve;
      });

      resolver.resolve = deferred.resolve;
      transaction.promises = [resolver];

      return {
        v: transaction.abort()
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof$3(_ret)) === "object") return _ret.v;
  }

  // Indicate we are now rendering a transaction for this DOM Node.
  state.isRendering = true;
}

function shouldUpdate(transaction) {
  var markup = transaction.markup,
      state = transaction.state,
      measure = transaction.state.measure;


  measure('should update');

  // If the contents haven't changed, abort the flow. Only support this if
  // the new markup is a string, otherwise it's possible for our object
  // recycling to match twice.
  if (typeof markup === 'string' && state.markup === markup) {
    return transaction.abort();
  } else if (typeof markup === 'string') {
    state.markup = markup;
  }

  measure('should update');
}

function reconcileTrees(transaction) {
  var state = transaction.state,
      measure = transaction.state.measure,
      domNode = transaction.domNode,
      markup = transaction.markup,
      options = transaction.options;
  var previousMarkup = state.previousMarkup,
      previousText = state.previousText;
  var inner = options.inner;


  measure('reconcile trees');

  // This looks for changes in the DOM from what we'd expect. This means we
  // need to rebuild the old Virtual Tree. This allows for keeping our tree
  // in sync with unexpected DOM changes. It's not very performant, so
  // ideally you should never change markup that diffHTML affects from
  // outside of diffHTML if performance is a concern.
  var sameInnerHTML = inner ? previousMarkup === domNode.innerHTML : true;
  var sameOuterHTML = inner ? true : previousMarkup === domNode.outerHTML;
  var sameTextContent = previousText === domNode.textContent;

  // We rebuild the tree whenever the DOM Node changes, including the first
  // time we patch a DOM Node.
  if (!sameInnerHTML || !sameOuterHTML || !sameTextContent) {
    if (state.oldTree) {
      unprotectVTree(state.oldTree);
    }

    // Set the `oldTree` in the state as-well-as the transaction. This allows
    // it to persist with the DOM Node and also be easily available to
    // middleware and transaction tasks.
    state.oldTree = createTree(domNode);

    // We need to keep these objects around for comparisons.
    protectVTree(state.oldTree);
  }

  // Associate the old tree with this brand new transaction.
  transaction.oldTree = state.oldTree;

  // We need to ensure that our target to diff is a Virtual Tree Element. This
  // function takes in whatever `markup` is and normalizes to a tree object.
  // The callback function runs on every normalized Node to wrap childNodes
  // in the case of setting innerHTML.

  // This is HTML Markup, so we need to parse it.
  if (typeof markup === 'string') {
    var _parse = parse(markup, null, options),
        childNodes = _parse.childNodes;

    // If we are dealing with innerHTML, use all the Nodes. If we're dealing
    // with outerHTML, we can only support diffing against a single element,
    // so pick the first one.


    transaction.newTree = createTree(!inner && childNodes.length === 1 ? childNodes[0] : childNodes);
  }

  // Only create a document fragment for inner nodes if the user didn't already
  // pass an array. If they pass an array, `createTree` will auto convert to
  // a fragment.
  else if (options.inner) {
      var _transaction$oldTree = transaction.oldTree,
          nodeName = _transaction$oldTree.nodeName,
          attributes = _transaction$oldTree.attributes;

      var newTree = createTree(markup);
      var isFragment = newTree.nodeType === 11;

      transaction.newTree = createTree(nodeName, attributes, newTree);

      // Flatten the fragment.
      if (typeof newTree.rawNodeName === 'string' && isFragment) {
        transaction.newTree.childNodes = newTree.childNodes;
      }
    }

    // Everything else gets passed into `createTree` to be figured out.
    else {
        transaction.newTree = createTree(markup);
      }

  measure('reconcile trees');
}

/**
 * Takes in a Virtual Tree Element (VTree) and creates a DOM Node from it.
 * Sets the node into the Node cache. If this VTree already has an
 * associated node, it will reuse that.
 *
 * @param {Object} - A Virtual Tree Element or VTree-like element
 * @param {Object} - Document to create Nodes in
 * @return {Object} - A DOM Node matching the vTree
 */
function createNode(vTree) {
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (!vTree) {
    throw new Error('Missing VTree when trying to create DOM Node');
  }

  var existingNode = NodeCache.get(vTree);

  // If the DOM Node was already created, reuse the existing node.
  if (existingNode) {
    return existingNode;
  }

  var nodeName = vTree.nodeName,
      _vTree$childNodes = vTree.childNodes,
      childNodes = _vTree$childNodes === undefined ? [] : _vTree$childNodes;

  // Will vary based on the properties of the VTree.

  var domNode = null;

  // Create empty text elements. They will get filled in during the patch
  // process.
  if (nodeName === '#text') {
    domNode = doc.createTextNode(vTree.nodeValue);
  }
  // Support dynamically creating document fragments.
  else if (nodeName === '#document-fragment') {
      domNode = doc.createDocumentFragment();
    }
    // If the nodeName matches any of the known SVG element names, mark it as
    // SVG. The reason for doing this over detecting if nested in an <svg>
    // element, is that we do not currently have circular dependencies in the
    // VTree, by avoiding parentNode, so there is no way to crawl up the parents.
    else if (elements.indexOf(nodeName) > -1) {
        domNode = doc.createElementNS(namespace, nodeName);
      }
      // If not a Text or SVG Node, then create with the standard method.
      else {
          domNode = doc.createElement(nodeName);
        }

  // Add to the domNodes cache.
  NodeCache.set(vTree, domNode);

  // Append all the children into the domNode, making sure to run them
  // through this `createNode` function as well.
  for (var i = 0; i < childNodes.length; i++) {
    domNode.appendChild(createNode(childNodes[i], doc));
  }

  return domNode;
}

var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Available transition states.
var stateNames = ['attached', 'detached', 'replaced', 'attributeChanged', 'textChanged'];

// Sets up the states up so we can add and remove events from the sets.
stateNames.forEach(function (stateName) {
  return TransitionCache.set(stateName, new Set());
});

function addTransitionState(stateName, callback) {
  if (!stateName || !stateNames.includes(stateName)) {
    throw new Error('Invalid state name \'' + stateName + '\'');
  }

  if (!callback) {
    throw new Error('Missing transition state callback');
  }

  TransitionCache.get(stateName).add(callback);
}

function removeTransitionState(stateName, callback) {
  // Only validate the stateName if the caller provides one.
  if (stateName && !stateNames.includes(stateName)) {
    throw new Error('Invalid state name \'' + stateName + '\'');
  }

  // Remove all transition callbacks from state.
  if (!callback && stateName) {
    TransitionCache.get(stateName).clear();
  }
  // Remove a specific transition callback.
  else if (stateName && callback) {

      TransitionCache.get(stateName).delete(callback);
    }
    // Remove all callbacks.
    else {
        for (var i = 0; i < stateNames.length; i++) {
          TransitionCache.get(stateNames[i]).clear();
        }
      }
}

function runTransitions(setName) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var set = TransitionCache.get(setName);
  var promises = [];

  if (!set.size) {
    return promises;
  }

  // Ignore text nodes.
  if (setName !== 'textChanged' && args[0].nodeType === 3) {
    return promises;
  }

  // Run each transition callback, if on the attached/detached.
  set.forEach(function (callback) {
    var retVal = callback.apply(undefined, args);

    // Is a `thennable` object or Native Promise.
    if ((typeof retVal === 'undefined' ? 'undefined' : _typeof$5(retVal)) === 'object' && retVal.then) {
      promises.push(retVal);
    }
  });

  if (setName === 'attached' || setName === 'detached') {
    var element = args[0];

    [].concat(_toConsumableArray$3(element.childNodes)).forEach(function (childNode) {
      promises.push.apply(promises, _toConsumableArray$3(runTransitions.apply(undefined, [setName, childNode].concat(_toConsumableArray$3(args.slice(1))))));
    });
  }

  return promises;
}

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var blockText$1 = new Set(['script', 'noscript', 'style', 'code', 'template']);

var removeAttribute = function removeAttribute(domNode, name) {
  domNode.removeAttribute(name);

  if (name in domNode) {
    domNode[name] = undefined;
  }
};

function patchNode$$1(patches) {
  var promises = [];
  var TREE_OPS = patches.TREE_OPS,
      NODE_VALUE = patches.NODE_VALUE,
      SET_ATTRIBUTE = patches.SET_ATTRIBUTE,
      REMOVE_ATTRIBUTE = patches.REMOVE_ATTRIBUTE;

  // Set attributes.

  if (SET_ATTRIBUTE.length) {
    for (var i = 0; i < SET_ATTRIBUTE.length; i += 3) {
      var vTree = SET_ATTRIBUTE[i];
      var _name = SET_ATTRIBUTE[i + 1];
      var value = decodeEntities(SET_ATTRIBUTE[i + 2]);
      var domNode = createNode(vTree);
      var attributeChanged = TransitionCache.get('attributeChanged');
      var oldValue = domNode.getAttribute(_name);
      var newPromises = runTransitions('attributeChanged', domNode, _name, oldValue, value);

      // Triggered either synchronously or asynchronously depending on if a
      // transition was invoked.
      var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof$4(value)) === 'object';
      var isFunction = typeof value === 'function';

      // Events must be lowercased otherwise they will not be set correctly.
      var name = _name.indexOf('on') === 0 ? _name.toLowerCase() : _name;

      // Normal attribute value.
      if (!isObject && !isFunction && name) {
        var noValue = value === null || value === undefined;
        domNode.setAttribute(name, noValue ? '' : value);

        // Allow the user to find the real value in the DOM Node as a
        // property.
        try {
          domNode[name] = value;
        } catch (unhandledException) {}
      }
      // Support patching an object representation of the style object.
      else if (isObject && name === 'style') {
          var keys = Object.keys(value);

          for (var _i = 0; _i < keys.length; _i++) {
            domNode.style[keys[_i]] = value[keys[_i]];
          }
        } else if (typeof value !== 'string') {
          // We remove and re-add the attribute to trigger a change in a web
          // component or mutation observer. Although you could use a setter or
          // proxy, this is more natural.
          if (domNode.hasAttribute(name) && domNode[name] !== value) {
            domNode.removeAttribute(name, '');
          }

          // Necessary to track the attribute/prop existence.
          domNode.setAttribute(name, '');

          // Since this is a property value it gets set directly on the node.
          try {
            domNode[name] = value;
          } catch (unhandledException) {}
        }

      if (newPromises.length) {
        promises.push.apply(promises, _toConsumableArray$2(newPromises));
      }
    }
  }

  // Remove attributes.
  if (REMOVE_ATTRIBUTE.length) {
    var _loop = function _loop(_i2) {
      var vTree = REMOVE_ATTRIBUTE[_i2];
      var name = REMOVE_ATTRIBUTE[_i2 + 1];
      var domNode = NodeCache.get(vTree);
      var attributeChanged = TransitionCache.get('attributeChanged');
      var oldValue = domNode.getAttribute(name);
      var newPromises = runTransitions('attributeChanged', domNode, name, oldValue, null);

      if (newPromises.length) {
        Promise.all(newPromises).then(function () {
          return removeAttribute(domNode, name);
        });
        promises.push.apply(promises, _toConsumableArray$2(newPromises));
      } else {
        removeAttribute(domNode, name);
      }
    };

    for (var _i2 = 0; _i2 < REMOVE_ATTRIBUTE.length; _i2 += 2) {
      _loop(_i2);
    }
  }

  // First do all DOM tree operations, and then do attribute and node value.
  for (var _i3 = 0; _i3 < TREE_OPS.length; _i3++) {
    var _TREE_OPS$_i = TREE_OPS[_i3],
        INSERT_BEFORE = _TREE_OPS$_i.INSERT_BEFORE,
        REMOVE_CHILD = _TREE_OPS$_i.REMOVE_CHILD,
        REPLACE_CHILD = _TREE_OPS$_i.REPLACE_CHILD;

    // Insert/append elements.

    if (INSERT_BEFORE && INSERT_BEFORE.length) {
      for (var _i4 = 0; _i4 < INSERT_BEFORE.length; _i4 += 3) {
        var _vTree = INSERT_BEFORE[_i4];
        var newTree = INSERT_BEFORE[_i4 + 1];
        var referenceTree = INSERT_BEFORE[_i4 + 2];
        var _domNode = NodeCache.get(_vTree);
        var referenceNode = referenceTree && createNode(referenceTree);
        var attached = TransitionCache.get('attached');

        if (referenceTree) {
          protectVTree(referenceTree);
        }

        var newNode = createNode(newTree);
        protectVTree(newTree);

        // If refNode is `null` then it will simply append like `appendChild`.
        _domNode.insertBefore(newNode, referenceNode);

        var attachedPromises = runTransitions('attached', newNode);

        if (attachedPromises.length) {
          promises.push.apply(promises, _toConsumableArray$2(attachedPromises));
        }
      }
    }

    // Remove elements.
    if (REMOVE_CHILD && REMOVE_CHILD.length) {
      var _loop2 = function _loop2(_i5) {
        var vTree = REMOVE_CHILD[_i5];
        var domNode = NodeCache.get(vTree);
        var detached = TransitionCache.get('detached');
        var detachedPromises = runTransitions('detached', domNode);

        if (detachedPromises.length) {
          Promise.all(detachedPromises).then(function () {
            domNode.parentNode.removeChild(domNode);
            unprotectVTree(vTree);
          });

          promises.push.apply(promises, _toConsumableArray$2(detachedPromises));
        } else {
          domNode.parentNode.removeChild(domNode);
          unprotectVTree(vTree);
        }
      };

      for (var _i5 = 0; _i5 < REMOVE_CHILD.length; _i5++) {
        _loop2(_i5);
      }
    }

    // Replace elements.
    if (REPLACE_CHILD && REPLACE_CHILD.length) {
      var _loop3 = function _loop3(_i6) {
        var newTree = REPLACE_CHILD[_i6];
        var oldTree = REPLACE_CHILD[_i6 + 1];
        var oldDomNode = NodeCache.get(oldTree);
        var newDomNode = createNode(newTree);
        var attached = TransitionCache.get('attached');
        var detached = TransitionCache.get('detached');
        var replaced = TransitionCache.get('replaced');
        var attachedPromises = runTransitions('attached', newDomNode);
        var detachedPromises = runTransitions('detached', oldDomNode);
        var replacedPromises = runTransitions('replaced', oldDomNode, newDomNode);
        var allPromises = [].concat(_toConsumableArray$2(attachedPromises), _toConsumableArray$2(detachedPromises), _toConsumableArray$2(replacedPromises));

        // Always insert before to allow the element to transition.
        oldDomNode.parentNode.insertBefore(newDomNode, oldDomNode);

        if (allPromises.length) {
          promises.push(Promise.all(allPromises).then(function () {
            oldDomNode.parentNode.replaceChild(newDomNode, oldDomNode);
            protectVTree(newTree);
            unprotectVTree(oldTree);
          }));
        } else {
          oldDomNode.parentNode.replaceChild(newDomNode, oldDomNode);
          protectVTree(newTree);
          unprotectVTree(oldTree);
        }
      };

      for (var _i6 = 0; _i6 < REPLACE_CHILD.length; _i6 += 2) {
        _loop3(_i6);
      }
    }
  }

  // Change all nodeValues.
  if (NODE_VALUE.length) {
    for (var _i7 = 0; _i7 < NODE_VALUE.length; _i7 += 3) {
      var _vTree2 = NODE_VALUE[_i7];
      var nodeValue = NODE_VALUE[_i7 + 1];
      var _oldValue = NODE_VALUE[_i7 + 2];
      var _domNode2 = NodeCache.get(_vTree2);
      var textChanged = TransitionCache.get('textChanged');
      var textChangedPromises = runTransitions('textChanged', _domNode2, _oldValue, nodeValue);

      var parentNode = _domNode2.parentNode;


      if (nodeValue.includes('&')) {
        _domNode2.nodeValue = decodeEntities(nodeValue);
      } else {
        _domNode2.nodeValue = nodeValue;
      }

      if (parentNode && blockText$1.has(parentNode.nodeName.toLowerCase())) {
        parentNode.nodeValue = escape(decodeEntities(nodeValue));
      }

      if (textChangedPromises.length) {
        promises.push.apply(promises, _toConsumableArray$2(textChangedPromises));
      }
    }
  }

  return promises;
}

function syncTrees(transaction) {
  var _transaction$state = transaction.state,
      measure = _transaction$state.measure,
      oldTree = _transaction$state.oldTree,
      newTree = transaction.newTree,
      domNode = transaction.domNode;


  measure('sync trees');

  // Do a global replace of the element, unable to do this at a lower level.
  // Ignore this for document fragments, they don't appear in the DOM and we
  // treat them as transparent containers.
  if (oldTree.nodeName !== newTree.nodeName && newTree.nodeType !== 11) {
    transaction.patches = {
      TREE_OPS: [{ REPLACE_CHILD: [newTree, oldTree] }],
      SET_ATTRIBUTE: [],
      REMOVE_ATTRIBUTE: [],
      NODE_VALUE: []
    };

    unprotectVTree(transaction.oldTree);
    transaction.oldTree = transaction.state.oldTree = newTree;
    protectVTree(transaction.oldTree);

    // Update the StateCache since we are changing the top level element.
    StateCache.set(createNode(newTree), transaction.state);
  }
  // Otherwise only diff the children.
  else {
      transaction.patches = syncTree(oldTree, newTree);
    }

  measure('sync trees');
}

function _toConsumableArray$4(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Processes a set of patches onto a tracked DOM Node.
 *
 * @param {Object} node - DOM Node to process patchs on
 * @param {Array} patches - Contains patch objects
 */
function patch(transaction) {
  var domNode = transaction.domNode,
      state = transaction.state,
      measure = transaction.state.measure,
      patches = transaction.patches;
  var _transaction$promises = transaction.promises,
      promises = _transaction$promises === undefined ? [] : _transaction$promises;


  measure('patch node');
  promises.push.apply(promises, _toConsumableArray$4(patchNode$$1(patches, state)));
  measure('patch node');

  transaction.promises = promises;
}

// End flow, this terminates the transaction and returns a Promise that
// resolves when completed. If you want to make diffHTML return streams or
// callbacks replace this function.
function endAsPromise(transaction) {
  var _transaction$promises = transaction.promises,
      promises = _transaction$promises === undefined ? [] : _transaction$promises;

  // Operate synchronously unless opted into a Promise-chain. Doesn't matter
  // if they are actually Promises or not, since they will all resolve
  // eventually with `Promise.all`.

  if (promises.length) {
    return Promise.all(promises).then(function () {
      return transaction.end();
    });
  } else {
    // Pass off the remaining middleware to allow users to dive into the
    // transaction completed lifecycle event.
    return Promise.resolve(transaction.end());
  }
}



var tasks = Object.freeze({
	schedule: schedule,
	shouldUpdate: shouldUpdate,
	reconcileTrees: reconcileTrees,
	syncTrees: syncTrees,
	patchNode: patch,
	endAsPromise: endAsPromise
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function () {
  _createClass(Transaction, null, [{
    key: 'create',
    value: function create(domNode, markup, options) {
      return new Transaction(domNode, markup, options);
    }
  }, {
    key: 'renderNext',
    value: function renderNext(state) {
      // Still no next transaction, so can safely return early.
      if (!state.nextTransaction) {
        return;
      }

      // Create the next transaction.
      var nextTransaction = state.nextTransaction,
          promises = state.nextTransaction.promises;

      state.nextTransaction = undefined;

      // Pull out the resolver deferred.
      var resolver = promises && promises[0];

      // Remove the aborted status.
      nextTransaction.aborted = false;

      // Remove the last task, this has already been executed (via abort).
      nextTransaction.tasks.pop();

      // Reflow this transaction, sans the terminator, since we have already
      // executed it.
      Transaction.flow(nextTransaction, nextTransaction.tasks);

      // Wait for the promises to complete if they exist, otherwise resolve
      // immediately.
      if (promises && promises.length > 1) {
        Promise.all(promises.slice(1)).then(function () {
          return resolver.resolve();
        });
      } else if (resolver) {
        resolver.resolve();
      }
    }
  }, {
    key: 'flow',
    value: function flow(transaction, tasks) {
      var retVal = transaction;

      // Execute each "task" serially, passing the transaction as a baton that
      // can be used to share state across the tasks.
      for (var i = 0; i < tasks.length; i++) {
        // If aborted, don't execute any more tasks.
        if (transaction.aborted) {
          return retVal;
        }

        // Run the task.
        retVal = tasks[i](transaction);

        // The last `returnValue` is what gets sent to the consumer. This
        // mechanism is crucial for the `abort`, if you want to modify the "flow"
        // that's fine, but you must ensure that your last task provides a
        // mechanism to know when the transaction completes. Something like
        // callbacks or a Promise.
        if (retVal !== undefined && retVal !== transaction) {
          return retVal;
        }
      }
    }
  }, {
    key: 'assert',
    value: function assert(transaction) {
      if (_typeof(transaction.domNode) !== 'object') {
        throw new Error('Transaction requires a DOM Node mount point');
      }
      if (transaction.aborted && transaction.completed) {
        throw new Error('Transaction was previously aborted');
      } else if (transaction.completed) {
        throw new Error('Transaction was previously completed');
      }
    }
  }, {
    key: 'invokeMiddleware',
    value: function invokeMiddleware(transaction) {
      var tasks = transaction.tasks;


      MiddlewareCache.forEach(function (fn) {
        // Invoke all the middleware passing along this transaction as the only
        // argument. If they return a value (must be a function) it will be added
        // to the transaction task flow.
        var result = fn(transaction);

        if (result) {
          tasks.push(result);
        }
      });
    }
  }]);

  function Transaction(domNode, markup, options) {
    _classCallCheck(this, Transaction);

    this.domNode = domNode;
    this.markup = markup;
    this.options = options;

    this.state = StateCache.get(domNode) || {
      measure: makeMeasure(domNode, markup),
      internals: internals
    };

    this.tasks = options.tasks || [schedule, shouldUpdate, reconcileTrees, syncTrees, patch, endAsPromise];

    // Store calls to trigger after the transaction has ended.
    this.endedCallbacks = new Set();

    StateCache.set(domNode, this.state);
  }

  _createClass(Transaction, [{
    key: 'start',
    value: function start() {
      Transaction.assert(this);

      var domNode = this.domNode,
          measure = this.state.measure,
          tasks = this.tasks;

      var takeLastTask = tasks.pop();

      this.aborted = false;

      // Add middleware in as tasks.
      Transaction.invokeMiddleware(this);

      // Measure the render flow if the user wants to track performance.
      measure('render');

      // Push back the last task as part of ending the flow.
      tasks.push(takeLastTask);

      return Transaction.flow(this, tasks);
    }

    // This will immediately call the last flow task and terminate the flow. We
    // call the last task to ensure that the control flow completes. This should
    // end psuedo-synchronously. Think `Promise.resolve()`, `callback()`, and
    // `return someValue` to provide the most accurate performance reading. This
    // doesn't matter practically besides that.

  }, {
    key: 'abort',
    value: function abort() {
      var state = this.state;


      this.aborted = true;

      // Grab the last task in the flow and return, this task will be responsible
      // for calling `transaction.end`.
      return this.tasks[this.tasks.length - 1](this);
    }
  }, {
    key: 'end',
    value: function end() {
      var _this = this;

      var state = this.state,
          domNode = this.domNode,
          options = this.options;
      var measure = state.measure;
      var inner = options.inner;


      measure('finalize');

      this.completed = true;

      var renderScheduled = false;

      StateCache.forEach(function (cachedState) {
        if (cachedState.isRendering && cachedState !== state) {
          renderScheduled = true;
        }
      });

      // Don't attempt to clean memory if in the middle of another render.
      if (!renderScheduled) {
        cleanMemory();
      }

      // Mark the end to rendering.
      measure('finalize');
      measure('render');

      // Cache the markup and text for the DOM node to allow for short-circuiting
      // future render transactions.
      state.previousMarkup = domNode[inner ? 'innerHTML' : 'outerHTML'];
      state.previousText = domNode.textContent;

      // Trigger all `onceEnded` callbacks, so that middleware can know the
      // transaction has ended.
      this.endedCallbacks.forEach(function (callback) {
        return callback(_this);
      });
      this.endedCallbacks.clear();

      // We are no longer rendering the previous transaction so set the state to
      // `false`.
      state.isRendering = false;

      // Try and render the next transaction if one has been saved.
      Transaction.renderNext(state);

      return this;
    }
  }, {
    key: 'onceEnded',
    value: function onceEnded(callback) {
      this.endedCallbacks.add(callback);
    }
  }]);

  return Transaction;
}();

var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isAttributeEx = /(=|"|')[^><]*?$/;
var isTagEx = /(<|\/)/;
var TOKEN = '__DIFFHTML__';
/**
 * Get the next value from the list. If the next value is a string, make sure
 * it is escaped.
 *
 * @param {Array} values - Values extracted from tagged template literal
 * @return {String|*} - Escaped string, otherwise any value passed
 */
var nextValue = function nextValue(values) {
  var value = values.shift();
  return typeof value === 'string' ? escape(decodeEntities(value)) : value;
};

function handleTaggedTemplate(options, strings) {
  for (var _len = arguments.length, values = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    values[_key - 2] = arguments[_key];
  }

  // Automatically coerce a string literal to array.
  if (typeof strings === 'string') {
    strings = [strings];
  }

  // Do not attempt to parse empty strings.
  if (!strings) {
    return null;
  }

  // Parse only the text, no dynamic bits.
  if (strings.length === 1 && !values.length) {
    var _childNodes = parse(strings[0]).childNodes;
    return _childNodes.length > 1 ? createTree(_childNodes) : _childNodes[0];
  }

  // Used to store markup and tokens.
  var retVal = '';

  // We filter the supplemental values by where they are used. Values are
  // either, children, or tags (for components).
  var supplemental = {
    attributes: {},
    children: {},
    tags: {}
  };

  // Loop over the static strings, each break correlates to an interpolated
  // value. Since these values can be dynamic, we cannot pass them to the
  // diffHTML HTML parser inline. They are passed as an additional argument
  // called supplemental. The following loop instruments the markup with tokens
  // that the parser then uses to assemble the correct tree.
  strings.forEach(function (string, i) {
    // Always add the string, we need it to parse the markup later.
    retVal += string;

    // If there are values, figure out where in the markup they were injected.
    // This is most likely incomplete code, and will need to be improved in the
    // future with robust testing.
    if (values.length) {
      var value = nextValue(values);
      var lastSegment = string.split(' ').pop();
      var lastCharacter = lastSegment.trim().slice(-1);
      var isAttribute = Boolean(retVal.match(isAttributeEx));
      var isTag = Boolean(lastCharacter.match(isTagEx));
      var isString = typeof value === 'string';
      var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof$6(value)) === 'object';
      var isArray = Array.isArray(value);
      var token = TOKEN + i + '__';

      // Injected as attribute.
      if (isAttribute) {
        supplemental.attributes[i] = value;
        retVal += token;
      }
      // Injected as a tag.
      else if (isTag && !isString) {
          supplemental.tags[i] = value;
          retVal += token;
        }
        // Injected as a child node.
        else if (isArray || isObject) {
            supplemental.children[i] = createTree(value);
            retVal += token;
          }
          // Injected as something else in the markup or undefined, ignore
          // obviously falsy values used with boolean operators.
          else if (value !== null && value !== undefined && value !== false) {
              retVal += value;
            }
    }
  });

  // Parse the instrumented markup to get the Virtual Tree.
  var childNodes = parse(retVal, supplemental, options).childNodes;

  // This makes it easier to work with a single element as a root, opposed to
  // always returning an array.
  return childNodes.length === 1 ? childNodes[0] : createTree(childNodes);
}

var html = (function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return handleTaggedTemplate.apply(undefined, [{}].concat(args));
});

function release(domNode) {
  // Try and find a state object for this DOM Node.
  var state = StateCache.get(domNode);

  // If there is a Virtual Tree element, recycle all objects allocated for it.
  if (state && state.oldTree) {
    unprotectVTree(state.oldTree);
  }

  // Remove the DOM Node's state object from the cache.
  StateCache.delete(domNode);

  // Recycle all unprotected objects.
  cleanMemory();
}

function use(middleware) {
  if (typeof middleware !== 'function') {
    throw new Error('Middleware must be a function');
  }

  // Add the function to the set of middlewares.
  MiddlewareCache.add(middleware);

  // Call the subscribe method if it was defined, passing in the full public
  // API we have access to at this point.
  middleware.subscribe && middleware.subscribe(use.diff);

  // The unsubscribe method for the middleware.
  return function () {
    // Remove this middleware from the internal cache. This will prevent it
    // from being invoked in the future.
    MiddlewareCache.delete(middleware);

    // Call the unsubscribe method if defined in the middleware (allows them
    // to cleanup).
    middleware.unsubscribe && middleware.unsubscribe(use.diff);
  };
}

/**
 * A convenient helper to create Virtual Tree elements. This can be used in
 * place of HTML parsing and is what the Babel transform will compile down to.
 *
 * @example
 *
 *    import { createTree } from 'diffhtml';
 *
 *    // Creates a div with the test class and a nested text node.
 *    const vTree = createTree('div', { 'class': 'test' }, 'Hello world');
 *
 *    // Creates an empty div.
 *    const vTree = createTree('div');
 *
 *    // Creates a VTree and associates it with a DOM Node.
 *    const div = document.createElement('div');
 *    const vTree = createTree(div);
 *
 *    // Create a fragment of Nodes (is wrapped by a #document-fragment).
 *    const vTree = createTree([createTree('div'), createTree('h1')]);
 *    console.log(vTree.nodeName === '#document-fragment'); // true
 *
 *    // Any other object passed to `createTree` will be returned and assumed
 *    // to be an object that is shaped like a VTree.
 *    const vTree = createTree({
 *      nodeName: 'div',
 *      attributes: { 'class': 'on' },
 *    });
 *
 *
 * @param {Array|Object|Node} nodeName - Value used to infer making the DOM Node
 * @param {Object =} attributes - Attributes to assign
 * @param {Array|Object|String|Node =} childNodes - Children to assign
 * @return {Object} A VTree object
 */
/**
 * Parses HTML strings into Virtual Tree elements. This can be a single static
 * string, like that produced by a template engine, or a complex tagged
 * template string.
 *
 * @example
 *
 *    import { html } from 'diffhtml';
 *
 *    // Parses HTML directly from a string, useful for consuming template
 *    // engine output and inlining markup.
 *    const fromString = html('<center>Markup</center>');
 *
 *    // Parses a tagged template string. This can contain interpolated
 *    // values in between the `${...}` symbols. The values are typically
 *    // going to be strings, but you can pass any value to any property or
 *    // attribute.
 *    const fromTaggedTemplate = html`<center>${'Markup'}</center>`;
 *
 *    // You can pass functions to event handlers and basically any value to
 *    // property or attribute. If diffHTML encounters a value that is not a
 *    // string it will still create an attribute, but the value will be an
 *    // empty string. This is necessary for tracking changes.
 *    const dynamicValues = html`<center onclick=${
 *      ev => console.log('Clicked the center tag')
 *    }>Markup</center>`;
 *
 *
 * @param {String} markup - A string or tagged template string containing HTML
 * @return {Object|Array} - A single instance or array of Virtual Tree elements
 */
/**
 * Recycles internal memory, removes state, and cancels all scheduled render
 * transactions. This is mainly going to be used in unit tests and not
 * typically in production. The reason for this is that components are usually
 * going to live the lifetime of the page, with a refresh cleaning slate.
 *
 * @example
 *
 *    import { innerHTML, release } from 'diffhtml';
 *
 *    // Associate state and reuse pre-allocated memory.
 *    innerHTML(document.body, 'Hello world');
 *
 *    // Free all association to `document.body`.
 *    release(document.body);
 *
 *
 * @param {Object} node - A DOM Node that is being tracked by diffHTML
 */
/**
 * Registers middleware functions which are called during the render
 * transaction flow. These should be very fast and ideally asynchronous to
 * avoid blocking the render.
 *
 * @example
 *
 *    import { use } from 'diffhtml';
 *    import logger from 'diffhtml-logger';
 *    import devTools from 'diffhtml-devtools';
 *
 *    use(logger());
 *    use(devTools());
 *
 *
 * @param {Function} middleware - A function that gets passed internals
 * @return Function - When invoked removes and deactivates the middleware
 */
/**
 * Export the version based on the package.json version field value, is inlined
 * with babel.
 */
var VERSION = '1.0.0-beta';

/**
 * Used to diff the outerHTML contents of the passed element with the markup
 * contents. Very useful for applying a global diff on the
 * `document.documentElement`.
 *
 * @example
 *
 *    import { outerHTML } from 'diffhtml';
 *
 *    // Remove all attributes and set the children to be a single text node
 *    // containing the text 'Hello world',
 *    outerHTML(document.body, '<body>Hello world</body>');
 *
 *
 * @param {Object} element - A DOM Node to render into
 * @param {String|Object} markup='' - A string of markup or virtual tree
 * @param {Object =} options={} - An object containing configuration options
 */
function outerHTML(element) {
  var markup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  options.inner = false;
  return Transaction.create(element, markup, options).start();
}

/**
 * Used to diff the innerHTML contents of the passed element with the markup
 * contents. This is useful with libraries like Backbone that render Views
 * into element container.
 *
 * @example
 *
 *    import { innerHTML } from 'diffhtml';
 *
 *    // Sets the body children to be a single text node containing the text
 *    // 'Hello world'.
 *    innerHTML(document.body, 'Hello world');
 *
 *
 * @param {Object} element - A DOM Node to render into
 * @param {String|Object} markup='' - A string of markup or virtual tree
 * @param {Object =} options={} - An object containing configuration options
 */
function innerHTML(element) {
  var markup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  options.inner = true;
  return Transaction.create(element, markup, options).start();
}

function element(element) {
  var markup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return Transaction.create(element, markup, options).start();
}

// Public API. Passed to subscribed middleware.
var diff = {
  VERSION: '1.0.0-beta',
  addTransitionState: addTransitionState,
  removeTransitionState: removeTransitionState,
  release: release,
  createTree: createTree,
  use: use,
  outerHTML: outerHTML,
  innerHTML: innerHTML,
  html: html,
  internals: internals,
  tasks: tasks
};

// Ensure the `diff` property is nonenumerable so it doesn't show up in logs.
if (!use.diff) {
  Object.defineProperty(use, 'diff', { value: diff, enumerable: false });
}

exports.__VERSION__ = VERSION;
exports.addTransitionState = addTransitionState;
exports.removeTransitionState = removeTransitionState;
exports.release = release;
exports.createTree = createTree;
exports.createElement = createTree;
exports.use = use;
exports.outerHTML = outerHTML;
exports.innerHTML = innerHTML;
exports.element = element;
exports.html = html;
exports['default'] = diff;

Object.defineProperty(exports, '__esModule', { value: true });

})));

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":2}]},{},[1]);
