(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5017], {
        41202: function(t, e, n) {
            "use strict";
            n.d(e, {
                Nl: function() {
                    return z
                },
                m3: function() {
                    return L
                },
                c1: function() {
                    return F
                }
            });
            var r = n(81333),
                o = n(95993),
                a = n(63331),
                i = n(49299),
                c = n(20406),
                u = n(13089),
                s = n(96412),
                f = n(41701),
                l = n(90129),
                d = n(29017),
                p = n(48200),
                h = n(95235),
                m = n(28526),
                v = n.n(m),
                y = n(91760),
                b = n(36157);

            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t) {
                function e(t) {
                    if (Object(t) !== t) return Promise.reject(TypeError(t + " is not an object."));
                    var e = t.done;
                    return Promise.resolve(t.value).then(function(t) {
                        return {
                            value: t,
                            done: e
                        }
                    })
                }
                return (w = function(t) {
                    this.s = t, this.n = t.next
                }).prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return e(this.n.apply(this.s, arguments))
                    },
                    return: function(t) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.resolve({
                            value: t,
                            done: !0
                        }) : e(n.apply(this.s, arguments))
                    },
                    throw: function(t) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.reject(t) : e(n.apply(this.s, arguments))
                    }
                }, new w(t)
            }
            var S = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    return k(e).then(function(e) {
                        return {
                            value: t,
                            done: !1
                        }
                    })
                },
                Z = function(t) {
                    var e = t.match(/(<[^>]+>|<\/[^>]+>)|\S+/g);
                    if (!e) throw Error("Could not parse tokens");
                    return e
                },
                O = function(t, e) {
                    var n, r = (0, b.bh)(),
                        o = [],
                        i = e.id,
                        c = e.index,
                        u = e.html,
                        s = e.layout,
                        f = e.raw,
                        l = e.cardSize,
                        d = e.eventId,
                        p = function(t, e) {
                            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (!n) {
                                if (Array.isArray(t) || (n = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return g(t, e);
                                            var n = Object.prototype.toString.call(t).slice(8, -1);
                                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e)
                                        }
                                    }(t))) {
                                    n && (t = n);
                                    var r = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return r >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[r++]
                                            }
                                        },
                                        e: function(t) {
                                            throw t
                                        },
                                        f: o
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var a, i = !0,
                                c = !1;
                            return {
                                s: function() {
                                    n = n.call(t)
                                },
                                n: function() {
                                    var t = n.next();
                                    return i = t.done, t
                                },
                                e: function(t) {
                                    c = !0, a = t
                                },
                                f: function() {
                                    try {
                                        i || null == n.return || n.return()
                                    } finally {
                                        if (c) throw a
                                    }
                                }
                            }
                        }(Z(u));
                    try {
                        for (p.s(); !(n = p.n()).done;) {
                            var m = n.value;
                            m.startsWith("<") ? o.push(m) : o.push(m + " ")
                        }
                    } catch (t) {
                        p.e(t)
                    } finally {
                        p.f()
                    }
                    return (0, h.Z)({}, Symbol.asyncIterator, function() {
                        return {
                            done: !1,
                            i: 0,
                            next: function() {
                                if (this.done) return Promise.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                for (var e = (0, a.qn)(t)(r.getState());;) {
                                    var n = {
                                        id: i,
                                        eventId: d,
                                        index: c,
                                        html: o.slice(0, this.i + 1).join(""),
                                        cardComplete: this.i === o.length - 1,
                                        layout: s,
                                        cardSize: l,
                                        raw: f
                                    };
                                    return this.i++, this.i === o.length && (this.done = !0), S(n, e)
                                }
                            }
                        }
                    })
                },
                x = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r(t) {
                        (0, s.Z)(this, r);
                        var e, o, a = (e = (0, c.Z)(v().mark(function e(n, r) {
                            var o, a, i, c, u, s;
                            return v().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!("done" === n.event || "cancel" === n.event)) {
                                            e.next = 3;
                                            break
                                        }
                                        return r.enqueue(n), e.abrupt("return");
                                    case 3:
                                        o = !1, a = !1, e.prev = 5, c = function(t) {
                                            var e, n, r, o = 2;
                                            for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); o--;) {
                                                if (n && null != (e = t[n])) return e.call(t);
                                                if (r && null != (e = t[r])) return new w(e.call(t));
                                                n = "@@asyncIterator", r = "@@iterator"
                                            }
                                            throw TypeError("Object is not async iterable")
                                        }(O(t, n.data));
                                    case 7:
                                        return e.next = 9, c.next();
                                    case 9:
                                        if (!(o = !(u = e.sent).done)) {
                                            e.next = 15;
                                            break
                                        }(s = u.value) && r.enqueue({
                                            id: s.eventId,
                                            event: "data",
                                            data: s
                                        });
                                    case 12:
                                        o = !1, e.next = 7;
                                        break;
                                    case 15:
                                        e.next = 21;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(5), a = !0, i = e.t0;
                                    case 21:
                                        if (e.prev = 21, e.prev = 22, !(o && null != c.return)) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.next = 26, c.return();
                                    case 26:
                                        if (e.prev = 26, !a) {
                                            e.next = 29;
                                            break
                                        }
                                        throw i;
                                    case 29:
                                        return e.finish(26);
                                    case 30:
                                        return e.finish(21);
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [5, 17, 21, 31],
                                [22, , 26, 30]
                            ])
                        })), function(t, n) {
                            return e.apply(this, arguments)
                        });
                        return o = n.call(this, {
                            transform: a
                        }), (0, h.Z)((0, f.Z)(o), "index", 0), (0, h.Z)((0, f.Z)(o), "startTime", performance.now()), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                k = function(t) {
                    return new Promise(function(e) {
                        return y.iK(e, t)
                    })
                },
                I = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r(t) {
                        var e, o;
                        return (0, s.Z)(this, r), e = n.call(this, {
                            transform: (o = (0, c.Z)(v().mark(function n(r, o) {
                                var a, i, c;
                                return v().wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!("data" !== r.event)) {
                                                n.next = 3;
                                                break
                                            }
                                            return o.enqueue(r), n.abrupt("return");
                                        case 3:
                                            a = r.data, i = performance.now() - e.startTime, c = Z(a.html), t({
                                                index: e.index,
                                                duration: i,
                                                numTokens: c.length
                                            }), e.index++, e.startTime = performance.now(), o.enqueue(r);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n)
                            })), function(t, e) {
                                return o.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(e), "index", 0), (0, h.Z)((0, f.Z)(e), "startTime", performance.now()), e
                    }
                    return (0, u.Z)(r)
                }(o.GJ);

            function T(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(n), !0).forEach(function(e) {
                        (0, h.Z)(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var E = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r() {
                        var t, e;
                        return (0, s.Z)(this, r), t = n.call(this, {
                            transform: (e = (0, c.Z)(v().mark(function e(n, r) {
                                return v().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            "done" === n.event || "cancel" === n.event ? r.enqueue(j(j({}, n), {}, {
                                                content: t.content
                                            })) : (t.content += n.data.raw || "", r.enqueue(n));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(t, n) {
                                return e.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(t), "content", ""), t
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                P = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r() {
                        (0, s.Z)(this, r);
                        var t, e, o, a = function(t, e) {
                            for (;;) {
                                var n = o._buffer.match(/<section\b[^>]*>(?:(?!<\/?section\b)[\s\S])*<\/section>/);
                                if (!n) break;
                                var r = n[0],
                                    a = n.index;
                                o._buffer = o._buffer.slice(a + r.length);
                                var i = r + "\n\n";
                                t.enqueue({
                                    id: e,
                                    event: "data",
                                    data: i
                                })
                            }
                        };
                        return o = n.call(this, {
                            transform: (t = (0, c.Z)(v().mark(function t(e, n) {
                                return v().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("data" !== e.event) {
                                                t.next = 6;
                                                break
                                            }
                                            if (e.data) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return o._buffer += e.data, a(n, e.id), t.abrupt("return");
                                        case 6:
                                            o.lastId = e.id, n.enqueue(e);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(e, n) {
                                return t.apply(this, arguments)
                            }),
                            flush: (e = (0, c.Z)(v().mark(function t(e) {
                                return v().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            a(e, o.lastId);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(t) {
                                return e.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(o), "_buffer", ""), (0, h.Z)((0, f.Z)(o), "lastId", void 0), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                C = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r() {
                        return (0, s.Z)(this, r), n.call(this, {
                            transform: function(t, e) {
                                if ("done" === t.event) {
                                    e.enqueue({
                                        id: t.id,
                                        event: "done",
                                        finishReason: t.data,
                                        content: ""
                                    });
                                    return
                                }
                                if ("cancel" === t.event) {
                                    e.enqueue({
                                        id: t.id,
                                        event: "cancel",
                                        content: ""
                                    });
                                    return
                                }
                                if ("content" === t.event) {
                                    e.enqueue({
                                        id: t.id,
                                        event: "data",
                                        data: t.data
                                    });
                                    return
                                }
                                console.error("[StreamMessageEventParser] unknown event type", t)
                            }
                        })
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                R = n(82489),
                A = n(72314),
                q = n(62142),
                M = function(t) {
                    try {
                        var e = new DOMParser().parseFromString(t, "text/html").querySelector("section");
                        if (!e) return console.error("Error getting section innner html, section not found"), t;
                        return e.innerHTML
                    } catch (e) {
                        return console.error("Error getting section innner html", e), t
                    }
                },
                B = function(t) {
                    (0, l.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, p.Z)(r);
                        if (e) {
                            var o = (0, p.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return (0, d.Z)(this, t)
                    });

                    function r(t) {
                        var e, o, a = t.docFormatKey,
                            i = t.imageLicense,
                            u = t.lastCompletedCardIndex;
                        return (0, s.Z)(this, r), o = n.call(this, {
                            transform: (e = (0, c.Z)(v().mark(function t(e, n) {
                                var r, c, u, s, f, l, d, p, h, m;
                                return v().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("data" !== e.event)) {
                                                t.next = 3;
                                                break
                                            }
                                            return n.enqueue(e), t.abrupt("return");
                                        case 3:
                                            return u = e.data, t.next = 6, (0, R.T)(u, {
                                                removeImagesFromLayouts: !0,
                                                uploadImages: !1,
                                                resetImageSearches: !1,
                                                imageLicense: i
                                            });
                                        case 6:
                                            s = t.sent, f = q.C2.generate(), l = M(s), p = null === (r = (d = (0, A.a)({
                                                chunk: {
                                                    eventId: e.id,
                                                    index: o.index,
                                                    html: l,
                                                    raw: l,
                                                    id: f,
                                                    cardComplete: !0
                                                },
                                                docFormatKey: a
                                            })).attrs) || void 0 === r ? void 0 : r.layout, h = null === (c = d.attrs) || void 0 === c ? void 0 : c.cardSize, m = {
                                                id: f,
                                                eventId: e.id,
                                                index: o.index,
                                                html: l,
                                                cardComplete: !0,
                                                layout: p,
                                                cardSize: h,
                                                raw: u
                                            }, n.enqueue({
                                                id: e.id,
                                                event: "data",
                                                data: m
                                            }), o.index++;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(t, n) {
                                return e.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(o), "index", 0), null != u && (o.index = u + 1), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                D = n(47403),
                N = "CANCEL",
                F = function(t) {
                    return new o.GJ({
                        transform: function(e, n) {
                            t(e), n.enqueue(e)
                        }
                    })
                },
                z = function(t) {
                    var e = t.stream,
                        n = t.docId,
                        o = t.lastCompletedCardId,
                        c = t.interactionId,
                        u = t.options,
                        s = t.store,
                        f = G(e, u).tee(),
                        l = (0, r.Z)(f, 2),
                        d = l[0],
                        p = l[1],
                        h = d.pipeThrough(F(function(t) {
                            "done" === t.event && i.a.trackStreamResponse(s, {
                                interactionId: c,
                                outputContent: t.content
                            })
                        }));
                    (0, D.GO)(h, {});
                    var m = p.pipeThrough(new x(c));
                    s.dispatch((0, a.kO)({
                        stream: {
                            id: c,
                            status: "running",
                            stream: m,
                            docId: n,
                            isResuming: !0,
                            lastCompletedCardId: o
                        }
                    }));
                    var v = (0, a.oH)(n)(s.getState());
                    if (!v) throw Error("Expected valid StreamResponse when resuming from stream");
                    return v
                },
                L = function(t) {
                    var e, n = t.stream,
                        o = t.onCancel,
                        c = t.interactionId,
                        u = t.options,
                        s = t.bufferCards,
                        f = void 0 === s ? 2 : s,
                        l = t.store,
                        d = G(n, u).tee(),
                        p = (0, r.Z)(d, 2),
                        h = p[0],
                        m = p[1],
                        v = h.pipeThrough(new I(function(t) {
                            l.dispatch((0, a.Ms)({
                                interactionId: c,
                                data: t
                            }))
                        })).pipeThrough(F(function(t) {
                            "done" === t.event && i.a.trackStreamResponse(l, {
                                interactionId: c,
                                outputContent: t.content
                            })
                        })),
                        y = m.pipeThrough(new x(c));
                    l.dispatch((0, a.kO)({
                        stream: {
                            id: c,
                            status: "running",
                            stream: y,
                            isResuming: !1
                        }
                    }));
                    var b = new Promise(function(t, n) {
                            e = n, (0, D.GO)(v, {
                                onError: function(t) {
                                    n(t)
                                },
                                onMessage: function(e) {
                                    if ("done" === e.event) {
                                        t("DONE");
                                        return
                                    }
                                    "data" === e.event && e.data.index + 1 >= f && t("READY")
                                }
                            })
                        }).catch(function(t) {
                            if (t === N) return N;
                            throw t
                        }),
                        g = !1;
                    return {
                        promise: b,
                        cancel: function() {
                            if (!g) {
                                var t;
                                console.log("[AIStream] cancelling..."), g = !0, o(), null === (t = e) || void 0 === t || t(N)
                            }
                        }
                    }
                },
                G = function(t, e) {
                    return t.pipeThrough(new C).pipeThrough(new P).pipeThrough(new B(e)).pipeThrough(F(function(t) {
                        "data" === t.event && console.log("[AIStream] processed card ".concat(t.data.index + 1))
                    })).pipeThrough(new E).pipeThrough(F(function(t) {
                        "done" === t.event && console.log("[AIStream] done (".concat(t.finishReason, ")")), "cancel" === t.event && console.log("[AIStream] cancelled")
                    }))
                }
        },
        49299: function(t, e, n) {
            "use strict";
            n.d(e, {
                a: function() {
                    return h
                }
            });
            var r = n(82269),
                o = n(95235),
                a = n(63331),
                i = n(64805),
                c = ["startTime"],
                u = ["startTime"],
                s = ["startTime"],
                f = ["startTime"],
                l = ["startTime"];

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach(function(e) {
                        (0, o.Z)(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var h = {
                trackRequestSent: function(t, e) {
                    console.log("[AIStream] EVENT: ai.request.sent"), (0, i.hq)(e);
                    var n = performance.now();
                    t.dispatch((0, a.Jh)(p(p({}, e), {}, {
                        startTime: n
                    })))
                },
                trackStreamError: function(t, e) {
                    t.dispatch((0, a.fj)({
                        endTime: performance.now(),
                        interactionId: e.interactionId
                    }));
                    var n = (0, a.Sn)(e.interactionId)(t.getState());
                    if (n) {
                        var o = n.startTime,
                            u = (0, r.Z)(n, c),
                            s = e.errorName,
                            f = e.errorMessage,
                            l = e.errorCode,
                            d = p(p({}, u), {}, {
                                errorName: s,
                                errorMessage: f,
                                errorCode: l,
                                outputMessage: "",
                                latency: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.error"), (0, i.pQ)(d)
                    }
                },
                trackStreamAbort: function(t, e) {
                    var n = (0, a.Sn)(e.interactionId)(t.getState());
                    if (n) {
                        var o = n.startTime,
                            c = p(p({}, (0, r.Z)(n, u)), {}, {
                                abortReason: e.abortReason,
                                timeToAbort: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.abort"), (0, i.mV)(c)
                    }
                },
                trackStreamStart: function(t, e) {
                    t.dispatch((0, a.af)(e));
                    var n = (0, a.Sn)(e.interactionId)(t.getState());
                    if (n) {
                        var o = n.startTime,
                            c = p(p({}, (0, r.Z)(n, s)), {}, {
                                timeToStart: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.streamStart"), (0, i.qZ)(c)
                    }
                },
                trackStreamResponse: function(t, e) {
                    t.dispatch((0, a.fj)(p({
                        endTime: performance.now()
                    }, e)));
                    var n = (0, a.Sn)(e.interactionId)(t.getState());
                    if (n) {
                        n.startTime;
                        var o = (0, r.Z)(n, f);
                        console.log("[AIStream] EVENT: ai.request.response"), (0, i.o)(o)
                    }
                },
                trackStreamComplete: function(t, e) {
                    var n = (0, a.Sn)(e)(t.getState());
                    if (n) {
                        var o = n.startTime,
                            c = p(p({}, (0, r.Z)(n, l)), {}, {
                                timeToComplete: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.complete"), (0, i.gb)(c)
                    }
                }
            }
        },
        80389: function(t, e, n) {
            "use strict";
            n.d(e, {
                S: function() {
                    return h
                }
            });
            var r = n(12741),
                o = n(2284),
                a = n.n(o),
                i = n(1313),
                c = n.n(i),
                u = n(75269),
                s = n(72990),
                f = ["gridLayout", "table", "gallery"],
                l = ["timeline", "imagesText", "textBoxes"],
                d = function(t) {
                    return c()(t)()
                },
                p = function(t, e) {
                    var n = Math.floor(c()(e)() * t.length);
                    return t[n]
                },
                h = function(t) {
                    var e, n, o, i, c = t.bodyContent,
                        h = t.theme,
                        m = t.docFormatKey,
                        v = t.index,
                        y = t.seed,
                        b = t.cardId,
                        g = t.accentBackground,
                        w = t.layout,
                        S = t.cardSize,
                        Z = t.addContributorsBlock,
                        O = (null == c ? void 0 : c.filter(function(t) {
                            var e;
                            return "image" === t.type && (null === (e = t.attrs) || void 0 === e ? void 0 : e.src)
                        })) || [],
                        x = null == c ? void 0 : c.some(function(t) {
                            return f.includes(t.type) || "smartLayout" === t.type && t.attrs && l.includes(t.attrs.variantKey)
                        }),
                        k = {
                            container: {},
                            layout: w,
                            id: b
                        };
                    S && (k.cardSize = S), g || (c && O.length > 0 ? (g = {
                        type: u.E.IMAGE,
                        image: O[0].attrs,
                        source: O[0].attrs.source
                    }, a().apply(void 0, [c].concat((0, r.Z)(O)))) : !g && h && (g = p(h.config.accentBackgrounds || [], y))), "webpage" !== m || w || (0 === v ? (k.cardSize = "full", k.layout = p(["behind", "right"], y)) : .7 > d(y) ? (k.cardSize = "full", k.layout = x ? "blank" : p(["left", "right", "behind", "blank"], y)) : (k.cardSize = "default", .6 > d(y) && (k.background = g), k.layout = "blank")), "deck" !== m || w || (0 !== v || x ? x ? k.layout = "blank" : k.layout = p(["left", "left", "right", "right", "behind", "top"], y) : k.layout = p(["left", "right"], y)), "document" !== m || w || (0 === v ? (k.cardSize = "full", k.layout = "behind") : k.layout = "blank"), (void 0 === Z || Z) && 0 === v && "webpage" !== m && (null == c || c.push({
                        type: "contributors"
                    }));
                    var I = {
                            type: "cardLayoutItem",
                            attrs: {
                                itemId: "body"
                            },
                            content: null != c && c.length ? c : [{
                                type: "paragraph"
                            }]
                        },
                        T = "blank" === k.layout ? null : {
                            type: "cardAccentLayoutItem",
                            attrs: {
                                itemId: "accent",
                                background: g
                            }
                        },
                        j = null === (e = g) || void 0 === e ? void 0 : null === (n = e.image) || void 0 === n ? void 0 : null === (o = n.meta) || void 0 === o ? void 0 : o.average_color,
                        E = j && (0, s.DP)(j);
                    return "behind" === k.layout && (E || .5 > d(y)) && (null !== (i = k.container) && void 0 !== i || (k.container = {}), k.container.background = {
                        type: u.E.COLOR,
                        color: {
                            hex: "#000000"
                        }
                    }), {
                        type: "card",
                        attrs: k,
                        content: [I, T].filter(Boolean)
                    }
                }
        },
        72314: function(t, e, n) {
            "use strict";
            n.d(e, {
                a: function() {
                    return p
                },
                r: function() {
                    return h
                }
            });
            var r, o = n(20406),
                a = n(28526),
                i = n.n(a),
                c = n(47655),
                u = n(72338),
                s = n(81161),
                f = n(58124),
                l = n(85948),
                d = n(80389),
                p = function(t) {
                    var e = t.chunk,
                        n = t.theme,
                        r = t.docFormatKey,
                        o = e.id,
                        a = e.html,
                        i = e.layout,
                        c = e.cardSize,
                        s = e.index,
                        p = e.cardComplete,
                        h = (0, f.yg)(),
                        m = (0, u.J1)(h),
                        v = (0, l.T)(a, m).content;
                    return (0, d.S)({
                        bodyContent: v.toJSON(),
                        theme: n,
                        docFormatKey: r,
                        cardId: o,
                        index: s,
                        seed: o,
                        layout: i,
                        cardSize: c,
                        addContributorsBlock: p
                    })
                },
                h = (r = (0, o.Z)(i().mark(function t(e, n, r, o) {
                    var a, u;
                    return i().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, s.y)(e, {
                                    removeImagesFromLayouts: !0,
                                    imageLicense: o
                                });
                            case 2:
                                return a = t.sent.content.toJSON().filter(function(t) {
                                    return "card" === t.type
                                }).map(function(t, e) {
                                    return (0, d.S)({
                                        bodyContent: t.content,
                                        theme: n,
                                        docFormatKey: r.docFormat,
                                        index: e
                                    })
                                }), u = (0, c.getCardTitle)(a[0]), t.abrupt("return", {
                                    doc: (0, f.vL)({
                                        docFlags: {
                                            cardLayoutsEnabled: !0
                                        },
                                        format: r.docFormat
                                    }, a),
                                    title: u
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })), function(t, e, n, o) {
                    return r.apply(this, arguments)
                })
        },
        12132: function(t, e, n) {
            "use strict";
            n.d(e, {
                bo: function() {
                    return u
                },
                dn: function() {
                    return c
                },
                g5: function() {
                    return s
                }
            });
            var r = n(2784),
                o = n(64805),
                a = n(28811),
                i = n(25232),
                c = function(t) {
                    var e = (0, i.ye)("openAiStatus"),
                        n = (0, r.useState)("input"),
                        a = n[0],
                        c = n[1],
                        u = (0, r.useState)(t),
                        s = u[0],
                        f = u[1],
                        l = (0, r.useState)();
                    return {
                        step: a,
                        setStep: c,
                        generateFormat: s,
                        setGenerateFormat: f,
                        selectedTheme: l[0],
                        openAiStatus: e,
                        setSelectedTheme: l[1],
                        interactionId: (0, r.useMemo)(function() {
                            return (0, o.nZ)()
                        }, [])
                    }
                },
                u = function() {
                    var t = (0, a.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        e = t.data,
                        n = t.loading;
                    return {
                        themes: (0, r.useMemo)(function() {
                            return (null == e ? void 0 : e.themes) || []
                        }, [e]),
                        isThemesLoading: n
                    }
                },
                s = function() {
                    return (0, i.ye)("azureOpenAI") ? a.nyn.Azure : a.nyn.Openai
                }
        },
        3588: function(t, e, n) {
            "use strict";
            n.d(e, {
                n: function() {
                    return r
                }
            });
            var r = function() {
                var t = document.createElement("div");
                t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t);
                var e = document.createElement("div");
                t.appendChild(e);
                var n = t.offsetWidth - e.offsetWidth;
                return t.parentNode.removeChild(t), n
            }
        },
        74358: function(t, e, n) {
            "use strict";
            n.d(e, {
                m: function() {
                    return O
                },
                n: function() {
                    return k
                }
            });
            var r = n(20406),
                o = n(95235),
                a = n(82269),
                i = n(28526),
                c = n.n(i),
                u = n(53738),
                s = n(2784),
                f = n(43997),
                l = n(57848),
                d = n(26658),
                p = n(8354),
                h = n(56433),
                m = n(17349),
                v = n(26891),
                y = n(53246),
                b = n(41378),
                g = n(78977),
                w = n(52322),
                S = ["reduxData"];

            function Z(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var O = function(t) {
                    var e = t.reduxData,
                        n = (0, a.Z)(t, S),
                        r = (0, b.c)(e);
                    return (0, w.jsx)(f.zt, {
                        store: r,
                        children: (0, w.jsx)(x, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Z(Object(n), !0).forEach(function(e) {
                                    (0, o.Z)(t, e, n[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                })
                            }
                            return t
                        }({}, n))
                    })
                },
                x = function(t) {
                    var e = t.onCreate,
                        n = void 0 === e ? function() {} : e,
                        o = t.initialContent,
                        a = t.content,
                        i = t.theme,
                        b = t.isThumbnail,
                        S = (0, s.useState)(!1),
                        Z = S[0],
                        O = S[1],
                        x = (0, s.useMemo)(function() {
                            return (0, g.e)()
                        }, []),
                        k = (0, f.I0)();
                    (0, s.useEffect)(function() {
                        k((0, m.Dc)({
                            theme: i || null
                        })), k((0, m.iS)({
                            isAllowedToEdit: !1
                        })), k((0, m.Nr)({
                            animationsEnabled: !1
                        }))
                    }, [i, k]);
                    var I = (0, y.jE)({
                        onCreate: function(t) {
                            return (0, r.Z)(c().mark(function e() {
                                var r, o;
                                return c().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o = t.editor, console.debug("[EditorPreview][onCreate] TipTap editor is now ready"), null === (r = p.Z8.getState(o.state)) || void 0 === r || r.compute(o.state).processChanges(k), o.commands.command(function() {
                                                return (0, d.E0)(o.state.doc, k), !0
                                            }), O(!0), null == n || n({
                                                editor: o
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))()
                        },
                        extensions: x,
                        content: void 0 === o ? void 0 : o,
                        editable: !1
                    });
                    return (I.isThumbnail = b, (0, s.useEffect)(function() {
                        var t;
                        a && I && (I.commands.setContent(a), I.commands.command(function() {
                            return (0, d.E0)(I.state.doc, k), !0
                        }), null === (t = h.S.getState(I.state)) || void 0 === t || t.compute(I.state.doc).processChanges(k))
                    }, [a, I, k]), (0, l.p)([], I), Z) ? (0, w.jsx)(u.xu, {
                        className: "editor-preview-root",
                        "data-variation-preview": !0,
                        "data-testid": "editor-preview-root",
                        width: "100%",
                        position: "relative",
                        sx: v.I,
                        children: (0, w.jsx)(y.kg, {
                            editor: I,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            className: "highlight-mask"
                        })
                    }) : (0, w.jsx)(w.Fragment, {})
                },
                k = {
                    "[data-thumbnail-hidden]": {
                        display: "none !important"
                    },
                    "*": {
                        backdropFilter: "none !important",
                        webkitBackdropFilter: "none !important"
                    },
                    contain: "paint",
                    ".editor-core-root, .editor-preview-root": {
                        height: "100% !important",
                        width: "auto !important"
                    },
                    ".doc-content-wrapper": {
                        pb: "0 !important",
                        minH: "auto !important"
                    },
                    "[data-doc-background-element], [data-doc-background-element-present-mode]": {
                        display: "none !important"
                    },
                    ".card2-background": {
                        mt: 0
                    }
                }
        },
        68964: function(t, e, n) {
            "use strict";

            function r(t) {
                return t
            }

            function o(t) {
                return Math.sin(t * Math.PI / 2)
            }

            function a(t) {
                return 1 - Math.pow(1 - t, 3)
            }

            function i(t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            }

            function c(t) {
                return 1 - (1 - t) * (1 - t)
            }

            function u(t) {
                return 1 - Math.pow(1 - t, 4)
            }

            function s(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }

            function f(t, e, n) {
                return t * (1 - n) + e * n
            }
            n.d(e, {
                Y3: function() {
                    return u
                },
                ad: function() {
                    return s
                },
                ei: function() {
                    return i
                },
                gA: function() {
                    return r
                },
                hl: function() {
                    return c
                },
                t7: function() {
                    return f
                },
                vh: function() {
                    return o
                },
                w2: function() {
                    return a
                }
            })
        },
        80660: function() {}
    }
]);
//# sourceMappingURL=5017-676b5fff4a6fa192.js.map