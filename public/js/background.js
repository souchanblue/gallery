/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
function hexToRgb(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, function(e, t, i, n) {
      return t + t + i + i + n + n
  });
  var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return i ? {
      r: parseInt(i[1], 16),
      g: parseInt(i[2], 16),
      b: parseInt(i[3], 16)
  } : null
}
function clamp(e, t, i) {
  return Math.min(Math.max(e, t), i)
}
function isInArray(e, t) {
  return t.indexOf(e) > -1
}
function recaptchaCallback() {
  $("form.recaptcha").submit()
}
!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function i(e) {
      var t = e.length
        , i = ot.type(e);
      return "function" === i || ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }
  function n(e, t, i) {
      if (ot.isFunction(t))
          return ot.grep(e, function(e, n) {
              return !!t.call(e, n, e) !== i
          });
      if (t.nodeType)
          return ot.grep(e, function(e) {
              return e === t !== i
          });
      if ("string" == typeof t) {
          if (ft.test(t))
              return ot.filter(t, e, i);
          t = ot.filter(t, e)
      }
      return ot.grep(e, function(e) {
          return ot.inArray(e, t) >= 0 !== i
      })
  }
  function r(e, t) {
      do
          e = e[t];
      while (e && 1 !== e.nodeType);
      return e
  }
  function o(e) {
      var t = xt[e] = {};
      return ot.each(e.match(_t) || [], function(e, i) {
          t[i] = !0
      }),
      t
  }
  function s() {
      mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", a, !1),
      e.removeEventListener("load", a, !1)) : (mt.detachEvent("onreadystatechange", a),
      e.detachEvent("onload", a))
  }
  function a() {
      (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (s(),
      ot.ready())
  }
  function l(e, t, i) {
      if (void 0 === i && 1 === e.nodeType) {
          var n = "data-" + t.replace(Ct, "-$1").toLowerCase();
          if (i = e.getAttribute(n),
          "string" == typeof i) {
              try {
                  i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? ot.parseJSON(i) : i
              } catch (r) {}
              ot.data(e, t, i)
          } else
              i = void 0
      }
      return i
  }
  function c(e) {
      var t;
      for (t in e)
          if (("data" !== t || !ot.isEmptyObject(e[t])) && "toJSON" !== t)
              return !1;
      return !0
  }
  function u(e, t, i, n) {
      if (ot.acceptData(e)) {
          var r, o, s = ot.expando, a = e.nodeType, l = a ? ot.cache : e, c = a ? e[s] : e[s] && s;
          if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t)
              return c || (c = a ? e[s] = G.pop() || ot.guid++ : s),
              l[c] || (l[c] = a ? {} : {
                  toJSON: ot.noop
              }),
              ("object" == typeof t || "function" == typeof t) && (n ? l[c] = ot.extend(l[c], t) : l[c].data = ot.extend(l[c].data, t)),
              o = l[c],
              n || (o.data || (o.data = {}),
              o = o.data),
              void 0 !== i && (o[ot.camelCase(t)] = i),
              "string" == typeof t ? (r = o[t],
              null == r && (r = o[ot.camelCase(t)])) : r = o,
              r
      }
  }
  function d(e, t, i) {
      if (ot.acceptData(e)) {
          var n, r, o = e.nodeType, s = o ? ot.cache : e, a = o ? e[ot.expando] : ot.expando;
          if (s[a]) {
              if (t && (n = i ? s[a] : s[a].data)) {
                  ot.isArray(t) ? t = t.concat(ot.map(t, ot.camelCase)) : t in n ? t = [t] : (t = ot.camelCase(t),
                  t = t in n ? [t] : t.split(" ")),
                  r = t.length;
                  for (; r--; )
                      delete n[t[r]];
                  if (i ? !c(n) : !ot.isEmptyObject(n))
                      return
              }
              (i || (delete s[a].data,
              c(s[a]))) && (o ? ot.cleanData([e], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
          }
      }
  }
  function p() {
      return !0
  }
  function f() {
      return !1
  }
  function h() {
      try {
          return mt.activeElement
      } catch (e) {}
  }
  function m(e) {
      var t = Rt.split("|")
        , i = e.createDocumentFragment();
      if (i.createElement)
          for (; t.length; )
              i.createElement(t.pop());
      return i
  }
  function g(e, t) {
      var i, n, r = 0, o = typeof e.getElementsByTagName !== kt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== kt ? e.querySelectorAll(t || "*") : void 0;
      if (!o)
          for (o = [],
          i = e.childNodes || e; null != (n = i[r]); r++)
              !t || ot.nodeName(n, t) ? o.push(n) : ot.merge(o, g(n, t));
      return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], o) : o
  }
  function v(e) {
      Ot.test(e.type) && (e.defaultChecked = e.checked)
  }
  function y(e, t) {
      return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function b(e) {
      return e.type = (null !== ot.find.attr(e, "type")) + "/" + e.type,
      e
  }
  function _(e) {
      var t = Gt.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }
  function x(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++)
          ot._data(i, "globalEval", !t || ot._data(t[n], "globalEval"))
  }
  function w(e, t) {
      if (1 === t.nodeType && ot.hasData(e)) {
          var i, n, r, o = ot._data(e), s = ot._data(t, o), a = o.events;
          if (a) {
              delete s.handle,
              s.events = {};
              for (i in a)
                  for (n = 0,
                  r = a[i].length; r > n; n++)
                      ot.event.add(t, i, a[i][n])
          }
          s.data && (s.data = ot.extend({}, s.data))
      }
  }
  function T(e, t) {
      var i, n, r;
      if (1 === t.nodeType) {
          if (i = t.nodeName.toLowerCase(),
          !nt.noCloneEvent && t[ot.expando]) {
              r = ot._data(t);
              for (n in r.events)
                  ot.removeEvent(t, n, r.handle);
              t.removeAttribute(ot.expando)
          }
          "script" === i && t.text !== e.text ? (b(t).text = e.text,
          _(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML),
          nt.html5Clone && e.innerHTML && !ot.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ot.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
          t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
      }
  }
  function k(t, i) {
      var n = ot(i.createElement(t)).appendTo(i.body)
        , r = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(n[0]).display : ot.css(n[0], "display");
      return n.detach(),
      r
  }
  function S(e) {
      var t = mt
        , i = ei[e];
      return i || (i = k(e, t),
      "none" !== i && i || (Jt = (Jt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
      t = (Jt[0].contentWindow || Jt[0].contentDocument).document,
      t.write(),
      t.close(),
      i = k(e, t),
      Jt.detach()),
      ei[e] = i),
      i
  }
  function C(e, t) {
      return {
          get: function() {
              var i = e();
              if (null != i)
                  return i ? (delete this.get,
                  void 0) : (this.get = t).apply(this, arguments)
          }
      }
  }
  function P(e, t) {
      if (t in e)
          return t;
      for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = fi.length; r--; )
          if (t = fi[r] + i,
          t in e)
              return t;
      return n
  }
  function E(e, t) {
      for (var i, n, r, o = [], s = 0, a = e.length; a > s; s++)
          n = e[s],
          n.style && (o[s] = ot._data(n, "olddisplay"),
          i = n.style.display,
          t ? (o[s] || "none" !== i || (n.style.display = ""),
          "" === n.style.display && At(n) && (o[s] = ot._data(n, "olddisplay", S(n.nodeName)))) : o[s] || (r = At(n),
          (i && "none" !== i || !r) && ot._data(n, "olddisplay", r ? i : ot.css(n, "display"))));
      for (s = 0; a > s; s++)
          n = e[s],
          n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[s] || "" : "none"));
      return e
  }
  function A(e, t, i) {
      var n = ci.exec(t);
      return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
  }
  function $(e, t, i, n, r) {
      for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
          "margin" === i && (s += ot.css(e, i + Et[o], !0, r)),
          n ? ("content" === i && (s -= ot.css(e, "padding" + Et[o], !0, r)),
          "margin" !== i && (s -= ot.css(e, "border" + Et[o] + "Width", !0, r))) : (s += ot.css(e, "padding" + Et[o], !0, r),
          "padding" !== i && (s += ot.css(e, "border" + Et[o] + "Width", !0, r)));
      return s
  }
  function O(e, t, i) {
      var n = !0
        , r = "width" === t ? e.offsetWidth : e.offsetHeight
        , o = ti(e)
        , s = nt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, o);
      if (0 >= r || null == r) {
          if (r = ii(e, t, o),
          (0 > r || null == r) && (r = e.style[t]),
          ri.test(r))
              return r;
          n = s && (nt.boxSizingReliable() || r === e.style[t]),
          r = parseFloat(r) || 0
      }
      return r + $(e, t, i || (s ? "border" : "content"), n, o) + "px"
  }
  function M(e, t, i, n, r) {
      return new M.prototype.init(e,t,i,n,r)
  }
  function D() {
      return setTimeout(function() {
          hi = void 0
      }),
      hi = ot.now()
  }
  function j(e, t) {
      var i, n = {
          height: e
      }, r = 0;
      for (t = t ? 1 : 0; 4 > r; r += 2 - t)
          i = Et[r],
          n["margin" + i] = n["padding" + i] = e;
      return t && (n.opacity = n.width = e),
      n
  }
  function z(e, t, i) {
      for (var n, r = (_i[t] || []).concat(_i["*"]), o = 0, s = r.length; s > o; o++)
          if (n = r[o].call(i, t, e))
              return n
  }
  function N(e, t, i) {
      var n, r, o, s, a, l, c, u, d = this, p = {}, f = e.style, h = e.nodeType && At(e), m = ot._data(e, "fxshow");
      i.queue || (a = ot._queueHooks(e, "fx"),
      null == a.unqueued && (a.unqueued = 0,
      l = a.empty.fire,
      a.empty.fire = function() {
          a.unqueued || l()
      }
      ),
      a.unqueued++,
      d.always(function() {
          d.always(function() {
              a.unqueued--,
              ot.queue(e, "fx").length || a.empty.fire()
          })
      })),
      1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
      c = ot.css(e, "display"),
      u = S(e.nodeName),
      "none" === c && (c = u),
      "inline" === c && "none" === ot.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== u ? f.zoom = 1 : f.display = "inline-block")),
      i.overflow && (f.overflow = "hidden",
      nt.shrinkWrapBlocks() || d.always(function() {
          f.overflow = i.overflow[0],
          f.overflowX = i.overflow[1],
          f.overflowY = i.overflow[2]
      }));
      for (n in t)
          if (r = t[n],
          gi.exec(r)) {
              if (delete t[n],
              o = o || "toggle" === r,
              r === (h ? "hide" : "show")) {
                  if ("show" !== r || !m || void 0 === m[n])
                      continue;
                  h = !0
              }
              p[n] = m && m[n] || ot.style(e, n)
          }
      if (!ot.isEmptyObject(p)) {
          m ? "hidden"in m && (h = m.hidden) : m = ot._data(e, "fxshow", {}),
          o && (m.hidden = !h),
          h ? ot(e).show() : d.done(function() {
              ot(e).hide()
          }),
          d.done(function() {
              var t;
              ot._removeData(e, "fxshow");
              for (t in p)
                  ot.style(e, t, p[t])
          });
          for (n in p)
              s = z(h ? m[n] : 0, n, d),
              n in m || (m[n] = s.start,
              h && (s.end = s.start,
              s.start = "width" === n || "height" === n ? 1 : 0))
      }
  }
  function R(e, t) {
      var i, n, r, o, s;
      for (i in e)
          if (n = ot.camelCase(i),
          r = t[n],
          o = e[i],
          ot.isArray(o) && (r = o[1],
          o = e[i] = o[0]),
          i !== n && (e[n] = o,
          delete e[i]),
          s = ot.cssHooks[n],
          s && "expand"in s) {
              o = s.expand(o),
              delete e[n];
              for (i in o)
                  i in e || (e[i] = o[i],
                  t[i] = r)
          } else
              t[n] = r
  }
  function I(e, t, i) {
      var n, r, o = 0, s = bi.length, a = ot.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (r)
              return !1;
          for (var t = hi || D(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++)
              c.tweens[s].run(o);
          return a.notifyWith(e, [c, o, i]),
          1 > o && l ? i : (a.resolveWith(e, [c]),
          !1)
      }, c = a.promise({
          elem: e,
          props: ot.extend({}, t),
          opts: ot.extend(!0, {
              specialEasing: {}
          }, i),
          originalProperties: t,
          originalOptions: i,
          startTime: hi || D(),
          duration: i.duration,
          tweens: [],
          createTween: function(t, i) {
              var n = ot.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(n),
              n
          },
          stop: function(t) {
              var i = 0
                , n = t ? c.tweens.length : 0;
              if (r)
                  return this;
              for (r = !0; n > i; i++)
                  c.tweens[i].run(1);
              return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
              this
          }
      }), u = c.props;
      for (R(u, c.opts.specialEasing); s > o; o++)
          if (n = bi[o].call(c, e, u, c.opts))
              return n;
      return ot.map(u, z, c),
      ot.isFunction(c.opts.start) && c.opts.start.call(e, c),
      ot.fx.timer(ot.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue
      })),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function L(e) {
      return function(t, i) {
          "string" != typeof t && (i = t,
          t = "*");
          var n, r = 0, o = t.toLowerCase().match(_t) || [];
          if (ot.isFunction(i))
              for (; n = o[r++]; )
                  "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                  (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
      }
  }
  function F(e, t, i, n) {
      function r(a) {
          var l;
          return o[a] = !0,
          ot.each(e[a] || [], function(e, a) {
              var c = a(t, i, n);
              return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
              r(c),
              !1)
          }),
          l
      }
      var o = {}
        , s = e === Wi;
      return r(t.dataTypes[0]) || !o["*"] && r("*")
  }
  function H(e, t) {
      var i, n, r = ot.ajaxSettings.flatOptions || {};
      for (n in t)
          void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && ot.extend(!0, e, i),
      e
  }
  function B(e, t, i) {
      for (var n, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
          void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (s in a)
              if (a[s] && a[s].test(r)) {
                  l.unshift(s);
                  break
              }
      if (l[0]in i)
          o = l[0];
      else {
          for (s in i) {
              if (!l[0] || e.converters[s + " " + l[0]]) {
                  o = s;
                  break
              }
              n || (n = s)
          }
          o = o || n
      }
      return o ? (o !== l[0] && l.unshift(o),
      i[o]) : void 0
  }
  function q(e, t, i, n) {
      var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
      if (u[1])
          for (s in e.converters)
              c[s.toLowerCase()] = e.converters[s];
      for (o = u.shift(); o; )
          if (e.responseFields[o] && (i[e.responseFields[o]] = t),
          !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          l = o,
          o = u.shift())
              if ("*" === o)
                  o = l;
              else if ("*" !== l && l !== o) {
                  if (s = c[l + " " + o] || c["* " + o],
                  !s)
                      for (r in c)
                          if (a = r.split(" "),
                          a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                              s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0],
                              u.unshift(a[1]));
                              break
                          }
                  if (s !== !0)
                      if (s && e["throws"])
                          t = s(t);
                      else
                          try {
                              t = s(t)
                          } catch (d) {
                              return {
                                  state: "parsererror",
                                  error: s ? d : "No conversion from " + l + " to " + o
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  function W(e, t, i, n) {
      var r;
      if (ot.isArray(t))
          ot.each(t, function(t, r) {
              i || Gi.test(e) ? n(e, r) : W(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
          });
      else if (i || "object" !== ot.type(t))
          n(e, t);
      else
          for (r in t)
              W(e + "[" + r + "]", t[r], i, n)
  }
  function X() {
      try {
          return new e.XMLHttpRequest
      } catch (t) {}
  }
  function U() {
      try {
          return new e.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
  }
  function Y(e) {
      return ot.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var G = []
    , V = G.slice
    , Z = G.concat
    , Q = G.push
    , K = G.indexOf
    , J = {}
    , et = J.toString
    , tt = J.hasOwnProperty
    , it = "".trim
    , nt = {}
    , rt = "1.11.0"
    , ot = function(e, t) {
      return new ot.fn.init(e,t)
  }
    , st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , at = /^-ms-/
    , lt = /-([\da-z])/gi
    , ct = function(e, t) {
      return t.toUpperCase()
  };
  ot.fn = ot.prototype = {
      jquery: rt,
      constructor: ot,
      selector: "",
      length: 0,
      toArray: function() {
          return V.call(this)
      },
      get: function(e) {
          return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
      },
      pushStack: function(e) {
          var t = ot.merge(this.constructor(), e);
          return t.prevObject = this,
          t.context = this.context,
          t
      },
      each: function(e, t) {
          return ot.each(this, e, t)
      },
      map: function(e) {
          return this.pushStack(ot.map(this, function(t, i) {
              return e.call(t, i, t)
          }))
      },
      slice: function() {
          return this.pushStack(V.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , i = +e + (0 > e ? t : 0);
          return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: Q,
      sort: G.sort,
      splice: G.splice
  },
  ot.extend = ot.fn.extend = function() {
      var e, t, i, n, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s,
      s = arguments[a] || {},
      a++),
      "object" == typeof s || ot.isFunction(s) || (s = {}),
      a === l && (s = this,
      a--); l > a; a++)
          if (null != (r = arguments[a]))
              for (n in r)
                  e = s[n],
                  i = r[n],
                  s !== i && (c && i && (ot.isPlainObject(i) || (t = ot.isArray(i))) ? (t ? (t = !1,
                  o = e && ot.isArray(e) ? e : []) : o = e && ot.isPlainObject(e) ? e : {},
                  s[n] = ot.extend(c, o, i)) : void 0 !== i && (s[n] = i));
      return s
  }
  ,
  ot.extend({
      expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === ot.type(e)
      },
      isArray: Array.isArray || function(e) {
          return "array" === ot.type(e)
      }
      ,
      isWindow: function(e) {
          return null != e && e == e.window
      },
      isNumeric: function(e) {
          return e - parseFloat(e) >= 0
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      isPlainObject: function(e) {
          var t;
          if (!e || "object" !== ot.type(e) || e.nodeType || ot.isWindow(e))
              return !1;
          try {
              if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))
                  return !1
          } catch (i) {
              return !1
          }
          if (nt.ownLast)
              for (t in e)
                  return tt.call(e, t);
          for (t in e)
              ;
          return void 0 === t || tt.call(e, t)
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[et.call(e)] || "object" : typeof e
      },
      globalEval: function(t) {
          t && ot.trim(t) && (e.execScript || function(t) {
              e.eval.call(e, t)
          }
          )(t)
      },
      camelCase: function(e) {
          return e.replace(at, "ms-").replace(lt, ct)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, n) {
          var r, o = 0, s = e.length, a = i(e);
          if (n) {
              if (a)
                  for (; s > o && (r = t.apply(e[o], n),
                  r !== !1); o++)
                      ;
              else
                  for (o in e)
                      if (r = t.apply(e[o], n),
                      r === !1)
                          break
          } else if (a)
              for (; s > o && (r = t.call(e[o], o, e[o]),
              r !== !1); o++)
                  ;
          else
              for (o in e)
                  if (r = t.call(e[o], o, e[o]),
                  r === !1)
                      break;
          return e
      },
      trim: it && !it.call("﻿ ") ? function(e) {
          return null == e ? "" : it.call(e)
      }
      : function(e) {
          return null == e ? "" : (e + "").replace(st, "")
      }
      ,
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (i(Object(e)) ? ot.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)),
          n
      },
      inArray: function(e, t, i) {
          var n;
          if (t) {
              if (K)
                  return K.call(t, e, i);
              for (n = t.length,
              i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                  if (i in t && t[i] === e)
                      return i
          }
          return -1
      },
      merge: function(e, t) {
          for (var i = +t.length, n = 0, r = e.length; i > n; )
              e[r++] = t[n++];
          if (i !== i)
              for (; void 0 !== t[n]; )
                  e[r++] = t[n++];
          return e.length = r,
          e
      },
      grep: function(e, t, i) {
          for (var n, r = [], o = 0, s = e.length, a = !i; s > o; o++)
              n = !t(e[o], o),
              n !== a && r.push(e[o]);
          return r
      },
      map: function(e, t, n) {
          var r, o = 0, s = e.length, a = i(e), l = [];
          if (a)
              for (; s > o; o++)
                  r = t(e[o], o, n),
                  null != r && l.push(r);
          else
              for (o in e)
                  r = t(e[o], o, n),
                  null != r && l.push(r);
          return Z.apply([], l)
      },
      guid: 1,
      proxy: function(e, t) {
          var i, n, r;
          return "string" == typeof t && (r = e[t],
          t = e,
          e = r),
          ot.isFunction(e) ? (i = V.call(arguments, 2),
          n = function() {
              return e.apply(t || this, i.concat(V.call(arguments)))
          }
          ,
          n.guid = e.guid = e.guid || ot.guid++,
          n) : void 0
      },
      now: function() {
          return +new Date
      },
      support: nt
  }),
  ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      J["[object " + t + "]"] = t.toLowerCase()
  });
  var ut = /*!
* Sizzle CSS Selector Engine v1.10.16
* http://sizzlejs.com/
*
* Copyright 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-01-13
*/
  function(e) {
      function t(e, t, i, n) {
          var r, o, s, a, l, c, d, h, m, g;
          if ((t ? t.ownerDocument || t : F) !== M && O(t),
          t = t || M,
          i = i || [],
          !e || "string" != typeof e)
              return i;
          if (1 !== (a = t.nodeType) && 9 !== a)
              return [];
          if (j && !n) {
              if (r = yt.exec(e))
                  if (s = r[1]) {
                      if (9 === a) {
                          if (o = t.getElementById(s),
                          !o || !o.parentNode)
                              return i;
                          if (o.id === s)
                              return i.push(o),
                              i
                      } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && I(t, o) && o.id === s)
                          return i.push(o),
                          i
                  } else {
                      if (r[2])
                          return J.apply(i, t.getElementsByTagName(e)),
                          i;
                      if ((s = r[3]) && T.getElementsByClassName && t.getElementsByClassName)
                          return J.apply(i, t.getElementsByClassName(s)),
                          i
                  }
              if (T.qsa && (!z || !z.test(e))) {
                  if (h = d = L,
                  m = t,
                  g = 9 === a && e,
                  1 === a && "object" !== t.nodeName.toLowerCase()) {
                      for (c = p(e),
                      (d = t.getAttribute("id")) ? h = d.replace(_t, "\\$&") : t.setAttribute("id", h),
                      h = "[id='" + h + "'] ",
                      l = c.length; l--; )
                          c[l] = h + f(c[l]);
                      m = bt.test(e) && u(t.parentNode) || t,
                      g = c.join(",")
                  }
                  if (g)
                      try {
                          return J.apply(i, m.querySelectorAll(g)),
                          i
                      } catch (v) {} finally {
                          d || t.removeAttribute("id")
                      }
              }
          }
          return x(e.replace(lt, "$1"), t, i, n)
      }
      function i() {
          function e(i, n) {
              return t.push(i + " ") > k.cacheLength && delete e[t.shift()],
              e[i + " "] = n
          }
          var t = [];
          return e
      }
      function n(e) {
          return e[L] = !0,
          e
      }
      function r(e) {
          var t = M.createElement("div");
          try {
              return !!e(t)
          } catch (i) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function o(e, t) {
          for (var i = e.split("|"), n = e.length; n--; )
              k.attrHandle[i[n]] = t
      }
      function s(e, t) {
          var i = t && e
            , n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
          if (n)
              return n;
          if (i)
              for (; i = i.nextSibling; )
                  if (i === t)
                      return -1;
          return e ? 1 : -1
      }
      function a(e) {
          return function(t) {
              var i = t.nodeName.toLowerCase();
              return "input" === i && t.type === e
          }
      }
      function l(e) {
          return function(t) {
              var i = t.nodeName.toLowerCase();
              return ("input" === i || "button" === i) && t.type === e
          }
      }
      function c(e) {
          return n(function(t) {
              return t = +t,
              n(function(i, n) {
                  for (var r, o = e([], i.length, t), s = o.length; s--; )
                      i[r = o[s]] && (i[r] = !(n[r] = i[r]))
              })
          })
      }
      function u(e) {
          return e && typeof e.getElementsByTagName !== Y && e
      }
      function d() {}
      function p(e, i) {
          var n, r, o, s, a, l, c, u = W[e + " "];
          if (u)
              return i ? 0 : u.slice(0);
          for (a = e,
          l = [],
          c = k.preFilter; a; ) {
              (!n || (r = ct.exec(a))) && (r && (a = a.slice(r[0].length) || a),
              l.push(o = [])),
              n = !1,
              (r = ut.exec(a)) && (n = r.shift(),
              o.push({
                  value: n,
                  type: r[0].replace(lt, " ")
              }),
              a = a.slice(n.length));
              for (s in k.filter)
                  !(r = ht[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(),
                  o.push({
                      value: n,
                      type: s,
                      matches: r
                  }),
                  a = a.slice(n.length));
              if (!n)
                  break
          }
          return i ? a.length : a ? t.error(e) : W(e, l).slice(0)
      }
      function f(e) {
          for (var t = 0, i = e.length, n = ""; i > t; t++)
              n += e[t].value;
          return n
      }
      function h(e, t, i) {
          var n = t.dir
            , r = i && "parentNode" === n
            , o = B++;
          return t.first ? function(t, i, o) {
              for (; t = t[n]; )
                  if (1 === t.nodeType || r)
                      return e(t, i, o)
          }
          : function(t, i, s) {
              var a, l, c = [H, o];
              if (s) {
                  for (; t = t[n]; )
                      if ((1 === t.nodeType || r) && e(t, i, s))
                          return !0
              } else
                  for (; t = t[n]; )
                      if (1 === t.nodeType || r) {
                          if (l = t[L] || (t[L] = {}),
                          (a = l[n]) && a[0] === H && a[1] === o)
                              return c[2] = a[2];
                          if (l[n] = c,
                          c[2] = e(t, i, s))
                              return !0
                      }
          }
      }
      function m(e) {
          return e.length > 1 ? function(t, i, n) {
              for (var r = e.length; r--; )
                  if (!e[r](t, i, n))
                      return !1;
              return !0
          }
          : e[0]
      }
      function g(e, t, i, n, r) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
              (o = e[a]) && (!i || i(o, n, r)) && (s.push(o),
              c && t.push(a));
          return s
      }
      function v(e, t, i, r, o, s) {
          return r && !r[L] && (r = v(r)),
          o && !o[L] && (o = v(o, s)),
          n(function(n, s, a, l) {
              var c, u, d, p = [], f = [], h = s.length, m = n || _(t || "*", a.nodeType ? [a] : a, []), v = !e || !n && t ? m : g(m, p, e, a, l), y = i ? o || (n ? e : h || r) ? [] : s : v;
              if (i && i(v, y, a, l),
              r)
                  for (c = g(y, f),
                  r(c, [], a, l),
                  u = c.length; u--; )
                      (d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
              if (n) {
                  if (o || e) {
                      if (o) {
                          for (c = [],
                          u = y.length; u--; )
                              (d = y[u]) && c.push(v[u] = d);
                          o(null, y = [], c, l)
                      }
                      for (u = y.length; u--; )
                          (d = y[u]) && (c = o ? tt.call(n, d) : p[u]) > -1 && (n[c] = !(s[c] = d))
                  }
              } else
                  y = g(y === s ? y.splice(h, y.length) : y),
                  o ? o(null, s, y, l) : J.apply(s, y)
          })
      }
      function y(e) {
          for (var t, i, n, r = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = h(function(e) {
              return e === t
          }, s, !0), c = h(function(e) {
              return tt.call(t, e) > -1
          }, s, !0), u = [function(e, i, n) {
              return !o && (n || i !== E) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
          }
          ]; r > a; a++)
              if (i = k.relative[e[a].type])
                  u = [h(m(u), i)];
              else {
                  if (i = k.filter[e[a].type].apply(null, e[a].matches),
                  i[L]) {
                      for (n = ++a; r > n && !k.relative[e[n].type]; n++)
                          ;
                      return v(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({
                          value: " " === e[a - 2].type ? "*" : ""
                      })).replace(lt, "$1"), i, n > a && y(e.slice(a, n)), r > n && y(e = e.slice(n)), r > n && f(e))
                  }
                  u.push(i)
              }
          return m(u)
      }
      function b(e, i) {
          var r = i.length > 0
            , o = e.length > 0
            , s = function(n, s, a, l, c) {
              var u, d, p, f = 0, h = "0", m = n && [], v = [], y = E, b = n || o && k.find.TAG("*", c), _ = H += null == y ? 1 : Math.random() || .1, x = b.length;
              for (c && (E = s !== M && s); h !== x && null != (u = b[h]); h++) {
                  if (o && u) {
                      for (d = 0; p = e[d++]; )
                          if (p(u, s, a)) {
                              l.push(u);
                              break
                          }
                      c && (H = _)
                  }
                  r && ((u = !p && u) && f--,
                  n && m.push(u))
              }
              if (f += h,
              r && h !== f) {
                  for (d = 0; p = i[d++]; )
                      p(m, v, s, a);
                  if (n) {
                      if (f > 0)
                          for (; h--; )
                              m[h] || v[h] || (v[h] = Q.call(l));
                      v = g(v)
                  }
                  J.apply(l, v),
                  c && !n && v.length > 0 && f + i.length > 1 && t.uniqueSort(l)
              }
              return c && (H = _,
              E = y),
              m
          };
          return r ? n(s) : s
      }
      function _(e, i, n) {
          for (var r = 0, o = i.length; o > r; r++)
              t(e, i[r], n);
          return n
      }
      function x(e, t, i, n) {
          var r, o, s, a, l, c = p(e);
          if (!n && 1 === c.length) {
              if (o = c[0] = c[0].slice(0),
              o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === t.nodeType && j && k.relative[o[1].type]) {
                  if (t = (k.find.ID(s.matches[0].replace(xt, wt), t) || [])[0],
                  !t)
                      return i;
                  e = e.slice(o.shift().value.length)
              }
              for (r = ht.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
              !k.relative[a = s.type]); )
                  if ((l = k.find[a]) && (n = l(s.matches[0].replace(xt, wt), bt.test(o[0].type) && u(t.parentNode) || t))) {
                      if (o.splice(r, 1),
                      e = n.length && f(o),
                      !e)
                          return J.apply(i, n),
                          i;
                      break
                  }
          }
          return P(e, c)(n, t, !j, i, bt.test(e) && u(t.parentNode) || t),
          i
      }
      var w, T, k, S, C, P, E, A, $, O, M, D, j, z, N, R, I, L = "sizzle" + -new Date, F = e.document, H = 0, B = 0, q = i(), W = i(), X = i(), U = function(e, t) {
          return e === t && ($ = !0),
          0
      }, Y = "undefined", G = 1 << 31, V = {}.hasOwnProperty, Z = [], Q = Z.pop, K = Z.push, J = Z.push, et = Z.slice, tt = Z.indexOf || function(e) {
          for (var t = 0, i = this.length; i > t; t++)
              if (this[t] === e)
                  return t;
          return -1
      }
      , it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = rt.replace("w", "w#"), st = "\\[" + nt + "*(" + rt + ")" + nt + "*(?:([*^$|!~]?=)" + nt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + nt + "*\\]", at = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ct = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), pt = new RegExp(at), ft = new RegExp("^" + ot + "$"), ht = {
          ID: new RegExp("^#(" + rt + ")"),
          CLASS: new RegExp("^\\.(" + rt + ")"),
          TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + st),
          PSEUDO: new RegExp("^" + at),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
          bool: new RegExp("^(?:" + it + ")$","i"),
          needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
      }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, _t = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), wt = function(e, t, i) {
          var n = "0x" + t - 65536;
          return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      };
      try {
          J.apply(Z = et.call(F.childNodes), F.childNodes),
          Z[F.childNodes.length].nodeType
      } catch (Tt) {
          J = {
              apply: Z.length ? function(e, t) {
                  K.apply(e, et.call(t))
              }
              : function(e, t) {
                  for (var i = e.length, n = 0; e[i++] = t[n++]; )
                      ;
                  e.length = i - 1
              }
          }
      }
      T = t.support = {},
      C = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1
      }
      ,
      O = t.setDocument = function(e) {
          var t, i = e ? e.ownerDocument || e : F, n = i.defaultView;
          return i !== M && 9 === i.nodeType && i.documentElement ? (M = i,
          D = i.documentElement,
          j = !C(i),
          n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
              O()
          }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
              O()
          })),
          T.attributes = r(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          T.getElementsByTagName = r(function(e) {
              return e.appendChild(i.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          T.getElementsByClassName = vt.test(i.getElementsByClassName) && r(function(e) {
              return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
              e.firstChild.className = "i",
              2 === e.getElementsByClassName("i").length
          }),
          T.getById = r(function(e) {
              return D.appendChild(e).id = L,
              !i.getElementsByName || !i.getElementsByName(L).length
          }),
          T.getById ? (k.find.ID = function(e, t) {
              if (typeof t.getElementById !== Y && j) {
                  var i = t.getElementById(e);
                  return i && i.parentNode ? [i] : []
              }
          }
          ,
          k.filter.ID = function(e) {
              var t = e.replace(xt, wt);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ) : (delete k.find.ID,
          k.filter.ID = function(e) {
              var t = e.replace(xt, wt);
              return function(e) {
                  var i = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                  return i && i.value === t
              }
          }
          ),
          k.find.TAG = T.getElementsByTagName ? function(e, t) {
              return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
          }
          : function(e, t) {
              var i, n = [], r = 0, o = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; i = o[r++]; )
                      1 === i.nodeType && n.push(i);
                  return n
              }
              return o
          }
          ,
          k.find.CLASS = T.getElementsByClassName && function(e, t) {
              return typeof t.getElementsByClassName !== Y && j ? t.getElementsByClassName(e) : void 0
          }
          ,
          N = [],
          z = [],
          (T.qsa = vt.test(i.querySelectorAll)) && (r(function(e) {
              e.innerHTML = "<select t=''><option selected=''></option></select>",
              e.querySelectorAll("[t^='']").length && z.push("[*^$]=" + nt + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || z.push("\\[" + nt + "*(?:value|" + it + ")"),
              e.querySelectorAll(":checked").length || z.push(":checked")
          }),
          r(function(e) {
              var t = i.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && z.push("name" + nt + "*[*^$|!~]?="),
              e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              z.push(",.*:")
          })),
          (T.matchesSelector = vt.test(R = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
              T.disconnectedMatch = R.call(e, "div"),
              R.call(e, "[s!='']:x"),
              N.push("!=", at)
          }),
          z = z.length && new RegExp(z.join("|")),
          N = N.length && new RegExp(N.join("|")),
          t = vt.test(D.compareDocumentPosition),
          I = t || vt.test(D.contains) ? function(e, t) {
              var i = 9 === e.nodeType ? e.documentElement : e
                , n = t && t.parentNode;
              return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          U = t ? function(e, t) {
              if (e === t)
                  return $ = !0,
                  0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
              1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && I(F, e) ? -1 : t === i || t.ownerDocument === F && I(F, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & n ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return $ = !0,
                  0;
              var n, r = 0, o = e.parentNode, a = t.parentNode, l = [e], c = [t];
              if (!o || !a)
                  return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
              if (o === a)
                  return s(e, t);
              for (n = e; n = n.parentNode; )
                  l.unshift(n);
              for (n = t; n = n.parentNode; )
                  c.unshift(n);
              for (; l[r] === c[r]; )
                  r++;
              return r ? s(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
          }
          ,
          i) : M
      }
      ,
      t.matches = function(e, i) {
          return t(e, null, null, i)
      }
      ,
      t.matchesSelector = function(e, i) {
          if ((e.ownerDocument || e) !== M && O(e),
          i = i.replace(dt, "='$1']"),
          !(!T.matchesSelector || !j || N && N.test(i) || z && z.test(i)))
              try {
                  var n = R.call(e, i);
                  if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return n
              } catch (r) {}
          return t(i, M, null, [e]).length > 0
      }
      ,
      t.contains = function(e, t) {
          return (e.ownerDocument || e) !== M && O(e),
          I(e, t)
      }
      ,
      t.attr = function(e, t) {
          (e.ownerDocument || e) !== M && O(e);
          var i = k.attrHandle[t.toLowerCase()]
            , n = i && V.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !j) : void 0;
          return void 0 !== n ? n : T.attributes || !j ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }
      ,
      t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      t.uniqueSort = function(e) {
          var t, i = [], n = 0, r = 0;
          if ($ = !T.detectDuplicates,
          A = !T.sortStable && e.slice(0),
          e.sort(U),
          $) {
              for (; t = e[r++]; )
                  t === e[r] && (n = i.push(r));
              for (; n--; )
                  e.splice(i[n], 1)
          }
          return A = null,
          e
      }
      ,
      S = t.getText = function(e) {
          var t, i = "", n = 0, r = e.nodeType;
          if (r) {
              if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      i += S(e)
              } else if (3 === r || 4 === r)
                  return e.nodeValue
          } else
              for (; t = e[n++]; )
                  i += S(t);
          return i
      }
      ,
      k = t.selectors = {
          cacheLength: 50,
          createPseudo: n,
          match: ht,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(xt, wt),
                  e[3] = (e[4] || e[5] || "").replace(xt, wt),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, i = !e[5] && e[2];
                  return ht.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : i && pt.test(i) && (t = p(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                  e[2] = i.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(xt, wt).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = q[e + " "];
                  return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && q(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, i, n) {
                  return function(r) {
                      var o = t.attr(r, e);
                      return null == o ? "!=" === i : i ? (o += "",
                      "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                  }
              },
              CHILD: function(e, t, i, n, r) {
                  var o = "nth" !== e.slice(0, 3)
                    , s = "last" !== e.slice(-4)
                    , a = "of-type" === t;
                  return 1 === n && 0 === r ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, i, l) {
                      var c, u, d, p, f, h, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                      if (g) {
                          if (o) {
                              for (; m; ) {
                                  for (d = t; d = d[m]; )
                                      if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                          return !1;
                                  h = m = "only" === e && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [s ? g.firstChild : g.lastChild],
                          s && y) {
                              for (u = g[L] || (g[L] = {}),
                              c = u[e] || [],
                              f = c[0] === H && c[1],
                              p = c[0] === H && c[2],
                              d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop(); )
                                  if (1 === d.nodeType && ++p && d === t) {
                                      u[e] = [H, f, p];
                                      break
                                  }
                          } else if (y && (c = (t[L] || (t[L] = {}))[e]) && c[0] === H)
                              p = c[1];
                          else
                              for (; (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[L] || (d[L] = {}))[e] = [H, p]),
                              d !== t)); )
                                  ;
                          return p -= r,
                          p === n || p % n === 0 && p / n >= 0
                      }
                  }
              },
              PSEUDO: function(e, i) {
                  var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return o[L] ? o(i) : o.length > 1 ? (r = [e, e, "", i],
                  k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                      for (var n, r = o(e, i), s = r.length; s--; )
                          n = tt.call(e, r[s]),
                          e[n] = !(t[n] = r[s])
                  }) : function(e) {
                      return o(e, 0, r)
                  }
                  ) : o
              }
          },
          pseudos: {
              not: n(function(e) {
                  var t = []
                    , i = []
                    , r = P(e.replace(lt, "$1"));
                  return r[L] ? n(function(e, t, i, n) {
                      for (var o, s = r(e, null, n, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o))
                  }) : function(e, n, o) {
                      return t[0] = e,
                      r(t, null, o, i),
                      !i.pop()
                  }
              }),
              has: n(function(e) {
                  return function(i) {
                      return t(e, i).length > 0
                  }
              }),
              contains: n(function(e) {
                  return function(t) {
                      return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                  }
              }),
              lang: n(function(e) {
                  return ft.test(e || "") || t.error("unsupported lang: " + e),
                  e = e.replace(xt, wt).toLowerCase(),
                  function(t) {
                      var i;
                      do
                          if (i = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return i = i.toLowerCase(),
                              i === e || 0 === i.indexOf(e + "-");
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1
                  }
              }),
              target: function(t) {
                  var i = e.location && e.location.hash;
                  return i && i.slice(1) === t.id
              },
              root: function(e) {
                  return e === D
              },
              focus: function(e) {
                  return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: function(e) {
                  return e.disabled === !1
              },
              disabled: function(e) {
                  return e.disabled === !0
              },
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  e.selected === !0
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !k.pseudos.empty(e)
              },
              header: function(e) {
                  return gt.test(e.nodeName)
              },
              input: function(e) {
                  return mt.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: c(function() {
                  return [0]
              }),
              last: c(function(e, t) {
                  return [t - 1]
              }),
              eq: c(function(e, t, i) {
                  return [0 > i ? i + t : i]
              }),
              even: c(function(e, t) {
                  for (var i = 0; t > i; i += 2)
                      e.push(i);
                  return e
              }),
              odd: c(function(e, t) {
                  for (var i = 1; t > i; i += 2)
                      e.push(i);
                  return e
              }),
              lt: c(function(e, t, i) {
                  for (var n = 0 > i ? i + t : i; --n >= 0; )
                      e.push(n);
                  return e
              }),
              gt: c(function(e, t, i) {
                  for (var n = 0 > i ? i + t : i; ++n < t; )
                      e.push(n);
                  return e
              })
          }
      },
      k.pseudos.nth = k.pseudos.eq;
      for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          k.pseudos[w] = a(w);
      for (w in {
          submit: !0,
          reset: !0
      })
          k.pseudos[w] = l(w);
      return d.prototype = k.filters = k.pseudos,
      k.setFilters = new d,
      P = t.compile = function(e, t) {
          var i, n = [], r = [], o = X[e + " "];
          if (!o) {
              for (t || (t = p(e)),
              i = t.length; i--; )
                  o = y(t[i]),
                  o[L] ? n.push(o) : r.push(o);
              o = X(e, b(r, n))
          }
          return o
      }
      ,
      T.sortStable = L.split("").sort(U).join("") === L,
      T.detectDuplicates = !!$,
      O(),
      T.sortDetached = r(function(e) {
          return 1 & e.compareDocumentPosition(M.createElement("div"))
      }),
      r(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, i) {
          return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      T.attributes && r(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, i) {
          return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }),
      r(function(e) {
          return null == e.getAttribute("disabled")
      }) || o(it, function(e, t, i) {
          var n;
          return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
      }),
      t
  }(e);
  ot.find = ut,
  ot.expr = ut.selectors,
  ot.expr[":"] = ot.expr.pseudos,
  ot.unique = ut.uniqueSort,
  ot.text = ut.getText,
  ot.isXMLDoc = ut.isXML,
  ot.contains = ut.contains;
  var dt = ot.expr.match.needsContext
    , pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
    , ft = /^.[^:#\[\.,]*$/;
  ot.filter = function(e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"),
      1 === t.length && 1 === n.nodeType ? ot.find.matchesSelector(n, e) ? [n] : [] : ot.find.matches(e, ot.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  ot.fn.extend({
      find: function(e) {
          var t, i = [], n = this, r = n.length;
          if ("string" != typeof e)
              return this.pushStack(ot(e).filter(function() {
                  for (t = 0; r > t; t++)
                      if (ot.contains(n[t], this))
                          return !0
              }));
          for (t = 0; r > t; t++)
              ot.find(e, n[t], i);
          return i = this.pushStack(r > 1 ? ot.unique(i) : i),
          i.selector = this.selector ? this.selector + " " + e : e,
          i
      },
      filter: function(e) {
          return this.pushStack(n(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(n(this, e || [], !0))
      },
      is: function(e) {
          return !!n(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
      }
  });
  var ht, mt = e.document, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, vt = ot.fn.init = function(e, t) {
      var i, n;
      if (!e)
          return this;
      if ("string" == typeof e) {
          if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e),
          !i || !i[1] && t)
              return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (t = t instanceof ot ? t[0] : t,
              ot.merge(this, ot.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : mt, !0)),
              pt.test(i[1]) && ot.isPlainObject(t))
                  for (i in t)
                      ot.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
          }
          if (n = mt.getElementById(i[2]),
          n && n.parentNode) {
              if (n.id !== i[2])
                  return ht.find(e);
              this.length = 1,
              this[0] = n
          }
          return this.context = mt,
          this.selector = e,
          this
      }
      return e.nodeType ? (this.context = this[0] = e,
      this.length = 1,
      this) : ot.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector,
      this.context = e.context),
      ot.makeArray(e, this))
  }
  ;
  vt.prototype = ot.fn,
  ht = ot(mt);
  var yt = /^(?:parents|prev(?:Until|All))/
    , bt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  ot.extend({
      dir: function(e, t, i) {
          for (var n = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !ot(r).is(i)); )
              1 === r.nodeType && n.push(r),
              r = r[t];
          return n
      },
      sibling: function(e, t) {
          for (var i = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && i.push(e);
          return i
      }
  }),
  ot.fn.extend({
      has: function(e) {
          var t, i = ot(e, this), n = i.length;
          return this.filter(function() {
              for (t = 0; n > t; t++)
                  if (ot.contains(this, i[t]))
                      return !0
          })
      },
      closest: function(e, t) {
          for (var i, n = 0, r = this.length, o = [], s = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; r > n; n++)
              for (i = this[n]; i && i !== t; i = i.parentNode)
                  if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, e))) {
                      o.push(i);
                      break
                  }
          return this.pushStack(o.length > 1 ? ot.unique(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? ot.inArray(this[0], ot(e)) : ot.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(ot.unique(ot.merge(this.get(), ot(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }),
  ot.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return ot.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, i) {
          return ot.dir(e, "parentNode", i)
      },
      next: function(e) {
          return r(e, "nextSibling")
      },
      prev: function(e) {
          return r(e, "previousSibling")
      },
      nextAll: function(e) {
          return ot.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return ot.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, i) {
          return ot.dir(e, "nextSibling", i)
      },
      prevUntil: function(e, t, i) {
          return ot.dir(e, "previousSibling", i)
      },
      siblings: function(e) {
          return ot.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return ot.sibling(e.firstChild)
      },
      contents: function(e) {
          return ot.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ot.merge([], e.childNodes)
      }
  }, function(e, t) {
      ot.fn[e] = function(i, n) {
          var r = ot.map(this, t, i);
          return "Until" !== e.slice(-5) && (n = i),
          n && "string" == typeof n && (r = ot.filter(n, r)),
          this.length > 1 && (bt[e] || (r = ot.unique(r)),
          yt.test(e) && (r = r.reverse())),
          this.pushStack(r)
      }
  });
  var _t = /\S+/g
    , xt = {};
  ot.Callbacks = function(e) {
      e = "string" == typeof e ? xt[e] || o(e) : ot.extend({}, e);
      var t, i, n, r, s, a, l = [], c = !e.once && [], u = function(o) {
          for (i = e.memory && o,
          n = !0,
          s = a || 0,
          a = 0,
          r = l.length,
          t = !0; l && r > s; s++)
              if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                  i = !1;
                  break
              }
          t = !1,
          l && (c ? c.length && u(c.shift()) : i ? l = [] : d.disable())
      }, d = {
          add: function() {
              if (l) {
                  var n = l.length;
                  !function o(t) {
                      ot.each(t, function(t, i) {
                          var n = ot.type(i);
                          "function" === n ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                      })
                  }(arguments),
                  t ? r = l.length : i && (a = n,
                  u(i))
              }
              return this
          },
          remove: function() {
              return l && ot.each(arguments, function(e, i) {
                  for (var n; (n = ot.inArray(i, l, n)) > -1; )
                      l.splice(n, 1),
                      t && (r >= n && r--,
                      s >= n && s--)
              }),
              this
          },
          has: function(e) {
              return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
          },
          empty: function() {
              return l = [],
              r = 0,
              this
          },
          disable: function() {
              return l = c = i = void 0,
              this
          },
          disabled: function() {
              return !l
          },
          lock: function() {
              return c = void 0,
              i || d.disable(),
              this
          },
          locked: function() {
              return !c
          },
          fireWith: function(e, i) {
              return !l || n && !c || (i = i || [],
              i = [e, i.slice ? i.slice() : i],
              t ? c.push(i) : u(i)),
              this
          },
          fire: function() {
              return d.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!n
          }
      };
      return d
  }
  ,
  ot.extend({
      Deferred: function(e) {
          var t = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]]
            , i = "pending"
            , n = {
              state: function() {
                  return i
              },
              always: function() {
                  return r.done(arguments).fail(arguments),
                  this
              },
              then: function() {
                  var e = arguments;
                  return ot.Deferred(function(i) {
                      ot.each(t, function(t, o) {
                          var s = ot.isFunction(e[t]) && e[t];
                          r[o[1]](function() {
                              var e = s && s.apply(this, arguments);
                              e && ot.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? ot.extend(e, n) : n
              }
          }
            , r = {};
          return n.pipe = n.then,
          ot.each(t, function(e, o) {
              var s = o[2]
                , a = o[3];
              n[o[1]] = s.add,
              a && s.add(function() {
                  i = a
              }, t[1 ^ e][2].disable, t[2][2].lock),
              r[o[0]] = function() {
                  return r[o[0] + "With"](this === r ? n : this, arguments),
                  this
              }
              ,
              r[o[0] + "With"] = s.fireWith
          }),
          n.promise(r),
          e && e.call(r, r),
          r
      },
      when: function(e) {
          var t, i, n, r = 0, o = V.call(arguments), s = o.length, a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ot.Deferred(), c = function(e, i, n) {
              return function(r) {
                  i[e] = this,
                  n[e] = arguments.length > 1 ? V.call(arguments) : r,
                  n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
              }
          };
          if (s > 1)
              for (t = new Array(s),
              i = new Array(s),
              n = new Array(s); s > r; r++)
                  o[r] && ot.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, t)) : --a;
          return a || l.resolveWith(n, o),
          l.promise()
      }
  });
  var wt;
  ot.fn.ready = function(e) {
      return ot.ready.promise().done(e),
      this
  }
  ,
  ot.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? ot.readyWait++ : ot.ready(!0)
      },
      ready: function(e) {
          if (e === !0 ? !--ot.readyWait : !ot.isReady) {
              if (!mt.body)
                  return setTimeout(ot.ready);
              ot.isReady = !0,
              e !== !0 && --ot.readyWait > 0 || (wt.resolveWith(mt, [ot]),
              ot.fn.trigger && ot(mt).trigger("ready").off("ready"))
          }
      }
  }),
  ot.ready.promise = function(t) {
      if (!wt)
          if (wt = ot.Deferred(),
          "complete" === mt.readyState)
              setTimeout(ot.ready);
          else if (mt.addEventListener)
              mt.addEventListener("DOMContentLoaded", a, !1),
              e.addEventListener("load", a, !1);
          else {
              mt.attachEvent("onreadystatechange", a),
              e.attachEvent("onload", a);
              var i = !1;
              try {
                  i = null == e.frameElement && mt.documentElement
              } catch (n) {}
              i && i.doScroll && !function r() {
                  if (!ot.isReady) {
                      try {
                          i.doScroll("left")
                      } catch (e) {
                          return setTimeout(r, 50)
                      }
                      s(),
                      ot.ready()
                  }
              }()
          }
      return wt.promise(t)
  }
  ;
  var Tt, kt = "undefined";
  for (Tt in ot(nt))
      break;
  nt.ownLast = "0" !== Tt,
  nt.inlineBlockNeedsLayout = !1,
  ot(function() {
      var e, t, i = mt.getElementsByTagName("body")[0];
      i && (e = mt.createElement("div"),
      e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
      t = mt.createElement("div"),
      i.appendChild(e).appendChild(t),
      typeof t.style.zoom !== kt && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
      (nt.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (i.style.zoom = 1)),
      i.removeChild(e),
      e = t = null)
  }),
  function() {
      var e = mt.createElement("div");
      if (null == nt.deleteExpando) {
          nt.deleteExpando = !0;
          try {
              delete e.test
          } catch (t) {
              nt.deleteExpando = !1
          }
      }
      e = null
  }(),
  ot.acceptData = function(e) {
      var t = ot.noData[(e.nodeName + " ").toLowerCase()]
        , i = +e.nodeType || 1;
      return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
  }
  ;
  var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , Ct = /([A-Z])/g;
  ot.extend({
      cache: {},
      noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
          return e = e.nodeType ? ot.cache[e[ot.expando]] : e[ot.expando],
          !!e && !c(e)
      },
      data: function(e, t, i) {
          return u(e, t, i)
      },
      removeData: function(e, t) {
          return d(e, t)
      },
      _data: function(e, t, i) {
          return u(e, t, i, !0)
      },
      _removeData: function(e, t) {
          return d(e, t, !0)
      }
  }),
  ot.fn.extend({
      data: function(e, t) {
          var i, n, r, o = this[0], s = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (r = ot.data(o),
              1 === o.nodeType && !ot._data(o, "parsedAttrs"))) {
                  for (i = s.length; i--; )
                      n = s[i].name,
                      0 === n.indexOf("data-") && (n = ot.camelCase(n.slice(5)),
                      l(o, n, r[n]));
                  ot._data(o, "parsedAttrs", !0)
              }
              return r
          }
          return "object" == typeof e ? this.each(function() {
              ot.data(this, e)
          }) : arguments.length > 1 ? this.each(function() {
              ot.data(this, e, t)
          }) : o ? l(o, e, ot.data(o, e)) : void 0
      },
      removeData: function(e) {
          return this.each(function() {
              ot.removeData(this, e)
          })
      }
  }),
  ot.extend({
      queue: function(e, t, i) {
          var n;
          return e ? (t = (t || "fx") + "queue",
          n = ot._data(e, t),
          i && (!n || ot.isArray(i) ? n = ot._data(e, t, ot.makeArray(i)) : n.push(i)),
          n || []) : void 0
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var i = ot.queue(e, t)
            , n = i.length
            , r = i.shift()
            , o = ot._queueHooks(e, t)
            , s = function() {
              ot.dequeue(e, t)
          };
          "inprogress" === r && (r = i.shift(),
          n--),
          r && ("fx" === t && i.unshift("inprogress"),
          delete o.stop,
          r.call(e, s, o)),
          !n && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var i = t + "queueHooks";
          return ot._data(e, i) || ot._data(e, i, {
              empty: ot.Callbacks("once memory").add(function() {
                  ot._removeData(e, t + "queue"),
                  ot._removeData(e, i)
              })
          })
      }
  }),
  ot.fn.extend({
      queue: function(e, t) {
          var i = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          i--),
          arguments.length < i ? ot.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var i = ot.queue(this, e, t);
              ot._queueHooks(this, e),
              "fx" === e && "inprogress" !== i[0] && ot.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              ot.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var i, n = 1, r = ot.Deferred(), o = this, s = this.length, a = function() {
              --n || r.resolveWith(o, [o])
          };
          for ("string" != typeof e && (t = e,
          e = void 0),
          e = e || "fx"; s--; )
              i = ot._data(o[s], e + "queueHooks"),
              i && i.empty && (n++,
              i.empty.add(a));
          return a(),
          r.promise(t)
      }
  });
  var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , Et = ["Top", "Right", "Bottom", "Left"]
    , At = function(e, t) {
      return e = t || e,
      "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
  }
    , $t = ot.access = function(e, t, i, n, r, o, s) {
      var a = 0
        , l = e.length
        , c = null == i;
      if ("object" === ot.type(i)) {
          r = !0;
          for (a in i)
              ot.access(e, t, a, i[a], !0, o, s)
      } else if (void 0 !== n && (r = !0,
      ot.isFunction(n) || (s = !0),
      c && (s ? (t.call(e, n),
      t = null) : (c = t,
      t = function(e, t, i) {
          return c.call(ot(e), i)
      }
      )),
      t))
          for (; l > a; a++)
              t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
      return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
  }
    , Ot = /^(?:checkbox|radio)$/i;
  !function() {
      var e = mt.createDocumentFragment()
        , t = mt.createElement("div")
        , i = mt.createElement("input");
      if (t.setAttribute("className", "t"),
      t.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
      nt.leadingWhitespace = 3 === t.firstChild.nodeType,
      nt.tbody = !t.getElementsByTagName("tbody").length,
      nt.htmlSerialize = !!t.getElementsByTagName("link").length,
      nt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML,
      i.type = "checkbox",
      i.checked = !0,
      e.appendChild(i),
      nt.appendChecked = i.checked,
      t.innerHTML = "<textarea>x</textarea>",
      nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
      e.appendChild(t),
      t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
      nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
      nt.noCloneEvent = !0,
      t.attachEvent && (t.attachEvent("onclick", function() {
          nt.noCloneEvent = !1
      }),
      t.cloneNode(!0).click()),
      null == nt.deleteExpando) {
          nt.deleteExpando = !0;
          try {
              delete t.test
          } catch (n) {
              nt.deleteExpando = !1
          }
      }
      e = t = i = null
  }(),
  function() {
      var t, i, n = mt.createElement("div");
      for (t in {
          submit: !0,
          change: !0,
          focusin: !0
      })
          i = "on" + t,
          (nt[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"),
          nt[t + "Bubbles"] = n.attributes[i].expando === !1);
      n = null
  }();
  var Mt = /^(?:input|select|textarea)$/i
    , Dt = /^key/
    , jt = /^(?:mouse|contextmenu)|click/
    , zt = /^(?:focusinfocus|focusoutblur)$/
    , Nt = /^([^.]*)(?:\.(.+)|)$/;
  ot.event = {
      global: {},
      add: function(e, t, i, n, r) {
          var o, s, a, l, c, u, d, p, f, h, m, g = ot._data(e);
          if (g) {
              for (i.handler && (l = i,
              i = l.handler,
              r = l.selector),
              i.guid || (i.guid = ot.guid++),
              (s = g.events) || (s = g.events = {}),
              (u = g.handle) || (u = g.handle = function(e) {
                  return typeof ot === kt || e && ot.event.triggered === e.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
              }
              ,
              u.elem = e),
              t = (t || "").match(_t) || [""],
              a = t.length; a--; )
                  o = Nt.exec(t[a]) || [],
                  f = m = o[1],
                  h = (o[2] || "").split(".").sort(),
                  f && (c = ot.event.special[f] || {},
                  f = (r ? c.delegateType : c.bindType) || f,
                  c = ot.event.special[f] || {},
                  d = ot.extend({
                      type: f,
                      origType: m,
                      data: n,
                      handler: i,
                      guid: i.guid,
                      selector: r,
                      needsContext: r && ot.expr.match.needsContext.test(r),
                      namespace: h.join(".")
                  }, l),
                  (p = s[f]) || (p = s[f] = [],
                  p.delegateCount = 0,
                  c.setup && c.setup.call(e, n, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))),
                  c.add && (c.add.call(e, d),
                  d.handler.guid || (d.handler.guid = i.guid)),
                  r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  ot.event.global[f] = !0);
              e = null
          }
      },
      remove: function(e, t, i, n, r) {
          var o, s, a, l, c, u, d, p, f, h, m, g = ot.hasData(e) && ot._data(e);
          if (g && (u = g.events)) {
              for (t = (t || "").match(_t) || [""],
              c = t.length; c--; )
                  if (a = Nt.exec(t[c]) || [],
                  f = m = a[1],
                  h = (a[2] || "").split(".").sort(),
                  f) {
                      for (d = ot.event.special[f] || {},
                      f = (n ? d.delegateType : d.bindType) || f,
                      p = u[f] || [],
                      a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      l = o = p.length; o--; )
                          s = p[o],
                          !r && m !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (p.splice(o, 1),
                          s.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, s));
                      l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ot.removeEvent(e, f, g.handle),
                      delete u[f])
                  } else
                      for (f in u)
                          ot.event.remove(e, f + t[c], i, n, !0);
              ot.isEmptyObject(u) && (delete g.handle,
              ot._removeData(e, "events"))
          }
      },
      trigger: function(t, i, n, r) {
          var o, s, a, l, c, u, d, p = [n || mt], f = tt.call(t, "type") ? t.type : t, h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
          if (a = u = n = n || mt,
          3 !== n.nodeType && 8 !== n.nodeType && !zt.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."),
          f = h.shift(),
          h.sort()),
          s = f.indexOf(":") < 0 && "on" + f,
          t = t[ot.expando] ? t : new ot.Event(f,"object" == typeof t && t),
          t.isTrigger = r ? 2 : 3,
          t.namespace = h.join("."),
          t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = void 0,
          t.target || (t.target = n),
          i = null == i ? [t] : ot.makeArray(i, [t]),
          c = ot.event.special[f] || {},
          r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
              if (!r && !c.noBubble && !ot.isWindow(n)) {
                  for (l = c.delegateType || f,
                  zt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                      p.push(a),
                      u = a;
                  u === (n.ownerDocument || mt) && p.push(u.defaultView || u.parentWindow || e)
              }
              for (d = 0; (a = p[d++]) && !t.isPropagationStopped(); )
                  t.type = d > 1 ? l : c.bindType || f,
                  o = (ot._data(a, "events") || {})[t.type] && ot._data(a, "handle"),
                  o && o.apply(a, i),
                  o = s && a[s],
                  o && o.apply && ot.acceptData(a) && (t.result = o.apply(a, i),
                  t.result === !1 && t.preventDefault());
              if (t.type = f,
              !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ot.acceptData(n) && s && n[f] && !ot.isWindow(n)) {
                  u = n[s],
                  u && (n[s] = null),
                  ot.event.triggered = f;
                  try {
                      n[f]()
                  } catch (m) {}
                  ot.event.triggered = void 0,
                  u && (n[s] = u)
              }
              return t.result
          }
      },
      dispatch: function(e) {
          e = ot.event.fix(e);
          var t, i, n, r, o, s = [], a = V.call(arguments), l = (ot._data(this, "events") || {})[e.type] || [], c = ot.event.special[e.type] || {};
          if (a[0] = e,
          e.delegateTarget = this,
          !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
              for (s = ot.event.handlers.call(this, e, l),
              t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                  for (e.currentTarget = r.elem,
                  o = 0; (n = r.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                      (!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n,
                      e.data = n.data,
                      i = ((ot.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a),
                      void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                      e.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, e),
              e.result
          }
      },
      handlers: function(e, t) {
          var i, n, r, o, s = [], a = t.delegateCount, l = e.target;
          if (a && l.nodeType && (!e.button || "click" !== e.type))
              for (; l != this; l = l.parentNode || this)
                  if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                      for (r = [],
                      o = 0; a > o; o++)
                          n = t[o],
                          i = n.selector + " ",
                          void 0 === r[i] && (r[i] = n.needsContext ? ot(i, this).index(l) >= 0 : ot.find(i, this, null, [l]).length),
                          r[i] && r.push(n);
                      r.length && s.push({
                          elem: l,
                          handlers: r
                      })
                  }
          return a < t.length && s.push({
              elem: this,
              handlers: t.slice(a)
          }),
          s
      },
      fix: function(e) {
          if (e[ot.expando])
              return e;
          var t, i, n, r = e.type, o = e, s = this.fixHooks[r];
          for (s || (this.fixHooks[r] = s = jt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}),
          n = s.props ? this.props.concat(s.props) : this.props,
          e = new ot.Event(o),
          t = n.length; t--; )
              i = n[t],
              e[i] = o[i];
          return e.target || (e.target = o.srcElement || mt),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          e.metaKey = !!e.metaKey,
          s.filter ? s.filter(e, o) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var i, n, r, o = t.button, s = t.fromElement;
              return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || mt,
              r = n.documentElement,
              i = n.body,
              e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
              e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
              !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
              e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
              e
          }
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== h() && this.focus)
                      try {
                          return this.focus(),
                          !1
                      } catch (e) {}
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  return this === h() && this.blur ? (this.blur(),
                  !1) : void 0
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                  !1) : void 0
              },
              _default: function(e) {
                  return ot.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, i, n) {
          var r = ot.extend(new ot.Event, i, {
              type: e,
              isSimulated: !0,
              originalEvent: {}
          });
          n ? ot.event.trigger(r, null, t) : ot.event.dispatch.call(t, r),
          r.isDefaultPrevented() && i.preventDefault()
      }
  },
  ot.removeEvent = mt.removeEventListener ? function(e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i, !1)
  }
  : function(e, t, i) {
      var n = "on" + t;
      e.detachEvent && (typeof e[n] === kt && (e[n] = null),
      e.detachEvent(n, i))
  }
  ,
  ot.Event = function(e, t) {
      return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? p : f) : this.type = e,
      t && ot.extend(this, t),
      this.timeStamp = e && e.timeStamp || ot.now(),
      this[ot.expando] = !0,
      void 0) : new ot.Event(e,t)
  }
  ,
  ot.Event.prototype = {
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = p,
          e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = p,
          e && (e.stopPropagation && e.stopPropagation(),
          e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
          this.isImmediatePropagationStopped = p,
          this.stopPropagation()
      }
  },
  ot.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
  }, function(e, t) {
      ot.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var i, n = this, r = e.relatedTarget, o = e.handleObj;
              return (!r || r !== n && !ot.contains(n, r)) && (e.type = o.origType,
              i = o.handler.apply(this, arguments),
              e.type = t),
              i
          }
      }
  }),
  nt.submitBubbles || (ot.event.special.submit = {
      setup: function() {
          return ot.nodeName(this, "form") ? !1 : (ot.event.add(this, "click._submit keypress._submit", function(e) {
              var t = e.target
                , i = ot.nodeName(t, "input") || ot.nodeName(t, "button") ? t.form : void 0;
              i && !ot._data(i, "submitBubbles") && (ot.event.add(i, "submit._submit", function(e) {
                  e._submit_bubble = !0
              }),
              ot._data(i, "submitBubbles", !0))
          }),
          void 0)
      },
      postDispatch: function(e) {
          e._submit_bubble && (delete e._submit_bubble,
          this.parentNode && !e.isTrigger && ot.event.simulate("submit", this.parentNode, e, !0))
      },
      teardown: function() {
          return ot.nodeName(this, "form") ? !1 : (ot.event.remove(this, "._submit"),
          void 0)
      }
  }),
  nt.changeBubbles || (ot.event.special.change = {
      setup: function() {
          return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(e) {
              "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
          }),
          ot.event.add(this, "click._change", function(e) {
              this._just_changed && !e.isTrigger && (this._just_changed = !1),
              ot.event.simulate("change", this, e, !0)
          })),
          !1) : (ot.event.add(this, "beforeactivate._change", function(e) {
              var t = e.target;
              Mt.test(t.nodeName) && !ot._data(t, "changeBubbles") && (ot.event.add(t, "change._change", function(e) {
                  !this.parentNode || e.isSimulated || e.isTrigger || ot.event.simulate("change", this.parentNode, e, !0)
              }),
              ot._data(t, "changeBubbles", !0))
          }),
          void 0)
      },
      handle: function(e) {
          var t = e.target;
          return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
          return ot.event.remove(this, "._change"),
          !Mt.test(this.nodeName)
      }
  }),
  nt.focusinBubbles || ot.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var i = function(e) {
          ot.event.simulate(t, e.target, ot.event.fix(e), !0)
      };
      ot.event.special[t] = {
          setup: function() {
              var n = this.ownerDocument || this
                , r = ot._data(n, t);
              r || n.addEventListener(e, i, !0),
              ot._data(n, t, (r || 0) + 1)
          },
          teardown: function() {
              var n = this.ownerDocument || this
                , r = ot._data(n, t) - 1;
              r ? ot._data(n, t, r) : (n.removeEventListener(e, i, !0),
              ot._removeData(n, t))
          }
      }
  }),
  ot.fn.extend({
      on: function(e, t, i, n, r) {
          var o, s;
          if ("object" == typeof e) {
              "string" != typeof t && (i = i || t,
              t = void 0);
              for (o in e)
                  this.on(o, t, i, e[o], r);
              return this
          }
          if (null == i && null == n ? (n = t,
          i = t = void 0) : null == n && ("string" == typeof t ? (n = i,
          i = void 0) : (n = i,
          i = t,
          t = void 0)),
          n === !1)
              n = f;
          else if (!n)
              return this;
          return 1 === r && (s = n,
          n = function(e) {
              return ot().off(e),
              s.apply(this, arguments)
          }
          ,
          n.guid = s.guid || (s.guid = ot.guid++)),
          this.each(function() {
              ot.event.add(this, e, n, i, t)
          })
      },
      one: function(e, t, i, n) {
          return this.on(e, t, i, n, 1)
      },
      off: function(e, t, i) {
          var n, r;
          if (e && e.preventDefault && e.handleObj)
              return n = e.handleObj,
              ot(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
              this;
          if ("object" == typeof e) {
              for (r in e)
                  this.off(r, t, e[r]);
              return this
          }
          return (t === !1 || "function" == typeof t) && (i = t,
          t = void 0),
          i === !1 && (i = f),
          this.each(function() {
              ot.event.remove(this, e, i, t)
          })
      },
      trigger: function(e, t) {
          return this.each(function() {
              ot.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var i = this[0];
          return i ? ot.event.trigger(e, t, i, !0) : void 0
      }
  });
  var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
    , It = / jQuery\d+="(?:null|\d+)"/g
    , Lt = new RegExp("<(?:" + Rt + ")[\\s/>]","i")
    , Ft = /^\s+/
    , Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
    , Bt = /<([\w:]+)/
    , qt = /<tbody/i
    , Wt = /<|&#?\w+;/
    , Xt = /<(?:script|style|link)/i
    , Ut = /checked\s*(?:[^=]|=\s*.checked.)/i
    , Yt = /^$|\/(?:java|ecma)script/i
    , Gt = /^true\/(.*)/
    , Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , Zt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  }
    , Qt = m(mt)
    , Kt = Qt.appendChild(mt.createElement("div"));
  Zt.optgroup = Zt.option,
  Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
  Zt.th = Zt.td,
  ot.extend({
      clone: function(e, t, i) {
          var n, r, o, s, a, l = ot.contains(e.ownerDocument, e);
          if (nt.html5Clone || ot.isXMLDoc(e) || !Lt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Kt.innerHTML = e.outerHTML,
          Kt.removeChild(o = Kt.firstChild)),
          !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
              for (n = g(o),
              a = g(e),
              s = 0; null != (r = a[s]); ++s)
                  n[s] && T(r, n[s]);
          if (t)
              if (i)
                  for (a = a || g(e),
                  n = n || g(o),
                  s = 0; null != (r = a[s]); s++)
                      w(r, n[s]);
              else
                  w(e, o);
          return n = g(o, "script"),
          n.length > 0 && x(n, !l && g(e, "script")),
          n = a = r = null,
          o
      },
      buildFragment: function(e, t, i, n) {
          for (var r, o, s, a, l, c, u, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
              if (o = e[h],
              o || 0 === o)
                  if ("object" === ot.type(o))
                      ot.merge(f, o.nodeType ? [o] : o);
                  else if (Wt.test(o)) {
                      for (a = a || p.appendChild(t.createElement("div")),
                      l = (Bt.exec(o) || ["", ""])[1].toLowerCase(),
                      u = Zt[l] || Zt._default,
                      a.innerHTML = u[1] + o.replace(Ht, "<$1></$2>") + u[2],
                      r = u[0]; r--; )
                          a = a.lastChild;
                      if (!nt.leadingWhitespace && Ft.test(o) && f.push(t.createTextNode(Ft.exec(o)[0])),
                      !nt.tbody)
                          for (o = "table" !== l || qt.test(o) ? "<table>" !== u[1] || qt.test(o) ? 0 : a : a.firstChild,
                          r = o && o.childNodes.length; r--; )
                              ot.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                      for (ot.merge(f, a.childNodes),
                      a.textContent = ""; a.firstChild; )
                          a.removeChild(a.firstChild);
                      a = p.lastChild
                  } else
                      f.push(t.createTextNode(o));
          for (a && p.removeChild(a),
          nt.appendChecked || ot.grep(g(f, "input"), v),
          h = 0; o = f[h++]; )
              if ((!n || -1 === ot.inArray(o, n)) && (s = ot.contains(o.ownerDocument, o),
              a = g(p.appendChild(o), "script"),
              s && x(a),
              i))
                  for (r = 0; o = a[r++]; )
                      Yt.test(o.type || "") && i.push(o);
          return a = null,
          p
      },
      cleanData: function(e, t) {
          for (var i, n, r, o, s = 0, a = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (i = e[s]); s++)
              if ((t || ot.acceptData(i)) && (r = i[a],
              o = r && l[r])) {
                  if (o.events)
                      for (n in o.events)
                          u[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, o.handle);
                  l[r] && (delete l[r],
                  c ? delete i[a] : typeof i.removeAttribute !== kt ? i.removeAttribute(a) : i[a] = null,
                  G.push(r))
              }
      }
  }),
  ot.fn.extend({
      text: function(e) {
          return $t(this, function(e) {
              return void 0 === e ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
          }, null, e, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = y(this, e);
                  t.appendChild(e)
              }
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = y(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          for (var i, n = e ? ot.filter(e, this) : this, r = 0; null != (i = n[r]); r++)
              t || 1 !== i.nodeType || ot.cleanData(g(i)),
              i.parentNode && (t && ot.contains(i.ownerDocument, i) && x(g(i, "script")),
              i.parentNode.removeChild(i));
          return this
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) {
              for (1 === e.nodeType && ot.cleanData(g(e, !1)); e.firstChild; )
                  e.removeChild(e.firstChild);
              e.options && ot.nodeName(e, "select") && (e.options.length = 0)
          }
          return this
      },
      clone: function(e, t) {
          return e = null == e ? !1 : e,
          t = null == t ? e : t,
          this.map(function() {
              return ot.clone(this, e, t)
          })
      },
      html: function(e) {
          return $t(this, function(e) {
              var t = this[0] || {}
                , i = 0
                , n = this.length;
              if (void 0 === e)
                  return 1 === t.nodeType ? t.innerHTML.replace(It, "") : void 0;
              if (!("string" != typeof e || Xt.test(e) || !nt.htmlSerialize && Lt.test(e) || !nt.leadingWhitespace && Ft.test(e) || Zt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                  e = e.replace(Ht, "<$1></$2>");
                  try {
                      for (; n > i; i++)
                          t = this[i] || {},
                          1 === t.nodeType && (ot.cleanData(g(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (r) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = arguments[0];
          return this.domManip(arguments, function(t) {
              e = this.parentNode,
              ot.cleanData(g(this)),
              e && e.replaceChild(t, this)
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(e, t) {
          e = Z.apply([], e);
          var i, n, r, o, s, a, l = 0, c = this.length, u = this, d = c - 1, p = e[0], f = ot.isFunction(p);
          if (f || c > 1 && "string" == typeof p && !nt.checkClone && Ut.test(p))
              return this.each(function(i) {
                  var n = u.eq(i);
                  f && (e[0] = p.call(this, i, n.html())),
                  n.domManip(e, t)
              });
          if (c && (a = ot.buildFragment(e, this[0].ownerDocument, !1, this),
          i = a.firstChild,
          1 === a.childNodes.length && (a = i),
          i)) {
              for (o = ot.map(g(a, "script"), b),
              r = o.length; c > l; l++)
                  n = a,
                  l !== d && (n = ot.clone(n, !0, !0),
                  r && ot.merge(o, g(n, "script"))),
                  t.call(this[l], n, l);
              if (r)
                  for (s = o[o.length - 1].ownerDocument,
                  ot.map(o, _),
                  l = 0; r > l; l++)
                      n = o[l],
                      Yt.test(n.type || "") && !ot._data(n, "globalEval") && ot.contains(s, n) && (n.src ? ot._evalUrl && ot._evalUrl(n.src) : ot.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Vt, "")));
              a = i = null
          }
          return this
      }
  }),
  ot.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      ot.fn[e] = function(e) {
          for (var i, n = 0, r = [], o = ot(e), s = o.length - 1; s >= n; n++)
              i = n === s ? this : this.clone(!0),
              ot(o[n])[t](i),
              Q.apply(r, i.get());
          return this.pushStack(r)
      }
  });
  var Jt, ei = {};
  !function() {
      var e, t, i = mt.createElement("div"), n = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
      e = i.getElementsByTagName("a")[0],
      e.style.cssText = "float:left;opacity:.5",
      nt.opacity = /^0.5/.test(e.style.opacity),
      nt.cssFloat = !!e.style.cssFloat,
      i.style.backgroundClip = "content-box",
      i.cloneNode(!0).style.backgroundClip = "",
      nt.clearCloneStyle = "content-box" === i.style.backgroundClip,
      e = i = null,
      nt.shrinkWrapBlocks = function() {
          var e, i, r, o;
          if (null == t) {
              if (e = mt.getElementsByTagName("body")[0],
              !e)
                  return;
              o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
              i = mt.createElement("div"),
              r = mt.createElement("div"),
              e.appendChild(i).appendChild(r),
              t = !1,
              typeof r.style.zoom !== kt && (r.style.cssText = n + ";width:1px;padding:1px;zoom:1",
              r.innerHTML = "<div></div>",
              r.firstChild.style.width = "5px",
              t = 3 !== r.offsetWidth),
              e.removeChild(i),
              e = i = r = null
          }
          return t
      }
  }();
  var ti, ii, ni = /^margin/, ri = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$","i"), oi = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (ti = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
  }
  ,
  ii = function(e, t, i) {
      var n, r, o, s, a = e.style;
      return i = i || ti(e),
      s = i ? i.getPropertyValue(t) || i[t] : void 0,
      i && ("" !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)),
      ri.test(s) && ni.test(t) && (n = a.width,
      r = a.minWidth,
      o = a.maxWidth,
      a.minWidth = a.maxWidth = a.width = s,
      s = i.width,
      a.width = n,
      a.minWidth = r,
      a.maxWidth = o)),
      void 0 === s ? s : s + ""
  }
  ) : mt.documentElement.currentStyle && (ti = function(e) {
      return e.currentStyle
  }
  ,
  ii = function(e, t, i) {
      var n, r, o, s, a = e.style;
      return i = i || ti(e),
      s = i ? i[t] : void 0,
      null == s && a && a[t] && (s = a[t]),
      ri.test(s) && !oi.test(t) && (n = a.left,
      r = e.runtimeStyle,
      o = r && r.left,
      o && (r.left = e.currentStyle.left),
      a.left = "fontSize" === t ? "1em" : s,
      s = a.pixelLeft + "px",
      a.left = n,
      o && (r.left = o)),
      void 0 === s ? s : s + "" || "auto"
  }
  ),
  function() {
      function t() {
          var t, i, n = mt.getElementsByTagName("body")[0];
          n && (t = mt.createElement("div"),
          i = mt.createElement("div"),
          t.style.cssText = c,
          n.appendChild(t).appendChild(i),
          i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
          ot.swap(n, null != n.style.zoom ? {
              zoom: 1
          } : {}, function() {
              r = 4 === i.offsetWidth
          }),
          o = !0,
          s = !1,
          a = !0,
          e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(i, null) || {}).top,
          o = "4px" === (e.getComputedStyle(i, null) || {
              width: "4px"
          }).width),
          n.removeChild(t),
          i = n = null)
      }
      var i, n, r, o, s, a, l = mt.createElement("div"), c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
      i = l.getElementsByTagName("a")[0],
      i.style.cssText = "float:left;opacity:.5",
      nt.opacity = /^0.5/.test(i.style.opacity),
      nt.cssFloat = !!i.style.cssFloat,
      l.style.backgroundClip = "content-box",
      l.cloneNode(!0).style.backgroundClip = "",
      nt.clearCloneStyle = "content-box" === l.style.backgroundClip,
      i = l = null,
      ot.extend(nt, {
          reliableHiddenOffsets: function() {
              if (null != n)
                  return n;
              var e, t, i, r = mt.createElement("div"), o = mt.getElementsByTagName("body")[0];
              if (o)
                  return r.setAttribute("className", "t"),
                  r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                  e = mt.createElement("div"),
                  e.style.cssText = c,
                  o.appendChild(e).appendChild(r),
                  r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                  t = r.getElementsByTagName("td"),
                  t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                  i = 0 === t[0].offsetHeight,
                  t[0].style.display = "",
                  t[1].style.display = "none",
                  n = i && 0 === t[0].offsetHeight,
                  o.removeChild(e),
                  r = o = null,
                  n
          },
          boxSizing: function() {
              return null == r && t(),
              r
          },
          boxSizingReliable: function() {
              return null == o && t(),
              o
          },
          pixelPosition: function() {
              return null == s && t(),
              s
          },
          reliableMarginRight: function() {
              var t, i, n, r;
              if (null == a && e.getComputedStyle) {
                  if (t = mt.getElementsByTagName("body")[0],
                  !t)
                      return;
                  i = mt.createElement("div"),
                  n = mt.createElement("div"),
                  i.style.cssText = c,
                  t.appendChild(i).appendChild(n),
                  r = n.appendChild(mt.createElement("div")),
                  r.style.cssText = n.style.cssText = u,
                  r.style.marginRight = r.style.width = "0",
                  n.style.width = "1px",
                  a = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight),
                  t.removeChild(i)
              }
              return a
          }
      })
  }(),
  ot.swap = function(e, t, i, n) {
      var r, o, s = {};
      for (o in t)
          s[o] = e.style[o],
          e.style[o] = t[o];
      r = i.apply(e, n || []);
      for (o in t)
          e.style[o] = s[o];
      return r
  }
  ;
  var si = /alpha\([^)]*\)/i
    , ai = /opacity\s*=\s*([^)]*)/
    , li = /^(none|table(?!-c[ea]).+)/
    , ci = new RegExp("^(" + Pt + ")(.*)$","i")
    , ui = new RegExp("^([+-])=(" + Pt + ")","i")
    , di = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , pi = {
      letterSpacing: 0,
      fontWeight: 400
  }
    , fi = ["Webkit", "O", "Moz", "ms"];
  ot.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var i = ii(e, "opacity");
                      return "" === i ? "1" : i
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": nt.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, i, n) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r, o, s, a = ot.camelCase(t), l = e.style;
              if (t = ot.cssProps[a] || (ot.cssProps[a] = P(l, a)),
              s = ot.cssHooks[t] || ot.cssHooks[a],
              void 0 === i)
                  return s && "get"in s && void 0 !== (r = s.get(e, !1, n)) ? r : l[t];
              if (o = typeof i,
              "string" === o && (r = ui.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ot.css(e, t)),
              o = "number"),
              null != i && i === i && ("number" !== o || ot.cssNumber[a] || (i += "px"),
              nt.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
              !(s && "set"in s && void 0 === (i = s.set(e, i, n)))))
                  try {
                      l[t] = "",
                      l[t] = i
                  } catch (c) {}
          }
      },
      css: function(e, t, i, n) {
          var r, o, s, a = ot.camelCase(t);
          return t = ot.cssProps[a] || (ot.cssProps[a] = P(e.style, a)),
          s = ot.cssHooks[t] || ot.cssHooks[a],
          s && "get"in s && (o = s.get(e, !0, i)),
          void 0 === o && (o = ii(e, t, n)),
          "normal" === o && t in pi && (o = pi[t]),
          "" === i || i ? (r = parseFloat(o),
          i === !0 || ot.isNumeric(r) ? r || 0 : o) : o
      }
  }),
  ot.each(["height", "width"], function(e, t) {
      ot.cssHooks[t] = {
          get: function(e, i, n) {
              return i ? 0 === e.offsetWidth && li.test(ot.css(e, "display")) ? ot.swap(e, di, function() {
                  return O(e, t, n)
              }) : O(e, t, n) : void 0
          },
          set: function(e, i, n) {
              var r = n && ti(e);
              return A(e, i, n ? $(e, t, n, nt.boxSizing() && "border-box" === ot.css(e, "boxSizing", !1, r), r) : 0)
          }
      }
  }),
  nt.opacity || (ot.cssHooks.opacity = {
      get: function(e, t) {
          return ai.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
          var i = e.style
            , n = e.currentStyle
            , r = ot.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
            , o = n && n.filter || i.filter || "";
          i.zoom = 1,
          (t >= 1 || "" === t) && "" === ot.trim(o.replace(si, "")) && i.removeAttribute && (i.removeAttribute("filter"),
          "" === t || n && !n.filter) || (i.filter = si.test(o) ? o.replace(si, r) : o + " " + r)
      }
  }),
  ot.cssHooks.marginRight = C(nt.reliableMarginRight, function(e, t) {
      return t ? ot.swap(e, {
          display: "inline-block"
      }, ii, [e, "marginRight"]) : void 0
  }),
  ot.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      ot.cssHooks[e + t] = {
          expand: function(i) {
              for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                  r[e + Et[n] + t] = o[n] || o[n - 2] || o[0];
              return r
          }
      },
      ni.test(e) || (ot.cssHooks[e + t].set = A)
  }),
  ot.fn.extend({
      css: function(e, t) {
          return $t(this, function(e, t, i) {
              var n, r, o = {}, s = 0;
              if (ot.isArray(t)) {
                  for (n = ti(e),
                  r = t.length; r > s; s++)
                      o[t[s]] = ot.css(e, t[s], !1, n);
                  return o
              }
              return void 0 !== i ? ot.style(e, t, i) : ot.css(e, t)
          }, e, t, arguments.length > 1)
      },
      show: function() {
          return E(this, !0)
      },
      hide: function() {
          return E(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              At(this) ? ot(this).show() : ot(this).hide()
          })
      }
  }),
  ot.Tween = M,
  M.prototype = {
      constructor: M,
      init: function(e, t, i, n, r, o) {
          this.elem = e,
          this.prop = i,
          this.easing = r || "swing",
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = n,
          this.unit = o || (ot.cssNumber[i] ? "" : "px")
      },
      cur: function() {
          var e = M.propHooks[this.prop];
          return e && e.get ? e.get(this) : M.propHooks._default.get(this)
      },
      run: function(e) {
          var t, i = M.propHooks[this.prop];
          return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : M.propHooks._default.set(this),
          this
      }
  },
  M.prototype.init.prototype = M.prototype,
  M.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""),
              t && "auto" !== t ? t : 0) : e.elem[e.prop]
          },
          set: function(e) {
              ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  },
  M.propHooks.scrollTop = M.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  ot.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  },
  ot.fx = M.prototype.init,
  ot.fx.step = {};
  var hi, mi, gi = /^(?:toggle|show|hide)$/, vi = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$","i"), yi = /queueHooks$/, bi = [N], _i = {
      "*": [function(e, t) {
          var i = this.createTween(e, t)
            , n = i.cur()
            , r = vi.exec(t)
            , o = r && r[3] || (ot.cssNumber[e] ? "" : "px")
            , s = (ot.cssNumber[e] || "px" !== o && +n) && vi.exec(ot.css(i.elem, e))
            , a = 1
            , l = 20;
          if (s && s[3] !== o) {
              o = o || s[3],
              r = r || [],
              s = +n || 1;
              do
                  a = a || ".5",
                  s /= a,
                  ot.style(i.elem, e, s + o);
              while (a !== (a = i.cur() / n) && 1 !== a && --l)
          }
          return r && (s = i.start = +s || +n || 0,
          i.unit = o,
          i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
          i
      }
      ]
  };
  ot.Animation = ot.extend(I, {
      tweener: function(e, t) {
          ot.isFunction(e) ? (t = e,
          e = ["*"]) : e = e.split(" ");
          for (var i, n = 0, r = e.length; r > n; n++)
              i = e[n],
              _i[i] = _i[i] || [],
              _i[i].unshift(t)
      },
      prefilter: function(e, t) {
          t ? bi.unshift(e) : bi.push(e)
      }
  }),
  ot.speed = function(e, t, i) {
      var n = e && "object" == typeof e ? ot.extend({}, e) : {
          complete: i || !i && t || ot.isFunction(e) && e,
          duration: e,
          easing: i && t || t && !ot.isFunction(t) && t
      };
      return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default,
      (null == n.queue || n.queue === !0) && (n.queue = "fx"),
      n.old = n.complete,
      n.complete = function() {
          ot.isFunction(n.old) && n.old.call(this),
          n.queue && ot.dequeue(this, n.queue)
      }
      ,
      n
  }
  ,
  ot.fn.extend({
      fadeTo: function(e, t, i, n) {
          return this.filter(At).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, i, n)
      },
      animate: function(e, t, i, n) {
          var r = ot.isEmptyObject(e)
            , o = ot.speed(t, i, n)
            , s = function() {
              var t = I(this, ot.extend({}, e), o);
              (r || ot._data(this, "finish")) && t.stop(!0)
          };
          return s.finish = s,
          r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, i) {
          var n = function(e) {
              var t = e.stop;
              delete e.stop,
              t(i)
          };
          return "string" != typeof e && (i = t,
          t = e,
          e = void 0),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function() {
              var t = !0
                , r = null != e && e + "queueHooks"
                , o = ot.timers
                , s = ot._data(this);
              if (r)
                  s[r] && s[r].stop && n(s[r]);
              else
                  for (r in s)
                      s[r] && s[r].stop && yi.test(r) && n(s[r]);
              for (r = o.length; r--; )
                  o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i),
                  t = !1,
                  o.splice(r, 1));
              (t || !i) && ot.dequeue(this, e)
          })
      },
      finish: function(e) {
          return e !== !1 && (e = e || "fx"),
          this.each(function() {
              var t, i = ot._data(this), n = i[e + "queue"], r = i[e + "queueHooks"], o = ot.timers, s = n ? n.length : 0;
              for (i.finish = !0,
              ot.queue(this, e, []),
              r && r.stop && r.stop.call(this, !0),
              t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                  o.splice(t, 1));
              for (t = 0; s > t; t++)
                  n[t] && n[t].finish && n[t].finish.call(this);
              delete i.finish
          })
      }
  }),
  ot.each(["toggle", "show", "hide"], function(e, t) {
      var i = ot.fn[t];
      ot.fn[t] = function(e, n, r) {
          return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(j(t, !0), e, n, r)
      }
  }),
  ot.each({
      slideDown: j("show"),
      slideUp: j("hide"),
      slideToggle: j("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      ot.fn[e] = function(e, i, n) {
          return this.animate(t, e, i, n)
      }
  }),
  ot.timers = [],
  ot.fx.tick = function() {
      var e, t = ot.timers, i = 0;
      for (hi = ot.now(); i < t.length; i++)
          e = t[i],
          e() || t[i] !== e || t.splice(i--, 1);
      t.length || ot.fx.stop(),
      hi = void 0
  }
  ,
  ot.fx.timer = function(e) {
      ot.timers.push(e),
      e() ? ot.fx.start() : ot.timers.pop()
  }
  ,
  ot.fx.interval = 13,
  ot.fx.start = function() {
      mi || (mi = setInterval(ot.fx.tick, ot.fx.interval))
  }
  ,
  ot.fx.stop = function() {
      clearInterval(mi),
      mi = null
  }
  ,
  ot.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  ot.fn.delay = function(e, t) {
      return e = ot.fx ? ot.fx.speeds[e] || e : e,
      t = t || "fx",
      this.queue(t, function(t, i) {
          var n = setTimeout(t, e);
          i.stop = function() {
              clearTimeout(n)
          }
      })
  }
  ,
  function() {
      var e, t, i, n, r = mt.createElement("div");
      r.setAttribute("className", "t"),
      r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
      e = r.getElementsByTagName("a")[0],
      i = mt.createElement("select"),
      n = i.appendChild(mt.createElement("option")),
      t = r.getElementsByTagName("input")[0],
      e.style.cssText = "top:1px",
      nt.getSetAttribute = "t" !== r.className,
      nt.style = /top/.test(e.getAttribute("style")),
      nt.hrefNormalized = "/a" === e.getAttribute("href"),
      nt.checkOn = !!t.value,
      nt.optSelected = n.selected,
      nt.enctype = !!mt.createElement("form").enctype,
      i.disabled = !0,
      nt.optDisabled = !n.disabled,
      t = mt.createElement("input"),
      t.setAttribute("value", ""),
      nt.input = "" === t.getAttribute("value"),
      t.value = "t",
      t.setAttribute("type", "radio"),
      nt.radioValue = "t" === t.value,
      e = t = i = n = r = null
  }();
  var xi = /\r/g;
  ot.fn.extend({
      val: function(e) {
          var t, i, n, r = this[0];
          {
              if (arguments.length)
                  return n = ot.isFunction(e),
                  this.each(function(i) {
                      var r;
                      1 === this.nodeType && (r = n ? e.call(this, i, ot(this).val()) : e,
                      null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(e) {
                          return null == e ? "" : e + ""
                      })),
                      t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()],
                      t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                  });
              if (r)
                  return t = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()],
                  t && "get"in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value,
                  "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)
          }
      }
  }),
  ot.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = ot.find.attr(e, "value");
                  return null != t ? t : ot.text(e)
              }
          },
          select: {
              get: function(e) {
                  for (var t, i, n = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                      if (i = n[l],
                      !(!i.selected && l !== r || (nt.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ot.nodeName(i.parentNode, "optgroup"))) {
                          if (t = ot(i).val(),
                          o)
                              return t;
                          s.push(t)
                      }
                  return s
              },
              set: function(e, t) {
                  for (var i, n, r = e.options, o = ot.makeArray(t), s = r.length; s--; )
                      if (n = r[s],
                      ot.inArray(ot.valHooks.option.get(n), o) >= 0)
                          try {
                              n.selected = i = !0
                          } catch (a) {
                              n.scrollHeight
                          }
                      else
                          n.selected = !1;
                  return i || (e.selectedIndex = -1),
                  r
              }
          }
      }
  }),
  ot.each(["radio", "checkbox"], function() {
      ot.valHooks[this] = {
          set: function(e, t) {
              return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
          }
      },
      nt.checkOn || (ot.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  });
  var wi, Ti, ki = ot.expr.attrHandle, Si = /^(?:checked|selected)$/i, Ci = nt.getSetAttribute, Pi = nt.input;
  ot.fn.extend({
      attr: function(e, t) {
          return $t(this, ot.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              ot.removeAttr(this, e)
          })
      }
  }),
  ot.extend({
      attr: function(e, t, i) {
          var n, r, o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o)
              return typeof e.getAttribute === kt ? ot.prop(e, t, i) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(),
              n = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? Ti : wi)),
              void 0 === i ? n && "get"in n && null !== (r = n.get(e, t)) ? r : (r = ot.find.attr(e, t),
              null == r ? void 0 : r) : null !== i ? n && "set"in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""),
              i) : (ot.removeAttr(e, t),
              void 0))
      },
      removeAttr: function(e, t) {
          var i, n, r = 0, o = t && t.match(_t);
          if (o && 1 === e.nodeType)
              for (; i = o[r++]; )
                  n = ot.propFix[i] || i,
                  ot.expr.match.bool.test(i) ? Pi && Ci || !Si.test(i) ? e[n] = !1 : e[ot.camelCase("default-" + i)] = e[n] = !1 : ot.attr(e, i, ""),
                  e.removeAttribute(Ci ? i : n)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!nt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                      var i = e.value;
                      return e.setAttribute("type", t),
                      i && (e.value = i),
                      t
                  }
              }
          }
      }
  }),
  Ti = {
      set: function(e, t, i) {
          return t === !1 ? ot.removeAttr(e, i) : Pi && Ci || !Si.test(i) ? e.setAttribute(!Ci && ot.propFix[i] || i, i) : e[ot.camelCase("default-" + i)] = e[i] = !0,
          i
      }
  },
  ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var i = ki[t] || ot.find.attr;
      ki[t] = Pi && Ci || !Si.test(t) ? function(e, t, n) {
          var r, o;
          return n || (o = ki[t],
          ki[t] = r,
          r = null != i(e, t, n) ? t.toLowerCase() : null,
          ki[t] = o),
          r
      }
      : function(e, t, i) {
          return i ? void 0 : e[ot.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
  }),
  Pi && Ci || (ot.attrHooks.value = {
      set: function(e, t, i) {
          return ot.nodeName(e, "input") ? (e.defaultValue = t,
          void 0) : wi && wi.set(e, t, i)
      }
  }),
  Ci || (wi = {
      set: function(e, t, i) {
          var n = e.getAttributeNode(i);
          return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)),
          n.value = t += "",
          "value" === i || t === e.getAttribute(i) ? t : void 0
      }
  },
  ki.id = ki.name = ki.coords = function(e, t, i) {
      var n;
      return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
  }
  ,
  ot.valHooks.button = {
      get: function(e, t) {
          var i = e.getAttributeNode(t);
          return i && i.specified ? i.value : void 0
      },
      set: wi.set
  },
  ot.attrHooks.contenteditable = {
      set: function(e, t, i) {
          wi.set(e, "" === t ? !1 : t, i)
      }
  },
  ot.each(["width", "height"], function(e, t) {
      ot.attrHooks[t] = {
          set: function(e, i) {
              return "" === i ? (e.setAttribute(t, "auto"),
              i) : void 0
          }
      }
  })),
  nt.style || (ot.attrHooks.style = {
      get: function(e) {
          return e.style.cssText || void 0
      },
      set: function(e, t) {
          return e.style.cssText = t + ""
      }
  });
  var Ei = /^(?:input|select|textarea|button|object)$/i
    , Ai = /^(?:a|area)$/i;
  ot.fn.extend({
      prop: function(e, t) {
          return $t(this, ot.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return e = ot.propFix[e] || e,
          this.each(function() {
              try {
                  this[e] = void 0,
                  delete this[e]
              } catch (t) {}
          })
      }
  }),
  ot.extend({
      propFix: {
          "for": "htmlFor",
          "class": "className"
      },
      prop: function(e, t, i) {
          var n, r, o, s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s)
              return o = 1 !== s || !ot.isXMLDoc(e),
              o && (t = ot.propFix[t] || t,
              r = ot.propHooks[t]),
              void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get"in r && null !== (n = r.get(e, t)) ? n : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = ot.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : Ei.test(e.nodeName) || Ai.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      }
  }),
  nt.hrefNormalized || ot.each(["href", "src"], function(e, t) {
      ot.propHooks[t] = {
          get: function(e) {
              return e.getAttribute(t, 4)
          }
      }
  }),
  nt.optSelected || (ot.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex),
          null
      }
  }),
  ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      ot.propFix[this.toLowerCase()] = this
  }),
  nt.enctype || (ot.propFix.enctype = "encoding");
  var $i = /[\t\r\n\f]/g;
  ot.fn.extend({
      addClass: function(e) {
          var t, i, n, r, o, s, a = 0, l = this.length, c = "string" == typeof e && e;
          if (ot.isFunction(e))
              return this.each(function(t) {
                  ot(this).addClass(e.call(this, t, this.className))
              });
          if (c)
              for (t = (e || "").match(_t) || []; l > a; a++)
                  if (i = this[a],
                  n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace($i, " ") : " ")) {
                      for (o = 0; r = t[o++]; )
                          n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                      s = ot.trim(n),
                      i.className !== s && (i.className = s)
                  }
          return this
      },
      removeClass: function(e) {
          var t, i, n, r, o, s, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
          if (ot.isFunction(e))
              return this.each(function(t) {
                  ot(this).removeClass(e.call(this, t, this.className))
              });
          if (c)
              for (t = (e || "").match(_t) || []; l > a; a++)
                  if (i = this[a],
                  n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace($i, " ") : "")) {
                      for (o = 0; r = t[o++]; )
                          for (; n.indexOf(" " + r + " ") >= 0; )
                              n = n.replace(" " + r + " ", " ");
                      s = e ? ot.trim(n) : "",
                      i.className !== s && (i.className = s)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var i = typeof e;
          return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ot.isFunction(e) ? this.each(function(i) {
              ot(this).toggleClass(e.call(this, i, this.className, t), t)
          }) : this.each(function() {
              if ("string" === i)
                  for (var t, n = 0, r = ot(this), o = e.match(_t) || []; t = o[n++]; )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                  (i === kt || "boolean" === i) && (this.className && ot._data(this, "__className__", this.className),
                  this.className = this.className || e === !1 ? "" : ot._data(this, "__className__") || "")
          })
      },
      hasClass: function(e) {
          for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
              if (1 === this[i].nodeType && (" " + this[i].className + " ").replace($i, " ").indexOf(t) >= 0)
                  return !0;
          return !1
      }
  }),
  ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      ot.fn[t] = function(e, i) {
          return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
      }
  }),
  ot.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, i) {
          return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {
          return this.on(t, e, i, n)
      },
      undelegate: function(e, t, i) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
      }
  });
  var Oi = ot.now()
    , Mi = /\?/
    , Di = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  ot.parseJSON = function(t) {
      if (e.JSON && e.JSON.parse)
          return e.JSON.parse(t + "");
      var i, n = null, r = ot.trim(t + "");
      return r && !ot.trim(r.replace(Di, function(e, t, r, o) {
          return i && t && (n = 0),
          0 === n ? e : (i = r || t,
          n += !o - !r,
          "")
      })) ? Function("return " + r)() : ot.error("Invalid JSON: " + t)
  }
  ,
  ot.parseXML = function(t) {
      var i, n;
      if (!t || "string" != typeof t)
          return null;
      try {
          e.DOMParser ? (n = new DOMParser,
          i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
          i.async = "false",
          i.loadXML(t))
      } catch (r) {
          i = void 0
      }
      return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + t),
      i
  }
  ;
  var ji, zi, Ni = /#.*$/, Ri = /([?&])_=[^&]*/, Ii = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Li = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fi = /^(?:GET|HEAD)$/, Hi = /^\/\//, Bi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qi = {}, Wi = {}, Xi = "*/".concat("*");
  try {
      zi = location.href
  } catch (Ui) {
      zi = mt.createElement("a"),
      zi.href = "",
      zi = zi.href
  }
  ji = Bi.exec(zi.toLowerCase()) || [],
  ot.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: zi,
          type: "GET",
          isLocal: Li.test(ji[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Xi,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": ot.parseJSON,
              "text xml": ot.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? H(H(e, ot.ajaxSettings), t) : H(ot.ajaxSettings, e)
      },
      ajaxPrefilter: L(qi),
      ajaxTransport: L(Wi),
      ajax: function(e, t) {
          function i(e, t, i, n) {
              var r, u, v, y, _, w = t;
              2 !== b && (b = 2,
              a && clearTimeout(a),
              c = void 0,
              s = n || "",
              x.readyState = e > 0 ? 4 : 0,
              r = e >= 200 && 300 > e || 304 === e,
              i && (y = B(d, x, i)),
              y = q(d, y, x, r),
              r ? (d.ifModified && (_ = x.getResponseHeader("Last-Modified"),
              _ && (ot.lastModified[o] = _),
              _ = x.getResponseHeader("etag"),
              _ && (ot.etag[o] = _)),
              204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state,
              u = y.data,
              v = y.error,
              r = !v)) : (v = w,
              (e || !w) && (w = "error",
              0 > e && (e = 0))),
              x.status = e,
              x.statusText = (t || w) + "",
              r ? h.resolveWith(p, [u, w, x]) : h.rejectWith(p, [x, w, v]),
              x.statusCode(g),
              g = void 0,
              l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? u : v]),
              m.fireWith(p, [x, w]),
              l && (f.trigger("ajaxComplete", [x, d]),
              --ot.active || ot.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (t = e,
          e = void 0),
          t = t || {};
          var n, r, o, s, a, l, c, u, d = ot.ajaxSetup({}, t), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event, h = ot.Deferred(), m = ot.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, _ = "canceled", x = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (2 === b) {
                      if (!u)
                          for (u = {}; t = Ii.exec(s); )
                              u[t[1].toLowerCase()] = t[2];
                      t = u[e.toLowerCase()]
                  }
                  return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                  return 2 === b ? s : null
              },
              setRequestHeader: function(e, t) {
                  var i = e.toLowerCase();
                  return b || (e = y[i] = y[i] || e,
                  v[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return b || (d.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (2 > b)
                          for (t in e)
                              g[t] = [g[t], e[t]];
                      else
                          x.always(e[x.status]);
                  return this
              },
              abort: function(e) {
                  var t = e || _;
                  return c && c.abort(t),
                  i(0, t),
                  this
              }
          };
          if (h.promise(x).complete = m.add,
          x.success = x.done,
          x.error = x.fail,
          d.url = ((e || d.url || zi) + "").replace(Ni, "").replace(Hi, ji[1] + "//"),
          d.type = t.method || t.type || d.method || d.type,
          d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(_t) || [""],
          null == d.crossDomain && (n = Bi.exec(d.url.toLowerCase()),
          d.crossDomain = !(!n || n[1] === ji[1] && n[2] === ji[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ji[3] || ("http:" === ji[1] ? "80" : "443")))),
          d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)),
          F(qi, d, t, x),
          2 === b)
              return x;
          l = d.global,
          l && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
          d.type = d.type.toUpperCase(),
          d.hasContent = !Fi.test(d.type),
          o = d.url,
          d.hasContent || (d.data && (o = d.url += (Mi.test(o) ? "&" : "?") + d.data,
          delete d.data),
          d.cache === !1 && (d.url = Ri.test(o) ? o.replace(Ri, "$1_=" + Oi++) : o + (Mi.test(o) ? "&" : "?") + "_=" + Oi++)),
          d.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
          ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])),
          (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType),
          x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xi + "; q=0.01" : "") : d.accepts["*"]);
          for (r in d.headers)
              x.setRequestHeader(r, d.headers[r]);
          if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b))
              return x.abort();
          _ = "abort";
          for (r in {
              success: 1,
              error: 1,
              complete: 1
          })
              x[r](d[r]);
          if (c = F(Wi, d, t, x)) {
              x.readyState = 1,
              l && f.trigger("ajaxSend", [x, d]),
              d.async && d.timeout > 0 && (a = setTimeout(function() {
                  x.abort("timeout")
              }, d.timeout));
              try {
                  b = 1,
                  c.send(v, i)
              } catch (w) {
                  if (!(2 > b))
                      throw w;
                  i(-1, w)
              }
          } else
              i(-1, "No Transport");
          return x
      },
      getJSON: function(e, t, i) {
          return ot.get(e, t, i, "json")
      },
      getScript: function(e, t) {
          return ot.get(e, void 0, t, "script")
      }
  }),
  ot.each(["get", "post"], function(e, t) {
      ot[t] = function(e, i, n, r) {
          return ot.isFunction(i) && (r = r || n,
          n = i,
          i = void 0),
          ot.ajax({
              url: e,
              type: t,
              dataType: r,
              data: i,
              success: n
          })
      }
  }),
  ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      ot.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  ot._evalUrl = function(e) {
      return ot.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
      })
  }
  ,
  ot.fn.extend({
      wrapAll: function(e) {
          if (ot.isFunction(e))
              return this.each(function(t) {
                  ot(this).wrapAll(e.call(this, t))
              });
          if (this[0]) {
              var t = ot(e, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]),
              t.map(function() {
                  for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                      e = e.firstChild;
                  return e
              }).append(this)
          }
          return this
      },
      wrapInner: function(e) {
          return ot.isFunction(e) ? this.each(function(t) {
              ot(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = ot(this)
                , i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = ot.isFunction(e);
          return this.each(function(i) {
              ot(this).wrapAll(t ? e.call(this, i) : e)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
          }).end()
      }
  }),
  ot.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ot.css(e, "display"))
  }
  ,
  ot.expr.filters.visible = function(e) {
      return !ot.expr.filters.hidden(e)
  }
  ;
  var Yi = /%20/g
    , Gi = /\[\]$/
    , Vi = /\r?\n/g
    , Zi = /^(?:submit|button|image|reset|file)$/i
    , Qi = /^(?:input|select|textarea|keygen)/i;
  ot.param = function(e, t) {
      var i, n = [], r = function(e, t) {
          t = ot.isFunction(t) ? t() : null == t ? "" : t,
          n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional),
      ot.isArray(e) || e.jquery && !ot.isPlainObject(e))
          ot.each(e, function() {
              r(this.name, this.value)
          });
      else
          for (i in e)
              W(i, e[i], t, r);
      return n.join("&").replace(Yi, "+")
  }
  ,
  ot.fn.extend({
      serialize: function() {
          return ot.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = ot.prop(this, "elements");
              return e ? ot.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !ot(this).is(":disabled") && Qi.test(this.nodeName) && !Zi.test(e) && (this.checked || !Ot.test(e))
          }).map(function(e, t) {
              var i = ot(this).val();
              return null == i ? null : ot.isArray(i) ? ot.map(i, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Vi, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: i.replace(Vi, "\r\n")
              }
          }).get()
      }
  }),
  ot.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
  }
  : X;
  var Ki = 0
    , Ji = {}
    , en = ot.ajaxSettings.xhr();
  e.ActiveXObject && ot(e).on("unload", function() {
      for (var e in Ji)
          Ji[e](void 0, !0)
  }),
  nt.cors = !!en && "withCredentials"in en,
  en = nt.ajax = !!en,
  en && ot.ajaxTransport(function(e) {
      if (!e.crossDomain || nt.cors) {
          var t;
          return {
              send: function(i, n) {
                  var r, o = e.xhr(), s = ++Ki;
                  if (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                      for (r in e.xhrFields)
                          o[r] = e.xhrFields[r];
                  e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                  e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                  for (r in i)
                      void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
                  o.send(e.hasContent && e.data || null),
                  t = function(i, r) {
                      var a, l, c;
                      if (t && (r || 4 === o.readyState))
                          if (delete Ji[s],
                          t = void 0,
                          o.onreadystatechange = ot.noop,
                          r)
                              4 !== o.readyState && o.abort();
                          else {
                              c = {},
                              a = o.status,
                              "string" == typeof o.responseText && (c.text = o.responseText);
                              try {
                                  l = o.statusText
                              } catch (u) {
                                  l = ""
                              }
                              a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                          }
                      c && n(a, l, c, o.getAllResponseHeaders())
                  }
                  ,
                  e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Ji[s] = t : t()
              },
              abort: function() {
                  t && t(void 0, !0)
              }
          }
      }
  }),
  ot.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return ot.globalEval(e),
              e
          }
      }
  }),
  ot.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET",
      e.global = !1)
  }),
  ot.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, i = mt.head || ot("head")[0] || mt.documentElement;
          return {
              send: function(n, r) {
                  t = mt.createElement("script"),
                  t.async = !0,
                  e.scriptCharset && (t.charset = e.scriptCharset),
                  t.src = e.url,
                  t.onload = t.onreadystatechange = function(e, i) {
                      (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                      t.parentNode && t.parentNode.removeChild(t),
                      t = null,
                      i || r(200, "success"))
                  }
                  ,
                  i.insertBefore(t, i.firstChild)
              },
              abort: function() {
                  t && t.onload(void 0, !0)
              }
          }
      }
  });
  var tn = []
    , nn = /(=)\?(?=&|$)|\?\?/;
  ot.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = tn.pop() || ot.expando + "_" + Oi++;
          return this[e] = !0,
          e
      }
  }),
  ot.ajaxPrefilter("json jsonp", function(t, i, n) {
      var r, o, s, a = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
      return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
      a ? t[a] = t[a].replace(nn, "$1" + r) : t.jsonp !== !1 && (t.url += (Mi.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
      t.converters["script json"] = function() {
          return s || ot.error(r + " was not called"),
          s[0]
      }
      ,
      t.dataTypes[0] = "json",
      o = e[r],
      e[r] = function() {
          s = arguments
      }
      ,
      n.always(function() {
          e[r] = o,
          t[r] && (t.jsonpCallback = i.jsonpCallback,
          tn.push(r)),
          s && ot.isFunction(o) && o(s[0]),
          s = o = void 0
      }),
      "script") : void 0
  }),
  ot.parseHTML = function(e, t, i) {
      if (!e || "string" != typeof e)
          return null;
      "boolean" == typeof t && (i = t,
      t = !1),
      t = t || mt;
      var n = pt.exec(e)
        , r = !i && [];
      return n ? [t.createElement(n[1])] : (n = ot.buildFragment([e], t, r),
      r && r.length && ot(r).remove(),
      ot.merge([], n.childNodes))
  }
  ;
  var rn = ot.fn.load;
  ot.fn.load = function(e, t, i) {
      if ("string" != typeof e && rn)
          return rn.apply(this, arguments);
      var n, r, o, s = this, a = e.indexOf(" ");
      return a >= 0 && (n = e.slice(a, e.length),
      e = e.slice(0, a)),
      ot.isFunction(t) ? (i = t,
      t = void 0) : t && "object" == typeof t && (o = "POST"),
      s.length > 0 && ot.ajax({
          url: e,
          type: o,
          dataType: "html",
          data: t
      }).done(function(e) {
          r = arguments,
          s.html(n ? ot("<div>").append(ot.parseHTML(e)).find(n) : e)
      }).complete(i && function(e, t) {
          s.each(i, r || [e.responseText, t, e])
      }
      ),
      this
  }
  ,
  ot.expr.filters.animated = function(e) {
      return ot.grep(ot.timers, function(t) {
          return e === t.elem
      }).length
  }
  ;
  var on = e.document.documentElement;
  ot.offset = {
      setOffset: function(e, t, i) {
          var n, r, o, s, a, l, c, u = ot.css(e, "position"), d = ot(e), p = {};
          "static" === u && (e.style.position = "relative"),
          a = d.offset(),
          o = ot.css(e, "top"),
          l = ot.css(e, "left"),
          c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [o, l]) > -1,
          c ? (n = d.position(),
          s = n.top,
          r = n.left) : (s = parseFloat(o) || 0,
          r = parseFloat(l) || 0),
          ot.isFunction(t) && (t = t.call(e, i, a)),
          null != t.top && (p.top = t.top - a.top + s),
          null != t.left && (p.left = t.left - a.left + r),
          "using"in t ? t.using.call(e, p) : d.css(p)
      }
  },
  ot.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return void 0 === e ? this : this.each(function(t) {
                  ot.offset.setOffset(this, e, t)
              });
          var t, i, n = {
              top: 0,
              left: 0
          }, r = this[0], o = r && r.ownerDocument;
          if (o)
              return t = o.documentElement,
              ot.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (n = r.getBoundingClientRect()),
              i = Y(o),
              {
                  top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
              }) : n
      },
      position: function() {
          if (this[0]) {
              var e, t, i = {
                  top: 0,
                  left: 0
              }, n = this[0];
              return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
              t = this.offset(),
              ot.nodeName(e[0], "html") || (i = e.offset()),
              i.top += ot.css(e[0], "borderTopWidth", !0),
              i.left += ot.css(e[0], "borderLeftWidth", !0)),
              {
                  top: t.top - i.top - ot.css(n, "marginTop", !0),
                  left: t.left - i.left - ot.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent || on; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position"); )
                  e = e.offsetParent;
              return e || on
          })
      }
  }),
  ot.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var i = /Y/.test(t);
      ot.fn[e] = function(n) {
          return $t(this, function(e, n, r) {
              var o = Y(e);
              return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : (o ? o.scrollTo(i ? ot(o).scrollLeft() : r, i ? r : ot(o).scrollTop()) : e[n] = r,
              void 0)
          }, e, n, arguments.length, null)
      }
  }),
  ot.each(["top", "left"], function(e, t) {
      ot.cssHooks[t] = C(nt.pixelPosition, function(e, i) {
          return i ? (i = ii(e, t),
          ri.test(i) ? ot(e).position()[t] + "px" : i) : void 0
      })
  }),
  ot.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      ot.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(i, n) {
          ot.fn[n] = function(n, r) {
              var o = arguments.length && (i || "boolean" != typeof n)
                , s = i || (n === !0 || r === !0 ? "margin" : "border");
              return $t(this, function(t, i, n) {
                  var r;
                  return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                  Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? ot.css(t, i, s) : ot.style(t, i, n, s)
              }, t, o ? n : void 0, o, null)
          }
      })
  }),
  ot.fn.size = function() {
      return this.length
  }
  ,
  ot.fn.andSelf = ot.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return ot
  });
  var sn = e.jQuery
    , an = e.$;
  return ot.noConflict = function(t) {
      return e.$ === ot && (e.$ = an),
      t && e.jQuery === ot && (e.jQuery = sn),
      ot
  }
  ,
  typeof t === kt && (e.jQuery = e.$ = ot),
  ot
}),
function(e, t) {
  e.rails !== t && e.error("jquery-ujs has already been loaded!");
  var i, n = e(document);
  e.rails = i = {
      linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
      buttonClickSelector: "button[data-remote]",
      inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
      formSubmitSelector: "form",
      formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
      disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
      enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
      requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
      fileInputSelector: "input[type=file]",
      linkDisableSelector: "a[data-disable-with]",
      CSRFProtection: function(t) {
          var i = e('meta[name="csrf-token"]').attr("content");
          i && t.setRequestHeader("X-CSRF-Token", i)
      },
      refreshCSRFTokens: function() {
          var t = e("meta[name=csrf-token]").attr("content")
            , i = e("meta[name=csrf-param]").attr("content");
          e('form input[name="' + i + '"]').val(t)
      },
      fire: function(t, i, n) {
          var r = e.Event(i);
          return t.trigger(r, n),
          r.result !== !1
      },
      confirm: function(e) {
          return confirm(e)
      },
      ajax: function(t) {
          return e.ajax(t)
      },
      href: function(e) {
          return e.attr("href")
      },
      handleRemote: function(n) {
          var r, o, s, a, l, c, u, d;
          if (i.fire(n, "ajax:before")) {
              if (a = n.data("cross-domain"),
              l = a === t ? null : a,
              c = n.data("with-credentials") || null,
              u = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType,
              n.is("form")) {
                  r = n.attr("method"),
                  o = n.attr("action"),
                  s = n.serializeArray();
                  var p = n.data("ujs:submit-button");
                  p && (s.push(p),
                  n.data("ujs:submit-button", null))
              } else
                  n.is(i.inputChangeSelector) ? (r = n.data("method"),
                  o = n.data("url"),
                  s = n.serialize(),
                  n.data("params") && (s = s + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get",
                  o = n.data("url"),
                  s = n.serialize(),
                  n.data("params") && (s = s + "&" + n.data("params"))) : (r = n.data("method"),
                  o = i.href(n),
                  s = n.data("params") || null);
              d = {
                  type: r || "GET",
                  data: s,
                  dataType: u,
                  beforeSend: function(e, r) {
                      return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                      i.fire(n, "ajax:beforeSend", [e, r])
                  },
                  success: function(e, t, i) {
                      n.trigger("ajax:success", [e, t, i])
                  },
                  complete: function(e, t) {
                      n.trigger("ajax:complete", [e, t])
                  },
                  error: function(e, t, i) {
                      n.trigger("ajax:error", [e, t, i])
                  },
                  crossDomain: l
              },
              c && (d.xhrFields = {
                  withCredentials: c
              }),
              o && (d.url = o);
              var f = i.ajax(d);
              return n.trigger("ajax:send", f),
              f
          }
          return !1
      },
      handleMethod: function(n) {
          var r = i.href(n)
            , o = n.data("method")
            , s = n.attr("target")
            , a = e("meta[name=csrf-token]").attr("content")
            , l = e("meta[name=csrf-param]").attr("content")
            , c = e('<form method="post" action="' + r + '"></form>')
            , u = '<input name="_method" value="' + o + '" type="hidden" />';
          l !== t && a !== t && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
          s && c.attr("target", s),
          c.hide().append(u).appendTo("body"),
          c.submit()
      },
      disableFormElements: function(t) {
          t.find(i.disableSelector).each(function() {
              var t = e(this)
                , i = t.is("button") ? "html" : "val";
              t.data("ujs:enable-with", t[i]()),
              t[i](t.data("disable-with")),
              t.prop("disabled", !0)
          })
      },
      enableFormElements: function(t) {
          t.find(i.enableSelector).each(function() {
              var t = e(this)
                , i = t.is("button") ? "html" : "val";
              t.data("ujs:enable-with") && t[i](t.data("ujs:enable-with")),
              t.prop("disabled", !1)
          })
      },
      allowAction: function(e) {
          var t, n = e.data("confirm"), r = !1;
          return n ? (i.fire(e, "confirm") && (r = i.confirm(n),
          t = i.fire(e, "confirm:complete", [r])),
          r && t) : !0
      },
      blankInputs: function(t, i, n) {
          var r, o, s = e(), a = i || "input,textarea", l = t.find(a);
          return l.each(function() {
              if (r = e(this),
              o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(),
              !o == !n) {
                  if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)
                      return !0;
                  s = s.add(r)
              }
          }),
          s.length ? s : !1
      },
      nonBlankInputs: function(e, t) {
          return i.blankInputs(e, t, !0)
      },
      stopEverything: function(t) {
          return e(t.target).trigger("ujs:everythingStopped"),
          t.stopImmediatePropagation(),
          !1
      },
      disableElement: function(e) {
          e.data("ujs:enable-with", e.html()),
          e.html(e.data("disable-with")),
          e.bind("click.railsDisable", function(e) {
              return i.stopEverything(e)
          })
      },
      enableElement: function(e) {
          e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
          e.removeData("ujs:enable-with")),
          e.unbind("click.railsDisable")
      }
  },
  i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
      e.crossDomain || i.CSRFProtection(n)
  }),
  n.delegate(i.linkDisableSelector, "ajax:complete", function() {
      i.enableElement(e(this))
  }),
  n.delegate(i.linkClickSelector, "click.rails", function(n) {
      var r = e(this)
        , o = r.data("method")
        , s = r.data("params")
        , a = n.metaKey || n.ctrlKey;
      if (!i.allowAction(r))
          return i.stopEverything(n);
      if (!a && r.is(i.linkDisableSelector) && i.disableElement(r),
      r.data("remote") !== t) {
          if (a && (!o || "GET" === o) && !s)
              return !0;
          var l = i.handleRemote(r);
          return l === !1 ? i.enableElement(r) : l.error(function() {
              i.enableElement(r)
          }),
          !1
      }
      return r.data("method") ? (i.handleMethod(r),
      !1) : void 0
  }),
  n.delegate(i.buttonClickSelector, "click.rails", function(t) {
      var n = e(this);
      return i.allowAction(n) ? (i.handleRemote(n),
      !1) : i.stopEverything(t)
  }),
  n.delegate(i.inputChangeSelector, "change.rails", function(t) {
      var n = e(this);
      return i.allowAction(n) ? (i.handleRemote(n),
      !1) : i.stopEverything(t)
  }),
  n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
      var r = e(this)
        , o = r.data("remote") !== t
        , s = i.blankInputs(r, i.requiredInputSelector)
        , a = i.nonBlankInputs(r, i.fileInputSelector);
      if (!i.allowAction(r))
          return i.stopEverything(n);
      if (s && r.attr("novalidate") == t && i.fire(r, "ajax:aborted:required", [s]))
          return i.stopEverything(n);
      if (o) {
          if (a) {
              setTimeout(function() {
                  i.disableFormElements(r)
              }, 13);
              var l = i.fire(r, "ajax:aborted:file", [a]);
              return l || setTimeout(function() {
                  i.enableFormElements(r)
              }, 13),
              l
          }
          return i.handleRemote(r),
          !1
      }
      setTimeout(function() {
          i.disableFormElements(r)
      }, 13)
  }),
  n.delegate(i.formInputClickSelector, "click.rails", function(t) {
      var n = e(this);
      if (!i.allowAction(n))
          return i.stopEverything(t);
      var r = n.attr("name")
        , o = r ? {
          name: r,
          value: n.val()
      } : null;
      n.closest("form").data("ujs:submit-button", o)
  }),
  n.delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
      this == t.target && i.disableFormElements(e(this))
  }),
  n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(t) {
      this == t.target && i.enableFormElements(e(this))
  }),
  e(function() {
      i.refreshCSRFTokens()
  }))
}(jQuery),
/* ========================================================================
* Bootstrap: affix.js v3.1.1
* http://getbootstrap.com/javascript/#affix
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(i, n) {
      this.options = e.extend({}, t.DEFAULTS, n),
      this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
      this.$element = e(i),
      this.affixed = this.unpin = this.pinnedOffset = null,
      this.checkPosition()
  };
  t.RESET = "affix affix-top affix-bottom",
  t.DEFAULTS = {
      offset: 0
  },
  t.prototype.getPinnedOffset = function() {
      if (this.pinnedOffset)
          return this.pinnedOffset;
      this.$element.removeClass(t.RESET).addClass("affix");
      var e = this.$window.scrollTop()
        , i = this.$element.offset();
      return this.pinnedOffset = i.top - e
  }
  ,
  t.prototype.checkPositionWithEventLoop = function() {
      setTimeout(e.proxy(this.checkPosition, this), 1)
  }
  ,
  t.prototype.checkPosition = function() {
      if (this.$element.is(":visible")) {
          var i = e(document).height()
            , n = this.$window.scrollTop()
            , r = this.$element.offset()
            , o = this.options.offset
            , s = o.top
            , a = o.bottom;
          "top" == this.affixed && (r.top += n),
          "object" != typeof o && (a = s = o),
          "function" == typeof s && (s = o.top(this.$element)),
          "function" == typeof a && (a = o.bottom(this.$element));
          var l = null != this.unpin && n + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= i - a ? "bottom" : null != s && s >= n ? "top" : !1;
          if (this.affixed !== l) {
              this.unpin && this.$element.css("top", "");
              var c = "affix" + (l ? "-" + l : "")
                , u = e.Event(c + ".bs.affix");
              this.$element.trigger(u),
              u.isDefaultPrevented() || (this.affixed = l,
              this.unpin = "bottom" == l ? this.getPinnedOffset() : null,
              this.$element.removeClass(t.RESET).addClass(c).trigger(e.Event(c.replace("affix", "affixed"))),
              "bottom" == l && this.$element.offset({
                  top: i - a - this.$element.height()
              }))
          }
      }
  }
  ;
  var i = e.fn.affix;
  e.fn.affix = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.affix")
            , o = "object" == typeof i && i;
          r || n.data("bs.affix", r = new t(this,o)),
          "string" == typeof i && r[i]()
      })
  }
  ,
  e.fn.affix.Constructor = t,
  e.fn.affix.noConflict = function() {
      return e.fn.affix = i,
      this
  }
  ,
  e(window).on("load", function() {
      e('[data-spy="affix"]').each(function() {
          var t = e(this)
            , i = t.data();
          i.offset = i.offset || {},
          i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          i.offsetTop && (i.offset.top = i.offsetTop),
          t.affix(i)
      })
  })
}(jQuery),
/* ========================================================================
* Bootstrap: alert.js v3.1.1
* http://getbootstrap.com/javascript/#alerts
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = '[data-dismiss="alert"]'
    , i = function(i) {
      e(i).on("click", t, this.close)
  };
  i.prototype.close = function(t) {
      function i() {
          o.trigger("closed.bs.alert").remove()
      }
      var n = e(this)
        , r = n.attr("data-target");
      r || (r = n.attr("href"),
      r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
      var o = e(r);
      t && t.preventDefault(),
      o.length || (o = n.hasClass("alert") ? n : n.parent()),
      o.trigger(t = e.Event("close.bs.alert")),
      t.isDefaultPrevented() || (o.removeClass("in"),
      e.support.transition && o.hasClass("fade") ? o.one(e.support.transition.end, i).emulateTransitionEnd(150) : i())
  }
  ;
  var n = e.fn.alert;
  e.fn.alert = function(t) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.alert");
          r || n.data("bs.alert", r = new i(this)),
          "string" == typeof t && r[t].call(n)
      })
  }
  ,
  e.fn.alert.Constructor = i,
  e.fn.alert.noConflict = function() {
      return e.fn.alert = n,
      this
  }
  ,
  e(document).on("click.bs.alert.data-api", t, i.prototype.close)
}(jQuery),
/* ========================================================================
* Bootstrap: button.js v3.1.1
* http://getbootstrap.com/javascript/#buttons
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(i, n) {
      this.$element = e(i),
      this.options = e.extend({}, t.DEFAULTS, n),
      this.isLoading = !1
  };
  t.DEFAULTS = {
      loadingText: "loading..."
  },
  t.prototype.setState = function(t) {
      var i = "disabled"
        , n = this.$element
        , r = n.is("input") ? "val" : "html"
        , o = n.data();
      t += "Text",
      o.resetText || n.data("resetText", n[r]()),
      n[r](o[t] || this.options[t]),
      setTimeout(e.proxy(function() {
          "loadingText" == t ? (this.isLoading = !0,
          n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1,
          n.removeClass(i).removeAttr(i))
      }, this), 0)
  }
  ,
  t.prototype.toggle = function() {
      var e = !0
        , t = this.$element.closest('[data-toggle="buttons"]');
      if (t.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")),
          e && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
      }
      e && this.$element.toggleClass("active")
  }
  ;
  var i = e.fn.button;
  e.fn.button = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.button")
            , o = "object" == typeof i && i;
          r || n.data("bs.button", r = new t(this,o)),
          "toggle" == i ? r.toggle() : i && r.setState(i)
      })
  }
  ,
  e.fn.button.Constructor = t,
  e.fn.button.noConflict = function() {
      return e.fn.button = i,
      this
  }
  ,
  e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
      var i = e(t.target);
      i.hasClass("btn") || (i = i.closest(".btn")),
      i.button("toggle"),
      t.preventDefault()
  })
}(jQuery),
/* ========================================================================
* Bootstrap: carousel.js v3.1.1
* http://getbootstrap.com/javascript/#carousel
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(t, i) {
      this.$element = e(t),
      this.$indicators = this.$element.find(".carousel-indicators"),
      this.options = i,
      this.paused = this.sliding = this.interval = this.$active = this.$items = null,
      "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
  };
  t.DEFAULTS = {
      interval: 5e3,
      pause: "hover",
      wrap: !0
  },
  t.prototype.cycle = function(t) {
      return t || (this.paused = !1),
      this.interval && clearInterval(this.interval),
      this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
      this
  }
  ,
  t.prototype.getActiveIndex = function() {
      return this.$active = this.$element.find(".item.active"),
      this.$items = this.$active.parent().children(),
      this.$items.index(this.$active)
  }
  ,
  t.prototype.to = function(t) {
      var i = this
        , n = this.getActiveIndex();
      return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
          i.to(t)
      }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
  }
  ,
  t.prototype.pause = function(t) {
      return t || (this.paused = !0),
      this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
      this.cycle(!0)),
      this.interval = clearInterval(this.interval),
      this
  }
  ,
  t.prototype.next = function() {
      return this.sliding ? void 0 : this.slide("next")
  }
  ,
  t.prototype.prev = function() {
      return this.sliding ? void 0 : this.slide("prev")
  }
  ,
  t.prototype.slide = function(t, i) {
      var n = this.$element.find(".item.active")
        , r = i || n[t]()
        , o = this.interval
        , s = "next" == t ? "left" : "right"
        , a = "next" == t ? "first" : "last"
        , l = this;
      if (!r.length) {
          if (!this.options.wrap)
              return;
          r = this.$element.find(".item")[a]()
      }
      if (r.hasClass("active"))
          return this.sliding = !1;
      var c = e.Event("slide.bs.carousel", {
          relatedTarget: r[0],
          direction: s
      });
      return this.$element.trigger(c),
      c.isDefaultPrevented() ? void 0 : (this.sliding = !0,
      o && this.pause(),
      this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
      this.$element.one("slid.bs.carousel", function() {
          var t = e(l.$indicators.children()[l.getActiveIndex()]);
          t && t.addClass("active")
      })),
      e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t),
      r[0].offsetWidth,
      n.addClass(s),
      r.addClass(s),
      n.one(e.support.transition.end, function() {
          r.removeClass([t, s].join(" ")).addClass("active"),
          n.removeClass(["active", s].join(" ")),
          l.sliding = !1,
          setTimeout(function() {
              l.$element.trigger("slid.bs.carousel")
          }, 0)
      }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"),
      r.addClass("active"),
      this.sliding = !1,
      this.$element.trigger("slid.bs.carousel")),
      o && this.cycle(),
      this)
  }
  ;
  var i = e.fn.carousel;
  e.fn.carousel = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.carousel")
            , o = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i)
            , s = "string" == typeof i ? i : o.slide;
          r || n.data("bs.carousel", r = new t(this,o)),
          "number" == typeof i ? r.to(i) : s ? r[s]() : o.interval && r.pause().cycle()
      })
  }
  ,
  e.fn.carousel.Constructor = t,
  e.fn.carousel.noConflict = function() {
      return e.fn.carousel = i,
      this
  }
  ,
  e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
      var i, n = e(this), r = e(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")), o = e.extend({}, r.data(), n.data()), s = n.attr("data-slide-to");
      s && (o.interval = !1),
      r.carousel(o),
      (s = n.attr("data-slide-to")) && r.data("bs.carousel").to(s),
      t.preventDefault()
  }),
  e(window).on("load", function() {
      e('[data-ride="carousel"]').each(function() {
          var t = e(this);
          t.carousel(t.data())
      })
  })
}(jQuery),
/* ========================================================================
* Bootstrap: collapse.js v3.1.1
* http://getbootstrap.com/javascript/#collapse
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(i, n) {
      this.$element = e(i),
      this.options = e.extend({}, t.DEFAULTS, n),
      this.transitioning = null,
      this.options.parent && (this.$parent = e(this.options.parent)),
      this.options.toggle && this.toggle()
  };
  t.DEFAULTS = {
      toggle: !0
  },
  t.prototype.dimension = function() {
      var e = this.$element.hasClass("width");
      return e ? "width" : "height"
  }
  ,
  t.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
          var t = e.Event("show.bs.collapse");
          if (this.$element.trigger(t),
          !t.isDefaultPrevented()) {
              var i = this.$parent && this.$parent.find("> .panel > .in");
              if (i && i.length) {
                  var n = i.data("bs.collapse");
                  if (n && n.transitioning)
                      return;
                  i.collapse("hide"),
                  n || i.data("bs.collapse", null)
              }
              var r = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[r](0),
              this.transitioning = 1;
              var o = function() {
                  this.$element.removeClass("collapsing").addClass("collapse in")[r]("auto"),
                  this.transitioning = 0,
                  this.$element.trigger("shown.bs.collapse")
              };
              if (!e.support.transition)
                  return o.call(this);
              var s = e.camelCase(["scroll", r].join("-"));
              this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
          }
      }
  }
  ,
  t.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if (this.$element.trigger(t),
          !t.isDefaultPrevented()) {
              var i = this.dimension();
              this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
              this.transitioning = 1;
              var n = function() {
                  this.transitioning = 0,
                  this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
              };
              return e.support.transition ? (this.$element[i](0).one(e.support.transition.end, e.proxy(n, this)).emulateTransitionEnd(350),
              void 0) : n.call(this)
          }
      }
  }
  ,
  t.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
  }
  ;
  var i = e.fn.collapse;
  e.fn.collapse = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.collapse")
            , o = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i);
          !r && o.toggle && "show" == i && (i = !i),
          r || n.data("bs.collapse", r = new t(this,o)),
          "string" == typeof i && r[i]()
      })
  }
  ,
  e.fn.collapse.Constructor = t,
  e.fn.collapse.noConflict = function() {
      return e.fn.collapse = i,
      this
  }
  ,
  e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
      var i, n = e(this), r = n.attr("data-target") || t.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), o = e(r), s = o.data("bs.collapse"), a = s ? "toggle" : n.data(), l = n.attr("data-parent"), c = l && e(l);
      s && s.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(n).addClass("collapsed"),
      n[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
      o.collapse(a)
  })
}(jQuery),
/* ========================================================================
* Bootstrap: dropdown.js v3.1.1
* http://getbootstrap.com/javascript/#dropdowns
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  function t(t) {
      e(n).remove(),
      e(r).each(function() {
          var n = i(e(this))
            , r = {
              relatedTarget: this
          };
          n.hasClass("open") && (n.trigger(t = e.Event("hide.bs.dropdown", r)),
          t.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", r))
      })
  }
  function i(t) {
      var i = t.attr("data-target");
      i || (i = t.attr("href"),
      i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
      var n = i && e(i);
      return n && n.length ? n : t.parent()
  }
  var n = ".dropdown-backdrop"
    , r = "[data-toggle=dropdown]"
    , o = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
  };
  o.prototype.toggle = function(n) {
      var r = e(this);
      if (!r.is(".disabled, :disabled")) {
          var o = i(r)
            , s = o.hasClass("open");
          if (t(),
          !s) {
              "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
              var a = {
                  relatedTarget: this
              };
              if (o.trigger(n = e.Event("show.bs.dropdown", a)),
              n.isDefaultPrevented())
                  return;
              o.toggleClass("open").trigger("shown.bs.dropdown", a),
              r.focus()
          }
          return !1
      }
  }
  ,
  o.prototype.keydown = function(t) {
      if (/(38|40|27)/.test(t.keyCode)) {
          var n = e(this);
          if (t.preventDefault(),
          t.stopPropagation(),
          !n.is(".disabled, :disabled")) {
              var o = i(n)
                , s = o.hasClass("open");
              if (!s || s && 27 == t.keyCode)
                  return 27 == t.which && o.find(r).focus(),
                  n.click();
              var a = " li:not(.divider):visible a"
                , l = o.find("[role=menu]" + a + ", [role=listbox]" + a);
              if (l.length) {
                  var c = l.index(l.filter(":focus"));
                  38 == t.keyCode && c > 0 && c--,
                  40 == t.keyCode && c < l.length - 1 && c++,
                  ~c || (c = 0),
                  l.eq(c).focus()
              }
          }
      }
  }
  ;
  var s = e.fn.dropdown;
  e.fn.dropdown = function(t) {
      return this.each(function() {
          var i = e(this)
            , n = i.data("bs.dropdown");
          n || i.data("bs.dropdown", n = new o(this)),
          "string" == typeof t && n[t].call(i)
      })
  }
  ,
  e.fn.dropdown.Constructor = o,
  e.fn.dropdown.noConflict = function() {
      return e.fn.dropdown = s,
      this
  }
  ,
  e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
      e.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu], [role=listbox]", o.prototype.keydown)
}(jQuery),
/* ========================================================================
* Bootstrap: tab.js v3.1.1
* http://getbootstrap.com/javascript/#tabs
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(t) {
      this.element = e(t)
  };
  t.prototype.show = function() {
      var t = this.element
        , i = t.closest("ul:not(.dropdown-menu)")
        , n = t.data("target");
      if (n || (n = t.attr("href"),
      n = n && n.replace(/.*(?=#[^\s]*$)/, "")),
      !t.parent("li").hasClass("active")) {
          var r = i.find(".active:last a")[0]
            , o = e.Event("show.bs.tab", {
              relatedTarget: r
          });
          if (t.trigger(o),
          !o.isDefaultPrevented()) {
              var s = e(n);
              this.activate(t.parent("li"), i),
              this.activate(s, s.parent(), function() {
                  t.trigger({
                      type: "shown.bs.tab",
                      relatedTarget: r
                  })
              })
          }
      }
  }
  ,
  t.prototype.activate = function(t, i, n) {
      function r() {
          o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
          t.addClass("active"),
          s ? (t[0].offsetWidth,
          t.addClass("in")) : t.removeClass("fade"),
          t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"),
          n && n()
      }
      var o = i.find("> .active")
        , s = n && e.support.transition && o.hasClass("fade");
      s ? o.one(e.support.transition.end, r).emulateTransitionEnd(150) : r(),
      o.removeClass("in")
  }
  ;
  var i = e.fn.tab;
  e.fn.tab = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.tab");
          r || n.data("bs.tab", r = new t(this)),
          "string" == typeof i && r[i]()
      })
  }
  ,
  e.fn.tab.Constructor = t,
  e.fn.tab.noConflict = function() {
      return e.fn.tab = i,
      this
  }
  ,
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
      t.preventDefault(),
      e(this).tab("show")
  })
}(jQuery),
/* ========================================================================
* Bootstrap: transition.js v3.1.1
* http://getbootstrap.com/javascript/#transitions
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  function t() {
      var e = document.createElement("bootstrap")
        , t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
      };
      for (var i in t)
          if (void 0 !== e.style[i])
              return {
                  end: t[i]
              };
      return !1
  }
  e.fn.emulateTransitionEnd = function(t) {
      var i = !1
        , n = this;
      e(this).one(e.support.transition.end, function() {
          i = !0
      });
      var r = function() {
          i || e(n).trigger(e.support.transition.end)
      };
      return setTimeout(r, t),
      this
  }
  ,
  e(function() {
      e.support.transition = t()
  })
}(jQuery),
/* ========================================================================
* Bootstrap: scrollspy.js v3.1.1
* http://getbootstrap.com/javascript/#scrollspy
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  function t(i, n) {
      var r, o = e.proxy(this.process, this);
      this.$element = e(i).is("body") ? e(window) : e(i),
      this.$body = e("body"),
      this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o),
      this.options = e.extend({}, t.DEFAULTS, n),
      this.selector = (this.options.target || (r = e(i).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
      this.offsets = e([]),
      this.targets = e([]),
      this.activeTarget = null,
      this.refresh(),
      this.process()
  }
  t.DEFAULTS = {
      offset: 10
  },
  t.prototype.refresh = function() {
      var t = this.$element[0] == window ? "offset" : "position";
      this.offsets = e([]),
      this.targets = e([]);
      {
          var i = this;
          this.$body.find(this.selector).map(function() {
              var n = e(this)
                , r = n.data("target") || n.attr("href")
                , o = /^#./.test(r) && e(r);
              return o && o.length && o.is(":visible") && [[o[t]().top + (!e.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), r]] || null
          }).sort(function(e, t) {
              return e[0] - t[0]
          }).each(function() {
              i.offsets.push(this[0]),
              i.targets.push(this[1])
          })
      }
  }
  ,
  t.prototype.process = function() {
      var e, t = this.$scrollElement.scrollTop() + this.options.offset, i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = i - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
      if (t >= n)
          return s != (e = o.last()[0]) && this.activate(e);
      if (s && t <= r[0])
          return s != (e = o[0]) && this.activate(e);
      for (e = r.length; e--; )
          s != o[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(o[e])
  }
  ,
  t.prototype.activate = function(t) {
      this.activeTarget = t,
      e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
      var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
        , n = e(i).parents("li").addClass("active");
      n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
      n.trigger("activate.bs.scrollspy")
  }
  ;
  var i = e.fn.scrollspy;
  e.fn.scrollspy = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.scrollspy")
            , o = "object" == typeof i && i;
          r || n.data("bs.scrollspy", r = new t(this,o)),
          "string" == typeof i && r[i]()
      })
  }
  ,
  e.fn.scrollspy.Constructor = t,
  e.fn.scrollspy.noConflict = function() {
      return e.fn.scrollspy = i,
      this
  }
  ,
  e(window).on("load", function() {
      e('[data-spy="scroll"]').each(function() {
          var t = e(this);
          t.scrollspy(t.data())
      })
  })
}(jQuery),
/* ========================================================================
* Bootstrap: modal.js v3.1.1
* http://getbootstrap.com/javascript/#modals
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(t, i) {
      this.options = i,
      this.$element = e(t),
      this.$backdrop = this.isShown = null,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
      }, this))
  };
  t.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  },
  t.prototype.toggle = function(e) {
      return this[this.isShown ? "hide" : "show"](e)
  }
  ,
  t.prototype.show = function(t) {
      var i = this
        , n = e.Event("show.bs.modal", {
          relatedTarget: t
      });
      this.$element.trigger(n),
      this.isShown || n.isDefaultPrevented() || (this.isShown = !0,
      this.escape(),
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
      this.backdrop(function() {
          var n = e.support.transition && i.$element.hasClass("fade");
          i.$element.parent().length || i.$element.appendTo(document.body),
          i.$element.show().scrollTop(0),
          n && i.$element[0].offsetWidth,
          i.$element.addClass("in").attr("aria-hidden", !1),
          i.enforceFocus();
          var r = e.Event("shown.bs.modal", {
              relatedTarget: t
          });
          n ? i.$element.find(".modal-dialog").one(e.support.transition.end, function() {
              i.$element.focus().trigger(r)
          }).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
      }))
  }
  ,
  t.prototype.hide = function(t) {
      t && t.preventDefault(),
      t = e.Event("hide.bs.modal"),
      this.$element.trigger(t),
      this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
      this.escape(),
      e(document).off("focusin.bs.modal"),
      this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
      e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }
  ,
  t.prototype.enforceFocus = function() {
      e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
          this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
      }, this))
  }
  ,
  t.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
          27 == e.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }
  ,
  t.prototype.hideModal = function() {
      var e = this;
      this.$element.hide(),
      this.backdrop(function() {
          e.removeBackdrop(),
          e.$element.trigger("hidden.bs.modal")
      })
  }
  ,
  t.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(),
      this.$backdrop = null
  }
  ,
  t.prototype.backdrop = function(t) {
      var i = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
          var n = e.support.transition && i;
          if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(document.body),
          this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
              e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
          }, this)),
          n && this.$backdrop[0].offsetWidth,
          this.$backdrop.addClass("in"),
          !t)
              return;
          n ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
      } else
          !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
          e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
  }
  ;
  var i = e.fn.modal;
  e.fn.modal = function(i, n) {
      return this.each(function() {
          var r = e(this)
            , o = r.data("bs.modal")
            , s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof i && i);
          o || r.data("bs.modal", o = new t(this,s)),
          "string" == typeof i ? o[i](n) : s.show && o.show(n)
      })
  }
  ,
  e.fn.modal.Constructor = t,
  e.fn.modal.noConflict = function() {
      return e.fn.modal = i,
      this
  }
  ,
  e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
      var i = e(this)
        , n = i.attr("href")
        , r = e(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
        , o = r.data("bs.modal") ? "toggle" : e.extend({
          remote: !/#/.test(n) && n
      }, r.data(), i.data());
      i.is("a") && t.preventDefault(),
      r.modal(o, this).one("hide", function() {
          i.is(":visible") && i.focus()
      })
  }),
  e(document).on("show.bs.modal", ".modal", function() {
      e(document.body).addClass("modal-open")
  }).on("hidden.bs.modal", ".modal", function() {
      e(document.body).removeClass("modal-open")
  })
}(jQuery),
/* ========================================================================
* Bootstrap: tooltip.js v3.1.1
* http://getbootstrap.com/javascript/#tooltip
* Inspired by the original jQuery.tipsy by Jason Frame
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(e, t) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
      this.init("tooltip", e, t)
  };
  t.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1
  },
  t.prototype.init = function(t, i, n) {
      this.enabled = !0,
      this.type = t,
      this.$element = e(i),
      this.options = this.getOptions(n);
      for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
          var s = r[o];
          if ("click" == s)
              this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
          else if ("manual" != s) {
              var a = "hover" == s ? "mouseenter" : "focusin"
                , l = "hover" == s ? "mouseleave" : "focusout";
              this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
              this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
          }
      }
      this.options.selector ? this._options = e.extend({}, this.options, {
          trigger: "manual",
          selector: ""
      }) : this.fixTitle()
  }
  ,
  t.prototype.getDefaults = function() {
      return t.DEFAULTS
  }
  ,
  t.prototype.getOptions = function(t) {
      return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
      t.delay && "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
      }),
      t
  }
  ,
  t.prototype.getDelegateOptions = function() {
      var t = {}
        , i = this.getDefaults();
      return this._options && e.each(this._options, function(e, n) {
          i[e] != n && (t[e] = n)
      }),
      t
  }
  ,
  t.prototype.enter = function(t) {
      var i = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(i.timeout),
      i.hoverState = "in",
      i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function() {
          "in" == i.hoverState && i.show()
      }, i.options.delay.show),
      void 0) : i.show()
  }
  ,
  t.prototype.leave = function(t) {
      var i = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
      return clearTimeout(i.timeout),
      i.hoverState = "out",
      i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function() {
          "out" == i.hoverState && i.hide()
      }, i.options.delay.hide),
      void 0) : i.hide()
  }
  ,
  t.prototype.show = function() {
      var t = e.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
          if (this.$element.trigger(t),
          t.isDefaultPrevented())
              return;
          var i = this
            , n = this.tip();
          this.setContent(),
          this.options.animation && n.addClass("fade");
          var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement
            , o = /\s?auto?\s?/i
            , s = o.test(r);
          s && (r = r.replace(o, "") || "top"),
          n.detach().css({
              top: 0,
              left: 0,
              display: "block"
          }).addClass(r),
          this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
          var a = this.getPosition()
            , l = n[0].offsetWidth
            , c = n[0].offsetHeight;
          if (s) {
              var u = this.$element.parent()
                , d = r
                , p = document.documentElement.scrollTop || document.body.scrollTop
                , f = "body" == this.options.container ? window.innerWidth : u.outerWidth()
                , h = "body" == this.options.container ? window.innerHeight : u.outerHeight()
                , m = "body" == this.options.container ? 0 : u.offset().left;
              r = "bottom" == r && a.top + a.height + c - p > h ? "top" : "top" == r && a.top - p - c < 0 ? "bottom" : "right" == r && a.right + l > f ? "left" : "left" == r && a.left - l < m ? "right" : r,
              n.removeClass(d).addClass(r)
          }
          var g = this.getCalculatedOffset(r, a, l, c);
          this.applyPlacement(g, r),
          this.hoverState = null;
          var v = function() {
              i.$element.trigger("shown.bs." + i.type)
          };
          e.support.transition && this.$tip.hasClass("fade") ? n.one(e.support.transition.end, v).emulateTransitionEnd(150) : v()
      }
  }
  ,
  t.prototype.applyPlacement = function(t, i) {
      var n, r = this.tip(), o = r[0].offsetWidth, s = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10), l = parseInt(r.css("margin-left"), 10);
      isNaN(a) && (a = 0),
      isNaN(l) && (l = 0),
      t.top = t.top + a,
      t.left = t.left + l,
      e.offset.setOffset(r[0], e.extend({
          using: function(e) {
              r.css({
                  top: Math.round(e.top),
                  left: Math.round(e.left)
              })
          }
      }, t), 0),
      r.addClass("in");
      var c = r[0].offsetWidth
        , u = r[0].offsetHeight;
      if ("top" == i && u != s && (n = !0,
      t.top = t.top + s - u),
      /bottom|top/.test(i)) {
          var d = 0;
          t.left < 0 && (d = -2 * t.left,
          t.left = 0,
          r.offset(t),
          c = r[0].offsetWidth,
          u = r[0].offsetHeight),
          this.replaceArrow(d - o + c, c, "left")
      } else
          this.replaceArrow(u - s, u, "top");
      n && r.offset(t)
  }
  ,
  t.prototype.replaceArrow = function(e, t, i) {
      this.arrow().css(i, e ? 50 * (1 - e / t) + "%" : "")
  }
  ,
  t.prototype.setContent = function() {
      var e = this.tip()
        , t = this.getTitle();
      e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
      e.removeClass("fade in top bottom left right")
  }
  ,
  t.prototype.hide = function() {
      function t() {
          "in" != i.hoverState && n.detach(),
          i.$element.trigger("hidden.bs." + i.type)
      }
      var i = this
        , n = this.tip()
        , r = e.Event("hide.bs." + this.type);
      return this.$element.trigger(r),
      r.isDefaultPrevented() ? void 0 : (n.removeClass("in"),
      e.support.transition && this.$tip.hasClass("fade") ? n.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(),
      this.hoverState = null,
      this)
  }
  ,
  t.prototype.fixTitle = function() {
      var e = this.$element;
      (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
  }
  ,
  t.prototype.hasContent = function() {
      return this.getTitle()
  }
  ,
  t.prototype.getPosition = function() {
      var t = this.$element[0];
      return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
          width: t.offsetWidth,
          height: t.offsetHeight
      }, this.$element.offset())
  }
  ,
  t.prototype.getCalculatedOffset = function(e, t, i, n) {
      return "bottom" == e ? {
          top: t.top + t.height,
          left: t.left + t.width / 2 - i / 2
      } : "top" == e ? {
          top: t.top - n,
          left: t.left + t.width / 2 - i / 2
      } : "left" == e ? {
          top: t.top + t.height / 2 - n / 2,
          left: t.left - i
      } : {
          top: t.top + t.height / 2 - n / 2,
          left: t.left + t.width
      }
  }
  ,
  t.prototype.getTitle = function() {
      var e, t = this.$element, i = this.options;
      return e = t.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(t[0]) : i.title)
  }
  ,
  t.prototype.tip = function() {
      return this.$tip = this.$tip || e(this.options.template)
  }
  ,
  t.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }
  ,
  t.prototype.validate = function() {
      this.$element[0].parentNode || (this.hide(),
      this.$element = null,
      this.options = null)
  }
  ,
  t.prototype.enable = function() {
      this.enabled = !0
  }
  ,
  t.prototype.disable = function() {
      this.enabled = !1
  }
  ,
  t.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
  }
  ,
  t.prototype.toggle = function(t) {
      var i = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
      i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }
  ,
  t.prototype.destroy = function() {
      clearTimeout(this.timeout),
      this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  }
  ;
  var i = e.fn.tooltip;
  e.fn.tooltip = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.tooltip")
            , o = "object" == typeof i && i;
          (r || "destroy" != i) && (r || n.data("bs.tooltip", r = new t(this,o)),
          "string" == typeof i && r[i]())
      })
  }
  ,
  e.fn.tooltip.Constructor = t,
  e.fn.tooltip.noConflict = function() {
      return e.fn.tooltip = i,
      this
  }
}(jQuery),
/* ========================================================================
* Bootstrap: popover.js v3.1.1
* http://getbootstrap.com/javascript/#popovers
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
+function(e) {
  "use strict";
  var t = function(e, t) {
      this.init("popover", e, t)
  };
  if (!e.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
  t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }),
  t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
  t.prototype.constructor = t,
  t.prototype.getDefaults = function() {
      return t.DEFAULTS
  }
  ,
  t.prototype.setContent = function() {
      var e = this.tip()
        , t = this.getTitle()
        , i = this.getContent();
      e.find(".popover-title")[this.options.html ? "html" : "text"](t),
      e.find(".popover-content")[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
      e.removeClass("fade top bottom left right in"),
      e.find(".popover-title").html() || e.find(".popover-title").hide()
  }
  ,
  t.prototype.hasContent = function() {
      return this.getTitle() || this.getContent()
  }
  ,
  t.prototype.getContent = function() {
      var e = this.$element
        , t = this.options;
      return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
  }
  ,
  t.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }
  ,
  t.prototype.tip = function() {
      return this.$tip || (this.$tip = e(this.options.template)),
      this.$tip
  }
  ;
  var i = e.fn.popover;
  e.fn.popover = function(i) {
      return this.each(function() {
          var n = e(this)
            , r = n.data("bs.popover")
            , o = "object" == typeof i && i;
          (r || "destroy" != i) && (r || n.data("bs.popover", r = new t(this,o)),
          "string" == typeof i && r[i]())
      })
  }
  ,
  e.fn.popover.Constructor = t,
  e.fn.popover.noConflict = function() {
      return e.fn.popover = i,
      this
  }
}(jQuery),
function() {
  "use strict";
  function e(e) {
      return e = String(e),
      e.charAt(0).toUpperCase() + e.slice(1)
  }
  function t(e, t, i) {
      var r = {
          "10.0": "10",
          6.4: "10 Technical Preview",
          6.3: "8.1",
          6.2: "8",
          6.1: "Server 2008 R2 / 7",
          "6.0": "Server 2008 / Vista",
          5.2: "Server 2003 / XP 64-bit",
          5.1: "XP",
          5.01: "2000 SP1",
          "5.0": "2000",
          "4.0": "NT",
          "4.90": "ME"
      };
      return t && i && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
      e = String(e),
      t && i && (e = e.replace(RegExp(t, "i"), i)),
      e = n(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
  }
  function i(e, t) {
      var i = -1
        , n = e ? e.length : 0;
      if ("number" == typeof n && n > -1 && g >= n)
          for (; ++i < n; )
              t(e[i], i, e);
      else
          r(e, t)
  }
  function n(t) {
      return t = c(t),
      /^(?:webOS|i(?:OS|P))/.test(t) ? t : e(t)
  }
  function r(e, t) {
      for (var i in e)
          b.call(e, i) && t(e[i], i, e)
  }
  function o(t) {
      return null == t ? e(t) : _.call(t).slice(8, -1)
  }
  function s(e, t) {
      var i = null != e ? typeof e[t] : "number";
      return !/^(?:boolean|number|string|undefined)$/.test(i) && ("object" == i ? !!e[t] : !0)
  }
  function a(e) {
      return String(e).replace(/([ -])(?!$)/g, "$1?")
  }
  function l(e, t) {
      var n = null;
      return i(e, function(i, r) {
          n = t(n, i, r, e)
      }),
      n
  }
  function c(e) {
      return String(e).replace(/^ +| +$/g, "")
  }
  function u(e) {
      function i(t) {
          return l(t, function(t, i) {
              return t || RegExp("\\b" + (i.pattern || a(i)) + "\\b", "i").exec(e) && (i.label || i)
          })
      }
      function d(t) {
          return l(t, function(t, i, n) {
              return t || (i[U] || i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] || RegExp("\\b" + a(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) && n
          })
      }
      function f(t) {
          return l(t, function(t, i) {
              return t || RegExp("\\b" + (i.pattern || a(i)) + "\\b", "i").exec(e) && (i.label || i)
          })
      }
      function h(i) {
          return l(i, function(i, n) {
              var r = n.pattern || a(n);
              return !i && (i = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (i = t(i, r, n.label || n)),
              i
          })
      }
      function m(t) {
          return l(t, function(t, i) {
              var r = i.pattern || a(i);
              return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(i.label && !RegExp(r, "i").test(i.label) ? i.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]),
              i = i.label || i,
              t = n(t[0].replace(RegExp(r, "i"), i).replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ").replace(RegExp("(" + i + ")[-_.]?(\\w)", "i"), "$1 $2"))),
              t
          })
      }
      function g(t) {
          return l(t, function(t, i) {
              return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
          })
      }
      function y() {
          return this.description || ""
      }
      var b = p
        , x = e && "object" == typeof e && "String" != o(e);
      x && (b = e,
      e = null);
      var w = b.navigator || {}
        , T = w.userAgent || "";
      e || (e = T);
      var k, S, C = x ? !!w.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(_.toString()), P = "Object", E = x ? P : "ScriptBridgingProxyObject", A = x ? P : "Environment", $ = x && b.java ? "JavaPackage" : o(b.java), O = x ? P : "RuntimeObject", M = /\bJava/.test($) && b.java, D = M && o(b.environment) == A, j = M ? "a" : "α", z = M ? "b" : "β", N = b.document || {}, R = b.operamini || b.opera, I = v.test(I = x && R ? R["[[Class]]"] : o(R)) ? I : R = null, L = e, F = [], H = null, B = e == T, q = B && R && "function" == typeof R.version && R.version(), W = i([{
          label: "EdgeHTML",
          pattern: "Edge"
      }, "Trident", {
          label: "WebKit",
          pattern: "AppleWebKit"
      }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), X = f(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
          label: "Microsoft Edge",
          pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
      }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
          label: "Samsung Internet",
          pattern: "SamsungBrowser"
      }, "SeaMonkey", {
          label: "Silk",
          pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Sleipnir", "SlimBrowser", {
          label: "SRWare Iron",
          pattern: "Iron"
      }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
          label: "Yandex Browser",
          pattern: "YaBrowser"
      }, {
          label: "UC Browser",
          pattern: "UCBrowser"
      }, "Opera Mini", {
          label: "Opera Mini",
          pattern: "OPiOS"
      }, "Opera", {
          label: "Opera",
          pattern: "OPR"
      }, "Chromium", "Chrome", {
          label: "Chrome",
          pattern: "(?:HeadlessChrome)"
      }, {
          label: "Chrome Mobile",
          pattern: "(?:CriOS|CrMo)"
      }, {
          label: "Firefox",
          pattern: "(?:Firefox|Minefield)"
      }, {
          label: "Firefox for iOS",
          pattern: "FxiOS"
      }, {
          label: "IE",
          pattern: "IEMobile"
      }, {
          label: "IE",
          pattern: "MSIE"
      }, "Safari"]), U = m([{
          label: "BlackBerry",
          pattern: "BB10"
      }, "BlackBerry", {
          label: "Galaxy S",
          pattern: "GT-I9000"
      }, {
          label: "Galaxy S2",
          pattern: "GT-I9100"
      }, {
          label: "Galaxy S3",
          pattern: "GT-I9300"
      }, {
          label: "Galaxy S4",
          pattern: "GT-I9500"
      }, {
          label: "Galaxy S5",
          pattern: "SM-G900"
      }, {
          label: "Galaxy S6",
          pattern: "SM-G920"
      }, {
          label: "Galaxy S6 Edge",
          pattern: "SM-G925"
      }, {
          label: "Galaxy S7",
          pattern: "SM-G930"
      }, {
          label: "Galaxy S7 Edge",
          pattern: "SM-G935"
      }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
          label: "Kindle Fire",
          pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
          label: "Wii U",
          pattern: "WiiU"
      }, "Wii", "Xbox One", {
          label: "Xbox 360",
          pattern: "Xbox"
      }, "Xoom"]), Y = d({
          Apple: {
              iPad: 1,
              iPhone: 1,
              iPod: 1
          },
          Alcatel: {},
          Archos: {},
          Amazon: {
              Kindle: 1,
              "Kindle Fire": 1
          },
          Asus: {
              Transformer: 1
          },
          "Barnes & Noble": {
              Nook: 1
          },
          BlackBerry: {
              PlayBook: 1
          },
          Google: {
              "Google TV": 1,
              Nexus: 1
          },
          HP: {
              TouchPad: 1
          },
          HTC: {},
          Huawei: {},
          Lenovo: {},
          LG: {},
          Microsoft: {
              Xbox: 1,
              "Xbox One": 1
          },
          Motorola: {
              Xoom: 1
          },
          Nintendo: {
              "Wii U": 1,
              Wii: 1
          },
          Nokia: {
              Lumia: 1
          },
          Oppo: {},
          Samsung: {
              "Galaxy S": 1,
              "Galaxy S2": 1,
              "Galaxy S3": 1,
              "Galaxy S4": 1
          },
          Sony: {
              PlayStation: 1,
              "PlayStation Vita": 1
          },
          Xiaomi: {
              Mi: 1,
              Redmi: 1
          }
      }), G = h(["Windows Phone", "KaiOS", "Android", "CentOS", {
          label: "Chrome OS",
          pattern: "CrOS"
      }, "Debian", {
          label: "DragonFly BSD",
          pattern: "DragonFly"
      }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
      if (W && (W = [W]),
      /\bAndroid\b/.test(G) && !U && (k = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) && (U = c(k[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
      Y && !U ? U = m([Y]) : Y && U && (U = U.replace(RegExp("^(" + a(Y) + ")[-_.\\s]", "i"), Y + " ").replace(RegExp("^(" + a(Y) + ")[-_.]?(\\w)", "i"), Y + " $2")),
      (k = /\bGoogle TV\b/.exec(U)) && (U = k[0]),
      /\bSimulator\b/i.test(e) && (U = (U ? U + " " : "") + "Simulator"),
      "Opera Mini" == X && /\bOPiOS\b/.test(e) && F.push("running in Turbo/Uncompressed mode"),
      "IE" == X && /\blike iPhone OS\b/.test(e) ? (k = u(e.replace(/like iPhone OS/, "")),
      Y = k.manufacturer,
      U = k.product) : /^iP/.test(U) ? (X || (X = "Safari"),
      G = "iOS" + ((k = / OS ([\d_]+)/i.exec(e)) ? " " + k[1].replace(/_/g, ".") : "")) : "Konqueror" == X && /^Linux\b/i.test(G) ? G = "Kubuntu" : Y && "Google" != Y && (/Chrome/.test(X) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(U)) || /\bAndroid\b/.test(G) && /^Chrome/.test(X) && /\bVersion\//i.test(e) ? (X = "Android Browser",
      G = /\bAndroid\b/.test(G) ? G : "Android") : "Silk" == X ? (/\bMobi/i.test(e) || (G = "Android",
      F.unshift("desktop mode")),
      /Accelerated *= *true/i.test(e) && F.unshift("accelerated")) : "UC Browser" == X && /\bUCWEB\b/.test(e) ? F.push("speed mode") : "PaleMoon" == X && (k = /\bFirefox\/([\d.]+)\b/.exec(e)) ? F.push("identifying as Firefox " + k[1]) : "Firefox" == X && (k = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (G || (G = "Firefox OS"),
      U || (U = k[1])) : !X || (k = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(X)) ? (X && !U && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(k + "/") + 8)) && (X = null),
      (k = U || Y || G) && (U || Y || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G)) && (X = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G) ? G : k) + " Browser")) : "Electron" == X && (k = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && F.push("Chromium " + k),
      q || (q = g(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", a(X), "(?:Firefox|Minefield|NetFront)"])),
      (k = "iCab" == W && parseFloat(q) > 3 && "WebKit" || /\bOpera\b/.test(X) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(W) && "WebKit" || !W && /\bMSIE\b/i.test(e) && ("Mac OS" == G ? "Tasman" : "Trident") || "WebKit" == W && /\bPlayStation\b(?! Vita\b)/i.test(X) && "NetFront") && (W = [k]),
      "IE" == X && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (X += " Mobile",
      G = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x"),
      F.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (X = "IE Mobile",
      G = "Windows Phone 8.x",
      F.unshift("desktop mode"),
      q || (q = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != X && "Trident" == W && (k = /\brv:([\d.]+)/.exec(e)) && (X && F.push("identifying as " + X + (q ? " " + q : "")),
      X = "IE",
      q = k[1]),
      B) {
          if (s(b, "global"))
              if (M && (k = M.lang.System,
              L = k.getProperty("os.arch"),
              G = G || k.getProperty("os.name") + " " + k.getProperty("os.version")),
              D) {
                  try {
                      q = b.require("ringo/engine").version.join("."),
                      X = "RingoJS"
                  } catch (V) {
                      (k = b.system) && k.global.system == b.system && (X = "Narwhal",
                      G || (G = k[0].os || null))
                  }
                  X || (X = "Rhino")
              } else
                  "object" == typeof b.process && !b.process.browser && (k = b.process) && ("object" == typeof k.versions && ("string" == typeof k.versions.electron ? (F.push("Node " + k.versions.node),
                  X = "Electron",
                  q = k.versions.electron) : "string" == typeof k.versions.nw && (F.push("Chromium " + q, "Node " + k.versions.node),
                  X = "NW.js",
                  q = k.versions.nw)),
                  X || (X = "Node.js",
                  L = k.arch,
                  G = k.platform,
                  q = /[\d.]+/.exec(k.version),
                  q = q ? q[0] : null));
          else
              o(k = b.runtime) == E ? (X = "Adobe AIR",
              G = k.flash.system.Capabilities.os) : o(k = b.phantom) == O ? (X = "PhantomJS",
              q = (k = k.version || null) && k.major + "." + k.minor + "." + k.patch) : "number" == typeof N.documentMode && (k = /\bTrident\/(\d+)/i.exec(e)) ? (q = [q, N.documentMode],
              (k = +k[1] + 4) != q[1] && (F.push("IE " + q[1] + " mode"),
              W && (W[1] = ""),
              q[1] = k),
              q = "IE" == X ? String(q[1].toFixed(1)) : q[0]) : "number" == typeof N.documentMode && /^(?:Chrome|Firefox)\b/.test(X) && (F.push("masking as " + X + " " + q),
              X = "IE",
              q = "11.0",
              W = ["Trident"],
              G = "Windows");
          G = G && n(G)
      }
      if (q && (k = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(q) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (B && w.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (H = /b/i.test(k) ? "beta" : "alpha",
      q = q.replace(RegExp(k + "\\+?$"), "") + ("beta" == H ? z : j) + (/\d+\+?/.exec(k) || "")),
      "Fennec" == X || "Firefox" == X && /\b(?:Android|Firefox OS|KaiOS)\b/.test(G))
          X = "Firefox Mobile";
      else if ("Maxthon" == X && q)
          q = q.replace(/\.[\d.]+/, ".x");
      else if (/\bXbox\b/i.test(U))
          "Xbox 360" == U && (G = null),
          "Xbox 360" == U && /\bIEMobile\b/.test(e) && F.unshift("mobile mode");
      else if (!/^(?:Chrome|IE|Opera)$/.test(X) && (!X || U || /Browser|Mobi/.test(X)) || "Windows CE" != G && !/Mobi/i.test(e))
          if ("IE" == X && B)
              try {
                  null === b.external && F.unshift("platform preview")
              } catch (V) {
                  F.unshift("embedded")
              }
          else
              (/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(e)) && (k = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || q) ? (k = [k, /BB10/.test(e)],
              G = (k[1] ? (U = null,
              Y = "BlackBerry") : "Device Software") + " " + k[0],
              q = null) : this != r && "Wii" != U && (B && R || /Opera/.test(X) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == X && /\bOS X (?:\d+\.){2,}/.test(G) || "IE" == X && (G && !/^Win/.test(G) && q > 5.5 || /\bWindows XP\b/.test(G) && q > 8 || 8 == q && !/\bTrident\b/.test(e))) && !v.test(k = u.call(r, e.replace(v, "") + ";")) && k.name && (k = "ing as " + k.name + ((k = k.version) ? " " + k : ""),
              v.test(X) ? (/\bIE\b/.test(k) && "Mac OS" == G && (G = null),
              k = "identify" + k) : (k = "mask" + k,
              X = I ? n(I.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
              /\bIE\b/.test(k) && (G = null),
              B || (q = null)),
              W = ["Presto"],
              F.push(k));
      else
          X += " Mobile";
      (k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k],
      "Safari" == X && "+" == k[1].slice(-1) ? (X = "WebKit Nightly",
      H = "alpha",
      q = k[1].slice(0, -1)) : (q == k[1] || q == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (q = null),
      k[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1],
      537.36 == k[0] && 537.36 == k[2] && parseFloat(k[1]) >= 28 && "WebKit" == W && (W = ["Blink"]),
      B && (C || k[1]) ? (W && (W[1] = "like Chrome"),
      k = k[1] || (k = k[0],
      530 > k ? 1 : 532 > k ? 2 : 532.05 > k ? 3 : 533 > k ? 4 : 534.03 > k ? 5 : 534.07 > k ? 6 : 534.1 > k ? 7 : 534.13 > k ? 8 : 534.16 > k ? 9 : 534.24 > k ? 10 : 534.3 > k ? 11 : 535.01 > k ? 12 : 535.02 > k ? "13+" : 535.07 > k ? 15 : 535.11 > k ? 16 : 535.19 > k ? 17 : 536.05 > k ? 18 : 536.1 > k ? 19 : 537.01 > k ? 20 : 537.11 > k ? "21+" : 537.13 > k ? 23 : 537.18 > k ? 24 : 537.24 > k ? 25 : 537.36 > k ? 26 : "Blink" != W ? "27" : "28")) : (W && (W[1] = "like Safari"),
      k = k[0],
      k = 400 > k ? 1 : 500 > k ? 2 : 526 > k ? 3 : 533 > k ? 4 : 534 > k ? "4+" : 535 > k ? 5 : 537 > k ? 6 : 538 > k ? 7 : 601 > k ? 8 : 602 > k ? 9 : 604 > k ? 10 : 606 > k ? 11 : 608 > k ? 12 : "12"),
      W && (W[1] += " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+")),
      "Safari" == X && (!q || parseInt(q) > 45) ? q = k : "Chrome" == X && /\bHeadlessChrome/i.test(e) && F.unshift("headless")),
      "Opera" == X && (k = /\bzbov|zvav$/.exec(G)) ? (X += " ",
      F.unshift("desktop mode"),
      "zvav" == k ? (X += "Mini",
      q = null) : X += "Mobile",
      G = G.replace(RegExp(" *" + k + "$"), "")) : "Safari" == X && /\bChrome\b/.exec(W && W[1]) ? (F.unshift("desktop mode"),
      X = "Chrome Mobile",
      q = null,
      /\bOS X\b/.test(G) ? (Y = "Apple",
      G = "iOS 4.3+") : G = null) : /\bSRWare Iron\b/.test(X) && !q && (q = g("Chrome")),
      q && 0 == q.indexOf(k = /[\d.]+$/.exec(G)) && e.indexOf("/" + k + "-") > -1 && (G = c(G.replace(k, ""))),
      G && -1 != G.indexOf(X) && !RegExp(X + " OS").test(G) && (G = G.replace(RegExp(" *" + a(X) + " *"), "")),
      W && !/\b(?:Avant|Nook)\b/.test(X) && (/Browser|Lunascape|Maxthon/.test(X) || "Safari" != X && /^iOS/.test(G) && /\bSafari\b/.test(W[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(X) && W[1]) && (k = W[W.length - 1]) && F.push(k),
      F.length && (F = ["(" + F.join("; ") + ")"]),
      Y && U && U.indexOf(Y) < 0 && F.push("on " + Y),
      U && F.push((/^on /.test(F[F.length - 1]) ? "" : "on ") + U),
      G && (k = / ([\d.+]+)$/.exec(G),
      S = k && "/" == G.charAt(G.length - k[0].length - 1),
      G = {
          architecture: 32,
          family: k && !S ? G.replace(k[0], "") : G,
          version: k ? k[1] : null,
          toString: function() {
              var e = this.version;
              return this.family + (e && !S ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
          }
      }),
      (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L)) && !/\bi686\b/i.test(L) ? (G && (G.architecture = 64,
      G.family = G.family.replace(RegExp(" *" + k), "")),
      X && (/\bWOW64\b/i.test(e) || B && /\w(?:86|32)$/.test(w.cpuClass || w.platform) && !/\bWin64; x64\b/i.test(e)) && F.unshift("32-bit")) : G && /^OS X/.test(G.family) && "Chrome" == X && parseFloat(q) >= 39 && (G.architecture = 64),
      e || (e = null);
      var Z = {};
      return Z.description = e,
      Z.layout = W && W[0],
      Z.manufacturer = Y,
      Z.name = X,
      Z.prerelease = H,
      Z.product = U,
      Z.ua = e,
      Z.version = X && q,
      Z.os = G || {
          architecture: null,
          family: null,
          version: null,
          toString: function() {
              return "null"
          }
      },
      Z.parse = u,
      Z.toString = y,
      Z.version && F.unshift(q),
      Z.name && F.unshift(X),
      G && X && (G != String(G).split(" ")[0] || G != X.split(" ")[0] && !U) && F.push(U ? "(" + G + ")" : "on " + G),
      F.length && (Z.description = F.join(" ")),
      Z
  }
  var d = {
      "function": !0,
      object: !0
  }
    , p = d[typeof window] && window || this
    , f = d[typeof exports] && exports
    , h = d[typeof module] && module && !module.nodeType && module
    , m = f && h && "object" == typeof global && global;
  !m || m.global !== m && m.window !== m && m.self !== m || (p = m);
  var g = Math.pow(2, 53) - 1
    , v = /\bOpera/
    , y = Object.prototype
    , b = y.hasOwnProperty
    , _ = y.toString
    , x = u();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (p.platform = x,
  define(function() {
      return x
  })) : f && h ? r(x, function(e, t) {
      f[t] = e
  }) : p.platform = x
}
.call(this),
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.anime = t()
}(this, function() {
  "use strict";
  function e(e, t, i) {
      return Math.min(Math.max(e, t), i)
  }
  function t(e, t) {
      return e.indexOf(t) > -1
  }
  function i(e, t) {
      return e.apply(null, t)
  }
  function n(e) {
      var t = /\(([^)]+)\)/.exec(e);
      return t ? t[1].split(",").map(function(e) {
          return parseFloat(e)
      }) : []
  }
  function r(t, i) {
      function r(e) {
          var t = i ? i * e / 1e3 : e;
          return t = 1 > d ? Math.exp(-t * d * u) * (f * Math.cos(p * t) + h * Math.sin(p * t)) : (f + h * t) * Math.exp(-t * u),
          0 === e || 1 === e ? e : 1 - t
      }
      var o = n(t)
        , s = e(Z.und(o[0]) ? 1 : o[0], .1, 100)
        , a = e(Z.und(o[1]) ? 100 : o[1], .1, 100)
        , l = e(Z.und(o[2]) ? 10 : o[2], .1, 100)
        , c = e(Z.und(o[3]) ? 0 : o[3], .1, 100)
        , u = Math.sqrt(a / s)
        , d = l / (2 * Math.sqrt(a * s))
        , p = 1 > d ? u * Math.sqrt(1 - d * d) : 0
        , f = 1
        , h = 1 > d ? (d * u - c) / p : -c + u;
      return i ? r : function() {
          var e = V.springs[t];
          if (e)
              return e;
          for (var i = 0, n = 0; ; )
              if (1 === r(i += 1 / 6)) {
                  if (++n >= 16)
                      break
              } else
                  n = 0;
          var o = i * (1 / 6) * 1e3;
          return V.springs[t] = o,
          o
      }
  }
  function o(t) {
      return void 0 === t && (t = 10),
      function(i) {
          return Math.ceil(e(i, 1e-6, 1) * t) * (1 / t)
      }
  }
  function s(e, t) {
      if (Z.fnc(e))
          return e;
      var s = e.split("(")[0]
        , a = K[s]
        , l = n(e);
      switch (s) {
      case "spring":
          return r(e, t);
      case "cubicBezier":
          return i(Q, l);
      case "steps":
          return i(o, l);
      default:
          return i(a, l)
      }
  }
  function a(e) {
      try {
          return document.querySelectorAll(e)
      } catch (e) {
          return
      }
  }
  function l(e, t) {
      for (var i = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, r = [], o = 0; i > o; o++)
          if (o in e) {
              var s = e[o];
              t.call(n, s, o, e) && r.push(s)
          }
      return r
  }
  function c(e) {
      return e.reduce(function(e, t) {
          return e.concat(Z.arr(t) ? c(t) : t)
      }, [])
  }
  function u(e) {
      return Z.arr(e) ? e : (Z.str(e) && (e = a(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
  }
  function d(e, t) {
      return e.some(function(e) {
          return e === t
      })
  }
  function p(e) {
      var t = {};
      for (var i in e)
          t[i] = e[i];
      return t
  }
  function f(e, t) {
      var i = p(e);
      for (var n in e)
          i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
      return i
  }
  function h(e, t) {
      var i = p(e);
      for (var n in t)
          i[n] = Z.und(e[n]) ? t[n] : e[n];
      return i
  }
  function m(e) {
      return Z.rgb(e) ? (i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t = e)) ? "rgba(" + i[1] + ",1)" : t : Z.hex(e) ? (n = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
          return t + t + i + i + n + n
      }),
      r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
      "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)") : Z.hsl(e) ? function(e) {
          function t(e, t, i) {
              return 0 > i && (i += 1),
              i > 1 && (i -= 1),
              1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + (t - e) * (2 / 3 - i) * 6 : e
          }
          var i, n, r, o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), s = parseInt(o[1], 10) / 360, a = parseInt(o[2], 10) / 100, l = parseInt(o[3], 10) / 100, c = o[4] || 1;
          if (0 == a)
              i = n = r = l;
          else {
              var u = .5 > l ? l * (1 + a) : l + a - l * a
                , d = 2 * l - u;
              i = t(d, u, s + 1 / 3),
              n = t(d, u, s),
              r = t(d, u, s - 1 / 3)
          }
          return "rgba(" + 255 * i + "," + 255 * n + "," + 255 * r + "," + c + ")"
      }(e) : void 0;
      var t, i, n, r
  }
  function g(e) {
      var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
      return t ? t[1] : void 0
  }
  function v(e, t) {
      return Z.fnc(e) ? e(t.target, t.id, t.total) : e
  }
  function y(e, t) {
      return e.getAttribute(t)
  }
  function b(e, t, i) {
      if (d([i, "deg", "rad", "turn"], g(t)))
          return t;
      var n = V.CSS[t + i];
      if (!Z.und(n))
          return n;
      var r = document.createElement(e.tagName)
        , o = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
      o.appendChild(r),
      r.style.position = "absolute",
      r.style.width = 100 + i;
      var s = 100 / r.offsetWidth;
      o.removeChild(r);
      var a = s * parseFloat(t);
      return V.CSS[t + i] = a,
      a
  }
  function _(e, t, i) {
      if (t in e.style) {
          var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            , r = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
          return i ? b(e, r, i) : r
      }
  }
  function x(e, t) {
      return Z.dom(e) && !Z.inp(e) && (y(e, t) || Z.svg(e) && e[t]) ? "attribute" : Z.dom(e) && d(G, t) ? "transform" : Z.dom(e) && "transform" !== t && _(e, t) ? "css" : null != e[t] ? "object" : void 0
  }
  function w(e) {
      if (Z.dom(e)) {
          for (var t, i = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, r = new Map; t = n.exec(i); )
              r.set(t[1], t[2]);
          return r
      }
  }
  function T(e, i, n, r) {
      var o, s = t(i, "scale") ? 1 : 0 + (t(o = i, "translate") || "perspective" === o ? "px" : t(o, "rotate") || t(o, "skew") ? "deg" : void 0), a = w(e).get(i) || s;
      return n && (n.transforms.list.set(i, a),
      n.transforms.last = i),
      r ? b(e, a, r) : a
  }
  function k(e, t, i, n) {
      switch (x(e, t)) {
      case "transform":
          return T(e, t, n, i);
      case "css":
          return _(e, t, i);
      case "attribute":
          return y(e, t);
      default:
          return e[t] || 0
      }
  }
  function S(e, t) {
      var i = /^(\*=|\+=|-=)/.exec(e);
      if (!i)
          return e;
      var n = g(e) || 0
        , r = parseFloat(t)
        , o = parseFloat(e.replace(i[0], ""));
      switch (i[0][0]) {
      case "+":
          return r + o + n;
      case "-":
          return r - o + n;
      case "*":
          return r * o + n
      }
  }
  function C(e, t) {
      if (Z.col(e))
          return m(e);
      if (/\s/g.test(e))
          return e;
      var i = g(e)
        , n = i ? e.substr(0, e.length - i.length) : e;
      return t ? n + t : n
  }
  function P(e, t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
  }
  function E(e) {
      for (var t, i = e.points, n = 0, r = 0; r < i.numberOfItems; r++) {
          var o = i.getItem(r);
          r > 0 && (n += P(t, o)),
          t = o
      }
      return n
  }
  function A(e) {
      if (e.getTotalLength)
          return e.getTotalLength();
      switch (e.tagName.toLowerCase()) {
      case "circle":
          return o = e,
          2 * Math.PI * y(o, "r");
      case "rect":
          return 2 * y(r = e, "width") + 2 * y(r, "height");
      case "line":
          return P({
              x: y(n = e, "x1"),
              y: y(n, "y1")
          }, {
              x: y(n, "x2"),
              y: y(n, "y2")
          });
      case "polyline":
          return E(e);
      case "polygon":
          return i = (t = e).points,
          E(t) + P(i.getItem(i.numberOfItems - 1), i.getItem(0))
      }
      var t, i, n, r, o
  }
  function $(e, t) {
      var i = t || {}
        , n = i.el || function(e) {
          for (var t = e.parentNode; Z.svg(t) && Z.svg(t.parentNode); )
              t = t.parentNode;
          return t
      }(e)
        , r = n.getBoundingClientRect()
        , o = y(n, "viewBox")
        , s = r.width
        , a = r.height
        , l = i.viewBox || (o ? o.split(" ") : [0, 0, s, a]);
      return {
          el: n,
          viewBox: l,
          x: l[0] / 1,
          y: l[1] / 1,
          w: s / l[2],
          h: a / l[3]
      }
  }
  function O(e, t) {
      function i(i) {
          void 0 === i && (i = 0);
          var n = t + i >= 1 ? t + i : 0;
          return e.el.getPointAtLength(n)
      }
      var n = $(e.el, e.svg)
        , r = i()
        , o = i(-1)
        , s = i(1);
      switch (e.property) {
      case "x":
          return (r.x - n.x) * n.w;
      case "y":
          return (r.y - n.y) * n.h;
      case "angle":
          return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
      }
  }
  function M(e, t) {
      var i = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
        , n = C(Z.pth(e) ? e.totalLength : e, t) + "";
      return {
          original: n,
          numbers: n.match(i) ? n.match(i).map(Number) : [0],
          strings: Z.str(e) || t ? n.split(i) : []
      }
  }
  function D(e) {
      return l(e ? c(Z.arr(e) ? e.map(u) : u(e)) : [], function(e, t, i) {
          return i.indexOf(e) === t
      })
  }
  function j(e) {
      var t = D(e);
      return t.map(function(e, i) {
          return {
              target: e,
              id: i,
              total: t.length,
              transforms: {
                  list: w(e)
              }
          }
      })
  }
  function z(e, t) {
      var i = p(t);
      if (/^spring/.test(i.easing) && (i.duration = r(i.easing)),
      Z.arr(e)) {
          var n = e.length;
          2 !== n || Z.obj(e[0]) ? Z.fnc(t.duration) || (i.duration = t.duration / n) : e = {
              value: e
          }
      }
      var o = Z.arr(e) ? e : [e];
      return o.map(function(e, i) {
          var n = Z.obj(e) && !Z.pth(e) ? e : {
              value: e
          };
          return Z.und(n.delay) && (n.delay = i ? 0 : t.delay),
          Z.und(n.endDelay) && (n.endDelay = i === o.length - 1 ? t.endDelay : 0),
          n
      }).map(function(e) {
          return h(e, i)
      })
  }
  function N(e, t) {
      var i = []
        , n = t.keyframes;
      for (var r in n && (t = h(function(e) {
          for (var t = l(c(e.map(function(e) {
              return Object.keys(e)
          })), function(e) {
              return Z.key(e)
          }).reduce(function(e, t) {
              return e.indexOf(t) < 0 && e.push(t),
              e
          }, []), i = {}, n = function(n) {
              var r = t[n];
              i[r] = e.map(function(e) {
                  var t = {};
                  for (var i in e)
                      Z.key(i) ? i == r && (t.value = e[i]) : t[i] = e[i];
                  return t
              })
          }, r = 0; r < t.length; r++)
              n(r);
          return i
      }(n), t)),
      t)
          Z.key(r) && i.push({
              name: r,
              tweens: z(t[r], e)
          });
      return i
  }
  function R(e, t) {
      var i;
      return e.tweens.map(function(n) {
          var r = function(e, t) {
              var i = {};
              for (var n in e) {
                  var r = v(e[n], t);
                  Z.arr(r) && 1 === (r = r.map(function(e) {
                      return v(e, t)
                  })).length && (r = r[0]),
                  i[n] = r
              }
              return i.duration = parseFloat(i.duration),
              i.delay = parseFloat(i.delay),
              i
          }(n, t)
            , o = r.value
            , a = Z.arr(o) ? o[1] : o
            , l = g(a)
            , c = k(t.target, e.name, l, t)
            , u = i ? i.to.original : c
            , d = Z.arr(o) ? o[0] : u
            , p = g(d) || g(c)
            , f = l || p;
          return Z.und(a) && (a = u),
          r.from = M(d, f),
          r.to = M(S(a, d), f),
          r.start = i ? i.end : 0,
          r.end = r.start + r.delay + r.duration + r.endDelay,
          r.easing = s(r.easing, r.duration),
          r.isPath = Z.pth(o),
          r.isColor = Z.col(r.from.original),
          r.isColor && (r.round = 1),
          i = r,
          r
      })
  }
  function I(e, t) {
      j(e).forEach(function(e) {
          for (var i in t) {
              var n = v(t[i], e)
                , r = e.target
                , o = g(n)
                , s = k(r, i, o, e)
                , a = S(C(n, o || g(s)), s)
                , l = x(r, i);
              J[l](r, i, a, e.transforms, !0)
          }
      })
  }
  function L(e, t) {
      return l(c(e.map(function(e) {
          return t.map(function(t) {
              return function(e, t) {
                  var i = x(e.target, t.name);
                  if (i) {
                      var n = R(t, e)
                        , r = n[n.length - 1];
                      return {
                          type: i,
                          property: t.name,
                          animatable: e,
                          tweens: n,
                          duration: r.end,
                          delay: n[0].delay,
                          endDelay: r.endDelay
                      }
                  }
              }(e, t)
          })
      })), function(e) {
          return !Z.und(e)
      })
  }
  function F(e, t) {
      var i = e.length
        , n = function(e) {
          return e.timelineOffset ? e.timelineOffset : 0
      }
        , r = {};
      return r.duration = i ? Math.max.apply(Math, e.map(function(e) {
          return n(e) + e.duration
      })) : t.duration,
      r.delay = i ? Math.min.apply(Math, e.map(function(e) {
          return n(e) + e.delay
      })) : t.delay,
      r.endDelay = i ? r.duration - Math.max.apply(Math, e.map(function(e) {
          return n(e) + e.duration - e.endDelay
      })) : t.endDelay,
      r
  }
  function H(t) {
      function i(e) {
          var t = window.Promise && new Promise(function(e) {
              return C = e
          }
          );
          return e.finished = t,
          t
      }
      function n() {
          var e = P.direction;
          "alternate" !== e && (P.direction = "normal" !== e ? "normal" : "reverse"),
          P.reversed = !P.reversed,
          d.forEach(function(e) {
              return e.reversed = P.reversed
          })
      }
      function r(e) {
          return P.reversed ? P.duration - e : e
      }
      function o() {
          w = 0,
          T = r(P.currentTime) * (1 / H.speed)
      }
      function s(e, t) {
          t && t.seek(e - t.timelineOffset)
      }
      function a(t) {
          for (var i = 0, n = P.animations, r = n.length; r > i; ) {
              var o = n[i]
                , s = o.animatable
                , a = o.tweens
                , c = a.length - 1
                , u = a[c];
              c && (u = l(a, function(e) {
                  return t < e.end
              })[0] || u);
              for (var d = e(t - u.start - u.delay, 0, u.duration) / u.duration, p = isNaN(d) ? 1 : u.easing(d), f = u.to.strings, h = u.round, m = [], g = u.to.numbers.length, v = void 0, y = 0; g > y; y++) {
                  var b = void 0
                    , _ = u.to.numbers[y]
                    , x = u.from.numbers[y] || 0;
                  b = u.isPath ? O(u.value, p * _) : x + p * (_ - x),
                  h && (u.isColor && y > 2 || (b = Math.round(b * h) / h)),
                  m.push(b)
              }
              var w = f.length;
              if (w) {
                  v = f[0];
                  for (var T = 0; w > T; T++) {
                      f[T];
                      var k = f[T + 1]
                        , S = m[T];
                      isNaN(S) || (v += k ? S + k : S + " ")
                  }
              } else
                  v = m[0];
              J[o.type](s.target, o.property, v, s.transforms),
              o.currentValue = v,
              i++
          }
      }
      function c(e) {
          P[e] && !P.passThrough && P[e](P)
      }
      function u(t) {
          var o = P.duration
            , l = P.delay
            , u = o - P.endDelay
            , p = r(t);
          P.progress = e(p / o * 100, 0, 100),
          P.reversePlayback = p < P.currentTime,
          d && function(e) {
              if (P.reversePlayback)
                  for (var t = S; t--; )
                      s(e, d[t]);
              else
                  for (var i = 0; S > i; i++)
                      s(e, d[i])
          }(p),
          !P.began && P.currentTime > 0 && (P.began = !0,
          c("begin")),
          !P.loopBegan && P.currentTime > 0 && (P.loopBegan = !0,
          c("loopBegin")),
          l >= p && 0 !== P.currentTime && a(0),
          (p >= u && P.currentTime !== o || !o) && a(o),
          p > l && u > p ? (P.changeBegan || (P.changeBegan = !0,
          P.changeCompleted = !1,
          c("changeBegin")),
          c("change"),
          a(p)) : P.changeBegan && (P.changeCompleted = !0,
          P.changeBegan = !1,
          c("changeComplete")),
          P.currentTime = e(p, 0, o),
          P.began && c("update"),
          t >= o && (T = 0,
          P.remaining && !0 !== P.remaining && P.remaining--,
          P.remaining ? (w = k,
          c("loopComplete"),
          P.loopBegan = !1,
          "alternate" === P.direction && n()) : (P.paused = !0,
          P.completed || (P.completed = !0,
          c("loopComplete"),
          c("complete"),
          !P.passThrough && "Promise"in window && (C(),
          i(P)))))
      }
      void 0 === t && (t = {});
      var d, p, m, g, v, y, b, _, x, w = 0, T = 0, k = 0, S = 0, C = null, P = (m = f(U, p = t),
      g = f(Y, p),
      v = N(g, p),
      y = j(p.targets),
      b = L(y, v),
      _ = F(b, g),
      x = et,
      et++,
      h(m, {
          id: x,
          children: [],
          animatables: y,
          animations: b,
          duration: _.duration,
          delay: _.delay,
          endDelay: _.endDelay
      }));
      return i(P),
      P.reset = function() {
          var e = P.direction;
          P.passThrough = !1,
          P.currentTime = 0,
          P.progress = 0,
          P.paused = !0,
          P.began = !1,
          P.loopBegan = !1,
          P.changeBegan = !1,
          P.completed = !1,
          P.changeCompleted = !1,
          P.reversePlayback = !1,
          P.reversed = "reverse" === e,
          P.remaining = P.loop,
          d = P.children;
          for (var t = S = d.length; t--; )
              P.children[t].reset();
          (P.reversed && !0 !== P.loop || "alternate" === e && 1 === P.loop) && P.remaining++,
          a(P.reversed ? P.duration : 0)
      }
      ,
      P.set = function(e, t) {
          return I(e, t),
          P
      }
      ,
      P.tick = function(e) {
          k = e,
          w || (w = k),
          u((k + (T - w)) * H.speed)
      }
      ,
      P.seek = function(e) {
          u(r(e))
      }
      ,
      P.pause = function() {
          P.paused = !0,
          o()
      }
      ,
      P.play = function() {
          P.paused && (P.completed && P.reset(),
          P.paused = !1,
          tt.push(P),
          o(),
          X || nt())
      }
      ,
      P.reverse = function() {
          n(),
          P.completed = !P.reversed,
          o()
      }
      ,
      P.restart = function() {
          P.reset(),
          P.play()
      }
      ,
      P.reset(),
      P.autoplay && P.play(),
      P
  }
  function B(e, t) {
      for (var i = t.length; i--; )
          d(e, t[i].animatable.target) && t.splice(i, 1)
  }
  var q, W, X, U = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0
  }, Y = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0
  }, G = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], V = {
      CSS: {},
      springs: {}
  }, Z = {
      arr: function(e) {
          return Array.isArray(e)
      },
      obj: function(e) {
          return t(Object.prototype.toString.call(e), "Object")
      },
      pth: function(e) {
          return Z.obj(e) && e.hasOwnProperty("totalLength")
      },
      svg: function(e) {
          return e instanceof SVGElement
      },
      inp: function(e) {
          return e instanceof HTMLInputElement
      },
      dom: function(e) {
          return e.nodeType || Z.svg(e)
      },
      str: function(e) {
          return "string" == typeof e
      },
      fnc: function(e) {
          return "function" == typeof e
      },
      und: function(e) {
          return void 0 === e
      },
      hex: function(e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
      },
      rgb: function(e) {
          return /^rgb/.test(e)
      },
      hsl: function(e) {
          return /^hsl/.test(e)
      },
      col: function(e) {
          return Z.hex(e) || Z.rgb(e) || Z.hsl(e)
      },
      key: function(e) {
          return !U.hasOwnProperty(e) && !Y.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
      }
  }, Q = function() {
      function e(e, t) {
          return 1 - 3 * t + 3 * e
      }
      function t(e, t) {
          return 3 * t - 6 * e
      }
      function i(e) {
          return 3 * e
      }
      function n(n, r, o) {
          return ((e(r, o) * n + t(r, o)) * n + i(r)) * n
      }
      function r(n, r, o) {
          return 3 * e(r, o) * n * n + 2 * t(r, o) * n + i(r)
      }
      var o = 11
        , s = 1 / (o - 1);
      return function(e, t, i, a) {
          function l(t) {
              for (var a = 0, l = 1, u = o - 1; l !== u && c[l] <= t; ++l)
                  a += s;
              var d = a + (t - c[--l]) / (c[l + 1] - c[l]) * s
                , p = r(d, e, i);
              return p >= .001 ? function(e, t, i, o) {
                  for (var s = 0; 4 > s; ++s) {
                      var a = r(t, i, o);
                      if (0 === a)
                          return t;
                      t -= (n(t, i, o) - e) / a
                  }
                  return t
              }(t, d, e, i) : 0 === p ? d : function(e, t, i, r, o) {
                  for (var s, a, l = 0; (s = n(a = t + (i - t) / 2, r, o) - e) > 0 ? i = a : t = a,
                  Math.abs(s) > 1e-7 && ++l < 10; )
                      ;
                  return a
              }(t, a, a + s, e, i)
          }
          if (e >= 0 && 1 >= e && i >= 0 && 1 >= i) {
              var c = new Float32Array(o);
              if (e !== t || i !== a)
                  for (var u = 0; o > u; ++u)
                      c[u] = n(u * s, e, i);
              return function(r) {
                  return e === t && i === a ? r : 0 === r || 1 === r ? r : n(l(r), t, a)
              }
          }
      }
  }(), K = (q = {
      linear: function() {
          return function(e) {
              return e
          }
      }
  },
  W = {
      Sine: function() {
          return function(e) {
              return 1 - Math.cos(e * Math.PI / 2)
          }
      },
      Circ: function() {
          return function(e) {
              return 1 - Math.sqrt(1 - e * e)
          }
      },
      Back: function() {
          return function(e) {
              return e * e * (3 * e - 2)
          }
      },
      Bounce: function() {
          return function(e) {
              for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11; )
                  ;
              return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
          }
      },
      Elastic: function(t, i) {
          void 0 === t && (t = 1),
          void 0 === i && (i = .5);
          var n = e(t, 1, 10)
            , r = e(i, .1, 2);
          return function(e) {
              return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - r / (2 * Math.PI) * Math.asin(1 / n)) * Math.PI / r)
          }
      }
  },
  ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(e, t) {
      W[e] = function() {
          return function(e) {
              return Math.pow(e, t + 2)
          }
      }
  }),
  Object.keys(W).forEach(function(e) {
      var t = W[e];
      q["easeIn" + e] = t,
      q["easeOut" + e] = function(e, i) {
          return function(n) {
              return 1 - t(e, i)(1 - n)
          }
      }
      ,
      q["easeInOut" + e] = function(e, i) {
          return function(n) {
              return .5 > n ? t(e, i)(2 * n) / 2 : 1 - t(e, i)(-2 * n + 2) / 2
          }
      }
  }),
  q), J = {
      css: function(e, t, i) {
          return e.style[t] = i
      },
      attribute: function(e, t, i) {
          return e.setAttribute(t, i)
      },
      object: function(e, t, i) {
          return e[t] = i
      },
      transform: function(e, t, i, n, r) {
          if (n.list.set(t, i),
          t === n.last || r) {
              var o = "";
              n.list.forEach(function(e, t) {
                  o += t + "(" + e + ") "
              }),
              e.style.transform = o
          }
      }
  }, et = 0, tt = [], it = [], nt = function() {
      function e() {
          X = requestAnimationFrame(t)
      }
      function t(t) {
          var i = tt.length;
          if (i) {
              for (var n = 0; i > n; ) {
                  var r = tt[n];
                  if (r.paused) {
                      var o = tt.indexOf(r);
                      o > -1 && (tt.splice(o, 1),
                      i = tt.length)
                  } else
                      r.tick(t);
                  n++
              }
              e()
          } else
              X = cancelAnimationFrame(X)
      }
      return e
  }();
  return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
      document.hidden ? (tt.forEach(function(e) {
          return e.pause()
      }),
      it = tt.slice(0),
      H.running = tt = []) : it.forEach(function(e) {
          return e.play()
      })
  }),
  H.version = "3.2.0",
  H.speed = 1,
  H.running = tt,
  H.remove = function(e) {
      for (var t = D(e), i = tt.length; i--; ) {
          var n = tt[i]
            , r = n.animations
            , o = n.children;
          B(t, r);
          for (var s = o.length; s--; ) {
              var a = o[s]
                , l = a.animations;
              B(t, l),
              l.length || a.children.length || o.splice(s, 1)
          }
          r.length || o.length || n.pause()
      }
  }
  ,
  H.get = k,
  H.set = I,
  H.convertPx = b,
  H.path = function(e, t) {
      var i = Z.str(e) ? a(e)[0] : e
        , n = t || 100;
      return function(e) {
          return {
              property: e,
              el: i,
              svg: $(i),
              totalLength: A(i) * (n / 100)
          }
      }
  }
  ,
  H.setDashoffset = function(e) {
      var t = A(e);
      return e.setAttribute("stroke-dasharray", t),
      t
  }
  ,
  H.stagger = function(e, t) {
      void 0 === t && (t = {});
      var i = t.direction || "normal"
        , n = t.easing ? s(t.easing) : null
        , r = t.grid
        , o = t.axis
        , a = t.from || 0
        , l = "first" === a
        , c = "center" === a
        , u = "last" === a
        , d = Z.arr(e)
        , p = d ? parseFloat(e[0]) : parseFloat(e)
        , f = d ? parseFloat(e[1]) : 0
        , h = g(d ? e[1] : e) || 0
        , m = t.start || 0 + (d ? p : 0)
        , v = []
        , y = 0;
      return function(e, t, s) {
          if (l && (a = 0),
          c && (a = (s - 1) / 2),
          u && (a = s - 1),
          !v.length) {
              for (var g = 0; s > g; g++) {
                  if (r) {
                      var b = c ? (r[0] - 1) / 2 : a % r[0]
                        , _ = c ? (r[1] - 1) / 2 : Math.floor(a / r[0])
                        , x = b - g % r[0]
                        , w = _ - Math.floor(g / r[0])
                        , T = Math.sqrt(x * x + w * w);
                      "x" === o && (T = -x),
                      "y" === o && (T = -w),
                      v.push(T)
                  } else
                      v.push(Math.abs(a - g));
                  y = Math.max.apply(Math, v)
              }
              n && (v = v.map(function(e) {
                  return n(e / y) * y
              })),
              "reverse" === i && (v = v.map(function(e) {
                  return o ? 0 > e ? -1 * e : -e : Math.abs(y - e)
              }))
          }
          return m + (d ? (f - p) / y : p) * (Math.round(100 * v[t]) / 100) + h
      }
  }
  ,
  H.timeline = function(e) {
      void 0 === e && (e = {});
      var t = H(e);
      return t.duration = 0,
      t.add = function(i, n) {
          function r(e) {
              e.passThrough = !0
          }
          var o = tt.indexOf(t)
            , s = t.children;
          o > -1 && tt.splice(o, 1);
          for (var a = 0; a < s.length; a++)
              r(s[a]);
          var l = h(i, f(Y, e));
          l.targets = l.targets || e.targets;
          var c = t.duration;
          l.autoplay = !1,
          l.direction = t.direction,
          l.timelineOffset = Z.und(n) ? c : S(n, c),
          r(t),
          t.seek(l.timelineOffset);
          var u = H(l);
          r(u),
          s.push(u);
          var d = F(s, e);
          return t.delay = d.delay,
          t.endDelay = d.endDelay,
          t.duration = d.duration,
          t.seek(0),
          t.reset(),
          t.autoplay && t.play(),
          t
      }
      ,
      t
  }
  ,
  H.easing = s,
  H.penner = K,
  H.random = function(e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e
  }
  ,
  H
}),
new function() {
  function e() {
      var e = document.getElementById(n);
      if (e) {
          {
              document.getElementsByTagName("body")[0].clientHeight
          }
          e.style.top = "0px";
          var t = e.offsetTop
            , i = e.offsetHeight;
          if (window.innerHeight)
              var r = window.innerHeight;
          else if (document.documentElement && 0 != document.documentElement.clientHeight)
              var r = document.documentElement.clientHeight;
          r > t + i && (e.style.position = "relative",
          e.style.top = r - i - t + "px")
      }
  }
  function t(e) {
      function t() {
          r != i.offsetHeight && (e(),
          r = i.offsetHeight)
      }
      var i = document.createElement("div")
        , n = document.createTextNode("S");
      i.appendChild(n),
      i.style.visibility = "hidden",
      i.style.position = "absolute",
      i.style.top = "0",
      document.body.appendChild(i);
      var r = i.offsetHeight;
      setInterval(t, 1e3)
  }
  function i(e, t, i) {
      try {
          e.addEventListener(t, i, !1)
      } catch (n) {
          e.attachEvent("on" + t, i)
      }
  }
  var n = "footer";
  i(window, "load", e),
  i(window, "load", function() {
      t(e)
  }),
  i(window, "resize", e)
}
,
function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  function t() {
      var t, i, n = {
          height: c.innerHeight,
          width: c.innerWidth
      };
      return n.height || (t = l.compatMode,
      (t || !e.support.boxModel) && (i = "CSS1Compat" === t ? u : l.body,
      n = {
          height: i.clientHeight,
          width: i.clientWidth
      })),
      n
  }
  function i() {
      return {
          top: c.pageYOffset || u.scrollTop || l.body.scrollTop,
          left: c.pageXOffset || u.scrollLeft || l.body.scrollLeft
      }
  }
  function n() {
      if (a.length) {
          var n = 0
            , s = e.map(a, function(e) {
              var t = e.data.selector
                , i = e.$element;
              return t ? i.find(t) : i
          });
          for (r = r || t(),
          o = o || i(); n < a.length; n++)
              if (e.contains(u, s[n][0])) {
                  var l = e(s[n])
                    , c = {
                      height: l[0].offsetHeight,
                      width: l[0].offsetWidth
                  }
                    , d = l.offset()
                    , p = l.data("inview");
                  if (!o || !r)
                      return;
                  d.top + c.height > o.top && d.top < o.top + r.height && d.left + c.width > o.left && d.left < o.left + r.width ? p || l.data("inview", !0).trigger("inview", [!0]) : p && l.data("inview", !1).trigger("inview", [!1])
              }
      }
  }
  var r, o, s, a = [], l = document, c = window, u = l.documentElement;
  e.event.special.inview = {
      add: function(t) {
          a.push({
              data: t,
              $element: e(this),
              element: this
          }),
          !s && a.length && (s = setInterval(n, 250))
      },
      remove: function(e) {
          for (var t = 0; t < a.length; t++) {
              var i = a[t];
              if (i.element === this && i.data.guid === e.guid) {
                  a.splice(t, 1);
                  break
              }
          }
          a.length || (clearInterval(s),
          s = null)
      }
  },
  e(c).on("scroll resize scrollstop", function() {
      r = o = null
  }),
  !u.addEventListener && u.attachEvent && u.attachEvent("onfocusin", function() {
      o = null
  })
}),
function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function(e) {
  var t, i, n, r, o, s, a = "Close", l = "BeforeClose", c = "AfterClose", u = "BeforeAppend", d = "MarkupParse", p = "Open", f = "Change", h = "mfp", m = "." + h, g = "mfp-ready", v = "mfp-removing", y = "mfp-prevent-close", b = function() {}, _ = !!window.jQuery, x = e(window), w = function(e, i) {
      t.ev.on(h + e + m, i)
  }, T = function(t, i, n, r) {
      var o = document.createElement("div");
      return o.className = "mfp-" + t,
      n && (o.innerHTML = n),
      r ? i && i.appendChild(o) : (o = e(o),
      i && o.appendTo(i)),
      o
  }, k = function(i, n) {
      t.ev.triggerHandler(h + i, n),
      t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
      t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
  }, S = function(i) {
      return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
      s = i),
      t.currTemplate.closeBtn
  }, C = function() {
      e.magnificPopup.instance || (t = new b,
      t.init(),
      e.magnificPopup.instance = t)
  }, P = function() {
      var e = document.createElement("p").style
        , t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition)
          return !0;
      for (; t.length; )
          if (t.pop() + "Transition"in e)
              return !0;
      return !1
  };
  b.prototype = {
      constructor: b,
      init: function() {
          var i = navigator.appVersion;
          t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
          t.isAndroid = /android/gi.test(i),
          t.isIOS = /iphone|ipad|ipod/gi.test(i),
          t.supportsTransition = P(),
          t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
          n = e(document),
          t.popupsCache = {}
      },
      open: function(i) {
          var r;
          if (i.isObj === !1) {
              t.items = i.items.toArray(),
              t.index = 0;
              var s, a = i.items;
              for (r = 0; r < a.length; r++)
                  if (s = a[r],
                  s.parsed && (s = s.el[0]),
                  s === i.el[0]) {
                      t.index = r;
                      break
                  }
          } else
              t.items = e.isArray(i.items) ? i.items : [i.items],
              t.index = i.index || 0;
          if (t.isOpen)
              return t.updateItemHTML(),
              void 0;
          t.types = [],
          o = "",
          t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n,
          i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
          t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {},
          t.st = e.extend(!0, {}, e.magnificPopup.defaults, i),
          t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
          t.st.modal && (t.st.closeOnContentClick = !1,
          t.st.closeOnBgClick = !1,
          t.st.showCloseBtn = !1,
          t.st.enableEscapeKey = !1),
          t.bgOverlay || (t.bgOverlay = T("bg").on("click" + m, function() {
              t.close()
          }),
          t.wrap = T("wrap").attr("tabindex", -1).on("click" + m, function(e) {
              t._checkIfClose(e.target) && t.close()
          }),
          t.container = T("container", t.wrap)),
          t.contentContainer = T("content"),
          t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;
          for (r = 0; r < l.length; r++) {
              var c = l[r];
              c = c.charAt(0).toUpperCase() + c.slice(1),
              t["init" + c].call(t)
          }
          k("BeforeOpen"),
          t.st.showCloseBtn && (t.st.closeBtnInside ? (w(d, function(e, t, i, n) {
              i.close_replaceWith = S(n.type)
          }),
          o += " mfp-close-btn-in") : t.wrap.append(S())),
          t.st.alignTop && (o += " mfp-align-top"),
          t.fixedContentPos ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY
          }) : t.wrap.css({
              top: x.scrollTop(),
              position: "absolute"
          }),
          (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
              height: n.height(),
              position: "absolute"
          }),
          t.st.enableEscapeKey && n.on("keyup" + m, function(e) {
              27 === e.keyCode && t.close()
          }),
          x.on("resize" + m, function() {
              t.updateSize()
          }),
          t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
          o && t.wrap.addClass(o);
          var u = t.wH = x.height()
            , f = {};
          if (t.fixedContentPos && t._hasScrollBar(u)) {
              var h = t._getScrollbarSize();
              h && (f.marginRight = h)
          }
          t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
          var v = t.st.mainClass;
          return t.isIE7 && (v += " mfp-ie7"),
          v && t._addClassToMFP(v),
          t.updateItemHTML(),
          k("BuildControls"),
          e("html").css(f),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          t._lastFocusedEl = document.activeElement,
          setTimeout(function() {
              t.content ? (t._addClassToMFP(g),
              t._setFocus()) : t.bgOverlay.addClass(g),
              n.on("focusin" + m, t._onFocusIn)
          }, 16),
          t.isOpen = !0,
          t.updateSize(u),
          k(p),
          i
      },
      close: function() {
          t.isOpen && (k(l),
          t.isOpen = !1,
          t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v),
          setTimeout(function() {
              t._close()
          }, t.st.removalDelay)) : t._close())
      },
      _close: function() {
          k(a);
          var i = v + " " + g + " ";
          if (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (i += t.st.mainClass + " "),
          t._removeClassFromMFP(i),
          t.fixedContentPos) {
              var r = {
                  marginRight: ""
              };
              t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "",
              e("html").css(r)
          }
          n.off("keyup" + m + " focusin" + m),
          t.ev.off(m),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          t.currItem = null,
          t.content = null,
          t.currTemplate = null,
          t.prevHeight = 0,
          k(c)
      },
      updateSize: function(e) {
          if (t.isIOS) {
              var i = document.documentElement.clientWidth / window.innerWidth
                , n = window.innerHeight * i;
              t.wrap.css("height", n),
              t.wH = n
          } else
              t.wH = e || x.height();
          t.fixedContentPos || t.wrap.css("height", t.wH),
          k("Resize")
      },
      updateItemHTML: function() {
          var i = t.items[t.index];
          t.contentContainer.detach(),
          t.content && t.content.detach(),
          i.parsed || (i = t.parseEl(t.index));
          var n = i.type;
          if (k("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
          t.currItem = i,
          !t.currTemplate[n]) {
              var o = t.st[n] ? t.st[n].markup : !1;
              k("FirstMarkupParse", o),
              t.currTemplate[n] = o ? e(o) : !0
          }
          r && r !== i.type && t.container.removeClass("mfp-" + r + "-holder");
          var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
          t.appendContent(s, n),
          i.preloaded = !0,
          k(f, i),
          r = i.type,
          t.container.prepend(t.contentContainer),
          k("AfterChange")
      },
      appendContent: function(e, i) {
          t.content = e,
          e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "",
          k(u),
          t.container.addClass("mfp-" + i + "-holder"),
          t.contentContainer.append(t.content)
      },
      parseEl: function(i) {
          var n, r = t.items[i];
          if (r.tagName ? r = {
              el: e(r)
          } : (n = r.type,
          r = {
              data: r,
              src: r.src
          }),
          r.el) {
              for (var o = t.types, s = 0; s < o.length; s++)
                  if (r.el.hasClass("mfp-" + o[s])) {
                      n = o[s];
                      break
                  }
              r.src = r.el.attr("data-mfp-src"),
              r.src || (r.src = r.el.attr("href"))
          }
          return r.type = n || t.st.type || "inline",
          r.index = i,
          r.parsed = !0,
          t.items[i] = r,
          k("ElementParse", r),
          t.items[i]
      },
      addGroup: function(e, i) {
          var n = function(n) {
              n.mfpEl = this,
              t._openClick(n, e, i)
          };
          i || (i = {});
          var r = "click.magnificPopup";
          i.mainEl = e,
          i.items ? (i.isObj = !0,
          e.off(r).on(r, n)) : (i.isObj = !1,
          i.delegate ? e.off(r).on(r, i.delegate, n) : (i.items = e,
          e.off(r).on(r, n)))
      },
      _openClick: function(i, n, r) {
          var o = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick;
          if (o || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
              var s = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
              if (s)
                  if (e.isFunction(s)) {
                      if (!s.call(t))
                          return !0
                  } else if (x.width() < s)
                      return !0;
              i.type && (i.preventDefault(),
              t.isOpen && i.stopPropagation()),
              r.el = e(i.mfpEl),
              r.delegate && (r.items = n.find(r.delegate)),
              t.open(r)
          }
      },
      updateStatus: function(e, n) {
          if (t.preloader) {
              i !== e && t.container.removeClass("mfp-s-" + i),
              n || "loading" !== e || (n = t.st.tLoading);
              var r = {
                  status: e,
                  text: n
              };
              k("UpdateStatus", r),
              e = r.status,
              n = r.text,
              t.preloader.html(n),
              t.preloader.find("a").on("click", function(e) {
                  e.stopImmediatePropagation()
              }),
              t.container.addClass("mfp-s-" + e),
              i = e
          }
      },
      _checkIfClose: function(i) {
          if (!e(i).hasClass(y)) {
              var n = t.st.closeOnContentClick
                , r = t.st.closeOnBgClick;
              if (n && r)
                  return !0;
              if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])
                  return !0;
              if (i === t.content[0] || e.contains(t.content[0], i)) {
                  if (n)
                      return !0
              } else if (r && e.contains(document, i))
                  return !0;
              return !1
          }
      },
      _addClassToMFP: function(e) {
          t.bgOverlay.addClass(e),
          t.wrap.addClass(e)
      },
      _removeClassFromMFP: function(e) {
          this.bgOverlay.removeClass(e),
          t.wrap.removeClass(e)
      },
      _hasScrollBar: function(e) {
          return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || x.height())
      },
      _setFocus: function() {
          (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
      },
      _onFocusIn: function(i) {
          return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(),
          !1)
      },
      _parseMarkup: function(t, i, n) {
          var r;
          n.data && (i = e.extend(n.data, i)),
          k(d, [t, i, n]),
          e.each(i, function(i, n) {
              if (void 0 === n || n === !1)
                  return !0;
              if (r = i.split("_"),
              r.length > 1) {
                  var o = t.find(m + "-" + r[0]);
                  if (o.length > 0) {
                      var s = r[1];
                      "replaceWith" === s ? o[0] !== n[0] && o.replaceWith(n) : "img" === s ? o.is("img") ? o.attr("src", n) : o.replaceWith(e("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(r[1], n)
                  }
              } else
                  t.find(m + "-" + i).html(n)
          })
      },
      _getScrollbarSize: function() {
          if (void 0 === t.scrollbarSize) {
              var e = document.createElement("div");
              e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
              document.body.appendChild(e),
              t.scrollbarSize = e.offsetWidth - e.clientWidth,
              document.body.removeChild(e)
          }
          return t.scrollbarSize
      }
  },
  e.magnificPopup = {
      instance: null,
      proto: b.prototype,
      modules: [],
      open: function(t, i) {
          return C(),
          t = t ? e.extend(!0, {}, t) : {},
          t.isObj = !0,
          t.index = i || 0,
          this.instance.open(t)
      },
      close: function() {
          return e.magnificPopup.instance && e.magnificPopup.instance.close()
      },
      registerModule: function(t, i) {
          i.options && (e.magnificPopup.defaults[t] = i.options),
          e.extend(this.proto, i.proto),
          this.modules.push(t)
      },
      defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0
      }
  },
  e.fn.magnificPopup = function(i) {
      C();
      var n = e(this);
      if ("string" == typeof i)
          if ("open" === i) {
              var r, o = _ ? n.data("magnificPopup") : n[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
              o.items ? r = o.items[s] : (r = n,
              o.delegate && (r = r.find(o.delegate)),
              r = r.eq(s)),
              t._openClick({
                  mfpEl: r
              }, n, o)
          } else
              t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
      else
          i = e.extend(!0, {}, i),
          _ ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
          t.addGroup(n, i);
      return n
  }
  ;
  var E, A, $, O = "inline", M = function() {
      $ && (A.after($.addClass(E)).detach(),
      $ = null)
  };
  e.magnificPopup.registerModule(O, {
      options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found"
      },
      proto: {
          initInline: function() {
              t.types.push(O),
              w(a + "." + O, function() {
                  M()
              })
          },
          getInline: function(i, n) {
              if (M(),
              i.src) {
                  var r = t.st.inline
                    , o = e(i.src);
                  if (o.length) {
                      var s = o[0].parentNode;
                      s && s.tagName && (A || (E = r.hiddenClass,
                      A = T(E),
                      E = "mfp-" + E),
                      $ = o.after(A).detach().removeClass(E)),
                      t.updateStatus("ready")
                  } else
                      t.updateStatus("error", r.tNotFound),
                      o = e("<div>");
                  return i.inlineElement = o,
                  o
              }
              return t.updateStatus("ready"),
              t._parseMarkup(n, {}, i),
              n
          }
      }
  });
  var D, j = "ajax", z = function() {
      D && e(document.body).removeClass(D)
  }, N = function() {
      z(),
      t.req && t.req.abort()
  };
  e.magnificPopup.registerModule(j, {
      options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.'
      },
      proto: {
          initAjax: function() {
              t.types.push(j),
              D = t.st.ajax.cursor,
              w(a + "." + j, N),
              w("BeforeChange." + j, N)
          },
          getAjax: function(i) {
              D && e(document.body).addClass(D),
              t.updateStatus("loading");
              var n = e.extend({
                  url: i.src,
                  success: function(n, r, o) {
                      var s = {
                          data: n,
                          xhr: o
                      };
                      k("ParseAjax", s),
                      t.appendContent(e(s.data), j),
                      i.finished = !0,
                      z(),
                      t._setFocus(),
                      setTimeout(function() {
                          t.wrap.addClass(g)
                      }, 16),
                      t.updateStatus("ready"),
                      k("AjaxContentAdded")
                  },
                  error: function() {
                      z(),
                      i.finished = i.loadError = !0,
                      t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                  }
              }, t.st.ajax.settings);
              return t.req = e.ajax(n),
              ""
          }
      }
  });
  var R, I = function(i) {
      if (i.data && void 0 !== i.data.title)
          return i.data.title;
      var n = t.st.image.titleSrc;
      if (n) {
          if (e.isFunction(n))
              return n.call(t, i);
          if (i.el)
              return i.el.attr(n) || ""
      }
      return ""
  };
  e.magnificPopup.registerModule("image", {
      options: {
          markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: "mfp-zoom-out-cur",
          titleSrc: "title",
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.'
      },
      proto: {
          initImage: function() {
              var i = t.st.image
                , n = ".image";
              t.types.push("image"),
              w(p + n, function() {
                  "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
              }),
              w(a + n, function() {
                  i.cursor && e(document.body).removeClass(i.cursor),
                  x.off("resize" + m)
              }),
              w("Resize" + n, t.resizeImage),
              t.isLowIE && w("AfterChange", t.resizeImage)
          },
          resizeImage: function() {
              var e = t.currItem;
              if (e && e.img && t.st.image.verticalFit) {
                  var i = 0;
                  t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                  e.img.css("max-height", t.wH - i)
              }
          },
          _onImageHasSize: function(e) {
              e.img && (e.hasSize = !0,
              R && clearInterval(R),
              e.isCheckingImgSize = !1,
              k("ImageHasSize", e),
              e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
              e.imgHidden = !1))
          },
          findImageSize: function(e) {
              var i = 0
                , n = e.img[0]
                , r = function(o) {
                  R && clearInterval(R),
                  R = setInterval(function() {
                      return n.naturalWidth > 0 ? (t._onImageHasSize(e),
                      void 0) : (i > 200 && clearInterval(R),
                      i++,
                      3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500),
                      void 0)
                  }, o)
              };
              r(1)
          },
          getImage: function(i, n) {
              var r = 0
                , o = function() {
                  i && (i.img[0].complete ? (i.img.off(".mfploader"),
                  i === t.currItem && (t._onImageHasSize(i),
                  t.updateStatus("ready")),
                  i.hasSize = !0,
                  i.loaded = !0,
                  k("ImageLoadComplete")) : (r++,
                  200 > r ? setTimeout(o, 100) : s()))
              }
                , s = function() {
                  i && (i.img.off(".mfploader"),
                  i === t.currItem && (t._onImageHasSize(i),
                  t.updateStatus("error", a.tError.replace("%url%", i.src))),
                  i.hasSize = !0,
                  i.loaded = !0,
                  i.loadError = !0)
              }
                , a = t.st.image
                , l = n.find(".mfp-img");
              if (l.length) {
                  var c = document.createElement("img");
                  c.className = "mfp-img",
                  i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                  i.img = e(c).on("load.mfploader", o).on("error.mfploader", s),
                  c.src = i.src,
                  l.is("img") && (i.img = i.img.clone()),
                  c = i.img[0],
                  c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
              }
              return t._parseMarkup(n, {
                  title: I(i),
                  img_replaceWith: i.img
              }, i),
              t.resizeImage(),
              i.hasSize ? (R && clearInterval(R),
              i.loadError ? (n.addClass("mfp-loading"),
              t.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"),
              t.updateStatus("ready")),
              n) : (t.updateStatus("loading"),
              i.loading = !0,
              i.hasSize || (i.imgHidden = !0,
              n.addClass("mfp-loading"),
              t.findImageSize(i)),
              n)
          }
      }
  });
  var L, F = function() {
      return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform),
      L
  };
  e.magnificPopup.registerModule("zoom", {
      options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function(e) {
              return e.is("img") ? e : e.find("img")
          }
      },
      proto: {
          initZoom: function() {
              var e, i = t.st.zoom, n = ".zoom";
              if (i.enabled && t.supportsTransition) {
                  var r, o, s = i.duration, c = function(e) {
                      var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                        , n = "all " + i.duration / 1e3 + "s " + i.easing
                        , r = {
                          position: "fixed",
                          zIndex: 9999,
                          left: 0,
                          top: 0,
                          "-webkit-backface-visibility": "hidden"
                      }
                        , o = "transition";
                      return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = n,
                      t.css(r),
                      t
                  }, u = function() {
                      t.content.css("visibility", "visible")
                  };
                  w("BuildControls" + n, function() {
                      if (t._allowZoom()) {
                          if (clearTimeout(r),
                          t.content.css("visibility", "hidden"),
                          e = t._getItemToZoom(),
                          !e)
                              return u(),
                              void 0;
                          o = c(e),
                          o.css(t._getOffset()),
                          t.wrap.append(o),
                          r = setTimeout(function() {
                              o.css(t._getOffset(!0)),
                              r = setTimeout(function() {
                                  u(),
                                  setTimeout(function() {
                                      o.remove(),
                                      e = o = null,
                                      k("ZoomAnimationEnded")
                                  }, 16)
                              }, s)
                          }, 16)
                      }
                  }),
                  w(l + n, function() {
                      if (t._allowZoom()) {
                          if (clearTimeout(r),
                          t.st.removalDelay = s,
                          !e) {
                              if (e = t._getItemToZoom(),
                              !e)
                                  return;
                              o = c(e)
                          }
                          o.css(t._getOffset(!0)),
                          t.wrap.append(o),
                          t.content.css("visibility", "hidden"),
                          setTimeout(function() {
                              o.css(t._getOffset())
                          }, 16)
                      }
                  }),
                  w(a + n, function() {
                      t._allowZoom() && (u(),
                      o && o.remove(),
                      e = null)
                  })
              }
          },
          _allowZoom: function() {
              return "image" === t.currItem.type
          },
          _getItemToZoom: function() {
              return t.currItem.hasSize ? t.currItem.img : !1
          },
          _getOffset: function(i) {
              var n;
              n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
              var r = n.offset()
                , o = parseInt(n.css("padding-top"), 10)
                , s = parseInt(n.css("padding-bottom"), 10);
              r.top -= e(window).scrollTop() - o;
              var a = {
                  width: n.width(),
                  height: (_ ? n.innerHeight() : n[0].offsetHeight) - s - o
              };
              return F() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left,
              a.top = r.top),
              a
          }
      }
  });
  var H = "iframe"
    , B = "//about:blank"
    , q = function(e) {
      if (t.currTemplate[H]) {
          var i = t.currTemplate[H].find("iframe");
          i.length && (e || (i[0].src = B),
          t.isIE8 && i.css("display", e ? "block" : "none"))
      }
  };
  e.magnificPopup.registerModule(H, {
      options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
              youtube: {
                  index: "youtube.com",
                  id: "v=",
                  src: "//www.youtube.com/embed/%id%?autoplay=1"
              },
              vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1"
              },
              gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed"
              }
          }
      },
      proto: {
          initIframe: function() {
              t.types.push(H),
              w("BeforeChange", function(e, t, i) {
                  t !== i && (t === H ? q() : i === H && q(!0))
              }),
              w(a + "." + H, function() {
                  q()
              })
          },
          getIframe: function(i, n) {
              var r = i.src
                , o = t.st.iframe;
              e.each(o.patterns, function() {
                  return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)),
                  r = this.src.replace("%id%", r),
                  !1) : void 0
              });
              var s = {};
              return o.srcAction && (s[o.srcAction] = r),
              t._parseMarkup(n, s, i),
              t.updateStatus("ready"),
              n
          }
      }
  });
  var W = function(e) {
      var i = t.items.length;
      return e > i - 1 ? e - i : 0 > e ? i + e : e
  }
    , X = function(e, t, i) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
  };
  e.magnificPopup.registerModule("gallery", {
      options: {
          enabled: !1,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%"
      },
      proto: {
          initGallery: function() {
              var i = t.st.gallery
                , r = ".mfp-gallery";
              return t.direction = !0,
              i && i.enabled ? (o += " mfp-gallery",
              w(p + r, function() {
                  i.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                      return t.items.length > 1 ? (t.next(),
                      !1) : void 0
                  }),
                  n.on("keydown" + r, function(e) {
                      37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                  })
              }),
              w("UpdateStatus" + r, function(e, i) {
                  i.text && (i.text = X(i.text, t.currItem.index, t.items.length))
              }),
              w(d + r, function(e, n, r, o) {
                  var s = t.items.length;
                  r.counter = s > 1 ? X(i.tCounter, o.index, s) : ""
              }),
              w("BuildControls" + r, function() {
                  if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                      var n = i.arrowMarkup
                        , r = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y)
                        , o = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                      r.click(function() {
                          t.prev()
                      }),
                      o.click(function() {
                          t.next()
                      }),
                      t.container.append(r.add(o))
                  }
              }),
              w(f + r, function() {
                  t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  t._preloadTimeout = setTimeout(function() {
                      t.preloadNearbyImages(),
                      t._preloadTimeout = null
                  }, 16)
              }),
              w(a + r, function() {
                  n.off(r),
                  t.wrap.off("click" + r),
                  t.arrowRight = t.arrowLeft = null
              }),
              void 0) : !1
          },
          next: function() {
              t.direction = !0,
              t.index = W(t.index + 1),
              t.updateItemHTML()
          },
          prev: function() {
              t.direction = !1,
              t.index = W(t.index - 1),
              t.updateItemHTML()
          },
          goTo: function(e) {
              t.direction = e >= t.index,
              t.index = e,
              t.updateItemHTML()
          },
          preloadNearbyImages: function() {
              var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), r = Math.min(i[1], t.items.length);
              for (e = 1; e <= (t.direction ? r : n); e++)
                  t._preloadItem(t.index + e);
              for (e = 1; e <= (t.direction ? n : r); e++)
                  t._preloadItem(t.index - e)
          },
          _preloadItem: function(i) {
              if (i = W(i),
              !t.items[i].preloaded) {
                  var n = t.items[i];
                  n.parsed || (n = t.parseEl(i)),
                  k("LazyLoad", n),
                  "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                      n.hasSize = !0
                  }).on("error.mfploader", function() {
                      n.hasSize = !0,
                      n.loadError = !0,
                      k("LazyLoadError", n)
                  }).attr("src", n.src)),
                  n.preloaded = !0
              }
          }
      }
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
      options: {
          replaceSrc: function(e) {
              return e.src.replace(/\.\w+$/, function(e) {
                  return "@2x" + e
              })
          },
          ratio: 1
      },
      proto: {
          initRetina: function() {
              if (window.devicePixelRatio > 1) {
                  var e = t.st.retina
                    , i = e.ratio;
                  i = isNaN(i) ? i() : i,
                  i > 1 && (w("ImageHasSize." + U, function(e, t) {
                      t.img.css({
                          "max-width": t.img[0].naturalWidth / i,
                          width: "100%"
                      })
                  }),
                  w("ElementParse." + U, function(t, n) {
                      n.src = e.replaceSrc(n, i)
                  }))
              }
          }
      }
  }),
  C()
}),
function(e, t) {
  function i() {
      var i = t(e, e.document, Date);
      e.lazySizes = i,
      "object" == typeof module && module.exports && (module.exports = i)
  }
  e.addEventListener ? e.addEventListener("load", i, !1) : e.attachEvent ? e.attachEvent("onload", i) : e.onload = i
}("undefined" != typeof window ? window : {}, function(e, t, i) {
  "use strict";
  var n, r;
  if (function() {
      var t, i = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          fastLoadedClass: "ls-is-cached",
          iframeLoadMode: 0,
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: .8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125
      };
      r = e.lazySizesConfig || e.lazysizesConfig || {};
      for (t in i)
          t in r || (r[t] = i[t])
  }(),
  !t || !t.getElementsByClassName)
      return {
          init: function() {},
          cfg: r,
          noSupport: !0
      };
  var o = t.documentElement
    , s = e.HTMLPictureElement
    , a = "addEventListener"
    , l = "getAttribute"
    , c = e[a].bind(e)
    , u = e.setTimeout
    , d = e.requestAnimationFrame || u
    , p = e.requestIdleCallback
    , f = /^picture$/i
    , h = ["load", "error", "lazyincluded", "_lazyloaded"]
    , m = {}
    , g = Array.prototype.forEach
    , v = function(e, t) {
      return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
      m[t].test(e[l]("class") || "") && m[t]
  }
    , y = function(e, t) {
      v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
  }
    , b = function(e, t) {
      var i;
      (i = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(i, " "))
  }
    , _ = function(e, t, i) {
      var n = i ? a : "removeEventListener";
      i && _(e, t),
      h.forEach(function(i) {
          e[n](i, t)
      })
  }
    , x = function(e, i, r, o, s) {
      var a = t.createEvent("Event");
      return r || (r = {}),
      r.instance = n,
      a.initEvent(i, !o, !s),
      a.detail = r,
      e.dispatchEvent(a),
      a
  }
    , w = function(t, i) {
      var n;
      !s && (n = e.picturefill || r.pf) ? (i && i.src && !t[l]("srcset") && t.setAttribute("srcset", i.src),
      n({
          reevaluate: !0,
          elements: [t]
      })) : i && i.src && (t.src = i.src)
  }
    , T = function(e, t) {
      return (getComputedStyle(e, null) || {})[t]
  }
    , k = function(e, t, i) {
      for (i = i || e.offsetWidth; i < r.minSize && t && !e._lazysizesWidth; )
          i = t.offsetWidth,
          t = t.parentNode;
      return i
  }
    , S = function() {
      var e, i, n = [], r = [], o = n, s = function() {
          var t = o;
          for (o = n.length ? r : n,
          e = !0,
          i = !1; t.length; )
              t.shift()();
          e = !1
      }, a = function(n, r) {
          e && !r ? n.apply(this, arguments) : (o.push(n),
          i || (i = !0,
          (t.hidden ? u : d)(s)))
      };
      return a._lsFlush = s,
      a
  }()
    , C = function(e, t) {
      return t ? function() {
          S(e)
      }
      : function() {
          var t = this
            , i = arguments;
          S(function() {
              e.apply(t, i)
          })
      }
  }
    , P = function(e) {
      var t, n = 0, o = r.throttleDelay, s = r.ricTimeout, a = function() {
          t = !1,
          n = i.now(),
          e()
      }, l = p && s > 49 ? function() {
          p(a, {
              timeout: s
          }),
          s !== r.ricTimeout && (s = r.ricTimeout)
      }
      : C(function() {
          u(a)
      }, !0);
      return function(e) {
          var r;
          (e = e === !0) && (s = 33),
          t || (t = !0,
          r = o - (i.now() - n),
          0 > r && (r = 0),
          e || 9 > r ? l() : u(l, r))
      }
  }
    , E = function(e) {
      var t, n, r = 99, o = function() {
          t = null,
          e()
      }, s = function() {
          var e = i.now() - n;
          r > e ? u(s, r - e) : (p || o)(o)
      };
      return function() {
          n = i.now(),
          t || (t = u(s, r))
      }
  }
    , A = function() {
      var s, p, h, m, k, A, O, M, D, j, z, N, R = /^img$/i, I = /^iframe$/i, L = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent), F = 0, H = 0, B = 0, q = -1, W = function(e) {
          B--,
          (!e || 0 > B || !e.target) && (B = 0)
      }, X = function(e) {
          return null == N && (N = "hidden" == T(t.body, "visibility")),
          N || !("hidden" == T(e.parentNode, "visibility") && "hidden" == T(e, "visibility"))
      }, U = function(e, i) {
          var n, r = e, s = X(e);
          for (M -= i,
          z += i,
          D -= i,
          j += i; s && (r = r.offsetParent) && r != t.body && r != o; )
              s = (T(r, "opacity") || 1) > 0,
              s && "visible" != T(r, "overflow") && (n = r.getBoundingClientRect(),
              s = j > n.left && D < n.right && z > n.top - 1 && M < n.bottom + 1);
          return s
      }, Y = function() {
          var e, i, a, c, u, d, f, h, g, v, y, b, _ = n.elements;
          if ((m = r.loadMode) && 8 > B && (e = _.length)) {
              for (i = 0,
              q++; e > i; i++)
                  if (_[i] && !_[i]._lazyRace)
                      if (!L || n.prematureUnveil && n.prematureUnveil(_[i]))
                          tt(_[i]);
                      else if ((h = _[i][l]("data-expand")) && (d = 1 * h) || (d = H),
                      v || (v = !r.expand || r.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : r.expand,
                      n._defEx = v,
                      y = v * r.expFactor,
                      b = r.hFac,
                      N = null,
                      y > H && 1 > B && q > 2 && m > 2 && !t.hidden ? (H = y,
                      q = 0) : H = m > 1 && q > 1 && 6 > B ? v : F),
                      g !== d && (A = innerWidth + d * b,
                      O = innerHeight + d,
                      f = -1 * d,
                      g = d),
                      a = _[i].getBoundingClientRect(),
                      (z = a.bottom) >= f && (M = a.top) <= O && (j = a.right) >= f * b && (D = a.left) <= A && (z || j || D || M) && (r.loadHidden || X(_[i])) && (p && 3 > B && !h && (3 > m || 4 > q) || U(_[i], d))) {
                          if (tt(_[i]),
                          u = !0,
                          B > 9)
                              break
                      } else
                          !u && p && !c && 4 > B && 4 > q && m > 2 && (s[0] || r.preloadAfterLoad) && (s[0] || !h && (z || j || D || M || "auto" != _[i][l](r.sizesAttr))) && (c = s[0] || _[i]);
              c && !u && tt(c)
          }
      }, G = P(Y), V = function(e) {
          var t = e.target;
          return t._lazyCache ? (delete t._lazyCache,
          void 0) : (W(e),
          y(t, r.loadedClass),
          b(t, r.loadingClass),
          _(t, Q),
          x(t, "lazyloaded"),
          void 0)
      }, Z = C(V), Q = function(e) {
          Z({
              target: e.target
          })
      }, K = function(e, t) {
          var i = e.getAttribute("data-load-mode") || r.iframeLoadMode;
          0 == i ? e.contentWindow.location.replace(t) : 1 == i && (e.src = t)
      }, J = function(e) {
          var t, i = e[l](r.srcsetAttr);
          (t = r.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t),
          i && e.setAttribute("srcset", i)
      }, et = C(function(e, t, i, n, o) {
          var s, a, c, d, p, m;
          (p = x(e, "lazybeforeunveil", t)).defaultPrevented || (n && (i ? y(e, r.autosizesClass) : e.setAttribute("sizes", n)),
          a = e[l](r.srcsetAttr),
          s = e[l](r.srcAttr),
          o && (c = e.parentNode,
          d = c && f.test(c.nodeName || "")),
          m = t.firesLoad || "src"in e && (a || s || d),
          p = {
              target: e
          },
          y(e, r.loadingClass),
          m && (clearTimeout(h),
          h = u(W, 2500),
          _(e, Q, !0)),
          d && g.call(c.getElementsByTagName("source"), J),
          a ? e.setAttribute("srcset", a) : s && !d && (I.test(e.nodeName) ? K(e, s) : e.src = s),
          o && (a || d) && w(e, {
              src: s
          })),
          e._lazyRace && delete e._lazyRace,
          b(e, r.lazyClass),
          S(function() {
              var t = e.complete && e.naturalWidth > 1;
              (!m || t) && (t && y(e, r.fastLoadedClass),
              V(p),
              e._lazyCache = !0,
              u(function() {
                  "_lazyCache"in e && delete e._lazyCache
              }, 9)),
              "lazy" == e.loading && B--
          }, !0)
      }), tt = function(e) {
          if (!e._lazyRace) {
              var t, i = R.test(e.nodeName), n = i && (e[l](r.sizesAttr) || e[l]("sizes")), o = "auto" == n;
              (!o && p || !i || !e[l]("src") && !e.srcset || e.complete || v(e, r.errorClass) || !v(e, r.lazyClass)) && (t = x(e, "lazyunveilread").detail,
              o && $.updateElem(e, !0, e.offsetWidth),
              e._lazyRace = !0,
              B++,
              et(e, t, o, n, i))
          }
      }, it = E(function() {
          r.loadMode = 3,
          G()
      }), nt = function() {
          3 == r.loadMode && (r.loadMode = 2),
          it()
      }, rt = function() {
          if (!p) {
              if (i.now() - k < 999)
                  return u(rt, 999),
                  void 0;
              p = !0,
              r.loadMode = 3,
              G(),
              c("scroll", nt, !0)
          }
      };
      return {
          _: function() {
              k = i.now(),
              n.elements = t.getElementsByClassName(r.lazyClass),
              s = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass),
              c("scroll", G, !0),
              c("resize", G, !0),
              c("pageshow", function(e) {
                  if (e.persisted) {
                      var i = t.querySelectorAll("." + r.loadingClass);
                      i.length && i.forEach && d(function() {
                          i.forEach(function(e) {
                              e.complete && tt(e)
                          })
                      })
                  }
              }),
              e.MutationObserver ? new MutationObserver(G).observe(o, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0
              }) : (o[a]("DOMNodeInserted", G, !0),
              o[a]("DOMAttrModified", G, !0),
              setInterval(G, 999)),
              c("hashchange", G, !0),
              ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                  t[a](e, G, !0)
              }),
              /d$|^c/.test(t.readyState) ? rt() : (c("load", rt),
              t[a]("DOMContentLoaded", G),
              u(rt, 2e4)),
              n.elements.length ? (Y(),
              S._lsFlush()) : G()
          },
          checkElems: G,
          unveil: tt,
          _aLSL: nt
      }
  }()
    , $ = function() {
      var e, i = C(function(e, t, i, n) {
          var r, o, s;
          if (e._lazysizesWidth = n,
          n += "px",
          e.setAttribute("sizes", n),
          f.test(t.nodeName || ""))
              for (r = t.getElementsByTagName("source"),
              o = 0,
              s = r.length; s > o; o++)
                  r[o].setAttribute("sizes", n);
          i.detail.dataAttr || w(e, i.detail)
      }), n = function(e, t, n) {
          var r, o = e.parentNode;
          o && (n = k(e, o, n),
          r = x(e, "lazybeforesizes", {
              width: n,
              dataAttr: !!t
          }),
          r.defaultPrevented || (n = r.detail.width,
          n && n !== e._lazysizesWidth && i(e, o, r, n)))
      }, o = function() {
          var t, i = e.length;
          if (i)
              for (t = 0; i > t; t++)
                  n(e[t])
      }, s = E(o);
      return {
          _: function() {
              e = t.getElementsByClassName(r.autosizesClass),
              c("resize", s)
          },
          checkElems: s,
          updateElem: n
      }
  }()
    , O = function() {
      !O.i && t.getElementsByClassName && (O.i = !0,
      $._(),
      A._())
  };
  return u(function() {
      r.init && O()
  }),
  n = {
      cfg: r,
      autoSizer: $,
      loader: A,
      init: O,
      uP: w,
      aC: y,
      rC: b,
      hC: v,
      fire: x,
      gW: k,
      rAF: S
  }
});
var pJS = function(e, t) {
  var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
      canvas: {
          el: i,
          w: i.offsetWidth,
          h: i.offsetHeight
      },
      particles: {
          number: {
              value: 400,
              density: {
                  enable: !0,
                  value_area: 800
              }
          },
          color: {
              value: "#fff"
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#ff0000"
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: "",
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 1,
              random: !1,
              anim: {
                  enable: !1,
                  speed: 2,
                  opacity_min: 0,
                  sync: !1
              }
          },
          size: {
              value: 20,
              random: !1,
              anim: {
                  enable: !1,
                  speed: 20,
                  size_min: 0,
                  sync: !1
              }
          },
          line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1
          },
          move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                  enable: !1,
                  rotateX: 3e3,
                  rotateY: 3e3
              }
          },
          array: []
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: !0,
                  mode: "grab"
              },
              onclick: {
                  enable: !0,
                  mode: "push"
              },
              resize: !0
          },
          modes: {
              grab: {
                  distance: 100,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 200,
                  size: 80,
                  duration: .4
              },
              repulse: {
                  distance: 200,
                  duration: .4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          },
          mouse: {}
      },
      retina_detect: !1,
      fn: {
          interact: {},
          modes: {},
          vendors: {}
      },
      tmp: {}
  };
  var n = this.pJS;
  t && Object.deepExtend(n, t),
  n.tmp.obj = {
      size_value: n.particles.size.value,
      size_anim_speed: n.particles.size.anim.speed,
      move_speed: n.particles.move.speed,
      line_linked_distance: n.particles.line_linked.distance,
      line_linked_width: n.particles.line_linked.width,
      mode_grab_distance: n.interactivity.modes.grab.distance,
      mode_bubble_distance: n.interactivity.modes.bubble.distance,
      mode_bubble_size: n.interactivity.modes.bubble.size,
      mode_repulse_distance: n.interactivity.modes.repulse.distance
  },
  n.fn.retinaInit = function() {
      n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio,
      n.tmp.retina = !0) : (n.canvas.pxratio = 1,
      n.tmp.retina = !1),
      n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio,
      n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio,
      n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio,
      n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio,
      n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio,
      n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio,
      n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio,
      n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio,
      n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio,
      n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio,
      n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
  }
  ,
  n.fn.canvasInit = function() {
      n.canvas.ctx = n.canvas.el.getContext("2d")
  }
  ,
  n.fn.canvasSize = function() {
      n.canvas.el.width = n.canvas.w,
      n.canvas.el.height = n.canvas.h,
      n && n.interactivity.events.resize && window.addEventListener("resize", function() {
          n.canvas.w = n.canvas.el.offsetWidth,
          n.canvas.h = n.canvas.el.offsetHeight,
          n.tmp.retina && (n.canvas.w *= n.canvas.pxratio,
          n.canvas.h *= n.canvas.pxratio),
          n.canvas.el.width = n.canvas.w,
          n.canvas.el.height = n.canvas.h,
          n.particles.move.enable || (n.fn.particlesEmpty(),
          n.fn.particlesCreate(),
          n.fn.particlesDraw(),
          n.fn.vendors.densityAutoParticles()),
          n.fn.vendors.densityAutoParticles()
      })
  }
  ,
  n.fn.canvasPaint = function() {
      n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
  }
  ,
  n.fn.canvasClear = function() {
      n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
  }
  ,
  n.fn.particle = function(e, t, i) {
      if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value,
      n.particles.size.anim.enable && (this.size_status = !1,
      this.vs = n.particles.size.anim.speed / 100,
      n.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
      this.x = i ? i.x : Math.random() * n.canvas.w,
      this.y = i ? i.y : Math.random() * n.canvas.h,
      this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
      this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
      n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i),
      this.color = {},
      "object" == typeof e.value)
          if (e.value instanceof Array) {
              var r = e.value[Math.floor(Math.random() * n.particles.color.value.length)];
              this.color.rgb = hexToRgb(r)
          } else
              void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                  r: e.value.r,
                  g: e.value.g,
                  b: e.value.b
              }),
              void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                  h: e.value.h,
                  s: e.value.s,
                  l: e.value.l
              });
      else
          "random" == e.value ? this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0
          } : "string" == typeof e.value && (this.color = e,
          this.color.rgb = hexToRgb(this.color.value));
      this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value,
      n.particles.opacity.anim.enable && (this.opacity_status = !1,
      this.vo = n.particles.opacity.anim.speed / 100,
      n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var o = {};
      switch (n.particles.move.direction) {
      case "top":
          o = {
              x: 0,
              y: -1
          };
          break;
      case "top-right":
          o = {
              x: .5,
              y: -.5
          };
          break;
      case "right":
          o = {
              x: 1,
              y: -0
          };
          break;
      case "bottom-right":
          o = {
              x: .5,
              y: .5
          };
          break;
      case "bottom":
          o = {
              x: 0,
              y: 1
          };
          break;
      case "bottom-left":
          o = {
              x: -.5,
              y: 1
          };
          break;
      case "left":
          o = {
              x: -1,
              y: 0
          };
          break;
      case "top-left":
          o = {
              x: -.5,
              y: -.5
          };
          break;
      default:
          o = {
              x: 0,
              y: 0
          }
      }
      n.particles.move.straight ? (this.vx = o.x,
      this.vy = o.y,
      n.particles.move.random && (this.vx = this.vx * Math.random(),
      this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5,
      this.vy = o.y + Math.random() - .5),
      this.vx_i = this.vx,
      this.vy_i = this.vy;
      var s = n.particles.shape.type;
      if ("object" == typeof s) {
          if (s instanceof Array) {
              var a = s[Math.floor(Math.random() * s.length)];
              this.shape = a
          }
      } else
          this.shape = s;
      if ("image" == this.shape) {
          var l = n.particles.shape;
          this.img = {
              src: l.image.src,
              ratio: l.image.width / l.image.height
          },
          this.img.ratio || (this.img.ratio = 1),
          "svg" == n.tmp.img_type && void 0 != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this),
          n.tmp.pushing && (this.img.loaded = !1))
      }
  }
  ,
  n.fn.particle.prototype.draw = function() {
      function e() {
          n.canvas.ctx.drawImage(s, t.x - i, t.y - i, 2 * i, 2 * i / t.img.ratio)
      }
      var t = this;
      if (void 0 != t.radius_bubble)
          var i = t.radius_bubble;
      else
          var i = t.radius;
      if (void 0 != t.opacity_bubble)
          var r = t.opacity_bubble;
      else
          var r = t.opacity;
      if (t.color.rgb)
          var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + r + ")";
      else
          var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + r + ")";
      switch (n.canvas.ctx.fillStyle = o,
      n.canvas.ctx.beginPath(),
      t.shape) {
      case "circle":
          n.canvas.ctx.arc(t.x, t.y, i, 0, 2 * Math.PI, !1);
          break;
      case "edge":
          n.canvas.ctx.rect(t.x - i, t.y - i, 2 * i, 2 * i);
          break;
      case "triangle":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - i, t.y + i / 1.66, 2 * i, 3, 2);
          break;
      case "polygon":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - i / (n.particles.shape.polygon.nb_sides / 3.5), t.y - i / .76, 2.66 * i / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
          break;
      case "star":
          n.fn.vendors.drawShape(n.canvas.ctx, t.x - 2 * i / (n.particles.shape.polygon.nb_sides / 4), t.y - i / 1.52, 2 * i * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
          break;
      case "image":
          if ("svg" == n.tmp.img_type)
              var s = t.img.obj;
          else
              var s = n.tmp.img_obj;
          s && e()
      }
      n.canvas.ctx.closePath(),
      n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color,
      n.canvas.ctx.lineWidth = n.particles.shape.stroke.width,
      n.canvas.ctx.stroke()),
      n.canvas.ctx.fill()
  }
  ,
  n.fn.particlesCreate = function() {
      for (var e = 0; e < n.particles.number.value; e++)
          n.particles.array.push(new n.fn.particle(n.particles.color,n.particles.opacity.value))
  }
  ,
  n.fn.particlesUpdate = function() {
      for (var e = 0; e < n.particles.array.length; e++) {
          var t = n.particles.array[e];
          if (n.particles.move.enable) {
              var i = n.particles.move.speed / 2;
              t.x += t.vx * i,
              t.y += t.vy * i
          }
          if (n.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= n.particles.opacity.value && (t.opacity_status = !1),
          t.opacity += t.vo) : (t.opacity <= n.particles.opacity.anim.opacity_min && (t.opacity_status = !0),
          t.opacity -= t.vo),
          t.opacity < 0 && (t.opacity = 0)),
          n.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= n.particles.size.value && (t.size_status = !1),
          t.radius += t.vs) : (t.radius <= n.particles.size.anim.size_min && (t.size_status = !0),
          t.radius -= t.vs),
          t.radius < 0 && (t.radius = 0)),
          "bounce" == n.particles.move.out_mode)
              var r = {
                  x_left: t.radius,
                  x_right: n.canvas.w,
                  y_top: t.radius,
                  y_bottom: n.canvas.h
              };
          else
              var r = {
                  x_left: -t.radius,
                  x_right: n.canvas.w + t.radius,
                  y_top: -t.radius,
                  y_bottom: n.canvas.h + t.radius
              };
          switch (t.x - t.radius > n.canvas.w ? (t.x = r.x_left,
          t.y = Math.random() * n.canvas.h) : t.x + t.radius < 0 && (t.x = r.x_right,
          t.y = Math.random() * n.canvas.h),
          t.y - t.radius > n.canvas.h ? (t.y = r.y_top,
          t.x = Math.random() * n.canvas.w) : t.y + t.radius < 0 && (t.y = r.y_bottom,
          t.x = Math.random() * n.canvas.w),
          n.particles.move.out_mode) {
          case "bounce":
              t.x + t.radius > n.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx),
              t.y + t.radius > n.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
          }
          if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(t),
          (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(t),
          (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(t),
          n.particles.line_linked.enable || n.particles.move.attract.enable)
              for (var o = e + 1; o < n.particles.array.length; o++) {
                  var s = n.particles.array[o];
                  n.particles.line_linked.enable && n.fn.interact.linkParticles(t, s),
                  n.particles.move.attract.enable && n.fn.interact.attractParticles(t, s),
                  n.particles.move.bounce && n.fn.interact.bounceParticles(t, s)
              }
      }
  }
  ,
  n.fn.particlesDraw = function() {
      n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h),
      n.fn.particlesUpdate();
      for (var e = 0; e < n.particles.array.length; e++) {
          var t = n.particles.array[e];
          t.draw()
      }
  }
  ,
  n.fn.particlesEmpty = function() {
      n.particles.array = []
  }
  ,
  n.fn.particlesRefresh = function() {
      cancelRequestAnimFrame(n.fn.checkAnimFrame),
      cancelRequestAnimFrame(n.fn.drawAnimFrame),
      n.tmp.source_svg = void 0,
      n.tmp.img_obj = void 0,
      n.tmp.count_svg = 0,
      n.fn.particlesEmpty(),
      n.fn.canvasClear(),
      n.fn.vendors.start()
  }
  ,
  n.fn.interact.linkParticles = function(e, t) {
      var i = e.x - t.x
        , r = e.y - t.y
        , o = Math.sqrt(i * i + r * r);
      if (o <= n.particles.line_linked.distance) {
          var s = n.particles.line_linked.opacity - o / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
          if (s > 0) {
              var a = n.particles.line_linked.color_rgb_line;
              n.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")",
              n.canvas.ctx.lineWidth = n.particles.line_linked.width,
              n.canvas.ctx.beginPath(),
              n.canvas.ctx.moveTo(e.x, e.y),
              n.canvas.ctx.lineTo(t.x, t.y),
              n.canvas.ctx.stroke(),
              n.canvas.ctx.closePath()
          }
      }
  }
  ,
  n.fn.interact.attractParticles = function(e, t) {
      var i = e.x - t.x
        , r = e.y - t.y
        , o = Math.sqrt(i * i + r * r);
      if (o <= n.particles.line_linked.distance) {
          var s = i / (1e3 * n.particles.move.attract.rotateX)
            , a = r / (1e3 * n.particles.move.attract.rotateY);
          e.vx -= s,
          e.vy -= a,
          t.vx += s,
          t.vy += a
      }
  }
  ,
  n.fn.interact.bounceParticles = function(e, t) {
      var i = e.x - t.x
        , n = e.y - t.y
        , r = Math.sqrt(i * i + n * n)
        , o = e.radius + t.radius;
      o >= r && (e.vx = -e.vx,
      e.vy = -e.vy,
      t.vx = -t.vx,
      t.vy = -t.vy)
  }
  ,
  n.fn.modes.pushParticles = function(e, t) {
      n.tmp.pushing = !0;
      for (var i = 0; e > i; i++)
          n.particles.array.push(new n.fn.particle(n.particles.color,n.particles.opacity.value,{
              x: t ? t.pos_x : Math.random() * n.canvas.w,
              y: t ? t.pos_y : Math.random() * n.canvas.h
          })),
          i == e - 1 && (n.particles.move.enable || n.fn.particlesDraw(),
          n.tmp.pushing = !1)
  }
  ,
  n.fn.modes.removeParticles = function(e) {
      n.particles.array.splice(0, e),
      n.particles.move.enable || n.fn.particlesDraw()
  }
  ,
  n.fn.modes.bubbleParticle = function(e) {
      function t() {
          e.opacity_bubble = e.opacity,
          e.radius_bubble = e.radius
      }
      function i(t, i, r, o, a) {
          if (t != i)
              if (n.tmp.bubble_duration_end) {
                  if (void 0 != r) {
                      var l = o - d * (o - t) / n.interactivity.modes.bubble.duration
                        , c = t - l;
                      p = t + c,
                      "size" == a && (e.radius_bubble = p),
                      "opacity" == a && (e.opacity_bubble = p)
                  }
              } else if (s <= n.interactivity.modes.bubble.distance) {
                  if (void 0 != r)
                      var u = r;
                  else
                      var u = o;
                  if (u != t) {
                      var p = o - d * (o - t) / n.interactivity.modes.bubble.duration;
                      "size" == a && (e.radius_bubble = p),
                      "opacity" == a && (e.opacity_bubble = p)
                  }
              } else
                  "size" == a && (e.radius_bubble = void 0),
                  "opacity" == a && (e.opacity_bubble = void 0)
      }
      if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
          var r = e.x - n.interactivity.mouse.pos_x
            , o = e.y - n.interactivity.mouse.pos_y
            , s = Math.sqrt(r * r + o * o)
            , a = 1 - s / n.interactivity.modes.bubble.distance;
          if (s <= n.interactivity.modes.bubble.distance) {
              if (a >= 0 && "mousemove" == n.interactivity.status) {
                  if (n.interactivity.modes.bubble.size != n.particles.size.value)
                      if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                          var l = e.radius + n.interactivity.modes.bubble.size * a;
                          l >= 0 && (e.radius_bubble = l)
                      } else {
                          var c = e.radius - n.interactivity.modes.bubble.size
                            , l = e.radius - c * a;
                          e.radius_bubble = l > 0 ? l : 0
                      }
                  if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
                      if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value) {
                          var u = n.interactivity.modes.bubble.opacity * a;
                          u > e.opacity && u <= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                      } else {
                          var u = e.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * a;
                          u < e.opacity && u >= n.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                      }
              }
          } else
              t();
          "mouseleave" == n.interactivity.status && t()
      } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
          if (n.tmp.bubble_clicking) {
              var r = e.x - n.interactivity.mouse.click_pos_x
                , o = e.y - n.interactivity.mouse.click_pos_y
                , s = Math.sqrt(r * r + o * o)
                , d = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
              d > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0),
              d > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1,
              n.tmp.bubble_duration_end = !1)
          }
          n.tmp.bubble_clicking && (i(n.interactivity.modes.bubble.size, n.particles.size.value, e.radius_bubble, e.radius, "size"),
          i(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
      }
  }
  ,
  n.fn.modes.repulseParticle = function(e) {
      function t() {
          var t = Math.atan2(p, d);
          if (e.vx = h * Math.cos(t),
          e.vy = h * Math.sin(t),
          "bounce" == n.particles.move.out_mode) {
              var i = {
                  x: e.x + e.vx,
                  y: e.y + e.vy
              };
              i.x + e.radius > n.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx),
              i.y + e.radius > n.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy)
          }
      }
      if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
          var i = e.x - n.interactivity.mouse.pos_x
            , r = e.y - n.interactivity.mouse.pos_y
            , o = Math.sqrt(i * i + r * r)
            , s = {
              x: i / o,
              y: r / o
          }
            , a = n.interactivity.modes.repulse.distance
            , l = 100
            , c = clamp(1 / a * (-1 * Math.pow(o / a, 2) + 1) * a * l, 0, 50)
            , u = {
              x: e.x + s.x * c,
              y: e.y + s.y * c
          };
          "bounce" == n.particles.move.out_mode ? (u.x - e.radius > 0 && u.x + e.radius < n.canvas.w && (e.x = u.x),
          u.y - e.radius > 0 && u.y + e.radius < n.canvas.h && (e.y = u.y)) : (e.x = u.x,
          e.y = u.y)
      } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
          if (n.tmp.repulse_finish || (n.tmp.repulse_count++,
          n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)),
          n.tmp.repulse_clicking) {
              var a = Math.pow(n.interactivity.modes.repulse.distance / 6, 3)
                , d = n.interactivity.mouse.click_pos_x - e.x
                , p = n.interactivity.mouse.click_pos_y - e.y
                , f = d * d + p * p
                , h = -a / f * 1;
              a >= f && t()
          } else
              0 == n.tmp.repulse_clicking && (e.vx = e.vx_i,
              e.vy = e.vy_i)
  }
  ,
  n.fn.modes.grabParticle = function(e) {
      if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
          var t = e.x - n.interactivity.mouse.pos_x
            , i = e.y - n.interactivity.mouse.pos_y
            , r = Math.sqrt(t * t + i * i);
          if (r <= n.interactivity.modes.grab.distance) {
              var o = n.interactivity.modes.grab.line_linked.opacity - r / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
              if (o > 0) {
                  var s = n.particles.line_linked.color_rgb_line;
                  n.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")",
                  n.canvas.ctx.lineWidth = n.particles.line_linked.width,
                  n.canvas.ctx.beginPath(),
                  n.canvas.ctx.moveTo(e.x, e.y),
                  n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y),
                  n.canvas.ctx.stroke(),
                  n.canvas.ctx.closePath()
              }
          }
      }
  }
  ,
  n.fn.vendors.eventsListeners = function() {
      n.interactivity.el = "window" == n.interactivity.detect_on ? window : n.canvas.el,
      (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", function(e) {
          if (n.interactivity.el == window)
              var t = e.clientX
                , i = e.clientY;
          else
              var t = e.offsetX || e.clientX
                , i = e.offsetY || e.clientY;
          n.interactivity.mouse.pos_x = t,
          n.interactivity.mouse.pos_y = i,
          n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio,
          n.interactivity.mouse.pos_y *= n.canvas.pxratio),
          n.interactivity.status = "mousemove"
      }),
      n.interactivity.el.addEventListener("mouseleave", function() {
          n.interactivity.mouse.pos_x = null,
          n.interactivity.mouse.pos_y = null,
          n.interactivity.status = "mouseleave"
      })),
      n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", function() {
          if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x,
          n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y,
          n.interactivity.mouse.click_time = (new Date).getTime(),
          n.interactivity.events.onclick.enable)
              switch (n.interactivity.events.onclick.mode) {
              case "push":
                  n.particles.move.enable ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
                  break;
              case "remove":
                  n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
                  break;
              case "bubble":
                  n.tmp.bubble_clicking = !0;
                  break;
              case "repulse":
                  n.tmp.repulse_clicking = !0,
                  n.tmp.repulse_count = 0,
                  n.tmp.repulse_finish = !1,
                  setTimeout(function() {
                      n.tmp.repulse_clicking = !1
                  }, 1e3 * n.interactivity.modes.repulse.duration)
              }
      })
  }
  ,
  n.fn.vendors.densityAutoParticles = function() {
      if (n.particles.number.density.enable) {
          var e = n.canvas.el.width * n.canvas.el.height / 1e3;
          n.tmp.retina && (e /= 2 * n.canvas.pxratio);
          var t = e * n.particles.number.value / n.particles.number.density.value_area
            , i = n.particles.array.length - t;
          0 > i ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
      }
  }
  ,
  n.fn.vendors.checkOverlap = function(e, t) {
      for (var i = 0; i < n.particles.array.length; i++) {
          var r = n.particles.array[i]
            , o = e.x - r.x
            , s = e.y - r.y
            , a = Math.sqrt(o * o + s * s);
          a <= e.radius + r.radius && (e.x = t ? t.x : Math.random() * n.canvas.w,
          e.y = t ? t.y : Math.random() * n.canvas.h,
          n.fn.vendors.checkOverlap(e))
      }
  }
  ,
  n.fn.vendors.createSvgImg = function(e) {
      var t = n.tmp.source_svg
        , i = /#([0-9A-F]{3,6})/gi
        , r = t.replace(i, function() {
          if (e.color.rgb)
              var t = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
          else
              var t = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
          return t
      })
        , o = new Blob([r],{
          type: "image/svg+xml;charset=utf-8"
      })
        , s = window.URL || window.webkitURL || window
        , a = s.createObjectURL(o)
        , l = new Image;
      l.addEventListener("load", function() {
          e.img.obj = l,
          e.img.loaded = !0,
          s.revokeObjectURL(a),
          n.tmp.count_svg++
      }),
      l.src = a
  }
  ,
  n.fn.vendors.destroypJS = function() {
      cancelAnimationFrame(n.fn.drawAnimFrame),
      i.remove(),
      pJSDom = null
  }
  ,
  n.fn.vendors.drawShape = function(e, t, i, n, r, o) {
      var s = r * o
        , a = r / o
        , l = 180 * (a - 2) / a
        , c = Math.PI - Math.PI * l / 180;
      e.save(),
      e.beginPath(),
      e.translate(t, i),
      e.moveTo(0, 0);
      for (var u = 0; s > u; u++)
          e.lineTo(n, 0),
          e.translate(n, 0),
          e.rotate(c);
      e.fill(),
      e.restore()
  }
  ,
  n.fn.vendors.exportImg = function() {
      window.open(n.canvas.el.toDataURL("image/png"), "_blank")
  }
  ,
  n.fn.vendors.loadImg = function(e) {
      if (n.tmp.img_error = void 0,
      "" != n.particles.shape.image.src)
          if ("svg" == e) {
              var t = new XMLHttpRequest;
              t.open("GET", n.particles.shape.image.src),
              t.onreadystatechange = function(e) {
                  4 == t.readyState && (200 == t.status ? (n.tmp.source_svg = e.currentTarget.response,
                  n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                  n.tmp.img_error = !0))
              }
              ,
              t.send()
          } else {
              var i = new Image;
              i.addEventListener("load", function() {
                  n.tmp.img_obj = i,
                  n.fn.vendors.checkBeforeDraw()
              }),
              i.src = n.particles.shape.image.src
          }
      else
          console.log("Error pJS - No image.src"),
          n.tmp.img_error = !0
  }
  ,
  n.fn.vendors.draw = function() {
      "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(),
      n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : void 0 != n.tmp.img_obj ? (n.fn.particlesDraw(),
      n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(),
      n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
  }
  ,
  n.fn.vendors.checkBeforeDraw = function() {
      "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && void 0 == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame),
      n.tmp.img_error || (n.fn.vendors.init(),
      n.fn.vendors.draw())) : (n.fn.vendors.init(),
      n.fn.vendors.draw())
  }
  ,
  n.fn.vendors.init = function() {
      n.fn.retinaInit(),
      n.fn.canvasInit(),
      n.fn.canvasSize(),
      n.fn.canvasPaint(),
      n.fn.particlesCreate(),
      n.fn.vendors.densityAutoParticles(),
      n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
  }
  ,
  n.fn.vendors.start = function() {
      isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3),
      n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
  }
  ,
  n.fn.vendors.eventsListeners(),
  n.fn.vendors.start()
};
Object.deepExtend = function(e, t) {
  for (var i in t)
      t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {},
      arguments.callee(e[i], t[i])) : e[i] = t[i];
  return e
}
,
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
      window.setTimeout(e, 1e3 / 60)
  }
}(),
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(),
window.pJSDom = [],
window.particlesJS = function(e, t) {
  "string" != typeof e && (t = e,
  e = "particles-js"),
  e || (e = "particles-js");
  var i = document.getElementById(e)
    , n = "particles-js-canvas-el"
    , r = i.getElementsByClassName(n);
  if (r.length)
      for (; r.length > 0; )
          i.removeChild(r[0]);
  var o = document.createElement("canvas");
  o.className = n,
  o.style.width = "100%",
  o.style.height = "100%";
  var s = document.getElementById(e).appendChild(o);
  null != s && pJSDom.push(new pJS(e,t))
}
,
window.particlesJS.load = function(e, t, i) {
  var n = new XMLHttpRequest;
  n.open("GET", t),
  n.onreadystatechange = function(t) {
      if (4 == n.readyState)
          if (200 == n.status) {
              var r = JSON.parse(t.currentTarget.response);
              window.particlesJS(e, r),
              i && i()
          } else
              console.log("Error pJS - XMLHttpRequest status: " + n.status),
              console.log("Error pJS - File config not found")
  }
  ,
  n.send()
}
;
var objectFitImages = function() {
  "use strict";
  function e(e, t) {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
  }
  function t(e) {
      if (e.srcset && !h && window.picturefill) {
          var t = window.picturefill._;
          e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
              reselect: !0
          }),
          e[t.ns].curSrc || (e[t.ns].supported = !1,
          t.fillImg(e, {
              reselect: !0
          })),
          e.currentSrc = e[t.ns].curSrc || e.src
      }
  }
  function i(e) {
      for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = c.exec(i)); )
          n[t[1]] = t[2];
      return n
  }
  function n(t, i, n) {
      var r = e(i || 1, n || 0);
      m.call(t, "src") !== r && g.call(t, "src", r)
  }
  function r(e, t) {
      e.naturalWidth ? t(e) : setTimeout(r, 100, e, t)
  }
  function o(e) {
      var o = i(e)
        , a = e[l];
      if (o["object-fit"] = o["object-fit"] || "fill",
      !a.img) {
          if ("fill" === o["object-fit"])
              return;
          if (!a.skipTest && d && !o["object-position"])
              return
      }
      if (!a.img) {
          a.img = new Image(e.width,e.height),
          a.img.srcset = m.call(e, "data-ofi-srcset") || e.srcset,
          a.img.src = m.call(e, "data-ofi-src") || e.src,
          g.call(e, "data-ofi-src", e.src),
          e.srcset && g.call(e, "data-ofi-srcset", e.srcset),
          n(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
          e.srcset && (e.srcset = "");
          try {
              s(e)
          } catch (e) {
              window.console && console.warn("https://bit.ly/ofi-old-browser")
          }
      }
      t(a.img),
      e.style.backgroundImage = 'url("' + (a.img.currentSrc || a.img.src).replace(/"/g, '\\"') + '")',
      e.style.backgroundPosition = o["object-position"] || "center",
      e.style.backgroundRepeat = "no-repeat",
      e.style.backgroundOrigin = "content-box",
      /scale-down/.test(o["object-fit"]) ? r(a.img, function() {
          e.style.backgroundSize = a.img.naturalWidth > e.width || a.img.naturalHeight > e.height ? "contain" : "auto"
      }) : e.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
      r(a.img, function(t) {
          n(e, t.naturalWidth, t.naturalHeight)
      })
  }
  function s(e) {
      var t = {
          get: function(t) {
              return e[l].img[t || "src"]
          },
          set: function(t, i) {
              return e[l].img[i || "src"] = t,
              g.call(e, "data-ofi-" + i, t),
              o(e),
              t
          }
      };
      Object.defineProperty(e, "src", t),
      Object.defineProperty(e, "currentSrc", {
          get: function() {
              return t.get("currentSrc")
          }
      }),
      Object.defineProperty(e, "srcset", {
          get: function() {
              return t.get("srcset")
          },
          set: function(e) {
              return t.set(e, "srcset")
          }
      })
  }
  function a(e, t) {
      var i = !v && !e;
      if (t = t || {},
      e = e || "img",
      p && !t.skipTest || !f)
          return !1;
      "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length"in e || (e = [e]);
      for (var n = 0; n < e.length; n++)
          e[n][l] = e[n][l] || {
              skipTest: t.skipTest
          },
          o(e[n]);
      i && (document.body.addEventListener("load", function(e) {
          "IMG" === e.target.tagName && a(e.target, {
              skipTest: t.skipTest
          })
      }, !0),
      v = !0,
      e = "img"),
      t.watchMQ && window.addEventListener("resize", a.bind(null, e, {
          skipTest: t.skipTest
      }))
  }
  var l = "bfred-it:object-fit-images"
    , c = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g
    , u = "undefined" == typeof Image ? {
      style: {
          "object-position": 1
      }
  } : new Image
    , d = "object-fit"in u.style
    , p = "object-position"in u.style
    , f = "background-size"in u.style
    , h = "string" == typeof u.currentSrc
    , m = u.getAttribute
    , g = u.setAttribute
    , v = !1;
  return a.supportsObjectFit = d,
  a.supportsObjectPosition = p,
  function() {
      function e(e, t) {
          return e[l] && e[l].img && ("src" === t || "srcset" === t) ? e[l].img : e
      }
      p || (HTMLImageElement.prototype.getAttribute = function(t) {
          return m.call(e(this, t), t)
      }
      ,
      HTMLImageElement.prototype.setAttribute = function(t, i) {
          return g.call(e(this, t), t, String(i))
      }
      )
  }(),
  a
}()
, _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
  "use strict";
  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
      var n = function(e) {
          var t, i = [], n = e.length;
          for (t = 0; t !== n; i.push(e[t++]))
              ;
          return i
      }
        , r = function(e, t, i) {
          var n, r, o = e.cycle;
          for (n in o)
              r = o[n],
              e[n] = "function" == typeof r ? r(i, t[i], t) : r[i % r.length];
          delete e.cycle
      }
        , o = function(e) {
          if ("function" == typeof e)
              return e;
          var t = "object" == typeof e ? e : {
              each: e
          }
            , i = t.ease
            , n = t.from || 0
            , r = t.base || 0
            , o = {}
            , s = isNaN(n)
            , a = t.axis
            , l = {
              center: .5,
              end: 1
          }[n] || 0;
          return function(e, c, u) {
              var d, p, f, h, m, g, v, y, b, _ = (u || t).length, x = o[_];
              if (!x) {
                  if (b = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0],
                  !b) {
                      for (v = -(1 / 0); v < (v = u[b++].getBoundingClientRect().left) && _ > b; )
                          ;
                      b--
                  }
                  for (x = o[_] = [],
                  d = s ? Math.min(b, _) * l - .5 : n % b,
                  p = s ? _ * l / b - .5 : n / b | 0,
                  v = 0,
                  y = 1 / 0,
                  g = 0; _ > g; g++)
                      f = g % b - d,
                      h = p - (g / b | 0),
                      x[g] = m = a ? Math.abs("y" === a ? h : f) : Math.sqrt(f * f + h * h),
                      m > v && (v = m),
                      y > m && (y = m);
                  x.max = v - y,
                  x.min = y,
                  x.v = _ = t.amount || t.each * (b > _ ? _ : a ? "y" === a ? _ / b : b : Math.max(b, _ / b)) || 0,
                  x.b = 0 > _ ? r - _ : r
              }
              return _ = (x[e] - x.min) / x.max,
              x.b + (i ? i.getRatio(_) : _) * x.v
          }
      }
        , s = function(e, t, n) {
          i.call(this, e, t, n),
          this._cycle = 0,
          this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase,
          this._repeat = this.vars.repeat || 0,
          this._repeatDelay = this.vars.repeatDelay || 0,
          this._repeat && this._uncache(!0),
          this.render = s.prototype.render
      }
        , a = 1e-8
        , l = i._internals
        , c = l.isSelector
        , u = l.isArray
        , d = s.prototype = i.to({}, .1, {})
        , p = [];
      s.version = "2.1.1",
      d.constructor = s,
      d.kill()._gc = !1,
      s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf,
      s.getTweensOf = i.getTweensOf,
      s.lagSmoothing = i.lagSmoothing,
      s.ticker = i.ticker,
      s.render = i.render,
      s.distribute = o,
      d.invalidate = function() {
          return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase,
          this._repeat = this.vars.repeat || 0,
          this._repeatDelay = this.vars.repeatDelay || 0,
          this._yoyoEase = null,
          this._uncache(!0),
          i.prototype.invalidate.call(this)
      }
      ,
      d.updateTo = function(e, t) {
          var n, r = this, o = r.ratio, s = r.vars.immediateRender || e.immediateRender;
          t && r._startTime < r._timeline._time && (r._startTime = r._timeline._time,
          r._uncache(!1),
          r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay));
          for (n in e)
              r.vars[n] = e[n];
          if (r._initted || s)
              if (t)
                  r._initted = !1,
                  s && r.render(0, !0, !0);
              else if (r._gc && r._enabled(!0, !1),
              r._notifyPluginsOfEnabled && r._firstPT && i._onPluginEvent("_onDisable", r),
              r._time / r._duration > .998) {
                  var a = r._totalTime;
                  r.render(0, !0, !1),
                  r._initted = !1,
                  r.render(a, !0, !1)
              } else if (r._initted = !1,
              r._init(),
              r._time > 0 || s)
                  for (var l, c = 1 / (1 - o), u = r._firstPT; u; )
                      l = u.s + u.c,
                      u.c *= c,
                      u.s = l - u.c,
                      u = u._next;
          return r
      }
      ,
      d.render = function(e, t, n) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var r, o, s, c, u, d, p, f, h, m = this, g = m._dirty ? m.totalDuration() : m._totalDuration, v = m._time, y = m._totalTime, b = m._cycle, _ = m._duration, x = m._rawPrevTime;
          if (e >= g - a && e >= 0 ? (m._totalTime = g,
          m._cycle = m._repeat,
          m._yoyo && 0 !== (1 & m._cycle) ? (m._time = 0,
          m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0) : (m._time = _,
          m.ratio = m._ease._calcEnd ? m._ease.getRatio(1) : 1),
          m._reversed || (r = !0,
          o = "onComplete",
          n = n || m._timeline.autoRemoveChildren),
          0 === _ && (m._initted || !m.vars.lazy || n) && (m._startTime === m._timeline._duration && (e = 0),
          (0 > x || 0 >= e && e >= -a || x === a && "isPause" !== m.data) && x !== e && (n = !0,
          x > a && (o = "onReverseComplete")),
          m._rawPrevTime = f = !t || e || x === e ? e : a)) : a > e ? (m._totalTime = m._time = m._cycle = 0,
          m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0,
          (0 !== y || 0 === _ && x > 0) && (o = "onReverseComplete",
          r = m._reversed),
          e > -a ? e = 0 : 0 > e && (m._active = !1,
          0 === _ && (m._initted || !m.vars.lazy || n) && (x >= 0 && (n = !0),
          m._rawPrevTime = f = !t || e || x === e ? e : a)),
          m._initted || (n = !0)) : (m._totalTime = m._time = e,
          0 !== m._repeat && (c = _ + m._repeatDelay,
          m._cycle = m._totalTime / c >> 0,
          0 !== m._cycle && m._cycle === m._totalTime / c && e >= y && m._cycle--,
          m._time = m._totalTime - m._cycle * c,
          m._yoyo && 0 !== (1 & m._cycle) && (m._time = _ - m._time,
          h = m._yoyoEase || m.vars.yoyoEase,
          h && (m._yoyoEase || (h !== !0 || m._initted ? m._yoyoEase = h = h === !0 ? m._ease : h instanceof Ease ? h : Ease.map[h] : (h = m.vars.ease,
          m._yoyoEase = h = h ? h instanceof Ease ? h : "function" == typeof h ? new Ease(h,m.vars.easeParams) : Ease.map[h] || i.defaultEase : i.defaultEase)),
          m.ratio = h ? 1 - h.getRatio((_ - m._time) / _) : 0)),
          m._time > _ ? m._time = _ : m._time < 0 && (m._time = 0)),
          m._easeType && !h ? (u = m._time / _,
          d = m._easeType,
          p = m._easePower,
          (1 === d || 3 === d && u >= .5) && (u = 1 - u),
          3 === d && (u *= 2),
          1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u),
          m.ratio = 1 === d ? 1 - u : 2 === d ? u : m._time / _ < .5 ? u / 2 : 1 - u / 2) : h || (m.ratio = m._ease.getRatio(m._time / _))),
          v === m._time && !n && b === m._cycle)
              return void (y !== m._totalTime && m._onUpdate && (t || m._callback("onUpdate")));
          if (!m._initted) {
              if (m._init(),
              !m._initted || m._gc)
                  return;
              if (!n && m._firstPT && (m.vars.lazy !== !1 && m._duration || m.vars.lazy && !m._duration))
                  return m._time = v,
                  m._totalTime = y,
                  m._rawPrevTime = x,
                  m._cycle = b,
                  l.lazyTweens.push(m),
                  void (m._lazy = [e, t]);
              !m._time || r || h ? r && this._ease._calcEnd && !h && (m.ratio = m._ease.getRatio(0 === m._time ? 0 : 1)) : m.ratio = m._ease.getRatio(m._time / _)
          }
          for (m._lazy !== !1 && (m._lazy = !1),
          m._active || !m._paused && m._time !== v && e >= 0 && (m._active = !0),
          0 === y && (2 === m._initted && e > 0 && m._init(),
          m._startAt && (e >= 0 ? m._startAt.render(e, !0, n) : o || (o = "_dummyGS")),
          m.vars.onStart && (0 !== m._totalTime || 0 === _) && (t || m._callback("onStart"))),
          s = m._firstPT; s; )
              s.f ? s.t[s.p](s.c * m.ratio + s.s) : s.t[s.p] = s.c * m.ratio + s.s,
              s = s._next;
          m._onUpdate && (0 > e && m._startAt && m._startTime && m._startAt.render(e, !0, n),
          t || (m._totalTime !== y || o) && m._callback("onUpdate")),
          m._cycle !== b && (t || m._gc || m.vars.onRepeat && m._callback("onRepeat")),
          o && (!m._gc || n) && (0 > e && m._startAt && !m._onUpdate && m._startTime && m._startAt.render(e, !0, n),
          r && (m._timeline.autoRemoveChildren && m._enabled(!1, !1),
          m._active = !1),
          !t && m.vars[o] && m._callback(o),
          0 === _ && m._rawPrevTime === a && f !== a && (m._rawPrevTime = 0))
      }
      ,
      s.to = function(e, t, i) {
          return new s(e,t,i)
      }
      ,
      s.from = function(e, t, i) {
          return i.runBackwards = !0,
          i.immediateRender = 0 != i.immediateRender,
          new s(e,t,i)
      }
      ,
      s.fromTo = function(e, t, i, n) {
          return n.startAt = i,
          n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
          new s(e,t,n)
      }
      ,
      s.staggerTo = s.allTo = function(e, t, a, l, d, f, h) {
          var m, g, v, y, b = [], _ = o(a.stagger || l), x = a.cycle, w = (a.startAt || p).cycle;
          for (u(e) || ("string" == typeof e && (e = i.selector(e) || e),
          c(e) && (e = n(e))),
          e = e || [],
          m = e.length - 1,
          v = 0; m >= v; v++) {
              g = {};
              for (y in a)
                  g[y] = a[y];
              if (x && (r(g, e, v),
              null != g.duration && (t = g.duration,
              delete g.duration)),
              w) {
                  w = g.startAt = {};
                  for (y in a.startAt)
                      w[y] = a.startAt[y];
                  r(g.startAt, e, v)
              }
              g.delay = _(v, e[v], e) + (g.delay || 0),
              v === m && d && (g.onComplete = function() {
                  a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                  d.apply(h || a.callbackScope || this, f || p)
              }
              ),
              b[v] = new s(e[v],t,g)
          }
          return b
      }
      ,
      s.staggerFrom = s.allFrom = function(e, t, i, n, r, o, a) {
          return i.runBackwards = !0,
          i.immediateRender = 0 != i.immediateRender,
          s.staggerTo(e, t, i, n, r, o, a)
      }
      ,
      s.staggerFromTo = s.allFromTo = function(e, t, i, n, r, o, a, l) {
          return n.startAt = i,
          n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
          s.staggerTo(e, t, n, r, o, a, l)
      }
      ,
      s.delayedCall = function(e, t, i, n, r) {
          return new s(t,0,{
              delay: e,
              onComplete: t,
              onCompleteParams: i,
              callbackScope: n,
              onReverseComplete: t,
              onReverseCompleteParams: i,
              immediateRender: !1,
              useFrames: r,
              overwrite: 0
          })
      }
      ,
      s.set = function(e, t) {
          return new s(e,0,t)
      }
      ,
      s.isTweening = function(e) {
          return i.getTweensOf(e, !0).length > 0
      }
      ;
      var f = function(e, t) {
          for (var n = [], r = 0, o = e._first; o; )
              o instanceof i ? n[r++] = o : (t && (n[r++] = o),
              n = n.concat(f(o, t)),
              r = n.length),
              o = o._next;
          return n
      }
        , h = s.getAllTweens = function(t) {
          return f(e._rootTimeline, t).concat(f(e._rootFramesTimeline, t))
      }
      ;
      s.killAll = function(e, i, n, r) {
          null == i && (i = !0),
          null == n && (n = !0);
          var o, s, a, l = h(0 != r), c = l.length, u = i && n && r;
          for (a = 0; c > a; a++)
              s = l[a],
              (u || s instanceof t || (o = s.target === s.vars.onComplete) && n || i && !o) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
      }
      ,
      s.killChildTweensOf = function(e, t) {
          if (null != e) {
              var r, o, a, d, p, f = l.tweenLookup;
              if ("string" == typeof e && (e = i.selector(e) || e),
              c(e) && (e = n(e)),
              u(e))
                  for (d = e.length; --d > -1; )
                      s.killChildTweensOf(e[d], t);
              else {
                  r = [];
                  for (a in f)
                      for (o = f[a].target.parentNode; o; )
                          o === e && (r = r.concat(f[a].tweens)),
                          o = o.parentNode;
                  for (p = r.length,
                  d = 0; p > d; d++)
                      t && r[d].totalTime(r[d].totalDuration()),
                      r[d]._enabled(!1, !1)
              }
          }
      }
      ;
      var m = function(e, i, n, r) {
          i = i !== !1,
          n = n !== !1,
          r = r !== !1;
          for (var o, s, a = h(r), l = i && n && r, c = a.length; --c > -1; )
              s = a[c],
              (l || s instanceof t || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(e)
      };
      return s.pauseAll = function(e, t, i) {
          m(!0, e, t, i)
      }
      ,
      s.resumeAll = function(e, t, i) {
          m(!1, e, t, i)
      }
      ,
      s.globalTimeScale = function(t) {
          var n = e._rootTimeline
            , r = i.ticker.time;
          return arguments.length ? (t = t || a,
          n._startTime = r - (r - n._startTime) * n._timeScale / t,
          n = e._rootFramesTimeline,
          r = i.ticker.frame,
          n._startTime = r - (r - n._startTime) * n._timeScale / t,
          n._timeScale = e._rootTimeline._timeScale = t,
          t) : n._timeScale
      }
      ,
      d.progress = function(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
      }
      ,
      d.totalProgress = function(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
      }
      ,
      d.time = function(e, t) {
          if (!arguments.length)
              return this._time;
          this._dirty && this.totalDuration();
          var i = this._duration
            , n = this._cycle
            , r = n * (i + this._repeatDelay);
          return e > i && (e = i),
          this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t)
      }
      ,
      d.duration = function(t) {
          return arguments.length ? e.prototype.duration.call(this, t) : this._duration
      }
      ,
      d.totalDuration = function(e) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
          this._dirty = !1),
          this._totalDuration)
      }
      ,
      d.repeat = function(e) {
          return arguments.length ? (this._repeat = e,
          this._uncache(!0)) : this._repeat
      }
      ,
      d.repeatDelay = function(e) {
          return arguments.length ? (this._repeatDelay = e,
          this._uncache(!0)) : this._repeatDelay
      }
      ,
      d.yoyo = function(e) {
          return arguments.length ? (this._yoyo = e,
          this) : this._yoyo
      }
      ,
      s
  }, !0),
  _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
      var n = function(e) {
          t.call(this, e);
          var i, n, r = this, o = r.vars;
          r._labels = {},
          r.autoRemoveChildren = !!o.autoRemoveChildren,
          r.smoothChildTiming = !!o.smoothChildTiming,
          r._sortChildren = !0,
          r._onUpdate = o.onUpdate;
          for (n in o)
              i = o[n],
              l(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = r._swapSelfInParams(i));
          l(o.tweens) && r.add(o.tweens, 0, o.align, o.stagger)
      }
        , r = 1e-8
        , o = i._internals
        , s = n._internals = {}
        , a = o.isSelector
        , l = o.isArray
        , c = o.lazyTweens
        , u = o.lazyRender
        , d = _gsScope._gsDefine.globals
        , p = function(e) {
          var t, i = {};
          for (t in e)
              i[t] = e[t];
          return i
      }
        , f = function(e, t, i) {
          var n, r, o = e.cycle;
          for (n in o)
              r = o[n],
              e[n] = "function" == typeof r ? r(i, t[i], t) : r[i % r.length];
          delete e.cycle
      }
        , h = s.pauseCallback = function() {}
        , m = function(e) {
          var t, i = [], n = e.length;
          for (t = 0; t !== n; i.push(e[t++]))
              ;
          return i
      }
        , g = function(e, t, i, n) {
          var r = "immediateRender";
          return r in t || (t[r] = !(e._paused || i && i[r] === !1 || n)),
          t
      }
        , v = function(e) {
          if ("function" == typeof e)
              return e;
          var t = "object" == typeof e ? e : {
              each: e
          }
            , i = t.ease
            , n = t.from || 0
            , r = t.base || 0
            , o = {}
            , s = isNaN(n)
            , a = t.axis
            , l = {
              center: .5,
              end: 1
          }[n] || 0;
          return function(e, c, u) {
              var d, p, f, h, m, g, v, y, b, _ = (u || t).length, x = o[_];
              if (!x) {
                  if (b = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0],
                  !b) {
                      for (v = -(1 / 0); v < (v = u[b++].getBoundingClientRect().left) && _ > b; )
                          ;
                      b--
                  }
                  for (x = o[_] = [],
                  d = s ? Math.min(b, _) * l - .5 : n % b,
                  p = s ? _ * l / b - .5 : n / b | 0,
                  v = 0,
                  y = 1 / 0,
                  g = 0; _ > g; g++)
                      f = g % b - d,
                      h = p - (g / b | 0),
                      x[g] = m = a ? Math.abs("y" === a ? h : f) : Math.sqrt(f * f + h * h),
                      m > v && (v = m),
                      y > m && (y = m);
                  x.max = v - y,
                  x.min = y,
                  x.v = _ = t.amount || t.each * (b > _ ? _ : a ? "y" === a ? _ / b : b : Math.max(b, _ / b)) || 0,
                  x.b = 0 > _ ? r - _ : r
              }
              return _ = (x[e] - x.min) / x.max,
              x.b + (i ? i.getRatio(_) : _) * x.v
          }
      }
        , y = n.prototype = new t;
      return n.version = "2.1.1",
      n.distribute = v,
      y.constructor = n,
      y.kill()._gc = y._forcingPlayhead = y._hasPause = !1,
      y.to = function(e, t, n, r) {
          var o = n.repeat && d.TweenMax || i;
          return t ? this.add(new o(e,t,n), r) : this.set(e, n, r)
      }
      ,
      y.from = function(e, t, n, r) {
          return this.add((n.repeat && d.TweenMax || i).from(e, t, g(this, n)), r)
      }
      ,
      y.fromTo = function(e, t, n, r, o) {
          var s = r.repeat && d.TweenMax || i;
          return r = g(this, r, n),
          t ? this.add(s.fromTo(e, t, n, r), o) : this.set(e, r, o)
      }
      ,
      y.staggerTo = function(e, t, r, o, s, l, c, u) {
          var d, h, g = new n({
              onComplete: l,
              onCompleteParams: c,
              callbackScope: u,
              smoothChildTiming: this.smoothChildTiming
          }), y = v(r.stagger || o), b = r.startAt, _ = r.cycle;
          for ("string" == typeof e && (e = i.selector(e) || e),
          e = e || [],
          a(e) && (e = m(e)),
          h = 0; h < e.length; h++)
              d = p(r),
              b && (d.startAt = p(b),
              b.cycle && f(d.startAt, e, h)),
              _ && (f(d, e, h),
              null != d.duration && (t = d.duration,
              delete d.duration)),
              g.to(e[h], t, d, y(h, e[h], e));
          return this.add(g, s)
      }
      ,
      y.staggerFrom = function(e, t, i, n, r, o, s, a) {
          return i.runBackwards = !0,
          this.staggerTo(e, t, g(this, i), n, r, o, s, a)
      }
      ,
      y.staggerFromTo = function(e, t, i, n, r, o, s, a, l) {
          return n.startAt = i,
          this.staggerTo(e, t, g(this, n, i), r, o, s, a, l)
      }
      ,
      y.call = function(e, t, n, r) {
          return this.add(i.delayedCall(0, e, t, n), r)
      }
      ,
      y.set = function(e, t, n) {
          return this.add(new i(e,0,g(this, t, null, !0)), n)
      }
      ,
      n.exportRoot = function(e, t) {
          e = e || {},
          null == e.smoothChildTiming && (e.smoothChildTiming = !0);
          var r, o, s, a, l = new n(e), c = l._timeline;
          for (null == t && (t = !0),
          c._remove(l, !0),
          l._startTime = 0,
          l._rawPrevTime = l._time = l._totalTime = c._time,
          s = c._first; s; )
              a = s._next,
              t && s instanceof i && s.target === s.vars.onComplete || (o = s._startTime - s._delay,
              0 > o && (r = 1),
              l.add(s, o)),
              s = a;
          return c.add(l, 0),
          r && l.totalDuration(),
          l
      }
      ,
      y.add = function(r, o, s, a) {
          var c, u, d, p, f, h, m = this;
          if ("number" != typeof o && (o = m._parseTimeOrLabel(o, 0, !0, r)),
          !(r instanceof e)) {
              if (r instanceof Array || r && r.push && l(r)) {
                  for (s = s || "normal",
                  a = a || 0,
                  c = o,
                  u = r.length,
                  d = 0; u > d; d++)
                      l(p = r[d]) && (p = new n({
                          tweens: p
                      })),
                      m.add(p, c),
                      "string" != typeof p && "function" != typeof p && ("sequence" === s ? c = p._startTime + p.totalDuration() / p._timeScale : "start" === s && (p._startTime -= p.delay())),
                      c += a;
                  return m._uncache(!0)
              }
              if ("string" == typeof r)
                  return m.addLabel(r, o);
              if ("function" != typeof r)
                  throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
              r = i.delayedCall(0, r)
          }
          if (t.prototype.add.call(m, r, o),
          (r._time || !r._duration && r._initted) && (c = (m.rawTime() - r._startTime) * r._timeScale,
          (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), c))) - r._totalTime > 1e-5) && r.render(c, !1, !1)),
          (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
              for (f = m,
              h = f.rawTime() > r._startTime; f._timeline; )
                  h && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                  f = f._timeline;
          return m
      }
      ,
      y.remove = function(t) {
          if (t instanceof e) {
              this._remove(t, !1);
              var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
              return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
              this
          }
          if (t instanceof Array || t && t.push && l(t)) {
              for (var n = t.length; --n > -1; )
                  this.remove(t[n]);
              return this
          }
          return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
      }
      ,
      y._remove = function(e, i) {
          t.prototype._remove.call(this, e, i);
          var n = this._last;
          return n ? this._time > this.duration() && (this._time = this._duration,
          this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
          this
      }
      ,
      y.append = function(e, t) {
          return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
      }
      ,
      y.insert = y.insertMultiple = function(e, t, i, n) {
          return this.add(e, t || 0, i, n)
      }
      ,
      y.appendMultiple = function(e, t, i, n) {
          return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
      }
      ,
      y.addLabel = function(e, t) {
          return this._labels[e] = this._parseTimeOrLabel(t),
          this
      }
      ,
      y.addPause = function(e, t, n, r) {
          var o = i.delayedCall(0, h, n, r || this);
          return o.vars.onComplete = o.vars.onReverseComplete = t,
          o.data = "isPause",
          this._hasPause = !0,
          this.add(o, e)
      }
      ,
      y.removeLabel = function(e) {
          return delete this._labels[e],
          this
      }
      ,
      y.getLabelTime = function(e) {
          return null != this._labels[e] ? this._labels[e] : -1
      }
      ,
      y._parseTimeOrLabel = function(t, i, n, r) {
          var o, s;
          if (r instanceof e && r.timeline === this)
              this.remove(r);
          else if (r && (r instanceof Array || r.push && l(r)))
              for (s = r.length; --s > -1; )
                  r[s]instanceof e && r[s].timeline === this && this.remove(r[s]);
          if (o = "number" != typeof t || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
          "string" == typeof i)
              return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - o : 0, n);
          if (i = i || 0,
          "string" != typeof t || !isNaN(t) && null == this._labels[t])
              null == t && (t = o);
          else {
              if (s = t.indexOf("="),
              -1 === s)
                  return null == this._labels[t] ? n ? this._labels[t] = o + i : i : this._labels[t] + i;
              i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)),
              t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : o
          }
          return Number(t) + i
      }
      ,
      y.seek = function(e, t) {
          return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
      }
      ,
      y.stop = function() {
          return this.paused(!0)
      }
      ,
      y.gotoAndPlay = function(e, t) {
          return this.play(e, t)
      }
      ,
      y.gotoAndStop = function(e, t) {
          return this.pause(e, t)
      }
      ,
      y.render = function(e, t, i) {
          this._gc && this._enabled(!0, !1);
          var n, o, s, a, l, d, p, f, h = this, m = h._time, g = h._dirty ? h.totalDuration() : h._totalDuration, v = h._startTime, y = h._timeScale, b = h._paused;
          if (m !== h._time && (e += h._time - m),
          e >= g - r && e >= 0)
              h._totalTime = h._time = g,
              h._reversed || h._hasPausedChild() || (o = !0,
              a = "onComplete",
              l = !!h._timeline.autoRemoveChildren,
              0 === h._duration && (0 >= e && e >= -r || h._rawPrevTime < 0 || h._rawPrevTime === r) && h._rawPrevTime !== e && h._first && (l = !0,
              h._rawPrevTime > r && (a = "onReverseComplete"))),
              h._rawPrevTime = h._duration || !t || e || h._rawPrevTime === e ? e : r,
              e = g + 1e-4;
          else if (r > e)
              if (h._totalTime = h._time = 0,
              e > -r && (e = 0),
              (0 !== m || 0 === h._duration && h._rawPrevTime !== r && (h._rawPrevTime > 0 || 0 > e && h._rawPrevTime >= 0)) && (a = "onReverseComplete",
              o = h._reversed),
              0 > e)
                  h._active = !1,
                  h._timeline.autoRemoveChildren && h._reversed ? (l = o = !0,
                  a = "onReverseComplete") : h._rawPrevTime >= 0 && h._first && (l = !0),
                  h._rawPrevTime = e;
              else {
                  if (h._rawPrevTime = h._duration || !t || e || h._rawPrevTime === e ? e : r,
                  0 === e && o)
                      for (n = h._first; n && 0 === n._startTime; )
                          n._duration || (o = !1),
                          n = n._next;
                  e = 0,
                  h._initted || (l = !0)
              }
          else {
              if (h._hasPause && !h._forcingPlayhead && !t) {
                  if (e >= m)
                      for (n = h._first; n && n._startTime <= e && !d; )
                          n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === h._rawPrevTime || (d = n),
                          n = n._next;
                  else
                      for (n = h._last; n && n._startTime >= e && !d; )
                          n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n),
                          n = n._prev;
                  d && (h._time = h._totalTime = e = d._startTime,
                  f = h._startTime + e / h._timeScale)
              }
              h._totalTime = h._time = h._rawPrevTime = e
          }
          if (h._time !== m && h._first || i || l || d) {
              if (h._initted || (h._initted = !0),
              h._active || !h._paused && h._time !== m && e > 0 && (h._active = !0),
              0 === m && h.vars.onStart && (0 === h._time && h._duration || t || h._callback("onStart")),
              p = h._time,
              p >= m)
                  for (n = h._first; n && (s = n._next,
                  p === h._time && (!h._paused || b)); )
                      (n._active || n._startTime <= p && !n._paused && !n._gc) && (d === n && (h.pause(),
                      h._pauseTime = f),
                      n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                      n = s;
              else
                  for (n = h._last; n && (s = n._prev,
                  p === h._time && (!h._paused || b)); ) {
                      if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                          if (d === n) {
                              for (d = n._prev; d && d.endTime() > h._time; )
                                  d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, i),
                                  d = d._prev;
                              d = null,
                              h.pause(),
                              h._pauseTime = f
                          }
                          n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                      }
                      n = s
                  }
              h._onUpdate && (t || (c.length && u(),
              h._callback("onUpdate"))),
              a && (h._gc || (v === h._startTime || y !== h._timeScale) && (0 === h._time || g >= h.totalDuration()) && (o && (c.length && u(),
              h._timeline.autoRemoveChildren && h._enabled(!1, !1),
              h._active = !1),
              !t && h.vars[a] && h._callback(a)))
          }
      }
      ,
      y._hasPausedChild = function() {
          for (var e = this._first; e; ) {
              if (e._paused || e instanceof n && e._hasPausedChild())
                  return !0;
              e = e._next
          }
          return !1
      }
      ,
      y.getChildren = function(e, t, n, r) {
          r = r || -9999999999;
          for (var o = [], s = this._first, a = 0; s; )
              s._startTime < r || (s instanceof i ? t !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s),
              e !== !1 && (o = o.concat(s.getChildren(!0, t, n)),
              a = o.length))),
              s = s._next;
          return o
      }
      ,
      y.getTweensOf = function(e, t) {
          var n, r, o = this._gc, s = [], a = 0;
          for (o && this._enabled(!0, !0),
          n = i.getTweensOf(e),
          r = n.length; --r > -1; )
              (n[r].timeline === this || t && this._contains(n[r])) && (s[a++] = n[r]);
          return o && this._enabled(!1, !0),
          s
      }
      ,
      y.recent = function() {
          return this._recent
      }
      ,
      y._contains = function(e) {
          for (var t = e.timeline; t; ) {
              if (t === this)
                  return !0;
              t = t.timeline
          }
          return !1
      }
      ,
      y.shiftChildren = function(e, t, i) {
          i = i || 0;
          for (var n, r = this._first, o = this._labels; r; )
              r._startTime >= i && (r._startTime += e),
              r = r._next;
          if (t)
              for (n in o)
                  o[n] >= i && (o[n] += e);
          return this._uncache(!0)
      }
      ,
      y._kill = function(e, t) {
          if (!e && !t)
              return this._enabled(!1, !1);
          for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
              i[n]._kill(e, t) && (r = !0);
          return r
      }
      ,
      y.clear = function(e) {
          var t = this.getChildren(!1, !0, !0)
            , i = t.length;
          for (this._time = this._totalTime = 0; --i > -1; )
              t[i]._enabled(!1, !1);
          return e !== !1 && (this._labels = {}),
          this._uncache(!0)
      }
      ,
      y.invalidate = function() {
          for (var t = this._first; t; )
              t.invalidate(),
              t = t._next;
          return e.prototype.invalidate.call(this)
      }
      ,
      y._enabled = function(e, i) {
          if (e === this._gc)
              for (var n = this._first; n; )
                  n._enabled(e, !0),
                  n = n._next;
          return t.prototype._enabled.call(this, e, i)
      }
      ,
      y.totalTime = function() {
          this._forcingPlayhead = !0;
          var t = e.prototype.totalTime.apply(this, arguments);
          return this._forcingPlayhead = !1,
          t
      }
      ,
      y.duration = function(e) {
          return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e),
          this) : (this._dirty && this.totalDuration(),
          this._duration)
      }
      ,
      y.totalDuration = function(e) {
          if (!arguments.length) {
              if (this._dirty) {
                  for (var t, i, n = 0, r = this, o = r._last, s = 999999999999; o; )
                      t = o._prev,
                      o._dirty && o.totalDuration(),
                      o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1,
                      r.add(o, o._startTime - o._delay),
                      r._calculatingDuration = 0) : s = o._startTime,
                      o._startTime < 0 && !o._paused && (n -= o._startTime,
                      r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale,
                      r._time -= o._startTime,
                      r._totalTime -= o._startTime,
                      r._rawPrevTime -= o._startTime),
                      r.shiftChildren(-o._startTime, !1, -9999999999),
                      s = 0),
                      i = o._startTime + o._totalDuration / o._timeScale,
                      i > n && (n = i),
                      o = t;
                  r._duration = r._totalDuration = n,
                  r._dirty = !1
              }
              return this._totalDuration
          }
          return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
      }
      ,
      y.paused = function(t) {
          if (t === !1 && this._paused)
              for (var i = this._first; i; )
                  i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                  i = i._next;
          return e.prototype.paused.apply(this, arguments)
      }
      ,
      y.usesFrames = function() {
          for (var t = this._timeline; t._timeline; )
              t = t._timeline;
          return t === e._rootFramesTimeline
      }
      ,
      y.rawTime = function(e) {
          return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
      }
      ,
      n
  }, !0),
  _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
      var n = function(t) {
          e.call(this, t),
          this._repeat = this.vars.repeat || 0,
          this._repeatDelay = this.vars.repeatDelay || 0,
          this._cycle = 0,
          this._yoyo = !!this.vars.yoyo,
          this._dirty = !0
      }
        , r = 1e-8
        , o = t._internals
        , s = o.lazyTweens
        , a = o.lazyRender
        , l = _gsScope._gsDefine.globals
        , c = new i(null,null,1,0)
        , u = n.prototype = new e;
      return u.constructor = n,
      u.kill()._gc = !1,
      n.version = "2.1.1",
      u.invalidate = function() {
          return this._yoyo = !!this.vars.yoyo,
          this._repeat = this.vars.repeat || 0,
          this._repeatDelay = this.vars.repeatDelay || 0,
          this._uncache(!0),
          e.prototype.invalidate.call(this)
      }
      ,
      u.addCallback = function(e, i, n, r) {
          return this.add(t.delayedCall(0, e, n, r), i)
      }
      ,
      u.removeCallback = function(e, t) {
          if (e)
              if (null == t)
                  this._kill(null, e);
              else
                  for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1; )
                      i[n]._startTime === r && i[n]._enabled(!1, !1);
          return this
      }
      ,
      u.removePause = function(t) {
          return this.removeCallback(e._internals.pauseCallback, t)
      }
      ,
      u.tweenTo = function(e, i) {
          i = i || {};
          var n, r, o, s = {
              ease: c,
              useFrames: this.usesFrames(),
              immediateRender: !1,
              lazy: !1
          }, a = i.repeat && l.TweenMax || t;
          for (r in i)
              s[r] = i[r];
          return s.time = this._parseTimeOrLabel(e),
          n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001,
          o = new a(this,n,s),
          s.onStart = function() {
              o.target.paused(!0),
              o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0),
              i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
          }
          ,
          o
      }
      ,
      u.tweenFromTo = function(e, t, i) {
          i = i || {},
          e = this._parseTimeOrLabel(e),
          i.startAt = {
              onComplete: this.seek,
              onCompleteParams: [e],
              callbackScope: this
          },
          i.immediateRender = i.immediateRender !== !1;
          var n = this.tweenTo(t, i);
          return n.isFromTo = 1,
          n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
      }
      ,
      u.render = function(e, t, i) {
          this._gc && this._enabled(!0, !1);
          var n, o, l, c, u, d, p, f, h, m = this, g = m._time, v = m._dirty ? m.totalDuration() : m._totalDuration, y = m._duration, b = m._totalTime, _ = m._startTime, x = m._timeScale, w = m._rawPrevTime, T = m._paused, k = m._cycle;
          if (g !== m._time && (e += m._time - g),
          e >= v - r && e >= 0)
              m._locked || (m._totalTime = v,
              m._cycle = m._repeat),
              m._reversed || m._hasPausedChild() || (o = !0,
              c = "onComplete",
              u = !!m._timeline.autoRemoveChildren,
              0 === m._duration && (0 >= e && e >= -r || 0 > w || w === r) && w !== e && m._first && (u = !0,
              w > r && (c = "onReverseComplete"))),
              m._rawPrevTime = m._duration || !t || e || m._rawPrevTime === e ? e : r,
              m._yoyo && 1 & m._cycle ? m._time = e = 0 : (m._time = y,
              e = y + 1e-4);
          else if (r > e)
              if (m._locked || (m._totalTime = m._cycle = 0),
              m._time = 0,
              e > -r && (e = 0),
              (0 !== g || 0 === y && w !== r && (w > 0 || 0 > e && w >= 0) && !m._locked) && (c = "onReverseComplete",
              o = m._reversed),
              0 > e)
                  m._active = !1,
                  m._timeline.autoRemoveChildren && m._reversed ? (u = o = !0,
                  c = "onReverseComplete") : w >= 0 && m._first && (u = !0),
                  m._rawPrevTime = e;
              else {
                  if (m._rawPrevTime = y || !t || e || m._rawPrevTime === e ? e : r,
                  0 === e && o)
                      for (n = m._first; n && 0 === n._startTime; )
                          n._duration || (o = !1),
                          n = n._next;
                  e = 0,
                  m._initted || (u = !0)
              }
          else if (0 === y && 0 > w && (u = !0),
          m._time = m._rawPrevTime = e,
          m._locked || (m._totalTime = e,
          0 !== m._repeat && (d = y + m._repeatDelay,
          m._cycle = m._totalTime / d >> 0,
          m._cycle && m._cycle === m._totalTime / d && e >= b && m._cycle--,
          m._time = m._totalTime - m._cycle * d,
          m._yoyo && 1 & m._cycle && (m._time = y - m._time),
          m._time > y ? (m._time = y,
          e = y + 1e-4) : m._time < 0 ? m._time = e = 0 : e = m._time)),
          m._hasPause && !m._forcingPlayhead && !t) {
              if (e = m._time,
              e >= g || m._repeat && k !== m._cycle)
                  for (n = m._first; n && n._startTime <= e && !p; )
                      n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === m._rawPrevTime || (p = n),
                      n = n._next;
              else
                  for (n = m._last; n && n._startTime >= e && !p; )
                      n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n),
                      n = n._prev;
              p && (h = m._startTime + p._startTime / m._timeScale,
              p._startTime < y && (m._time = m._rawPrevTime = e = p._startTime,
              m._totalTime = e + m._cycle * (m._totalDuration + m._repeatDelay)))
          }
          if (m._cycle !== k && !m._locked) {
              var S = m._yoyo && 0 !== (1 & k)
                , C = S === (m._yoyo && 0 !== (1 & m._cycle))
                , P = m._totalTime
                , E = m._cycle
                , A = m._rawPrevTime
                , $ = m._time;
              if (m._totalTime = k * y,
              m._cycle < k ? S = !S : m._totalTime += y,
              m._time = g,
              m._rawPrevTime = 0 === y ? w - 1e-4 : w,
              m._cycle = k,
              m._locked = !0,
              g = S ? 0 : y,
              m.render(g, t, 0 === y),
              t || m._gc || m.vars.onRepeat && (m._cycle = E,
              m._locked = !1,
              m._callback("onRepeat")),
              g !== m._time)
                  return;
              if (C && (m._cycle = k,
              m._locked = !0,
              g = S ? y + 1e-4 : -1e-4,
              m.render(g, !0, !1)),
              m._locked = !1,
              m._paused && !T)
                  return;
              m._time = $,
              m._totalTime = P,
              m._cycle = E,
              m._rawPrevTime = A
          }
          if (!(m._time !== g && m._first || i || u || p))
              return void (b !== m._totalTime && m._onUpdate && (t || m._callback("onUpdate")));
          if (m._initted || (m._initted = !0),
          m._active || !m._paused && m._totalTime !== b && e > 0 && (m._active = !0),
          0 === b && m.vars.onStart && (0 === m._totalTime && m._totalDuration || t || m._callback("onStart")),
          f = m._time,
          f >= g)
              for (n = m._first; n && (l = n._next,
              f === m._time && (!m._paused || T)); )
                  (n._active || n._startTime <= m._time && !n._paused && !n._gc) && (p === n && (m.pause(),
                  m._pauseTime = h),
                  n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)),
                  n = l;
          else
              for (n = m._last; n && (l = n._prev,
              f === m._time && (!m._paused || T)); ) {
                  if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                      if (p === n) {
                          for (p = n._prev; p && p.endTime() > m._time; )
                              p.render(p._reversed ? p.totalDuration() - (e - p._startTime) * p._timeScale : (e - p._startTime) * p._timeScale, t, i),
                              p = p._prev;
                          p = null,
                          m.pause(),
                          m._pauseTime = h
                      }
                      n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                  }
                  n = l
              }
          m._onUpdate && (t || (s.length && a(),
          m._callback("onUpdate"))),
          c && (m._locked || m._gc || (_ === m._startTime || x !== m._timeScale) && (0 === m._time || v >= m.totalDuration()) && (o && (s.length && a(),
          m._timeline.autoRemoveChildren && m._enabled(!1, !1),
          m._active = !1),
          !t && m.vars[c] && m._callback(c)))
      }
      ,
      u.getActive = function(e, t, i) {
          var n, r, o = [], s = this.getChildren(e || null == e, t || null == e, !!i), a = 0, l = s.length;
          for (n = 0; l > n; n++)
              r = s[n],
              r.isActive() && (o[a++] = r);
          return o
      }
      ,
      u.getLabelAfter = function(e) {
          e || 0 !== e && (e = this._time);
          var t, i = this.getLabelsArray(), n = i.length;
          for (t = 0; n > t; t++)
              if (i[t].time > e)
                  return i[t].name;
          return null
      }
      ,
      u.getLabelBefore = function(e) {
          null == e && (e = this._time);
          for (var t = this.getLabelsArray(), i = t.length; --i > -1; )
              if (t[i].time < e)
                  return t[i].name;
          return null
      }
      ,
      u.getLabelsArray = function() {
          var e, t = [], i = 0;
          for (e in this._labels)
              t[i++] = {
                  time: this._labels[e],
                  name: e
              };
          return t.sort(function(e, t) {
              return e.time - t.time
          }),
          t
      }
      ,
      u.invalidate = function() {
          return this._locked = !1,
          e.prototype.invalidate.call(this)
      }
      ,
      u.progress = function(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
      }
      ,
      u.totalProgress = function(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
      }
      ,
      u.totalDuration = function(t) {
          return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this),
          this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
          this._totalDuration)
      }
      ,
      u.time = function(e, t) {
          if (!arguments.length)
              return this._time;
          this._dirty && this.totalDuration();
          var i = this._duration
            , n = this._cycle
            , r = n * (i + this._repeatDelay);
          return e > i && (e = i),
          this.totalTime(this._yoyo && 1 & n ? i - e + r : this._repeat ? e + r : e, t)
      }
      ,
      u.repeat = function(e) {
          return arguments.length ? (this._repeat = e,
          this._uncache(!0)) : this._repeat
      }
      ,
      u.repeatDelay = function(e) {
          return arguments.length ? (this._repeatDelay = e,
          this._uncache(!0)) : this._repeatDelay
      }
      ,
      u.yoyo = function(e) {
          return arguments.length ? (this._yoyo = e,
          this) : this._yoyo
      }
      ,
      u.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + r)
      }
      ,
      n
  }, !0),
  function() {
      var e = 180 / Math.PI
        , t = []
        , i = []
        , n = []
        , r = {}
        , o = _gsScope._gsDefine.globals
        , s = function(e, t, i, n) {
          i === n && (i = n - (n - t) / 1e6),
          e === t && (t = e + (i - e) / 1e6),
          this.a = e,
          this.b = t,
          this.c = i,
          this.d = n,
          this.da = n - e,
          this.ca = i - e,
          this.ba = t - e
      }
        , a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
        , l = function(e, t, i, n) {
          var r = {
              a: e
          }
            , o = {}
            , s = {}
            , a = {
              c: n
          }
            , l = (e + t) / 2
            , c = (t + i) / 2
            , u = (i + n) / 2
            , d = (l + c) / 2
            , p = (c + u) / 2
            , f = (p - d) / 8;
          return r.b = l + (e - l) / 4,
          o.b = d + f,
          r.c = o.a = (r.b + o.b) / 2,
          o.c = s.a = (d + p) / 2,
          s.b = p - f,
          a.b = u + (n - u) / 4,
          s.c = a.a = (s.b + a.b) / 2,
          [r, o, s, a]
      }
        , c = function(e, r, o, s, a) {
          var c, u, d, p, f, h, m, g, v, y, b, _, x, w = e.length - 1, T = 0, k = e[0].a;
          for (c = 0; w > c; c++)
              f = e[T],
              u = f.a,
              d = f.d,
              p = e[T + 1].d,
              a ? (b = t[c],
              _ = i[c],
              x = (_ + b) * r * .25 / (s ? .5 : n[c] || .5),
              h = d - (d - u) * (s ? .5 * r : 0 !== b ? x / b : 0),
              m = d + (p - d) * (s ? .5 * r : 0 !== _ ? x / _ : 0),
              g = d - (h + ((m - h) * (3 * b / (b + _) + .5) / 4 || 0))) : (h = d - (d - u) * r * .5,
              m = d + (p - d) * r * .5,
              g = d - (h + m) / 2),
              h += g,
              m += g,
              f.c = v = h,
              f.b = 0 !== c ? k : k = f.a + .6 * (f.c - f.a),
              f.da = d - u,
              f.ca = v - u,
              f.ba = k - u,
              o ? (y = l(u, k, v, d),
              e.splice(T, 1, y[0], y[1], y[2], y[3]),
              T += 4) : T++,
              k = m;
          f = e[T],
          f.b = k,
          f.c = k + .4 * (f.d - k),
          f.da = f.d - f.a,
          f.ca = f.c - f.a,
          f.ba = k - f.a,
          o && (y = l(f.a, k, f.c, f.d),
          e.splice(T, 1, y[0], y[1], y[2], y[3]))
      }
        , u = function(e, n, r, o) {
          var a, l, c, u, d, p, f = [];
          if (o)
              for (e = [o].concat(e),
              l = e.length; --l > -1; )
                  "string" == typeof (p = e[l][n]) && "=" === p.charAt(1) && (e[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
          if (a = e.length - 2,
          0 > a)
              return f[0] = new s(e[0][n],0,0,e[0][n]),
              f;
          for (l = 0; a > l; l++)
              c = e[l][n],
              u = e[l + 1][n],
              f[l] = new s(c,0,0,u),
              r && (d = e[l + 2][n],
              t[l] = (t[l] || 0) + (u - c) * (u - c),
              i[l] = (i[l] || 0) + (d - u) * (d - u));
          return f[l] = new s(e[l][n],0,0,e[l + 1][n]),
          f
      }
        , d = function(e, o, s, l, d, p) {
          var f, h, m, g, v, y, b, _, x = {}, w = [], T = p || e[0];
          d = "string" == typeof d ? "," + d + "," : a,
          null == o && (o = 1);
          for (h in e[0])
              w.push(h);
          if (e.length > 1) {
              for (_ = e[e.length - 1],
              b = !0,
              f = w.length; --f > -1; )
                  if (h = w[f],
                  Math.abs(T[h] - _[h]) > .05) {
                      b = !1;
                      break
                  }
              b && (e = e.concat(),
              p && e.unshift(p),
              e.push(e[1]),
              p = e[e.length - 3])
          }
          for (t.length = i.length = n.length = 0,
          f = w.length; --f > -1; )
              h = w[f],
              r[h] = -1 !== d.indexOf("," + h + ","),
              x[h] = u(e, h, r[h], p);
          for (f = t.length; --f > -1; )
              t[f] = Math.sqrt(t[f]),
              i[f] = Math.sqrt(i[f]);
          if (!l) {
              for (f = w.length; --f > -1; )
                  if (r[h])
                      for (m = x[w[f]],
                      y = m.length - 1,
                      g = 0; y > g; g++)
                          v = m[g + 1].da / i[g] + m[g].da / t[g] || 0,
                          n[g] = (n[g] || 0) + v * v;
              for (f = n.length; --f > -1; )
                  n[f] = Math.sqrt(n[f])
          }
          for (f = w.length,
          g = s ? 4 : 1; --f > -1; )
              h = w[f],
              m = x[h],
              c(m, o, s, l, r[h]),
              b && (m.splice(0, g),
              m.splice(m.length - g, g));
          return x
      }
        , p = function(e, t, i) {
          t = t || "soft";
          var n, r, o, a, l, c, u, d, p, f, h, m = {}, g = "cubic" === t ? 3 : 2, v = "soft" === t, y = [];
          if (v && i && (e = [i].concat(e)),
          null == e || e.length < g + 1)
              throw "invalid Bezier data";
          for (p in e[0])
              y.push(p);
          for (c = y.length; --c > -1; ) {
              for (p = y[c],
              m[p] = l = [],
              f = 0,
              d = e.length,
              u = 0; d > u; u++)
                  n = null == i ? e[u][p] : "string" == typeof (h = e[u][p]) && "=" === h.charAt(1) ? i[p] + Number(h.charAt(0) + h.substr(2)) : Number(h),
                  v && u > 1 && d - 1 > u && (l[f++] = (n + l[f - 2]) / 2),
                  l[f++] = n;
              for (d = f - g + 1,
              f = 0,
              u = 0; d > u; u += g)
                  n = l[u],
                  r = l[u + 1],
                  o = l[u + 2],
                  a = 2 === g ? 0 : l[u + 3],
                  l[f++] = h = 3 === g ? new s(n,r,o,a) : new s(n,(2 * r + n) / 3,(2 * r + o) / 3,o);
              l.length = f
          }
          return m
      }
        , f = function(e, t, i) {
          for (var n, r, o, s, a, l, c, u, d, p, f, h = 1 / i, m = e.length; --m > -1; )
              for (p = e[m],
              o = p.a,
              s = p.d - o,
              a = p.c - o,
              l = p.b - o,
              n = r = 0,
              u = 1; i >= u; u++)
                  c = h * u,
                  d = 1 - c,
                  n = r - (r = (c * c * s + 3 * d * (c * a + d * l)) * c),
                  f = m * i + u - 1,
                  t[f] = (t[f] || 0) + n * n
      }
        , h = function(e, t) {
          t = t >> 0 || 6;
          var i, n, r, o, s = [], a = [], l = 0, c = 0, u = t - 1, d = [], p = [];
          for (i in e)
              f(e[i], s, t);
          for (r = s.length,
          n = 0; r > n; n++)
              l += Math.sqrt(s[n]),
              o = n % t,
              p[o] = l,
              o === u && (c += l,
              o = n / t >> 0,
              d[o] = p,
              a[o] = c,
              l = 0,
              p = []);
          return {
              length: c,
              lengths: a,
              segments: d
          }
      }
        , m = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.8",
          API: 2,
          global: !0,
          init: function(e, t, i) {
              this._target = e,
              t instanceof Array && (t = {
                  values: t
              }),
              this._func = {},
              this._mod = {},
              this._props = [],
              this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
              var n, r, o, s, a, l = t.values || [], c = {}, u = l[0], f = t.autoRotate || i.vars.orientToBezier;
              this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
              for (n in u)
                  this._props.push(n);
              for (o = this._props.length; --o > -1; )
                  n = this._props[o],
                  this._overwriteProps.push(n),
                  r = this._func[n] = "function" == typeof e[n],
                  c[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                  a || c[n] !== l[0][n] && (a = c);
              if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? d(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : p(l, t.type, c),
              this._segCount = this._beziers[n].length,
              this._timeRes) {
                  var m = h(this._beziers, this._timeRes);
                  this._length = m.length,
                  this._lengths = m.lengths,
                  this._segments = m.segments,
                  this._l1 = this._li = this._s1 = this._si = 0,
                  this._l2 = this._lengths[0],
                  this._curSeg = this._segments[0],
                  this._s2 = this._curSeg[0],
                  this._prec = 1 / this._curSeg.length
              }
              if (f = this._autoRotate)
                  for (this._initialRotations = [],
                  f[0]instanceof Array || (this._autoRotate = f = [f]),
                  o = f.length; --o > -1; ) {
                      for (s = 0; 3 > s; s++)
                          n = f[o][s],
                          this._func[n] = "function" == typeof e[n] ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                      n = f[o][2],
                      this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                      this._overwriteProps.push(n)
                  }
              return this._startRatio = i.vars.runBackwards ? 1 : 0,
              !0
          },
          set: function(t) {
              var i, n, r, o, s, a, l, c, u, d, p = this._segCount, f = this._func, h = this._target, m = t !== this._startRatio;
              if (this._timeRes) {
                  if (u = this._lengths,
                  d = this._curSeg,
                  t *= this._length,
                  r = this._li,
                  t > this._l2 && p - 1 > r) {
                      for (c = p - 1; c > r && (this._l2 = u[++r]) <= t; )
                          ;
                      this._l1 = u[r - 1],
                      this._li = r,
                      this._curSeg = d = this._segments[r],
                      this._s2 = d[this._s1 = this._si = 0]
                  } else if (t < this._l1 && r > 0) {
                      for (; r > 0 && (this._l1 = u[--r]) >= t; )
                          ;
                      0 === r && t < this._l1 ? this._l1 = 0 : r++,
                      this._l2 = u[r],
                      this._li = r,
                      this._curSeg = d = this._segments[r],
                      this._s1 = d[(this._si = d.length - 1) - 1] || 0,
                      this._s2 = d[this._si]
                  }
                  if (i = r,
                  t -= this._l1,
                  r = this._si,
                  t > this._s2 && r < d.length - 1) {
                      for (c = d.length - 1; c > r && (this._s2 = d[++r]) <= t; )
                          ;
                      this._s1 = d[r - 1],
                      this._si = r
                  } else if (t < this._s1 && r > 0) {
                      for (; r > 0 && (this._s1 = d[--r]) >= t; )
                          ;
                      0 === r && t < this._s1 ? this._s1 = 0 : r++,
                      this._s2 = d[r],
                      this._si = r
                  }
                  a = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
              } else
                  i = 0 > t ? 0 : t >= 1 ? p - 1 : p * t >> 0,
                  a = (t - i * (1 / p)) * p;
              for (n = 1 - a,
              r = this._props.length; --r > -1; )
                  o = this._props[r],
                  s = this._beziers[o][i],
                  l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a,
                  this._mod[o] && (l = this._mod[o](l, h)),
                  f[o] ? h[o](l) : h[o] = l;
              if (this._autoRotate) {
                  var g, v, y, b, _, x, w, T = this._autoRotate;
                  for (r = T.length; --r > -1; )
                      o = T[r][2],
                      x = T[r][3] || 0,
                      w = T[r][4] === !0 ? 1 : e,
                      s = this._beziers[T[r][0]],
                      g = this._beziers[T[r][1]],
                      s && g && (s = s[i],
                      g = g[i],
                      v = s.a + (s.b - s.a) * a,
                      b = s.b + (s.c - s.b) * a,
                      v += (b - v) * a,
                      b += (s.c + (s.d - s.c) * a - b) * a,
                      y = g.a + (g.b - g.a) * a,
                      _ = g.b + (g.c - g.b) * a,
                      y += (_ - y) * a,
                      _ += (g.c + (g.d - g.c) * a - _) * a,
                      l = m ? Math.atan2(_ - y, b - v) * w + x : this._initialRotations[r],
                      this._mod[o] && (l = this._mod[o](l, h)),
                      f[o] ? h[o](l) : h[o] = l)
              }
          }
      })
        , g = m.prototype;
      m.bezierThrough = d,
      m.cubicToQuadratic = l,
      m._autoCSS = !0,
      m.quadraticToCubic = function(e, t, i) {
          return new s(e,(2 * t + e) / 3,(2 * t + i) / 3,i)
      }
      ,
      m._cssRegister = function() {
          var e = o.CSSPlugin;
          if (e) {
              var t = e._internals
                , i = t._parseToProxy
                , n = t._setPluginRatio
                , r = t.CSSPropTween;
              t._registerComplexSpecialProp("bezier", {
                  parser: function(e, t, o, s, a, l) {
                      t instanceof Array && (t = {
                          values: t
                      }),
                      l = new m;
                      var c, u, d, p = t.values, f = p.length - 1, h = [], g = {};
                      if (0 > f)
                          return a;
                      for (c = 0; f >= c; c++)
                          d = i(e, p[c], s, a, l, f !== c),
                          h[c] = d.end;
                      for (u in t)
                          g[u] = t[u];
                      return g.values = h,
                      a = new r(e,"bezier",0,0,d.pt,2),
                      a.data = d,
                      a.plugin = l,
                      a.setRatio = n,
                      0 === g.autoRotate && (g.autoRotate = !0),
                      !g.autoRotate || g.autoRotate instanceof Array || (c = g.autoRotate === !0 ? 0 : Number(g.autoRotate),
                      g.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x ? [["x", "y", "rotation", c, !1]] : !1),
                      g.autoRotate && (s._transform || s._enableTransforms(!1),
                      d.autoRotate = s._target._gsTransform,
                      d.proxy.rotation = d.autoRotate.rotation || 0,
                      s._overwriteProps.push("rotation")),
                      l._onInitTween(d.proxy, g, s._tween),
                      a
                  }
              })
          }
      }
      ,
      g._mod = function(e) {
          for (var t, i = this._overwriteProps, n = i.length; --n > -1; )
              t = e[i[n]],
              t && "function" == typeof t && (this._mod[i[n]] = t)
      }
      ,
      g._kill = function(e) {
          var t, i, n = this._props;
          for (t in this._beziers)
              if (t in e)
                  for (delete this._beziers[t],
                  delete this._func[t],
                  i = n.length; --i > -1; )
                      n[i] === t && n.splice(i, 1);
          if (n = this._autoRotate)
              for (i = n.length; --i > -1; )
                  e[n[i][2]] && n.splice(i, 1);
          return this._super._kill.call(this, e)
      }
  }(),
  _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
      var i, n, r, o, s = function() {
          e.call(this, "css"),
          this._overwriteProps.length = 0,
          this.setRatio = s.prototype.setRatio
      }, a = _gsScope._gsDefine.globals, l = {}, c = s.prototype = new e("css");
      c.constructor = s,
      s.version = "2.1.0",
      s.API = 2,
      s.defaultTransformPerspective = 0,
      s.defaultSkewType = "compensated",
      s.defaultSmoothOrigin = !0,
      c = "px",
      s.suffixMap = {
          top: c,
          right: c,
          bottom: c,
          left: c,
          width: c,
          height: c,
          fontSize: c,
          padding: c,
          margin: c,
          perspective: c,
          lineHeight: ""
      };
      var u, d, p, f, h, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, k = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, P = /([A-Z])/g, E = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, $ = function(e, t) {
          return t.toUpperCase()
      }, O = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, j = /,(?=[^\)]*(?:\(|$))/gi, z = /[\s,\(]/i, N = Math.PI / 180, R = 180 / Math.PI, I = {}, L = {
          style: {}
      }, F = _gsScope.document || {
          createElement: function() {
              return L
          }
      }, H = function(e, t) {
          return t && F.createElementNS ? F.createElementNS(t, e) : F.createElement(e)
      }, B = H("div"), q = H("img"), W = s._internals = {
          _specialProps: l
      }, X = (_gsScope.navigator || {}).userAgent || "", U = function() {
          var e = X.indexOf("Android")
            , t = H("a");
          return p = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || parseFloat(X.substr(e + 8, 2)) > 3),
          h = p && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6,
          f = -1 !== X.indexOf("Firefox"),
          (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)),
          t ? (t.style.cssText = "top:1px;opacity:.55;",
          /^0.55/.test(t.style.opacity)) : !1
      }(), Y = function(e) {
          return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
      }, G = function(e) {
          _gsScope.console && console.log(e)
      }, V = "", Z = "", Q = function(e, t) {
          t = t || B;
          var i, n, r = t.style;
          if (void 0 !== r[e])
              return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1),
          i = ["O", "Moz", "ms", "Ms", "Webkit"],
          n = 5; --n > -1 && void 0 === r[i[n] + e]; )
              ;
          return n >= 0 ? (Z = 3 === n ? "ms" : i[n],
          V = "-" + Z.toLowerCase() + "-",
          Z + e) : null
      }, K = "undefined" != typeof window ? window : F.defaultView || {
          getComputedStyle: function() {}
      }, J = function(e) {
          return K.getComputedStyle(e)
      }, et = s.getStyle = function(e, t, i, n, r) {
          var o;
          return U || "opacity" !== t ? (!n && e.style[t] ? o = e.style[t] : (i = i || J(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(P, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]),
          null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Y(e)
      }
      , tt = W.convertToPixels = function(e, i, n, r, o) {
          if ("px" === r || !r && "lineHeight" !== i)
              return n;
          if ("auto" === r || !n)
              return 0;
          var a, l, c, u = O.test(i), d = e, p = B.style, f = 0 > n, h = 1 === n;
          if (f && (n = -n),
          h && (n *= 100),
          "lineHeight" !== i || r)
              if ("%" === r && -1 !== i.indexOf("border"))
                  a = n / 100 * (u ? e.clientWidth : e.clientHeight);
              else {
                  if (p.cssText = "border:0 solid red;position:" + et(e, "position") + ";line-height:0;",
                  "%" !== r && d.appendChild && "v" !== r.charAt(0) && "rem" !== r)
                      p[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                  else {
                      if (d = e.parentNode || F.body,
                      -1 !== et(d, "display").indexOf("flex") && (p.position = "absolute"),
                      l = d._gsCache,
                      c = t.ticker.frame,
                      l && u && l.time === c)
                          return l.width * n / 100;
                      p[u ? "width" : "height"] = n + r
                  }
                  d.appendChild(B),
                  a = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]),
                  d.removeChild(B),
                  u && "%" === r && s.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {},
                  l.time = c,
                  l.width = a / n * 100),
                  0 !== a || o || (a = tt(e, i, n, r, !0))
              }
          else
              l = J(e).lineHeight,
              e.style.lineHeight = n,
              a = parseFloat(J(e).lineHeight),
              e.style.lineHeight = l;
          return h && (a /= 100),
          f ? -a : a
      }
      , it = W.calculateOffset = function(e, t, i) {
          if ("absolute" !== et(e, "position", i))
              return 0;
          var n = "left" === t ? "Left" : "Top"
            , r = et(e, "margin" + n, i);
          return e["offset" + n] - (tt(e, t, parseFloat(r), r.replace(w, "")) || 0)
      }
      , nt = function(e, t) {
          var i, n, r, o = {};
          if (t = t || J(e, null))
              if (i = t.length)
                  for (; --i > -1; )
                      r = t[i],
                      (-1 === r.indexOf("-transform") || $t === r) && (o[r.replace(E, $)] = t.getPropertyValue(r));
              else
                  for (i in t)
                      (-1 === i.indexOf("Transform") || At === i) && (o[i] = t[i]);
          else if (t = e.currentStyle || e.style)
              for (i in t)
                  "string" == typeof i && void 0 === o[i] && (o[i.replace(E, $)] = t[i]);
          return U || (o.opacity = Y(e)),
          n = Wt(e, t, !1),
          o.rotation = n.rotation,
          o.skewX = n.skewX,
          o.scaleX = n.scaleX,
          o.scaleY = n.scaleY,
          o.x = n.x,
          o.y = n.y,
          Mt && (o.z = n.z,
          o.rotationX = n.rotationX,
          o.rotationY = n.rotationY,
          o.scaleZ = n.scaleZ),
          o.filters && delete o.filters,
          o
      }, rt = function(e, t, i, n, r) {
          var o, s, a, l = {}, c = e.style;
          for (s in i)
              "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(x, "") ? o : 0 : it(e, s),
              void 0 !== c[s] && (a = new bt(c,s,c[s],a)));
          if (n)
              for (s in n)
                  "className" !== s && (l[s] = n[s]);
          return {
              difs: l,
              firstMPT: a
          }
      }, ot = {
          width: ["Left", "Right"],
          height: ["Top", "Bottom"]
      }, st = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function(e, t, i) {
          if ("svg" === (e.nodeName + "").toLowerCase())
              return (i || J(e))[t] || 0;
          if (e.getCTM && Ht(e))
              return e.getBBox()[t] || 0;
          var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight)
            , r = ot[t]
            , o = r.length;
          for (i = i || J(e, null); --o > -1; )
              n -= parseFloat(et(e, "padding" + r[o], i, !0)) || 0,
              n -= parseFloat(et(e, "border" + r[o] + "Width", i, !0)) || 0;
          return n
      }, lt = function(e, t) {
          if ("contain" === e || "auto" === e || "auto auto" === e)
              return e + " ";
          (null == e || "" === e) && (e = "0 0");
          var i, n = e.split(" "), r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0], o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
          if (n.length > 3 && !t) {
              for (n = e.split(", ").join(",").split(","),
              e = [],
              i = 0; i < n.length; i++)
                  e.push(lt(n[i]));
              return e.join(",")
          }
          return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"),
          ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
          e = r + " " + o + (n.length > 2 ? " " + n[2] : ""),
          t && (t.oxp = -1 !== r.indexOf("%"),
          t.oyp = -1 !== o.indexOf("%"),
          t.oxr = "=" === r.charAt(1),
          t.oyr = "=" === o.charAt(1),
          t.ox = parseFloat(r.replace(x, "")),
          t.oy = parseFloat(o.replace(x, "")),
          t.v = e),
          t || e
      }, ct = function(e, t) {
          return "function" == typeof e && (e = e(v, g)),
          "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
      }, ut = function(e, t) {
          "function" == typeof e && (e = e(v, g));
          var i = "string" == typeof e && "=" === e.charAt(1);
          return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? e.substr(2) : e) / 100)),
          null == e ? t : i ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
      }, dt = function(e, t, i, n) {
          var r, o, s, a, l, c = 1e-6;
          return "function" == typeof e && (e = e(v, g)),
          null == e ? a = t : "number" == typeof e ? a = e : (r = 360,
          o = e.split("_"),
          l = "=" === e.charAt(1),
          s = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : R) - (l ? 0 : t),
          o.length && (n && (n[i] = t + s),
          -1 !== e.indexOf("short") && (s %= r,
          s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)),
          -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)),
          a = t + s),
          c > a && a > -c && (a = 0),
          a
      }, pt = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0]
      }, ft = function(e, t, i) {
          return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e,
          255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
      }, ht = s.parseColor = function(e, t) {
          var i, n, r, o, s, a, l, c, u, d, p;
          if (e)
              if ("number" == typeof e)
                  i = [e >> 16, e >> 8 & 255, 255 & e];
              else {
                  if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)),
                  pt[e])
                      i = pt[e];
                  else if ("#" === e.charAt(0))
                      4 === e.length && (n = e.charAt(1),
                      r = e.charAt(2),
                      o = e.charAt(3),
                      e = "#" + n + n + r + r + o + o),
                      e = parseInt(e.substr(1), 16),
                      i = [e >> 16, e >> 8 & 255, 255 & e];
                  else if ("hsl" === e.substr(0, 3))
                      if (i = p = e.match(y),
                      t) {
                          if (-1 !== e.indexOf("="))
                              return e.match(b)
                      } else
                          s = Number(i[0]) % 360 / 360,
                          a = Number(i[1]) / 100,
                          l = Number(i[2]) / 100,
                          r = .5 >= l ? l * (a + 1) : l + a - l * a,
                          n = 2 * l - r,
                          i.length > 3 && (i[3] = Number(i[3])),
                          i[0] = ft(s + 1 / 3, n, r),
                          i[1] = ft(s, n, r),
                          i[2] = ft(s - 1 / 3, n, r);
                  else
                      i = e.match(y) || pt.transparent;
                  i[0] = Number(i[0]),
                  i[1] = Number(i[1]),
                  i[2] = Number(i[2]),
                  i.length > 3 && (i[3] = Number(i[3]))
              }
          else
              i = pt.black;
          return t && !p && (n = i[0] / 255,
          r = i[1] / 255,
          o = i[2] / 255,
          c = Math.max(n, r, o),
          u = Math.min(n, r, o),
          l = (c + u) / 2,
          c === u ? s = a = 0 : (d = c - u,
          a = l > .5 ? d / (2 - c - u) : d / (c + u),
          s = c === n ? (r - o) / d + (o > r ? 6 : 0) : c === r ? (o - n) / d + 2 : (n - r) / d + 4,
          s *= 60),
          i[0] = s + .5 | 0,
          i[1] = 100 * a + .5 | 0,
          i[2] = 100 * l + .5 | 0),
          i
      }
      , mt = function(e, t) {
          var i, n, r, o = e.match(gt) || [], s = 0, a = "";
          if (!o.length)
              return e;
          for (i = 0; i < o.length; i++)
              n = o[i],
              r = e.substr(s, e.indexOf(n, s) - s),
              s += r.length + n.length,
              n = ht(n, t),
              3 === n.length && n.push(1),
              a += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
          return a + e.substr(s)
      }, gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (c in pt)
          gt += "|" + c + "\\b";
      gt = new RegExp(gt + ")","gi"),
      s.colorStringFilter = function(e) {
          var t, i = e[0] + " " + e[1];
          gt.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
          e[0] = mt(e[0], t),
          e[1] = mt(e[1], t)),
          gt.lastIndex = 0
      }
      ,
      t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
      var vt = function(e, t, i, n) {
          if (null == e)
              return function(e) {
                  return e
              }
              ;
          var r, o = t ? (e.match(gt) || [""])[0] : "", s = e.split(o).join("").match(_) || [], a = e.substr(0, e.indexOf(s[0])), l = ")" === e.charAt(e.length - 1) ? ")" : "", c = -1 !== e.indexOf(" ") ? " " : ",", u = s.length, d = u > 0 ? s[0].replace(y, "") : "";
          return u ? r = t ? function(e) {
              var t, p, f, h;
              if ("number" == typeof e)
                  e += d;
              else if (n && j.test(e)) {
                  for (h = e.replace(j, "|").split("|"),
                  f = 0; f < h.length; f++)
                      h[f] = r(h[f]);
                  return h.join(",")
              }
              if (t = (e.match(gt) || [o])[0],
              p = e.split(t).join("").match(_) || [],
              f = p.length,
              u > f--)
                  for (; ++f < u; )
                      p[f] = i ? p[(f - 1) / 2 | 0] : s[f];
              return a + p.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
          }
          : function(e) {
              var t, o, p;
              if ("number" == typeof e)
                  e += d;
              else if (n && j.test(e)) {
                  for (o = e.replace(j, "|").split("|"),
                  p = 0; p < o.length; p++)
                      o[p] = r(o[p]);
                  return o.join(",")
              }
              if (t = e.match(_) || [],
              p = t.length,
              u > p--)
                  for (; ++p < u; )
                      t[p] = i ? t[(p - 1) / 2 | 0] : s[p];
              return a + t.join(c) + l
          }
          : function(e) {
              return e
          }
      }
        , yt = function(e) {
          return e = e.split(","),
          function(t, i, n, r, o, s, a) {
              var l, c = (i + "").split(" ");
              for (a = {},
              l = 0; 4 > l; l++)
                  a[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
              return r.parse(t, a, o, s)
          }
      }
        , bt = (W._setPluginRatio = function(e) {
          this.plugin.setRatio(e);
          for (var t, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT, c = 1e-6; l; )
              t = a[l.v],
              l.r ? t = l.r(t) : c > t && t > -c && (t = 0),
              l.t[l.p] = t,
              l = l._next;
          if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation),
          1 === e || 0 === e)
              for (l = s.firstMPT,
              o = 1 === e ? "e" : "b"; l; ) {
                  if (i = l.t,
                  i.type) {
                      if (1 === i.type) {
                          for (r = i.xs0 + i.s + i.xs1,
                          n = 1; n < i.l; n++)
                              r += i["xn" + n] + i["xs" + (n + 1)];
                          i[o] = r
                      }
                  } else
                      i[o] = i.s + i.xs0;
                  l = l._next
              }
      }
      ,
      function(e, t, i, n, r) {
          this.t = e,
          this.p = t,
          this.v = i,
          this.r = r,
          n && (n._prev = this,
          this._next = n)
      }
      )
        , _t = (W._parseToProxy = function(e, t, i, n, r, o) {
          var s, a, l, c, u, d = n, p = {}, f = {}, h = i._transform, m = I;
          for (i._transform = null,
          I = t,
          n = u = i.parse(e, t, n, r),
          I = m,
          o && (i._transform = h,
          d && (d._prev = null,
          d._prev && (d._prev._next = null))); n && n !== d; ) {
              if (n.type <= 1 && (a = n.p,
              f[a] = n.s + n.c,
              p[a] = n.s,
              o || (c = new bt(n,"s",a,c,n.r),
              n.c = 0),
              1 === n.type))
                  for (s = n.l; --s > 0; )
                      l = "xn" + s,
                      a = n.p + "_" + l,
                      f[a] = n.data[l],
                      p[a] = n[l],
                      o || (c = new bt(n,l,a,c,n.rxp[l]));
              n = n._next
          }
          return {
              proxy: p,
              end: f,
              firstMPT: c,
              pt: u
          }
      }
      ,
      W.CSSPropTween = function(e, t, n, r, s, a, l, c, u, d, p) {
          this.t = e,
          this.p = t,
          this.s = n,
          this.c = r,
          this.n = l || t,
          e instanceof _t || o.push(this.n),
          this.r = c ? "function" == typeof c ? c : Math.round : c,
          this.type = a || 0,
          u && (this.pr = u,
          i = !0),
          this.b = void 0 === d ? n : d,
          this.e = void 0 === p ? n + r : p,
          s && (this._next = s,
          s._prev = this)
      }
      )
        , xt = function(e, t, i, n, r, o) {
          var s = new _t(e,t,i,n - i,r,-1,o);
          return s.b = i,
          s.e = s.xs0 = n,
          s
      }
        , wt = s.parseComplex = function(e, t, i, n, r, o, a, l, c, d) {
          i = i || o || "",
          "function" == typeof n && (n = n(v, g)),
          a = new _t(e,t,0,0,a,d ? 2 : 1,null,!1,l,i,n),
          n += "",
          r && gt.test(n + i) && (n = [i, n],
          s.colorStringFilter(n),
          i = n[0],
          n = n[1]);
          var p, f, h, m, _, x, w, T, k, S, C, P, E, A = i.split(", ").join(",").split(" "), $ = n.split(", ").join(",").split(" "), O = A.length, M = u !== !1;
          for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (A = A.join(" ").replace(j, ", ").split(" "),
          $ = $.join(" ").replace(j, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "),
          $ = $.join(" ").split(",").join(", ").split(" ")),
          O = A.length),
          O !== $.length && (A = (o || "").split(" "),
          O = A.length),
          a.plugin = c,
          a.setRatio = d,
          gt.lastIndex = 0,
          p = 0; O > p; p++)
              if (m = A[p],
              _ = $[p] + "",
              T = parseFloat(m),
              T || 0 === T)
                  a.appendXtra("", T, ct(_, T), _.replace(b, ""), M && -1 !== _.indexOf("px") ? Math.round : !1, !0);
              else if (r && gt.test(m))
                  P = _.indexOf(")") + 1,
                  P = ")" + (P ? _.substr(P) : ""),
                  E = -1 !== _.indexOf("hsl") && U,
                  S = _,
                  m = ht(m, E),
                  _ = ht(_, E),
                  k = m.length + _.length > 6,
                  k && !U && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                  a.e = a.e.split($[p]).join("transparent")) : (U || (k = !1),
                  E ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (k ? "hsla(" : "hsl("), m[0], ct(_[0], m[0]), ",", !1, !0).appendXtra("", m[1], ct(_[1], m[1]), "%,", !1).appendXtra("", m[2], ct(_[2], m[2]), k ? "%," : "%" + P, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (k ? "rgba(" : "rgb("), m[0], _[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], _[1] - m[1], ",", Math.round).appendXtra("", m[2], _[2] - m[2], k ? "," : P, Math.round),
                  k && (m = m.length < 4 ? 1 : m[3],
                  a.appendXtra("", m, (_.length < 4 ? 1 : _[3]) - m, P, !1))),
                  gt.lastIndex = 0;
              else if (x = m.match(y)) {
                  if (w = _.match(b),
                  !w || w.length !== x.length)
                      return a;
                  for (h = 0,
                  f = 0; f < x.length; f++)
                      C = x[f],
                      S = m.indexOf(C, h),
                      a.appendXtra(m.substr(h, S - h), Number(C), ct(w[f], C), "", M && "px" === m.substr(S + C.length, 2) ? Math.round : !1, 0 === f),
                      h = S + C.length;
                  a["xs" + a.l] += m.substr(h)
              } else
                  a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + _ : _;
          if (-1 !== n.indexOf("=") && a.data) {
              for (P = a.xs0 + a.data.s,
              p = 1; p < a.l; p++)
                  P += a["xs" + p] + a.data["xn" + p];
              a.e = P + a["xs" + p]
          }
          return a.l || (a.type = -1,
          a.xs0 = a.e),
          a.xfirst || a
      }
        , Tt = 9;
      for (c = _t.prototype,
      c.l = c.pr = 0; --Tt > 0; )
          c["xn" + Tt] = 0,
          c["xs" + Tt] = "";
      c.xs0 = "",
      c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
      c.appendXtra = function(e, t, i, n, r, o) {
          var s = this
            , a = s.l;
          return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "",
          i || 0 === a || s.plugin ? (s.l++,
          s.type = s.setRatio ? 2 : 1,
          s["xs" + s.l] = n || "",
          a > 0 ? (s.data["xn" + a] = t + i,
          s.rxp["xn" + a] = r,
          s["xn" + a] = t,
          s.plugin || (s.xfirst = new _t(s,"xn" + a,t,i,s.xfirst || s,0,s.n,r,s.pr),
          s.xfirst.xs0 = 0),
          s) : (s.data = {
              s: t + i
          },
          s.rxp = {},
          s.s = t,
          s.c = i,
          s.r = r,
          s)) : (s["xs" + a] += t + (n || ""),
          s)
      }
      ;
      var kt = function(e, t) {
          t = t || {},
          this.p = t.prefix ? Q(e) || e : e,
          l[e] = l[this.p] = this,
          this.format = t.formatter || vt(t.defaultValue, t.color, t.collapsible, t.multi),
          t.parser && (this.parse = t.parser),
          this.clrs = t.color,
          this.multi = t.multi,
          this.keyword = t.keyword,
          this.dflt = t.defaultValue,
          this.allowFunc = t.allowFunc,
          this.pr = t.priority || 0
      }
        , St = W._registerComplexSpecialProp = function(e, t, i) {
          "object" != typeof t && (t = {
              parser: i
          });
          var n, r, o = e.split(","), s = t.defaultValue;
          for (i = i || [s],
          n = 0; n < o.length; n++)
              t.prefix = 0 === n && t.prefix,
              t.defaultValue = i[n] || s,
              r = new kt(o[n],t)
      }
        , Ct = W._registerPluginProp = function(e) {
          if (!l[e]) {
              var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
              St(e, {
                  parser: function(e, i, n, r, o, s, c) {
                      var u = a.com.greensock.plugins[t];
                      return u ? (u._cssRegister(),
                      l[n].parse(e, i, n, r, o, s, c)) : (G("Error: " + t + " js file not loaded."),
                      o)
                  }
              })
          }
      }
      ;
      c = kt.prototype,
      c.parseComplex = function(e, t, i, n, r, o) {
          var s, a, l, c, u, d, p = this.keyword;
          if (this.multi && (j.test(i) || j.test(t) ? (a = t.replace(j, "|").split("|"),
          l = i.replace(j, "|").split("|")) : p && (a = [t],
          l = [i])),
          l) {
              for (c = l.length > a.length ? l.length : a.length,
              s = 0; c > s; s++)
                  t = a[s] = a[s] || this.dflt,
                  i = l[s] = l[s] || this.dflt,
                  p && (u = t.indexOf(p),
                  d = i.indexOf(p),
                  u !== d && (-1 === d ? a[s] = a[s].split(p).join("") : -1 === u && (a[s] += " " + p)));
              t = a.join(", "),
              i = l.join(", ")
          }
          return wt(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, o)
      }
      ,
      c.parse = function(e, t, i, n, o, s) {
          return this.parseComplex(e.style, this.format(et(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
      }
      ,
      s.registerSpecialProp = function(e, t, i) {
          St(e, {
              parser: function(e, n, r, o, s, a) {
                  var l = new _t(e,r,0,0,s,2,r,!1,i);
                  return l.plugin = a,
                  l.setRatio = t(e, n, o._tween, r),
                  l
              },
              priority: i
          })
      }
      ,
      s.useSVGTransformAttr = !0;
      var Pt, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), At = Q("transform"), $t = V + "transform", Ot = Q("transformOrigin"), Mt = null !== Q("perspective"), Dt = W.Transform = function() {
          this.perspective = parseFloat(s.defaultTransformPerspective) || 0,
          this.force3D = s.defaultForce3D !== !1 && Mt ? s.defaultForce3D || "auto" : !1
      }
      , jt = _gsScope.SVGElement, zt = function(e, t, i) {
          var n, r = F.createElementNS("http://www.w3.org/2000/svg", e), o = /([a-z])([A-Z])/g;
          for (n in i)
              r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
          return t.appendChild(r),
          r
      }, Nt = F.documentElement || {}, Rt = function() {
          var e, t, i, n = m || /Android/i.test(X) && !_gsScope.chrome;
          return F.createElementNS && !n && (e = zt("svg", Nt),
          t = zt("rect", e, {
              width: 100,
              height: 50,
              x: 100
          }),
          i = t.getBoundingClientRect().width,
          t.style[Ot] = "50% 50%",
          t.style[At] = "scaleX(0.5)",
          n = i === t.getBoundingClientRect().width && !(f && Mt),
          Nt.removeChild(e)),
          n
      }(), It = function(e, t, i, n, r, o) {
          var a, l, c, u, d, p, f, h, m, g, v, y, b, _, x = e._gsTransform, w = qt(e, !0);
          x && (b = x.xOrigin,
          _ = x.yOrigin),
          (!n || (a = n.split(" ")).length < 2) && (f = e.getBBox(),
          0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = {
              x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
              y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
              width: 0,
              height: 0
          }),
          t = lt(t).split(" "),
          a = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) + f.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]),
          i.xOrigin = u = parseFloat(a[0]),
          i.yOrigin = d = parseFloat(a[1]),
          n && w !== Bt && (p = w[0],
          f = w[1],
          h = w[2],
          m = w[3],
          g = w[4],
          v = w[5],
          y = p * m - f * h,
          y && (l = u * (m / y) + d * (-h / y) + (h * v - m * g) / y,
          c = u * (-f / y) + d * (p / y) - (p * v - f * g) / y,
          u = i.xOrigin = a[0] = l,
          d = i.yOrigin = a[1] = c)),
          x && (o && (i.xOffset = x.xOffset,
          i.yOffset = x.yOffset,
          x = i),
          r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = u - b,
          c = d - _,
          x.xOffset += l * w[0] + c * w[2] - l,
          x.yOffset += l * w[1] + c * w[3] - c) : x.xOffset = x.yOffset = 0),
          o || e.setAttribute("data-svg-origin", a.join(" "))
      }, Lt = function(e) {
          var t, i = H("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, o = this.style.cssText;
          if (Nt.appendChild(i),
          i.appendChild(this),
          this.style.display = "block",
          e)
              try {
                  t = this.getBBox(),
                  this._originalGetBBox = this.getBBox,
                  this.getBBox = Lt
              } catch (s) {}
          else
              this._originalGetBBox && (t = this._originalGetBBox());
          return r ? n.insertBefore(this, r) : n.appendChild(this),
          Nt.removeChild(i),
          this.style.cssText = o,
          t
      }, Ft = function(e) {
          try {
              return e.getBBox()
          } catch (t) {
              return Lt.call(e, !0)
          }
      }, Ht = function(e) {
          return !(!jt || !e.getCTM || e.parentNode && !e.ownerSVGElement || !Ft(e))
      }, Bt = [1, 0, 0, 1, 0, 0], qt = function(e, t) {
          var i, n, r, o, s, a, l, c = e._gsTransform || new Dt, u = 1e5, d = e.style;
          if (At ? n = et(e, $t, null, !0) : e.currentStyle && (n = e.currentStyle.filter.match(M),
          n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), c.x || 0, c.y || 0].join(",") : ""),
          i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
          At && i && !e.offsetParent && (o = d.display,
          d.display = "block",
          l = e.parentNode,
          l && e.offsetParent || (s = 1,
          a = e.nextSibling,
          Nt.appendChild(e)),
          n = et(e, $t, null, !0),
          i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
          o ? d.display = o : Gt(d, "display"),
          s && (a ? l.insertBefore(e, a) : l ? l.appendChild(e) : Nt.removeChild(e))),
          (c.svg || e.getCTM && Ht(e)) && (i && -1 !== (d[At] + "").indexOf("matrix") && (n = d[At],
          i = 0),
          r = e.getAttribute("transform"),
          i && r && (r = e.transform.baseVal.consolidate().matrix,
          n = "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")",
          i = 0)),
          i)
              return Bt;
          for (r = (n || "").match(y) || [],
          Tt = r.length; --Tt > -1; )
              o = Number(r[Tt]),
              r[Tt] = (s = o - (o |= 0)) ? (s * u + (0 > s ? -.5 : .5) | 0) / u + o : o;
          return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
      }, Wt = W.getTransform = function(e, i, n, r) {
          if (e._gsTransform && n && !r)
              return e._gsTransform;
          var o, a, l, c, u, d, p = n ? e._gsTransform || new Dt : new Dt, f = p.scaleX < 0, h = 2e-5, m = 1e5, g = Mt ? parseFloat(et(e, Ot, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0, v = parseFloat(s.defaultTransformPerspective) || 0;
          if (p.svg = !(!e.getCTM || !Ht(e)),
          p.svg && (It(e, et(e, Ot, i, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")),
          Pt = s.useSVGTransformAttr || Rt),
          o = qt(e),
          o !== Bt) {
              if (16 === o.length) {
                  var y, b, _, x, w, T = o[0], k = o[1], S = o[2], C = o[3], P = o[4], E = o[5], A = o[6], $ = o[7], O = o[8], M = o[9], D = o[10], j = o[12], z = o[13], N = o[14], I = o[11], L = Math.atan2(A, D);
                  p.zOrigin && (N = -p.zOrigin,
                  j = O * N - o[12],
                  z = M * N - o[13],
                  N = D * N + p.zOrigin - o[14]),
                  p.rotationX = L * R,
                  L && (x = Math.cos(-L),
                  w = Math.sin(-L),
                  y = P * x + O * w,
                  b = E * x + M * w,
                  _ = A * x + D * w,
                  O = P * -w + O * x,
                  M = E * -w + M * x,
                  D = A * -w + D * x,
                  I = $ * -w + I * x,
                  P = y,
                  E = b,
                  A = _),
                  L = Math.atan2(-S, D),
                  p.rotationY = L * R,
                  L && (x = Math.cos(-L),
                  w = Math.sin(-L),
                  y = T * x - O * w,
                  b = k * x - M * w,
                  _ = S * x - D * w,
                  M = k * w + M * x,
                  D = S * w + D * x,
                  I = C * w + I * x,
                  T = y,
                  k = b,
                  S = _),
                  L = Math.atan2(k, T),
                  p.rotation = L * R,
                  L && (x = Math.cos(L),
                  w = Math.sin(L),
                  y = T * x + k * w,
                  b = P * x + E * w,
                  _ = O * x + M * w,
                  k = k * x - T * w,
                  E = E * x - P * w,
                  M = M * x - O * w,
                  T = y,
                  P = b,
                  O = _),
                  p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0,
                  p.rotationY = 180 - p.rotationY),
                  L = Math.atan2(P, E),
                  p.scaleX = (Math.sqrt(T * T + k * k + S * S) * m + .5 | 0) / m,
                  p.scaleY = (Math.sqrt(E * E + A * A) * m + .5 | 0) / m,
                  p.scaleZ = (Math.sqrt(O * O + M * M + D * D) * m + .5 | 0) / m,
                  T /= p.scaleX,
                  P /= p.scaleY,
                  k /= p.scaleX,
                  E /= p.scaleY,
                  Math.abs(L) > h ? (p.skewX = L * R,
                  P = 0,
                  "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(L))) : p.skewX = 0,
                  p.perspective = I ? 1 / (0 > I ? -I : I) : 0,
                  p.x = j,
                  p.y = z,
                  p.z = N,
                  p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * P),
                  p.y -= p.yOrigin - (p.yOrigin * k - p.xOrigin * E))
              } else if (!Mt || r || !o.length || p.x !== o[4] || p.y !== o[5] || !p.rotationX && !p.rotationY) {
                  var F = o.length >= 6
                    , H = F ? o[0] : 1
                    , B = o[1] || 0
                    , q = o[2] || 0
                    , W = F ? o[3] : 1;
                  p.x = o[4] || 0,
                  p.y = o[5] || 0,
                  l = Math.sqrt(H * H + B * B),
                  c = Math.sqrt(W * W + q * q),
                  u = H || B ? Math.atan2(B, H) * R : p.rotation || 0,
                  d = q || W ? Math.atan2(q, W) * R + u : p.skewX || 0,
                  p.scaleX = l,
                  p.scaleY = c,
                  p.rotation = u,
                  p.skewX = d,
                  Mt && (p.rotationX = p.rotationY = p.z = 0,
                  p.perspective = v,
                  p.scaleZ = 1),
                  p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * q),
                  p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * W))
              }
              Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1,
              p.skewX += p.rotation <= 0 ? 180 : -180,
              p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1,
              p.skewX += p.skewX <= 0 ? 180 : -180)),
              p.zOrigin = g;
              for (a in p)
                  p[a] < h && p[a] > -h && (p[a] = 0)
          }
          return n && (e._gsTransform = p,
          p.svg && (Pt && e.style[At] ? t.delayedCall(.001, function() {
              Gt(e.style, At)
          }) : !Pt && e.getAttribute("transform") && t.delayedCall(.001, function() {
              e.removeAttribute("transform")
          }))),
          p
      }
      , Xt = function(e) {
          var t, i, n = this.data, r = -n.rotation * N, o = r + n.skewX * N, s = 1e5, a = (Math.cos(r) * n.scaleX * s | 0) / s, l = (Math.sin(r) * n.scaleX * s | 0) / s, c = (Math.sin(o) * -n.scaleY * s | 0) / s, u = (Math.cos(o) * n.scaleY * s | 0) / s, d = this.t.style, p = this.t.currentStyle;
          if (p) {
              i = l,
              l = -c,
              c = -i,
              t = p.filter,
              d.filter = "";
              var f, h, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== p.position, b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u, _ = n.x + g * n.xPercent / 100, x = n.y + v * n.yPercent / 100;
              if (null != n.ox && (f = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2,
              h = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2,
              _ += f - (f * a + h * l),
              x += h - (f * c + h * u)),
              y ? (f = g / 2,
              h = v / 2,
              b += ", Dx=" + (f - (f * a + h * l) + _) + ", Dy=" + (h - (f * c + h * u) + x) + ")") : b += ", sizingMethod='auto expand')",
              d.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(D, b) : b + " " + t,
              (0 === e || 1 === e) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === b.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && d.removeAttribute("filter")),
              !y) {
                  var k, S, C, P = 8 > m ? 1 : -1;
                  for (f = n.ieOffsetX || 0,
                  h = n.ieOffsetY || 0,
                  n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + _),
                  n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * g)) / 2 + x),
                  Tt = 0; 4 > Tt; Tt++)
                      S = st[Tt],
                      k = p[S],
                      i = -1 !== k.indexOf("px") ? parseFloat(k) : tt(this.t, S, parseFloat(k), k.replace(w, "")) || 0,
                      C = i !== n[S] ? 2 > Tt ? -n.ieOffsetX : -n.ieOffsetY : 2 > Tt ? f - n.ieOffsetX : h - n.ieOffsetY,
                      d[S] = (n[S] = Math.round(i - C * (0 === Tt || 2 === Tt ? 1 : P))) + "px"
              }
          }
      }, Ut = W.set3DTransformRatio = W.setTransformRatio = function(e) {
          var t, i, n, r, o, s, a, l, c, u, d, p, h, m, g, v, y, b, _, x, w, T, k, S = this.data, C = this.t.style, P = S.rotation, E = S.rotationX, A = S.rotationY, $ = S.scaleX, O = S.scaleY, M = S.scaleZ, D = S.x, j = S.y, z = S.z, R = S.svg, I = S.perspective, L = S.force3D, F = S.skewY, H = S.skewX;
          if (F && (H += F,
          P += F),
          !(((1 !== e && 0 !== e || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || z || I || A || E || 1 !== M) && (!Pt || !R) && Mt))
              return void (P || H || R ? (P *= N,
              T = H * N,
              k = 1e5,
              i = Math.cos(P) * $,
              o = Math.sin(P) * $,
              n = Math.sin(P - T) * -O,
              s = Math.cos(P - T) * O,
              T && "simple" === S.skewType && (t = Math.tan(T - F * N),
              t = Math.sqrt(1 + t * t),
              n *= t,
              s *= t,
              F && (t = Math.tan(F * N),
              t = Math.sqrt(1 + t * t),
              i *= t,
              o *= t)),
              R && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset,
              j += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset,
              Pt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(),
              D += .01 * S.xPercent * g.width,
              j += .01 * S.yPercent * g.height),
              g = 1e-6,
              g > D && D > -g && (D = 0),
              g > j && j > -g && (j = 0)),
              _ = (i * k | 0) / k + "," + (o * k | 0) / k + "," + (n * k | 0) / k + "," + (s * k | 0) / k + "," + D + "," + j + ")",
              R && Pt ? this.t.setAttribute("transform", "matrix(" + _) : C[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + _) : C[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + $ + ",0,0," + O + "," + D + "," + j + ")");
          if (f && (g = 1e-4,
          g > $ && $ > -g && ($ = M = 2e-5),
          g > O && O > -g && (O = M = 2e-5),
          !I || S.z || S.rotationX || S.rotationY || (I = 0)),
          P || H)
              P *= N,
              v = i = Math.cos(P),
              y = o = Math.sin(P),
              H && (P -= H * N,
              v = Math.cos(P),
              y = Math.sin(P),
              "simple" === S.skewType && (t = Math.tan((H - F) * N),
              t = Math.sqrt(1 + t * t),
              v *= t,
              y *= t,
              S.skewY && (t = Math.tan(F * N),
              t = Math.sqrt(1 + t * t),
              i *= t,
              o *= t))),
              n = -y,
              s = v;
          else {
              if (!(A || E || 1 !== M || I || R))
                  return void (C[At] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + j + "px," + z + "px)" + (1 !== $ || 1 !== O ? " scale(" + $ + "," + O + ")" : ""));
              i = s = 1,
              n = o = 0
          }
          u = 1,
          r = a = l = c = d = p = 0,
          h = I ? -1 / I : 0,
          m = S.zOrigin,
          g = 1e-6,
          x = ",",
          w = "0",
          P = A * N,
          P && (v = Math.cos(P),
          y = Math.sin(P),
          l = -y,
          d = h * -y,
          r = i * y,
          a = o * y,
          u = v,
          h *= v,
          i *= v,
          o *= v),
          P = E * N,
          P && (v = Math.cos(P),
          y = Math.sin(P),
          t = n * v + r * y,
          b = s * v + a * y,
          c = u * y,
          p = h * y,
          r = n * -y + r * v,
          a = s * -y + a * v,
          u *= v,
          h *= v,
          n = t,
          s = b),
          1 !== M && (r *= M,
          a *= M,
          u *= M,
          h *= M),
          1 !== O && (n *= O,
          s *= O,
          c *= O,
          p *= O),
          1 !== $ && (i *= $,
          o *= $,
          l *= $,
          d *= $),
          (m || R) && (m && (D += r * -m,
          j += a * -m,
          z += u * -m + m),
          R && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset,
          j += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset),
          g > D && D > -g && (D = w),
          g > j && j > -g && (j = w),
          g > z && z > -g && (z = 0)),
          _ = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
          _ += (g > i && i > -g ? w : i) + x + (g > o && o > -g ? w : o) + x + (g > l && l > -g ? w : l),
          _ += x + (g > d && d > -g ? w : d) + x + (g > n && n > -g ? w : n) + x + (g > s && s > -g ? w : s),
          E || A || 1 !== M ? (_ += x + (g > c && c > -g ? w : c) + x + (g > p && p > -g ? w : p) + x + (g > r && r > -g ? w : r),
          _ += x + (g > a && a > -g ? w : a) + x + (g > u && u > -g ? w : u) + x + (g > h && h > -g ? w : h) + x) : _ += ",0,0,0,0,1,0,",
          _ += D + x + j + x + z + x + (I ? 1 + -z / I : 1) + ")",
          C[At] = _
      }
      ;
      c = Dt.prototype,
      c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
      c.scaleX = c.scaleY = c.scaleZ = 1,
      St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
          parser: function(e, t, i, n, o, a, l) {
              if (n._lastParsedTransform === l)
                  return o;
              n._lastParsedTransform = l;
              var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
              c && (l.scale = c(v, e));
              var u, d, p, f, h, m, y, b, _, x = e._gsTransform, w = e.style, T = 1e-6, k = Et.length, S = l, C = {}, P = "transformOrigin", E = Wt(e, r, !0, S.parseTransform), A = S.transform && ("function" == typeof S.transform ? S.transform(v, g) : S.transform);
              if (E.skewType = S.skewType || E.skewType || s.defaultSkewType,
              n._transform = E,
              "rotationZ"in S && (S.rotation = S.rotationZ),
              A && "string" == typeof A && At)
                  d = B.style,
                  d[At] = A,
                  d.display = "block",
                  d.position = "absolute",
                  -1 !== A.indexOf("%") && (d.width = et(e, "width"),
                  d.height = et(e, "height")),
                  F.body.appendChild(B),
                  u = Wt(B, null, !1),
                  "simple" === E.skewType && (u.scaleY *= Math.cos(u.skewX * N)),
                  E.svg && (m = E.xOrigin,
                  y = E.yOrigin,
                  u.x -= E.xOffset,
                  u.y -= E.yOffset,
                  (S.transformOrigin || S.svgOrigin) && (A = {},
                  It(e, lt(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0),
                  m = A.xOrigin,
                  y = A.yOrigin,
                  u.x -= A.xOffset - E.xOffset,
                  u.y -= A.yOffset - E.yOffset),
                  (m || y) && (b = qt(B, !0),
                  u.x -= m - (m * b[0] + y * b[2]),
                  u.y -= y - (m * b[1] + y * b[3]))),
                  F.body.removeChild(B),
                  u.perspective || (u.perspective = E.perspective),
                  null != S.xPercent && (u.xPercent = ut(S.xPercent, E.xPercent)),
                  null != S.yPercent && (u.yPercent = ut(S.yPercent, E.yPercent));
              else if ("object" == typeof S) {
                  if (u = {
                      scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, E.scaleX),
                      scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, E.scaleY),
                      scaleZ: ut(S.scaleZ, E.scaleZ),
                      x: ut(S.x, E.x),
                      y: ut(S.y, E.y),
                      z: ut(S.z, E.z),
                      xPercent: ut(S.xPercent, E.xPercent),
                      yPercent: ut(S.yPercent, E.yPercent),
                      perspective: ut(S.transformPerspective, E.perspective)
                  },
                  h = S.directionalRotation,
                  null != h)
                      if ("object" == typeof h)
                          for (d in h)
                              S[d] = h[d];
                      else
                          S.rotation = h;
                  "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0,
                  u.xPercent = ut(S.x, E.xPercent)),
                  "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0,
                  u.yPercent = ut(S.y, E.yPercent)),
                  u.rotation = dt("rotation"in S ? S.rotation : "shortRotation"in S ? S.shortRotation + "_short" : E.rotation, E.rotation, "rotation", C),
                  Mt && (u.rotationX = dt("rotationX"in S ? S.rotationX : "shortRotationX"in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", C),
                  u.rotationY = dt("rotationY"in S ? S.rotationY : "shortRotationY"in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", C)),
                  u.skewX = dt(S.skewX, E.skewX),
                  u.skewY = dt(S.skewY, E.skewY)
              }
              for (Mt && null != S.force3D && (E.force3D = S.force3D,
              f = !0),
              p = E.force3D || E.z || E.rotationX || E.rotationY || u.z || u.rotationX || u.rotationY || u.perspective,
              p || null == S.scale || (u.scaleZ = 1); --k > -1; )
                  _ = Et[k],
                  A = u[_] - E[_],
                  (A > T || -T > A || null != S[_] || null != I[_]) && (f = !0,
                  o = new _t(E,_,E[_],A,o),
                  _ in C && (o.e = C[_]),
                  o.xs0 = 0,
                  o.plugin = a,
                  n._overwriteProps.push(o.n));
              return A = "function" == typeof S.transformOrigin ? S.transformOrigin(v, g) : S.transformOrigin,
              E.svg && (A || S.svgOrigin) && (m = E.xOffset,
              y = E.yOffset,
              It(e, lt(A), u, S.svgOrigin, S.smoothOrigin),
              o = xt(E, "xOrigin", (x ? E : u).xOrigin, u.xOrigin, o, P),
              o = xt(E, "yOrigin", (x ? E : u).yOrigin, u.yOrigin, o, P),
              (m !== E.xOffset || y !== E.yOffset) && (o = xt(E, "xOffset", x ? m : E.xOffset, E.xOffset, o, P),
              o = xt(E, "yOffset", x ? y : E.yOffset, E.yOffset, o, P)),
              A = "0px 0px"),
              (A || Mt && p && E.zOrigin) && (At ? (f = !0,
              _ = Ot,
              A || (A = (et(e, _, r, !1, "50% 50%") + "").split(" "),
              A = A[0] + " " + A[1] + " " + E.zOrigin + "px"),
              A += "",
              o = new _t(w,_,0,0,o,-1,P),
              o.b = w[_],
              o.plugin = a,
              Mt ? (d = E.zOrigin,
              A = A.split(" "),
              E.zOrigin = (A.length > 2 ? parseFloat(A[2]) : d) || 0,
              o.xs0 = o.e = A[0] + " " + (A[1] || "50%") + " 0px",
              o = new _t(E,"zOrigin",0,0,o,-1,o.n),
              o.b = d,
              o.xs0 = o.e = E.zOrigin) : o.xs0 = o.e = A) : lt(A + "", E)),
              f && (n._transformType = E.svg && Pt || !p && 3 !== this._transformType ? 2 : 3),
              c && (l.scale = c),
              o
          },
          allowFunc: !0,
          prefix: !0
      }),
      St("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset"
      }),
      St("clipPath", {
          defaultValue: "inset(0px)",
          prefix: !0,
          multi: !0,
          formatter: vt("inset(0px 0px 0px 0px)", !1, !0)
      }),
      St("borderRadius", {
          defaultValue: "0px",
          parser: function(e, t, i, o, s) {
              t = this.format(t);
              var a, l, c, u, d, p, f, h, m, g, v, y, b, _, x, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = e.style;
              for (m = parseFloat(e.offsetWidth),
              g = parseFloat(e.offsetHeight),
              a = t.split(" "),
              l = 0; l < T.length; l++)
                  this.p.indexOf("border") && (T[l] = Q(T[l])),
                  d = u = et(e, T[l], r, !1, "0px"),
                  -1 !== d.indexOf(" ") && (u = d.split(" "),
                  d = u[0],
                  u = u[1]),
                  p = c = a[l],
                  f = parseFloat(d),
                  y = d.substr((f + "").length),
                  b = "=" === p.charAt(1),
                  b ? (h = parseInt(p.charAt(0) + "1", 10),
                  p = p.substr(2),
                  h *= parseFloat(p),
                  v = p.substr((h + "").length - (0 > h ? 1 : 0)) || "") : (h = parseFloat(p),
                  v = p.substr((h + "").length)),
                  "" === v && (v = n[i] || y),
                  v !== y && (_ = tt(e, "borderLeft", f, y),
                  x = tt(e, "borderTop", f, y),
                  "%" === v ? (d = _ / m * 100 + "%",
                  u = x / g * 100 + "%") : "em" === v ? (w = tt(e, "borderLeft", 1, "em"),
                  d = _ / w + "em",
                  u = x / w + "em") : (d = _ + "px",
                  u = x + "px"),
                  b && (p = parseFloat(d) + h + v,
                  c = parseFloat(u) + h + v)),
                  s = wt(k, T[l], d + " " + u, p + " " + c, !1, "0px", s);
              return s
          },
          prefix: !0,
          formatter: vt("0px 0px 0px 0px", !1, !0)
      }),
      St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
          defaultValue: "0px",
          parser: function(e, t, i, n, o) {
              return wt(e.style, i, this.format(et(e, i, r, !1, "0px 0px")), this.format(t), !1, "0px", o)
          },
          prefix: !0,
          formatter: vt("0px 0px", !1, !0)
      }),
      St("backgroundPosition", {
          defaultValue: "0 0",
          parser: function(e, t, i, n, o, s) {
              var a, l, c, u, d, p, f = "background-position", h = r || J(e, null), g = this.format((h ? m ? h.getPropertyValue(f + "-x") + " " + h.getPropertyValue(f + "-y") : h.getPropertyValue(f) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"), v = this.format(t);
              if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (p = et(e, "backgroundImage").replace(A, ""),
              p && "none" !== p)) {
                  for (a = g.split(" "),
                  l = v.split(" "),
                  q.setAttribute("src", p),
                  c = 2; --c > -1; )
                      g = a[c],
                      u = -1 !== g.indexOf("%"),
                      u !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? e.offsetWidth - q.width : e.offsetHeight - q.height,
                      a[c] = u ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
                  g = a.join(" ")
              }
              return this.parseComplex(e.style, g, v, o, s)
          },
          formatter: lt
      }),
      St("backgroundSize", {
          defaultValue: "0 0",
          formatter: function(e) {
              return e += "",
              "co" === e.substr(0, 2) ? e : lt(-1 === e.indexOf(" ") ? e + " " + e : e)
          }
      }),
      St("perspective", {
          defaultValue: "0px",
          prefix: !0
      }),
      St("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: !0
      }),
      St("transformStyle", {
          prefix: !0
      }),
      St("backfaceVisibility", {
          prefix: !0
      }),
      St("userSelect", {
          prefix: !0
      }),
      St("margin", {
          parser: yt("marginTop,marginRight,marginBottom,marginLeft")
      }),
      St("padding", {
          parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
      }),
      St("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function(e, t, i, n, o, s) {
              var a, l, c;
              return 9 > m ? (l = e.currentStyle,
              c = 8 > m ? " " : ",",
              a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
              t = this.format(t).split(",").join(c)) : (a = this.format(et(e, this.p, r, !1, this.dflt)),
              t = this.format(t)),
              this.parseComplex(e.style, a, t, o, s)
          }
      }),
      St("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0
      }),
      St("autoRound,strictUnits", {
          parser: function(e, t, i, n, r) {
              return r
          }
      }),
      St("border", {
          defaultValue: "0px solid #000",
          parser: function(e, t, i, n, o, s) {
              var a = et(e, "borderTopWidth", r, !1, "0px")
                , l = this.format(t).split(" ")
                , c = l[0].replace(w, "");
              return "px" !== c && (a = parseFloat(a) / tt(e, "borderTopWidth", 1, c) + c),
              this.parseComplex(e.style, this.format(a + " " + et(e, "borderTopStyle", r, !1, "solid") + " " + et(e, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
          },
          color: !0,
          formatter: function(e) {
              var t = e.split(" ");
              return t[0] + " " + (t[1] || "solid") + " " + (e.match(gt) || ["#000"])[0]
          }
      }),
      St("borderWidth", {
          parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
      }),
      St("float,cssFloat,styleFloat", {
          parser: function(e, t, i, n, r) {
              var o = e.style
                , s = "cssFloat"in o ? "cssFloat" : "styleFloat";
              return new _t(o,s,0,0,r,-1,i,!1,0,o[s],t)
          }
      });
      var Yt = function(e) {
          var t, i = this.t, n = i.filter || et(this.data, "filter") || "", r = this.s + this.c * e | 0;
          100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
          t = !et(this.data, "filter")) : (i.filter = n.replace(S, ""),
          t = !0)),
          t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
          -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
      };
      St("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(e, t, i, n, o, s) {
              var a = parseFloat(et(e, "opacity", r, !1, "1"))
                , l = e.style
                , c = "autoAlpha" === i;
              return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a),
              c && 1 === a && "hidden" === et(e, "visibility", r) && 0 !== t && (a = 0),
              U ? o = new _t(l,"opacity",a,t - a,o) : (o = new _t(l,"opacity",100 * a,100 * (t - a),o),
              o.xn1 = c ? 1 : 0,
              l.zoom = 1,
              o.type = 2,
              o.b = "alpha(opacity=" + o.s + ")",
              o.e = "alpha(opacity=" + (o.s + o.c) + ")",
              o.data = e,
              o.plugin = s,
              o.setRatio = Yt),
              c && (o = new _t(l,"visibility",0,0,o,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === t ? "hidden" : "inherit"),
              o.xs0 = "inherit",
              n._overwriteProps.push(o.n),
              n._overwriteProps.push(i)),
              o
          }
      });
      var Gt = function(e, t) {
          t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t),
          e.removeProperty(t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t))
      }
        , Vt = function(e) {
          if (this.t._gsClassPT = this,
          1 === e || 0 === e) {
              this.t.setAttribute("class", 0 === e ? this.b : this.e);
              for (var t = this.data, i = this.t.style; t; )
                  t.v ? i[t.p] = t.v : Gt(i, t.p),
                  t = t._next;
              1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
          } else
              this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
      };
      St("className", {
          parser: function(e, t, n, o, s, a, l) {
              var c, u, d, p, f, h = e.getAttribute("class") || "", m = e.style.cssText;
              if (s = o._classNamePT = new _t(e,n,0,0,s,2),
              s.setRatio = Vt,
              s.pr = -11,
              i = !0,
              s.b = h,
              u = nt(e, r),
              d = e._gsClassPT) {
                  for (p = {},
                  f = d.data; f; )
                      p[f.p] = 1,
                      f = f._next;
                  d.setRatio(1)
              }
              return e._gsClassPT = s,
              s.e = "=" !== t.charAt(1) ? t : h.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""),
              e.setAttribute("class", s.e),
              c = rt(e, u, nt(e), l, p),
              e.setAttribute("class", h),
              s.data = c.firstMPT,
              e.style.cssText = m,
              s = s.xfirst = o.parse(e, c.difs, s, a)
          }
      });
      var Zt = function(e) {
          if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
              var t, i, n, r, o, s = this.t.style, a = l.transform.parse;
              if ("all" === this.e)
                  s.cssText = "",
                  r = !0;
              else
                  for (t = this.e.split(" ").join("").split(","),
                  n = t.length; --n > -1; )
                      i = t[n],
                      l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p),
                      Gt(s, i);
              r && (Gt(s, At),
              o = this.t._gsTransform,
              o && (o.svg && (this.t.removeAttribute("data-svg-origin"),
              this.t.removeAttribute("transform")),
              delete this.t._gsTransform))
          }
      };
      for (St("clearProps", {
          parser: function(e, t, n, r, o) {
              return o = new _t(e,n,0,0,o,2),
              o.setRatio = Zt,
              o.e = t,
              o.pr = -10,
              o.data = r._tween,
              i = !0,
              o
          }
      }),
      c = "bezier,throwProps,physicsProps,physics2D".split(","),
      Tt = c.length; Tt--; )
          Ct(c[Tt]);
      c = s.prototype,
      c._firstPT = c._lastParsedTransform = c._transform = null,
      c._onInitTween = function(e, t, a, c) {
          if (!e.nodeType)
              return !1;
          this._target = g = e,
          this._tween = a,
          this._vars = t,
          v = c,
          u = t.autoRound,
          i = !1,
          n = t.suffixMap || s.suffixMap,
          r = J(e, ""),
          o = this._overwriteProps;
          var f, m, y, b, _, x, w, T, S, C = e.style;
          if (d && "" === C.zIndex && (f = et(e, "zIndex", r),
          ("auto" === f || "" === f) && this._addLazySet(C, "zIndex", 0)),
          "string" == typeof t && (b = C.cssText,
          f = nt(e, r),
          C.cssText = b + ";" + t,
          f = rt(e, f, nt(e)).difs,
          !U && k.test(t) && (f.opacity = parseFloat(RegExp.$1)),
          t = f,
          C.cssText = b),
          this._firstPT = m = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null),
          this._transformType) {
              for (S = 3 === this._transformType,
              At ? p && (d = !0,
              "" === C.zIndex && (w = et(e, "zIndex", r),
              ("auto" === w || "" === w) && this._addLazySet(C, "zIndex", 0)),
              h && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : C.zoom = 1,
              y = m; y && y._next; )
                  y = y._next;
              T = new _t(e,"transform",0,0,null,2),
              this._linkCSSP(T, null, y),
              T.setRatio = At ? Ut : Xt,
              T.data = this._transform || Wt(e, r, !0),
              T.tween = a,
              T.pr = -1,
              o.pop()
          }
          if (i) {
              for (; m; ) {
                  for (x = m._next,
                  y = b; y && y.pr > m.pr; )
                      y = y._next;
                  (m._prev = y ? y._prev : _) ? m._prev._next = m : b = m,
                  (m._next = y) ? y._prev = m : _ = m,
                  m = x
              }
              this._firstPT = b
          }
          return !0
      }
      ,
      c.parse = function(e, t, i, o) {
          var s, a, c, d, p, f, h, m, y, b, _ = e.style;
          for (s in t) {
              if (f = t[s],
              a = l[s],
              "function" != typeof f || a && a.allowFunc || (f = f(v, g)),
              a)
                  i = a.parse(e, f, s, this, i, o, t);
              else {
                  if ("--" === s.substr(0, 2)) {
                      this._tween._propLookup[s] = this._addTween.call(this._tween, e.style, "setProperty", J(e).getPropertyValue(s) + "", f + "", s, !1, s);
                      continue
                  }
                  p = et(e, s, r) + "",
                  y = "string" == typeof f,
                  "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || y && C.test(f) ? (y || (f = ht(f),
                  f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                  i = wt(_, s, p, f, !0, "transparent", i, 0, o)) : y && z.test(f) ? i = wt(_, s, p, f, !0, null, i, 0, o) : (c = parseFloat(p),
                  h = c || 0 === c ? p.substr((c + "").length) : "",
                  ("" === p || "auto" === p) && ("width" === s || "height" === s ? (c = at(e, s, r),
                  h = "px") : "left" === s || "top" === s ? (c = it(e, s, r),
                  h = "px") : (c = "opacity" !== s ? 0 : 1,
                  h = "")),
                  b = y && "=" === f.charAt(1),
                  b ? (d = parseInt(f.charAt(0) + "1", 10),
                  f = f.substr(2),
                  d *= parseFloat(f),
                  m = f.replace(w, "")) : (d = parseFloat(f),
                  m = y ? f.replace(w, "") : ""),
                  "" === m && (m = s in n ? n[s] : h),
                  f = d || 0 === d ? (b ? d + c : d) + m : t[s],
                  h !== m && ("" !== m || "lineHeight" === s) && (d || 0 === d) && c && (c = tt(e, s, c, h),
                  "%" === m ? (c /= tt(e, s, 100, "%") / 100,
                  t.strictUnits !== !0 && (p = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= tt(e, s, 1, m) : "px" !== m && (d = tt(e, s, d, m),
                  m = "px"),
                  b && (d || 0 === d) && (f = d + c + m)),
                  b && (d += c),
                  !c && 0 !== c || !d && 0 !== d ? void 0 !== _[s] && (f || f + "" != "NaN" && null != f) ? (i = new _t(_,s,d || c || 0,0,i,-1,s,!1,0,p,f),
                  i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : G("invalid " + s + " tween value: " + t[s]) : (i = new _t(_,s,c,d - c,i,0,s,u !== !1 && ("px" === m || "zIndex" === s),0,p,f),
                  i.xs0 = m))
              }
              o && i && !i.plugin && (i.plugin = o)
          }
          return i
      }
      ,
      c.setRatio = function(e) {
          var t, i, n, r = this._firstPT, o = 1e-6;
          if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
              if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                  for (; r; ) {
                      if (t = r.c * e + r.s,
                      r.r ? t = r.r(t) : o > t && t > -o && (t = 0),
                      r.type)
                          if (1 === r.type)
                              if (n = r.l,
                              2 === n)
                                  r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                              else if (3 === n)
                                  r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                              else if (4 === n)
                                  r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                              else if (5 === n)
                                  r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                              else {
                                  for (i = r.xs0 + t + r.xs1,
                                  n = 1; n < r.l; n++)
                                      i += r["xn" + n] + r["xs" + (n + 1)];
                                  r.t[r.p] = i
                              }
                          else
                              -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                      else
                          r.t[r.p] = t + r.xs0;
                      r = r._next
                  }
              else
                  for (; r; )
                      2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e),
                      r = r._next;
          else
              for (; r; ) {
                  if (2 !== r.type)
                      if (r.r && -1 !== r.type)
                          if (t = r.r(r.s + r.c),
                          r.type) {
                              if (1 === r.type) {
                                  for (n = r.l,
                                  i = r.xs0 + t + r.xs1,
                                  n = 1; n < r.l; n++)
                                      i += r["xn" + n] + r["xs" + (n + 1)];
                                  r.t[r.p] = i
                              }
                          } else
                              r.t[r.p] = t + r.xs0;
                      else
                          r.t[r.p] = r.e;
                  else
                      r.setRatio(e);
                  r = r._next
              }
      }
      ,
      c._enableTransforms = function(e) {
          this._transform = this._transform || Wt(this._target, r, !0),
          this._transformType = this._transform.svg && Pt || !e && 3 !== this._transformType ? 2 : 3
      }
      ;
      var Qt = function() {
          this.t[this.p] = this.e,
          this.data._linkCSSP(this, this._next, null, !0)
      };
      c._addLazySet = function(e, t, i) {
          var n = this._firstPT = new _t(e,t,0,0,this._firstPT,2);
          n.e = i,
          n.setRatio = Qt,
          n.data = this
      }
      ,
      c._linkCSSP = function(e, t, i, n) {
          return e && (t && (t._prev = e),
          e._next && (e._next._prev = e._prev),
          e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next,
          n = !0),
          i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e),
          e._next = t,
          e._prev = i),
          e
      }
      ,
      c._mod = function(e) {
          for (var t = this._firstPT; t; )
              "function" == typeof e[t.p] && (t.r = e[t.p]),
              t = t._next
      }
      ,
      c._kill = function(t) {
          var i, n, r, o = t;
          if (t.autoAlpha || t.alpha) {
              o = {};
              for (n in t)
                  o[n] = t[n];
              o.opacity = 1,
              o.autoAlpha && (o.visibility = 1)
          }
          for (t.className && (i = this._classNamePT) && (r = i.xfirst,
          r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
          i._next && this._linkCSSP(i._next, i._next._next, r._prev),
          this._classNamePT = null),
          i = this._firstPT; i; )
              i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(t),
              n = i.plugin),
              i = i._next;
          return e.prototype._kill.call(this, o)
      }
      ;
      var Kt = function(e, t, i) {
          var n, r, o, s;
          if (e.slice)
              for (r = e.length; --r > -1; )
                  Kt(e[r], t, i);
          else
              for (n = e.childNodes,
              r = n.length; --r > -1; )
                  o = n[r],
                  s = o.type,
                  o.style && (t.push(nt(o)),
                  i && i.push(o)),
                  1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Kt(o, t, i)
      };
      return s.cascadeTo = function(e, i, n) {
          var r, o, s, a, l = t.to(e, i, n), c = [l], u = [], d = [], p = [], f = t._internals.reservedProps;
          for (e = l._targets || l.target,
          Kt(e, u, p),
          l.render(i, !0, !0),
          Kt(e, d),
          l.render(0, !0, !0),
          l._enabled(!0),
          r = p.length; --r > -1; )
              if (o = rt(p[r], u[r], d[r]),
              o.firstMPT) {
                  o = o.difs;
                  for (s in n)
                      f[s] && (o[s] = n[s]);
                  a = {};
                  for (s in o)
                      a[s] = u[r][s];
                  c.push(t.fromTo(p[r], i, a, o))
              }
          return c
      }
      ,
      e.activate([s]),
      s
  }, !0),
  function() {
      var e = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.7.0",
          priority: -1,
          API: 2,
          init: function(e, t, i) {
              return this._tween = i,
              !0
          }
      })
        , t = function(e) {
          var t = 1 > e ? Math.pow(10, (e + "").length - 2) : 1;
          return function(i) {
              return (Math.round(i / e) * e * t | 0) / t
          }
      }
        , i = function(e, t) {
          for (; e; )
              e.f || e.blob || (e.m = t || Math.round),
              e = e._next
      }
        , n = e.prototype;
      n._onInitAllProps = function() {
          var e, n, r, o, s = this._tween, a = s.vars.roundProps, l = {}, c = s._propLookup.roundProps;
          if ("object" != typeof a || a.push)
              for ("string" == typeof a && (a = a.split(",")),
              r = a.length; --r > -1; )
                  l[a[r]] = Math.round;
          else
              for (o in a)
                  l[o] = t(a[o]);
          for (o in l)
              for (e = s._firstPT; e; )
                  n = e._next,
                  e.pg ? e.t._mod(l) : e.n === o && (2 === e.f && e.t ? i(e.t._firstPT, l[o]) : (this._add(e.t, o, e.s, e.c, l[o]),
                  n && (n._prev = e._prev),
                  e._prev ? e._prev._next = n : s._firstPT === e && (s._firstPT = n),
                  e._next = e._prev = null,
                  s._propLookup[o] = c)),
                  e = n;
          return !1
      }
      ,
      n._add = function(e, t, i, n, r) {
          this._addTween(e, t, i, i + n, t, r || Math.round),
          this._overwriteProps.push(t)
      }
  }(),
  function() {
      _gsScope._gsDefine.plugin({
          propName: "attr",
          API: 2,
          version: "0.6.1",
          init: function(e, t, i, n) {
              var r, o;
              if ("function" != typeof e.setAttribute)
                  return !1;
              for (r in t)
                  o = t[r],
                  "function" == typeof o && (o = o(n, e)),
                  this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r),
                  this._overwriteProps.push(r);
              return !0
          }
      })
  }(),
  _gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function(e, t, i, n) {
          "object" != typeof t && (t = {
              rotation: t
          }),
          this.finals = {};
          var r, o, s, a, l, c, u = t.useRadians === !0 ? 2 * Math.PI : 360, d = 1e-6;
          for (r in t)
              "useRadians" !== r && (a = t[r],
              "function" == typeof a && (a = a(n, e)),
              c = (a + "").split("_"),
              o = c[0],
              s = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
              a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0,
              l = a - s,
              c.length && (o = c.join("_"),
              -1 !== o.indexOf("short") && (l %= u,
              l !== l % (u / 2) && (l = 0 > l ? l + u : l - u)),
              -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)),
              (l > d || -d > l) && (this._addTween(e, r, s, s + l, r),
              this._overwriteProps.push(r)));
          return !0
      },
      set: function(e) {
          var t;
          if (1 !== e)
              this._super.setRatio.call(this, e);
          else
              for (t = this._firstPT; t; )
                  t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p],
                  t = t._next
      }
  })._autoCSS = !0,
  _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
      var t, i, n, r, o = _gsScope.GreenSockGlobals || _gsScope, s = o.com.greensock, a = 2 * Math.PI, l = Math.PI / 2, c = s._class, u = function(t, i) {
          var n = c("easing." + t, function() {}, !0)
            , r = n.prototype = new e;
          return r.constructor = n,
          r.getRatio = i,
          n
      }, d = e.register || function() {}
      , p = function(e, t, i, n) {
          var r = c("easing." + e, {
              easeOut: new t,
              easeIn: new i,
              easeInOut: new n
          }, !0);
          return d(r, e),
          r
      }, f = function(e, t, i) {
          this.t = e,
          this.v = t,
          i && (this.next = i,
          i.prev = this,
          this.c = i.v - t,
          this.gap = i.t - e)
      }, h = function(t, i) {
          var n = c("easing." + t, function(e) {
              this._p1 = e || 0 === e ? e : 1.70158,
              this._p2 = 1.525 * this._p1
          }, !0)
            , r = n.prototype = new e;
          return r.constructor = n,
          r.getRatio = i,
          r.config = function(e) {
              return new n(e)
          }
          ,
          n
      }, m = p("Back", h("BackOut", function(e) {
          return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
      }), h("BackIn", function(e) {
          return e * e * ((this._p1 + 1) * e - this._p1)
      }), h("BackInOut", function(e) {
          return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
      })), g = c("easing.SlowMo", function(e, t, i) {
          t = t || 0 === t ? t : .7,
          null == e ? e = .7 : e > 1 && (e = 1),
          this._p = 1 !== e ? t : 0,
          this._p1 = (1 - e) / 2,
          this._p2 = e,
          this._p3 = this._p1 + this._p2,
          this._calcEnd = i === !0
      }, !0), v = g.prototype = new e;
      return v.constructor = g,
      v.getRatio = function(e) {
          var t = e + (.5 - e) * this._p;
          return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
      }
      ,
      g.ease = new g(.7,.7),
      v.config = g.config = function(e, t, i) {
          return new g(e,t,i)
      }
      ,
      t = c("easing.SteppedEase", function(e, t) {
          e = e || 1,
          this._p1 = 1 / e,
          this._p2 = e + (t ? 0 : 1),
          this._p3 = t ? 1 : 0
      }, !0),
      v = t.prototype = new e,
      v.constructor = t,
      v.getRatio = function(e) {
          return 0 > e ? e = 0 : e >= 1 && (e = .999999999),
          ((this._p2 * e | 0) + this._p3) * this._p1
      }
      ,
      v.config = t.config = function(e, i) {
          return new t(e,i)
      }
      ,
      i = c("easing.ExpoScaleEase", function(e, t, i) {
          this._p1 = Math.log(t / e),
          this._p2 = t - e,
          this._p3 = e,
          this._ease = i
      }, !0),
      v = i.prototype = new e,
      v.constructor = i,
      v.getRatio = function(e) {
          return this._ease && (e = this._ease.getRatio(e)),
          (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
      }
      ,
      v.config = i.config = function(e, t, n) {
          return new i(e,t,n)
      }
      ,
      n = c("easing.RoughEase", function(t) {
          t = t || {};
          for (var i, n, r, o, s, a, l = t.taper || "none", c = [], u = 0, d = 0 | (t.points || 20), p = d, h = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1; )
              i = h ? Math.random() : 1 / d * p,
              n = g ? g.getRatio(i) : i,
              "none" === l ? r = v : "out" === l ? (o = 1 - i,
              r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i,
              r = o * o * .5 * v) : (o = 2 * (1 - i),
              r = o * o * .5 * v),
              h ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r,
              m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
              c[u++] = {
                  x: i,
                  y: n
              };
          for (c.sort(function(e, t) {
              return e.x - t.x
          }),
          a = new f(1,1,null),
          p = d; --p > -1; )
              s = c[p],
              a = new f(s.x,s.y,a);
          this._prev = new f(0,0,0 !== a.t ? a : a.next)
      }, !0),
      v = n.prototype = new e,
      v.constructor = n,
      v.getRatio = function(e) {
          var t = this._prev;
          if (e > t.t) {
              for (; t.next && e >= t.t; )
                  t = t.next;
              t = t.prev
          } else
              for (; t.prev && e <= t.t; )
                  t = t.prev;
          return this._prev = t,
          t.v + (e - t.t) / t.gap * t.c
      }
      ,
      v.config = function(e) {
          return new n(e)
      }
      ,
      n.ease = new n,
      p("Bounce", u("BounceOut", function(e) {
          return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      }), u("BounceIn", function(e) {
          return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
      }), u("BounceInOut", function(e) {
          var t = .5 > e;
          return e = t ? 1 - 2 * e : 2 * e - 1,
          e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
          t ? .5 * (1 - e) : .5 * e + .5
      })),
      p("Circ", u("CircOut", function(e) {
          return Math.sqrt(1 - (e -= 1) * e)
      }), u("CircIn", function(e) {
          return -(Math.sqrt(1 - e * e) - 1)
      }), u("CircInOut", function(e) {
          return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
      })),
      r = function(t, i, n) {
          var r = c("easing." + t, function(e, t) {
              this._p1 = e >= 1 ? e : 1,
              this._p2 = (t || n) / (1 > e ? e : 1),
              this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
              this._p2 = a / this._p2
          }, !0)
            , o = r.prototype = new e;
          return o.constructor = r,
          o.getRatio = i,
          o.config = function(e, t) {
              return new r(e,t)
          }
          ,
          r
      }
      ,
      p("Elastic", r("ElasticOut", function(e) {
          return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
      }, .3), r("ElasticIn", function(e) {
          return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
      }, .3), r("ElasticInOut", function(e) {
          return (e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
      }, .45)),
      p("Expo", u("ExpoOut", function(e) {
          return 1 - Math.pow(2, -10 * e)
      }), u("ExpoIn", function(e) {
          return Math.pow(2, 10 * (e - 1)) - .001
      }), u("ExpoInOut", function(e) {
          return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
      })),
      p("Sine", u("SineOut", function(e) {
          return Math.sin(e * l)
      }), u("SineIn", function(e) {
          return -Math.cos(e * l) + 1
      }), u("SineInOut", function(e) {
          return -.5 * (Math.cos(Math.PI * e) - 1)
      })),
      c("easing.EaseLookup", {
          find: function(t) {
              return e.map[t]
          }
      }, !0),
      d(o.SlowMo, "SlowMo", "ease,"),
      d(n, "RoughEase", "ease,"),
      d(t, "SteppedEase", "ease,"),
      m
  }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(e, t) {
  "use strict";
  var i = {}
    , n = e.document
    , r = e.GreenSockGlobals = e.GreenSockGlobals || e
    , o = r[t];
  if (o)
      return "undefined" != typeof module && module.exports && (module.exports = o),
      o;
  var s, a, l, c, u, d = function(e) {
      var t, i = e.split("."), n = r;
      for (t = 0; t < i.length; t++)
          n[i[t]] = n = n[i[t]] || {};
      return n
  }, p = d("com.greensock"), f = 1e-8, h = function(e) {
      var t, i = [], n = e.length;
      for (t = 0; t !== n; i.push(e[t++]))
          ;
      return i
  }, m = function() {}, g = function() {
      var e = Object.prototype.toString
        , t = e.call([]);
      return function(i) {
          return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
      }
  }(), v = {}, y = function(n, o, s, a) {
      this.sc = v[n] ? v[n].sc : [],
      v[n] = this,
      this.gsClass = null,
      this.func = s;
      var l = [];
      this.check = function(c) {
          for (var u, p, f, h, m = o.length, g = m; --m > -1; )
              (u = v[o[m]] || new y(o[m],[])).gsClass ? (l[m] = u.gsClass,
              g--) : c && u.sc.push(this);
          if (0 === g && s) {
              if (p = ("com.greensock." + n).split("."),
              f = p.pop(),
              h = d(p.join("."))[f] = this.gsClass = s.apply(s, l),
              a)
                  if (r[f] = i[f] = h,
                  "undefined" != typeof module && module.exports)
                      if (n === t) {
                          module.exports = i[t] = h;
                          for (m in i)
                              h[m] = i[m]
                      } else
                          i[t] && (i[t][f] = h);
                  else
                      "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                          return h
                      });
              for (m = 0; m < this.sc.length; m++)
                  this.sc[m].check()
          }
      }
      ,
      this.check(!0)
  }, b = e._gsDefine = function(e, t, i, n) {
      return new y(e,t,i,n)
  }
  , _ = p._class = function(e, t, i) {
      return t = t || function() {}
      ,
      b(e, [], function() {
          return t
      }, i),
      t
  }
  ;
  b.globals = r;
  var x = [0, 0, 1, 1]
    , w = _("easing.Ease", function(e, t, i, n) {
      this._func = e,
      this._type = i || 0,
      this._power = n || 0,
      this._params = t ? x.concat(t) : x
  }, !0)
    , T = w.map = {}
    , k = w.register = function(e, t, i, n) {
      for (var r, o, s, a, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
          for (o = l[c],
          r = n ? _("easing." + o, null, !0) : p.easing[o] || {},
          s = u.length; --s > -1; )
              a = u[s],
              T[o + "." + a] = T[a + o] = r[a] = e.getRatio ? e : e[a] || new e
  }
  ;
  for (l = w.prototype,
  l._calcEnd = !1,
  l.getRatio = function(e) {
      if (this._func)
          return this._params[0] = e,
          this._func.apply(null, this._params);
      var t = this._type
        , i = this._power
        , n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
      return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
      1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
  }
  ,
  s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
  a = s.length; --a > -1; )
      l = s[a] + ",Power" + a,
      k(new w(null,null,1,a), l, "easeOut", !0),
      k(new w(null,null,2,a), l, "easeIn" + (0 === a ? ",easeNone" : "")),
      k(new w(null,null,3,a), l, "easeInOut");
  T.linear = p.easing.Linear.easeIn,
  T.swing = p.easing.Quad.easeInOut;
  var S = _("events.EventDispatcher", function(e) {
      this._listeners = {},
      this._eventTarget = e || this
  });
  l = S.prototype,
  l.addEventListener = function(e, t, i, n, r) {
      r = r || 0;
      var o, s, a = this._listeners[e], l = 0;
      for (this !== c || u || c.wake(),
      null == a && (this._listeners[e] = a = []),
      s = a.length; --s > -1; )
          o = a[s],
          o.c === t && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
      a.splice(l, 0, {
          c: t,
          s: i,
          up: n,
          pr: r
      })
  }
  ,
  l.removeEventListener = function(e, t) {
      var i, n = this._listeners[e];
      if (n)
          for (i = n.length; --i > -1; )
              if (n[i].c === t)
                  return void n.splice(i, 1)
  }
  ,
  l.dispatchEvent = function(e) {
      var t, i, n, r = this._listeners[e];
      if (r)
          for (t = r.length,
          t > 1 && (r = r.slice(0)),
          i = this._eventTarget; --t > -1; )
              n = r[t],
              n && (n.up ? n.c.call(n.s || i, {
                  type: e,
                  target: i
              }) : n.c.call(n.s || i))
  }
  ;
  var C = e.requestAnimationFrame
    , P = e.cancelAnimationFrame
    , E = Date.now || function() {
      return (new Date).getTime()
  }
    , A = E();
  for (s = ["ms", "moz", "webkit", "o"],
  a = s.length; --a > -1 && !C; )
      C = e[s[a] + "RequestAnimationFrame"],
      P = e[s[a] + "CancelAnimationFrame"] || e[s[a] + "CancelRequestAnimationFrame"];
  _("Ticker", function(e, t) {
      var i, r, o, s, a, l = this, d = E(), p = t !== !1 && C ? "auto" : !1, h = 500, g = 33, v = "tick", y = function(e) {
          var t, n, c = E() - A;
          c > h && (d += c - g),
          A += c,
          l.time = (A - d) / 1e3,
          t = l.time - a,
          (!i || t > 0 || e === !0) && (l.frame++,
          a += t + (t >= s ? .004 : s - t),
          n = !0),
          e !== !0 && (o = r(y)),
          n && l.dispatchEvent(v)
      };
      S.call(l),
      l.time = l.frame = 0,
      l.tick = function() {
          y(!0)
      }
      ,
      l.lagSmoothing = function(e, t) {
          return arguments.length ? (h = e || 1 / f,
          void (g = Math.min(t, h, 0))) : 1 / f > h
      }
      ,
      l.sleep = function() {
          null != o && (p && P ? P(o) : clearTimeout(o),
          r = m,
          o = null,
          l === c && (u = !1))
      }
      ,
      l.wake = function(e) {
          null !== o ? l.sleep() : e ? d += -A + (A = E()) : l.frame > 10 && (A = E() - h + 5),
          r = 0 === i ? m : p && C ? C : function(e) {
              return setTimeout(e, 1e3 * (a - l.time) + 1 | 0)
          }
          ,
          l === c && (u = !0),
          y(2)
      }
      ,
      l.fps = function(e) {
          return arguments.length ? (i = e,
          s = 1 / (i || 60),
          a = this.time + s,
          void l.wake()) : i
      }
      ,
      l.useRAF = function(e) {
          return arguments.length ? (l.sleep(),
          p = e,
          void l.fps(i)) : p
      }
      ,
      l.fps(e),
      setTimeout(function() {
          "auto" === p && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1)
      }, 1500)
  }),
  l = p.Ticker.prototype = new p.events.EventDispatcher,
  l.constructor = p.Ticker;
  var $ = _("core.Animation", function(e, t) {
      if (this.vars = t = t || {},
      this._duration = this._totalDuration = e || 0,
      this._delay = Number(t.delay) || 0,
      this._timeScale = 1,
      this._active = !!t.immediateRender,
      this.data = t.data,
      this._reversed = !!t.reversed,
      Q) {
          u || c.wake();
          var i = this.vars.useFrames ? Z : Q;
          i.add(this, i._time),
          this.vars.paused && this.paused(!0)
      }
  });
  c = $.ticker = new p.Ticker,
  l = $.prototype,
  l._dirty = l._gc = l._initted = l._paused = !1,
  l._totalTime = l._time = 0,
  l._rawPrevTime = -1,
  l._next = l._last = l._onUpdate = l._timeline = l.timeline = null,
  l._paused = !1;
  var O = function() {
      u && E() - A > 2e3 && ("hidden" !== (n || {}).visibilityState || !c.lagSmoothing()) && c.wake();
      var e = setTimeout(O, 2e3);
      e.unref && e.unref()
  };
  O(),
  l.play = function(e, t) {
      return null != e && this.seek(e, t),
      this.reversed(!1).paused(!1)
  }
  ,
  l.pause = function(e, t) {
      return null != e && this.seek(e, t),
      this.paused(!0)
  }
  ,
  l.resume = function(e, t) {
      return null != e && this.seek(e, t),
      this.paused(!1)
  }
  ,
  l.seek = function(e, t) {
      return this.totalTime(Number(e), t !== !1)
  }
  ,
  l.restart = function(e, t) {
      return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
  }
  ,
  l.reverse = function(e, t) {
      return null != e && this.seek(e || this.totalDuration(), t),
      this.reversed(!0).paused(!1)
  }
  ,
  l.render = function() {}
  ,
  l.invalidate = function() {
      return this._time = this._totalTime = 0,
      this._initted = this._gc = !1,
      this._rawPrevTime = -1,
      (this._gc || !this.timeline) && this._enabled(!0),
      this
  }
  ,
  l.isActive = function() {
      var e, t = this._timeline, i = this._startTime;
      return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - f
  }
  ,
  l._enabled = function(e, t) {
      return u || c.wake(),
      this._gc = !e,
      this._active = this.isActive(),
      t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
      !1
  }
  ,
  l._kill = function() {
      return this._enabled(!1, !1)
  }
  ,
  l.kill = function(e, t) {
      return this._kill(e, t),
      this
  }
  ,
  l._uncache = function(e) {
      for (var t = e ? this : this.timeline; t; )
          t._dirty = !0,
          t = t.timeline;
      return this
  }
  ,
  l._swapSelfInParams = function(e) {
      for (var t = e.length, i = e.concat(); --t > -1; )
          "{self}" === e[t] && (i[t] = this);
      return i
  }
  ,
  l._callback = function(e) {
      var t = this.vars
        , i = t[e]
        , n = t[e + "Params"]
        , r = t[e + "Scope"] || t.callbackScope || this
        , o = n ? n.length : 0;
      switch (o) {
      case 0:
          i.call(r);
          break;
      case 1:
          i.call(r, n[0]);
          break;
      case 2:
          i.call(r, n[0], n[1]);
          break;
      default:
          i.apply(r, n)
      }
  }
  ,
  l.eventCallback = function(e, t, i, n) {
      if ("on" === (e || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length)
              return r[e];
          null == t ? delete r[e] : (r[e] = t,
          r[e + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
          r[e + "Scope"] = n),
          "onUpdate" === e && (this._onUpdate = t)
      }
      return this
  }
  ,
  l.delay = function(e) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
      this._delay = e,
      this) : this._delay
  }
  ,
  l.duration = function(e) {
      return arguments.length ? (this._duration = this._totalDuration = e,
      this._uncache(!0),
      this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
      this) : (this._dirty = !1,
      this._duration)
  }
  ,
  l.totalDuration = function(e) {
      return this._dirty = !1,
      arguments.length ? this.duration(e) : this._totalDuration
  }
  ,
  l.time = function(e, t) {
      return arguments.length ? (this._dirty && this.totalDuration(),
      this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
  }
  ,
  l.totalTime = function(e, t, i) {
      if (u || c.wake(),
      !arguments.length)
          return this._totalTime;
      if (this._timeline) {
          if (0 > e && !i && (e += this.totalDuration()),
          this._timeline.smoothChildTiming) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration
                , r = this._timeline;
              if (e > n && !i && (e = n),
              this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale,
              r._dirty || this._uncache(!1),
              r._timeline)
                  for (; r._timeline; )
                      r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                      r = r._timeline
          }
          this._gc && this._enabled(!0, !1),
          (this._totalTime !== e || 0 === this._duration) && (N.length && J(),
          this.render(e, t, !1),
          N.length && J())
      }
      return this
  }
  ,
  l.progress = l.totalProgress = function(e, t) {
      var i = this.duration();
      return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
  }
  ,
  l.startTime = function(e) {
      return arguments.length ? (e !== this._startTime && (this._startTime = e,
      this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)),
      this) : this._startTime
  }
  ,
  l.endTime = function(e) {
      return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
  }
  ,
  l.timeScale = function(e) {
      if (!arguments.length)
          return this._timeScale;
      var t, i;
      for (e = e || f,
      this._timeline && this._timeline.smoothChildTiming && (t = this._pauseTime,
      i = t || 0 === t ? t : this._timeline.totalTime(),
      this._startTime = i - (i - this._startTime) * this._timeScale / e),
      this._timeScale = e,
      i = this.timeline; i && i.timeline; )
          i._dirty = !0,
          i.totalDuration(),
          i = i.timeline;
      return this
  }
  ,
  l.reversed = function(e) {
      return arguments.length ? (e != this._reversed && (this._reversed = e,
      this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
      this) : this._reversed
  }
  ,
  l.paused = function(e) {
      if (!arguments.length)
          return this._paused;
      var t, i, n = this._timeline;
      return e != this._paused && n && (u || e || c.wake(),
      t = n.rawTime(),
      i = t - this._pauseTime,
      !e && n.smoothChildTiming && (this._startTime += i,
      this._uncache(!1)),
      this._pauseTime = e ? t : null,
      this._paused = e,
      this._active = this.isActive(),
      !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale,
      this.render(t, t === this._totalTime, !0))),
      this._gc && !e && this._enabled(!0, !1),
      this
  }
  ;
  var M = _("core.SimpleTimeline", function(e) {
      $.call(this, 0, e),
      this.autoRemoveChildren = this.smoothChildTiming = !0
  });
  l = M.prototype = new $,
  l.constructor = M,
  l.kill()._gc = !1,
  l._first = l._last = l._recent = null,
  l._sortChildren = !1,
  l.add = l.insert = function(e, t) {
      var i, n;
      if (e._startTime = Number(t || 0) + e._delay,
      e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)),
      e.timeline && e.timeline._remove(e, !0),
      e.timeline = e._timeline = this,
      e._gc && e._enabled(!0, !0),
      i = this._last,
      this._sortChildren)
          for (n = e._startTime; i && i._startTime > n; )
              i = i._prev;
      return i ? (e._next = i._next,
      i._next = e) : (e._next = this._first,
      this._first = e),
      e._next ? e._next._prev = e : this._last = e,
      e._prev = i,
      this._recent = e,
      this._timeline && this._uncache(!0),
      this
  }
  ,
  l._remove = function(e, t) {
      return e.timeline === this && (t || e._enabled(!1, !0),
      e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next),
      e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
      e._next = e._prev = e.timeline = null,
      e === this._recent && (this._recent = this._last),
      this._timeline && this._uncache(!0)),
      this
  }
  ,
  l.render = function(e, t, i) {
      var n, r = this._first;
      for (this._totalTime = this._time = this._rawPrevTime = e; r; )
          n = r._next,
          (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)),
          r = n
  }
  ,
  l.rawTime = function() {
      return u || c.wake(),
      this._totalTime
  }
  ;
  var D = _("TweenLite", function(t, i, n) {
      if ($.call(this, i, n),
      this.render = D.prototype.render,
      null == t)
          throw "Cannot tween a null target.";
      this.target = t = "string" != typeof t ? t : D.selector(t) || t;
      var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
      if (this._overwrite = l = null == l ? V[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l],
      (a || t instanceof Array || t.push && g(t)) && "number" != typeof t[0])
          for (this._targets = s = h(t),
          this._propLookup = [],
          this._siblings = [],
          r = 0; r < s.length; r++)
              o = s[r],
              o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1),
              this._targets = s = s.concat(h(o))) : (this._siblings[r] = et(o, this, !1),
              1 === l && this._siblings[r].length > 1 && it(o, this, null, 1, this._siblings[r])) : (o = s[r--] = D.selector(o),
              "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
      else
          this._propLookup = {},
          this._siblings = et(t, this, !1),
          1 === l && this._siblings.length > 1 && it(t, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -f,
      this.render(Math.min(0, -this._delay)))
  }, !0)
    , j = function(t) {
      return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
  }
    , z = function(e, t) {
      var i, n = {};
      for (i in e)
          G[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = e[i],
          delete e[i]);
      e.css = n
  };
  l = D.prototype = new $,
  l.constructor = D,
  l.kill()._gc = !1,
  l.ratio = 0,
  l._firstPT = l._targets = l._overwrittenProps = l._startAt = null,
  l._notifyPluginsOfEnabled = l._lazy = !1,
  D.version = "2.1.1",
  D.defaultEase = l._ease = new w(null,null,1,1),
  D.defaultOverwrite = "auto",
  D.ticker = c,
  D.autoSleep = 120,
  D.lagSmoothing = function(e, t) {
      c.lagSmoothing(e, t)
  }
  ,
  D.selector = e.$ || e.jQuery || function(t) {
      var i = e.$ || e.jQuery;
      return i ? (D.selector = i,
      i(t)) : (n || (n = e.document),
      n ? n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
  }
  ;
  var N = []
    , R = {}
    , I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
    , L = /[\+-]=-?[\.\d]/
    , F = function(e) {
      for (var t, i = this._firstPT, n = 1e-6; i; )
          t = i.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s,
          i.m ? t = i.m.call(this._tween, t, this._target || i.t, this._tween) : n > t && t > -n && !i.blob && (t = 0),
          i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t,
          i = i._next
  }
    , H = function(e) {
      return (1e3 * e | 0) / 1e3 + ""
  }
    , B = function(e, t, i, n) {
      var r, o, s, a, l, c, u, d = [], p = 0, f = "", h = 0;
      for (d.start = e,
      d.end = t,
      e = d[0] = e + "",
      t = d[1] = t + "",
      i && (i(d),
      e = d[0],
      t = d[1]),
      d.length = 0,
      r = e.match(I) || [],
      o = t.match(I) || [],
      n && (n._next = null,
      n.blob = 1,
      d._firstPT = d._applyPT = n),
      l = o.length,
      a = 0; l > a; a++)
          u = o[a],
          c = t.substr(p, t.indexOf(u, p) - p),
          f += c || !a ? c : ",",
          p += c.length,
          h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1),
          u === r[a] || r.length <= a ? f += u : (f && (d.push(f),
          f = ""),
          s = parseFloat(r[a]),
          d.push(s),
          d._firstPT = {
              _next: d._firstPT,
              t: d,
              p: d.length - 1,
              s: s,
              c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
              f: 0,
              m: h && 4 > h ? Math.round : H
          }),
          p += u.length;
      return f += t.substr(p),
      f && d.push(f),
      d.setRatio = F,
      L.test(t) && (d.end = null),
      d
  }
    , q = function(e, t, i, n, r, o, s, a, l) {
      "function" == typeof n && (n = n(l || 0, e));
      var c, u = typeof e[t], d = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), p = "get" !== i ? i : d ? s ? e[d](s) : e[d]() : e[t], f = "string" == typeof n && "=" === n.charAt(1), h = {
          t: e,
          p: t,
          s: p,
          f: "function" === u,
          pg: 0,
          n: r || t,
          m: o ? "function" == typeof o ? o : Math.round : 0,
          pr: 0,
          c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
      };
      return ("number" != typeof p || "number" != typeof n && !f) && (s || isNaN(p) || !f && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (h.fp = s,
      c = B(p, f ? parseFloat(h.s) + h.c + (h.s + "").replace(/[0-9\-\.]/g, "") : n, a || D.defaultStringFilter, h),
      h = {
          t: c,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: r || t,
          pr: 0,
          m: 0
      }) : (h.s = parseFloat(p),
      f || (h.c = parseFloat(n) - h.s || 0))),
      h.c ? ((h._next = this._firstPT) && (h._next._prev = h),
      this._firstPT = h,
      h) : void 0
  }
    , W = D._internals = {
      isArray: g,
      isSelector: j,
      lazyTweens: N,
      blobDif: B
  }
    , X = D._plugins = {}
    , U = W.tweenLookup = {}
    , Y = 0
    , G = W.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1,
      callbackScope: 1,
      stringFilter: 1,
      id: 1,
      yoyoEase: 1,
      stagger: 1
  }
    , V = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
  }
    , Z = $._rootFramesTimeline = new M
    , Q = $._rootTimeline = new M
    , K = 30
    , J = W.lazyRender = function() {
      var e, t, i = N.length;
      for (R = {},
      e = 0; i > e; e++)
          t = N[e],
          t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0),
          t._lazy = !1);
      N.length = 0
  }
  ;
  Q._startTime = c.time,
  Z._startTime = c.frame,
  Q._active = Z._active = !0,
  setTimeout(J, 1),
  $._updateRoot = D.render = function() {
      var e, t, i;
      if (N.length && J(),
      Q.render((c.time - Q._startTime) * Q._timeScale, !1, !1),
      Z.render((c.frame - Z._startTime) * Z._timeScale, !1, !1),
      N.length && J(),
      c.frame >= K) {
          K = c.frame + (parseInt(D.autoSleep, 10) || 120);
          for (i in U) {
              for (t = U[i].tweens,
              e = t.length; --e > -1; )
                  t[e]._gc && t.splice(e, 1);
              0 === t.length && delete U[i]
          }
          if (i = Q._first,
          (!i || i._paused) && D.autoSleep && !Z._first && 1 === c._listeners.tick.length) {
              for (; i && i._paused; )
                  i = i._next;
              i || c.sleep()
          }
      }
  }
  ,
  c.addEventListener("tick", $._updateRoot);
  var et = function(e, t, i) {
      var n, r, o = e._gsTweenID;
      if (U[o || (e._gsTweenID = o = "t" + Y++)] || (U[o] = {
          target: e,
          tweens: []
      }),
      t && (n = U[o].tweens,
      n[r = n.length] = t,
      i))
          for (; --r > -1; )
              n[r] === t && n.splice(r, 1);
      return U[o].tweens
  }
    , tt = function(e, t, i, n) {
      var r, o, s = e.vars.onOverwrite;
      return s && (r = s(e, t, i, n)),
      s = D.onOverwrite,
      s && (o = s(e, t, i, n)),
      r !== !1 && o !== !1
  }
    , it = function(e, t, i, n, r) {
      var o, s, a, l;
      if (1 === n || n >= 4) {
          for (l = r.length,
          o = 0; l > o; o++)
              if ((a = r[o]) !== t)
                  a._gc || a._kill(null, e, t) && (s = !0);
              else if (5 === n)
                  break;
          return s
      }
      var c, u = t._startTime + f, d = [], p = 0, h = 0 === t._duration;
      for (o = r.length; --o > -1; )
          (a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || nt(t, 0, h),
          0 === nt(a, c, h) && (d[p++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((h || !a._initted) && u - a._startTime <= 2 * f || (d[p++] = a)));
      for (o = p; --o > -1; )
          if (a = d[o],
          l = a._firstPT,
          2 === n && a._kill(i, e, t) && (s = !0),
          2 !== n || !a._firstPT && a._initted && l) {
              if (2 !== n && !tt(a, t))
                  continue;
              a._enabled(!1, !1) && (s = !0)
          }
      return s
  }
    , nt = function(e, t, i) {
      for (var n = e._timeline, r = n._timeScale, o = e._startTime; n._timeline; ) {
          if (o += n._startTime,
          r *= n._timeScale,
          n._paused)
              return -100;
          n = n._timeline
      }
      return o /= r,
      o > t ? o - t : i && o === t || !e._initted && 2 * f > o - t ? f : (o += e.totalDuration() / e._timeScale / r) > t + f ? 0 : o - t - f
  };
  l._init = function() {
      var e, t, i, n, r, o, s = this.vars, a = this._overwrittenProps, l = this._duration, c = !!s.immediateRender, u = s.ease, d = this._startAt;
      if (s.startAt) {
          d && (d.render(-1, !0),
          d.kill()),
          r = {};
          for (n in s.startAt)
              r[n] = s.startAt[n];
          if (r.data = "isStart",
          r.overwrite = !1,
          r.immediateRender = !0,
          r.lazy = c && s.lazy !== !1,
          r.startAt = r.delay = null,
          r.onUpdate = s.onUpdate,
          r.onUpdateParams = s.onUpdateParams,
          r.onUpdateScope = s.onUpdateScope || s.callbackScope || this,
          this._startAt = D.to(this.target || {}, 0, r),
          c)
              if (this._time > 0)
                  this._startAt = null;
              else if (0 !== l)
                  return
      } else if (s.runBackwards && 0 !== l)
          if (d)
              d.render(-1, !0),
              d.kill(),
              this._startAt = null;
          else {
              0 !== this._time && (c = !1),
              i = {};
              for (n in s)
                  G[n] && "autoCSS" !== n || (i[n] = s[n]);
              if (i.overwrite = 0,
              i.data = "isFromStart",
              i.lazy = c && s.lazy !== !1,
              i.immediateRender = c,
              this._startAt = D.to(this.target, 0, i),
              c) {
                  if (0 === this._time)
                      return
              } else
                  this._startAt._init(),
                  this._startAt._enabled(!1),
                  this.vars.immediateRender && (this._startAt = null)
          }
      if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u,s.easeParams) : T[u] || D.defaultEase : D.defaultEase,
      s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)),
      this._easeType = this._ease._type,
      this._easePower = this._ease._power,
      this._firstPT = null,
      this._targets)
          for (o = this._targets.length,
          e = 0; o > e; e++)
              this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
      else
          t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
      if (t && D._onPluginEvent("_onInitAllProps", this),
      a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
      s.runBackwards)
          for (i = this._firstPT; i; )
              i.s += i.c,
              i.c = -i.c,
              i = i._next;
      this._onUpdate = s.onUpdate,
      this._initted = !0
  }
  ,
  l._initProps = function(t, i, n, r, o) {
      var s, a, l, c, u, d;
      if (null == t)
          return !1;
      R[t._gsTweenID] && J(),
      this.vars.css || t.style && t !== e && t.nodeType && X.css && this.vars.autoCSS !== !1 && z(this.vars, t);
      for (s in this.vars)
          if (d = this.vars[s],
          G[s])
              d && (d instanceof Array || d.push && g(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[s] = d = this._swapSelfInParams(d, this));
          else if (X[s] && (c = new X[s])._onInitTween(t, this.vars[s], this, o)) {
              for (this._firstPT = u = {
                  _next: this._firstPT,
                  t: c,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: s,
                  pg: 1,
                  pr: c._priority,
                  m: 0
              },
              a = c._overwriteProps.length; --a > -1; )
                  i[c._overwriteProps[a]] = this._firstPT;
              (c._priority || c._onInitAllProps) && (l = !0),
              (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0),
              u._next && (u._next._prev = u)
          } else
              i[s] = q.call(this, t, s, "get", d, s, 0, null, this.vars.stringFilter, o);
      return r && this._kill(r, t) ? this._initProps(t, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && it(t, this, i, this._overwrite, n) ? (this._kill(i, t),
      this._initProps(t, i, n, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[t._gsTweenID] = !0),
      l)
  }
  ,
  l.render = function(e, t, i) {
      var n, r, o, s, a = this, l = a._time, c = a._duration, u = a._rawPrevTime;
      if (e >= c - f && e >= 0)
          a._totalTime = a._time = c,
          a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1,
          a._reversed || (n = !0,
          r = "onComplete",
          i = i || a._timeline.autoRemoveChildren),
          0 === c && (a._initted || !a.vars.lazy || i) && (a._startTime === a._timeline._duration && (e = 0),
          (0 > u || 0 >= e && e >= -f || u === f && "isPause" !== a.data) && u !== e && (i = !0,
          u > f && (r = "onReverseComplete")),
          a._rawPrevTime = s = !t || e || u === e ? e : f);
      else if (f > e)
          a._totalTime = a._time = 0,
          a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0,
          (0 !== l || 0 === c && u > 0) && (r = "onReverseComplete",
          n = a._reversed),
          e > -f ? e = 0 : 0 > e && (a._active = !1,
          0 === c && (a._initted || !a.vars.lazy || i) && (u >= 0 && (u !== f || "isPause" !== a.data) && (i = !0),
          a._rawPrevTime = s = !t || e || u === e ? e : f)),
          (!a._initted || a._startAt && a._startAt.progress()) && (i = !0);
      else if (a._totalTime = a._time = e,
      a._easeType) {
          var d = e / c
            , p = a._easeType
            , h = a._easePower;
          (1 === p || 3 === p && d >= .5) && (d = 1 - d),
          3 === p && (d *= 2),
          1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d),
          a.ratio = 1 === p ? 1 - d : 2 === p ? d : .5 > e / c ? d / 2 : 1 - d / 2
      } else
          a.ratio = a._ease.getRatio(e / c);
      if (a._time !== l || i) {
          if (!a._initted) {
              if (a._init(),
              !a._initted || a._gc)
                  return;
              if (!i && a._firstPT && (a.vars.lazy !== !1 && a._duration || a.vars.lazy && !a._duration))
                  return a._time = a._totalTime = l,
                  a._rawPrevTime = u,
                  N.push(a),
                  void (a._lazy = [e, t]);
              a._time && !n ? a.ratio = a._ease.getRatio(a._time / c) : n && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1))
          }
          for (a._lazy !== !1 && (a._lazy = !1),
          a._active || !a._paused && a._time !== l && e >= 0 && (a._active = !0),
          0 === l && (a._startAt && (e >= 0 ? a._startAt.render(e, !0, i) : r || (r = "_dummyGS")),
          a.vars.onStart && (0 !== a._time || 0 === c) && (t || a._callback("onStart"))),
          o = a._firstPT; o; )
              o.f ? o.t[o.p](o.c * a.ratio + o.s) : o.t[o.p] = o.c * a.ratio + o.s,
              o = o._next;
          a._onUpdate && (0 > e && a._startAt && e !== -1e-4 && a._startAt.render(e, !0, i),
          t || (a._time !== l || n || i) && a._callback("onUpdate")),
          r && (!a._gc || i) && (0 > e && a._startAt && !a._onUpdate && e !== -1e-4 && a._startAt.render(e, !0, i),
          n && (a._timeline.autoRemoveChildren && a._enabled(!1, !1),
          a._active = !1),
          !t && a.vars[r] && a._callback(r),
          0 === c && a._rawPrevTime === f && s !== f && (a._rawPrevTime = 0))
      }
  }
  ,
  l._kill = function(e, t, i) {
      if ("all" === e && (e = null),
      null == e && (null == t || t === this.target))
          return this._lazy = !1,
          this._enabled(!1, !1);
      t = "string" != typeof t ? t || this._targets || this.target : D.selector(t) || t;
      var n, r, o, s, a, l, c, u, d, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT;
      if ((g(t) || j(t)) && "number" != typeof t[0])
          for (n = t.length; --n > -1; )
              this._kill(e, t[n], i) && (l = !0);
      else {
          if (this._targets) {
              for (n = this._targets.length; --n > -1; )
                  if (t === this._targets[n]) {
                      a = this._propLookup[n] || {},
                      this._overwrittenProps = this._overwrittenProps || [],
                      r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                      break
                  }
          } else {
              if (t !== this.target)
                  return !1;
              a = this._propLookup,
              r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
          }
          if (a) {
              if (c = e || a,
              u = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill),
              i && (D.onOverwrite || this.vars.onOverwrite)) {
                  for (o in c)
                      a[o] && (d || (d = []),
                      d.push(o));
                  if ((d || !e) && !tt(this, i, t, d))
                      return !1
              }
              for (o in c)
                  (s = a[o]) && (p && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s,
                  l = !0),
                  s.pg && s.t._kill(c) && (l = !0),
                  s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next),
                  s._next && (s._next._prev = s._prev),
                  s._next = s._prev = null),
                  delete a[o]),
                  u && (r[o] = 1);
              !this._firstPT && this._initted && f && this._enabled(!1, !1)
          }
      }
      return l
  }
  ,
  l.invalidate = function() {
      this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this);
      var e = this._time;
      return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
      this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
      this._propLookup = this._targets ? {} : [],
      $.prototype.invalidate.call(this),
      this.vars.immediateRender && (this._time = -f,
      this.render(e, !1, this.vars.lazy !== !1)),
      this
  }
  ,
  l._enabled = function(e, t) {
      if (u || c.wake(),
      e && this._gc) {
          var i, n = this._targets;
          if (n)
              for (i = n.length; --i > -1; )
                  this._siblings[i] = et(n[i], this, !0);
          else
              this._siblings = et(this.target, this, !0)
      }
      return $.prototype._enabled.call(this, e, t),
      this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
  }
  ,
  D.to = function(e, t, i) {
      return new D(e,t,i)
  }
  ,
  D.from = function(e, t, i) {
      return i.runBackwards = !0,
      i.immediateRender = 0 != i.immediateRender,
      new D(e,t,i)
  }
  ,
  D.fromTo = function(e, t, i, n) {
      return n.startAt = i,
      n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
      new D(e,t,n)
  }
  ,
  D.delayedCall = function(e, t, i, n, r) {
      return new D(t,0,{
          delay: e,
          onComplete: t,
          onCompleteParams: i,
          callbackScope: n,
          onReverseComplete: t,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: r,
          overwrite: 0
      })
  }
  ,
  D.set = function(e, t) {
      return new D(e,0,t)
  }
  ,
  D.getTweensOf = function(e, t) {
      if (null == e)
          return [];
      e = "string" != typeof e ? e : D.selector(e) || e;
      var i, n, r, o;
      if ((g(e) || j(e)) && "number" != typeof e[0]) {
          for (i = e.length,
          n = []; --i > -1; )
              n = n.concat(D.getTweensOf(e[i], t));
          for (i = n.length; --i > -1; )
              for (o = n[i],
              r = i; --r > -1; )
                  o === n[r] && n.splice(i, 1)
      } else if (e._gsTweenID)
          for (n = et(e).concat(),
          i = n.length; --i > -1; )
              (n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
      return n || []
  }
  ,
  D.killTweensOf = D.killDelayedCallsTo = function(e, t, i) {
      "object" == typeof t && (i = t,
      t = !1);
      for (var n = D.getTweensOf(e, t), r = n.length; --r > -1; )
          n[r]._kill(i, e)
  }
  ;
  var rt = _("plugins.TweenPlugin", function(e, t) {
      this._overwriteProps = (e || "").split(","),
      this._propName = this._overwriteProps[0],
      this._priority = t || 0,
      this._super = rt.prototype
  }, !0);
  if (l = rt.prototype,
  rt.version = "1.19.0",
  rt.API = 2,
  l._firstPT = null,
  l._addTween = q,
  l.setRatio = F,
  l._kill = function(e) {
      var t, i = this._overwriteProps, n = this._firstPT;
      if (null != e[this._propName])
          this._overwriteProps = [];
      else
          for (t = i.length; --t > -1; )
              null != e[i[t]] && i.splice(t, 1);
      for (; n; )
          null != e[n.n] && (n._next && (n._next._prev = n._prev),
          n._prev ? (n._prev._next = n._next,
          n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
          n = n._next;
      return !1
  }
  ,
  l._mod = l._roundProps = function(e) {
      for (var t, i = this._firstPT; i; )
          t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")],
          t && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t),
          i = i._next
  }
  ,
  D._onPluginEvent = function(e, t) {
      var i, n, r, o, s, a = t._firstPT;
      if ("_onInitAllProps" === e) {
          for (; a; ) {
              for (s = a._next,
              n = r; n && n.pr > a.pr; )
                  n = n._next;
              (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a,
              (a._next = n) ? n._prev = a : o = a,
              a = s
          }
          a = t._firstPT = r
      }
      for (; a; )
          a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0),
          a = a._next;
      return i
  }
  ,
  rt.activate = function(e) {
      for (var t = e.length; --t > -1; )
          e[t].API === rt.API && (X[(new e[t])._propName] = e[t]);
      return !0
  }
  ,
  b.plugin = function(e) {
      if (!(e && e.propName && e.init && e.API))
          throw "illegal plugin definition.";
      var t, i = e.propName, n = e.priority || 0, r = e.overwriteProps, o = {
          init: "_onInitTween",
          set: "setRatio",
          kill: "_kill",
          round: "_mod",
          mod: "_mod",
          initAll: "_onInitAllProps"
      }, s = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
          rt.call(this, i, n),
          this._overwriteProps = r || []
      }, e.global === !0), a = s.prototype = new rt(i);
      a.constructor = s,
      s.API = e.API;
      for (t in o)
          "function" == typeof e[t] && (a[o[t]] = e[t]);
      return s.version = e.version,
      rt.activate([s]),
      s
  }
  ,
  s = e._gsQueue) {
      for (a = 0; a < s.length; a++)
          s[a]();
      for (l in v)
          v[l].func || e.console.log("GSAP encountered missing dependency: " + l)
  }
  u = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  t = function() {
      function t(t, n) {
          var r, o = this;
          o.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: e(t),
              appendDots: e(t),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(t, i) {
                  return e('<button type="button" />').text(i + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
          },
          o.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
          },
          e.extend(o, o.initials),
          o.activeBreakpoint = null,
          o.animType = null,
          o.animProp = null,
          o.breakpoints = [],
          o.breakpointSettings = [],
          o.cssTransitions = !1,
          o.focussed = !1,
          o.interrupted = !1,
          o.hidden = "hidden",
          o.paused = !0,
          o.positionProp = null,
          o.respondTo = null,
          o.rowCount = 1,
          o.shouldClick = !0,
          o.$slider = e(t),
          o.$slidesCache = null,
          o.transformType = null,
          o.transitionType = null,
          o.visibilityChange = "visibilitychange",
          o.windowWidth = 0,
          o.windowTimer = null,
          r = e(t).data("slick") || {},
          o.options = e.extend({}, o.defaults, n, r),
          o.currentSlide = o.options.initialSlide,
          o.originalSettings = o.options,
          "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden",
          o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden",
          o.visibilityChange = "webkitvisibilitychange"),
          o.autoPlay = e.proxy(o.autoPlay, o),
          o.autoPlayClear = e.proxy(o.autoPlayClear, o),
          o.autoPlayIterator = e.proxy(o.autoPlayIterator, o),
          o.changeSlide = e.proxy(o.changeSlide, o),
          o.clickHandler = e.proxy(o.clickHandler, o),
          o.selectHandler = e.proxy(o.selectHandler, o),
          o.setPosition = e.proxy(o.setPosition, o),
          o.swipeHandler = e.proxy(o.swipeHandler, o),
          o.dragHandler = e.proxy(o.dragHandler, o),
          o.keyHandler = e.proxy(o.keyHandler, o),
          o.instanceUid = i++,
          o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
          o.registerBreakpoints(),
          o.init(!0)
      }
      var i = 0;
      return t
  }(),
  t.prototype.activateADA = function() {
      var e = this;
      e.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
      }).find("a, input, button, select").attr({
          tabindex: "0"
      })
  }
  ,
  t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
      var r = this;
      if ("boolean" == typeof i)
          n = i,
          i = null;
      else if (0 > i || i >= r.slideCount)
          return !1;
      r.unload(),
      "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : n === !0 ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack),
      r.$slides = r.$slideTrack.children(this.options.slide),
      r.$slideTrack.children(this.options.slide).detach(),
      r.$slideTrack.append(r.$slides),
      r.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t)
      }),
      r.$slidesCache = r.$slides,
      r.reinit()
  }
  ,
  t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({
              height: t
          }, e.options.speed)
      }
  }
  ,
  t.prototype.animateSlide = function(t, i) {
      var n = {}
        , r = this;
      r.animateHeight(),
      r.options.rtl === !0 && r.options.vertical === !1 && (t = -t),
      r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
          left: t
      }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
          top: t
      }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft),
      e({
          animStart: r.currentLeft
      }).animate({
          animStart: t
      }, {
          duration: r.options.speed,
          easing: r.options.easing,
          step: function(e) {
              e = Math.ceil(e),
              r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)",
              r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)",
              r.$slideTrack.css(n))
          },
          complete: function() {
              i && i.call()
          }
      })) : (r.applyTransition(),
      t = Math.ceil(t),
      n[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)",
      r.$slideTrack.css(n),
      i && setTimeout(function() {
          r.disableTransition(),
          i.call()
      }, r.options.speed))
  }
  ,
  t.prototype.getNavTarget = function() {
      var t = this
        , i = t.options.asNavFor;
      return i && null !== i && (i = e(i).not(t.$slider)),
      i
  }
  ,
  t.prototype.asNavFor = function(t) {
      var i = this
        , n = i.getNavTarget();
      null !== n && "object" == typeof n && n.each(function() {
          var i = e(this).slick("getSlick");
          i.unslicked || i.slideHandler(t, !0)
      })
  }
  ,
  t.prototype.applyTransition = function(e) {
      var t = this
        , i = {};
      i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase,
      t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }
  ,
  t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(),
      e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }
  ,
  t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }
  ,
  t.prototype.autoPlayIterator = function() {
      var e = this
        , t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
      e.currentSlide - 1 === 0 && (e.direction = 1))),
      e.slideHandler(t))
  }
  ,
  t.prototype.buildArrows = function() {
      var t = this;
      t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
      t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
      t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
      t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
      t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
      t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
      t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
      }))
  }
  ,
  t.prototype.buildDots = function() {
      var t, i, n = this;
      if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
          for (n.$slider.addClass("slick-dotted"),
          i = e("<ul />").addClass(n.options.dotsClass),
          t = 0; t <= n.getDotCount(); t += 1)
              i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
          n.$dots = i.appendTo(n.options.appendDots),
          n.$dots.find("li").first().addClass("slick-active")
      }
  }
  ,
  t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
      t.slideCount = t.$slides.length,
      t.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
      }),
      t.$slider.addClass("slick-slider"),
      t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
      t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
      t.$slideTrack.css("opacity", 0),
      (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1),
      e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
      t.setupInfinite(),
      t.buildArrows(),
      t.buildDots(),
      t.updateDots(),
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
      t.options.draggable === !0 && t.$list.addClass("draggable")
  }
  ,
  t.prototype.buildRows = function() {
      var e, t, i, n, r, o, s, a = this;
      if (n = document.createDocumentFragment(),
      o = a.$slider.children(),
      a.options.rows > 0) {
          for (s = a.options.slidesPerRow * a.options.rows,
          r = Math.ceil(o.length / s),
          e = 0; r > e; e++) {
              var l = document.createElement("div");
              for (t = 0; t < a.options.rows; t++) {
                  var c = document.createElement("div");
                  for (i = 0; i < a.options.slidesPerRow; i++) {
                      var u = e * s + (t * a.options.slidesPerRow + i);
                      o.get(u) && c.appendChild(o.get(u))
                  }
                  l.appendChild(c)
              }
              n.appendChild(l)
          }
          a.$slider.empty().append(n),
          a.$slider.children().children().children().css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block"
          })
      }
  }
  ,
  t.prototype.checkResponsive = function(t, i) {
      var n, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
      if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)),
      s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
          r = null;
          for (n in s.breakpoints)
              s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
          null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r,
          "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]),
          t === !0 && (s.currentSlide = s.options.initialSlide),
          s.refresh(t)),
          a = r) : (s.activeBreakpoint = r,
          "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]),
          t === !0 && (s.currentSlide = s.options.initialSlide),
          s.refresh(t)),
          a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
          s.options = s.originalSettings,
          t === !0 && (s.currentSlide = s.options.initialSlide),
          s.refresh(t),
          a = r),
          t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
      }
  }
  ,
  t.prototype.changeSlide = function(t, i) {
      var n, r, o, s = this, a = e(t.currentTarget);
      switch (a.is("a") && t.preventDefault(),
      a.is("li") || (a = a.closest("li")),
      o = s.slideCount % s.options.slidesToScroll !== 0,
      n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
      t.data.message) {
      case "previous":
          r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
          s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
          break;
      case "next":
          r = 0 === n ? s.options.slidesToScroll : n,
          s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
          break;
      case "index":
          var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
          s.slideHandler(s.checkNavigable(l), !1, i),
          a.children().trigger("focus");
          break;
      default:
          return
      }
  }
  ,
  t.prototype.checkNavigable = function(e) {
      var t, i, n = this;
      if (t = n.getNavigableIndexes(),
      i = 0,
      e > t[t.length - 1])
          e = t[t.length - 1];
      else
          for (var r in t) {
              if (e < t[r]) {
                  e = i;
                  break
              }
              i = t[r]
          }
      return e
  }
  ,
  t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
      t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)),
      t.$slider.off("focus.slick blur.slick"),
      t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
      t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
      t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
      t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
      t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
      t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
      t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
      t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
      t.$list.off("click.slick", t.clickHandler),
      e(document).off(t.visibilityChange, t.visibility),
      t.cleanUpSlideEvents(),
      t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
      t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
      e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
      e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
      e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
      e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
  }
  ,
  t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
      t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }
  ,
  t.prototype.cleanUpRows = function() {
      var e, t = this;
      t.options.rows > 0 && (e = t.$slides.children().children(),
      e.removeAttr("style"),
      t.$slider.empty().append(e))
  }
  ,
  t.prototype.clickHandler = function(e) {
      var t = this;
      t.shouldClick === !1 && (e.stopImmediatePropagation(),
      e.stopPropagation(),
      e.preventDefault())
  }
  ,
  t.prototype.destroy = function(t) {
      var i = this;
      i.autoPlayClear(),
      i.touchObject = {},
      i.cleanUpEvents(),
      e(".slick-cloned", i.$slider).detach(),
      i.$dots && i.$dots.remove(),
      i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
      i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
      i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
      i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
      i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
          e(this).attr("style", e(this).data("originalStyling"))
      }),
      i.$slideTrack.children(this.options.slide).detach(),
      i.$slideTrack.detach(),
      i.$list.detach(),
      i.$slider.append(i.$slides)),
      i.cleanUpRows(),
      i.$slider.removeClass("slick-slider"),
      i.$slider.removeClass("slick-initialized"),
      i.$slider.removeClass("slick-dotted"),
      i.unslicked = !0,
      t || i.$slider.trigger("destroy", [i])
  }
  ,
  t.prototype.disableTransition = function(e) {
      var t = this
        , i = {};
      i[t.transitionType] = "",
      t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }
  ,
  t.prototype.fadeSlide = function(e, t) {
      var i = this;
      i.cssTransitions === !1 ? (i.$slides.eq(e).css({
          zIndex: i.options.zIndex
      }),
      i.$slides.eq(e).animate({
          opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
      i.$slides.eq(e).css({
          opacity: 1,
          zIndex: i.options.zIndex
      }),
      t && setTimeout(function() {
          i.disableTransition(e),
          t.call()
      }, i.options.speed))
  }
  ,
  t.prototype.fadeSlideOut = function(e) {
      var t = this;
      t.cssTransitions === !1 ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e),
      t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }))
  }
  ,
  t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides,
      t.unload(),
      t.$slideTrack.children(this.options.slide).detach(),
      t.$slidesCache.filter(e).appendTo(t.$slideTrack),
      t.reinit())
  }
  ,
  t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
          i.stopImmediatePropagation();
          var n = e(this);
          setTimeout(function() {
              t.options.pauseOnFocus && (t.focussed = n.is(":focus"),
              t.autoPlay())
          }, 0)
      })
  }
  ,
  t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      var e = this;
      return e.currentSlide
  }
  ,
  t.prototype.getDotCount = function() {
      var e = this
        , t = 0
        , i = 0
        , n = 0;
      if (e.options.infinite === !0)
          if (e.slideCount <= e.options.slidesToShow)
              ++n;
          else
              for (; t < e.slideCount; )
                  ++n,
                  t = i + e.options.slidesToScroll,
                  i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (e.options.centerMode === !0)
          n = e.slideCount;
      else if (e.options.asNavFor)
          for (; t < e.slideCount; )
              ++n,
              t = i + e.options.slidesToScroll,
              i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else
          n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return n - 1
  }
  ,
  t.prototype.getLeft = function(e) {
      var t, i, n, r, o = this, s = 0;
      return o.slideOffset = 0,
      i = o.$slides.first().outerHeight(!0),
      o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
      r = -1,
      o.options.vertical === !0 && o.options.centerMode === !0 && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)),
      s = i * o.options.slidesToShow * r),
      o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
      s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
      s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
      s = (e + o.options.slidesToShow - o.slideCount) * i),
      o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
      s = 0),
      o.options.centerMode === !0 && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0,
      o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
      t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s,
      o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
      t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
      o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
      t = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
      t += (o.$list.width() - n.outerWidth()) / 2)),
      t
  }
  ,
  t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      var t = this;
      return t.options[e]
  }
  ,
  t.prototype.getNavigableIndexes = function() {
      var e, t = this, i = 0, n = 0, r = [];
      for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
      n = -1 * t.options.slidesToScroll,
      e = 2 * t.slideCount); e > i; )
          r.push(i),
          i = n + t.options.slidesToScroll,
          n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return r
  }
  ,
  t.prototype.getSlick = function() {
      return this
  }
  ,
  t.prototype.getSlideCount = function() {
      var t, i, n, r = this;
      return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0,
      r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(t, o) {
          return o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * r.swipeLeft ? (i = o,
          !1) : void 0
      }),
      t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
  }
  ,
  t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      var i = this;
      i.changeSlide({
          data: {
              message: "index",
              index: parseInt(e)
          }
      }, t)
  }
  ,
  t.prototype.init = function(t) {
      var i = this;
      e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
      i.buildRows(),
      i.buildOut(),
      i.setProps(),
      i.startLoad(),
      i.loadSlider(),
      i.initializeEvents(),
      i.updateArrows(),
      i.updateDots(),
      i.checkResponsive(!0),
      i.focusHandler()),
      t && i.$slider.trigger("init", [i]),
      i.options.accessibility === !0 && i.initADA(),
      i.options.autoplay && (i.paused = !1,
      i.autoPlay())
  }
  ,
  t.prototype.initADA = function() {
      var t = this
        , i = Math.ceil(t.slideCount / t.options.slidesToShow)
        , n = t.getNavigableIndexes().filter(function(e) {
          return e >= 0 && e < t.slideCount
      });
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
      }).find("a, input, button, select").attr({
          tabindex: "-1"
      }),
      null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
          var r = n.indexOf(i);
          if (e(this).attr({
              role: "tabpanel",
              id: "slick-slide" + t.instanceUid + i,
              tabindex: -1
          }),
          -1 !== r) {
              var o = "slick-slide-control" + t.instanceUid + r;
              e("#" + o).length && e(this).attr({
                  "aria-describedby": o
              })
          }
      }),
      t.$dots.attr("role", "tablist").find("li").each(function(r) {
          var o = n[r];
          e(this).attr({
              role: "presentation"
          }),
          e(this).find("button").first().attr({
              role: "tab",
              id: "slick-slide-control" + t.instanceUid + r,
              "aria-controls": "slick-slide" + t.instanceUid + o,
              "aria-label": r + 1 + " of " + i,
              "aria-selected": null,
              tabindex: "-1"
          })
      }).eq(t.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
      }).end());
      for (var r = t.currentSlide, o = r + t.options.slidesToShow; o > r; r++)
          t.options.focusOnChange ? t.$slides.eq(r).attr({
              tabindex: "0"
          }) : t.$slides.eq(r).removeAttr("tabindex");
      t.activateADA()
  }
  ,
  t.prototype.initArrowEvents = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
      }, e.changeSlide),
      e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
      }, e.changeSlide),
      e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler),
      e.$nextArrow.on("keydown.slick", e.keyHandler)))
  }
  ,
  t.prototype.initDotEvents = function() {
      var t = this;
      t.options.dots === !0 && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
          message: "index"
      }, t.changeSlide),
      t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)),
      t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }
  ,
  t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
      t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }
  ,
  t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(),
      t.initDotEvents(),
      t.initSlideEvents(),
      t.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
      }, t.swipeHandler),
      t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
      }, t.swipeHandler),
      t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
      }, t.swipeHandler),
      t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
      }, t.swipeHandler),
      t.$list.on("click.slick", t.clickHandler),
      e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
      t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
      t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
      e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
      e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
      e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
      e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
      e(t.setPosition)
  }
  ,
  t.prototype.initUI = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
      e.$nextArrow.show()),
      e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }
  ,
  t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
          data: {
              message: t.options.rtl === !0 ? "next" : "previous"
          }
      }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
          data: {
              message: t.options.rtl === !0 ? "previous" : "next"
          }
      }))
  }
  ,
  t.prototype.lazyLoad = function() {
      function t(t) {
          e("img[data-lazy]", t).each(function() {
              var t = e(this)
                , i = e(this).attr("data-lazy")
                , n = e(this).attr("data-srcset")
                , r = e(this).attr("data-sizes") || s.$slider.attr("data-sizes")
                , o = document.createElement("img");
              o.onload = function() {
                  t.animate({
                      opacity: 0
                  }, 100, function() {
                      n && (t.attr("srcset", n),
                      r && t.attr("sizes", r)),
                      t.attr("src", i).animate({
                          opacity: 1
                      }, 200, function() {
                          t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                      }),
                      s.$slider.trigger("lazyLoaded", [s, t, i])
                  })
              }
              ,
              o.onerror = function() {
                  t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, i])
              }
              ,
              o.src = i
          })
      }
      var i, n, r, o, s = this;
      if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1),
      o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
      o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
      o = Math.ceil(r + s.options.slidesToShow),
      s.options.fade === !0 && (r > 0 && r--,
      o <= s.slideCount && o++)),
      i = s.$slider.find(".slick-slide").slice(r, o),
      "anticipated" === s.options.lazyLoad)
          for (var a = r - 1, l = o, c = s.$slider.find(".slick-slide"), u = 0; u < s.options.slidesToScroll; u++)
              0 > a && (a = s.slideCount - 1),
              i = i.add(c.eq(a)),
              i = i.add(c.eq(l)),
              a--,
              l++;
      t(i),
      s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
      t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
      t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
      t(n))
  }
  ,
  t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(),
      e.$slideTrack.css({
          opacity: 1
      }),
      e.$slider.removeClass("slick-loading"),
      e.initUI(),
      "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }
  ,
  t.prototype.next = t.prototype.slickNext = function() {
      var e = this;
      e.changeSlide({
          data: {
              message: "next"
          }
      })
  }
  ,
  t.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(),
      e.setPosition()
  }
  ,
  t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(),
      e.paused = !0
  }
  ,
  t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(),
      e.options.autoplay = !0,
      e.paused = !1,
      e.focussed = !1,
      e.interrupted = !1
  }
  ,
  t.prototype.postSlide = function(t) {
      var i = this;
      if (!i.unslicked && (i.$slider.trigger("afterChange", [i, t]),
      i.animating = !1,
      i.slideCount > i.options.slidesToShow && i.setPosition(),
      i.swipeLeft = null,
      i.options.autoplay && i.autoPlay(),
      i.options.accessibility === !0 && (i.initADA(),
      i.options.focusOnChange))) {
          var n = e(i.$slides.get(i.currentSlide));
          n.attr("tabindex", 0).focus()
      }
  }
  ,
  t.prototype.prev = t.prototype.slickPrev = function() {
      var e = this;
      e.changeSlide({
          data: {
              message: "previous"
          }
      })
  }
  ,
  t.prototype.preventDefault = function(e) {
      e.preventDefault()
  }
  ,
  t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var i, n, r, o, s, a = this, l = e("img[data-lazy]", a.$slider);
      l.length ? (i = l.first(),
      n = i.attr("data-lazy"),
      r = i.attr("data-srcset"),
      o = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
      s = document.createElement("img"),
      s.onload = function() {
          r && (i.attr("srcset", r),
          o && i.attr("sizes", o)),
          i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
          a.options.adaptiveHeight === !0 && a.setPosition(),
          a.$slider.trigger("lazyLoaded", [a, i, n]),
          a.progressiveLazyLoad()
      }
      ,
      s.onerror = function() {
          3 > t ? setTimeout(function() {
              a.progressiveLazyLoad(t + 1)
          }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
          a.$slider.trigger("lazyLoadError", [a, i, n]),
          a.progressiveLazyLoad())
      }
      ,
      s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
  }
  ,
  t.prototype.refresh = function(t) {
      var i, n, r = this;
      n = r.slideCount - r.options.slidesToShow,
      !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
      r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
      i = r.currentSlide,
      r.destroy(!0),
      e.extend(r, r.initials, {
          currentSlide: i
      }),
      r.init(),
      t || r.changeSlide({
          data: {
              message: "index",
              index: i
          }
      }, !1)
  }
  ,
  t.prototype.registerBreakpoints = function() {
      var t, i, n, r = this, o = r.options.responsive || null;
      if ("array" === e.type(o) && o.length) {
          r.respondTo = r.options.respondTo || "window";
          for (t in o)
              if (n = r.breakpoints.length - 1,
              o.hasOwnProperty(t)) {
                  for (i = o[t].breakpoint; n >= 0; )
                      r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1),
                      n--;
                  r.breakpoints.push(i),
                  r.breakpointSettings[i] = o[t].settings
              }
          r.breakpoints.sort(function(e, t) {
              return r.options.mobileFirst ? e - t : t - e
          })
      }
  }
  ,
  t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
      t.slideCount = t.$slides.length,
      t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
      t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
      t.registerBreakpoints(),
      t.setProps(),
      t.setupInfinite(),
      t.buildArrows(),
      t.updateArrows(),
      t.initArrowEvents(),
      t.buildDots(),
      t.updateDots(),
      t.initDotEvents(),
      t.cleanUpSlideEvents(),
      t.initSlideEvents(),
      t.checkResponsive(!1, !0),
      t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
      t.setPosition(),
      t.focusHandler(),
      t.paused = !t.options.autoplay,
      t.autoPlay(),
      t.$slider.trigger("reInit", [t])
  }
  ,
  t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
      t.windowDelay = window.setTimeout(function() {
          t.windowWidth = e(window).width(),
          t.checkResponsive(),
          t.unslicked || t.setPosition()
      }, 50))
  }
  ,
  t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var n = this;
      return "boolean" == typeof e ? (t = e,
      e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e,
      n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(),
      i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
      n.$slides = n.$slideTrack.children(this.options.slide),
      n.$slideTrack.children(this.options.slide).detach(),
      n.$slideTrack.append(n.$slides),
      n.$slidesCache = n.$slides,
      n.reinit(),
      void 0)
  }
  ,
  t.prototype.setCSS = function(e) {
      var t, i, n = this, r = {};
      n.options.rtl === !0 && (e = -e),
      t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
      i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
      r[n.positionProp] = e,
      n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {},
      n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")",
      n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
      n.$slideTrack.css(r)))
  }
  ,
  t.prototype.setDimensions = function() {
      var e = this;
      e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
          padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
      e.options.centerMode === !0 && e.$list.css({
          padding: e.options.centerPadding + " 0px"
      })),
      e.listWidth = e.$list.width(),
      e.listHeight = e.$list.height(),
      e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
      e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
      e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }
  ,
  t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(n, r) {
          t = i.slideWidth * n * -1,
          i.options.rtl === !0 ? e(r).css({
              position: "relative",
              right: t,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          }) : e(r).css({
              position: "relative",
              left: t,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          })
      }),
      i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
      })
  }
  ,
  t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t)
      }
  }
  ,
  t.prototype.setOption = t.prototype.slickSetOption = function() {
      var t, i, n, r, o, s = this, a = !1;
      if ("object" === e.type(arguments[0]) ? (n = arguments[0],
      a = arguments[1],
      o = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
      r = arguments[1],
      a = arguments[2],
      "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")),
      "single" === o)
          s.options[n] = r;
      else if ("multiple" === o)
          e.each(n, function(e, t) {
              s.options[e] = t
          });
      else if ("responsive" === o)
          for (i in r)
              if ("array" !== e.type(s.options.responsive))
                  s.options.responsive = [r[i]];
              else {
                  for (t = s.options.responsive.length - 1; t >= 0; )
                      s.options.responsive[t].breakpoint === r[i].breakpoint && s.options.responsive.splice(t, 1),
                      t--;
                  s.options.responsive.push(r[i])
              }
      a && (s.unload(),
      s.reinit())
  }
  ,
  t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(),
      e.setHeight(),
      e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
      e.$slider.trigger("setPosition", [e])
  }
  ,
  t.prototype.setProps = function() {
      var e = this
        , t = document.body.style;
      e.positionProp = e.options.vertical === !0 ? "top" : "left",
      "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
      (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0),
      e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
      void 0 !== t.OTransform && (e.animType = "OTransform",
      e.transformType = "-o-transform",
      e.transitionType = "OTransition",
      void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
      void 0 !== t.MozTransform && (e.animType = "MozTransform",
      e.transformType = "-moz-transform",
      e.transitionType = "MozTransition",
      void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
      void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
      e.transformType = "-webkit-transform",
      e.transitionType = "webkitTransition",
      void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
      void 0 !== t.msTransform && (e.animType = "msTransform",
      e.transformType = "-ms-transform",
      e.transitionType = "msTransition",
      void 0 === t.msTransform && (e.animType = !1)),
      void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform",
      e.transformType = "transform",
      e.transitionType = "transition"),
      e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
  }
  ,
  t.prototype.setSlideClasses = function(e) {
      var t, i, n, r, o = this;
      if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
      o.$slides.eq(e).addClass("slick-current"),
      o.options.centerMode === !0) {
          var s = o.options.slidesToShow % 2 === 0 ? 1 : 0;
          t = Math.floor(o.options.slidesToShow / 2),
          o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e,
          i.slice(n - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
          0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
          o.$slides.eq(e).addClass("slick-center")
      } else
          e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow,
          n = o.options.infinite === !0 ? o.options.slidesToShow + e : e,
          o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      ("ondemand" === o.options.lazyLoad || "anticipated" === o.options.lazyLoad) && o.lazyLoad()
  }
  ,
  t.prototype.setupInfinite = function() {
      var t, i, n, r = this;
      if (r.options.fade === !0 && (r.options.centerMode = !1),
      r.options.infinite === !0 && r.options.fade === !1 && (i = null,
      r.slideCount > r.options.slidesToShow)) {
          for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow,
          t = r.slideCount; t > r.slideCount - n; t -= 1)
              i = t - 1,
              e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
          for (t = 0; t < n + r.slideCount; t += 1)
              i = t,
              e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
          r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              e(this).attr("id", "")
          })
      }
  }
  ,
  t.prototype.interrupt = function(e) {
      var t = this;
      e || t.autoPlay(),
      t.interrupted = e
  }
  ,
  t.prototype.selectHandler = function(t) {
      var i = this
        , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
        , r = parseInt(n.attr("data-slick-index"));
      return r || (r = 0),
      i.slideCount <= i.options.slidesToShow ? (i.slideHandler(r, !1, !0),
      void 0) : (i.slideHandler(r),
      void 0)
  }
  ,
  t.prototype.slideHandler = function(e, t, i) {
      var n, r, o, s, a, l = null, c = this;
      return t = t || !1,
      c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e ? void 0 : (t === !1 && c.asNavFor(e),
      n = e,
      l = c.getLeft(n),
      s = c.getLeft(c.currentSlide),
      c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
      c.options.infinite === !1 && c.options.centerMode === !1 && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? (c.options.fade === !1 && (n = c.currentSlide,
      i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
          c.postSlide(n)
      }) : c.postSlide(n)),
      void 0) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? (c.options.fade === !1 && (n = c.currentSlide,
      i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
          c.postSlide(n)
      }) : c.postSlide(n)),
      void 0) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
      r = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n,
      c.animating = !0,
      c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
      o = c.currentSlide,
      c.currentSlide = r,
      c.setSlideClasses(c.currentSlide),
      c.options.asNavFor && (a = c.getNavTarget(),
      a = a.slick("getSlick"),
      a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
      c.updateDots(),
      c.updateArrows(),
      c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o),
      c.fadeSlide(r, function() {
          c.postSlide(r)
      })) : c.postSlide(r),
      c.animateHeight(),
      void 0) : (i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function() {
          c.postSlide(r)
      }) : c.postSlide(r),
      void 0)))
  }
  ,
  t.prototype.startLoad = function() {
      var e = this;
      e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
      e.$nextArrow.hide()),
      e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
      e.$slider.addClass("slick-loading")
  }
  ,
  t.prototype.swipeDirection = function() {
      var e, t, i, n, r = this;
      return e = r.touchObject.startX - r.touchObject.curX,
      t = r.touchObject.startY - r.touchObject.curY,
      i = Math.atan2(t, e),
      n = Math.round(180 * i / Math.PI),
      0 > n && (n = 360 - Math.abs(n)),
      45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
  }
  ,
  t.prototype.swipeEnd = function() {
      var e, t, i = this;
      if (i.dragging = !1,
      i.swiping = !1,
      i.scrolling)
          return i.scrolling = !1,
          !1;
      if (i.interrupted = !1,
      i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0,
      void 0 === i.touchObject.curX)
          return !1;
      if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]),
      i.touchObject.swipeLength >= i.touchObject.minSwipe) {
          switch (t = i.swipeDirection()) {
          case "left":
          case "down":
              e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
              i.currentDirection = 0;
              break;
          case "right":
          case "up":
              e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
              i.currentDirection = 1
          }
          "vertical" != t && (i.slideHandler(e),
          i.touchObject = {},
          i.$slider.trigger("swipe", [i, t]))
      } else
          i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
          i.touchObject = {})
  }
  ,
  t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(t.options.swipe === !1 || "ontouchend"in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")))
          switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
          t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
          t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
          e.data.action) {
          case "start":
              t.swipeStart(e);
              break;
          case "move":
              t.swipeMove(e);
              break;
          case "end":
              t.swipeEnd(e)
          }
  }
  ,
  t.prototype.swipeMove = function(e) {
      var t, i, n, r, o, s, a = this;
      return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
      !a.dragging || a.scrolling || o && 1 !== o.length ? !1 : (t = a.getLeft(a.currentSlide),
      a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
      a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
      a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
      s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
      !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
      !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s),
      i = a.swipeDirection(),
      void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
      e.preventDefault()),
      r = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
      a.options.verticalSwiping === !0 && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
      n = a.touchObject.swipeLength,
      a.touchObject.edgeHit = !1,
      a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
      a.touchObject.edgeHit = !0),
      a.swipeLeft = a.options.vertical === !1 ? t + n * r : t + n * (a.$list.height() / a.listWidth) * r,
      a.options.verticalSwiping === !0 && (a.swipeLeft = t + n * r),
      a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null,
      !1) : (a.setCSS(a.swipeLeft),
      void 0)))
  }
  ,
  t.prototype.swipeStart = function(e) {
      var t, i = this;
      return i.interrupted = !0,
      1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
      !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
      i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
      i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
      i.dragging = !0,
      void 0)
  }
  ,
  t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(),
      e.$slideTrack.children(this.options.slide).detach(),
      e.$slidesCache.appendTo(e.$slideTrack),
      e.reinit())
  }
  ,
  t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(),
      t.$dots && t.$dots.remove(),
      t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
      t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
      t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }
  ,
  t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]),
      t.destroy()
  }
  ,
  t.prototype.updateArrows = function() {
      var e, t = this;
      e = Math.floor(t.options.slidesToShow / 2),
      t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
      t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
      0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
      t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }
  ,
  t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
      e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
  }
  ,
  t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (e.interrupted = document[e.hidden] ? !0 : !1)
  }
  ,
  e.fn.slick = function() {
      var e, i, n = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = n.length;
      for (e = 0; s > e; e++)
          if ("object" == typeof r || "undefined" == typeof r ? n[e].slick = new t(n[e],r) : i = n[e].slick[r].apply(n[e].slick, o),
          "undefined" != typeof i)
              return i;
      return n
  }
}),
function() {
  this.Ga4Event = function() {
      function e() {}
      return e.items = [],
      e.itemData = function(e, t, i, n, r) {
          return {
              item_id: e,
              item_name: t,
              item_brand: i,
              currency: "JPY",
              quantity: r,
              price: n
          }
      }
      ,
      e.addItem = function(e) {
          return this.containsItem(e.id) === !1 ? this.items.push(e) : this.updateItem(e)
      }
      ,
      e.removeItem = function(e) {
          var t, i, n, r;
          n = this.items,
          r = [];
          for (t in n)
              i = n[t],
              e.item_id === i.item_id ? r.push(this.items.splice(t, 1)) : r.push(void 0);
          return r
      }
      ,
      e.containsItem = function(e) {
          var t, i, n;
          if (void 0 === this.items)
              return !1;
          n = this.items;
          for (t in n)
              if (i = n[t],
              e === i.item_id)
                  return !0;
          return !1
      }
      ,
      e.updateItem = function(e) {
          var t, i, n, r;
          n = this.items,
          r = [];
          for (t in n)
              i = n[t],
              e.item_id === i.item_id ? r.push(i.quantity = e.price) : r.push(void 0);
          return r
      }
      ,
      e.getItems = function() {
          return this.items
      }
      ,
      e
  }()
}
.call(this),
function() {
  window.console && console.log || !function() {
      var e, t, i, n, r;
      for (n = function() {}
      ,
      i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
      t = i.length,
      e = window.console = {},
      r = []; t--; )
          r.push(e[i[t]] = n);
      return r
  }()
}
.call(this),
function() {
  !function(e) {
      var t, i;
      return i = function(e) {
          return '<p class="form-error-message">' + e + "</p>"
      }
      ,
      e.showErrorMessage = function(t, n, r) {
          var o, s, a, l, c, u;
          return null == n && (n = []),
          null == r && (r = null),
          c = '<div class="alert alert-danger">',
          "object" === e.type(t) ? e.each(t, function() {
              return function(t, i) {
                  return e.showErrorMessage(i, n.concat([t]), r)
              }
          }(this)) : ("Crowdfunding::Order" === n[0] && (n[0] = n[0].split("::").join("_").toLowerCase()),
          u = n.join("_").toLowerCase().replace(/(.*)::/, ""),
          r || (r = e("body")),
          l = r.find("#" + u),
          l.length ? (a = l.closest(".form-group"),
          a.length ? (s = a.children("div").last(),
          s.hasClass("checkbox") && (s = s.parent()),
          o = s.find(".alert-danger"),
          o.length || (o = e(c).appendTo(s))) : o = e(c).appendTo(l),
          o.append(i(t))) : (s = r.find(".panel-body, .modal-body, .card-body"),
          o = e(c).appendTo(s),
          o.append(i(t))))
      }
      ,
      t = function() {
          function t(t) {
              this.$el = e(t),
              this.$form = this.$el.closest("form"),
              this.authorized = this.$el.data("authorized"),
              this.$image = this.$el.find("img[data-src]"),
              this.$el.find("[type=submit]").on("click", e.proxy(this.submit, this))
          }
          return t.prototype.submit = function(t) {
              var i, n;
              return this.authorized ? (n = 1e3,
              this.$image.each(function(t, i) {
                  var r;
                  return r = e(i),
                  r.attr("src", r.data("src")),
                  r.data("wait") > n ? n = parseInt(r.data("wait")) : void 0
              }),
              i = e(t.currentTarget),
              i.prop("disabled", !0),
              setTimeout(function(e) {
                  return function() {
                      return e.$form.submit()
                  }
              }(this), n),
              !1) : this.$form.submit()
          }
          ,
          e.fn.gacha = function(i) {
              return this.each(function() {
                  var n, r, o;
                  return n = e(this),
                  r = n.data("gacha"),
                  o = "object" == typeof i && i,
                  r || n.data("gacha", r = new t(this,o)),
                  n
              })
          }
          ,
          t
      }()
  }(window.$),
  $(function() {
      return $("a.disabled").on("click", function() {
          return !1
      }),
      $('[data-remote="true"]').each(function(e, t) {
          var i;
          return i = $(t),
          i.on("ajax:before", function() {}),
          i.on("ajax:beforeSend", function() {
              return i.find("[type=submit]").attr("disabled", !0)
          }),
          i.on("ajax:success", function(e, t) {
              switch (i.find(".alert-danger").remove(),
              t.status) {
              case 400:
                  return t.errors.email_uniqueness_error && (t.errors.User.email = t.errors.email_uniqueness_error,
                  delete t.errors.email_uniqueness_error),
                  $.showErrorMessage(t.errors, [], i)
              }
          }),
          i.on("ajax:error", function() {}),
          i.on("ajax:complete", function() {
              return i.find("[type=submit]").attr("disabled", !1)
          }),
          i.on("ajax:aborted:required", function() {}),
          i.on("ajax:aborted:file", function() {})
      }),
      $("[data-toggle=collapse-group]").each(function(e, t) {
          var i, n, r;
          return n = $(t),
          i = n.find(".collapse").collapse({
              toggle: !1
          }),
          r = n.find("[data-toggle=radio-collapse]"),
          r.on("change", function(e) {
              var t;
              return t = $($(e.currentTarget).closest("[data-target]").data("target")),
              i.not(t).collapse("hide"),
              t.collapse("show")
          })
      }),
      $("[data-toggle=collapse-check-group]").each(function(e, t) {
          var i, n, r, o;
          return r = $(t),
          n = r.find(".collapse"),
          o = r.find("[data-toggle=check-collapse]"),
          i = r.find("[type=checkbox]"),
          i.prop("checked") ? n.collapse({
              toggle: !0
          }) : n.collapse({
              toggle: !1
          }),
          o.on("change", function(e) {
              var t;
              return t = $($(e.currentTarget).closest("[data-target]").data("target")),
              t.collapse("show"),
              t.collapse("hide")
          })
      }),
      $("form .gacha").gacha(),
      $("form").each(function(e, t) {
          var i, n, r, o, s;
          return n = $(t),
          i = n.find(".user_profile_country_id select"),
          r = n.find(".user_profile_global_state"),
          s = r.find("input"),
          o = r.find("select"),
          i.on("change", function() {
              return "Japan" === i.find("option:selected").text() ? (s.addClass("hide"),
              s.prop("disabled", !0),
              o.removeClass("hide"),
              o.prop("disabled", !1)) : (o.addClass("hide"),
              o.prop("disabled", !0),
              s.removeClass("hide"),
              s.prop("disabled", !1))
          })
      }),
      $(".birthday").on("change", function() {
          var e, t, i, n, r, o, s, a;
          return s = new Date,
          a = s.getMonth() + 1,
          o = $("#user_year").val(),
          i = $("#user_month").val(),
          t = $("#user_day").val(),
          o && i && t ? (r = parseInt(i, 10),
          n = parseInt(t, 10),
          e = s.getUTCFullYear() - o,
          (i > a || r === a && n > s.getDate()) && e--,
          $(".birthday-age").text(e)) : void 0
      })
  })
}
.call(this),
function() {
  !function(e) {
      var t;
      return t = {
          "zip-auto": "郵便番号に該当する住所が見つかりませんでした"
      },
      e.zip2addr = function(i, n) {
          var r, o, s, a, l, c, u, d, p, f, h;
          try {
              if (u = [i + "[zip1]", i + "[zip2]", i + "[prefecture_id]", i + "[city]", i + "[address1]"],
              n)
                  for (l = f = 0,
                  h = u.length; h > f; l = ++f)
                      c = u[l],
                      u[l] = c.replace(/\[(.*)\]/, "[" + n + "_$1]");
              if (s = e.map(u, function(t) {
                  return e('[name="' + t + '"]').last()[0]
              }),
              r = e(s[0]),
              o = e(s[1]),
              d = r.val(),
              p = o.val(),
              3 === d.length && 4 === p.length)
                  return r.val(e.toOneByteAlphaNumeric(d)),
                  o.val(e.toOneByteAlphaNumeric(p)),
                  AjaxZip3.zip2addr(s[0], s[1], s[2], s[3], s[4]);
              throw ""
          } catch (m) {
              return a = m,
              e.showErrorMessage(t)
          }
      }
      ,
      e.toOneByteAlphaNumeric = function(e) {
          return e.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(e) {
              return String.fromCharCode(e.charCodeAt(0) - 65248)
          })
      }
      ,
      e(function() {
          var i;
          return "undefined" != typeof AjaxZip3 && (i = AjaxZip3.callback,
          AjaxZip3.callback = e.proxy(function(n) {
              var r;
              return r = n[AjaxZip3.nzip],
              r ? i(n) : e.showErrorMessage(t)
          }, this)),
          e(".zip-auto").on("click", function(t) {
              var i, n, r;
              return i = e(t.currentTarget),
              i.closest(".form-group").find(".alert-danger").remove(),
              n = i.data("model"),
              r = i.data("shipping-type"),
              e.zip2addr(n, r),
              !1
          })
      })
  }(window.$)
}
.call(this);
var width = $(window).innerWidth();
height = $(window).innerHeight(),
$cursor = $(".cursor"),
$follower = $(".follower"),
cWidth = 24,
fWidth = 24,
delay = 5,
mouseX = width / 2,
mouseY = height / 2,
posX = width / 2,
posY = height / 2,
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
      posX += (mouseX - posX) / delay,
      posY += (mouseY - posY) / delay,
      $cursor.hasClass("is-active") ? TweenMax.set($follower, {
          css: {
              left: posX - cWidth / 1.25,
              top: posY - cWidth / 3
          }
      }) : TweenMax.set($follower, {
          css: {
              left: posX - cWidth / 1.25,
              top: posY - cWidth / 3
          }
      }),
      TweenMax.set($cursor, {
          css: {
              left: mouseX - cWidth / 1.25,
              top: mouseY - cWidth / 3
          }
      })
  }
}),
$(document).on("mousemove", function(e) {
  mouseX = e.clientX,
  mouseY = e.clientY
}),
$('a, .onmouse, [type="button"], input[type="submit"]').on({
  mouseenter: function() {
      $cursor.addClass("is-active"),
      $follower.addClass("is-active")
  },
  mouseleave: function() {
      $cursor.removeClass("is-active"),
      $follower.removeClass("is-active")
  }
}),
$(function() {
  var e = $(window).innerWidth()
    , t = 300
    , i = 1;
  768 > e && (t = 100),
  $("#particles-js").length > 0 && particlesJS("particles-js", {
      particles: {
          number: {
              value: t,
              density: {
                  enable: !1,
                  value_area: 1262.6362266116362
              }
          },
          color: {
              value: ["#3a4157", "#121c6a", "#112a3b"]
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#000000"
              },
              polygon: {
                  nb_sides: 6
              }
          },
          opacity: {
              value: 1,
              random: !0,
              anim: {
                  enable: !0,
                  speed: 1,
                  opacity_min: 0,
                  sync: !1
              }
          },
          size: {
              value: 5,
              random: !0,
              anim: {
                  enable: !1,
                  speed: 4,
                  size_min: .3,
                  sync: !1
              }
          },
          line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: .4,
              width: 1
          },
          move: {
              enable: !0,
              speed: i,
              direction: "right",
              random: !0,
              straight: !0,
              out_mode: "out",
              bounce: !1,
              attract: {
                  enable: !1,
                  rotateX: 0,
                  rotateY: 0
              }
          }
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: !1,
                  mode: "repulse"
              },
              onclick: {
                  enable: !0,
                  mode: "repulse"
              },
              resize: !0
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3
              },
              repulse: {
                  distance: 400,
                  duration: .4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: !0
  }),
  $("#particles-js-menu").length > 0 && particlesJS("particles-js-menu", {
      particles: {
          number: {
              value: t,
              density: {
                  enable: !1,
                  value_area: 1262.6362266116362
              }
          },
          color: {
              value: ["#ffffff", "#082129", "#0d175f"]
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#000000"
              },
              polygon: {
                  nb_sides: 6
              }
          },
          opacity: {
              value: 1,
              random: !0,
              anim: {
                  enable: !0,
                  speed: 1,
                  opacity_min: 0,
                  sync: !1
              }
          },
          size: {
              value: 3,
              random: !0,
              anim: {
                  enable: !1,
                  speed: 4,
                  size_min: .3,
                  sync: !1
              }
          },
          line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: .4,
              width: 1
          },
          move: {
              enable: !0,
              speed: i,
              direction: "right",
              random: !0,
              straight: !0,
              out_mode: "out",
              bounce: !1,
              attract: {
                  enable: !1,
                  rotateX: 0,
                  rotateY: 0
              }
          }
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: !1,
                  mode: "repulse"
              },
              onclick: {
                  enable: !0,
                  mode: "repulse"
              },
              resize: !0
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3
              },
              repulse: {
                  distance: 400,
                  duration: .4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: !0
  })
}),
function() {
  $(function() {
      var e, t, i, n, r, o, s, a, l, c, u, d;
      return c = 768,
      l = 992,
      r = $(window),
      e = $("body"),
      t = $(".header"),
      e.addClass("is-loaded"),
      $(".fb-like-btn").length > 0 && $.post("https://graph.facebook.com/", {
          scrape: !0,
          id: location.href
      }),
      e.find("select").addClass("form-control"),
      o = platform.os.toString().toLowerCase(),
      (-1 !== o.indexOf("windows") || -1 !== o.indexOf("os x")) && e.addClass("is-pc"),
      $(".btn-modal-menu").on("click", function(t) {
          var i;
          return t.preventDefault(),
          i = r.scrollTop(),
          e.toggleClass("is-menu-open"),
          $(".header").toggleClass("is-menu-open"),
          $(this).toggleClass("is-menu-open")
      }),
      "/" === location.pathname && ($("#top-banners").slick({
          dots: !0,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><span></span></button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><span></span></button>',
          autoplaySpeed: 3e3,
          slidesToShow: 3,
          infinite: $("#top-banners").find(".top-banners-item").length > 1 ? !0 : !1,
          speed: 600,
          cssEase: "linear",
          autoplay: !0,
          responsive: [{
              breakpoint: c,
              settings: {
                  slidesToShow: 1
              }
          }]
      }),
      $("#latest-discography").length > 0 && (d = new Swiper("#latest-discography",{
          effect: "creative",
          slidesPerView: 1,
          loop: !0,
          autoplay: {
              delay: 3e3
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: !0
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          },
          creativeEffect: {
              limitProgress: 2,
              prev: {
                  translate: [0, 0, -100],
                  rotate: [0, 0, 0]
              },
              next: {
                  translate: [0, "-10%", -80],
                  rotate: [0, 0, 0]
              }
          }
      }))),
      s = "#jsProfileImage",
      a = "#jsProfileThumb",
      $(s).length && ($(s).slick({
          slidesToShow: 1,
          arrows: !1,
          asNavFor: a,
          fade: !0
      }),
      $(a).slick({
          slidesToShow: 6,
          asNavFor: s,
          focusOnSelect: !0
      })),
      $("#modal").modal({
          keyboard: !0,
          show: !0
      }),
      $("#popup").length > 0 && $.magnificPopup.open({
          items: {
              src: "#popup"
          },
          type: "inline",
          modal: !0
      }, 0),
      $(document).on("click", ".popup-modal-dismiss", function(e) {
          return e.preventDefault(),
          $.magnificPopup.close()
      }),
      u = function(e) {
          var t;
          return t = $(e),
          t.on("click", function() {
              var e, t, i;
              return e = $(this).find("i"),
              t = "fa-angle-down",
              i = "fa-angle-up",
              $(this).next().slideToggle(),
              e.hasClass(t) ? e.removeClass(t).addClass(i) : e.removeClass(i).addClass(t)
          })
      }
      ,
      u("#helps .title"),
      i = $(".tab-label"),
      n = $(".tab-panel"),
      i.on("click", function() {
          var e;
          return e = $(this).index(),
          i.removeClass("active"),
          n.removeClass("active"),
          $(this).addClass("active"),
          n.eq(e).addClass("active")
      }),
      $(".animation-view, .bio-title span").on("inview", function(e, t) {
          return t && $(this).addClass("fadein"),
          !1
      }),
      $(".js-scroll-top").on("click", function() {
          var e;
          return e = $("#page-top").offset().top,
          $("body,html").animate({
              scrollTop: e
          }, 800),
          !1
      }),
      objectFitImages("img.object-fit-img"),
      $("#jsLanguageChange").on("click", function() {
          return $(this).toggleClass("show-list")
      })
  })
}
.call(this);
