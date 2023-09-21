"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [867], {
        26018: function(e, n, i) {
            i.d(n, {
                ET: function() {
                    return t
                },
                LB: function() {
                    return a
                },
                VN: function() {
                    return c
                },
                VY: function() {
                    return r
                },
                WJ: function() {
                    return o
                },
                rj: function() {
                    return s
                }
            });
            var t = "/generate",
                r = "ai-generate",
                o = 2,
                s = 2,
                c = 400,
                a = {
                    DESIGNER__HELLO: 0,
                    USER__OUTPUT_FORMAT_INPUT: 1,
                    DESIGNER__TOPIC: 2,
                    USER__TOPIC_INPUT: 3,
                    DESIGNER__OUTLINE: 4,
                    USER__OUTLINE_INPUT: 5
                }
        },
        63705: function(e, n, i) {
            i.d(n, {
                F3: function() {
                    return j
                },
                c8: function() {
                    return m
                }
            });
            var t = i(99926);
            i(3777), i(74145);
            var r = i(38793),
                o = i(95235),
                s = i(58678),
                c = i(2784),
                a = i(25232),
                l = function(e, n) {
                    var i = (0, s.rN)(),
                        r = i.setIsOpen,
                        o = i.setSteps,
                        a = i.setMeta,
                        l = i.setCurrentStep;
                    return {
                        startTour: (0, c.useCallback)(function(e) {
                            void 0 !== e && l(e), r(!0), a && a(t.X.DOC_EDITOR), o && o(n)
                        }, [l, r, a, o, n])
                    }
                },
                d = i(56969),
                u = i(36188),
                p = i(53571),
                x = i(60883);

            function f(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? f(Object(i), !0).forEach(function(n) {
                        (0, o.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var j = function() {
                    var e = (0, a.ye)("aiChat"),
                        n = (0, c.useMemo)(function() {
                            return (0, r.aq)({
                                aiChat: !!e
                            })
                        }, [e]),
                        i = (0, u.z$)(),
                        f = l(t.X.DOC_EDITOR, n).startTour,
                        j = (0, s.rN)().setIsOpen;
                    (0, c.useEffect)(function() {
                        "true" === (0, x.SJ)()[t.n] && (0, p.u0)(n[1].selector).then(function() {
                            f(), null == i || i.track(u.AA.DOC_EDITOR_TOUR_STARTED, {
                                source: "queryParam"
                            }), (0, d.lO)({
                                query: h(h({}, (0, x.SJ)()), {}, (0, o.Z)({}, t.n, void 0)),
                                emitChange: !1
                            })
                        })
                    }, [i, f, n]), (0, c.useEffect)(function() {
                        return function() {
                            j(!1)
                        }
                    }, [j])
                },
                m = function() {
                    var e = (0, a.ye)("aiChat"),
                        n = (0, c.useMemo)(function() {
                            return (0, r.aq)({
                                aiChat: !!e
                            })
                        }, [e]);
                    return {
                        startTour: l(t.X.DOC_EDITOR, n).startTour
                    }
                }
        },
        99076: function(e, n, i) {
            i.d(n, {
                C: function() {
                    return ea
                }
            });
            var t = i(81333),
                r = i(45029),
                o = i(27037),
                s = i(64256),
                c = i(68921),
                a = i(48079),
                l = i(58975),
                d = i(16686),
                u = i(29106),
                p = i(36178),
                x = i(55452),
                f = i(87254),
                h = i(75944),
                j = i(9088),
                m = i(30893),
                g = i(67887),
                v = i(53738),
                b = i(40771),
                C = i(91930),
                y = i(82904),
                O = i(84103),
                _ = i(95258),
                I = i(49929),
                A = i(97261),
                w = i(2784),
                P = i(43997),
                k = i(28811),
                R = i(25232),
                N = i(63705),
                E = i(33322),
                D = i(20406),
                T = i(28526),
                M = i.n(T),
                S = i(55479),
                G = i(20010),
                U = i(56915),
                z = i(48273),
                L = i(92619),
                Z = i(64827),
                F = i(2167),
                V = i(2046),
                W = i(70287),
                Y = i(80353),
                K = i(76648),
                $ = i(45650),
                B = i(45347),
                q = i(55920),
                H = i(5945),
                J = i(49180),
                X = i(25031),
                Q = i(52322),
                ee = function(e) {
                    var n, i = e.onClose,
                        t = (0, S.p)(),
                        r = (0, H.SE)().user,
                        o = (0, w.useState)(!1),
                        s = o[0],
                        c = o[1],
                        a = (0, H.SE)().setSettings,
                        l = (0, J.l)(),
                        d = (0, w.useMemo)(function() {
                            return l
                        }, []),
                        u = (0, w.useState)(d),
                        p = u[0],
                        f = u[1];
                    (0, X.m)(p);
                    var h = (0, w.useCallback)((0, D.Z)(M().mark(function e() {
                            return M().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.prev = 1, e.next = 4, null == a ? void 0 : a({
                                            set: {
                                                locale: p
                                            }
                                        });
                                    case 4:
                                        t({
                                            title: (0, Q.jsx)(x.cC, {
                                                id: "RRo9kN"
                                            }),
                                            position: "top",
                                            status: "success",
                                            isClosable: !0,
                                            duration: 3e3
                                        }), i(), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error('[StandaloneLocaleModal.onSave] Error updating language for user with id "'.concat(null == r ? void 0 : r.id, '"'), e.t0.message);
                                    case 11:
                                        c(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 8]
                            ])
                        })), [p, i, a, t, null == r ? void 0 : r.id]),
                        j = p !== (null == r ? void 0 : null === (n = r.settings) || void 0 === n ? void 0 : n.locale);
                    return (0, Q.jsx)(A.Wk, {
                        isDark: !1,
                        children: (0, Q.jsxs)(G.u_, {
                            isOpen: !0,
                            onClose: i,
                            children: [(0, Q.jsx)(U.Z, {}), (0, Q.jsxs)(z.h, {
                                children: [(0, Q.jsx)(L.x, {
                                    children: (0, Q.jsx)(x.cC, {
                                        id: "+DEogc"
                                    })
                                }), (0, Q.jsx)(Z.o, {}), (0, Q.jsx)(F.f, {
                                    children: (0, Q.jsxs)(V.NI, {
                                        children: [(0, Q.jsx)(W.l, {
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "M3JKNC"
                                            })
                                        }), (0, Q.jsx)(B.p, {
                                            selectedLocale: q.w$[p],
                                            onLocaleSelect: f
                                        })]
                                    })
                                }), (0, Q.jsx)(Y.m, {
                                    children: j ? (0, Q.jsxs)(K.h, {
                                        children: [(0, Q.jsx)($.z, {
                                            variant: "ghost",
                                            onClick: i,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "dEgA5A"
                                            })
                                        }), (0, Q.jsx)($.z, {
                                            variant: "solid",
                                            onClick: h,
                                            isLoading: s,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "tfDRzk"
                                            })
                                        })]
                                    }) : (0, Q.jsx)($.z, {
                                        variant: "plain",
                                        onClick: i,
                                        children: (0, Q.jsx)(x.cC, {
                                            id: "yz7wBu"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                en = i(84651),
                ei = i(19310),
                et = i(36188),
                er = i(57560),
                eo = i(78739),
                es = i(25208),
                ec = i(78357),
                ea = (0, w.memo)(function(e) {
                    var n = e.showShortcuts,
                        i = e.showTourReplay,
                        D = (0, N.c8)().startTour,
                        T = (0, P.I0)(),
                        M = (0, k.$gs)().isConnected,
                        S = (0, R.ye)("intercom"),
                        G = (0, J.l)(),
                        U = (0, h.q)(),
                        z = U.isOpen,
                        L = U.onOpen,
                        Z = U.onClose,
                        F = (0, h.q)({
                            id: "locale-modal"
                        }),
                        V = F.isOpen,
                        W = F.onOpen,
                        Y = F.onClose,
                        K = (0, eo._)("hasUnreadIntercom", !1),
                        $ = (0, t.Z)(K, 2),
                        B = $[0],
                        H = $[1],
                        X = (0, et.z$)(),
                        ea = window.Intercom,
                        el = (0, w.useCallback)(function() {
                            (0, en.pU)(), H(!1), T((0, ei.YZ)({
                                isOpen: !0
                            }))
                        }, [T, H]),
                        ed = (0, er.Yy)();
                    return (0, w.useEffect)(function() {
                        if (ea) {
                            ea("onHide", function() {
                                T((0, ei.YZ)({
                                    isOpen: !1
                                }))
                            });
                            var e = setInterval(function() {
                                document.querySelector("iframe.intercom-borderless-frame") && H(!0)
                            }, 1e3);
                            return function() {
                                ea("hide"), clearInterval(e)
                            }
                        }
                    }, [T, ea, H]), (0, Q.jsx)(es.H, {
                        children: (0, Q.jsxs)(A.Wk, {
                            isDark: ed,
                            children: [(0, Q.jsxs)(j.v, {
                                children: [(0, Q.jsx)(m.j, {
                                    "data-guider-highlight": "default-help-widget-activator",
                                    as: g.h,
                                    isRound: !0,
                                    position: "relative",
                                    size: "md",
                                    "aria-label": f.ag._({
                                        id: "c3XJ18"
                                    }),
                                    icon: B ? (0, Q.jsxs)(Q.Fragment, {
                                        children: [(0, Q.jsx)(v.Cd, {
                                            position: "absolute",
                                            size: 2.5,
                                            bg: "red.400",
                                            top: 0,
                                            right: 0
                                        }), (0, Q.jsx)(I.G, {
                                            icon: c.qm,
                                            className: "fa-beat-fade"
                                        })]
                                    }) : (0, Q.jsx)(I.G, {
                                        icon: p.Ps
                                    })
                                }), (0, Q.jsxs)(b.q, {
                                    children: [(0, Q.jsxs)(C.k, {
                                        children: [(void 0 === n || n) && (0, Q.jsx)(y.s, {
                                            onClick: L,
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: u.UF
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "CTqTgr"
                                            })
                                        }), (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "https://gamma.app/public/Change-Log-awopg3inl2eo3b3?mode=doc#card-7l4mxahmsc10wrp",
                                            target: "_blank",
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: d.Jy
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "3ePd3I"
                                            })
                                        }), (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "https://help.gamma.app",
                                            target: "_blank",
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: l.MY
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "/lDBHm"
                                            })
                                        }), void 0 !== i && i && (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            onClick: function() {
                                                null == X || X.track(et.AA.DOC_EDITOR_TOUR_STARTED, {
                                                    source: "help-widget"
                                                }), D(0)
                                            },
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: a.Wx
                                            }),
                                            "data-guider-highlight": "replay-intro-tour",
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "/cFTPs"
                                            })
                                        })]
                                    }), (0, Q.jsx)(_.R, {}), (0, Q.jsxs)(C.k, {
                                        children: [S && M ? (0, Q.jsx)(y.s, {
                                            icon: B ? (0, Q.jsxs)(v.xu, {
                                                position: "relative",
                                                children: [(0, Q.jsx)(v.Cd, {
                                                    position: "absolute",
                                                    size: 1.5,
                                                    bg: "red.400",
                                                    top: 0,
                                                    right: -1
                                                }), (0, Q.jsx)(I.G, {
                                                    fixedWidth: !0,
                                                    icon: c.qm,
                                                    className: "fa-beat-fade"
                                                })]
                                            }) : (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: s.RR
                                            }),
                                            onClick: el,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "Bhgd0l"
                                            })
                                        }) : (0, Q.jsx)(y.s, {
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: o.FU
                                            }),
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "mailto:".concat(E.p),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "A0C9La"
                                            })
                                        }), (0, Q.jsx)(_.R, {}), (0, Q.jsx)(y.s, {
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: r.Uv
                                            }),
                                            onClick: W,
                                            children: q.w$[G].displayName
                                        })]
                                    })]
                                }), (0, Q.jsx)(ec.J, {
                                    isOpen: z,
                                    onClose: Z
                                })]
                            }), V && (0, Q.jsx)(ee, {
                                onClose: Y
                            })]
                        })
                    })
                });
            ea.displayName = "DefaultHelpWidget"
        },
        25208: function(e, n, i) {
            i.d(n, {
                H: function() {
                    return x
                }
            });
            var t = i(95235),
                r = i(82269),
                o = i(53738),
                s = i(2784),
                c = i(61528),
                a = i(22467),
                l = i(52322),
                d = ["children"];

            function u(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var x = (0, s.memo)(function(e) {
                var n = e.children,
                    i = (0, r.Z)(e, d);
                return (0, c.s2)() ? null : (0, l.jsx)(o.xu, p(p({
                    position: "fixed",
                    bottom: a.ux,
                    right: a.PU,
                    zIndex: "overlay",
                    "data-print-hidden": !0
                }, i), {}, {
                    children: n
                }))
            });
            x.displayName = "HelpWidgetWrapper"
        },
        78357: function(e, n, i) {
            i.d(n, {
                J: function() {
                    return Z
                },
                A: function() {
                    return L
                }
            });
            var t = i(95235),
                r = i(13045),
                o = i(60239),
                s = i(29106),
                c = i(55452),
                a = i(77525),
                l = i(74642),
                d = i(35319),
                u = i(36258),
                p = i(27912),
                x = i(96530),
                f = i(54728),
                h = i(46367),
                j = i(53738),
                m = i(91333),
                g = i(23742),
                v = i(8283),
                b = i(50390),
                C = i(70091),
                y = i(83897),
                O = i(89190),
                _ = i(73848),
                I = i(24798),
                A = i(84520),
                w = i(95085),
                P = i(49929),
                k = i(97261),
                R = i(81167),
                N = i(91012);
            i(2784);
            var E = i(52322),
                D = function(e) {
                    var n = e.prefix,
                        i = e.support,
                        t = e.suffix;
                    return (0, E.jsxs)(N.x, {
                        children: [void 0 === n ? "" : n, (0, E.jsx)(N.x, {
                            color: "gray.400",
                            as: "span",
                            children: void 0 === i ? "" : i
                        }), void 0 === t ? "" : t]
                    })
                },
                T = function() {
                    return [{
                        description: (0, E.jsx)(c.cC, {
                            id: "8aebws"
                        }),
                        shortcut: "/"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "JZEY8K"
                        }),
                        shortcut: "Mod+Shift+O"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "3Lpas4"
                        }),
                        shortcut: "***"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "e+t/xM"
                        }),
                        shortcut: "Mod+P"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "MF+p5R"
                        }),
                        shortcut: "Mod+Enter"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "NiZZRh"
                        }),
                        shortcut: "Mod+K"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "4J90L0"
                        }),
                        shortcut: (0, E.jsx)(D, {
                            prefix: "@",
                            support: "name"
                        })
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "1fOM5v"
                        }),
                        shortcut: (0, E.jsx)(D, {
                            prefix: "@",
                            support: "cardTitle"
                        })
                    }]
                },
                M = function() {
                    return [{
                        description: (0, E.jsx)(c.cC, {
                            id: "MHrjPM"
                        }),
                        shortcut: "/title"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "lXKZGw"
                        }),
                        shortcut: ["#", "Mod+Alt+1"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "El7NbA"
                        }),
                        shortcut: ["##", "Mod+Alt+2"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "SFN6dN"
                        }),
                        shortcut: ["###", "Mod+Alt+3"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "nJeKmw"
                        }),
                        shortcut: ["####", "Mod+Alt+4"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "yzF66j"
                        }),
                        shortcut: "Mod+K"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "eFpJYL"
                        }),
                        shortcut: (0, E.jsx)(D, {
                            prefix: ":",
                            support: "heart_eyes",
                            suffix: ":"
                        })
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "KmydK6"
                        }),
                        shortcut: [(0, E.jsx)(D, {
                            prefix: "*",
                            support: "bold",
                            suffix: "*"
                        }, "0"), "Mod+B"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "pzutoc"
                        }),
                        shortcut: [(0, E.jsx)(D, {
                            prefix: "_",
                            support: "italic",
                            suffix: "_"
                        }, "0"), "Mod+I"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "YyXtnN"
                        }),
                        shortcut: "Mod+U"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "WhOsNE"
                        }),
                        shortcut: "Mod+Shift+X"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "VjjKVj"
                        }),
                        shortcut: "Mod+Shift+L"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "95ckMP"
                        }),
                        shortcut: "Mod+Shift+E"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "vTKw81"
                        }),
                        shortcut: "Mod+Shift+R"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "Gc5apx"
                        }),
                        shortcut: [(0, E.jsx)(D, {
                            prefix: "`",
                            support: "code",
                            suffix: "`"
                        }, "0"), "Mod+E"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "sFkOYO"
                        }),
                        shortcut: [(0, E.jsx)(D, {
                            prefix: "$",
                            support: "x^2",
                            suffix: "$ "
                        }, "0"), "$$ "]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "eKJQi9"
                        }),
                        shortcut: "Mod+Shift+H"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "M3G9ZD"
                        }),
                        shortcut: ["1. ", "Mod+/", "Mod+Shift+7"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "ynb7Kh"
                        }),
                        shortcut: ["- ", "Mod+.", "Mod+Shift+8"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "rCIbrq"
                        }),
                        shortcut: ["[] ", "Mod+,", "Mod+Shift+9"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "dOxPd4"
                        }),
                        shortcut: [(0, E.jsx)(D, {
                            prefix: "^",
                            support: "note",
                            suffix: "^"
                        }, "0"), "Mod+Alt+F"]
                    }]
                },
                S = function() {
                    return [{
                        description: (0, E.jsx)(c.cC, {
                            id: "9xCxY6"
                        }),
                        shortcut: ["←", "→"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "6r2KAP"
                        }),
                        shortcut: ["↑", "↓"]
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "rEj/lx"
                        }),
                        shortcut: "Enter"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "IkakN2"
                        }),
                        shortcut: "Esc"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "dQU33K"
                        }),
                        shortcut: "Mod+Shift+O"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "CgmvBu"
                        }),
                        shortcut: "S"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "K0Oq/D"
                        }),
                        shortcut: "R"
                    }, {
                        description: (0, E.jsx)(c.cC, {
                            id: "CvH5f/"
                        }),
                        shortcut: (0, E.jsx)(j.xu, {
                            p: 0,
                            children: (0, E.jsxs)("svg", {
                                className: "coachbarCursor",
                                height: "1em",
                                viewBox: "0 0 298 380",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, E.jsx)("path", {
                                    className: "cursorBlinkEffect",
                                    d: "M151.8 0.60199C145.612 0.60199 140.601 5.61759 140.601 11.801V79C140.601 85.1875 145.617 90.199 151.8 90.199C157.987 90.199 162.999 85.1834 162.999 79V11.801C162.999 5.61349 157.983 0.60199 151.8 0.60199ZM52.749 41.551C49.8818 41.551 47.0615 42.6877 44.874 44.8752C40.5029 49.2502 40.5029 56.4262 44.874 60.8012L84.425 100.352C88.8 104.727 95.976 104.723 100.351 100.352C104.726 95.9772 104.722 88.8012 100.351 84.4262L60.8 44.8752C58.6125 42.6877 55.6162 41.551 52.749 41.551ZM250.849 41.551C247.982 41.551 244.986 42.6877 242.798 44.8752L203.247 84.4262C198.876 88.8012 198.872 95.9772 203.247 100.352C207.622 104.723 214.798 104.727 219.173 100.352L258.724 60.8012C263.095 56.4262 263.095 49.2502 258.724 44.8752C256.537 42.6877 253.716 41.551 250.849 41.551ZM11.789 140.602C5.6015 140.602 0.589996 145.618 0.589996 151.801C0.589996 157.988 5.6056 163 11.789 163H78.988C85.1755 163 90.187 157.984 90.187 151.801C90.187 145.613 85.1714 140.602 78.988 140.602H11.789ZM92.465 199.926C89.5978 199.926 86.6017 201.063 84.4142 203.25L44.8632 242.801C40.4921 247.176 40.4921 254.352 44.8632 258.727C49.2382 263.102 56.4142 263.102 60.7892 258.727L100.34 219.176C104.711 214.801 104.715 207.625 100.34 203.25C98.1527 201.063 95.3322 199.926 92.465 199.926Z",
                                    fill: "black"
                                }), (0, E.jsx)("path", {
                                    d: "M289.317 291.063H237.601L264.819 357.2C266.715 361.785 264.548 366.926 260.215 368.872L236.247 379.292C231.779 381.237 226.768 379.014 224.873 374.568L199.009 311.766L156.761 355.116C151.13 360.892 142 356.439 142 348.864V139.899C142 131.923 151.711 128.035 156.76 133.647L295.411 275.918C301.003 281.355 296.877 291.063 289.317 291.063V291.063Z",
                                    fill: "black"
                                })]
                            })
                        }, "cursor")
                    }]
                };

            function G(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function U(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? G(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : G(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var z = {
                    borderColor: "gray.100",
                    py: 2,
                    px: 2
                },
                L = function(e) {
                    var n = e.list;
                    return (0, E.jsx)(a.x, {
                        w: "100%",
                        children: (0, E.jsx)(l.i, {
                            variant: "simple",
                            children: (0, E.jsx)(d.p, {
                                children: n.map(function(e, n) {
                                    var i = e.shortcut,
                                        t = e.description;
                                    return (0, E.jsxs)(u.Tr, {
                                        children: [(0, E.jsx)(p.Td, U(U({
                                            w: "60%"
                                        }, z), {}, {
                                            children: t
                                        })), (0, E.jsx)(p.Td, U(U({
                                            w: "40%"
                                        }, z), {}, {
                                            children: Array.isArray(i) ? i.map(function(e, n) {
                                                return (0, E.jsx)(x.T, {
                                                    display: "inline-block",
                                                    px: 2,
                                                    py: 1,
                                                    mr: 1,
                                                    children: "string" == typeof e ? (0, k.cE)(e) : e
                                                }, n)
                                            }) : "string" == typeof i ? (0, E.jsx)(x.T, {
                                                display: "inline-block",
                                                px: 2,
                                                py: 1,
                                                children: (0, k.cE)(i)
                                            }) : (0, E.jsx)(x.T, {
                                                display: "inline-block",
                                                px: 2,
                                                py: 1,
                                                children: i
                                            })
                                        }))]
                                    }, n)
                                })
                            })
                        })
                    })
                },
                Z = function(e) {
                    var n = e.isOpen,
                        i = e.onClose,
                        t = (0, R.A)(M),
                        a = (0, R.A)(S),
                        l = (0, R.A)(T);
                    return (0, E.jsxs)(f.J, {
                        returnFocusOnClose: !1,
                        closeOnBlur: !1,
                        placement: "top",
                        isOpen: n,
                        onClose: i,
                        modifiers: [{
                            name: "computeStyles",
                            options: {
                                gpuAcceleration: !1
                            }
                        }],
                        children: [(0, E.jsx)(h.t, {
                            children: (0, E.jsx)(j.xu, {
                                position: "fixed",
                                bottom: 0,
                                right: 0
                            })
                        }), (0, E.jsxs)(m.y, {
                            zIndex: "menu",
                            h: "80vh",
                            w: "400px",
                            flex: 1,
                            position: "relative",
                            children: [(0, E.jsxs)(g.Y, {
                                border: "0 none",
                                mb: 2,
                                position: "sticky",
                                bgColor: "white",
                                children: [(0, E.jsxs)(v.U, {
                                    spacing: 2,
                                    children: [(0, E.jsx)(P.G, {
                                        icon: s.UF
                                    }), (0, E.jsx)(b.X, {
                                        size: "md",
                                        children: (0, E.jsx)(c.cC, {
                                            id: "CTqTgr"
                                        })
                                    })]
                                }), (0, E.jsx)(C.u, {})]
                            }), (0, E.jsx)(y.b, {
                                overflowY: "auto",
                                children: (0, E.jsxs)(O.m, {
                                    variant: "soft-rounded",
                                    size: "sm",
                                    isFitted: !0,
                                    children: [(0, E.jsxs)(_.t, {
                                        mb: 6,
                                        children: [(0, E.jsxs)(I.O, {
                                            children: [(0, E.jsx)(j.xu, {
                                                mr: 2,
                                                children: (0, E.jsx)(P.G, {
                                                    icon: o.Tz
                                                })
                                            }), (0, E.jsx)(c.cC, {
                                                id: "vVRhxh"
                                            })]
                                        }), (0, E.jsxs)(I.O, {
                                            children: [(0, E.jsx)(j.xu, {
                                                mr: 2,
                                                children: (0, E.jsx)(P.G, {
                                                    icon: r.r0
                                                })
                                            }), (0, E.jsx)(c.cC, {
                                                id: "UodEcE"
                                            })]
                                        })]
                                    }), (0, E.jsxs)(A.n, {
                                        children: [(0, E.jsxs)(w.x, {
                                            p: 0,
                                            pb: 1,
                                            mt: 4,
                                            children: [(0, E.jsx)(L, {
                                                list: l
                                            }), (0, E.jsx)(k.NZ, {
                                                pt: 4,
                                                pb: 4,
                                                children: (0, E.jsx)(c.cC, {
                                                    id: "Bb47jg"
                                                })
                                            }), (0, E.jsx)(L, {
                                                list: t
                                            })]
                                        }), (0, E.jsx)(w.x, {
                                            p: 0,
                                            pb: 1,
                                            mt: 4,
                                            children: (0, E.jsx)(L, {
                                                list: a
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                }
        },
        22467: function(e, n, i) {
            i.d(n, {
                PU: function() {
                    return t
                },
                Ro: function() {
                    return o
                },
                ux: function() {
                    return r
                }
            });
            var t = 4,
                r = 4,
                o = {
                    mr: 4,
                    width: "auto",
                    outline: "0",
                    shadow: "lg",
                    _focus: {
                        outline: "none"
                    }
                }
        },
        45347: function(e, n, i) {
            i.d(n, {
                p: function() {
                    return v
                }
            });
            var t = i(26673),
                r = i(11919),
                o = i(9088),
                s = i(30893),
                c = i(45650),
                a = i(40771),
                l = i(63849),
                d = i(2575),
                u = i(91012),
                p = i(93319),
                x = i(4036),
                f = i(49929),
                h = i(55452),
                j = i(25232),
                m = i(55920),
                g = i(52322),
                v = function(e) {
                    var n = e.selectedLocale,
                        i = e.onLocaleSelect,
                        v = (0, j.ye)("i18nEnabled");
                    return (0, h.mV)(), (0, g.jsx)(r.k, {
                        direction: "column",
                        children: (0, g.jsxs)(o.v, {
                            matchWidth: !0,
                            children: [(0, g.jsx)(s.j, {
                                as: c.z,
                                rightIcon: (0, g.jsx)(f.G, {
                                    size: "xs",
                                    icon: t.pt
                                }),
                                minW: "150px",
                                textAlign: "left",
                                w: "100%",
                                children: n.displayName
                            }), (0, g.jsx)(a.q, {
                                minWidth: "240px",
                                maxH: "290px",
                                overflowY: "auto",
                                overflowX: "hidden",
                                children: (0, g.jsx)(l._, {
                                    value: n.key,
                                    type: "radio",
                                    onChange: function(e) {
                                        i(e)
                                    },
                                    children: (0, m.DD)(v).map(function(e) {
                                        var n = !v && "private_beta" === m.kf[e.key],
                                            i = !n && "public_beta" === m.kf[e.key];
                                        return (0, g.jsx)(d.i, {
                                            value: e.key,
                                            isDisabled: n,
                                            children: (0, g.jsxs)(r.k, {
                                                flex: 1,
                                                alignItems: "center",
                                                children: [(0, g.jsxs)(r.k, {
                                                    direction: "column",
                                                    children: [(0, g.jsx)(u.x, {
                                                        children: e.displayName
                                                    }), (0, g.jsx)(u.x, {
                                                        fontSize: "12px",
                                                        color: "gray.500",
                                                        children: e.displayNameLocalized()
                                                    })]
                                                }), " ", (0, g.jsx)(p.L, {}), n ? (0, g.jsx)(x.C, {
                                                    ml: 2,
                                                    fontSize: "0.75em",
                                                    colorScheme: "blue",
                                                    children: (0, g.jsx)(h.cC, {
                                                        id: "VZeG/A"
                                                    })
                                                }) : i ? (0, g.jsx)(x.C, {
                                                    ml: 2,
                                                    fontSize: "0.75em",
                                                    colorScheme: "green",
                                                    children: (0, g.jsx)(h.cC, {
                                                        id: "YBt9YP"
                                                    })
                                                }) : e.key !== m.p5 ? (0, g.jsx)(x.C, {
                                                    ml: 2,
                                                    fontSize: "0.75em",
                                                    colorScheme: "green",
                                                    children: (0, g.jsx)(h.cC, {
                                                        id: "YBt9YP"
                                                    })
                                                }) : null]
                                            })
                                        }, e.key)
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        49180: function(e, n, i) {
            i.d(n, {
                l: function() {
                    return o
                }
            });
            var t = i(36157),
                r = i(72643),
                o = function() {
                    return (0, t.CG)(r.G5)
                }
        },
        25031: function(e, n, i) {
            i.d(n, {
                m: function() {
                    return s
                }
            });
            var t = i(2784),
                r = i(36157),
                o = i(72643),
                s = function(e) {
                    var n = (0, r.TL)();
                    (0, t.useEffect)(function() {
                        n((0, o.ZT)({
                            locale: e || null
                        }))
                    }, [e]), (0, t.useEffect)(function() {
                        return function() {
                            n((0, o.ZT)({
                                locale: null
                            }))
                        }
                    }, [])
                }
        },
        70538: function(e, n, i) {
            i.d(n, {
                C: function() {
                    return h
                }
            });
            var t = i(55452),
                r = i(20010),
                o = i(56915),
                s = i(48273),
                c = i(92619),
                a = i(64827),
                l = i(2167),
                d = i(91012),
                u = i(80353),
                p = i(71354),
                x = i(45650),
                f = i(52322),
                h = function(e) {
                    var n = e.invitationCount,
                        i = e.isOpen,
                        h = e.onClose,
                        j = e.onSendInvitationsClick,
                        m = e.onDiscardClick;
                    return i ? (0, f.jsxs)(r.u_, {
                        returnFocusOnClose: !1,
                        onClose: h,
                        closeOnOverlayClick: !0,
                        isOpen: !0,
                        isCentered: !0,
                        children: [(0, f.jsx)(o.Z, {}), (0, f.jsxs)(s.h, {
                            children: [(0, f.jsx)(c.x, {
                                children: (0, f.jsx)(t.cC, {
                                    id: "tW/kB6",
                                    values: {
                                        invitationCount: n
                                    }
                                })
                            }), (0, f.jsx)(a.o, {}), (0, f.jsx)(l.f, {
                                children: (0, f.jsx)(d.x, {
                                    children: (0, f.jsx)(t.cC, {
                                        id: "qxNK2k",
                                        values: {
                                            invitationCount: n
                                        }
                                    })
                                })
                            }), (0, f.jsx)(u.m, {
                                children: (0, f.jsxs)(p.K, {
                                    spacing: 2,
                                    direction: "row",
                                    align: "center",
                                    children: [(0, f.jsx)(x.z, {
                                        onClick: m,
                                        children: (0, f.jsx)(t.cC, {
                                            id: "bzSI52"
                                        })
                                    }), (0, f.jsx)(x.z, {
                                        variant: "solid",
                                        onClick: j,
                                        children: (0, f.jsx)(t.cC, {
                                            id: "6dWGPZ",
                                            values: {
                                                invitationCount: n
                                            }
                                        })
                                    })]
                                })
                            })]
                        })]
                    }) : null
                }
        },
        67092: function(e, n, i) {
            i.d(n, {
                V: function() {
                    return h
                }
            });
            var t = i(55452),
                r = i(71354),
                o = i(8283),
                s = i(91012),
                c = i(4036),
                a = i(93319),
                l = i(71193),
                d = i(35266),
                u = i(95828),
                p = i(1243),
                x = i(89727),
                f = i(52322),
                h = function(e) {
                    var n = e.onClose,
                        i = e.onOpen,
                        h = e.segmentEvent,
                        j = e.doc,
                        m = e.label,
                        g = (0, d.y)("upsellUXEnabled_Pro"),
                        v = (0, p.dU)(null == j ? void 0 : j.organization),
                        b = (0, x.zc)().openUpsellModal;
                    return !1 === v && g ? (0, f.jsxs)(r.K, {
                        my: 4,
                        borderTop: "1px solid var(--chakra-colors-gray-100)",
                        w: "100%",
                        children: [(0, f.jsxs)(o.U, {
                            mt: 4,
                            children: [(0, f.jsxs)(o.U, {
                                children: [(0, f.jsx)(s.x, {
                                    children: m || (0, f.jsx)(t.cC, {
                                        id: "alnKae",
                                        values: {
                                            GAMMA_PROPER_NOUN: u.N6
                                        }
                                    })
                                }), (0, f.jsx)(c.C, {
                                    colorScheme: "trueblue",
                                    variant: "solid",
                                    children: u.k3
                                })]
                            }), (0, f.jsx)(a.L, {}), (0, f.jsx)(l.r, {
                                onClickCapture: function(e) {
                                    e.preventDefault(), b({
                                        onOpenCallback: n,
                                        onCloseCallback: i,
                                        segmentEvent: h
                                    })
                                },
                                checked: !1
                            })]
                        }), (0, f.jsx)(s.x, {
                            fontSize: "xs",
                            color: "gray.600",
                            children: (0, f.jsx)(t.cC, {
                                id: "/BIHRF",
                                values: {
                                    GAMMA_PROPER_NOUN: u.N6
                                }
                            })
                        })]
                    }) : null
                }
        },
        71767: function(e, n, i) {
            i.d(n, {
                L: function() {
                    return v
                }
            });
            var t = i(95235),
                r = i(51238),
                o = i(27037),
                s = i(55452),
                c = i(11919),
                a = i(13061),
                l = i(8283),
                d = i(12221),
                u = i(91012),
                p = i(53738),
                x = i(49929),
                f = i(97261),
                h = i(7985),
                j = i(52322);

            function m(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var v = function(e) {
                var n = e.selectedCollaborator,
                    i = e.idx,
                    t = e.handleRemoveClick,
                    m = n && (0, h.G)((null == n ? void 0 : n.email) || ""),
                    v = 0 === i ? 170 : 300;
                return (0, j.jsx)(c.k, {
                    width: 0 === i ? "calc(100% - 100px)" : "",
                    className: "searchbartag",
                    "data-testid": "searchbartag-collaborator-".concat(n.email),
                    children: (0, j.jsxs)(a.Vp, g(g({
                        size: "md",
                        minW: 110
                    }, m ? {} : {
                        colorScheme: "red",
                        bg: "red",
                        color: "white"
                    }), {}, {
                        children: ["id" in n ? (0, j.jsx)(f.kH, {
                            label: n.email,
                            "aria-label": n.email,
                            children: (0, j.jsxs)(l.U, {
                                children: [(0, j.jsx)(d.q, {
                                    size: "2xs",
                                    m: 0,
                                    name: n.displayName,
                                    src: n.profileImageUrl
                                }), (0, j.jsx)(u.x, {
                                    textTransform: "capitalize",
                                    wordBreak: "break-word",
                                    noOfLines: 1,
                                    maxW: v,
                                    lineHeight: "1.5",
                                    children: n.displayName
                                })]
                            })
                        }) : (0, j.jsx)(f.kH, {
                            label: m ? n.email : (0, j.jsx)(s.cC, {
                                id: "XILg0L"
                            }),
                            "aria-label": n.email,
                            children: (0, j.jsxs)(l.U, {
                                flex: 1,
                                children: [(0, j.jsx)(p.Cd, {
                                    bg: m ? "trueblue.100" : "none",
                                    size: 6,
                                    children: (0, j.jsx)(x.G, {
                                        icon: m ? o.FU : r.WV
                                    })
                                }), (0, j.jsx)(u.x, {
                                    wordBreak: "break-all",
                                    display: "block",
                                    height: "100%",
                                    width: "100%",
                                    noOfLines: 1,
                                    maxW: v,
                                    lineHeight: "1.5",
                                    children: n.email
                                })]
                            })
                        }), (0, j.jsx)(a.SD, {
                            onClick: t
                        })]
                    }))
                }, "id" in n ? n.id : n.email)
            }
        },
        66264: function(e, n, i) {
            i.d(n, {
                y: function() {
                    return o
                }
            });
            var t = i(75944),
                r = i(2784),
                o = function() {
                    var e = (0, t.q)({
                            id: "sharePanelDisclosure"
                        }),
                        n = e.isOpen,
                        i = e.onOpen,
                        o = e.onClose,
                        s = (0, r.useState)("invite");
                    return {
                        isSharePanelOpen: n,
                        onSharePanelOpen: i,
                        onSharePanelClose: o,
                        view: s[0],
                        setView: s[1]
                    }
                }
        },
        8763: function(e, n, i) {
            i.d(n, {
                Nj: function() {
                    return nt
                },
                t9: function() {
                    return nr
                },
                o$: function() {
                    return np
                },
                aA: function() {
                    return nM
                },
                WQ: function() {
                    return n$
                }
            });
            var t, r, o, s = i(92743),
                c = i(24799),
                a = i(54906),
                l = i(70110),
                d = i(8649),
                u = i(55452),
                p = i(87254),
                x = i(20010),
                f = i(56915),
                h = i(48273),
                j = i(92619),
                m = i(53738),
                g = i(64827),
                v = i(40110),
                b = i(2167),
                C = i(71354),
                y = i(81927),
                O = i(85982),
                _ = i(45650),
                I = i(80353),
                A = i(11919),
                w = i(49929),
                P = i(97261),
                k = i(2784),
                R = i(28811),
                N = i(5430),
                E = i(5945),
                D = i(31145),
                T = i(18992),
                M = i(59637),
                S = i(94659),
                G = i(91012),
                U = i(8283),
                z = i(25232),
                L = i(95828),
                Z = i(96575),
                F = i(12741),
                V = i(20406),
                W = i(75652),
                Y = i.n(W),
                K = i(28526),
                $ = i.n(K),
                B = i(55479),
                q = i(84103),
                H = i(88914),
                J = i(36157),
                X = i(36188),
                Q = i(17349),
                ee = i(52322),
                en = (t = (0, V.Z)($().mark(function e(n, i, t) {
                    var r;
                    return $().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = "".concat(H.v.API_HOST || "", "/export/docs/").concat(n, "/").concat(t), e.abrupt("return", fetch(r, {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "share-token": H.v.SHARE_TOKEN || ""
                                    },
                                    body: JSON.stringify({
                                        docContent: i
                                    })
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, n, i) {
                    return t.apply(this, arguments)
                }),
                ei = function(e, n, i) {
                    var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "pdf",
                        r = (0, B.p)(),
                        o = (0, k.useRef)(null),
                        s = (0, X.z$)(),
                        c = (0, k.useState)(!1),
                        a = c[0],
                        l = c[1],
                        d = (0, k.useCallback)(function() {
                            o.current = r({
                                id: "export-toast-".concat(e.id, "-").concat(t),
                                isClosable: !1,
                                position: "top",
                                duration: null,
                                status: "loading",
                                variant: "light",
                                title: (0, ee.jsx)(u.cC, {
                                    id: "eJOEBy"
                                })
                            })
                        }, [null == e ? void 0 : e.id, r, t]),
                        p = (0, k.useCallback)(function() {
                            o.current && r.update(o.current, {
                                status: "loading",
                                variant: "light",
                                title: (0, ee.jsx)(u.cC, {
                                    id: "eJOEBy"
                                }),
                                description: (0, ee.jsx)(u.cC, {
                                    id: "vMANwD"
                                }),
                                isClosable: !0
                            })
                        }, [r, t]),
                        x = (0, k.useCallback)(function() {
                            o.current && r.update(o.current, {
                                title: (0, ee.jsx)(u.cC, {
                                    id: "walT1X"
                                }),
                                status: "error",
                                duration: null,
                                isClosable: !0
                            })
                        }, [r]),
                        f = (0, k.useCallback)(function(e) {
                            o.current && r.update(o.current, {
                                status: "success",
                                title: (0, ee.jsx)(u.cC, {
                                    id: "pK8dQg"
                                }),
                                description: (0, ee.jsx)(G.x, {
                                    children: (0, ee.jsx)(u.cC, {
                                        id: "MTtTC2",
                                        components: {
                                            0: (0, ee.jsx)(q.r, {
                                                textDecoration: "underline",
                                                target: "_blank",
                                                href: e || void 0,
                                                onClick: function() {
                                                    return o.current && r.close(o.current)
                                                }
                                            })
                                        }
                                    })
                                }),
                                isClosable: !0
                            })
                        }, [r, t]);
                    return {
                        handleExport: (0, k.useCallback)(function() {
                            var r, o = null == i ? void 0 : i.getJSON();
                            l(!0), d();
                            var c = setTimeout(p, 3e4);
                            en(e.id, o, t).then((r = (0, V.Z)($().mark(function i(r) {
                                var o, c, a, l, d, u;
                                return $().wrap(function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            return i.next = 2, r.blob();
                                        case 2:
                                            if (c = i.sent, r.ok) {
                                                i.next = 5;
                                                break
                                            }
                                            throw Error("Export failed.");
                                        case 5:
                                            a = "pdf" === t ? X.AA.PDF_EXPORTED : X.AA.PPTX_EXPORTED, null == s || s.track(a, {
                                                doc_id: e.id,
                                                source: n
                                            }), f(decodeURIComponent(r.headers.get("x-gamma-download-url") || "") || void 0), l = window.URL.createObjectURL(c), d = document.createElement("a"), u = decodeURIComponent((null === (o = (r.headers.get("Content-Disposition") || "").split(";").find(function(e) {
                                                return e.includes("filename=")
                                            })) || void 0 === o ? void 0 : o.replace("filename=", "").trim()) || "".concat(e.id, ".").concat(t)), d.download = u, d.href = l, d.style.display = "none", document.body.appendChild(d), d.click(), d.remove();
                                        case 17:
                                        case "end":
                                            return i.stop()
                                    }
                                }, i)
                            })), function(e) {
                                return r.apply(this, arguments)
                            })).catch(function() {
                                x()
                            }).finally(function() {
                                l(!1), clearTimeout(c)
                            })
                        }, [s, null == e ? void 0 : e.id, i, n, t, x, d, p, f]),
                        exportInProgress: a
                    }
                },
                et = function(e) {
                    var n = (0, J.CG)(Q.Pu),
                        i = e.theme || n;
                    return (0, k.useMemo)(function() {
                        var e = i.fonts ? (0, F.Z)(i.fonts) : [];
                        return e.length < 2 && e.push({
                            id: "Inter",
                            name: "Inter",
                            url: "https://fonts.googleapis.com/css2?family=Inter"
                        }), Y()(e).map(function(e) {
                            var n;
                            return null !== (n = e.url) && void 0 !== n && n.includes("fonts.googleapis.com") ? {
                                name: e.name,
                                url: "https://fonts.google.com/specimen/".concat(e.name)
                            } : {
                                name: e.name
                            }
                        }).filter(function(e) {
                            return !!e
                        })
                    }, [i])
                },
                er = i(93848),
                eo = i(80631),
                es = i(67092),
                ec = function(e) {
                    var n = e.doc,
                        i = e.editor,
                        t = e.onSharePanelOpen,
                        r = e.onSharePanelClose,
                        o = (0, z.ye)("pptExport");
                    return (0, ee.jsxs)(S.g, {
                        spacing: 4,
                        align: "start",
                        pt: 2,
                        children: [(0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, ee.jsx)(u.cC, {
                                id: "qwhOQ/",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                                }
                            })
                        }), (0, ee.jsxs)(C.K, {
                            spacing: 2,
                            width: "100%",
                            children: [(0, ee.jsx)(el, {
                                format: "pdf",
                                label: "PDF",
                                icon: M.gS,
                                accentColor: "red",
                                doc: n,
                                editor: i
                            }), o && (0, ee.jsx)(el, {
                                format: "pptx",
                                label: "PowerPoint",
                                icon: T.WO,
                                accentColor: "orange",
                                doc: n,
                                editor: i
                            })]
                        }), o && (0, ee.jsx)(ea, {
                            doc: n
                        }), i && (0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, ee.jsx)(u.cC, {
                                id: "8LhjM/",
                                components: {
                                    0: (0, ee.jsx)(_.z, {
                                        variant: "link",
                                        as: "span",
                                        size: "sm",
                                        cursor: "pointer",
                                        onClick: function() {
                                            r(), er.pw.emit(er.TI.OPEN_PAGE_SETUP, "cards")
                                        }
                                    })
                                }
                            })
                        }), (0, ee.jsx)(es.V, {
                            onClose: r,
                            onOpen: t,
                            segmentEvent: Z.AA.GAMMA_PRO_UPSELL_EXPORT_SETTINGS_REMOVE_WATERMARK,
                            doc: n
                        })]
                    })
                },
                ea = function(e) {
                    var n = et(e.doc);
                    return n.length ? (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, ee.jsx)(u.cC, {
                                id: "5qYpE7"
                            })
                        }), (0, ee.jsx)(U.U, {
                            children: n.map(function(e) {
                                var n = e.name,
                                    i = e.url;
                                return (0, ee.jsx)(m.xu, {
                                    border: "1px",
                                    borderColor: "gray.200",
                                    borderRadius: "md",
                                    h: "auto",
                                    _hover: i ? {
                                        boxShadow: "var(--chakra-shadows-md)",
                                        borderColor: "var(--chakra-colors-trueblue-300)",
                                        color: "var(--chakra-colors-trueblue-400)"
                                    } : {},
                                    onClick: i ? function() {
                                        return window.open(i, "_blank")
                                    } : void 0,
                                    cursor: i ? "pointer" : void 0,
                                    children: (0, ee.jsxs)(U.U, {
                                        p: 3,
                                        paddingRight: 4,
                                        spacing: 4,
                                        children: [(0, ee.jsx)(G.x, {
                                            fontWeight: "medium",
                                            children: n
                                        }), i && (0, ee.jsx)(w.G, {
                                            icon: D.faArrowUpRightFromSquare,
                                            size: "1x"
                                        })]
                                    })
                                }, "name")
                            })
                        })]
                    }) : null
                },
                el = function(e) {
                    var n = e.format,
                        i = e.doc,
                        t = e.editor,
                        r = e.icon,
                        o = e.accentColor,
                        s = e.label,
                        c = e.badge,
                        a = ei(i, "share_panel", t, n),
                        l = a.handleExport,
                        d = a.exportInProgress;
                    return (0, ee.jsx)(eo.j, {
                        onClick: l,
                        icon: r,
                        formatLabel: s,
                        accentColor: o,
                        exportInProgress: d,
                        exportInProgressNote: (0, ee.jsx)(u.cC, {
                            id: "57bp6s"
                        }),
                        badge: c
                    })
                },
                ed = i(95235),
                eu = i(81333),
                ep = i(11446),
                ex = i(47299),
                ef = i(3851),
                eh = i(49626),
                ej = i(59195),
                em = i(61751),
                eg = i(40130),
                ev = i(27037),
                eb = i(52622),
                eC = (i(98683), i(49747)),
                ey = (i(97907), i(50390)),
                eO = i(72360),
                e_ = i(48322),
                eI = i(12221),
                eA = i(1842),
                ew = i.n(eA),
                eP = i(35931),
                ek = i(81167),
                eR = i(66397),
                eN = i(16673),
                eE = i(46351),
                eD = i(15767),
                eT = i(78739),
                eM = i(60883),
                eS = i(97526),
                eG = i(62173),
                eU = i(19911),
                ez = function(e) {
                    var n = e.icon,
                        i = e.showDisabled,
                        t = void 0 !== i && i;
                    return (0, ee.jsx)(m.Cd, {
                        color: "gray.800",
                        textAlign: "center",
                        bg: "gray.200",
                        size: 8,
                        opacity: t ? .5 : 1,
                        children: t ? (0, ee.jsxs)("span", {
                            className: "fa-stack",
                            children: [(0, ee.jsx)(w.G, {
                                icon: eU.u6,
                                className: "fa-stack-1x"
                            }), (0, ee.jsx)(w.G, {
                                icon: n,
                                className: "fa-stack-1x"
                            })]
                        }) : (0, ee.jsx)(w.G, {
                            size: "1x",
                            icon: n
                        })
                    })
                },
                eL = function(e) {
                    var n = e.channel,
                        i = e.doc,
                        t = e.isDisabled,
                        r = e.showDisabledIcon,
                        o = void 0 !== r && r,
                        s = (0, eG.Z)().removeDocChannel,
                        c = (0, k.useCallback)(function() {
                            i && s(i, n.id)
                        }, [n.id, i, s]),
                        a = (0, eM.j)({
                            slug: n.slug,
                            id: n.id
                        });
                    return (0, ee.jsxs)(U.U, {
                        py: 2,
                        w: "100%",
                        justify: "space-between",
                        "data-testid": "workspace-row-".concat(n.id),
                        children: [(0, ee.jsx)(m.xu, {
                            children: (0, ee.jsxs)(A.k, {
                                alignItems: "center",
                                children: [(0, ee.jsx)(ez, {
                                    icon: eE.Ty,
                                    showDisabled: o
                                }), (0, ee.jsx)(m.xu, {
                                    ml: 3,
                                    opacity: o ? .5 : 1,
                                    children: (0, ee.jsx)(q.r, {
                                        href: a,
                                        target: "_blank",
                                        children: n.name
                                    })
                                })]
                            })
                        }), (0, ee.jsx)(_.z, {
                            size: "sm",
                            variant: "ghost",
                            colorScheme: "red",
                            onClick: c,
                            isDisabled: t,
                            children: (0, ee.jsx)(u.cC, {
                                id: "t/YqKh"
                            })
                        })]
                    }, n.id)
                },
                eZ = i(46949),
                eF = i(76648),
                eV = i(21891),
                eW = i(420),
                eY = i(35316),
                eK = i(90113),
                e$ = i(38421),
                eB = i.n(e$),
                eq = function(e) {
                    var n = e.workspaceId,
                        i = e.docId,
                        t = e.existingChannels,
                        r = e.isDisabled,
                        o = (0, k.useRef)(null),
                        s = (0, k.useState)(""),
                        c = s[0],
                        a = s[1],
                        l = (0, k.useState)([]),
                        d = l[0],
                        x = l[1],
                        f = (0, k.useState)(!1),
                        h = f[0],
                        j = f[1],
                        g = (0, eG.Z)().addDocChannel,
                        v = (0, R.Kce)({
                            variables: {
                                query: c,
                                workspaceId: n
                            },
                            skip: !c
                        }),
                        b = v.data,
                        y = v.loading;
                    (0, k.useEffect)(function() {
                        if (!y && b) {
                            var e = b.search.filter(Boolean);
                            x(e), j(0 === e.length)
                        }
                    }, [b, y]);
                    var O = (0, k.useMemo)(function() {
                            return c ? d.filter(function(e) {
                                return !t.find(function(n) {
                                    return n.id === e.id
                                })
                            }) : []
                        }, [t, c, d]),
                        _ = (0, k.useCallback)(function(e) {
                            var n = O.find(function(n) {
                                return n.id === e
                            });
                            if (!n) {
                                console.error("[ChannelSearchBar.addSelectedChannel] No matching channel found");
                                return
                            }
                            g({
                                docId: i,
                                channel: n,
                                existingChannels: t
                            })
                        }, [g, i, t, O]);
                    return (0, ee.jsx)(eF.h, {
                        w: "100%",
                        mb: 2,
                        alignItems: "flex-start",
                        "data-testid": "sharepanel-channel-search-bar",
                        children: (0, ee.jsx)(m.xu, {
                            flex: 1,
                            children: (0, ee.jsxs)(eV.B, {
                                w: "100%",
                                justifyContent: "center",
                                zIndex: 1,
                                children: [(0, ee.jsx)(A.k, {
                                    display: "none",
                                    position: "absolute",
                                    h: "100%",
                                    w: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bg: "gray.300",
                                    zIndex: "overlay",
                                    opacity: .4,
                                    children: (0, ee.jsx)(eW.$, {})
                                }), (0, ee.jsxs)(eK.AutoComplete, {
                                    rollNavigation: !0,
                                    multiple: !0,
                                    emptyState: function() {
                                        return !!h && (0, ee.jsxs)(A.k, {
                                            direction: "column",
                                            justify: "center",
                                            align: "center",
                                            w: "100%",
                                            my: 6,
                                            children: [(0, ee.jsx)(m.xu, {
                                                w: "80%",
                                                maxW: "200px",
                                                mb: 6,
                                                alignContent: "center",
                                                children: (0, ee.jsx)(eB(), {
                                                    src: "/images/Sal-Fishing-2x.png",
                                                    width: "640",
                                                    height: "361",
                                                    alt: "Sal, the Gamma mascot, fishing extraterrestrially"
                                                })
                                            }), (0, ee.jsx)(ey.X, {
                                                size: "xs",
                                                mb: 2,
                                                textAlign: "center",
                                                children: (0, ee.jsx)(u.cC, {
                                                    id: "NmfOr+"
                                                })
                                            }), (0, ee.jsx)(G.x, {
                                                fontSize: "sm",
                                                color: "gray.400",
                                                textAlign: "center",
                                                children: (0, ee.jsx)(u.cC, {
                                                    id: "kXnLEt"
                                                })
                                            })]
                                        })
                                    },
                                    suggestWhenEmpty: !1,
                                    openOnFocus: !0,
                                    filter: function() {
                                        return !0
                                    },
                                    onSelectOption: function(e) {
                                        _(e.item.value), a("")
                                    },
                                    children: [(0, ee.jsxs)(eY.Z, {
                                        pointerEvents: "none",
                                        color: "gray.300",
                                        h: "100%",
                                        flexDirection: "column",
                                        children: [(0, ee.jsx)(A.k, {
                                            flex: 1
                                        }), (0, ee.jsx)(A.k, {
                                            h: 10,
                                            py: 4,
                                            alignItems: "center",
                                            children: (0, ee.jsx)(eZ.W, {
                                                w: 10
                                            })
                                        })]
                                    }), (0, ee.jsx)(eK.AutoCompleteInput, {
                                        ref: o,
                                        "data-testid": "autocomplete-channels-input",
                                        cursor: r ? "not-allowed" : void 0,
                                        disabled: r,
                                        w: "100%",
                                        pl: 5,
                                        wrapStyles: {
                                            px: 2
                                        },
                                        fontSize: "md",
                                        placeholder: p.ag._({
                                            id: "KmCmUJ"
                                        }),
                                        transition: "width 1s ease-in-out",
                                        value: c,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            a(n), n || x([])
                                        }
                                    }), (0, ee.jsx)(eK.AutoCompleteList, {
                                        w: "100%",
                                        mt: 0,
                                        display: c.length > 0 ? "flex" : "none",
                                        children: O.length > 0 && O.map(function(e) {
                                            var n = e.id,
                                                i = e.name,
                                                t = e.memberCount,
                                                r = e.isMember,
                                                o = e.members;
                                            return (0, ee.jsx)(eK.AutoCompleteItem, {
                                                "data-testid": "autocomplete-item-channel-".concat(n),
                                                value: {
                                                    id: e.id
                                                },
                                                getValue: function(e) {
                                                    return e.id
                                                },
                                                align: "center",
                                                _focus: {
                                                    bg: "trueblue.50"
                                                },
                                                children: (0, ee.jsxs)(U.U, {
                                                    spacing: 4,
                                                    p: 0,
                                                    flex: 1,
                                                    children: [(0, ee.jsx)(m.xu, {
                                                        color: "gray.700",
                                                        children: (0, ee.jsx)(w.G, {
                                                            icon: eE.Ty
                                                        })
                                                    }), (0, ee.jsxs)(C.K, {
                                                        spacing: 0,
                                                        flex: "1",
                                                        children: [(0, ee.jsx)(G.x, {
                                                            children: i
                                                        }), (0, ee.jsx)(G.x, {
                                                            fontSize: "sm",
                                                            color: "gray.400",
                                                            children: r ? (0, ee.jsx)(u.cC, {
                                                                id: "tWPlLK",
                                                                values: {
                                                                    0: t || 0
                                                                }
                                                            }) : (0, ee.jsx)(u.cC, {
                                                                id: "pkIIls",
                                                                values: {
                                                                    0: t || 0
                                                                }
                                                            })
                                                        })]
                                                    }), (0, ee.jsx)(P.NL, {
                                                        size: "xs",
                                                        overflowTooltipLabel: p.ag._({
                                                            id: "25VyZX"
                                                        }),
                                                        avatars: o || [],
                                                        max: 3,
                                                        onClick: function(e) {
                                                            e.preventDefault(), e.stopPropagation()
                                                        }
                                                    })]
                                                })
                                            }, n)
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                eH = i(75944),
                eJ = i(4448),
                eX = i(7985),
                eQ = i(98841),
                e0 = i(25946),
                e1 = i(70538),
                e2 = i(2252),
                e5 = i(59974),
                e3 = i(36471),
                e4 = i(26673),
                e9 = i(9088),
                e6 = i(30893),
                e8 = i(40771),
                e7 = i(63849),
                ne = i(2575),
                nn = i(95258),
                ni = i(82904);
            (o || (o = {})).NoAccess = "no_access";
            var nt = (r = {}, (0, ed.Z)(r, R.y3$.Manage, {
                    title: function() {
                        return p.ag._({
                            id: "DZfDCl"
                        })
                    },
                    description: function() {
                        return p.ag._({
                            id: "r59J7Q"
                        })
                    }
                }), (0, ed.Z)(r, R.y3$.Edit, {
                    title: function() {
                        return p.ag._({
                            id: "ePK91l"
                        })
                    },
                    description: function() {
                        return p.ag._({
                            id: "kuZsYI"
                        })
                    }
                }), (0, ed.Z)(r, R.y3$.Comment, {
                    title: function() {
                        return p.ag._({
                            id: "NBdIgR"
                        })
                    },
                    description: function() {
                        return p.ag._({
                            id: "IwFh5+"
                        })
                    }
                }), (0, ed.Z)(r, R.y3$.View, {
                    title: function() {
                        return p.ag._({
                            id: "jpctdh"
                        })
                    },
                    description: function() {
                        return p.ag._({
                            id: "yzFEXd"
                        })
                    }
                }), (0, ed.Z)(r, o.NoAccess, {
                    title: function() {
                        return p.ag._({
                            id: "oPoLg+"
                        })
                    },
                    description: function() {
                        return p.ag._({
                            id: "Vcif8/"
                        })
                    }
                }), r),
                nr = function(e) {
                    var n = e.isDisabled,
                        i = e.options,
                        t = e.disabledOptions,
                        r = void 0 === t ? [] : t,
                        s = e.selected,
                        c = e.variant,
                        a = e.onClick,
                        l = void 0 === a ? function() {} : a,
                        d = e.onRemove;
                    return (0, ee.jsxs)(e9.v, {
                        closeOnSelect: !0,
                        children: [(0, ee.jsx)(e6.j, {
                            "data-testid": "permission-menu-value-".concat(s),
                            as: _.z,
                            display: "flex",
                            size: "sm",
                            isDisabled: n,
                            variant: void 0 === c ? "ghost" : c,
                            rightIcon: (0, ee.jsx)(w.G, {
                                icon: e4.pt
                            }),
                            children: nt[s || o.NoAccess].title()
                        }), (0, ee.jsx)(e8.q, {
                            textAlign: "left",
                            zIndex: "overlay",
                            children: (0, ee.jsxs)(e7._, {
                                defaultValue: s,
                                value: s,
                                title: p.ag._({
                                    id: "9cDpsw"
                                }),
                                type: "radio",
                                onChange: function(e) {
                                    l(e)
                                },
                                children: [i.map(function(e) {
                                    var n = r.find(function(n) {
                                            return n.permission === e
                                        }),
                                        i = n && n.reason;
                                    return (0, ee.jsx)(ne.i, {
                                        isDisabled: !!n,
                                        value: e,
                                        alignItems: "start",
                                        pt: 3,
                                        children: (0, ee.jsx)(P.kH, {
                                            label: i,
                                            "aria-label": i,
                                            isDisabled: !n,
                                            placement: "top",
                                            children: (0, ee.jsxs)(m.xu, {
                                                children: [(0, ee.jsx)(G.x, {
                                                    mt: -1,
                                                    children: nt[e].title()
                                                }), (0, ee.jsx)(G.x, {
                                                    fontSize: "sm",
                                                    color: "gray.500",
                                                    mt: 1,
                                                    children: nt[e].description()
                                                })]
                                            })
                                        }, e)
                                    }, e)
                                }), d && (0, ee.jsxs)(ee.Fragment, {
                                    children: [(0, ee.jsx)(nn.R, {}), (0, ee.jsx)(ni.s, {
                                        color: "red.500",
                                        onClick: d,
                                        icon: (0, ee.jsx)(w.G, {
                                            icon: e3.$,
                                            fixedWidth: !0
                                        }),
                                        children: (0, ee.jsx)(u.cC, {
                                            id: "t/YqKh"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                no = i(71767);

            function ns(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nc(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? ns(Object(i), !0).forEach(function(n) {
                        (0, ed.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ns(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var na = (0, eQ.E)(m.xu),
                nl = function(e, n, i) {
                    if (!i) return e;
                    var t = (0, F.Z)(e),
                        r = e.findIndex(function(e) {
                            return "email" in e && e.email === i
                        }),
                        o = n.find(function(e) {
                            return e.email === i
                        });
                    return -1 !== r && t.splice(r, 1), [].concat((0, F.Z)(t), [o || {
                        email: i
                    }])
                },
                nd = function(e, n) {
                    var i = (0, e5.Hs)(n.map(function(e) {
                        return "displayName" in e ? e.displayName : e.email
                    }), 3);
                    return e === R.y3$.Manage ? p.ag._({
                        id: "4bKxWq",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                        }
                    }) : e === R.y3$.Edit ? p.ag._({
                        id: "3rbi6Y",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                        }
                    }) : e === R.y3$.Comment ? p.ag._({
                        id: "uGWY40",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                        }
                    }) : e === R.y3$.View ? p.ag._({
                        id: "p5IG6F",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                        }
                    }) : p.ag._({
                        id: "Ai1TAT",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                        }
                    })
                },
                nu = function(e) {
                    var n, i = e.workspaceId,
                        t = e.docId,
                        r = e.user,
                        o = e.existingDocCollaborators,
                        s = e.existingInvitations,
                        c = e.registerDoneFn,
                        a = e.isDisabled,
                        l = (0, B.p)(),
                        d = (0, k.useState)(!1),
                        x = d[0],
                        f = d[1],
                        h = (0, k.useRef)(),
                        j = (0, k.useRef)(null),
                        g = (0, k.useState)(""),
                        v = g[0],
                        b = g[1],
                        C = (0, k.useState)([]),
                        y = C[0],
                        O = C[1],
                        I = (0, k.useState)(R.y3$.Manage),
                        N = I[0],
                        E = I[1],
                        D = (0, k.useState)(new e2.B),
                        T = D[0],
                        M = D[1],
                        S = (0, k.useState)([]),
                        z = S[0],
                        L = S[1],
                        Z = z.filter(function(e) {
                            return "email" in e
                        }),
                        W = o.map(function(e) {
                            return e.user
                        }),
                        Y = (0, eH.q)({
                            id: "unsentInvitationsModalDisclosure"
                        }),
                        K = Y.isOpen,
                        q = Y.onOpen,
                        H = Y.onClose,
                        J = (0, R.qVw)(),
                        X = (0, eu.Z)(J, 2),
                        Q = X[0],
                        en = X[1],
                        ei = en.loading,
                        et = en.error;
                    (0, eD.GJ)("Error inviting collaborators.", et);
                    var er = (0, e0.j)(R.aAR),
                        eo = (0, R.PGi)({
                            variables: {
                                query: v,
                                workspaceId: i
                            },
                            skip: !v
                        }),
                        es = eo.data,
                        ec = eo.loading;
                    (0, k.useEffect)(function() {
                        !ec && es && O(es.search.filter(Boolean))
                    }, [es, ec]);
                    var ea = (0, k.useMemo)(function() {
                            return v ? y.filter(function(e) {
                                return "User" === e.__typename && e.id !== r.id && !Z.concat(W).find(function(n) {
                                    return n.email === e.email
                                })
                            }) : []
                        }, [y, W, v, Z, r.id]),
                        el = !!v && !ea.find(function(e) {
                            return e.email === v
                        }),
                        ed = N === R.y3$.Manage && Z.some(function(e) {
                            return !("__typename" in e && "User" === e.__typename)
                        }),
                        ep = z.concat({
                            email: v
                        }).filter(function(e) {
                            return !("email" in e) || (0, eX.G)(e.email || "")
                        }),
                        ex = !!z.length,
                        ef = !!ep.length;
                    (0, k.useEffect)(function() {
                        c(function() {
                            return function() {
                                return ef ? q() : T.resolve(), T.promise
                            }
                        })
                    }, [c, T, ef, q]);
                    var eh = (0, k.useCallback)((n = (0, V.Z)($().mark(function e(n) {
                            var t;
                            return $().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f(!0), L(function(e) {
                                            return n.reduce(function(e, n) {
                                                return nl(e, ea, n.trim())
                                            }, e)
                                        }), e.next = 4, Promise.all(n.map(function(e) {
                                            return er({
                                                workspaceId: i,
                                                query: e
                                            }).then(function(n) {
                                                var i;
                                                return null === (i = n.data) || void 0 === i ? void 0 : i.search.find(function(n) {
                                                    return "User" === n.__typename && n.email === e
                                                })
                                            })
                                        }));
                                    case 4:
                                        t = e.sent.filter(Boolean), L(function(e) {
                                            return n.reduce(function(e, n) {
                                                return nl(e, t, n.trim())
                                            }, e)
                                        }), f(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [ea, er, i]),
                        ej = (0, k.useCallback)((0, V.Z)($().mark(function e() {
                            var n, i, c;
                            return $().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (0 !== Z.length) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = nl(Z, ea, v.trim()).filter(function(e) {
                                            return "email" in e && (0, eX.G)(e.email || "")
                                        }), i = [].concat((0, F.Z)(o), (0, F.Z)(n.map(function(e) {
                                            if ("id" in e) return {
                                                docId: t,
                                                user: e,
                                                guest: !1,
                                                permission: N,
                                                __typename: "DocCollaborator"
                                            }
                                        }))).filter(function(e) {
                                            return !!e
                                        }), c = [].concat((0, F.Z)(s), (0, F.Z)(n.map(function(e) {
                                            if (!("id" in e)) return {
                                                id: "temp",
                                                docTitle: "temp-title",
                                                invitedBy: r,
                                                docId: t,
                                                email: e.email,
                                                permission: N,
                                                __typename: "DocInvitation"
                                            }
                                        }))).filter(function(e) {
                                            return !!e
                                        }), e.abrupt("return", Q({
                                            variables: {
                                                docId: t,
                                                collaborators: n.map(function(e) {
                                                    var n = {
                                                        permission: N
                                                    };
                                                    return nc(nc({}, "id" in e ? {
                                                        userId: e.id
                                                    } : {
                                                        email: e.email
                                                    }), n)
                                                })
                                            },
                                            update: function(e, n) {
                                                var i = n.data;
                                                e.writeFragment({
                                                    id: "Doc:".concat(t),
                                                    fragment: R.yAO,
                                                    data: null == i ? void 0 : i.addCollaborators
                                                })
                                            },
                                            optimisticResponse: {
                                                addCollaborators: {
                                                    id: t,
                                                    collaborators: i,
                                                    invitations: c
                                                }
                                            }
                                        }).then(function() {
                                            l({
                                                title: p.ag._({
                                                    id: "Ka86rB",
                                                    values: {
                                                        0: n.length
                                                    }
                                                }),
                                                description: nd(N, n),
                                                status: "success",
                                                duration: 5e3,
                                                isClosable: !0,
                                                position: "top"
                                            })
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [Q, t, v, N, ea, Z, o, s, l, r]),
                        em = (0, k.useCallback)((0, V.Z)($().mark(function e() {
                            return $().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Promise.all([ej()]).then(function() {
                                            var e;
                                            L([]), b(""), null === (e = h.current) || void 0 === e || e.resetItems(!0), T.resolve(), M(new e2.B)
                                        }).catch(function(e) {
                                            console.warn(e)
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [ej, T]),
                        eg = a || ei || x;
                    return (0, ee.jsxs)(eF.h, {
                        w: "100%",
                        mb: 2,
                        alignItems: "flex-start",
                        "data-testid": "sharepanel-search-bar",
                        children: [(0, ee.jsx)(m.xu, {
                            flex: 1,
                            children: (0, ee.jsxs)(eV.B, {
                                w: "100%",
                                justifyContent: "center",
                                zIndex: 2,
                                children: [(0, ee.jsx)(A.k, {
                                    display: x ? "flex" : "none",
                                    position: "absolute",
                                    h: "100%",
                                    w: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bg: "gray.300",
                                    zIndex: "overlay",
                                    opacity: .4,
                                    children: (0, ee.jsx)(eW.$, {})
                                }), (0, ee.jsxs)(eK.AutoComplete, {
                                    ref: h,
                                    values: z,
                                    maxSelections: 100,
                                    maxSuggestions: 20,
                                    creatable: !0,
                                    multiple: !0,
                                    freeSolo: !0,
                                    suggestWhenEmpty: !1,
                                    openOnFocus: !0,
                                    filter: function(e, n) {
                                        return !Z.find(function(e) {
                                            return e.email === n
                                        })
                                    },
                                    onSelectOption: function(e) {
                                        var n = e.item;
                                        "collaborator" === n.originalValue.type && L(function(e) {
                                            return nl(e, ea, n.value)
                                        }), b("")
                                    },
                                    onTagRemoved: function(e) {
                                        L(function(n) {
                                            return (0, F.Z)(n).filter(function(n) {
                                                return "email" in n ? n.email !== e : !("id" in n) || n.id !== e
                                            })
                                        })
                                    },
                                    children: [(0, ee.jsxs)(eY.Z, {
                                        pointerEvents: "none",
                                        color: "gray.300",
                                        h: "100%",
                                        flexDirection: "column",
                                        children: [(0, ee.jsx)(A.k, {
                                            flex: 1
                                        }), (0, ee.jsx)(A.k, {
                                            h: 10,
                                            py: 4,
                                            alignItems: "center",
                                            children: (0, ee.jsx)(eZ.W, {
                                                w: 10
                                            })
                                        })]
                                    }), (0, ee.jsx)(eK.AutoCompleteInput, {
                                        ref: j,
                                        "data-testid": "autocomplete-collaborators-input",
                                        cursor: eg ? "not-allowed" : void 0,
                                        disabled: eg,
                                        w: "100%",
                                        pl: 5,
                                        wrapStyles: {
                                            px: 2
                                        },
                                        fontSize: "md",
                                        placeholder: p.ag._({
                                            id: "P8H57Z"
                                        }),
                                        transition: "width 1s ease-in-out",
                                        value: v,
                                        onKeyDown: function(e) {
                                            if ("Backspace" === e.key && 0 === v.length && z.length > 0) {
                                                var n, i = z.slice(-1).pop();
                                                i && (null === (n = h.current) || void 0 === n || n.removeItem("email" in i ? i.email : i.id))
                                            }
                                        },
                                        onPaste: function(e) {
                                            e.preventDefault(), e.stopPropagation(), eh(e.clipboardData.getData("Text").trim().split(/[,|;\s]+/)), b(""), O([])
                                        },
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            b(n), n || O([])
                                        },
                                        children: z.map(function(e, n) {
                                            return (0, ee.jsx)(no.L, {
                                                idx: n,
                                                selectedCollaborator: e,
                                                handleRemoveClick: function() {
                                                    var n;
                                                    null === (n = h.current) || void 0 === n || n.removeItem(e.email)
                                                }
                                            }, "id" in e ? e.id : e.email)
                                        })
                                    }), (0, ee.jsx)(eK.AutoCompleteList, {
                                        w: "100%",
                                        mt: 0,
                                        display: v.length > 0 ? "flex" : "none",
                                        children: ea.map(function(e) {
                                            var n = e.id,
                                                i = e.email,
                                                t = e.displayName,
                                                r = e.profileImageUrl;
                                            return (0, ee.jsx)(eK.AutoCompleteItem, {
                                                fixed: !0,
                                                "data-testid": "autocomplete-item-user-".concat(n),
                                                value: {
                                                    email: i,
                                                    type: "collaborator"
                                                },
                                                getValue: function(e) {
                                                    return e.email
                                                },
                                                align: "center",
                                                _focus: {
                                                    bg: "trueblue.50"
                                                },
                                                children: (0, ee.jsxs)(U.U, {
                                                    children: [(0, ee.jsx)(eI.q, {
                                                        size: "sm",
                                                        name: t,
                                                        src: r
                                                    }), (0, ee.jsxs)(m.xu, {
                                                        children: [(0, ee.jsx)(G.x, {
                                                            textTransform: "capitalize",
                                                            children: t
                                                        }), (0, ee.jsx)(G.x, {
                                                            fontSize: "xs",
                                                            color: "gray.500",
                                                            children: null == i ? void 0 : i.toLowerCase()
                                                        })]
                                                    })]
                                                })
                                            }, n)
                                        }).concat((0, ee.jsx)(eK.AutoCompleteItem, {
                                            value: {
                                                email: v,
                                                type: "collaborator"
                                            },
                                            align: "center",
                                            display: el ? "flex" : "none",
                                            _focus: {
                                                bg: "trueblue.50"
                                            },
                                            children: (0, ee.jsxs)(U.U, {
                                                children: [(0, ee.jsx)(m.Cd, {
                                                    bg: "trueblue.100",
                                                    size: 8,
                                                    children: (0, ee.jsx)(w.G, {
                                                        icon: ev.FU
                                                    })
                                                }), (0, ee.jsx)(G.x, {
                                                    size: "md",
                                                    children: v
                                                })]
                                            })
                                        }, v))
                                    })]
                                }), (0, ee.jsx)(eJ.p, { in: ex,
                                    unmountOnExit: !0,
                                    children: (0, ee.jsx)(eY.x, {
                                        w: "auto",
                                        justifyContent: "flex-end",
                                        pr: 1,
                                        children: (0, ee.jsx)(nr, {
                                            isDisabled: ei,
                                            options: [R.y3$.Manage, R.y3$.Edit, R.y3$.Comment, R.y3$.View],
                                            variant: "ghost",
                                            selected: N,
                                            onClick: function(e) {
                                                return E(e)
                                            }
                                        })
                                    })
                                })]
                            })
                        }), (0, ee.jsx)(na, {
                            overflowX: "hidden",
                            mr: -2,
                            transition: "slow",
                            animate: {
                                maxWidth: ex ? "200px" : "0px"
                            },
                            children: (0, ee.jsx)(P.kH, {
                                label: (0, ee.jsx)(u.cC, {
                                    id: "Rxin92"
                                }),
                                "aria-label": p.ag._({
                                    id: "Rxin92"
                                }),
                                isDisabled: !ed,
                                placement: "top",
                                children: (0, ee.jsx)(m.xu, {
                                    children: (0, ee.jsx)(_.z, {
                                        variant: "solid",
                                        onClick: em,
                                        isDisabled: !ef || ed,
                                        isLoading: ei,
                                        "data-testid": "add-selected-items",
                                        children: (0, ee.jsx)(u.cC, {
                                            id: "m16xKo"
                                        })
                                    })
                                })
                            })
                        }), (0, ee.jsx)(e1.C, {
                            invitationCount: ep.length,
                            onDiscardClick: function() {
                                H(), T.resolve(), M(new e2.B)
                            },
                            onSendInvitationsClick: function() {
                                H(), em()
                            },
                            onClose: function() {
                                H(), T.reject(), M(new e2.B)
                            },
                            isOpen: K
                        })]
                    })
                },
                np = function(e) {
                    var n = e.title,
                        i = e.subtitle,
                        t = e.img,
                        r = e.isDisabled,
                        o = e.disabledText,
                        s = e.tooltipText,
                        c = e.testId,
                        a = e.infoIcon,
                        l = e.permissionsControl,
                        d = e.workspaceGuestInvite,
                        u = "string" == typeof i ? (0, ee.jsx)(G.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: i
                        }) : i,
                        p = (0, ee.jsx)(P.kH, {
                            isDisabled: !s,
                            label: s,
                            placement: "top",
                            children: (0, ee.jsx)(m.xu, {
                                children: l
                            })
                        });
                    return (0, ee.jsxs)(U.U, {
                        w: "100%",
                        justify: "space-between",
                        py: 2,
                        "data-testid": "permission-settings-row".concat(c ? "-" + c : ""),
                        children: [(0, ee.jsx)(m.xu, {
                            children: (0, ee.jsxs)(A.k, {
                                alignItems: "center",
                                children: [t, (0, ee.jsxs)(m.xu, {
                                    ml: 3,
                                    children: [(0, ee.jsx)(G.x, {
                                        children: n
                                    }), (0, ee.jsxs)(A.k, {
                                        align: "center",
                                        children: [d && d, u && u]
                                    })]
                                })]
                            })
                        }), (0, ee.jsx)(m.xu, {
                            children: (0, ee.jsx)(P.kH, {
                                isDisabled: !s,
                                label: (0, ee.jsx)(G.x, {
                                    children: s
                                }),
                                placement: "top",
                                children: void 0 !== r && r ? (0, ee.jsx)(G.x, {
                                    size: "sm",
                                    color: "gray.500",
                                    "data-testid": "permission-controls-disabled-".concat(c),
                                    children: o
                                }) : a ? (0, ee.jsxs)(U.U, {
                                    children: [a, p]
                                }) : p
                            })
                        })]
                    })
                },
                nx = i(82269),
                nf = ["children", "showDivider"];

            function nh(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nj(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nh(Object(i), !0).forEach(function(n) {
                        (0, ed.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nh(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nm = function(e) {
                    var n = e.children,
                        i = e.showDivider,
                        t = (0, nx.Z)(e, nf);
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(S.g, nj(nj({
                            spacing: 1,
                            align: "stretch",
                            py: 4
                        }, t), {}, {
                            children: n
                        })), (void 0 === i || i) && (0, ee.jsx)(v.i, {})]
                    })
                },
                ng = function(e) {
                    var n = e.subtitle,
                        i = e.tooltipLabel,
                        t = e.ariaLabel,
                        r = e.icon;
                    return (0, ee.jsxs)(U.U, {
                        spacing: 1,
                        align: "center",
                        children: [(0, ee.jsx)(G.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: n
                        }), (0, ee.jsx)(P.kH, {
                            label: i,
                            placement: "top",
                            "aria-label": t,
                            children: (0, ee.jsx)(m.xu, {
                                color: "gray.500",
                                lineHeight: "1",
                                children: (0, ee.jsx)(w.G, {
                                    size: "xs",
                                    icon: r
                                })
                            })
                        })]
                    })
                },
                nv = i(43794),
                nb = i(54728),
                nC = i(51434),
                ny = i(91333),
                nO = i(10344),
                n_ = i(23742),
                nI = i(83897),
                nA = function(e) {
                    var n = e.email,
                        i = e.name,
                        t = e.workspaceName,
                        r = e.workspaceId,
                        o = (0, R.f4M)(),
                        s = (0, eu.Z)(o, 1)[0],
                        c = (0, k.useState)(!1),
                        a = c[0],
                        l = c[1],
                        d = (0, B.p)();
                    return (0, ee.jsx)(nb.J, {
                        closeOnBlur: !0,
                        children: function(e) {
                            var o = e.onClose;
                            return (0, ee.jsxs)(ee.Fragment, {
                                children: [(0, ee.jsx)(nC.x, {
                                    children: (0, ee.jsx)(_.z, {
                                        leftIcon: (0, ee.jsx)(w.G, {
                                            icon: nv.Gg
                                        }),
                                        size: "xs",
                                        colorScheme: "gray",
                                        mr: 1,
                                        px: 2,
                                        h: "auto",
                                        py: 1,
                                        children: (0, ee.jsx)(u.cC, {
                                            id: "O1wAlQ"
                                        })
                                    })
                                }), (0, ee.jsxs)(ny.y, {
                                    bg: "white",
                                    children: [(0, ee.jsx)(nO.Q, {}), (0, ee.jsx)(n_.Y, {
                                        fontWeight: "bold",
                                        children: (0, ee.jsx)(u.cC, {
                                            id: "XYV7FR"
                                        })
                                    }), (0, ee.jsxs)(nI.b, {
                                        children: [(0, ee.jsx)(G.x, {
                                            fontSize: "sm",
                                            children: (0, ee.jsx)(u.cC, {
                                                id: "hJZ5XP",
                                                values: {
                                                    name: i,
                                                    workspaceName: t,
                                                    GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: L.aq
                                                }
                                            })
                                        }), (0, ee.jsx)(_.z, {
                                            isDisabled: a,
                                            w: "100%",
                                            mt: 2,
                                            onClick: function() {
                                                r && n && (l(!0), s({
                                                    variables: {
                                                        workspaceId: r,
                                                        invitees: [{
                                                            email: n
                                                        }]
                                                    }
                                                }).then(function() {
                                                    d({
                                                        title: p.ag._({
                                                            id: "oNCcm2"
                                                        }),
                                                        status: "success",
                                                        duration: 5e3,
                                                        isClosable: !0,
                                                        position: "top"
                                                    })
                                                }).catch(function(e) {
                                                    console.error(e), d({
                                                        title: p.ag._({
                                                            id: "h37zlR",
                                                            values: {
                                                                0: e.message
                                                            }
                                                        }),
                                                        status: "error",
                                                        isClosable: !0,
                                                        position: "top"
                                                    })
                                                }).finally(function() {
                                                    l(!1), o()
                                                }))
                                            },
                                            children: (0, ee.jsx)(u.cC, {
                                                id: "qVqqmP"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }
                    })
                };

            function nw(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nP(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nw(Object(i), !0).forEach(function(n) {
                        (0, ed.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nw(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nk = function() {
                    return {
                        view: {
                            subtitle: p.ag._({
                                id: "ihPQra"
                            }),
                            tooltip: (0, eE.tN)()
                        },
                        comment: {
                            subtitle: p.ag._({
                                id: "qPZYdC"
                            }),
                            tooltip: p.ag._({
                                id: "oKPro/",
                                values: {
                                    0: (0, eE.tN)()
                                }
                            })
                        },
                        edit: {
                            subtitle: p.ag._({
                                id: "TVFcVE"
                            }),
                            tooltip: p.ag._({
                                id: "2gPY9r",
                                values: {
                                    0: (0, eE.tN)()
                                }
                            })
                        }
                    }
                },
                nR = function(e, n) {
                    var i, t, r = "DocCollaborator" === e.__typename ? null === (i = e.user.displayName) || void 0 === i ? void 0 : i.toUpperCase() : "DocInvitation" === e.__typename ? e.email.toUpperCase() : "",
                        o = "DocCollaborator" === n.__typename ? null === (t = n.user.displayName) || void 0 === t ? void 0 : t.toUpperCase() : "DocInvitation" === n.__typename ? n.email.toUpperCase() : "";
                    return !o || r && r < o ? -1 : !r || o && r > o ? 1 : 0
                },
                nN = function(e, n) {
                    if (e.permission !== n.permission) {
                        if ("manage" === e.permission) return -1;
                        if ("manage" === n.permission) return 1
                    }
                    return nR(e, n)
                },
                nE = function(e) {
                    var n, i, t, r = e.workspaceId,
                        s = e.isFromOtherOrg,
                        c = e.doc,
                        a = e.user,
                        l = e.setVerifySearchDone,
                        d = e.canManage,
                        x = (0, ek.A)(nk),
                        f = (0, B.p)(),
                        h = (0, eT._)(eS.H.hasDismissedDocWorkspaceNotice, !1),
                        j = (0, eu.Z)(h, 2),
                        g = j[0],
                        v = (j[1], (0, k.useState)(!1)),
                        b = v[0],
                        C = v[1],
                        y = (0, R.$gs)().isConnected,
                        O = (0, R.qVw)(),
                        _ = (0, eu.Z)(O, 2),
                        I = _[0],
                        E = _[1].error,
                        D = (0, R.mrc)(),
                        T = (0, eu.Z)(D, 2),
                        M = T[0],
                        z = T[1].error;
                    (0, eD.GJ)("Error updating collaborator.", E), (0, eD.GJ)("Error removing collaborator.", z);
                    var Z = (0, R.rIg)(),
                        V = (0, eu.Z)(Z, 1)[0],
                        W = (0, R.kTH)(),
                        Y = (0, eu.Z)(W, 1)[0],
                        K = null == c ? void 0 : null === (n = c.accessLinks) || void 0 === n ? void 0 : n[0],
                        $ = (0, k.useMemo)(function() {
                            return (0, eM.Gn)({
                                docTitle: null == c ? void 0 : c.title,
                                docId: null == c ? void 0 : c.id,
                                token: null == K ? void 0 : K.token,
                                absolute: !0
                            })
                        }, [c, null == K ? void 0 : K.token]),
                        q = d && y,
                        H = !s,
                        J = (H && (g || !c || c.orgAccess), !!(!(null != c && c.orgAccess) && (null == c ? void 0 : c.channels) && (null == c ? void 0 : c.channels.length) > 0 && (null == c ? void 0 : c.channels.every(function(e) {
                            return ew()(e.permission)
                        })))),
                        X = (null == c ? void 0 : c.orgAccess) == null && (null == c ? void 0 : c.publicAccess) == R.y3$.View,
                        Q = (0, N.qw)(c),
                        en = (null == c ? void 0 : c.collaborators) || [],
                        ei = (null == c ? void 0 : c.invitations) || [],
                        et = en.filter(function(e) {
                            return e.permission === R.y3$.Manage
                        }).length,
                        er = [].concat((0, F.Z)(en), (0, F.Z)(ei)).sort(nN),
                        eo = function(e) {
                            return function() {
                                f({
                                    title: "updated" === e ? p.ag._({
                                        id: "Xpw8aE"
                                    }) : p.ag._({
                                        id: "jwO7L7"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            }
                        },
                        es = null != K && K.permission ? null == K ? void 0 : K.permission : o.NoAccess,
                        ec = es === o.NoAccess,
                        ea = (null == K ? void 0 : K.token) === "",
                        el = K && K.permission !== R.y3$.View,
                        ed = c.orgAccess ? c.orgAccess : o.NoAccess,
                        ey = ed !== o.NoAccess;
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [q && (0, ee.jsx)(nu, {
                            workspaceId: r,
                            docId: c.id,
                            user: a,
                            existingDocCollaborators: en,
                            existingInvitations: ei,
                            registerDoneFn: l,
                            isDisabled: !d
                        }), (0, ee.jsx)(eR.V, {
                            label: (0, ee.jsx)(u.cC, {
                                id: "i5bpoc"
                            }),
                            isConnected: y,
                            mb: 4
                        }), (0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            pt: 2,
                            children: Q
                        }), (0, ee.jsxs)(nm, {
                            children: [!1, (0, ee.jsx)(np, {
                                testId: "workspace",
                                title: (0, ee.jsx)(u.cC, {
                                    id: "wtxjAY"
                                }),
                                subtitle: ey ? p.ag._({
                                    id: "aC87LX",
                                    values: {
                                        0: null == c ? void 0 : null === (i = c.organization) || void 0 === i ? void 0 : i.name
                                    }
                                }) : "",
                                img: (0, ee.jsx)(ez, {
                                    icon: eb.P8,
                                    showDisabled: !ey
                                }),
                                isDisabled: !q,
                                disabledText: nt[ed].title(),
                                infoIcon: X ? (0, ee.jsx)(P.kH, {
                                    label: (0, ee.jsx)(u.cC, {
                                        id: "paaewf",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                                        }
                                    }),
                                    placement: "top",
                                    children: (0, ee.jsx)(m.xu, {
                                        color: "yellow.500",
                                        children: (0, ee.jsx)(w.G, {
                                            icon: eg.faCircleInfo
                                        })
                                    })
                                }) : void 0,
                                permissionsControl: (0, ee.jsx)(nr, {
                                    isDisabled: !q,
                                    selected: ed,
                                    options: [R.y3$.Manage, R.y3$.Edit, R.y3$.Comment, R.y3$.View, o.NoAccess],
                                    onClick: function(e) {
                                        var n = {
                                            id: c.id,
                                            orgAccess: e === o.NoAccess ? null : e
                                        };
                                        V({
                                            variables: n,
                                            optimisticResponse: {
                                                updateDoc: nP(nP({}, n), {}, {
                                                    __typename: "Doc"
                                                })
                                            },
                                            refetchQueries: ["GetDocs"]
                                        }).then(eo(e === o.NoAccess ? "removed" : "updated"))
                                    }
                                })
                            }), H && (null === (t = c.channels) || void 0 === t ? void 0 : t.map(function(e) {
                                return (0, ee.jsx)(eL, {
                                    channel: e,
                                    doc: c,
                                    isDisabled: !y,
                                    showDisabledIcon: J
                                }, e.id)
                            })), !!c.orgAccess && H && !J && (0, ee.jsx)(m.xu, {
                                w: "100%",
                                mt: 2,
                                children: (0, ee.jsx)(eq, {
                                    existingChannels: c.channels,
                                    workspaceId: r,
                                    docId: c.id,
                                    isDisabled: !y
                                })
                            }), (0, ee.jsx)(eC.U, { in: H && J,
                                children: (0, ee.jsxs)(eO.b, {
                                    status: "warning",
                                    children: [(0, ee.jsx)(e_.z, {}), (0, ee.jsx)(u.cC, {
                                        id: "RZRM4l",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                                        }
                                    })]
                                })
                            })]
                        }), er && (0, ee.jsx)(nm, {
                            showDivider: d,
                            children: er.map(function(e) {
                                var n = e.permission === R.y3$.Manage && et < 2,
                                    i = !q || n,
                                    t = n ? p.ag._({
                                        id: "0q0LJR"
                                    }) : void 0,
                                    o = nt[e.permission].title();
                                if ("DocCollaborator" === e.__typename) {
                                    var s, l = e.user;
                                    return (0, ee.jsx)(np, {
                                        testId: l.email,
                                        title: "".concat(l.displayName, " ").concat(l.id === a.id ? p.ag._({
                                            id: "dDUgzP"
                                        }) : ""),
                                        img: (0, ee.jsx)(eI.q, {
                                            name: l.displayName,
                                            src: l.profileImageUrl,
                                            size: "sm"
                                        }),
                                        subtitle: i ? void 0 : l.email,
                                        isDisabled: i,
                                        disabledText: o,
                                        tooltipText: t,
                                        workspaceGuestInvite: !i && e.guest ? (0, ee.jsx)(nA, {
                                            name: l.displayName,
                                            workspaceName: null === (s = c.organization) || void 0 === s ? void 0 : s.name,
                                            workspaceId: r,
                                            email: e.user.email
                                        }) : void 0,
                                        permissionsControl: (0, ee.jsx)(nr, {
                                            isDisabled: i,
                                            selected: e.permission,
                                            options: [R.y3$.Manage, R.y3$.Edit, R.y3$.Comment, R.y3$.View],
                                            disabledOptions: e.guest ? [{
                                                permission: R.y3$.Manage,
                                                reason: p.ag._({
                                                    id: "Rxin92"
                                                })
                                            }] : [],
                                            onClick: function(e) {
                                                var n = {
                                                    docId: c.id,
                                                    collaborators: [{
                                                        userId: l.id,
                                                        permission: e
                                                    }]
                                                };
                                                I({
                                                    variables: n,
                                                    optimisticResponse: {
                                                        addCollaborators: {
                                                            id: n.docId,
                                                            collaborators: en.map(function(n) {
                                                                return nP(nP({}, n), {}, {
                                                                    permission: n.user.id === l.id ? e : n.permission
                                                                })
                                                            }),
                                                            invitations: ei,
                                                            __typename: "Doc"
                                                        }
                                                    }
                                                }).then(eo("updated")).catch(function() {})
                                            },
                                            onRemove: function() {
                                                var e = {
                                                    docId: c.id,
                                                    collaborators: [{
                                                        userId: l.id
                                                    }]
                                                };
                                                M({
                                                    variables: e,
                                                    optimisticResponse: {
                                                        removeCollaborators: {
                                                            id: e.docId,
                                                            collaborators: en.filter(function(e) {
                                                                return e.user.id !== l.id
                                                            }),
                                                            invitations: ei,
                                                            __typename: "Doc"
                                                        }
                                                    }
                                                }).then(eo("removed"))
                                            }
                                        })
                                    }, l.id)
                                }
                                return "DocInvitation" === e.__typename ? (0, ee.jsx)(np, {
                                    testId: e.email,
                                    title: e.email,
                                    subtitle: p.ag._({
                                        id: "MActeE"
                                    }),
                                    img: (0, ee.jsx)(m.Cd, {
                                        bg: "trueblue.50",
                                        size: 8,
                                        children: (0, ee.jsx)(w.G, {
                                            icon: ev.FU,
                                            size: "sm"
                                        })
                                    }),
                                    isDisabled: i,
                                    disabledText: o,
                                    permissionsControl: (0, ee.jsx)(nr, {
                                        selected: e.permission,
                                        options: [R.y3$.Manage, R.y3$.Edit, R.y3$.Comment, R.y3$.View],
                                        disabledOptions: [{
                                            permission: R.y3$.Manage,
                                            reason: p.ag._({
                                                id: "Rxin92"
                                            })
                                        }],
                                        onClick: function(n) {
                                            var i = {
                                                docId: c.id,
                                                collaborators: [{
                                                    email: e.email,
                                                    permission: n
                                                }]
                                            };
                                            I({
                                                variables: i,
                                                optimisticResponse: {
                                                    addCollaborators: {
                                                        id: i.docId,
                                                        invitations: ei.map(function(i) {
                                                            return nP(nP({}, i), {}, {
                                                                permission: i.email === e.email ? n : i.permission
                                                            })
                                                        }),
                                                        collaborators: en,
                                                        __typename: "Doc"
                                                    }
                                                }
                                            }).then(eo("updated")).catch(function() {
                                                console.warn("Error updating permission")
                                            })
                                        },
                                        onRemove: function() {
                                            var n = {
                                                docId: c.id,
                                                collaborators: [{
                                                    email: e.email
                                                }]
                                            };
                                            M({
                                                variables: n,
                                                optimisticResponse: {
                                                    removeCollaborators: {
                                                        id: n.docId,
                                                        invitations: ei.filter(function(n) {
                                                            return n.email !== e.email
                                                        }),
                                                        collaborators: en,
                                                        __typename: "Doc"
                                                    }
                                                }
                                            }).then(eo("removed"))
                                        }
                                    })
                                }, e.email) : null
                            })
                        }), d && (0, ee.jsxs)(nm, {
                            showDivider: !1,
                            children: [(0, ee.jsx)(np, {
                                title: (0, ee.jsx)(u.cC, {
                                    id: "qZu20V"
                                }),
                                subtitle: ec ? p.ag._({
                                    id: "vMZPZT"
                                }) : (0, ee.jsx)(ng, {
                                    subtitle: x[es].subtitle,
                                    tooltipLabel: x[es].tooltip,
                                    ariaLabel: x[es].subtitle,
                                    icon: eg.faCircleInfo
                                }),
                                img: (0, ee.jsx)(ez, {
                                    icon: em.nN,
                                    showDisabled: ec
                                }),
                                isDisabled: !q,
                                disabledText: nt[es].title(),
                                permissionsControl: (0, ee.jsx)(nr, {
                                    selected: es,
                                    options: [R.y3$.Edit, R.y3$.Comment, R.y3$.View, o.NoAccess],
                                    onClick: function(e) {
                                        var n = null == K ? void 0 : K.id,
                                            i = {
                                                id: c.id,
                                                accessLinks: e === o.NoAccess ? [{
                                                    permission: null
                                                }] : [{
                                                    permission: e
                                                }]
                                            };
                                        Y({
                                            variables: i,
                                            optimisticResponse: {
                                                updateDoc: nP(nP({}, i), {}, {
                                                    accessLinks: [{
                                                        __typename: "AccessLink",
                                                        id: n || "temp-id",
                                                        permission: e === o.NoAccess ? null : e
                                                    }],
                                                    __typename: "Doc"
                                                })
                                            }
                                        }).then(eo(e === o.NoAccess ? "removed" : "updated"))
                                    }
                                })
                            }), (0, ee.jsxs)(eC.U, {
                                animateOpacity: !0,
                                in: !!(null == K ? void 0 : K.permission),
                                children: [(0, ee.jsx)(eP.I, {
                                    url: $,
                                    customLabel: p.ag._({
                                        id: "y1eoq1"
                                    }),
                                    onClick: function() {
                                        (0, eN.J)({
                                            docId: c.id,
                                            source: "sharePanel",
                                            type: "tokenUrl"
                                        })
                                    }
                                }), !ea && (0, ee.jsxs)(ee.Fragment, {
                                    children: [(0, ee.jsx)(eC.U, { in: b,
                                        unmountOnExit: !0,
                                        children: (0, ee.jsxs)(S.g, {
                                            mt: 3,
                                            align: "stretch",
                                            spacing: 4,
                                            bg: "gray.50",
                                            p: 6,
                                            borderRadius: "md",
                                            children: [(0, ee.jsxs)(U.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, ee.jsx)(m.xu, {
                                                    color: "purple.600",
                                                    children: (0, ee.jsx)(w.G, {
                                                        fixedWidth: !0,
                                                        icon: ef._1
                                                    })
                                                }), (0, ee.jsx)(G.x, {
                                                    fontSize: "sm",
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "asiJbp"
                                                    })
                                                })]
                                            }), (0, ee.jsxs)(U.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, ee.jsx)(m.xu, {
                                                    color: "purple.600",
                                                    children: (0, ee.jsx)(w.G, {
                                                        fixedWidth: !0,
                                                        icon: ex.Md
                                                    })
                                                }), (0, ee.jsx)(G.x, {
                                                    fontSize: "sm",
                                                    display: "inline-block",
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "+g8rkW",
                                                        values: {
                                                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc,
                                                            GAMMA_PROPER_NOUN: L.N6
                                                        }
                                                    })
                                                })]
                                            }), el && (0, ee.jsxs)(U.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, ee.jsx)(m.xu, {
                                                    color: "purple.600",
                                                    children: (0, ee.jsx)(w.G, {
                                                        fixedWidth: !0,
                                                        icon: ep.FK
                                                    })
                                                }), (0, ee.jsx)(G.x, {
                                                    fontSize: "sm",
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "NSCwrX",
                                                        values: {
                                                            GAMMA_PROPER_NOUN: L.N6,
                                                            selectedAccessLinkPermission: es
                                                        },
                                                        components: {
                                                            0: (0, ee.jsx)(G.x, {
                                                                as: "span",
                                                                fontWeight: "bold"
                                                            })
                                                        }
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, ee.jsx)(A.k, {
                                        justify: "center",
                                        alignItems: "center",
                                        my: 3,
                                        children: (0, ee.jsxs)(U.U, {
                                            spacing: 1,
                                            as: "button",
                                            onClick: function() {
                                                return C(!b)
                                            },
                                            children: [b ? (0, ee.jsx)(w.G, {
                                                fixedWidth: !0,
                                                size: "xs",
                                                icon: ej.on
                                            }) : (0, ee.jsx)(w.G, {
                                                fixedWidth: !0,
                                                size: "xs",
                                                icon: eh.r8
                                            }), (0, ee.jsx)(G.x, {
                                                lineHeight: "normal",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                fontSize: "xs",
                                                fontWeight: "medium",
                                                children: b ? (0, ee.jsx)(u.cC, {
                                                    id: "BRvU04"
                                                }) : (0, ee.jsx)(u.cC, {
                                                    id: "l0Ck42"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                nD = i(46802),
                nT = i(34638),
                nM = function(e) {
                    var n = e.visibility,
                        i = e.isFromOtherOrg,
                        t = (0, nT.ff)("white", "var(--chakra-colors-gray-900)");
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [i && (0, ee.jsx)(w.G, {
                            icon: nv.Gg
                        }), (0, ee.jsxs)(m.xu, {
                            as: "span",
                            className: "fa-layers fa-fw",
                            children: [(0, ee.jsx)(w.G, {
                                icon: n.primaryIcon
                            }), n.secondaryIcon && (0, ee.jsxs)(ee.Fragment, {
                                children: [(0, ee.jsx)(w.G, {
                                    icon: nD.di,
                                    color: t,
                                    transform: "down-6 right-6"
                                }), (0, ee.jsx)(w.G, {
                                    icon: n.secondaryIcon,
                                    transform: "shrink-7 right-6 down-6"
                                })]
                            })]
                        })]
                    })
                },
                nS = i(2046),
                nG = i(71193),
                nU = i(49294),
                nz = i(25793);

            function nL(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nZ(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nL(Object(i), !0).forEach(function(n) {
                        (0, ed.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nL(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nF = "embed-copied-toast",
                nV = function(e) {
                    var n = e.embedCode,
                        i = e.isDisabled,
                        t = e.docId,
                        r = (0, B.p)(),
                        o = (0, k.useState)(!1),
                        s = o[0],
                        c = o[1],
                        a = (0, nU.V)(n),
                        l = a.hasCopied,
                        d = a.onCopy,
                        p = (0, k.useRef)(null);
                    (0, k.useEffect)(function() {
                        p.current && s && (p.current.focus(), p.current.select())
                    }, [s]);
                    var x = (0, k.useCallback)(function() {
                            return c(!0)
                        }, []),
                        f = (0, k.useCallback)(function() {
                            return c(!1)
                        }, []),
                        h = (0, k.useCallback)(function() {
                            d(), r.isActive(nF) || r({
                                id: nF,
                                title: (0, ee.jsx)(u.cC, {
                                    id: "ETv+Uw"
                                }),
                                status: "success",
                                duration: 5e3
                            }), (0, eN.J)({
                                docId: t,
                                source: "sharePanel",
                                type: "embed"
                            })
                        }, [t, d, r]);
                    return (0, ee.jsxs)(S.g, {
                        spacing: 4,
                        align: "stretch",
                        children: [(0, ee.jsx)(nz.g, {
                            ref: p,
                            rows: 5,
                            variant: "filled",
                            fontFamily: "mono",
                            colorScheme: "gray",
                            disabled: i,
                            onClick: x,
                            onBlur: f,
                            isReadOnly: !0,
                            resize: "none",
                            pointerEvents: i ? "none" : void 0,
                            children: n
                        }), (0, ee.jsx)(_.z, nZ(nZ({
                            alignSelf: "flex-end",
                            onClick: h,
                            isDisabled: i,
                            size: "sm"
                        }, i ? {
                            opacity: "1 !important",
                            color: "gray.400",
                            _hover: {
                                opacity: "1"
                            },
                            _active: {
                                boxShadow: "0 none"
                            }
                        } : {}), {}, {
                            children: l ? (0, ee.jsx)(u.cC, {
                                id: "6V3Ea3"
                            }) : (0, ee.jsx)(u.cC, {
                                id: "Sx4kHi"
                            })
                        }))]
                    })
                };

            function nW(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nY(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nW(Object(i), !0).forEach(function(n) {
                        (0, ed.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nW(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nK = function(e) {
                    var n = e.doc,
                        i = e.isSharePublic,
                        t = e.isConnected,
                        r = e.onSharePanelOpen,
                        s = e.onSharePanelClose,
                        c = e.editor,
                        a = (0, B.p)(),
                        d = (0, k.useState)(!!n.publicAccess),
                        x = d[0],
                        f = d[1],
                        h = (0, R.o6I)(),
                        j = (0, eu.Z)(h, 1)[0],
                        g = (0, k.useMemo)(function() {
                            var e = (0, eM.Gn)({
                                docId: n.id,
                                docTitle: n.title,
                                path: "public",
                                absolute: !0
                            });
                            return i ? e : (0, eM.lT)({
                                docId: n.id,
                                docTitle: n.title
                            })
                        }, [n.id, n.title, i]),
                        v = (0, k.useCallback)(function(e) {
                            f(e.target.checked);
                            var i = {
                                id: n.id,
                                publicAccess: e.target.checked ? R.y3$.View : null
                            };
                            j({
                                variables: i,
                                optimisticResponse: {
                                    updateDoc: nY(nY({}, i), {}, {
                                        __typename: "Doc"
                                    })
                                }
                            }).then(function() {
                                a({
                                    title: e.target.checked ? p.ag._({
                                        id: "OnQp1B"
                                    }) : p.ag._({
                                        id: "e5veeL"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            })
                        }, [n.id, a, j]),
                        b = n.publicAccess ? nt[R.y3$.View].title() : nt[o.NoAccess].title(),
                        C = i ? (0, ee.jsx)(u.cC, {
                            id: "kGj/zu",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                            },
                            components: {
                                0: (0, ee.jsx)(G.x, {
                                    as: "span",
                                    borderBottom: "0.125em dashed",
                                    borderColor: "gray.400",
                                    cursor: "help"
                                }),
                                1: (0, ee.jsx)(P.kH, {
                                    placement: "top",
                                    label: p.ag._({
                                        id: "kni5pb",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                                        }
                                    }),
                                    "aria-label": "public access is read only"
                                })
                            }
                        }) : (0, ee.jsx)(u.cC, {
                            id: "RmtWc6",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: L.Yc
                            }
                        });
                    return (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            pt: 2,
                            children: C
                        }), (0, ee.jsx)(nm, {
                            showDivider: !1,
                            children: (0, ee.jsx)(np, {
                                title: (0, ee.jsx)(u.cC, {
                                    id: "YsO5Wf"
                                }),
                                testId: "public-access",
                                subtitle: (0, ee.jsx)(ng, {
                                    subtitle: (0, ee.jsx)(u.cC, {
                                        id: "oEQSnD"
                                    }),
                                    tooltipLabel: (0, eE.tN)(),
                                    ariaLabel: p.ag._({
                                        id: "oEQSnD"
                                    }),
                                    icon: eg.faCircleInfo
                                }),
                                img: (0, ee.jsx)(ez, {
                                    icon: l.Xj
                                }),
                                isDisabled: !t,
                                disabledText: b,
                                permissionsControl: (0, ee.jsx)(nS.NI, {
                                    children: (0, ee.jsx)(nG.r, {
                                        id: "public-access",
                                        isChecked: x,
                                        onChange: v
                                    })
                                })
                            })
                        }), (0, ee.jsx)(P.kH, {
                            label: i ? (0, ee.jsx)(u.cC, {
                                id: "RFk/SS"
                            }) : (0, ee.jsx)(u.cC, {
                                id: "4wpR4l"
                            }),
                            placement: "top",
                            isDisabled: x,
                            children: (0, ee.jsx)(m.xu, {
                                children: i ? (0, ee.jsx)(eP.I, {
                                    isDisabled: !n.publicAccess,
                                    url: g,
                                    customLabel: p.ag._({
                                        id: "FO91Ip"
                                    }),
                                    onClick: function() {
                                        (0, eN.J)({
                                            docId: n.id,
                                            source: "sharePanel",
                                            type: "public"
                                        })
                                    }
                                }) : (0, ee.jsx)(nV, {
                                    embedCode: g,
                                    isDisabled: !x,
                                    docId: n.id
                                })
                            })
                        }), i && c && (0, ee.jsx)(G.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            mt: 4,
                            children: (0, ee.jsx)(u.cC, {
                                id: "a9n+CI",
                                components: {
                                    0: (0, ee.jsx)(_.z, {
                                        variant: "link",
                                        as: "span",
                                        size: "sm",
                                        cursor: "pointer",
                                        onClick: function() {
                                            s(), er.pw.emit(er.TI.OPEN_PAGE_SETUP, "preview")
                                        }
                                    })
                                }
                            })
                        }), (0, ee.jsx)(es.V, {
                            onClose: s,
                            onOpen: r,
                            segmentEvent: X.AA.GAMMA_PRO_UPSELL_SHARE_SETTINGS_REMOVE_WATERMARK,
                            doc: n
                        })]
                    })
                },
                n$ = function(e) {
                    var n, i = e.doc,
                        t = e.editor,
                        r = e.isSharePanelOpen,
                        o = e.onSharePanelClose,
                        D = e.onSharePanelOpen,
                        T = e.onAnalyticsPanelOpen,
                        M = e.view,
                        S = e.setView,
                        G = (0, k.useRef)(!1),
                        U = (0, E.SE)(),
                        z = U.user,
                        L = U.currentWorkspace,
                        Z = (0, R.$gs)().isConnected,
                        F = (0, E.py)("manage", i),
                        V = F && T,
                        W = (0, k.useState)(function() {
                            return function() {
                                return Promise.resolve()
                            }
                        }),
                        Y = W[0],
                        K = W[1],
                        $ = (0, k.useCallback)(function() {
                            Y().then(function() {
                                S("invite"), o()
                            }, function() {
                                console.debug("[handleSharePanelClose] CollaboratorSearchBar rejected \uD83D\uDC4E\uD83C\uDFFC")
                            })
                        }, [S, o, Y]),
                        B = (0, k.useCallback)(function() {
                            T && (o(), T())
                        }, [T, o]);
                    if (!z) return null;
                    var q = (0, N.h_)(i, z),
                        H = q ? (0, N.Xp)()[q] : null,
                        J = (0, N.Gi)(i, L);
                    if (i && null === H) return console.error("[SharePanel] Unknown VisibilityValue for doc", i), null;
                    var X = null == i ? void 0 : null === (n = i.organization) || void 0 === n ? void 0 : n.id;
                    return !i || X || G.current || (console.error("[SharePanelModal] Doc unexpectedly doesnt have a workspaceId", {
                        docId: i.id,
                        organization: i.organization
                    }), G.current = !0), (0, ee.jsx)(P.Wk, {
                        isDark: !1,
                        children: (0, ee.jsxs)(x.u_, {
                            onEsc: $,
                            isOpen: r,
                            onClose: o,
                            trapFocus: !1,
                            size: "3xl",
                            returnFocusOnClose: !1,
                            children: [(0, ee.jsx)(f.Z, {}), (0, ee.jsxs)(h.h, {
                                "data-share-panel-modal-content": !0,
                                children: [(0, ee.jsxs)(j.x, {
                                    children: [H && (0, ee.jsx)(m.xu, {
                                        as: "span",
                                        mr: 3,
                                        children: (0, ee.jsx)(nM, {
                                            visibility: H,
                                            isFromOtherOrg: J
                                        })
                                    }), i ? (0, ee.jsx)(u.cC, {
                                        id: "xy569a",
                                        values: {
                                            0: i.title
                                        }
                                    }) : (0, ee.jsx)(u.cC, {
                                        id: "Z8lGw6"
                                    })]
                                }), (0, ee.jsx)(g.o, {
                                    "data-share-panel-close-button": !0,
                                    onClick: function(e) {
                                        e.preventDefault(), $()
                                    }
                                }), (0, ee.jsx)(v.i, {}), i ? (0, ee.jsx)(b.f, {
                                    pb: 6,
                                    "data-testid": "share-panel-modal-body",
                                    children: i && X && (0, ee.jsxs)(ee.Fragment, {
                                        children: [F && (0, ee.jsxs)(O.E, {
                                            my: 4,
                                            children: [(0, ee.jsx)(O.U, {
                                                children: (0, ee.jsx)(_.z, {
                                                    leftIcon: (0, ee.jsx)(w.G, {
                                                        icon: d.FK,
                                                        "aria-label": p.ag._({
                                                            id: "NJorPJ"
                                                        })
                                                    }),
                                                    variant: "ghost",
                                                    size: "sm",
                                                    fontWeight: "600",
                                                    bg: "invite" === M ? "trueblue.50" : "transparent",
                                                    color: "invite" === M ? "trueblue.500" : "gray.600",
                                                    onClick: function() {
                                                        return S("invite")
                                                    },
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "NJorPJ"
                                                    })
                                                })
                                            }), (0, ee.jsx)(O.U, {
                                                children: (0, ee.jsx)(_.z, {
                                                    leftIcon: (0, ee.jsx)(w.G, {
                                                        icon: l.Xj,
                                                        "aria-label": p.ag._({
                                                            id: "emf/fd"
                                                        })
                                                    }),
                                                    variant: "ghost",
                                                    size: "sm",
                                                    fontWeight: "600",
                                                    bg: "public" === M ? "trueblue.50" : "transparent",
                                                    color: "public" === M ? "trueblue.500" : "gray.600",
                                                    onClick: function() {
                                                        return S("public")
                                                    },
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "emf/fd"
                                                    })
                                                })
                                            }), (0, ee.jsx)(O.U, {
                                                children: (0, ee.jsx)(_.z, {
                                                    leftIcon: (0, ee.jsx)(w.G, {
                                                        icon: a.fu,
                                                        "aria-label": p.ag._({
                                                            id: "GS+Mus"
                                                        })
                                                    }),
                                                    variant: "ghost",
                                                    size: "sm",
                                                    fontWeight: "600",
                                                    bg: "export" === M ? "trueblue.50" : "transparent",
                                                    color: "export" === M ? "trueblue.500" : "gray.600",
                                                    onClick: function() {
                                                        return S("export")
                                                    },
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "GS+Mus"
                                                    })
                                                })
                                            }), (0, ee.jsx)(O.U, {
                                                children: (0, ee.jsx)(_.z, {
                                                    leftIcon: (0, ee.jsx)(w.G, {
                                                        icon: c.dT,
                                                        "aria-label": p.ag._({
                                                            id: "KKBlUU"
                                                        })
                                                    }),
                                                    variant: "ghost",
                                                    size: "sm",
                                                    fontWeight: "600",
                                                    bg: "embed" === M ? "trueblue.50" : "transparent",
                                                    color: "embed" === M ? "trueblue.500" : "gray.600",
                                                    onClick: function() {
                                                        return S("embed")
                                                    },
                                                    children: (0, ee.jsx)(u.cC, {
                                                        id: "KKBlUU"
                                                    })
                                                })
                                            })]
                                        }), (!F || "invite" == M) && (0, ee.jsx)(nE, {
                                            workspaceId: X,
                                            doc: i,
                                            user: z,
                                            setVerifySearchDone: K,
                                            canManage: F,
                                            isFromOtherOrg: J
                                        }), F && ("public" === M || "embed" === M) && (0, ee.jsx)(nK, {
                                            doc: i,
                                            isSharePublic: "public" == M,
                                            isConnected: Z,
                                            onSharePanelOpen: D,
                                            onSharePanelClose: o,
                                            editor: t
                                        }), F && "export" === M && (0, ee.jsx)(ec, {
                                            doc: i,
                                            editor: t,
                                            onSharePanelOpen: D,
                                            onSharePanelClose: o
                                        })]
                                    })
                                }) : (0, ee.jsx)(b.f, {
                                    pb: 6,
                                    "data-testid": "share-panel-modal-body",
                                    children: (0, ee.jsxs)(C.K, {
                                        children: [(0, ee.jsx)(y.O, {
                                            height: "55px"
                                        }), (0, ee.jsx)(y.O, {
                                            height: "55px"
                                        }), (0, ee.jsx)(y.O, {
                                            height: "55px"
                                        }), (0, ee.jsx)(y.O, {
                                            height: "55px"
                                        })]
                                    })
                                }), (0, ee.jsx)(v.i, {}), (0, ee.jsx)(I.m, {
                                    children: (0, ee.jsxs)(A.k, {
                                        justifyContent: V ? "space-between" : "flex-end",
                                        flex: 1,
                                        children: [V && (0, ee.jsx)(_.z, {
                                            isDisabled: !Z,
                                            leftIcon: (0, ee.jsx)(w.G, {
                                                icon: s.M
                                            }),
                                            variant: "ghost",
                                            onClick: B,
                                            children: (0, ee.jsx)(u.cC, {
                                                id: "YaUqUV"
                                            })
                                        }), (0, ee.jsx)(_.z, {
                                            onClick: function(e) {
                                                e.preventDefault(), $()
                                            },
                                            variant: "solid",
                                            children: (0, ee.jsx)(u.cC, {
                                                id: "DPfwMq"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        62173: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return u
                }
            });
            var t = i(12741),
                r = i(81333),
                o = i(55452),
                s = i(55479),
                c = i(2784),
                a = i(28811),
                l = i(95828),
                d = i(52322),
                u = function() {
                    var e = (0, s.p)(),
                        n = (0, a.yx3)({
                            refetchQueries: ["GetChannelDocActivity", "GetChannels"]
                        }),
                        i = (0, r.Z)(n, 1)[0];
                    return {
                        addDocChannel: (0, c.useCallback)(function(n) {
                            var r = n.docId,
                                s = n.doc,
                                c = n.channel,
                                u = n.existingChannels,
                                p = void 0 === u ? [] : u,
                                x = r || (null == s ? void 0 : s.id);
                            if (!x) {
                                console.error("Invalid docid");
                                return
                            }
                            var f = {
                                    input: {
                                        docId: x,
                                        sharing: [{
                                            op: a.Bdm.Add,
                                            path: "/channels",
                                            value: [{
                                                channelId: c.id
                                            }]
                                        }]
                                    }
                                },
                                h = (null == s ? void 0 : s.title) || l.Yc,
                                j = [].concat((0, t.Z)(p), [{
                                    id: c.id,
                                    slug: c.slug,
                                    name: c.name,
                                    permission: a.y3$.Comment
                                }]).sort(function(e, n) {
                                    return e.slug.localeCompare(n.slug, "en")
                                });
                            i({
                                variables: f,
                                update: function(e, n) {
                                    var i = n.data;
                                    e.writeFragment({
                                        id: "Doc:".concat(x),
                                        fragment: a.IiT,
                                        data: null == i ? void 0 : i.updatePublicChannels
                                    })
                                },
                                optimisticResponse: {
                                    updatePublicChannels: {
                                        id: f.input.docId,
                                        channels: j
                                    }
                                }
                            }).then(function() {
                                e({
                                    title: (0, d.jsx)(o.cC, {
                                        id: "7hDHpt",
                                        values: {
                                            title: h
                                        }
                                    }),
                                    description: (0, d.jsx)(o.cC, {
                                        id: "A2xcFn",
                                        values: {
                                            0: c.name,
                                            GAMMA_ARTIFACT_PROPER_NOUN: l.Yc
                                        }
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            }, function(n) {
                                e({
                                    title: (0, d.jsx)(o.cC, {
                                        id: "bLdU0Q",
                                        values: {
                                            0: c.name,
                                            title: h
                                        }
                                    }),
                                    description: n.message,
                                    duration: null,
                                    status: "error",
                                    isClosable: !0,
                                    position: "top"
                                })
                            })
                        }, [i, e]),
                        removeDocChannel: (0, c.useCallback)(function(n, t) {
                            if (t) {
                                var r, s = {
                                    input: {
                                        docId: n.id,
                                        sharing: [{
                                            op: a.Bdm.Remove,
                                            path: "/channels",
                                            value: [{
                                                channelId: t
                                            }]
                                        }]
                                    }
                                };
                                i({
                                    variables: s,
                                    update: function(e, i) {
                                        var t = i.data;
                                        e.writeFragment({
                                            id: "Doc:".concat(n.id),
                                            fragment: a.P6u,
                                            data: null == t ? void 0 : t.updatePublicChannels
                                        })
                                    },
                                    optimisticResponse: {
                                        updatePublicChannels: {
                                            id: s.input.docId,
                                            channels: null === (r = n.channels) || void 0 === r ? void 0 : r.filter(function(e) {
                                                return e.id !== t
                                            })
                                        }
                                    }
                                }).then(function() {
                                    e({
                                        title: (0, d.jsx)(o.cC, {
                                            id: "qsnpV6",
                                            values: {
                                                GAMMA_ARTIFACT_PROPER_NOUN: l.Yc
                                            }
                                        }),
                                        status: "success",
                                        duration: 1e4,
                                        position: "top"
                                    })
                                }).catch(function(n) {
                                    e({
                                        title: (0, d.jsx)(o.cC, {
                                            id: "+yMzgs"
                                        }),
                                        description: n.message,
                                        status: "error",
                                        duration: 3e3,
                                        isClosable: !0,
                                        position: "top"
                                    }), console.error("[addRemoveDocChannel] Error removing channel:", n.message)
                                })
                            }
                        }, [i, e])
                    }
                }
        },
        5430: function(e, n, i) {
            i.d(n, {
                Gi: function() {
                    return b
                },
                Xp: function() {
                    return O
                },
                h_: function() {
                    return _
                },
                nZ: function() {
                    return w
                },
                qw: function() {
                    return I
                },
                uG: function() {
                    return P
                }
            });
            var t = i(12741),
                r = i(95235),
                o = i(52622),
                s = i(11530),
                c = i(53110),
                a = i(70110),
                l = i(43794),
                d = i(60239),
                u = i(60670),
                p = i(76547),
                x = i(61751),
                f = i(55452),
                h = i(87254),
                j = i(95828),
                m = i(46351),
                g = i(60883),
                v = i(52322),
                b = function(e, n) {
                    var i;
                    return (null == e ? void 0 : null === (i = e.organization) || void 0 === i ? void 0 : i.id) !== (null == n ? void 0 : n.id)
                },
                C = {
                    PRIVATE: "private",
                    LINK_VIEW: "link-view",
                    LINK_COMMENT: "link-comment",
                    LINK_EDIT: "link-edit",
                    INDIVIDUAL: "individual",
                    ORG_VIEW: "org-view",
                    ORG_COMMENT: "org-comment",
                    ORG_EDIT: "org-edit",
                    ORG_MANAGE: "org-manage",
                    CHANNEL_PRIVATE: "channel-private",
                    PUBLIC: "public"
                },
                y = [C.ORG_VIEW, C.ORG_COMMENT, C.ORG_EDIT, C.ORG_MANAGE],
                O = function() {
                    var e;
                    return e = {}, (0, r.Z)(e, C.PRIVATE, {
                        title: function() {
                            return h.ag._({
                                id: "IZiYjM",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        subtitle: function() {
                            return h.ag._({
                                id: "nHujJB",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        primaryIcon: c.by
                    }), (0, r.Z)(e, C.LINK_VIEW, {
                        title: function() {
                            return h.ag._({
                                id: "Pb5t/X",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.LINK_COMMENT, {
                        title: function() {
                            return h.ag._({
                                id: "FUtIA5",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.LINK_EDIT, {
                        title: function() {
                            return h.ag._({
                                id: "tNOSZi",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.INDIVIDUAL, {
                        title: function() {
                            return h.ag._({
                                id: "IB6oAl",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        subtitle: function(e) {
                            return "".concat(e, " can access this ").concat(j.Yc, ".")
                        },
                        primaryIcon: s.IL
                    }), (0, r.Z)(e, C.ORG_VIEW, {
                        title: function(e) {
                            return h.ag._({
                                id: "S+losC",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: p.Md
                    }), (0, r.Z)(e, C.ORG_COMMENT, {
                        title: function(e) {
                            return h.ag._({
                                id: "acq2w5",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: u.Mz
                    }), (0, r.Z)(e, C.ORG_EDIT, {
                        title: function(e) {
                            return h.ag._({
                                id: "FFdz7p",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: d.Tz
                    }), (0, r.Z)(e, C.ORG_MANAGE, {
                        title: function(e) {
                            return h.ag._({
                                id: "3yNlmN",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8
                    }), (0, r.Z)(e, C.CHANNEL_PRIVATE, {
                        title: function() {
                            return h.ag._({
                                id: "Tw6Jzi"
                            })
                        },
                        primaryIcon: m.Ty
                    }), (0, r.Z)(e, C.PUBLIC, {
                        title: function() {
                            return h.ag._({
                                id: "NMHF69",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                                }
                            })
                        },
                        primaryIcon: a.Xj
                    }), e
                },
                _ = function(e, n) {
                    var i;
                    return e ? null != e && e.publicAccess ? C.PUBLIC : (null == e ? void 0 : e.orgAccess) === "manage" ? C.ORG_MANAGE : (null == e ? void 0 : e.orgAccess) === "edit" ? C.ORG_EDIT : (null == e ? void 0 : e.orgAccess) === "comment" ? C.ORG_COMMENT : (null == e ? void 0 : e.orgAccess) === "view" ? C.ORG_VIEW : null != e && e.channels && e.channels.some(function(e) {
                        return null !== e.permission
                    }) ? C.CHANNEL_PRIVATE : null != e && e.collaborators && (null == e ? void 0 : null === (i = e.collaborators) || void 0 === i ? void 0 : i.length) > 1 ? C.INDIVIDUAL : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "view" === e.permission && "" === e.token
                    }) ? C.LINK_VIEW : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "comment" === e.permission && "" === e.token
                    }) ? C.LINK_COMMENT : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "edit" === e.permission && "" === e.token
                    }) ? C.LINK_EDIT : P(e, n) ? C.PRIVATE : C.INDIVIDUAL : null
                },
                I = function(e) {
                    return null != e && e.publicAccess ? h.ag._({
                        id: "gJUdlS",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                        }
                    }) : null != e && e.orgAccess ? h.ag._({
                        id: "5Ma3Lv",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                        }
                    }) : h.ag._({
                        id: "QbKKqw",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: j.Yc
                        }
                    })
                },
                A = function(e, n, i) {
                    if (!n) return [];
                    var r, d, u = (null == e ? void 0 : null === (r = e.channels) || void 0 === r ? void 0 : r.map(function(e) {
                            var n = e.id,
                                i = e.name,
                                t = e.slug;
                            return {
                                id: n,
                                label: i,
                                href: (0, g.j)({
                                    id: n,
                                    slug: t
                                }),
                                icon: m.Ty
                            }
                        })) || [],
                        p = _(e, n),
                        x = b(e, i),
                        h = x ? [{
                            id: "shared-from-external-org",
                            label: null != e && null !== (d = e.organization) && void 0 !== d && d.name ? (0, v.jsx)(f.cC, {
                                id: "lFZJ+N",
                                values: {
                                    0: e.organization.name
                                }
                            }) : (0, v.jsx)(f.cC, {
                                id: "qn35Ez"
                            }),
                            icon: l.Gg,
                            color: "gray.500"
                        }] : [];
                    if (p === C.PUBLIC) return [{
                        id: "public",
                        label: (0, v.jsx)(f.cC, {
                            id: "7d1a0d"
                        }),
                        icon: a.Xj,
                        color: "gray.500"
                    }].concat(h, (0, t.Z)(u));
                    if (p === C.PRIVATE) return [{
                        id: "private",
                        label: (0, v.jsx)(f.cC, {
                            id: "zwBp5t"
                        }),
                        icon: c.by,
                        color: "gray.500"
                    }].concat(h);
                    if (p === C.INDIVIDUAL) {
                        var j = (e.collaborators || []).filter(function(e) {
                            return e.user.id !== n.id
                        }).length;
                        return [{
                            id: "collaborators",
                            label: (0, v.jsx)(f.cC, {
                                id: "o2NxSP",
                                values: {
                                    numCollaborators: j
                                }
                            }),
                            icon: s.IL,
                            color: "gray.500"
                        }].concat(h)
                    }
                    return x ? h : p && y.includes(p) ? [{
                        id: "workspace",
                        label: (0, v.jsx)(f.cC, {
                            id: "0Gd0NU"
                        }),
                        icon: o.P8,
                        color: "gray.500"
                    }].concat(h, (0, t.Z)(u)) : u
                },
                w = function(e) {
                    var n = e.doc,
                        i = e.user,
                        t = e.currentWorkspace,
                        r = e.channelToExclude;
                    return A(n, i, t).filter(function(e) {
                        return e.id !== r
                    })
                },
                P = function(e, n) {
                    var i;
                    return e && n && !e.orgAccess && !e.publicAccess && (null === (i = e.createdBy) || void 0 === i ? void 0 : i.id) === n.id
                }
        }
    }
]);
//# sourceMappingURL=867-2a507837be45a62f.js.map