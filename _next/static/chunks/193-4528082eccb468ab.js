(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [193], {
        11325: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return r
                }
            });
            var r = n(2784).lazy(function() {
                return Promise.all([n.e(8917), n.e(7120), n.e(4100), n.e(3421)]).then(n.bind(n, 23421)).then(function(e) {
                    return {
                        default: e.default
                    }
                })
            })
        },
        30750: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var r = n(55452),
                i = n(52322),
                o = function() {
                    return {
                        100: (0, i.jsx)(r.cC, {
                            id: "RGjFMI"
                        }),
                        200: (0, i.jsx)(r.cC, {
                            id: "GMGHcE"
                        }),
                        300: (0, i.jsx)(r.cC, {
                            id: "1njn7W"
                        }),
                        400: (0, i.jsx)(r.cC, {
                            id: "xfqlmg"
                        }),
                        500: (0, i.jsx)(r.cC, {
                            id: "agPptk"
                        }),
                        600: (0, i.jsx)(r.cC, {
                            id: "KVGfPY"
                        }),
                        700: (0, i.jsx)(r.cC, {
                            id: "KmydK6"
                        }),
                        800: (0, i.jsx)(r.cC, {
                            id: "NV46Ki"
                        }),
                        900: (0, i.jsx)(r.cC, {
                            id: "THokF3"
                        })
                    }
                }
        },
        40395: function(e, t, n) {
            "use strict";
            n.d(t, {
                Av: function() {
                    return T
                },
                B_: function() {
                    return w
                },
                CZ: function() {
                    return O
                },
                QP: function() {
                    return S
                },
                Sd: function() {
                    return _
                },
                UK: function() {
                    return C
                },
                ZN: function() {
                    return P
                },
                cC: function() {
                    return k
                },
                x_: function() {
                    return E
                },
                zn: function() {
                    return v
                }
            });
            var r, i = n(12741),
                o = n(95235),
                a = n(20406),
                c = n(28526),
                l = n.n(c),
                s = n(18149),
                d = n.n(s),
                u = n(53553),
                h = n(28811);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function m(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return j(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var x = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = ["italic", "oblique"],
                        r = m(t);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var i, o = e.value,
                                a = m(n);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var c = i.value;
                                    if (-1 !== o.toLowerCase().indexOf(c)) return !0
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return !1
                },
                g = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = m(t);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value;
                            if (b(r, ["thin"])) return 100;
                            if (b(r, ["light", "lite"], ["extra", "ultra", "x"])) return 200;
                            if (b(r, ["light"])) return 300;
                            if (b(r, ["medium"])) return 500;
                            if (b(r, ["bold"], ["demi", "semi"])) return 600;
                            if (b(r, ["bold"], ["extra", "x"])) return 800;
                            if (b(r, ["bold"])) return 700;
                            if (b(r, ["black", "heavy", "ultra"])) return 900
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return 400
                },
                b = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = m(n);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var o = t.value;
                            if (0 === r.length) {
                                if (-1 !== e.toLowerCase().indexOf(o.toLowerCase())) return !0
                            } else {
                                var a, c = m(r);
                                try {
                                    for (c.s(); !(a = c.n()).done;) {
                                        var l = a.value;
                                        if (-1 !== e.toLowerCase().indexOf(o.toLowerCase()) && -1 !== e.toLowerCase().indexOf(l.toLowerCase())) return !0
                                    }
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            }
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return !1
                },
                v = (r = (0, a.Z)(l().mark(function e(t) {
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise(function(e, n) {
                                    var r = new FileReader;
                                    r.onload = function(t) {
                                        var r = null === (i = t.target) || void 0 === i ? void 0 : i.result;
                                        try {
                                            var i, o, a, c, l, s, d, h, f, p, m, j, b, v, y, O, C, E, k, T = u.ZP.parse(r),
                                                P = null !== (o = null === (a = Object.values(null !== (c = null === (l = T.tables) || void 0 === l ? void 0 : null === (s = l.name) || void 0 === s ? void 0 : s.preferredSubfamily) && void 0 !== c ? c : null === (d = T.tables) || void 0 === d ? void 0 : null === (h = d.name) || void 0 === h ? void 0 : h.fontSubfamily)) || void 0 === a ? void 0 : a[0]) && void 0 !== o ? o : "",
                                                w = null !== (f = null === (p = Object.values(null === (m = T.tables) || void 0 === m ? void 0 : null === (j = m.name) || void 0 === j ? void 0 : j.fullName)) || void 0 === p ? void 0 : p[0]) && void 0 !== f ? f : "",
                                                S = null !== (b = null === (v = Object.values(null !== (y = null === (O = T.tables) || void 0 === O ? void 0 : null === (C = O.name) || void 0 === C ? void 0 : C.preferredFamily) && void 0 !== y ? y : null === (E = T.tables) || void 0 === E ? void 0 : null === (k = E.name) || void 0 === k ? void 0 : k.fontFamily)) || void 0 === v ? void 0 : v[0]) && void 0 !== b ? b : "";
                                            e({
                                                familyName: S,
                                                isItalic: x([P, w]),
                                                weight: g([P, w])
                                            })
                                        } catch (e) {
                                            n(e)
                                        }
                                    }, r.onerror = function(t) {
                                        console.error("[parseFontFile] unable to read the font file, providing defaults", t), e({
                                            familyName: "",
                                            isItalic: !1,
                                            weight: 400
                                        })
                                    }, r.readAsArrayBuffer(t)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return r.apply(this, arguments)
                }),
                y = function(e) {
                    var t = e.lastIndexOf(".");
                    return -1 === t || t === e.length - 1 ? {
                        name: e,
                        extension: void 0
                    } : {
                        name: e.slice(0, t),
                        extension: e.slice(t + 1)
                    }
                },
                O = function(e) {
                    var t = y(e).extension;
                    return t === h.sA6.Otf || t === h.sA6.Ttf ? t : h.sA6.Ttf
                },
                C = function(e) {
                    var t = e.existingFont;
                    if (!t) return !0;
                    var n = {
                            fontName: t.name,
                            fontId: t.id,
                            fontFiles: t.fontFiles.map(function(e) {
                                return {
                                    id: e.id,
                                    name: e.name,
                                    weight: e.weight,
                                    isItalic: e.isItalic,
                                    fileType: e.fileType,
                                    sourceUrl: e.sourceUrl
                                }
                            })
                        },
                        r = {
                            fontName: e.fontName,
                            fontId: e.fontId,
                            fontFiles: e.uploadFontFiles.map(function(e) {
                                return {
                                    id: e.fontFile.id,
                                    name: e.fontFile.name,
                                    weight: e.fontFile.weight,
                                    isItalic: e.fontFile.isItalic,
                                    fileType: e.fontFile.fileType,
                                    sourceUrl: e.fontFile.sourceUrl
                                }
                            })
                        };
                    return !d()(n, r)
                },
                E = function(e) {
                    return Object.keys(e.reduce(function(e, t) {
                        var n = [t.weight, t.isItalic].join("__");
                        return p(p({}, e), {}, (0, o.Z)({}, n, !0))
                    }, {})).length
                },
                k = function(e) {
                    return Object.values(e.reduce(function(e, t) {
                        var n = t.fontFile,
                            r = [n.weight, n.isItalic, n.fileType].join("__");
                        return e[r] = e[r] || [], e[r].push(t), e
                    }, {})).reduce(function(e, t) {
                        if (t.length > 1) {
                            var n, r = m(t);
                            try {
                                for (r.s(); !(n = r.n()).done;) e[n.value.uploadId] = !0
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }
                        return e
                    }, {})
                },
                T = function(e) {
                    return e.reduce(function(e, t) {
                        var n = t.fontFile.weight;
                        return p(p({}, e), {}, (0, o.Z)({}, n, [].concat((0, i.Z)(e[n] || []), [t])))
                    }, {})
                },
                P = function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return e.sort(function(e, n) {
                        return t ? Number(e) - Number(n) : Number(n) - Number(e)
                    })
                },
                w = function(e) {
                    return P(Array.from(new Set(e.map(function(e) {
                        return e.weight
                    }))))
                },
                S = function(e, t) {
                    if (void 0 !== t) {
                        if (t > e[e.length - 1]) return e[e.length - 1];
                        for (var n = 1 / 0, r = -1, i = 0; i < e.length; i++) {
                            var o = Math.abs(t - e[i]);
                            if (o < n) n = o, r = i;
                            else break
                        }
                        return e[r]
                    }
                },
                _ = function(e) {
                    return !!e && 0 !== e.length && -1 === e.findIndex(function(e) {
                        return !e.isItalic
                    })
                }
        },
        94467: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return nb
                }
            });
            var r, i, o = n(82269),
                a = n(95235),
                c = n(81333),
                l = n(55452),
                s = n(87254),
                d = n(55479),
                u = n(78116),
                h = n(56915),
                f = n(16796),
                p = n(92619),
                m = n(11919),
                j = n(91012),
                x = n(53738),
                g = n(76648),
                b = n(45650),
                v = n(2167),
                y = n(64827),
                O = n(27302),
                C = n(420),
                E = n(97261),
                k = n(18149),
                T = n.n(k),
                P = n(2784),
                w = n(43997),
                S = n(28811),
                _ = n(36188),
                D = n(17349),
                A = n(5945),
                I = n(15767),
                F = n(62523),
                M = n(47299),
                N = n(47557),
                R = n(89190),
                U = n(73848),
                z = n(24798),
                G = n(8283),
                H = n(84520),
                L = n(95085),
                W = n(8848),
                B = n(49929),
                Z = n(78985),
                V = n(95828),
                q = n(36157),
                K = n(58124),
                Q = n(69663),
                Y = n(12162),
                J = n(3360),
                X = n(75156),
                $ = n(57560),
                ee = n(2638),
                et = n(41823),
                en = n(12741),
                er = n(16686),
                ei = n(5766),
                eo = n(76162),
                ea = n(9124),
                ec = n(52322),
                el = (0, P.memo)(function(e) {
                    var t = e.theme,
                        n = e.onThemeClick,
                        r = e.onSelectClick,
                        i = (0, S.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        o = i.data,
                        a = i.loading,
                        c = (null == o ? void 0 : o.themes) || [];
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [a ? (0, ec.jsx)(eo.t, {
                            size: 4
                        }) : (0, ec.jsx)(x.xu, {
                            flex: 1,
                            p: 6,
                            children: (0, ec.jsx)(ei.M, {
                                columns: {
                                    base: 1,
                                    lg: 2
                                },
                                spacing: 1,
                                children: (0, en.Z)(c).sort(et.qb).map(function(e) {
                                    return (0, ec.jsx)(ea.o, {
                                        type: "standard",
                                        theme: e,
                                        isChecked: e.id === t.id,
                                        onThemeClicked: n,
                                        variant: "ghost"
                                    }, e.id)
                                })
                            })
                        }), (0, ec.jsx)(m.k, {
                            pos: "sticky",
                            bottom: 0,
                            px: 6,
                            py: 4,
                            alignItems: "center",
                            bg: "white",
                            children: (0, ec.jsx)(b.z, {
                                "data-testid": "select-this-theme",
                                flex: 1,
                                variant: "solid",
                                leftIcon: (0, ec.jsx)(B.G, {
                                    icon: er.Jy
                                }),
                                onClick: r,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "UJfhAS"
                                })
                            })
                        })]
                    })
                }),
                es = n(44645),
                ed = n(98841),
                eu = n(25925),
                eh = (0, P.createContext)({});

            function ef(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ep(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var em = (0, ed.E)(x.xu),
                ej = {
                    enter: function(e) {
                        return {
                            position: "absolute",
                            width: "100%",
                            x: "push" === e ? "100%" : "-100%",
                            opacity: 0
                        }
                    },
                    center: {
                        width: "100%",
                        position: "static",
                        x: 0,
                        opacity: 1
                    },
                    exit: function(e) {
                        return {
                            width: "100%",
                            position: "absolute",
                            x: "push" === e ? "-100%" : "100%",
                            opacity: 0
                        }
                    }
                },
                ex = function(e) {
                    var t = e.containerProps,
                        n = e.motionProps,
                        r = e.InitialComponent,
                        i = (0, P.useState)(r ? [r] : []),
                        o = i[0],
                        a = i[1],
                        c = (0, P.useRef)("push"),
                        l = (0, P.useCallback)(function() {
                            c.current = "pop", a((0, en.Z)(o.slice(0, -1)))
                        }, [o]),
                        s = (0, P.useCallback)(function(e) {
                            c.current = "push", a([].concat((0, en.Z)(o), [e]))
                        }, [o]),
                        d = o[o.length - 1];
                    return ((0, P.useEffect)(function() {
                        0 === o.length && r && s(r)
                    }, [r, s, o]), d) ? (0, ec.jsx)(eh.Provider, {
                        value: {
                            push: s,
                            pop: l
                        },
                        children: (0, ec.jsx)(x.xu, ep(ep({}, t || {}), {}, {
                            position: "relative",
                            children: (0, ec.jsx)(eu.M, {
                                initial: !1,
                                custom: c.current,
                                children: (0, ec.jsx)(em, ep(ep({
                                    variants: ej,
                                    custom: c.current,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    transition: {
                                        default: {
                                            duration: .2
                                        }
                                    }
                                }, n || {}), {}, {
                                    children: (0, ec.jsx)(d, {})
                                }), o.length)
                            })
                        }))
                    }) : null
                };

            function eg(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eg(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eg(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ev = (0, P.createContext)({});

            function ey() {
                var e = (0, P.useContext)(ev),
                    t = (0, P.useContext)(eh);
                return eb(eb({}, e), t)
            }
            var eO = n(55997),
                eC = n(37578),
                eE = n(4519),
                ek = n(97200),
                eT = n(29113),
                eP = n(18746),
                ew = n(30771),
                eS = n(90950),
                e_ = n(35837),
                eD = n(25232),
                eA = n(71354),
                eI = n(2046),
                eF = n(70287),
                eM = n(30302),
                eN = n(73132),
                eR = n(52932),
                eU = n(83484),
                ez = n(67784),
                eG = ["icon", "label", "onClick"];

            function eH(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eL(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eH(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eH(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eW = {
                    width: "100%",
                    variant: "unstyled",
                    borderRadius: "revert",
                    height: "revert",
                    justifyContent: "flex-start"
                },
                eB = (0, P.memo)(function(e) {
                    var t = e.icon,
                        n = e.label,
                        r = e.onClick,
                        i = (0, o.Z)(e, eG);
                    return (0, ec.jsxs)(m.k, eL(eL(eL({
                        "data-testid": "theme-config-menu-button-".concat(n.replace(/^\d+\.\s*/, "").replaceAll(/\s/g, "-").toLowerCase()),
                        as: b.z
                    }, eW), {}, {
                        onClick: r,
                        p: 4,
                        borderBottomWidth: "1px",
                        _hover: {
                            bg: "trueblue.50"
                        }
                    }, i), {}, {
                        children: [(0, ec.jsx)(x.xu, {
                            color: "trueblue.500",
                            children: (0, ec.jsx)(B.G, {
                                icon: t,
                                fixedWidth: !0
                            })
                        }), (0, ec.jsx)(x.xu, {
                            fontWeight: "600",
                            ml: 2,
                            mr: "auto",
                            children: n
                        }), (0, ec.jsx)(x.xu, {
                            color: "gray.600",
                            children: (0, ec.jsx)(B.G, {
                                icon: ez._t
                            })
                        })]
                    }))
                });

            function eZ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eV(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eZ(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eZ(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            eB.displayName = "ThemeConfigNavigationMenuButton";
            var eq = function(e) {
                    var t = e.label,
                        n = e.onBackClick,
                        r = e.children;
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(m.k, eV(eV({
                            "data-testid": "theme-config-back-button",
                            as: b.z
                        }, eW), {}, {
                            p: 4,
                            borderBottomWidth: "1px",
                            bg: "gray.50",
                            _hover: {
                                bg: "gray.200"
                            },
                            onClick: n,
                            children: [(0, ec.jsx)(x.xu, {
                                color: "gray.600",
                                mr: 2,
                                children: (0, ec.jsx)(B.G, {
                                    icon: eU.A3
                                })
                            }), (0, ec.jsx)(x.xu, {
                                fontWeight: "600",
                                children: t
                            })]
                        })), (0, ec.jsx)(x.xu, {
                            p: 6,
                            children: r
                        })]
                    })
                },
                eK = n(49626),
                eQ = n(72360),
                eY = n(48322),
                eJ = n(36895),
                eX = n(37164),
                e$ = n(59334),
                e0 = n(10004),
                e1 = n(97601),
                e2 = n(35498),
                e5 = n(34847);

            function e4(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e3(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e4(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e4(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e8 = function(e) {
                    return (0, e5.bH)(e) && (0, e5.Rr)(e)
                },
                e6 = function(e) {
                    var t = e.setBackground,
                        n = e.background,
                        r = e.defaultMessage,
                        i = e.isDark,
                        o = e.isValidSource,
                        a = (0, P.useState)(e$.hq.key),
                        c = a[0],
                        l = a[1],
                        s = e1.ah[c],
                        d = (0, P.useCallback)(function(e) {
                            return o ? o(e) && e8(e) : e8(e)
                        }, [o]),
                        u = (0, P.useCallback)(function(e) {
                            t(e3(e3({}, n), e))
                        }, [n, t]);
                    return (0, ec.jsx)(e2.O, {
                        isDark: i,
                        isValidSource: d,
                        defaultMessage: r,
                        currentBackground: n,
                        currentSource: s,
                        updateCurrentBackground: u,
                        setCurrentSourceKey: l,
                        currentSourceKey: c
                    })
                },
                e7 = n(75269),
                e9 = n(55803),
                te = n(47247);

            function tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tt(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tr = function(e) {
                    return e.backgroundType !== e7.E.NONE
                },
                ti = tn(tn({}, Y.Gx), {}, {
                    accentId: void 0
                }),
                to = function(e) {
                    var t = e.theme,
                        n = e.updateTheme,
                        r = (0, P.useState)(!1),
                        i = r[0],
                        o = r[1],
                        a = (0, P.useState)(null),
                        c = a[0],
                        s = a[1],
                        d = (0, P.useState)(null),
                        u = d[0],
                        h = d[1],
                        f = c && !!c.accentId,
                        p = t.config.accentBackgrounds,
                        m = (0, P.useCallback)(function() {
                            h(ti), s(ti)
                        }, []),
                        x = (0, P.useCallback)(function() {
                            s(null), h(null)
                        }, []),
                        v = (0, P.useCallback)(function(e) {
                            var t = e || c;
                            if (t) {
                                var r = tn(tn({}, t), {}, {
                                        source: F.cx,
                                        originalSource: t.source,
                                        accentId: (0, eX.x0)()
                                    }),
                                    i = p || [];
                                if (f) {
                                    var o = i.findIndex(function(e) {
                                        return e.accentId === c.accentId
                                    });
                                    if (-1 === o) {
                                        console.warn("[AccentImagePicker] Could not find accent image to edit");
                                        return
                                    }
                                    n({
                                        accentBackgrounds: [].concat((0, en.Z)(i.slice(0, o)), [r], (0, en.Z)(i.slice(o + 1)))
                                    })
                                } else n({
                                    accentBackgrounds: [].concat((0, en.Z)(i), [r])
                                });
                                x()
                            }
                        }, [p, c, f, x, n]),
                        y = (0, P.useCallback)(function(e) {
                            n({
                                accentBackgrounds: (p || []).filter(function(t) {
                                    return t.accentId !== e.accentId
                                })
                            })
                        }, [p, n]),
                        O = (0, P.useCallback)(function(e) {
                            h(tn(tn({}, e), {}, {
                                source: e.originalSource
                            })), s(tn(tn({}, e), {}, {
                                source: e.originalSource
                            }))
                        }, []),
                        C = (0, P.useCallback)(function(e) {
                            if (e.source === e$.hq.key || e.source === e$.$5.key) {
                                v(e);
                                return
                            }
                            if (e.source === e$.in.key) {
                                var t, n, r, i;
                                (null === (t = e.image) || void 0 === t ? void 0 : t.uploadStatus) === e0.D.Uploading ? o(!0) : (null === (n = e.image) || void 0 === n ? void 0 : n.uploadStatus) === e0.D.Done && (null === (r = e.image) || void 0 === r ? void 0 : r.uploadResultStep) === "optimized" ? o(!1) : (null === (i = e.image) || void 0 === i ? void 0 : i.uploadStatus) === e0.D.Error && o(!1)
                            }
                            s(e)
                        }, [v]),
                        E = (0, P.useMemo)(function() {
                            return !T()(c, u)
                        }, [c, u]),
                        k = (0, et.wj)(t);
                    return c ? (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsx)(e6, {
                            setBackground: C,
                            background: c,
                            isValidSource: tr,
                            defaultMessage: (0, ec.jsxs)(eQ.b, {
                                children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(l.cC, {
                                    id: "VPwqDS"
                                })]
                            }),
                            isDark: k
                        }), (0, ec.jsxs)(g.h, {
                            pt: 6,
                            display: "flex",
                            children: [(0, ec.jsx)(b.z, {
                                variant: "ghost",
                                onClick: x,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "dEgA5A"
                                })
                            }), (0, ec.jsx)(b.z, {
                                variant: "solid",
                                onClick: function() {
                                    return v()
                                },
                                isLoading: i,
                                isDisabled: !E,
                                flex: 1,
                                children: f ? (0, ec.jsx)(l.cC, {
                                    id: "tfDRzk"
                                }) : (0, ec.jsx)(l.cC, {
                                    id: "B6vyEa"
                                })
                            })]
                        })]
                    }) : (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(eA.K, {
                            spacing: 3,
                            children: [(0, ec.jsx)(b.z, {
                                leftIcon: (0, ec.jsx)(B.G, {
                                    icon: eK.r8
                                }),
                                alignSelf: "flex-start",
                                onClick: m,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "m16xKo"
                                })
                            }), p && (null == p ? void 0 : p.length) !== 0 ? (0, ec.jsx)(te.U, {
                                accentImages: p,
                                isDark: k,
                                handleDelete: y,
                                handleItemClick: O
                            }) : (0, ec.jsx)(ta, {})]
                        }), (0, ec.jsxs)(eQ.b, {
                            fontSize: "xs",
                            mt: 6,
                            children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                children: (0, ec.jsx)(l.cC, {
                                    id: "M6esHH"
                                })
                            })]
                        })]
                    })
                },
                ta = function() {
                    return (0, ec.jsxs)(x.xu, {
                        alignSelf: "center",
                        maxWidth: 52,
                        children: [(0, ec.jsx)(eJ.E, {
                            src: e9.Z.src,
                            alt: "Sal, the Gamma mascot, flying and spraying pink and purple flecks of stars and slide deck icons",
                            py: 4
                        }), (0, ec.jsx)(j.x, {
                            fontSize: "sm",
                            color: "gray.700",
                            textAlign: "center",
                            children: (0, ec.jsx)(l.cC, {
                                id: "lHlzHV"
                            })
                        })]
                    })
                };

            function tc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tl = n(8022),
                ts = n(20406),
                td = n(28526),
                tu = n.n(td),
                th = n(60807),
                tf = n(11325),
                tp = (r = (0, ts.Z)(tu().mark(function e(t, r, i) {
                    var o, a, c;
                    return tu().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.all([n.e(5489), n.e(4751)]).then(n.bind(n, 94207));
                            case 3:
                                return o = e.sent.default, e.next = 6, Promise.all([n.e(5489), n.e(9224)]).then(n.bind(n, 30058));
                            case 6:
                                a = e.sent.default, c = o.parse(t), r(a.objectify(c)), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(0), i(e.t0.message);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 12]
                    ])
                })), function(e, t, n) {
                    return r.apply(this, arguments)
                }),
                tm = (i = (0, ts.Z)(tu().mark(function e(t, r, i) {
                    var o, a;
                    return tu().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.all([n.e(5489), n.e(4751)]).then(n.bind(n, 94207));
                            case 3:
                                return o = e.sent.default, e.next = 6, Promise.all([n.e(5489), n.e(9224)]).then(n.bind(n, 30058));
                            case 6:
                                a = e.sent.default, o().process(t, {
                                    parser: a
                                }).then(function(e) {
                                    r(e.css)
                                }), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), i(e.t0.message);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 10]
                    ])
                })), function(e, t, n) {
                    return i.apply(this, arguments)
                }),
                tj = function(e) {
                    var t = e.label,
                        r = e.initialValue,
                        i = e.updateValue,
                        o = e.helperText,
                        a = (0, P.useState)(""),
                        c = a[0],
                        l = a[1],
                        s = (0, P.useState)(null),
                        d = s[0],
                        u = s[1],
                        h = (0, P.useState)(),
                        f = h[0],
                        p = h[1],
                        m = (0, I.Kt)(tp, 100);
                    return ((0, P.useEffect)(function() {
                        Promise.all([n.e(8917), n.e(7120), n.e(6214)]).then(n.bind(n, 96214)).then(function(e) {
                            p(e.css())
                        })
                    }, []), (0, I.vm)(function() {
                        u(null), r && tm(r, l, u)
                    }, [r], []), (0, I.vm)(function() {
                        u(null), m(c, i, u)
                    }, [c, i, m], [c]), f) ? (0, ec.jsxs)(eI.NI, {
                        isInvalid: !!d,
                        children: [(0, ec.jsx)(eF.l, {
                            children: t
                        }), d && (0, ec.jsx)(th.J1, {
                            children: d
                        }), o && (0, ec.jsx)(eI.Q6, {
                            children: o
                        }), (0, ec.jsx)(x.xu, {
                            border: "1px solid",
                            borderColor: "gray.200",
                            fontSize: "md",
                            children: (0, ec.jsx)(P.Suspense, {
                                fallback: (0, ec.jsx)("span", {}),
                                children: (0, ec.jsx)(tf.B, {
                                    value: c,
                                    height: "300px",
                                    extensions: [f],
                                    onChange: l
                                })
                            })
                        })]
                    }) : null
                },
                tx = n(42648),
                tg = n(26673),
                tb = n(9088),
                tv = n(30893),
                ty = n(40771),
                tO = n(2575),
                tC = n(94067);

            function tE(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tk = function(e) {
                    var t = e.theme,
                        n = e.dispatch,
                        r = (0, tC.c)(t);
                    return (0, ec.jsxs)(eI.NI, {
                        children: [(0, ec.jsx)(eF.l, {
                            children: (0, ec.jsx)(l.cC, {
                                id: "x5htAS"
                            })
                        }), (0, ec.jsxs)(tb.v, {
                            matchWidth: !0,
                            children: [(0, ec.jsx)(tv.j, {
                                size: "lg",
                                as: b.z,
                                borderRadius: "md",
                                rightIcon: (0, ec.jsx)(B.G, {
                                    icon: tg.pt,
                                    transform: "shrink-6"
                                }),
                                variant: "toolbar",
                                px: 4,
                                h: 10,
                                w: "100%",
                                border: "1px solid",
                                borderColor: "gray.200",
                                children: (0, ec.jsx)(j.x, {
                                    textAlign: "left",
                                    fontWeight: "400",
                                    children: r.name()
                                })
                            }), (0, ec.jsx)(ty.q, {
                                maxH: "320px",
                                maxW: "100%",
                                overflow: "auto",
                                children: tC.N.map(function(e) {
                                    return (0, ec.jsx)(tO.i, {
                                        isChecked: r.key === e.key,
                                        value: e.key,
                                        onClick: function() {
                                            return n({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        themeBase: e.key
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsxs)(G.U, {
                                            maxW: "100%",
                                            children: [(0, ec.jsx)(tT, {
                                                base: e
                                            }), (0, ec.jsxs)(x.xu, {
                                                flex: "1",
                                                minW: "0",
                                                children: [e.name(), e.description && (0, ec.jsx)(j.x, {
                                                    color: "gray.400",
                                                    fontSize: "sm",
                                                    children: e.description()
                                                })]
                                            })]
                                        })
                                    }, e.key)
                                })
                            })]
                        })]
                    })
                },
                tT = function(e) {
                    var t = e.base,
                        n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tE(Object(n), !0).forEach(function(t) {
                                    (0, a.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tE(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            "--card-color": "#FFF"
                        }, t.getCSSVars("#FFF", "#F00"));
                    return (0, ec.jsx)(x.xu, {
                        backgroundColor: "gray.200",
                        p: 4,
                        css: n,
                        children: (0, ec.jsx)(x.xu, {
                            sx: t.cardSx,
                            h: "3em",
                            w: "5em"
                        })
                    })
                },
                tP = (0, P.memo)(function() {
                    var e, t = ey(),
                        n = t.state,
                        r = t.pop,
                        i = t.dispatch,
                        o = t.label,
                        a = n.theme,
                        c = (null === (e = a.config.cardBackground) || void 0 === e ? void 0 : e.type) === e7.E.COLOR ? a.config.cardBackground.color : null;
                    return (0, ec.jsx)(eq, {
                        onBackClick: r,
                        label: o,
                        children: (0, ec.jsxs)(eA.K, {
                            children: [(0, ec.jsxs)(eI.NI, {
                                "data-testid": "custom-theme-card-color-picker",
                                children: [(0, ec.jsx)(eF.l, {
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "9d2iLQ"
                                    })
                                }), (0, ec.jsx)(eI.Q6, {
                                    mb: 4,
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "7wiFpy"
                                    })
                                }), (0, ec.jsx)(tx.T, {
                                    value: (null == c ? void 0 : c.hex) || null,
                                    updateValue: function(e) {
                                        return i({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    cardBackground: e ? {
                                                        type: e7.E.COLOR,
                                                        color: {
                                                            hex: e
                                                        }
                                                    } : void 0
                                                }
                                            }
                                        })
                                    },
                                    defaultValue: "#FFFFFF"
                                })]
                            }), (0, ec.jsx)(tk, {
                                theme: a,
                                dispatch: i
                            })]
                        })
                    })
                });
            tP.displayName = "ThemeConfigCardStylesPanel";
            var tw = n(40395),
                tS = n(76002),
                t_ = n(60883),
                tD = n(91128),
                tA = n(63849),
                tI = n(95258),
                tF = n(47457),
                tM = function(e) {
                    var t = e.label,
                        n = e.description,
                        r = e.labelColor,
                        i = e.fontFamily,
                        o = e.fontStyle,
                        a = e.fontWeight,
                        c = (0, ec.jsxs)(G.U, {
                            alignItems: "baseline",
                            children: [(0, ec.jsx)(x.xu, {
                                color: "yellow.400",
                                children: (0, ec.jsx)(B.G, {
                                    icon: tF.e7
                                })
                            }), (0, ec.jsx)(j.x, {
                                textAlign: "left",
                                color: void 0 === r ? "black" : r,
                                fontWeight: void 0 === a ? 400 : a,
                                fontSize: "lg",
                                fontFamily: i,
                                fontStyle: void 0 === o ? "normal" : o,
                                children: t
                            })]
                        });
                    return n ? (0, ec.jsxs)(x.xu, {
                        children: [c, (0, ec.jsx)(j.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: n
                        })]
                    }) : c
                },
                tN = ["value", "updateValue", "onFontUploadClick", "weight", "defaultFont", "fonts", "customFontsEnabled"];

            function tR(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tR(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tR(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tz = function(e) {
                    var t = e.value,
                        n = e.updateValue,
                        r = e.onFontUploadClick,
                        i = e.weight,
                        a = void 0 === i ? "regular" : i,
                        c = e.defaultFont,
                        s = e.fonts,
                        d = e.customFontsEnabled,
                        u = (0, o.Z)(e, tN),
                        h = s.workspaceFonts,
                        f = s.globalFonts,
                        p = (0, P.useMemo)(function() {
                            var e = [].concat((0, en.Z)(h), (0, en.Z)(f));
                            return [e.find(function(e) {
                                return e.id === t
                            }), (0, tS.Yw)(e, t), (0, tS.Yw)(e, t, !1)]
                        }, [f, h, t]),
                        m = p[0],
                        x = p[1],
                        g = p[2],
                        v = d && h.filter(function(e) {
                            return !e.archived || e.id === (null == m ? void 0 : m.id)
                        }).length > 0,
                        y = !1,
                        O = "normal",
                        C = "bold" === a ? 700 : 400;
                    if (m && null !== m.workspaceId) {
                        y = !0 === m.archived;
                        var k = (0, en.Z)(m.fontFiles || []);
                        O = (0, tw.Sd)(k) ? "italic" : "normal";
                        var T = (0, tw.B_)(k);
                        C = (0, tw.QP)(T, "bold" === a ? 700 : 400) || 400
                    }
                    return (0, ec.jsxs)(tb.v, {
                        matchWidth: !0,
                        isLazy: !0,
                        children: [(0, ec.jsx)(tv.j, tU(tU({
                            size: "lg",
                            as: b.z,
                            borderRadius: "md",
                            rightIcon: (0, ec.jsx)(B.G, {
                                icon: tg.pt,
                                transform: "shrink-6"
                            }),
                            variant: "toolbar",
                            px: 4,
                            h: 10,
                            w: "100%",
                            border: "1px solid",
                            borderColor: "gray.200"
                        }, u), {}, {
                            children: d && y ? (0, ec.jsx)(tM, {
                                label: g || "",
                                fontFamily: '"'.concat(x, '"'),
                                labelColor: t ? "gray.800" : "gray.400",
                                fontStyle: O,
                                fontWeight: C
                            }) : (0, ec.jsx)(j.x, {
                                textAlign: "left",
                                fontFamily: '"'.concat(x || c, '"'),
                                fontWeight: C,
                                color: t ? "gray.800" : "gray.400",
                                fontStyle: O,
                                children: g || (0, ec.jsx)(l.cC, {
                                    id: "Ff/YaY",
                                    values: {
                                        defaultFont: c,
                                        GAMMA_PROPER_NOUN: V.N6
                                    }
                                })
                            })
                        })), (0, ec.jsxs)(ty.q, {
                            maxH: "320px",
                            overflow: "auto",
                            zIndex: "dropdown",
                            children: [(0, ec.jsxs)(tA._, {
                                type: "radio",
                                value: t || "",
                                onChange: function(e) {
                                    return n(e || void 0)
                                },
                                children: [v && (0, ec.jsx)(E.NZ, {
                                    m: 2,
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "syCKVA"
                                    })
                                }), v && h.map(function(e) {
                                    var n, r = e.id !== t,
                                        i = e.archived && r,
                                        o = (null === (n = e.fontFiles) || void 0 === n ? void 0 : n.length) === 0 && r;
                                    if (!e.fontFiles || o || i) return null;
                                    var c = (0, tw.Sd)(e.fontFiles) ? "italic" : "normal";
                                    return y && e.id === t ? (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        disabled: !0,
                                        children: (0, ec.jsx)(tM, {
                                            fontFamily: e.name,
                                            label: e.name,
                                            fontStyle: c,
                                            description: (0, ec.jsx)(l.cC, {
                                                id: "FZBl16"
                                            })
                                        })
                                    }, e.id) : (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        children: (0, ec.jsx)(j.x, {
                                            fontFamily: '"'.concat(e.name, '"'),
                                            fontSize: "lg",
                                            fontWeight: a,
                                            fontStyle: c,
                                            children: e.name
                                        })
                                    }, e.id)
                                }), v && (0, ec.jsxs)(ec.Fragment, {
                                    children: [(0, ec.jsx)(tI.R, {}), (0, ec.jsx)(E.NZ, {
                                        m: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "Z/0bkt"
                                        })
                                    })]
                                }), (0, ec.jsx)(tO.i, {
                                    value: "",
                                    children: (0, ec.jsx)(j.x, {
                                        fontFamily: c,
                                        fontSize: "lg",
                                        fontWeight: a,
                                        color: "gray.400",
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "fuNYg+"
                                        })
                                    })
                                }), f && f.map(function(e) {
                                    return (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        children: (0, ec.jsx)(j.x, {
                                            fontFamily: (0, tS.eu)(e.id) ? '"'.concat(e.id, '"') : '"'.concat(e.name, '"'),
                                            fontSize: "lg",
                                            fontWeight: a,
                                            children: e.name
                                        })
                                    }, e.id)
                                })]
                            }), d && (0, ec.jsx)(b.z, {
                                width: "calc(100% + var(--chakra-space-4))",
                                variant: "plain",
                                position: "sticky",
                                bottom: -2,
                                m: -2,
                                mt: 2,
                                p: 2,
                                borderX: "none",
                                borderBottom: "none",
                                fontSize: "sm",
                                borderRadius: "none",
                                onClick: r,
                                leftIcon: (0, ec.jsx)(B.G, {
                                    icon: tD.A$
                                }),
                                children: (0, ec.jsx)(l.cC, {
                                    id: "vNYIdl"
                                })
                            })]
                        })]
                    })
                },
                tG = n(29705),
                tH = n(84103),
                tL = n(30750),
                tW = ["font", "value", "defaultWeight", "updateValue"];

            function tB(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tZ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tB(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tB(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tV = function(e) {
                    var t, n, r, i = e.font,
                        a = e.value,
                        c = e.defaultWeight,
                        s = e.updateValue,
                        d = (0, o.Z)(e, tW),
                        u = (0, P.useCallback)(function(e) {
                            var t = Number(e);
                            Number.isNaN(t) || s(t)
                        }, [s]),
                        h = (null == a ? void 0 : a.toString()) || "",
                        f = (0, tL.d)()[c],
                        p = (0, P.useMemo)(function() {
                            var e = (0, tS.W9)(i),
                                t = void 0 !== a && !e.includes(a);
                            return t && a ? {
                                isDeletedFontWeight: t,
                                weightOptions: [].concat((0, en.Z)(e), [a]).sort(function(e, t) {
                                    return e - t
                                })
                            } : {
                                isDeletedFontWeight: t,
                                weightOptions: e
                            }
                        }, [i, a]),
                        m = p.weightOptions,
                        x = p.isDeletedFontWeight,
                        g = i && (null == i ? void 0 : i.workspaceId) !== null,
                        v = g && (null === (t = i.fontFiles) || void 0 === t ? void 0 : t.length) === 0,
                        y = x && g,
                        O = (0, t_.p6)();
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(tb.v, {
                            matchWidth: !0,
                            isLazy: !0,
                            children: [(0, ec.jsx)(tv.j, tZ(tZ({
                                size: "lg",
                                as: b.z,
                                borderRadius: "md",
                                rightIcon: (0, ec.jsx)(B.G, {
                                    icon: tg.pt,
                                    transform: "shrink-6"
                                }),
                                variant: "toolbar",
                                px: 4,
                                h: 10,
                                w: "100%",
                                border: "1px solid",
                                borderColor: "gray.200",
                                isDisabled: m.length <= 1
                            }, d), {}, {
                                children: x ? (0, ec.jsx)(tM, {
                                    label: v ? (0, ec.jsx)(l.cC, {
                                        id: "EqUVJs"
                                    }) : null !== (n = (0, tL.d)()[h]) && void 0 !== n ? n : f,
                                    labelColor: a ? "gray.800" : "gray.400"
                                }) : (0, ec.jsx)(j.x, {
                                    textAlign: "left",
                                    color: a ? "gray.800" : "gray.400",
                                    fontWeight: 400,
                                    children: null !== (r = (0, tL.d)()[h]) && void 0 !== r ? r : f
                                })
                            })), (0, ec.jsx)(ty.q, {
                                maxH: "320px",
                                overflow: "auto",
                                zIndex: "dropdown",
                                children: (0, ec.jsx)(tA._, {
                                    type: "radio",
                                    value: h,
                                    onChange: u,
                                    children: m.map(function(e) {
                                        var t, n;
                                        return x && a === e ? (0, ec.jsx)(tO.i, {
                                            value: e.toString(),
                                            disabled: !0,
                                            children: (0, ec.jsx)(tM, {
                                                label: null !== (n = (0, tL.d)()[e]) && void 0 !== n ? n : f,
                                                description: y ? (0, ec.jsx)(l.cC, {
                                                    id: "KFmni+"
                                                }) : (0, ec.jsx)(l.cC, {
                                                    id: "mGTUJj"
                                                })
                                            })
                                        }, e) : (0, ec.jsx)(tO.i, {
                                            value: e.toString(),
                                            children: (0, ec.jsx)(j.x, {
                                                fontSize: "lg",
                                                children: null !== (t = (0, tL.d)()[e]) && void 0 !== t ? t : f
                                            })
                                        }, e)
                                    })
                                })
                            })]
                        }), y && (0, ec.jsx)(j.x, {
                            fontSize: "xs",
                            mt: 1.5,
                            children: (0, ec.jsxs)(tH.r, {
                                href: O,
                                textDecoration: "underline",
                                isExternal: !0,
                                children: [(0, ec.jsx)(l.cC, {
                                    id: "RUO69p"
                                }), (0, ec.jsx)(tG.h, {
                                    ml: 1
                                })]
                            })
                        })]
                    })
                },
                tq = ["label", "helperText", "value", "defaultValue", "updateValue"];

            function tK(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tQ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tK(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tK(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tY = function(e) {
                    var t = e.label,
                        n = e.helperText,
                        r = e.value,
                        i = e.defaultValue,
                        a = e.updateValue,
                        c = (0, o.Z)(e, tq);
                    return (0, ec.jsxs)(eI.NI, tQ(tQ({}, c), {}, {
                        children: [(0, ec.jsx)(eF.l, {
                            children: (0, ec.jsx)(j.x, {
                                children: t
                            })
                        }), (0, ec.jsx)(tx.T, {
                            value: r,
                            updateValue: a,
                            defaultValue: i
                        }), n && (0, ec.jsx)(eI.Q6, {
                            children: n
                        })]
                    }))
                },
                tJ = n(94659),
                tX = n(2198),
                t$ = n(17714),
                t0 = n(97443),
                t1 = function(e) {
                    var t = e.value,
                        n = e.updateValue,
                        r = e.onLogoUploadStart,
                        i = e.onLogoUploadFail,
                        o = (0, P.useState)(null),
                        a = o[0],
                        c = o[1],
                        d = (0, P.useState)(null),
                        u = d[0],
                        h = d[1],
                        f = (0, q.CG)(D.KV),
                        p = (0, A.SE)().currentWorkspace,
                        m = f || (null == p ? void 0 : p.id);
                    return m ? t || u ? (0, ec.jsxs)(tJ.g, {
                        align: "flex-start",
                        spacing: 4,
                        children: [(0, ec.jsxs)(x.xu, {
                            position: "relative",
                            w: "100%",
                            background: "gray.50",
                            children: ["placeholder" == u ? (0, ec.jsx)(tX.k3, {
                                w: "100%"
                            }) : (0, ec.jsx)(eJ.E, {
                                w: "100%",
                                src: t || u || void 0,
                                alt: "",
                                onMouseDown: t$.br
                            }), a == e0.D.Uploading && (0, ec.jsx)(tX.HI, {}), a == e0.D.Error && (0, ec.jsx)(tX.s7, {})]
                        }), (0, ec.jsx)(b.z, {
                            onClick: function() {
                                n(null), c(null)
                            },
                            mt: 2,
                            w: "100%",
                            children: (0, ec.jsx)(l.cC, {
                                id: "VlT9ID"
                            })
                        })]
                    }) : (0, ec.jsx)(e$.un, {
                        orgId: m,
                        uploadType: "image",
                        editType: "icon",
                        dropHereText: s.ag._({
                            id: "cmRkd1",
                            values: {
                                0: "%{browse}"
                            }
                        }),
                        customHeight: "250px",
                        customFontSize: "sm",
                        showTip: !1,
                        onUploadStart: function(e) {
                            var t = e.file,
                                n = e.tempUrl;
                            c(e0.D.Uploading), r && r(), t.type && (0, t0.Ns)(t.type) ? h("placeholder") : h(n)
                        },
                        onUploadSuccess: function(e) {
                            var t = e.src;
                            c(e0.D.Done), n(t), h(null)
                        },
                        onUploadFailed: function(e) {
                            c(e0.D.Error), i && i()
                        }
                    }) : null
                };

            function t2(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var t5 = [{
                    label: function() {
                        return s.ag._({
                            id: "uIeorD"
                        })
                    },
                    icon: eS.AV,
                    Component: function() {
                        var e = ey(),
                            t = e.dispatch,
                            n = e.state,
                            r = e.pop,
                            i = e.label,
                            o = (0, et.E7)(n.theme),
                            a = (0, et.wj)(n.theme),
                            c = (0, P.useCallback)(function(e) {
                                var n, r;
                                (null == e ? void 0 : e.type) === e7.E.IMAGE && (null === (n = e.image) || void 0 === n ? void 0 : n.uploadStatus) === e0.D.Uploading ? t({
                                    type: "THEME_BACKGROUND_IMAGE_UPLOAD_STARTED",
                                    data: {
                                        background: e
                                    }
                                }) : (null == e ? void 0 : e.type) === e7.E.IMAGE && (null === (r = e.image) || void 0 === r ? void 0 : r.uploadStatus) === e0.D.Error ? t({
                                    type: "THEME_BACKGROUND_IMAGE_UPLOAD_FAIL"
                                }) : t({
                                    type: "THEME_BACKGROUND_UPDATE_SUCCESS",
                                    data: {
                                        background: e
                                    }
                                })
                            }, [t]);
                        return (0, ec.jsx)(eq, {
                            onBackClick: r,
                            label: i,
                            children: (0, ec.jsx)(e6, {
                                setBackground: c,
                                background: o,
                                defaultMessage: (0, ec.jsxs)(eQ.b, {
                                    fontSize: "xs",
                                    children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "j+PsQe"
                                        })
                                    })]
                                }),
                                isDark: a
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "Roi1AL"
                        })
                    },
                    icon: ew.lC,
                    Component: tP
                }, {
                    label: function() {
                        return s.ag._({
                            id: "TzJ8ZI"
                        })
                    },
                    icon: eP.Zk,
                    Component: function() {
                        var e, t, n = ey(),
                            r = n.label,
                            i = n.state,
                            o = n.dispatch,
                            a = n.pop,
                            c = i.theme,
                            s = (0, P.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            accentColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [o]);
                        return (0, ec.jsx)(eq, {
                            onBackClick: a,
                            label: r,
                            children: (0, ec.jsxs)(eA.K, {
                                spacing: 2,
                                children: [(0, ec.jsxs)(eI.NI, {
                                    "data-testid": "custom-theme-accent-color-picker",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "Udsgl4"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 4,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "7ldaTf"
                                        })
                                    }), (0, ec.jsx)(eN.U, {
                                        color: c.accentColor,
                                        defaultColor: F.uP,
                                        updateColor: s,
                                        gradient: c.config.accentGradient,
                                        updateGradient: function(e) {
                                            return o({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        accentGradient: e
                                                    }
                                                }
                                            })
                                        }
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "NEXUdn"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "+50OB4"
                                        })
                                    }), (0, ec.jsx)(eR.Y, {
                                        value: (null === (e = c.config) || void 0 === e ? void 0 : e.secondaryAccentColors) || [],
                                        updateValue: function(e) {
                                            return o({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        secondaryAccentColors: e
                                                    }
                                                }
                                            })
                                        },
                                        maxColors: 4
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        mt: 4,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "g/cMXH"
                                        })
                                    }), (0, ec.jsx)(eM.X, {
                                        isChecked: !(null !== (t = c.config) && void 0 !== t && t.disableReadabilityAdjustment),
                                        onChange: function() {
                                            var e;
                                            return o({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        disableReadabilityAdjustment: !(null !== (e = c.config) && void 0 !== e && e.disableReadabilityAdjustment)
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "fflXAI"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "QjwqJE"
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "COXEr5"
                        })
                    },
                    icon: eT.l9,
                    Component: function() {
                        var e = ey(),
                            t = e.pop,
                            n = e.state,
                            r = e.dispatch,
                            i = e.label,
                            o = n.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: t,
                            label: i,
                            children: (0, ec.jsx)(to, {
                                theme: o,
                                updateTheme: function(e) {
                                    return r({
                                        type: "THEME_UPDATE_THEME_CONFIG",
                                        data: {
                                            themeConfig: function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? tc(Object(n), !0).forEach(function(t) {
                                                        (0, a.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({}, e)
                                        }
                                    })
                                }
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "I0oBSl"
                        })
                    },
                    icon: ek.yG,
                    Component: function() {
                        var e, t = (0, eD.ye)("customFonts"),
                            n = ey(),
                            r = n.label,
                            i = n.dispatch,
                            o = n.state,
                            a = n.pop,
                            c = o.theme,
                            d = o.fontState,
                            u = d.fonts,
                            h = d.fontsMap,
                            f = (0, P.useCallback)(function(e) {
                                var t = h[e],
                                    n = (0, tS.W9)(t),
                                    r = (0, tw.QP)(n, c.headingFontWeight || F.ZT.heading) || F.ZT.heading,
                                    o = (0, tS.s8)({
                                        fontsMap: h,
                                        headingFontId: e,
                                        bodyFontId: c.bodyFont
                                    });
                                i({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            headingFont: e,
                                            headingFontWeight: r,
                                            fonts: o
                                        }
                                    }
                                })
                            }, [i, h, c.bodyFont, c.headingFontWeight]),
                            p = (0, P.useCallback)(function(e) {
                                var t = h[e],
                                    n = (0, tS.W9)(t),
                                    r = (0, tw.QP)(n, c.bodyFontWeight || F.ZT.body) || F.ZT.body,
                                    o = (0, tS.s8)({
                                        fontsMap: h,
                                        bodyFontId: e,
                                        headingFontId: c.headingFont
                                    });
                                i({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            bodyFont: e,
                                            bodyFontWeight: r,
                                            fonts: o
                                        }
                                    }
                                })
                            }, [i, h, c.headingFont, c.bodyFontWeight]),
                            m = (0, P.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            headingFontWeight: e
                                        }
                                    }
                                })
                            }, [i]),
                            x = (0, P.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            bodyFontWeight: e
                                        }
                                    }
                                })
                            }, [i]),
                            g = (0, P.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            headingColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [i]),
                            b = (0, P.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            headingGradient: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [i]),
                            v = (0, P.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            bodyColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [i]),
                            y = (0, P.useCallback)(function() {
                                var e = (0, t_.p6)();
                                window.open(e, "_blank")
                            }, []),
                            O = h[c.headingFont || F.ke.headingFont] || h[F.ke.headingFont],
                            C = h[c.bodyFont || F.ke.bodyFont] || h[F.ke.bodyFont],
                            E = c.headingFontWeight || F.ZT.heading,
                            k = c.bodyFontWeight || F.ZT.body,
                            T = (0, et.wj)(c);
                        return (0, ec.jsx)(eq, {
                            onBackClick: a,
                            label: r,
                            children: (0, ec.jsxs)(eA.K, {
                                children: [(0, ec.jsxs)(eI.NI, {
                                    mb: "2",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "7OvVwW"
                                            })
                                        })
                                    }), (0, ec.jsx)(tz, {
                                        fonts: u,
                                        value: c.headingFont,
                                        customFontsEnabled: t,
                                        updateValue: f,
                                        onFontUploadClick: y,
                                        weight: "bold",
                                        defaultFont: F.ke.headingFont,
                                        "data-testid": "custom-theme-heading-font-picker"
                                    }), t && (0, ec.jsx)(tV, {
                                        font: O,
                                        value: E,
                                        defaultWeight: 700,
                                        updateValue: m
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    mb: "2",
                                    "data-testid": "custom-theme-heading-color-picker",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "v9mrgh"
                                            })
                                        })
                                    }), (0, ec.jsx)(eN.U, {
                                        color: c.config.headingColor,
                                        updateColor: g,
                                        defaultColor: T ? F.Qw : F.l0,
                                        gradient: c.config.headingGradient,
                                        updateGradient: b
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "B4QCf7"
                                            })
                                        })
                                    }), (0, ec.jsx)(tz, {
                                        fonts: u,
                                        value: c.bodyFont,
                                        customFontsEnabled: t,
                                        updateValue: p,
                                        onFontUploadClick: y,
                                        weight: "normal",
                                        defaultFont: F.ke.bodyFont,
                                        "data-testid": "custom-theme-body-font-picker"
                                    }), t && (0, ec.jsx)(tV, {
                                        font: C,
                                        value: k,
                                        defaultWeight: 400,
                                        updateValue: x
                                    })]
                                }), (0, ec.jsx)(tY, {
                                    label: s.ag._({
                                        id: "jx8uni"
                                    }),
                                    value: (null === (e = c.config) || void 0 === e ? void 0 : e.bodyColor) || null,
                                    defaultValue: T ? F.Z_ : F.zL,
                                    updateValue: v
                                }), (0, ec.jsxs)(eQ.b, {
                                    fontSize: "xs",
                                    mt: "6",
                                    children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "3L+fCN"
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "iG7KNr"
                        })
                    },
                    icon: function(e) {
                        return e.logoUrl ? eE.Hh : eC.th
                    },
                    Component: function() {
                        var e = ey(),
                            t = e.pop,
                            n = e.state,
                            r = e.dispatch,
                            i = e.label,
                            o = n.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: t,
                            label: i,
                            children: (0, ec.jsx)(eI.NI, {
                                children: (0, ec.jsx)(t1, {
                                    value: o.logoUrl || null,
                                    onLogoUploadStart: function() {
                                        r({
                                            type: "THEME_LOGO_UPLOAD_STARTED"
                                        })
                                    },
                                    updateValue: function(e) {
                                        return r({
                                            type: "THEME_LOGO_UPLOAD_SUCCESS",
                                            data: {
                                                logoUrl: null != e ? e : void 0
                                            }
                                        })
                                    },
                                    onLogoUploadFail: function() {
                                        r({
                                            type: "THEME_LOGO_UPLOAD_FAIL"
                                        })
                                    }
                                })
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "sxkWRg"
                        })
                    },
                    icon: eO.gr,
                    Component: function() {
                        var e, t, n, r = ey(),
                            i = r.pop,
                            o = r.state,
                            a = r.dispatch,
                            c = r.label,
                            d = o.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: i,
                            label: c,
                            children: (0, ec.jsxs)(eA.K, {
                                children: [(0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "q3il6U"
                                        })
                                    }), (0, ec.jsx)(tl.Y2, {
                                        defaultValue: null === (e = d.config) || void 0 === e ? void 0 : e.fontSize,
                                        onChange: function(e, t) {
                                            a({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        fontSize: Number.isNaN(t) ? void 0 : t
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsx)(tl.zu, {})
                                    })]
                                }), (0, ec.jsx)(tj, {
                                    label: (0, ec.jsx)(l.cC, {
                                        id: "3loch2"
                                    }),
                                    initialValue: null === (t = d.config) || void 0 === t ? void 0 : t.contentStyles,
                                    updateValue: function(e) {
                                        return a({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    contentStyles: e
                                                }
                                            }
                                        })
                                    }
                                }), (0, ec.jsx)(tj, {
                                    label: (0, ec.jsx)(l.cC, {
                                        id: "r0cjYF"
                                    }),
                                    initialValue: null === (n = d.config) || void 0 === n ? void 0 : n.containerStyles,
                                    updateValue: function(e) {
                                        return a({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    containerStyles: e
                                                }
                                            }
                                        })
                                    },
                                    helperText: s.ag._({
                                        id: "W5hi5t"
                                    })
                                })]
                            })
                        })
                    },
                    isForGammaOnly: !0
                }],
                t4 = {
                    outline: "3px dashed var(--chakra-colors-sunglow-500)",
                    outlineOffset: "0"
                },
                t3 = function() {
                    var e = ey(),
                        t = e.push,
                        n = e.state,
                        r = e.setLabel,
                        i = n.theme,
                        o = (0, A.SE)().isGammaOrgUser,
                        c = (0, P.useMemo)(function() {
                            return t5.filter(function(e) {
                                return (!e.featureFlag || !!eD.VH.get(e.featureFlag)) && (!e.isForGammaOnly || !!o)
                            })
                        }, [o]);
                    return (0, ec.jsx)(e_.GS, {
                        listStyleType: "none",
                        marginStart: 0,
                        children: c.map(function(e, n) {
                            var c = e.label,
                                l = e.icon,
                                s = e.Component,
                                d = "".concat(n + 1, ". ").concat(c());
                            return (0, ec.jsx)(e_.HC, {
                                children: (0, ec.jsx)(eB, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? t2(Object(n), !0).forEach(function(t) {
                                            (0, a.Z)(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t2(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({
                                    icon: "function" == typeof l ? l(i) : l,
                                    label: d,
                                    onClick: function() {
                                        r(d), t(s)
                                    }
                                }, e.isForGammaOnly && o && t4))
                            }, c())
                        })
                    })
                },
                t8 = function(e) {
                    var t = e.theme,
                        n = e.dispatch,
                        r = e.fonts,
                        i = e.fontsMap,
                        o = (0, P.useState)(""),
                        a = o[0],
                        c = o[1];
                    return (0, ec.jsx)(ev.Provider, {
                        value: {
                            state: {
                                theme: t,
                                fontState: {
                                    fonts: r,
                                    fontsMap: i
                                }
                            },
                            dispatch: n,
                            label: a,
                            setLabel: c
                        },
                        children: (0, ec.jsx)(ex, {
                            InitialComponent: t3
                        })
                    })
                },
                t6 = n(18781),
                t7 = n(2321),
                t9 = n(41037),
                ne = n(67755),
                nt = n(67925),
                nn = n(27777),
                nr = n(73716),
                ni = n(28238),
                no = n(67887);

            function na(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? na(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nl = function(e) {
                    var t = e.value,
                        n = e.onSave,
                        r = e.themeValidationError;
                    return (0, ec.jsxs)(eI.NI, {
                        isInvalid: !!r,
                        children: [(0, ec.jsx)(ne.C, {
                            defaultValue: t,
                            placeholder: (0, F.F)(),
                            onSubmit: n,
                            submitOnBlur: !0,
                            isPreviewFocusable: !0,
                            fontSize: "3xl",
                            children: (0, ec.jsxs)(G.U, {
                                minHeight: 14,
                                children: [(0, ec.jsx)(nt.w, {
                                    "data-testid": "custom-theme-name-preview"
                                }), (0, ec.jsx)(nn.I, {
                                    as: nr.V,
                                    w: {
                                        sm: "50%",
                                        lg: "40%",
                                        xl: "30%",
                                        "2xl": "20%"
                                    },
                                    "data-testid": "custom-theme-name-input"
                                }), (0, ec.jsx)(ns, {})]
                            })
                        }), r && (0, ec.jsx)(th.J1, {
                            fontWeight: "500",
                            pb: 2,
                            children: r
                        })]
                    })
                },
                ns = function() {
                    var e = (0, ni.Z)(),
                        t = e.isEditing,
                        n = e.getSubmitButtonProps,
                        r = e.getCancelButtonProps,
                        i = e.getEditButtonProps;
                    return t ? (0, ec.jsxs)(g.h, {
                        justifyContent: "center",
                        size: "sm",
                        spacing: 0,
                        children: [(0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "dEgA5A"
                            }),
                            children: (0, ec.jsx)(no.h, nc({
                                variant: "ghost",
                                "aria-label": s.ag._({
                                    id: "dEgA5A"
                                }),
                                icon: (0, ec.jsx)(B.G, {
                                    icon: t9.YI
                                })
                            }, r()))
                        }), (0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "fNzdjk"
                            }),
                            children: (0, ec.jsx)(no.h, nc(nc({
                                variant: "ghost",
                                "aria-label": s.ag._({
                                    id: "fNzdjk"
                                }),
                                icon: (0, ec.jsx)(B.G, {
                                    icon: t7.LE
                                })
                            }, n()), {}, {
                                "data-testid": "save-theme-name-button"
                            }))
                        })]
                    }) : (0, ec.jsx)(m.k, {
                        justifyContent: "center",
                        children: (0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "+MxT3Q"
                            }),
                            children: (0, ec.jsx)(x.xu, {
                                children: (0, ec.jsx)(no.h, nc(nc({
                                    variant: "ghost",
                                    "aria-label": s.ag._({
                                        id: "+MxT3Q"
                                    }),
                                    size: "sm",
                                    icon: (0, ec.jsx)(B.G, {
                                        icon: t6.faPenToSquare
                                    })
                                }, i()), {}, {
                                    ref: null
                                }))
                            })
                        })
                    })
                },
                nd = "theme-editor-root",
                nu = function(e) {
                    var t, n = e.state,
                        r = e.dispatch,
                        i = e.docContent,
                        o = e.doc,
                        a = e.workspaceId,
                        c = n.theme,
                        s = n.customizationStep,
                        d = (0, P.useState)(),
                        u = d[0],
                        h = d[1],
                        f = (0, P.useState)(null),
                        p = f[0],
                        x = f[1],
                        g = (0, I.Kt)(h, 300);
                    (0, P.useEffect)(function() {
                        g(c)
                    }, [c, g]);
                    var b = (0, $.TY)(a),
                        v = b.globalFonts,
                        y = b.workspaceFonts,
                        C = b.fontsMap,
                        E = b.allThemeFonts;
                    null != i && i.content && null !== (t = i.content[0].attrs) && void 0 !== t && t.background && (i.content[0].attrs.background = Y.jg);
                    var k = (0, q.CG)(Z.mT),
                        T = (0, J.i)({
                            base: "var(--chakra-sizes-xs)",
                            lg: "var(--chakra-sizes-md)",
                            "2xl": "var(--chakra-sizes-xl)"
                        }) || "var(--chakra-sizes-md)",
                        w = (0, P.useMemo)(function() {
                            return (0, ee.y)()
                        }, []);
                    (0, P.useEffect)(function() {
                        var e = null == u ? void 0 : u.config.accentBackgrounds;
                        if (e) {
                            if (p && 0 === e.length) {
                                p.commands.setContent(w);
                                return
                            }
                            null == p || p.commands.updateThemeAccentImages(e, !0)
                        }
                    }, [p, null == u ? void 0 : u.config.accentBackgrounds, w]);
                    var S = (0, P.useCallback)(function(e) {
                            r({
                                type: "SET_NEW_THEME_FOR_SELECTING",
                                data: {
                                    theme: (0, et.mg)(e)
                                }
                            })
                        }, [r]),
                        _ = (0, P.useCallback)(function() {
                            r({
                                type: "SET_NEW_THEME_FOR_CUSTOMIZING",
                                data: {
                                    theme: (0, et.mg)(c, !0)
                                }
                            })
                        }, [r, c]);
                    return (0, ec.jsxs)(m.k, {
                        direction: "row-reverse",
                        h: "100%",
                        children: [(0, ec.jsx)(m.k, {
                            direction: "column",
                            overflowY: "auto",
                            w: T,
                            borderLeft: "1px solid",
                            borderColor: "gray.200",
                            children: (0, ec.jsx)(m.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                children: "selection" === s ? (0, ec.jsx)(el, {
                                    theme: c,
                                    onThemeClick: S,
                                    onSelectClick: _
                                }) : (0, ec.jsx)(t8, {
                                    theme: c,
                                    dispatch: r,
                                    fonts: {
                                        globalFonts: v,
                                        workspaceFonts: y
                                    },
                                    fontsMap: C
                                })
                            })
                        }), (0, ec.jsx)(m.k, {
                            flex: 1,
                            bg: "gray.100",
                            position: "relative",
                            maxW: "calc(100vw - ".concat(T, ")"),
                            children: (0, ec.jsxs)(m.k, {
                                className: nd,
                                overflowY: "scroll",
                                width: "100%",
                                height: "100%",
                                direction: "column",
                                position: "relative",
                                css: {
                                    "--editor-width": "100%"
                                },
                                children: [(0, ec.jsx)(Q.Y, {}), (0, ec.jsx)(es.J, {
                                    fonts: E
                                }), (0, ec.jsxs)(R.m, {
                                    variant: "soft-rounded",
                                    size: "sm",
                                    "data-testid": "custom-theme-tabs",
                                    children: [i && (0, ec.jsx)(O.M, {
                                        position: "sticky",
                                        top: 0,
                                        zIndex: 2,
                                        background: "white",
                                        children: (0, ec.jsxs)(U.t, {
                                            p: 2,
                                            position: "absolute",
                                            top: "1rem",
                                            background: "white",
                                            borderRadius: "full",
                                            shadow: "md",
                                            children: [(0, ec.jsx)(z.O, {
                                                "data-testid": "custom-theme-tester-deck-tab",
                                                children: (0, ec.jsxs)(G.U, {
                                                    children: [(0, ec.jsx)(B.G, {
                                                        icon: M.Md
                                                    }), (0, ec.jsx)(j.x, {
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "vat9WD"
                                                        })
                                                    })]
                                                })
                                            }), (0, ec.jsx)(z.O, {
                                                "data-testid": "custom-theme-current-deck-tab",
                                                children: (0, ec.jsxs)(G.U, {
                                                    children: [(0, ec.jsx)(B.G, {
                                                        icon: N.s2
                                                    }), (0, ec.jsx)(j.x, {
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "VJUm9p"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, ec.jsxs)(H.n, {
                                        "data-testid": "custom-theme-tab-panels",
                                        children: [(0, ec.jsx)(L.x, {
                                            p: 0,
                                            "data-testid": "custom-theme-preview-editor",
                                            children: (0, ec.jsx)(K.fb, {
                                                onCreate: function(e) {
                                                    return x(e.editor)
                                                },
                                                initialContent: w,
                                                theme: u,
                                                scrollingParentSelector: ".".concat(nd),
                                                isInsideDrawer: !0
                                            })
                                        }), i && (0, ec.jsx)(L.x, {
                                            p: 0,
                                            "data-testid": "custom-theme-preview-editor",
                                            children: (0, ec.jsx)(K.fb, {
                                                reduxData: {
                                                    cards: k
                                                },
                                                initialContent: i,
                                                theme: u,
                                                scrollingParentSelector: ".".concat(nd),
                                                doc: o,
                                                isInsideDrawer: !0
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                nh = function(e) {
                    var t, n = e.name,
                        r = e.doc,
                        i = e.theme,
                        o = e.themeValidationError,
                        a = e.dispatch,
                        c = (0, P.useState)(),
                        s = c[0],
                        d = c[1],
                        u = (0, S.rxn)({
                            variables: {
                                id: null == i ? void 0 : i.id
                            },
                            skip: !i || "new" === i.id
                        }),
                        h = u.data,
                        f = u.loading,
                        p = (0, X.$)(null == r ? void 0 : r.title);
                    (0, P.useEffect)(function() {
                        !f && h && h.theme && d(h.theme)
                    }, [f, h, d]);
                    var m = (0, P.useCallback)(function(e) {
                        a({
                            type: "THEME_UPDATE_THEME_NAME",
                            data: {
                                name: e || (0, F.F)()
                            }
                        })
                    }, [a]);
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsx)(nl, {
                            value: n || (0, F.F)(),
                            onSave: m,
                            themeValidationError: o
                        }), f ? (0, ec.jsx)(W.N, {
                            noOfLines: 1,
                            fontSize: "sm",
                            maxW: "300px"
                        }) : (0, ec.jsxs)(j.x, {
                            color: "gray.700",
                            fontSize: "sm",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            children: [(null == s ? void 0 : s.createdBy) && (0, ec.jsx)(l.cC, {
                                id: "qeNU2j",
                                values: {
                                    0: s.createdBy.displayName
                                }
                            }), " ", null != s && s.docCount && (null == s ? void 0 : s.docCount) === 1 && (null == s ? void 0 : s.id) === (null == r ? void 0 : null === (t = r.theme) || void 0 === t ? void 0 : t.id) ? (0, ec.jsx)(l.cC, {
                                id: "On+kRG",
                                values: {
                                    docTitle: p,
                                    GAMMA_ARTIFACT_PROPER_NOUN: V.Yc
                                },
                                components: {
                                    0: (0, ec.jsx)("strong", {})
                                }
                            }) : (0, ec.jsx)(ec.Fragment, {
                                children: (0, ec.jsx)(l.cC, {
                                    id: "eVRfvp",
                                    values: {
                                        0: (null == s ? void 0 : s.docCount) || 0,
                                        GAMMA_ARTIFACT_PROPER_NOUN: V.Yc,
                                        GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: V.aq
                                    },
                                    components: {
                                        0: (0, ec.jsx)("strong", {}),
                                        1: (0, ec.jsx)("strong", {})
                                    }
                                })
                            })]
                        })]
                    })
                },
                nf = ["id", "archived", "fonts"],
                np = ["__typename", "archived", "createdTime", "updatedTime", "createdBy", "fonts"];

            function nm(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nj(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nx(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nj(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nj(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ng = ["headingFont", "bodyFont", "accentColor", "logoUrl"],
                nb = (0, P.memo)(function(e) {
                    var t, n = e.isOpen,
                        r = e.onClose,
                        i = e.state,
                        a = e.dispatch,
                        O = e.docContent,
                        C = e.onThemeCreated,
                        k = e.disableDrawerTransition,
                        M = void 0 !== k && k,
                        N = (0, _.z$)(),
                        R = (0, d.p)(),
                        U = (0, w.v9)(D.yx),
                        z = (0, I.NE)(n, 500),
                        G = (0, A.SE)(),
                        H = G.user,
                        L = G.currentWorkspace,
                        W = (0, P.useRef)(null),
                        B = M ? n : z,
                        Z = (0, S.Wu6)(),
                        V = (0, c.Z)(Z, 2),
                        q = V[0],
                        K = V[1].loading,
                        Q = (0, S.suk)(),
                        Y = (0, c.Z)(Q, 2),
                        J = Y[0],
                        X = Y[1].loading,
                        $ = "loading" === i.themeBackgroundImgStatus || "loading" === i.themeLogoImgStatus,
                        ee = (0, P.useCallback)(function() {
                            a({
                                type: "THEME_RESET"
                            }), r()
                        }, [a, r]),
                        et = (0, P.useCallback)(function() {
                            if (H && L && i.theme) {
                                if (!i.theme.name) {
                                    a({
                                        type: "THEME_VALIDATION_ERROR",
                                        data: {
                                            errorMessage: "Theme name is required."
                                        }
                                    });
                                    return
                                }
                                if ("new" === i.theme.id) {
                                    var e = nx(nx({}, i.theme), {}, {
                                        workspaceId: L.id
                                    });
                                    e.id, e.archived, e.fonts, q({
                                        variables: {
                                            input: (0, o.Z)(e, nf)
                                        },
                                        update: function(t, n) {
                                            var r = n.data;
                                            null != r && r.createTheme && t.writeQuery({
                                                query: S.$LR,
                                                variables: {
                                                    workspaceId: e.workspaceId,
                                                    archived: !1
                                                },
                                                data: {
                                                    themes: [r.createTheme]
                                                }
                                            })
                                        },
                                        optimisticResponse: {
                                            createTheme: nx(nx({
                                                __typename: "Theme"
                                            }, e), {}, {
                                                createdTime: new Date().toISOString(),
                                                updatedTime: new Date().toISOString()
                                            })
                                        }
                                    }).then(function(t) {
                                        var n, r = t.data;
                                        null != r && r.createTheme && (null == N || N.track(_.AA.THEME_CREATED, {
                                            theme_id: null == r ? void 0 : null === (n = r.createTheme) || void 0 === n ? void 0 : n.id,
                                            type: "new"
                                        }), null == C || C(r.createTheme)), R({
                                            title: s.ag._({
                                                id: "NE6T/k",
                                                values: {
                                                    0: e.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), ee()
                                    }).catch(function(t) {
                                        t.graphQLErrors && t.graphQLErrors.length > 0 && "duplicate_theme_name" === t.graphQLErrors[0].code ? a({
                                            type: "THEME_VALIDATION_ERROR",
                                            data: {
                                                errorMessage: t.message
                                            }
                                        }) : (console.error("Couldn't create theme ".concat(e.name, " error: ").concat(t)), R({
                                            title: s.ag._({
                                                id: "FcSGqc",
                                                values: {
                                                    e: t
                                                }
                                            }),
                                            status: "error",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !1
                                        }))
                                    })
                                } else {
                                    var t, n = i.theme,
                                        r = (n.__typename, n.archived, n.createdTime, n.updatedTime, n.createdBy, n.fonts, (0, o.Z)(n, np)),
                                        c = function(e, t) {
                                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!n) {
                                                if (Array.isArray(e) || (n = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return nm(e, t);
                                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nm(e, t)
                                                        }
                                                    }(e))) {
                                                    n && (e = n);
                                                    var r = 0,
                                                        i = function() {};
                                                    return {
                                                        s: i,
                                                        n: function() {
                                                            return r >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[r++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: i
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var o, a = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    n = n.call(e)
                                                },
                                                n: function() {
                                                    var e = n.next();
                                                    return a = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, o = e
                                                },
                                                f: function() {
                                                    try {
                                                        a || null == n.return || n.return()
                                                    } finally {
                                                        if (c) throw o
                                                    }
                                                }
                                            }
                                        }(ng);
                                    try {
                                        for (c.s(); !(t = c.n()).done;) {
                                            var l = t.value;
                                            l in r && void 0 === r[l] && (r[l] = null)
                                        }
                                    } catch (e) {
                                        c.e(e)
                                    } finally {
                                        c.f()
                                    }
                                    J({
                                        variables: {
                                            input: r
                                        },
                                        update: function(e, t) {
                                            var n = t.data;
                                            null != n && n.updateTheme && e.writeQuery({
                                                query: S.$LR,
                                                variables: {
                                                    workspaceId: i.theme.workspaceId,
                                                    archived: !1
                                                },
                                                data: {
                                                    themes: [n.updateTheme]
                                                }
                                            })
                                        },
                                        optimisticResponse: {
                                            updateTheme: nx(nx({
                                                __typename: "Theme"
                                            }, i.theme), {}, {
                                                createdTime: new Date().toISOString(),
                                                updatedTime: new Date().toISOString()
                                            })
                                        }
                                    }).then(function() {
                                        null == N || N.track(_.AA.THEME_UPDATED, {
                                            theme_id: i.theme.id
                                        }), R({
                                            title: s.ag._({
                                                id: "WODDpW",
                                                values: {
                                                    0: i.theme.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), ee()
                                    }).catch(function(e) {
                                        e.graphQLErrors && "duplicate_theme_name" === e.graphQLErrors[0].code ? a({
                                            type: "THEME_VALIDATION_ERROR",
                                            data: {
                                                errorMessage: e.message
                                            }
                                        }) : (console.error("Couldn't update theme ".concat(i.theme.name, " error: ").concat(e)), R({
                                            title: s.ag._({
                                                id: "hSYiXl",
                                                values: {
                                                    e: e
                                                }
                                            }),
                                            status: "error",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !1
                                        }))
                                    })
                                }
                            }
                        }, [H, L, a, null == i ? void 0 : i.theme, q, R, ee, N, C, J]),
                        en = "new" === i.theme.id || !T()(i.theme, i.originalTheme);
                    return (0, ec.jsx)(E.Wk, {
                        isDark: !1,
                        children: (0, ec.jsxs)(u.d, {
                            placement: "bottom",
                            onClose: ee,
                            isOpen: n,
                            isFullHeight: !0,
                            initialFocusRef: W,
                            children: [(0, ec.jsx)(h.Z, {}), (0, ec.jsxs)(f.s, {
                                borderTopRadius: "xl",
                                h: "calc(var(--100vh) - 24px)",
                                transform: M ? "none !important" : void 0,
                                children: [(0, ec.jsx)(p.x, {
                                    borderBottom: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: "selection" === i.customizationStep ? (0, ec.jsxs)(ec.Fragment, {
                                        children: [(0, ec.jsx)(m.k, {
                                            "align-items": "center",
                                            letterSpacing: "normal",
                                            fontSize: "3xl",
                                            minH: 14,
                                            py: 1,
                                            children: (0, ec.jsx)(j.x, {
                                                children: (0, ec.jsx)(l.cC, {
                                                    id: "ytpdnC"
                                                })
                                            })
                                        }), (0, ec.jsx)(j.x, {
                                            color: "gray.700",
                                            fontSize: "sm",
                                            fontWeight: "normal",
                                            letterSpacing: "normal",
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "d9p6AC"
                                            })
                                        })]
                                    }) : (0, ec.jsxs)(m.k, {
                                        "justify-content": "space-between",
                                        alignItems: "flex-end",
                                        children: [(0, ec.jsx)(x.xu, {
                                            flex: 1,
                                            children: (0, ec.jsx)(nh, {
                                                name: (null === (t = i.theme) || void 0 === t ? void 0 : t.name) || (0, F.F)(),
                                                doc: U,
                                                theme: i.theme,
                                                dispatch: a,
                                                themeValidationError: i.themeValidationError
                                            })
                                        }), (0, ec.jsxs)(g.h, {
                                            children: [(0, ec.jsx)(b.z, {
                                                variant: "ghost",
                                                onClick: ee,
                                                children: (0, ec.jsx)(l.cC, {
                                                    id: "dEgA5A"
                                                })
                                            }), (0, ec.jsx)(E.kH, {
                                                isDisabled: !$,
                                                label: (0, ec.jsx)(l.cC, {
                                                    id: "yz1qqg"
                                                }),
                                                children: (0, ec.jsx)(x.xu, {
                                                    display: "inline-flex",
                                                    children: (0, ec.jsx)(b.z, {
                                                        variant: "solid",
                                                        isLoading: K || X || $,
                                                        isDisabled: !en,
                                                        onClick: et,
                                                        "data-testid": "custom-theme-save",
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "EsJdRp"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, ec.jsx)(v.f, {
                                    p: 0,
                                    h: "100%",
                                    children: B ? (0, ec.jsx)(nu, {
                                        state: i,
                                        workspaceId: null == L ? void 0 : L.id,
                                        dispatch: a,
                                        docContent: O,
                                        doc: U
                                    }) : (0, ec.jsx)(nv, {})
                                }), (0, ec.jsx)(y.o, {
                                    ref: W
                                })]
                            })]
                        })
                    })
                });
            nb.displayName = "ThemeEditorDrawer";
            var nv = function() {
                return (0, ec.jsx)(x.xu, {
                    flexDirection: "column",
                    flex: "1",
                    w: "100%",
                    h: "100%",
                    bg: "gray.100",
                    inset: 0,
                    children: (0, ec.jsx)(O.M, {
                        h: "100%",
                        children: (0, ec.jsx)(C.$, {})
                    })
                })
            }
        },
        9124: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return ec
                }
            });
            var r = n(95235),
                i = n(82269),
                o = n(81333),
                a = n(55452),
                c = n(87254),
                l = n(56581),
                s = n(8283),
                d = n(91012),
                u = n(55479),
                h = n(75944),
                f = n(53738),
                p = n(11919),
                m = n(93319),
                j = n(2784),
                x = n(18066),
                g = n(28811),
                b = n(3002),
                v = n(36188),
                y = n(75245),
                O = n(42353),
                C = n(5945),
                E = n(59212),
                k = n(55580),
                T = n(9088),
                P = n(30893),
                w = n(67887),
                S = n(94301),
                _ = n(40771),
                D = n(82904),
                A = n(95258),
                I = n(49929),
                F = n(52322),
                M = (0, j.memo)(function(e) {
                    var t = e.onCustomizeThemeClick;
                    return (0, F.jsxs)(T.v, {
                        isLazy: !0,
                        children: [(0, F.jsx)(P.j, {
                            as: w.h,
                            isRound: !0,
                            size: "xs",
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            icon: (0, F.jsx)(I.G, {
                                icon: k.faEllipsis
                            }),
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: (0, F.jsx)(a.cC, {
                                id: "7L01XJ"
                            })
                        }), (0, F.jsx)(S.h, {
                            children: (0, F.jsxs)(_.q, {
                                zIndex: "modal",
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: E.Mw,
                                        fixedWidth: !0
                                    }),
                                    onClick: t,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "XZd6AM"
                                    })
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(f.xu, {
                                    px: 4,
                                    py: 0,
                                    maxW: 56,
                                    children: (0, F.jsx)(d.x, {
                                        fontSize: "sm",
                                        color: "gray.600",
                                        children: (0, F.jsx)(a.cC, {
                                            id: "FV8ABd"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                }),
                N = n(36471),
                R = n(46510),
                U = n(18504),
                z = n(97261),
                G = n(82282),
                H = n(31807),
                L = n(20010),
                W = n(56915),
                B = n(48273),
                Z = n(92619),
                V = n(2167),
                q = n(81927),
                K = n(80353),
                Q = n(76648),
                Y = n(45650),
                J = n(64827),
                X = n(95828);

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var et = function(e) {
                    var t = e.theme,
                        n = e.isOpen,
                        r = e.onClose,
                        i = (0, j.useState)(),
                        l = i[0],
                        s = i[1],
                        h = (0, g.I3Y)(),
                        f = (0, o.Z)(h, 1)[0],
                        p = (0, u.p)(),
                        m = (0, g.rxn)({
                            variables: {
                                id: null == t ? void 0 : t.id
                            },
                            skip: !t || "new" === t.id
                        }),
                        x = m.data,
                        b = m.loading;
                    (0, j.useEffect)(function() {
                        var e;
                        !b && x && null !== (e = x.theme) && void 0 !== e && e.docCount && s(x.theme.docCount)
                    }, [b, x, s]);
                    var v = (0, j.useCallback)(function() {
                        t && t.id && f({
                            variables: {
                                id: t.id
                            },
                            update: function(e, n) {
                                var r = n.data;
                                null != r && r.archiveTheme && e.writeQuery({
                                    query: g.$LR,
                                    variables: {
                                        workspaceId: t.workspaceId,
                                        archived: !1
                                    },
                                    data: {
                                        themes: [r.archiveTheme]
                                    }
                                })
                            },
                            optimisticResponse: {
                                archiveTheme: ee(ee({
                                    __typename: "Theme"
                                }, t), {}, {
                                    archived: !0,
                                    updatedTime: new Date().toISOString()
                                })
                            }
                        }).then(function() {
                            p({
                                title: c.ag._({
                                    id: "Ww1KN1",
                                    values: {
                                        0: t.name
                                    }
                                }),
                                status: "success",
                                duration: 3e3,
                                position: "top",
                                isClosable: !0
                            })
                        }).catch(function(e) {
                            console.error("Couldn't create theme ".concat(t.name, " error: ").concat(e))
                        })
                    }, [f, t, p]);
                    return (0, F.jsxs)(L.u_, {
                        closeOnOverlayClick: !1,
                        isOpen: n,
                        onClose: r,
                        size: "lg",
                        children: [(0, F.jsx)(W.Z, {}), (0, F.jsxs)(B.h, {
                            children: [(0, F.jsx)(Z.x, {
                                children: (0, F.jsx)(a.cC, {
                                    id: "Tf88pC",
                                    values: {
                                        0: t.name
                                    }
                                })
                            }), (0, F.jsxs)(V.f, {
                                children: [l && l > 0 ? (0, F.jsxs)(d.x, {
                                    mb: 2,
                                    children: [(0, F.jsx)(a.cC, {
                                        id: "/rVqKL",
                                        values: {
                                            docCount: l,
                                            GAMMA_ARTIFACT_PROPER_NOUN: X.Yc,
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: X.aq
                                        }
                                    }), (0, F.jsx)(a.cC, {
                                        id: "c+lbSJ",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: X.aq
                                        }
                                    })]
                                }) : b ? (0, F.jsx)(q.O, {
                                    h: "1em",
                                    mb: 2
                                }) : (0, F.jsx)(d.x, {
                                    mb: 2,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "KNTN0L",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: X.aq
                                        }
                                    })
                                }), (0, F.jsx)(d.x, {
                                    color: "red.500",
                                    children: (0, F.jsx)(a.cC, {
                                        id: "2xOCJW"
                                    })
                                })]
                            }), (0, F.jsx)(K.m, {
                                children: (0, F.jsxs)(Q.h, {
                                    children: [(0, F.jsx)(Y.z, {
                                        variant: "ghost",
                                        onClick: r,
                                        children: (0, F.jsx)(a.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, F.jsx)(Y.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        onClick: function() {
                                            v(), r()
                                        },
                                        children: (0, F.jsx)(a.cC, {
                                            id: "848eTY"
                                        })
                                    })]
                                })
                            }), (0, F.jsx)(J.o, {})]
                        })]
                    })
                },
                en = (0, j.memo)(function(e) {
                    var t = e.theme,
                        n = e.openThemeEditorWithThisTheme,
                        r = e.onDuplicate,
                        i = e.onDeleteThemeModalOpen,
                        o = e.isDeleteThemeModalOpen,
                        c = e.onDeleteThemeModalClose;
                    return (0, F.jsxs)(T.v, {
                        isLazy: !0,
                        children: [(0, F.jsx)(P.j, {
                            as: w.h,
                            isRound: !0,
                            size: "xs",
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            icon: (0, F.jsx)(I.G, {
                                icon: k.faEllipsis
                            }),
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: (0, F.jsx)(a.cC, {
                                id: "7L01XJ"
                            })
                        }), (0, F.jsx)(S.h, {
                            children: (0, F.jsxs)(_.q, {
                                zIndex: "modal",
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, F.jsxs)(f.xu, {
                                    px: 4,
                                    py: 0,
                                    maxWidth: "300px",
                                    children: [(0, F.jsx)(d.x, {
                                        noOfLines: 3,
                                        children: t.name
                                    }), t.createdTime && (0, F.jsx)(d.x, {
                                        fontSize: "sm",
                                        color: "gray.500",
                                        noOfLines: 1,
                                        children: (0, F.jsx)(a.cC, {
                                            id: "MXSt4t",
                                            values: {
                                                0: (0, G.Z)((0, H.Z)(t.createdTime), "PPP")
                                            }
                                        })
                                    }), t.createdBy && (0, F.jsx)(z.kH, {
                                        label: t.createdBy.email,
                                        children: (0, F.jsx)(d.x, {
                                            display: "inline-block",
                                            fontSize: "sm",
                                            color: "gray.500",
                                            noOfLines: 1,
                                            children: (0, F.jsx)(a.cC, {
                                                id: "t490IT",
                                                values: {
                                                    0: t.createdBy.displayName
                                                }
                                            })
                                        })
                                    })]
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: U.q2,
                                        fixedWidth: !0
                                    }),
                                    onClick: n,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "ePK91l"
                                    })
                                }), (0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: R.WM,
                                        fixedWidth: !0
                                    }),
                                    onClick: r,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "euc6Ns"
                                    })
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(D.s, {
                                    color: "red.500",
                                    icon: (0, F.jsx)(I.G, {
                                        icon: N.$,
                                        fixedWidth: !0
                                    }),
                                    onClick: i,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "cnGeoo"
                                    })
                                })]
                            })
                        }), o && (0, F.jsx)(S.h, {
                            children: (0, F.jsx)(et, {
                                theme: t,
                                isOpen: !0,
                                onClose: c
                            })
                        })]
                    })
                }),
                er = ["id"];

            function ei(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ei(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ea = function(e) {
                    var t = e.isChecked,
                        n = e.name;
                    return (0, F.jsxs)(s.U, {
                        spacing: 1,
                        alignItems: "flex-start",
                        children: [t && (0, F.jsx)(l.n, {
                            w: 3,
                            h: "auto",
                            mr: 1,
                            mt: 1,
                            color: "trueblue.700"
                        }), (0, F.jsx)(d.x, {
                            fontSize: "sm",
                            noOfLines: 1,
                            "data-testid": "theme-name",
                            color: t ? "trueblue.700" : void 0,
                            children: n
                        })]
                    })
                },
                ec = (0, j.memo)(function(e) {
                    var t, n, r, l, d = e.theme,
                        E = e.onThemeClicked,
                        k = e.isChecked,
                        T = void 0 !== k && k,
                        P = e.type,
                        w = e.onEditClick,
                        S = e.variant,
                        _ = (0, v.z$)(),
                        D = (0, u.p)(),
                        A = "ghost" === (void 0 === S ? "outline" : S),
                        I = (0, j.useCallback)(function(e) {
                            return function() {
                                w && (e ? w((0, y.mg)(d, !0)) : w(d))
                            }
                        }, [w, d]),
                        N = (0, h.q)({
                            id: "deleteThemeModalDisclosure"
                        }),
                        R = N.isOpen,
                        U = N.onOpen,
                        z = N.onClose,
                        G = (0, C.SE)(),
                        H = G.user,
                        L = G.currentWorkspace,
                        W = (0, g.gFs)(),
                        B = (0, o.Z)(W, 1)[0],
                        Z = (0, j.useCallback)(function() {
                            if (H && L) {
                                var e = d.id;
                                B({
                                    variables: {
                                        id: e
                                    },
                                    update: function(e, t) {
                                        var n = t.data;
                                        null != n && n.duplicateTheme && e.writeQuery({
                                            query: g.$LR,
                                            variables: {
                                                workspaceId: d.workspaceId,
                                                archived: !1
                                            },
                                            data: {
                                                themes: [n.duplicateTheme]
                                            }
                                        })
                                    },
                                    optimisticResponse: {
                                        duplicateTheme: eo(eo({
                                            id: "temp",
                                            __typename: "Theme"
                                        }, (0, i.Z)(d, er)), {}, {
                                            name: "".concat(d.name, " (copy)"),
                                            archived: !1,
                                            createdTime: new Date().toISOString(),
                                            updatedTime: new Date().toISOString()
                                        })
                                    }
                                }).then(function(t) {
                                    var n = t.data;
                                    n && (null == _ || _.track(v.AA.THEME_DUPLICATED, {
                                        theme_id: n.duplicateTheme.id,
                                        source_theme_id: e,
                                        name: d.name
                                    }), null == _ || _.track(v.AA.THEME_CREATED, {
                                        theme_id: n.duplicateTheme.id,
                                        name: n.duplicateTheme.name,
                                        type: "duplicate"
                                    }), D({
                                        title: c.ag._({
                                            id: "DvRoa4",
                                            values: {
                                                0: n.duplicateTheme.name
                                            }
                                        }),
                                        status: "success",
                                        duration: 3e3,
                                        position: "top",
                                        isClosable: !0
                                    }))
                                }).catch(function(e) {
                                    console.error("Couldn't duplicate theme ".concat(d.name, " error: ").concat(e)), D({
                                        title: c.ag._({
                                            id: "aOi88n",
                                            values: {
                                                err: e
                                            }
                                        }),
                                        status: "error",
                                        duration: 3e3,
                                        position: "top",
                                        isClosable: !1
                                    })
                                })
                            }
                        }, [H, L, d, B, _, D]),
                        V = "custom" === (void 0 === P ? "custom" : P) && !!(null !== (t = d.createdBy) && void 0 !== t && t.displayName),
                        q = !!E,
                        K = !w;
                    return (0, F.jsxs)(f.xu, {
                        bgColor: T ? "trueblue.100" : A ? void 0 : "linen.50",
                        textAlign: "left",
                        tabIndex: q ? 0 : void 0,
                        borderRadius: "md",
                        transitionProperty: A ? "common" : "none",
                        transitionDuration: "normal",
                        outline: "none",
                        onClick: function() {
                            return null == E ? void 0 : E(d)
                        },
                        onKeyPress: function(e) {
                            q && "Enter" === e.key && (null == E || E(d))
                        },
                        _hover: q ? {
                            shadow: A || T ? void 0 : "lg",
                            bgColor: T ? "trueblue.100" : A ? "trueblue.50" : "gray.100"
                        } : void 0,
                        _focus: {
                            boxShadow: T || !q ? void 0 : "outline"
                        },
                        shadow: A ? void 0 : "md",
                        p: A ? 2 : 0,
                        "data-theme-id": d.id,
                        "data-testid": T ? "current-theme-preview" : void 0,
                        cursor: q ? "pointer" : void 0,
                        children: [(0, F.jsx)(O.n, {
                            theme: d
                        }), (0, F.jsxs)(p.k, {
                            align: "baseline",
                            mt: 1,
                            direction: "column",
                            p: A ? 0 : 2,
                            children: [V && (0, F.jsx)(p.k, {
                                my: 2,
                                children: (0, F.jsx)(ea, {
                                    name: d.name,
                                    isChecked: T
                                })
                            }), (0, F.jsxs)(s.U, {
                                alignItems: "flex-start",
                                w: "100%",
                                children: [V ? (0, F.jsx)(x.l, {
                                    createdByYou: (null === (n = d.createdBy) || void 0 === n ? void 0 : n.id) === (null == H ? void 0 : H.id),
                                    createdByName: null === (r = d.createdBy) || void 0 === r ? void 0 : r.displayName,
                                    createdByProfileImageUrl: null === (l = d.createdBy) || void 0 === l ? void 0 : l.profileImageUrl,
                                    timestampDescription: d.updatedTime && (0, F.jsx)(a.cC, {
                                        id: "E1dtM3",
                                        values: {
                                            0: (0, b.Dw)(d.updatedTime)
                                        }
                                    })
                                }) : (0, F.jsx)(ea, {
                                    name: d.name,
                                    isChecked: T
                                }), (0, F.jsx)(m.L, {}), K ? null : d.workspaceId ? (0, F.jsx)(en, {
                                    theme: d,
                                    openThemeEditorWithThisTheme: I(!1),
                                    onDuplicate: Z,
                                    onDeleteThemeModalOpen: U,
                                    isDeleteThemeModalOpen: R,
                                    onDeleteThemeModalClose: z
                                }) : (0, F.jsx)(M, {
                                    onCustomizeThemeClick: I(!0)
                                })]
                            })]
                        })]
                    })
                });
            ec.displayName = "ThemePreview"
        },
        7752: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var r = n(95235),
                i = n(9850),
                o = n.n(i),
                a = n(2784);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = {
                theme: n(62523).mU,
                themeValidationError: null,
                status: "new",
                themeBackgroundImgStatus: "idle",
                themeLogoImgStatus: "idle",
                customizationStep: null,
                originalTheme: null
            };

            function d(e, t) {
                switch (t.type) {
                    case "NEW_BLANK_THEME":
                        return l(l({}, o()(s)), {}, {
                            customizationStep: "customization"
                        });
                    case "THEME_RESET":
                        return o()(s);
                    case "SET_THEME_EDITING":
                        var n = t.data.theme,
                            r = o()(n);
                        return l(l({}, e), {}, {
                            status: "editing",
                            theme: n,
                            originalTheme: r,
                            customizationStep: "customization"
                        });
                    case "SET_NEW_THEME_FOR_SELECTING":
                        var i = t.data.theme;
                        return l(l({}, e), {}, {
                            status: "new",
                            theme: i,
                            customizationStep: "selection"
                        });
                    case "SET_NEW_THEME_FOR_CUSTOMIZING":
                        var a = t.data.theme,
                            c = o()(a);
                        return l(l({}, e), {}, {
                            theme: a,
                            originalTheme: c,
                            customizationStep: "customization"
                        });
                    case "THEME_UPDATE_THEME_PROPS":
                        var d = e.theme,
                            u = t.data.themeProps;
                        return l(l({}, e), {}, {
                            theme: l(l({}, d), u)
                        });
                    case "THEME_UPDATE_THEME_CONFIG":
                        var h = e.theme,
                            f = t.data.themeConfig;
                        return l(l({}, e), {}, {
                            theme: l(l({}, h), {}, {
                                config: l(l({}, h.config), f)
                            })
                        });
                    case "THEME_BACKGROUND_IMAGE_UPLOAD_STARTED":
                        var p = e.theme,
                            m = t.data.background;
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "loading",
                            theme: l(l({}, p), {}, {
                                config: l(l({}, p.config), {}, {
                                    background: m
                                })
                            })
                        });
                    case "THEME_BACKGROUND_UPDATE_SUCCESS":
                        var j = e.theme,
                            x = t.data.background;
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "idle",
                            theme: l(l({}, j), {}, {
                                config: l(l({}, j.config), {}, {
                                    background: x
                                })
                            })
                        });
                    case "THEME_BACKGROUND_IMAGE_UPLOAD_FAIL":
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "idle"
                        });
                    case "THEME_LOGO_UPLOAD_STARTED":
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "loading"
                        });
                    case "THEME_LOGO_UPLOAD_SUCCESS":
                        var g = e.theme,
                            b = t.data.logoUrl;
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "idle",
                            theme: l(l({}, g), {}, {
                                logoUrl: b
                            })
                        });
                    case "THEME_LOGO_UPLOAD_FAIL":
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "idle"
                        });
                    case "THEME_UPDATE_THEME_NAME":
                        var v = e.theme,
                            y = t.data.name;
                        return l(l({}, e), {}, {
                            theme: l(l({}, v), {}, {
                                name: y
                            }),
                            themeValidationError: null
                        });
                    case "THEME_VALIDATION_ERROR":
                        var O = t.data.errorMessage;
                        return l(l({}, e), {}, {
                            themeValidationError: O
                        });
                    case "THEME_VALIDATION_ERROR_RESET":
                        return l(l({}, e), {}, {
                            themeValidationError: null
                        })
                }
            }

            function u() {
                return a.useReducer(d, s)
            }
        },
        76162: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return B
                },
                t: function() {
                    return W
                }
            });
            var r = n(55452),
                i = n(11919),
                o = n(5766),
                a = n(81927),
                c = n(78116),
                l = n(56915),
                s = n(16796),
                d = n(64827),
                u = n(92619),
                h = n(2167),
                f = n(80353),
                p = n(45650),
                m = n(97261),
                j = n(2784),
                x = n(36157),
                g = n(17349),
                b = n(2885),
                v = n(49626),
                y = n(72360),
                O = n(48322),
                C = n(53738),
                E = n(66724),
                k = n(18751),
                T = n(8283),
                P = n(91012),
                w = n(93319),
                S = n(49929),
                _ = n(28811),
                D = n(95828),
                A = n(75245),
                I = n(93848),
                F = n(5945),
                M = n(16686),
                N = n(71354),
                R = n(52322),
                U = function(e) {
                    var t = e.openThemeEditor;
                    return (0, R.jsxs)(N.K, {
                        bg: "gray.100",
                        p: 4,
                        textAlign: "left",
                        spacing: 4,
                        borderRadius: "md",
                        my: 2,
                        children: [(0, R.jsx)(P.x, {
                            textAlign: "center",
                            fontWeight: "700",
                            children: (0, R.jsx)(r.cC, {
                                id: "yNvg2Q"
                            })
                        }), (0, R.jsx)(P.x, {
                            fontSize: "sm",
                            color: "gray.700",
                            children: (0, R.jsx)(r.cC, {
                                id: "qYwzxB"
                            })
                        }), (0, R.jsx)(p.z, {
                            onClick: t,
                            variant: "solid",
                            leftIcon: (0, R.jsx)(S.G, {
                                icon: M.Jy
                            }),
                            "data-testid": "new-theme-button",
                            children: (0, R.jsx)(r.cC, {
                                id: "X6LZ/c"
                            })
                        })]
                    })
                },
                z = n(12741),
                G = n(9124),
                H = function(e) {
                    var t = e.themes,
                        n = e.type,
                        r = e.currentTheme,
                        i = e.setDocTheme,
                        a = e.openThemeEditor;
                    return (0, R.jsx)(o.M, {
                        columns: 2,
                        spacing: 1,
                        my: 2,
                        mx: -2,
                        children: (0, z.Z)(t).sort(A.qb).map(function(e) {
                            return (0, R.jsx)(G.o, {
                                type: n,
                                theme: e,
                                isChecked: e.id === r.id,
                                onEditClick: a,
                                onThemeClicked: i,
                                variant: "ghost"
                            }, e.id)
                        })
                    })
                },
                L = function(e) {
                    var t = e.currentTheme,
                        n = e.setDocTheme,
                        i = e.openThemeEditor,
                        o = e.onClose,
                        a = (0, F.SE)().currentWorkspace,
                        c = (0, _.BCl)({
                            variables: {
                                workspaceId: null == a ? void 0 : a.id,
                                archived: !1
                            },
                            skip: !a,
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        l = c.data,
                        s = c.loading,
                        d = (0, _.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        u = d.data,
                        h = d.loading,
                        f = (null == l ? void 0 : l.themes) || [],
                        m = (null == u ? void 0 : u.themes) || [],
                        x = (0, j.useCallback)(function() {
                            i((0, A.QB)(null == u ? void 0 : u.themes), !0)
                        }, [u, i]),
                        g = (null == f ? void 0 : f.length) > 0,
                        M = (0, j.useCallback)(function() {
                            I.pw.emit(I.TI.OPEN_PAGE_SETUP, "background"), o()
                        }, [o]);
                    return (0, R.jsxs)(R.Fragment, {
                        children: [t.archived ? (0, R.jsxs)(y.b, {
                            status: "warning",
                            mb: 4,
                            children: [(0, R.jsx)(O.z, {}), (0, R.jsxs)(C.xu, {
                                children: [(0, R.jsx)(E.C, {
                                    children: (0, R.jsx)(r.cC, {
                                        id: "WTUBPK",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: D.Yc
                                        }
                                    })
                                }), (0, R.jsx)(k.X, {
                                    children: (0, R.jsx)(r.cC, {
                                        id: "5iFuNk"
                                    })
                                })]
                            })]
                        }) : null, (0, R.jsxs)(R.Fragment, {
                            children: [(0, R.jsxs)(T.U, {
                                children: [(0, R.jsx)(P.x, {
                                    color: "gray.500",
                                    fontWeight: "600",
                                    fontSize: "sm",
                                    children: (0, R.jsx)(r.cC, {
                                        id: "B+0JwP"
                                    })
                                }), (0, R.jsx)(w.L, {}), g && a && (0, R.jsx)(p.z, {
                                    size: "xs",
                                    leftIcon: (0, R.jsx)(S.G, {
                                        icon: v.r8
                                    }),
                                    onClick: x,
                                    "data-testid": "new-theme-button",
                                    children: (0, R.jsx)(r.cC, {
                                        id: "FiwgR9"
                                    })
                                })]
                            }), s ? (0, R.jsx)(W, {
                                size: 2
                            }) : g ? (0, R.jsx)(H, {
                                themes: f,
                                type: "custom",
                                currentTheme: t,
                                setDocTheme: n,
                                openThemeEditor: i
                            }) : a ? (0, R.jsx)(U, {
                                openThemeEditor: x
                            }) : null, (0, R.jsxs)(T.U, {
                                pt: 2,
                                children: [(0, R.jsx)(P.x, {
                                    color: "gray.500",
                                    fontWeight: "600",
                                    fontSize: "sm",
                                    children: (0, R.jsx)(r.cC, {
                                        id: "VjG5AF"
                                    })
                                }), (0, R.jsx)(w.L, {}), (0, R.jsx)(p.z, {
                                    size: "xs",
                                    leftIcon: (0, R.jsx)(S.G, {
                                        icon: b.UH
                                    }),
                                    onClick: M,
                                    children: (0, R.jsx)(r.cC, {
                                        id: "+EZioz"
                                    })
                                })]
                            })]
                        }), h ? (0, R.jsx)(W, {
                            size: 4
                        }) : (0, R.jsx)(H, {
                            themes: m,
                            type: "standard",
                            currentTheme: t,
                            setDocTheme: n,
                            openThemeEditor: i
                        })]
                    })
                },
                W = function(e) {
                    var t = e.size;
                    return (0, R.jsx)(i.k, {
                        children: (0, R.jsx)(o.M, {
                            w: "100%",
                            columns: 2,
                            spacing: 5,
                            mt: 2,
                            children: Array(t).fill(!0).map(function(e, t) {
                                return (0, R.jsx)(a.O, {
                                    minH: "9em",
                                    borderRadius: "base"
                                }, t)
                            })
                        })
                    })
                },
                B = (0, j.memo)(function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        i = e.openThemeEditor,
                        o = e.setDocTheme,
                        a = (0, x.CG)(g.Pu);
                    return (0, R.jsx)(m.Wk, {
                        isDark: !1,
                        children: (0, R.jsxs)(c.d, {
                            returnFocusOnClose: !1,
                            isOpen: t,
                            placement: "right",
                            onClose: n,
                            size: "sm",
                            children: [(0, R.jsx)(l.Z, {
                                background: "none"
                            }), (0, R.jsxs)(s.s, {
                                "data-testid": "doc-theme-drawer",
                                "data-doc-theme-drawer": !0,
                                motionProps: {
                                    variants: {
                                        enter: {
                                            x: "0%",
                                            transition: {
                                                duration: .2
                                            }
                                        },
                                        exit: {
                                            x: "100%",
                                            transition: {
                                                duration: .1
                                            }
                                        }
                                    }
                                },
                                children: [(0, R.jsx)(d.o, {}), (0, R.jsx)(u.x, {
                                    children: (0, R.jsx)(r.cC, {
                                        id: "FEr96N"
                                    })
                                }), (0, R.jsx)(h.f, {
                                    overflowX: "hidden",
                                    children: (0, R.jsx)(L, {
                                        currentTheme: a,
                                        setDocTheme: o,
                                        openThemeEditor: i,
                                        onClose: n
                                    })
                                }), (0, R.jsx)(f.m, {
                                    children: (0, R.jsx)(p.z, {
                                        w: "100%",
                                        variant: "solid",
                                        onClick: n,
                                        children: (0, R.jsx)(r.cC, {
                                            id: "DPfwMq"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                });
            B.displayName = "DocThemeDrawer"
        },
        2517: function() {}
    }
]);
//# sourceMappingURL=193-4528082eccb468ab.js.map