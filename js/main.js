var dstr = '    您好，我叫代生宇，24岁，坐标北京。欢迎来到我的自我介绍页面，页面自己单独开发，可能有点粗糙，望您通过浏览本网页，对我有所了解。本人喜欢钻研，不浮躁，喜欢前端，执行力，学习能力都棒棒哒！希望能与您合作！挂载在GIT上加载有点慢，望您耐心等待或让我加载一会稍后浏览';
var darr = Array.from(dstr);
var dtimer = setInterval(function (){
if(!darr.length){return clearInterval(dtimer);}
  var span = document.createElement('span');span.innerHTML = darr.shift();span.style.color = 'rgb(' +~~(Math.random()*255) + ','+ ~~(Math.random()*255)  + ',' + ~~(Math.random()*255)  + ')'; document.getElementById('loadD').firstElementChild.appendChild(span);
},300);


/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) { function r(e, t) { return typeof e === t } function o() { var e, t, n, o, i, s, a; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-")) } } function i(e) { var t = S.className, n = Modernizr._config.classPrefix || ""; if (x && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(r, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t) } function s(e, t) { if ("object" == typeof e) for (var n in e) P(e, n) && s(n, e[n]); else { e = e.toLowerCase(); var r = e.split("."), o = Modernizr[r[0]]; if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr; t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t) } return Modernizr } function a() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function l() { var e = t.body; return e || (e = a(x ? "svg" : "body"), e.fake = !0), e } function u(e, n, r, o) { var i, s, u, f, d = "modernizr", c = a("div"), p = l(); if (parseInt(r, 10)) for (; r--;)u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u); return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : c.parentNode.removeChild(c), !!s } function f(e, t) { return !!~("" + e).indexOf(t) } function d(e) { return e.replace(/([A-Z])/g, function (e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") } function c(t, n, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, t, n); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) { var s = i.error ? "error" : "log"; i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !n && t.currentStyle && t.currentStyle[r]; return o } function p(t, r) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(d(t[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;)i.push("(" + d(t[o]) + ":" + r + ")"); return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == c(e, null, "position") }) } return n } function m(e) { return e.replace(/([a-z])-([a-z])/g, function (e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") } function h(e, t, o, i) { function s() { u && (delete N.style, delete N.modElem) } if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var l = p(e, o); if (!r(l, "undefined")) return l } for (var u, d, c, h, v, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;)u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style; for (c = e.length, d = 0; c > d; d++)if (h = e[d], v = N.style[h], f(h, "-") && (h = m(h)), N.style[h] !== n) { if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0; try { N.style[h] = o } catch (g) { } if (N.style[h] != v) return s(), "pfx" == t ? h : !0 } return s(), !1 } function v(e, t) { return function () { return e.apply(t, arguments) } } function A(e, t, n) { var o; for (var i in e) if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? v(o, n || t) : o); return !1 } function g(e, t, n, o, i) { var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + O.join(s + " ") + s).split(" "); return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), A(a, t, n)) } function y(e, t, r) { return g(e, n, n, t, r) } var C = [], b = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { C.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = b, Modernizr = new Modernizr; var w = [], S = t.documentElement, x = "svg" === S.nodeName.toLowerCase(), _ = "Moz O ms Webkit", T = b._config.usePrefixes ? _.toLowerCase().split(" ") : []; b._domPrefixes = T; var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]; b._prefixes = E; var P; !function () { var e = {}.hasOwnProperty; P = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) { return t in e && r(e.constructor.prototype[t], "undefined") } : function (t, n) { return e.call(t, n) } }(), b._l = {}, b.on = function (e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () { Modernizr._trigger(e, Modernizr[e]) }, 0) }, b._trigger = function (e, t) { if (this._l[e]) { var n = this._l[e]; setTimeout(function () { var e, r; for (e = 0; e < n.length; e++)(r = n[e])(t) }, 0), delete this._l[e] } }, Modernizr._q.push(function () { b.addTest = s }); var k = function () { function e(e, t) { var o; return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1 } var r = !("onblur" in t.documentElement); return e }(); b.hasEvent = k; var z = function () { var t = e.matchMedia || e.msMatchMedia; return t ? function (e) { var n = t(e); return n && n.matches || !1 } : function (t) { var n = !1; return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) { n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position }), n } }(); b.mq = z; var B = function (e, t) { var n = !1, r = a("div"), o = r.style; if (e in o) { var i = T.length; for (o[e] = t, n = o[e]; i-- && !n;)o[e] = "-" + T[i] + "-" + t, n = o[e] } return "" === n && (n = !1), n }; b.prefixedCSSValue = B; var O = b._config.usePrefixes ? _.split(" ") : []; b._cssomPrefixes = O; var L = { elem: a("modernizr") }; Modernizr._q.push(function () { delete L.elem }); var N = { style: L.elem.style }; Modernizr._q.unshift(function () { delete N.style }), b.testAllProps = g, b.testAllProps = y; b.testProp = function (e, t, r) { return h([e], n, t, r) }, b.testStyles = u; Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function () { var t = navigator.userAgent; return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1 }), Modernizr.addTest("pointerevents", function () { var e = !1, t = T.length; for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;)k(T[t] + "pointerdown") && (e = !0); return e }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("webgl", function () { var t = a("canvas"), n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext"; return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e }); var R = !1; try { R = "WebSocket" in e && 2 === e.WebSocket.CLOSING } catch (j) { } Modernizr.addTest("websockets", R), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), function () { Modernizr.addTest("csscolumns", function () { var e = !1, t = y("columnCount"); try { e = !!t, e && (e = new Boolean(e)) } catch (n) { } return e }); for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t) }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addAsyncTest(function () { var e, t, n, r = a("img"), o = "sizes" in r; !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () { s("sizes", 2 == r.width) }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o) }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in e), o(), i(w), delete b.addTest, delete b.addAsyncTest; for (var M = 0; M < Modernizr._q.length; M++)Modernizr._q[M](); e.Modernizr = Modernizr }(window, document);



(function (win, doc, undefined) {
  var zturn = function (turn) {
    this.turn = turn
    this.zturn = $("#" + turn.id)
    this.X = 0
    this.zturnitem = this.zturn.children(".zturn-item")
    this.num_li = this.zturnitem.length//轮播元素个数 zturnPy为每个的偏移量
    this.zturnPy = turn.Awidth / (this.num_li - 1)
    this.init()
    this.turn_()
    return this
  }
  zturn.prototype = {
    constructor: zturn,
    init: function () {
      var _self = this;
      this.zturn.children(".zturn-item").each(function (index, element) {
        //index是第几个元素 X是选取的中间数 num_li是总数
        var rt = 1//1:右侧：-1：左侧
        if ((index - _self.X) > _self.num_li / 2 || (index - _self.X) < 0 && (index - _self.X) > (-_self.num_li / 2)) { rt = -1 }//判断元素左侧还是右侧
        var i = Math.abs(index - _self.X);//取绝对值
        if (i > _self.num_li / 2) { i = parseInt(_self.X) + parseInt(_self.num_li) - index; }//i:是左或者右的第几个
        if ((index - _self.X) < (-_self.num_li / 2)) { i = _self.num_li + index - _self.X }
        $(this).css({
          'position': 'absolute',
          'left': '50%',
          'margin-left': -_self.turn.width / 2 + _self.zturnPy * rt * i + "px",
          'z-index': _self.num_li - i,
          'opacity': Math.pow(_self.turn.opacity, i),
          'transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')',
          '-webkit-transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')',
          '-webkit-transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')',
          '-moz-transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')',
          '-ms-transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')',
          '-o-transform': 'scale(' + Math.pow(_self.turn.scale, i) + ')'
        })
        $(this).attr("data_n", index)
      })
    },
    turn_: function () {
      var _self = this
      this.zturnitem.click(function () {
        _self.X = $(this).attr("data_n")
        _self.init()
      })
    },
    prev_: function () {
      var _self = this;
      this.X--;
      if (this.X < 0) { this.X = this.num_li - 1; }
      this.init();
    },
    next_: function () {
      var _self = this;
      this.X++;
      if (this.X >= this.num_li) { this.X = 0 }
      this.init();
    }
  }
  win.zturn = zturn;
}(window, document));


// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// 预加载
function preloader() {
  if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    img1.src = "./img/1.jpg";
    img2.src = "./img/2.jpg";
    img3.src = "./img/3.jpg";
    img4.src = "./img/4.jpg";
    img5.src = "./img/5.jpg";
  }
}


preloader();

window.onload = function () {

  var audio = document.getElementById('audio');
  var aa = new zturn({
    id: "zturn",
    opacity: 0.9,
    width: 382,
    Awidth: 1024,
    scale: 0.9
  })
  var ab = new zturn({
    id: "zturn2",
    opacity: 0.8,
    width: 382,
    Awidth: 1024,
    scale: 0.6
  })
  /* Initialize Swiper */
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    followFinger: false,
    speed: 800,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: function (swiper) {
        slide = this.slides.eq(0);
        slide.addClass('ani-slide');
      },
      transitionStart: function () {
        for (i = 0; i < this.slides.length; i++) {
          slide = this.slides.eq(i);
          slide.removeClass('ani-slide');
        }
      },
      transitionEnd: function () {
        slide = this.slides.eq(this.activeIndex);
        slide.addClass('ani-slide');
      },
    }
  });

  $('#yy').click(function () {
    if (Array.from(this.classList).indexOf('yy1') != -1) {
      this.classList.remove('yy1');
      this.classList.add('yy');
      audio.play();
    } else {
      this.classList.remove('yy');
      this.classList.add('yy1');
      audio.pause();
    }
  });

  $('#yy').hover(
    function () {
      if (!audio.paused) {
        this.className = 'yy';
      };
      this.classList.toggle('active');
    },
    function () {
      this.classList.toggle('active');
    }
  );

  //处理微信的时候
  document.addEventListener("WeixinJSBridgeReady", function () {
    if (typeof WeixinJSBridge == "object") {
      WeixinJSBridge.invoke("getNetworkType", {}, function (j) {
        audio.play();
      });
    }
  });
  $('.Dfilter').on('mousemove',function (){$('#dai').css({ 'box-shadow':'-2px -5px 30px 5px rgba(255,255,255,0.5)'})});

  $('.Dfilter').on('mouseout',function (){ $('#dai').css({
    'transform': 'scale(1) translate(' + 0 + 'px,' + 0 + 'px) rotateX( ' + 0 + 'deg) rotateY(' + 0 + 'deg)',
    'box-shadow': 'none'
  });});




  $('#dai').hover(function () {
    this.style['box-shadow'] = '-2px -5px 30px 5px rgba(255,255,255,0.5)';
    document.addEventListener('mousemove', _dai);
  }, function () {
    $('#dai').css({
      'transform': 'scale(1) translate(' + 0 + 'px,' + 0 + 'px) rotateX( ' + 0 + 'deg) rotateY(' + 0 + 'deg)',
      'box-shadow': 'none'
    });
    document.removeEventListener('mousemove', _dai);
  });

  function _dai(e) {
    let d = document.getElementById('dai');
    let l = d.offsetLeft;
    let t = d.offsetTop;
    let w = d.offsetWidth / 2;
    let h = d.offsetHeight / 2;
    let x = (e.pageX - l - w) * 0.15;
    let y = (e.pageY - t - h) * 0.15;
    let ld = 0;
    let td = 0;
    ld = (e.pageX - l - w) / w * 10;
    td = (e.pageY - t - h) / h * 10;

    $('#dai').css({
      'transform': 'scale(1.03) translate(' + x + 'px,' + y + 'px)' + 'rotateX(' + ld + 'deg) rotateY(' + td + 'deg)'
    });
  }
  $('.poster-item').hover(function () {
    $(this.children).filter('.students_star').slideDown(1000);
  }, function () {
    $(this.children).filter('.students_star').slideUp(1000);
  });
  function fixHeight() {var headerHeight = $("#switcher").height();$("#iframe").attr("height", $(window).height() + "px");}$(window).resize(function () {fixHeight();}).resize();

document.getElementById('loadD').style.transform='scale(0)';setTimeout(function (){ document.getElementById('loadD').style.display='none'},1000);

}


