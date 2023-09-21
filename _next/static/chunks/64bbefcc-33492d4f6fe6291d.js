"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [116], {
        53553: function(e, t, r) {
            var a, n, o, s, i, u, l, p = r(48834).lW;

            function c() {
                this.table = new Uint16Array(16), this.trans = new Uint16Array(288)
            }

            function h(e, t) {
                this.source = e, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new c, this.dtree = new c
            }
            String.prototype.codePointAt || (a = function() {
                try {
                    var e = {},
                        t = Object.defineProperty,
                        r = t(e, e, e) && t
                } catch (e) {}
                return r
            }(), n = function(e) {
                if (this == null) throw TypeError();
                var t, r = String(this),
                    a = r.length,
                    n = e ? Number(e) : 0;
                if (n != n && (n = 0), !(n < 0) && !(n >= a)) {
                    var o = r.charCodeAt(n);
                    return o >= 55296 && o <= 56319 && a > n + 1 && (t = r.charCodeAt(n + 1)) >= 56320 && t <= 57343 ? (o - 55296) * 1024 + t - 56320 + 65536 : o
                }
            }, a ? a(String.prototype, "codePointAt", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.codePointAt = n);
            var f = new c,
                d = new c,
                g = new Uint8Array(30),
                v = new Uint16Array(30),
                m = new Uint8Array(30),
                y = new Uint16Array(30),
                x = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                b = new c,
                S = new Uint8Array(320);

            function T(e, t, r, a) {
                var n, o;
                for (n = 0; n < r; ++n) e[n] = 0;
                for (n = 0; n < 30 - r; ++n) e[n + r] = n / r | 0;
                for (o = a, n = 0; n < 30; ++n) t[n] = o, o += 1 << e[n]
            }
            var k = new Uint16Array(16);

            function U(e, t, r, a) {
                var n, o;
                for (n = 0; n < 16; ++n) e.table[n] = 0;
                for (n = 0; n < a; ++n) e.table[t[r + n]]++;
                for (o = 0, e.table[0] = 0, n = 0; n < 16; ++n) k[n] = o, o += e.table[n];
                for (n = 0; n < a; ++n) t[r + n] && (e.trans[k[t[r + n]]++] = n)
            }

            function O(e, t, r) {
                if (!t) return r;
                for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
                var a = e.tag & 65535 >>> 16 - t;
                return e.tag >>>= t, e.bitcount -= t, a + r
            }

            function E(e, t) {
                for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
                var r = 0,
                    a = 0,
                    n = 0,
                    o = e.tag;
                do a = 2 * a + (1 & o), o >>>= 1, ++n, r += t.table[n], a -= t.table[n]; while (a >= 0);
                return e.tag = o, e.bitcount -= n, t.trans[r + a]
            }

            function R(e, t, r) {
                for (;;) {
                    var a, n, o, s, i = E(e, t);
                    if (256 === i) return 0;
                    if (i < 256) e.dest[e.destLen++] = i;
                    else
                        for (i -= 257, a = O(e, g[i], v[i]), n = E(e, r), s = o = e.destLen - O(e, m[n], y[n]); s < o + a; ++s) e.dest[e.destLen++] = e.dest[s]
                }
            }! function(e, t) {
                var r;
                for (r = 0; r < 7; ++r) e.table[r] = 0;
                for (r = 0, e.table[7] = 24, e.table[8] = 152, e.table[9] = 112; r < 24; ++r) e.trans[r] = 256 + r;
                for (r = 0; r < 144; ++r) e.trans[24 + r] = r;
                for (r = 0; r < 8; ++r) e.trans[168 + r] = 280 + r;
                for (r = 0; r < 112; ++r) e.trans[176 + r] = 144 + r;
                for (r = 0; r < 5; ++r) t.table[r] = 0;
                for (r = 0, t.table[5] = 32; r < 32; ++r) t.trans[r] = r
            }(f, d), T(g, v, 4, 3), T(m, y, 2, 1), g[28] = 0, v[28] = 258;
            var L = function(e, t) {
                var r, a, n = new h(e, t);
                do {
                    switch (r = function(e) {
                        e.bitcount-- || (e.tag = e.source[e.sourceIndex++], e.bitcount = 7);
                        var t = 1 & e.tag;
                        return e.tag >>>= 1, t
                    }(n), O(n, 2, 0)) {
                        case 0:
                            a = function(e) {
                                for (var t, r; e.bitcount > 8;) e.sourceIndex--, e.bitcount -= 8;
                                if ((t = 256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !== (65535 & ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))) return -3;
                                for (e.sourceIndex += 4, r = t; r; --r) e.dest[e.destLen++] = e.source[e.sourceIndex++];
                                return e.bitcount = 0, 0
                            }(n);
                            break;
                        case 1:
                            a = R(n, f, d);
                            break;
                        case 2:
                            ! function(e, t, r) {
                                for (s = 0, a = O(e, 5, 257), n = O(e, 5, 1), o = O(e, 4, 4); s < 19; ++s) S[s] = 0;
                                for (s = 0; s < o; ++s) {
                                    var a, n, o, s, i, u, l = O(e, 3, 0);
                                    S[x[s]] = l
                                }
                                for (U(b, S, 0, 19), i = 0; i < a + n;) {
                                    var p = E(e, b);
                                    switch (p) {
                                        case 16:
                                            var c = S[i - 1];
                                            for (u = O(e, 2, 3); u; --u) S[i++] = c;
                                            break;
                                        case 17:
                                            for (u = O(e, 3, 3); u; --u) S[i++] = 0;
                                            break;
                                        case 18:
                                            for (u = O(e, 7, 11); u; --u) S[i++] = 0;
                                            break;
                                        default:
                                            S[i++] = p
                                    }
                                }
                                U(t, S, 0, a), U(r, S, a, n)
                            }(n, n.ltree, n.dtree), a = R(n, n.ltree, n.dtree);
                            break;
                        default:
                            a = -3
                    }
                    if (0 !== a) throw Error("Data error")
                } while (!r);
                return n.destLen < n.dest.length ? "function" == typeof n.dest.slice ? n.dest.slice(0, n.destLen) : n.dest.subarray(0, n.destLen) : n.dest
            };

            function C(e, t, r, a, n) {
                return Math.pow(1 - n, 3) * e + 3 * Math.pow(1 - n, 2) * n * t + 3 * (1 - n) * Math.pow(n, 2) * r + Math.pow(n, 3) * a
            }

            function D() {
                this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN
            }

            function w() {
                this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1
            }

            function I(e) {
                throw Error(e)
            }

            function M(e, t) {
                e || I(t)
            }
            D.prototype.isEmpty = function() {
                return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2)
            }, D.prototype.addPoint = function(e, t) {
                "number" == typeof e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), "number" == typeof t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t))
            }, D.prototype.addX = function(e) {
                this.addPoint(e, null)
            }, D.prototype.addY = function(e) {
                this.addPoint(null, e)
            }, D.prototype.addBezier = function(e, t, r, a, n, o, s, i) {
                var u = [e, t],
                    l = [r, a],
                    p = [n, o],
                    c = [s, i];
                this.addPoint(e, t), this.addPoint(s, i);
                for (var h = 0; h <= 1; h++) {
                    var f = 6 * u[h] - 12 * l[h] + 6 * p[h],
                        d = -3 * u[h] + 9 * l[h] - 9 * p[h] + 3 * c[h],
                        g = 3 * l[h] - 3 * u[h];
                    if (0 === d) {
                        if (0 === f) continue;
                        var v = -g / f;
                        0 < v && v < 1 && (0 === h && this.addX(C(u[h], l[h], p[h], c[h], v)), 1 === h && this.addY(C(u[h], l[h], p[h], c[h], v)));
                        continue
                    }
                    var m = Math.pow(f, 2) - 4 * g * d;
                    if (!(m < 0)) {
                        var y = (-f + Math.sqrt(m)) / (2 * d);
                        0 < y && y < 1 && (0 === h && this.addX(C(u[h], l[h], p[h], c[h], y)), 1 === h && this.addY(C(u[h], l[h], p[h], c[h], y)));
                        var x = (-f - Math.sqrt(m)) / (2 * d);
                        0 < x && x < 1 && (0 === h && this.addX(C(u[h], l[h], p[h], c[h], x)), 1 === h && this.addY(C(u[h], l[h], p[h], c[h], x)))
                    }
                }
            }, D.prototype.addQuad = function(e, t, r, a, n, o) {
                var s = e + 2 / 3 * (r - e),
                    i = t + 2 / 3 * (a - t),
                    u = s + 1 / 3 * (n - e),
                    l = i + 1 / 3 * (o - t);
                this.addBezier(e, t, s, i, u, l, n, o)
            }, w.prototype.moveTo = function(e, t) {
                this.commands.push({
                    type: "M",
                    x: e,
                    y: t
                })
            }, w.prototype.lineTo = function(e, t) {
                this.commands.push({
                    type: "L",
                    x: e,
                    y: t
                })
            }, w.prototype.curveTo = w.prototype.bezierCurveTo = function(e, t, r, a, n, o) {
                this.commands.push({
                    type: "C",
                    x1: e,
                    y1: t,
                    x2: r,
                    y2: a,
                    x: n,
                    y: o
                })
            }, w.prototype.quadTo = w.prototype.quadraticCurveTo = function(e, t, r, a) {
                this.commands.push({
                    type: "Q",
                    x1: e,
                    y1: t,
                    x: r,
                    y: a
                })
            }, w.prototype.close = w.prototype.closePath = function() {
                this.commands.push({
                    type: "Z"
                })
            }, w.prototype.extend = function(e) {
                if (e.commands) e = e.commands;
                else if (e instanceof D) {
                    var t = e;
                    this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), this.close();
                    return
                }
                Array.prototype.push.apply(this.commands, e)
            }, w.prototype.getBoundingBox = function() {
                for (var e = new D, t = 0, r = 0, a = 0, n = 0, o = 0; o < this.commands.length; o++) {
                    var s = this.commands[o];
                    switch (s.type) {
                        case "M":
                            e.addPoint(s.x, s.y), t = a = s.x, r = n = s.y;
                            break;
                        case "L":
                            e.addPoint(s.x, s.y), a = s.x, n = s.y;
                            break;
                        case "Q":
                            e.addQuad(a, n, s.x1, s.y1, s.x, s.y), a = s.x, n = s.y;
                            break;
                        case "C":
                            e.addBezier(a, n, s.x1, s.y1, s.x2, s.y2, s.x, s.y), a = s.x, n = s.y;
                            break;
                        case "Z":
                            a = t, n = r;
                            break;
                        default:
                            throw Error("Unexpected path command " + s.type)
                    }
                }
                return e.isEmpty() && e.addPoint(0, 0), e
            }, w.prototype.draw = function(e) {
                e.beginPath();
                for (var t = 0; t < this.commands.length; t += 1) {
                    var r = this.commands[t];
                    "M" === r.type ? e.moveTo(r.x, r.y) : "L" === r.type ? e.lineTo(r.x, r.y) : "C" === r.type ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y) : "Q" === r.type ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y) : "Z" === r.type && e.closePath()
                }
                this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke())
            }, w.prototype.toPathData = function(e) {
                function t() {
                    for (var t = arguments, r = "", a = 0; a < arguments.length; a += 1) {
                        var n = t[a];
                        n >= 0 && a > 0 && (r += " "), r += Math.round(n) === n ? "" + Math.round(n) : n.toFixed(e)
                    }
                    return r
                }
                e = void 0 !== e ? e : 2;
                for (var r = "", a = 0; a < this.commands.length; a += 1) {
                    var n = this.commands[a];
                    "M" === n.type ? r += "M" + t(n.x, n.y) : "L" === n.type ? r += "L" + t(n.x, n.y) : "C" === n.type ? r += "C" + t(n.x1, n.y1, n.x2, n.y2, n.x, n.y) : "Q" === n.type ? r += "Q" + t(n.x1, n.y1, n.x, n.y) : "Z" === n.type && (r += "Z")
                }
                return r
            }, w.prototype.toSVG = function(e) {
                var t = '<path d="';
                return t += this.toPathData(e) + '"', this.fill && "black" !== this.fill && (null === this.fill ? t += ' fill="none"' : t += ' fill="' + this.fill + '"'), this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), t += "/>"
            }, w.prototype.toDOMElement = function(e) {
                var t = this.toPathData(e),
                    r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return r.setAttribute("d", t), r
            };
            var G = {
                    fail: I,
                    argument: M,
                    assert: M
                },
                B = {},
                F = {},
                A = {};

            function P(e) {
                return function() {
                    return e
                }
            }
            F.BYTE = function(e) {
                return G.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."), [e]
            }, A.BYTE = P(1), F.CHAR = function(e) {
                return [e.charCodeAt(0)]
            }, A.CHAR = P(1), F.CHARARRAY = function(e) {
                void 0 === e && (e = "", console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));
                for (var t = [], r = 0; r < e.length; r += 1) t[r] = e.charCodeAt(r);
                return t
            }, A.CHARARRAY = function(e) {
                return void 0 === e ? 0 : e.length
            }, F.USHORT = function(e) {
                return [e >> 8 & 255, 255 & e]
            }, A.USHORT = P(2), F.SHORT = function(e) {
                return e >= 32768 && (e = -(65536 - e)), [e >> 8 & 255, 255 & e]
            }, A.SHORT = P(2), F.UINT24 = function(e) {
                return [e >> 16 & 255, e >> 8 & 255, 255 & e]
            }, A.UINT24 = P(3), F.ULONG = function(e) {
                return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
            }, A.ULONG = P(4), F.LONG = function(e) {
                return e >= 2147483648 && (e = -(4294967296 - e)), [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
            }, A.LONG = P(4), F.FIXED = F.ULONG, A.FIXED = A.ULONG, F.FWORD = F.SHORT, A.FWORD = A.SHORT, F.UFWORD = F.USHORT, A.UFWORD = A.USHORT, F.LONGDATETIME = function(e) {
                return [0, 0, 0, 0, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
            }, A.LONGDATETIME = P(8), F.TAG = function(e) {
                return G.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]
            }, A.TAG = P(4), F.Card8 = F.BYTE, A.Card8 = A.BYTE, F.Card16 = F.USHORT, A.Card16 = A.USHORT, F.OffSize = F.BYTE, A.OffSize = A.BYTE, F.SID = F.USHORT, A.SID = A.USHORT, F.NUMBER = function(e) {
                return e >= -107 && e <= 107 ? [e + 139] : e >= 108 && e <= 1131 ? [((e -= 108) >> 8) + 247, 255 & e] : e >= -1131 && e <= -108 ? [((e = -e - 108) >> 8) + 251, 255 & e] : e >= -32768 && e <= 32767 ? F.NUMBER16(e) : F.NUMBER32(e)
            }, A.NUMBER = function(e) {
                return F.NUMBER(e).length
            }, F.NUMBER16 = function(e) {
                return [28, e >> 8 & 255, 255 & e]
            }, A.NUMBER16 = P(3), F.NUMBER32 = function(e) {
                return [29, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
            }, A.NUMBER32 = P(5), F.REAL = function(e) {
                var t = e.toString(),
                    r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
                if (r) {
                    var a = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
                    t = (Math.round(e * a) / a).toString()
                }
                for (var n = "", o = 0, s = t.length; o < s; o += 1) {
                    var i = t[o];
                    "e" === i ? n += "-" === t[++o] ? "c" : "b" : "." === i ? n += "a" : "-" === i ? n += "e" : n += i
                }
                n += 1 & n.length ? "f" : "ff";
                for (var u = [30], l = 0, p = n.length; l < p; l += 2) u.push(parseInt(n.substr(l, 2), 16));
                return u
            }, A.REAL = function(e) {
                return F.REAL(e).length
            }, F.NAME = F.CHARARRAY, A.NAME = A.CHARARRAY, F.STRING = F.CHARARRAY, A.STRING = A.CHARARRAY, B.UTF8 = function(e, t, r) {
                for (var a = [], n = 0; n < r; n++, t += 1) a[n] = e.getUint8(t);
                return String.fromCharCode.apply(null, a)
            }, B.UTF16 = function(e, t, r) {
                for (var a = [], n = r / 2, o = 0; o < n; o++, t += 2) a[o] = e.getUint16(t);
                return String.fromCharCode.apply(null, a)
            }, F.UTF16 = function(e) {
                for (var t = [], r = 0; r < e.length; r += 1) {
                    var a = e.charCodeAt(r);
                    t[t.length] = a >> 8 & 255, t[t.length] = 255 & a
                }
                return t
            }, A.UTF16 = function(e) {
                return 2 * e.length
            };
            var N = {
                "x-mac-croatian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ",
                "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
                "x-mac-gaelic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ",
                "x-mac-greek": "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad",
                "x-mac-icelandic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xa0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
                "x-mac-ce": "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",
                macintosh: "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-romanian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
                "x-mac-turkish": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ"
            };
            B.MACSTRING = function(e, t, r, a) {
                var n = N[a];
                if (void 0 !== n) {
                    for (var o = "", s = 0; s < r; s++) {
                        var i = e.getUint8(t + s);
                        i <= 127 ? o += String.fromCharCode(i) : o += n[127 & i]
                    }
                    return o
                }
            };
            var H = "function" == typeof WeakMap && new WeakMap,
                z = function(e) {
                    if (!o)
                        for (var t in o = {}, N) o[t] = new String(t);
                    var r = o[e];
                    if (void 0 !== r) {
                        if (H) {
                            var a = H.get(r);
                            if (void 0 !== a) return a
                        }
                        var n = N[e];
                        if (void 0 !== n) {
                            for (var s = {}, i = 0; i < n.length; i++) s[n.charCodeAt(i)] = i + 128;
                            return H && H.set(r, s), s
                        }
                    }
                };

            function W(e) {
                return e >= -128 && e <= 127
            }
            F.MACSTRING = function(e, t) {
                var r = z(t);
                if (void 0 !== r) {
                    for (var a = [], n = 0; n < e.length; n++) {
                        var o = e.charCodeAt(n);
                        if (o >= 128 && void 0 === (o = r[o])) return;
                        a[n] = o
                    }
                    return a
                }
            }, A.MACSTRING = function(e, t) {
                var r = F.MACSTRING(e, t);
                return void 0 !== r ? r.length : 0
            }, F.VARDELTAS = function(e) {
                for (var t = 0, r = []; t < e.length;) {
                    var a = e[t];
                    t = 0 === a ? function(e, t, r) {
                        for (var a = 0, n = e.length; t < n && a < 64 && 0 === e[t];) ++t, ++a;
                        return r.push(128 | a - 1), t
                    }(e, t, r) : a >= -128 && a <= 127 ? function(e, t, r) {
                        for (var a = 0, n = e.length, o = t; o < n && a < 64;) {
                            var s = e[o];
                            if (!W(s) || 0 === s && o + 1 < n && 0 === e[o + 1]) break;
                            ++o, ++a
                        }
                        r.push(a - 1);
                        for (var i = t; i < o; ++i) r.push(e[i] + 256 & 255);
                        return o
                    }(e, t, r) : function(e, t, r) {
                        for (var a = 0, n = e.length, o = t; o < n && a < 64;) {
                            var s = e[o];
                            if (0 === s || W(s) && o + 1 < n && W(e[o + 1])) break;
                            ++o, ++a
                        }
                        r.push(64 | a - 1);
                        for (var i = t; i < o; ++i) {
                            var u = e[i];
                            r.push(u + 65536 >> 8 & 255, u + 256 & 255)
                        }
                        return o
                    }(e, t, r)
                }
                return r
            }, F.INDEX = function(e) {
                for (var t = 1, r = [1], a = [], n = 0; n < e.length; n += 1) {
                    var o = F.OBJECT(e[n]);
                    Array.prototype.push.apply(a, o), t += o.length, r.push(t)
                }
                if (0 === a.length) return [0, 0];
                for (var s = [], i = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, u = [void 0, F.BYTE, F.USHORT, F.UINT24, F.ULONG][i], l = 0; l < r.length; l += 1) {
                    var p = u(r[l]);
                    Array.prototype.push.apply(s, p)
                }
                return Array.prototype.concat(F.Card16(e.length), F.OffSize(i), s, a)
            }, A.INDEX = function(e) {
                return F.INDEX(e).length
            }, F.DICT = function(e) {
                for (var t = [], r = Object.keys(e), a = r.length, n = 0; n < a; n += 1) {
                    var o = parseInt(r[n], 0),
                        s = e[o];
                    t = (t = t.concat(F.OPERAND(s.value, s.type))).concat(F.OPERATOR(o))
                }
                return t
            }, A.DICT = function(e) {
                return F.DICT(e).length
            }, F.OPERATOR = function(e) {
                return e < 1200 ? [e] : [12, e - 1200]
            }, F.OPERAND = function(e, t) {
                var r = [];
                if (Array.isArray(t))
                    for (var a = 0; a < t.length; a += 1) G.argument(e.length === t.length, "Not enough arguments given for type" + t), r = r.concat(F.OPERAND(e[a], t[a]));
                else if ("SID" === t) r = r.concat(F.NUMBER(e));
                else if ("offset" === t) r = r.concat(F.NUMBER32(e));
                else if ("number" === t) r = r.concat(F.NUMBER(e));
                else if ("real" === t) r = r.concat(F.REAL(e));
                else throw Error("Unknown operand type " + t);
                return r
            }, F.OP = F.BYTE, A.OP = A.BYTE;
            var _ = "function" == typeof WeakMap && new WeakMap;

            function q(e, t, r) {
                if (t.length && ("coverageFormat" !== t[0].name || 1 === t[0].value))
                    for (var a = 0; a < t.length; a += 1) {
                        var n = t[a];
                        this[n.name] = n.value
                    }
                if (this.tableName = e, this.fields = t, r)
                    for (var o = Object.keys(r), s = 0; s < o.length; s += 1) {
                        var i = o[s],
                            u = r[i];
                        void 0 !== this[i] && (this[i] = u)
                    }
            }

            function X(e, t, r) {
                void 0 === r && (r = t.length);
                var a = Array(t.length + 1);
                a[0] = {
                    name: e + "Count",
                    type: "USHORT",
                    value: r
                };
                for (var n = 0; n < t.length; n++) a[n + 1] = {
                    name: e + n,
                    type: "USHORT",
                    value: t[n]
                };
                return a
            }

            function V(e, t, r) {
                var a = t.length,
                    n = Array(a + 1);
                n[0] = {
                    name: e + "Count",
                    type: "USHORT",
                    value: a
                };
                for (var o = 0; o < a; o++) n[o + 1] = {
                    name: e + o,
                    type: "TABLE",
                    value: r(t[o], o)
                };
                return n
            }

            function Y(e, t, r) {
                var a = t.length,
                    n = [];
                n[0] = {
                    name: e + "Count",
                    type: "USHORT",
                    value: a
                };
                for (var o = 0; o < a; o++) n = n.concat(r(t[o], o));
                return n
            }

            function j(e) {
                1 === e.format ? q.call(this, "coverageTable", [{
                    name: "coverageFormat",
                    type: "USHORT",
                    value: 1
                }].concat(X("glyph", e.glyphs))) : 2 === e.format ? q.call(this, "coverageTable", [{
                    name: "coverageFormat",
                    type: "USHORT",
                    value: 2
                }].concat(Y("rangeRecord", e.ranges, function(e) {
                    return [{
                        name: "startGlyphID",
                        type: "USHORT",
                        value: e.start
                    }, {
                        name: "endGlyphID",
                        type: "USHORT",
                        value: e.end
                    }, {
                        name: "startCoverageIndex",
                        type: "USHORT",
                        value: e.index
                    }]
                }))) : G.assert(!1, "Coverage format must be 1 or 2.")
            }

            function Z(e) {
                q.call(this, "scriptListTable", Y("scriptRecord", e, function(e, t) {
                    var r = e.script,
                        a = r.defaultLangSys;
                    return G.assert(!!a, "Unable to write GSUB: script " + e.tag + " has no default language system."), [{
                        name: "scriptTag" + t,
                        type: "TAG",
                        value: e.tag
                    }, {
                        name: "script" + t,
                        type: "TABLE",
                        value: new q("scriptTable", [{
                            name: "defaultLangSys",
                            type: "TABLE",
                            value: new q("defaultLangSys", [{
                                name: "lookupOrder",
                                type: "USHORT",
                                value: 0
                            }, {
                                name: "reqFeatureIndex",
                                type: "USHORT",
                                value: a.reqFeatureIndex
                            }].concat(X("featureIndex", a.featureIndexes)))
                        }].concat(Y("langSys", r.langSysRecords, function(e, t) {
                            var r = e.langSys;
                            return [{
                                name: "langSysTag" + t,
                                type: "TAG",
                                value: e.tag
                            }, {
                                name: "langSys" + t,
                                type: "TABLE",
                                value: new q("langSys", [{
                                    name: "lookupOrder",
                                    type: "USHORT",
                                    value: 0
                                }, {
                                    name: "reqFeatureIndex",
                                    type: "USHORT",
                                    value: r.reqFeatureIndex
                                }].concat(X("featureIndex", r.featureIndexes)))
                            }]
                        })))
                    }]
                }))
            }

            function Q(e) {
                q.call(this, "featureListTable", Y("featureRecord", e, function(e, t) {
                    var r = e.feature;
                    return [{
                        name: "featureTag" + t,
                        type: "TAG",
                        value: e.tag
                    }, {
                        name: "feature" + t,
                        type: "TABLE",
                        value: new q("featureTable", [{
                            name: "featureParams",
                            type: "USHORT",
                            value: r.featureParams
                        }].concat(X("lookupListIndex", r.lookupListIndexes)))
                    }]
                }))
            }

            function K(e, t) {
                q.call(this, "lookupListTable", V("lookup", e, function(e) {
                    var r = t[e.lookupType];
                    return G.assert(!!r, "Unable to write GSUB lookup type " + e.lookupType + " tables."), new q("lookupTable", [{
                        name: "lookupType",
                        type: "USHORT",
                        value: e.lookupType
                    }, {
                        name: "lookupFlag",
                        type: "USHORT",
                        value: e.lookupFlag
                    }].concat(V("subtable", e.subtables, r)))
                }))
            }
            F.CHARSTRING = function(e) {
                if (_) {
                    var t = _.get(e);
                    if (void 0 !== t) return t
                }
                for (var r = [], a = e.length, n = 0; n < a; n += 1) {
                    var o = e[n];
                    r = r.concat(F[o.type](o.value))
                }
                return _ && _.set(e, r), r
            }, A.CHARSTRING = function(e) {
                return F.CHARSTRING(e).length
            }, F.OBJECT = function(e) {
                var t = F[e.type];
                return G.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value)
            }, A.OBJECT = function(e) {
                var t = A[e.type];
                return G.argument(void 0 !== t, "No sizeOf function for type " + e.type), t(e.value)
            }, F.TABLE = function(e) {
                for (var t = [], r = e.fields.length, a = [], n = [], o = 0; o < r; o += 1) {
                    var s = e.fields[o],
                        i = F[s.type];
                    G.argument(void 0 !== i, "No encoding function for field type " + s.type + " (" + s.name + ")");
                    var u = e[s.name];
                    void 0 === u && (u = s.value);
                    var l = i(u);
                    "TABLE" === s.type ? (n.push(t.length), t = t.concat([0, 0]), a.push(l)) : t = t.concat(l)
                }
                for (var p = 0; p < a.length; p += 1) {
                    var c = n[p],
                        h = t.length;
                    G.argument(h < 65536, "Table " + e.tableName + " too big."), t[c] = h >> 8, t[c + 1] = 255 & h, t = t.concat(a[p])
                }
                return t
            }, A.TABLE = function(e) {
                for (var t = 0, r = e.fields.length, a = 0; a < r; a += 1) {
                    var n = e.fields[a],
                        o = A[n.type];
                    G.argument(void 0 !== o, "No sizeOf function for field type " + n.type + " (" + n.name + ")");
                    var s = e[n.name];
                    void 0 === s && (s = n.value), t += o(s), "TABLE" === n.type && (t += 2)
                }
                return t
            }, F.RECORD = F.TABLE, A.RECORD = A.TABLE, F.LITERAL = function(e) {
                return e
            }, A.LITERAL = function(e) {
                return e.length
            }, q.prototype.encode = function() {
                return F.TABLE(this)
            }, q.prototype.sizeOf = function() {
                return A.TABLE(this)
            }, j.prototype = Object.create(q.prototype), j.prototype.constructor = j, Z.prototype = Object.create(q.prototype), Z.prototype.constructor = Z, Q.prototype = Object.create(q.prototype), Q.prototype.constructor = Q, K.prototype = Object.create(q.prototype), K.prototype.constructor = K;
            var J = {
                Table: q,
                Record: q,
                Coverage: j,
                ScriptList: Z,
                FeatureList: Q,
                LookupList: K,
                ushortList: X,
                tableList: V,
                recordList: Y
            };

            function $(e, t) {
                return e.getUint8(t)
            }

            function ee(e, t) {
                return e.getUint16(t, !1)
            }

            function et(e, t) {
                return e.getUint32(t, !1)
            }

            function er(e, t) {
                return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535
            }
            var ea = {
                byte: 1,
                uShort: 2,
                short: 2,
                uLong: 4,
                fixed: 4,
                longDateTime: 8,
                tag: 4
            };

            function en(e, t) {
                this.data = e, this.offset = t, this.relativeOffset = 0
            }
            en.prototype.parseByte = function() {
                var e = this.data.getUint8(this.offset + this.relativeOffset);
                return this.relativeOffset += 1, e
            }, en.prototype.parseChar = function() {
                var e = this.data.getInt8(this.offset + this.relativeOffset);
                return this.relativeOffset += 1, e
            }, en.prototype.parseCard8 = en.prototype.parseByte, en.prototype.parseUShort = function() {
                var e = this.data.getUint16(this.offset + this.relativeOffset);
                return this.relativeOffset += 2, e
            }, en.prototype.parseCard16 = en.prototype.parseUShort, en.prototype.parseSID = en.prototype.parseUShort, en.prototype.parseOffset16 = en.prototype.parseUShort, en.prototype.parseShort = function() {
                var e = this.data.getInt16(this.offset + this.relativeOffset);
                return this.relativeOffset += 2, e
            }, en.prototype.parseF2Dot14 = function() {
                var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
                return this.relativeOffset += 2, e
            }, en.prototype.parseULong = function() {
                var e = et(this.data, this.offset + this.relativeOffset);
                return this.relativeOffset += 4, e
            }, en.prototype.parseOffset32 = en.prototype.parseULong, en.prototype.parseFixed = function() {
                var e = er(this.data, this.offset + this.relativeOffset);
                return this.relativeOffset += 4, e
            }, en.prototype.parseString = function(e) {
                var t = this.data,
                    r = this.offset + this.relativeOffset,
                    a = "";
                this.relativeOffset += e;
                for (var n = 0; n < e; n++) a += String.fromCharCode(t.getUint8(r + n));
                return a
            }, en.prototype.parseTag = function() {
                return this.parseString(4)
            }, en.prototype.parseLongDateTime = function() {
                var e = et(this.data, this.offset + this.relativeOffset + 4);
                return e -= 2082844800, this.relativeOffset += 8, e
            }, en.prototype.parseVersion = function(e) {
                var t = ee(this.data, this.offset + this.relativeOffset),
                    r = ee(this.data, this.offset + this.relativeOffset + 2);
                return this.relativeOffset += 4, void 0 === e && (e = 4096), t + r / e / 10
            }, en.prototype.skip = function(e, t) {
                void 0 === t && (t = 1), this.relativeOffset += ea[e] * t
            }, en.prototype.parseULongList = function(e) {
                void 0 === e && (e = this.parseULong());
                for (var t = Array(e), r = this.data, a = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint32(a), a += 4;
                return this.relativeOffset += 4 * e, t
            }, en.prototype.parseOffset16List = en.prototype.parseUShortList = function(e) {
                void 0 === e && (e = this.parseUShort());
                for (var t = Array(e), r = this.data, a = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint16(a), a += 2;
                return this.relativeOffset += 2 * e, t
            }, en.prototype.parseShortList = function(e) {
                for (var t = Array(e), r = this.data, a = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getInt16(a), a += 2;
                return this.relativeOffset += 2 * e, t
            }, en.prototype.parseByteList = function(e) {
                for (var t = Array(e), r = this.data, a = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint8(a++);
                return this.relativeOffset += e, t
            }, en.prototype.parseList = function(e, t) {
                t || (t = e, e = this.parseUShort());
                for (var r = Array(e), a = 0; a < e; a++) r[a] = t.call(this);
                return r
            }, en.prototype.parseList32 = function(e, t) {
                t || (t = e, e = this.parseULong());
                for (var r = Array(e), a = 0; a < e; a++) r[a] = t.call(this);
                return r
            }, en.prototype.parseRecordList = function(e, t) {
                t || (t = e, e = this.parseUShort());
                for (var r = Array(e), a = Object.keys(t), n = 0; n < e; n++) {
                    for (var o = {}, s = 0; s < a.length; s++) {
                        var i = a[s],
                            u = t[i];
                        o[i] = u.call(this)
                    }
                    r[n] = o
                }
                return r
            }, en.prototype.parseRecordList32 = function(e, t) {
                t || (t = e, e = this.parseULong());
                for (var r = Array(e), a = Object.keys(t), n = 0; n < e; n++) {
                    for (var o = {}, s = 0; s < a.length; s++) {
                        var i = a[s],
                            u = t[i];
                        o[i] = u.call(this)
                    }
                    r[n] = o
                }
                return r
            }, en.prototype.parseStruct = function(e) {
                if ("function" == typeof e) return e.call(this);
                for (var t = Object.keys(e), r = {}, a = 0; a < t.length; a++) {
                    var n = t[a],
                        o = e[n];
                    r[n] = o.call(this)
                }
                return r
            }, en.prototype.parseValueRecord = function(e) {
                if (void 0 === e && (e = this.parseUShort()), 0 !== e) {
                    var t = {};
                    return 1 & e && (t.xPlacement = this.parseShort()), 2 & e && (t.yPlacement = this.parseShort()), 4 & e && (t.xAdvance = this.parseShort()), 8 & e && (t.yAdvance = this.parseShort()), 16 & e && (t.xPlaDevice = void 0, this.parseShort()), 32 & e && (t.yPlaDevice = void 0, this.parseShort()), 64 & e && (t.xAdvDevice = void 0, this.parseShort()), 128 & e && (t.yAdvDevice = void 0, this.parseShort()), t
                }
            }, en.prototype.parseValueRecordList = function() {
                for (var e = this.parseUShort(), t = this.parseUShort(), r = Array(t), a = 0; a < t; a++) r[a] = this.parseValueRecord(e);
                return r
            }, en.prototype.parsePointer = function(e) {
                var t = this.parseOffset16();
                if (t > 0) return new en(this.data, this.offset + t).parseStruct(e)
            }, en.prototype.parsePointer32 = function(e) {
                var t = this.parseOffset32();
                if (t > 0) return new en(this.data, this.offset + t).parseStruct(e)
            }, en.prototype.parseListOfLists = function(e) {
                for (var t = this.parseOffset16List(), r = t.length, a = this.relativeOffset, n = Array(r), o = 0; o < r; o++) {
                    var s = t[o];
                    if (0 === s) {
                        n[o] = void 0;
                        continue
                    }
                    if (this.relativeOffset = s, e) {
                        for (var i = this.parseOffset16List(), u = Array(i.length), l = 0; l < i.length; l++) this.relativeOffset = s + i[l], u[l] = e.call(this);
                        n[o] = u
                    } else n[o] = this.parseUShortList()
                }
                return this.relativeOffset = a, n
            }, en.prototype.parseCoverage = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort(),
                    r = this.parseUShort();
                if (1 === t) return {
                    format: 1,
                    glyphs: this.parseUShortList(r)
                };
                if (2 === t) {
                    for (var a = Array(r), n = 0; n < r; n++) a[n] = {
                        start: this.parseUShort(),
                        end: this.parseUShort(),
                        index: this.parseUShort()
                    };
                    return {
                        format: 2,
                        ranges: a
                    }
                }
                throw Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.")
            }, en.prototype.parseClassDef = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                if (1 === t) return {
                    format: 1,
                    startGlyph: this.parseUShort(),
                    classes: this.parseUShortList()
                };
                if (2 === t) return {
                    format: 2,
                    ranges: this.parseRecordList({
                        start: en.uShort,
                        end: en.uShort,
                        classId: en.uShort
                    })
                };
                throw Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.")
            }, en.list = function(e, t) {
                return function() {
                    return this.parseList(e, t)
                }
            }, en.list32 = function(e, t) {
                return function() {
                    return this.parseList32(e, t)
                }
            }, en.recordList = function(e, t) {
                return function() {
                    return this.parseRecordList(e, t)
                }
            }, en.recordList32 = function(e, t) {
                return function() {
                    return this.parseRecordList32(e, t)
                }
            }, en.pointer = function(e) {
                return function() {
                    return this.parsePointer(e)
                }
            }, en.pointer32 = function(e) {
                return function() {
                    return this.parsePointer32(e)
                }
            }, en.tag = en.prototype.parseTag, en.byte = en.prototype.parseByte, en.uShort = en.offset16 = en.prototype.parseUShort, en.uShortList = en.prototype.parseUShortList, en.uLong = en.offset32 = en.prototype.parseULong, en.uLongList = en.prototype.parseULongList, en.struct = en.prototype.parseStruct, en.coverage = en.prototype.parseCoverage, en.classDef = en.prototype.parseClassDef;
            var eo = {
                reserved: en.uShort,
                reqFeatureIndex: en.uShort,
                featureIndexes: en.uShortList
            };
            en.prototype.parseScriptList = function() {
                return this.parsePointer(en.recordList({
                    tag: en.tag,
                    script: en.pointer({
                        defaultLangSys: en.pointer(eo),
                        langSysRecords: en.recordList({
                            tag: en.tag,
                            langSys: en.pointer(eo)
                        })
                    })
                })) || []
            }, en.prototype.parseFeatureList = function() {
                return this.parsePointer(en.recordList({
                    tag: en.tag,
                    feature: en.pointer({
                        featureParams: en.offset16,
                        lookupListIndexes: en.uShortList
                    })
                })) || []
            }, en.prototype.parseLookupList = function(e) {
                return this.parsePointer(en.list(en.pointer(function() {
                    var t = this.parseUShort();
                    G.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
                    var r = this.parseUShort();
                    return {
                        lookupType: t,
                        lookupFlag: r,
                        subtables: this.parseList(en.pointer(e[t])),
                        markFilteringSet: 16 & r ? this.parseUShort() : void 0
                    }
                }))) || []
            }, en.prototype.parseFeatureVariationsList = function() {
                return this.parsePointer32(function() {
                    var e = this.parseUShort(),
                        t = this.parseUShort();
                    return G.argument(1 === e && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({
                        conditionSetOffset: en.offset32,
                        featureTableSubstitutionOffset: en.offset32
                    })
                }) || []
            };
            var es = {
                    getByte: $,
                    getCard8: $,
                    getUShort: ee,
                    getCard16: ee,
                    getShort: function(e, t) {
                        return e.getInt16(t, !1)
                    },
                    getULong: et,
                    getFixed: er,
                    getTag: function(e, t) {
                        for (var r = "", a = t; a < t + 4; a += 1) r += String.fromCharCode(e.getInt8(a));
                        return r
                    },
                    getOffset: function(e, t, r) {
                        for (var a = 0, n = 0; n < r; n += 1) a <<= 8, a += e.getUint8(t + n);
                        return a
                    },
                    getBytes: function(e, t, r) {
                        for (var a = [], n = t; n < r; n += 1) a.push(e.getUint8(n));
                        return a
                    },
                    bytesToString: function(e) {
                        for (var t = "", r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);
                        return t
                    },
                    Parser: en
                },
                ei = {
                    parse: function(e, t) {
                        var r = {};
                        r.version = es.getUShort(e, t), G.argument(0 === r.version, "cmap table version should be 0."), r.numTables = es.getUShort(e, t + 2);
                        for (var a = -1, n = r.numTables - 1; n >= 0; n -= 1) {
                            var o = es.getUShort(e, t + 4 + 8 * n),
                                s = es.getUShort(e, t + 4 + 8 * n + 2);
                            if (3 === o && (0 === s || 1 === s || 10 === s) || 0 === o && (0 === s || 1 === s || 2 === s || 3 === s || 4 === s)) {
                                a = es.getULong(e, t + 4 + 8 * n + 4);
                                break
                            }
                        }
                        if (-1 === a) throw Error("No valid cmap sub-tables found.");
                        var i = new es.Parser(e, t + a);
                        if (r.format = i.parseUShort(), 12 === r.format) ! function(e, t) {
                            t.parseUShort(), e.length = t.parseULong(), e.language = t.parseULong(), e.groupCount = r = t.parseULong(), e.glyphIndexMap = {};
                            for (var r, a = 0; a < r; a += 1)
                                for (var n = t.parseULong(), o = t.parseULong(), s = t.parseULong(), i = n; i <= o; i += 1) e.glyphIndexMap[i] = s, s++
                        }(r, i);
                        else if (4 === r.format) ! function(e, t, r, a, n) {
                            e.length = t.parseUShort(), e.language = t.parseUShort(), e.segCount = o = t.parseUShort() >> 1, t.skip("uShort", 3), e.glyphIndexMap = {};
                            for (var o, s = new es.Parser(r, a + n + 14), i = new es.Parser(r, a + n + 16 + 2 * o), u = new es.Parser(r, a + n + 16 + 4 * o), l = new es.Parser(r, a + n + 16 + 6 * o), p = a + n + 16 + 8 * o, c = 0; c < o - 1; c += 1)
                                for (var h = void 0, f = s.parseUShort(), d = i.parseUShort(), g = u.parseShort(), v = l.parseUShort(), m = d; m <= f; m += 1) 0 !== v ? (p = l.offset + l.relativeOffset - 2 + v + (m - d) * 2, 0 !== (h = es.getUShort(r, p)) && (h = h + g & 65535)) : h = m + g & 65535, e.glyphIndexMap[m] = h
                        }(r, i, e, t, a);
                        else throw Error("Only format 4 and 12 cmap tables are supported (found format " + r.format + ").");
                        return r
                    },
                    make: function(e) {
                        var t, r = !0;
                        for (t = e.length - 1; t > 0; t -= 1)
                            if (e.get(t).unicode > 65535) {
                                console.log("Adding CMAP format 12 (needed!)"), r = !1;
                                break
                            }
                        var a = [{
                            name: "version",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "numTables",
                            type: "USHORT",
                            value: r ? 1 : 2
                        }, {
                            name: "platformID",
                            type: "USHORT",
                            value: 3
                        }, {
                            name: "encodingID",
                            type: "USHORT",
                            value: 1
                        }, {
                            name: "offset",
                            type: "ULONG",
                            value: r ? 12 : 20
                        }];
                        r || (a = a.concat([{
                            name: "cmap12PlatformID",
                            type: "USHORT",
                            value: 3
                        }, {
                            name: "cmap12EncodingID",
                            type: "USHORT",
                            value: 10
                        }, {
                            name: "cmap12Offset",
                            type: "ULONG",
                            value: 0
                        }])), a = a.concat([{
                            name: "format",
                            type: "USHORT",
                            value: 4
                        }, {
                            name: "cmap4Length",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "language",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "segCountX2",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "searchRange",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "entrySelector",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "rangeShift",
                            type: "USHORT",
                            value: 0
                        }]);
                        var n = new J.Table("cmap", a);
                        for (t = 0, n.segments = []; t < e.length; t += 1) {
                            for (var o = e.get(t), s = 0; s < o.unicodes.length; s += 1) ! function(e, t, r) {
                                e.segments.push({
                                    end: t,
                                    start: t,
                                    delta: -(t - r),
                                    offset: 0,
                                    glyphIndex: r
                                })
                            }(n, o.unicodes[s], t);
                            n.segments = n.segments.sort(function(e, t) {
                                return e.start - t.start
                            })
                        }! function(e) {
                            e.segments.push({
                                end: 65535,
                                start: 65535,
                                delta: 1,
                                offset: 0
                            })
                        }(n);
                        var i = n.segments.length,
                            u = 0,
                            l = [],
                            p = [],
                            c = [],
                            h = [],
                            f = [],
                            d = [];
                        for (t = 0; t < i; t += 1) {
                            var g = n.segments[t];
                            g.end <= 65535 && g.start <= 65535 ? (l = l.concat({
                                name: "end_" + t,
                                type: "USHORT",
                                value: g.end
                            }), p = p.concat({
                                name: "start_" + t,
                                type: "USHORT",
                                value: g.start
                            }), c = c.concat({
                                name: "idDelta_" + t,
                                type: "SHORT",
                                value: g.delta
                            }), h = h.concat({
                                name: "idRangeOffset_" + t,
                                type: "USHORT",
                                value: g.offset
                            }), void 0 !== g.glyphId && (f = f.concat({
                                name: "glyph_" + t,
                                type: "USHORT",
                                value: g.glyphId
                            }))) : u += 1, r || void 0 === g.glyphIndex || (d = (d = (d = d.concat({
                                name: "cmap12Start_" + t,
                                type: "ULONG",
                                value: g.start
                            })).concat({
                                name: "cmap12End_" + t,
                                type: "ULONG",
                                value: g.end
                            })).concat({
                                name: "cmap12Glyph_" + t,
                                type: "ULONG",
                                value: g.glyphIndex
                            }))
                        }
                        if (n.segCountX2 = (i - u) * 2, n.searchRange = 2 * Math.pow(2, Math.floor(Math.log(i - u) / Math.log(2))), n.entrySelector = Math.log(n.searchRange / 2) / Math.log(2), n.rangeShift = n.segCountX2 - n.searchRange, n.fields = n.fields.concat(l), n.fields.push({
                                name: "reservedPad",
                                type: "USHORT",
                                value: 0
                            }), n.fields = n.fields.concat(p), n.fields = n.fields.concat(c), n.fields = n.fields.concat(h), n.fields = n.fields.concat(f), n.cmap4Length = 14 + 2 * l.length + 2 + 2 * p.length + 2 * c.length + 2 * h.length + 2 * f.length, !r) {
                            var v = 16 + 4 * d.length;
                            n.cmap12Offset = 20 + n.cmap4Length, n.fields = n.fields.concat([{
                                name: "cmap12Format",
                                type: "USHORT",
                                value: 12
                            }, {
                                name: "cmap12Reserved",
                                type: "USHORT",
                                value: 0
                            }, {
                                name: "cmap12Length",
                                type: "ULONG",
                                value: v
                            }, {
                                name: "cmap12Language",
                                type: "ULONG",
                                value: 0
                            }, {
                                name: "cmap12nGroups",
                                type: "ULONG",
                                value: d.length / 3
                            }]), n.fields = n.fields.concat(d)
                        }
                        return n
                    }
                },
                eu = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
                el = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
                ep = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
                ec = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];

            function eh(e) {
                this.font = e
            }

            function ef(e) {
                this.cmap = e
            }

            function ed(e, t) {
                this.encoding = e, this.charset = t
            }

            function eg(e) {
                switch (e.version) {
                    case 1:
                        this.names = ec.slice();
                        break;
                    case 2:
                        this.names = Array(e.numberOfGlyphs);
                        for (var t = 0; t < e.numberOfGlyphs; t++) e.glyphNameIndex[t] < ec.length ? this.names[t] = ec[e.glyphNameIndex[t]] : this.names[t] = e.names[e.glyphNameIndex[t] - ec.length];
                        break;
                    case 2.5:
                        this.names = Array(e.numberOfGlyphs);
                        for (var r = 0; r < e.numberOfGlyphs; r++) this.names[r] = ec[r + e.glyphNameIndex[r]];
                        break;
                    default:
                        this.names = []
                }
            }
            eh.prototype.charToGlyphIndex = function(e) {
                var t = e.codePointAt(0),
                    r = this.font.glyphs;
                if (r) {
                    for (var a = 0; a < r.length; a += 1)
                        for (var n = r.get(a), o = 0; o < n.unicodes.length; o += 1)
                            if (n.unicodes[o] === t) return a
                }
                return null
            }, ef.prototype.charToGlyphIndex = function(e) {
                return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0
            }, ed.prototype.charToGlyphIndex = function(e) {
                var t = e.codePointAt(0),
                    r = this.encoding[t];
                return this.charset.indexOf(r)
            }, eg.prototype.nameToGlyphIndex = function(e) {
                return this.names.indexOf(e)
            }, eg.prototype.glyphIndexToName = function(e) {
                return this.names[e]
            };
            var ev = {
                line: function(e, t, r, a, n) {
                    e.beginPath(), e.moveTo(t, r), e.lineTo(a, n), e.stroke()
                }
            };

            function em(e) {
                this.bindConstructorValues(e)
            }

            function ey(e, t, r) {
                Object.defineProperty(e, t, {
                    get: function() {
                        return e.path, e[r]
                    },
                    set: function(t) {
                        e[r] = t
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }

            function ex(e, t) {
                if (this.font = e, this.glyphs = {}, Array.isArray(t))
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        a.path.unitsPerEm = e.unitsPerEm, this.glyphs[r] = a
                    }
                this.length = t && t.length || 0
            }
            em.prototype.bindConstructorValues = function(e) {
                var t;
                this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : [], "xMin" in e && (this.xMin = e.xMin), "yMin" in e && (this.yMin = e.yMin), "xMax" in e && (this.xMax = e.xMax), "yMax" in e && (this.yMax = e.yMax), "advanceWidth" in e && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", (t = e.path || new w, {
                    configurable: !0,
                    get: function() {
                        return "function" == typeof t && (t = t()), t
                    },
                    set: function(e) {
                        t = e
                    }
                }))
            }, em.prototype.addUnicode = function(e) {
                0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e)
            }, em.prototype.getBoundingBox = function() {
                return this.path.getBoundingBox()
            }, em.prototype.getPath = function(e, t, r, a, n) {
                e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 72, a || (a = {});
                var o, s, i = a.xScale,
                    u = a.yScale;
                if (a.hinting && n && n.hinting && (s = this.path && n.hinting.exec(this, r)), s) o = n.hinting.getCommands(s), e = Math.round(e), t = Math.round(t), i = u = 1;
                else {
                    o = this.path.commands;
                    var l = 1 / (this.path.unitsPerEm || 1e3) * r;
                    void 0 === i && (i = l), void 0 === u && (u = l)
                }
                for (var p = new w, c = 0; c < o.length; c += 1) {
                    var h = o[c];
                    "M" === h.type ? p.moveTo(e + h.x * i, t + -h.y * u) : "L" === h.type ? p.lineTo(e + h.x * i, t + -h.y * u) : "Q" === h.type ? p.quadraticCurveTo(e + h.x1 * i, t + -h.y1 * u, e + h.x * i, t + -h.y * u) : "C" === h.type ? p.curveTo(e + h.x1 * i, t + -h.y1 * u, e + h.x2 * i, t + -h.y2 * u, e + h.x * i, t + -h.y * u) : "Z" === h.type && p.closePath()
                }
                return p
            }, em.prototype.getContours = function() {
                if (void 0 === this.points) return [];
                for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
                    var a = this.points[r];
                    t.push(a), a.lastPointOfContour && (e.push(t), t = [])
                }
                return G.argument(0 === t.length, "There are still points left in the current contour."), e
            }, em.prototype.getMetrics = function() {
                for (var e = this.path.commands, t = [], r = [], a = 0; a < e.length; a += 1) {
                    var n = e[a];
                    "Z" !== n.type && (t.push(n.x), r.push(n.y)), ("Q" === n.type || "C" === n.type) && (t.push(n.x1), r.push(n.y1)), "C" === n.type && (t.push(n.x2), r.push(n.y2))
                }
                var o = {
                    xMin: Math.min.apply(null, t),
                    yMin: Math.min.apply(null, r),
                    xMax: Math.max.apply(null, t),
                    yMax: Math.max.apply(null, r),
                    leftSideBearing: this.leftSideBearing
                };
                return isFinite(o.xMin) || (o.xMin = 0), isFinite(o.xMax) || (o.xMax = this.advanceWidth), isFinite(o.yMin) || (o.yMin = 0), isFinite(o.yMax) || (o.yMax = 0), o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin), o
            }, em.prototype.draw = function(e, t, r, a, n) {
                this.getPath(t, r, a, n).draw(e)
            }, em.prototype.drawPoints = function(e, t, r, a) {
                function n(t, r, a, n) {
                    e.beginPath();
                    for (var o = 0; o < t.length; o += 1) e.moveTo(r + t[o].x * n, a + t[o].y * n), e.arc(r + t[o].x * n, a + t[o].y * n, 2, 0, 2 * Math.PI, !1);
                    e.closePath(), e.fill()
                }
                t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 24;
                for (var o = 1 / this.path.unitsPerEm * a, s = [], i = [], u = this.path, l = 0; l < u.commands.length; l += 1) {
                    var p = u.commands[l];
                    void 0 !== p.x && s.push({
                        x: p.x,
                        y: -p.y
                    }), void 0 !== p.x1 && i.push({
                        x: p.x1,
                        y: -p.y1
                    }), void 0 !== p.x2 && i.push({
                        x: p.x2,
                        y: -p.y2
                    })
                }
                e.fillStyle = "blue", n(s, t, r, o), e.fillStyle = "red", n(i, t, r, o)
            }, em.prototype.drawMetrics = function(e, t, r, a) {
                t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 24, n = 1 / this.path.unitsPerEm * a, e.lineWidth = 1, e.strokeStyle = "black", ev.line(e, t, -1e4, t, 1e4), ev.line(e, -1e4, r, 1e4, r);
                var n, o = this.xMin || 0,
                    s = this.yMin || 0,
                    i = this.xMax || 0,
                    u = this.yMax || 0,
                    l = this.advanceWidth || 0;
                e.strokeStyle = "blue", ev.line(e, t + o * n, -1e4, t + o * n, 1e4), ev.line(e, t + i * n, -1e4, t + i * n, 1e4), ev.line(e, -1e4, r + -s * n, 1e4, r + -s * n), ev.line(e, -1e4, r + -u * n, 1e4, r + -u * n), e.strokeStyle = "green", ev.line(e, t + l * n, -1e4, t + l * n, 1e4)
            }, ex.prototype.get = function(e) {
                if (void 0 === this.glyphs[e]) {
                    this.font._push(e), "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]());
                    var t = this.glyphs[e],
                        r = this.font._IndexToUnicodeMap[e];
                    if (r)
                        for (var a = 0; a < r.unicodes.length; a++) t.addUnicode(r.unicodes[a]);
                    this.font.cffEncoding ? this.font.isCIDFont ? t.name = "gid" + e : t.name = this.font.cffEncoding.charset[e] : this.font.glyphNames.names && (t.name = this.font.glyphNames.glyphIndexToName(e)), this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth, this.glyphs[e].leftSideBearing = this.font._hmtxTableData[e].leftSideBearing
                } else "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]());
                return this.glyphs[e]
            }, ex.prototype.push = function(e, t) {
                this.glyphs[e] = t, this.length++
            };
            var eb = {
                GlyphSet: ex,
                glyphLoader: function(e, t) {
                    return new em({
                        index: t,
                        font: e
                    })
                },
                ttfGlyphLoader: function(e, t, r, a, n, o) {
                    return function() {
                        var s = new em({
                            index: t,
                            font: e
                        });
                        return s.path = function() {
                            r(s, a, n);
                            var t = o(e.glyphs, s);
                            return t.unitsPerEm = e.unitsPerEm, t
                        }, ey(s, "xMin", "_xMin"), ey(s, "xMax", "_xMax"), ey(s, "yMin", "_yMin"), ey(s, "yMax", "_yMax"), s
                    }
                },
                cffGlyphLoader: function(e, t, r, a) {
                    return function() {
                        var n = new em({
                            index: t,
                            font: e
                        });
                        return n.path = function() {
                            var t = r(e, n, a);
                            return t.unitsPerEm = e.unitsPerEm, t
                        }, n
                    }
                }
            };

            function eS(e) {
                return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768
            }

            function eT(e, t, r) {
                var a, n, o = [],
                    s = [],
                    i = es.getCard16(e, t);
                if (0 !== i) {
                    var u = es.getByte(e, t + 2);
                    a = t + (i + 1) * u + 2;
                    for (var l = t + 3, p = 0; p < i + 1; p += 1) o.push(es.getOffset(e, l, u)), l += u;
                    n = a + o[i]
                } else n = t + 2;
                for (var c = 0; c < o.length - 1; c += 1) {
                    var h = es.getBytes(e, a + o[c], a + o[c + 1]);
                    r && (h = r(h)), s.push(h)
                }
                return {
                    objects: s,
                    startOffset: t,
                    endOffset: n
                }
            }

            function ek(e, t, r) {
                t = void 0 !== t ? t : 0;
                var a = new es.Parser(e, t),
                    n = [],
                    o = [];
                for (r = void 0 !== r ? r : e.length; a.relativeOffset < r;) {
                    var s = a.parseByte();
                    s <= 21 ? (12 === s && (s = 1200 + a.parseByte()), n.push([s, o]), o = []) : o.push(function(e, t) {
                        var r, a;
                        if (28 === t) return (r = e.parseByte()) << 8 | (a = e.parseByte());
                        if (29 === t) return r = e.parseByte(), r << 24 | (a = e.parseByte()) << 16 | e.parseByte() << 8 | e.parseByte();
                        if (30 === t) return function(e) {
                            for (var t = "", r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) {
                                var a = e.parseByte(),
                                    n = a >> 4,
                                    o = 15 & a;
                                if (15 === n || (t += r[n], 15 === o)) break;
                                t += r[o]
                            }
                            return parseFloat(t)
                        }(e);
                        if (t >= 32 && t <= 246) return t - 139;
                        if (t >= 247 && t <= 250) return (t - 247) * 256 + (r = e.parseByte()) + 108;
                        if (t >= 251 && t <= 254) return -(256 * (t - 251)) - (r = e.parseByte()) - 108;
                        throw Error("Invalid b0 " + t)
                    }(a, s))
                }
                return function(e) {
                    for (var t = {}, r = 0; r < e.length; r += 1) {
                        var a = e[r][0],
                            n = e[r][1],
                            o = void 0;
                        if (o = 1 === n.length ? n[0] : n, t.hasOwnProperty(a) && !isNaN(t[a])) throw Error("Object " + t + " already has key " + a);
                        t[a] = o
                    }
                    return t
                }(n)
            }

            function eU(e, t) {
                return t = t <= 390 ? eu[t] : e[t - 391]
            }

            function eO(e, t, r) {
                for (var a, n = {}, o = 0; o < t.length; o += 1) {
                    var s = t[o];
                    if (Array.isArray(s.type)) {
                        var i = [];
                        i.length = s.type.length;
                        for (var u = 0; u < s.type.length; u++) void 0 === (a = void 0 !== e[s.op] ? e[s.op][u] : void 0) && (a = void 0 !== s.value && void 0 !== s.value[u] ? s.value[u] : null), "SID" === s.type[u] && (a = eU(r, a)), i[u] = a;
                        n[s.name] = i
                    } else void 0 === (a = e[s.op]) && (a = void 0 !== s.value ? s.value : null), "SID" === s.type && (a = eU(r, a)), n[s.name] = a
                }
                return n
            }
            var eE = [{
                    name: "version",
                    op: 0,
                    type: "SID"
                }, {
                    name: "notice",
                    op: 1,
                    type: "SID"
                }, {
                    name: "copyright",
                    op: 1200,
                    type: "SID"
                }, {
                    name: "fullName",
                    op: 2,
                    type: "SID"
                }, {
                    name: "familyName",
                    op: 3,
                    type: "SID"
                }, {
                    name: "weight",
                    op: 4,
                    type: "SID"
                }, {
                    name: "isFixedPitch",
                    op: 1201,
                    type: "number",
                    value: 0
                }, {
                    name: "italicAngle",
                    op: 1202,
                    type: "number",
                    value: 0
                }, {
                    name: "underlinePosition",
                    op: 1203,
                    type: "number",
                    value: -100
                }, {
                    name: "underlineThickness",
                    op: 1204,
                    type: "number",
                    value: 50
                }, {
                    name: "paintType",
                    op: 1205,
                    type: "number",
                    value: 0
                }, {
                    name: "charstringType",
                    op: 1206,
                    type: "number",
                    value: 2
                }, {
                    name: "fontMatrix",
                    op: 1207,
                    type: ["real", "real", "real", "real", "real", "real"],
                    value: [.001, 0, 0, .001, 0, 0]
                }, {
                    name: "uniqueId",
                    op: 13,
                    type: "number"
                }, {
                    name: "fontBBox",
                    op: 5,
                    type: ["number", "number", "number", "number"],
                    value: [0, 0, 0, 0]
                }, {
                    name: "strokeWidth",
                    op: 1208,
                    type: "number",
                    value: 0
                }, {
                    name: "xuid",
                    op: 14,
                    type: [],
                    value: null
                }, {
                    name: "charset",
                    op: 15,
                    type: "offset",
                    value: 0
                }, {
                    name: "encoding",
                    op: 16,
                    type: "offset",
                    value: 0
                }, {
                    name: "charStrings",
                    op: 17,
                    type: "offset",
                    value: 0
                }, {
                    name: "private",
                    op: 18,
                    type: ["number", "offset"],
                    value: [0, 0]
                }, {
                    name: "ros",
                    op: 1230,
                    type: ["SID", "SID", "number"]
                }, {
                    name: "cidFontVersion",
                    op: 1231,
                    type: "number",
                    value: 0
                }, {
                    name: "cidFontRevision",
                    op: 1232,
                    type: "number",
                    value: 0
                }, {
                    name: "cidFontType",
                    op: 1233,
                    type: "number",
                    value: 0
                }, {
                    name: "cidCount",
                    op: 1234,
                    type: "number",
                    value: 8720
                }, {
                    name: "uidBase",
                    op: 1235,
                    type: "number"
                }, {
                    name: "fdArray",
                    op: 1236,
                    type: "offset"
                }, {
                    name: "fdSelect",
                    op: 1237,
                    type: "offset"
                }, {
                    name: "fontName",
                    op: 1238,
                    type: "SID"
                }],
                eR = [{
                    name: "subrs",
                    op: 19,
                    type: "offset",
                    value: 0
                }, {
                    name: "defaultWidthX",
                    op: 20,
                    type: "number",
                    value: 0
                }, {
                    name: "nominalWidthX",
                    op: 21,
                    type: "number",
                    value: 0
                }];

            function eL(e, t, r, a) {
                for (var n = [], o = 0; o < r.length; o += 1) {
                    var s = eO(ek(l = new DataView(new Uint8Array(r[o]).buffer), 0, l.byteLength), eE, a);
                    s._subrs = [], s._subrsBias = 0, s._defaultWidthX = 0, s._nominalWidthX = 0;
                    var i = s.private[0],
                        u = s.private[1];
                    if (0 !== i && 0 !== u) {
                        var l, p = eO(ek(e, u + t, i), eR, a);
                        if (s._defaultWidthX = p.defaultWidthX, s._nominalWidthX = p.nominalWidthX, 0 !== p.subrs) {
                            var c = u + p.subrs,
                                h = eT(e, c + t);
                            s._subrs = h.objects, s._subrsBias = eS(s._subrs)
                        }
                        s._privateDict = p
                    }
                    n.push(s)
                }
                return n
            }

            function eC(e, t, r) {
                var a, n, o, s, i, u, l, p, c = new w,
                    h = [],
                    f = 0,
                    d = !1,
                    g = !1,
                    v = 0,
                    m = 0;
                if (e.isCIDFont) {
                    var y = e.tables.cff.topDict._fdSelect[t.index],
                        x = e.tables.cff.topDict._fdArray[y];
                    i = x._subrs, u = x._subrsBias, l = x._defaultWidthX, p = x._nominalWidthX
                } else i = e.tables.cff.topDict._subrs, u = e.tables.cff.topDict._subrsBias, l = e.tables.cff.topDict._defaultWidthX, p = e.tables.cff.topDict._nominalWidthX;
                var b = l;

                function S(e, t) {
                    g && c.closePath(), c.moveTo(e, t), g = !0
                }

                function T() {
                    h.length % 2 == 0 || d || (b = h.shift() + p), f += h.length >> 1, h.length = 0, d = !0
                }
                return ! function r(l) {
                    for (var y, x, k, U, O, E, R, L, C, D, w, I, M = 0; M < l.length;) {
                        var G = l[M];
                        switch (M += 1, G) {
                            case 1:
                            case 3:
                            case 18:
                            case 23:
                                T();
                                break;
                            case 4:
                                h.length > 1 && !d && (b = h.shift() + p, d = !0), S(v, m += h.pop());
                                break;
                            case 5:
                                for (; h.length > 0;) v += h.shift(), m += h.shift(), c.lineTo(v, m);
                                break;
                            case 6:
                                for (; h.length > 0 && (v += h.shift(), c.lineTo(v, m), 0 !== h.length);) m += h.shift(), c.lineTo(v, m);
                                break;
                            case 7:
                                for (; h.length > 0 && (m += h.shift(), c.lineTo(v, m), 0 !== h.length);) v += h.shift(), c.lineTo(v, m);
                                break;
                            case 8:
                                for (; h.length > 0;) a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s + h.shift(), c.curveTo(a, n, o, s, v, m);
                                break;
                            case 10:
                                (E = i[O = h.pop() + u]) && r(E);
                                break;
                            case 11:
                                return;
                            case 12:
                                switch (G = l[M], M += 1, G) {
                                    case 35:
                                        a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), R = o + h.shift(), L = s + h.shift(), C = R + h.shift(), D = L + h.shift(), w = C + h.shift(), I = D + h.shift(), v = w + h.shift(), m = I + h.shift(), h.shift(), c.curveTo(a, n, o, s, R, L), c.curveTo(C, D, w, I, v, m);
                                        break;
                                    case 34:
                                        a = v + h.shift(), n = m, o = a + h.shift(), s = n + h.shift(), R = o + h.shift(), L = s, C = R + h.shift(), D = s, w = C + h.shift(), I = m, v = w + h.shift(), c.curveTo(a, n, o, s, R, L), c.curveTo(C, D, w, I, v, m);
                                        break;
                                    case 36:
                                        a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), R = o + h.shift(), L = s, C = R + h.shift(), D = s, w = C + h.shift(), I = D + h.shift(), v = w + h.shift(), c.curveTo(a, n, o, s, R, L), c.curveTo(C, D, w, I, v, m);
                                        break;
                                    case 37:
                                        a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), R = o + h.shift(), L = s + h.shift(), C = R + h.shift(), D = L + h.shift(), Math.abs((w = C + h.shift()) - v) > Math.abs((I = D + h.shift()) - m) ? v = w + h.shift() : m = I + h.shift(), c.curveTo(a, n, o, s, R, L), c.curveTo(C, D, w, I, v, m);
                                        break;
                                    default:
                                        console.log("Glyph " + t.index + ": unknown operator 1200" + G), h.length = 0
                                }
                                break;
                            case 14:
                                h.length > 0 && !d && (b = h.shift() + p, d = !0), g && (c.closePath(), g = !1);
                                break;
                            case 19:
                            case 20:
                                T(), M += f + 7 >> 3;
                                break;
                            case 21:
                                h.length > 2 && !d && (b = h.shift() + p, d = !0), m += h.pop(), S(v += h.pop(), m);
                                break;
                            case 22:
                                h.length > 1 && !d && (b = h.shift() + p, d = !0), S(v += h.pop(), m);
                                break;
                            case 24:
                                for (; h.length > 2;) a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s + h.shift(), c.curveTo(a, n, o, s, v, m);
                                v += h.shift(), m += h.shift(), c.lineTo(v, m);
                                break;
                            case 25:
                                for (; h.length > 6;) v += h.shift(), m += h.shift(), c.lineTo(v, m);
                                a = v + h.shift(), n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s + h.shift(), c.curveTo(a, n, o, s, v, m);
                                break;
                            case 26:
                                for (h.length % 2 && (v += h.shift()); h.length > 0;) a = v, n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o, m = s + h.shift(), c.curveTo(a, n, o, s, v, m);
                                break;
                            case 27:
                                for (h.length % 2 && (m += h.shift()); h.length > 0;) a = v + h.shift(), n = m, o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s, c.curveTo(a, n, o, s, v, m);
                                break;
                            case 28:
                                y = l[M], x = l[M + 1], h.push((y << 24 | x << 16) >> 16), M += 2;
                                break;
                            case 29:
                                O = h.pop() + e.gsubrsBias, (E = e.gsubrs[O]) && r(E);
                                break;
                            case 30:
                                for (; h.length > 0 && (a = v, n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s + (1 === h.length ? h.shift() : 0), c.curveTo(a, n, o, s, v, m), 0 !== h.length);) a = v + h.shift(), n = m, o = a + h.shift(), m = (s = n + h.shift()) + h.shift(), v = o + (1 === h.length ? h.shift() : 0), c.curveTo(a, n, o, s, v, m);
                                break;
                            case 31:
                                for (; h.length > 0 && (a = v + h.shift(), n = m, o = a + h.shift(), m = (s = n + h.shift()) + h.shift(), v = o + (1 === h.length ? h.shift() : 0), c.curveTo(a, n, o, s, v, m), 0 !== h.length);) a = v, n = m + h.shift(), o = a + h.shift(), s = n + h.shift(), v = o + h.shift(), m = s + (1 === h.length ? h.shift() : 0), c.curveTo(a, n, o, s, v, m);
                                break;
                            default:
                                G < 32 ? console.log("Glyph " + t.index + ": unknown operator " + G) : G < 247 ? h.push(G - 139) : G < 251 ? (y = l[M], M += 1, h.push((G - 247) * 256 + y + 108)) : G < 255 ? (y = l[M], M += 1, h.push(-(256 * (G - 251)) - y - 108)) : (y = l[M], x = l[M + 1], k = l[M + 2], U = l[M + 3], M += 4, h.push((y << 24 | x << 16 | k << 8 | U) / 65536))
                        }
                    }
                }(r), t.advanceWidth = b, c
            }

            function eD(e, t) {
                var r, a = eu.indexOf(e);
                return a >= 0 && (r = a), (a = t.indexOf(e)) >= 0 ? r = a + eu.length : (r = eu.length + t.length, t.push(e)), r
            }

            function ew(e, t, r) {
                for (var a = {}, n = 0; n < e.length; n += 1) {
                    var o = e[n],
                        s = t[o.name];
                    void 0 !== s && ! function e(t, r) {
                        if (t === r) return !0;
                        if (!(Array.isArray(t) && Array.isArray(r)) || t.length !== r.length) return !1;
                        for (var a = 0; a < t.length; a += 1)
                            if (!e(t[a], r[a])) return !1;
                        return !0
                    }(s, o.value) && ("SID" === o.type && (s = eD(s, r)), a[o.op] = {
                        name: o.name,
                        type: o.type,
                        value: s
                    })
                }
                return a
            }

            function eI(e, t) {
                var r = new J.Record("Top DICT", [{
                    name: "dict",
                    type: "DICT",
                    value: {}
                }]);
                return r.dict = ew(eE, e, t), r
            }

            function eM(e) {
                var t = new J.Record("Top DICT INDEX", [{
                    name: "topDicts",
                    type: "INDEX",
                    value: []
                }]);
                return t.topDicts = [{
                    name: "topDict_0",
                    type: "TABLE",
                    value: e
                }], t
            }
            var eG = {
                    parse: function(e, t, r, a) {
                        r.tables.cff = {};
                        var n, o, s, i, u = ((s = {}).formatMajor = es.getCard8(e, t), s.formatMinor = es.getCard8(e, t + 1), s.size = es.getCard8(e, t + 2), s.offsetSize = es.getCard8(e, t + 3), s.startOffset = t, s.endOffset = t + 4, s),
                            l = eT(e, u.endOffset, es.bytesToString),
                            p = eT(e, l.endOffset),
                            c = eT(e, p.endOffset, es.bytesToString),
                            h = eT(e, c.endOffset);
                        r.gsubrs = h.objects, r.gsubrsBias = eS(r.gsubrs);
                        var f = eL(e, t, p.objects, c.objects);
                        if (1 !== f.length) throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + f.length);
                        var d = f[0];
                        if (r.tables.cff.topDict = d, d._privateDict && (r.defaultWidthX = d._privateDict.defaultWidthX, r.nominalWidthX = d._privateDict.nominalWidthX), void 0 !== d.ros[0] && void 0 !== d.ros[1] && (r.isCIDFont = !0), r.isCIDFont) {
                            var g = d.fdArray,
                                v = d.fdSelect;
                            if (0 === g || 0 === v) throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                            var m = eT(e, g += t),
                                y = eL(e, t, m.objects, c.objects);
                            d._fdArray = y, v += t, d._fdSelect = function(e, t, r, a) {
                                var n = [],
                                    o = new es.Parser(e, t),
                                    s = o.parseCard8();
                                if (0 === s)
                                    for (var i = 0; i < r; i++) {
                                        if ((u = o.parseCard8()) >= a) throw Error("CFF table CID Font FDSelect has bad FD index value " + u + " (FD count " + a + ")");
                                        n.push(u)
                                    } else if (3 === s) {
                                        var u, l, p = o.parseCard16(),
                                            c = o.parseCard16();
                                        if (0 !== c) throw Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + c);
                                        for (var h = 0; h < p; h++) {
                                            if (u = o.parseCard8(), l = o.parseCard16(), u >= a) throw Error("CFF table CID Font FDSelect has bad FD index value " + u + " (FD count " + a + ")");
                                            if (l > r) throw Error("CFF Table CID Font FDSelect format 3 range has bad GID " + l);
                                            for (; c < l; c++) n.push(u);
                                            c = l
                                        }
                                        if (l !== r) throw Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + l)
                                    } else throw Error("CFF Table CID Font FDSelect table has unsupported format " + s);
                                return n
                            }(e, v, r.numGlyphs, y.length)
                        }
                        var x = t + d.private[1],
                            b = (n = d.private[0], o = c.objects, eO(ek(e, x, n), eR, o));
                        if (r.defaultWidthX = b.defaultWidthX, r.nominalWidthX = b.nominalWidthX, 0 !== b.subrs) {
                            var S = x + b.subrs,
                                T = eT(e, S);
                            r.subrs = T.objects, r.subrsBias = eS(r.subrs)
                        } else r.subrs = [], r.subrsBias = 0;
                        a.lowMemory ? (i = function(e, t) {
                            var r, a, n = [],
                                o = es.getCard16(e, t);
                            if (0 !== o) {
                                var s = es.getByte(e, t + 2);
                                r = t + (o + 1) * s + 2;
                                for (var i = t + 3, u = 0; u < o + 1; u += 1) n.push(es.getOffset(e, i, s)), i += s;
                                a = r + n[o]
                            } else a = t + 2;
                            return {
                                offsets: n,
                                startOffset: t,
                                endOffset: a
                            }
                        }(e, t + d.charStrings), r.nGlyphs = i.offsets.length) : (i = eT(e, t + d.charStrings), r.nGlyphs = i.objects.length);
                        var k = function(e, t, r, a) {
                            var n, o, s = new es.Parser(e, t);
                            r -= 1;
                            var i = [".notdef"],
                                u = s.parseCard8();
                            if (0 === u)
                                for (var l = 0; l < r; l += 1) n = s.parseSID(), i.push(eU(a, n));
                            else if (1 === u)
                                for (; i.length <= r;) {
                                    n = s.parseSID(), o = s.parseCard8();
                                    for (var p = 0; p <= o; p += 1) i.push(eU(a, n)), n += 1
                                } else if (2 === u)
                                    for (; i.length <= r;) {
                                        n = s.parseSID(), o = s.parseCard16();
                                        for (var c = 0; c <= o; c += 1) i.push(eU(a, n)), n += 1
                                    } else throw Error("Unknown charset format " + u);
                            return i
                        }(e, t + d.charset, r.nGlyphs, c.objects);
                        if (0 === d.encoding ? r.cffEncoding = new ed(el, k) : 1 === d.encoding ? r.cffEncoding = new ed(ep, k) : r.cffEncoding = function(e, t, r) {
                                var a, n = {},
                                    o = new es.Parser(e, t),
                                    s = o.parseCard8();
                                if (0 === s)
                                    for (var i = o.parseCard8(), u = 0; u < i; u += 1) n[a = o.parseCard8()] = u;
                                else if (1 === s) {
                                    var l = o.parseCard8();
                                    a = 1;
                                    for (var p = 0; p < l; p += 1)
                                        for (var c = o.parseCard8(), h = o.parseCard8(), f = c; f <= c + h; f += 1) n[f] = a, a += 1
                                } else throw Error("Unknown encoding format " + s);
                                return new ed(n, r)
                            }(e, t + d.encoding, k), r.encoding = r.encoding || r.cffEncoding, r.glyphs = new eb.GlyphSet(r), a.lowMemory) r._push = function(a) {
                            var n = function(e, t, r, a, n) {
                                var o = es.getCard16(r, a),
                                    s = 0;
                                if (0 !== o) {
                                    var i = es.getByte(r, a + 2);
                                    s = a + (o + 1) * i + 2
                                }
                                var u = es.getBytes(r, s + t[e], s + t[e + 1]);
                                return n && (u = n(u)), u
                            }(a, i.offsets, e, t + d.charStrings);
                            r.glyphs.push(a, eb.cffGlyphLoader(r, a, eC, n))
                        };
                        else
                            for (var U = 0; U < r.nGlyphs; U += 1) {
                                var O = i.objects[U];
                                r.glyphs.push(U, eb.cffGlyphLoader(r, U, eC, O))
                            }
                    },
                    make: function(e, t) {
                        for (var r, a, n = new J.Table("CFF ", [{
                                name: "header",
                                type: "RECORD"
                            }, {
                                name: "nameIndex",
                                type: "RECORD"
                            }, {
                                name: "topDictIndex",
                                type: "RECORD"
                            }, {
                                name: "stringIndex",
                                type: "RECORD"
                            }, {
                                name: "globalSubrIndex",
                                type: "RECORD"
                            }, {
                                name: "charsets",
                                type: "RECORD"
                            }, {
                                name: "charStringsIndex",
                                type: "RECORD"
                            }, {
                                name: "privateDict",
                                type: "RECORD"
                            }]), o = 1 / t.unitsPerEm, s = {
                                version: t.version,
                                fullName: t.fullName,
                                familyName: t.familyName,
                                weight: t.weightName,
                                fontBBox: t.fontBBox || [0, 0, 0, 0],
                                fontMatrix: [o, 0, 0, o, 0, 0],
                                charset: 999,
                                encoding: 0,
                                charStrings: 999,
                                private: [0, 999]
                            }, i = [], u = 1; u < e.length; u += 1) a = e.get(u), i.push(a.name);
                        var l = [];
                        n.header = new J.Record("Header", [{
                            name: "major",
                            type: "Card8",
                            value: 1
                        }, {
                            name: "minor",
                            type: "Card8",
                            value: 0
                        }, {
                            name: "hdrSize",
                            type: "Card8",
                            value: 4
                        }, {
                            name: "major",
                            type: "Card8",
                            value: 1
                        }]), n.nameIndex = function(e) {
                            var t = new J.Record("Name INDEX", [{
                                name: "names",
                                type: "INDEX",
                                value: []
                            }]);
                            t.names = [];
                            for (var r = 0; r < e.length; r += 1) t.names.push({
                                name: "name_" + r,
                                type: "NAME",
                                value: e[r]
                            });
                            return t
                        }([t.postScriptName]);
                        var p = eI(s, l);
                        n.topDictIndex = eM(p), n.globalSubrIndex = new J.Record("Global Subr INDEX", [{
                            name: "subrs",
                            type: "INDEX",
                            value: []
                        }]), n.charsets = function(e, t) {
                            for (var r = new J.Record("Charsets", [{
                                    name: "format",
                                    type: "Card8",
                                    value: 0
                                }]), a = 0; a < e.length; a += 1) {
                                var n = eD(e[a], t);
                                r.fields.push({
                                    name: "glyph_" + a,
                                    type: "SID",
                                    value: n
                                })
                            }
                            return r
                        }(i, l), n.charStringsIndex = function(e) {
                            for (var t = new J.Record("CharStrings INDEX", [{
                                    name: "charStrings",
                                    type: "INDEX",
                                    value: []
                                }]), r = 0; r < e.length; r += 1) {
                                var a = e.get(r),
                                    n = function(e) {
                                        var t = [],
                                            r = e.path;
                                        t.push({
                                            name: "width",
                                            type: "NUMBER",
                                            value: e.advanceWidth
                                        });
                                        for (var a = 0, n = 0, o = 0; o < r.commands.length; o += 1) {
                                            var s = void 0,
                                                i = void 0,
                                                u = r.commands[o];
                                            if ("Q" === u.type) {
                                                var l = 1 / 3,
                                                    p = 2 / 3;
                                                u = {
                                                    type: "C",
                                                    x: u.x,
                                                    y: u.y,
                                                    x1: Math.round(l * a + p * u.x1),
                                                    y1: Math.round(l * n + p * u.y1),
                                                    x2: Math.round(l * u.x + p * u.x1),
                                                    y2: Math.round(l * u.y + p * u.y1)
                                                }
                                            }
                                            if ("M" === u.type) s = Math.round(u.x - a), i = Math.round(u.y - n), t.push({
                                                name: "dx",
                                                type: "NUMBER",
                                                value: s
                                            }), t.push({
                                                name: "dy",
                                                type: "NUMBER",
                                                value: i
                                            }), t.push({
                                                name: "rmoveto",
                                                type: "OP",
                                                value: 21
                                            }), a = Math.round(u.x), n = Math.round(u.y);
                                            else if ("L" === u.type) s = Math.round(u.x - a), i = Math.round(u.y - n), t.push({
                                                name: "dx",
                                                type: "NUMBER",
                                                value: s
                                            }), t.push({
                                                name: "dy",
                                                type: "NUMBER",
                                                value: i
                                            }), t.push({
                                                name: "rlineto",
                                                type: "OP",
                                                value: 5
                                            }), a = Math.round(u.x), n = Math.round(u.y);
                                            else if ("C" === u.type) {
                                                var c = Math.round(u.x1 - a),
                                                    h = Math.round(u.y1 - n),
                                                    f = Math.round(u.x2 - u.x1),
                                                    d = Math.round(u.y2 - u.y1);
                                                s = Math.round(u.x - u.x2), i = Math.round(u.y - u.y2), t.push({
                                                    name: "dx1",
                                                    type: "NUMBER",
                                                    value: c
                                                }), t.push({
                                                    name: "dy1",
                                                    type: "NUMBER",
                                                    value: h
                                                }), t.push({
                                                    name: "dx2",
                                                    type: "NUMBER",
                                                    value: f
                                                }), t.push({
                                                    name: "dy2",
                                                    type: "NUMBER",
                                                    value: d
                                                }), t.push({
                                                    name: "dx",
                                                    type: "NUMBER",
                                                    value: s
                                                }), t.push({
                                                    name: "dy",
                                                    type: "NUMBER",
                                                    value: i
                                                }), t.push({
                                                    name: "rrcurveto",
                                                    type: "OP",
                                                    value: 8
                                                }), a = Math.round(u.x), n = Math.round(u.y)
                                            }
                                        }
                                        return t.push({
                                            name: "endchar",
                                            type: "OP",
                                            value: 14
                                        }), t
                                    }(a);
                                t.charStrings.push({
                                    name: a.name,
                                    type: "CHARSTRING",
                                    value: n
                                })
                            }
                            return t
                        }(e), n.privateDict = ((r = new J.Record("Private DICT", [{
                            name: "dict",
                            type: "DICT",
                            value: {}
                        }])).dict = ew(eR, {}, l), r), n.stringIndex = function(e) {
                            var t = new J.Record("String INDEX", [{
                                name: "strings",
                                type: "INDEX",
                                value: []
                            }]);
                            t.strings = [];
                            for (var r = 0; r < e.length; r += 1) t.strings.push({
                                name: "string_" + r,
                                type: "STRING",
                                value: e[r]
                            });
                            return t
                        }(l);
                        var c = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
                        return s.charset = c, s.encoding = 0, s.charStrings = s.charset + n.charsets.sizeOf(), s.private[1] = s.charStrings + n.charStringsIndex.sizeOf(), p = eI(s, l), n.topDictIndex = eM(p), n
                    }
                },
                eB = {
                    parse: function(e, t) {
                        var r = {},
                            a = new es.Parser(e, t);
                        return r.version = a.parseVersion(), r.fontRevision = Math.round(1e3 * a.parseFixed()) / 1e3, r.checkSumAdjustment = a.parseULong(), r.magicNumber = a.parseULong(), G.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."), r.flags = a.parseUShort(), r.unitsPerEm = a.parseUShort(), r.created = a.parseLongDateTime(), r.modified = a.parseLongDateTime(), r.xMin = a.parseShort(), r.yMin = a.parseShort(), r.xMax = a.parseShort(), r.yMax = a.parseShort(), r.macStyle = a.parseUShort(), r.lowestRecPPEM = a.parseUShort(), r.fontDirectionHint = a.parseShort(), r.indexToLocFormat = a.parseShort(), r.glyphDataFormat = a.parseShort(), r
                    },
                    make: function(e) {
                        var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
                            r = t;
                        return e.createdTimestamp && (r = e.createdTimestamp + 2082844800), new J.Table("head", [{
                            name: "version",
                            type: "FIXED",
                            value: 65536
                        }, {
                            name: "fontRevision",
                            type: "FIXED",
                            value: 65536
                        }, {
                            name: "checkSumAdjustment",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "magicNumber",
                            type: "ULONG",
                            value: 1594834165
                        }, {
                            name: "flags",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "unitsPerEm",
                            type: "USHORT",
                            value: 1e3
                        }, {
                            name: "created",
                            type: "LONGDATETIME",
                            value: r
                        }, {
                            name: "modified",
                            type: "LONGDATETIME",
                            value: t
                        }, {
                            name: "xMin",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "yMin",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "xMax",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "yMax",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "macStyle",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "lowestRecPPEM",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "fontDirectionHint",
                            type: "SHORT",
                            value: 2
                        }, {
                            name: "indexToLocFormat",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "glyphDataFormat",
                            type: "SHORT",
                            value: 0
                        }], e)
                    }
                },
                eF = {
                    parse: function(e, t) {
                        var r = {},
                            a = new es.Parser(e, t);
                        return r.version = a.parseVersion(), r.ascender = a.parseShort(), r.descender = a.parseShort(), r.lineGap = a.parseShort(), r.advanceWidthMax = a.parseUShort(), r.minLeftSideBearing = a.parseShort(), r.minRightSideBearing = a.parseShort(), r.xMaxExtent = a.parseShort(), r.caretSlopeRise = a.parseShort(), r.caretSlopeRun = a.parseShort(), r.caretOffset = a.parseShort(), a.relativeOffset += 8, r.metricDataFormat = a.parseShort(), r.numberOfHMetrics = a.parseUShort(), r
                    },
                    make: function(e) {
                        return new J.Table("hhea", [{
                            name: "version",
                            type: "FIXED",
                            value: 65536
                        }, {
                            name: "ascender",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "descender",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "lineGap",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "advanceWidthMax",
                            type: "UFWORD",
                            value: 0
                        }, {
                            name: "minLeftSideBearing",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "minRightSideBearing",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "xMaxExtent",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "caretSlopeRise",
                            type: "SHORT",
                            value: 1
                        }, {
                            name: "caretSlopeRun",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "caretOffset",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "reserved1",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "reserved2",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "reserved3",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "reserved4",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "metricDataFormat",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "numberOfHMetrics",
                            type: "USHORT",
                            value: 0
                        }], e)
                    }
                },
                eA = {
                    make: function(e) {
                        for (var t = new J.Table("ltag", [{
                                name: "version",
                                type: "ULONG",
                                value: 1
                            }, {
                                name: "flags",
                                type: "ULONG",
                                value: 0
                            }, {
                                name: "numTags",
                                type: "ULONG",
                                value: e.length
                            }]), r = "", a = 12 + 4 * e.length, n = 0; n < e.length; ++n) {
                            var o = r.indexOf(e[n]);
                            o < 0 && (o = r.length, r += e[n]), t.fields.push({
                                name: "offset " + n,
                                type: "USHORT",
                                value: a + o
                            }), t.fields.push({
                                name: "length " + n,
                                type: "USHORT",
                                value: e[n].length
                            })
                        }
                        return t.fields.push({
                            name: "stringPool",
                            type: "CHARARRAY",
                            value: r
                        }), t
                    },
                    parse: function(e, t) {
                        var r = new es.Parser(e, t),
                            a = r.parseULong();
                        G.argument(1 === a, "Unsupported ltag table version."), r.skip("uLong", 1);
                        for (var n = r.parseULong(), o = [], s = 0; s < n; s++) {
                            for (var i = "", u = t + r.parseUShort(), l = r.parseUShort(), p = u; p < u + l; ++p) i += String.fromCharCode(e.getInt8(p));
                            o.push(i)
                        }
                        return o
                    }
                },
                eP = {
                    parse: function(e, t) {
                        var r = {},
                            a = new es.Parser(e, t);
                        return r.version = a.parseVersion(), r.numGlyphs = a.parseUShort(), 1 === r.version && (r.maxPoints = a.parseUShort(), r.maxContours = a.parseUShort(), r.maxCompositePoints = a.parseUShort(), r.maxCompositeContours = a.parseUShort(), r.maxZones = a.parseUShort(), r.maxTwilightPoints = a.parseUShort(), r.maxStorage = a.parseUShort(), r.maxFunctionDefs = a.parseUShort(), r.maxInstructionDefs = a.parseUShort(), r.maxStackElements = a.parseUShort(), r.maxSizeOfInstructions = a.parseUShort(), r.maxComponentElements = a.parseUShort(), r.maxComponentDepth = a.parseUShort()), r
                    },
                    make: function(e) {
                        return new J.Table("maxp", [{
                            name: "version",
                            type: "FIXED",
                            value: 20480
                        }, {
                            name: "numGlyphs",
                            type: "USHORT",
                            value: e
                        }])
                    }
                },
                eN = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
                eH = {
                    0: "en",
                    1: "fr",
                    2: "de",
                    3: "it",
                    4: "nl",
                    5: "sv",
                    6: "es",
                    7: "da",
                    8: "pt",
                    9: "no",
                    10: "he",
                    11: "ja",
                    12: "ar",
                    13: "fi",
                    14: "el",
                    15: "is",
                    16: "mt",
                    17: "tr",
                    18: "hr",
                    19: "zh-Hant",
                    20: "ur",
                    21: "hi",
                    22: "th",
                    23: "ko",
                    24: "lt",
                    25: "pl",
                    26: "hu",
                    27: "es",
                    28: "lv",
                    29: "se",
                    30: "fo",
                    31: "fa",
                    32: "ru",
                    33: "zh",
                    34: "nl-BE",
                    35: "ga",
                    36: "sq",
                    37: "ro",
                    38: "cz",
                    39: "sk",
                    40: "si",
                    41: "yi",
                    42: "sr",
                    43: "mk",
                    44: "bg",
                    45: "uk",
                    46: "be",
                    47: "uz",
                    48: "kk",
                    49: "az-Cyrl",
                    50: "az-Arab",
                    51: "hy",
                    52: "ka",
                    53: "mo",
                    54: "ky",
                    55: "tg",
                    56: "tk",
                    57: "mn-CN",
                    58: "mn",
                    59: "ps",
                    60: "ks",
                    61: "ku",
                    62: "sd",
                    63: "bo",
                    64: "ne",
                    65: "sa",
                    66: "mr",
                    67: "bn",
                    68: "as",
                    69: "gu",
                    70: "pa",
                    71: "or",
                    72: "ml",
                    73: "kn",
                    74: "ta",
                    75: "te",
                    76: "si",
                    77: "my",
                    78: "km",
                    79: "lo",
                    80: "vi",
                    81: "id",
                    82: "tl",
                    83: "ms",
                    84: "ms-Arab",
                    85: "am",
                    86: "ti",
                    87: "om",
                    88: "so",
                    89: "sw",
                    90: "rw",
                    91: "rn",
                    92: "ny",
                    93: "mg",
                    94: "eo",
                    128: "cy",
                    129: "eu",
                    130: "ca",
                    131: "la",
                    132: "qu",
                    133: "gn",
                    134: "ay",
                    135: "tt",
                    136: "ug",
                    137: "dz",
                    138: "jv",
                    139: "su",
                    140: "gl",
                    141: "af",
                    142: "br",
                    143: "iu",
                    144: "gd",
                    145: "gv",
                    146: "ga",
                    147: "to",
                    148: "el-polyton",
                    149: "kl",
                    150: "az",
                    151: "nn"
                },
                ez = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 5,
                    11: 1,
                    12: 4,
                    13: 0,
                    14: 6,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 2,
                    20: 4,
                    21: 9,
                    22: 21,
                    23: 3,
                    24: 29,
                    25: 29,
                    26: 29,
                    27: 29,
                    28: 29,
                    29: 0,
                    30: 0,
                    31: 4,
                    32: 7,
                    33: 25,
                    34: 0,
                    35: 0,
                    36: 0,
                    37: 0,
                    38: 29,
                    39: 29,
                    40: 0,
                    41: 5,
                    42: 7,
                    43: 7,
                    44: 7,
                    45: 7,
                    46: 7,
                    47: 7,
                    48: 7,
                    49: 7,
                    50: 4,
                    51: 24,
                    52: 23,
                    53: 7,
                    54: 7,
                    55: 7,
                    56: 7,
                    57: 27,
                    58: 7,
                    59: 4,
                    60: 4,
                    61: 4,
                    62: 4,
                    63: 26,
                    64: 9,
                    65: 9,
                    66: 9,
                    67: 13,
                    68: 13,
                    69: 11,
                    70: 10,
                    71: 12,
                    72: 17,
                    73: 16,
                    74: 14,
                    75: 15,
                    76: 18,
                    77: 19,
                    78: 20,
                    79: 22,
                    80: 30,
                    81: 0,
                    82: 0,
                    83: 0,
                    84: 4,
                    85: 28,
                    86: 28,
                    87: 28,
                    88: 0,
                    89: 0,
                    90: 0,
                    91: 0,
                    92: 0,
                    93: 0,
                    94: 0,
                    128: 0,
                    129: 0,
                    130: 0,
                    131: 0,
                    132: 0,
                    133: 0,
                    134: 0,
                    135: 7,
                    136: 4,
                    137: 26,
                    138: 0,
                    139: 0,
                    140: 0,
                    141: 0,
                    142: 0,
                    143: 28,
                    144: 0,
                    145: 0,
                    146: 0,
                    147: 0,
                    148: 6,
                    149: 0,
                    150: 0,
                    151: 0
                },
                eW = {
                    1078: "af",
                    1052: "sq",
                    1156: "gsw",
                    1118: "am",
                    5121: "ar-DZ",
                    15361: "ar-BH",
                    3073: "ar",
                    2049: "ar-IQ",
                    11265: "ar-JO",
                    13313: "ar-KW",
                    12289: "ar-LB",
                    4097: "ar-LY",
                    6145: "ary",
                    8193: "ar-OM",
                    16385: "ar-QA",
                    1025: "ar-SA",
                    10241: "ar-SY",
                    7169: "aeb",
                    14337: "ar-AE",
                    9217: "ar-YE",
                    1067: "hy",
                    1101: "as",
                    2092: "az-Cyrl",
                    1068: "az",
                    1133: "ba",
                    1069: "eu",
                    1059: "be",
                    2117: "bn",
                    1093: "bn-IN",
                    8218: "bs-Cyrl",
                    5146: "bs",
                    1150: "br",
                    1026: "bg",
                    1027: "ca",
                    3076: "zh-HK",
                    5124: "zh-MO",
                    2052: "zh",
                    4100: "zh-SG",
                    1028: "zh-TW",
                    1155: "co",
                    1050: "hr",
                    4122: "hr-BA",
                    1029: "cs",
                    1030: "da",
                    1164: "prs",
                    1125: "dv",
                    2067: "nl-BE",
                    1043: "nl",
                    3081: "en-AU",
                    10249: "en-BZ",
                    4105: "en-CA",
                    9225: "en-029",
                    16393: "en-IN",
                    6153: "en-IE",
                    8201: "en-JM",
                    17417: "en-MY",
                    5129: "en-NZ",
                    13321: "en-PH",
                    18441: "en-SG",
                    7177: "en-ZA",
                    11273: "en-TT",
                    2057: "en-GB",
                    1033: "en",
                    12297: "en-ZW",
                    1061: "et",
                    1080: "fo",
                    1124: "fil",
                    1035: "fi",
                    2060: "fr-BE",
                    3084: "fr-CA",
                    1036: "fr",
                    5132: "fr-LU",
                    6156: "fr-MC",
                    4108: "fr-CH",
                    1122: "fy",
                    1110: "gl",
                    1079: "ka",
                    3079: "de-AT",
                    1031: "de",
                    5127: "de-LI",
                    4103: "de-LU",
                    2055: "de-CH",
                    1032: "el",
                    1135: "kl",
                    1095: "gu",
                    1128: "ha",
                    1037: "he",
                    1081: "hi",
                    1038: "hu",
                    1039: "is",
                    1136: "ig",
                    1057: "id",
                    1117: "iu",
                    2141: "iu-Latn",
                    2108: "ga",
                    1076: "xh",
                    1077: "zu",
                    1040: "it",
                    2064: "it-CH",
                    1041: "ja",
                    1099: "kn",
                    1087: "kk",
                    1107: "km",
                    1158: "quc",
                    1159: "rw",
                    1089: "sw",
                    1111: "kok",
                    1042: "ko",
                    1088: "ky",
                    1108: "lo",
                    1062: "lv",
                    1063: "lt",
                    2094: "dsb",
                    1134: "lb",
                    1071: "mk",
                    2110: "ms-BN",
                    1086: "ms",
                    1100: "ml",
                    1082: "mt",
                    1153: "mi",
                    1146: "arn",
                    1102: "mr",
                    1148: "moh",
                    1104: "mn",
                    2128: "mn-CN",
                    1121: "ne",
                    1044: "nb",
                    2068: "nn",
                    1154: "oc",
                    1096: "or",
                    1123: "ps",
                    1045: "pl",
                    1046: "pt",
                    2070: "pt-PT",
                    1094: "pa",
                    1131: "qu-BO",
                    2155: "qu-EC",
                    3179: "qu",
                    1048: "ro",
                    1047: "rm",
                    1049: "ru",
                    9275: "smn",
                    4155: "smj-NO",
                    5179: "smj",
                    3131: "se-FI",
                    1083: "se",
                    2107: "se-SE",
                    8251: "sms",
                    6203: "sma-NO",
                    7227: "sms",
                    1103: "sa",
                    7194: "sr-Cyrl-BA",
                    3098: "sr",
                    6170: "sr-Latn-BA",
                    2074: "sr-Latn",
                    1132: "nso",
                    1074: "tn",
                    1115: "si",
                    1051: "sk",
                    1060: "sl",
                    11274: "es-AR",
                    16394: "es-BO",
                    13322: "es-CL",
                    9226: "es-CO",
                    5130: "es-CR",
                    7178: "es-DO",
                    12298: "es-EC",
                    17418: "es-SV",
                    4106: "es-GT",
                    18442: "es-HN",
                    2058: "es-MX",
                    19466: "es-NI",
                    6154: "es-PA",
                    15370: "es-PY",
                    10250: "es-PE",
                    20490: "es-PR",
                    3082: "es",
                    1034: "es",
                    21514: "es-US",
                    14346: "es-UY",
                    8202: "es-VE",
                    2077: "sv-FI",
                    1053: "sv",
                    1114: "syr",
                    1064: "tg",
                    2143: "tzm",
                    1097: "ta",
                    1092: "tt",
                    1098: "te",
                    1054: "th",
                    1105: "bo",
                    1055: "tr",
                    1090: "tk",
                    1152: "ug",
                    1058: "uk",
                    1070: "hsb",
                    1056: "ur",
                    2115: "uz-Cyrl",
                    1091: "uz",
                    1066: "vi",
                    1106: "cy",
                    1160: "wo",
                    1157: "sah",
                    1144: "ii",
                    1130: "yo"
                },
                e_ = "utf-16",
                eq = {
                    0: "macintosh",
                    1: "x-mac-japanese",
                    2: "x-mac-chinesetrad",
                    3: "x-mac-korean",
                    6: "x-mac-greek",
                    7: "x-mac-cyrillic",
                    9: "x-mac-devanagai",
                    10: "x-mac-gurmukhi",
                    11: "x-mac-gujarati",
                    12: "x-mac-oriya",
                    13: "x-mac-bengali",
                    14: "x-mac-tamil",
                    15: "x-mac-telugu",
                    16: "x-mac-kannada",
                    17: "x-mac-malayalam",
                    18: "x-mac-sinhalese",
                    19: "x-mac-burmese",
                    20: "x-mac-khmer",
                    21: "x-mac-thai",
                    22: "x-mac-lao",
                    23: "x-mac-georgian",
                    24: "x-mac-armenian",
                    25: "x-mac-chinesesimp",
                    26: "x-mac-tibetan",
                    27: "x-mac-mongolian",
                    28: "x-mac-ethiopic",
                    29: "x-mac-ce",
                    30: "x-mac-vietnamese",
                    31: "x-mac-extarabic"
                },
                eX = {
                    15: "x-mac-icelandic",
                    17: "x-mac-turkish",
                    18: "x-mac-croatian",
                    24: "x-mac-ce",
                    25: "x-mac-ce",
                    26: "x-mac-ce",
                    27: "x-mac-ce",
                    28: "x-mac-ce",
                    30: "x-mac-icelandic",
                    37: "x-mac-romanian",
                    38: "x-mac-ce",
                    39: "x-mac-ce",
                    40: "x-mac-ce",
                    143: "x-mac-inuit",
                    146: "x-mac-gaelic"
                };

            function eV(e, t, r) {
                switch (e) {
                    case 0:
                        return e_;
                    case 1:
                        return eX[r] || eq[t];
                    case 3:
                        if (1 === t || 10 === t) return e_
                }
            }

            function eY(e) {
                var t = {};
                for (var r in e) t[e[r]] = parseInt(r);
                return t
            }

            function ej(e, t, r, a, n, o) {
                return new J.Record("NameRecord", [{
                    name: "platformID",
                    type: "USHORT",
                    value: e
                }, {
                    name: "encodingID",
                    type: "USHORT",
                    value: t
                }, {
                    name: "languageID",
                    type: "USHORT",
                    value: r
                }, {
                    name: "nameID",
                    type: "USHORT",
                    value: a
                }, {
                    name: "length",
                    type: "USHORT",
                    value: n
                }, {
                    name: "offset",
                    type: "USHORT",
                    value: o
                }])
            }

            function eZ(e, t) {
                var r = function(e, t) {
                    var r = e.length,
                        a = t.length - r + 1;
                    e: for (var n = 0; n < a; n++)
                        for (; n < a; n++) {
                            for (var o = 0; o < r; o++)
                                if (t[n + o] !== e[o]) continue e;
                            return n
                        }
                    return -1
                }(e, t);
                if (r < 0) {
                    r = t.length;
                    for (var a = 0, n = e.length; a < n; ++a) t.push(e[a])
                }
                return r
            }
            var eQ = {
                    parse: function(e, t, r) {
                        for (var a = {}, n = new es.Parser(e, t), o = n.parseUShort(), s = n.parseUShort(), i = n.offset + n.parseUShort(), u = 0; u < s; u++) {
                            var l = n.parseUShort(),
                                p = n.parseUShort(),
                                c = n.parseUShort(),
                                h = n.parseUShort(),
                                f = eN[h] || h,
                                d = n.parseUShort(),
                                g = n.parseUShort(),
                                v = function(e, t, r) {
                                    switch (e) {
                                        case 0:
                                            if (65535 === t) return "und";
                                            if (r) return r[t];
                                            break;
                                        case 1:
                                            return eH[t];
                                        case 3:
                                            return eW[t]
                                    }
                                }(l, c, r),
                                m = eV(l, p, c);
                            if (void 0 !== m && void 0 !== v) {
                                var y = void 0;
                                if (y = m === e_ ? B.UTF16(e, i + g, d) : B.MACSTRING(e, i + g, d, m)) {
                                    var x = a[f];
                                    void 0 === x && (x = a[f] = {}), x[v] = y
                                }
                            }
                        }
                        return 1 === o && n.parseUShort(), a
                    },
                    make: function(e, t) {
                        var r, a = [],
                            n = {},
                            o = eY(eN);
                        for (var s in e) {
                            var i = o[s];
                            if (void 0 === i && (i = s), isNaN(r = parseInt(i))) throw Error('Name table entry "' + s + '" does not exist, see nameTableNames for complete list.');
                            n[r] = e[s], a.push(r)
                        }
                        for (var u = eY(eH), l = eY(eW), p = [], c = [], h = 0; h < a.length; h++) {
                            var f = n[r = a[h]];
                            for (var d in f) {
                                var g = f[d],
                                    v = 1,
                                    m = u[d],
                                    y = ez[m],
                                    x = eV(v, y, m),
                                    b = F.MACSTRING(g, x);
                                void 0 === b && (v = 0, (m = t.indexOf(d)) < 0 && (m = t.length, t.push(d)), y = 4, b = F.UTF16(g));
                                var S = eZ(b, c);
                                p.push(ej(v, y, m, r, b.length, S));
                                var T = l[d];
                                if (void 0 !== T) {
                                    var k = F.UTF16(g),
                                        U = eZ(k, c);
                                    p.push(ej(3, 1, T, r, k.length, U))
                                }
                            }
                        }
                        p.sort(function(e, t) {
                            return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID
                        });
                        for (var O = new J.Table("name", [{
                                name: "format",
                                type: "USHORT",
                                value: 0
                            }, {
                                name: "count",
                                type: "USHORT",
                                value: p.length
                            }, {
                                name: "stringOffset",
                                type: "USHORT",
                                value: 6 + 12 * p.length
                            }]), E = 0; E < p.length; E++) O.fields.push({
                            name: "record_" + E,
                            type: "RECORD",
                            value: p[E]
                        });
                        return O.fields.push({
                            name: "strings",
                            type: "LITERAL",
                            value: c
                        }), O
                    }
                },
                eK = [{
                    begin: 0,
                    end: 127
                }, {
                    begin: 128,
                    end: 255
                }, {
                    begin: 256,
                    end: 383
                }, {
                    begin: 384,
                    end: 591
                }, {
                    begin: 592,
                    end: 687
                }, {
                    begin: 688,
                    end: 767
                }, {
                    begin: 768,
                    end: 879
                }, {
                    begin: 880,
                    end: 1023
                }, {
                    begin: 11392,
                    end: 11519
                }, {
                    begin: 1024,
                    end: 1279
                }, {
                    begin: 1328,
                    end: 1423
                }, {
                    begin: 1424,
                    end: 1535
                }, {
                    begin: 42240,
                    end: 42559
                }, {
                    begin: 1536,
                    end: 1791
                }, {
                    begin: 1984,
                    end: 2047
                }, {
                    begin: 2304,
                    end: 2431
                }, {
                    begin: 2432,
                    end: 2559
                }, {
                    begin: 2560,
                    end: 2687
                }, {
                    begin: 2688,
                    end: 2815
                }, {
                    begin: 2816,
                    end: 2943
                }, {
                    begin: 2944,
                    end: 3071
                }, {
                    begin: 3072,
                    end: 3199
                }, {
                    begin: 3200,
                    end: 3327
                }, {
                    begin: 3328,
                    end: 3455
                }, {
                    begin: 3584,
                    end: 3711
                }, {
                    begin: 3712,
                    end: 3839
                }, {
                    begin: 4256,
                    end: 4351
                }, {
                    begin: 6912,
                    end: 7039
                }, {
                    begin: 4352,
                    end: 4607
                }, {
                    begin: 7680,
                    end: 7935
                }, {
                    begin: 7936,
                    end: 8191
                }, {
                    begin: 8192,
                    end: 8303
                }, {
                    begin: 8304,
                    end: 8351
                }, {
                    begin: 8352,
                    end: 8399
                }, {
                    begin: 8400,
                    end: 8447
                }, {
                    begin: 8448,
                    end: 8527
                }, {
                    begin: 8528,
                    end: 8591
                }, {
                    begin: 8592,
                    end: 8703
                }, {
                    begin: 8704,
                    end: 8959
                }, {
                    begin: 8960,
                    end: 9215
                }, {
                    begin: 9216,
                    end: 9279
                }, {
                    begin: 9280,
                    end: 9311
                }, {
                    begin: 9312,
                    end: 9471
                }, {
                    begin: 9472,
                    end: 9599
                }, {
                    begin: 9600,
                    end: 9631
                }, {
                    begin: 9632,
                    end: 9727
                }, {
                    begin: 9728,
                    end: 9983
                }, {
                    begin: 9984,
                    end: 10175
                }, {
                    begin: 12288,
                    end: 12351
                }, {
                    begin: 12352,
                    end: 12447
                }, {
                    begin: 12448,
                    end: 12543
                }, {
                    begin: 12544,
                    end: 12591
                }, {
                    begin: 12592,
                    end: 12687
                }, {
                    begin: 43072,
                    end: 43135
                }, {
                    begin: 12800,
                    end: 13055
                }, {
                    begin: 13056,
                    end: 13311
                }, {
                    begin: 44032,
                    end: 55215
                }, {
                    begin: 55296,
                    end: 57343
                }, {
                    begin: 67840,
                    end: 67871
                }, {
                    begin: 19968,
                    end: 40959
                }, {
                    begin: 57344,
                    end: 63743
                }, {
                    begin: 12736,
                    end: 12783
                }, {
                    begin: 64256,
                    end: 64335
                }, {
                    begin: 64336,
                    end: 65023
                }, {
                    begin: 65056,
                    end: 65071
                }, {
                    begin: 65040,
                    end: 65055
                }, {
                    begin: 65104,
                    end: 65135
                }, {
                    begin: 65136,
                    end: 65279
                }, {
                    begin: 65280,
                    end: 65519
                }, {
                    begin: 65520,
                    end: 65535
                }, {
                    begin: 3840,
                    end: 4095
                }, {
                    begin: 1792,
                    end: 1871
                }, {
                    begin: 1920,
                    end: 1983
                }, {
                    begin: 3456,
                    end: 3583
                }, {
                    begin: 4096,
                    end: 4255
                }, {
                    begin: 4608,
                    end: 4991
                }, {
                    begin: 5024,
                    end: 5119
                }, {
                    begin: 5120,
                    end: 5759
                }, {
                    begin: 5760,
                    end: 5791
                }, {
                    begin: 5792,
                    end: 5887
                }, {
                    begin: 6016,
                    end: 6143
                }, {
                    begin: 6144,
                    end: 6319
                }, {
                    begin: 10240,
                    end: 10495
                }, {
                    begin: 40960,
                    end: 42127
                }, {
                    begin: 5888,
                    end: 5919
                }, {
                    begin: 66304,
                    end: 66351
                }, {
                    begin: 66352,
                    end: 66383
                }, {
                    begin: 66560,
                    end: 66639
                }, {
                    begin: 118784,
                    end: 119039
                }, {
                    begin: 119808,
                    end: 120831
                }, {
                    begin: 1044480,
                    end: 1048573
                }, {
                    begin: 65024,
                    end: 65039
                }, {
                    begin: 917504,
                    end: 917631
                }, {
                    begin: 6400,
                    end: 6479
                }, {
                    begin: 6480,
                    end: 6527
                }, {
                    begin: 6528,
                    end: 6623
                }, {
                    begin: 6656,
                    end: 6687
                }, {
                    begin: 11264,
                    end: 11359
                }, {
                    begin: 11568,
                    end: 11647
                }, {
                    begin: 19904,
                    end: 19967
                }, {
                    begin: 43008,
                    end: 43055
                }, {
                    begin: 65536,
                    end: 65663
                }, {
                    begin: 65856,
                    end: 65935
                }, {
                    begin: 66432,
                    end: 66463
                }, {
                    begin: 66464,
                    end: 66527
                }, {
                    begin: 66640,
                    end: 66687
                }, {
                    begin: 66688,
                    end: 66735
                }, {
                    begin: 67584,
                    end: 67647
                }, {
                    begin: 68096,
                    end: 68191
                }, {
                    begin: 119552,
                    end: 119647
                }, {
                    begin: 73728,
                    end: 74751
                }, {
                    begin: 119648,
                    end: 119679
                }, {
                    begin: 7040,
                    end: 7103
                }, {
                    begin: 7168,
                    end: 7247
                }, {
                    begin: 7248,
                    end: 7295
                }, {
                    begin: 43136,
                    end: 43231
                }, {
                    begin: 43264,
                    end: 43311
                }, {
                    begin: 43312,
                    end: 43359
                }, {
                    begin: 43520,
                    end: 43615
                }, {
                    begin: 65936,
                    end: 65999
                }, {
                    begin: 66e3,
                    end: 66047
                }, {
                    begin: 66208,
                    end: 66271
                }, {
                    begin: 127024,
                    end: 127135
                }],
                eJ = {
                    parse: function(e, t) {
                        var r = {},
                            a = new es.Parser(e, t);
                        r.version = a.parseUShort(), r.xAvgCharWidth = a.parseShort(), r.usWeightClass = a.parseUShort(), r.usWidthClass = a.parseUShort(), r.fsType = a.parseUShort(), r.ySubscriptXSize = a.parseShort(), r.ySubscriptYSize = a.parseShort(), r.ySubscriptXOffset = a.parseShort(), r.ySubscriptYOffset = a.parseShort(), r.ySuperscriptXSize = a.parseShort(), r.ySuperscriptYSize = a.parseShort(), r.ySuperscriptXOffset = a.parseShort(), r.ySuperscriptYOffset = a.parseShort(), r.yStrikeoutSize = a.parseShort(), r.yStrikeoutPosition = a.parseShort(), r.sFamilyClass = a.parseShort(), r.panose = [];
                        for (var n = 0; n < 10; n++) r.panose[n] = a.parseByte();
                        return r.ulUnicodeRange1 = a.parseULong(), r.ulUnicodeRange2 = a.parseULong(), r.ulUnicodeRange3 = a.parseULong(), r.ulUnicodeRange4 = a.parseULong(), r.achVendID = String.fromCharCode(a.parseByte(), a.parseByte(), a.parseByte(), a.parseByte()), r.fsSelection = a.parseUShort(), r.usFirstCharIndex = a.parseUShort(), r.usLastCharIndex = a.parseUShort(), r.sTypoAscender = a.parseShort(), r.sTypoDescender = a.parseShort(), r.sTypoLineGap = a.parseShort(), r.usWinAscent = a.parseUShort(), r.usWinDescent = a.parseUShort(), r.version >= 1 && (r.ulCodePageRange1 = a.parseULong(), r.ulCodePageRange2 = a.parseULong()), r.version >= 2 && (r.sxHeight = a.parseShort(), r.sCapHeight = a.parseShort(), r.usDefaultChar = a.parseUShort(), r.usBreakChar = a.parseUShort(), r.usMaxContent = a.parseUShort()), r
                    },
                    make: function(e) {
                        return new J.Table("OS/2", [{
                            name: "version",
                            type: "USHORT",
                            value: 3
                        }, {
                            name: "xAvgCharWidth",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "usWeightClass",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usWidthClass",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "fsType",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "ySubscriptXSize",
                            type: "SHORT",
                            value: 650
                        }, {
                            name: "ySubscriptYSize",
                            type: "SHORT",
                            value: 699
                        }, {
                            name: "ySubscriptXOffset",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "ySubscriptYOffset",
                            type: "SHORT",
                            value: 140
                        }, {
                            name: "ySuperscriptXSize",
                            type: "SHORT",
                            value: 650
                        }, {
                            name: "ySuperscriptYSize",
                            type: "SHORT",
                            value: 699
                        }, {
                            name: "ySuperscriptXOffset",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "ySuperscriptYOffset",
                            type: "SHORT",
                            value: 479
                        }, {
                            name: "yStrikeoutSize",
                            type: "SHORT",
                            value: 49
                        }, {
                            name: "yStrikeoutPosition",
                            type: "SHORT",
                            value: 258
                        }, {
                            name: "sFamilyClass",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "bFamilyType",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bSerifStyle",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bWeight",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bProportion",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bContrast",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bStrokeVariation",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bArmStyle",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bLetterform",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bMidline",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "bXHeight",
                            type: "BYTE",
                            value: 0
                        }, {
                            name: "ulUnicodeRange1",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "ulUnicodeRange2",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "ulUnicodeRange3",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "ulUnicodeRange4",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "achVendID",
                            type: "CHARARRAY",
                            value: "XXXX"
                        }, {
                            name: "fsSelection",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usFirstCharIndex",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usLastCharIndex",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "sTypoAscender",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "sTypoDescender",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "sTypoLineGap",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "usWinAscent",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usWinDescent",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "ulCodePageRange1",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "ulCodePageRange2",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "sxHeight",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "sCapHeight",
                            type: "SHORT",
                            value: 0
                        }, {
                            name: "usDefaultChar",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usBreakChar",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "usMaxContext",
                            type: "USHORT",
                            value: 0
                        }], e)
                    },
                    unicodeRanges: eK,
                    getUnicodeRange: function(e) {
                        for (var t = 0; t < eK.length; t += 1) {
                            var r = eK[t];
                            if (e >= r.begin && e < r.end) return t
                        }
                        return -1
                    }
                },
                e$ = {
                    parse: function(e, t) {
                        var r = {},
                            a = new es.Parser(e, t);
                        switch (r.version = a.parseVersion(), r.italicAngle = a.parseFixed(), r.underlinePosition = a.parseShort(), r.underlineThickness = a.parseShort(), r.isFixedPitch = a.parseULong(), r.minMemType42 = a.parseULong(), r.maxMemType42 = a.parseULong(), r.minMemType1 = a.parseULong(), r.maxMemType1 = a.parseULong(), r.version) {
                            case 1:
                                r.names = ec.slice();
                                break;
                            case 2:
                                r.numberOfGlyphs = a.parseUShort(), r.glyphNameIndex = Array(r.numberOfGlyphs);
                                for (var n = 0; n < r.numberOfGlyphs; n++) r.glyphNameIndex[n] = a.parseUShort();
                                r.names = [];
                                for (var o = 0; o < r.numberOfGlyphs; o++)
                                    if (r.glyphNameIndex[o] >= ec.length) {
                                        var s = a.parseChar();
                                        r.names.push(a.parseString(s))
                                    }
                                break;
                            case 2.5:
                                r.numberOfGlyphs = a.parseUShort(), r.offset = Array(r.numberOfGlyphs);
                                for (var i = 0; i < r.numberOfGlyphs; i++) r.offset[i] = a.parseChar()
                        }
                        return r
                    },
                    make: function() {
                        return new J.Table("post", [{
                            name: "version",
                            type: "FIXED",
                            value: 196608
                        }, {
                            name: "italicAngle",
                            type: "FIXED",
                            value: 0
                        }, {
                            name: "underlinePosition",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "underlineThickness",
                            type: "FWORD",
                            value: 0
                        }, {
                            name: "isFixedPitch",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "minMemType42",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "maxMemType42",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "minMemType1",
                            type: "ULONG",
                            value: 0
                        }, {
                            name: "maxMemType1",
                            type: "ULONG",
                            value: 0
                        }])
                    }
                },
                e0 = Array(9);
            e0[1] = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                return 1 === t ? {
                    substFormat: 1,
                    coverage: this.parsePointer(en.coverage),
                    deltaGlyphId: this.parseUShort()
                } : 2 === t ? {
                    substFormat: 2,
                    coverage: this.parsePointer(en.coverage),
                    substitute: this.parseOffset16List()
                } : void G.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.")
            }, e0[2] = function() {
                var e = this.parseUShort();
                return G.argument(1 === e, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
                    substFormat: e,
                    coverage: this.parsePointer(en.coverage),
                    sequences: this.parseListOfLists()
                }
            }, e0[3] = function() {
                var e = this.parseUShort();
                return G.argument(1 === e, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
                    substFormat: e,
                    coverage: this.parsePointer(en.coverage),
                    alternateSets: this.parseListOfLists()
                }
            }, e0[4] = function() {
                var e = this.parseUShort();
                return G.argument(1 === e, "GSUB ligature table identifier-format must be 1"), {
                    substFormat: e,
                    coverage: this.parsePointer(en.coverage),
                    ligatureSets: this.parseListOfLists(function() {
                        return {
                            ligGlyph: this.parseUShort(),
                            components: this.parseUShortList(this.parseUShort() - 1)
                        }
                    })
                }
            };
            var e1 = {
                sequenceIndex: en.uShort,
                lookupListIndex: en.uShort
            };
            e0[5] = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                if (1 === t) return {
                    substFormat: t,
                    coverage: this.parsePointer(en.coverage),
                    ruleSets: this.parseListOfLists(function() {
                        var e = this.parseUShort(),
                            t = this.parseUShort();
                        return {
                            input: this.parseUShortList(e - 1),
                            lookupRecords: this.parseRecordList(t, e1)
                        }
                    })
                };
                if (2 === t) return {
                    substFormat: t,
                    coverage: this.parsePointer(en.coverage),
                    classDef: this.parsePointer(en.classDef),
                    classSets: this.parseListOfLists(function() {
                        var e = this.parseUShort(),
                            t = this.parseUShort();
                        return {
                            classes: this.parseUShortList(e - 1),
                            lookupRecords: this.parseRecordList(t, e1)
                        }
                    })
                };
                if (3 === t) {
                    var r = this.parseUShort(),
                        a = this.parseUShort();
                    return {
                        substFormat: t,
                        coverages: this.parseList(r, en.pointer(en.coverage)),
                        lookupRecords: this.parseRecordList(a, e1)
                    }
                }
                G.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.")
            }, e0[6] = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                return 1 === t ? {
                    substFormat: 1,
                    coverage: this.parsePointer(en.coverage),
                    chainRuleSets: this.parseListOfLists(function() {
                        return {
                            backtrack: this.parseUShortList(),
                            input: this.parseUShortList(this.parseShort() - 1),
                            lookahead: this.parseUShortList(),
                            lookupRecords: this.parseRecordList(e1)
                        }
                    })
                } : 2 === t ? {
                    substFormat: 2,
                    coverage: this.parsePointer(en.coverage),
                    backtrackClassDef: this.parsePointer(en.classDef),
                    inputClassDef: this.parsePointer(en.classDef),
                    lookaheadClassDef: this.parsePointer(en.classDef),
                    chainClassSet: this.parseListOfLists(function() {
                        return {
                            backtrack: this.parseUShortList(),
                            input: this.parseUShortList(this.parseShort() - 1),
                            lookahead: this.parseUShortList(),
                            lookupRecords: this.parseRecordList(e1)
                        }
                    })
                } : 3 === t ? {
                    substFormat: 3,
                    backtrackCoverage: this.parseList(en.pointer(en.coverage)),
                    inputCoverage: this.parseList(en.pointer(en.coverage)),
                    lookaheadCoverage: this.parseList(en.pointer(en.coverage)),
                    lookupRecords: this.parseRecordList(e1)
                } : void G.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.")
            }, e0[7] = function() {
                var e = this.parseUShort();
                G.argument(1 === e, "GSUB Extension Substitution subtable identifier-format must be 1");
                var t = this.parseUShort(),
                    r = new en(this.data, this.offset + this.parseULong());
                return {
                    substFormat: 1,
                    lookupType: t,
                    extension: e0[t].call(r)
                }
            }, e0[8] = function() {
                var e = this.parseUShort();
                return G.argument(1 === e, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
                    substFormat: e,
                    coverage: this.parsePointer(en.coverage),
                    backtrackCoverage: this.parseList(en.pointer(en.coverage)),
                    lookaheadCoverage: this.parseList(en.pointer(en.coverage)),
                    substitutes: this.parseUShortList()
                }
            };
            var e2 = Array(9);
            e2[1] = function(e) {
                return 1 === e.substFormat ? new J.Table("substitutionTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: 1
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }, {
                    name: "deltaGlyphID",
                    type: "USHORT",
                    value: e.deltaGlyphId
                }]) : new J.Table("substitutionTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: 2
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }].concat(J.ushortList("substitute", e.substitute)))
            }, e2[2] = function(e) {
                return G.assert(1 === e.substFormat, "Lookup type 2 substFormat must be 1."), new J.Table("substitutionTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: 1
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }].concat(J.tableList("seqSet", e.sequences, function(e) {
                    return new J.Table("sequenceSetTable", J.ushortList("sequence", e))
                })))
            }, e2[3] = function(e) {
                return G.assert(1 === e.substFormat, "Lookup type 3 substFormat must be 1."), new J.Table("substitutionTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: 1
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }].concat(J.tableList("altSet", e.alternateSets, function(e) {
                    return new J.Table("alternateSetTable", J.ushortList("alternate", e))
                })))
            }, e2[4] = function(e) {
                return G.assert(1 === e.substFormat, "Lookup type 4 substFormat must be 1."), new J.Table("substitutionTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: 1
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }].concat(J.tableList("ligSet", e.ligatureSets, function(e) {
                    return new J.Table("ligatureSetTable", J.tableList("ligature", e, function(e) {
                        return new J.Table("ligatureTable", [{
                            name: "ligGlyph",
                            type: "USHORT",
                            value: e.ligGlyph
                        }].concat(J.ushortList("component", e.components, e.components.length + 1)))
                    }))
                })))
            }, e2[6] = function(e) {
                if (1 === e.substFormat) return new J.Table("chainContextTable", [{
                    name: "substFormat",
                    type: "USHORT",
                    value: e.substFormat
                }, {
                    name: "coverage",
                    type: "TABLE",
                    value: new J.Coverage(e.coverage)
                }].concat(J.tableList("chainRuleSet", e.chainRuleSets, function(e) {
                    return new J.Table("chainRuleSetTable", J.tableList("chainRule", e, function(e) {
                        var t = J.ushortList("backtrackGlyph", e.backtrack, e.backtrack.length).concat(J.ushortList("inputGlyph", e.input, e.input.length + 1)).concat(J.ushortList("lookaheadGlyph", e.lookahead, e.lookahead.length)).concat(J.ushortList("substitution", [], e.lookupRecords.length));
                        return e.lookupRecords.forEach(function(e, r) {
                            t = t.concat({
                                name: "sequenceIndex" + r,
                                type: "USHORT",
                                value: e.sequenceIndex
                            }).concat({
                                name: "lookupListIndex" + r,
                                type: "USHORT",
                                value: e.lookupListIndex
                            })
                        }), new J.Table("chainRuleTable", t)
                    }))
                })));
                if (2 === e.substFormat) G.assert(!1, "lookup type 6 format 2 is not yet supported.");
                else if (3 === e.substFormat) {
                    var t = [{
                        name: "substFormat",
                        type: "USHORT",
                        value: e.substFormat
                    }];
                    return t.push({
                        name: "backtrackGlyphCount",
                        type: "USHORT",
                        value: e.backtrackCoverage.length
                    }), e.backtrackCoverage.forEach(function(e, r) {
                        t.push({
                            name: "backtrackCoverage" + r,
                            type: "TABLE",
                            value: new J.Coverage(e)
                        })
                    }), t.push({
                        name: "inputGlyphCount",
                        type: "USHORT",
                        value: e.inputCoverage.length
                    }), e.inputCoverage.forEach(function(e, r) {
                        t.push({
                            name: "inputCoverage" + r,
                            type: "TABLE",
                            value: new J.Coverage(e)
                        })
                    }), t.push({
                        name: "lookaheadGlyphCount",
                        type: "USHORT",
                        value: e.lookaheadCoverage.length
                    }), e.lookaheadCoverage.forEach(function(e, r) {
                        t.push({
                            name: "lookaheadCoverage" + r,
                            type: "TABLE",
                            value: new J.Coverage(e)
                        })
                    }), t.push({
                        name: "substitutionCount",
                        type: "USHORT",
                        value: e.lookupRecords.length
                    }), e.lookupRecords.forEach(function(e, r) {
                        t = t.concat({
                            name: "sequenceIndex" + r,
                            type: "USHORT",
                            value: e.sequenceIndex
                        }).concat({
                            name: "lookupListIndex" + r,
                            type: "USHORT",
                            value: e.lookupListIndex
                        })
                    }), new J.Table("chainContextTable", t)
                }
                G.assert(!1, "lookup type 6 format must be 1, 2 or 3.")
            };
            var e6 = {
                    parse: function(e, t) {
                        t = t || 0;
                        var r = new en(e, t),
                            a = r.parseVersion(1);
                        return (G.argument(1 === a || 1.1 === a, "Unsupported GSUB table version."), 1 === a) ? {
                            version: a,
                            scripts: r.parseScriptList(),
                            features: r.parseFeatureList(),
                            lookups: r.parseLookupList(e0)
                        } : {
                            version: a,
                            scripts: r.parseScriptList(),
                            features: r.parseFeatureList(),
                            lookups: r.parseLookupList(e0),
                            variations: r.parseFeatureVariationsList()
                        }
                    },
                    make: function(e) {
                        return new J.Table("GSUB", [{
                            name: "version",
                            type: "ULONG",
                            value: 65536
                        }, {
                            name: "scripts",
                            type: "TABLE",
                            value: new J.ScriptList(e.scripts)
                        }, {
                            name: "features",
                            type: "TABLE",
                            value: new J.FeatureList(e.features)
                        }, {
                            name: "lookups",
                            type: "TABLE",
                            value: new J.LookupList(e.lookups, e2)
                        }])
                    }
                },
                e3 = {
                    parse: function(e, t) {
                        var r = new es.Parser(e, t),
                            a = r.parseULong();
                        G.argument(1 === a, "Unsupported META table version."), r.parseULong(), r.parseULong();
                        for (var n = r.parseULong(), o = {}, s = 0; s < n; s++) {
                            var i = r.parseTag(),
                                u = r.parseULong(),
                                l = r.parseULong(),
                                p = B.UTF8(e, t + u, l);
                            o[i] = p
                        }
                        return o
                    },
                    make: function(e) {
                        var t = Object.keys(e).length,
                            r = "",
                            a = 16 + 12 * t,
                            n = new J.Table("meta", [{
                                name: "version",
                                type: "ULONG",
                                value: 1
                            }, {
                                name: "flags",
                                type: "ULONG",
                                value: 0
                            }, {
                                name: "offset",
                                type: "ULONG",
                                value: a
                            }, {
                                name: "numTags",
                                type: "ULONG",
                                value: t
                            }]);
                        for (var o in e) {
                            var s = r.length;
                            r += e[o], n.fields.push({
                                name: "tag " + o,
                                type: "TAG",
                                value: o
                            }), n.fields.push({
                                name: "offset " + o,
                                type: "ULONG",
                                value: a + s
                            }), n.fields.push({
                                name: "length " + o,
                                type: "ULONG",
                                value: e[o].length
                            })
                        }
                        return n.fields.push({
                            name: "stringPool",
                            type: "CHARARRAY",
                            value: r
                        }), n
                    }
                };

            function e5(e) {
                return Math.log(e) / Math.log(2) | 0
            }

            function e4(e) {
                for (; e.length % 4 != 0;) e.push(0);
                for (var t = 0, r = 0; r < e.length; r += 4) t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
                return t % 4294967296
            }

            function e8(e, t, r, a) {
                return new J.Record("Table Record", [{
                    name: "tag",
                    type: "TAG",
                    value: void 0 !== e ? e : ""
                }, {
                    name: "checkSum",
                    type: "ULONG",
                    value: void 0 !== t ? t : 0
                }, {
                    name: "offset",
                    type: "ULONG",
                    value: void 0 !== r ? r : 0
                }, {
                    name: "length",
                    type: "ULONG",
                    value: void 0 !== a ? a : 0
                }])
            }

            function e7(e) {
                var t = new J.Table("sfnt", [{
                    name: "version",
                    type: "TAG",
                    value: "OTTO"
                }, {
                    name: "numTables",
                    type: "USHORT",
                    value: 0
                }, {
                    name: "searchRange",
                    type: "USHORT",
                    value: 0
                }, {
                    name: "entrySelector",
                    type: "USHORT",
                    value: 0
                }, {
                    name: "rangeShift",
                    type: "USHORT",
                    value: 0
                }]);
                t.tables = e, t.numTables = e.length;
                var r = Math.pow(2, e5(t.numTables));
                t.searchRange = 16 * r, t.entrySelector = e5(r), t.rangeShift = 16 * t.numTables - t.searchRange;
                for (var a = [], n = [], o = t.sizeOf() + e8().sizeOf() * t.numTables; o % 4 != 0;) o += 1, n.push({
                    name: "padding",
                    type: "BYTE",
                    value: 0
                });
                for (var s = 0; s < e.length; s += 1) {
                    var i = e[s];
                    G.argument(4 === i.tableName.length, "Table name" + i.tableName + " is invalid.");
                    var u = i.sizeOf(),
                        l = e8(i.tableName, e4(i.encode()), o, u);
                    for (a.push({
                            name: l.tag + " Table Record",
                            type: "RECORD",
                            value: l
                        }), n.push({
                            name: i.tableName + " table",
                            type: "RECORD",
                            value: i
                        }), o += u, G.argument(!isNaN(o), "Something went wrong calculating the offset."); o % 4 != 0;) o += 1, n.push({
                        name: "padding",
                        type: "BYTE",
                        value: 0
                    })
                }
                return a.sort(function(e, t) {
                    return e.value.tag > t.value.tag ? 1 : -1
                }), t.fields = t.fields.concat(a), t.fields = t.fields.concat(n), t
            }

            function e9(e, t, r) {
                for (var a = 0; a < t.length; a += 1) {
                    var n = e.charToGlyphIndex(t[a]);
                    if (n > 0) return e.glyphs.get(n).getMetrics()
                }
                return r
            }
            var te = {
                make: e7,
                fontToTable: function(e) {
                    for (var t, r = [], a = [], n = [], o = [], s = [], i = [], u = [], l = 0, p = 0, c = 0, h = 0, f = 0, d = 0; d < e.glyphs.length; d += 1) {
                        var g = e.glyphs.get(d),
                            v = 0 | g.unicode;
                        if (isNaN(g.advanceWidth)) throw Error("Glyph " + g.name + " (" + d + "): advanceWidth is not a number.");
                        (t > v || void 0 === t) && v > 0 && (t = v), l < v && (l = v);
                        var m = eJ.getUnicodeRange(v);
                        if (m < 32) p |= 1 << m;
                        else if (m < 64) c |= 1 << m - 32;
                        else if (m < 96) h |= 1 << m - 64;
                        else if (m < 123) f |= 1 << m - 96;
                        else throw Error("Unicode ranges bits > 123 are reserved for internal usage");
                        if (".notdef" !== g.name) {
                            var y = g.getMetrics();
                            r.push(y.xMin), a.push(y.yMin), n.push(y.xMax), o.push(y.yMax), i.push(y.leftSideBearing), u.push(y.rightSideBearing), s.push(g.advanceWidth)
                        }
                    }
                    var x = {
                        xMin: Math.min.apply(null, r),
                        yMin: Math.min.apply(null, a),
                        xMax: Math.max.apply(null, n),
                        yMax: Math.max.apply(null, o),
                        advanceWidthMax: Math.max.apply(null, s),
                        advanceWidthAvg: function(e) {
                            for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];
                            return t / e.length
                        }(s),
                        minLeftSideBearing: Math.min.apply(null, i),
                        maxLeftSideBearing: Math.max.apply(null, i),
                        minRightSideBearing: Math.min.apply(null, u)
                    };
                    x.ascender = e.ascender, x.descender = e.descender;
                    var b = eB.make({
                            flags: 3,
                            unitsPerEm: e.unitsPerEm,
                            xMin: x.xMin,
                            yMin: x.yMin,
                            xMax: x.xMax,
                            yMax: x.yMax,
                            lowestRecPPEM: 3,
                            createdTimestamp: e.createdTimestamp
                        }),
                        S = eF.make({
                            ascender: x.ascender,
                            descender: x.descender,
                            advanceWidthMax: x.advanceWidthMax,
                            minLeftSideBearing: x.minLeftSideBearing,
                            minRightSideBearing: x.minRightSideBearing,
                            xMaxExtent: x.maxLeftSideBearing + (x.xMax - x.xMin),
                            numberOfHMetrics: e.glyphs.length
                        }),
                        T = eP.make(e.glyphs.length),
                        k = eJ.make(Object.assign({
                            xAvgCharWidth: Math.round(x.advanceWidthAvg),
                            usFirstCharIndex: t,
                            usLastCharIndex: l,
                            ulUnicodeRange1: p,
                            ulUnicodeRange2: c,
                            ulUnicodeRange3: h,
                            ulUnicodeRange4: f,
                            sTypoAscender: x.ascender,
                            sTypoDescender: x.descender,
                            sTypoLineGap: 0,
                            usWinAscent: x.yMax,
                            usWinDescent: Math.abs(x.yMin),
                            ulCodePageRange1: 1,
                            sxHeight: e9(e, "xyvw", {
                                yMax: Math.round(x.ascender / 2)
                            }).yMax,
                            sCapHeight: e9(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", x).yMax,
                            usDefaultChar: e.hasChar(" ") ? 32 : 0,
                            usBreakChar: e.hasChar(" ") ? 32 : 0
                        }, e.tables.os2)),
                        U = function(e) {
                            for (var t = new J.Table("hmtx", []), r = 0; r < e.length; r += 1) {
                                var a = e.get(r),
                                    n = a.advanceWidth || 0,
                                    o = a.leftSideBearing || 0;
                                t.fields.push({
                                    name: "advanceWidth_" + r,
                                    type: "USHORT",
                                    value: n
                                }), t.fields.push({
                                    name: "leftSideBearing_" + r,
                                    type: "SHORT",
                                    value: o
                                })
                            }
                            return t
                        }(e.glyphs),
                        O = ei.make(e.glyphs),
                        E = e.getEnglishName("fontFamily"),
                        R = e.getEnglishName("fontSubfamily"),
                        L = E + " " + R,
                        C = e.getEnglishName("postScriptName");
                    C || (C = E.replace(/\s/g, "") + "-" + R);
                    var D = {};
                    for (var w in e.names) D[w] = e.names[w];
                    D.uniqueID || (D.uniqueID = {
                        en: e.getEnglishName("manufacturer") + ":" + L
                    }), D.postScriptName || (D.postScriptName = {
                        en: C
                    }), D.preferredFamily || (D.preferredFamily = e.names.fontFamily), D.preferredSubfamily || (D.preferredSubfamily = e.names.fontSubfamily);
                    var I = [],
                        M = eQ.make(D, I),
                        G = I.length > 0 ? eA.make(I) : void 0,
                        B = e$.make(),
                        F = eG.make(e.glyphs, {
                            version: e.getEnglishName("version"),
                            fullName: L,
                            familyName: E,
                            weightName: R,
                            postScriptName: C,
                            unitsPerEm: e.unitsPerEm,
                            fontBBox: [0, x.yMin, x.ascender, x.advanceWidthMax]
                        }),
                        A = e.metas && Object.keys(e.metas).length > 0 ? e3.make(e.metas) : void 0,
                        P = [b, S, T, k, M, O, B, F, U];
                    G && P.push(G), e.tables.gsub && P.push(e6.make(e.tables.gsub)), A && P.push(A);
                    for (var N = e7(P), H = e4(N.encode()), z = N.fields, W = !1, _ = 0; _ < z.length; _ += 1)
                        if ("head table" === z[_].name) {
                            z[_].value.checkSumAdjustment = 2981146554 - H, W = !0;
                            break
                        }
                    if (!W) throw Error("Could not find head table with checkSum to adjust.");
                    return N
                },
                computeCheckSum: e4
            };

            function tt(e, t) {
                for (var r = 0, a = e.length - 1; r <= a;) {
                    var n = r + a >>> 1,
                        o = e[n].tag;
                    if (o === t) return n;
                    o < t ? r = n + 1 : a = n - 1
                }
                return -r - 1
            }

            function tr(e, t) {
                for (var r = 0, a = e.length - 1; r <= a;) {
                    var n = r + a >>> 1,
                        o = e[n];
                    if (o === t) return n;
                    o < t ? r = n + 1 : a = n - 1
                }
                return -r - 1
            }

            function ta(e, t) {
                for (var r, a = 0, n = e.length - 1; a <= n;) {
                    var o = a + n >>> 1,
                        s = (r = e[o]).start;
                    if (s === t) return r;
                    s < t ? a = o + 1 : n = o - 1
                }
                if (a > 0) return t > (r = e[a - 1]).end ? 0 : r
            }

            function tn(e, t) {
                this.font = e, this.tableName = t
            }

            function to(e) {
                tn.call(this, e, "gpos")
            }

            function ts(e) {
                tn.call(this, e, "gsub")
            }

            function ti(e, t, r) {
                for (var a = e.subtables, n = 0; n < a.length; n++) {
                    var o = a[n];
                    if (o.substFormat === t) return o
                }
                if (r) return a.push(r), r
            }

            function tu(e) {
                for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), a = 0; a < e.length; ++a) r[a] = e[a];
                return t
            }

            function tl(e, t) {
                if (!e) throw t
            }

            function tp(e, t, r, a, n) {
                var o;
                return (t & a) > 0 ? (o = e.parseByte(), (t & n) == 0 && (o = -o), o = r + o) : o = (t & n) > 0 ? r : r + e.parseShort(), o
            }

            function tc(e, t, r) {
                var a = new es.Parser(t, r);
                if (e.numberOfContours = a.parseShort(), e._xMin = a.parseShort(), e._yMin = a.parseShort(), e._xMax = a.parseShort(), e._yMax = a.parseShort(), e.numberOfContours > 0) {
                    for (var n = e.endPointIndices = [], o = 0; o < e.numberOfContours; o += 1) n.push(a.parseUShort());
                    e.instructionLength = a.parseUShort(), e.instructions = [];
                    for (var s = 0; s < e.instructionLength; s += 1) e.instructions.push(a.parseByte());
                    var i = n[n.length - 1] + 1;
                    c = [];
                    for (var u = 0; u < i; u += 1)
                        if (h = a.parseByte(), c.push(h), (8 & h) > 0)
                            for (var l = a.parseByte(), p = 0; p < l; p += 1) c.push(h), u += 1;
                    if (G.argument(c.length === i, "Bad flags."), n.length > 0) {
                        var c, h, f, d = [];
                        if (i > 0) {
                            for (var g = 0; g < i; g += 1) h = c[g], (f = {}).onCurve = !!(1 & h), f.lastPointOfContour = n.indexOf(g) >= 0, d.push(f);
                            for (var v = 0, m = 0; m < i; m += 1) h = c[m], (f = d[m]).x = tp(a, h, v, 2, 16), v = f.x;
                            for (var y = 0, x = 0; x < i; x += 1) h = c[x], (f = d[x]).y = tp(a, h, y, 4, 32), y = f.y
                        }
                        e.points = d
                    } else e.points = []
                } else if (0 === e.numberOfContours) e.points = [];
                else {
                    e.isComposite = !0, e.points = [], e.components = [];
                    for (var b = !0; b;) {
                        c = a.parseUShort();
                        var S = {
                            glyphIndex: a.parseUShort(),
                            xScale: 1,
                            scale01: 0,
                            scale10: 0,
                            yScale: 1,
                            dx: 0,
                            dy: 0
                        };
                        (1 & c) > 0 ? (2 & c) > 0 ? (S.dx = a.parseShort(), S.dy = a.parseShort()) : S.matchedPoints = [a.parseUShort(), a.parseUShort()] : (2 & c) > 0 ? (S.dx = a.parseChar(), S.dy = a.parseChar()) : S.matchedPoints = [a.parseByte(), a.parseByte()], (8 & c) > 0 ? S.xScale = S.yScale = a.parseF2Dot14() : (64 & c) > 0 ? (S.xScale = a.parseF2Dot14(), S.yScale = a.parseF2Dot14()) : (128 & c) > 0 && (S.xScale = a.parseF2Dot14(), S.scale01 = a.parseF2Dot14(), S.scale10 = a.parseF2Dot14(), S.yScale = a.parseF2Dot14()), e.components.push(S), b = !!(32 & c)
                    }
                    if (256 & c) {
                        e.instructionLength = a.parseUShort(), e.instructions = [];
                        for (var T = 0; T < e.instructionLength; T += 1) e.instructions.push(a.parseByte())
                    }
                }
            }

            function th(e, t) {
                for (var r = [], a = 0; a < e.length; a += 1) {
                    var n = e[a],
                        o = {
                            x: t.xScale * n.x + t.scale01 * n.y + t.dx,
                            y: t.scale10 * n.x + t.yScale * n.y + t.dy,
                            onCurve: n.onCurve,
                            lastPointOfContour: n.lastPointOfContour
                        };
                    r.push(o)
                }
                return r
            }

            function tf(e) {
                var t = new w;
                if (!e) return t;
                for (var r = function(e) {
                        for (var t = [], r = [], a = 0; a < e.length; a += 1) {
                            var n = e[a];
                            r.push(n), n.lastPointOfContour && (t.push(r), r = [])
                        }
                        return G.argument(0 === r.length, "There are still points left in the current contour."), t
                    }(e), a = 0; a < r.length; ++a) {
                    var n = r[a],
                        o = null,
                        s = n[n.length - 1],
                        i = n[0];
                    if (s.onCurve) t.moveTo(s.x, s.y);
                    else if (i.onCurve) t.moveTo(i.x, i.y);
                    else {
                        var u = {
                            x: (s.x + i.x) * .5,
                            y: (s.y + i.y) * .5
                        };
                        t.moveTo(u.x, u.y)
                    }
                    for (var l = 0; l < n.length; ++l)
                        if (o = s, s = i, i = n[(l + 1) % n.length], s.onCurve) t.lineTo(s.x, s.y);
                        else {
                            var p = i;
                            o.onCurve || (s.x, o.x, s.y, o.y), i.onCurve || (p = {
                                x: (s.x + i.x) * .5,
                                y: (s.y + i.y) * .5
                            }), t.quadraticCurveTo(s.x, s.y, p.x, p.y)
                        }
                    t.closePath()
                }
                return t
            }

            function td(e, t) {
                if (t.isComposite)
                    for (var r = 0; r < t.components.length; r += 1) {
                        var a = t.components[r],
                            n = e.get(a.glyphIndex);
                        if (n.getPath(), n.points) {
                            var o = void 0;
                            if (void 0 === a.matchedPoints) o = th(n.points, a);
                            else {
                                if (a.matchedPoints[0] > t.points.length - 1 || a.matchedPoints[1] > n.points.length - 1) throw Error("Matched points out of range in " + t.name);
                                var s = t.points[a.matchedPoints[0]],
                                    i = n.points[a.matchedPoints[1]],
                                    u = {
                                        xScale: a.xScale,
                                        scale01: a.scale01,
                                        scale10: a.scale10,
                                        yScale: a.yScale,
                                        dx: 0,
                                        dy: 0
                                    };
                                i = th([i], u)[0], u.dx = s.x - i.x, u.dy = s.y - i.y, o = th(n.points, u)
                            }
                            t.points = t.points.concat(o)
                        }
                    }
                return tf(t.points)
            }
            tn.prototype = {
                searchTag: tt,
                binSearch: tr,
                getTable: function(e) {
                    var t = this.font.tables[this.tableName];
                    return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t
                },
                getScriptNames: function() {
                    var e = this.getTable();
                    return e ? e.scripts.map(function(e) {
                        return e.tag
                    }) : []
                },
                getDefaultScriptName: function() {
                    var e = this.getTable();
                    if (e) {
                        for (var t = !1, r = 0; r < e.scripts.length; r++) {
                            var a = e.scripts[r].tag;
                            if ("DFLT" === a) return a;
                            "latn" === a && (t = !0)
                        }
                        if (t) return "latn"
                    }
                },
                getScriptTable: function(e, t) {
                    var r = this.getTable(t);
                    if (r) {
                        e = e || "DFLT";
                        var a = r.scripts,
                            n = tt(r.scripts, e);
                        if (n >= 0) return a[n].script;
                        if (t) {
                            var o = {
                                tag: e,
                                script: {
                                    defaultLangSys: {
                                        reserved: 0,
                                        reqFeatureIndex: 65535,
                                        featureIndexes: []
                                    },
                                    langSysRecords: []
                                }
                            };
                            return a.splice(-1 - n, 0, o), o.script
                        }
                    }
                },
                getLangSysTable: function(e, t, r) {
                    var a = this.getScriptTable(e, r);
                    if (a) {
                        if (!t || "dflt" === t || "DFLT" === t) return a.defaultLangSys;
                        var n = tt(a.langSysRecords, t);
                        if (n >= 0) return a.langSysRecords[n].langSys;
                        if (r) {
                            var o = {
                                tag: t,
                                langSys: {
                                    reserved: 0,
                                    reqFeatureIndex: 65535,
                                    featureIndexes: []
                                }
                            };
                            return a.langSysRecords.splice(-1 - n, 0, o), o.langSys
                        }
                    }
                },
                getFeatureTable: function(e, t, r, a) {
                    var n = this.getLangSysTable(e, t, a);
                    if (n) {
                        for (var o, s = n.featureIndexes, i = this.font.tables[this.tableName].features, u = 0; u < s.length; u++)
                            if ((o = i[s[u]]).tag === r) return o.feature;
                        if (a) {
                            var l = i.length;
                            return G.assert(0 === l || r >= i[l - 1].tag, "Features must be added in alphabetical order."), o = {
                                tag: r,
                                feature: {
                                    params: 0,
                                    lookupListIndexes: []
                                }
                            }, i.push(o), s.push(l), o.feature
                        }
                    }
                },
                getLookupTables: function(e, t, r, a, n) {
                    var o = this.getFeatureTable(e, t, r, n),
                        s = [];
                    if (o) {
                        for (var i, u = o.lookupListIndexes, l = this.font.tables[this.tableName].lookups, p = 0; p < u.length; p++)(i = l[u[p]]).lookupType === a && s.push(i);
                        if (0 === s.length && n) {
                            i = {
                                lookupType: a,
                                lookupFlag: 0,
                                subtables: [],
                                markFilteringSet: void 0
                            };
                            var c = l.length;
                            return l.push(i), u.push(c), [i]
                        }
                    }
                    return s
                },
                getGlyphClass: function(e, t) {
                    switch (e.format) {
                        case 1:
                            if (e.startGlyph <= t && t < e.startGlyph + e.classes.length) return e.classes[t - e.startGlyph];
                            return 0;
                        case 2:
                            var r = ta(e.ranges, t);
                            return r ? r.classId : 0
                    }
                },
                getCoverageIndex: function(e, t) {
                    switch (e.format) {
                        case 1:
                            var r = tr(e.glyphs, t);
                            return r >= 0 ? r : -1;
                        case 2:
                            var a = ta(e.ranges, t);
                            return a ? a.index + t - a.start : -1
                    }
                },
                expandCoverage: function(e) {
                    if (1 === e.format) return e.glyphs;
                    for (var t = [], r = e.ranges, a = 0; a < r.length; a++)
                        for (var n = r[a], o = n.start, s = n.end, i = o; i <= s; i++) t.push(i);
                    return t
                }
            }, to.prototype = tn.prototype, to.prototype.init = function() {
                var e = this.getDefaultScriptName();
                this.defaultKerningTables = this.getKerningTables(e)
            }, to.prototype.getKerningValue = function(e, t, r) {
                for (var a = 0; a < e.length; a++)
                    for (var n = e[a].subtables, o = 0; o < n.length; o++) {
                        var s = n[o],
                            i = this.getCoverageIndex(s.coverage, t);
                        if (!(i < 0)) switch (s.posFormat) {
                            case 1:
                                for (var u = s.pairSets[i], l = 0; l < u.length; l++) {
                                    var p = u[l];
                                    if (p.secondGlyph === r) return p.value1 && p.value1.xAdvance || 0
                                }
                                break;
                            case 2:
                                var c = this.getGlyphClass(s.classDef1, t),
                                    h = this.getGlyphClass(s.classDef2, r),
                                    f = s.classRecords[c][h];
                                return f.value1 && f.value1.xAdvance || 0
                        }
                    }
                return 0
            }, to.prototype.getKerningTables = function(e, t) {
                if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2)
            }, ts.prototype = tn.prototype, ts.prototype.createDefaultTable = function() {
                return {
                    version: 1,
                    scripts: [{
                        tag: "DFLT",
                        script: {
                            defaultLangSys: {
                                reserved: 0,
                                reqFeatureIndex: 65535,
                                featureIndexes: []
                            },
                            langSysRecords: []
                        }
                    }],
                    features: [],
                    lookups: []
                }
            }, ts.prototype.getSingle = function(e, t, r) {
                for (var a = [], n = this.getLookupTables(t, r, e, 1), o = 0; o < n.length; o++)
                    for (var s = n[o].subtables, i = 0; i < s.length; i++) {
                        var u = s[i],
                            l = this.expandCoverage(u.coverage),
                            p = void 0;
                        if (1 === u.substFormat) {
                            var c = u.deltaGlyphId;
                            for (p = 0; p < l.length; p++) {
                                var h = l[p];
                                a.push({
                                    sub: h,
                                    by: h + c
                                })
                            }
                        } else {
                            var f = u.substitute;
                            for (p = 0; p < l.length; p++) a.push({
                                sub: l[p],
                                by: f[p]
                            })
                        }
                    }
                return a
            }, ts.prototype.getMultiple = function(e, t, r) {
                for (var a = [], n = this.getLookupTables(t, r, e, 2), o = 0; o < n.length; o++)
                    for (var s = n[o].subtables, i = 0; i < s.length; i++) {
                        var u = s[i],
                            l = this.expandCoverage(u.coverage),
                            p = void 0;
                        for (p = 0; p < l.length; p++) {
                            var c = l[p],
                                h = u.sequences[p];
                            a.push({
                                sub: c,
                                by: h
                            })
                        }
                    }
                return a
            }, ts.prototype.getAlternates = function(e, t, r) {
                for (var a = [], n = this.getLookupTables(t, r, e, 3), o = 0; o < n.length; o++)
                    for (var s = n[o].subtables, i = 0; i < s.length; i++)
                        for (var u = s[i], l = this.expandCoverage(u.coverage), p = u.alternateSets, c = 0; c < l.length; c++) a.push({
                            sub: l[c],
                            by: p[c]
                        });
                return a
            }, ts.prototype.getLigatures = function(e, t, r) {
                for (var a = [], n = this.getLookupTables(t, r, e, 4), o = 0; o < n.length; o++)
                    for (var s = n[o].subtables, i = 0; i < s.length; i++)
                        for (var u = s[i], l = this.expandCoverage(u.coverage), p = u.ligatureSets, c = 0; c < l.length; c++)
                            for (var h = l[c], f = p[c], d = 0; d < f.length; d++) {
                                var g = f[d];
                                a.push({
                                    sub: [h].concat(g.components),
                                    by: g.ligGlyph
                                })
                            }
                return a
            }, ts.prototype.addSingle = function(e, t, r, a) {
                var n = ti(this.getLookupTables(r, a, e, 1, !0)[0], 2, {
                    substFormat: 2,
                    coverage: {
                        format: 1,
                        glyphs: []
                    },
                    substitute: []
                });
                G.assert(1 === n.coverage.format, "Single: unable to modify coverage table format " + n.coverage.format);
                var o = t.sub,
                    s = this.binSearch(n.coverage.glyphs, o);
                s < 0 && (s = -1 - s, n.coverage.glyphs.splice(s, 0, o), n.substitute.splice(s, 0, 0)), n.substitute[s] = t.by
            }, ts.prototype.addMultiple = function(e, t, r, a) {
                G.assert(t.by instanceof Array && t.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
                var n = ti(this.getLookupTables(r, a, e, 2, !0)[0], 1, {
                    substFormat: 1,
                    coverage: {
                        format: 1,
                        glyphs: []
                    },
                    sequences: []
                });
                G.assert(1 === n.coverage.format, "Multiple: unable to modify coverage table format " + n.coverage.format);
                var o = t.sub,
                    s = this.binSearch(n.coverage.glyphs, o);
                s < 0 && (s = -1 - s, n.coverage.glyphs.splice(s, 0, o), n.sequences.splice(s, 0, 0)), n.sequences[s] = t.by
            }, ts.prototype.addAlternate = function(e, t, r, a) {
                var n = ti(this.getLookupTables(r, a, e, 3, !0)[0], 1, {
                    substFormat: 1,
                    coverage: {
                        format: 1,
                        glyphs: []
                    },
                    alternateSets: []
                });
                G.assert(1 === n.coverage.format, "Alternate: unable to modify coverage table format " + n.coverage.format);
                var o = t.sub,
                    s = this.binSearch(n.coverage.glyphs, o);
                s < 0 && (s = -1 - s, n.coverage.glyphs.splice(s, 0, o), n.alternateSets.splice(s, 0, 0)), n.alternateSets[s] = t.by
            }, ts.prototype.addLigature = function(e, t, r, a) {
                var n = this.getLookupTables(r, a, e, 4, !0)[0],
                    o = n.subtables[0];
                o || (o = {
                    substFormat: 1,
                    coverage: {
                        format: 1,
                        glyphs: []
                    },
                    ligatureSets: []
                }, n.subtables[0] = o), G.assert(1 === o.coverage.format, "Ligature: unable to modify coverage table format " + o.coverage.format);
                var s = t.sub[0],
                    i = t.sub.slice(1),
                    u = {
                        ligGlyph: t.by,
                        components: i
                    },
                    l = this.binSearch(o.coverage.glyphs, s);
                if (l >= 0) {
                    for (var p = o.ligatureSets[l], c = 0; c < p.length; c++)
                        if (function(e, t) {
                                var r = e.length;
                                if (r !== t.length) return !1;
                                for (var a = 0; a < r; a++)
                                    if (e[a] !== t[a]) return !1;
                                return !0
                            }(p[c].components, i)) return;
                    p.push(u)
                } else l = -1 - l, o.coverage.glyphs.splice(l, 0, s), o.ligatureSets.splice(l, 0, [u])
            }, ts.prototype.getFeature = function(e, t, r) {
                if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);
                switch (e) {
                    case "aalt":
                    case "salt":
                        return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));
                    case "dlig":
                    case "liga":
                    case "rlig":
                        return this.getLigatures(e, t, r);
                    case "ccmp":
                        return this.getMultiple(e, t, r).concat(this.getLigatures(e, t, r));
                    case "stch":
                        return this.getMultiple(e, t, r)
                }
            }, ts.prototype.add = function(e, t, r, a) {
                if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, a);
                switch (e) {
                    case "aalt":
                    case "salt":
                        if ("number" == typeof t.by) return this.addSingle(e, t, r, a);
                        return this.addAlternate(e, t, r, a);
                    case "dlig":
                    case "liga":
                    case "rlig":
                        return this.addLigature(e, t, r, a);
                    case "ccmp":
                        if (t.by instanceof Array) return this.addMultiple(e, t, r, a);
                        return this.addLigature(e, t, r, a)
                }
            };
            var tg = {
                getPath: tf,
                parse: function(e, t, r, a, n) {
                    var o;
                    return n.lowMemory ? (o = new eb.GlyphSet(a), a._push = function(n) {
                        var s = r[n];
                        s !== r[n + 1] ? o.push(n, eb.ttfGlyphLoader(a, n, tc, e, t + s, td)) : o.push(n, eb.glyphLoader(a, n))
                    }, o) : function(e, t, r, a) {
                        for (var n = new eb.GlyphSet(a), o = 0; o < r.length - 1; o += 1) {
                            var s = r[o];
                            s !== r[o + 1] ? n.push(o, eb.ttfGlyphLoader(a, o, tc, e, t + s, td)) : n.push(o, eb.glyphLoader(a, o))
                        }
                        return n
                    }(e, t, r, a)
                }
            };

            function tv(e) {
                this.font = e, this.getCommands = function(e) {
                    return tg.getPath(e).commands
                }, this._fpgmState = this._prepState = void 0, this._errorState = 0
            }

            function tm(e) {
                return e
            }

            function ty(e) {
                return Math.sign(e) * Math.round(Math.abs(e))
            }

            function tx(e) {
                return Math.sign(e) * Math.round(Math.abs(2 * e)) / 2
            }

            function tb(e) {
                return Math.sign(e) * (Math.round(Math.abs(e) + .5) - .5)
            }

            function tS(e) {
                return Math.sign(e) * Math.ceil(Math.abs(e))
            }

            function tT(e) {
                return Math.sign(e) * Math.floor(Math.abs(e))
            }
            var tk = function(e) {
                    var t = this.srPeriod,
                        r = this.srPhase,
                        a = this.srThreshold,
                        n = 1;
                    return (e < 0 && (e = -e, n = -1), e += a - r, (e = Math.trunc(e / t) * t + r) < 0) ? r * n : e * n
                },
                tU = {
                    x: 1,
                    y: 0,
                    axis: "x",
                    distance: function(e, t, r, a) {
                        return (r ? e.xo : e.x) - (a ? t.xo : t.x)
                    },
                    interpolate: function(e, t, r, a) {
                        var n, o, s, i, u, l, p;
                        if (!a || a === this) {
                            if (n = e.xo - t.xo, o = e.xo - r.xo, u = t.x - t.xo, l = r.x - r.xo, 0 === (p = (s = Math.abs(n)) + (i = Math.abs(o)))) {
                                e.x = e.xo + (u + l) / 2;
                                return
                            }
                            e.x = e.xo + (u * i + l * s) / p;
                            return
                        }
                        if (n = a.distance(e, t, !0, !0), o = a.distance(e, r, !0, !0), u = a.distance(t, t, !1, !0), l = a.distance(r, r, !1, !0), 0 === (p = (s = Math.abs(n)) + (i = Math.abs(o)))) {
                            tU.setRelative(e, e, (u + l) / 2, a, !0);
                            return
                        }
                        tU.setRelative(e, e, (u * i + l * s) / p, a, !0)
                    },
                    normalSlope: Number.NEGATIVE_INFINITY,
                    setRelative: function(e, t, r, a, n) {
                        if (!a || a === this) {
                            e.x = (n ? t.xo : t.x) + r;
                            return
                        }
                        var o = n ? t.xo : t.x,
                            s = n ? t.yo : t.y,
                            i = o + r * a.x,
                            u = s + r * a.y;
                        e.x = i + (e.y - u) / a.normalSlope
                    },
                    slope: 0,
                    touch: function(e) {
                        e.xTouched = !0
                    },
                    touched: function(e) {
                        return e.xTouched
                    },
                    untouch: function(e) {
                        e.xTouched = !1
                    }
                },
                tO = {
                    x: 0,
                    y: 1,
                    axis: "y",
                    distance: function(e, t, r, a) {
                        return (r ? e.yo : e.y) - (a ? t.yo : t.y)
                    },
                    interpolate: function(e, t, r, a) {
                        var n, o, s, i, u, l, p;
                        if (!a || a === this) {
                            if (n = e.yo - t.yo, o = e.yo - r.yo, u = t.y - t.yo, l = r.y - r.yo, 0 === (p = (s = Math.abs(n)) + (i = Math.abs(o)))) {
                                e.y = e.yo + (u + l) / 2;
                                return
                            }
                            e.y = e.yo + (u * i + l * s) / p;
                            return
                        }
                        if (n = a.distance(e, t, !0, !0), o = a.distance(e, r, !0, !0), u = a.distance(t, t, !1, !0), l = a.distance(r, r, !1, !0), 0 === (p = (s = Math.abs(n)) + (i = Math.abs(o)))) {
                            tO.setRelative(e, e, (u + l) / 2, a, !0);
                            return
                        }
                        tO.setRelative(e, e, (u * i + l * s) / p, a, !0)
                    },
                    normalSlope: 0,
                    setRelative: function(e, t, r, a, n) {
                        if (!a || a === this) {
                            e.y = (n ? t.yo : t.y) + r;
                            return
                        }
                        var o = n ? t.xo : t.x,
                            s = n ? t.yo : t.y,
                            i = o + r * a.x,
                            u = s + r * a.y;
                        e.y = u + a.normalSlope * (e.x - i)
                    },
                    slope: Number.POSITIVE_INFINITY,
                    touch: function(e) {
                        e.yTouched = !0
                    },
                    touched: function(e) {
                        return e.yTouched
                    },
                    untouch: function(e) {
                        e.yTouched = !1
                    }
                };

            function tE(e, t) {
                this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this)
            }

            function tR(e, t) {
                var r = Math.sqrt(e * e + t * t);
                return (e /= r, t /= r, 1 === e && 0 === t) ? tU : 0 === e && 1 === t ? tO : new tE(e, t)
            }

            function tL(e, t, r, a) {
                this.x = this.xo = Math.round(64 * e) / 64, this.y = this.yo = Math.round(64 * t) / 64, this.lastPointOfContour = r, this.onCurve = a, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this)
            }
            Object.freeze(tU), Object.freeze(tO), tE.prototype.distance = function(e, t, r, a) {
                return this.x * tU.distance(e, t, r, a) + this.y * tO.distance(e, t, r, a)
            }, tE.prototype.interpolate = function(e, t, r, a) {
                var n, o, s, i, u, l, p;
                if (s = a.distance(e, t, !0, !0), i = a.distance(e, r, !0, !0), n = a.distance(t, t, !1, !0), o = a.distance(r, r, !1, !0), 0 === (p = (u = Math.abs(s)) + (l = Math.abs(i)))) {
                    this.setRelative(e, e, (n + o) / 2, a, !0);
                    return
                }
                this.setRelative(e, e, (n * l + o * u) / p, a, !0)
            }, tE.prototype.setRelative = function(e, t, r, a, n) {
                a = a || this;
                var o = n ? t.xo : t.x,
                    s = n ? t.yo : t.y,
                    i = o + r * a.x,
                    u = s + r * a.y,
                    l = a.normalSlope,
                    p = this.slope,
                    c = e.x,
                    h = e.y;
                e.x = (p * c - l * i + u - h) / (p - l), e.y = p * (e.x - c) + h
            }, tE.prototype.touch = function(e) {
                e.xTouched = !0, e.yTouched = !0
            }, tL.prototype.nextTouched = function(e) {
                for (var t = this.nextPointOnContour; !e.touched(t) && t !== this;) t = t.nextPointOnContour;
                return t
            }, tL.prototype.prevTouched = function(e) {
                for (var t = this.prevPointOnContour; !e.touched(t) && t !== this;) t = t.prevPointOnContour;
                return t
            };
            var tC = Object.freeze(new tL(0, 0)),
                tD = {
                    cvCutIn: 17 / 16,
                    deltaBase: 9,
                    deltaShift: .125,
                    loop: 1,
                    minDis: 1,
                    autoFlip: !0
                };

            function tw(e, t) {
                switch (this.env = e, this.stack = [], this.prog = t, e) {
                    case "glyf":
                        this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
                    case "prep":
                        this.fv = this.pv = this.dpv = tU, this.round = ty
                }
            }

            function tI(e) {
                for (var t = e.tZone = Array(e.gZone.length), r = 0; r < t.length; r++) t[r] = new tL(0, 0)
            }

            function tM(e, t) {
                var r, a = e.prog,
                    n = e.ip,
                    o = 1;
                do
                    if (88 === (r = a[++n])) o++;
                    else if (89 === r) o--;
                else if (64 === r) n += a[n + 1] + 1;
                else if (65 === r) n += 2 * a[n + 1] + 1;
                else if (r >= 176 && r <= 183) n += r - 176 + 1;
                else if (r >= 184 && r <= 191) n += (r - 184 + 1) * 2;
                else if (t && 1 === o && 27 === r) break;
                while (o > 0);
                e.ip = n
            }

            function tG(e, t) {
                exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"), t.fv = t.pv = t.dpv = e
            }

            function tB(e, t) {
                exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"), t.pv = t.dpv = e
            }

            function tF(e, t) {
                exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), t.fv = e
            }

            function tA(e, t) {
                var r, a, n = t.stack,
                    o = n.pop(),
                    s = n.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log("SPVTL[" + e + "]", o, s), e ? (r = i.y - u.y, a = u.x - i.x) : (r = u.x - i.x, a = u.y - i.y), t.pv = t.dpv = tR(r, a)
            }

            function tP(e, t) {
                var r, a, n = t.stack,
                    o = n.pop(),
                    s = n.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log("SFVTL[" + e + "]", o, s), e ? (r = i.y - u.y, a = u.x - i.x) : (r = u.x - i.x, a = u.y - i.y), t.fv = tR(r, a)
            }

            function tN(e) {
                exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop()
            }

            function tH(e, t) {
                var r = t.stack.pop(),
                    a = t.z0[r],
                    n = t.fv,
                    o = t.pv;
                exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
                var s = o.distance(a, tC);
                e && (s = t.round(s)), n.setRelative(a, tC, s, o), n.touch(a), t.rp0 = t.rp1 = r
            }

            function tz(e, t) {
                var r, a, n, o = t.z2,
                    s = o.length - 2;
                exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
                for (var i = 0; i < s; i++) r = o[i], e.touched(r) || (a = r.prevTouched(e)) === r || (a === (n = r.nextTouched(e)) && e.setRelative(r, r, e.distance(a, a, !1, !0), e, !0), e.interpolate(r, a, n, e))
            }

            function tW(e, t) {
                for (var r = t.stack, a = e ? t.rp1 : t.rp2, n = (e ? t.z0 : t.z1)[a], o = t.fv, s = t.pv, i = t.loop, u = t.z2; i--;) {
                    var l = r.pop(),
                        p = u[l],
                        c = s.distance(n, n, !1, !0);
                    o.setRelative(p, p, c, s), o.touch(p), exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - i) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", l)
                }
                t.loop = 1
            }

            function t_(e, t) {
                var r = t.stack,
                    a = e ? t.rp1 : t.rp2,
                    n = (e ? t.z0 : t.z1)[a],
                    o = t.fv,
                    s = t.pv,
                    i = r.pop(),
                    u = t.z2[t.contours[i]],
                    l = u;
                exports.DEBUG && console.log(t.step, "SHC[" + e + "]", i);
                var p = s.distance(n, n, !1, !0);
                do l !== n && o.setRelative(l, l, p, s), l = l.nextPointOnContour; while (l !== u)
            }

            function tq(e, t) {
                var r, a, n = t.stack,
                    o = e ? t.rp1 : t.rp2,
                    s = (e ? t.z0 : t.z1)[o],
                    i = t.fv,
                    u = t.pv,
                    l = n.pop();
                switch (exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", l), l) {
                    case 0:
                        r = t.tZone;
                        break;
                    case 1:
                        r = t.gZone;
                        break;
                    default:
                        throw Error("Invalid zone")
                }
                for (var p = u.distance(s, s, !1, !0), c = r.length - 2, h = 0; h < c; h++) a = r[h], i.setRelative(a, a, p, u)
            }

            function tX(e, t) {
                var r = t.stack,
                    a = r.pop() / 64,
                    n = r.pop(),
                    o = t.z1[n],
                    s = t.z0[t.rp0],
                    i = t.fv,
                    u = t.pv;
                i.setRelative(o, s, a, u), i.touch(o), exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", a, n), t.rp1 = t.rp0, t.rp2 = n, e && (t.rp0 = n)
            }

            function tV(e, t) {
                var r = t.stack,
                    a = r.pop(),
                    n = r.pop(),
                    o = t.z0[n],
                    s = t.fv,
                    i = t.pv,
                    u = t.cvt[a];
                exports.DEBUG && console.log(t.step, "MIAP[" + e + "]", a, "(", u, ")", n);
                var l = i.distance(o, tC);
                e && (Math.abs(l - u) < t.cvCutIn && (l = u), l = t.round(l)), s.setRelative(o, tC, l, i), 0 === t.zp0 && (o.xo = o.x, o.yo = o.y), s.touch(o), t.rp0 = t.rp1 = n
            }

            function tY(e, t) {
                var r = t.stack,
                    a = r.pop(),
                    n = t.z2[a];
                exports.DEBUG && console.log(t.step, "GC[" + e + "]", a), r.push(64 * t.dpv.distance(n, tC, e, !1))
            }

            function tj(e, t) {
                var r = t.stack,
                    a = r.pop(),
                    n = r.pop(),
                    o = t.z1[a],
                    s = t.z0[n],
                    i = t.dpv.distance(s, o, e, e);
                exports.DEBUG && console.log(t.step, "MD[" + e + "]", a, n, "->", i), t.stack.push(Math.round(64 * i))
            }

            function tZ(e, t) {
                var r = t.stack,
                    a = r.pop(),
                    n = t.fv,
                    o = t.pv,
                    s = t.ppem,
                    i = t.deltaBase + (e - 1) * 16,
                    u = t.deltaShift,
                    l = t.z0;
                exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", a, r);
                for (var p = 0; p < a; p++) {
                    var c = r.pop(),
                        h = r.pop();
                    if (i + ((240 & h) >> 4) === s) {
                        var f = (15 & h) - 8;
                        f >= 0 && f++, exports.DEBUG && console.log(t.step, "DELTAPFIX", c, "by", f * u);
                        var d = l[c];
                        n.setRelative(d, d, f * u, o)
                    }
                }
            }

            function tQ(e, t) {
                var r = t.stack,
                    a = r.pop();
                exports.DEBUG && console.log(t.step, "ROUND[]"), r.push(64 * t.round(a / 64))
            }

            function tK(e, t) {
                var r = t.stack,
                    a = r.pop(),
                    n = t.ppem,
                    o = t.deltaBase + (e - 1) * 16,
                    s = t.deltaShift;
                exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", a, r);
                for (var i = 0; i < a; i++) {
                    var u = r.pop(),
                        l = r.pop();
                    if (o + ((240 & l) >> 4) === n) {
                        var p = (15 & l) - 8;
                        p >= 0 && p++;
                        var c = p * s;
                        exports.DEBUG && console.log(t.step, "DELTACFIX", u, "by", c), t.cvt[u] += c
                    }
                }
            }

            function tJ(e, t) {
                var r, a, n = t.stack,
                    o = n.pop(),
                    s = n.pop(),
                    i = t.z2[o],
                    u = t.z1[s];
                exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", o, s), e ? (r = i.y - u.y, a = u.x - i.x) : (r = u.x - i.x, a = u.y - i.y), t.dpv = tR(r, a)
            }

            function t$(e, t) {
                var r = t.stack,
                    a = t.prog,
                    n = t.ip;
                exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
                for (var o = 0; o < e; o++) r.push(a[++n]);
                t.ip = n
            }

            function t0(e, t) {
                var r = t.ip,
                    a = t.prog,
                    n = t.stack;
                exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
                for (var o = 0; o < e; o++) {
                    var s = a[++r] << 8 | a[++r];
                    32768 & s && (s = -((65535 ^ s) + 1)), n.push(s)
                }
                t.ip = r
            }

            function t1(e, t, r, a, n, o) {
                var s, i, u, l, p = o.stack,
                    c = e && p.pop(),
                    h = p.pop(),
                    f = o.rp0,
                    d = o.z0[f],
                    g = o.z1[h],
                    v = o.minDis,
                    m = o.fv,
                    y = o.dpv;
                u = (i = s = y.distance(g, d, !0, !0)) >= 0 ? 1 : -1, i = Math.abs(i), e && (l = o.cvt[c], a && Math.abs(i - l) < o.cvCutIn && (i = l)), r && i < v && (i = v), a && (i = o.round(i)), m.setRelative(g, d, u * i, y), m.touch(g), exports.DEBUG && console.log(o.step, (e ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (r ? ">" : "_") + (a ? "R" : "_") + (0 === n ? "Gr" : 1 === n ? "Bl" : 2 === n ? "Wh" : "") + "]", e ? c + "(" + o.cvt[c] + "," + l + ")" : "", h, "(d =", s, "->", u * i, ")"), o.rp1 = o.rp0, o.rp2 = h, t && (o.rp0 = h)
            }

            function t2(e) {
                this.char = e, this.state = {}, this.activeState = null
            }

            function t6(e, t, r) {
                this.contextName = r, this.startIndex = e, this.endOffset = t
            }

            function t3(e, t, r) {
                this.contextName = e, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = r
            }

            function t5(e, t) {
                this.context = e, this.index = t, this.length = e.length, this.current = e[t], this.backtrack = e.slice(0, t), this.lookahead = e.slice(t + 1)
            }

            function t4(e) {
                this.eventId = e, this.subscribers = []
            }

            function t8(e) {
                var t = this,
                    r = ["start", "end", "next", "newToken", "contextStart", "contextEnd", "insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD", "updateContextsRanges"];
                r.forEach(function(e) {
                    Object.defineProperty(t.events, e, {
                        value: new t4(e)
                    })
                }), e && r.forEach(function(r) {
                    var a = e[r];
                    "function" == typeof a && t.events[r].subscribe(a)
                }), ["insertToken", "removeToken", "removeRange", "replaceToken", "replaceRange", "composeRUD"].forEach(function(e) {
                    t.events[e].subscribe(t.updateContextsRanges)
                })
            }

            function t7(e) {
                this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], t8.call(this, e)
            }

            function t9(e) {
                return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)
            }

            function re(e) {
                return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)
            }

            function rt(e) {
                return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)
            }

            function rr(e) {
                return /[A-z]/.test(e)
            }

            function ra(e) {
                this.font = e, this.features = {}
            }

            function rn(e) {
                this.id = e.id, this.tag = e.tag, this.substitution = e.substitution
            }

            function ro(e, t) {
                if (!e) return -1;
                switch (t.format) {
                    case 1:
                        return t.glyphs.indexOf(e);
                    case 2:
                        for (var r = t.ranges, a = 0; a < r.length; a++) {
                            var n = r[a];
                            if (e >= n.start && e <= n.end) {
                                var o = e - n.start;
                                return n.index + o
                            }
                        }
                }
                return -1
            }

            function rs(e, t) {
                return -1 === ro(e, t.coverage) ? null : e + t.deltaGlyphId
            }

            function ri(e, t) {
                var r = ro(e, t.coverage);
                return -1 === r ? null : t.substitute[r]
            }

            function ru(e, t) {
                for (var r = [], a = 0; a < e.length; a++) {
                    var n = e[a],
                        o = t.current,
                        s = ro(o = Array.isArray(o) ? o[0] : o, n); - 1 !== s && r.push(s)
                }
                return r.length !== e.length ? -1 : r
            }

            function rl(e, t) {
                var r = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
                if (e.context.length < r) return [];
                var a = ru(t.inputCoverage, e);
                if (-1 === a) return [];
                var n = t.inputCoverage.length - 1;
                if (e.lookahead.length < t.lookaheadCoverage.length) return [];
                for (var o = e.lookahead.slice(n); o.length && rt(o[0].char);) o.shift();
                var s = new t5(o, 0),
                    i = ru(t.lookaheadCoverage, s),
                    u = [].concat(e.backtrack);
                for (u.reverse(); u.length && rt(u[0].char);) u.shift();
                if (u.length < t.backtrackCoverage.length) return [];
                var l = new t5(u, 0),
                    p = ru(t.backtrackCoverage, l),
                    c = a.length === t.inputCoverage.length && i.length === t.lookaheadCoverage.length && p.length === t.backtrackCoverage.length,
                    h = [];
                if (c)
                    for (var f = 0; f < t.lookupRecords.length; f++)
                        for (var d = t.lookupRecords[f].lookupListIndex, g = this.getLookupByIndex(d), v = 0; v < g.subtables.length; v++) {
                            var m = g.subtables[v],
                                y = this.getLookupMethod(g, m);
                            if ("12" === this.getSubstitutionType(g, m))
                                for (var x = 0; x < a.length; x++) {
                                    var b = y(e.get(x));
                                    b && h.push(b)
                                }
                        }
                return h
            }

            function rp(e, t) {
                var r, a = ro(e.current, t.coverage);
                if (-1 === a) return null;
                for (var n = t.ligatureSets[a], o = 0; o < n.length; o++) {
                    r = n[o];
                    for (var s = 0; s < r.components.length && e.lookahead[s] === r.components[s]; s++)
                        if (s === r.components.length - 1) return r
                }
                return null
            }

            function rc(e, t) {
                var r = ro(e, t.coverage);
                return -1 === r ? null : t.sequences[r]
            }
            tv.prototype.exec = function(e, t) {
                if ("number" != typeof t) throw Error("Point size is not a number!");
                if (!(this._errorState > 2)) {
                    var r = this.font,
                        a = this._prepState;
                    if (!a || a.ppem !== t) {
                        var n = this._fpgmState;
                        if (!n) {
                            tw.prototype = tD, (n = this._fpgmState = new tw("fpgm", r.tables.fpgm)).funcs = [], n.font = r, exports.DEBUG && (console.log("---EXEC FPGM---"), n.step = -1);
                            try {
                                i(n)
                            } catch (e) {
                                console.log("Hinting error in FPGM:" + e), this._errorState = 3;
                                return
                            }
                        }
                        tw.prototype = n, (a = this._prepState = new tw("prep", r.tables.prep)).ppem = t;
                        var o = r.tables.cvt;
                        if (o)
                            for (var s = a.cvt = Array(o.length), l = t / r.unitsPerEm, p = 0; p < o.length; p++) s[p] = o[p] * l;
                        else a.cvt = [];
                        exports.DEBUG && (console.log("---EXEC PREP---"), a.step = -1);
                        try {
                            i(a)
                        } catch (e) {
                            this._errorState < 2 && console.log("Hinting error in PREP:" + e), this._errorState = 2
                        }
                    }
                    if (!(this._errorState > 1)) try {
                        return u(e, a)
                    } catch (e) {
                        this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
                        return
                    }
                }
            }, u = function(e, t) {
                var r, a, n, o = t.ppem / t.font.unitsPerEm,
                    s = e.components;
                if (tw.prototype = t, s) {
                    var u = t.font;
                    a = [], r = [];
                    for (var p = 0; p < s.length; p++) {
                        var c = s[p],
                            h = u.glyphs.get(c.glyphIndex);
                        n = new tw("glyf", h.instructions), exports.DEBUG && (console.log("---EXEC COMP " + p + "---"), n.step = -1), l(h, n, o, o);
                        for (var f = Math.round(c.dx * o), d = Math.round(c.dy * o), g = n.gZone, v = n.contours, m = 0; m < g.length; m++) {
                            var y = g[m];
                            y.xTouched = y.yTouched = !1, y.xo = y.x = y.x + f, y.yo = y.y = y.y + d
                        }
                        var x = a.length;
                        a.push.apply(a, g);
                        for (var b = 0; b < v.length; b++) r.push(v[b] + x)
                    }
                    e.instructions && !n.inhibitGridFit && ((n = new tw("glyf", e.instructions)).gZone = n.z0 = n.z1 = n.z2 = a, n.contours = r, a.push(new tL(0, 0), new tL(Math.round(e.advanceWidth * o), 0)), exports.DEBUG && (console.log("---EXEC COMPOSITE---"), n.step = -1), i(n), a.length -= 2)
                } else n = new tw("glyf", e.instructions), exports.DEBUG && (console.log("---EXEC GLYPH---"), n.step = -1), l(e, n, o, o), a = n.gZone;
                return a
            }, l = function(e, t, r, a) {
                for (var n, o, s, u = e.points || [], l = u.length, p = t.gZone = t.z0 = t.z1 = t.z2 = [], c = t.contours = [], h = 0; h < l; h++) n = u[h], p[h] = new tL(n.x * r, n.y * a, n.lastPointOfContour, n.onCurve);
                for (var f = 0; f < l; f++) n = p[f], o || (o = n, c.push(f)), n.lastPointOfContour ? (n.nextPointOnContour = o, o.prevPointOnContour = n, o = void 0) : (s = p[f + 1], n.nextPointOnContour = s, s.prevPointOnContour = n);
                if (!t.inhibitGridFit) {
                    if (exports.DEBUG) {
                        console.log("PROCESSING GLYPH", t.stack);
                        for (var d = 0; d < l; d++) console.log(d, p[d].x, p[d].y)
                    }
                    if (p.push(new tL(0, 0), new tL(Math.round(e.advanceWidth * r), 0)), i(t), p.length -= 2, exports.DEBUG) {
                        console.log("FINISHED GLYPH", t.stack);
                        for (var g = 0; g < l; g++) console.log(g, p[g].x, p[g].y)
                    }
                }
            }, i = function(e) {
                var t, r = e.prog;
                if (r) {
                    var a = r.length;
                    for (e.ip = 0; e.ip < a; e.ip++) {
                        if (exports.DEBUG && e.step++, !(t = s[r[e.ip]])) throw Error("unknown instruction: 0x" + Number(r[e.ip]).toString(16));
                        t(e)
                    }
                }
            }, s = [tG.bind(void 0, tO), tG.bind(void 0, tU), tB.bind(void 0, tO), tB.bind(void 0, tU), tF.bind(void 0, tO), tF.bind(void 0, tU), tA.bind(void 0, 0), tA.bind(void 0, 1), tP.bind(void 0, 0), tP.bind(void 0, 1), function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "SPVFS[]", r, a), e.pv = e.dpv = tR(a, r)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "SPVFS[]", r, a), e.fv = tR(a, r)
            }, function(e) {
                var t = e.stack,
                    r = e.pv;
                exports.DEBUG && console.log(e.step, "GPV[]"), t.push(16384 * r.x), t.push(16384 * r.y)
            }, function(e) {
                var t = e.stack,
                    r = e.fv;
                exports.DEBUG && console.log(e.step, "GFV[]"), t.push(16384 * r.x), t.push(16384 * r.y)
            }, function(e) {
                e.fv = e.pv, exports.DEBUG && console.log(e.step, "SFVTPV[]")
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop(),
                    n = t.pop(),
                    o = t.pop(),
                    s = t.pop(),
                    i = e.z0,
                    u = e.z1,
                    l = i[r],
                    p = i[a],
                    c = u[n],
                    h = u[o],
                    f = e.z2[s];
                exports.DEBUG && console.log("ISECT[], ", r, a, n, o, s);
                var d = l.x,
                    g = l.y,
                    v = p.x,
                    m = p.y,
                    y = c.x,
                    x = c.y,
                    b = h.x,
                    S = h.y,
                    T = (d - v) * (x - S) - (g - m) * (y - b),
                    k = d * m - g * v,
                    U = y * S - x * b;
                f.x = (k * (y - b) - U * (d - v)) / T, f.y = (k * (x - S) - U * (g - m)) / T
            }, function(e) {
                e.rp0 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0)
            }, function(e) {
                e.rp1 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1)
            }, function(e) {
                e.rp2 = e.stack.pop(), exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2)
            }, function(e) {
                var t = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "SZP0[]", t), e.zp0 = t, t) {
                    case 0:
                        e.tZone || tI(e), e.z0 = e.tZone;
                        break;
                    case 1:
                        e.z0 = e.gZone;
                        break;
                    default:
                        throw Error("Invalid zone pointer")
                }
            }, function(e) {
                var t = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "SZP1[]", t), e.zp1 = t, t) {
                    case 0:
                        e.tZone || tI(e), e.z1 = e.tZone;
                        break;
                    case 1:
                        e.z1 = e.gZone;
                        break;
                    default:
                        throw Error("Invalid zone pointer")
                }
            }, function(e) {
                var t = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "SZP2[]", t), e.zp2 = t, t) {
                    case 0:
                        e.tZone || tI(e), e.z2 = e.tZone;
                        break;
                    case 1:
                        e.z2 = e.gZone;
                        break;
                    default:
                        throw Error("Invalid zone pointer")
                }
            }, function(e) {
                var t = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "SZPS[]", t), e.zp0 = e.zp1 = e.zp2 = t, t) {
                    case 0:
                        e.tZone || tI(e), e.z0 = e.z1 = e.z2 = e.tZone;
                        break;
                    case 1:
                        e.z0 = e.z1 = e.z2 = e.gZone;
                        break;
                    default:
                        throw Error("Invalid zone pointer")
                }
            }, function(e) {
                e.loop = e.stack.pop(), exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop)
            }, function(e) {
                exports.DEBUG && console.log(e.step, "RTG[]"), e.round = ty
            }, function(e) {
                exports.DEBUG && console.log(e.step, "RTHG[]"), e.round = tb
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SMD[]", t), e.minDis = t / 64
            }, function(e) {
                exports.DEBUG && console.log(e.step, "ELSE[]"), tM(e, !1)
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "JMPR[]", t), e.ip += t - 1
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SCVTCI[]", t), e.cvCutIn = t / 64
            }, void 0, void 0, function(e) {
                var t = e.stack;
                exports.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1])
            }, tN, function(e) {
                exports.DEBUG && console.log(e.step, "CLEAR[]"), e.stack.length = 0
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(a)
            }, function(e) {
                var t = e.stack;
                exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r])
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "MINDEX[]", r), t.push(t.splice(t.length - r, 1)[0])
            }, void 0, void 0, void 0, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, a);
                var n = e.ip,
                    o = e.prog;
                e.prog = e.funcs[r];
                for (var s = 0; s < a; s++) i(e), exports.DEBUG && console.log(++e.step, s + 1 < a ? "next loopcall" : "done loopcall", s);
                e.ip = n, e.prog = o
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "CALL[]", t);
                var r = e.ip,
                    a = e.prog;
                e.prog = e.funcs[t], i(e), e.ip = r, e.prog = a, exports.DEBUG && console.log(++e.step, "returning from", t)
            }, function(e) {
                if ("fpgm" !== e.env) throw Error("FDEF not allowed here");
                var t = e.stack,
                    r = e.prog,
                    a = e.ip,
                    n = t.pop(),
                    o = a;
                for (exports.DEBUG && console.log(e.step, "FDEF[]", n); 45 !== r[++a];);
                e.ip = a, e.funcs[n] = r.slice(o + 1, a)
            }, void 0, tH.bind(void 0, 0), tH.bind(void 0, 1), tz.bind(void 0, tO), tz.bind(void 0, tU), tW.bind(void 0, 0), tW.bind(void 0, 1), t_.bind(void 0, 0), t_.bind(void 0, 1), tq.bind(void 0, 0), tq.bind(void 0, 1), function(e) {
                for (var t = e.stack, r = e.loop, a = e.fv, n = t.pop() / 64, o = e.z2; r--;) {
                    var s = t.pop(),
                        i = o[s];
                    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]", s, n), a.setRelative(i, i, n), a.touch(i)
                }
                e.loop = 1
            }, function(e) {
                for (var t = e.stack, r = e.rp1, a = e.rp2, n = e.loop, o = e.z0[r], s = e.z1[a], i = e.fv, u = e.dpv, l = e.z2; n--;) {
                    var p = t.pop(),
                        c = l[p];
                    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - n) + ": " : "") + "IP[]", p, r, "<->", a), i.interpolate(c, o, s, u), i.touch(c)
                }
                e.loop = 1
            }, tX.bind(void 0, 0), tX.bind(void 0, 1), function(e) {
                for (var t = e.stack, r = e.rp0, a = e.z0[r], n = e.loop, o = e.fv, s = e.pv, i = e.z1; n--;) {
                    var u = t.pop(),
                        l = i[u];
                    exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - n) + ": " : "") + "ALIGNRP[]", u), o.setRelative(l, a, 0, s), o.touch(l)
                }
                e.loop = 1
            }, function(e) {
                exports.DEBUG && console.log(e.step, "RTDG[]"), e.round = tx
            }, tV.bind(void 0, 0), tV.bind(void 0, 1), function(e) {
                var t = e.prog,
                    r = e.ip,
                    a = e.stack,
                    n = t[++r];
                exports.DEBUG && console.log(e.step, "NPUSHB[]", n);
                for (var o = 0; o < n; o++) a.push(t[++r]);
                e.ip = r
            }, function(e) {
                var t = e.ip,
                    r = e.prog,
                    a = e.stack,
                    n = r[++t];
                exports.DEBUG && console.log(e.step, "NPUSHW[]", n);
                for (var o = 0; o < n; o++) {
                    var s = r[++t] << 8 | r[++t];
                    32768 & s && (s = -((65535 ^ s) + 1)), a.push(s)
                }
                e.ip = t
            }, function(e) {
                var t = e.stack,
                    r = e.store;
                r || (r = e.store = []);
                var a = t.pop(),
                    n = t.pop();
                exports.DEBUG && console.log(e.step, "WS", a, n), r[n] = a
            }, function(e) {
                var t = e.stack,
                    r = e.store,
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "RS", a);
                var n = r && r[a] || 0;
                t.push(n)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "WCVTP", r, a), e.cvt[a] = r / 64
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "RCVT", r), t.push(64 * e.cvt[r])
            }, tY.bind(void 0, 0), tY.bind(void 0, 1), void 0, tj.bind(void 0, 0), tj.bind(void 0, 1), function(e) {
                exports.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem)
            }, void 0, function(e) {
                exports.DEBUG && console.log(e.step, "FLIPON[]"), e.autoFlip = !0
            }, void 0, void 0, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "LT[]", r, a), t.push(a < r ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "LTEQ[]", r, a), t.push(a <= r ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "GT[]", r, a), t.push(a > r ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "GTEQ[]", r, a), t.push(a >= r ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "EQ[]", r, a), t.push(r === a ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "NEQ[]", r, a), t.push(r !== a ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "ODD[]", r), t.push(Math.trunc(r) % 2 ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "EVEN[]", r), t.push(Math.trunc(r) % 2 ? 0 : 1)
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "IF[]", t), !t && (tM(e, !0), exports.DEBUG && console.log(e.step, "EIF[]"))
            }, function(e) {
                exports.DEBUG && console.log(e.step, "EIF[]")
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "AND[]", r, a), t.push(r && a ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "OR[]", r, a), t.push(r || a ? 1 : 0)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1)
            }, tZ.bind(void 0, 1), function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SDB[]", t), e.deltaBase = t
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SDS[]", t), e.deltaShift = Math.pow(.5, t)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "ADD[]", r, a), t.push(a + r)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "SUB[]", r, a), t.push(a - r)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "DIV[]", r, a), t.push(64 * a / r)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "MUL[]", r, a), t.push(a * r / 64)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r))
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r)
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "FLOOR[]", r), t.push(64 * Math.floor(r / 64))
            }, function(e) {
                var t = e.stack,
                    r = t.pop();
                exports.DEBUG && console.log(e.step, "CEILING[]", r), t.push(64 * Math.ceil(r / 64))
            }, tQ.bind(void 0, 0), tQ.bind(void 0, 1), tQ.bind(void 0, 2), tQ.bind(void 0, 3), void 0, void 0, void 0, void 0, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "WCVTF[]", r, a), e.cvt[a] = r * e.ppem / e.font.unitsPerEm
            }, tZ.bind(void 0, 2), tZ.bind(void 0, 3), tK.bind(void 0, 1), tK.bind(void 0, 2), tK.bind(void 0, 3), function(e) {
                var t, r = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "SROUND[]", r), e.round = tk, 192 & r) {
                    case 0:
                        t = .5;
                        break;
                    case 64:
                        t = 1;
                        break;
                    case 128:
                        t = 2;
                        break;
                    default:
                        throw Error("invalid SROUND value")
                }
                switch (e.srPeriod = t, 48 & r) {
                    case 0:
                        e.srPhase = 0;
                        break;
                    case 16:
                        e.srPhase = .25 * t;
                        break;
                    case 32:
                        e.srPhase = .5 * t;
                        break;
                    case 48:
                        e.srPhase = .75 * t;
                        break;
                    default:
                        throw Error("invalid SROUND value")
                }
                0 == (r &= 15) ? e.srThreshold = 0 : e.srThreshold = (r / 8 - .5) * t
            }, function(e) {
                var t, r = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "S45ROUND[]", r), e.round = tk, 192 & r) {
                    case 0:
                        t = Math.sqrt(2) / 2;
                        break;
                    case 64:
                        t = Math.sqrt(2);
                        break;
                    case 128:
                        t = 2 * Math.sqrt(2);
                        break;
                    default:
                        throw Error("invalid S45ROUND value")
                }
                switch (e.srPeriod = t, 48 & r) {
                    case 0:
                        e.srPhase = 0;
                        break;
                    case 16:
                        e.srPhase = .25 * t;
                        break;
                    case 32:
                        e.srPhase = .5 * t;
                        break;
                    case 48:
                        e.srPhase = .75 * t;
                        break;
                    default:
                        throw Error("invalid S45ROUND value")
                }
                0 == (r &= 15) ? e.srThreshold = 0 : e.srThreshold = (r / 8 - .5) * t
            }, void 0, void 0, function(e) {
                exports.DEBUG && console.log(e.step, "ROFF[]"), e.round = tm
            }, void 0, function(e) {
                exports.DEBUG && console.log(e.step, "RUTG[]"), e.round = tS
            }, function(e) {
                exports.DEBUG && console.log(e.step, "RDTG[]"), e.round = tT
            }, tN, tN, void 0, void 0, void 0, void 0, void 0, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SCANCTRL[]", t)
            }, tJ.bind(void 0, 0), tJ.bind(void 0, 1), function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = 0;
                exports.DEBUG && console.log(e.step, "GETINFO[]", r), 1 & r && (a = 35), 32 & r && (a |= 4096), t.push(a)
            }, void 0, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop(),
                    n = t.pop();
                exports.DEBUG && console.log(e.step, "ROLL[]"), t.push(a), t.push(r), t.push(n)
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "MAX[]", r, a), t.push(Math.max(a, r))
            }, function(e) {
                var t = e.stack,
                    r = t.pop(),
                    a = t.pop();
                exports.DEBUG && console.log(e.step, "MIN[]", r, a), t.push(Math.min(a, r))
            }, function(e) {
                var t = e.stack.pop();
                exports.DEBUG && console.log(e.step, "SCANTYPE[]", t)
            }, function(e) {
                var t = e.stack.pop(),
                    r = e.stack.pop();
                switch (exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t) {
                    case 1:
                        e.inhibitGridFit = !!r;
                        return;
                    case 2:
                        e.ignoreCvt = !!r;
                        return;
                    default:
                        throw Error("invalid INSTCTRL[] selector")
                }
            }, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, t$.bind(void 0, 1), t$.bind(void 0, 2), t$.bind(void 0, 3), t$.bind(void 0, 4), t$.bind(void 0, 5), t$.bind(void 0, 6), t$.bind(void 0, 7), t$.bind(void 0, 8), t0.bind(void 0, 1), t0.bind(void 0, 2), t0.bind(void 0, 3), t0.bind(void 0, 4), t0.bind(void 0, 5), t0.bind(void 0, 6), t0.bind(void 0, 7), t0.bind(void 0, 8), t1.bind(void 0, 0, 0, 0, 0, 0), t1.bind(void 0, 0, 0, 0, 0, 1), t1.bind(void 0, 0, 0, 0, 0, 2), t1.bind(void 0, 0, 0, 0, 0, 3), t1.bind(void 0, 0, 0, 0, 1, 0), t1.bind(void 0, 0, 0, 0, 1, 1), t1.bind(void 0, 0, 0, 0, 1, 2), t1.bind(void 0, 0, 0, 0, 1, 3), t1.bind(void 0, 0, 0, 1, 0, 0), t1.bind(void 0, 0, 0, 1, 0, 1), t1.bind(void 0, 0, 0, 1, 0, 2), t1.bind(void 0, 0, 0, 1, 0, 3), t1.bind(void 0, 0, 0, 1, 1, 0), t1.bind(void 0, 0, 0, 1, 1, 1), t1.bind(void 0, 0, 0, 1, 1, 2), t1.bind(void 0, 0, 0, 1, 1, 3), t1.bind(void 0, 0, 1, 0, 0, 0), t1.bind(void 0, 0, 1, 0, 0, 1), t1.bind(void 0, 0, 1, 0, 0, 2), t1.bind(void 0, 0, 1, 0, 0, 3), t1.bind(void 0, 0, 1, 0, 1, 0), t1.bind(void 0, 0, 1, 0, 1, 1), t1.bind(void 0, 0, 1, 0, 1, 2), t1.bind(void 0, 0, 1, 0, 1, 3), t1.bind(void 0, 0, 1, 1, 0, 0), t1.bind(void 0, 0, 1, 1, 0, 1), t1.bind(void 0, 0, 1, 1, 0, 2), t1.bind(void 0, 0, 1, 1, 0, 3), t1.bind(void 0, 0, 1, 1, 1, 0), t1.bind(void 0, 0, 1, 1, 1, 1), t1.bind(void 0, 0, 1, 1, 1, 2), t1.bind(void 0, 0, 1, 1, 1, 3), t1.bind(void 0, 1, 0, 0, 0, 0), t1.bind(void 0, 1, 0, 0, 0, 1), t1.bind(void 0, 1, 0, 0, 0, 2), t1.bind(void 0, 1, 0, 0, 0, 3), t1.bind(void 0, 1, 0, 0, 1, 0), t1.bind(void 0, 1, 0, 0, 1, 1), t1.bind(void 0, 1, 0, 0, 1, 2), t1.bind(void 0, 1, 0, 0, 1, 3), t1.bind(void 0, 1, 0, 1, 0, 0), t1.bind(void 0, 1, 0, 1, 0, 1), t1.bind(void 0, 1, 0, 1, 0, 2), t1.bind(void 0, 1, 0, 1, 0, 3), t1.bind(void 0, 1, 0, 1, 1, 0), t1.bind(void 0, 1, 0, 1, 1, 1), t1.bind(void 0, 1, 0, 1, 1, 2), t1.bind(void 0, 1, 0, 1, 1, 3), t1.bind(void 0, 1, 1, 0, 0, 0), t1.bind(void 0, 1, 1, 0, 0, 1), t1.bind(void 0, 1, 1, 0, 0, 2), t1.bind(void 0, 1, 1, 0, 0, 3), t1.bind(void 0, 1, 1, 0, 1, 0), t1.bind(void 0, 1, 1, 0, 1, 1), t1.bind(void 0, 1, 1, 0, 1, 2), t1.bind(void 0, 1, 1, 0, 1, 3), t1.bind(void 0, 1, 1, 1, 0, 0), t1.bind(void 0, 1, 1, 1, 0, 1), t1.bind(void 0, 1, 1, 1, 0, 2), t1.bind(void 0, 1, 1, 1, 0, 3), t1.bind(void 0, 1, 1, 1, 1, 0), t1.bind(void 0, 1, 1, 1, 1, 1), t1.bind(void 0, 1, 1, 1, 1, 2), t1.bind(void 0, 1, 1, 1, 1, 3)], t2.prototype.setState = function(e, t) {
                return this.state[e] = t, this.activeState = {
                    key: e,
                    value: this.state[e]
                }, this.activeState
            }, t2.prototype.getState = function(e) {
                return this.state[e] || null
            }, t7.prototype.inboundIndex = function(e) {
                return e >= 0 && e < this.tokens.length
            }, t7.prototype.composeRUD = function(e) {
                var t = this,
                    r = e.map(function(e) {
                        return t[e[0]].apply(t, e.slice(1).concat(!0))
                    }),
                    a = function(e) {
                        return "object" == typeof e && e.hasOwnProperty("FAIL")
                    };
                if (r.every(a)) return {
                    FAIL: "composeRUD: one or more operations hasn't completed successfully",
                    report: r.filter(a)
                };
                this.dispatch("composeRUD", [r.filter(function(e) {
                    return !a(e)
                })])
            }, t7.prototype.replaceRange = function(e, t, r, a) {
                t = null !== t ? t : this.tokens.length;
                var n = r.every(function(e) {
                    return e instanceof t2
                });
                if (!(!isNaN(e) && this.inboundIndex(e)) || !n) return {
                    FAIL: "replaceRange: invalid tokens or startIndex."
                };
                var o = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
                return a || this.dispatch("replaceToken", [e, t, r]), [o, r]
            }, t7.prototype.replaceToken = function(e, t, r) {
                if (!(!isNaN(e) && this.inboundIndex(e)) || !(t instanceof t2)) return {
                    FAIL: "replaceToken: invalid token or index."
                };
                var a = this.tokens.splice(e, 1, t);
                return r || this.dispatch("replaceToken", [e, t]), [a[0], t]
            }, t7.prototype.removeRange = function(e, t, r) {
                t = isNaN(t) ? this.tokens.length : t;
                var a = this.tokens.splice(e, t);
                return r || this.dispatch("removeRange", [a, e, t]), a
            }, t7.prototype.removeToken = function(e, t) {
                if (!(!isNaN(e) && this.inboundIndex(e))) return {
                    FAIL: "removeToken: invalid token index."
                };
                var r = this.tokens.splice(e, 1);
                return t || this.dispatch("removeToken", [r, e]), r
            }, t7.prototype.insertToken = function(e, t, r) {
                return e.every(function(e) {
                    return e instanceof t2
                }) ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)), r || this.dispatch("insertToken", [e, t]), e) : {
                    FAIL: "insertToken: invalid token(s)."
                }
            }, t7.prototype.registerModifier = function(e, t, r) {
                this.events.newToken.subscribe(function(a, n) {
                    if (null === t || !0 === t.apply(this, [a, n])) {
                        var o = r.apply(this, [a, n]);
                        a.setState(e, o)
                    }
                }), this.registeredModifiers.push(e)
            }, t4.prototype.subscribe = function(e) {
                return "function" == typeof e ? this.subscribers.push(e) - 1 : {
                    FAIL: "invalid '" + this.eventId + "' event handler"
                }
            }, t4.prototype.unsubscribe = function(e) {
                this.subscribers.splice(e, 1)
            }, t5.prototype.setCurrentIndex = function(e) {
                this.index = e, this.current = this.context[e], this.backtrack = this.context.slice(0, e), this.lookahead = this.context.slice(e + 1)
            }, t5.prototype.get = function(e) {
                switch (!0) {
                    case 0 === e:
                        return this.current;
                    case e < 0 && Math.abs(e) <= this.backtrack.length:
                        return this.backtrack.slice(e)[0];
                    case e > 0 && e <= this.lookahead.length:
                        return this.lookahead[e - 1];
                    default:
                        return null
                }
            }, t7.prototype.rangeToText = function(e) {
                if (e instanceof t6) return this.getRangeTokens(e).map(function(e) {
                    return e.char
                }).join("")
            }, t7.prototype.getText = function() {
                return this.tokens.map(function(e) {
                    return e.char
                }).join("")
            }, t7.prototype.getContext = function(e) {
                return this.registeredContexts[e] || null
            }, t7.prototype.on = function(e, t) {
                var r = this.events[e];
                return r ? r.subscribe(t) : null
            }, t7.prototype.dispatch = function(e, t) {
                var r = this,
                    a = this.events[e];
                a instanceof t4 && a.subscribers.forEach(function(e) {
                    e.apply(r, t || [])
                })
            }, t7.prototype.registerContextChecker = function(e, t, r) {
                if (this.getContext(e)) return {
                    FAIL: "context name '" + e + "' is already registered."
                };
                if ("function" != typeof t) return {
                    FAIL: "missing context start check."
                };
                if ("function" != typeof r) return {
                    FAIL: "missing context end check."
                };
                var a = new t3(e, t, r);
                return this.registeredContexts[e] = a, this.contextCheckers.push(a), a
            }, t7.prototype.getRangeTokens = function(e) {
                var t = e.startIndex + e.endOffset;
                return [].concat(this.tokens.slice(e.startIndex, t))
            }, t7.prototype.getContextRanges = function(e) {
                var t = this.getContext(e);
                return t ? t.ranges : {
                    FAIL: "context checker '" + e + "' is not registered."
                }
            }, t7.prototype.resetContextsRanges = function() {
                var e = this.registeredContexts;
                for (var t in e) e.hasOwnProperty(t) && (e[t].ranges = [])
            }, t7.prototype.updateContextsRanges = function() {
                this.resetContextsRanges();
                for (var e = this.tokens.map(function(e) {
                        return e.char
                    }), t = 0; t < e.length; t++) {
                    var r = new t5(e, t);
                    this.runContextCheck(r)
                }
                this.dispatch("updateContextsRanges", [this.registeredContexts])
            }, t7.prototype.setEndOffset = function(e, t) {
                var r = this.getContext(t).openRange.startIndex,
                    a = new t6(r, e, t),
                    n = this.getContext(t).ranges;
                return a.rangeId = t + "." + n.length, n.push(a), this.getContext(t).openRange = null, a
            }, t7.prototype.runContextCheck = function(e) {
                var t = this,
                    r = e.index;
                this.contextCheckers.forEach(function(a) {
                    var n = a.contextName,
                        o = t.getContext(n).openRange;
                    if (!o && a.checkStart(e) && (o = new t6(r, null, n), t.getContext(n).openRange = o, t.dispatch("contextStart", [n, r])), o && a.checkEnd(e)) {
                        var s = r - o.startIndex + 1,
                            i = t.setEndOffset(s, n);
                        t.dispatch("contextEnd", [n, i])
                    }
                })
            }, t7.prototype.tokenize = function(e) {
                this.tokens = [], this.resetContextsRanges();
                var t = Array.from(e);
                this.dispatch("start");
                for (var r = 0; r < t.length; r++) {
                    var a = t[r],
                        n = new t5(t, r);
                    this.dispatch("next", [n]), this.runContextCheck(n);
                    var o = new t2(a);
                    this.tokens.push(o), this.dispatch("newToken", [o, n])
                }
                return this.dispatch("end", [this.tokens]), this.tokens
            }, ra.prototype.getDefaultScriptFeaturesIndexes = function() {
                for (var e = this.font.tables.gsub.scripts, t = 0; t < e.length; t++) {
                    var r = e[t];
                    if ("DFLT" === r.tag) return r.script.defaultLangSys.featureIndexes
                }
                return []
            }, ra.prototype.getScriptFeaturesIndexes = function(e) {
                if (!this.font.tables.gsub) return [];
                if (!e) return this.getDefaultScriptFeaturesIndexes();
                for (var t = this.font.tables.gsub.scripts, r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (a.tag === e && a.script.defaultLangSys) return a.script.defaultLangSys.featureIndexes;
                    var n = a.langSysRecords;
                    if (n)
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o];
                            if (s.tag === e) return s.langSys.featureIndexes
                        }
                }
                return this.getDefaultScriptFeaturesIndexes()
            }, ra.prototype.mapTagsToFeatures = function(e, t) {
                for (var r = {}, a = 0; a < e.length; a++) {
                    var n = e[a].tag,
                        o = e[a].feature;
                    r[n] = o
                }
                this.features[t].tags = r
            }, ra.prototype.getScriptFeatures = function(e) {
                var t = this.features[e];
                if (this.features.hasOwnProperty(e)) return t;
                var r = this.getScriptFeaturesIndexes(e);
                if (!r) return null;
                var a = this.font.tables.gsub;
                return t = r.map(function(e) {
                    return a.features[e]
                }), this.features[e] = t, this.mapTagsToFeatures(t, e), t
            }, ra.prototype.getSubstitutionType = function(e, t) {
                return e.lookupType.toString() + t.substFormat.toString()
            }, ra.prototype.getLookupMethod = function(e, t) {
                var r = this;
                switch (this.getSubstitutionType(e, t)) {
                    case "11":
                        return function(e) {
                            return rs.apply(r, [e, t])
                        };
                    case "12":
                        return function(e) {
                            return ri.apply(r, [e, t])
                        };
                    case "63":
                        return function(e) {
                            return rl.apply(r, [e, t])
                        };
                    case "41":
                        return function(e) {
                            return rp.apply(r, [e, t])
                        };
                    case "21":
                        return function(e) {
                            return rc.apply(r, [e, t])
                        };
                    default:
                        throw Error("lookupType: " + e.lookupType + " - substFormat: " + t.substFormat + " is not yet supported")
                }
            }, ra.prototype.lookupFeature = function(e) {
                var t = e.contextParams,
                    r = t.index,
                    a = this.getFeature({
                        tag: e.tag,
                        script: e.script
                    });
                if (!a) return Error("font '" + this.font.names.fullName.en + "' doesn't support feature '" + e.tag + "' for script '" + e.script + "'.");
                for (var n = this.getFeatureLookups(a), o = [].concat(t.context), s = 0; s < n.length; s++)
                    for (var i = n[s], u = this.getLookupSubtables(i), l = 0; l < u.length; l++) {
                        var p = u[l],
                            c = this.getSubstitutionType(i, p),
                            h = this.getLookupMethod(i, p),
                            f = void 0;
                        switch (c) {
                            case "11":
                                (f = h(t.current)) && o.splice(r, 1, new rn({
                                    id: 11,
                                    tag: e.tag,
                                    substitution: f
                                }));
                                break;
                            case "12":
                                (f = h(t.current)) && o.splice(r, 1, new rn({
                                    id: 12,
                                    tag: e.tag,
                                    substitution: f
                                }));
                                break;
                            case "63":
                                Array.isArray(f = h(t)) && f.length && o.splice(r, 1, new rn({
                                    id: 63,
                                    tag: e.tag,
                                    substitution: f
                                }));
                                break;
                            case "41":
                                (f = h(t)) && o.splice(r, 1, new rn({
                                    id: 41,
                                    tag: e.tag,
                                    substitution: f
                                }));
                                break;
                            case "21":
                                (f = h(t.current)) && o.splice(r, 1, new rn({
                                    id: 21,
                                    tag: e.tag,
                                    substitution: f
                                }))
                        }
                        t = new t5(o, r), (!Array.isArray(f) || f.length) && (f = null)
                    }
                return o.length ? o : null
            }, ra.prototype.supports = function(e) {
                if (!e.script) return !1;
                this.getScriptFeatures(e.script);
                var t = this.features.hasOwnProperty(e.script);
                if (!e.tag) return t;
                var r = this.features[e.script].some(function(t) {
                    return t.tag === e.tag
                });
                return t && r
            }, ra.prototype.getLookupSubtables = function(e) {
                return e.subtables || null
            }, ra.prototype.getLookupByIndex = function(e) {
                return this.font.tables.gsub.lookups[e] || null
            }, ra.prototype.getFeatureLookups = function(e) {
                return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))
            }, ra.prototype.getFeature = function(e) {
                if (!this.font) return {
                    FAIL: "No font was found"
                };
                this.features.hasOwnProperty(e.script) || this.getScriptFeatures(e.script);
                var t = this.features[e.script];
                return t ? t.tags[e.tag] ? this.features[e.script].tags[e.tag] : null : {
                    FAIL: "No feature for script " + e.script
                }
            };
            var rh = {
                11: function(e, t, r) {
                    t[r].setState(e.tag, e.substitution)
                },
                12: function(e, t, r) {
                    t[r].setState(e.tag, e.substitution)
                },
                63: function(e, t, r) {
                    e.substitution.forEach(function(a, n) {
                        t[r + n].setState(e.tag, a)
                    })
                },
                41: function(e, t, r) {
                    var a = t[r];
                    a.setState(e.tag, e.substitution.ligGlyph);
                    for (var n = e.substitution.components.length, o = 0; o < n; o++)(a = t[r + o + 1]).setState("deleted", !0)
                }
            };

            function rf(e, t, r) {
                e instanceof rn && rh[e.id] && rh[e.id](e, t, r)
            }

            function rd(e) {
                var t = this,
                    r = "arab",
                    a = this.featuresTags[r],
                    n = this.tokenizer.getRangeTokens(e);
                if (1 !== n.length) {
                    var o = new t5(n.map(function(e) {
                            return e.getState("glyphIndex")
                        }), 0),
                        s = new t5(n.map(function(e) {
                            return e.char
                        }), 0);
                    n.forEach(function(e, i) {
                        if (!rt(e.char)) {
                            o.setCurrentIndex(i), s.setCurrentIndex(i);
                            var u, l = 0;
                            switch (function(e) {
                                for (var t = [].concat(e.backtrack), r = t.length - 1; r >= 0; r--) {
                                    var a = t[r],
                                        n = re(a),
                                        o = rt(a);
                                    if (!n && !o) return !0;
                                    if (n) break
                                }
                                return !1
                            }(s) && (l |= 1), function(e) {
                                if (re(e.current)) return !1;
                                for (var t = 0; t < e.lookahead.length; t++)
                                    if (!rt(e.lookahead[t])) return !0;
                                return !1
                            }(s) && (l |= 2), l) {
                                case 1:
                                    u = "fina";
                                    break;
                                case 2:
                                    u = "init";
                                    break;
                                case 3:
                                    u = "medi"
                            }
                            if (-1 !== a.indexOf(u)) {
                                var p = t.query.lookupFeature({
                                    tag: u,
                                    script: r,
                                    contextParams: o
                                });
                                if (p instanceof Error) return console.info(p.message);
                                p.forEach(function(e, t) {
                                    e instanceof rn && (rf(e, n, t), o.context[t] = e.substitution)
                                })
                            }
                        }
                    })
                }
            }

            function rg(e, t) {
                var r = e.map(function(e) {
                    return e.activeState.value
                });
                return new t5(r, t || 0)
            }

            function rv(e) {
                var t = this,
                    r = this.tokenizer.getRangeTokens(e),
                    a = rg(r);
                a.context.forEach(function(e, n) {
                    a.setCurrentIndex(n);
                    var o = t.query.lookupFeature({
                        tag: "rlig",
                        script: "arab",
                        contextParams: a
                    });
                    o.length && (o.forEach(function(e) {
                        return rf(e, r, n)
                    }), a = rg(r))
                })
            }

            function rm(e, t) {
                var r = e.map(function(e) {
                    return e.activeState.value
                });
                return new t5(r, t || 0)
            }

            function ry(e) {
                var t = this,
                    r = this.tokenizer.getRangeTokens(e),
                    a = rm(r);
                a.context.forEach(function(e, n) {
                    a.setCurrentIndex(n);
                    var o = t.query.lookupFeature({
                        tag: "liga",
                        script: "latn",
                        contextParams: a
                    });
                    o.length && (o.forEach(function(e) {
                        return rf(e, r, n)
                    }), a = rm(r))
                })
            }

            function rx(e) {
                this.baseDir = e || "ltr", this.tokenizer = new t7, this.featuresTags = {}
            }

            function rb(e) {
                var t = this.contextChecks[e + "Check"];
                return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck)
            }

            function rS() {
                return rb.call(this, "latinWord"), rb.call(this, "arabicWord"), rb.call(this, "arabicSentence"), this.tokenizer.tokenize(this.text)
            }

            function rT() {
                var e = this;
                this.tokenizer.getContextRanges("arabicSentence").forEach(function(t) {
                    var r = e.tokenizer.getRangeTokens(t);
                    e.tokenizer.replaceRange(t.startIndex, t.endOffset, r.reverse())
                })
            }

            function rk() {
                if (-1 === this.tokenizer.registeredModifiers.indexOf("glyphIndex")) throw Error("glyphIndex modifier is required to apply arabic presentation features.")
            }

            function rU() {
                var e = this;
                this.featuresTags.hasOwnProperty("arab") && (rk.call(this), this.tokenizer.getContextRanges("arabicWord").forEach(function(t) {
                    rd.call(e, t)
                }))
            }

            function rO() {
                var e = this,
                    t = "arab";
                this.featuresTags.hasOwnProperty(t) && -1 !== this.featuresTags[t].indexOf("rlig") && (rk.call(this), this.tokenizer.getContextRanges("arabicWord").forEach(function(t) {
                    rv.call(e, t)
                }))
            }

            function rE() {
                var e = this,
                    t = "latn";
                this.featuresTags.hasOwnProperty(t) && -1 !== this.featuresTags[t].indexOf("liga") && (rk.call(this), this.tokenizer.getContextRanges("latinWord").forEach(function(t) {
                    ry.call(e, t)
                }))
            }

            function rR(e) {
                (e = e || {}).tables = e.tables || {}, e.empty || (tl(e.familyName, "When creating a new Font object, familyName is required."), tl(e.styleName, "When creating a new Font object, styleName is required."), tl(e.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), tl(e.ascender, "When creating a new Font object, ascender is required."), tl(e.descender <= 0, "When creating a new Font object, negative descender value is required."), this.names = {
                    fontFamily: {
                        en: e.familyName || " "
                    },
                    fontSubfamily: {
                        en: e.styleName || " "
                    },
                    fullName: {
                        en: e.fullName || e.familyName + " " + e.styleName
                    },
                    postScriptName: {
                        en: e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, "")
                    },
                    designer: {
                        en: e.designer || " "
                    },
                    designerURL: {
                        en: e.designerURL || " "
                    },
                    manufacturer: {
                        en: e.manufacturer || " "
                    },
                    manufacturerURL: {
                        en: e.manufacturerURL || " "
                    },
                    license: {
                        en: e.license || " "
                    },
                    licenseURL: {
                        en: e.licenseURL || " "
                    },
                    version: {
                        en: e.version || "Version 0.1"
                    },
                    description: {
                        en: e.description || " "
                    },
                    copyright: {
                        en: e.copyright || " "
                    },
                    trademark: {
                        en: e.trademark || " "
                    }
                }, this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.createdTimestamp = e.createdTimestamp, this.tables = Object.assign(e.tables, {
                    os2: Object.assign({
                        usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
                        usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
                        fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR
                    }, e.tables.os2)
                })), this.supported = !0, this.glyphs = new eb.GlyphSet(this, e.glyphs || []), this.encoding = new eh(this), this.position = new to(this), this.substitution = new ts(this), this.tables = this.tables || {}, this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", {
                    get: function() {
                        return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new tv(this) : void 0
                    }
                })
            }

            function rL(e, t) {
                var r = JSON.stringify(e),
                    a = 256;
                for (var n in t) {
                    var o = parseInt(n);
                    if (o && !(o < 256)) {
                        if (JSON.stringify(t[n]) === r) return o;
                        a <= o && (a = o + 1)
                    }
                }
                return t[a] = e, a
            }
            rx.prototype.setText = function(e) {
                this.text = e
            }, rx.prototype.contextChecks = {
                latinWordCheck: {
                    startCheck: function(e) {
                        var t = e.current,
                            r = e.get(-1);
                        return null === r && rr(t) || !rr(r) && rr(t)
                    },
                    endCheck: function(e) {
                        var t = e.get(1);
                        return null === t || !rr(t)
                    }
                },
                arabicWordCheck: {
                    startCheck: function(e) {
                        var t = e.current,
                            r = e.get(-1);
                        return null === r && t9(t) || !t9(r) && t9(t)
                    },
                    endCheck: function(e) {
                        var t = e.get(1);
                        return null === t || !t9(t)
                    }
                },
                arabicSentenceCheck: {
                    startCheck: function(e) {
                        var t = e.current,
                            r = e.get(-1);
                        return (t9(t) || rt(t)) && !t9(r)
                    },
                    endCheck: function(e) {
                        var t = e.get(1);
                        switch (!0) {
                            case null === t:
                                return !0;
                            case !t9(t) && !rt(t):
                                var r = /\s/.test(t);
                                if (!r || r && !e.lookahead.some(function(e) {
                                        return t9(e) || rt(e)
                                    })) return !0;
                                break;
                            default:
                                return !1
                        }
                    }
                }
            }, rx.prototype.registerFeatures = function(e, t) {
                var r = this,
                    a = t.filter(function(t) {
                        return r.query.supports({
                            script: e,
                            tag: t
                        })
                    });
                this.featuresTags.hasOwnProperty(e) ? this.featuresTags[e] = this.featuresTags[e].concat(a) : this.featuresTags[e] = a
            }, rx.prototype.applyFeatures = function(e, t) {
                if (!e) throw Error("No valid font was provided to apply features");
                this.query || (this.query = new ra(e));
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    this.query.supports({
                        script: a.script
                    }) && this.registerFeatures(a.script, a.tags)
                }
            }, rx.prototype.registerModifier = function(e, t, r) {
                this.tokenizer.registerModifier(e, t, r)
            }, rx.prototype.checkContextReady = function(e) {
                return !!this.tokenizer.getContext(e)
            }, rx.prototype.applyFeaturesToContexts = function() {
                this.checkContextReady("arabicWord") && (rU.call(this), rO.call(this)), this.checkContextReady("latinWord") && rE.call(this), this.checkContextReady("arabicSentence") && rT.call(this)
            }, rx.prototype.processText = function(e) {
                this.text && this.text === e || (this.setText(e), rS.call(this), this.applyFeaturesToContexts())
            }, rx.prototype.getBidiText = function(e) {
                return this.processText(e), this.tokenizer.getText()
            }, rx.prototype.getTextGlyphs = function(e) {
                this.processText(e);
                for (var t = [], r = 0; r < this.tokenizer.tokens.length; r++) {
                    var a = this.tokenizer.tokens[r];
                    if (!a.state.deleted) {
                        var n = a.activeState.value;
                        t.push(Array.isArray(n) ? n[0] : n)
                    }
                }
                return t
            }, rR.prototype.hasChar = function(e) {
                return null !== this.encoding.charToGlyphIndex(e)
            }, rR.prototype.charToGlyphIndex = function(e) {
                return this.encoding.charToGlyphIndex(e)
            }, rR.prototype.charToGlyph = function(e) {
                var t = this.charToGlyphIndex(e),
                    r = this.glyphs.get(t);
                return r || (r = this.glyphs.get(0)), r
            }, rR.prototype.updateFeatures = function(e) {
                return this.defaultRenderOptions.features.map(function(t) {
                    return "latn" === t.script ? {
                        script: "latn",
                        tags: t.tags.filter(function(t) {
                            return e[t]
                        })
                    } : t
                })
            }, rR.prototype.stringToGlyphs = function(e, t) {
                var r = this,
                    a = new rx;
                a.registerModifier("glyphIndex", null, function(e) {
                    return r.charToGlyphIndex(e.char)
                });
                var n = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
                a.applyFeatures(this, n);
                for (var o = a.getTextGlyphs(e), s = o.length, i = Array(s), u = this.glyphs.get(0), l = 0; l < s; l += 1) i[l] = this.glyphs.get(o[l]) || u;
                return i
            }, rR.prototype.nameToGlyphIndex = function(e) {
                return this.glyphNames.nameToGlyphIndex(e)
            }, rR.prototype.nameToGlyph = function(e) {
                var t = this.nameToGlyphIndex(e),
                    r = this.glyphs.get(t);
                return r || (r = this.glyphs.get(0)), r
            }, rR.prototype.glyphIndexToName = function(e) {
                return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : ""
            }, rR.prototype.getKerningValue = function(e, t) {
                e = e.index || e, t = t.index || t;
                var r = this.position.defaultKerningTables;
                return r ? this.position.getKerningValue(r, e, t) : this.kerningPairs[e + "," + t] || 0
            }, rR.prototype.defaultRenderOptions = {
                kerning: !0,
                features: [{
                    script: "arab",
                    tags: ["init", "medi", "fina", "rlig"]
                }, {
                    script: "latn",
                    tags: ["liga", "rlig"]
                }]
            }, rR.prototype.forEachGlyph = function(e, t, r, a, n, o) {
                t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 72, n = Object.assign({}, this.defaultRenderOptions, n);
                var s, i = 1 / this.unitsPerEm * a,
                    u = this.stringToGlyphs(e, n);
                if (n.kerning) {
                    var l = n.script || this.position.getDefaultScriptName();
                    s = this.position.getKerningTables(l, n.language)
                }
                for (var p = 0; p < u.length; p += 1) {
                    var c = u[p];
                    o.call(this, c, t, r, a, n), c.advanceWidth && (t += c.advanceWidth * i), n.kerning && p < u.length - 1 && (t += (s ? this.position.getKerningValue(s, c.index, u[p + 1].index) : this.getKerningValue(c, u[p + 1])) * i), n.letterSpacing ? t += n.letterSpacing * a : n.tracking && (t += n.tracking / 1e3 * a)
                }
                return t
            }, rR.prototype.getPath = function(e, t, r, a, n) {
                var o = new w;
                return this.forEachGlyph(e, t, r, a, n, function(e, t, r, a) {
                    var s = e.getPath(t, r, a, n, this);
                    o.extend(s)
                }), o
            }, rR.prototype.getPaths = function(e, t, r, a, n) {
                var o = [];
                return this.forEachGlyph(e, t, r, a, n, function(e, t, r, a) {
                    var s = e.getPath(t, r, a, n, this);
                    o.push(s)
                }), o
            }, rR.prototype.getAdvanceWidth = function(e, t, r) {
                return this.forEachGlyph(e, 0, 0, t, r, function() {})
            }, rR.prototype.draw = function(e, t, r, a, n, o) {
                this.getPath(t, r, a, n, o).draw(e)
            }, rR.prototype.drawPoints = function(e, t, r, a, n, o) {
                this.forEachGlyph(t, r, a, n, o, function(t, r, a, n) {
                    t.drawPoints(e, r, a, n)
                })
            }, rR.prototype.drawMetrics = function(e, t, r, a, n, o) {
                this.forEachGlyph(t, r, a, n, o, function(t, r, a, n) {
                    t.drawMetrics(e, r, a, n)
                })
            }, rR.prototype.getEnglishName = function(e) {
                var t = this.names[e];
                if (t) return t.en
            }, rR.prototype.validate = function() {
                var e = this;

                function t(t) {
                    var r = e.getEnglishName(t);
                    r && r.trim().length
                }
                t("fontFamily"), t("weightName"), t("manufacturer"), t("copyright"), t("version"), this.unitsPerEm
            }, rR.prototype.toTables = function() {
                return te.fontToTable(this)
            }, rR.prototype.toBuffer = function() {
                return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer()
            }, rR.prototype.toArrayBuffer = function() {
                for (var e = this.toTables().encode(), t = new ArrayBuffer(e.length), r = new Uint8Array(t), a = 0; a < e.length; a++) r[a] = e[a];
                return t
            }, rR.prototype.download = function(e) {
                var t = this.getEnglishName("fontFamily"),
                    a = this.getEnglishName("fontSubfamily");
                e = e || t.replace(/\s/g, "") + "-" + a + ".otf";
                var n = this.toArrayBuffer();
                if ("undefined" != typeof window) {
                    if (window.URL = window.URL || window.webkitURL, window.URL) {
                        var o = new DataView(n),
                            s = new Blob([o], {
                                type: "font/opentype"
                            }),
                            i = document.createElement("a");
                        i.href = window.URL.createObjectURL(s), i.download = e;
                        var u = document.createEvent("MouseEvents");
                        u.initEvent("click", !0, !1), i.dispatchEvent(u)
                    } else console.warn("Font file could not be downloaded. Try using a different browser.")
                } else {
                    var l = r(2517),
                        c = function(e) {
                            for (var t = new p(e.byteLength), r = new Uint8Array(e), a = 0; a < t.length; ++a) t[a] = r[a];
                            return t
                        }(n);
                    l.writeFileSync(e, c)
                }
            }, rR.prototype.fsSelectionValues = {
                ITALIC: 1,
                UNDERSCORE: 2,
                NEGATIVE: 4,
                OUTLINED: 8,
                STRIKEOUT: 16,
                BOLD: 32,
                REGULAR: 64,
                USER_TYPO_METRICS: 128,
                WWS: 256,
                OBLIQUE: 512
            }, rR.prototype.usWidthClasses = {
                ULTRA_CONDENSED: 1,
                EXTRA_CONDENSED: 2,
                CONDENSED: 3,
                SEMI_CONDENSED: 4,
                MEDIUM: 5,
                SEMI_EXPANDED: 6,
                EXPANDED: 7,
                EXTRA_EXPANDED: 8,
                ULTRA_EXPANDED: 9
            }, rR.prototype.usWeightClasses = {
                THIN: 100,
                EXTRA_LIGHT: 200,
                LIGHT: 300,
                NORMAL: 400,
                MEDIUM: 500,
                SEMI_BOLD: 600,
                BOLD: 700,
                EXTRA_BOLD: 800,
                BLACK: 900
            };
            var rC = {
                    make: function(e, t) {
                        var r = new J.Table("fvar", [{
                            name: "version",
                            type: "ULONG",
                            value: 65536
                        }, {
                            name: "offsetToData",
                            type: "USHORT",
                            value: 0
                        }, {
                            name: "countSizePairs",
                            type: "USHORT",
                            value: 2
                        }, {
                            name: "axisCount",
                            type: "USHORT",
                            value: e.axes.length
                        }, {
                            name: "axisSize",
                            type: "USHORT",
                            value: 20
                        }, {
                            name: "instanceCount",
                            type: "USHORT",
                            value: e.instances.length
                        }, {
                            name: "instanceSize",
                            type: "USHORT",
                            value: 4 + 4 * e.axes.length
                        }]);
                        r.offsetToData = r.sizeOf();
                        for (var a = 0; a < e.axes.length; a++) r.fields = r.fields.concat(function(e, t, r) {
                            var a = rL(t.name, r);
                            return [{
                                name: "tag_" + e,
                                type: "TAG",
                                value: t.tag
                            }, {
                                name: "minValue_" + e,
                                type: "FIXED",
                                value: t.minValue << 16
                            }, {
                                name: "defaultValue_" + e,
                                type: "FIXED",
                                value: t.defaultValue << 16
                            }, {
                                name: "maxValue_" + e,
                                type: "FIXED",
                                value: t.maxValue << 16
                            }, {
                                name: "flags_" + e,
                                type: "USHORT",
                                value: 0
                            }, {
                                name: "nameID_" + e,
                                type: "USHORT",
                                value: a
                            }]
                        }(a, e.axes[a], t));
                        for (var n = 0; n < e.instances.length; n++) r.fields = r.fields.concat(function(e, t, r, a) {
                            for (var n = [{
                                    name: "nameID_" + e,
                                    type: "USHORT",
                                    value: rL(t.name, a)
                                }, {
                                    name: "flags_" + e,
                                    type: "USHORT",
                                    value: 0
                                }], o = 0; o < r.length; ++o) {
                                var s = r[o].tag;
                                n.push({
                                    name: "axis_" + e + " " + s,
                                    type: "FIXED",
                                    value: t.coordinates[s] << 16
                                })
                            }
                            return n
                        }(n, e.instances[n], e.axes, t));
                        return r
                    },
                    parse: function(e, t, r) {
                        var a = new es.Parser(e, t),
                            n = a.parseULong();
                        G.argument(65536 === n, "Unsupported fvar table version.");
                        var o = a.parseOffset16();
                        a.skip("uShort", 1);
                        for (var s = a.parseUShort(), i = a.parseUShort(), u = a.parseUShort(), l = a.parseUShort(), p = [], c = 0; c < s; c++) p.push(function(e, t, r) {
                            var a = {},
                                n = new es.Parser(e, t);
                            return a.tag = n.parseTag(), a.minValue = n.parseFixed(), a.defaultValue = n.parseFixed(), a.maxValue = n.parseFixed(), n.skip("uShort", 1), a.name = r[n.parseUShort()] || {}, a
                        }(e, t + o + c * i, r));
                        for (var h = [], f = t + o + s * i, d = 0; d < u; d++) h.push(function(e, t, r, a) {
                            var n = {},
                                o = new es.Parser(e, t);
                            n.name = a[o.parseUShort()] || {}, o.skip("uShort", 1), n.coordinates = {};
                            for (var s = 0; s < r.length; ++s) n.coordinates[r[s].tag] = o.parseFixed();
                            return n
                        }(e, f + d * l, p, r));
                        return {
                            axes: p,
                            instances: h
                        }
                    }
                },
                rD = function() {
                    return {
                        coverage: this.parsePointer(en.coverage),
                        attachPoints: this.parseList(en.pointer(en.uShortList))
                    }
                },
                rw = function() {
                    var e = this.parseUShort();
                    return (G.argument(1 === e || 2 === e || 3 === e, "Unsupported CaretValue table version."), 1 === e) ? {
                        coordinate: this.parseShort()
                    } : 2 === e ? {
                        pointindex: this.parseShort()
                    } : 3 === e ? {
                        coordinate: this.parseShort()
                    } : void 0
                },
                rI = function() {
                    return this.parseList(en.pointer(rw))
                },
                rM = function() {
                    return {
                        coverage: this.parsePointer(en.coverage),
                        ligGlyphs: this.parseList(en.pointer(rI))
                    }
                },
                rG = function() {
                    return this.parseUShort(), this.parseList(en.pointer(en.coverage))
                },
                rB = {
                    parse: function(e, t) {
                        t = t || 0;
                        var r = new en(e, t),
                            a = r.parseVersion(1);
                        G.argument(1 === a || 1.2 === a || 1.3 === a, "Unsupported GDEF table version.");
                        var n = {
                            version: a,
                            classDef: r.parsePointer(en.classDef),
                            attachList: r.parsePointer(rD),
                            ligCaretList: r.parsePointer(rM),
                            markAttachClassDef: r.parsePointer(en.classDef)
                        };
                        return a >= 1.2 && (n.markGlyphSets = r.parsePointer(rG)), n
                    }
                },
                rF = Array(10);
            rF[1] = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                return 1 === t ? {
                    posFormat: 1,
                    coverage: this.parsePointer(en.coverage),
                    value: this.parseValueRecord()
                } : 2 === t ? {
                    posFormat: 2,
                    coverage: this.parsePointer(en.coverage),
                    values: this.parseValueRecordList()
                } : void G.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.")
            }, rF[2] = function() {
                var e = this.offset + this.relativeOffset,
                    t = this.parseUShort();
                G.assert(1 === t || 2 === t, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
                var r = this.parsePointer(en.coverage),
                    a = this.parseUShort(),
                    n = this.parseUShort();
                if (1 === t) return {
                    posFormat: t,
                    coverage: r,
                    valueFormat1: a,
                    valueFormat2: n,
                    pairSets: this.parseList(en.pointer(en.list(function() {
                        return {
                            secondGlyph: this.parseUShort(),
                            value1: this.parseValueRecord(a),
                            value2: this.parseValueRecord(n)
                        }
                    })))
                };
                if (2 === t) {
                    var o = this.parsePointer(en.classDef),
                        s = this.parsePointer(en.classDef),
                        i = this.parseUShort(),
                        u = this.parseUShort();
                    return {
                        posFormat: t,
                        coverage: r,
                        valueFormat1: a,
                        valueFormat2: n,
                        classDef1: o,
                        classDef2: s,
                        class1Count: i,
                        class2Count: u,
                        classRecords: this.parseList(i, en.list(u, function() {
                            return {
                                value1: this.parseValueRecord(a),
                                value2: this.parseValueRecord(n)
                            }
                        }))
                    }
                }
            }, rF[3] = function() {
                return {
                    error: "GPOS Lookup 3 not supported"
                }
            }, rF[4] = function() {
                return {
                    error: "GPOS Lookup 4 not supported"
                }
            }, rF[5] = function() {
                return {
                    error: "GPOS Lookup 5 not supported"
                }
            }, rF[6] = function() {
                return {
                    error: "GPOS Lookup 6 not supported"
                }
            }, rF[7] = function() {
                return {
                    error: "GPOS Lookup 7 not supported"
                }
            }, rF[8] = function() {
                return {
                    error: "GPOS Lookup 8 not supported"
                }
            }, rF[9] = function() {
                return {
                    error: "GPOS Lookup 9 not supported"
                }
            };
            var rA = Array(10),
                rP = {
                    parse: function(e, t) {
                        t = t || 0;
                        var r = new en(e, t),
                            a = r.parseVersion(1);
                        return (G.argument(1 === a || 1.1 === a, "Unsupported GPOS table version " + a), 1 === a) ? {
                            version: a,
                            scripts: r.parseScriptList(),
                            features: r.parseFeatureList(),
                            lookups: r.parseLookupList(rF)
                        } : {
                            version: a,
                            scripts: r.parseScriptList(),
                            features: r.parseFeatureList(),
                            lookups: r.parseLookupList(rF),
                            variations: r.parseFeatureVariationsList()
                        }
                    },
                    make: function(e) {
                        return new J.Table("GPOS", [{
                            name: "version",
                            type: "ULONG",
                            value: 65536
                        }, {
                            name: "scripts",
                            type: "TABLE",
                            value: new J.ScriptList(e.scripts)
                        }, {
                            name: "features",
                            type: "TABLE",
                            value: new J.FeatureList(e.features)
                        }, {
                            name: "lookups",
                            type: "TABLE",
                            value: new J.LookupList(e.lookups, rA)
                        }])
                    }
                },
                rN = {
                    parse: function(e, t) {
                        var r = new es.Parser(e, t),
                            a = r.parseUShort();
                        if (0 === a) return function(e) {
                            var t = {};
                            e.skip("uShort");
                            var r = e.parseUShort();
                            G.argument(0 === r, "Unsupported kern sub-table version."), e.skip("uShort", 2);
                            var a = e.parseUShort();
                            e.skip("uShort", 3);
                            for (var n = 0; n < a; n += 1) {
                                var o = e.parseUShort(),
                                    s = e.parseUShort(),
                                    i = e.parseShort();
                                t[o + "," + s] = i
                            }
                            return t
                        }(r);
                        if (1 === a) return function(e) {
                            var t = {};
                            e.skip("uShort"), e.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
                            var r = e.parseUShort();
                            if (e.skip("uShort"), 0 == (255 & r)) {
                                var a = e.parseUShort();
                                e.skip("uShort", 3);
                                for (var n = 0; n < a; n += 1) {
                                    var o = e.parseUShort(),
                                        s = e.parseUShort(),
                                        i = e.parseShort();
                                    t[o + "," + s] = i
                                }
                            }
                            return t
                        }(r);
                        throw Error("Unsupported kern table version (" + a + ").")
                    }
                },
                rH = {
                    parse: function(e, t, r, a) {
                        for (var n = new es.Parser(e, t), o = a ? n.parseUShort : n.parseULong, s = [], i = 0; i < r + 1; i += 1) {
                            var u = o.call(n);
                            a && (u *= 2), s.push(u)
                        }
                        return s
                    }
                };

            function rz(e, t) {
                r(2517).readFile(e, function(e, r) {
                    if (e) return t(e.message);
                    t(null, tu(r))
                })
            }

            function rW(e, t) {
                var r = new XMLHttpRequest;
                r.open("get", e, !0), r.responseType = "arraybuffer", r.onload = function() {
                    return r.response ? t(null, r.response) : t("Font could not be loaded: " + r.statusText)
                }, r.onerror = function() {
                    t("Font could not be loaded")
                }, r.send()
            }

            function r_(e, t) {
                for (var r = [], a = 12, n = 0; n < t; n += 1) {
                    var o = es.getTag(e, a),
                        s = es.getULong(e, a + 4),
                        i = es.getULong(e, a + 8),
                        u = es.getULong(e, a + 12);
                    r.push({
                        tag: o,
                        checksum: s,
                        offset: i,
                        length: u,
                        compression: !1
                    }), a += 16
                }
                return r
            }

            function rq(e, t) {
                if ("WOFF" !== t.compression) return {
                    data: e,
                    offset: t.offset
                };
                var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
                    a = new Uint8Array(t.length);
                if (L(r, a), a.byteLength !== t.length) throw Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
                return {
                    data: new DataView(a.buffer, 0),
                    offset: 0
                }
            }

            function rX(e, t) {
                t = null == t ? {} : t;
                var r, a, n, o, s, i, u, l, p, c, h, f, d, g, v, m, y, x, b, S, T = new rR({
                        empty: !0
                    }),
                    k = new DataView(e, 0),
                    U = [],
                    O = es.getTag(k, 0);
                if (O === String.fromCharCode(0, 1, 0, 0) || "true" === O || "typ1" === O) T.outlinesFormat = "truetype", l = es.getUShort(k, 4), U = r_(k, l);
                else if ("OTTO" === O) T.outlinesFormat = "cff", l = es.getUShort(k, 4), U = r_(k, l);
                else if ("wOFF" === O) {
                    var E = es.getTag(k, 4);
                    if (E === String.fromCharCode(0, 1, 0, 0)) T.outlinesFormat = "truetype";
                    else if ("OTTO" === E) T.outlinesFormat = "cff";
                    else throw Error("Unsupported OpenType flavor " + O);
                    l = es.getUShort(k, 12), U = function(e, t) {
                        for (var r = [], a = 44, n = 0; n < t; n += 1) {
                            var o = es.getTag(e, a),
                                s = es.getULong(e, a + 4),
                                i = es.getULong(e, a + 8),
                                u = es.getULong(e, a + 12),
                                l = void 0;
                            l = i < u && "WOFF", r.push({
                                tag: o,
                                offset: s,
                                compression: l,
                                compressedLength: i,
                                length: u
                            }), a += 20
                        }
                        return r
                    }(k, l)
                } else throw Error("Unsupported OpenType signature " + O);
                for (var R = 0; R < l; R += 1) {
                    var L = U[R],
                        C = void 0;
                    switch (L.tag) {
                        case "cmap":
                            C = rq(k, L), T.tables.cmap = ei.parse(C.data, C.offset), T.encoding = new ef(T.tables.cmap);
                            break;
                        case "cvt ":
                            C = rq(k, L), S = new es.Parser(C.data, C.offset), T.tables.cvt = S.parseShortList(L.length / 2);
                            break;
                        case "fvar":
                            c = L;
                            break;
                        case "fpgm":
                            C = rq(k, L), S = new es.Parser(C.data, C.offset), T.tables.fpgm = S.parseByteList(L.length);
                            break;
                        case "head":
                            C = rq(k, L), T.tables.head = eB.parse(C.data, C.offset), T.unitsPerEm = T.tables.head.unitsPerEm, i = T.tables.head.indexToLocFormat;
                            break;
                        case "hhea":
                            C = rq(k, L), T.tables.hhea = eF.parse(C.data, C.offset), T.ascender = T.tables.hhea.ascender, T.descender = T.tables.hhea.descender, T.numberOfHMetrics = T.tables.hhea.numberOfHMetrics;
                            break;
                        case "hmtx":
                            v = L;
                            break;
                        case "ltag":
                            C = rq(k, L), u = eA.parse(C.data, C.offset);
                            break;
                        case "maxp":
                            C = rq(k, L), T.tables.maxp = eP.parse(C.data, C.offset), T.numGlyphs = T.tables.maxp.numGlyphs;
                            break;
                        case "name":
                            x = L;
                            break;
                        case "OS/2":
                            C = rq(k, L), T.tables.os2 = eJ.parse(C.data, C.offset);
                            break;
                        case "post":
                            C = rq(k, L), T.tables.post = e$.parse(C.data, C.offset), T.glyphNames = new eg(T.tables.post);
                            break;
                        case "prep":
                            C = rq(k, L), S = new es.Parser(C.data, C.offset), T.tables.prep = S.parseByteList(L.length);
                            break;
                        case "glyf":
                            h = L;
                            break;
                        case "loca":
                            y = L;
                            break;
                        case "CFF ":
                            p = L;
                            break;
                        case "kern":
                            m = L;
                            break;
                        case "GDEF":
                            f = L;
                            break;
                        case "GPOS":
                            d = L;
                            break;
                        case "GSUB":
                            g = L;
                            break;
                        case "meta":
                            b = L
                    }
                }
                var D = rq(k, x);
                if (T.tables.name = eQ.parse(D.data, D.offset, u), T.names = T.tables.name, h && y) {
                    var w = 0 === i,
                        I = rq(k, y),
                        M = rH.parse(I.data, I.offset, T.numGlyphs, w),
                        G = rq(k, h);
                    T.glyphs = tg.parse(G.data, G.offset, M, T, t)
                } else if (p) {
                    var B = rq(k, p);
                    eG.parse(B.data, B.offset, T, t)
                } else throw Error("Font doesn't contain TrueType or CFF outlines.");
                var F = rq(k, v);
                if (r = F.data, a = F.offset, n = T.numberOfHMetrics, o = T.numGlyphs, s = T.glyphs, t.lowMemory ? function(e, t, r, a, n) {
                        e._hmtxTableData = {};
                        for (var o, s, i = new es.Parser(t, r), u = 0; u < n; u += 1) u < a && (o = i.parseUShort(), s = i.parseShort()), e._hmtxTableData[u] = {
                            advanceWidth: o,
                            leftSideBearing: s
                        }
                    }(T, r, a, n, o) : function(e, t, r, a, n) {
                        for (var o, s, i = new es.Parser(e, t), u = 0; u < a; u += 1) {
                            u < r && (o = i.parseUShort(), s = i.parseShort());
                            var l = n.get(u);
                            l.advanceWidth = o, l.leftSideBearing = s
                        }
                    }(r, a, n, o, s), t.lowMemory ? function(e) {
                        e._IndexToUnicodeMap = {};
                        for (var t = e.tables.cmap.glyphIndexMap, r = Object.keys(t), a = 0; a < r.length; a += 1) {
                            var n = r[a],
                                o = t[n];
                            void 0 === e._IndexToUnicodeMap[o] ? e._IndexToUnicodeMap[o] = {
                                unicodes: [parseInt(n)]
                            } : e._IndexToUnicodeMap[o].unicodes.push(parseInt(n))
                        }
                    }(T) : function(e) {
                        for (var t, r = e.tables.cmap.glyphIndexMap, a = Object.keys(r), n = 0; n < a.length; n += 1) {
                            var o = a[n],
                                s = r[o];
                            (t = e.glyphs.get(s)).addUnicode(parseInt(o))
                        }
                        for (var i = 0; i < e.glyphs.length; i += 1) t = e.glyphs.get(i), e.cffEncoding ? e.isCIDFont ? t.name = "gid" + i : t.name = e.cffEncoding.charset[i] : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(i))
                    }(T), m) {
                    var A = rq(k, m);
                    T.kerningPairs = rN.parse(A.data, A.offset)
                } else T.kerningPairs = {};
                if (f) {
                    var P = rq(k, f);
                    T.tables.gdef = rB.parse(P.data, P.offset)
                }
                if (d) {
                    var N = rq(k, d);
                    T.tables.gpos = rP.parse(N.data, N.offset), T.position.init()
                }
                if (g) {
                    var H = rq(k, g);
                    T.tables.gsub = e6.parse(H.data, H.offset)
                }
                if (c) {
                    var z = rq(k, c);
                    T.tables.fvar = rC.parse(z.data, z.offset, T.names)
                }
                if (b) {
                    var W = rq(k, b);
                    T.tables.meta = e3.parse(W.data, W.offset), T.metas = T.tables.meta
                }
                return T
            }
            var rV = Object.freeze({
                __proto__: null,
                Font: rR,
                Glyph: em,
                Path: w,
                BoundingBox: D,
                _parse: es,
                parse: rX,
                load: function(e, t, r) {
                    r = null == r ? {} : r;
                    var a = "undefined" != typeof window || r.isUrl ? rW : rz;
                    return new Promise(function(n, o) {
                        a(e, function(e, a) {
                            var s;
                            if (e) {
                                if (t) return t(e);
                                o(e)
                            }
                            try {
                                s = rX(a, r)
                            } catch (e) {
                                if (t) return t(e, null);
                                o(e)
                            }
                            if (t) return t(null, s);
                            n(s)
                        })
                    })
                },
                loadSync: function(e, t) {
                    return rX(tu(r(2517).readFileSync(e)), t)
                }
            });
            t.ZP = rV
        }
    }
]);
//# sourceMappingURL=64bbefcc-33492d4f6fe6291d.js.map