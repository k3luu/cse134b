(function (e) {
	e.Parse = e.Parse || {}, e.Parse.VERSION = "js1.2.19"
})(this),
function () {
	var e = this,
		t = e._,
		n = {},
		i = Array.prototype,
		r = Object.prototype,
		s = Function.prototype,
		a = i.push,
		o = i.slice,
		u = i.concat,
		c = r.toString,
		l = r.hasOwnProperty,
		h = i.forEach,
		d = i.map,
		f = i.reduce,
		p = i.reduceRight,
		_ = i.filter,
		m = i.every,
		v = i.some,
		g = i.indexOf,
		b = i.lastIndexOf,
		y = Array.isArray,
		O = Object.keys,
		E = s.bind,
		w = function (e) {
			return e instanceof w ? e : this instanceof w ? (this._wrapped = e, void 0) : new w(e)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : e._ = w, w.VERSION = "1.4.4";
	var x = w.each = w.forEach = function (e, t, i) {
		if (null != e)
			if (h && e.forEach === h) e.forEach(t, i);
			else if (e.length === +e.length) {
			for (var r = 0, s = e.length; s > r; r++)
				if (t.call(i, e[r], r, e) === n) return
		} else
			for (var a in e)
				if (w.has(e, a) && t.call(i, e[a], a, e) === n) return
	};
	w.map = w.collect = function (e, t, n) {
		var i = [];
		return null == e ? i : d && e.map === d ? e.map(t, n) : (x(e, function (e, r, s) {
			i[i.length] = t.call(n, e, r, s)
		}), i)
	};
	var A = "Reduce of empty array with no initial value";
	w.reduce = w.foldl = w.inject = function (e, t, n, i) {
		var r = arguments.length > 2;
		if (null == e && (e = []), f && e.reduce === f) return i && (t = w.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
		if (x(e, function (e, s, a) {
			r ? n = t.call(i, n, e, s, a) : (n = e, r = !0)
		}), !r) throw new TypeError(A);
		return n
	}, w.reduceRight = w.foldr = function (e, t, n, i) {
		var r = arguments.length > 2;
		if (null == e && (e = []), p && e.reduceRight === p) return i && (t = w.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
		var s = e.length;
		if (s !== +s) {
			var a = w.keys(e);
			s = a.length
		}
		if (x(e, function (o, u, c) {
			u = a ? a[--s] : --s, r ? n = t.call(i, n, e[u], u, c) : (n = e[u], r = !0)
		}), !r) throw new TypeError(A);
		return n
	}, w.find = w.detect = function (e, t, n) {
		var i;
		return S(e, function (e, r, s) {
			return t.call(n, e, r, s) ? (i = e, !0) : void 0
		}), i
	}, w.filter = w.select = function (e, t, n) {
		var i = [];
		return null == e ? i : _ && e.filter === _ ? e.filter(t, n) : (x(e, function (e, r, s) {
			t.call(n, e, r, s) && (i[i.length] = e)
		}), i)
	}, w.reject = function (e, t, n) {
		return w.filter(e, function (e, i, r) {
			return !t.call(n, e, i, r)
		}, n)
	}, w.every = w.all = function (e, t, i) {
		t || (t = w.identity);
		var r = !0;
		return null == e ? r : m && e.every === m ? e.every(t, i) : (x(e, function (e, s, a) {
			return (r = r && t.call(i, e, s, a)) ? void 0 : n
		}), !!r)
	};
	var S = w.some = w.any = function (e, t, i) {
		t || (t = w.identity);
		var r = !1;
		return null == e ? r : v && e.some === v ? e.some(t, i) : (x(e, function (e, s, a) {
			return r || (r = t.call(i, e, s, a)) ? n : void 0
		}), !!r)
	};
	w.contains = w.include = function (e, t) {
		return null == e ? !1 : g && e.indexOf === g ? -1 != e.indexOf(t) : S(e, function (e) {
			return e === t
		})
	}, w.invoke = function (e, t) {
		var n = o.call(arguments, 2),
			i = w.isFunction(t);
		return w.map(e, function (e) {
			return (i ? t : e[t]).apply(e, n)
		})
	}, w.pluck = function (e, t) {
		return w.map(e, function (e) {
			return e[t]
		})
	}, w.where = function (e, t, n) {
		return w.isEmpty(t) ? n ? null : [] : w[n ? "find" : "filter"](e, function (e) {
			for (var n in t)
				if (t[n] !== e[n]) return !1;
			return !0
		})
	}, w.findWhere = function (e, t) {
		return w.where(e, t, !0)
	}, w.max = function (e, t, n) {
		if (!t && w.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
		if (!t && w.isEmpty(e)) return -1 / 0;
		var i = {
			computed: -1 / 0,
			value: -1 / 0
		};
		return x(e, function (e, r, s) {
			var a = t ? t.call(n, e, r, s) : e;
			a >= i.computed && (i = {
				value: e,
				computed: a
			})
		}), i.value
	}, w.min = function (e, t, n) {
		if (!t && w.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
		if (!t && w.isEmpty(e)) return 1 / 0;
		var i = {
			computed: 1 / 0,
			value: 1 / 0
		};
		return x(e, function (e, r, s) {
			var a = t ? t.call(n, e, r, s) : e;
			i.computed > a && (i = {
				value: e,
				computed: a
			})
		}), i.value
	}, w.shuffle = function (e) {
		var t, n = 0,
			i = [];
		return x(e, function (e) {
			t = w.random(n++), i[n - 1] = i[t], i[t] = e
		}), i
	};
	var j = function (e) {
		return w.isFunction(e) ? e : function (t) {
			return t[e]
		}
	};
	w.sortBy = function (e, t, n) {
		var i = j(t);
		return w.pluck(w.map(e, function (e, t, r) {
			return {
				value: e,
				index: t,
				criteria: i.call(n, e, t, r)
			}
		}).sort(function (e, t) {
			var n = e.criteria,
				i = t.criteria;
			if (n !== i) {
				if (n > i || void 0 === n) return 1;
				if (i > n || void 0 === i) return -1
			}
			return e.index < t.index ? -1 : 1
		}), "value")
	};
	var N = function (e, t, n, i) {
		var r = {},
			s = j(t || w.identity);
		return x(e, function (t, a) {
			var o = s.call(n, t, a, e);
			i(r, o, t)
		}), r
	};
	w.groupBy = function (e, t, n) {
		return N(e, t, n, function (e, t, n) {
			(w.has(e, t) ? e[t] : e[t] = []).push(n)
		})
	}, w.countBy = function (e, t, n) {
		return N(e, t, n, function (e, t) {
			w.has(e, t) || (e[t] = 0), e[t]++
		})
	}, w.sortedIndex = function (e, t, n, i) {
		n = null == n ? w.identity : j(n);
		for (var r = n.call(i, t), s = 0, a = e.length; a > s;) {
			var o = s + a >>> 1;
			r > n.call(i, e[o]) ? s = o + 1 : a = o
		}
		return s
	}, w.toArray = function (e) {
		return e ? w.isArray(e) ? o.call(e) : e.length === +e.length ? w.map(e, w.identity) : w.values(e) : []
	}, w.size = function (e) {
		return null == e ? 0 : e.length === +e.length ? e.length : w.keys(e).length
	}, w.first = w.head = w.take = function (e, t, n) {
		return null == e ? void 0 : null == t || n ? e[0] : o.call(e, 0, t)
	}, w.initial = function (e, t, n) {
		return o.call(e, 0, e.length - (null == t || n ? 1 : t))
	}, w.last = function (e, t, n) {
		return null == e ? void 0 : null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
	}, w.rest = w.tail = w.drop = function (e, t, n) {
		return o.call(e, null == t || n ? 1 : t)
	}, w.compact = function (e) {
		return w.filter(e, w.identity)
	};
	var P = function (e, t, n) {
		return x(e, function (e) {
			w.isArray(e) ? t ? a.apply(n, e) : P(e, t, n) : n.push(e)
		}), n
	};
	w.flatten = function (e, t) {
		return P(e, t, [])
	}, w.without = function (e) {
		return w.difference(e, o.call(arguments, 1))
	}, w.uniq = w.unique = function (e, t, n, i) {
		w.isFunction(t) && (i = n, n = t, t = !1);
		var r = n ? w.map(e, n, i) : e,
			s = [],
			a = [];
		return x(r, function (n, i) {
			(t ? i && a[a.length - 1] === n : w.contains(a, n)) || (a.push(n), s.push(e[i]))
		}), s
	}, w.union = function () {
		return w.uniq(u.apply(i, arguments))
	}, w.intersection = function (e) {
		var t = o.call(arguments, 1);
		return w.filter(w.uniq(e), function (e) {
			return w.every(t, function (t) {
				return w.indexOf(t, e) >= 0
			})
		})
	}, w.difference = function (e) {
		var t = u.apply(i, o.call(arguments, 1));
		return w.filter(e, function (e) {
			return !w.contains(t, e)
		})
	}, w.zip = function () {
		for (var e = o.call(arguments), t = w.max(w.pluck(e, "length")), n = Array(t), i = 0; t > i; i++) n[i] = w.pluck(e, "" + i);
		return n
	}, w.object = function (e, t) {
		if (null == e) return {};
		for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
		return n
	}, w.indexOf = function (e, t, n) {
		if (null == e) return -1;
		var i = 0,
			r = e.length;
		if (n) {
			if ("number" != typeof n) return i = w.sortedIndex(e, t), e[i] === t ? i : -1;
			i = 0 > n ? Math.max(0, r + n) : n
		}
		if (g && e.indexOf === g) return e.indexOf(t, n);
		for (; r > i; i++)
			if (e[i] === t) return i;
		return -1
	}, w.lastIndexOf = function (e, t, n) {
		if (null == e) return -1;
		var i = null != n;
		if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
		for (var r = i ? n : e.length; r--;)
			if (e[r] === t) return r;
		return -1
	}, w.range = function (e, t, n) {
		1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
		for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, s = Array(i); i > r;) s[r++] = e, e += n;
		return s
	}, w.bind = function (e, t) {
		if (e.bind === E && E) return E.apply(e, o.call(arguments, 1));
		var n = o.call(arguments, 2);
		return function () {
			return e.apply(t, n.concat(o.call(arguments)))
		}
	}, w.partial = function (e) {
		var t = o.call(arguments, 1);
		return function () {
			return e.apply(this, t.concat(o.call(arguments)))
		}
	}, w.bindAll = function (e) {
		var t = o.call(arguments, 1);
		return 0 === t.length && (t = w.functions(e)), x(t, function (t) {
			e[t] = w.bind(e[t], e)
		}), e
	}, w.memoize = function (e, t) {
		var n = {};
		return t || (t = w.identity),
			function () {
				var i = t.apply(this, arguments);
				return w.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
			}
	}, w.delay = function (e, t) {
		var n = o.call(arguments, 2);
		return setTimeout(function () {
			return e.apply(null, n)
		}, t)
	}, w.defer = function (e) {
		return w.delay.apply(w, [e, 1].concat(o.call(arguments, 1)))
	}, w.throttle = function (e, t) {
		var n, i, r, s, a = 0,
			o = function () {
				a = new Date, r = null, s = e.apply(n, i)
			};
		return function () {
			var u = new Date,
				c = t - (u - a);
			return n = this, i = arguments, 0 >= c ? (clearTimeout(r), r = null, a = u, s = e.apply(n, i)) : r || (r = setTimeout(o, c)), s
		}
	}, w.debounce = function (e, t, n) {
		var i, r;
		return function () {
			var s = this,
				a = arguments,
				o = function () {
					i = null, n || (r = e.apply(s, a))
				},
				u = n && !i;
			return clearTimeout(i), i = setTimeout(o, t), u && (r = e.apply(s, a)), r
		}
	}, w.once = function (e) {
		var t, n = !1;
		return function () {
			return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
		}
	}, w.wrap = function (e, t) {
		return function () {
			var n = [e];
			return a.apply(n, arguments), t.apply(this, n)
		}
	}, w.compose = function () {
		var e = arguments;
		return function () {
			for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
			return t[0]
		}
	}, w.after = function (e, t) {
		return 0 >= e ? t() : function () {
			return 1 > --e ? t.apply(this, arguments) : void 0
		}
	}, w.keys = O || function (e) {
		if (e !== Object(e)) throw new TypeError("Invalid object");
		var t = [];
		for (var n in e) w.has(e, n) && (t[t.length] = n);
		return t
	}, w.values = function (e) {
		var t = [];
		for (var n in e) w.has(e, n) && t.push(e[n]);
		return t
	}, w.pairs = function (e) {
		var t = [];
		for (var n in e) w.has(e, n) && t.push([n, e[n]]);
		return t
	}, w.invert = function (e) {
		var t = {};
		for (var n in e) w.has(e, n) && (t[e[n]] = n);
		return t
	}, w.functions = w.methods = function (e) {
		var t = [];
		for (var n in e) w.isFunction(e[n]) && t.push(n);
		return t.sort()
	}, w.extend = function (e) {
		return x(o.call(arguments, 1), function (t) {
			if (t)
				for (var n in t) e[n] = t[n]
		}), e
	}, w.pick = function (e) {
		var t = {},
			n = u.apply(i, o.call(arguments, 1));
		return x(n, function (n) {
			n in e && (t[n] = e[n])
		}), t
	}, w.omit = function (e) {
		var t = {},
			n = u.apply(i, o.call(arguments, 1));
		for (var r in e) w.contains(n, r) || (t[r] = e[r]);
		return t
	}, w.defaults = function (e) {
		return x(o.call(arguments, 1), function (t) {
			if (t)
				for (var n in t) null == e[n] && (e[n] = t[n])
		}), e
	}, w.clone = function (e) {
		return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e
	}, w.tap = function (e, t) {
		return t(e), e
	};
	var C = function (e, t, n, i) {
		if (e === t) return 0 !== e || 1 / e == 1 / t;
		if (null == e || null == t) return e === t;
		e instanceof w && (e = e._wrapped), t instanceof w && (t = t._wrapped);
		var r = c.call(e);
		if (r != c.call(t)) return !1;
		switch (r) {
		case "[object String]":
			return e == t + "";
		case "[object Number]":
			return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
		case "[object Date]":
		case "[object Boolean]":
			return +e == +t;
		case "[object RegExp]":
			return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
		}
		if ("object" != typeof e || "object" != typeof t) return !1;
		for (var s = n.length; s--;)
			if (n[s] == e) return i[s] == t;
		n.push(e), i.push(t);
		var a = 0,
			o = !0;
		if ("[object Array]" == r) {
			if (a = e.length, o = a == t.length)
				for (; a-- && (o = C(e[a], t[a], n, i)););
		} else {
			var u = e.constructor,
				l = t.constructor;
			if (u !== l && !(w.isFunction(u) && u instanceof u && w.isFunction(l) && l instanceof l)) return !1;
			for (var h in e)
				if (w.has(e, h) && (a++, !(o = w.has(t, h) && C(e[h], t[h], n, i)))) break;
			if (o) {
				for (h in t)
					if (w.has(t, h) && !a--) break;
				o = !a
			}
		}
		return n.pop(), i.pop(), o
	};
	w.isEqual = function (e, t) {
		return C(e, t, [], [])
	}, w.isEmpty = function (e) {
		if (null == e) return !0;
		if (w.isArray(e) || w.isString(e)) return 0 === e.length;
		for (var t in e)
			if (w.has(e, t)) return !1;
		return !0
	}, w.isElement = function (e) {
		return !(!e || 1 !== e.nodeType)
	}, w.isArray = y || function (e) {
		return "[object Array]" == c.call(e)
	}, w.isObject = function (e) {
		return e === Object(e)
	}, x(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
		w["is" + e] = function (t) {
			return c.call(t) == "[object " + e + "]"
		}
	}), w.isArguments(arguments) || (w.isArguments = function (e) {
		return !(!e || !w.has(e, "callee"))
	}), w.isFunction = function (e) {
		return "function" == typeof e
	}, w.isFinite = function (e) {
		return isFinite(e) && !isNaN(parseFloat(e))
	}, w.isNaN = function (e) {
		return w.isNumber(e) && e != +e
	}, w.isBoolean = function (e) {
		return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
	}, w.isNull = function (e) {
		return null === e
	}, w.isUndefined = function (e) {
		return void 0 === e
	}, w.has = function (e, t) {
		return l.call(e, t)
	}, w.noConflict = function () {
		return e._ = t, this
	}, w.identity = function (e) {
		return e
	}, w.times = function (e, t, n) {
		for (var i = Array(e), r = 0; e > r; r++) i[r] = t.call(n, r);
		return i
	}, w.random = function (e, t) {
		return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
	};
	var R = {
		escape: {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"/": "&#x2F;"
		}
	};
	R.unescape = w.invert(R.escape);
	var I = {
		escape: RegExp("[" + w.keys(R.escape).join("") + "]", "g"),
		unescape: RegExp("(" + w.keys(R.unescape).join("|") + ")", "g")
	};
	w.each(["escape", "unescape"], function (e) {
		w[e] = function (t) {
			return null == t ? "" : ("" + t).replace(I[e], function (t) {
				return R[e][t]
			})
		}
	}), w.result = function (e, t) {
		if (null == e) return null;
		var n = e[t];
		return w.isFunction(n) ? n.call(e) : n
	}, w.mixin = function (e) {
		x(w.functions(e), function (t) {
			var n = w[t] = e[t];
			w.prototype[t] = function () {
				var e = [this._wrapped];
				return a.apply(e, arguments), M.call(this, n.apply(w, e))
			}
		})
	};
	var U = 0;
	w.uniqueId = function (e) {
		var t = ++U + "";
		return e ? e + t : t
	}, w.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var T = /(.)^/,
		k = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"	": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	w.template = function (e, t, n) {
		var i;
		n = w.defaults({}, n, w.templateSettings);
		var r = RegExp([(n.escape || T).source, (n.interpolate || T).source, (n.evaluate || T).source].join("|") + "|$", "g"),
			s = 0,
			a = "__p+='";
		e.replace(r, function (t, n, i, r, o) {
			return a += e.slice(s, o).replace(D, function (e) {
				return "\\" + k[e]
			}), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), s = o + t.length, t
		}), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
		try {
			i = Function(n.variable || "obj", "_", a)
		} catch (o) {
			throw o.source = a, o
		}
		if (t) return i(t, w);
		var u = function (e) {
			return i.call(this, e, w)
		};
		return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
	}, w.chain = function (e) {
		return w(e).chain()
	};
	var M = function (e) {
		return this._chain ? w(e).chain() : e
	};
	w.mixin(w), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
		var t = i[e];
		w.prototype[e] = function () {
			var n = this._wrapped;
			return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], M.call(this, n)
		}
	}), x(["concat", "join", "slice"], function (e) {
		var t = i[e];
		w.prototype[e] = function () {
			return M.call(this, t.apply(this._wrapped, arguments))
		}
	}), w.extend(w.prototype, {
		chain: function () {
			return this._chain = !0, this
		},
		value: function () {
			return this._wrapped
		}
	})
}.call(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse;
	"undefined" != typeof exports && exports._ ? (t._ = exports._.noConflict(), t.localStorage = require("localStorage"), t.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest, exports.Parse = t) : (t._ = _.noConflict(), "undefined" != typeof localStorage && (t.localStorage = localStorage), "undefined" != typeof XMLHttpRequest && (t.XMLHttpRequest = XMLHttpRequest)), "undefined" != typeof $ && (t.$ = $);
	var n = function () {},
		i = function (e, i, r) {
			var s;
			return s = i && i.hasOwnProperty("constructor") ? i.constructor : function () {
				e.apply(this, arguments)
			}, t._.extend(s, e), n.prototype = e.prototype, s.prototype = new n, i && t._.extend(s.prototype, i), r && t._.extend(s, r), s.prototype.constructor = s, s.__super__ = e.prototype, s
		};
	t.serverURL = "https://api.parse.com", "undefined" != typeof process && process.versions && process.versions.node && (t._isNode = !0), t.initialize = function (e, n, i) {
		if (i) throw "Parse.initialize() was passed a Master Key, which is only allowed from within Node.js.";
		t._initialize(e, n)
	}, t._initialize = function (e, n, i) {
		t.applicationId = e, t.javaScriptKey = n, t.masterKey = i, t._useMasterKey = !1
	}, t._isNode && (t.initialize = t._initialize, t.Cloud = t.Cloud || {}, t.Cloud.useMasterKey = function () {
		t._useMasterKey = !0
	}), t._getParsePath = function (e) {
		if (!t.applicationId) throw "You need to call Parse.initialize before using Parse.";
		if (e || (e = ""), !t._.isString(e)) throw "Tried to get a localStorage path that wasn't a String.";
		return "/" === e[0] && (e = e.substring(1)), "Parse/" + t.applicationId + "/" + e
	}, t._installationId = null, t._getInstallationId = function () {
		if (t._installationId) return t._installationId;
		var e = t._getParsePath("installationId");
		if (t._installationId = t.localStorage.getItem(e), !t._installationId || "" === t._installationId) {
			var n = function () {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			};
			t._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), t.localStorage.setItem(e, t._installationId)
		}
		return t._installationId
	}, t._parseDate = function (e) {
		var t = RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
			n = t.exec(e);
		if (!n) return null;
		var i = n[1] || 0,
			r = (n[2] || 1) - 1,
			s = n[3] || 0,
			a = n[4] || 0,
			o = n[5] || 0,
			u = n[6] || 0,
			c = n[8] || 0;
		return new Date(Date.UTC(i, r, s, a, o, u, c))
	}, t._ajaxIE8 = function (e, n, i) {
		var r = new t.Promise,
			s = new XDomainRequest;
		return s.onload = function () {
			var e;
			try {
				e = JSON.parse(s.responseText)
			} catch (t) {
				r.reject(t)
			}
			e && r.resolve(e)
		}, s.onerror = s.ontimeout = function () {
			var e = {
				responseText: JSON.stringify({
					code: t.Error.X_DOMAIN_REQUEST,
					error: "IE's XDomainRequest does not supply error info."
				})
			};
			r.reject(e)
		}, s.onprogress = function () {}, s.open(e, n), s.send(i), r
	}, t._useXDomainRequest = function () {
		return "undefined" != typeof XDomainRequest ? "withCredentials" in new XMLHttpRequest ? !1 : !0 : !1
	}, t._ajax = function (e, n, i, r, s) {
		var a = {
			success: r,
			error: s
		};
		if (t._useXDomainRequest()) return t._ajaxIE8(e, n, i)._thenRunCallbacks(a);
		var o = new t.Promise,
			u = !1,
			c = new t.XMLHttpRequest;
		return c.onreadystatechange = function () {
			if (4 === c.readyState) {
				if (u) return;
				if (u = !0, c.status >= 200 && 300 > c.status) {
					var e;
					try {
						e = JSON.parse(c.responseText)
					} catch (t) {
						o.reject(t)
					}
					e && o.resolve(e, c.status, c)
				} else o.reject(c)
			}
		}, c.open(e, n, !0), c.setRequestHeader("Content-Type", "text/plain"), t._isNode && c.setRequestHeader("User-Agent", "Parse/" + t.VERSION + " (NodeJS " + process.versions.node + ")"), c.send(i), o._thenRunCallbacks(a)
	}, t._extend = function (e, t) {
		var n = i(this, e, t);
		return n.extend = this.extend, n
	}, t._request = function (e) {
		var n = e.route,
			i = e.className,
			r = e.objectId,
			s = e.method,
			a = e.useMasterKey,
			o = e.sessionToken,
			u = e.data;
		if (!t.applicationId) throw "You must specify your applicationId using Parse.initialize.";
		if (!t.javaScriptKey && !t.masterKey) throw "You must specify a key using Parse.initialize.";
		if (!o) {
			var c = t.User.current();
			c && c._sessionToken && (o = c._sessionToken)
		}
		if ("batch" !== n && "classes" !== n && "events" !== n && "files" !== n && "functions" !== n && "login" !== n && "push" !== n && "requestPasswordReset" !== n && "rest_verify_analytics" !== n && "users" !== n && "jobs" !== n) throw "Bad route: '" + n + "'.";
		var l = t.serverURL;
		"/" !== l.charAt(l.length - 1) && (l += "/"), l += "1/" + n, i && (l += "/" + i), r && (l += "/" + r), u = t._.clone(u || {}), "POST" !== s && (u._method = s, s = "POST"), t._.isUndefined(a) && (a = t._useMasterKey), u._ApplicationId = t.applicationId, a ? u._MasterKey = t.masterKey : u._JavaScriptKey = t.javaScriptKey, u._ClientVersion = t.VERSION, u._InstallationId = t._getInstallationId(), o && (u._SessionToken = o);
		var h = JSON.stringify(u);
		return t._ajax(s, l, h).then(null, function (e) {
			var n;
			if (e && e.responseText) try {
				var i = JSON.parse(e.responseText);
				n = new t.Error(i.code, i.error)
			} catch (r) {
				n = new t.Error(t.Error.INVALID_JSON, "Received an error with invalid JSON from Parse: " + e.responseText)
			} else n = new t.Error(t.Error.CONNECTION_FAILED, "XMLHttpRequest failed: " + JSON.stringify(e));
			return t.Promise.error(n)
		})
	}, t._getValue = function (e, n) {
		return e && e[n] ? t._.isFunction(e[n]) ? e[n]() : e[n] : null
	}, t._encode = function (e, n, i) {
		var r = t._;
		if (e instanceof t.Object) {
			if (i) throw "Parse.Objects not allowed here";
			if (!n || r.include(n, e) || !e._hasData) return e._toPointer();
			if (!e.dirty()) return n = n.concat(e), t._encode(e._toFullJSON(n), n, i);
			throw "Tried to save an object with a pointer to a new, unsaved object."
		}
		if (e instanceof t.ACL) return e.toJSON();
		if (r.isDate(e)) return {
			__type: "Date",
			iso: e.toJSON()
		};
		if (e instanceof t.GeoPoint) return e.toJSON();
		if (r.isArray(e)) return r.map(e, function (e) {
			return t._encode(e, n, i)
		});
		if (r.isRegExp(e)) return e.source;
		if (e instanceof t.Relation) return e.toJSON();
		if (e instanceof t.Op) return e.toJSON();
		if (e instanceof t.File) {
			if (!e.url()) throw "Tried to save an object containing an unsaved file.";
			return {
				__type: "File",
				name: e.name(),
				url: e.url()
			}
		}
		if (r.isObject(e)) {
			var s = {};
			return t._objectEach(e, function (e, r) {
				s[r] = t._encode(e, n, i)
			}), s
		}
		return e
	}, t._decode = function (e, n) {
		var i = t._;
		if (!i.isObject(n)) return n;
		if (i.isArray(n)) return t._arrayEach(n, function (e, i) {
			n[i] = t._decode(i, e)
		}), n;
		if (n instanceof t.Object) return n;
		if (n instanceof t.File) return n;
		if (n instanceof t.Op) return n;
		if (n.__op) return t.Op._decode(n);
		if ("Pointer" === n.__type) {
			var r = t.Object._create(n.className);
			return r._finishFetch({
				objectId: n.objectId
			}, !1), r
		}
		if ("Object" === n.__type) {
			var s = n.className;
			delete n.__type, delete n.className;
			var a = t.Object._create(s);
			return a._finishFetch(n, !0), a
		}
		if ("Date" === n.__type) return t._parseDate(n.iso);
		if ("GeoPoint" === n.__type) return new t.GeoPoint({
			latitude: n.latitude,
			longitude: n.longitude
		});
		if ("ACL" === e) return n instanceof t.ACL ? n : new t.ACL(n);
		if ("Relation" === n.__type) {
			var o = new t.Relation(null, e);
			return o.targetClassName = n.className, o
		}
		if ("File" === n.__type) {
			var u = new t.File(n.name);
			return u._url = n.url, u
		}
		return t._objectEach(n, function (e, i) {
			n[i] = t._decode(i, e)
		}), n
	}, t._arrayEach = t._.each, t._traverse = function (e, n, i) {
		if (e instanceof t.Object) {
			if (i = i || [], t._.indexOf(i, e) >= 0) return;
			return i.push(e), t._traverse(e.attributes, n, i), n(e)
		}
		return e instanceof t.Relation || e instanceof t.File ? n(e) : t._.isArray(e) ? (t._.each(e, function (r, s) {
			var a = t._traverse(r, n, i);
			a && (e[s] = a)
		}), n(e)) : t._.isObject(e) ? (t._each(e, function (r, s) {
			var a = t._traverse(r, n, i);
			a && (e[s] = a)
		}), n(e)) : n(e)
	}, t._objectEach = t._each = function (e, n) {
		var i = t._;
		i.isObject(e) ? i.each(i.keys(e), function (t) {
			n(e[t], t)
		}) : i.each(e, n)
	}, t._isNullOrUndefined = function (e) {
		return t._.isNull(e) || t._.isUndefined(e)
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Analytics = t.Analytics || {}, n.extend(t.Analytics, {
		track: function (e, i) {
			if (e = e || "", e = e.replace(/^\s*/, ""), e = e.replace(/\s*$/, ""), 0 === e.length) throw "A name for the custom event must be provided";
			return n.each(i, function (e, t) {
				if (!n.isString(t) || !n.isString(e)) throw 'track() dimensions expects keys and values of type "string".'
			}), t._request({
				route: "events",
				className: e,
				method: "POST",
				data: {
					dimensions: i
				}
			})
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Error = function (e, t) {
		this.code = e, this.message = t
	}, n.extend(t.Error, {
		OTHER_CAUSE: -1,
		INTERNAL_SERVER_ERROR: 1,
		CONNECTION_FAILED: 100,
		OBJECT_NOT_FOUND: 101,
		INVALID_QUERY: 102,
		INVALID_CLASS_NAME: 103,
		MISSING_OBJECT_ID: 104,
		INVALID_KEY_NAME: 105,
		INVALID_POINTER: 106,
		INVALID_JSON: 107,
		COMMAND_UNAVAILABLE: 108,
		NOT_INITIALIZED: 109,
		INCORRECT_TYPE: 111,
		INVALID_CHANNEL_NAME: 112,
		PUSH_MISCONFIGURED: 115,
		OBJECT_TOO_LARGE: 116,
		OPERATION_FORBIDDEN: 119,
		CACHE_MISS: 120,
		INVALID_NESTED_KEY: 121,
		INVALID_FILE_NAME: 122,
		INVALID_ACL: 123,
		TIMEOUT: 124,
		INVALID_EMAIL_ADDRESS: 125,
		MISSING_CONTENT_TYPE: 126,
		MISSING_CONTENT_LENGTH: 127,
		INVALID_CONTENT_LENGTH: 128,
		FILE_TOO_LARGE: 129,
		FILE_SAVE_ERROR: 130,
		FILE_DELETE_ERROR: 153,
		DUPLICATE_VALUE: 137,
		INVALID_ROLE_NAME: 139,
		EXCEEDED_QUOTA: 140,
		SCRIPT_FAILED: 141,
		VALIDATION_ERROR: 142,
		INVALID_IMAGE_DATA: 150,
		UNSAVED_FILE_ERROR: 151,
		INVALID_PUSH_TIME_ERROR: 152,
		USERNAME_MISSING: 200,
		PASSWORD_MISSING: 201,
		USERNAME_TAKEN: 202,
		EMAIL_TAKEN: 203,
		EMAIL_MISSING: 204,
		EMAIL_NOT_FOUND: 205,
		SESSION_MISSING: 206,
		MUST_CREATE_USER_THROUGH_SIGNUP: 207,
		ACCOUNT_ALREADY_LINKED: 208,
		LINKED_ID_MISSING: 250,
		INVALID_LINKED_SESSION: 251,
		UNSUPPORTED_SERVICE: 252,
		AGGREGATE_ERROR: 600,
		FILE_READ_ERROR: 601,
		X_DOMAIN_REQUEST: 602
	})
}(this),
function () {
	var e = this,
		t = e.Parse || (e.Parse = {}),
		n = /\s+/,
		i = Array.prototype.slice;
	t.Events = {
		on: function (e, t, i) {
			var r, s, a, o, u;
			if (!t) return this;
			for (e = e.split(n), r = this._callbacks || (this._callbacks = {}), s = e.shift(); s;) u = r[s], a = u ? u.tail : {}, a.next = o = {}, a.context = i, a.callback = t, r[s] = {
				tail: o,
				next: u ? u.next : a
			}, s = e.shift();
			return this
		},
		off: function (e, t, i) {
			var r, s, a, o, u, c;
			if (s = this._callbacks) {
				if (!(e || t || i)) return delete this._callbacks, this;
				for (e = e ? e.split(n) : _.keys(s), r = e.shift(); r;)
					if (a = s[r], delete s[r], a && (t || i)) {
						for (o = a.tail, a = a.next; a !== o;) u = a.callback, c = a.context, (t && u !== t || i && c !== i) && this.on(r, u, c), a = a.next;
						r = e.shift()
					}
				return this
			}
		},
		trigger: function (e) {
			var t, r, s, a, o, u, c;
			if (!(s = this._callbacks)) return this;
			for (u = s.all, e = e.split(n), c = i.call(arguments, 1), t = e.shift(); t;) {
				if (r = s[t])
					for (a = r.tail;
						(r = r.next) !== a;) r.callback.apply(r.context || this, c);
				if (r = u)
					for (a = r.tail, o = [t].concat(c);
						(r = r.next) !== a;) r.callback.apply(r.context || this, o);
				t = e.shift()
			}
			return this
		}
	}, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off
}.call(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.GeoPoint = function (e, i) {
		n.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : n.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : n.isNumber(e) && n.isNumber(i) ? (t.GeoPoint._validate(e, i), this.latitude = e, this.longitude = i) : (this.latitude = 0, this.longitude = 0);
		var r = this;
		this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
			return r._latitude
		}), this.__defineGetter__("longitude", function () {
			return r._longitude
		}), this.__defineSetter__("latitude", function (e) {
			t.GeoPoint._validate(e, r.longitude), r._latitude = e
		}), this.__defineSetter__("longitude", function (e) {
			t.GeoPoint._validate(r.latitude, e), r._longitude = e
		}))
	}, t.GeoPoint._validate = function (e, t) {
		if (-90 > e) throw "Parse.GeoPoint latitude " + e + " < -90.0.";
		if (e > 90) throw "Parse.GeoPoint latitude " + e + " > 90.0.";
		if (-180 > t) throw "Parse.GeoPoint longitude " + t + " < -180.0.";
		if (t > 180) throw "Parse.GeoPoint longitude " + t + " > 180.0."
	}, t.GeoPoint.current = function (e) {
		var n = new t.Promise;
		return navigator.geolocation.getCurrentPosition(function (e) {
			n.resolve(new t.GeoPoint({
				latitude: e.coords.latitude,
				longitude: e.coords.longitude
			}))
		}, function (e) {
			n.reject(e)
		}), n._thenRunCallbacks(e)
	}, t.GeoPoint.prototype = {
		toJSON: function () {
			return t.GeoPoint._validate(this.latitude, this.longitude), {
				__type: "GeoPoint",
				latitude: this.latitude,
				longitude: this.longitude
			}
		},
		radiansTo: function (e) {
			var t = Math.PI / 180,
				n = this.latitude * t,
				i = this.longitude * t,
				r = e.latitude * t,
				s = e.longitude * t,
				a = n - r,
				o = i - s,
				u = Math.sin(a / 2),
				c = Math.sin(o / 2),
				l = u * u + Math.cos(n) * Math.cos(r) * c * c;
			return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
		},
		kilometersTo: function (e) {
			return 6371 * this.radiansTo(e)
		},
		milesTo: function (e) {
			return 3958.8 * this.radiansTo(e)
		}
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._,
		i = "*";
	t.ACL = function (e) {
		var i = this;
		if (i.permissionsById = {}, n.isObject(e))
			if (e instanceof t.User) i.setReadAccess(e, !0), i.setWriteAccess(e, !0);
			else {
				if (n.isFunction(e)) throw "Parse.ACL() called with a function.  Did you forget ()?";
				t._objectEach(e, function (e, r) {
					if (!n.isString(r)) throw "Tried to create an ACL with an invalid userId.";
					i.permissionsById[r] = {}, t._objectEach(e, function (e, t) {
						if ("read" !== t && "write" !== t) throw "Tried to create an ACL with an invalid permission type.";
						if (!n.isBoolean(e)) throw "Tried to create an ACL with an invalid permission value.";
						i.permissionsById[r][t] = e
					})
				})
			}
	}, t.ACL.prototype.toJSON = function () {
		return n.clone(this.permissionsById)
	}, t.ACL.prototype._setAccess = function (e, i, r) {
		if (i instanceof t.User ? i = i.id : i instanceof t.Role && (i = "role:" + i.getName()), !n.isString(i)) throw "userId must be a string.";
		if (!n.isBoolean(r)) throw "allowed must be either true or false.";
		var s = this.permissionsById[i];
		if (!s) {
			if (!r) return;
			s = {}, this.permissionsById[i] = s
		}
		r ? this.permissionsById[i][e] = !0 : (delete s[e], n.isEmpty(s) && delete s[i])
	}, t.ACL.prototype._getAccess = function (e, n) {
		n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
		var i = this.permissionsById[n];
		return i ? i[e] ? !0 : !1 : !1
	}, t.ACL.prototype.setReadAccess = function (e, t) {
		this._setAccess("read", e, t)
	}, t.ACL.prototype.getReadAccess = function (e) {
		return this._getAccess("read", e)
	}, t.ACL.prototype.setWriteAccess = function (e, t) {
		this._setAccess("write", e, t)
	}, t.ACL.prototype.getWriteAccess = function (e) {
		return this._getAccess("write", e)
	}, t.ACL.prototype.setPublicReadAccess = function (e) {
		this.setReadAccess(i, e)
	}, t.ACL.prototype.getPublicReadAccess = function () {
		return this.getReadAccess(i)
	}, t.ACL.prototype.setPublicWriteAccess = function (e) {
		this.setWriteAccess(i, e)
	}, t.ACL.prototype.getPublicWriteAccess = function () {
		return this.getWriteAccess(i)
	}, t.ACL.prototype.getRoleReadAccess = function (e) {
		if (e instanceof t.Role && (e = e.getName()), n.isString(e)) return this.getReadAccess("role:" + e);
		throw "role must be a Parse.Role or a String"
	}, t.ACL.prototype.getRoleWriteAccess = function (e) {
		if (e instanceof t.Role && (e = e.getName()), n.isString(e)) return this.getWriteAccess("role:" + e);
		throw "role must be a Parse.Role or a String"
	}, t.ACL.prototype.setRoleReadAccess = function (e, i) {
		if (e instanceof t.Role && (e = e.getName()), n.isString(e)) return this.setReadAccess("role:" + e, i), void 0;
		throw "role must be a Parse.Role or a String"
	}, t.ACL.prototype.setRoleWriteAccess = function (e, i) {
		if (e instanceof t.Role && (e = e.getName()), n.isString(e)) return this.setWriteAccess("role:" + e, i), void 0;
		throw "role must be a Parse.Role or a String"
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Op = function () {
		this._initialize.apply(this, arguments)
	}, t.Op.prototype = {
		_initialize: function () {}
	}, n.extend(t.Op, {
		_extend: t._extend,
		_opDecoderMap: {},
		_registerDecoder: function (e, n) {
			t.Op._opDecoderMap[e] = n
		},
		_decode: function (e) {
			var n = t.Op._opDecoderMap[e.__op];
			return n ? n(e) : void 0
		}
	}), t.Op._registerDecoder("Batch", function (e) {
		var n = null;
		return t._arrayEach(e.ops, function (e) {
			e = t.Op._decode(e), n = e._mergeWithPrevious(n)
		}), n
	}), t.Op.Set = t.Op._extend({
		_initialize: function (e) {
			this._value = e
		},
		value: function () {
			return this._value
		},
		toJSON: function () {
			return t._encode(this.value())
		},
		_mergeWithPrevious: function () {
			return this
		},
		_estimate: function () {
			return this.value()
		}
	}), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
		toJSON: function () {
			return {
				__op: "Delete"
			}
		},
		_mergeWithPrevious: function () {
			return this
		},
		_estimate: function () {
			return t.Op._UNSET
		}
	}), t.Op._registerDecoder("Delete", function () {
		return new t.Op.Unset
	}), t.Op.Increment = t.Op._extend({
		_initialize: function (e) {
			this._amount = e
		},
		amount: function () {
			return this._amount
		},
		toJSON: function () {
			return {
				__op: "Increment",
				amount: this._amount
			}
		},
		_mergeWithPrevious: function (e) {
			if (e) {
				if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
				if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
				if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
				throw "Op is invalid after previous op."
			}
			return this
		},
		_estimate: function (e) {
			return e ? e + this.amount() : this.amount()
		}
	}), t.Op._registerDecoder("Increment", function (e) {
		return new t.Op.Increment(e.amount)
	}), t.Op.Add = t.Op._extend({
		_initialize: function (e) {
			this._objects = e
		},
		objects: function () {
			return this._objects
		},
		toJSON: function () {
			return {
				__op: "Add",
				objects: t._encode(this.objects())
			}
		},
		_mergeWithPrevious: function (e) {
			if (e) {
				if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
				if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
				if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
				throw "Op is invalid after previous op."
			}
			return this
		},
		_estimate: function (e) {
			return e ? e.concat(this.objects()) : n.clone(this.objects())
		}
	}), t.Op._registerDecoder("Add", function (e) {
		return new t.Op.Add(t._decode(void 0, e.objects))
	}), t.Op.AddUnique = t.Op._extend({
		_initialize: function (e) {
			this._objects = n.uniq(e)
		},
		objects: function () {
			return this._objects
		},
		toJSON: function () {
			return {
				__op: "AddUnique",
				objects: t._encode(this.objects())
			}
		},
		_mergeWithPrevious: function (e) {
			if (e) {
				if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
				if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
				if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
				throw "Op is invalid after previous op."
			}
			return this
		},
		_estimate: function (e) {
			if (e) {
				var i = n.clone(e);
				return t._arrayEach(this.objects(), function (e) {
					if (e instanceof t.Object && e.id) {
						var r = n.find(i, function (n) {
							return n instanceof t.Object && n.id === e.id
						});
						if (r) {
							var s = n.indexOf(i, r);
							i[s] = e
						} else i.push(e)
					} else n.contains(i, e) || i.push(e)
				}), i
			}
			return n.clone(this.objects())
		}
	}), t.Op._registerDecoder("AddUnique", function (e) {
		return new t.Op.AddUnique(t._decode(void 0, e.objects))
	}), t.Op.Remove = t.Op._extend({
		_initialize: function (e) {
			this._objects = n.uniq(e)
		},
		objects: function () {
			return this._objects
		},
		toJSON: function () {
			return {
				__op: "Remove",
				objects: t._encode(this.objects())
			}
		},
		_mergeWithPrevious: function (e) {
			if (e) {
				if (e instanceof t.Op.Unset) return e;
				if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
				if (e instanceof t.Op.Remove) return new t.Op.Remove(n.union(e.objects(), this.objects()));
				throw "Op is invalid after previous op."
			}
			return this
		},
		_estimate: function (e) {
			if (e) {
				var i = n.difference(e, this.objects());
				return t._arrayEach(this.objects(), function (e) {
					e instanceof t.Object && e.id && (i = n.reject(i, function (n) {
						return n instanceof t.Object && n.id === e.id
					}))
				}), i
			}
			return []
		}
	}), t.Op._registerDecoder("Remove", function (e) {
		return new t.Op.Remove(t._decode(void 0, e.objects))
	}), t.Op.Relation = t.Op._extend({
		_initialize: function (e, i) {
			this._targetClassName = null;
			var r = this,
				s = function (e) {
					if (e instanceof t.Object) {
						if (!e.id) throw "You can't add an unsaved Parse.Object to a relation.";
						if (r._targetClassName || (r._targetClassName = e.className), r._targetClassName !== e.className) throw "Tried to create a Parse.Relation with 2 different types: " + r._targetClassName + " and " + e.className + ".";
						return e.id
					}
					return e
				};
			this.relationsToAdd = n.uniq(n.map(e, s)), this.relationsToRemove = n.uniq(n.map(i, s))
		},
		added: function () {
			var e = this;
			return n.map(this.relationsToAdd, function (n) {
				var i = t.Object._create(e._targetClassName);
				return i.id = n, i
			})
		},
		removed: function () {
			var e = this;
			return n.map(this.relationsToRemove, function (n) {
				var i = t.Object._create(e._targetClassName);
				return i.id = n, i
			})
		},
		toJSON: function () {
			var e = null,
				t = null,
				i = this,
				r = function (e) {
					return {
						__type: "Pointer",
						className: i._targetClassName,
						objectId: e
					}
				},
				s = null;
			return this.relationsToAdd.length > 0 && (s = n.map(this.relationsToAdd, r), e = {
				__op: "AddRelation",
				objects: s
			}), this.relationsToRemove.length > 0 && (s = n.map(this.relationsToRemove, r), t = {
				__op: "RemoveRelation",
				objects: s
			}), e && t ? {
				__op: "Batch",
				ops: [e, t]
			} : e || t || {}
		},
		_mergeWithPrevious: function (e) {
			if (e) {
				if (e instanceof t.Op.Unset) throw "You can't modify a relation after deleting it.";
				if (e instanceof t.Op.Relation) {
					if (e._targetClassName && e._targetClassName !== this._targetClassName) throw "Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.";
					var i = n.union(n.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
						r = n.union(n.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
						s = new t.Op.Relation(i, r);
					return s._targetClassName = this._targetClassName, s
				}
				throw "Op is invalid after previous op."
			}
			return this
		},
		_estimate: function (e, n, i) {
			if (e) {
				if (e instanceof t.Relation) {
					if (this._targetClassName)
						if (e.targetClassName) {
							if (e.targetClassName !== this._targetClassName) throw "Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in."
						} else e.targetClassName = this._targetClassName;
					return e
				}
				throw "Op is invalid after previous op."
			}
			var r = new t.Relation(n, i);
			r.targetClassName = this._targetClassName
		}
	}), t.Op._registerDecoder("AddRelation", function (e) {
		return new t.Op.Relation(t._decode(void 0, e.objects), [])
	}), t.Op._registerDecoder("RemoveRelation", function (e) {
		return new t.Op.Relation([], t._decode(void 0, e.objects))
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Relation = function (e, t) {
		this.parent = e, this.key = t, this.targetClassName = null
	}, t.Relation.prototype = {
		_ensureParentAndKey: function (e, t) {
			if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw "Internal Error. Relation retrieved from two different Objects.";
			if (this.key !== t) throw "Internal Error. Relation retrieved from two different keys."
		},
		add: function (e) {
			n.isArray(e) || (e = [e]);
			var i = new t.Op.Relation(e, []);
			this.parent.set(this.key, i), this.targetClassName = i._targetClassName
		},
		remove: function (e) {
			n.isArray(e) || (e = [e]);
			var i = new t.Op.Relation([], e);
			this.parent.set(this.key, i), this.targetClassName = i._targetClassName
		},
		toJSON: function () {
			return {
				__type: "Relation",
				className: this.targetClassName
			}
		},
		query: function () {
			var e, n;
			return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
		}
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Promise = function () {
		this._resolved = !1, this._rejected = !1, this._resolvedCallbacks = [], this._rejectedCallbacks = []
	}, n.extend(t.Promise, {
		is: function (e) {
			return e && e.then && n.isFunction(e.then)
		},
		as: function () {
			var e = new t.Promise;
			return e.resolve.apply(e, arguments), e
		},
		error: function () {
			var e = new t.Promise;
			return e.reject.apply(e, arguments), e
		},
		when: function (e) {
			var n;
			n = e && t._isNullOrUndefined(e.length) ? arguments : e;
			var i = n.length,
				r = !1,
				s = [],
				a = [];
			if (s.length = n.length, a.length = n.length, 0 === i) return t.Promise.as.apply(this, s);
			var o = new t.Promise,
				u = function () {
					i -= 1, 0 === i && (r ? o.reject(a) : o.resolve.apply(o, s))
				};
			return t._arrayEach(n, function (e, n) {
				t.Promise.is(e) ? e.then(function (e) {
					s[n] = e, u()
				}, function (e) {
					a[n] = e, r = !0, u()
				}) : (s[n] = e, u())
			}), o
		},
		_continueWhile: function (e, n) {
			return e() ? n().then(function () {
				return t.Promise._continueWhile(e, n)
			}) : t.Promise.as()
		}
	}), n.extend(t.Promise.prototype, {
		resolve: function () {
			if (this._resolved || this._rejected) throw "A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
			this._resolved = !0, this._result = arguments;
			var e = arguments;
			t._arrayEach(this._resolvedCallbacks, function (t) {
				t.apply(this, e)
			}), this._resolvedCallbacks = [], this._rejectedCallbacks = []
		},
		reject: function (e) {
			if (this._resolved || this._rejected) throw "A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
			this._rejected = !0, this._error = e, t._arrayEach(this._rejectedCallbacks, function (t) {
				t(e)
			}), this._resolvedCallbacks = [], this._rejectedCallbacks = []
		},
		then: function (e, n) {
			var i = new t.Promise,
				r = function () {
					var n = arguments;
					e && (n = [e.apply(this, n)]), 1 === n.length && t.Promise.is(n[0]) ? n[0].then(function () {
						i.resolve.apply(i, arguments)
					}, function (e) {
						i.reject(e)
					}) : i.resolve.apply(i, n)
				},
				s = function (e) {
					var r = [];
					n ? (r = [n(e)], 1 === r.length && t.Promise.is(r[0]) ? r[0].then(function () {
						i.resolve.apply(i, arguments)
					}, function (e) {
						i.reject(e)
					}) : i.reject(r[0])) : i.reject(e)
				};
			return this._resolved ? r.apply(this, this._result) : this._rejected ? s(this._error) : (this._resolvedCallbacks.push(r), this._rejectedCallbacks.push(s)), i
		},
		always: function (e) {
			return this.then(e, e)
		},
		done: function (e) {
			return this.then(e)
		},
		fail: function (e) {
			return this.then(null, e)
		},
		_thenRunCallbacks: function (e, i) {
			var r;
			if (n.isFunction(e)) {
				var s = e;
				r = {
					success: function (e) {
						s(e, null)
					},
					error: function (e) {
						s(null, e)
					}
				}
			} else r = n.clone(e);
			return r = r || {}, this.then(function (e) {
				return r.success ? r.success.apply(this, arguments) : i && i.trigger("sync", i, e, r), t.Promise.as.apply(t.Promise, arguments)
			}, function (e) {
				return r.error ? n.isUndefined(i) ? r.error(e) : r.error(i, e) : i && i.trigger("error", i, e, r), t.Promise.error(e)
			})
		},
		_continueWith: function (e) {
			return this.then(function () {
				return e(arguments, null)
			}, function (t) {
				return e(null, t)
			})
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._,
		i = function (e) {
			if (26 > e) return String.fromCharCode(65 + e);
			if (52 > e) return String.fromCharCode(97 + (e - 26));
			if (62 > e) return String.fromCharCode(48 + (e - 52));
			if (62 === e) return "+";
			if (63 === e) return "/";
			throw "Tried to encode large digit " + e + " in base64."
		},
		r = function (e) {
			var t = [];
			return t.length = Math.ceil(e.length / 3), n.times(t.length, function (n) {
				var r = e[3 * n],
					s = e[3 * n + 1] || 0,
					a = e[3 * n + 2] || 0,
					o = e.length > 3 * n + 1,
					u = e.length > 3 * n + 2;
				t[n] = [i(63 & r >> 2), i(48 & r << 4 | 15 & s >> 4), o ? i(60 & s << 2 | 3 & a >> 6) : "=", u ? i(63 & a) : "="].join("")
			}), t.join("")
		},
		s = {
			ai: "application/postscript",
			aif: "audio/x-aiff",
			aifc: "audio/x-aiff",
			aiff: "audio/x-aiff",
			asc: "text/plain",
			atom: "application/atom+xml",
			au: "audio/basic",
			avi: "video/x-msvideo",
			bcpio: "application/x-bcpio",
			bin: "application/octet-stream",
			bmp: "image/bmp",
			cdf: "application/x-netcdf",
			cgm: "image/cgm",
			"class": "application/octet-stream",
			cpio: "application/x-cpio",
			cpt: "application/mac-compactpro",
			csh: "application/x-csh",
			css: "text/css",
			dcr: "application/x-director",
			dif: "video/x-dv",
			dir: "application/x-director",
			djv: "image/vnd.djvu",
			djvu: "image/vnd.djvu",
			dll: "application/octet-stream",
			dmg: "application/octet-stream",
			dms: "application/octet-stream",
			doc: "application/msword",
			docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
			docm: "application/vnd.ms-word.document.macroEnabled.12",
			dotm: "application/vnd.ms-word.template.macroEnabled.12",
			dtd: "application/xml-dtd",
			dv: "video/x-dv",
			dvi: "application/x-dvi",
			dxr: "application/x-director",
			eps: "application/postscript",
			etx: "text/x-setext",
			exe: "application/octet-stream",
			ez: "application/andrew-inset",
			gif: "image/gif",
			gram: "application/srgs",
			grxml: "application/srgs+xml",
			gtar: "application/x-gtar",
			hdf: "application/x-hdf",
			hqx: "application/mac-binhex40",
			htm: "text/html",
			html: "text/html",
			ice: "x-conference/x-cooltalk",
			ico: "image/x-icon",
			ics: "text/calendar",
			ief: "image/ief",
			ifb: "text/calendar",
			iges: "model/iges",
			igs: "model/iges",
			jnlp: "application/x-java-jnlp-file",
			jp2: "image/jp2",
			jpe: "image/jpeg",
			jpeg: "image/jpeg",
			jpg: "image/jpeg",
			js: "application/x-javascript",
			kar: "audio/midi",
			latex: "application/x-latex",
			lha: "application/octet-stream",
			lzh: "application/octet-stream",
			m3u: "audio/x-mpegurl",
			m4a: "audio/mp4a-latm",
			m4b: "audio/mp4a-latm",
			m4p: "audio/mp4a-latm",
			m4u: "video/vnd.mpegurl",
			m4v: "video/x-m4v",
			mac: "image/x-macpaint",
			man: "application/x-troff-man",
			mathml: "application/mathml+xml",
			me: "application/x-troff-me",
			mesh: "model/mesh",
			mid: "audio/midi",
			midi: "audio/midi",
			mif: "application/vnd.mif",
			mov: "video/quicktime",
			movie: "video/x-sgi-movie",
			mp2: "audio/mpeg",
			mp3: "audio/mpeg",
			mp4: "video/mp4",
			mpe: "video/mpeg",
			mpeg: "video/mpeg",
			mpg: "video/mpeg",
			mpga: "audio/mpeg",
			ms: "application/x-troff-ms",
			msh: "model/mesh",
			mxu: "video/vnd.mpegurl",
			nc: "application/x-netcdf",
			oda: "application/oda",
			ogg: "application/ogg",
			pbm: "image/x-portable-bitmap",
			pct: "image/pict",
			pdb: "chemical/x-pdb",
			pdf: "application/pdf",
			pgm: "image/x-portable-graymap",
			pgn: "application/x-chess-pgn",
			pic: "image/pict",
			pict: "image/pict",
			png: "image/png",
			pnm: "image/x-portable-anymap",
			pnt: "image/x-macpaint",
			pntg: "image/x-macpaint",
			ppm: "image/x-portable-pixmap",
			ppt: "application/vnd.ms-powerpoint",
			pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
			potx: "application/vnd.openxmlformats-officedocument.presentationml.template",
			ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
			ppam: "application/vnd.ms-powerpoint.addin.macroEnabled.12",
			pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
			potm: "application/vnd.ms-powerpoint.template.macroEnabled.12",
			ppsm: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
			ps: "application/postscript",
			qt: "video/quicktime",
			qti: "image/x-quicktime",
			qtif: "image/x-quicktime",
			ra: "audio/x-pn-realaudio",
			ram: "audio/x-pn-realaudio",
			ras: "image/x-cmu-raster",
			rdf: "application/rdf+xml",
			rgb: "image/x-rgb",
			rm: "application/vnd.rn-realmedia",
			roff: "application/x-troff",
			rtf: "text/rtf",
			rtx: "text/richtext",
			sgm: "text/sgml",
			sgml: "text/sgml",
			sh: "application/x-sh",
			shar: "application/x-shar",
			silo: "model/mesh",
			sit: "application/x-stuffit",
			skd: "application/x-koan",
			skm: "application/x-koan",
			skp: "application/x-koan",
			skt: "application/x-koan",
			smi: "application/smil",
			smil: "application/smil",
			snd: "audio/basic",
			so: "application/octet-stream",
			spl: "application/x-futuresplash",
			src: "application/x-wais-source",
			sv4cpio: "application/x-sv4cpio",
			sv4crc: "application/x-sv4crc",
			svg: "image/svg+xml",
			swf: "application/x-shockwave-flash",
			t: "application/x-troff",
			tar: "application/x-tar",
			tcl: "application/x-tcl",
			tex: "application/x-tex",
			texi: "application/x-texinfo",
			texinfo: "application/x-texinfo",
			tif: "image/tiff",
			tiff: "image/tiff",
			tr: "application/x-troff",
			tsv: "text/tab-separated-values",
			txt: "text/plain",
			ustar: "application/x-ustar",
			vcd: "application/x-cdlink",
			vrml: "model/vrml",
			vxml: "application/voicexml+xml",
			wav: "audio/x-wav",
			wbmp: "image/vnd.wap.wbmp",
			wbmxl: "application/vnd.wap.wbxml",
			wml: "text/vnd.wap.wml",
			wmlc: "application/vnd.wap.wmlc",
			wmls: "text/vnd.wap.wmlscript",
			wmlsc: "application/vnd.wap.wmlscriptc",
			wrl: "model/vrml",
			xbm: "image/x-xbitmap",
			xht: "application/xhtml+xml",
			xhtml: "application/xhtml+xml",
			xls: "application/vnd.ms-excel",
			xml: "application/xml",
			xpm: "image/x-xpixmap",
			xsl: "application/xml",
			xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
			xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12",
			xltm: "application/vnd.ms-excel.template.macroEnabled.12",
			xlam: "application/vnd.ms-excel.addin.macroEnabled.12",
			xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
			xslt: "application/xslt+xml",
			xul: "application/vnd.mozilla.xul+xml",
			xwd: "image/x-xwindowdump",
			xyz: "chemical/x-xyz",
			zip: "application/zip"
		},
		a = function (e, n) {
			var i = new t.Promise;
			if ("undefined" == typeof FileReader) return t.Promise.error(new t.Error(t.Error.FILE_READ_ERROR, "Attempted to use a FileReader on an unsupported browser."));
			var r = new FileReader;
			return r.onloadend = function () {
				if (2 !== r.readyState) return i.reject(new t.Error(t.Error.FILE_READ_ERROR, "Error reading file.")), void 0;
				var e = r.result,
					s = /^data:([^;]*);base64,(.*)$/.exec(e);
				return s ? (i.resolve(s[2], n || s[1]), void 0) : (i.reject(new t.Error(t.ERROR.FILE_READ_ERROR, "Unable to interpret data URL: " + e)), void 0)
			}, r.readAsDataURL(e), i
		};
	t.File = function (e, i, o) {
		this._name = e;
		var u = /\.([^.]*)$/.exec(e);
		u && (u = u[1].toLowerCase());
		var c = o || s[u] || "text/plain";
		if (n.isArray(i)) this._source = t.Promise.as(r(i), c);
		else if (i && i.base64) {
			var l = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/,
				h = l.exec(i.base64);
			this._source = h && h.length > 0 ? t.Promise.as(4 === h.length ? h[3] : h[2], h[1]) : t.Promise.as(i.base64, c)
		} else if ("undefined" != typeof File && i instanceof File) this._source = a(i, o);
		else if (n.isString(i)) throw "Creating a Parse.File from a String is not yet supported."
	}, t.File.prototype = {
		name: function () {
			return this._name
		},
		url: function () {
			return this._url
		},
		save: function (e) {
			e = e || {};
			var n = this;
			return n._previousSave || (n._previousSave = n._source.then(function (i, r) {
				var s = {
					base64: i,
					_ContentType: r
				};
				return t._request({
					route: "files",
					className: n._name,
					method: "POST",
					data: s,
					useMasterKey: e.useMasterKey
				})
			}).then(function (e) {
				return n._name = e.name, n._url = e.url, n
			})), n._previousSave._thenRunCallbacks(e)
		}
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Object = function (e, i) {
		if (n.isString(e)) return t.Object._create.apply(this, arguments);
		e = e || {}, i && i.parse && (e = this.parse(e));
		var r = t._getValue(this, "defaults");
		if (r && (e = n.extend({}, r, e)), i && i.collection && (this.collection = i.collection), this._serverData = {}, this._opSetQueue = [{}], this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = n.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, !this.set(e, {
			silent: !0
		})) throw Error("Can't create an invalid Parse.Object");
		this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = n.clone(this.attributes), this.initialize.apply(this, arguments)
	}, t.Object.saveAll = function (e, n) {
		return n = n || {}, t.Object._deepSaveAsync(e, {
			useMasterKey: n.useMasterKey
		})._thenRunCallbacks(n)
	}, t.Object.destroyAll = function (e, i) {
		i = i || {};
		var r = function (e) {
				e.trigger("destroy", e, e.collection, i)
			},
			s = [],
			a = function (e) {
				var a = t.Promise.as();
				return e.length > 0 && (a = a.then(function () {
					return t._request({
						route: "batch",
						method: "POST",
						useMasterKey: i.useMasterKey,
						data: {
							requests: n.map(e, function (e) {
								return {
									method: "DELETE",
									path: "/1/classes/" + e.className + "/" + e.id
								}
							})
						}
					})
				}).then(function (n) {
					t._arrayEach(e, function (e, a) {
						if (n[a].success && i.wait) r(e);
						else if (n[a].error) {
							var o = new t.Error(n[a].error.code, n[a].error.error);
							o.object = e, s.push(o)
						}
					})
				})), a
			},
			o = t.Promise.as(),
			u = [];
		return t._arrayEach(e, function (t, n) {
			if (t.id && i.wait || r(t), t.id && u.push(t), 20 === u.length || n + 1 === e.length) {
				var s = u;
				u = [], o = o.then(function () {
					return a(s)
				})
			}
		}), o.then(function () {
			if (0 === s.length) return !0;
			var e = new t.Error(t.Error.AGGREGATE_ERROR, "Error deleting an object in destroyAll");
			return e.errors = s, t.Promise.error(e)
		})._thenRunCallbacks(i)
	}, t.Object.fetchAll = function (e, n) {
		return t.Object._fetchAll(e, !0)._thenRunCallbacks(n)
	}, t.Object.fetchAllIfNeeded = function (e, n) {
		return t.Object._fetchAll(e, !1)._thenRunCallbacks(n)
	}, n.extend(t.Object.prototype, t.Events, {
		_existed: !1,
		initialize: function () {},
		toJSON: function () {
			var e = this._toFullJSON();
			return t._arrayEach(["__type", "className"], function (t) {
				delete e[t]
			}), e
		},
		_toFullJSON: function (e) {
			var i = n.clone(this.attributes);
			return t._objectEach(i, function (n, r) {
				i[r] = t._encode(n, e)
			}), t._objectEach(this._operations, function (e, t) {
				i[t] = e
			}), n.has(this, "id") && (i.objectId = this.id), n.has(this, "createdAt") && (i.createdAt = n.isDate(this.createdAt) ? this.createdAt.toJSON() : this.createdAt), n.has(this, "updatedAt") && (i.updatedAt = n.isDate(this.updatedAt) ? this.updatedAt.toJSON() : this.updatedAt), i.__type = "Object", i.className = this.className, i
		},
		_refreshCache: function () {
			var e = this;
			e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function (i, r) {
				i instanceof t.Object ? i._refreshCache() : n.isObject(i) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(i), {
					silent: !0
				})
			}), delete e._refreshingCache)
		},
		dirty: function (e) {
			this._refreshCache();
			var t = n.last(this._opSetQueue);
			return e ? t[e] ? !0 : !1 : this.id ? n.keys(t).length > 0 ? !0 : !1 : !0
		},
		dirtyKeys: function () {
			return n.keys(n.last(this._opSetQueue))
		},
		_toPointer: function () {
			if (!this.id) throw Error("Can't serialize an unsaved Parse.Object");
			return {
				__type: "Pointer",
				className: this.className,
				objectId: this.id
			}
		},
		get: function (e) {
			return this.attributes[e]
		},
		relation: function (e) {
			var n = this.get(e);
			if (n) {
				if (!(n instanceof t.Relation)) throw "Called relation() on non-relation field " + e;
				return n._ensureParentAndKey(this, e), n
			}
			return new t.Relation(this, e)
		},
		escape: function (e) {
			var i = this._escapedAttributes[e];
			if (i) return i;
			var r, s = this.attributes[e];
			return r = t._isNullOrUndefined(s) ? "" : n.escape("" + s), this._escapedAttributes[e] = r, r
		},
		has: function (e) {
			return !t._isNullOrUndefined(this.attributes[e])
		},
		_mergeMagicFields: function (e) {
			var i = this,
				r = ["id", "objectId", "createdAt", "updatedAt"];
			t._arrayEach(r, function (r) {
				e[r] && ("objectId" === r ? i.id = e[r] : i[r] = "createdAt" !== r && "updatedAt" !== r || n.isDate(e[r]) ? e[r] : t._parseDate(e[r]), delete e[r])
			})
		},
		_copyServerData: function (e) {
			var n = {};
			t._objectEach(e, function (e, i) {
				n[i] = t._decode(i, e)
			}), this._serverData = n, this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._rebuildAllEstimatedData()
		},
		_mergeFromObject: function (e) {
			e && (this.id = e.id, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this._copyServerData(e._serverData), this._hasData = !0)
		},
		_startSave: function () {
			this._opSetQueue.push({})
		},
		_cancelSave: function () {
			var e = n.first(this._opSetQueue);
			this._opSetQueue = n.rest(this._opSetQueue);
			var i = n.first(this._opSetQueue);
			t._objectEach(e, function (t, n) {
				var r = e[n],
					s = i[n];
				r && s ? i[n] = s._mergeWithPrevious(r) : r && (i[n] = r)
			}), this._saving = this._saving - 1
		},
		_finishSave: function (e) {
			var i = {};
			t._traverse(this.attributes, function (e) {
				e instanceof t.Object && e.id && e._hasData && (i[e.id] = e)
			});
			var r = n.first(this._opSetQueue);
			this._opSetQueue = n.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
			var s = this;
			t._objectEach(e, function (e, n) {
				s._serverData[n] = t._decode(n, e);
				var r = t._traverse(s._serverData[n], function (e) {
					return e instanceof t.Object && i[e.id] ? i[e.id] : void 0
				});
				r && (s._serverData[n] = r)
			}), this._rebuildAllEstimatedData(), this._saving = this._saving - 1
		},
		_finishFetch: function (e, t) {
			this._opSetQueue = [{}], this._mergeMagicFields(e), this._copyServerData(e), this._hasData = t
		},
		_applyOpSet: function (e, n) {
			var i = this;
			t._objectEach(e, function (e, r) {
				n[r] = e._estimate(n[r], i, r), n[r] === t.Op._UNSET && delete n[r]
			})
		},
		_resetCacheForKey: function (e) {
			var i = this.attributes[e];
			if (!(!n.isObject(i) || i instanceof t.Object || i instanceof t.File)) {
				i = i.toJSON ? i.toJSON() : i;
				var r = JSON.stringify(i);
				if (this._hashedJSON[e] !== r) {
					var s = !!this._hashedJSON[e];
					return this._hashedJSON[e] = r, s
				}
			}
			return !1
		},
		_rebuildEstimatedDataForKey: function (e) {
			var n = this;
			delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function (i) {
				var r = i[e];
				r && (n.attributes[e] = r._estimate(n.attributes[e], n, e), n.attributes[e] === t.Op._UNSET ? delete n.attributes[e] : n._resetCacheForKey(e))
			})
		},
		_rebuildAllEstimatedData: function () {
			var e = this,
				i = n.clone(this.attributes);
			this.attributes = n.clone(this._serverData), t._arrayEach(this._opSetQueue, function (n) {
				e._applyOpSet(n, e.attributes), t._objectEach(n, function (t, n) {
					e._resetCacheForKey(n)
				})
			}), t._objectEach(i, function (t, n) {
				e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {})
			}), t._objectEach(this.attributes, function (t, r) {
				n.has(i, r) || e.trigger("change:" + r, e, t, {})
			})
		},
		set: function (e, i, r) {
			var s;
			if (n.isObject(e) || t._isNullOrUndefined(e) ? (s = e, t._objectEach(s, function (e, n) {
				s[n] = t._decode(n, e)
			}), r = i) : (s = {}, s[e] = t._decode(e, i)), r = r || {}, !s) return this;
			s instanceof t.Object && (s = s.attributes), r.unset && t._objectEach(s, function (e, n) {
				s[n] = new t.Op.Unset
			});
			var a = n.clone(s),
				o = this;
			if (t._objectEach(a, function (e, n) {
				e instanceof t.Op && (a[n] = e._estimate(o.attributes[n], o, n), a[n] === t.Op._UNSET && delete a[n])
			}), !this._validate(s, r)) return !1;
			this._mergeMagicFields(s), r.changes = {};
			var u = this._escapedAttributes;
			return this._previousAttributes || {}, t._arrayEach(n.keys(s), function (e) {
				var i = s[e];
				i instanceof t.Relation && (i.parent = o), i instanceof t.Op || (i = new t.Op.Set(i));
				var a = !0;
				i instanceof t.Op.Set && n.isEqual(o.attributes[e], i.value) && (a = !1), a && (delete u[e], r.silent ? o._silent[e] = !0 : r.changes[e] = !0);
				var c = n.last(o._opSetQueue);
				c[e] = i._mergeWithPrevious(c[e]), o._rebuildEstimatedDataForKey(e), a ? (o.changed[e] = o.attributes[e], r.silent || (o._pending[e] = !0)) : (delete o.changed[e], delete o._pending[e])
			}), r.silent || this.change(r), this
		},
		unset: function (e, t) {
			return t = t || {}, t.unset = !0, this.set(e, null, t)
		},
		increment: function (e, i) {
			return (n.isUndefined(i) || n.isNull(i)) && (i = 1), this.set(e, new t.Op.Increment(i))
		},
		add: function (e, n) {
			return this.set(e, new t.Op.Add([n]))
		},
		addUnique: function (e, n) {
			return this.set(e, new t.Op.AddUnique([n]))
		},
		remove: function (e, n) {
			return this.set(e, new t.Op.Remove([n]))
		},
		op: function (e) {
			return n.last(this._opSetQueue)[e]
		},
		clear: function (e) {
			e = e || {}, e.unset = !0;
			var t = n.extend(this.attributes, this._operations);
			return this.set(t, e)
		},
		_getSaveJSON: function () {
			var e = n.clone(n.first(this._opSetQueue));
			return t._objectEach(e, function (t, n) {
				e[n] = t.toJSON()
			}), e
		},
		_canBeSerialized: function () {
			return t.Object._canBeSerializedAsValue(this.attributes)
		},
		fetch: function (e) {
			var n = this;
			e = e || {};
			var i = t._request({
				method: "GET",
				route: "classes",
				className: this.className,
				objectId: this.id,
				useMasterKey: e.useMasterKey
			});
			return i.then(function (e, t, i) {
				return n._finishFetch(n.parse(e, t, i), !0), n
			})._thenRunCallbacks(e, this)
		},
		save: function (e, i, r) {
			var s, a, o;
			if (n.isObject(e) || t._isNullOrUndefined(e) ? (s = e, o = i) : (s = {}, s[e] = i, o = r), !o && s) {
				var u = n.reject(s, function (e, t) {
					return n.include(["success", "error", "wait"], t)
				});
				if (0 === u.length) {
					var c = !0;
					if (n.has(s, "success") && !n.isFunction(s.success) && (c = !1), n.has(s, "error") && !n.isFunction(s.error) && (c = !1), c) return this.save(null, s)
				}
			}
			o = n.clone(o) || {}, o.wait && (a = n.clone(this.attributes));
			var l = n.clone(o) || {};
			l.wait && (l.silent = !0);
			var h;
			if (l.error = function (e, t) {
				h = t
			}, s && !this.set(s, l)) return t.Promise.error(h)._thenRunCallbacks(o, this);
			var d = this;
			d._refreshCache();
			var f = [],
				p = [];
			return t.Object._findUnsavedChildren(d.attributes, f, p), f.length + p.length > 0 ? t.Object._deepSaveAsync(this.attributes, {
				useMasterKey: o.useMasterKey
			}).then(function () {
				return d.save(null, o)
			}, function (e) {
				return t.Promise.error(e)._thenRunCallbacks(o, d)
			}) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || t.Promise.as(), this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
				var e = d.id ? "PUT" : "POST",
					i = d._getSaveJSON(),
					r = "classes",
					u = d.className;
				"_User" !== d.className || d.id || (r = "users", u = null);
				var c = t._request({
					route: r,
					className: u,
					objectId: d.id,
					method: e,
					useMasterKey: o.useMasterKey,
					data: i
				});
				return c = c.then(function (e, t, i) {
					var r = d.parse(e, t, i);
					return o.wait && (r = n.extend(s || {}, r)), d._finishSave(r), o.wait && d.set(a, l), d
				}, function (e) {
					return d._cancelSave(), t.Promise.error(e)
				})._thenRunCallbacks(o, d)
			}), this._allPreviousSaves)
		},
		destroy: function (e) {
			e = e || {};
			var n = this,
				i = function () {
					n.trigger("destroy", n, n.collection, e)
				};
			if (!this.id) return i();
			e.wait || i();
			var r = t._request({
				route: "classes",
				className: this.className,
				objectId: this.id,
				method: "DELETE",
				useMasterKey: e.useMasterKey
			});
			return r.then(function () {
				return e.wait && i(), n
			})._thenRunCallbacks(e, this)
		},
		parse: function (e, i) {
			var r = n.clone(e);
			return n(["createdAt", "updatedAt"]).each(function (e) {
				r[e] && (r[e] = t._parseDate(r[e]))
			}), r.updatedAt || (r.updatedAt = r.createdAt), i && (this._existed = 201 !== i), r
		},
		clone: function () {
			return new this.constructor(this.attributes)
		},
		isNew: function () {
			return !this.id
		},
		change: function (e) {
			e = e || {};
			var i = this._changing;
			this._changing = !0;
			var r = this;
			t._objectEach(this._silent, function (e) {
				r._pending[e] = !0
			});
			var s = n.extend({}, e.changes, this._silent);
			if (this._silent = {}, t._objectEach(s, function (t, n) {
				r.trigger("change:" + n, r, r.get(n), e)
			}), i) return this;
			for (var a = function (e, t) {
				r._pending[t] || r._silent[t] || delete r.changed[t]
			}; !n.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, a), r._previousAttributes = n.clone(this.attributes);
			return this._changing = !1, this
		},
		existed: function () {
			return this._existed
		},
		hasChanged: function (e) {
			return arguments.length ? this.changed && n.has(this.changed, e) : !n.isEmpty(this.changed)
		},
		changedAttributes: function (e) {
			if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
			var i = {},
				r = this._previousAttributes;
			return t._objectEach(e, function (e, t) {
				n.isEqual(r[t], e) || (i[t] = e)
			}), i
		},
		previous: function (e) {
			return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
		},
		previousAttributes: function () {
			return n.clone(this._previousAttributes)
		},
		isValid: function () {
			return !this.validate(this.attributes)
		},
		validate: function (e) {
			if (n.has(e, "ACL") && !(e.ACL instanceof t.ACL)) return new t.Error(t.Error.OTHER_CAUSE, "ACL must be a Parse.ACL.");
			var i = !0;
			return t._objectEach(e, function (e, t) {
				/^[A-Za-z][0-9A-Za-z_]*$/.test(t) || (i = !1)
			}), i ? !1 : new t.Error(t.Error.INVALID_KEY_NAME)
		},
		_validate: function (e, t) {
			if (t.silent || !this.validate) return !0;
			e = n.extend({}, this.attributes, e);
			var i = this.validate(e, t);
			return i ? (t && t.error ? t.error(this, i, t) : this.trigger("error", this, i, t), !1) : !0
		},
		getACL: function () {
			return this.get("ACL")
		},
		setACL: function (e, t) {
			return this.set("ACL", e, t)
		}
	}), t.Object._getSubclass = function (e) {
		if (!n.isString(e)) throw "Parse.Object._getSubclass requires a string argument.";
		var i = t.Object._classMap[e];
		return i || (i = t.Object.extend(e), t.Object._classMap[e] = i), i
	}, t.Object._create = function (e, n, i) {
		var r = t.Object._getSubclass(e);
		return new r(n, i)
	}, t.Object._toObjectIdArray = function (e, n) {
		if (0 === e.length) return t.Promise.as(e);
		for (var i, r = e[0].className, s = [], a = 0; e.length > a; a++) {
			var o = e[a];
			if (r !== o.className) return i = new t.Error(t.Error.INVALID_CLASS_NAME, "All objects should be of the same class"), t.Promise.error(i);
			if (!o.id) return i = new t.Error(t.Error.MISSING_OBJECT_ID, "All objects must have an ID"), t.Promise.error(i);
			n && o._hasData || s.push(o.id)
		}
		return t.Promise.as(s)
	}, t.Object._updateWithFetchedResults = function (e, n, i) {
		var r = {};
		t._arrayEach(n, function (e) {
			r[e.id] = e
		});
		for (var s = 0; e.length > s; s++) {
			var a = e[s],
				o = r[a.id];
			if (!o && i) {
				var u = new t.Error(t.Error.OBJECT_NOT_FOUND, "All objects must exist on the server");
				return t.Promise.error(u)
			}
			a._mergeFromObject(o)
		}
		return t.Promise.as(e)
	}, t.Object._fetchAll = function (e, n) {
		if (0 === e.length) return t.Promise.as(e);
		var i = !n;
		return t.Object._toObjectIdArray(e, i).then(function (n) {
			var i = e[0].className,
				r = new t.Query(i);
			return r.containedIn("objectId", n), r.limit = n.length, r.find()
		}).then(function (i) {
			return t.Object._updateWithFetchedResults(e, i, n)
		})
	}, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.extend = function (e, i, r) {
		if (!n.isString(e)) {
			if (e && n.has(e, "className")) return t.Object.extend(e.className, e, i);
			throw Error("Parse.Object.extend's first argument should be the className.")
		}
		"User" === e && t.User._performUserRewrite && (e = "_User"), i = i || {}, i.className = e;
		var s = null;
		if (n.has(t.Object._classMap, e)) {
			var a = t.Object._classMap[e];
			s = a._extend(i, r)
		} else s = this._extend(i, r);
		return s.extend = function (i) {
			if (n.isString(i) || i && n.has(i, "className")) return t.Object.extend.apply(s, arguments);
			var r = [e].concat(t._.toArray(arguments));
			return t.Object.extend.apply(s, r)
		}, t.Object._classMap[e] = s, s
	}, t.Object._findUnsavedChildren = function (e, n, i) {
		t._traverse(e, function (e) {
			return e instanceof t.Object ? (e._refreshCache(), e.dirty() && n.push(e), void 0) : e instanceof t.File ? (e.url() || i.push(e), void 0) : void 0
		})
	}, t.Object._canBeSerializedAsValue = function (e) {
		if (e instanceof t.Object) return !!e.id;
		if (e instanceof t.File) return !0;
		var i = !0;
		return n.isArray(e) ? t._arrayEach(e, function (e) {
			t.Object._canBeSerializedAsValue(e) || (i = !1)
		}) : n.isObject(e) && t._objectEach(e, function (e) {
			t.Object._canBeSerializedAsValue(e) || (i = !1)
		}), i
	}, t.Object._deepSaveAsync = function (e, i) {
		var r = [],
			s = [];
		t.Object._findUnsavedChildren(e, r, s);
		var a = t.Promise.as();
		n.each(s, function (e) {
			a = a.then(function () {
				return e.save(i)
			})
		});
		var o = n.uniq(r),
			u = n.uniq(o);
		return a.then(function () {
			return t.Promise._continueWhile(function () {
				return u.length > 0
			}, function () {
				var e = [],
					r = [];
				if (t._arrayEach(u, function (t) {
					return e.length > 20 ? (r.push(t), void 0) : (t._canBeSerialized() ? e.push(t) : r.push(t), void 0)
				}), u = r, 0 === e.length) return t.Promise.error(new t.Error(t.Error.OTHER_CAUSE, "Tried to save a batch with a cycle."));
				var s = t.Promise.when(n.map(e, function (e) {
						return e._allPreviousSaves || t.Promise.as()
					})),
					a = new t.Promise;
				return t._arrayEach(e, function (e) {
					e._allPreviousSaves = a
				}), s._continueWith(function () {
					return t._request({
						route: "batch",
						method: "POST",
						useMasterKey: i.useMasterKey,
						data: {
							requests: n.map(e, function (e) {
								var t = e._getSaveJSON(),
									n = "POST",
									i = "/1/classes/" + e.className;
								return e.id && (i = i + "/" + e.id, n = "PUT"), e._startSave(), {
									method: n,
									path: i,
									body: t
								}
							})
						}
					}).then(function (n, i, r) {
						var s;
						return t._arrayEach(e, function (e, t) {
							n[t].success ? e._finishSave(e.parse(n[t].success, i, r)) : (s = s || n[t].error, e._cancelSave())
						}), s ? t.Promise.error(new t.Error(s.code, s.error)) : void 0
					}).then(function (e) {
						return a.resolve(e), e
					}, function (e) {
						return a.reject(e), t.Promise.error(e)
					})
				})
			})
		}).then(function () {
			return e
		})
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Role = t.Object.extend("_Role", {
		constructor: function (e, i) {
			n.isString(e) && i instanceof t.ACL ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e), this.setACL(i)) : t.Object.prototype.constructor.call(this, e, i)
		},
		getName: function () {
			return this.get("name")
		},
		setName: function (e, t) {
			return this.set("name", e, t)
		},
		getUsers: function () {
			return this.relation("users")
		},
		getRoles: function () {
			return this.relation("roles")
		},
		validate: function (e, i) {
			if ("name" in e && e.name !== this.getName()) {
				var r = e.name;
				if (this.id && this.id !== e.objectId) return new t.Error(t.Error.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
				if (!n.isString(r)) return new t.Error(t.Error.OTHER_CAUSE, "A role's name must be a String.");
				if (!/^[0-9a-zA-Z\-_ ]+$/.test(r)) return new t.Error(t.Error.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
			}
			return t.Object.prototype.validate ? t.Object.prototype.validate.call(this, e, i) : !1
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Collection = function (e, t) {
		t = t || {}, t.comparator && (this.comparator = t.comparator), t.model && (this.model = t.model), t.query && (this.query = t.query), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
			silent: !0,
			parse: t.parse
		})
	}, n.extend(t.Collection.prototype, t.Events, {
		model: t.Object,
		initialize: function () {},
		toJSON: function () {
			return this.map(function (e) {
				return e.toJSON()
			})
		},
		add: function (e, i) {
			var r, s, a, o, u, c, l = {},
				h = {};
			for (i = i || {}, e = n.isArray(e) ? e.slice() : [e], r = 0, a = e.length; a > r; r++) {
				if (e[r] = this._prepareModel(e[r], i), o = e[r], !o) throw Error("Can't add an invalid model to a collection");
				if (u = o.cid, l[u] || this._byCid[u]) throw Error("Duplicate cid: can't add the same model to a collection twice");
				if (c = o.id, !t._isNullOrUndefined(c) && (h[c] || this._byId[c])) throw Error("Duplicate id: can't add the same model to a collection twice");
				h[c] = o, l[u] = o
			}
			for (r = 0; a > r; r++)(o = e[r]).on("all", this._onModelEvent, this), this._byCid[o.cid] = o, o.id && (this._byId[o.id] = o);
			if (this.length += a, s = t._isNullOrUndefined(i.at) ? this.models.length : i.at, this.models.splice.apply(this.models, [s, 0].concat(e)), this.comparator && this.sort({
				silent: !0
			}), i.silent) return this;
			for (r = 0, a = this.models.length; a > r; r++) o = this.models[r], l[o.cid] && (i.index = r, o.trigger("add", o, this, i));
			return this
		},
		remove: function (e, t) {
			var i, r, s, a;
			for (t = t || {}, e = n.isArray(e) ? e.slice() : [e], i = 0, r = e.length; r > i; i++) a = this.getByCid(e[i]) || this.get(e[i]), a && (delete this._byId[a.id], delete this._byCid[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a));
			return this
		},
		get: function (e) {
			return e && this._byId[e.id || e]
		},
		getByCid: function (e) {
			return e && this._byCid[e.cid || e]
		},
		at: function (e) {
			return this.models[e]
		},
		sort: function (e) {
			if (e = e || {}, !this.comparator) throw Error("Cannot sort a set without a comparator");
			var t = n.bind(this.comparator, this);
			return 1 === this.comparator.length ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
		},
		pluck: function (e) {
			return n.map(this.models, function (t) {
				return t.get(e)
			})
		},
		reset: function (e, n) {
			var i = this;
			return e = e || [], n = n || {}, t._arrayEach(this.models, function (e) {
				i._removeReference(e)
			}), this._reset(), this.add(e, {
				silent: !0,
				parse: n.parse
			}), n.silent || this.trigger("reset", this, n), this
		},
		fetch: function (e) {
			e = n.clone(e) || {}, void 0 === e.parse && (e.parse = !0);
			var i = this,
				r = this.query || new t.Query(this.model);
			return r.find({
				useMasterKey: e.useMasterKey
			}).then(function (t) {
				return e.add ? i.add(t, e) : i.reset(t, e), i
			})._thenRunCallbacks(e, this)
		},
		create: function (e, t) {
			var i = this;
			if (t = t ? n.clone(t) : {}, e = this._prepareModel(e, t), !e) return !1;
			t.wait || i.add(e, t);
			var r = t.success;
			return t.success = function (n, s) {
				t.wait && i.add(n, t), r ? r(n, s) : n.trigger("sync", e, s, t)
			}, e.save(null, t), e
		},
		parse: function (e) {
			return e
		},
		chain: function () {
			return n(this.models).chain()
		},
		_reset: function () {
			this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
		},
		_prepareModel: function (e, n) {
			if (e instanceof t.Object) e.collection || (e.collection = this);
			else {
				var i = e;
				n.collection = this, e = new this.model(i, n), e._validate(e.attributes, n) || (e = !1)
			}
			return e
		},
		_removeReference: function (e) {
			this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
		},
		_onModelEvent: function (e, t, n, i) {
			("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && "change:objectId" === e && (delete this._byId[t.previous("objectId")], this._byId[t.id] = t), this.trigger.apply(this, arguments))
		}
	});
	var i = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
	t._arrayEach(i, function (e) {
		t.Collection.prototype[e] = function () {
			return n[e].apply(n, [this.models].concat(n.toArray(arguments)))
		}
	}), t.Collection.extend = t._extend
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.View = function (e) {
		this.cid = n.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
	};
	var i = /^(\S+)\s*(.*)$/,
		r = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
	n.extend(t.View.prototype, t.Events, {
		tagName: "div",
		$: function (e) {
			return this.$el.find(e)
		},
		initialize: function () {},
		render: function () {
			return this
		},
		remove: function () {
			return this.$el.remove(), this
		},
		make: function (e, n, i) {
			var r = document.createElement(e);
			return n && t.$(r).attr(n), i && t.$(r).html(i), r
		},
		setElement: function (e, n) {
			return this.$el = t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
		},
		delegateEvents: function (e) {
			if (e = e || t._getValue(this, "events")) {
				this.undelegateEvents();
				var r = this;
				t._objectEach(e, function (t, s) {
					if (n.isFunction(t) || (t = r[e[s]]), !t) throw Error('Event "' + e[s] + '" does not exist');
					var a = s.match(i),
						o = a[1],
						u = a[2];
					t = n.bind(t, r), o += ".delegateEvents" + r.cid, "" === u ? r.$el.bind(o, t) : r.$el.delegate(u, o, t)
				})
			}
		},
		undelegateEvents: function () {
			this.$el.unbind(".delegateEvents" + this.cid)
		},
		_configure: function (e) {
			this.options && (e = n.extend({}, this.options, e));
			var t = this;
			n.each(r, function (n) {
				e[n] && (t[n] = e[n])
			}), this.options = e
		},
		_ensureElement: function () {
			if (this.el) this.setElement(this.el, !1);
			else {
				var e = t._getValue(this, "attributes") || {};
				this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
			}
		}
	}), t.View.extend = t._extend
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.User = t.Object.extend("_User", {
		_isCurrentUser: !1,
		_mergeFromObject: function (e) {
			e.getSessionToken() && (this._sessionToken = e.getSessionToken()), t.User.__super__._mergeFromObject.call(this, e)
		},
		_mergeMagicFields: function (e) {
			e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e)
		},
		_cleanupAuthData: function () {
			if (this.isCurrent()) {
				var e = this.get("authData");
				e && t._objectEach(this.get("authData"), function (t, n) {
					e[n] || delete e[n]
				})
			}
		},
		_synchronizeAllAuthData: function () {
			var e = this.get("authData");
			if (e) {
				var n = this;
				t._objectEach(this.get("authData"), function (e, t) {
					n._synchronizeAuthData(t)
				})
			}
		},
		_synchronizeAuthData: function (e) {
			if (this.isCurrent()) {
				var i;
				n.isString(e) ? (i = e, e = t.User._authProviders[i]) : i = e.getAuthType();
				var r = this.get("authData");
				if (r && e) {
					var s = e.restoreAuthentication(r[i]);
					s || this._unlinkFrom(e)
				}
			}
		},
		_handleSaveResult: function (e) {
			e && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), (e || this.isCurrent()) && t.User._saveCurrentUser(this)
		},
		_linkWith: function (e, i) {
			var r;
			if (n.isString(e) ? (r = e, e = t.User._authProviders[e]) : r = e.getAuthType(), n.has(i, "authData")) {
				var s = this.get("authData") || {};
				s[r] = i.authData, this.set("authData", s);
				var a = n.clone(i) || {};
				return a.success = function (e) {
					e._handleSaveResult(!0), i.success && i.success.apply(this, arguments)
				}, this.save({
					authData: s
				}, a)
			}
			var o = this,
				u = new t.Promise;
			return e.authenticate({
				success: function (e, t) {
					o._linkWith(e, {
						authData: t,
						success: i.success,
						error: i.error
					}).then(function () {
						u.resolve(o)
					})
				},
				error: function (e, t) {
					i.error && i.error(o, t), u.reject(t)
				}
			}), u
		},
		_unlinkFrom: function (e, i) {
			var r;
			n.isString(e) ? (r = e, e = t.User._authProviders[e]) : r = e.getAuthType();
			var s = n.clone(i),
				a = this;
			return s.authData = null, s.success = function () {
				a._synchronizeAuthData(e), i.success && i.success.apply(this, arguments)
			}, this._linkWith(e, s)
		},
		_isLinked: function (e) {
			var t;
			t = n.isString(e) ? e : e.getAuthType();
			var i = this.get("authData") || {};
			return !!i[t]
		},
		_logOutWithAll: function () {
			var e = this.get("authData");
			if (e) {
				var n = this;
				t._objectEach(this.get("authData"), function (e, t) {
					n._logOutWith(t)
				})
			}
		},
		_logOutWith: function (e) {
			this.isCurrent() && (n.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate())
		},
		signUp: function (e, i) {
			var r;
			i = i || {};
			var s = e && e.username || this.get("username");
			if (!s || "" === s) return r = new t.Error(t.Error.OTHER_CAUSE, "Cannot sign up user with an empty name."), i && i.error && i.error(this, r), t.Promise.error(r);
			var a = e && e.password || this.get("password");
			if (!a || "" === a) return r = new t.Error(t.Error.OTHER_CAUSE, "Cannot sign up user with an empty password."), i && i.error && i.error(this, r), t.Promise.error(r);
			var o = n.clone(i);
			return o.success = function (e) {
				e._handleSaveResult(!0), i.success && i.success.apply(this, arguments)
			}, this.save(e, o)
		},
		logIn: function (e) {
			var n = this;
			e = e || {};
			var i = t._request({
				route: "login",
				method: "GET",
				useMasterKey: e.useMasterKey,
				data: this.toJSON()
			});
			return i.then(function (e, t, i) {
				var r = n.parse(e, t, i);
				return n._finishFetch(r), n._handleSaveResult(!0), n
			})._thenRunCallbacks(e, this)
		},
		save: function (e, i, r) {
			var s, a;
			n.isObject(e) || n.isNull(e) || n.isUndefined(e) ? (s = e, a = i) : (s = {}, s[e] = i, a = r), a = a || {};
			var o = n.clone(a);
			return o.success = function (e) {
				e._handleSaveResult(!1), a.success && a.success.apply(this, arguments)
			}, t.Object.prototype.save.call(this, s, o)
		},
		fetch: function (e) {
			var i = e ? n.clone(e) : {};
			return i.success = function (t) {
				t._handleSaveResult(!1), e && e.success && e.success.apply(this, arguments)
			}, t.Object.prototype.fetch.call(this, i)
		},
		isCurrent: function () {
			return this._isCurrentUser
		},
		getUsername: function () {
			return this.get("username")
		},
		setUsername: function (e, t) {
			return this.set("username", e, t)
		},
		setPassword: function (e, t) {
			return this.set("password", e, t)
		},
		getEmail: function () {
			return this.get("email")
		},
		setEmail: function (e, t) {
			return this.set("email", e, t)
		},
		authenticated: function () {
			return !!this._sessionToken && t.User.current() && t.User.current().id === this.id
		},
		getSessionToken: function () {
			return this._sessionToken
		}
	}, {
		_currentUser: null,
		_currentUserMatchesDisk: !1,
		_CURRENT_USER_KEY: "currentUser",
		_authProviders: {},
		_performUserRewrite: !0,
		signUp: function (e, n, i, r) {
			i = i || {}, i.username = e, i.password = n;
			var s = t.Object._create("_User");
			return s.signUp(i, r)
		},
		logIn: function (e, n, i) {
			var r = t.Object._create("_User");
			return r._finishFetch({
				username: e,
				password: n
			}), r.logIn(i)
		},
		become: function (e, n) {
			n = n || {};
			var i = t.Object._create("_User");
			return t._request({
				route: "users",
				className: "me",
				method: "GET",
				useMasterKey: n.useMasterKey,
				sessionToken: e
			}).then(function (e, t, n) {
				var r = i.parse(e, t, n);
				return i._finishFetch(r), i._handleSaveResult(!0), i
			})._thenRunCallbacks(n, i)
		},
		logOut: function () {
			null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItem(t._getParsePath(t.User._CURRENT_USER_KEY))
		},
		requestPasswordReset: function (e, n) {
			n = n || {};
			var i = t._request({
				route: "requestPasswordReset",
				method: "POST",
				useMasterKey: n.useMasterKey,
				data: {
					email: e
				}
			});
			return i._thenRunCallbacks(n)
		},
		current: function () {
			if (t.User._currentUser) return t.User._currentUser;
			if (t.User._currentUserMatchesDisk) return t.User._currentUser;
			t.User._currentUserMatchesDisk = !0;
			var e = t.localStorage.getItem(t._getParsePath(t.User._CURRENT_USER_KEY));
			if (!e) return null;
			t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
			var n = JSON.parse(e);
			return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser
		},
		allowCustomUserClass: function (e) {
			this._performUserRewrite = !e
		},
		_saveCurrentUser: function (e) {
			t.User._currentUser !== e && t.User.logOut(), e._isCurrentUser = !0, t.User._currentUser = e, t.User._currentUserMatchesDisk = !0;
			var n = e.toJSON();
			n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItem(t._getParsePath(t.User._CURRENT_USER_KEY), JSON.stringify(n))
		},
		_registerAuthenticationProvider: function (e) {
			t.User._authProviders[e.getAuthType()] = e, t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType())
		},
		_logInWith: function (e, n) {
			var i = t.Object._create("_User");
			return i._linkWith(e, n)
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Query = function (e) {
		n.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
	}, t.Query.or = function () {
		var e = n.toArray(arguments),
			i = null;
		t._arrayEach(e, function (e) {
			if (n.isNull(i) && (i = e.className), i !== e.className) throw "All queries must be for the same class"
		});
		var r = new t.Query(i);
		return r._orQuery(e), r
	}, t.Query.prototype = {
		get: function (e, i) {
			var r = this;
			r.equalTo("objectId", e);
			var s = {};
			return i && n.has(i, "useMasterKey") && (s = {
				useMasterKey: i.useMasterKey
			}), r.first(s).then(function (e) {
				if (e) return e;
				var n = new t.Error(t.Error.OBJECT_NOT_FOUND, "Object not found.");
				return t.Promise.error(n)
			})._thenRunCallbacks(i, null)
		},
		toJSON: function () {
			var e = {
				where: this._where
			};
			return this._include.length > 0 && (e.include = this._include.join(",")), this._select && (e.keys = this._select.join(",")), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order.join(",")), t._objectEach(this._extraOptions, function (t, n) {
				e[n] = t
			}), e
		},
		find: function (e) {
			var i = this;
			e = e || {};
			var r = t._request({
				route: "classes",
				className: this.className,
				method: "GET",
				useMasterKey: e.useMasterKey,
				data: this.toJSON()
			});
			return r.then(function (e) {
				return n.map(e.results, function (n) {
					var r;
					return r = e.className ? new t.Object(e.className) : new i.objectClass, r._finishFetch(n, !0), r
				})
			})._thenRunCallbacks(e)
		},
		count: function (e) {
			var n = this;
			e = e || {};
			var i = this.toJSON();
			i.limit = 0, i.count = 1;
			var r = t._request({
				route: "classes",
				className: n.className,
				method: "GET",
				useMasterKey: e.useMasterKey,
				data: i
			});
			return r.then(function (e) {
				return e.count
			})._thenRunCallbacks(e)
		},
		first: function (e) {
			var i = this;
			e = e || {};
			var r = this.toJSON();
			r.limit = 1;
			var s = t._request({
				route: "classes",
				className: this.className,
				method: "GET",
				useMasterKey: e.useMasterKey,
				data: r
			});
			return s.then(function (e) {
				return n.map(e.results, function (e) {
					var t = new i.objectClass;
					return t._finishFetch(e, !0), t
				})[0]
			})._thenRunCallbacks(e)
		},
		collection: function (e, i) {
			return i = i || {}, new t.Collection(e, n.extend(i, {
				model: this.objectClass,
				query: this
			}))
		},
		skip: function (e) {
			return this._skip = e, this
		},
		limit: function (e) {
			return this._limit = e, this
		},
		equalTo: function (e, i) {
			return n.isUndefined(i) ? this.doesNotExist(e) : (this._where[e] = t._encode(i), this)
		},
		_addCondition: function (e, n, i) {
			return this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(i), this
		},
		notEqualTo: function (e, t) {
			return this._addCondition(e, "$ne", t), this
		},
		lessThan: function (e, t) {
			return this._addCondition(e, "$lt", t), this
		},
		greaterThan: function (e, t) {
			return this._addCondition(e, "$gt", t), this
		},
		lessThanOrEqualTo: function (e, t) {
			return this._addCondition(e, "$lte", t), this
		},
		greaterThanOrEqualTo: function (e, t) {
			return this._addCondition(e, "$gte", t), this
		},
		containedIn: function (e, t) {
			return this._addCondition(e, "$in", t), this
		},
		notContainedIn: function (e, t) {
			return this._addCondition(e, "$nin", t), this
		},
		containsAll: function (e, t) {
			return this._addCondition(e, "$all", t), this
		},
		exists: function (e) {
			return this._addCondition(e, "$exists", !0), this
		},
		doesNotExist: function (e) {
			return this._addCondition(e, "$exists", !1), this
		},
		matches: function (e, t, n) {
			return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
		},
		matchesQuery: function (e, t) {
			var n = t.toJSON();
			return n.className = t.className, this._addCondition(e, "$inQuery", n), this
		},
		doesNotMatchQuery: function (e, t) {
			var n = t.toJSON();
			return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
		},
		matchesKeyInQuery: function (e, t, n) {
			var i = n.toJSON();
			return i.className = n.className, this._addCondition(e, "$select", {
				key: t,
				query: i
			}), this
		},
		doesNotMatchKeyInQuery: function (e, t, n) {
			var i = n.toJSON();
			return i.className = n.className, this._addCondition(e, "$dontSelect", {
				key: t,
				query: i
			}), this
		},
		_orQuery: function (e) {
			var t = n.map(e, function (e) {
				return e.toJSON().where
			});
			return this._where.$or = t, this
		},
		_quote: function (e) {
			return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
		},
		contains: function (e, t) {
			return this._addCondition(e, "$regex", this._quote(t)), this
		},
		startsWith: function (e, t) {
			return this._addCondition(e, "$regex", "^" + this._quote(t)), this
		},
		endsWith: function (e, t) {
			return this._addCondition(e, "$regex", this._quote(t) + "$"), this
		},
		ascending: function () {
			return this._order = [], this.addAscending.apply(this, arguments)
		},
		addAscending: function () {
			var e = this;
			return this._order || (this._order = []), t._arrayEach(arguments, function (t) {
				Array.isArray(t) && (t = t.join()), e._order = e._order.concat(t.replace(/\s/g, "").split(","))
			}), this
		},
		descending: function () {
			return this._order = [], this.addDescending.apply(this, arguments)
		},
		addDescending: function () {
			var e = this;
			return this._order || (this._order = []), t._arrayEach(arguments, function (t) {
				Array.isArray(t) && (t = t.join()), e._order = e._order.concat(n.map(t.replace(/\s/g, "").split(","), function (e) {
					return "-" + e
				}))
			}), this
		},
		near: function (e, n) {
			return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this
		},
		withinRadians: function (e, t, n) {
			return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
		},
		withinMiles: function (e, t, n) {
			return this.withinRadians(e, t, n / 3958.8)
		},
		withinKilometers: function (e, t, n) {
			return this.withinRadians(e, t, n / 6371)
		},
		withinGeoBox: function (e, n, i) {
			return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), i instanceof t.GeoPoint || (i = new t.GeoPoint(i)), this._addCondition(e, "$within", {
				$box: [n, i]
			}), this
		},
		include: function () {
			var e = this;
			return t._arrayEach(arguments, function (t) {
				n.isArray(t) ? e._include = e._include.concat(t) : e._include.push(t)
			}), this
		},
		select: function () {
			var e = this;
			return this._select = this._select || [], t._arrayEach(arguments, function (t) {
				n.isArray(t) ? e._select = e._select.concat(t) : e._select.push(t)
			}), this
		},
		each: function (e, i) {
			if (i = i || {}, this._order || this._skip || this._limit >= 0) {
				var r = "Cannot iterate on a query with sort, skip, or limit.";
				return t.Promise.error(r)._thenRunCallbacks(i)
			}
			new t.Promise;
			var s = new t.Query(this.objectClass);
			s._limit = i.batchSize || 100, s._where = n.clone(this._where), s._include = n.clone(this._include), s.ascending("objectId");
			var a = {};
			n.has(i, "useMasterKey") && (a.useMasterKey = i.useMasterKey);
			var o = !1;
			return t.Promise._continueWhile(function () {
				return !o
			}, function () {
				return s.find(a).then(function (n) {
					var i = t.Promise.as();
					return t._.each(n, function (t) {
						i = i.then(function () {
							return e(t)
						})
					}), i.then(function () {
						n.length >= s._limit ? s.greaterThan("objectId", n[n.length - 1].id) : o = !0
					})
				})
			})._thenRunCallbacks(i)
		}
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t, n, i = e.Parse,
		r = i._,
		s = !1,
		a = {
			authenticate: function (e) {
				var n = this;
				FB.login(function (t) {
					t.authResponse ? e.success && e.success(n, {
						id: t.authResponse.userID,
						access_token: t.authResponse.accessToken,
						expiration_date: new Date(1e3 * t.authResponse.expiresIn + (new Date).getTime()).toJSON()
					}) : e.error && e.error(n, t)
				}, {
					scope: t
				})
			},
			restoreAuthentication: function (e) {
				if (e) {
					var t = {
							userID: e.id,
							accessToken: e.access_token,
							expiresIn: (i._parseDate(e.expiration_date).getTime() - (new Date).getTime()) / 1e3
						},
						s = r.clone(n);
					s.authResponse = t, s.status = !1;
					var a = FB.getAuthResponse();
					a && a.userID !== t.userID && FB.logout(), FB.init(s)
				}
				return !0
			},
			getAuthType: function () {
				return "facebook"
			},
			deauthenticate: function () {
				this.restoreAuthentication(null)
			}
		};
	i.FacebookUtils = {
		init: function (e) {
			if ("undefined" == typeof FB) throw "The Facebook JavaScript SDK must be loaded before calling init.";
			if (n = r.clone(e) || {}, n.status && "undefined" != typeof console) {
				var t = console.warn || console.log || function () {};
				t.call(console, "The 'status' flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.")
			}
			n.status = !1, FB.init(n), i.User._registerAuthenticationProvider(a), s = !0
		},
		isLinked: function (e) {
			return e._isLinked("facebook")
		},
		logIn: function (e, n) {
			if (!e || r.isString(e)) {
				if (!s) throw "You must initialize FacebookUtils before calling logIn.";
				return t = e, i.User._logInWith("facebook", n)
			}
			var a = r.clone(n) || {};
			return a.authData = e, i.User._logInWith("facebook", a)
		},
		link: function (e, n, i) {
			if (!n || r.isString(n)) {
				if (!s) throw "You must initialize FacebookUtils before calling link.";
				return t = n, e._linkWith("facebook", i)
			}
			var a = r.clone(i) || {};
			return a.authData = n, e._linkWith("facebook", a)
		},
		unlink: function (e, t) {
			if (!s) throw "You must initialize FacebookUtils before calling unlink.";
			return e._unlinkFrom("facebook", t)
		}
	}
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.History = function () {
		this.handlers = [], n.bindAll(this, "checkUrl")
	};
	var i = /^[#\/]/,
		r = /msie [\w.]+/;
	t.History.started = !1, n.extend(t.History.prototype, t.Events, {
		interval: 50,
		getHash: function (e) {
			var t = e ? e.location : window.location,
				n = t.href.match(/#(.*)$/);
			return n ? n[1] : ""
		},
		getFragment: function (e, n) {
			if (t._isNullOrUndefined(e))
				if (this._hasPushState || n) {
					e = window.location.pathname;
					var r = window.location.search;
					r && (e += r)
				} else e = this.getHash();
			return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(i, "")
		},
		start: function (e) {
			if (t.History.started) throw Error("Parse.history has already been started");
			t.History.started = !0, this.options = n.extend({}, {
				root: "/"
			}, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
			var s = this.getFragment(),
				a = document.documentMode,
				o = r.exec(navigator.userAgent.toLowerCase()) && (!a || 7 >= a);
			o && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(s)), this._hasPushState ? t.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval)), this.fragment = s;
			var u = window.location,
				c = u.pathname === this.options.root;
			return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !c ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && c && u.hash && (this.fragment = this.getHash().replace(i, ""), window.history.replaceState({}, document.title, u.protocol + "//" + u.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl())
		},
		stop: function () {
			t.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), window.clearInterval(this._checkUrlInterval), t.History.started = !1
		},
		route: function (e, t) {
			this.handlers.unshift({
				route: e,
				callback: t
			})
		},
		checkUrl: function () {
			var e = this.getFragment();
			return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
		},
		loadUrl: function (e) {
			var t = this.fragment = this.getFragment(e),
				i = n.any(this.handlers, function (e) {
					return e.route.test(t) ? (e.callback(t), !0) : void 0
				});
			return i
		},
		navigate: function (e, n) {
			if (!t.History.started) return !1;
			n && n !== !0 || (n = {
				trigger: n
			});
			var r = (e || "").replace(i, "");
			if (this.fragment !== r) {
				if (this._hasPushState) {
					0 !== r.indexOf(this.options.root) && (r = this.options.root + r), this.fragment = r;
					var s = n.replace ? "replaceState" : "pushState";
					window.history[s]({}, document.title, r)
				} else this._wantsHashChange ? (this.fragment = r, this._updateHash(window.location, r, n.replace), this.iframe && r !== this.getFragment(this.getHash(this.iframe)) && (n.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, r, n.replace))) : window.location.assign(this.options.root + e);
				n.trigger && this.loadUrl(e)
			}
		},
		_updateHash: function (e, t, n) {
			if (n) {
				var i = ("" + e).replace(/(javascript:|#).*$/, "");
				e.replace(i + "#" + t)
			} else e.hash = t
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Router = function (e) {
		e = e || {}, e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
	};
	var i = /:\w+/g,
		r = /\*\w+/g,
		s = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;
	n.extend(t.Router.prototype, t.Events, {
		initialize: function () {},
		route: function (e, i, r) {
			return t.history = t.history || new t.History, n.isRegExp(e) || (e = this._routeToRegExp(e)), r || (r = this[i]), t.history.route(e, n.bind(function (n) {
				var s = this._extractParameters(e, n);
				r && r.apply(this, s), this.trigger.apply(this, ["route:" + i].concat(s)), t.history.trigger("route", this, i, s)
			}, this)), this
		},
		navigate: function (e, n) {
			t.history.navigate(e, n)
		},
		_bindRoutes: function () {
			if (this.routes) {
				var e = [];
				for (var t in this.routes) this.routes.hasOwnProperty(t) && e.unshift([t, this.routes[t]]);
				for (var n = 0, i = e.length; i > n; n++) this.route(e[n][0], e[n][1], this[e[n][1]])
			}
		},
		_routeToRegExp: function (e) {
			return e = e.replace(s, "\\$&").replace(i, "([^/]+)").replace(r, "(.*?)"), RegExp("^" + e + "$")
		},
		_extractParameters: function (e, t) {
			return e.exec(t).slice(1)
		}
	}), t.Router.extend = t._extend
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse,
		n = t._;
	t.Cloud = t.Cloud || {}, n.extend(t.Cloud, {
		run: function (e, n, i) {
			i = i || {};
			var r = t._request({
				route: "functions",
				className: e,
				method: "POST",
				useMasterKey: i.useMasterKey,
				data: t._encode(n, null, !0)
			});
			return r.then(function (e) {
				return t._decode(null, e).result
			})._thenRunCallbacks(i)
		}
	})
}(this),
function (e) {
	e.Parse = e.Parse || {};
	var t = e.Parse;
	t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (e, n) {
		if (n = n || {}, e.where && (e.where = e.where.toJSON().where), e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_interval) throw "Both expiration_time and expiration_interval can't be set";
		var i = t._request({
			route: "push",
			method: "POST",
			data: e,
			useMasterKey: n.useMasterKey
		});
		return i._thenRunCallbacks(n)
	}
}(this);





chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.contents) {
			var contents = request.contents;
			var string = document.getElementById('newImageUrl');
			string.value = contents.url;
			var image = document.getElementById('imagePlaceholder');
			image.src = contents.url;
			var fname = "MemeMasterPhoto." + contents.url.split(".").pop();
			//    chrome.downloads.download({url: contents.url, filename: fname, conflictAction: "overwrite", saveAs: false}, function(id) {});
		}
	});
console.log("startt");



Parse.initialize("8lnVjjPew8kds7OwHV3j0VDtO7eqiQXNtv1mwACQ", "SNQrS54MtLfaswRMDE574zvjfKyMhppxOw4LDrse");

function checkForm() {
	var nameField = document.forms["page"]["title"].value;
	var urlField = document.forms["link"]["url"].value;

	if (nameField.length == 0 || nameField == "" || urlField.length == 0 || urlField == "") {
		alert("Please fill out all fields marked with an asterisk (*).");
		return false;
	}

	return true;
}

function submitenter(myfield, e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
		var bool = checkForm();

		if (bool)
			document.getElementById('done').click();

		return false;
	} else
		return true;
}

function today() {
	function makeArray() {
		for (i = 0; i < makeArray.arguments.length; i++)
			this[i + 1] = makeArray.arguments[i];
	}

	var months = new makeArray('January', 'February', 'March',
		'April', 'May', 'June', 'July', 'August',
		'September', 'October', 'November',
		'December');
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;

	document.write(day + " " + months[month] + " " + year);
}



function addPageDone() {
	console.log("Inside");
	//	var Meme = Parse.Object.extend("Meme");
	//	var meme = new Meme();

	//meme.set("title", document.getElementById("title").value);
	//meme.set("url", document.getElementById("newImageUrl").value);
	//	meme.set("tag", document.getElementById("tag").value);
	//	console.log(localStorage.getItem("urll"));
	//meme.set("file", localStorage.getItem("urll"));
	//meme.save();
	console.log("Done?");







	var yml = new XMLHttpRequest();
	yml.open('POST', 'https://api.parse.com/1/classes/Meme');
	yml.setRequestHeader("X-Parse-Application-Id", "8lnVjjPew8kds7OwHV3j0VDtO7eqiQXNtv1mwACQ");
	yml.setRequestHeader("X-Parse-REST-API-Key", "AUVrB3v6VV2utjGmJifyWeBaZHIDbfdvR7NM30VA");
	yml.setRequestHeader("Content-Type", "application/json");
	var s = '{"title": "' + document.getElementById("title").value + '","url": "' + document.getElementById("newImageUrl").value +
		'", "tag": "' + document.getElementById("tag").value + '", "file":{"name": "' + localStorage.getItem("urll") +
		'", "__type": "File"}}';
	yml.send(s)
	console.log(s);

}


//document.getElementById("title").addEventListener("onKeyPress", submitenter(this, event));
//document.getElementById("newImageUrl").addEventListener("onKeyPress", submitenter(this, event));
//document.getElementById("tag").addEventListener("onKeyPress", submitenter(this, event));
//document.getElementById("note").addEventListener("onKeyPress", submitenter(this, event));
document.getElementById("donee").addEventListener("click", addPageDone);
document.getElementById("date").value = today();

function submitenter(myfield, e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
		var bool = checkForm();

		if (bool)
			document.getElementById('done').click();

		return false;
	} else
		return true;
}

function checkForm() {

	function ValidURL(str) {
		//var str = document.getElementById("newImageURL").value;
		var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
		if (!pattern.test(str)) {
			return false;
		} else {
			return true;
		}
	}

	var nameField = document.forms["page"]["title"].value;
	var urlField = document.forms["link"]["url"].value;

	if (nameField.length == 0 || nameField == "" || urlField.length == 0 || urlField == "") {
		alert("Please fill out all fields marked with an asterisk (*).");
		return false;
	}

	if (!ValidURL(urlField)) {
		alert("Broken link. Please enter a valid image URL.");
		return false;
	}


	//URL is valid, save the URL

	return true;
}

function today() {
	function makeArray() {
		for (i = 0; i < makeArray.arguments.length; i++)
			this[i + 1] = makeArray.arguments[i];
	}

	var months = new makeArray('January', 'February', 'March',
		'April', 'May', 'June', 'July', 'August',
		'September', 'October', 'November',
		'December');
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;

	document.write(day + " " + months[month] + " " + year);
}