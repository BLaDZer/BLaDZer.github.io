"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9095], {
        74044: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return A
                },
                h: function() {
                    return M
                }
            });
            var r = n(81333),
                i = n(31145),
                o = n(11919),
                a = n(94659),
                c = n(91012),
                s = n(45650),
                l = n(97907),
                u = n(49929),
                d = n(61528),
                p = n(33932),
                g = n(15767),
                f = n(78739),
                m = n(36479),
                h = n(55452);
            n(2784);
            var x = n(95828),
                b = n(84103),
                v = n(31807),
                j = n(64173),
                y = n(3002),
                w = n(36188),
                O = n(5945),
                P = n(89727),
                C = n(75407),
                k = n(73439),
                S = n(52322),
                _ = n(97526),
                I = n(25232),
                D = [{
                    Component: function() {
                        var e = (0, I.ye)("outageButterbar");
                        if (!e.enabled) return null;
                        var t = e.header,
                            n = e.text,
                            r = e.buttonLink,
                            i = e.buttonText,
                            o = e.key;
                        return (0, S.jsx)(M, {
                            definition: {
                                key: o,
                                header: t,
                                text: n,
                                buttonText: i,
                                buttonLink: r
                            }
                        })
                    },
                    key: "outage-butterbar"
                }, {
                    Component: function() {
                        var e, t, n, r = (0, O.SE)().user,
                            i = (0, P.zc)(),
                            o = i.subscription,
                            a = i.product;
                        if (!o || !a) return null;
                        var c = (0, C.K)()[a],
                            s = c.name,
                            l = c.dontChurnMessage,
                            u = o.status,
                            d = o.expirationTime,
                            p = o.id,
                            g = (0, y.p6)(d, "MMMM do, yyyy"),
                            f = (null == o ? void 0 : null === (e = o.createdByUser) || void 0 === e ? void 0 : e.id) === (null == r ? void 0 : r.id) ? (0, k._8)(null == r ? void 0 : r.email) : void 0,
                            m = d > Date.now();
                        if (!("unpaid" === u || "past_due" === u) && !m) return null;
                        var v = f ? (0, S.jsx)(h.cC, {
                            id: "velw1T",
                            values: {
                                expirationFormatted: g,
                                GAMMA_PROPER_NOUN: x.N6,
                                productName: s
                            },
                            components: {
                                0: (0, S.jsx)(b.r, {
                                    href: f,
                                    isExternal: !0,
                                    textDecoration: "underline"
                                })
                            }
                        }) : (0, S.jsx)(h.cC, {
                            id: "9aBOfk",
                            values: {
                                0: null === (t = o.createdByUser) || void 0 === t ? void 0 : t.displayName,
                                1: null === (n = o.createdByUser) || void 0 === n ? void 0 : n.email,
                                expirationFormatted: g,
                                GAMMA_PROPER_NOUN: x.N6,
                                productName: s
                            },
                            components: {
                                0: (0, S.jsx)("b", {}),
                                1: (0, S.jsx)("b", {})
                            }
                        });
                        return (0, S.jsx)(M, {
                            definition: {
                                key: "payment-overdue-".concat(p),
                                header: (0, S.jsx)(h.cC, {
                                    id: "gosJne",
                                    values: {
                                        productName: s
                                    }
                                }),
                                text: (0, S.jsxs)(S.Fragment, {
                                    children: [l, " ", v]
                                }),
                                buttonText: (0, S.jsx)(h.cC, {
                                    id: "WLvqZR"
                                }),
                                buttonLink: f
                            }
                        })
                    },
                    key: "payment-overdue-butterbar"
                }, {
                    Component: function() {
                        var e = (0, P.zc)(),
                            t = e.subscription,
                            n = e.openUpsellModal;
                        if (!t) return null;
                        var r = t.status,
                            i = t.expirationTime,
                            o = t.id;
                        if (!(new Date > (0, v.Z)(i) && new Date < (0, j.Z)((0, v.Z)(i), {
                                days: 10
                            }))) return null;
                        var a = function() {
                                return n({
                                    segmentEvent: w.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_EXPIRED_BUTTERBAR
                                })
                            },
                            c = (0, S.jsx)(b.r, {
                                onClick: a,
                                isExternal: !0,
                                textDecoration: "underline",
                                children: (0, S.jsx)(h.cC, {
                                    id: "mj68q/"
                                })
                            });
                        return (0, S.jsx)(M, {
                            definition: {
                                key: "subscription-expired-".concat(o),
                                header: (0, S.jsx)(h.cC, {
                                    id: "5nhH6A"
                                }),
                                text: (0, S.jsxs)(S.Fragment, {
                                    children: ["unpaid" === r || "past_due" === r ? (0, S.jsx)(h.cC, {
                                        id: "QdgXJv"
                                    }) : "", " ", c]
                                }),
                                buttonText: (0, S.jsx)(h.cC, {
                                    id: "kwkhPe"
                                }),
                                buttonOnClick: a
                            }
                        })
                    },
                    key: "subscription-expired-butterbar"
                }, {
                    key: "tablet-browser-warning",
                    header: (0, S.jsx)(h.cC, {
                        id: "JAtlMu",
                        values: {
                            GAMMA_PROPER_NOUN: x.N6
                        }
                    }),
                    text: (0, S.jsx)(h.cC, {
                        id: "9JlCFS",
                        values: {
                            GAMMA_PROPER_NOUN: x.N6
                        }
                    }),
                    conditions: function() {
                        return (0, d.dA)()
                    },
                    dismissKey: _.H.lastDismissedPreferredBrowserMessage
                }, {
                    key: "desktop-browser-warning",
                    header: (0, S.jsx)(h.cC, {
                        id: "3S0+Wy",
                        values: {
                            GAMMA_PROPER_NOUN: x.N6
                        }
                    }),
                    text: (0, S.jsx)(h.cC, {
                        id: "Tf7VpJ"
                    }),
                    conditions: function() {
                        return E() && (0, d.ds)()
                    },
                    dismissKey: _.H.lastDismissedPreferredBrowserMessage
                }],
                E = function() {
                    return (0, d.jP)() || !(0, d.i7)() && !(0, d.G6)() && !(0, d.NA)()
                },
                A = function(e) {
                    var t = e.isViewOnly,
                        n = (0, g.gF)();
                    if (t || !n || (0, d.l6)() || p.cx || (0, m.sj)()) return null;
                    var r = D.map(function(e) {
                        return "Component" in e ? (0, S.jsx)(e.Component, {}, e.key) : (0, S.jsx)(M, {
                            definition: e
                        }, e.key)
                    });
                    return (0, S.jsx)(o.k, {
                        "data-testid": "butterbar",
                        direction: "column",
                        flex: 1,
                        top: 0,
                        pos: "relative",
                        zIndex: "banner",
                        sx: {
                            "> *:not(:first-child)": {
                                display: "none"
                            }
                        },
                        children: r
                    })
                },
                M = function(e) {
                    var t = e.definition,
                        n = t.key,
                        d = t.dismissKey,
                        p = t.header,
                        g = t.text,
                        m = t.buttonText,
                        h = t.buttonLink,
                        x = t.buttonOnClick,
                        b = void 0 === x ? h ? function() {
                            return window.open(h, "_blank")
                        } : void 0 : x,
                        v = t.conditions,
                        j = (0, f._)(void 0 === d ? "butterbar-dismiss-".concat(n) : d, !1),
                        y = (0, r.Z)(j, 2),
                        w = y[0],
                        O = y[1];
                    return v && !v() || w ? null : (0, S.jsxs)(o.k, {
                        direction: "row",
                        bg: "indigo.500",
                        color: "white",
                        py: 3,
                        px: 4,
                        align: "center",
                        fontSize: "sm",
                        children: [(0, S.jsxs)(a.g, {
                            flex: "1",
                            align: "start",
                            spacing: 0,
                            children: [(0, S.jsx)(c.x, {
                                fontWeight: "bold",
                                children: p
                            }), (0, S.jsx)(c.x, {
                                opacity: "0.7",
                                fontSize: "xs",
                                children: g
                            })]
                        }), m && b && (0, S.jsx)(s.z, {
                            variant: "plain",
                            size: "sm",
                            mr: 4,
                            rightIcon: h ? (0, S.jsx)(u.G, {
                                icon: i.faArrowUpRightFromSquare
                            }) : void 0,
                            onClick: b,
                            children: m
                        }), (0, S.jsx)(l.P, {
                            onClick: function() {
                                O(String(new Date))
                            }
                        })]
                    })
                }
        },
        69403: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            });
            var r = n(95235),
                i = n(11919),
                o = n(74044),
                a = n(52322);

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
            var s = function(e) {
                var t = e.children,
                    n = e.withFooter,
                    r = e.isViewOnly;
                return (0, a.jsxs)(i.k, {
                    direction: "column",
                    width: "100%",
                    height: "100%",
                    minHeight: "var(--100vh)",
                    bgColor: "gray.100",
                    color: "gray.800",
                    children: [(0, a.jsx)(o.r, {
                        isViewOnly: r
                    }), (0, a.jsx)(i.k, {
                        zIndex: "1",
                        id: "main",
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center",
                        direction: "column",
                        position: "relative",
                        children: t
                    }), n && (0, a.jsxs)(i.k, {
                        fontSize: "12px",
                        color: "gray.400",
                        pb: 8,
                        id: "footer",
                        justifyContent: "center",
                        children: ["\xa9 ", new Date().getFullYear(), " Gamma Tech, Inc."]
                    })]
                })
            };

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        withFooter: !1,
                        isViewOnly: !1
                    },
                    n = t.withFooter,
                    i = t.isViewOnly,
                    o = function(t) {
                        return (0, a.jsx)(s, {
                            withFooter: n,
                            isViewOnly: i,
                            children: (0, a.jsx)(e, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                                        (0, r.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, t))
                        })
                    };
                return "getInitialProps" in e && (o.getInitialProps = e.getInitialProps), o
            }
        },
        99095: function(e, t, n) {
            n.d(t, {
                oO: function() {
                    return r.o
                },
                wI: function() {
                    return d
                },
                GE: function() {
                    return _
                }
            });
            var r = n(69403),
                i = n(95235),
                o = n(11919),
                a = n(28165),
                c = n(74044),
                s = n(52322);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var u = function(e) {
                var t = e.children;
                return (0, s.jsxs)(o.k, {
                    width: "100%",
                    height: "100%",
                    direction: "column",
                    minHeight: "var(--100vh)",
                    bgColor: "gray.100",
                    color: "gray.800",
                    p: 0,
                    children: [(0, s.jsx)(a.Global, {
                        styles: {
                            body: {
                                overflowY: "scroll"
                            }
                        }
                    }), (0, s.jsx)(c.r, {}), t]
                })
            };

            function d(e) {
                var t = function(t) {
                    return (0, s.jsx)(u, {
                        children: (0, s.jsx)(e, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? l(Object(n), !0).forEach(function(t) {
                                    (0, i.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, t))
                    })
                };
                return "getInitialProps" in e && (t.getInitialProps = e.getInitialProps), t
            }
            var p = n(95668),
                g = n(5632),
                f = n(45847),
                m = n.n(f),
                h = n(2784),
                x = n(88914),
                b = n(57131),
                v = n(65312),
                j = n(54344),
                y = n(99625),
                w = n(84700),
                O = n(61528);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var C = x.v.IS_CLIENT_SIDE && document.cookie.includes("gammaGADebug=true"),
                k = function() {
                    return "production" === x.v.APPLICATION_ENVIRONMENT && !(0, O.l6)() || C
                },
                S = function(e) {
                    var t = e.children,
                        n = e.headerMode,
                        r = (0, g.useRouter)();
                    return (0, h.useEffect)(function() {
                        if (k()) {
                            var e = function(e) {
                                (0, y.o8)(e)
                            };
                            return r.events.on("routeChangeComplete", e), r.events.on("hashChangeComplete", e),
                                function() {
                                    r.events.off("routeChangeComplete", e), r.events.off("hashChangeComplete", e)
                                }
                        }
                    }, [r.events]), (0, s.jsxs)(o.k, {
                        direction: "column",
                        width: "100%",
                        height: "100%",
                        minHeight: "var(--100vh)",
                        bg: "#EDE9E8",
                        color: "gray.800",
                        overflowX: "hidden",
                        children: [k() && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(m(), {
                                strategy: "afterInteractive",
                                src: "https://www.googletagmanager.com/gtag/js?id=".concat(y.vt)
                            }), (0, s.jsx)(m(), {
                                id: "gtag-init",
                                strategy: "afterInteractive",
                                dangerouslySetInnerHTML: {
                                    __html: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(y.vt, "', {\n                page_path: window.location.pathname,\n              });\n            ")
                                }
                            })]
                        }), (0, s.jsx)(v.P, {
                            headerMode: n
                        }), (0, s.jsx)(o.k, {
                            zIndex: "1",
                            id: "main",
                            flex: "1",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            direction: "column",
                            position: "relative",
                            children: t
                        }), (0, s.jsx)(b.Y, {})]
                    })
                };

            function _(e, t) {
                var n = function(n) {
                    var r = (t || {}).headerMode;
                    return (0, s.jsxs)(p.f6, {
                        theme: j.i,
                        children: [(0, s.jsx)(w.ZP, {}), (0, s.jsx)(S, {
                            headerMode: r,
                            children: (0, s.jsx)(e, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? P(Object(n), !0).forEach(function(t) {
                                        (0, i.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, n))
                        })]
                    })
                };
                return "getInitialProps" in e && (n.getInitialProps = e.getInitialProps), n
            }
        },
        3002: function(e, t, n) {
            n.d(t, {
                Dw: function() {
                    return j
                },
                Km: function() {
                    return v
                },
                dN: function() {
                    return x
                },
                p6: function() {
                    return b
                }
            });
            var r = n(87254),
                i = n(82282),
                o = n(31807),
                a = n(96740),
                c = n(32361),
                s = n(57907),
                l = n(21346),
                u = n(48053),
                d = n(1363),
                p = n(49738),
                g = n(90535),
                f = n(9283),
                m = n(75528),
                h = {
                    en: s.Z,
                    "pt-br": l.Z,
                    ja: u.Z,
                    "zh-cn": d.Z,
                    "zh-tw": p.Z,
                    es: g.Z,
                    fr: f.Z,
                    ko: m.Z
                },
                x = function() {
                    return h[r.ag.locale] || void 0
                },
                b = function(e, t) {
                    return e ? (0, i.Z)((0, o.Z)(e), t, {
                        locale: x()
                    }) : ""
                },
                v = function(e, t) {
                    return e ? (0, a.Z)((0, o.Z)(e), t ? (0, o.Z)(t) : new Date, {
                        locale: x()
                    }) : ""
                },
                j = function(e) {
                    return e ? (0, c.Z)((0, o.Z)(e), {
                        locale: x()
                    }) : ""
                }
        },
        57131: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return v
                }
            });
            var r = n(11919),
                i = n(56133),
                o = n(71354),
                a = n(5766),
                c = n(53738),
                s = n(84103),
                l = n(36895),
                u = n(50390),
                d = n(35837),
                p = n(27302),
                g = n(2784),
                f = n(43997),
                m = n(84651),
                h = n(19310),
                x = n(17286),
                b = n(52322),
                v = function() {
                    var e, t = (0, f.I0)(),
                        n = (e = (0, g.useCallback)(function() {
                            (0, m.pU)(), t((0, h.YZ)({
                                isOpen: !0
                            }))
                        }, [t]), [{
                            category: "Product",
                            items: [{
                                text: "Help",
                                url: x.mc.help
                            }, {
                                text: "Change log",
                                url: x.mc.changeLog
                            }, {
                                text: "Pricing",
                                url: x.mc.pricing
                            }, {
                                text: "Templates",
                                url: x.mc.templates
                            }, {
                                text: "Inspiration",
                                url: x.mc.inspiration
                            }, {
                                text: "Contact us",
                                onClick: e
                            }]
                        }, {
                            category: "Company",
                            items: [{
                                text: "Team",
                                url: x.mc.team
                            }, {
                                text: "Terms of Service",
                                url: x.mc.terms
                            }, {
                                text: "Privacy Policy",
                                url: x.mc.privacy
                            }]
                        }, {
                            category: "Follow us",
                            items: [{
                                text: "Twitter",
                                url: "https://twitter.com/meetgamma"
                            }, {
                                text: "Instagram",
                                url: "https://www.instagram.com/meetgamma/"
                            }, {
                                text: "LinkedIn",
                                url: "https://www.linkedin.com/company/gamma-app/"
                            }, {
                                text: "TikTok",
                                url: "https://www.tiktok.com/@meetgamma"
                            }]
                        }]);
                    return (0, b.jsx)(r.k, {
                        fontSize: "12px",
                        bgColor: "#1d0042",
                        color: "gray.400",
                        py: 20,
                        id: "footer",
                        justifyContent: "center",
                        children: (0, b.jsx)(i.W, {
                            maxW: "940px",
                            children: (0, b.jsxs)(o.K, {
                                children: [(0, b.jsxs)(a.M, {
                                    columns: 4,
                                    spacing: 6,
                                    mb: 10,
                                    minChildWidth: "200px",
                                    children: [(0, b.jsx)(c.xu, {
                                        w: "100%",
                                        children: (0, b.jsx)(s.r, {
                                            href: "/",
                                            children: (0, b.jsx)(l.E, {
                                                src: "https://assets.website-files.com/60de2701a7b28f308f619d3d/60de2701a7b28ff7e9619d49_White%20Logo%20g%20spot.svg",
                                                loading: "lazy",
                                                width: "120px",
                                                alt: "Gamma logo"
                                            })
                                        })
                                    }), n.map(function(e, t) {
                                        var n = e.category,
                                            r = e.items;
                                        return (0, b.jsxs)(c.xu, {
                                            w: "100%",
                                            children: [(0, b.jsx)(u.X, {
                                                marginBottom: "25px",
                                                color: "rgba(239, 208, 255, 0.7)",
                                                fontWeight: "bold",
                                                fontSize: "14px",
                                                fontFamily: "var(--body-font)",
                                                letterSpacing: "normal",
                                                children: n
                                            }), (0, b.jsx)(d.QI, {
                                                listStyleType: "none",
                                                margin: 0,
                                                children: r.map(function(e, t) {
                                                    var n = e.text,
                                                        r = e.url,
                                                        i = e.onClick;
                                                    return (0, b.jsx)(d.HC, {
                                                        fontSize: "14px",
                                                        pb: 4,
                                                        children: (0, b.jsx)(s.r, {
                                                            color: "hsla(0, 0%, 100%, 0.86)",
                                                            href: r || void 0,
                                                            onClick: i || void 0,
                                                            children: n
                                                        })
                                                    }, t)
                                                })
                                            })]
                                        }, t)
                                    })]
                                }), (0, b.jsxs)(p.M, {
                                    color: "rgba(239, 208, 255, 0.7)",
                                    fontSize: "13px",
                                    children: ["\xa9 ", new Date().getFullYear(), " Gamma Tech, Inc."]
                                })]
                            })
                        })
                    })
                }
        },
        65312: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return f
                }
            });
            var r = n(53738),
                i = n(71354),
                o = n(84103),
                a = n(36895),
                c = n(93319),
                s = n(45650),
                l = n(5945),
                u = {
                    src: "/_next/static/media/gamma-logo-white.9613e68b.svg"
                },
                d = n(17286),
                p = n(52322),
                g = [{
                    text: "Pricing",
                    url: d.mc.pricing,
                    hideWhenSmall: !0
                }, {
                    text: "Templates",
                    url: d.mc.templates,
                    hideWhenSmall: !0
                }, {
                    text: "Login",
                    url: d.mc.login
                }],
                f = function(e) {
                    var t = e.headerMode,
                        n = (0, l.SE)(),
                        f = n.user,
                        m = n.isUserLoading,
                        h = "light" === (void 0 === t ? "light" : t);
                    return (0, p.jsx)(r.xu, {
                        py: 4,
                        px: [6, 6, 12],
                        h: d.AP,
                        pr: [4, 6, 12],
                        zIndex: "999",
                        top: ["auto", "auto", "0"],
                        children: (0, p.jsxs)(i.K, {
                            direction: "row",
                            children: [(0, p.jsx)(o.r, {
                                href: "/",
                                "aria-current": "page",
                                children: (0, p.jsx)(a.E, {
                                    w: "100px",
                                    src: h ? "https://assets.website-files.com/62e823626cd4fdd0e5dc1527/62e823626cd4fdc26bdc1576_Gamma.svg" : u.src,
                                    loading: "lazy",
                                    alt: "Gamma logo"
                                })
                            }), (0, p.jsx)(c.L, {}), !m && !f && (0, p.jsxs)(i.K, {
                                direction: "row",
                                spacing: [4, 4, 8],
                                fontWeight: "500",
                                fontSize: "14px",
                                color: h ? "#3b3a40" : "#fff",
                                alignItems: "center",
                                transition: "color 300ms ease",
                                children: [g.map(function(e) {
                                    var t = e.text,
                                        n = e.url,
                                        r = e.hideWhenSmall;
                                    return (0, p.jsx)(o.r, {
                                        display: r ? ["none", "none", "block"] : "block",
                                        href: n,
                                        color: h ? void 0 : "whiteAlpha.800",
                                        _hover: {
                                            color: h ? "#000" : "whiteAlpha.900",
                                            textDecoration: "none"
                                        },
                                        children: t
                                    }, t)
                                }), (0, p.jsx)(s.z, {
                                    as: o.r,
                                    href: d.mc.signup,
                                    maxHeight: "32px",
                                    borderStyle: "solid",
                                    borderWidth: "0.5px",
                                    fontSize: "14px",
                                    borderColor: "rgba(0, 0, 0, 0.24)",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 4px 4px 0 rgb(0 0 0 / 5%)",
                                    fontWeight: "700",
                                    borderRadius: "100px",
                                    color: "#3b3a40",
                                    _hover: {
                                        color: "black",
                                        textDecoration: "none"
                                    },
                                    children: "Try for free"
                                })]
                            })]
                        })
                    })
                }
        },
        17286: function(e, t, n) {
            n.d(t, {
                AP: function() {
                    return i
                },
                mc: function() {
                    return r
                }
            });
            var r = {
                    pricing: "/pricing",
                    help: "https://help.gamma.app",
                    changeLog: "https://gamma.app/public/Change-Log-awopg3inl2eo3b3",
                    team: "https://gamma.app/public/Meet-the-Team-at-Gamma-nbqgqy05eyfcsbi",
                    terms: "https://gamma.app/terms",
                    privacy: "https://gamma.app/privacy",
                    login: "/signin",
                    signup: "/signup",
                    templates: "/templates",
                    inspiration: "/inspiration"
                },
                i = 16
        },
        54344: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return c
                }
            });
            var r = n(14446),
                i = n(45989),
                o = n(97261),
                a = {
                    colors: o.qZ.colors,
                    zIndices: {
                        tooltip: 5600,
                        modal: 1800,
                        dropdown: 1600
                    },
                    fonts: {
                        body: "'Eudoxus Sans', sans-serif",
                        heading: "'p22-mackinac-pro', sans-serif"
                    },
                    fontSizes: {
                        xxs: "11px"
                    },
                    components: {
                        Link: {
                            baseStyle: {
                                textDecoration: "none"
                            }
                        },
                        Button: {
                            variants: {
                                fancy: {
                                    color: "white",
                                    borderRadius: "full",
                                    background: "linear-gradient(180deg, #6850FF 0%, rgba(38, 59, 227, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(272.9deg, #003DD9 0.18%, #6850FF 109.19%, #DF7A6C 188.8%)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    _hover: {
                                        background: "linear-gradient(180deg, #3A24C2 0%, rgba(38, 59, 227, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(272.9deg, #002C9D 0.18%, #6850FF 109.19%, #DF7A6C 188.8%, #A56057 224.56%)"
                                    },
                                    _active: {
                                        boxShadow: "inset 1px 1px 5px rgb(0 0 0 / 50%)",
                                        background: "linear-gradient(180deg, #3A24C2 0%, rgba(38, 59, 227, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(272.9deg, #002C9D 0.18%, #6850FF 109.19%, #DF7A6C 188.8%, #A56057 224.56%)"
                                    },
                                    textDecoration: "none !important"
                                }
                            }
                        },
                        Heading: {
                            baseStyle: {
                                letterSpacing: "-0.04em"
                            },
                            variants: {
                                fancy: {
                                    backgroundImage: o.qZ.colors.gradient["blue-to-purple"],
                                    backgroundClip: "text",
                                    color: "transparent"
                                }
                            }
                        }
                    }
                },
                c = (0, r.B1)(a, (0, i.A)({
                    colorScheme: "trueblue"
                }))
        },
        99625: function(e, t, n) {
            n.d(t, {
                o8: function() {
                    return i
                },
                vt: function() {
                    return r
                }
            });
            var r = n(88914).v.NEXT_PUBLIC_GA_ID,
                i = function(e) {
                    var t, n;
                    null === (t = (n = window).gtag) || void 0 === t || t.call(n, "config", r, {
                        page_path: e
                    })
                }
        },
        33932: function(e, t, n) {
            n.d(t, {
                Oj: function() {
                    return a
                },
                Pv: function() {
                    return o
                },
                QX: function() {
                    return i
                },
                cx: function() {
                    return r
                }
            });
            var r = n(88914).v.GAMMA_PUPPETEER_SERVICE,
                i = r && "pptx" === window.format,
                o = r && "pdf" === window.format,
                a = r && "screenshot" === window.format
        }
    }
]);
//# sourceMappingURL=9095-35c79d778f41e0c0.js.map