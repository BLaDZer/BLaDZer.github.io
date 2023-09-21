"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6407], {
        65618: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return f
                }
            });
            var r = n(20406),
                i = n(28526),
                o = n.n(i),
                s = n(2784),
                a = n(28811),
                c = n(36157),
                l = n(57560),
                d = n(17349),
                u = n(48842),
                f = function() {
                    var e, t = (0, u._)().editor,
                        n = null == t ? void 0 : t.gammaDocId,
                        i = (0, l.vi)({
                            docId: n,
                            editor: t
                        }).updateDocThemeWithAccentImages,
                        f = (0, c.CG)(d.F_),
                        p = (0, s.useCallback)(function(e) {
                            return f === e
                        }, [f]),
                        h = (0, a.WQq)();
                    return {
                        setThemeWithAccentImages: i,
                        isThemeApplied: p,
                        currentThemeId: f,
                        isValidTheme: (0, s.useCallback)((e = (0, r.Z)(o().mark(function e(t) {
                            var n;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, h.query({
                                            query: a.vGj,
                                            variables: {
                                                id: t
                                            },
                                            returnPartialData: !1
                                        });
                                    case 3:
                                        return n = e.sent.data, e.abrupt("return", (null == n ? void 0 : n.theme) !== null);
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(0), console.warn("[useThemeModificationController.isValidTheme] Error checking if theme is valid", e.t0), e.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 8]
                            ])
                        })), function(t) {
                            return e.apply(this, arguments)
                        }), [h])
                    }
                }
        },
        75213: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return i
                },
                V: function() {
                    return o
                }
            });
            var r = n(75851),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t ? e || "Untitled" : e ? "".concat(e, " | Gamma") : "Gamma"
                },
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e || (t ? "" : r.D)
                }
        },
        7954: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return g
                }
            });
            var r = n(96412),
                i = n(13089),
                o = n(41701),
                s = n(90129),
                a = n(29017),
                c = n(48200),
                l = n(95235),
                d = n(30733),
                u = n.n(d),
                f = n(12436),
                p = n.n(f),
                h = n(2784),
                m = function(e) {
                    (0, s.Z)(d, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, c.Z)(d);
                        if (t) {
                            var r = (0, c.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, a.Z)(this, e)
                    });

                    function d() {
                        var e;
                        return (0, r.Z)(this, d), e = n.call(this), (0, l.Z)((0, o.Z)(e), "throttled", void 0), e.throttled = p()(function(t) {
                            e.emit("move", t)
                        }, 200, {
                            leading: !0
                        }), document.addEventListener("mousemove", e.throttled), e
                    }
                    return (0, i.Z)(d, [{
                        key: "cleanup",
                        value: function() {
                            document.removeEventListener("mousemove", this.throttled)
                        }
                    }]), d
                }(n(37438).v),
                x = u()(function() {
                    return new m
                }),
                g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = x(),
                        r = (0, h.useState)(!1),
                        i = r[0],
                        o = r[1],
                        s = (0, h.useRef)(t);
                    return (0, h.useEffect)(function() {
                        s.current = t
                    }, [t]), (0, h.useEffect)(function() {
                        return n.on("move", function(t) {
                            s.current || o(e(t))
                        })
                    }, [n, e]), i
                }
        },
        38797: function(e, t, n) {
            n.d(t, {
                Av: function() {
                    return I
                },
                U8: function() {
                    return k
                }
            });
            var r = n(95235),
                i = n(393),
                o = n(11919),
                s = n(2784),
                a = n(43997),
                c = n(2104),
                l = n(36157),
                d = n(3360),
                u = n(70957),
                f = n(53738),
                p = n(12436),
                h = n.n(p),
                m = n(3588),
                x = n(52322);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var j = function(e) {
                    var t = e.setWidth,
                        n = e.width,
                        r = e.position,
                        i = e.onClose,
                        a = e.panelRef,
                        l = e.initialWidth,
                        d = e.isDragging,
                        u = e.setIsDragging,
                        p = (0, s.useMemo)(function() {
                            return (0, m.n)()
                        }, []) > 0 && "right" === r,
                        g = (0, s.useState)(n),
                        j = g[0],
                        b = g[1],
                        y = (0, s.useState)(null),
                        C = y[0],
                        w = y[1],
                        O = h()(function(e) {
                            var t, n = Math.min(Math.max(t = "left" === r ? e.clientX : -((e.clientX - C) * 1) + j, c.pn), c.ZQ);
                            t <= c.Nh ? (a.current.style.transitionProperty = "width", a.current.style.transitionDuration = "var(--chakra-transition-duration-normal)", n = 0) : n > c.pn && (a.current.style.transitionProperty = "", a.current.style.transitionDuration = ""), a.current.style.width = "".concat(n, "px")
                        }, 30),
                        k = function e() {
                            u(!1), w(null);
                            var n = a.current.style.width;
                            "0px" === n ? (i(), t(l)) : t(parseInt(n.replace("px", ""), 10)), a.current.style.transitionProperty = "", a.current.style.transitionDuration = "", window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", e)
                        };
                    (0, s.useEffect)(function() {
                        return C && (window.addEventListener("mousemove", O), window.addEventListener("mouseup", k)),
                            function() {
                                window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", k)
                            }
                    }, [C]);
                    var I = {};
                    return I = "left" === r ? {
                        right: -4,
                        position: "absolute"
                    } : p ? {
                        position: "relative"
                    } : {
                        left: -4,
                        position: "absolute"
                    }, (0, x.jsx)(o.k, v(v({
                        h: "100%",
                        bg: p ? "gray.200" : d ? "blackAlpha.200" : "rgba(0,0,0,0)",
                        w: p ? 2 : 4,
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "col-resize",
                        _hover: {
                            bg: p ? "gray.400" : "blackAlpha.200"
                        },
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        role: "group",
                        onMouseDown: function(e) {
                            e.preventDefault(), u(!0), w(e.clientX), b(n)
                        },
                        position: "absolute",
                        display: ["none", "none", "none", "flex"]
                    }, I), {}, {
                        children: !p && (0, x.jsx)(f.xu, {
                            bg: "white",
                            borderRadius: "full",
                            w: 1,
                            h: 10,
                            opacity: d ? 1 : ".5",
                            transitionProperty: "common",
                            transitionDuration: "normal",
                            _groupHover: {
                                opacity: 1
                            }
                        })
                    }))
                },
                b = n(40723);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var w = {
                    ifPanelHasRoomToOpen: function(e, t) {
                        return {
                            base: t,
                            xl: e
                        }
                    }
                },
                O = function(e) {
                    var t, n = e.position,
                        f = e.panelLifecycle,
                        p = (0, s.useRef)(),
                        h = (0, s.useState)(!1),
                        m = h[0],
                        g = h[1],
                        v = (0, a.I0)(),
                        y = (0, l.CG)((0, b.SL)(n)),
                        O = (0, l.CG)((0, b.Fw)(n)),
                        k = (0, l.CG)((0, b.CO)(n)),
                        I = (0, l.CG)((0, b.eh)(n)),
                        S = null !== (t = null == I ? void 0 : I.canCollapse) && void 0 !== t && t,
                        E = (0, s.useCallback)(function() {
                            v((0, b.sR)({
                                position: n
                            }))
                        }, [v, n]),
                        P = (0, s.useCallback)(function() {
                            v((0, b.Yp)({
                                component: I
                            }))
                        }, [I, v]),
                        D = (0, s.useCallback)(function(e) {
                            v((0, b.UG)({
                                width: e,
                                position: n
                            })), f.emit("resize", {})
                        }, [v, f, n]),
                        A = (0, r.Z)({
                            zIndex: Number((0, i.dQ)("zIndices", "overlay")) + 1,
                            position: w.ifPanelHasRoomToOpen("relative", "fixed"),
                            height: "100%",
                            top: 0,
                            bottom: 0
                        }, n, 0);
                    O || m || (A.transitionProperty = "width", A.transitionDuration = "normal"), (0, s.useEffect)(function() {
                        var e = function(e) {
                            "width" === e.propertyName && f.emit("resize", {})
                        };
                        return p.current.addEventListener("transitionend", e),
                            function() {
                                p.current && p.current.removeEventListener("transitionend", e)
                            }
                    }, [f, p]);
                    var T = (0, d.i)(w.ifPanelHasRoomToOpen(!0, !1)) || !1;
                    return (0, s.useEffect)(function() {
                        y && !T && S && E()
                    }, [T, y, E, S]), (0, x.jsxs)(o.k, C(C({
                        ref: p
                    }, A), {}, {
                        style: {
                            width: y || S ? k : 0
                        },
                        maxW: "100%",
                        "data-print-hidden": !0,
                        children: [y && "right" === n && (0, x.jsx)(j, {
                            isDragging: m,
                            setIsDragging: g,
                            position: n,
                            width: k,
                            setWidth: D,
                            panelRef: p,
                            onClose: E,
                            initialWidth: c.Ld
                        }), (0, x.jsx)(u.Mn.Provider, {
                            value: f,
                            children: I && (y || S) && (0, x.jsx)(I, {
                                isDragging: m,
                                isOpen: y,
                                closePanel: E,
                                openPanel: P,
                                panelRef: p,
                                lifecycle: f,
                                hasRoomToOpen: T
                            })
                        }), y && "left" === n && (0, x.jsx)(j, {
                            isDragging: m,
                            setIsDragging: g,
                            position: n,
                            width: k,
                            setWidth: D,
                            panelRef: p,
                            onClose: E,
                            initialWidth: c.X9
                        })]
                    }))
                },
                k = (0, s.memo)(function(e) {
                    return (0, x.jsx)(O, C({
                        position: "right"
                    }, e))
                });
            k.displayName = "RightPanelContainer";
            var I = (0, s.memo)(function(e) {
                return (0, x.jsx)(O, C({
                    position: "left"
                }, e))
            });
            I.displayName = "LeftPanelContainer"
        },
        34972: function(e, t, n) {
            n.d(t, {
                _i: function() {
                    return _._
                },
                eT: function() {
                    return et
                }
            });
            var r, i, o, s, a, c = n(95235),
                l = n(81333),
                d = n(55452),
                u = n(55479),
                f = n(5632),
                p = n(2784),
                h = n(88914),
                m = n(28811),
                x = n(35243),
                g = n(57848),
                v = n(25232),
                j = n(36157),
                b = n(5945),
                y = n(16467),
                C = n(57262),
                w = function(e) {
                    var t = (0, j.TL)(),
                        n = (0, b.SE)().currentWorkspace;
                    (0, p.useEffect)(function() {
                        if (e) return y.VH.updateWorkspaceInLdContext(e).then(function() {
                                t((0, C.vH)({
                                    isDocWorkspaceSet: !0
                                }))
                            }),
                            function() {
                                y.VH.updateWorkspaceInLdContext(n).then(function() {
                                    t((0, C.vH)({
                                        isDocWorkspaceSet: !1
                                    }))
                                })
                            }
                    }, [n, t, e])
                },
                O = n(56969),
                k = n(7328),
                I = n(57981),
                S = (0, I.Ps)(r || (r = (0, k.Z)(["\n  fragment DefaultCardFields on Card {\n    id\n    archived\n    docId\n    title\n    text\n    previewUrl\n    createdTime\n    updatedTime\n  }\n"])));
            (0, I.Ps)(i || (i = (0, k.Z)(["\n  mutation CreateCard($id: ID!, $docId: ID!) {\n    createCard(id: $id, docId: $docId) {\n      id\n    }\n  }\n"]))), (0, I.Ps)(o || (o = (0, k.Z)(["\n  ", "\n  query GetCard($id: ID!, $docId: ID!) {\n    card(id: $id, docId: $docId) {\n      ...DefaultCardFields\n    }\n  }\n"])), S), (0, I.Ps)(s || (s = (0, k.Z)(["\n  ", "\n  query GetCards($docId: ID!) {\n    docCards(docId: $docId, archived: false) {\n      ...DefaultCardFields\n    }\n  }\n"])), S);
            var E = (0, I.Ps)(a || (a = (0, k.Z)(["\n  ", "\n  subscription SubscribeToCards($docId: ID!) {\n    docCards(docId: $docId) {\n      ...DefaultCardFields\n    }\n  }\n"])), S),
                P = n(29407),
                D = n(60883),
                A = n(54714),
                T = n(21260),
                R = n(38404),
                _ = n(48842),
                L = n(75944),
                M = n(63331),
                z = n(20010),
                N = n(56915),
                Z = n(48273),
                G = n(92619),
                F = n(64827),
                U = n(2167),
                W = n(71354),
                V = n(91012),
                H = n(80353),
                B = n(76648),
                q = n(45650),
                K = n(52322),
                Y = n(2252),
                J = function(e) {
                    var t, n = (null === (t = (0, j.CG)((0, M.oH)(e || ""))) || void 0 === t ? void 0 : t.status) === "running",
                        r = (0, p.useRef)(n);
                    r.current = n;
                    var i = (0, p.useState)(function() {
                            return new Y.B
                        }),
                        o = i[0],
                        s = i[1],
                        a = (0, p.useCallback)(function() {
                            o.resolve()
                        }, [o]),
                        c = (0, L.q)(),
                        l = c.isOpen,
                        d = c.onOpen,
                        u = c.onClose;
                    return {
                        confirmNavigationFn: (0, p.useCallback)(function() {
                            if (!r.current) return Promise.resolve();
                            var e = new Y.B;
                            return s(e), d(), e.promise
                        }, [d]),
                        confirmNavigationModalProps: {
                            isOpen: l,
                            onClose: u,
                            onConfirm: a
                        }
                    }
                },
                X = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.onConfirm;
                    return (0, K.jsxs)(z.u_, {
                        onClose: n,
                        isOpen: t,
                        isCentered: !0,
                        children: [(0, K.jsx)(N.Z, {}), (0, K.jsxs)(Z.h, {
                            children: [(0, K.jsx)(G.x, {
                                children: (0, K.jsx)(d.cC, {
                                    id: "YeK6T+"
                                })
                            }), (0, K.jsx)(F.o, {}), (0, K.jsx)(U.f, {
                                children: (0, K.jsxs)(W.K, {
                                    spacing: 4,
                                    children: [(0, K.jsx)(V.x, {
                                        fontWeight: "bold",
                                        children: (0, K.jsx)(d.cC, {
                                            id: "Wr6Y7m"
                                        })
                                    }), (0, K.jsx)(V.x, {
                                        children: (0, K.jsx)(d.cC, {
                                            id: "n0Fn6S"
                                        })
                                    })]
                                })
                            }), (0, K.jsx)(H.m, {
                                children: (0, K.jsxs)(B.h, {
                                    children: [(0, K.jsx)(q.z, {
                                        variant: "ghost",
                                        onClick: n,
                                        children: (0, K.jsx)(d.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, K.jsx)(q.z, {
                                        variant: "ghost",
                                        color: "red.600",
                                        onClick: r,
                                        children: (0, K.jsx)(d.cC, {
                                            id: "QxM8i/"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                };

            function Q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(n), !0).forEach(function(t) {
                        (0, c.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ee = function(e) {
                var t = e.children,
                    n = (0, v.ye)("docEditorForcePublicStatic"),
                    r = (0, u.p)(),
                    i = (0, b.we)(),
                    o = (0, j.CG)(R.XV),
                    s = (0, b.SE)(),
                    a = s.user,
                    c = s.userStatus,
                    y = (0, p.useRef)(null),
                    C = (0, j.TL)(),
                    k = (0, f.useRouter)(),
                    I = k.push,
                    S = k.replace,
                    L = (0, j.CG)(R.yx),
                    M = (0, D.Pi)(),
                    z = (0, l.Z)(M, 2),
                    N = z[0],
                    Z = z[1],
                    G = Z && Z.match(D.sg),
                    F = G ? G[0] : null,
                    U = J(F),
                    W = U.confirmNavigationFn,
                    V = U.confirmNavigationModalProps,
                    H = (0, p.useState)({
                        isUnauthorized: void 0,
                        setCollaborativeEditorInstance: function(e) {
                            y.current = e, q(function(t) {
                                return $($({}, t), {}, {
                                    editor: e
                                })
                            })
                        },
                        getCollaborativeEditorInstance: function() {
                            return y.current
                        },
                        confirmNavigation: W,
                        editor: void 0
                    }),
                    B = H[0],
                    q = H[1];
                (0, x.ts)(L), w(null == L ? void 0 : L.organization);
                var Y = (0, m.WMx)({
                        variables: {
                            id: F
                        },
                        returnPartialData: !0,
                        nextFetchPolicy: "cache-only"
                    }),
                    Q = (0, l.Z)(Y, 2),
                    ee = Q[0],
                    et = Q[1],
                    en = et.data,
                    er = et.loading,
                    ei = et.called,
                    eo = et.subscribeToMore,
                    es = (0, b.py)("view", null == en ? void 0 : en.doc);
                (0, b.$K)(ee), (0, p.useEffect)(function() {
                    if (eo && B.docId && ei) return eo({
                        document: T.dU,
                        variables: {
                            id: B.docId
                        },
                        updateQuery: function(e, t) {
                            var n = t.subscriptionData;
                            return n.data && n.data.doc && e.doc ? {
                                doc: $($($({}, e.doc), n.data.doc), {}, {
                                    __typename: "Doc"
                                })
                            } : e
                        }
                    })
                }, [B.docId, eo, ei]);
                var ea = (0, m.WBF)({
                        variables: {
                            docId: F
                        },
                        returnPartialData: !0,
                        nextFetchPolicy: "cache-only"
                    }),
                    ec = (0, l.Z)(ea, 2),
                    el = ec[0],
                    ed = ec[1],
                    eu = ed.data,
                    ef = ed.called,
                    ep = ed.subscribeToMore;
                return ((0, g.p)(null == eu ? void 0 : eu.docCards, B.editor), (0, p.useEffect)(function() {
                    if (ep && B.docId && ef) return ep({
                        document: E,
                        variables: {
                            docId: B.docId
                        },
                        updateQuery: function(e, t) {
                            var n = t.subscriptionData;
                            return n.data && n.data.docCards ? n.data : e
                        }
                    })
                }, [B.docId, ep, ef]), (0, p.useEffect)(function() {
                    if (!B.docId && Z) {
                        if (!F) {
                            r({
                                id: "invalid_doc_id_error",
                                title: (0, K.jsx)(d.cC, {
                                    id: "742lf1"
                                }),
                                description: "",
                                status: "error",
                                position: "top",
                                isClosable: !1,
                                duration: null
                            });
                            return
                        }
                        ee(), el(), q(function(e) {
                            return e.docId == F ? e : $($({}, e), {}, {
                                docId: F
                            })
                        })
                    }
                }, [B.docId, Z, F, ee, el, C, r]), (0, p.useEffect)(function() {
                    if ("loading" !== c && ei && !er && Z) {
                        if (!en || !en.doc || !1 === es) {
                            "loggedOut" === c && I("/signin?redirect_to=".concat(encodeURIComponent(window.location.href))), q(function(e) {
                                return $($({}, e), {}, {
                                    isUnauthorized: !0
                                })
                            });
                            return
                        }
                        var e, t, r = i.can(m.y3$.View, en.doc) && i.cannot(m.y3$.Comment, en.doc) && i.cannot(m.y3$.Edit, en.doc) && i.cannot(m.y3$.Manage, en.doc),
                            s = null === (e = en.doc.accessLinks) || void 0 === e ? void 0 : null === (t = e.find(function(e) {
                                return e.token === h.v.SHARE_TOKEN
                            })) || void 0 === t ? void 0 : t.permission,
                            a = s && [m.y3$.Edit, m.y3$.Comment].includes(s),
                            l = new URLSearchParams(window.location.search),
                            d = l.get("following_id") && l.get("follow_on_start"),
                            u = o && r && !d && !a,
                            f = o && n;
                        if (u || f) {
                            C((0, R.R8)({
                                docEditorType: A.Z.PUBLIC_STATIC
                            }));
                            return
                        }
                        if (!o && en.doc.archived) {
                            S("/");
                            return
                        }
                        q(function(e) {
                            return !1 === e.isUnauthorized ? e : $($({}, e), {}, {
                                isUnauthorized: !1
                            })
                        }), C((0, R.pl)({
                            doc: en.doc
                        }))
                    }
                }, [i, es, en, er, Z, ei, o, n, c, I, C, S, a]), (0, p.useEffect)(function() {
                    return function() {
                        C((0, R.mc)())
                    }
                }, [C]), (0, p.useEffect)(function() {
                    if (L && F) {
                        var e = "".concat(L.title ? "".concat((0, P.l)(L.title), "-") : "").concat(F);
                        Z !== e && (0, O.lO)({
                            pathname: "/".concat(N, "/").concat(e),
                            emitChange: !1
                        })
                    }
                }, [L, F, Z, N]), B.docId) ? (0, K.jsxs)(_.r.Provider, {
                    value: B,
                    children: [t, (0, K.jsx)(X, $({}, V))]
                }) : (0, K.jsx)(K.Fragment, {})
            };

            function et(e) {
                return (0, p.memo)(function(t) {
                    return (0, K.jsx)(ee, {
                        children: (0, K.jsx)(e, $({}, t))
                    })
                })
            }
        },
        82779: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return F
                }
            });
            var r = n(81333),
                i = n(55452),
                o = n(87254),
                s = n(11919),
                a = n(53738),
                c = n(94659),
                l = n(36895),
                d = n(50390),
                u = n(91012),
                f = n(97261),
                p = n(2784),
                h = n(28811),
                m = n(64914),
                x = n(66397),
                g = n(36157),
                v = n(68722),
                j = n(43512),
                b = n(17349),
                y = n(5945),
                C = {
                    src: "/_next/static/media/Sal-Fishing-2x.1a2d0290.png"
                },
                w = n(63730),
                O = n(83906),
                k = n(9088),
                I = n(30893),
                S = n(45650),
                E = n(40771),
                P = n(63849),
                D = n(2575),
                A = n(97907),
                T = n(65903),
                R = n.n(T),
                _ = n(52322),
                L = function(e) {
                    var t = e.count,
                        n = e.onClose,
                        r = e.commentStatusFilter,
                        a = e.setCommentStatusFilter,
                        c = r === h.Ux9.Open ? o.ag._({
                            id: "Kz1TxG"
                        }) : o.ag._({
                            id: "kywJax"
                        });
                    return (0, _.jsxs)(s.k, {
                        width: "100%",
                        px: 6,
                        py: 4,
                        justifyContent: "space-between",
                        alignItems: "center",
                        h: 16,
                        tabIndex: 0,
                        outline: "none",
                        children: [(0, _.jsx)(d.X, {
                            size: "md",
                            flex: 1,
                            noOfLines: 1,
                            children: (0, _.jsx)(i.cC, {
                                id: "eiUA4k",
                                values: {
                                    count: t
                                }
                            })
                        }), (0, _.jsxs)(k.v, {
                            closeOnSelect: !0,
                            children: [(0, _.jsx)(I.j, {
                                as: S.z,
                                size: "sm",
                                rightIcon: (0, _.jsx)(O.v, {}),
                                mr: 8,
                                children: R()(c)
                            }), (0, _.jsx)(E.q, {
                                zIndex: 3,
                                children: (0, _.jsxs)(P._, {
                                    defaultValue: r,
                                    title: o.ag._({
                                        id: "0cVgUw"
                                    }),
                                    type: "radio",
                                    children: [(0, _.jsx)(D.i, {
                                        onClick: function() {
                                            return a(h.Ux9.Open)
                                        },
                                        value: "open",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "1TNIig"
                                        })
                                    }), (0, _.jsx)(D.i, {
                                        onClick: function() {
                                            return a(h.Ux9.Closed)
                                        },
                                        value: "closed",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "D87pha"
                                        })
                                    })]
                                })
                            })]
                        }), (0, _.jsx)(A.P, {
                            position: "absolute",
                            top: 2,
                            right: 2,
                            onClick: n,
                            "data-comment-feed-close-button": !0
                        })]
                    })
                },
                M = n(95235),
                z = n(16257);

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach(function(t) {
                        (0, M.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var G = function(e) {
                    var t = e.user,
                        n = e.editor,
                        r = (0, p.useState)(function() {
                            var e = (0, v.W1)(n, z.Et);
                            return e && e.length ? e[0] : (0, v.xN)(function() {
                                return z.Et
                            }, n, "")
                        }),
                        i = r[0],
                        o = r[1];
                    (0, p.useEffect)(function() {
                        if (i && n) return function() {
                            var e, t;
                            null === (e = (t = n.commands).createDraftComment) || void 0 === e || e.call(t, i)
                        }
                    }, [i, n]);
                    var s = (0, v.iZ)({
                            draftComment: i,
                            clearDraftComment: function() {
                                i && (null === (r = (s = n.commands).removeDraftComments) || void 0 === r || r.call(s, [i]));
                                var e, t, r, s, a = (0, v.xN)(function() {
                                    return z.Et
                                }, n, "");
                                null === (e = (t = n.commands).createDraftComment) || void 0 === e || e.call(t, a), o(a)
                            },
                            editor: n
                        }),
                        a = (0, p.useCallback)(function(e) {
                            var t = e.editor;
                            o(function(e) {
                                return e ? Z(Z({}, e), {}, {
                                    json: t.view.state.doc.toJSON(),
                                    text: t.view.state.doc.textContent
                                }) : e
                            })
                        }, []);
                    return (0, _.jsx)(v.Ag, {
                        draftComment: i,
                        user: t,
                        onCommentDraftUpdate: a,
                        onCommentSave: s,
                        commentIdToHighlight: null
                    })
                },
                F = function(e) {
                    var t, n = e.onClose,
                        O = e.editor,
                        k = (0, g.CG)(b.yx),
                        I = (0, h.$gs)().isConnected,
                        S = (0, p.useState)(h.Ux9.Open),
                        E = S[0],
                        P = S[1],
                        D = null == k ? void 0 : k.comments,
                        A = null == k ? void 0 : null === (t = k.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === E
                        }),
                        T = (0, g.CG)(b.gh),
                        R = (0, y.py)("comment", k) && I,
                        M = (0, y.SE)().user,
                        z = (0, m.$m)(k, M),
                        N = (0, p.useMemo)(function() {
                            return (0, w.yd)({
                                items: A || [],
                                sortBy: w.Yz,
                                latestTimeGetterFn: w.z3
                            })
                        }, [A]);
                    return D && k && O ? (0, _.jsxs)(s.k, {
                        direction: "column",
                        h: "100%",
                        overflowX: "hidden",
                        className: j.G,
                        w: "100%",
                        children: [(0, _.jsx)(L, {
                            commentStatusFilter: E,
                            setCommentStatusFilter: P,
                            count: (null == A ? void 0 : A.length) || 0,
                            onClose: n
                        }), (0, _.jsxs)(s.k, {
                            direction: "column",
                            className: "comments-list",
                            flex: 1,
                            overflowY: "auto",
                            tabIndex: 0,
                            outline: "none",
                            children: [(0, _.jsx)(x.V, {
                                label: (0, _.jsx)(i.cC, {
                                    id: "pQvCbR"
                                }),
                                isConnected: I,
                                mx: 6
                            }), z && !M && k && (0, _.jsx)(v.IZ, {
                                doc: k,
                                accessLink: z
                            }), R && (0, _.jsx)(a.xu, {
                                px: 6,
                                py: 2,
                                children: (0, _.jsx)(G, {
                                    user: M,
                                    editor: O
                                })
                            }), !(null != A && A.length) && (0, _.jsxs)(c.g, {
                                align: "center",
                                p: 6,
                                textAlign: "center",
                                spacing: 8,
                                children: [(0, _.jsx)(a.xu, {
                                    w: "80%",
                                    maxW: "300px",
                                    mb: 6,
                                    alignContent: "center",
                                    children: (0, _.jsx)(l.E, {
                                        src: C.src,
                                        width: "640px",
                                        alt: "Sal, the Gamma mascot, fishing extraterrestrially"
                                    })
                                }), (0, _.jsxs)(a.xu, {
                                    children: [(0, _.jsx)(d.X, {
                                        size: "xs",
                                        mb: 2,
                                        children: "open" === E ? (0, _.jsx)(i.cC, {
                                            id: "W7i5f5"
                                        }) : (0, _.jsx)(i.cC, {
                                            id: "mpDN1V"
                                        })
                                    }), (0, _.jsx)(u.x, {
                                        fontSize: "sm",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "iB9OEi"
                                        })
                                    })]
                                })]
                            }), Object.entries(N).filter(function(e) {
                                return (0, r.Z)(e, 2)[1].length
                            }).map(function(e) {
                                var t = (0, r.Z)(e, 2),
                                    i = t[0],
                                    a = t[1];
                                return (0, _.jsxs)(s.k, {
                                    direction: "column",
                                    children: [(0, _.jsx)(f.NZ, {
                                        px: 6,
                                        pt: 4,
                                        pb: 2,
                                        position: "sticky",
                                        top: -2,
                                        bg: "white",
                                        zIndex: 2,
                                        children: {
                                            today: o.ag._({
                                                id: "ecUA8p"
                                            }),
                                            thisWeek: o.ag._({
                                                id: "yByRxz"
                                            }),
                                            earlier: o.ag._({
                                                id: "HPqZkW"
                                            })
                                        }[i]
                                    }), (0, _.jsx)(s.k, {
                                        direction: "column",
                                        children: a.map(function(e) {
                                            return (0, _.jsx)(v.q5, {
                                                instanceType: "feed",
                                                userCanComment: R,
                                                editor: O,
                                                comment: e,
                                                selfUser: M,
                                                docId: null == k ? void 0 : k.id,
                                                editorMode: T,
                                                onClose: n,
                                                isRootComment: !0,
                                                pt: 6,
                                                px: 6,
                                                pb: 4
                                            }, e.id)
                                        })
                                    })]
                                }, i)
                            })]
                        })]
                    }) : null
                }
        },
        67004: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return m
                }
            });
            var r = n(95235),
                i = n(82269),
                o = n(2784),
                s = n(31358),
                a = n(91437),
                c = n(93848),
                l = n(48842),
                d = n(82779),
                u = n(52322),
                f = ["closePanel"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var m = function(e) {
                var t = e.closePanel,
                    n = (0, i.Z)(e, f),
                    r = (0, l._)().editor;
                return (0, o.useEffect)(function() {
                    var e = function(e) {
                        e.open && t()
                    };
                    return c.pw.on(c.TI.POPUP_COMMENT_TOGGLED, e),
                        function() {
                            c.pw.on(c.TI.POPUP_COMMENT_TOGGLED, e)
                        }
                }, [t]), (0, o.useEffect)(function() {
                    return s.F7.on("keydown", "COMMENT_FEED_PANEL", function(e) {
                        return !!document.activeElement.closest('[data-panelid="comment-feed-panel"]') && ("Escape" === e.key && t(), !0)
                    })
                }, [t]), (0, u.jsx)(a.s, h(h({}, n), {}, {
                    bgColor: "white",
                    "data-panelid": "comment-feed-panel",
                    children: (0, u.jsx)(d.m, {
                        onClose: t,
                        editor: r
                    })
                }))
            };
            m.panelPosition = "right"
        },
        60394: function(e, t, n) {
            n.d(t, {
                xg: function() {
                    return ej
                },
                rN: function() {
                    return eg
                },
                r8: function() {
                    return ex
                }
            });
            var r = n(11919),
                i = n(71354),
                o = n(25925),
                s = n(2784),
                a = n(67218),
                c = n(55452),
                l = n(87254),
                d = n(91012),
                u = n(16979),
                f = n(71812),
                p = n(45393),
                h = n.n(p),
                m = n(94659),
                x = n(45650),
                g = n(52322),
                v = function(e) {
                    var t = e.sendMessage,
                        n = (0, s.useState)(h()([l.ag._({
                            id: "91gjMr"
                        }), l.ag._({
                            id: "PHyjBQ"
                        }), l.ag._({
                            id: "zhFV/H"
                        }), l.ag._({
                            id: "4ReFRy"
                        }), l.ag._({
                            id: "aepNQh"
                        }), l.ag._({
                            id: "fr8euV"
                        }), l.ag._({
                            id: "+TEOEl"
                        }), l.ag._({
                            id: "gQIRQv"
                        }), l.ag._({
                            id: "pbDMHv"
                        }), l.ag._({
                            id: "LP7cSD"
                        }), l.ag._({
                            id: "ugneAh"
                        })], 4).concat(h()([l.ag._({
                            id: "DZ/eyq"
                        }), l.ag._({
                            id: "S2U0+k"
                        }), l.ag._({
                            id: "YZJ7kT"
                        }), l.ag._({
                            id: "fLq3m1"
                        }), l.ag._({
                            id: "1nrH2R"
                        })], 2)))[0];
                    return (0, g.jsx)(m.g, {
                        spacing: 2,
                        align: "flex-start",
                        children: n.map(function(e, n) {
                            return (0, g.jsx)(x.z, {
                                variant: "unstyled",
                                bg: "white",
                                borderRadius: "md",
                                size: "sm",
                                px: 2,
                                border: "1px solid",
                                borderColor: "gray.200",
                                color: "orchid.400",
                                fontWeight: "500",
                                _hover: {
                                    bg: "trueblue.50",
                                    color: "trueblue.700"
                                },
                                onClick: function() {
                                    t(e)
                                },
                                children: e
                            }, n)
                        })
                    })
                },
                j = function(e) {
                    var t, n = e.sendMessage,
                        r = e.hideSuggestions,
                        i = (0, u.SE)().user;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(f.K, {
                            from: "Designer",
                            children: (t = null == i ? void 0 : i.firstName, {
                                from: "Designer",
                                type: "text",
                                message: l.ag._({
                                    id: "q65R55",
                                    values: {
                                        userName: t
                                    }
                                }),
                                timestamp: Date.now()
                            }).message
                        }), !(void 0 !== r && r) && (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)(d.x, {
                                color: "gray.500",
                                fontSize: "sm",
                                children: (0, g.jsx)(c.cC, {
                                    id: "MVir6z"
                                })
                            }), (0, g.jsx)(v, {
                                sendMessage: n
                            })]
                        })]
                    })
                },
                b = n(30299),
                y = n(13813),
                C = n(40110),
                w = n(8283),
                O = n(53738),
                k = n(15110),
                I = n(49929),
                S = n(65618),
                E = n(36157),
                P = n(74358),
                D = n(17349),
                A = n(2032),
                T = n(54073),
                R = n.n(T);

            function _(e, t, n) {
                var r;
                return null !== (r = n.find(function(n) {
                    return n.modification.isApplied(e, t)
                })) && void 0 !== r ? r : null
            }

            function L(e, t) {
                var n = (0, E.CG)(D.Pu),
                    r = (0, S.T)(),
                    i = (0, s.useState)(function() {
                        return e ? _(e, r, t) : null
                    }),
                    o = i[0],
                    a = i[1],
                    c = (0, s.useCallback)(function() {
                        e && a(_(e, r, t))
                    }, [e, t, r]);
                return (0, s.useEffect)(function() {
                    if (e) {
                        var n = R()(function() {
                            a(_(e, r, t))
                        }, 1e3);
                        return e.on("update", n),
                            function() {
                                e.off("update", n)
                            }
                    }
                }, [e, t, r]), (0, s.useEffect)(function() {
                    c()
                }, [c, n]), {
                    activeSuggestion: o,
                    forceUpdate: c
                }
            }
            var M = n(20280),
                z = n(30628),
                N = n(55479),
                Z = n(93319),
                G = n(76648),
                F = n(67887),
                U = n(49747),
                W = n(25793),
                V = n(97261),
                H = n(36188),
                B = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = (0, N.p)(),
                        r = (0, H.z$)(),
                        o = ex().scrollToBottom,
                        a = (0, s.useRef)(null),
                        d = (0, s.useState)(!1),
                        u = d[0],
                        f = d[1],
                        p = (0, s.useState)(null),
                        h = p[0],
                        m = p[1];
                    (0, s.useEffect)(function() {
                        if (u) {
                            var e;
                            null === (e = a.current) || void 0 === e || e.focus(), null == o || o()
                        }
                    }, [u, o, r]);
                    var v = t.interactionId,
                        j = t.type,
                        b = (0, s.useCallback)(function(e) {
                            m(e), f(!0), null == r || r.track(H.AA.AI_SUGGESTION_FEEDBACK, {
                                interactionId: v,
                                rating: e,
                                type: j
                            })
                        }, [r, v, j]),
                        y = (0, s.useCallback)(function() {
                            var e;
                            f(!1), null == r || r.track(H.AA.AI_SUGGESTION_FEEDBACK, {
                                interactionId: v,
                                rating: h,
                                type: j,
                                feedback: null === (e = a.current) || void 0 === e ? void 0 : e.value
                            }), a.current && (a.current.value = ""), n({
                                title: (0, g.jsx)(c.cC, {
                                    id: "d6N994"
                                }),
                                description: (0, g.jsx)(c.cC, {
                                    id: "s/fQ3s"
                                }),
                                status: "success",
                                duration: 5e3,
                                isClosable: !0
                            })
                        }, [n, r, v, h, j]);
                    return (0, g.jsxs)(i.K, {
                        width: "100%",
                        children: [(0, g.jsxs)(w.U, {
                            children: [(0, g.jsx)(Z.L, {}), (0, g.jsxs)(G.h, {
                                size: "xs",
                                variant: "ghost",
                                colorScheme: "blackAlpha",
                                children: [(0, g.jsx)(V.kH, {
                                    label: (0, g.jsx)(c.cC, {
                                        id: "kR82DG"
                                    }),
                                    placement: "top",
                                    children: (0, g.jsx)(F.h, {
                                        "aria-label": "thumbs down",
                                        color: "poor" === h ? "red.600" : void 0,
                                        borderWidth: "1px",
                                        borderColor: "poor" === h ? "red.600" : "transparent",
                                        bg: "poor" === h ? "red.100" : void 0,
                                        _hover: {
                                            bg: "poor" === h ? "red.200" : "blackAlpha.100"
                                        },
                                        icon: (0, g.jsx)(I.G, {
                                            icon: z.b
                                        }),
                                        onClick: function() {
                                            b("poor")
                                        }
                                    })
                                }), (0, g.jsx)(V.kH, {
                                    label: (0, g.jsx)(c.cC, {
                                        id: "y1GvbS"
                                    }),
                                    placement: "top",
                                    children: (0, g.jsx)(F.h, {
                                        "aria-label": "thumbs up",
                                        color: "good" === h ? "green.600" : void 0,
                                        borderWidth: "1px",
                                        borderColor: "good" === h ? "green.600" : "transparent",
                                        bg: "good" === h ? "green.100" : void 0,
                                        _hover: {
                                            bg: "good" === h ? "green.200" : "blackAlpha.100"
                                        },
                                        icon: (0, g.jsx)(I.G, {
                                            icon: M.u8
                                        }),
                                        onClick: function() {
                                            b("good")
                                        }
                                    })
                                })]
                            })]
                        }), (0, g.jsx)(U.U, { in: u,
                            children: (0, g.jsxs)(i.K, {
                                children: [(0, g.jsx)(W.g, {
                                    ref: a,
                                    bg: "white",
                                    size: "sm",
                                    placeholder: l.ag._({
                                        id: "ZVGh9y"
                                    })
                                }), (0, g.jsxs)(G.h, {
                                    children: [(0, g.jsx)(Z.L, {}), (0, g.jsx)(x.z, {
                                        onClick: function() {
                                            return f(!1)
                                        },
                                        size: "xs",
                                        variant: "ghost",
                                        colorScheme: "blackAlpha",
                                        children: (0, g.jsx)(c.cC, {
                                            id: "6Uau97"
                                        })
                                    }), (0, g.jsx)(x.z, {
                                        onClick: y,
                                        size: "xs",
                                        variant: "plain",
                                        children: (0, g.jsx)(c.cC, {
                                            id: "RoafuO"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                });
            B.displayName = "SuggestionFeedback";
            var q = (0, s.memo)(function(e) {
                var t = e.message,
                    n = e.editor,
                    r = (0, A.E)(),
                    o = (0, S.T)(),
                    a = L(n, t.suggestions),
                    c = a.activeSuggestion,
                    l = a.forceUpdate,
                    u = (0, s.useCallback)(function(e) {
                        n && (r.trackSuggestionApplied({
                            interactionId: t.interactionId,
                            suggestionType: e.type,
                            suggestionLabel: e.description,
                            suggestionContent: e.getContentForTracking()
                        }), e.apply(n, o), l())
                    }, [n, l, t.interactionId, o, r]);
                return n ? (0, g.jsx)(f.K, {
                    children: (0, g.jsxs)(i.K, {
                        divider: (0, g.jsx)(C.i, {
                            borderColor: "blackAlpha.200"
                        }),
                        children: [(0, g.jsx)(d.x, {
                            children: t.message || "How's this?"
                        }), t.suggestions.map(function(e, t) {
                            return (0, g.jsx)(K, {
                                isSelected: e.label === (null == c ? void 0 : c.label),
                                jsonContentPreview: e.jsonContentPreview,
                                label: e.label,
                                modification: e.modification,
                                onClick: function() {
                                    u(e.modification)
                                }
                            }, t)
                        }), (0, g.jsx)(B, {
                            message: t
                        })]
                    })
                }) : null
            });
            q.displayName = "SuggestContent";
            var K = function(e) {
                    var t = e.label,
                        n = e.modification,
                        i = e.jsonContentPreview,
                        o = e.isSelected,
                        a = e.onClick,
                        c = (0, E.CG)(D.Pu);
                    console.debug("[".concat(t, "] jsonContentPreview"), i, n);
                    var l = (0, s.useCallback)(function() {
                        o || a()
                    }, [o, a]);
                    return (0, g.jsxs)(w.U, {
                        onClick: l,
                        cursor: "pointer",
                        px: 2,
                        py: 1,
                        borderRadius: "xl",
                        _hover: {
                            bg: "blackAlpha.100"
                        },
                        bg: o ? "whiteAlpha.600" : void 0,
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        spacing: 4,
                        children: [i && (0, g.jsx)(r.k, {
                            sx: {
                                "mask-image": "linear-gradient(to bottom, black 75%, transparent 100%)"
                            },
                            children: (0, g.jsx)(r.k, {
                                sx: P.n,
                                justifyContent: "center",
                                alignItems: "top",
                                width: "150px",
                                h: 16,
                                children: (0, g.jsx)(O.xu, {
                                    transformOrigin: "top",
                                    transform: "scale(0.15)",
                                    pointerEvents: "none",
                                    children: (0, g.jsx)(P.m, {
                                        content: i,
                                        theme: c
                                    })
                                })
                            })
                        }), (0, g.jsx)(d.x, {
                            flex: 1,
                            fontSize: "sm",
                            children: t
                        }), (0, g.jsx)(k.M, { in: o,
                            children: (0, g.jsx)(I.G, {
                                icon: y.LE,
                                fixedWidth: !0
                            })
                        })]
                    })
                },
                Y = n(75652),
                J = n.n(Y),
                X = n(5766),
                Q = n(36895),
                $ = n(11558),
                ee = n(85745),
                et = n(97443),
                en = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = t.suggestions.slice(0, 8),
                        o = J()(r.map(function(e) {
                            return e.query
                        })),
                        s = 0 === o.length ? l.ag._({
                            id: "QICyFn"
                        }) : 1 == o.length ? l.ag._({
                            id: "x/YBq7",
                            values: {
                                0: o[0].toLowerCase()
                            }
                        }) : 2 == o.length ? l.ag._({
                            id: "Tn1hkb",
                            values: {
                                0: o[0].toLowerCase(),
                                1: o[1].toLowerCase()
                            }
                        }) : l.ag._({
                            id: "Z918ro",
                            values: {
                                0: o[0].toLowerCase(),
                                1: o[1].toLowerCase(),
                                2: o[2].toLowerCase()
                            }
                        });
                    return (0, g.jsx)(f.K, {
                        children: (0, g.jsxs)(i.K, {
                            align: "start",
                            children: [(0, g.jsxs)(d.x, {
                                children: [s, " ", (0, g.jsx)(c.cC, {
                                    id: "CvUN7V"
                                })]
                            }), (0, g.jsx)(d.x, {
                                color: "gray.500",
                                textAlign: "center",
                                fontSize: "xs",
                                children: (0, g.jsx)(c.cC, {
                                    id: "fg3FfA"
                                })
                            }), (0, g.jsx)(X.M, {
                                columns: 2,
                                spacing: 2,
                                w: "100%",
                                children: r.map(function(e) {
                                    var t = e.image,
                                        r = e.query,
                                        i = e.provider,
                                        o = (0, et.SN)(t.thumbnailUrl, {
                                            width: 250,
                                            height: 250
                                        });
                                    return (0, g.jsx)(Q.E, {
                                        src: o,
                                        fallbackSrc: t.thumbnailUrl,
                                        onDragStart: function() {
                                            n && (0, ee.UV)(n, {
                                                type: "image",
                                                attrs: (0, $.C)(t, r, i)
                                            })
                                        },
                                        h: 24,
                                        draggable: !0,
                                        w: "100%",
                                        borderRadius: "md",
                                        transitionDuration: "normal",
                                        transitionProperty: "common",
                                        objectFit: "cover",
                                        cursor: "grab",
                                        _hover: {
                                            shadow: "outline"
                                        }
                                    }, t.id)
                                })
                            }), (0, g.jsx)(B, {
                                message: t
                            })]
                        })
                    })
                });
            en.displayName = "SuggestImage";
            var er = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = (0, A.E)(),
                        i = (0, S.T)(),
                        o = L(n, t.suggestions),
                        s = o.activeSuggestion,
                        a = o.forceUpdate;
                    return (0, g.jsx)(f.K, {
                        from: t.from,
                        children: (0, g.jsxs)(m.g, {
                            spacing: 2,
                            align: "start",
                            children: [(0, g.jsx)(d.x, {
                                children: t.message || "Here are some ideas:"
                            }), t.suggestions.map(function(e, o) {
                                return (0, g.jsx)(ei, {
                                    value: e,
                                    isSelected: e === s,
                                    onClick: function() {
                                        if (n) {
                                            var o = e.modification;
                                            r.trackSuggestionApplied({
                                                interactionId: t.interactionId,
                                                suggestionType: o.type,
                                                suggestionLabel: o.description,
                                                suggestionContent: o.getContentForTracking()
                                            }), o.apply(n, i), a()
                                        }
                                    }
                                }, o)
                            }), (0, g.jsx)(B, {
                                message: t
                            })]
                        })
                    })
                }),
                ei = function(e) {
                    var t = e.value,
                        n = e.isSelected,
                        r = e.onClick,
                        i = (0, s.useCallback)(function() {
                            n || r()
                        }, [n, r]);
                    return (0, g.jsxs)(w.U, {
                        onClick: i,
                        cursor: "pointer",
                        p: 4,
                        borderRadius: "xl",
                        _hover: {
                            bg: "whiteAlpha.600"
                        },
                        bg: "white",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        spacing: 4,
                        shadow: "md",
                        align: "start",
                        children: [(0, g.jsxs)(O.xu, {
                            children: [(0, g.jsx)(d.x, {
                                fontSize: "sm",
                                color: "gray.500",
                                children: t.reason
                            }), (0, g.jsx)(d.x, {
                                fontSize: "sm",
                                noOfLines: 3,
                                children: t.value.replace(/(<([^>]+)>)/gi, "")
                            })]
                        }), (0, g.jsx)(k.M, { in: n,
                            children: (0, g.jsx)(I.G, {
                                icon: y.LE,
                                fixedWidth: !0
                            })
                        })]
                    })
                };
            er.displayName = "SuggestText";
            var eo = n(18504),
                es = n(42353),
                ea = n(57560),
                ec = n(88550),
                el = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = ex().onClose,
                        o = (0, A.E)(),
                        a = (0, S.T)(),
                        l = L(n, t.suggestions).activeSuggestion,
                        u = (0, s.useCallback)(function(e) {
                            n && (o.trackSuggestionApplied({
                                interactionId: t.interactionId,
                                suggestionType: t.type,
                                suggestionLabel: e.description,
                                suggestionContent: e.getContentForTracking()
                            }), e.apply(n, a))
                        }, [n, o, t, a]);
                    return (0, g.jsx)(f.K, {
                        children: (0, g.jsxs)(i.K, {
                            children: [(0, g.jsx)(d.x, {
                                children: t.message
                            }), t.suggestions.map(function(e) {
                                var t = e.themeId,
                                    n = e.label,
                                    r = e.isOriginal;
                                return (0, g.jsxs)(s.Fragment, {
                                    children: [r && (0, g.jsxs)(g.Fragment, {
                                        children: [(0, g.jsx)(C.i, {
                                            borderColor: "blackAlpha.200"
                                        }), (0, g.jsxs)(d.x, {
                                            children: [n, ": "]
                                        })]
                                    }), (0, g.jsx)(ed, {
                                        themeId: t,
                                        onClick: function() {
                                            return u(e.modification)
                                        },
                                        isSelected: (null == l ? void 0 : l.themeId) === t
                                    })]
                                }, t)
                            }), (0, g.jsx)(d.x, {
                                children: (0, g.jsx)(c.cC, {
                                    id: "eVMeEi"
                                })
                            }), (0, g.jsx)(x.z, {
                                leftIcon: (0, g.jsx)(I.G, {
                                    icon: eo.q2
                                }),
                                w: "100%",
                                onClick: function() {
                                    r(), ec.T.emit("toggleThemeBlock", !0)
                                },
                                children: (0, g.jsx)(c.cC, {
                                    id: "ni+gIz"
                                })
                            }), (0, g.jsx)(B, {
                                message: t
                            })]
                        })
                    })
                });
            el.displayName = "SuggestThemes";
            var ed = (0, s.memo)(function(e) {
                var t = e.themeId,
                    n = e.onClick,
                    r = e.isSelected,
                    i = (0, ea.c2)(t);
                return "new" === i.id ? null : (0, g.jsxs)(m.g, {
                    onClick: n,
                    cursor: "pointer",
                    p: 2,
                    borderRadius: "xl",
                    _hover: {
                        bg: "blackAlpha.100"
                    },
                    bg: r ? "whiteAlpha.600" : void 0,
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    children: [(0, g.jsx)(O.xu, {
                        borderRadius: "lg",
                        overflow: "hidden",
                        w: "100%",
                        children: (0, g.jsx)(es.n, {
                            theme: i,
                            variant: "outline"
                        })
                    }), (0, g.jsxs)(w.U, {
                        alignSelf: "flex-start",
                        color: r ? "trueblue.700" : void 0,
                        children: [(0, g.jsx)(k.M, { in: r,
                            unmountOnExit: !0,
                            children: (0, g.jsx)(I.G, {
                                icon: y.LE,
                                fixedWidth: !0
                            })
                        }), (0, g.jsx)(d.x, {
                            fontSize: "sm",
                            fontWeight: r ? "semibold" : void 0,
                            children: i.name
                        })]
                    })]
                })
            });
            ed.displayName = "ThemeMessageThumbnailPreview";
            var eu = n(29705),
                ef = n(84103),
                ep = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.sendMessage;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(f.K, {
                            children: t.message && (0, g.jsx)(g.Fragment, {
                                children: (0, g.jsxs)(d.x, {
                                    children: [(0, g.jsx)("span", {
                                        className: "emoji",
                                        role: "img",
                                        "aria-label": "sorry",
                                        children: "\uD83D\uDE14"
                                    }), " ", t.message, " ", t.learnMoreLink && (0, g.jsxs)(ef.r, {
                                        href: t.learnMoreLink,
                                        textDecoration: "underline",
                                        isExternal: !0,
                                        children: ["Learn more ", (0, g.jsx)(eu.h, {
                                            mx: "2px",
                                            fontSize: "sm"
                                        })]
                                    })]
                                })
                            })
                        }), (0, g.jsx)(d.x, {
                            color: "gray.500",
                            fontSize: "sm",
                            children: "Here are some other things I can do:"
                        }), (0, g.jsx)(v, {
                            sendMessage: n
                        })]
                    })
                });
            ep.displayName = "UnsupportedTask";
            var eh = (0, s.memo)(function(e) {
                var t = e.message;
                return (0, g.jsx)(f.K, {
                    warning: t.warning,
                    from: t.from,
                    children: t.message
                })
            });
            eh.displayName = "UserDesignerMessage";
            var em = s.createContext({
                    scrollToBottom: function() {},
                    onClose: function() {}
                }),
                ex = function() {
                    return s.useContext(em)
                },
                eg = function(e) {
                    var t = e.messages,
                        n = e.scrollSelector,
                        c = e.editor,
                        l = e.sendMessage,
                        d = e.isLoading,
                        u = e.onClose,
                        f = (0, a.q)(),
                        p = f.hasEnoughCreditsToChat,
                        h = f.isCreditsReady && !p,
                        m = (0, s.useCallback)(function() {
                            var e = n && document.querySelector(n);
                            e && setTimeout(function() {
                                requestAnimationFrame(function() {
                                    e.scrollTo({
                                        top: e.scrollHeight,
                                        behavior: "smooth"
                                    })
                                })
                            }, 400)
                        }, [n]),
                        x = (0, s.useRef)({
                            scrollToBottom: m,
                            onClose: u
                        });
                    return x.current.scrollToBottom = m, (0, g.jsx)(em.Provider, {
                        value: x.current,
                        children: (0, g.jsx)(r.k, {
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            children: (0, g.jsx)(i.K, {
                                pt: 12,
                                spacing: 2,
                                children: (0, g.jsxs)(o.M, {
                                    children: [(0, g.jsx)(j, {
                                        sendMessage: l,
                                        hideSuggestions: h
                                    }), t.map(function(e, t) {
                                        return "text" === e.type ? (0, g.jsx)(eh, {
                                            message: e
                                        }, e.timestamp) : "suggestImages" === e.type ? (0, g.jsx)(en, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestText" === e.type ? (0, g.jsx)(er, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestThemes" === e.type ? (0, g.jsx)(el, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestContent" === e.type ? (0, g.jsx)(q, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "unsupported" === e.type ? (0, g.jsx)(ep, {
                                            message: e,
                                            sendMessage: l
                                        }, e.timestamp) : (console.warn("[MessageList] Message type not found", e), null)
                                    }), h && (0, g.jsx)(b.x, {}), d && (0, g.jsx)(ev, {}, "loading")]
                                })
                            })
                        })
                    })
                },
                ev = function() {
                    return (0, g.jsx)(f.K, {
                        from: "Designer",
                        children: (0, g.jsx)(ej, {})
                    })
                },
                ej = function() {
                    return (0, g.jsxs)(r.k, {
                        className: "bouncing-loader",
                        justify: "center",
                        children: [(0, g.jsx)("div", {}), (0, g.jsx)("div", {}), (0, g.jsx)("div", {})]
                    })
                }
        },
        2032: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(2784),
                i = n(64805),
                o = n(36157),
                s = n(61926),
                a = function() {
                    var e = (0, o.qr)(),
                        t = (0, o.TL)(),
                        n = (0, r.useCallback)(function(e, n) {
                            t((0, s.Cj)({
                                taskContext: e,
                                provider: n
                            })), (0, i.hq)({
                                interactionId: e.interactionId,
                                interface: "chat",
                                inputMessage: e.message,
                                docId: e.docId,
                                cardId: e.editorContext.card.cardId,
                                provider: n
                            })
                        }, [t]),
                        a = (0, r.useCallback)(function(e) {
                            t((0, s.z5)(e))
                        }, [t]),
                        c = (0, r.useCallback)(function(e) {
                            t((0, s.zw)(e))
                        }, [t]),
                        l = (0, r.useCallback)(function(n) {
                            t((0, s._M)(n));
                            var r = n.taskContext,
                                o = (0, s.FK)(r.interactionId)(e.getState());
                            if (!o) {
                                console.error("[trackRequestComplete] no data found for interactionId", r.interactionId);
                                return
                            }(0, i.gb)({
                                interactionId: r.interactionId,
                                interface: "chat",
                                docId: r.docId,
                                cardId: o.cardId,
                                classification: o.classification,
                                provider: o.provider,
                                inputMessage: r.message,
                                inputContent: o.inputContent,
                                rawResponse: n.resp,
                                outputMessage: o.outputMessage,
                                outputContent: o.outputContent,
                                latency: performance.now() - r.startTime,
                                timeToComplete: performance.now() - r.startTime
                            })
                        }, [t, e]),
                        d = (0, r.useCallback)(function(t) {
                            var n = t.outputMessage,
                                r = t.errorMessage,
                                o = t.errorCode,
                                a = t.interactionId,
                                c = t.resp,
                                l = t.errorName,
                                d = (0, s.FK)(a)(e.getState());
                            if (!d) {
                                console.error("[trackRequestError] no data found for interactionId", a);
                                return
                            }(0, i.pQ)({
                                interactionId: a,
                                interface: "chat",
                                docId: d.docId,
                                cardId: d.cardId,
                                classification: d.classification,
                                provider: d.provider,
                                inputMessage: d.message,
                                inputContent: d.inputContent,
                                outputMessage: n,
                                errorName: l,
                                errorMessage: r,
                                errorCode: o,
                                rawResponse: c,
                                latency: performance.now() - d.startTime
                            })
                        }, [e]),
                        u = (0, r.useCallback)(function(t) {
                            var n = t.interactionId,
                                r = t.retriesRemaining,
                                o = t.resp,
                                a = (0, s.FK)(n)(e.getState());
                            if (!a) {
                                console.error("[trackRequestRetry] no data found for interactionId", n);
                                return
                            }(0, i.Wf)({
                                interactionId: n,
                                interface: "chat",
                                classification: a.classification,
                                docId: a.docId,
                                cardId: a.cardId,
                                provider: a.provider,
                                inputMessage: a.message,
                                inputContent: a.inputContent,
                                rawResponse: o,
                                retriesRemaining: r
                            })
                        }, [e]),
                        f = (0, r.useCallback)(function(t) {
                            var n = t.interactionId,
                                r = t.suggestionContent,
                                o = t.suggestionType,
                                a = t.suggestionLabel,
                                c = t.autoApplied,
                                l = (0, s.FK)(n)(e.getState());
                            if (!l) {
                                console.error("[trackSuggestionApplied] no data found for interactionId", n);
                                return
                            }
                            var d = "string" == typeof r ? r : "html" === r.type ? r.html : "json" === r.type ? r.json : void 0;
                            (0, i.vL)({
                                interactionId: n,
                                interface: "chat",
                                docId: l.docId,
                                cardId: l.cardId,
                                classification: l.classification,
                                provider: l.provider,
                                inputMessage: l.message,
                                inputContent: l.inputContent,
                                outputMessage: l.outputMessage,
                                outputContent: l.outputContent,
                                suggestionType: o,
                                suggestionLabel: a,
                                suggestionContent: d,
                                autoApplied: !!c
                            })
                        }, [e]);
                    return (0, r.useMemo)(function() {
                        return {
                            trackClassification: a,
                            trackRequestComplete: l,
                            trackInputContent: c,
                            trackRequestSent: n,
                            trackRequestError: d,
                            trackRequestRetry: u,
                            trackSuggestionApplied: f
                        }
                    }, [a, c, l, n, d, u, f])
                }
        },
        71812: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return g
                }
            });
            var r = n(95235),
                i = n(82269),
                o = n(11919),
                s = n(34638),
                a = n(72360),
                c = n(48322),
                l = n(76360),
                d = n(75342),
                u = n(98841),
                f = n(52322),
                p = ["children", "from", "warning", "cardStyleOverrides", "error"];

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var x = (0, u.E)(o.k),
                g = function(e) {
                    var t = e.children,
                        n = e.from,
                        r = e.warning,
                        o = void 0 !== r && r,
                        u = e.cardStyleOverrides,
                        h = e.error,
                        g = void 0 !== h && h,
                        v = (0, i.Z)(e, p),
                        j = (0, s.ff)("orchid.400", "blue.700"),
                        b = (0, s.ff)("trueblue.50", "sunglow.700"),
                        y = (0, s.ff)("red.100", "red.500"),
                        C = "User" === (void 0 === n ? "Designer" : n),
                        w = C ? m({
                            bg: j,
                            borderBottomRightRadius: 0,
                            color: "white"
                        }, u) : m({
                            bg: o ? void 0 : g ? y : b,
                            borderBottomLeftRadius: 0
                        }, u);
                    return (0, f.jsx)(x, m(m({
                        justify: C ? "flex-end" : "flex-start",
                        initial: {
                            opacity: 0,
                            translateX: -20
                        },
                        animate: {
                            opacity: 1,
                            translateX: 0
                        }
                    }, v), {}, {
                        children: o ? (0, f.jsxs)(a.b, m(m({
                            status: "warning",
                            borderColor: "orange.200",
                            borderWidth: "1px",
                            fontSize: "inherit"
                        }, w), {}, {
                            children: [(0, f.jsx)(c.z, {}), t]
                        })) : (0, f.jsx)(l.Z, m(m({
                            size: "sm",
                            shadow: "sm",
                            borderRadius: "xl",
                            variant: "filled",
                            minH: 0,
                            borderColor: g ? "red.200" : "blackAlpha.200"
                        }, w), {}, {
                            children: (0, f.jsx)(d.e, {
                                py: 2,
                                px: 2,
                                children: t
                            })
                        }))
                    }))
                }
        },
        30299: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return m
                }
            });
            var r = n(55452),
                i = n(87254),
                o = n(11919),
                s = n(45650),
                a = n(2784),
                c = n(50646),
                l = n(61166),
                d = n(77399),
                u = n(36157),
                f = n(71812),
                p = n(52322),
                h = function() {
                    var e = Date.now();
                    return {
                        from: "Designer",
                        type: "text",
                        message: i.ag._({
                            id: "ftZED+"
                        }),
                        timestamp: e
                    }
                },
                m = (0, a.memo)(function(e) {
                    var t = e.cardStyleOverrides,
                        n = (0, d.M)({
                            id: "ai-credits-modal-in-message"
                        }),
                        i = n.isOpen,
                        m = n.onOpen,
                        x = n.onClose,
                        g = (0, u.CG)(l.Lj),
                        v = (0, a.useMemo)(function() {
                            return h().message
                        }, []);
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)(f.K, {
                            from: "Designer",
                            error: !0,
                            cardStyleOverrides: t,
                            children: [(0, p.jsx)("strong", {
                                children: v
                            }), " ", (0, p.jsx)(r.cC, {
                                id: "//XCY6"
                            }), (0, p.jsx)(o.k, {
                                pt: 3,
                                children: (0, p.jsx)(s.z, {
                                    onClick: m,
                                    leftIcon: (0, p.jsx)("span", {
                                        role: "img",
                                        "aria-label": "credits",
                                        children: "\uD83D\uDCB0"
                                    }),
                                    children: (0, p.jsx)(r.cC, {
                                        id: "89ftLJ"
                                    })
                                })
                            })]
                        }), (0, p.jsx)(c.H, {
                            credits: g,
                            onClose: x,
                            isOpen: i,
                            onOpen: m
                        })]
                    })
                })
        },
        94603: function(e, t, n) {
            n.d(t, {
                Rr: function() {
                    return tB
                },
                QK: function() {
                    return tH
                }
            });
            var r, i, o = n(95235),
                s = n(82269),
                a = n(11919),
                c = n(87202),
                l = n(2784),
                d = n(25232),
                u = n(31358),
                f = n(91437),
                p = n(36157),
                h = n(93848),
                m = n(17349),
                x = n(48842),
                g = n(64629),
                v = n(55452),
                j = n(71354),
                b = n(67887),
                y = n(49929),
                C = n(97261),
                w = n(65358),
                O = n(90090),
                k = n(36188),
                I = n(58166),
                S = n(86733),
                E = n(36895),
                P = n(91012),
                D = n(45650),
                A = n(72360),
                T = n(66724),
                R = n(18751),
                _ = n(71812),
                L = n(52322),
                M = function(e) {
                    var t = e.onClose;
                    return (0, L.jsxs)(j.K, {
                        flex: 1,
                        align: "center",
                        justify: "center",
                        p: 6,
                        spacing: 6,
                        children: [(0, L.jsx)(E.E, {
                            src: "https://cdn.gamma.app/zc87vhr30n8uf3n/b4b04402416f4ec8b5c1dc24f4c2a3d6/optimized/Sal-Spaceship-Riding.png",
                            px: 12
                        }), (0, L.jsx)(_.K, {
                            children: (0, L.jsx)(P.x, {
                                children: (0, L.jsx)(v.cC, {
                                    id: "jVQv+Q"
                                })
                            })
                        }), (0, L.jsx)(D.z, {
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            leftIcon: (0, L.jsx)(y.G, {
                                icon: S.faXmark
                            }),
                            onClick: t,
                            children: (0, L.jsx)(v.cC, {
                                id: "pqZJT2"
                            })
                        })]
                    })
                },
                z = function() {
                    return (0, L.jsxs)(A.b, {
                        status: "warning",
                        mt: 12,
                        minH: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: "lg",
                        borderWidth: "1px",
                        children: [(0, L.jsx)(T.C, {
                            children: (0, L.jsx)(v.cC, {
                                id: "rvbk/4"
                            })
                        }), (0, L.jsx)(R.X, {
                            children: (0, L.jsx)(v.cC, {
                                id: "XNkIFY"
                            })
                        })]
                    })
                },
                N = n(12677),
                Z = n(87254),
                G = n(8283),
                F = n(21891),
                U = n(25793),
                W = n(94659),
                V = n(27191),
                H = n(51495),
                B = n(67218),
                q = n(22550),
                K = n(28339),
                Y = "40px",
                J = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        r = e.onSubmit,
                        i = e.isLoading,
                        o = e.editor;
                    e.resetMessages, (0, K.F1)(o);
                    var s = o.state,
                        a = s.selection,
                        c = s.doc.textBetween(a.from, a.to, "\n"),
                        d = (0, B.q)().hasEnoughCreditsToChat,
                        u = (0, q.fg)(),
                        f = (0, l.useRef)(null),
                        p = (0, l.useState)(!1),
                        h = p[0],
                        m = p[1],
                        x = a instanceof V.qv,
                        g = a instanceof V.Bs,
                        v = x && "card" === a.node.type.name,
                        j = a.empty || v ? Z.ag._({
                            id: "XrfE9D"
                        }) : x ? Z.ag._({
                            id: "CsUli9"
                        }) : g && c ? Z.ag._({
                            id: "+NPPZN",
                            values: {
                                0: c.length > 50 ? c.slice(0, 50) + "..." : c
                            }
                        }) : Z.ag._({
                            id: "/fY1js"
                        }),
                        w = (0, l.useCallback)(function() {
                            f.current && (f.current.style.height = Y, f.current.style.height = "".concat(f.current.scrollHeight, "px"))
                        }, []);
                    return (0, l.useEffect)(function() {
                        return o.on("selectionUpdate", w),
                            function() {
                                o.off("selectionUpdate", w)
                            }
                    }, [o, w]), (0, l.useEffect)(function() {
                        h ? w() : setTimeout(function() {
                            m(!0), w()
                        }, 400)
                    }, [h, j, w, t]), (0, L.jsxs)(G.U, {
                        align: "end",
                        children: [(0, L.jsx)(F.B, {
                            size: "md",
                            children: (0, L.jsx)(U.g, {
                                "data-gamma-child-tiptap-editor": !0,
                                id: "ai-chat-input",
                                h: Y,
                                minH: Y,
                                ref: f,
                                resize: "none",
                                maxH: h ? 32 : Y,
                                bg: "white",
                                shadow: "md",
                                autoFocus: !0,
                                isDisabled: !d,
                                placeholder: j,
                                value: t,
                                onKeyPress: function(e) {
                                    "Enter" === e.key && t.length > 0 && !i && (e.preventDefault(), r())
                                },
                                onChange: function(e) {
                                    return n(e.target.value)
                                },
                                pr: 12
                            })
                        }), (0, L.jsx)(C.kH, {
                            placement: "top",
                            label: (0, L.jsxs)(W.g, {
                                spacing: 0,
                                children: [(0, L.jsx)(P.x, {
                                    children: "Send request"
                                }), !u && (0, L.jsxs)(P.x, {
                                    color: "gray.400",
                                    children: [(0, L.jsx)(H.J, {
                                        type: "chatSuggestion",
                                        ml: 0
                                    }), " if successful"]
                                }), (0, L.jsx)(C.f2, {
                                    shortcut: "Enter"
                                })]
                            }),
                            children: (0, L.jsx)(b.h, {
                                "aria-label": "Send message",
                                isDisabled: !t || i,
                                size: "sm",
                                h: Y,
                                w: Y,
                                variant: "solid",
                                icon: (0, L.jsx)(y.G, {
                                    icon: N.Fz,
                                    fixedWidth: !0
                                }),
                                onClick: r
                            })
                        })]
                    })
                },
                X = n(60394),
                Q = n(31355),
                $ = n(20406),
                ee = n(28526),
                et = n.n(ee),
                en = n(12483),
                er = n(58872),
                ei = n(26909),
                eo = n(28811),
                es = n(96412),
                ea = n(13089),
                ec = n(41701),
                el = n(90129),
                ed = n(29017),
                eu = n(48200),
                ef = n(53418),
                ep = n(86615),
                eh = n(16467),
                em = n(55304),
                ex = n(9433),
                eg = [new(function(e) {
                    (0, el.Z)(s, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(s);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function s(e) {
                        var t;
                        return (0, es.Z)(this, s), t = i.call(this, e), (0, o.Z)((0, ec.Z)(t), "prompt", void 0), t.prompt = e.prompt, t
                    }
                    return (0, ea.Z)(s, [{
                        key: "runPrompt",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.input, r = t.context, i = t.variables, o = t.trackFns, a = void 0 === (s = t.retries) ? 2 : s, e.next = 3, (0, ep.I)(n, r.interactionId, {
                                            timeout: eh.VH.get("aiRequestTimeouts").basicReply
                                        });
                                    case 3:
                                        if (c = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        throw Error("Couldn't get response from prompt");
                                    case 6:
                                        if (!((0, em.y)(c) || null != c && c.includes("```"))) {
                                            e.next = 11;
                                            break
                                        }
                                        if (!(a <= 0)) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new er.eo("Did not receive proper response after retries", {
                                            chatMessage: "Sorry, I am having trouble understanding. Could you try asking in a different way?",
                                            inputMessage: r.message,
                                            resp: c,
                                            interactionId: r.interactionId
                                        });
                                    case 9:
                                        return o.trackRequestRetry({
                                            interactionId: r.interactionId,
                                            retriesRemaining: a,
                                            resp: c
                                        }), e.abrupt("return", this.runPrompt({
                                            input: n,
                                            context: r,
                                            variables: i,
                                            trackFns: o,
                                            retries: a - 1
                                        }));
                                    case 11:
                                        return e.abrupt("return", c);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "run",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.context, r = t.addMessage, i = t.history, o = t.trackFns, s = t.provider, a = {
                                            message: n.message
                                        }, c = (0, ex.x)(i || []), l = this.prompt.prepare({
                                            variables: a,
                                            history: c,
                                            params: {
                                                provider: s
                                            },
                                            interactionId: n.interactionId
                                        }), e.next = 6, this.runPrompt({
                                            input: l,
                                            context: n,
                                            variables: a,
                                            trackFns: o,
                                            retries: 1
                                        });
                                    case 6:
                                        d = e.sent, o.trackRequestComplete({
                                            taskContext: n,
                                            outputMessage: d
                                        }), r({
                                            from: "Designer",
                                            type: "text",
                                            message: d,
                                            resp: d,
                                            interactionId: n.interactionId
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), s
                }(ef.B))({
                    key: "CHAT",
                    description: "A general chat message, or a request that doesn't fit any of the previous categories",
                    classifyExamples: ["hi how are you", "hdfoho;safjw", "help there are bees everywhere", "great job!", "this looks ugly"],
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.BasicReplyChatSystem,
                        userPromptOperation: eo.Run.BasicReplyChatUser,
                        variables: ["message"],
                        params: {
                            maxTokens: 150,
                            temperature: 0
                        }
                    })
                })],
                ev = function(e) {
                    return eg.find(function(t) {
                        return t.key === e
                    })
                },
                ej = function(e) {
                    return !!eg.find(function(t) {
                        return t.key === e
                    })
                },
                eb = n(12741),
                ey = n(81161),
                eC = n(80389),
                ew = n(62142),
                eO = n(22681),
                ek = n(9850),
                eI = n.n(ek),
                eS = n(86482),
                eE = n(37057),
                eP = n(38105),
                eD = n(44719),
                eA = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "insert-card"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), (0, o.Z)(this, "afterCardId", void 0), (0, o.Z)(this, "content", void 0), this.description = t.description, this.cardId = t.cardId, this.afterCardId = t.afterCardId, this.content = t.content
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            return !!(0, eE.Bw)(e, this.cardId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            var t = e.state.tr;
                            this.transact(e, t);
                            var n = eI()(t.doc.toJSON());
                            return (0, eD.Y0)(n, this.cardId)
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            if (this.isApplied(e)) {
                                console.debug("[InsertCardModification] NOT applying modification, card already exists with cardId=".concat(this.cardId), {
                                    modification: this
                                });
                                return
                            }
                            var t = e.state.tr;
                            this.transact(e, t), console.debug("[InsertCardModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t), (0, eS.YS)({
                                editor: e,
                                cardId: this.cardId
                            })
                        }
                    }, {
                        key: "transact",
                        value: function(e, t) {
                            var n = (0, eE.Bw)(e, this.afterCardId);
                            if (!n) return null;
                            var r = (0, eD.Fr)(e, this.content),
                                i = n.pos + n.node.nodeSize;
                            t.insert(i, r.content.firstChild);
                            var o = (0, eP.t)(t.doc.resolve(i), 1);
                            return t.setSelection(o), {
                                from: i,
                                to: i + t.doc.nodeAt(i).nodeSize
                            }
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.content
                        }
                    }]), e
                }(),
                eT = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "remove-card"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), this.description = t.description, this.cardId = t.cardId
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            return !(0, eE.Bw)(e, this.cardId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            return null
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            var t = e.state.tr,
                                n = (0, eE.Bw)(e, this.cardId);
                            n && (t.delete(n.pos, n.pos + n.node.nodeSize), console.debug("[RemoveCardModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t))
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.cardId
                        }
                    }]), e
                }(),
                eR = n(26349),
                e_ = function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p, h, m, x;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, o = (i = t.response).suggestion, s = i.message, a = i.raw, o) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No card content returned", {
                                            interactionId: r.interactionId,
                                            resp: a,
                                            chatMessage: s || (0, eR.az)(),
                                            inputMessage: r.message
                                        });
                                    case 3:
                                        return e.next = 5, (0, ey.y)(o);
                                    case 5:
                                        return c = e.sent.content, l = ew.C2.generate(), d = (0, eO.W3)((0, eO.VA)(n)), u = (0, eC.S)({
                                            bodyContent: c.toJSON(),
                                            index: 1,
                                            docFormatKey: d.key,
                                            theme: r.editorContext.theme,
                                            cardId: l
                                        }), x = {
                                            from: "Designer",
                                            type: "suggestContent",
                                            resp: a,
                                            message: s || "How about this?",
                                            suggestions: [p = {
                                                label: "New card",
                                                modification: f = new eA({
                                                    description: "New Card",
                                                    content: {
                                                        type: "json",
                                                        json: [u]
                                                    },
                                                    cardId: l,
                                                    afterCardId: r.editorContext.card.cardId
                                                }),
                                                jsonContentPreview: f.getPreviewJson(n)
                                            }, m = {
                                                label: "Remove card",
                                                modification: h = new eT({
                                                    description: "Remove card",
                                                    cardId: l
                                                }),
                                                jsonContentPreview: h.getPreviewJson(n)
                                            }],
                                            interactionId: r.interactionId
                                        }, console.debug("[addCard]", {
                                            insert: p,
                                            remove: m,
                                            message: s,
                                            html: o,
                                            cardLayout: u,
                                            content: c
                                        }), e.abrupt("return", {
                                            messages: [x],
                                            suggestionToApply: p
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(eR.w6),
                eL = new ei.V({
                    systemPromptOperation: eo.Run.AddCardSystem,
                    userPromptOperation: eo.Run.AddCardUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 1e3
                    }
                }),
                eM = new e_({
                    key: "ADD_CARD",
                    description: "Add a new card after the current one",
                    classifyExamples: ["add a new slide", "add a card describing our mission", "i want a new section for leadership development", "make another card", "on a new card compare the two options in a table"],
                    classifyReply: "Ok, I'll start writing a new card...",
                    prompt: eL
                }),
                ez = n(67397),
                eN = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "set-card-layout"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), (0, o.Z)(this, "layout", void 0), this.description = t.description, this.cardId = t.cardId, this.layout = t.layout
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            var t = (0, eE.Bw)(e, this.cardId);
                            return t ? t.node.attrs.layout === this.layout : (console.error("[SetCardLayoutModification.apply] Could not find card to update: ".concat(this.cardId, ", maybe deleted")), !1)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            var t = e.state.tr;
                            this.transact(e, t);
                            var n = eI()(t.doc.toJSON()),
                                r = (0, eD.Y0)(n, this.cardId);
                            return console.debug("[SetCardLayoutModification.getPreviewJson] result", r), r
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            if (this.isApplied(e)) {
                                console.debug("[SetCardLayoutModification] NOT applying modification, card already has layout=".concat(this.layout), {
                                    modification: this
                                });
                                return
                            }
                            var t = e.state.tr;
                            this.transact(e, t), console.debug("[SetCardLayoutModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t), (0, eS.YS)({
                                editor: e,
                                cardId: this.cardId
                            })
                        }
                    }, {
                        key: "transact",
                        value: function(e, t) {
                            var n = (0, eE.Bw)(e, this.cardId);
                            if (!n) {
                                console.error("[SetCardLayoutModification.apply] Could not find card to update: ".concat(this.cardId, ", maybe deleted"));
                                return
                            }(0, ez.G)(e, t, n.pos, this.layout)
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.layout
                        }
                    }]), e
                }(),
                eZ = function() {
                    return Z.ag._({
                        id: "ppX7+s"
                    })
                },
                eG = new(function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, t.rangeId, o = (i = t.response).suggestion, s = i.raw, a = i.message, o) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No card layout returned", {
                                            resp: s,
                                            chatMessage: eZ(),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 3:
                                        if ((0, eE.ol)(o)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw console.error("Invalid card layout:", o), new er.$D("Invalid card layout: ".concat(o), {
                                            resp: s,
                                            chatMessage: eZ(),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 6:
                                        return c = new eN({
                                            description: Z.ag._({
                                                id: "nyQWMb"
                                            }),
                                            cardId: r.editorContext.card.cardId,
                                            layout: o
                                        }), l = {
                                            label: Z.ag._({
                                                id: "nyQWMb"
                                            }),
                                            modification: c,
                                            jsonContentPreview: c.getPreviewJson(n)
                                        }, d = new eN({
                                            description: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            cardId: r.editorContext.card.cardId,
                                            layout: r.editorContext.card.attrs.layout
                                        }), u = {
                                            label: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            modification: d,
                                            jsonContentPreview: d.getPreviewJson(n)
                                        }, f = {
                                            from: "Designer",
                                            type: "suggestContent",
                                            resp: s,
                                            message: a || Z.ag._({
                                                id: "pMSbe+"
                                            }),
                                            interactionId: r.interactionId,
                                            suggestions: [l, u]
                                        }, e.abrupt("return", {
                                            messages: [f],
                                            suggestionToApply: l
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(eR.w6))({
                    key: "MOVE_ACCENT_IMAGE",
                    description: "Move or remove the accent image of the card. Use ADD_IMAGE to add accent images.",
                    classifyExamples: ["move the sand dune to the left", "remove the cover photo"],
                    classifyReply: "Ok, I will move the accent image to the left...",
                    getTaskTarget: function(e) {
                        return e.card
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.ChangeAccentImageLayoutSystem,
                        userPromptOperation: eo.Run.ChangeAccentImageLayoutUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .2,
                            maxTokens: 100
                        }
                    }),
                    checkEnabled: function(e) {
                        return "blank" !== e.card.attrs.layout
                    }
                }),
                eF = new ei.V({
                    systemPromptOperation: eo.Run.ChangeContentSystem,
                    userPromptOperation: eo.Run.ChangeContentUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 1e3
                    }
                }),
                eU = new eR.w6({
                    key: "CHANGE_CONTENT",
                    description: "Rephrase, summarize, expand, change text formatting, add content, or express ideas differently.",
                    classifyExamples: ["condense this to just the key points", "say this like a pirate", "make this more formal", "add a box about health benefits", "add more text please", "make the bullets red", "make the text bigger", "fill in the last  column", "write something about ___", "add ___ to the table"],
                    classifyReply: "Ok, I'll try making it shorter...",
                    prompt: eF
                }),
                eW = n(62670),
                eV = n(81333),
                eH = n(40163),
                eB = n(31470),
                eq = n(11558),
                eK = new ei.V({
                    systemPromptOperation: eo.Run.RateImagesSystem,
                    userPromptOperation: eo.Run.RateImagesUser,
                    variables: ["dataset"],
                    params: {
                        temperature: .1,
                        maxTokens: 100
                    }
                }),
                eY = (r = (0, $.Z)(et().mark(function e(t, n) {
                    var r, i, o;
                    return et().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.map(function(e, t) {
                                    var n = e.description,
                                        r = e.query;
                                    return "".concat(t + 1, ": ").concat(n, ": ").concat(r)
                                }).join("\n"), i = eK.prepare({
                                    variables: {
                                        dataset: r
                                    },
                                    history: []
                                }), e.next = 4, (0, ep.I)(i, n, {
                                    timeout: eh.VH.get("aiRequestTimeouts").rateImages
                                });
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = "";
                            case 7:
                                return o = e.t0, e.abrupt("return", o.split("\n").map(function(e) {
                                    var t = e.split("-");
                                    return Number((0, eV.Z)(t, 2)[1].trim())
                                }));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t) {
                    return r.apply(this, arguments)
                });

            function eJ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eX(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eJ(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eJ(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eQ = {
                    GOOGLE: "google",
                    UNSPLASH: "unsplash",
                    GIPHY: "giphy"
                },
                e$ = new(function(e) {
                    (0, el.Z)(o, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(o);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function o() {
                        return (0, es.Z)(this, o), i.apply(this, arguments)
                    }
                    return (0, ea.Z)(o, [{
                        key: "getResponseData",
                        value: (n = (0, $.Z)(et().mark(function e(t, n) {
                            var r, i, o, s;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all(t.replaceAll(this.key, "").split("\n").map(function() {
                                            var e = (0, $.Z)(et().mark(function e(t) {
                                                var n, r, i, o, s, a, c;
                                                return et().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return n = t.split(": "), i = (r = (0, eV.Z)(n, 2))[0], o = r[1].split(",").map(function(e) {
                                                                return e.trim()
                                                            }).slice(0, 2), a = "google" === (s = eQ[i.trim()] || "web") ? "web" : s, e.next = 6, (0, eH.J)({
                                                                queries: o,
                                                                count: eB.x.count,
                                                                provider: a,
                                                                prefetch: !0,
                                                                options: {
                                                                    gammaFeature: "aiChat"
                                                                }
                                                            });
                                                        case 6:
                                                            return c = e.sent, e.abrupt("return", c);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 2:
                                        return console.debug("[SuggestImagesTask][getResponseData] allResults", r = e.sent.flat()), console.debug("[SuggestImagesTask][imageRatingData]", {
                                            imagesToRate: i = r.map(function(e) {
                                                var t = e.image,
                                                    n = e.query,
                                                    r = e.provider,
                                                    i = (0, eq.C)(t, n, r);
                                                return {
                                                    description: (0, eq.K)(i) || "",
                                                    query: n
                                                }
                                            })
                                        }), e.prev = 6, e.next = 9, eY(i, n);
                                    case 9:
                                        if (console.debug("[SuggestImagesTask][imageRatingValues]", {
                                                imageRatingValues: o = e.sent
                                            }), !(o.length !== r.length)) {
                                            e.next = 13;
                                            break
                                        }
                                        throw Error("Image rating values length does not match allResults length");
                                    case 13:
                                        return console.debug("[SuggestImagesTask][allResultsSorted]", {
                                            allResultsSorted: s = r.map(function(e, t) {
                                                return eX(eX({}, e), {}, {
                                                    rating: o[t]
                                                })
                                            }).sort(function(e, t) {
                                                return t.rating - e.rating
                                            })
                                        }), e.abrupt("return", s);
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(6), console.warn("[SuggestImagesTask] Error rating images. Returing unsorted results.", e.t0);
                                    case 22:
                                        return e.abrupt("return", r);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [6, 19]
                            ])
                        })), function(e, t) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getResponseMessages",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.context, i = (r = t.response).message, o = r.raw, s = r.suggestion) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No image results were returned", {
                                            resp: o,
                                            inputMessage: n.message,
                                            chatMessage: i || "I'm sorry, I wasn't able to find any images for this.",
                                            interactionId: n.interactionId
                                        });
                                    case 3:
                                        return e.next = 5, this.getResponseData(s, n.interactionId);
                                    case 5:
                                        return a = {
                                            from: "Designer",
                                            type: "suggestImages",
                                            suggestions: e.sent,
                                            resp: o,
                                            interactionId: n.interactionId,
                                            message: i || "Here are some suggestions:"
                                        }, e.abrupt("return", {
                                            messages: [a]
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), o
                }(eR.w6))({
                    key: "ADD_IMAGE",
                    description: "Add images, or replace an existing image. Do not use for moving or removing images.",
                    classifyExamples: ["add a picture of a bus", "find some different images", "this needs a pic", "show me dolphins", "find a meme of stonks", "give me more images", "add a background image", "i need a graph of population over time"],
                    classifyReply: "Let me look for some good bus pictures...",
                    getTaskTarget: function(e) {
                        return e.defaultRange
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.SuggestImagesSystem,
                        userPromptOperation: eo.Run.SuggestImagesUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .7,
                            maxTokens: 500
                        }
                    })
                }),
                e0 = n(75248);

            function e1(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e2(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e1(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function e5(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var e3 = new(function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseData",
                        value: function(e) {
                            var t, n = [],
                                r = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return e5(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e5(e, t)
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
                                    var o, s = !0,
                                        a = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return s = e.done, e
                                        },
                                        e: function(e) {
                                            a = !0, o = e
                                        },
                                        f: function() {
                                            try {
                                                s || null == n.return || n.return()
                                            } finally {
                                                if (a) throw o
                                            }
                                        }
                                    }
                                }(e.matchAll(/^\/\/\s*(.*)$\n(.*)$/gm));
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value,
                                        o = i[1],
                                        s = i[2];
                                    n.push({
                                        reason: o,
                                        value: s
                                    })
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            return n
                        }
                    }, {
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, i = t.rangeId, s = (o = t.response).suggestion, a = o.message, c = o.raw, s) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No suggestions found in response", {
                                            interactionId: r.interactionId,
                                            inputMessage: r.message,
                                            chatMessage: a || Z.ag._({
                                                id: "7KKeOM"
                                            })
                                        });
                                    case 3:
                                        return l = this.getResponseData(s).map(function(e) {
                                            var t = new e0.O(n, {
                                                description: e.reason,
                                                content: {
                                                    type: "html",
                                                    html: e.value
                                                },
                                                rangeId: i
                                            });
                                            return e2(e2({}, e), {}, {
                                                modification: t
                                            })
                                        }), d = this.determineTaskTarget(r.editorContext).html, u = new e0.O(n, {
                                            description: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            content: {
                                                type: "html",
                                                html: d
                                            },
                                            rangeId: i
                                        }), f = {
                                            reason: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            value: d,
                                            modification: u
                                        }, p = {
                                            from: "Designer",
                                            type: "suggestText",
                                            message: a || Z.ag._({
                                                id: "3YHvwF"
                                            }),
                                            resp: c,
                                            suggestions: [].concat((0, eb.Z)(l), [f]),
                                            interactionId: r.interactionId
                                        }, e.abrupt("return", {
                                            messages: [p]
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(eR.w6))({
                    key: "SUGGEST_TEXT",
                    description: "Open-ended request to rephrase a sentence or paragraph",
                    classifyExamples: ["write a better headline", "How else could i say this?", "this feels too corporate", "suggest a more engaging way to say this", "give me a more interesting description"],
                    classifyReply: "Let me think of some other headlines...",
                    getTaskTarget: function(e) {
                        return e.selectionRange
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.SuggestTextSystem,
                        userPromptOperation: eo.Run.SuggestTextUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .7,
                            maxTokens: 1e3
                        }
                    }),
                    checkEnabled: function(e) {
                        var t = e.selection,
                            n = t instanceof V.Bs,
                            r = t.$from.parent.eq(t.$to.parent);
                        return n && !t.empty && t.to - t.from < 800 && r
                    }
                }),
                e6 = function() {
                    function e(t, n) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "change-theme"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "themeId", void 0), this.description = n.description, this.themeId = n.themeId
                    }
                    return (0, ea.Z)(e, [{
                        key: "apply",
                        value: function(e, t) {
                            t.setThemeWithAccentImages(this.themeId)
                        }
                    }, {
                        key: "isApplied",
                        value: function(e, t) {
                            return t.isThemeApplied(this.themeId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.themeId
                        }
                    }]), e
                }(),
                e4 = function(e) {
                    (0, el.Z)(o, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(o);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function o() {
                        return (0, es.Z)(this, o), i.apply(this, arguments)
                    }
                    return (0, ea.Z)(o, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p, h;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.editor, r = t.context, o = (i = t.response).raw, s = i.suggestion, a = i.message, l = (c = t.themeModificationController).currentThemeId, d = c.isValidTheme, u = null == s ? void 0 : s.split("\n"), e.next = 5, this.getFilteredSuggestions({
                                            ids: u,
                                            idToRemove: l,
                                            editor: n,
                                            isValid: d
                                        });
                                    case 5:
                                        if (0 !== (f = e.sent).length) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new er.$D("[SuggestContentTask] No themes provided in prompt response", {
                                            resp: o,
                                            chatMessage: Z.ag._({
                                                id: "GNHk+9"
                                            }),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 8:
                                        return p = {
                                            label: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            themeId: l,
                                            modification: new e6(n, {
                                                description: Z.ag._({
                                                    id: "HxF6Fk"
                                                }),
                                                themeId: l
                                            }),
                                            isOriginal: !0
                                        }, h = {
                                            from: "Designer",
                                            type: "suggestThemes",
                                            resp: o,
                                            message: a || Z.ag._({
                                                id: "pMSbe+"
                                            }),
                                            suggestions: [].concat((0, eb.Z)(f), [p]),
                                            interactionId: r.interactionId
                                        }, e.abrupt("return", {
                                            messages: [h],
                                            suggestionToApply: f[0]
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getFilteredSuggestions",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.ids, r = t.idToRemove, i = t.editor, o = t.isValid, !(!n || 0 === n.length)) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", []);
                                    case 3:
                                        return e.next = 5, Promise.all(n.map(function(e) {
                                            return o(e).then(function(t) {
                                                return t ? e : null
                                            })
                                        }));
                                    case 5:
                                        return s = e.sent.filter(function(e) {
                                            return null !== e
                                        }).filter(function(e) {
                                            return e !== r
                                        }).map(function(e) {
                                            var t = new e6(i, {
                                                description: Z.ag._({
                                                    id: "nyQWMb"
                                                }),
                                                themeId: e
                                            });
                                            return {
                                                label: Z.ag._({
                                                    id: "nyQWMb"
                                                }),
                                                themeId: e,
                                                modification: t
                                            }
                                        }), e.abrupt("return", s);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), o
                }(eR.w6),
                e8 = new ei.V({
                    systemPromptOperation: eo.Run.SuggestThemeSystem,
                    userPromptOperation: eo.Run.SuggestThemeUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 100,
                        model: "gpt-4"
                    }
                }),
                e7 = new e4({
                    key: "SUGGEST_THEME",
                    description: "Suggest a theme for the deck. This task will suggest themes based on the deck content or the prompt",
                    classifyExamples: ["change the theme", "give me a blue theme", "change the color palette", "make this a dark theme", "use a more colorful theme", "let's change the look and the feel", "change the theme to lilac and periwinkle", "i'd like it to look more cheerful and welcoming"],
                    classifyReply: "Let me find some themes...",
                    prompt: e8
                }),
                e9 = [eG, eW.a, eU, e3, e$, eM, e7],
                te = function(e) {
                    return e9.find(function(t) {
                        return t.key === e
                    })
                },
                tt = function(e) {
                    return !!e9.find(function(t) {
                        return t.key === e
                    })
                },
                tn = function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, es.Z)(this, i), t = r.call(this, e), (0, o.Z)((0, ec.Z)(t), "apology", void 0), (0, o.Z)((0, ec.Z)(t), "apologyLink", void 0), t.apology = e.apology, t.apologyLink = e.apologyLink, t
                    }
                    return (0, ea.Z)(i, [{
                        key: "run",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.classificationResult, r = t.addMessage, i = t.context, o = t.trackFns, r({
                                            from: "Designer",
                                            type: "unsupported",
                                            task: n.classification,
                                            message: this.apology,
                                            learnMoreLink: this.apologyLink,
                                            resp: n.resp,
                                            interactionId: i.interactionId
                                        }), o.trackRequestComplete({
                                            taskContext: i,
                                            outputMessage: this.apology
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(ef.B),
                tr = new tn({
                    key: "CHANGE_CARD_BACKGROUND",
                    description: "Change the background of the entire section.",
                    classifyExamples: ["make the background red", "put a tunnel in the background", "remove the background", "get rid of the image in the background"],
                    apology: "Sorry, I can't change backgrounds yet, but you can click on a card and change the background yourself. You can also change the doc background by clicking the Theme button."
                }),
                ti = new tn({
                    key: "CHANGE_FONT",
                    description: "Change the font family or font style.",
                    classifyExamples: ["give me a more playful font", "make the headings use arial", "change the font to be more readable"],
                    apology: "Sorry, I can't change fonts yet. But you can edit them yourself by creating a custom theme.",
                    apologyLink: "https://gamma.app/public/o2he6ual8noal7u#card-82e40n78edir2x8"
                }),
                to = new tn({
                    key: "RESIZE_IMAGE",
                    description: "Change the size of an image (its dimensions), or crop an image",
                    classifyExamples: ["make the image smaller", "can you make the cat bigger", "crop it so it's just the face", "I want the disposition of the photos for more portrait instead of landscape"],
                    apology: "Sorry, I can't resize images yet. But you can do it yourself by clicking on the image and dragging the boxes on the corners, or pressing the crop button above the image."
                }),
                ts = new tn({
                    key: "EXPORT",
                    description: "Export or download the deck into a different a format.",
                    classifyExamples: ["download as ppt", "make a pdf", "export to google slides"],
                    apology: "Sorry, I can't export files yet. However, you can download a PDF yourself by using the Share menu."
                }),
                ta = new tn({
                    key: "SPLIT_CARD",
                    description: "Split a card into multiple cards, or move content between cards.",
                    classifyExamples: ["break this into two cards", "split this up as multiple slides", "put the gallery on the next card"],
                    apology: "Sorry, I can't split cards or move things between them yet. However, you can split cards yourself by typing /split inside a card."
                }),
                tc = new tn({
                    key: "NEW_DECK",
                    description: "Create a whole new deck",
                    classifyExamples: ["i need a presentation about [topic]", "write a whole document about animal", "make me a landing page about this"],
                    apology: "To make a new deck, go back to the home screen and click New with AI."
                }),
                tl = new tn({
                    key: "CHANGE_MULTIPLE_CARDS",
                    description: "Make changes across multiple cards at once",
                    classifyExamples: ["I want this entire deck to be summarized", "combine the cards together in one", "make the whole doc sound more professional", "make the deck more consistent"],
                    apology: "Sorry, I can only change one card at a time right now."
                }),
                td = new tn({
                    key: "ADD_VIDEO",
                    description: "Add a video or replace an existing video",
                    classifyExamples: ["add a youtube video about scrum", "find videos of cats", "i need more videos"],
                    apology: "Sorry, I can't search for videos yet. You can embed video by copying the URL and pasting it into the card directly."
                }),
                tu = new tn({
                    key: "ADD_FOOTNOTE",
                    description: "Add a footnote to a card, or change footnotes",
                    classifyExamples: ["add a biography for him in a footnote", "put the details into footnotes"],
                    apology: "Sorry, I haven't learned to add footnotes yet. You can make footnotes by highlighting text and clicking the footnote button in the menu."
                }),
                tf = [tr, ti, to, ts, ta, new tn({
                    key: "MOVE_CARD",
                    description: "Move a card to a different position in the deck",
                    classifyExamples: ["shift the slide to the top", "move this card to the bottom"],
                    apology: "Sorry, I haven't learned to move cards yet. You can move them by hovering on the table of contents on the left side of the screen and dragging them around."
                }), tc, tl, td, tu, new tn({
                    key: "ADD_CHART",
                    description: "Add a chart, diagram, or graph",
                    classifyExamples: ["put this information into a scatter plot", "add a card about market share using a pie chart", "i need to display this as a flow chart", "create a diagram illustrating the interactions and relationships", "can you change the card to have a line graph", "turn this into a gantt chart", "could you do this as a funnel diagram"],
                    apology: "Sorry, Gamma doesn't support charts yet. You can paste in images of charts from other tools, or type /diagram in the editor to draw your own."
                }), new tn({
                    key: "ANIMATION",
                    description: "Add animations to a card or edit animations",
                    classifyExamples: ["animate transitions", "make the text appear one by one", "fade in the images", "make the bullets fly in"],
                    apology: 'Sorry, Gamma doesn\'t support custom animations yet. You can animate line by line by going into Present mode and pressing S for "spotlight".'
                }), new tn({
                    key: "FOLLOW_LINK",
                    description: "Read content from an external website",
                    classifyExamples: ["go to this website and add the content to this card http://www.example.com/", "here is his linkedin page now add the details https://www.linkedin.com/...", "add the images from https://medium.com/posts/2022/9/6/..."],
                    apology: "Sorry, I'm not able to open links and read the content."
                })],
                tp = function(e) {
                    return tf.find(function(t) {
                        return t.key === e
                    })
                },
                th = new ei.V({
                    variables: ["message", "taskList", "ackExamples", "html", "cardHtml"],
                    systemPromptOperation: eo.Run.ClassifySystem,
                    userPromptOperation: eo.Run.ClassifyUser,
                    params: {
                        maxTokens: 100,
                        temperature: .2
                    }
                }),
                tm = [].concat((0, eb.Z)(e9), (0, eb.Z)(tf), (0, eb.Z)(eg)),
                tx = "\uD83D\uDE14 Sorry, I didn't understand your request. Could you please try asking a different way?",
                tg = (i = (0, $.Z)(et().mark(function e(t) {
                    var n, r, i, o, s, a, c, l, u, f, p, h;
                    return et().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.message, r = t.context, i = t.history, o = t.provider, a = (s = tb(tm, r.editorContext)).ackExamples, c = s.taskList, l = s.enabledTasks, u = ty(i), f = th.prepare({
                                    variables: {
                                        message: n,
                                        ackExamples: a,
                                        taskList: c,
                                        html: r.editorContext.defaultRange.html,
                                        cardHtml: r.editorContext.card.html
                                    },
                                    params: {
                                        provider: o
                                    },
                                    history: u
                                }), console.debug("[AIChat classify] Getting classification", {
                                    classifyHistory: u,
                                    input: f
                                }), e.next = 7, (0, ep.I)(f, r.interactionId, {
                                    timeout: d.VH.get("aiRequestTimeouts").classify
                                });
                            case 7:
                                if (h = tj(p = e.sent, l)) {
                                    e.next = 15;
                                    break
                                }
                                return console.debug("Failed classification, trying again...", {
                                    resp: p,
                                    parsedResp: h
                                }), e.next = 13, (0, ep.I)(f, r.interactionId);
                            case 13:
                                h = tj(p = e.sent, l);
                            case 15:
                                if (h) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", {
                                    type: "UNKNOWN",
                                    classification: "UNKNOWN",
                                    ack: tx,
                                    resp: p || ""
                                });
                            case 17:
                                return console.debug("[AIChat classify] Got classification", {
                                    resp: p,
                                    parsedResp: h
                                }), e.abrupt("return", h);
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                tv = "Ok, I'll get right on it.",
                tj = function(e, t) {
                    if (e) {
                        var n, r = e.split("\n"),
                            i = null === (n = r[0]) || void 0 === n ? void 0 : n.trim().toUpperCase();
                        if (t.find(function(e) {
                                return e.key === i
                            })) {
                            var o = r[1];
                            return {
                                classification: i.trim(),
                                ack: o.includes(i.trim()) ? tv : o || ("UNKNOWN" !== i ? tv : tx),
                                resp: e,
                                type: "CLASSIFICATION"
                            }
                        }
                    }
                },
                tb = function(e, t) {
                    var n = e.filter(function(e) {
                        return !t || !e.checkEnabled || e.checkEnabled(t)
                    });
                    return {
                        taskList: n.map(function(e) {
                            var t;
                            return "".concat(e.key, ": ").concat(e.description, "\n").concat(null === (t = e.classifyExamples) || void 0 === t ? void 0 : t.map(function(e) {
                                return "- ".concat(e)
                            }).join("\n"))
                        }).join("\n\n"),
                        ackExamples: n.filter(function(e) {
                            return e.classifyExamples && e.classifyExamples.length > 0 && e.classifyReply
                        }).map(function(e) {
                            return "Request:\n".concat(e.classifyExamples[0], "\nResponse:\n").concat([e.key, e.classifyReply].join("\n"))
                        }).join("\n\n"),
                        enabledTasks: n
                    }
                },
                ty = function(e) {
                    return e.slice(-7).map(function(e) {
                        return "User" === e.from ? {
                            role: eo.XaP.User,
                            content: e.message
                        } : e.isClassification ? {
                            role: eo.XaP.Assistant,
                            content: e.resp
                        } : null
                    }).filter(function(e) {
                        return !!e
                    })
                },
                tC = n(84426),
                tw = n(64805),
                tO = n(65618),
                tk = n(12132),
                tI = n(44934),
                tS = n(25478),
                tE = n(78985),
                tP = n(78871),
                tD = n(76085),
                tA = function(e, t) {
                    var n = e.state.doc.slice(t.from, t.to).content;
                    return (0, tS.c)(e, n)
                },
                tT = function(e, t) {
                    var n = e.state.selection,
                        r = (0, tP.Ru)(n.$from, eE.KH)[0],
                        i = r && (0, I.NE)(r.node, r.pos);
                    if (!r || !i) throw Error("Cant find parent card for selection ".concat(n));
                    var o = {
                            from: r.pos,
                            to: r.pos + r.node.nodeSize
                        },
                        s = {
                            from: i.pos + 1,
                            to: i.pos + i.node.nodeSize - 1
                        },
                        a = n.$from.blockRange(n.$to),
                        c = {
                            from: a.start,
                            to: a.end
                        },
                        l = {
                            range: (0, tD.bb)(e.state, s),
                            html: tA(e, s)
                        },
                        d = {
                            range: (0, tD.bb)(e.state, n),
                            html: tA(e, n)
                        },
                        u = {
                            range: (0, tD.bb)(e.state, c),
                            html: tA(e, c)
                        },
                        f = n instanceof V.qv && (0, eE.KH)(n.node) || n.empty || 0 === d.html.trim().length || n instanceof V.qv && n.node.isAtom,
                        p = !n.$from.parent.eq(n.$to.parent) || 0 === a.$from.parentOffset && a.$to.parentOffset === a.$to.parent.content.size,
                        h = d,
                        x = "selectionRange";
                    f ? (h = l, x = "cardContent") : p && (h = u, x = "blockRange");
                    var g = tR(t),
                        v = (0, m.Pu)(t.getState());
                    return {
                        card: {
                            cardId: r.node.attrs.id,
                            range: (0, tD.bb)(e.state, o),
                            html: tA(e, o),
                            attrs: r.node.attrs
                        },
                        cardContent: l,
                        blockRange: u,
                        selectionRange: d,
                        defaultRange: h,
                        selection: n,
                        outline: g,
                        selectedDefaultRange: x,
                        theme: v
                    }
                },
                tR = function(e) {
                    var t = e.getState(),
                        n = (0, m.X9)(t),
                        r = (0, tE.mT)(t);
                    return Object.keys(n.tree).map(function(e) {
                        var t;
                        return null === (t = r.find(function(t) {
                            return t.id === e
                        })) || void 0 === t ? void 0 : t.title
                    }).filter(function(e) {
                        return !!e
                    }).join("\n")
                },
                t_ = n(2032),
                tL = function(e) {
                    var t, n = e.editor,
                        r = e.addMessage,
                        i = e.getMessageHistory,
                        o = (0, l.useState)("idle"),
                        s = o[0],
                        a = o[1],
                        c = (0, p.qr)(),
                        d = (0, t_.E)(),
                        u = (0, B.q)().hasEnoughCreditsToChat,
                        f = (0, tO.T)(),
                        h = (0, tk.g5)();
                    return {
                        sendMessage: (0, l.useCallback)((t = (0, $.Z)(et().mark(function e(t) {
                            var o, s, l, p, m, x, g, v, j, b, y, C, w;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = t.message, n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (s = void 0, l = void 0, p = void 0, m = (0, tw.nZ)(), e.prev = 7, s = tT(n, c), console.debug("[AIChat] starting interaction", l = {
                                                interactionId: m,
                                                startTime: performance.now(),
                                                message: o,
                                                editorContext: s,
                                                docId: n.gammaDocId
                                            }), x = i(), r({
                                                from: "User",
                                                type: "text",
                                                message: o,
                                                interactionId: m
                                            }), d.trackRequestSent(l, h), u) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 16:
                                        return a("classifying"), e.next = 19, tg({
                                            message: o,
                                            context: l,
                                            history: x,
                                            provider: h
                                        });
                                    case 19:
                                        if (g = e.sent, d.trackClassification({
                                                taskContext: l,
                                                classification: g.classification
                                            }), a("fetching"), console.debug("[AIChat] Starting task", {
                                                taskContext: l,
                                                classification: g.classification,
                                                history: x
                                            }), "UNKNOWN" !== g.type) {
                                            e.next = 28;
                                            break
                                        }
                                        r({
                                            from: "Designer",
                                            type: "text",
                                            message: g.ack,
                                            resp: g.resp,
                                            isClassification: !0,
                                            interactionId: m
                                        }), d.trackRequestComplete({
                                            taskContext: l,
                                            outputMessage: g.ack
                                        }), e.next = 47;
                                        break;
                                    case 28:
                                        if (!ej(g.classification)) {
                                            e.next = 34;
                                            break
                                        }
                                        return v = ev(g.classification), e.next = 32, v.run({
                                            editor: n,
                                            addMessage: r,
                                            context: l,
                                            classificationResult: g,
                                            history: x,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 32:
                                    case 38:
                                        e.next = 47;
                                        break;
                                    case 34:
                                        if (!tp(g.classification)) {
                                            e.next = 40;
                                            break
                                        }
                                        return j = tp(g.classification), e.next = 38, j.run({
                                            editor: n,
                                            context: l,
                                            addMessage: r,
                                            classificationResult: g,
                                            history: x,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 40:
                                        if (!tt(g.classification)) {
                                            e.next = 47;
                                            break
                                        }
                                        return r({
                                            from: "Designer",
                                            type: "text",
                                            message: g.ack || "Sure, let me see what I can do...",
                                            resp: g.resp,
                                            isClassification: !0
                                        }), b = i(), y = te(g.classification), e.next = 46, y.run({
                                            editor: n,
                                            context: l,
                                            addMessage: r,
                                            classificationResult: g,
                                            history: b,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 46:
                                        p = "chatSuggestion";
                                    case 47:
                                        e.next = 54;
                                        break;
                                    case 49:
                                        e.prev = 49, e.t0 = e.catch(7), console.log("[AIChat.sendMessage] ERROR: ".concat(e.t0.message, "}"), {
                                            err: e.t0,
                                            taskContext: l
                                        }), C = "Sorry, something unexpected happened. Please try again.", e.t0 instanceof er.Og ? (r({
                                            from: "Designer",
                                            type: "text",
                                            message: w = e.t0.opts.chatMessage || C,
                                            resp: e.t0.opts.resp,
                                            interactionId: m
                                        }), d.trackRequestError({
                                            errorName: e.t0.name,
                                            interactionId: m,
                                            outputMessage: w,
                                            errorMessage: e.t0.message,
                                            resp: e.t0.opts.resp
                                        })) : (en.Tb(e.t0), r({
                                            from: "Designer",
                                            type: "text",
                                            message: C,
                                            interactionId: m
                                        }), d.trackRequestError({
                                            errorName: e.t0.name,
                                            interactionId: m,
                                            outputMessage: C,
                                            errorMessage: e.t0.message,
                                            errorCode: (0, tC.uc)(e.t0)[0]
                                        }));
                                    case 54:
                                        p && (0, tI.d)(p), a("idle");
                                    case 56:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [7, 49]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [n, c, i, r, d, u, f, h]),
                        status: s
                    }
                };

            function tM(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tz = function(e) {
                    var t = e.editor,
                        n = e.scrollSelector,
                        r = e.onClose,
                        i = (0, l.useState)(""),
                        s = i[0],
                        c = i[1],
                        u = (0, d.ye)("openAiStatus"),
                        f = (0, p.TL)(),
                        h = (0, O.As)("editor"),
                        m = (0, p.qr)(),
                        x = (0, p.CG)(Q.AZ),
                        S = (0, p.CG)(Q.Q_),
                        E = (0, l.useState)(null),
                        P = E[0],
                        D = E[1],
                        A = (0, l.useCallback)(function() {
                            return (0, Q.AZ)(m.getState())
                        }, [m]),
                        T = (0, l.useCallback)(function(e) {
                            var t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? tM(Object(n), !0).forEach(function(t) {
                                        (0, o.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tM(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                timestamp: Date.now()
                            }, e);
                            f((0, Q.Hz)({
                                message: t
                            }))
                        }, [f]),
                        R = (0, l.useCallback)(function() {
                            f((0, Q.mc)())
                        }, [f]),
                        _ = tL({
                            addMessage: T,
                            getMessageHistory: A,
                            editor: t
                        }),
                        N = _.status,
                        Z = _.sendMessage;
                    (0, l.useEffect)(function() {
                        var e = n && document.querySelector(n);
                        e && requestAnimationFrame(function() {
                            e.scrollTop = e.scrollHeight
                        })
                    }, [n, x]);
                    var G = "idle" !== N;
                    (0, l.useEffect)(function() {
                        if (S.length && !G) {
                            var e = S[0],
                                t = e.task,
                                n = e.id;
                            !1 === t.submit ? c(t.message) : Z({
                                message: t.message
                            }), f((0, Q.VB)({
                                id: n
                            }))
                        }
                    }, [G, Z, f, S]);
                    var F = (0, l.useCallback)(function() {
                            if (P && t) {
                                var e = document.querySelector('[data-card-id="'.concat(P, '"]')),
                                    n = (0, O.v4)(e, 100);
                                null != n && n.yAxisInView || h.scrollElementIntoView({
                                    element: e
                                })
                            }
                        }, [t, h, P]),
                        U = (0, l.useCallback)(function(e) {
                            F(), Z({
                                message: e
                            })
                        }, [F, Z]),
                        W = (0, l.useCallback)(function() {
                            U(s), c("")
                        }, [U, s]);
                    return ((0, l.useEffect)(function() {
                        if (t) {
                            var e = function() {
                                var e = (0, I.AQ)(t, t.state.selection.from);
                                e && D(e.node.attrs.id)
                            };
                            return e(), t.on("selectionUpdate", e),
                                function() {
                                    t.off("selectionUpdate", e)
                                }
                        }
                    }, [t]), t) ? "DOWN" === u ? (0, L.jsx)(M, {
                        onClose: r
                    }) : (0, L.jsxs)(a.k, {
                        direction: "column",
                        h: "100%",
                        w: "100%",
                        px: 6,
                        pb: 2,
                        children: ["DEGRADED" === u && (0, L.jsx)(z, {}), (0, L.jsx)(X.rN, {
                            scrollSelector: n,
                            messages: x,
                            editor: t,
                            sendMessage: U,
                            isLoading: G,
                            onClose: r
                        }), (0, L.jsxs)(j.K, {
                            pos: "sticky",
                            bottom: 0,
                            py: 2,
                            pt: 4,
                            bg: "gray.50",
                            children: [(0, L.jsx)(J, {
                                editor: t,
                                value: s,
                                onChange: c,
                                onSubmit: W,
                                isLoading: G,
                                resetMessages: R
                            }), (0, L.jsx)(w.r, {
                                modalId: "ai-credits-modal-message-list",
                                variant: "ghost",
                                justify: "flex-end",
                                segmentEvent: k.AA.GAMMA_UPSELL_CALLOUT_AI_CREDITS_CHAT
                            })]
                        }), (0, L.jsx)(C.kH, {
                            label: (0, L.jsx)(v.cC, {
                                id: "5eg0kp"
                            }),
                            placement: "top",
                            children: (0, L.jsx)(b.h, {
                                variant: "ghost",
                                colorScheme: "blackAlpha",
                                color: "currentColor",
                                "aria-label": "reset-chat",
                                icon: (0, L.jsx)(y.G, {
                                    icon: g.Yc
                                }),
                                onClick: R,
                                position: "absolute",
                                left: 4,
                                top: 1,
                                isRound: !0
                            })
                        })]
                    }) : null
                },
                tN = n(23026),
                tZ = n(97907),
                tG = function(e) {
                    var t = e.onClose;
                    return (0, L.jsx)(a.k, {
                        width: "100%",
                        px: 6,
                        py: 4,
                        justifyContent: "space-between",
                        alignItems: "center",
                        h: 8,
                        tabIndex: 0,
                        outline: "none",
                        position: "absolute",
                        top: 0,
                        children: (0, L.jsx)(tZ.P, {
                            "data-design-partner-close-button": !0,
                            position: "absolute",
                            top: 2,
                            right: 6,
                            zIndex: 1,
                            onClick: t
                        })
                    })
                },
                tF = ["closePanel"];

            function tU(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tU(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tU(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tV = "design-partner-panel-wrapper",
                tH = function(e) {
                    var t = e.toggleDesignPartnerPanel,
                        n = e.isDesignPartnerPanelOpen,
                        r = e.editor,
                        i = (0, d.ye)("aiChat"),
                        o = (0, p.TL)();
                    (0, l.useEffect)(function() {
                        return function() {
                            o((0, Q.mc)())
                        }
                    }, []);
                    var s = (0, p.CG)(m.hN);
                    (0, l.useEffect)(function() {
                        !s && n && t()
                    }, [s, n, t]), (0, l.useEffect)(function() {
                        var e, t;
                        r && (null === (e = (t = r.commands).setSalOpen) || void 0 === e || e.call(t, n))
                    }, [r, n]), (0, l.useEffect)(function() {
                        if (i) return tN.T.on("toggle", function(e) {
                            t(e.config)
                        })
                    }, [t, i]), (0, l.useEffect)(function() {
                        if (i) return h.pw.on("queueDesignPartnerTask", function(e) {
                            o((0, Q.Lj)({
                                task: e
                            })), t({
                                disableTransition: !1,
                                override: "open"
                            }), console.log("queueDesignPartnerTask", e)
                        })
                    }, [o, i, t]), (0, l.useEffect)(function() {
                        if (i && s) {
                            var e = (0, c.ZP)("mod+shift+S");
                            return u.F7.on("keydown", "DESIGN_PARTNER_PANEL", function(n) {
                                return !!e(n) && (t(), !0)
                            })
                        }
                    }, [t, i, s])
                },
                tB = function(e) {
                    var t = e.closePanel,
                        n = (0, s.Z)(e, tF),
                        r = (0, x._)().editor;
                    return (0, l.useEffect)(function() {
                        return u.F7.on("keydown", "DESIGN_PARTNER_PANEL", function(e) {
                            return !!document.activeElement.closest('[data-panelid="design-partner-panel"]') && "Escape" === e.key && (t(), !0)
                        })
                    }, [t]), (0, L.jsx)(f.s, tW(tW({}, n), {}, {
                        bgColor: "gray.50",
                        "data-panelid": "design-partner-panel",
                        borderLeftWidth: "1px",
                        children: (0, L.jsxs)(a.k, {
                            direction: "column",
                            h: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            className: tV,
                            w: "100%",
                            children: [(0, L.jsx)(tG, {
                                onClose: t
                            }), (0, L.jsx)(tz, {
                                editor: r,
                                scrollSelector: ".".concat(tV),
                                onClose: t
                            })]
                        })
                    }))
                };
            tB.panelPosition = "right"
        },
        81510: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return b
                }
            });
            var r = n(95235),
                i = n(55452),
                o = n(11919),
                s = n(45650),
                a = n(84103),
                c = n(36895),
                l = n(97261),
                d = n(2784),
                u = n(95828),
                f = n(22550),
                p = n(36188),
                h = n(57560),
                m = n(34972),
                x = n(61528),
                g = n(52322);

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var b = function(e) {
                var t = (0, m._i)().docId,
                    n = (0, h.Yy)(),
                    r = (0, p.z$)(),
                    v = (0, d.useCallback)(function() {
                        null == r || r.track(p.AA.MADE_WITH_GAMMA_CLICKED, {
                            doc_id: t
                        })
                    }, [r, t]),
                    b = (0, f.dU)();
                return void 0 === b || b ? null : (0, g.jsx)(o.k, j(j(j({}, (0, x.s2)() ? {
                    display: "flex",
                    justifyContent: "center",
                    m: 6,
                    position: "relative"
                } : {
                    position: "fixed",
                    right: [1, 6],
                    bottom: [1, 4]
                }), e), {}, {
                    children: (0, g.jsx)(l.Wk, {
                        isDark: n,
                        children: (0, g.jsx)(s.z, {
                            as: a.r,
                            onClick: v,
                            variant: "plain",
                            target: "_blank",
                            href: "https://gamma.app",
                            textDecoration: "none !important",
                            leftIcon: (0, g.jsx)(c.E, {
                                src: "/_next/static/media/GammaLogoGradient.43edb67f.svg",
                                h: "1em"
                            }),
                            size: "sm",
                            children: (0, g.jsx)(i.cC, {
                                id: "vo61Ld",
                                values: {
                                    GAMMA_PROPER_NOUN: u.N6
                                }
                            })
                        })
                    })
                }))
            }
        },
        75393: function(e, t, n) {
            n.d(t, {
                VN: function() {
                    return f
                },
                rJ: function() {
                    return d
                },
                us: function() {
                    return u
                }
            });
            var r = n(2784),
                i = n(25232),
                o = n(36157),
                s = n(86482),
                a = n(17349),
                c = n(33932),
                l = "disable-card-size-animations",
                d = function() {
                    var e = (0, i.ye)("autoZoomToFit"),
                        t = (0, o.CG)(a.Kk);
                    return null != t ? t : e
                },
                u = function() {
                    var e = (0, o.CG)(a.i2),
                        t = (0, r.useRef)(),
                        n = d(),
                        i = !c.Pv && n;
                    (0, r.useEffect)(function() {
                        var n = !t.current;
                        t.current = e;
                        var r = n ? s.nY : s.id / 4;
                        e && i && setTimeout(function() {
                            document.body.classList.add(l), f(), setTimeout(function() {
                                document.body.classList.remove(l)
                            }, s.id / 2)
                        }, r)
                    }, [e, i])
                },
                f = function() {
                    var e = (0, o.bh)(),
                        t = document.documentElement.clientHeight,
                        n = document.querySelector('[data-animate-value="presentCurrent"][data-card-scroll-element]');
                    n && (e.dispatch((0, a.Ic)({
                        zoomLevel: 1
                    })), setTimeout(function() {
                        var r = n.scrollHeight,
                            i = t / r;
                        if (c.QX) i = Math.max(t / r, .7);
                        else {
                            if (i < .7) return;
                            i = Math.floor(10 * i) / 10
                        }
                        e.dispatch((0, a.Ic)({
                            zoomLevel: i
                        })), console.debug("[zoomPresentModeToFit] zooming", JSON.stringify({
                            viewportHeight: t,
                            cardHeight: r,
                            targetZoom: i
                        }))
                    }))
                }
        },
        20023: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return oY
                }
            });
            var r, i, o, s = n(95235),
                a = n(20406),
                c = n(81333),
                l = n(28526),
                d = n.n(l),
                u = n(53738),
                f = n(1472),
                p = n(11919),
                h = n(8283),
                m = n(93319),
                x = n(98841),
                g = n(25925),
                v = n(2784),
                j = n(68650),
                b = n(25232),
                y = n(7954),
                C = n(36157),
                w = n(91128),
                O = n(55452),
                k = n(45650),
                I = n(49929),
                S = n(28811),
                E = n(33837),
                P = n(65987),
                D = n(5945),
                A = n(52322),
                T = function(e) {
                    var t, n = e.doc,
                        r = (0, v.useState)(!1),
                        i = r[0],
                        o = r[1],
                        s = null == n ? void 0 : n.id,
                        c = null == n ? void 0 : null === (t = n.organization) || void 0 === t ? void 0 : t.id,
                        l = (0, D.py)("manage", n),
                        u = (0, S.bBo)({
                            variables: {
                                workspaceId: c
                            },
                            skip: !c || !l
                        }).data,
                        f = (0, P.uK)({
                            doc: n,
                            sites: null == u ? void 0 : u.sites
                        }),
                        p = (0, P.Yu)({
                            site: f,
                            docId: s
                        }),
                        h = (0, E.q)({
                            doc: n,
                            site: f,
                            path: p
                        }).publishAndDeploy,
                        m = (0, v.useCallback)((0, a.Z)(d().mark(function e() {
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o(!0), e.next = 3, h();
                                    case 3:
                                        o(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [h]);
                    return f ? (0, A.jsx)(k.z, {
                        size: "sm",
                        variant: "solid",
                        fontWeight: "400",
                        leftIcon: (0, A.jsx)(I.G, {
                            icon: w.A$
                        }),
                        onClick: m,
                        isLoading: i,
                        children: (0, A.jsx)(O.cC, {
                            id: "EEYbdt"
                        })
                    }) : null
                },
                R = n(27231),
                _ = n(17349),
                L = n(86407),
                M = n(54714),
                z = n(38404),
                N = n(3360),
                Z = n(61528),
                G = n(60883),
                F = n(92743),
                U = n(87254),
                W = n(97261),
                V = n(7099),
                H = n(20010),
                B = n(56915),
                q = n(48273),
                K = n(40110),
                Y = n(80353),
                J = n(12741),
                X = n(20412),
                Q = n(60577),
                $ = n(2167),
                ee = n(71354),
                et = n(50390),
                en = n(81927),
                er = n(94659),
                ei = n(91012),
                eo = n(72360),
                es = n(66724),
                ea = n(18751),
                ec = n(3002),
                el = n(1243),
                ed = n(56695),
                eu = n(89727),
                ef = n(36188),
                ep = "gray.700",
                eh = n(82269),
                em = n(48322),
                ex = ["error", "refetch"];

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

            function ev(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eg(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eg(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ej = function(e) {
                    var t = e.error,
                        n = e.refetch,
                        r = (0, eh.Z)(e, ex);
                    return (0, A.jsx)(u.xu, ev(ev({
                        px: 6,
                        py: 4
                    }, r), {}, {
                        children: (0, A.jsxs)(eo.b, {
                            p: 6,
                            status: "error",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            children: [(0, A.jsx)(em.z, {
                                mr: 0,
                                boxSize: "30px",
                                alignSelf: "center"
                            }), (0, A.jsx)(es.C, {
                                mt: 4,
                                mb: 2,
                                fontSize: "md",
                                children: (0, A.jsx)(O.cC, {
                                    id: "uNQm3r"
                                })
                            }), (0, A.jsx)(ea.X, {
                                maxWidth: "md",
                                children: t.message
                            }), (0, A.jsx)(k.z, {
                                mt: 4,
                                onClick: function() {
                                    return n()
                                },
                                children: (0, A.jsx)(O.cC, {
                                    id: "6gRgw8"
                                })
                            })]
                        })
                    }))
                },
                eb = n(19664),
                ey = n(97269),
                eC = n(92619),
                ew = n(85982),
                eO = n(64827),
                ek = function() {
                    return U.ag._({
                        id: "QbrUIo"
                    })
                },
                eI = function() {
                    return U.ag._({
                        id: "FbBkvL"
                    })
                },
                eS = function(e) {
                    var t = e.isAnalyticsLoading,
                        n = e.hasError,
                        r = e.view,
                        i = e.setView,
                        o = e.description;
                    return n ? (0, A.jsx)(eC.x, {
                        children: (0, A.jsx)(O.cC, {
                            id: "ZlwDi6"
                        })
                    }) : (0, A.jsxs)(p.k, {
                        direction: "column",
                        flex: 1,
                        children: [(0, A.jsx)(eC.x, {
                            children: t ? (0, A.jsx)(eE, {}) : (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(O.cC, {
                                    id: "ZlwDi6"
                                }), (0, A.jsxs)(er.g, {
                                    align: "stretch",
                                    spacing: 4,
                                    children: [(0, A.jsx)(ei.x, {
                                        color: "gray.500",
                                        fontSize: "sm",
                                        fontWeight: "normal",
                                        letterSpacing: "normal",
                                        children: o
                                    }), (0, A.jsxs)(ew.E, {
                                        children: [(0, A.jsx)(ew.U, {
                                            children: (0, A.jsx)(k.z, {
                                                leftIcon: (0, A.jsx)(I.G, {
                                                    icon: ey.M,
                                                    "aria-label": ek()
                                                }),
                                                variant: "ghost",
                                                fontWeight: "600",
                                                bg: "deckView" === r ? "trueblue.50" : "transparent",
                                                color: "deckView" === r ? "trueblue.500" : ep,
                                                onClick: function() {
                                                    return i("deckView")
                                                },
                                                children: ek()
                                            })
                                        }), (0, A.jsx)(ew.U, {
                                            children: (0, A.jsx)(k.z, {
                                                leftIcon: (0, A.jsx)(I.G, {
                                                    icon: eb.AG,
                                                    "aria-label": eI()
                                                }),
                                                variant: "ghost",
                                                fontWeight: "600",
                                                bg: "cardEngagement" === r ? "trueblue.50" : "transparent",
                                                color: "cardEngagement" === r ? "trueblue.500" : ep,
                                                onClick: function() {
                                                    return i("cardEngagement")
                                                },
                                                children: eI()
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, A.jsx)(eO.o, {})]
                    })
                },
                eE = function() {
                    return (0, A.jsxs)(er.g, {
                        align: "stretch",
                        spacing: 4,
                        children: [(0, A.jsx)(en.O, {
                            h: 12,
                            width: "30%"
                        }), (0, A.jsx)(en.O, {
                            h: 4,
                            width: "80%"
                        })]
                    })
                },
                eP = n(74373),
                eD = n(68871),
                eA = n(98621),
                eT = n.n(eA),
                eR = n(68964),
                e_ = function(e) {
                    var t = e.degree,
                        n = e.alpha,
                        r = e.startColor,
                        i = void 0 === r ? "#ECC94B" : r,
                        o = e.endColor,
                        s = void 0 === o ? "#38A169" : o;
                    if (Number.isNaN(t)) return eT()("#e5e0df").toHex8String();
                    var a = eT()(i).toHsl(),
                        c = eT()(s).toHsl();
                    return eT()({
                        h: (0, eR.t7)(a.h, c.h, t),
                        s: (0, eR.t7)(a.s, c.s, t),
                        l: (0, eR.t7)(a.l, c.l, t),
                        a: void 0 === n ? 1 : n
                    }).toHex8String()
                },
                eL = function(e, t) {
                    return e.reduce(function(e, n) {
                        return e[n.cardId] = n[t], e
                    }, {})
                },
                eM = function e(t, n) {
                    var r, i = 0;
                    for (var o in t) i += (null !== (r = n[o]) && void 0 !== r ? r : 0) + e(t[o], n);
                    return i
                },
                ez = function(e, t) {
                    var n, r = 0;
                    for (var i in e) r = Math.max((null !== (n = t[i]) && void 0 !== n ? n : 0) + eM(e[i], t), r);
                    return r
                },
                eN = n(56623),
                eZ = n(51068),
                eG = n(67784),
                eF = n(67887),
                eU = n(49747),
                eW = n(62642),
                eV = n(29600),
                eH = n(21875),
                eB = n(15767),
                eq = n(23769),
                eK = n(13813),
                eY = n(16844),
                eJ = n(62349),
                eX = n.n(eJ);

            function eQ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e$(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eQ(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eQ(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e0 = function(e) {
                    var t = e.cardsViewed,
                        n = e.totalCards,
                        r = e_({
                            degree: t / n
                        }),
                        i = n > 0;
                    return (0, A.jsxs)(h.U, {
                        spacing: 3,
                        children: [(0, A.jsxs)(p.k, {
                            flex: 1,
                            position: "relative",
                            children: [(0, A.jsx)(eY.E, {
                                h: 4,
                                flex: 1,
                                borderRadius: "sm",
                                value: t,
                                max: i ? n : void 0,
                                bg: "gray.200",
                                sx: {
                                    "> div": {
                                        bg: r
                                    }
                                }
                            }), i && t === n && (0, A.jsx)(e2, {
                                top: 0,
                                right: 0,
                                transform: "translate(50%,-50%)",
                                position: "absolute"
                            })]
                        }), (0, A.jsx)(ei.x, {
                            w: {
                                base: 10,
                                lg: 12
                            },
                            fontSize: "sm",
                            whiteSpace: "nowrap",
                            textAlign: "left",
                            children: i ? "".concat(t, "/").concat(n) : (0, A.jsx)(O.cC, {
                                id: "8Va3Pt"
                            })
                        })]
                    })
                },
                e1 = function(e) {
                    var t = e.cardCount,
                        n = (0, v.useMemo)(function() {
                            return eX()(1, t)
                        }, [t]);
                    return (0, A.jsxs)(h.U, {
                        spacing: 3,
                        filter: "blur(3px)",
                        children: [(0, A.jsx)(p.k, {
                            flex: 1,
                            position: "relative",
                            children: (0, A.jsx)(eY.E, {
                                h: 4,
                                flex: 1,
                                borderRadius: "sm",
                                value: n,
                                max: t,
                                bg: "gray.300",
                                sx: {
                                    "> div": {
                                        bg: "gray.300"
                                    }
                                }
                            })
                        }), (0, A.jsxs)(ei.x, {
                            w: {
                                base: 10,
                                lg: 12
                            },
                            fontSize: "sm",
                            whiteSpace: "nowrap",
                            textAlign: "left",
                            color: "gray.600",
                            children: [n, "/", t]
                        })]
                    })
                },
                e2 = function(e) {
                    var t = (0, eq.Z)({}, e);
                    return (0, A.jsx)(u.Cd, e$(e$({
                        bg: "green.500",
                        size: "18px",
                        border: "2px solid white",
                        color: "white"
                    }, t), {}, {
                        children: (0, A.jsx)(I.G, {
                            icon: eK.LE,
                            "aria-label": U.ag._({
                                id: "y886Ns"
                            }),
                            size: "xs"
                        })
                    }))
                };

            function e5(e, t) {
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
                    t % 2 ? e5(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e5(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e6 = function(e) {
                    var t, n = e.cards,
                        r = e.isColorized,
                        i = void 0 !== r && r,
                        o = e.scaleToMax,
                        s = void 0 !== o && o,
                        a = e.includeChildren,
                        l = e.showViewersPercent,
                        d = void 0 !== l && l,
                        f = e.leftLabel,
                        p = e.rightLabel,
                        x = e.tooltipLabel,
                        g = e.cardLookupTable,
                        j = e.onAnalyticsPanelClose,
                        b = (t = a ? ez(n, g) : Math.max.apply(Math, (0, J.Z)(Object.values(g))), function(e) {
                            return (0, eR.t7)(0, 100, e / t)
                        }),
                        y = (0, v.useCallback)(function(e) {
                            return b(e)
                        }, [b]);
                    return (0, A.jsxs)(u.xu, {
                        mt: 6,
                        mb: 4,
                        children: [(0, A.jsxs)(h.U, {
                            mb: 3,
                            children: [(0, A.jsx)(h.U, {
                                children: (0, A.jsx)(W.NZ, {
                                    children: f
                                })
                            }), (0, A.jsx)(m.L, {}), (0, A.jsx)(h.U, {
                                children: (0, A.jsx)(W.kH, {
                                    placement: "top",
                                    label: x,
                                    children: (0, A.jsx)(h.U, {
                                        children: (0, A.jsx)(W.NZ, {
                                            borderBottom: "0.125em dashed",
                                            borderBottomColor: "gray.400",
                                            children: p
                                        })
                                    })
                                })
                            })]
                        }), (0, A.jsx)(u.xu, {
                            width: "100%",
                            children: Object.entries(n).map(function(e) {
                                var t, n = (0, c.Z)(e, 2),
                                    r = n[0],
                                    o = n[1];
                                return (0, A.jsx)(e4, {
                                    id: r,
                                    childCards: o,
                                    percentage: null !== (t = g[r]) && void 0 !== t ? t : 0,
                                    calculatePercentageScale: y,
                                    isColorized: i,
                                    cardLookupTable: g,
                                    scaleToMax: s,
                                    includeChildren: a,
                                    showViewersPercent: d,
                                    onAnalyticsPanelClose: j
                                }, r)
                            })
                        })]
                    })
                },
                e4 = function e(t) {
                    var n = t.id,
                        r = t.cardLookupTable,
                        i = t.childCards,
                        o = t.percentage,
                        s = t.calculatePercentageScale,
                        a = t.isColorized,
                        l = t.scaleToMax,
                        d = t.includeChildren,
                        f = t.showViewersPercent,
                        x = t.onAnalyticsPanelClose,
                        g = (0, b.ye)("screenshotsEnabled"),
                        j = (0, v.useState)(!1),
                        y = j[0],
                        C = j[1],
                        w = (0, eB.Ux)({
                            placement: "top",
                            gutter: 12,
                            enterDelay: 200
                        }),
                        k = w.referenceRef,
                        S = w.popperRef,
                        E = w.isHovering,
                        P = w.getPopperProps,
                        D = w.onMouseOver,
                        T = w.onMouseOut,
                        R = (0, v.useCallback)(function() {
                            C(!y)
                        }, [y]),
                        _ = (0, v.useCallback)(function() {
                            (0, eH.D)({
                                cardId: n
                            }), x()
                        }, [n, x]),
                        L = (0, eV.c)(n),
                        M = (0, eV.T)({
                            cardId: n
                        }).title,
                        z = Object.values(i).length > 0,
                        N = 0 === o,
                        Z = d ? o + eM(i, r) : o,
                        G = y ? Z : 0,
                        F = l ? s(Z) : Math.min(100, G),
                        U = y ? o : Z,
                        V = l ? s(U) : Math.min(100, U),
                        H = {
                            startColor: "#F6AD55",
                            endColor: "#68D391"
                        },
                        B = a ? e_(e3({
                            degree: F / 100
                        }, H)) : "trueblue.50",
                        q = a ? e_(e3({
                            degree: V / 100
                        }, H)) : "trueblue.100";
                    return (0, A.jsxs)(ee.K, {
                        children: [(0, A.jsxs)(p.k, {
                            direction: "column",
                            onMouseOver: D,
                            onMouseOut: T,
                            children: [(0, A.jsxs)(p.k, {
                                ref: k,
                                h: 8,
                                px: 2,
                                bg: "gray.100",
                                borderRadius: "md",
                                position: "relative",
                                overflow: "hidden",
                                alignItems: "center",
                                _focusWithin: {
                                    shadow: "outline"
                                },
                                children: [(0, A.jsxs)(h.U, {
                                    pos: "absolute",
                                    zIndex: 1,
                                    children: [z && (0, A.jsx)(eF.h, {
                                        "aria-label": "expand-card",
                                        size: "xs",
                                        variant: "ghost",
                                        isRound: !0,
                                        colorScheme: "blackAlpha",
                                        icon: (0, A.jsx)(I.G, {
                                            icon: eG._t
                                        }),
                                        transform: y ? "rotate(90deg)" : "",
                                        onClick: R,
                                        _focus: {
                                            shadow: "none"
                                        }
                                    }), !z && (0, A.jsx)(p.k, {
                                        w: 6,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: N ? (0, A.jsx)(W.kH, {
                                            label: (0, A.jsx)(O.cC, {
                                                id: "s+PDNe"
                                            }),
                                            children: (0, A.jsx)(u.xu, {
                                                color: "blackAlpha.500",
                                                children: (0, A.jsx)(I.G, {
                                                    icon: eZ.Aq,
                                                    size: "sm"
                                                })
                                            })
                                        }) : (0, A.jsx)(u.xu, {
                                            color: "blackAlpha.300",
                                            fontSize: "xx-small",
                                            children: (0, A.jsx)(I.G, {
                                                icon: eN.nZ,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, A.jsx)(ei.x, {
                                        color: N ? "blackAlpha.500" : void 0,
                                        noOfLines: 1,
                                        children: M || (0, A.jsx)(O.cC, {
                                            id: "wja8aL"
                                        })
                                    })]
                                }), (0, A.jsxs)(u.xu, {
                                    position: "absolute",
                                    w: "100%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    pointerEvents: "none",
                                    children: [(0, A.jsx)(u.xu, {
                                        position: "absolute",
                                        h: "100%",
                                        bg: N ? "blackAlpha.200" : B,
                                        w: "".concat(F, "%")
                                    }), (0, A.jsx)(u.xu, {
                                        transitionProperty: "all",
                                        transitionDuration: "normal",
                                        position: "absolute",
                                        h: "100%",
                                        bg: N ? "blackAlpha.300" : q,
                                        w: "".concat(V, "%")
                                    })]
                                }), a && 100 === o && (0, A.jsxs)(A.Fragment, {
                                    children: [(0, A.jsx)(m.L, {}), (0, A.jsx)(e2, {
                                        alignSelf: "center",
                                        zIndex: 1
                                    })]
                                })]
                            }), E && (0, A.jsx)(W.qh, e3({
                                ref: S,
                                src: g ? null == L ? void 0 : L.previewUrl : eW.Z.src,
                                fallbackSrc: eW.Z.src,
                                shouldShow: E,
                                onClick: _,
                                tooltip: (0, A.jsx)(O.cC, {
                                    id: "3YmIR6"
                                }),
                                label: f ? (0, A.jsx)(O.cC, {
                                    id: "wmqtMZ",
                                    values: {
                                        percentage: o
                                    }
                                }) : void 0
                            }, P()))]
                        }), (0, A.jsx)(u.xu, {
                            pl: 8,
                            children: z && Object.entries(i).map(function(t) {
                                var n, i = (0, c.Z)(t, 2),
                                    o = i[0],
                                    u = i[1];
                                return (0, A.jsx)(eU.U, { in: y,
                                    children: (0, A.jsx)(e, {
                                        id: o,
                                        childCards: u,
                                        percentage: null !== (n = r[o]) && void 0 !== n ? n : 0,
                                        cardLookupTable: r,
                                        calculatePercentageScale: s,
                                        scaleToMax: l,
                                        isColorized: a,
                                        includeChildren: d,
                                        showViewersPercent: f,
                                        onAnalyticsPanelClose: x
                                    })
                                }, o)
                            })
                        })]
                    })
                },
                e8 = function() {
                    return (0, A.jsx)(ee.K, {
                        spacing: 2,
                        children: (0, A.jsx)(O.cC, {
                            id: "QXJTby",
                            components: {
                                0: (0, A.jsx)(ei.x, {}),
                                1: (0, A.jsx)(ei.x, {}),
                                2: (0, A.jsx)(ei.x, {})
                            }
                        })
                    })
                },
                e7 = function(e) {
                    var t = e.timeInMS;
                    return void 0 === t ? (0, A.jsx)(A.Fragment, {}) : (0, A.jsx)(O.cC, {
                        id: "yXHI9B",
                        values: {
                            timeInSeconds: t / 1e3
                        }
                    })
                },
                e9 = function(e) {
                    var t = e.docId,
                        n = e.viewerFilter,
                        r = e.currentViewerFilterCount,
                        i = e.onAnalyticsPanelClose,
                        o = (0, C.qr)().getState(),
                        s = (0, _.X9)(o),
                        a = (0, S.IrH)({
                            variables: {
                                docId: t
                            }
                        }),
                        c = a.data,
                        l = a.error,
                        d = a.loading,
                        f = a.refetch,
                        p = (0, v.useState)("viewTimePercent"),
                        m = p[0],
                        x = p[1],
                        g = "viewTimePercent" === m ? {
                            chartDescription: (0, A.jsx)(O.cC, {
                                id: "dpTE1c",
                                values: {
                                    viewerCount: r
                                }
                            }),
                            leftLabel: (0, A.jsx)(O.cC, {
                                id: "ml51m3"
                            }),
                            rightLabel: (0, A.jsx)(O.cC, {
                                id: "8R7bfR"
                            })
                        } : {
                            chartDescription: (0, A.jsx)(O.cC, {
                                id: "b2VMTo",
                                values: {
                                    viewerCount: r
                                }
                            }),
                            leftLabel: (0, A.jsx)(O.cC, {
                                id: "kTgCTO"
                            }),
                            rightLabel: (0, A.jsx)(O.cC, {
                                id: "AKDcmS"
                            })
                        },
                        j = g.chartDescription,
                        y = g.rightLabel,
                        w = g.leftLabel,
                        E = "viewersOnly" === n ? "viewers" : "everyone",
                        P = (0, b.ye)("cardViewedThreshold"),
                        D = (0, v.useMemo)(function() {
                            var e;
                            return (null == c ? void 0 : null === (e = c.docCardsStats) || void 0 === e ? void 0 : e[E]) || []
                        }, [null == c ? void 0 : c.docCardsStats, E]),
                        T = (0, v.useMemo)(function() {
                            return eL(D, m)
                        }, [D, m]),
                        R = (0, v.useCallback)(function() {
                            return x("viewTimePercent")
                        }, []),
                        L = (0, v.useCallback)(function() {
                            return x("viewersPercent")
                        }, []);
                    return (0, A.jsxs)(u.xu, {
                        children: [(0, A.jsxs)(h.U, {
                            my: 4,
                            children: [(0, A.jsx)(k.z, {
                                leftIcon: (0, A.jsx)(I.G, {
                                    icon: eD.SZ,
                                    "aria-label": "Time spend"
                                }),
                                variant: "ghost",
                                fontWeight: "600",
                                bg: "viewTimePercent" === m ? "trueblue.50" : "transparent",
                                color: "viewTimePercent" === m ? "trueblue.500" : ep,
                                onClick: R,
                                children: (0, A.jsx)(O.cC, {
                                    id: "XyvAeS"
                                })
                            }), (0, A.jsx)(k.z, {
                                leftIcon: (0, A.jsx)(I.G, {
                                    icon: eP.jG,
                                    "aria-label": "Percent viewed"
                                }),
                                variant: "ghost",
                                fontWeight: "600",
                                bg: "viewersPercent" === m ? "trueblue.50" : "transparent",
                                color: "viewersPercent" === m ? "trueblue.500" : ep,
                                onClick: L,
                                children: (0, A.jsx)(O.cC, {
                                    id: "vXtpAZ"
                                })
                            })]
                        }), (0, A.jsx)(tt, {
                            description: j
                        }), l && (0, A.jsx)(ej, {
                            error: l,
                            refetch: f
                        }), d && !l && (0, A.jsx)(te, {}), !d && !l && (0, A.jsx)(e6, {
                            cards: s.tree,
                            cardLookupTable: T,
                            scaleToMax: "viewTimePercent" === m,
                            isColorized: "viewersPercent" === m,
                            includeChildren: "viewTimePercent" === m,
                            showViewersPercent: "viewersPercent" === m,
                            rightLabel: y,
                            leftLabel: w,
                            tooltipLabel: "viewTimePercent" === m ? (0, A.jsx)(e8, {}) : (0, A.jsx)(e7, {
                                timeInMS: P
                            }),
                            onAnalyticsPanelClose: i
                        })]
                    })
                },
                te = function(e) {
                    var t = e.includeDescription;
                    return (0, A.jsx)(p.k, {
                        direction: "column",
                        mt: 6,
                        mb: 4,
                        children: (0, A.jsxs)(er.g, {
                            align: "stretch",
                            children: [void 0 !== t && t && (0, A.jsx)(en.O, {
                                h: 5,
                                mb: 3,
                                w: "70%"
                            }), (0, J.Z)([, , , , , ]).map(function(e, t) {
                                return (0, A.jsx)(en.O, {
                                    h: 8
                                }, t)
                            })]
                        })
                    })
                },
                tt = function(e) {
                    var t = e.description;
                    return (0, A.jsx)(ei.x, {
                        color: ep,
                        children: t
                    })
                },
                tn = n(89364),
                tr = n(73851),
                ti = n(36258),
                to = n(19875),
                ts = n(77525),
                ta = n(74642),
                tc = n(35319),
                tl = n(27912),
                td = n(12221),
                tu = n(13061),
                tf = n(65903),
                tp = n.n(tf),
                th = n(829),
                tm = n.n(th),
                tx = n(95828),
                tg = n(63730),
                tv = ["name", "profileImg", "email", "isCreator", "isContributor", "isAnonymous"];

            function tj(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tj(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tj(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ty = function(e) {
                    var t = e.uniqueViewers,
                        n = e.docCreatedDate,
                        r = (0, b.ye)("cardViewedThreshold");
                    return (0, A.jsx)(tr.h, {
                        children: (0, A.jsxs)(ti.Tr, {
                            children: [(0, A.jsx)(tC, {
                                label: (0, A.jsx)(O.cC, {
                                    id: "LZHJAq",
                                    values: {
                                        uniqueViewers: t
                                    }
                                }),
                                tooltip: (0, A.jsx)(O.cC, {
                                    id: "aaiIlJ",
                                    values: {
                                        docCreatedDate: n
                                    }
                                }),
                                width: "40%"
                            }), (0, A.jsx)(tC, {
                                label: (0, A.jsx)(O.cC, {
                                    id: "pRGfP3"
                                }),
                                width: "35%"
                            }), (0, A.jsx)(tC, {
                                label: (0, A.jsx)(O.cC, {
                                    id: "QfqHuz"
                                }),
                                tooltip: (0, A.jsx)(e7, {
                                    timeInMS: r
                                }),
                                width: "25%"
                            })]
                        })
                    })
                },
                tC = function(e) {
                    var t = e.label,
                        n = e.width,
                        r = e.tooltip,
                        i = (0, A.jsx)(to.Th, {
                            w: n,
                            children: (0, A.jsx)(ei.x, {
                                display: "inline",
                                borderBottom: r ? "0.125em dashed" : void 0,
                                borderBottomColor: r ? "gray.400" : void 0,
                                children: t
                            })
                        });
                    return r ? (0, A.jsx)(W.kH, {
                        placement: "top",
                        label: r,
                        children: i
                    }) : i
                },
                tw = ["Yesterday at 11:02 am", "Today at 12:55 pm", "Dec 12, 2020, 10:19 pm", "Apr 14, 2023, 4:30 pm", "Jan 1, 2021, 12:03 am", "Dec 7, 1984, 12:03 am", "May 14, 2002, 3:56 pm"],
                tO = function(e) {
                    var t = e.viewers,
                        n = e.currentViewerFilterCount,
                        r = e.docCreatedDate,
                        i = e.creatorId,
                        o = e.contributors,
                        s = e.cardCount,
                        a = e.handleTableRowClick,
                        c = e.hasIndividualAnalytics,
                        l = (0, D.SE)().user,
                        d = c ? t : tm()(t, function(e) {
                            var t;
                            return [(null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == l ? void 0 : l.id) ? 0 : 1, -e.lastOpened]
                        }).slice(0, 3);
                    return (0, A.jsx)(ts.x, {
                        children: (0, A.jsxs)(ta.i, {
                            colorScheme: "blackAlpha",
                            children: [(0, A.jsx)(ty, {
                                uniqueViewers: n,
                                docCreatedDate: r
                            }), (0, A.jsx)(tc.p, {
                                children: d.map(function(e, n) {
                                    var r = e.user,
                                        d = e.lastOpened,
                                        u = e.visitorId,
                                        f = (null == r ? void 0 : r.id) === i,
                                        p = o.some(function(e) {
                                            return e.user.id === (null == r ? void 0 : r.id)
                                        }),
                                        h = r ? r.displayName + (r.id === (null == l ? void 0 : l.id) ? " " + U.ag._({
                                            id: "dDUgzP"
                                        }) : "") || "" : U.ag._({
                                            id: "VmjbJY"
                                        }),
                                        m = d ? tp()((0, tg.P9)(d)) : U.ag._({
                                            id: "/JO3xr"
                                        }),
                                        x = {
                                            name: h,
                                            id: (null == r ? void 0 : r.id) || u || "",
                                            email: null == r ? void 0 : r.email,
                                            isCreator: f,
                                            isContributor: p,
                                            profileImg: null == r ? void 0 : r.profileImageUrl,
                                            lastOpened: m
                                        },
                                        g = n === t.length - 1,
                                        v = (null == r ? void 0 : r.id) === (null == l ? void 0 : l.id),
                                        j = !c && !v;
                                    return (0, A.jsxs)(ti.Tr, {
                                        cursor: "pointer",
                                        onClick: function() {
                                            return a(x)
                                        },
                                        _hover: {
                                            bg: "blackAlpha.50"
                                        },
                                        borderBottom: "none",
                                        children: [(0, A.jsx)(tl.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: (0, A.jsx)(tk, {
                                                name: h,
                                                email: null == r ? void 0 : r.email,
                                                profileImg: null == r ? void 0 : r.profileImageUrl,
                                                isContributor: p,
                                                isCreator: f,
                                                isAnonymous: !r
                                            })
                                        }), (0, A.jsx)(tl.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: j ? (0, A.jsx)(ei.x, {
                                                fontSize: "sm",
                                                filter: "blur(3px)",
                                                color: "gray.600",
                                                children: tw[n % tw.length]
                                            }) : (0, A.jsx)(ei.x, {
                                                fontSize: "sm",
                                                children: m
                                            })
                                        }), (0, A.jsx)(tl.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: j ? (0, A.jsx)(e1, {
                                                cardCount: s
                                            }) : (0, A.jsx)(e0, {
                                                cardsViewed: e.cardsViewed || 0,
                                                totalCards: s || 0
                                            })
                                        })]
                                    }, (null == r ? void 0 : r.id) || u)
                                })
                            })]
                        })
                    })
                },
                tk = function(e) {
                    var t = e.name,
                        n = e.profileImg,
                        r = e.email,
                        i = e.isCreator,
                        o = void 0 !== i && i,
                        s = e.isContributor,
                        a = e.isAnonymous,
                        c = (0, eh.Z)(e, tv);
                    return (0, A.jsxs)(h.U, tb(tb({}, c), {}, {
                        children: [(0, A.jsx)(td.q, {
                            size: "sm",
                            name: t,
                            src: n
                        }), (0, A.jsxs)(ee.K, {
                            spacing: .5,
                            children: [(0, A.jsxs)(ei.x, {
                                children: [t, void 0 !== a && a && (0, A.jsx)(W.Yq, {
                                    label: (0, A.jsx)(O.cC, {
                                        id: "VHgG8W",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                        }
                                    }),
                                    ml: 2
                                })]
                            }), (0, A.jsxs)(h.U, {
                                mt: 1,
                                children: [(0, A.jsx)(ei.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: void 0 === r ? "" : r
                                }), (o || void 0 !== s && s) && (0, A.jsx)(tu.Vp, {
                                    size: "sm",
                                    transform: "translate(0, 1.5px)",
                                    children: o ? (0, A.jsx)(O.cC, {
                                        id: "UE2beD"
                                    }) : (0, A.jsx)(O.cC, {
                                        id: "3L51iw"
                                    })
                                })]
                            })]
                        })]
                    }))
                },
                tI = function(e) {
                    var t, n, r, i, o = e.user,
                        s = e.onBackClick,
                        a = e.docId,
                        c = e.onAnalyticsPanelClose,
                        l = (0, C.qr)().getState(),
                        d = (0, _.X9)(l),
                        f = (0, S.IrH)({
                            variables: {
                                docId: a,
                                userId: o.id
                            },
                            skip: !a || !o.id,
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        p = f.data,
                        h = f.error,
                        m = f.loading,
                        x = f.refetch,
                        g = null !== (t = null == p ? void 0 : null === (n = p.docCardsStats) || void 0 === n ? void 0 : null === (r = n.everyone) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                        j = null == p ? void 0 : null === (i = p.docCardsStats) || void 0 === i ? void 0 : i.cardCount,
                        b = (0, v.useMemo)(function() {
                            var e;
                            return (null == p ? void 0 : null === (e = p.docCardsStats) || void 0 === e ? void 0 : e.everyone) || []
                        }, [null == p ? void 0 : p.docCardsStats]),
                        y = (0, v.useMemo)(function() {
                            return eL(b, "viewTimePercent")
                        }, [b]);
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(eC.x, {
                            children: (0, A.jsx)(k.z, {
                                "aria-label": "Back",
                                leftIcon: (0, A.jsx)(tn.R, {}),
                                variant: "ghost",
                                onClick: s,
                                children: (0, A.jsx)(O.cC, {
                                    id: "iH8pgl"
                                })
                            })
                        }), (0, A.jsx)(eO.o, {}), (0, A.jsx)(K.i, {}), (0, A.jsx)($.f, {
                            children: (0, A.jsxs)(u.xu, {
                                children: [(0, A.jsx)(tS, {
                                    user: o,
                                    showLastOpened: !0
                                }), j && (0, A.jsx)(tt, {
                                    description: (0, A.jsx)(O.cC, {
                                        id: "YJOrjl",
                                        values: {
                                            cardsViewed: g,
                                            totalCards: j
                                        }
                                    })
                                }), m && !h && (0, A.jsx)(te, {
                                    includeDescription: !0
                                }), h && (0, A.jsx)(ej, {
                                    error: h,
                                    refetch: x
                                }), !h && !m && (0, A.jsx)(e6, {
                                    cards: d.tree,
                                    scaleToMax: !0,
                                    includeChildren: !0,
                                    leftLabel: (0, A.jsx)(O.cC, {
                                        id: "ml51m3"
                                    }),
                                    rightLabel: (0, A.jsx)(O.cC, {
                                        id: "8R7bfR"
                                    }),
                                    cardLookupTable: y,
                                    tooltipLabel: (0, A.jsx)(e8, {}),
                                    onAnalyticsPanelClose: c
                                })]
                            })
                        })]
                    })
                },
                tS = function(e) {
                    var t = e.user,
                        n = e.showLastOpened;
                    return (0, A.jsxs)(h.U, {
                        align: "center",
                        my: 6,
                        children: [(0, A.jsx)(tk, {
                            name: t.name,
                            profileImg: t.profileImg,
                            email: t.email,
                            isCreator: t.isCreator,
                            isContributor: t.isContributor,
                            width: n ? "50%" : void 0
                        }), n && (0, A.jsxs)(er.g, {
                            align: "flex-start",
                            spacing: 0,
                            children: [(0, A.jsx)(W.NZ, {
                                children: (0, A.jsx)(O.cC, {
                                    id: "pRGfP3"
                                })
                            }), (0, A.jsx)(ei.x, {
                                children: t.lastOpened
                            })]
                        })]
                    })
                },
                tE = n(87567),
                tP = n(47299),
                tD = n(81295),
                tA = n(26673),
                tT = n(9088),
                tR = n(30893),
                t_ = n(40771),
                tL = n(63849),
                tM = n(2575),
                tz = function(e, t, n) {
                    return "everyone" === e ? U.ag._({
                        id: "1IE7uf",
                        values: {
                            everyone: t
                        }
                    }) : "viewersOnly" === e ? U.ag._({
                        id: "r/tA4Y",
                        values: {
                            viewersOnly: n
                        }
                    }) : U.ag._({
                        id: "V9JX7d"
                    })
                },
                tN = {
                    everyone: tD.Nd,
                    viewersOnly: tP.Md,
                    accessLinkOnly: tE.uW
                },
                tZ = function(e) {
                    var t = e.selected,
                        n = e.handleMenuItemChange,
                        r = e.everyoneCount,
                        i = e.viewersOnlyCount;
                    return (0, A.jsxs)(tT.v, {
                        children: [(0, A.jsx)(tR.j, {
                            leftIcon: (0, A.jsx)(I.G, {
                                size: "xs",
                                icon: tN[t]
                            }),
                            as: k.z,
                            size: "md",
                            rightIcon: (0, A.jsx)(I.G, {
                                size: "xs",
                                icon: tA.pt
                            }),
                            children: tz(t, r, i)
                        }), (0, A.jsx)(t_.q, {
                            zIndex: 2,
                            maxW: "380px",
                            children: (0, A.jsxs)(tL._, {
                                defaultValue: t,
                                value: t,
                                onChange: function(e) {
                                    Array.isArray(e) || n(e)
                                },
                                children: [(0, A.jsx)(tM.i, {
                                    value: "everyone",
                                    isDisabled: 0 === r,
                                    children: (0, A.jsxs)(p.k, {
                                        align: "center",
                                        children: [(0, A.jsx)(I.G, {
                                            icon: tN.everyone,
                                            size: "xs"
                                        }), (0, A.jsxs)(u.xu, {
                                            ml: 3,
                                            children: [(0, A.jsx)(ei.x, {
                                                children: tz("everyone", r, i)
                                            }), (0, A.jsx)(ei.x, {
                                                fontSize: "sm",
                                                color: "gray.500",
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "c5ESvc",
                                                    values: {
                                                        GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, A.jsx)(tM.i, {
                                    value: "viewersOnly",
                                    isDisabled: 0 === i,
                                    children: (0, A.jsxs)(p.k, {
                                        align: "center",
                                        children: [(0, A.jsx)(I.G, {
                                            icon: tN.viewersOnly,
                                            size: "xs"
                                        }), (0, A.jsxs)(u.xu, {
                                            ml: 3,
                                            children: [(0, A.jsx)(ei.x, {
                                                children: tz("viewersOnly", r, i)
                                            }), (0, A.jsx)(ei.x, {
                                                fontSize: "sm",
                                                color: "gray.500",
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "5hKO48",
                                                    values: {
                                                        GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                }), !1]
                            })
                        })]
                    })
                },
                tG = n(46102),
                tF = n(6802),
                tU = n(70258),
                tW = n(80237),
                tV = n(59309),
                tH = n(2574),
                tB = n(92638),
                tq = n(33951),
                tK = n(10897),
                tY = n(14582),
                tJ = n(75715),
                tX = n(96492),
                tQ = n(14141),
                t$ = n(40837),
                t0 = ["chartTitle", "TooltipInner", "showZero", "shouldRoundYValues", "showMaxAndMiddle", "data", "barColor", "customTooltipStyles", "onClick"];

            function t1(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function t2(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? t1(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var t5 = {
                    top: 55,
                    right: 20,
                    bottom: 40,
                    left: 24
                },
                t3 = function(e) {
                    return Math.round(e).toString()
                },
                t6 = {
                    backgroundColor: "var(--chakra-colors-blackAlpha-800)",
                    color: "var(--chakra-colors-gray-100)",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "var(--chakra-shadows-4)",
                    fontSize: "var(--chakra-fontSizes-xs)",
                    borderRadius: "var(--chakra-radii-sm)",
                    fontWeight: "var(--chakra-fontWeights-semibold)",
                    borderWidth: "1px",
                    borderColor: "black",
                    paddingRight: "var(--chakra-space-1.5)",
                    paddingLeft: "var(--chakra-space-1.5)",
                    paddingTop: "var(--chakra-space-0.5)",
                    paddingBottom: "var(--chakra-space-0.5)",
                    zIndex: "var(--chakra-zIndex-tooltip)",
                    minWidth: "60px",
                    lineHeight: "var(--chakra-lineHeights-base)"
                },
                t4 = "var(--chakra-colors-gray-500)",
                t8 = "var(--chakra-colors-gray-200)",
                t7 = function(e) {
                    var t, n = e.width,
                        r = e.height,
                        i = e.margin,
                        o = void 0 === i ? t5 : i,
                        s = e.chartData,
                        a = e.TooltipInner,
                        c = e.showZero,
                        l = e.shouldRoundYValues,
                        d = e.showMaxAndMiddle,
                        f = e.barColor,
                        p = e.customTooltipStyles,
                        h = e.onClick,
                        m = void 0 === h ? function() {} : h,
                        x = (0, tX.Z)(),
                        g = x.showTooltip,
                        j = x.tooltipOpen,
                        b = x.tooltipLeft,
                        y = x.tooltipTop,
                        C = x.tooltipData,
                        w = x.hideTooltip,
                        O = (0, v.useRef)(),
                        k = (0, v.useRef)();
                    (0, v.useEffect)(function() {
                        return function() {
                            O.current && clearTimeout(O.current), k.current && clearTimeout(k.current)
                        }
                    }, []);
                    var I = s.map(function(e) {
                            return e.y
                        }),
                        S = Math.max.apply(Math, (0, J.Z)(I)),
                        E = [S, Math.round(S / 2)],
                        P = (t = d ? E : I, Math.max.apply(Math, (0, J.Z)(t.map(function(e) {
                            return (0, tJ.Z)(e.toString(), {
                                fontFamily: "Inter, sans-serif",
                                fontSize: "var(--chakra-fontSizes-sm)",
                                fontWeight: "600"
                            }) || 0
                        })))),
                        D = o.left + P,
                        T = n - D - o.right,
                        R = r - o.top - o.bottom,
                        _ = t2(t2(t2({}, tQ.j), t6), p),
                        L = (0, v.useMemo)(function() {
                            return (0, tB.Z)({
                                range: [0, T],
                                domain: s.map(function(e) {
                                    return e.x
                                }),
                                padding: .3
                            })
                        }, [T, s]),
                        M = (0, v.useMemo)(function() {
                            return (0, tq.Z)({
                                range: [R, 0],
                                round: !0,
                                domain: [0, S]
                            })
                        }, [R, S]),
                        z = c ? M(Math.min.apply(Math, (0, J.Z)(I.filter(function(e) {
                            return 0 !== e
                        })))) : R,
                        N = c && R - z > 6;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(u.xu, {
                            children: (0, A.jsxs)("svg", {
                                width: n,
                                height: r,
                                children: [(0, A.jsx)("rect", {
                                    x: 0,
                                    y: 0,
                                    rx: 4,
                                    width: n,
                                    height: r,
                                    fill: "var(--chakra-colors-gray-100)"
                                }), (0, A.jsx)(tV.Z, {
                                    top: o.top,
                                    left: D,
                                    children: s.map(function(e) {
                                        var t, n, r = e.y,
                                            i = e.x,
                                            o = "bar-".concat(i, "-").concat(r),
                                            s = L.bandwidth(),
                                            a = R - (null !== (t = M(r)) && void 0 !== t ? t : 0),
                                            l = N && 0 === a ? 6 : a,
                                            d = null !== (n = L(i)) && void 0 !== n ? n : 0,
                                            u = R - l;
                                        return (0, A.jsxs)(tV.Z, {
                                            children: [(0, A.jsx)(tK.Z, {
                                                x: d,
                                                y: u,
                                                width: s,
                                                height: l,
                                                radius: 5,
                                                topLeft: !0,
                                                topRight: !0,
                                                fill: c && 0 === r ? t8 : f,
                                                onMouseLeave: function() {
                                                    O.current = window.setTimeout(function() {
                                                        w()
                                                    }, 300)
                                                },
                                                onMouseMove: function(t) {
                                                    O.current && clearTimeout(O.current);
                                                    var n = (0, tW.Z)(t);
                                                    g({
                                                        tooltipData: e,
                                                        tooltipTop: null == n ? void 0 : n.y,
                                                        tooltipLeft: null == n ? void 0 : n.x
                                                    })
                                                },
                                                onClick: function(t) {
                                                    return m(t, e)
                                                }
                                            }), (0, A.jsx)(tY.Z, {
                                                x: d,
                                                y: 0,
                                                width: s,
                                                height: Math.max(0, R - l),
                                                opacity: 0,
                                                onMouseLeave: function() {
                                                    k.current = window.setTimeout(function() {
                                                        w()
                                                    }, 300)
                                                },
                                                onMouseMove: function(t) {
                                                    k.current && clearTimeout(k.current);
                                                    var n = (0, tW.Z)(t);
                                                    g({
                                                        tooltipData: e,
                                                        tooltipTop: null == n ? void 0 : n.y,
                                                        tooltipLeft: null == n ? void 0 : n.x
                                                    })
                                                }
                                            })]
                                        }, o)
                                    })
                                }), (0, A.jsx)(tF.Z, {
                                    top: o.top,
                                    left: D,
                                    scale: M,
                                    stroke: t8,
                                    strokeWidth: 2,
                                    tickValues: d ? E : void 0,
                                    numTicks: d ? void 0 : 2,
                                    hideZero: !0,
                                    tickFormat: l ? t3 : void 0,
                                    tickLength: 6,
                                    tickStroke: t8,
                                    tickLabelProps: function() {
                                        return {
                                            fill: t4,
                                            textAnchor: "end",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "var(--chakra-fontSizes-sm)",
                                            fontWeight: "600",
                                            dy: "0.33em",
                                            dx: -4
                                        }
                                    }
                                }), (0, A.jsx)(tU.Z, {
                                    top: R + o.top,
                                    left: D,
                                    scale: L,
                                    stroke: t8,
                                    numTicks: 4,
                                    tickStroke: t8,
                                    tickLabelProps: function() {
                                        return {
                                            fill: t4,
                                            textAnchor: "middle",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "var(--chakra-fontSizes-sm)",
                                            fontWeight: "600",
                                            dy: 4
                                        }
                                    },
                                    strokeWidth: 2,
                                    tickLength: 6
                                })]
                            })
                        }), j && C && (0, A.jsx)(t$.Z, {
                            top: y,
                            left: b,
                            style: _,
                            children: (0, A.jsx)(a, {
                                x: C.x,
                                y: C.y
                            })
                        })]
                    })
                },
                t9 = function(e) {
                    var t = e.chartTitle,
                        n = e.TooltipInner,
                        r = e.showZero,
                        i = void 0 === r || r,
                        o = e.shouldRoundYValues,
                        s = void 0 === o || o,
                        a = e.showMaxAndMiddle,
                        c = void 0 === a || a,
                        l = e.data,
                        d = e.barColor,
                        f = void 0 === d ? "var(--chakra-colors-trueblue-200)" : d,
                        p = e.customTooltipStyles,
                        h = e.onClick,
                        m = void 0 === h ? function() {} : h,
                        x = (0, eh.Z)(e, t0);
                    return (0, A.jsxs)(u.xu, t2(t2({
                        position: "relative",
                        height: "300px"
                    }, x), {}, {
                        children: [(0, A.jsx)(ei.x, {
                            size: "xs",
                            color: "gray.500",
                            fontWeight: "600",
                            position: "absolute",
                            top: 3,
                            left: "50%",
                            transform: "translateX(-50%)",
                            children: t
                        }), (0, A.jsx)(tH.Z, {
                            children: function(e) {
                                var t = e.width,
                                    r = e.height;
                                return t < 10 ? null : (0, A.jsx)(t7, {
                                    width: t,
                                    height: r,
                                    showZero: i,
                                    chartData: l,
                                    barColor: f,
                                    customTooltipStyles: p,
                                    onClick: m,
                                    TooltipInner: n,
                                    shouldRoundYValues: s,
                                    showMaxAndMiddle: c
                                })
                            }
                        })]
                    }))
                },
                ne = function(e, t) {
                    var n = "LLL d",
                        r = new Date;
                    r.setDate(r.getDate() - t + 1);
                    for (var i = [], o = 0; o < t; o++) ! function(t) {
                        var o = new Date(r);
                        o.setDate(o.getDate() + t);
                        var s = (0, tG.Z)(o, {
                                representation: "date"
                            }),
                            a = e.find(function(e) {
                                return e.date === s
                            });
                        a ? i.push({
                            x: (0, ec.p6)(a.date, n),
                            y: a.uniqueVisitors ? a.uniqueVisitors : 0
                        }) : i.push({
                            x: (0, ec.p6)(s, n),
                            y: 0
                        })
                    }(o);
                    return i
                },
                nt = function(e) {
                    var t = ne(e.viewData, e.dayCount);
                    return (0, A.jsx)(t9, {
                        data: t,
                        my: 3,
                        chartTitle: (0, A.jsx)(O.cC, {
                            id: "mSEibf"
                        }),
                        TooltipInner: nn
                    })
                },
                nn = function(e) {
                    var t = e.x,
                        n = e.y;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(ei.x, {
                            children: t
                        }), (0, A.jsx)(ei.x, {
                            children: (0, A.jsx)(O.cC, {
                                id: "6MKtHx",
                                values: {
                                    y: n
                                }
                            })
                        })]
                    })
                },
                nr = function(e, t, n) {
                    if (!n) return 0;
                    var r, i, o, s = null !== (r = n.uniqueViewers) && void 0 !== r ? r : 0,
                        a = null !== (i = null === (o = e.editors) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0;
                    return "everyone" === t ? s : "viewersOnly" === t ? Math.max(0, s - a) : 0
                },
                ni = function(e) {
                    var t, n, r, i = e.doc,
                        o = e.handleSharePanelOpen,
                        s = e.onAnalyticsPanelClose,
                        a = (0, S.xls)({
                            variables: {
                                memoId: i.id
                            },
                            skip: !i.id,
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        c = a.loading,
                        l = a.data,
                        d = a.error,
                        u = a.refetch,
                        f = (0, D.SE)().user,
                        h = (0, v.useState)("deckView"),
                        m = h[0],
                        x = h[1],
                        g = (0, v.useState)(null),
                        j = g[0],
                        b = g[1],
                        y = (0, v.useState)("everyone"),
                        C = y[0],
                        w = y[1],
                        I = (0, ec.p6)(i.createdTime, "PPP"),
                        E = i.title || (0, A.jsx)(O.cC, {
                            id: "wja8aL"
                        }),
                        P = (null == l ? void 0 : l.memoStats.viewers) || [],
                        T = (null == l ? void 0 : null === (n = l.memoStats.dailyViews) || void 0 === n ? void 0 : n.dayCount) || 0,
                        R = (t = null == l ? void 0 : l.memoStats) && t.dailyViews ? "everyone" === C ? t.dailyViews.everyone ? t.dailyViews.everyone : [] : "viewersOnly" === C && t.dailyViews.viewers ? t.dailyViews.viewers : [] : [],
                        _ = (0, el.Y)("individual_analytics", i.organization),
                        L = (0, eu.zc)().openUpsellModal,
                        M = R.every(function(e) {
                            return 0 === e.uniqueVisitors
                        }),
                        z = P.filter(function(e) {
                            var t;
                            return "everyone" === C || !(null !== (t = i.editors) && void 0 !== t && t.some(function(t) {
                                var n, r;
                                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null === (r = t.user) || void 0 === r ? void 0 : r.id)
                            }))
                        }),
                        N = nr(i, C, null == l ? void 0 : l.memoStats),
                        Z = (0, v.useCallback)(function(e) {
                            w(e)
                        }, []),
                        G = (0, v.useCallback)(function(e) {
                            x(e)
                        }, []),
                        F = (0, v.useCallback)(function(e) {
                            if (!_ && e.id !== (null == f ? void 0 : f.id)) {
                                L({
                                    segmentEvent: ef.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS
                                });
                                return
                            }
                            b(e)
                        }, [L, _, f]),
                        W = (0, v.useCallback)(function() {
                            b(null)
                        }, []),
                        V = void 0 !== d;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [j && (0, A.jsx)(tI, {
                            user: j,
                            onBackClick: W,
                            docId: i.id,
                            onAnalyticsPanelClose: s
                        }), !j && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(eS, {
                                hasError: V,
                                isAnalyticsLoading: c,
                                setView: G,
                                view: m,
                                description: (0, A.jsx)(O.cC, {
                                    id: "uEtUah",
                                    values: {
                                        docTitle: E,
                                        docCreatedDate: I
                                    }
                                })
                            }), V && (0, A.jsx)(ej, {
                                error: d,
                                refetch: u
                            }), !V && (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(K.i, {}), (0, A.jsxs)($.f, {
                                    children: [c && (0, A.jsx)(no, {}), !c && P.length <= 1 && (0, A.jsx)(ns, {
                                        handleSharePanelOpen: o
                                    }), !c && (0, A.jsxs)(ee.K, {
                                        direction: "column",
                                        mt: 4,
                                        spacing: 4,
                                        children: [(0, A.jsxs)(p.k, {
                                            direction: "row",
                                            justify: "space-between",
                                            align: "center",
                                            children: [(0, A.jsx)(et.X, {
                                                as: "h2",
                                                size: "md",
                                                children: "cardEngagement" === m ? eI() : ek()
                                            }), (0, A.jsx)(tZ, {
                                                selected: C,
                                                handleMenuItemChange: Z,
                                                everyoneCount: nr(i, "everyone", null == l ? void 0 : l.memoStats),
                                                viewersOnlyCount: nr(i, "viewersOnly", null == l ? void 0 : l.memoStats)
                                            })]
                                        }), "deckView" === m && M && (0, A.jsx)(na, {
                                            handleSharePanelOpen: o,
                                            dayCount: T
                                        }), "deckView" === m && !M && (0, A.jsx)(nt, {
                                            viewData: R,
                                            dayCount: T
                                        }), "cardEngagement" === m && (0, A.jsx)(e9, {
                                            docId: i.id,
                                            viewerFilter: C,
                                            currentViewerFilterCount: N,
                                            onAnalyticsPanelClose: s
                                        }), (0, A.jsx)(tO, {
                                            creatorId: (null === (r = i.createdBy) || void 0 === r ? void 0 : r.id) || "",
                                            viewers: z,
                                            currentViewerFilterCount: N,
                                            docCreatedDate: I,
                                            contributors: i.editors || [],
                                            cardCount: (null == l ? void 0 : l.memoStats.cardCount) || 0,
                                            handleTableRowClick: F,
                                            hasIndividualAnalytics: _
                                        }), z.length > 3 && !_ && (0, A.jsx)(k.z, {
                                            variant: "ghost",
                                            size: "sm",
                                            color: "gray.600",
                                            colorScheme: "gray",
                                            onClick: function() {
                                                return L({
                                                    segmentEvent: ef.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS
                                                })
                                            },
                                            children: (0, A.jsx)(O.cC, {
                                                id: "BKBX4n",
                                                values: {
                                                    0: z.length - 3
                                                }
                                            })
                                        }), !_ && (0, A.jsx)(ed.m, {
                                            segmentEvent: ef.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS,
                                            description: U.ag._({
                                                id: "GYgPBy"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                no = function() {
                    return (0, A.jsxs)(p.k, {
                        direction: "column",
                        py: 2,
                        children: [(0, A.jsx)(en.O, {
                            h: 10,
                            width: "40%",
                            mb: 4
                        }), (0, A.jsx)(en.O, {
                            h: 40,
                            mb: 4
                        }), (0, A.jsx)(er.g, {
                            align: "stretch",
                            children: (0, J.Z)([, , , ]).map(function(e, t) {
                                return (0, A.jsx)(en.O, {
                                    h: 12
                                }, t)
                            })
                        })]
                    })
                },
                ns = function(e) {
                    var t = e.handleSharePanelOpen;
                    return (0, A.jsx)(p.k, {
                        p: 3,
                        px: 4,
                        mt: 2,
                        bg: "gray.100",
                        color: ep,
                        borderRadius: "base",
                        children: (0, A.jsxs)(p.k, {
                            align: "baseline",
                            fontSize: "sm",
                            children: [(0, A.jsx)(u.xu, {
                                pr: 2,
                                children: (0, A.jsx)(I.G, {
                                    icon: Q.IL,
                                    "aria-label": "user-icon",
                                    size: "sm"
                                })
                            }), (0, A.jsx)(ei.x, {
                                children: (0, A.jsx)(O.cC, {
                                    id: "FNMh4I",
                                    components: {
                                        0: (0, A.jsx)(ei.x, {
                                            as: "button",
                                            onClick: t,
                                            textDecoration: "underline",
                                            fontWeight: "600",
                                            color: "gray.800"
                                        })
                                    }
                                })
                            })]
                        })
                    })
                },
                na = function(e) {
                    var t = e.handleSharePanelOpen,
                        n = e.dayCount;
                    return (0, A.jsxs)(eo.b, {
                        my: 4,
                        p: 6,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        colorScheme: "gray",
                        children: [(0, A.jsx)(u.Cd, {
                            size: "30px",
                            bg: "gray.500",
                            children: (0, A.jsx)(I.G, {
                                icon: X.Im,
                                color: "white"
                            })
                        }), (0, A.jsx)(es.C, {
                            mt: 4,
                            mb: 2,
                            fontSize: "md",
                            children: (0, A.jsx)(O.cC, {
                                id: "2OzAI5"
                            })
                        }), n > 0 && (0, A.jsxs)(A.Fragment, {
                            children: [(0, A.jsx)(ea.X, {
                                maxWidth: "sm",
                                children: (0, A.jsx)(O.cC, {
                                    id: "qQLmo7",
                                    values: {
                                        dayCount: n
                                    }
                                })
                            }), (0, A.jsx)(k.z, {
                                mt: 4,
                                onClick: t,
                                children: (0, A.jsx)(O.cC, {
                                    id: "IXzWG0"
                                })
                            })]
                        })]
                    })
                },
                nc = function(e) {
                    var t, n, r, i, o, s, a = e.doc,
                        c = e.onAnalyticsPanelClose,
                        l = (0, C.qr)().getState(),
                        d = (0, _.X9)(l),
                        f = (0, D.SE)().user,
                        p = (0, S.IrH)({
                            variables: {
                                docId: a.id,
                                userId: null == f ? void 0 : f.id
                            },
                            skip: !(null != f && f.id),
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        h = p.data,
                        m = p.error,
                        x = p.loading,
                        g = p.refetch,
                        j = null !== (t = null == h ? void 0 : null === (n = h.docCardsStats) || void 0 === n ? void 0 : null === (r = n.everyone) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                        b = null == h ? void 0 : null === (i = h.docCardsStats) || void 0 === i ? void 0 : i.cardCount,
                        y = (0, v.useMemo)(function() {
                            var e;
                            return (null == h ? void 0 : null === (e = h.docCardsStats) || void 0 === e ? void 0 : e.everyone) || []
                        }, [null == h ? void 0 : h.docCardsStats]),
                        w = (0, v.useMemo)(function() {
                            return eL(y, "viewTimePercent")
                        }, [y]);
                    if (!f) return null;
                    var k = f.id === (null === (o = a.createdBy) || void 0 === o ? void 0 : o.id),
                        I = null === (s = a.editors) || void 0 === s ? void 0 : s.some(function(e) {
                            return e.user.id === f.id
                        }),
                        E = {
                            name: f.displayName,
                            id: f.id,
                            profileImg: f.profileImageUrl,
                            email: f.email,
                            isContributor: I,
                            isCreator: k
                        };
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsxs)(eC.x, {
                            children: [(0, A.jsx)(O.cC, {
                                id: "ZlwDi6"
                            }), (0, A.jsx)(ei.x, {
                                fontSize: "sm",
                                fontWeight: "normal",
                                letterSpacing: "normal",
                                color: "gray.500",
                                noOfLines: 1,
                                children: a.title || (0, A.jsx)(O.cC, {
                                    id: "wja8aL"
                                })
                            })]
                        }), (0, A.jsx)(eO.o, {}), (0, A.jsx)(K.i, {}), (0, A.jsx)($.f, {
                            children: (0, A.jsxs)(u.xu, {
                                children: [(0, A.jsx)(tS, {
                                    user: E
                                }), void 0 !== b && (0, A.jsx)(tt, {
                                    description: (0, A.jsx)(O.cC, {
                                        id: "YJOrjl",
                                        values: {
                                            cardsViewed: j,
                                            totalCards: b
                                        }
                                    })
                                }), x && !m && (0, A.jsx)(te, {
                                    includeDescription: !0
                                }), m && (0, A.jsx)(ej, {
                                    error: m,
                                    refetch: g,
                                    px: 0
                                }), !m && !x && (0, A.jsx)(e6, {
                                    cards: d.tree,
                                    scaleToMax: !0,
                                    includeChildren: !0,
                                    leftLabel: (0, A.jsx)(O.cC, {
                                        id: "ml51m3"
                                    }),
                                    rightLabel: (0, A.jsx)(O.cC, {
                                        id: "8R7bfR"
                                    }),
                                    cardLookupTable: w,
                                    tooltipLabel: (0, A.jsx)(e8, {}),
                                    onAnalyticsPanelClose: c
                                }), (0, A.jsxs)(eo.b, {
                                    children: [(0, A.jsx)(em.z, {}), (0, A.jsx)(O.cC, {
                                        id: "Znuvj3",
                                        values: {
                                            GAMMA_PROPER_NOUN: tx.N6,
                                            GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                        }
                                    })]
                                })]
                            })
                        })]
                    })
                },
                nl = function(e) {
                    var t = e.doc,
                        n = e.mode,
                        r = e.isAnalyticsPanelOpen,
                        i = e.onAnalyticsPanelClose,
                        o = e.onSharePanelOpen,
                        s = (0, N.i)({
                            base: "sm",
                            md: "2xl",
                            lg: "4xl"
                        }),
                        a = (0, v.useCallback)(function() {
                            o && (o(), i())
                        }, [o, i]);
                    return (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(H.u_, {
                            onClose: i,
                            isOpen: r,
                            size: s,
                            blockScrollOnMount: !1,
                            children: [(0, A.jsx)(B.Z, {}), (0, A.jsxs)(q.h, {
                                children: ["full" === n ? (0, A.jsx)(ni, {
                                    doc: t,
                                    handleSharePanelOpen: a,
                                    onAnalyticsPanelClose: i
                                }) : (0, A.jsx)(nc, {
                                    doc: t,
                                    onAnalyticsPanelClose: i
                                }), (0, A.jsx)(K.i, {
                                    my: 4
                                }), (0, A.jsx)(Y.m, {
                                    children: (0, A.jsxs)(p.k, {
                                        justifyContent: "full" === n ? "space-between" : "flex-end",
                                        flex: 1,
                                        children: ["full" === n && (0, A.jsx)(k.z, {
                                            leftIcon: (0, A.jsx)(I.G, {
                                                icon: V.zB
                                            }),
                                            variant: "ghost",
                                            onClick: a,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "IXzWG0"
                                            })
                                        }), (0, A.jsx)(k.z, {
                                            variant: "solid",
                                            onClick: i,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "DPfwMq"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                nd = n(77399),
                nu = n(88550),
                nf = n(17714),
                np = n(1123),
                nh = n(55479),
                nm = n(27777),
                nx = n(75156),
                ng = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.onSaveSuccess,
                        i = e.docId,
                        o = (0, nh.p)(),
                        s = (0, v.useRef)(null),
                        a = (0, v.useState)(""),
                        l = a[0],
                        d = a[1],
                        u = (0, S.D1_)(),
                        f = (0, c.Z)(u, 2),
                        p = f[0],
                        h = f[1].loading,
                        m = function() {
                            p({
                                variables: {
                                    id: i,
                                    title: l
                                }
                            }).then(function() {
                                d(function() {
                                    return ""
                                }), r()
                            }).catch(function(e) {
                                console.error(e), o({
                                    title: (0, A.jsx)(A.Fragment, {
                                        children: (0, A.jsx)(O.cC, {
                                            id: "AToAqe",
                                            values: {
                                                0: e.message
                                            }
                                        })
                                    }),
                                    position: "top",
                                    status: "error"
                                })
                            })
                        };
                    return (0, A.jsxs)(H.u_, {
                        returnFocusOnClose: !1,
                        onClose: n,
                        closeOnOverlayClick: !0,
                        isOpen: t,
                        initialFocusRef: s,
                        children: [(0, A.jsx)(B.Z, {}), (0, A.jsxs)(q.h, {
                            children: [(0, A.jsx)(eC.x, {
                                children: (0, A.jsx)(O.cC, {
                                    id: "kq/0Sg",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                    }
                                })
                            }), (0, A.jsx)(eO.o, {}), (0, A.jsx)($.f, {
                                children: (0, A.jsx)(nm.I, {
                                    ref: s,
                                    value: l,
                                    required: !0,
                                    placeholder: (0, nx.$)(),
                                    onChange: function(e) {
                                        return d(e.target.value)
                                    },
                                    onKeyDown: function(e) {
                                        "Enter" === e.key && m()
                                    }
                                })
                            }), (0, A.jsx)(Y.m, {
                                children: (0, A.jsx)(ee.K, {
                                    spacing: 2,
                                    direction: "row",
                                    align: "center",
                                    children: (0, A.jsx)(k.z, {
                                        isLoading: h,
                                        isDisabled: h || !l || !l.length,
                                        onClick: function() {
                                            m()
                                        },
                                        children: (0, A.jsx)(O.cC, {
                                            id: "tfDRzk"
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                nv = (0, v.memo)(function(e) {
                    var t = e.doc,
                        n = (0, v.useCallback)(function() {
                            return nu.T.emit("openSharePanel", "invite")
                        }, []),
                        r = (0, nd.M)({
                            id: "analyticsModalDisclosure"
                        }),
                        i = r.isOpen,
                        o = r.onClose,
                        s = r.onOpen,
                        a = (0, nd.M)({
                            id: "titleModalDisclosure"
                        }),
                        c = a.isOpen,
                        l = a.onOpen,
                        d = a.onClose,
                        u = (0, ef.z$)(),
                        f = (0, D.SE)().user,
                        h = (0, D.py)("manage", t) && !!f,
                        m = (0, v.useCallback)(function() {
                            t && (t.title && "" !== t.title ? n() : l())
                        }, [t, n, l]),
                        x = (0, v.useCallback)(function(e) {
                            return function() {
                                null == u || u.track(ef.AA.DOC_ANALYTICS_VIEWED, {
                                    docId: null == t ? void 0 : t.id,
                                    source: e,
                                    type: "full"
                                }), s()
                            }
                        }, [u, null == t ? void 0 : t.id, s]);
                    return h && t ? (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(p.k, {
                            children: (0, A.jsx)(W.kH, {
                                closeOnMouseDown: !1,
                                closeOnClick: !1,
                                label: (0, A.jsx)(O.cC, {
                                    id: "YaUqUV"
                                }),
                                children: (0, A.jsx)(np.r, {
                                    "data-guider-highlight": "view-analytics-button",
                                    "aria-label": U.ag._({
                                        id: "YaUqUV"
                                    }),
                                    onMouseDown: nf.br,
                                    onClick: x("toolbar_analytics_block"),
                                    icon: (0, A.jsx)(I.G, {
                                        icon: F.M
                                    })
                                })
                            })
                        }), c && (0, A.jsx)(ng, {
                            onClose: d,
                            isOpen: c,
                            onSaveSuccess: function() {
                                d(), n()
                            },
                            docId: null == t ? void 0 : t.id
                        }), i && (0, A.jsx)(nl, {
                            doc: t,
                            onSharePanelOpen: m,
                            onAnalyticsPanelClose: o,
                            isAnalyticsPanelOpen: i,
                            mode: "full"
                        })]
                    }) : null
                }),
                nj = n(93812),
                nb = n(24657),
                ny = n(94370),
                nC = n(34638),
                nw = n(67755),
                nO = n(67925),
                nk = n(73716),
                nI = n(10920),
                nS = n(15756),
                nE = n(81410),
                nP = n(84103),
                nD = n(47655),
                nA = n(72338),
                nT = n(14304),
                nR = n.n(nT),
                n_ = n(39097),
                nL = n.n(n_),
                nM = n(5632),
                nz = n(37057),
                nN = n(34972),
                nZ = n(1153),
                nG = n(97526);

            function nF(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nF(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nF(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nW = (0, x.E)(p.k),
                nV = function(e) {
                    var t = e.doc;
                    return (0, A.jsx)(nW, {
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: (0, A.jsx)(g.M, {
                            initial: !1,
                            children: (0, A.jsx)(nY, {
                                doc: t
                            })
                        })
                    })
                },
                nH = (0, v.memo)(function(e) {
                    var t = e.doc,
                        n = (0, nN._i)().editor,
                        r = (0, S.$gs)().isConnected,
                        i = (0, nh.p)(),
                        o = (0, v.useRef)(null),
                        s = (0, v.useRef)(null),
                        a = (0, S.D1_)(),
                        l = (0, c.Z)(a, 2),
                        d = l[0],
                        f = l[1].loading,
                        p = (0, v.useState)(null),
                        h = p[0],
                        m = p[1],
                        x = (0, v.useState)(!1),
                        g = x[0],
                        j = x[1],
                        b = (0, v.useState)(!1),
                        y = b[0],
                        C = b[1],
                        w = (0, D.py)("edit", t),
                        k = (0, v.useCallback)(function() {
                            if (!n) return "";
                            var e = (0, nA.N2)(n.state.doc, nz.KH),
                                t = (0, c.Z)(e, 1)[0];
                            return t && (0, nD.getCardTitle)(t.node.toJSON()) || ""
                        }, [n]);
                    (0, v.useEffect)(function() {
                        !t || g || f || (m(t.title || ""), C(!!t.titleEdited))
                    }, [t, g, f]);
                    var I = function() {
                            o.current.style.width = s.current.offsetWidth + 0 + "px"
                        },
                        E = (0, nC.ff)("gray.800", "gray.200");
                    return (0, A.jsx)(W.kH, {
                        label: w ? r ? (0, A.jsx)(O.cC, {
                            id: "2wxgft"
                        }) : (0, A.jsx)(O.cC, {
                            id: "Cb+Bgk"
                        }) : null,
                        "aria-label": U.ag._({
                            id: "2wxgft"
                        }),
                        children: (0, A.jsxs)(nw.C, {
                            value: h || "",
                            placeholder: h || k(),
                            isDisabled: f || !w || !r,
                            isPreviewFocusable: w,
                            maxW: 300,
                            width: "100%",
                            fontWeight: "normal",
                            onCancel: function() {
                                I(), j(!1)
                            },
                            onFocus: function() {
                                I(), t && !f && j(!0)
                            },
                            onChange: function(e) {
                                I(), g && (m(e), C(!!e))
                            },
                            onSubmit: function() {
                                if (t && !f) {
                                    j(!1);
                                    var e = h || k();
                                    d({
                                        variables: {
                                            id: t.id,
                                            title: e,
                                            titleEdited: y
                                        }
                                    }).catch(function(e) {
                                        console.error(e), i({
                                            title: (0, A.jsx)(O.cC, {
                                                id: "AToAqe",
                                                values: {
                                                    0: e.message
                                                }
                                            }),
                                            position: "top",
                                            status: "error"
                                        })
                                    })
                                }
                            },
                            children: [(0, A.jsx)(nO.w, {
                                px: 1,
                                py: .5,
                                display: g ? "inline" : "block",
                                overflowX: "hidden",
                                textOverflow: "ellipsis",
                                color: y ? E : "inherit"
                            }), (0, A.jsx)(nk.V, {
                                ref: o,
                                px: 1,
                                py: .5,
                                color: y ? E : "inherit",
                                maxW: 300,
                                _focus: {
                                    outline: "none",
                                    shadow: "0 0 0 2px rgb(66 153 225 / 60%)"
                                }
                            }), (0, A.jsx)(u.xu, {
                                ref: s,
                                as: "span",
                                display: "inline-block",
                                position: "absolute",
                                left: "-9999px",
                                opacity: 0,
                                zIndex: -1,
                                minW: "180px",
                                px: 1,
                                dangerouslySetInnerHTML: {
                                    __html: nR().sanitize((h || "").replace(/\s/g, "&nbsp;"))
                                }
                            })]
                        })
                    })
                });
            nH.displayName = "EditableDocTitle";
            var nB = function(e) {
                    var t = e.cardId,
                        n = e.isEllipsis,
                        r = e.value,
                        i = e.onClick,
                        o = (0, eV.c)(t);
                    if (n) return (0, A.jsx)(I.G, {
                        icon: ny.cN
                    });
                    if (!t && !r) return null;
                    var s = r || (null == o ? void 0 : o.title) || "";
                    return (0, A.jsx)(ei.x, {
                        noOfLines: 1,
                        onClick: i,
                        maxW: 180,
                        fontWeight: "normal",
                        children: s
                    })
                },
                nq = function(e) {
                    var t = e.isPresentModeFlat;
                    return function(e) {
                        var n = (0, _.gh)(e),
                            r = (0, _.i2)(e) || "",
                            i = (0, _.X9)(e).parents[r] || [];
                        if ("DOC_VIEW" === n || t) return [{
                            isHome: !0
                        }, {
                            isDocTitle: !0
                        }];
                        var o = i[0],
                            s = i[i.length - 1];
                        return [{
                            isHome: !0
                        }, i.length > 1 ? {
                            cardId: o
                        } : null, i.length > 2 ? {
                            isEllipsis: !0
                        } : null, i.length > 0 ? {
                            cardId: s
                        } : null, {
                            cardId: r
                        }]
                    }
                },
                nK = function() {
                    var e = (0, b.ye)("presentModeFlat");
                    return (0, C.CG)(nq({
                        isPresentModeFlat: e
                    }), function(e, t) {
                        return JSON.stringify(e) === JSON.stringify(t)
                    })
                },
                nY = (0, v.memo)(function(e) {
                    var t = e.doc,
                        n = nK(),
                        r = (0, nZ.X)(nG.H.lastHomeUrl, "/"),
                        i = (0, c.Z)(r, 1)[0],
                        o = (0, b.ye)("offline"),
                        s = (0, D.SE)().user,
                        a = (0, S.$gs)().isConnected,
                        l = (0, nN._i)().confirmNavigation,
                        d = (0, nM.useRouter)().push,
                        f = (0, N.i)({
                            base: "xs",
                            sm: "sm"
                        }),
                        m = (0, nC.ff)("gray.500", "gray.400"),
                        x = (0, nC.ff)("gray.800", "gray.100");
                    return (0, A.jsxs)(h.U, {
                        spacing: 0,
                        as: k.z,
                        textAlign: "left",
                        px: 0,
                        _hover: {
                            color: x
                        },
                        h: 8,
                        children: [(0, A.jsx)(nI.a, {
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            size: f,
                            spacing: ["4px", "8px"],
                            variant: "plainButton",
                            separator: (0, A.jsx)(u.xu, {
                                color: "gray.300",
                                mt: ["0.2rem", "0.125rem"],
                                children: (0, A.jsx)(I.G, {
                                    icon: eG._t
                                })
                            }),
                            children: n.map(function(e, r) {
                                if (!e) return null;
                                var o = r === n.length - 1,
                                    a = e.cardId,
                                    c = e.isEllipsis,
                                    u = e.isDocTitle,
                                    f = e.isHome,
                                    p = e.value,
                                    h = f ? "home" : c ? "ellipsis" : a || p || r;
                                if (f && !s) return null;
                                var x = {
                                    as: nL(),
                                    href: i || "/",
                                    colorScheme: "gray",
                                    fontWeight: "normal",
                                    "data-testid": "toolbar-home-link"
                                };
                                return (0, A.jsx)(nS.g, {
                                    children: (0, A.jsx)(nW, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        children: (0, A.jsx)(nE.A, nU(nU({
                                            isCurrentPage: o,
                                            pointerEvents: o && !u ? "none" : "inherit",
                                            color: o ? m : "inherit"
                                        }, f ? nU({}, x) : {}), {}, {
                                            children: u ? (0, A.jsx)(nH, {
                                                doc: t
                                            }) : f ? (0, A.jsx)(nP.r, {
                                                href: x.href,
                                                onClick: function(e) {
                                                    e.preventDefault(), l().then(function() {
                                                        d(x.href)
                                                    })
                                                },
                                                mr: 1,
                                                children: (0, A.jsx)(I.G, {
                                                    size: "1x",
                                                    icon: nb.J9
                                                })
                                            }) : (0, A.jsx)(nB, {
                                                cardId: a,
                                                value: p,
                                                isEllipsis: c,
                                                onClick: function() {
                                                    a && (0, eH.D)({
                                                        cardId: a,
                                                        method: "push"
                                                    })
                                                }
                                            })
                                        }))
                                    }, h)
                                }, h)
                            })
                        }), !a && (0, A.jsx)(W.kH, {
                            label: (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(ei.x, {
                                    mr: 2,
                                    children: (0, A.jsx)(O.cC, {
                                        id: "ysdDIA"
                                    })
                                }), o && (0, A.jsx)(ei.x, {
                                    color: "gray.300",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "+QNhGE"
                                    })
                                })]
                            }),
                            "aria-label": U.ag._({
                                id: "IcHxhR"
                            }),
                            children: (0, A.jsx)(p.k, {
                                color: "gray.300",
                                alignItems: "center",
                                pr: 3,
                                children: (0, A.jsx)(I.G, {
                                    icon: nj.bK
                                })
                            })
                        })]
                    })
                });
            nY.displayName = "BreadcrumbGroup";
            var nJ = n(76547),
                nX = n(82642),
                nQ = n(76648),
                n$ = n(30807),
                n0 = n(80040),
                n1 = n(95258),
                n2 = n(28957),
                n5 = n(43997),
                n3 = n(69895),
                n6 = function() {
                    var e = (0, D.SE)(),
                        t = e.user,
                        n = e.anonymousUser,
                        r = (0, n5.I0)(),
                        o = (0, nh.p)(),
                        s = (0, nN._i)().editor,
                        a = (0, n5.v9)((0, _._h)((null == t ? void 0 : t.id) || n.id)),
                        c = a.collaborators,
                        l = a.followers;
                    (0, n3.rU)({
                        editor: s,
                        collaborators: c,
                        user: t
                    });
                    var d = (0, n5.v9)(_.Ok),
                        u = (0, n5.v9)(_.e0),
                        f = (0, n5.v9)(_.yn),
                        m = (0, n5.v9)(_.gs),
                        x = (0, n5.v9)(_.JA);
                    (0, v.useEffect)(function() {
                        d.forEach(function(e) {
                            o({
                                duration: 2e3,
                                position: "bottom",
                                render: function() {
                                    return (0, A.jsxs)(p.k, {
                                        bg: "gray.50",
                                        p: 3,
                                        px: 6,
                                        align: "center",
                                        borderRadius: "md",
                                        shadow: "md",
                                        children: [(0, A.jsx)(td.q, {
                                            size: "sm",
                                            src: e.profileImageUrl,
                                            border: "solid 2px ".concat(e.color),
                                            color: eT()(e.color).isDark() ? "white" : "black",
                                            bg: e.color,
                                            ignoreFallback: !0
                                        }), (0, A.jsx)(ei.x, {
                                            ml: 2,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "DSaSKH",
                                                values: {
                                                    0: e.name
                                                }
                                            })
                                        })]
                                    })
                                }
                            })
                        })
                    }, [d, o]), (0, v.useEffect)(function() {
                        var e = !f && m && !x;
                        if (s && e) {
                            o.closeAll();
                            var t = o({
                                id: "detached-toast",
                                render: function() {
                                    return (0, A.jsxs)(p.k, {
                                        bg: "gray.50",
                                        p: 3,
                                        px: 6,
                                        m: 4,
                                        justify: "flex-end",
                                        align: "center",
                                        borderRadius: "md",
                                        shadow: "md",
                                        children: [(0, A.jsx)(ei.x, {
                                            size: "sm",
                                            mr: 6,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "PjodLp"
                                            })
                                        }), (0, A.jsxs)(nQ.h, {
                                            size: "sm",
                                            alignItems: "center",
                                            children: [(0, A.jsx)(k.z, {
                                                onClick: function() {
                                                    r((0, _.Qx)({
                                                        attached: !0
                                                    }))
                                                },
                                                variant: "solid",
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "f/C2ic"
                                                })
                                            }), (0, A.jsx)(W.kH, {
                                                label: (0, A.jsx)(O.cC, {
                                                    id: "5JWVnj"
                                                }),
                                                children: (0, A.jsx)(eF.h, {
                                                    isRound: !0,
                                                    variant: "ghost",
                                                    size: "xs",
                                                    "aria-label": U.ag._({
                                                        id: "5JWVnj"
                                                    }),
                                                    icon: (0, A.jsx)(nX.T, {}),
                                                    onClick: function() {
                                                        r((0, _.Qx)({
                                                            attached: !1,
                                                            following: null
                                                        }))
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                },
                                position: "bottom",
                                duration: null
                            });
                            return function() {
                                o.close(t)
                            }
                        }
                    }, [s, f, m, x, o, r]), (0, v.useEffect)(function() {
                        m || !s || s.isDestroyed || r((0, _.Qx)({
                            following: null
                        }))
                    }, [s, m, r]);
                    var g = (0, N.i)({
                            base: 4,
                            md: 6,
                            xl: 8
                        }) || 6,
                        j = g / (l.length ? 2 : 1),
                        b = g / (c.length ? 2 : 1);
                    return (0, A.jsx)(p.k, {
                        children: (0, A.jsxs)(h.U, {
                            divider: (0, A.jsx)(n$.c, {
                                borderColor: "gray.200"
                            }),
                            children: [l.length && (0, A.jsx)(n4, {
                                type: i.FOLLOWERS,
                                collaborators: l,
                                max: b,
                                isEveryone: 0 === c.length,
                                localCollaborator: u,
                                localIsAttached: f
                            }), c.length && (0, A.jsx)(n4, {
                                type: i.COLLABORATORS,
                                collaborators: c,
                                max: j,
                                isEveryone: 0 === l.length,
                                localCollaborator: u,
                                localIsAttached: f
                            })]
                        })
                    })
                };
            (r = i || (i = {})).FOLLOWERS = "FOLLOWERS", r.COLLABORATORS = "COLLABORATORS";
            var n4 = function(e) {
                    var t = e.collaborators,
                        n = e.localCollaborator,
                        r = e.localIsAttached,
                        o = e.type,
                        s = e.max,
                        a = e.isEveryone,
                        c = (0, n3.OM)(),
                        l = o === i.FOLLOWERS,
                        d = t.length > s,
                        u = d ? t.slice(0, s - 1) : t,
                        f = d ? t.length - s + 1 : 0,
                        h = function(e) {
                            var t = e.localIsFollowing,
                                n = e.collaborator;
                            l || c({
                                localIsFollowing: t,
                                localIsAttached: r,
                                collaborator: n
                            })
                        };
                    return (0, A.jsx)(n2.S, {
                        children: (0, A.jsxs)(n0.H, {
                            size: "sm",
                            spacing: l ? -2 : 0,
                            children: [l && (0, A.jsx)(n8, {
                                isEveryone: a
                            }), u.map(function(e, t) {
                                var i, o = (null == n ? void 0 : null === (i = n.memoState) || void 0 === i ? void 0 : i.following) === e.sessionId,
                                    s = !!e.idleSince,
                                    a = !l && (d || u.length - 1 !== t);
                                return (0, A.jsx)(W.Vw, {
                                    ignoreFallback: !0,
                                    name: e.name,
                                    label: (0, A.jsxs)(p.k, {
                                        direction: "column",
                                        justify: "center",
                                        align: "center",
                                        children: [(0, A.jsx)(ei.x, {
                                            children: e.name
                                        }), (0, A.jsx)(ei.x, {
                                            fontSize: "xs",
                                            children: l ? (0, A.jsx)(O.cC, {
                                                id: "iRohzP"
                                            }) : o && r ? (0, A.jsx)(O.cC, {
                                                id: "1QTvS5"
                                            }) : (0, A.jsx)(O.cC, {
                                                id: "2Ldadb"
                                            })
                                        })]
                                    }),
                                    pointerEvents: s ? "none" : "auto",
                                    opacity: s ? .4 : 1,
                                    transitionProperty: "common",
                                    transitionDuration: "normal",
                                    src: e.profileImageUrl,
                                    border: "solid 2px ".concat(e.color),
                                    nubbin: o && r,
                                    bg: e.color,
                                    shadow: "base",
                                    color: eT()(e.color).isDark() ? "white" : "black",
                                    cursor: l ? "" : "pointer",
                                    boxProps: a ? {
                                        marginEnd: -2
                                    } : {},
                                    onClick: function() {
                                        return h({
                                            localIsFollowing: o,
                                            collaborator: e
                                        })
                                    }
                                }, e.sessionId)
                            }), f > 0 && (0, A.jsxs)(W.Z9, {
                                tooltipLabel: U.ag._({
                                    id: "25VyZX"
                                }),
                                onClick: function(e) {
                                    var r, i = t.find(function(t) {
                                        return t.id === e.id
                                    });
                                    h({
                                        localIsFollowing: !!(i && (null == n ? void 0 : null === (r = n.memoState) || void 0 === r ? void 0 : r.following) === i.sessionId),
                                        collaborator: i
                                    })
                                },
                                avatars: t,
                                count: f,
                                disabled: l,
                                children: [(0, A.jsx)(ei.x, {
                                    px: 2,
                                    children: l ? (0, A.jsx)(O.cC, {
                                        id: "vliZud",
                                        values: {
                                            0: t.length
                                        }
                                    }) : (0, A.jsx)(O.cC, {
                                        id: "sC4bhw",
                                        values: {
                                            0: t.length
                                        }
                                    })
                                }), !l && (0, A.jsx)(ei.x, {
                                    px: 2,
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "miJbY4"
                                    })
                                }), (0, A.jsx)(n1.R, {})]
                            })]
                        })
                    })
                },
                n8 = function(e) {
                    var t = e.isEveryone,
                        n = (0, v.useState)(!1),
                        r = n[0],
                        i = n[1],
                        o = (0, v.useState)(!1),
                        s = o[0],
                        a = o[1],
                        c = (0, v.useState)(!1),
                        l = c[0],
                        d = c[1];
                    return ((0, v.useEffect)(function() {
                        !r && t && (a(!0), i(!0), setTimeout(function() {
                            a(!1)
                        }, 3e3))
                    }, [t, r]), t) ? (0, A.jsx)(u.xu, {
                        fontSize: "sm",
                        color: "",
                        px: 2,
                        mr: 2,
                        children: (0, A.jsx)(W.kH, {
                            label: (0, A.jsx)(O.cC, {
                                id: "w7dTyp"
                            }),
                            isOpen: l || s,
                            children: (0, A.jsx)(u.xu, {
                                mr: 2,
                                px: 1,
                                bg: "green.300",
                                color: "green.900",
                                borderRadius: "full",
                                onMouseEnter: function() {
                                    return d(!0)
                                },
                                onMouseLeave: function() {
                                    return d(!1)
                                },
                                children: (0, A.jsx)(I.G, {
                                    icon: nJ.Md
                                })
                            })
                        })
                    }) : (0, A.jsx)(u.xu, {
                        fontSize: "sm",
                        color: "gray.700",
                        pr: 4,
                        children: (0, A.jsx)(I.G, {
                            icon: nJ.Md
                        })
                    })
                },
                n7 = n(60670),
                n9 = n(54728),
                re = n(51434),
                rt = n(94301),
                rn = n(91333),
                rr = n(10344),
                ri = n(70173),
                ro = n(93848),
                rs = n(22569),
                ra = (0, x.E)(u.xu),
                rc = function(e) {
                    var t = e.commentFeedItems,
                        n = e.editor,
                        r = e.doc,
                        i = e.user;
                    return n && i ? (0, A.jsx)(ee.K, {
                        p: 2,
                        children: (0, A.jsx)(g.M, {
                            initial: !1,
                            children: t.map(function(e) {
                                return (0, A.jsx)(ra, {
                                    layout: !0,
                                    initial: {
                                        opacity: 0,
                                        scale: .85
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: .85
                                    },
                                    bg: "gray.100",
                                    borderColor: "gray.200",
                                    borderWidth: "1px",
                                    borderRadius: "md",
                                    shadow: "sm",
                                    children: (0, A.jsx)(rs.q, {
                                        comment: e,
                                        editor: n,
                                        selfUser: i,
                                        docId: r.id,
                                        userCanComment: !1,
                                        instanceType: "notification"
                                    }, e.id)
                                }, e.id)
                            })
                        })
                    }) : null
                },
                rl = n(38140),
                rd = n(88914);

            function ru(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function rf(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ru(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ru(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var rp = function(e) {
                    return !!e.comment && null !== e.timeout
                },
                rh = function(e) {
                    var t = e.user,
                        n = e.docId,
                        r = e.docComments,
                        i = void 0 === r ? [] : r,
                        o = e.pauseExiration,
                        a = void 0 !== o && o,
                        l = e.duration,
                        d = void 0 === l ? 5e3 : l,
                        u = (0, nh.p)(),
                        f = null == t ? void 0 : t.id,
                        p = (0, v.useMemo)(function() {
                            if (!f) return null;
                            var e = new rl.default(rd.v.KNOCK_PUBLIC_KEY);
                            return e.authenticate(f), e
                        }, [f]),
                        h = (0, v.useState)({}),
                        m = h[0],
                        x = h[1],
                        g = (0, v.useRef)(!0),
                        j = (0, v.useRef)(a);
                    j.current = a, (0, v.useEffect)(function() {
                        return function() {
                            g.current = !1
                        }
                    }, []);
                    var b = (0, v.useCallback)(function() {
                            return x({})
                        }, []),
                        y = (0, v.useCallback)(function(e) {
                            x(function(t) {
                                return Object.entries(t).reduce(function(t, n) {
                                    var r = (0, c.Z)(n, 2),
                                        i = r[0],
                                        o = r[1];
                                    return (!0 === e ? -1 === o.timeout : i === e) || (t[i] = o), t
                                }, {})
                            })
                        }, []);
                    return (0, v.useEffect)(function() {
                        a || y(!0)
                    }, [y, a]), (0, v.useEffect)(function() {
                        Object.entries(m).forEach(function(e) {
                            var t = (0, c.Z)(e, 2),
                                n = t[0],
                                r = t[1],
                                o = r.entry;
                            if (null === r.timeout) {
                                var a = o.data.commentId,
                                    l = null == i ? void 0 : i.find(function(e) {
                                        return e.id === a
                                    });
                                if (l) {
                                    var u = setTimeout(function() {
                                        g.current && (j.current ? x(function(e) {
                                            var t = rf({}, e);
                                            return t[n].timeout = -1, t
                                        }) : y(n))
                                    }, d);
                                    x(function(e) {
                                        return rf(rf({}, e), {}, (0, s.Z)({}, n, {
                                            entry: o,
                                            comment: l,
                                            timeout: u
                                        }))
                                    })
                                }
                            }
                        })
                    }, [m, i, d, y]), (0, v.useEffect)(function() {
                        if (p && n) {
                            var e = p.feeds.initialize(rd.v.KNOCK_FEED_ID, {
                                    source: "new-comment",
                                    status: "unseen"
                                }),
                                t = e.listenForUpdates();
                            e.on("messages.new", function(t) {
                                var r = t.entries,
                                    i = (0, c.Z)(r, 1)[0];
                                i.data.docId === n && (x(function(e) {
                                    return rf(rf({}, e), {}, (0, s.Z)({}, i.id, {
                                        entry: i,
                                        timeout: null
                                    }))
                                }), e.markAsSeen(i).then(function() {
                                    console.debug("New notification marked as seen")
                                }).catch(function(e) {
                                    console.error("Unable to mark notification as seen", e)
                                }))
                            });
                            var r = S.C9N.on("status", function(e) {
                                var t = e.isConnected,
                                    n = p.client();
                                t ? n.connectSocket() : n.disconnectSocket()
                            });
                            return function() {
                                r(), t()
                            }
                        }
                    }, [n, u, p]), {
                        reset: b,
                        comments: Object.values(m).filter(rp).map(function(e) {
                            return e.comment
                        })
                    }
                },
                rm = function(e) {
                    var t, n = e.toggleCommentsPanel,
                        r = e.isCommentsPanelOpen,
                        i = e.doc,
                        o = e.mode,
                        s = (0, D.SE)().user,
                        a = (0, L._i)().editor,
                        l = (0, eB.XI)(),
                        d = (0, c.Z)(l, 2),
                        u = d[0],
                        f = d[1],
                        p = rh({
                            user: s,
                            docId: null == i ? void 0 : i.id,
                            docComments: null == i ? void 0 : i.comments,
                            pauseExiration: f
                        }),
                        h = p.comments,
                        m = p.reset,
                        x = !!(a && i && i.comments);
                    (0, v.useEffect)(function() {
                        if (x) {
                            var e = (0, G.sY)().commentId;
                            e && ro.pw.emit(ro.TI.OPEN_POPUP_COMMENT, {
                                commentId: e,
                                highlightComment: !0
                            })
                        }
                    }, [x]), (0, v.useEffect)(function() {
                        (r || o === ri.q.SLIDE_VIEW) && m()
                    }, [r, m, o]);
                    var g = !!h.length && !r && o !== ri.q.SLIDE_VIEW,
                        j = (null == i ? void 0 : null === (t = i.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === S.Ux9.Open
                        }).length) || 0;
                    return (0, A.jsxs)(n9.J, {
                        isLazy: !0,
                        lazyBehavior: "keepMounted",
                        returnFocusOnClose: !1,
                        isOpen: g,
                        placement: "bottom",
                        children: [(0, A.jsx)(re.x, {
                            children: (0, A.jsx)(np.h, {
                                onMouseDown: nf.br,
                                onClick: n,
                                icon: (0, A.jsx)(I.G, {
                                    icon: n7.Mz
                                }),
                                isActive: r,
                                "aria-label": r ? "Hide comments" : "Show comments",
                                borderRadius: 5,
                                children: j
                            })
                        }), (0, A.jsx)(rt.h, {
                            children: i && (0, A.jsxs)(rn.y, {
                                bg: "white",
                                shadow: "lg",
                                border: "none",
                                ref: u,
                                children: [(0, A.jsx)(rr.Q, {
                                    bg: "white"
                                }), (0, A.jsx)(rc, {
                                    editor: a,
                                    user: s,
                                    commentFeedItems: h,
                                    doc: i
                                })]
                            })
                        })]
                    })
                },
                rx = n(75695),
                rg = n(23026),
                rv = function() {
                    return (0, A.jsx)(p.k, {
                        children: (0, A.jsx)(W.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            label: (0, A.jsx)(O.cC, {
                                id: "EVnzPs"
                            }),
                            children: (0, A.jsx)(np.r, {
                                "data-guider-highlight": "design-partner-button",
                                "aria-label": "Edit with AI",
                                colorScheme: "trueblue",
                                variant: "plain",
                                onClick: function() {
                                    rg.T.emit("toggle", {})
                                },
                                icon: (0, A.jsx)(I.G, {
                                    icon: rx.KC
                                })
                            })
                        })
                    })
                },
                rj = n(36471),
                rb = n(57895),
                ry = n(90282),
                rC = n(24799),
                rw = n(1672),
                rO = n(10649),
                rk = n(86378),
                rI = n(82904),
                rS = n(4036),
                rE = n(82282),
                rP = n(31807),
                rD = n(66397),
                rA = n(53776),
                rT = n(18149),
                rR = n.n(rT),
                r_ = n(420),
                rL = n(76360),
                rM = n(75342),
                rz = n(2046),
                rN = n(70287),
                rZ = function(e) {
                    var t = e.onAddDomain,
                        n = e.isAddingDomain,
                        r = (0, v.useState)(""),
                        i = r[0],
                        o = r[1],
                        s = (0, P.m6)(i);
                    return (0, A.jsx)(rL.Z, {
                        my: 2,
                        variant: "filled",
                        children: (0, A.jsx)(rM.e, {
                            fontSize: "sm",
                            children: (0, A.jsxs)(ee.K, {
                                spacing: 5,
                                children: [(0, A.jsx)(ei.x, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "MPZogu",
                                        values: {
                                            GAMMA_PROPER_NOUN: tx.N6
                                        }
                                    })
                                }), (0, A.jsxs)(rz.NI, {
                                    children: [(0, A.jsx)(rN.l, {
                                        children: (0, A.jsx)(O.cC, {
                                            id: "49uOXe"
                                        })
                                    }), (0, A.jsxs)(h.U, {
                                        children: [(0, A.jsx)(nm.I, {
                                            bg: "white",
                                            placeholder: "www.yourdomain.com",
                                            value: i,
                                            onChange: function(e) {
                                                return o(e.target.value)
                                            },
                                            onKeyDown: function(e) {
                                                "Enter" === e.key && s && (e.preventDefault(), t(i))
                                            }
                                        }), (0, A.jsx)(ee.K, {
                                            children: (0, A.jsx)(W.kH, {
                                                label: (0, A.jsx)(O.cC, {
                                                    id: "aUB5ST"
                                                }),
                                                placement: "top",
                                                shouldWrapChildren: !0,
                                                isDisabled: s,
                                                children: (0, A.jsx)(k.z, {
                                                    isDisabled: !s,
                                                    variant: "solid",
                                                    onClick: function() {
                                                        return t(i)
                                                    },
                                                    isLoading: n,
                                                    children: (0, A.jsx)(O.cC, {
                                                        id: "SbL5Je"
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                rG = n(48453),
                rF = n(86554),
                rU = n(21891),
                rW = n(92936),
                rV = n(60807),
                rH = n(35837),
                rB = function(e) {
                    var t = e.path,
                        n = e.pathError,
                        r = e.conflictingRoute,
                        i = e.onPathUpdate,
                        o = e.isPathInputDisabled,
                        s = e.onClose;
                    return (0, A.jsxs)(ee.K, {
                        pb: 6,
                        children: [(0, A.jsx)(ee.K, {
                            direction: "row",
                            children: (0, A.jsxs)(ei.x, {
                                children: [(0, A.jsx)(O.cC, {
                                    id: "dq8+qI"
                                }), ":", " "]
                            })
                        }), (0, A.jsx)(m.L, {}), (0, A.jsx)(ee.K, {
                            spacing: 2,
                            children: (0, A.jsx)(h.U, {
                                spacing: 1,
                                children: (0, A.jsxs)(rz.NI, {
                                    as: "fieldset",
                                    isInvalid: void 0 !== n && n,
                                    children: [(0, A.jsx)(h.U, {
                                        children: (0, A.jsxs)(rU.B, {
                                            children: [(0, A.jsx)(rW.Ui, {
                                                children: "/"
                                            }), (0, A.jsx)(nm.I, {
                                                isDisabled: o,
                                                bg: "white",
                                                flex: 2,
                                                value: t,
                                                onChange: function(e) {
                                                    i((0, P.pi)(e.currentTarget.value))
                                                }
                                            })]
                                        })
                                    }), (0, A.jsxs)(ee.K, {
                                        spacing: 4,
                                        children: [(0, A.jsx)(rz.Q6, {
                                            fontSize: "sm",
                                            children: (0, A.jsxs)(ee.K, {
                                                alignContent: "flex-start",
                                                justifyContent: "space-between",
                                                direction: "row",
                                                w: "100%",
                                                children: [(0, A.jsx)(ee.K, {
                                                    spacing: 1,
                                                    children: (0, A.jsx)(ei.x, {
                                                        color: "gray.500",
                                                        children: (0, A.jsx)(O.cC, {
                                                            id: "ZMlbHK"
                                                        })
                                                    })
                                                }), r && (0, A.jsx)(rV.J1, {
                                                    justifyContent: "flex-end",
                                                    alignItems: "flex-start",
                                                    children: (0, A.jsx)(ei.x, {
                                                        fontSize: "xs",
                                                        children: (0, A.jsx)(O.cC, {
                                                            id: "DQaTdC",
                                                            components: {
                                                                0: (0, A.jsx)(nP.r, {
                                                                    textDecoration: "underline",
                                                                    href: (0, G.Gn)({
                                                                        docId: r.docId
                                                                    }),
                                                                    target: "_blank"
                                                                })
                                                            }
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, A.jsx)(ei.x, {
                                            fontSize: "sm",
                                            color: "gray.500",
                                            mt: 4,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "g4cZni",
                                                components: {
                                                    0: (0, A.jsx)(k.z, {
                                                        variant: "link",
                                                        as: "span",
                                                        size: "sm",
                                                        cursor: "pointer",
                                                        onClick: function() {
                                                            s(), ro.pw.emit(ro.TI.OPEN_PAGE_SETUP, "preview")
                                                        }
                                                    })
                                                }
                                            })
                                        }), (0, A.jsxs)(eo.b, {
                                            colorScheme: "gray",
                                            bg: "blackAlpha.100",
                                            children: [(0, A.jsx)(em.z, {}), (0, A.jsxs)(ee.K, {
                                                children: [(0, A.jsx)(ei.x, {
                                                    fontWeight: "bold",
                                                    fontSize: "sm",
                                                    children: (0, A.jsx)(O.cC, {
                                                        id: "E29kJ/"
                                                    })
                                                }), (0, A.jsxs)(rH.QI, {
                                                    pl: "4",
                                                    spacing: "1",
                                                    fontSize: "xs",
                                                    children: [(0, A.jsxs)(rH.HC, {
                                                        children: [(0, A.jsx)(O.cC, {
                                                            id: "tB9qsK",
                                                            values: {
                                                                GAMMA_PROPER_NOUN: tx.N6
                                                            }
                                                        }), " ", (0, A.jsx)(W.Yq, {
                                                            label: U.ag._({
                                                                id: "9sEGjz"
                                                            })
                                                        })]
                                                    }), (0, A.jsx)(rH.HC, {
                                                        children: (0, A.jsx)(O.cC, {
                                                            id: "8Ijq31"
                                                        })
                                                    }), (0, A.jsx)(rH.HC, {
                                                        children: (0, A.jsx)(O.cC, {
                                                            id: "0rExAx"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                rq = function(e) {
                    var t = e.onClose,
                        n = e.onConfirm,
                        r = (0, v.useCallback)(function() {
                            t(), n()
                        }, [t, n]);
                    return (0, A.jsxs)(H.u_, {
                        onClose: t,
                        isOpen: !0,
                        children: [(0, A.jsx)(B.Z, {}), (0, A.jsxs)(q.h, {
                            children: [(0, A.jsx)(eC.x, {
                                children: (0, A.jsx)(O.cC, {
                                    id: "dqU8B8"
                                })
                            }), (0, A.jsx)(eO.o, {}), (0, A.jsx)($.f, {
                                children: (0, A.jsxs)(ee.K, {
                                    spacing: 4,
                                    children: [(0, A.jsx)(ei.x, {
                                        fontWeight: "bold",
                                        children: (0, A.jsx)(O.cC, {
                                            id: "TKppIR"
                                        })
                                    }), (0, A.jsx)(ei.x, {
                                        children: (0, A.jsx)(O.cC, {
                                            id: "jvL5br"
                                        })
                                    })]
                                })
                            }), (0, A.jsx)(Y.m, {
                                children: (0, A.jsxs)(nQ.h, {
                                    children: [(0, A.jsx)(k.z, {
                                        variant: "ghost",
                                        onClick: t,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, A.jsx)(k.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        onClick: r,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "3EbjfR"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                rK = n(31145),
                rY = n(84558),
                rJ = function(e) {
                    var t = e.heading,
                        n = e.subheading,
                        r = e.icon,
                        i = e.children;
                    return (0, A.jsxs)(p.k, {
                        gap: 4,
                        alignItems: "center",
                        children: [(0, A.jsx)(p.k, {
                            h: "8",
                            w: "8",
                            bg: "gray.200",
                            borderRadius: "full",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "gray.800",
                            children: (0, A.jsx)(I.G, {
                                icon: r
                            })
                        }), (0, A.jsxs)(ee.K, {
                            spacing: 0,
                            children: [t, n]
                        }), (0, A.jsx)(m.L, {}), i]
                    })
                },
                rX = function(e) {
                    var t, n, r = e.doc,
                        i = e.site,
                        o = e.path,
                        s = e.isPublishing,
                        a = void 0 !== s && s,
                        c = e.isUnpublishing,
                        l = void 0 !== c && c,
                        d = e.enabled,
                        u = e.publishButtonTooltipLabel,
                        f = e.onPublishClick,
                        p = e.onUnpublishClick,
                        m = null == r ? void 0 : r.title,
                        x = !!(null == r ? void 0 : r.publishedSnapshotId),
                        g = null == i ? void 0 : null === (t = i.currentDeployment) || void 0 === t ? void 0 : t.deploymentTime,
                        j = x && !!g && (null == i ? void 0 : i.currentDeployment) && (null == r ? void 0 : r.publishedTime) && new Date(null == i ? void 0 : i.currentDeployment.deploymentTime) > new Date(r.publishedTime),
                        b = null == i ? void 0 : null === (n = i.domains) || void 0 === n ? void 0 : n[0],
                        y = (0, P.mn)({
                            domain: b,
                            path: o
                        }),
                        C = (0, v.useMemo)(function() {
                            return {
                                fromNow: (0, ec.Km)(g),
                                calendar: (0, ec.p6)(g, "PPpp")
                            }
                        }, [g]);
                    return (0, A.jsx)(rJ, {
                        heading: (0, A.jsxs)(h.U, {
                            children: [(0, A.jsx)(ei.x, {
                                noOfLines: 1,
                                children: m
                            }), j && (0, A.jsx)(rS.C, {
                                colorScheme: "green",
                                children: "Live"
                            })]
                        }),
                        subheading: j ? (0, A.jsxs)(h.U, {
                            spacing: 1.5,
                            fontSize: "sm",
                            children: [(0, A.jsx)(ei.x, {
                                color: "gray.500",
                                fontSize: "sm",
                                children: (0, A.jsx)(O.cC, {
                                    id: "ay/UB+",
                                    values: {
                                        0: C.fromNow
                                    },
                                    components: {
                                        0: (0, A.jsx)(W.kH, {
                                            label: C.calendar,
                                            placement: "top",
                                            shouldWrapChildren: !0
                                        }),
                                        1: (0, A.jsx)(ei.x, {
                                            as: "span",
                                            cursor: "pointer",
                                            style: {
                                                textDecoration: "underline"
                                            }
                                        })
                                    }
                                })
                            }), (0, A.jsx)(ei.x, {
                                fontSize: "sm",
                                color: "gray.500",
                                children: "•"
                            }), (0, A.jsx)(k.z, {
                                variant: "link",
                                size: "sm",
                                onClick: p,
                                isDisabled: a || l,
                                isLoading: l,
                                children: (0, A.jsx)(O.cC, {
                                    id: "4DLZUa"
                                })
                            })]
                        }) : l || a ? (0, A.jsx)(ei.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            children: (0, A.jsx)(r_.$, {
                                size: "xs"
                            })
                        }) : (0, A.jsx)(ei.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            children: (0, A.jsx)(O.cC, {
                                id: "mY40hj"
                            })
                        }),
                        icon: rY.Rk,
                        children: (0, A.jsxs)(nQ.h, {
                            children: [(0, A.jsx)(W.kH, {
                                label: u,
                                shouldWrapChildren: !0,
                                placement: "top",
                                children: (0, A.jsx)(k.z, {
                                    variant: "solid",
                                    isDisabled: !d,
                                    isLoading: a || l,
                                    loadingText: a ? U.ag._({
                                        id: "Bdha5y"
                                    }) : l ? U.ag._({
                                        id: "JZOp0b"
                                    }) : void 0,
                                    onClick: f,
                                    children: (0, A.jsx)(O.cC, {
                                        id: "qcawwg"
                                    })
                                })
                            }), j && (0, A.jsx)(W.kH, {
                                label: y,
                                shouldWrapChildren: !0,
                                placement: "top",
                                children: (0, A.jsx)(k.z, {
                                    variant: "plain",
                                    as: "a",
                                    target: "_blank",
                                    _hover: {
                                        textDecoration: "none",
                                        color: "trueblue.500"
                                    },
                                    href: y,
                                    isDisabled: !d,
                                    rightIcon: (0, A.jsx)(I.G, {
                                        icon: rK.faArrowUpRightFromSquare
                                    }),
                                    children: (0, A.jsx)(O.cC, {
                                        id: "Zel0o2"
                                    })
                                })
                            })]
                        })
                    })
                };

            function rQ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function r$(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rQ(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rQ(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var r0 = {
                    path: ""
                },
                r1 = function(e) {
                    var t, n = e.isOpen,
                        r = e.onClose,
                        i = e.doc,
                        o = (0, nh.p)(),
                        s = (0, v.useState)(r0),
                        c = s[0],
                        l = s[1],
                        u = (0, v.useState)(r0),
                        f = u[0],
                        p = u[1],
                        h = (0, v.useState)(!1),
                        m = h[0],
                        x = h[1],
                        g = i.id,
                        j = null === (t = i.organization) || void 0 === t ? void 0 : t.id,
                        b = (0, rA.bBo)({
                            variables: {
                                workspaceId: j
                            },
                            skip: !j
                        }),
                        y = b.data,
                        C = b.refetch,
                        w = (0, nd.M)({
                            id: "domainSetupModal"
                        }),
                        k = w.isOpen,
                        I = w.onOpen,
                        S = w.onClose,
                        D = (0, nd.M)({
                            id: "publishModalWarning"
                        }),
                        T = D.isOpen,
                        R = D.onOpen,
                        _ = D.onClose,
                        L = null == y ? void 0 : y.sites,
                        M = (0, P.uK)({
                            doc: i,
                            sites: L
                        }),
                        z = (0, P.Yu)({
                            site: M,
                            docId: g
                        }),
                        N = (0, P.gT)({
                            routes: (null == M ? void 0 : M.routes) || [],
                            path: c.path,
                            docId: g
                        }),
                        Z = null == M ? void 0 : M.domains.find(function(e) {
                            return "pending" === e.status
                        }),
                        G = c.path !== f.path || void 0 === z,
                        F = !!i && !!y,
                        U = !rR()(c, f),
                        V = (0, v.useState)("coldStart"),
                        K = V[0],
                        Y = V[1],
                        J = (0, v.useState)(null),
                        X = J[0],
                        Q = J[1],
                        en = (0, v.useState)(!1),
                        er = en[0],
                        ei = en[1],
                        eo = !!er && !N && !1 === m,
                        es = (0, v.useState)(),
                        ea = es[0],
                        ec = es[1],
                        el = (0, E.q)({
                            doc: i,
                            site: M,
                            path: c.path
                        }),
                        ed = el.publishAndDeploy,
                        eu = el.addDomain,
                        ef = el.isAddingDomain,
                        ep = el.createSite,
                        eh = el.isCreatingSite,
                        em = el.unpublishAndDeploy,
                        ex = el.updateRoutes;
                    (0, v.useEffect)(function() {
                        if (Z) {
                            var e = setInterval(function() {
                                C()
                            }, 1e4);
                            return function() {
                                clearInterval(e)
                            }
                        }
                    }, [Z, C, M]), (0, v.useEffect)(function() {
                        F && M && ei(!0)
                    }, [F, M, z]), (0, v.useEffect)(function() {
                        F && M && Y("hasDomains")
                    }, [F, M]), (0, v.useEffect)(function() {
                        l({
                            path: z || ""
                        }), p({
                            path: z || ""
                        })
                    }, [z]);
                    var eg = (0, v.useCallback)(function(e) {
                            ec(e), I()
                        }, [I]),
                        ev = (0, v.useCallback)((0, a.Z)(d().mark(function e() {
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (g) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (!N) {
                                            e.next = 5;
                                            break
                                        }
                                        return o({
                                            description: (0, A.jsx)(O.cC, {
                                                id: "ldkJkh",
                                                values: {
                                                    GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                                }
                                            }),
                                            status: "error",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        }), e.abrupt("return");
                                    case 5:
                                        if (x("publish"), !G) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 9, ex();
                                    case 9:
                                        return e.next = 11, ed();
                                    case 11:
                                        x(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [N, g, G, ed, o, ex]),
                        ej = (0, v.useCallback)((0, a.Z)(d().mark(function e() {
                            return d().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return x("unpublish"), e.next = 3, em();
                                    case 3:
                                        x(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [em]),
                        eb = (0, v.useCallback)(function() {
                            U ? R() : r()
                        }, [U, r, R]),
                        ey = (0, v.useCallback)(function(e) {
                            "addDomain" === X ? (eu(e), S()) : "createSite" === X && (ep(e), S())
                        }, [eu, X, ep, S]);
                    return console.log("%cPublishWebsite debug", "background-color: #cc00ff", {
                        doc: i,
                        sites: L,
                        siteToUse: M,
                        pathToUse: z
                    }), (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(H.u_, {
                            isOpen: n,
                            onClose: eb,
                            size: "4xl",
                            closeOnOverlayClick: !1,
                            children: [(0, A.jsx)(B.Z, {}), (0, A.jsx)(q.h, {
                                children: F ? (0, A.jsxs)(A.Fragment, {
                                    children: [(0, A.jsxs)(ee.K, {
                                        px: 6,
                                        py: 4,
                                        borderBottomWidth: "1px",
                                        children: [(0, A.jsx)(et.X, {
                                            mb: 2,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "Khu3PV"
                                            })
                                        }), "hasDomains" === K && (0, A.jsx)(rX, {
                                            doc: i,
                                            path: z,
                                            site: M,
                                            enabled: eo,
                                            publishButtonTooltipLabel: er ? void 0 === z ? (0, A.jsx)(O.cC, {
                                                id: "O7BXvp"
                                            }) : void 0 : (0, A.jsx)(O.cC, {
                                                id: "XDmUdC"
                                            }),
                                            onPublishClick: ev,
                                            onUnpublishClick: ej,
                                            isPublishing: "publish" === m,
                                            isUnpublishing: "unpublish" === m
                                        })]
                                    }), (0, A.jsx)(eO.o, {}), (0, A.jsx)($.f, {
                                        children: (0, A.jsxs)(ee.K, {
                                            spacing: 6,
                                            children: ["coldStart" === K && (0, A.jsx)(rZ, {
                                                onAddDomain: function(e) {
                                                    Q("createSite"), ec(e), I()
                                                },
                                                isAddingDomain: eh
                                            }), "hasDomains" === K && M && (0, A.jsxs)(A.Fragment, {
                                                children: [(0, A.jsx)(rG.T, {
                                                    path: z,
                                                    site: M,
                                                    onDomainSetupClick: eg,
                                                    onAddDomain: function(e) {
                                                        I(), ec(e), Q("addDomain")
                                                    },
                                                    isAddingDomain: ef,
                                                    refetchSites: C
                                                }), (0, A.jsx)(rB, {
                                                    path: c.path,
                                                    pathError: !!N,
                                                    conflictingRoute: N,
                                                    isPathInputDisabled: !1 !== m,
                                                    onPathUpdate: function(e) {
                                                        l(function(t) {
                                                            return r$(r$({}, t), {}, {
                                                                path: e
                                                            })
                                                        })
                                                    },
                                                    onClose: r
                                                })]
                                            })]
                                        })
                                    })]
                                }) : (0, A.jsx)(r_.$, {})
                            }), k && ea && (0, A.jsx)(rF.w, {
                                domainName: ea,
                                isOpen: k,
                                onClose: function() {
                                    S(), Q(null)
                                },
                                onDomainConfirmed: X ? ey : null
                            }), T && (0, A.jsx)(rq, {
                                onClose: _,
                                onConfirm: r
                            })]
                        })
                    })
                },
                r2 = function(e) {
                    var t, n = e.doc,
                        r = (0, nd.M)({
                            id: "publishModal"
                        }),
                        i = r.isOpen,
                        o = r.onClose,
                        s = r.onOpen,
                        a = null === (t = n.organization) || void 0 === t ? void 0 : t.id,
                        c = (0, rA.bBo)({
                            variables: {
                                workspaceId: a
                            },
                            skip: !a
                        }).data,
                        l = (null == c ? void 0 : c.sites) || [];
                    return (0, A.jsxs)(rI.s, {
                        icon: (0, A.jsx)(I.G, {
                            icon: w.A$,
                            fixedWidth: !0
                        }),
                        onClick: function() {
                            s()
                        },
                        children: [(0, A.jsxs)(h.U, {
                            children: [l.length > 0 ? (0, A.jsx)(O.cC, {
                                id: "BCIqs5"
                            }) : (0, A.jsx)(O.cC, {
                                id: "TMYPtj"
                            }), (0, A.jsx)(m.L, {}), (0, A.jsx)(rS.C, {
                                colorScheme: "green",
                                ml: 2,
                                children: (0, A.jsx)(O.cC, {
                                    id: "YBt9YP"
                                })
                            })]
                        }), n && i && (0, A.jsx)(r1, {
                            doc: n,
                            isOpen: i,
                            onClose: o
                        })]
                    })
                },
                r5 = n(78116),
                r3 = n(16796),
                r6 = n(11325),
                r4 = ["label", "initialValue", "updateValue", "helperText", "language"];

            function r8(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var r7 = function(e) {
                    var t = e.label,
                        r = e.initialValue,
                        i = e.updateValue,
                        o = e.helperText,
                        a = e.language,
                        c = (0, eh.Z)(e, r4),
                        l = (0, v.useState)(void 0 === r ? "" : r),
                        d = l[0],
                        f = l[1],
                        p = (0, v.useState)(null),
                        h = p[0],
                        m = p[1],
                        x = (0, eB.Kt)(i, 100),
                        g = (0, v.useState)(),
                        j = g[0],
                        b = g[1];
                    (0, v.useEffect)(function() {
                        "css" === a ? Promise.all([n.e(8917), n.e(7120), n.e(6214)]).then(n.bind(n, 96214)).then(function(e) {
                            b(e.css())
                        }) : "html" === a && Promise.all([n.e(8917), n.e(7120), n.e(6214), n.e(4100), n.e(2163)]).then(n.bind(n, 22163)).then(function(e) {
                            b(e.html())
                        })
                    }, [a]), (0, eB.vm)(function() {
                        m(null), x(d)
                    }, [d, x], [d]);
                    var y = [j].filter(Boolean);
                    return (0, A.jsxs)(rz.NI, {
                        isInvalid: !!h,
                        children: [(0, A.jsx)(rN.l, {
                            children: t
                        }), h && (0, A.jsx)(rV.J1, {
                            children: h
                        }), o && (0, A.jsx)(rz.Q6, {
                            children: o
                        }), (0, A.jsx)(u.xu, {
                            border: "1px solid",
                            borderColor: "gray.200",
                            fontSize: "md",
                            position: "relative",
                            children: (0, A.jsx)(v.Suspense, {
                                fallback: (0, A.jsx)("span", {}),
                                children: (0, A.jsx)(r6.B, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? r8(Object(n), !0).forEach(function(t) {
                                            (0, s.Z)(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r8(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({
                                    value: d,
                                    extensions: y,
                                    onChange: f
                                }, c))
                            })
                        })]
                    })
                },
                r9 = n(6946),
                ie = (0, v.memo)(function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.editor,
                        i = (0, r9.A)(r),
                        o = (0, C.CG)(_.$p).bodyStart,
                        s = (0, v.useCallback)(function(e) {
                            null == r || r.commands.updateNestedAttributesAtPos(0, {
                                customCode: {
                                    bodyStart: e
                                }
                            })
                        }, [r]);
                    return (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(r5.d, {
                            returnFocusOnClose: !1,
                            isOpen: t,
                            placement: "right",
                            onClose: n,
                            size: "lg",
                            children: [(0, A.jsx)(B.Z, {
                                background: "none"
                            }), (0, A.jsxs)(r3.s, {
                                onKeyDown: i,
                                "data-testid": "custom-code-drawer",
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
                                children: [(0, A.jsx)(eO.o, {}), (0, A.jsx)(eC.x, {
                                    children: (0, A.jsx)(O.cC, {
                                        id: "E16GGw"
                                    })
                                }), (0, A.jsx)($.f, {
                                    overflowX: "hidden",
                                    children: (0, A.jsx)(r7, {
                                        label: U.ag._({
                                            id: "fC5kYg"
                                        }),
                                        helperText: U.ag._({
                                            id: "0AZNtw"
                                        }),
                                        initialValue: o,
                                        updateValue: s,
                                        language: "html",
                                        height: "600px"
                                    })
                                }), (0, A.jsx)(Y.m, {
                                    children: (0, A.jsx)(k.z, {
                                        w: "100%",
                                        variant: "solid",
                                        onClick: n,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "DPfwMq"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                });
            ie.displayName = "CustomCodeDrawer";
            var it = n(87268),
                ir = function(e) {
                    var t = (0, C.CG)(_.e_),
                        n = (0, C.TL)(),
                        r = (0, v.useCallback)(function(e) {
                            n((0, _.Qt)({
                                docAttrs: {
                                    format: e
                                }
                            }))
                        }, [n]);
                    return (0, A.jsx)(nQ.h, {
                        size: "sm",
                        isAttached: !0,
                        my: 2,
                        children: it.n.map(function(e) {
                            return (0, A.jsx)(k.z, {
                                isActive: e.key === t.key,
                                onClick: function() {
                                    return r(e.key)
                                },
                                children: tp()(e.label)
                            }, e.key)
                        })
                    })
                },
                ii = n(13302),
                io = n(96622),
                is = n(20387),
                ia = function() {
                    var e;
                    return e = {}, (0, s.Z)(e, ri.q.DOC_VIEW, {
                        buttonLabel: (0, A.jsx)(O.cC, {
                            id: "eZb+lw"
                        }),
                        shortcutIcon: is.zc,
                        shortcutKeys: (0, W.cE)("Mod+Enter"),
                        shortcutLabel: (0, A.jsx)(O.cC, {
                            id: "9vUn+H"
                        })
                    }), (0, s.Z)(e, ri.q.SLIDE_VIEW, {
                        buttonLabel: (0, A.jsx)(O.cC, {
                            id: "ydzS9x"
                        }),
                        shortcutIcon: io.Bg,
                        shortcutKeys: "Esc",
                        shortcutLabel: (0, A.jsx)(O.cC, {
                            id: "5Rfo7J"
                        })
                    }), e
                },
                ic = n(27486),
                il = function(e) {
                    var t = e.editorWrapperEl,
                        n = e.scrollingParentSelector,
                        r = (0, C.CG)(_.gh),
                        i = (0, b.ye)("presentFullScreen"),
                        o = ia()[r],
                        s = o.shortcutIcon,
                        a = o.shortcutKeys,
                        c = o.buttonLabel,
                        l = (0, ic.M)({
                            editorWrapperEl: t,
                            scrollingParentSelector: n
                        }),
                        d = l.enterSlideView,
                        u = l.exitSlideView;
                    return (0, A.jsx)(rI.s, {
                        icon: (0, A.jsx)(I.G, {
                            icon: s,
                            fixedWidth: !0
                        }),
                        command: a,
                        onClick: function() {
                            r === ri.q.SLIDE_VIEW ? u() : d({
                                fullscreen: i
                            })
                        },
                        children: c
                    })
                },
                id = n(8848),
                iu = n(24798),
                ip = n(73848),
                ih = n(89190),
                im = n(58124),
                ix = n(86482),
                ig = n(69663);

            function iv(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var ij = function(e, t) {
                    var n = [];
                    return ! function e(r) {
                        if (t(r) && n.push(r), r.content) {
                            var i, o = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return iv(e, t);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iv(e, t)
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
                                var o, s = !0,
                                    a = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return s = e.done, e
                                    },
                                    e: function(e) {
                                        a = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            s || null == n.return || n.return()
                                        } finally {
                                            if (a) throw o
                                        }
                                    }
                                }
                            }(r.content);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var s = i.value;
                                    e(s)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                    }(e), n
                },
                ib = function() {
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(en.O, {
                            w: "350px",
                            h: 12
                        }), (0, A.jsx)(id.N, {
                            mt: 3,
                            w: 64,
                            noOfLines: 1
                        })]
                    })
                },
                iy = function(e) {
                    var t = e.createdTime,
                        n = e.editors,
                        r = e.isLatest,
                        i = e.onClick,
                        o = e.showPaywall,
                        s = e.paywallCount;
                    if (!n || !n.length) return (0, A.jsx)(A.Fragment, {});
                    var a = o ? "linear-gradient(rgb(0, 0, 0) 15%, transparent 100%)" : "",
                        c = (0, A.jsxs)(iu.O, {
                            flexDirection: "row",
                            borderRadius: "base",
                            style: {
                                WebkitMaskImage: a,
                                maskImage: a
                            },
                            border: "none",
                            isDisabled: o,
                            opacity: "1 !important",
                            onClick: i,
                            alignItems: "flex-start",
                            width: "100%",
                            textAlign: "left",
                            children: [(0, A.jsxs)(p.k, {
                                w: "100%",
                                direction: "column",
                                children: [(0, A.jsx)(ei.x, {
                                    fontSize: "sm",
                                    children: tp()((0, tg.P9)(t))
                                }), (0, A.jsx)(ei.x, {
                                    fontSize: "xs",
                                    flex: 1,
                                    children: n[0].displayName
                                })]
                            }), r && (0, A.jsx)(rS.C, {
                                colorScheme: "green",
                                py: "0.5",
                                fontSize: "0.65em",
                                children: (0, A.jsx)(O.cC, {
                                    id: "wL3cK8"
                                })
                            })]
                        });
                    return o ? (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(W.kH, {
                            placement: "top",
                            isDisabled: !o,
                            label: o ? (0, A.jsx)(O.cC, {
                                id: "PYTBm5",
                                values: {
                                    paywallCount: s
                                }
                            }) : void 0,
                            children: (0, A.jsx)(u.xu, {
                                mb: 4,
                                children: c
                            })
                        }), (0, A.jsx)(ed.m, {
                            isNarrow: !0,
                            segmentEvent: ef.AA.GAMMA_PRO_UPSELL_CALLOUT_CHANGE_HISTORY,
                            description: (0, A.jsx)(O.cC, {
                                id: "mVKYtH"
                            })
                        })]
                    }) : c
                },
                iC = function(e) {
                    var t, n = (0, el.Yt)(),
                        r = (0, v.useMemo)(function() {
                            if ("unlimited" === n) return {
                                items: e,
                                paywalledItems: []
                            };
                            var t = parseInt(n),
                                r = e.filter(function(e, n) {
                                    return 0 === n || (0, rP.Z)(e.createdTime) >= new Date(Date.now() - 864e5 * t)
                                }),
                                i = e.slice(r.length, e.length),
                                o = i.length ? i[0] : null;
                            return {
                                items: r.concat(o ? [o] : []),
                                paywalledItems: i
                            }
                        }, [n, e]),
                        i = r.items,
                        o = r.paywalledItems;
                    return {
                        groupedSnapshots: (0, v.useMemo)(function() {
                            return (0, tg.yd)({
                                items: i,
                                sortBy: "createdTime"
                            })
                        }, [i]),
                        paywalledSnapshotId: null === (t = o[0]) || void 0 === t ? void 0 : t.id,
                        paywallCount: o.length
                    }
                },
                iw = function(e) {
                    var t = e.groupedSnapshots,
                        n = e.paywalledSnapshotId,
                        r = e.paywallCount,
                        i = e.onClick,
                        o = e.showFetchMore,
                        s = e.onFetchMoreClick,
                        a = e.isFetchingMore;
                    return (0, A.jsxs)(ip.t, {
                        w: "100%",
                        children: [Object.entries(t).filter(function(e) {
                            return (0, c.Z)(e, 2)[1].length
                        }).map(function(e) {
                            var t = (0, c.Z)(e, 2),
                                o = t[0],
                                s = t[1];
                            return (0, A.jsxs)(v.Fragment, {
                                children: [(0, A.jsx)(W.NZ, {
                                    px: 4,
                                    py: 2,
                                    mx: 0,
                                    mt: 2,
                                    children: {
                                        today: U.ag._({
                                            id: "ecUA8p"
                                        }),
                                        thisWeek: U.ag._({
                                            id: "yByRxz"
                                        }),
                                        earlier: U.ag._({
                                            id: "HGg4T/"
                                        })
                                    }[o]
                                }), s.map(function(e, t) {
                                    var o = e.createdTime,
                                        s = e.editors,
                                        a = e.id;
                                    return (0, A.jsx)(iy, {
                                        onClick: function() {
                                            return i(a)
                                        },
                                        isLatest: 0 === t,
                                        createdTime: o,
                                        editors: s,
                                        showPaywall: n === a,
                                        paywallCount: r
                                    }, a)
                                })]
                            }, o)
                        }), o && (0, A.jsx)(k.z, {
                            isLoading: a,
                            onClick: s,
                            children: (0, A.jsx)(O.cC, {
                                id: "yQ2kGp"
                            })
                        })]
                    })
                },
                iO = function() {
                    return (0, A.jsxs)(ip.t, {
                        w: "100%",
                        children: [(0, A.jsx)(en.O, {
                            h: 16
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        }), (0, A.jsx)(en.O, {
                            h: 16,
                            mt: 2
                        })]
                    })
                },
                ik = function(e) {
                    var t = e.title,
                        n = e.createdBy,
                        r = e.createdTime,
                        i = e.numSnapshots;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsx)(ei.x, {
                            mt: 1,
                            children: (0, A.jsx)(O.cC, {
                                id: "yf//Op",
                                values: {
                                    0: (0, ec.Dw)(r),
                                    1: (0, ec.Dw)(r),
                                    numSnapshots: i
                                }
                            })
                        }), (0, A.jsx)(ei.x, {
                            color: "gray.500",
                            fontSize: "sm",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            children: (0, A.jsx)(O.cC, {
                                id: "JVHTIo",
                                values: {
                                    0: null != n && n.displayName ? null == n ? void 0 : n.displayName : "Unknown",
                                    1: (0, ec.p6)(r, "PPp"),
                                    title: t
                                }
                            })
                        })]
                    })
                },
                iI = "snapshot-editor-root",
                iS = function(e) {
                    var t = e.id,
                        n = e.doc,
                        r = e.content,
                        i = (0, v.useMemo)(function() {
                            if (r) return ij(r, function(e) {
                                return e.type === ix.W4
                            }).map(function(e) {
                                var t;
                                return {
                                    __typename: "Card",
                                    id: (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) || "",
                                    docId: n.id,
                                    title: (0, nD.getCardTitle)(e),
                                    createdTime: n.createdTime,
                                    updatedTime: n.updatedTime,
                                    archived: !1
                                }
                            })
                        }, [r, n]);
                    return (0, A.jsx)(im.fb, {
                        reduxData: {
                            cards: i
                        },
                        initialContent: r,
                        doc: n,
                        docId: n.id,
                        scrollingParentSelector: ".".concat(iI),
                        isInsideDrawer: !0
                    }, t)
                },
                iE = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.doc,
                        i = (0, nh.p)(),
                        o = (0, nN._i)().getCollaborativeEditorInstance,
                        s = (0, v.useState)(!1),
                        a = s[0],
                        l = s[1],
                        d = (0, S.pfN)({
                            variables: {
                                docId: r.id,
                                first: 25
                            },
                            skip: !r || !t,
                            fetchPolicy: "network-only",
                            nextFetchPolicy: "network-only"
                        }),
                        f = d.loading,
                        h = d.data,
                        m = d.called,
                        x = d.fetchMore,
                        g = (0, S.opq)({
                            nextFetchPolicy: "cache-only"
                        }),
                        b = (0, c.Z)(g, 2),
                        y = b[0],
                        C = b[1],
                        w = C.loading,
                        I = C.data,
                        E = (null == h ? void 0 : h.snapshots.edges.map(function(e) {
                            return e.node
                        })) || [],
                        P = iC(E),
                        D = P.groupedSnapshots,
                        T = P.paywalledSnapshotId,
                        R = P.paywallCount,
                        _ = null == h ? void 0 : h.snapshots.pageInfo,
                        L = !!(!T && m && (null == _ ? void 0 : _.hasNextPage) && (null == _ ? void 0 : _.endCursor)),
                        M = (0, v.useCallback)(function() {
                            null != _ && _.hasNextPage && null != _ && _.endCursor && (l(!0), x({
                                variables: {
                                    after: _.endCursor
                                }
                            }).finally(function() {
                                l(!1)
                            }))
                        }, [x, null == _ ? void 0 : _.endCursor, null == _ ? void 0 : _.hasNextPage]),
                        z = E[0];
                    (0, v.useEffect)(function() {
                        null != z && z.id && y({
                            variables: {
                                snapshotId: z.id,
                                docId: r.id
                            }
                        })
                    }, [r.id, y, null == z ? void 0 : z.id]);
                    var N = (0, nx.$)(null == r ? void 0 : r.title),
                        Z = null == r ? void 0 : r.createdBy,
                        G = null == r ? void 0 : r.createdTime,
                        F = null == I ? void 0 : I.snapshot,
                        U = F && F.id === r.currentSnapshotId;
                    return (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(r5.d, {
                            placement: "bottom",
                            onClose: n,
                            isOpen: t,
                            trapFocus: !0,
                            isFullHeight: !0,
                            blockScrollOnMount: !1,
                            children: [(0, A.jsx)(B.Z, {}), (0, A.jsxs)(r3.s, {
                                borderTopRadius: "xl",
                                h: "calc(var(--100vh) - 24px)",
                                transform: "none !important",
                                children: [(0, A.jsx)(eO.o, {}), (0, A.jsxs)(eC.x, {
                                    borderBottom: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: [f && (0, A.jsx)(ib, {}), r && E && (0, A.jsx)(ik, {
                                        numSnapshots: (null == E ? void 0 : E.length) || 0,
                                        createdBy: Z,
                                        createdTime: G,
                                        title: N
                                    })]
                                }), (0, A.jsx)($.f, {
                                    p: 0,
                                    h: "100%",
                                    children: (0, A.jsxs)(p.k, {
                                        direction: "row",
                                        h: "100%",
                                        children: [(0, A.jsx)(u.xu, {
                                            p: 2,
                                            w: "17rem",
                                            overflowY: "auto",
                                            bg: "gray.50",
                                            children: (0, A.jsxs)(ih.m, {
                                                variant: "soft-rounded",
                                                orientation: "vertical",
                                                size: "md",
                                                children: [f && (0, A.jsx)(iO, {}), !f && E && (0, A.jsx)(iw, {
                                                    onClick: function(e) {
                                                        y({
                                                            variables: {
                                                                snapshotId: e,
                                                                docId: r.id
                                                            }
                                                        })
                                                    },
                                                    groupedSnapshots: D,
                                                    paywalledSnapshotId: T,
                                                    paywallCount: R,
                                                    showFetchMore: L,
                                                    onFetchMoreClick: M,
                                                    isFetchingMore: a
                                                })]
                                            })
                                        }), (0, A.jsx)(p.k, {
                                            flex: 1,
                                            bg: "gray.100",
                                            overflowY: "scroll",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "flex-start",
                                            width: "100%",
                                            height: "100%",
                                            className: iI,
                                            css: {
                                                "--editor-width": "100%"
                                            },
                                            children: (0, A.jsxs)(p.k, {
                                                direction: "column",
                                                position: "relative",
                                                width: "100%",
                                                height: "100%",
                                                children: [(0, A.jsx)(ig.Y, {}), (!F || w) && (0, A.jsx)(j.AA, {}), F && !w && (0, A.jsx)(iS, {
                                                    id: F.id,
                                                    doc: r,
                                                    content: null == F ? void 0 : F.content.default
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, A.jsx)(Y.m, {
                                    borderTop: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: (0, A.jsxs)(nQ.h, {
                                        spacing: 4,
                                        children: [(0, A.jsx)(k.z, {
                                            variant: "ghost",
                                            onClick: n,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "dEgA5A"
                                            })
                                        }), (0, A.jsx)(W.kH, {
                                            label: U ? (0, A.jsx)(O.cC, {
                                                id: "HJo72u"
                                            }) : (0, A.jsx)(O.cC, {
                                                id: "sonTm1"
                                            }),
                                            shouldWrapChildren: !0,
                                            children: (0, A.jsx)(k.z, {
                                                variant: "solid",
                                                isDisabled: !F || U,
                                                onClick: function() {
                                                    if (F) {
                                                        var e, t = null == E ? void 0 : null === (e = E.find(function(e) {
                                                                return e.id === F.id
                                                            })) || void 0 === e ? void 0 : e.createdTime,
                                                            r = o();
                                                        if (r) {
                                                            r.commands.setContent(F.content.default, !0);
                                                            var s = F.content.annotationsAbsolute;
                                                            s ? r.commands.restoreAnnotations(s) : r.commands.clearAnnotations(), n(), i({
                                                                title: (0, A.jsx)(O.cC, {
                                                                    id: "7ovf4C"
                                                                }),
                                                                description: (0, A.jsx)(O.cC, {
                                                                    id: "DTim6X",
                                                                    values: {
                                                                        0: t ? (0, ec.p6)(t, "PPp") : "selected snapshot",
                                                                        GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                                                    }
                                                                }),
                                                                status: "success",
                                                                duration: 5e3,
                                                                isClosable: !0
                                                            })
                                                        }
                                                    }
                                                },
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "yKu/3Y"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                iP = n(60697),
                iD = n(2885),
                iA = n(47557),
                iT = n(84520),
                iR = n(95085),
                i_ = n(8097),
                iL = n(60831),
                iM = n(69943),
                iz = n(97968),
                iN = n(34302),
                iZ = n(71193),
                iG = n(54336),
                iF = n(20934);

            function iU(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function iW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? iU(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iU(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var iV = function(e) {
                    var t = e.updateDocSetting,
                        n = (0, C.CG)(_.US),
                        r = n.defaultFullBleed,
                        i = n.defaultContentWidth,
                        o = n.presentBackdrop,
                        s = n.cardDimensions,
                        a = (0, iF.l)(s);
                    return (0, A.jsxs)(ee.K, {
                        spacing: 5,
                        mt: 4,
                        divider: (0, A.jsx)(K.i, {}),
                        children: [(0, A.jsx)(iH, {
                            title: U.ag._({
                                id: "jBvtuq"
                            }),
                            description: U.ag._({
                                id: "Q3Qdcd"
                            }),
                            icon: iN.qn,
                            control: (0, A.jsxs)(tT.v, {
                                isLazy: !0,
                                children: [(0, A.jsx)(tR.j, {
                                    minW: 28,
                                    as: k.z,
                                    size: "sm",
                                    variant: "plain",
                                    leftIcon: (0, A.jsx)(I.G, {
                                        icon: a.icon,
                                        fixedWidth: !0
                                    }),
                                    rightIcon: (0, A.jsx)(I.G, {
                                        icon: i_.pt
                                    }),
                                    style: {
                                        marginLeft: "1rem"
                                    },
                                    children: a.label()
                                }), (0, A.jsx)(t_.q, {
                                    maxW: "400px",
                                    children: (0, A.jsx)(tL._, {
                                        value: s,
                                        type: "radio",
                                        onChange: function(e) {
                                            t("cardDimensions", e)
                                        },
                                        children: Object.entries(iF.b).map(function(e) {
                                            var t = (0, c.Z)(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                i = r.label,
                                                o = r.description;
                                            return (0, A.jsxs)(tM.i, {
                                                value: n,
                                                children: [(0, A.jsxs)(ei.x, {
                                                    children: [i(), "fluid" === n && (0, A.jsxs)(A.Fragment, {
                                                        children: [" ", (0, A.jsx)(rS.C, {
                                                            colorScheme: "gray",
                                                            ml: 1,
                                                            children: (0, A.jsx)(O.cC, {
                                                                id: "ovBPCi"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, A.jsx)(ei.x, {
                                                    fontSize: "xs",
                                                    color: "gray.500",
                                                    children: o()
                                                })]
                                            }, n)
                                        })
                                    })
                                })]
                            })
                        }), (0, A.jsx)(iH, {
                            title: U.ag._({
                                id: "lklIf1"
                            }),
                            description: U.ag._({
                                id: "aJ+ISV"
                            }),
                            icon: iz.dH,
                            value: "lg" === i,
                            onChange: function(e) {
                                return t("defaultContentWidth", e ? "lg" : void 0)
                            }
                        }), (0, A.jsx)(iH, {
                            title: U.ag._({
                                id: "lsVq2Z"
                            }),
                            description: U.ag._({
                                id: "u/0NJZ"
                            }),
                            icon: iM.r9,
                            value: "full" === r,
                            onChange: function(e) {
                                return t("defaultFullBleed", e ? "full" : void 0)
                            }
                        }), (0, A.jsx)(iH, {
                            title: U.ag._({
                                id: "7VfbQM"
                            }),
                            description: U.ag._({
                                id: "XZHPlI"
                            }),
                            icon: iD.UH,
                            value: o,
                            onChange: function(e) {
                                return t("presentBackdrop", e)
                            }
                        }), (0, A.jsxs)(ee.K, {
                            children: [(0, A.jsx)(ei.x, {
                                fontSize: "xs",
                                color: "gray.600",
                                children: (0, A.jsx)(O.cC, {
                                    id: "ymPKi7"
                                })
                            }), (0, A.jsxs)(h.U, {
                                alignItems: "flex-start",
                                spacing: "4",
                                children: [(0, A.jsx)(iq, {
                                    label: U.ag._({
                                        id: "wl99H6"
                                    }),
                                    cardDimensions: a,
                                    isWide: "lg" === i,
                                    showBackdrop: "full" !== r,
                                    scaleCardUp: !1
                                }), (0, A.jsx)(iq, {
                                    label: U.ag._({
                                        id: "GWjDlt"
                                    }),
                                    cardDimensions: a,
                                    isWide: "lg" === i,
                                    showBackdrop: o && "full" !== r,
                                    scaleCardUp: !o || "full" === r
                                })]
                            })]
                        })]
                    })
                },
                iH = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.icon,
                        i = e.children,
                        o = e.helpDescription,
                        s = e.value,
                        a = e.onChange,
                        c = e.control;
                    return (0, A.jsxs)(h.U, {
                        alignItems: "flex-start",
                        spacing: 2,
                        children: [r && (0, A.jsx)(ei.x, {
                            fontSize: "lg",
                            width: 8,
                            maxW: 8,
                            children: (0, A.jsx)(I.G, {
                                icon: r,
                                fixedWidth: !0
                            })
                        }), (0, A.jsxs)(ee.K, {
                            spacing: 4,
                            flex: 1,
                            children: [(0, A.jsxs)(ee.K, {
                                spacing: 1,
                                children: [(0, A.jsxs)(et.X, {
                                    size: "sm",
                                    fontWeight: "semibold",
                                    children: [t, " ", o ? (0, A.jsx)(W.Yq, {
                                        label: o,
                                        ml: 1
                                    }) : null]
                                }), (0, A.jsx)(ei.x, {
                                    fontSize: "xs",
                                    color: "gray.600",
                                    children: n
                                })]
                            }), i]
                        }), a && (0, A.jsx)(iZ.r, {
                            isChecked: s,
                            onChange: function(e) {
                                return a(e.target.checked)
                            }
                        }), c]
                    })
                },
                iB = function(e) {
                    var t = e.hideExtraLines;
                    return (0, A.jsxs)(ee.K, {
                        w: "100%",
                        py: 2,
                        px: 2.5,
                        children: [(0, A.jsx)(u.xu, {
                            w: 20,
                            h: 1.5,
                            bg: "gray.200"
                        }), (0, A.jsxs)(h.U, {
                            flex: "1",
                            alignItems: "flex-start",
                            children: [(0, A.jsx)(iG.o, {
                                ratio: 4 / 3,
                                color: "gray.600",
                                w: 12,
                                bg: "gray.200",
                                children: (0, A.jsx)(u.xu, {
                                    fontSize: "lg",
                                    children: (0, A.jsx)(I.G, {
                                        icon: iL.Vm
                                    })
                                })
                            }), (0, A.jsxs)(ee.K, {
                                flex: "1",
                                spacing: "1",
                                children: [(0, A.jsx)(u.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, A.jsx)(u.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, A.jsx)(u.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, A.jsx)(u.xu, {
                                    w: t ? "80%" : "100%",
                                    h: 1,
                                    bg: "gray.200"
                                }), !t && (0, A.jsx)(u.xu, {
                                    w: "80%",
                                    h: 1,
                                    bg: "gray.200"
                                })]
                            })]
                        })]
                    })
                },
                iq = function(e) {
                    var t = e.cardDimensions,
                        n = e.showBackdrop,
                        r = e.isWide,
                        i = e.label,
                        o = e.scaleCardUp,
                        s = {
                            boxShadow: "".concat(n ? "sm" : ""),
                            w: "".concat(r ? "85%" : "65%"),
                            mx: "auto",
                            borderRadius: "sm",
                            bg: "white",
                            transform: "".concat(o ? "scale(1.15)" : "none")
                        };
                    return (0, A.jsxs)(ee.K, {
                        flex: "1",
                        alignItems: "center",
                        sx: {
                            "*": {
                                transition: "all 0.2s ease"
                            }
                        },
                        spacing: 1.5,
                        maxW: "50%",
                        mx: "auto",
                        children: [(0, A.jsx)(p.k, {
                            bg: n ? "gray.200" : "white",
                            borderWidth: "1px",
                            borderColor: "gray.200",
                            width: "100%",
                            minH: 32,
                            borderRadius: "sm",
                            alignItems: "center",
                            py: 2,
                            overflow: "hidden",
                            children: t.aspectRatio ? (0, A.jsx)(iG.o, iW(iW({}, s), {}, {
                                ratio: t.aspectRatio,
                                children: (0, A.jsx)(u.xu, {
                                    children: (0, A.jsx)(iB, {
                                        hideExtraLines: r
                                    })
                                })
                            })) : (0, A.jsx)(ee.K, iW(iW({}, s), {}, {
                                children: (0, A.jsx)(iB, {
                                    hideExtraLines: r
                                })
                            }))
                        }), (0, A.jsx)(ei.x, {
                            fontSize: "xs",
                            color: "gray.700",
                            children: i
                        })]
                    })
                },
                iK = n(41823),
                iY = n(34847),
                iJ = n(50860),
                iX = function(e) {
                    var t = e.editor,
                        n = (0, C.CG)(_.Pu),
                        r = (0, C.CG)(_.XV),
                        i = (0, v.useCallback)(function(e) {
                            null == t || t.commands.updateNestedAttributesAtPos(0, e)
                        }, [t]);
                    return (0, A.jsx)(iJ.o, {
                        editor: t,
                        background: r,
                        updateNestedAttributes: i,
                        defaultMessage: (0, A.jsxs)(eo.b, {
                            children: [(0, A.jsx)(em.z, {}), (0, A.jsx)(O.cC, {
                                id: "dyXYfJ"
                            })]
                        }),
                        isDark: (0, iK.wj)(n),
                        isValidSource: iY.Rr
                    })
                },
                iQ = n(25793),
                i$ = n(88125),
                i0 = n(78985),
                i1 = n(75213),
                i2 = n(96575),
                i5 = n(67092),
                i3 = n(56613),
                i6 = n(79821),
                i4 = n(8709),
                i8 = n(65098),
                i7 = function(e, t) {
                    var n;
                    return null == e ? void 0 : null === (n = e.routes.find(function(e) {
                        return e.docId === t
                    })) || void 0 === n ? void 0 : n.path
                },
                i9 = function() {
                    var e = (0, nh.p)(),
                        t = (0, i4.AA)().openPageSetup,
                        n = (0, b.ye)("sites"),
                        r = (0, C.CG)(z.yx),
                        i = (0, C.CG)(i8.lH),
                        o = (0, S.qbt)(),
                        s = (0, c.Z)(o, 2),
                        a = s[0],
                        l = s[1].loading,
                        d = i7(i, null == r ? void 0 : r.id),
                        f = (0, v.useState)(function() {
                            return (0, P.es)(d || "")
                        }),
                        p = f[0],
                        x = f[1],
                        g = (0, v.useState)(function() {
                            return (0, P.es)(d || "")
                        }),
                        j = g[0],
                        y = g[1],
                        w = (0, P.gT)({
                            routes: (null == i ? void 0 : i.routes) || [],
                            path: (0, P.fJ)(p),
                            docId: null == r ? void 0 : r.id
                        }),
                        I = !!w,
                        E = j !== p && !I,
                        D = (0, v.useCallback)(function() {
                            x(j)
                        }, [j]),
                        T = (0, v.useCallback)(function() {
                            if (E) {
                                if (!(null != i && i.id) || !(null != r && r.id)) {
                                    console.error("Missing site or doc");
                                    return
                                }
                                var t = (0, P.fJ)(p);
                                a({
                                    variables: {
                                        input: {
                                            siteId: i.id,
                                            docId: r.id,
                                            path: t
                                        }
                                    },
                                    refetchQueries: ["GetSite"]
                                }).then(function() {
                                    y(p), x(p)
                                }).catch(function(t) {
                                    e({
                                        status: "error",
                                        title: (0, A.jsx)(O.cC, {
                                            id: "dl5vwx"
                                        }),
                                        description: t.message
                                    }), console.error("[UrlSlugForm] Error setting route", t.message)
                                })
                            }
                        }, [E, null == r ? void 0 : r.id, p, a, null == i ? void 0 : i.id, e]);
                    return n ? (0, A.jsxs)(ee.K, {
                        pb: 6,
                        children: [(0, A.jsx)(ee.K, {
                            direction: "row",
                            children: (0, A.jsxs)(ei.x, {
                                children: [(0, A.jsx)(O.cC, {
                                    id: "dq8+qI"
                                }), " "]
                            })
                        }), (0, A.jsx)(m.L, {}), (0, A.jsx)(ee.K, {
                            spacing: 2,
                            children: (0, A.jsx)(h.U, {
                                spacing: 1,
                                children: (0, A.jsxs)(rz.NI, {
                                    as: "fieldset",
                                    isInvalid: I,
                                    children: [(0, A.jsx)(h.U, {
                                        children: (0, A.jsxs)(rU.B, {
                                            children: [(0, A.jsx)(rW.Ui, {
                                                children: "/"
                                            }), (0, A.jsx)(nm.I, {
                                                isDisabled: l,
                                                bg: "white",
                                                flex: 2,
                                                value: p,
                                                onKeyDown: function(e) {
                                                    "Enter" === e.key && (e.preventDefault(), T())
                                                },
                                                onChange: function(e) {
                                                    x((0, P.pi)(e.currentTarget.value))
                                                }
                                            }), (0, A.jsx)(i6.R, { in: E,
                                                unmountOnExit: !0,
                                                children: (0, A.jsx)(u.xu, {
                                                    ml: 2,
                                                    children: (0, A.jsxs)(nQ.h, {
                                                        w: "100%",
                                                        children: [(0, A.jsx)(k.z, {
                                                            variant: "solid",
                                                            isLoading: l,
                                                            isDisabled: I,
                                                            onClick: T,
                                                            children: (0, A.jsx)(O.cC, {
                                                                id: "tfDRzk"
                                                            })
                                                        }), (0, A.jsx)(k.z, {
                                                            onClick: D,
                                                            children: (0, A.jsx)(O.cC, {
                                                                id: "dEgA5A"
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    }), w ? (0, A.jsx)(rV.J1, {
                                        justifyContent: "flex-end",
                                        alignItems: "flex-start",
                                        children: (0, A.jsx)(ei.x, {
                                            fontSize: "xs",
                                            children: (0, A.jsx)(O.cC, {
                                                id: "DQaTdC",
                                                components: {
                                                    0: (0, A.jsx)(nP.r, {
                                                        textDecoration: "underline",
                                                        onClick: function() {
                                                            return t(w.docId, "preview")
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                    }) : (0, A.jsx)(rz.Q6, {
                                        fontSize: "sm",
                                        children: (0, A.jsx)(ee.K, {
                                            alignContent: "flex-start",
                                            justifyContent: "space-between",
                                            direction: "row",
                                            w: "100%",
                                            children: (0, A.jsx)(ee.K, {
                                                spacing: 1,
                                                children: (0, A.jsx)(ei.x, {
                                                    color: "gray.500",
                                                    children: (0, A.jsx)(O.cC, {
                                                        id: "ZMlbHK"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    }) : (0, A.jsx)(A.Fragment, {})
                },
                oe = function(e) {
                    var t = e.updateDocSetting,
                        n = (0, C.CG)(_.US).metaDescription,
                        r = (0, b.ye)("sites"),
                        i = (0, C.CG)(_.yx),
                        o = (0, C.CG)(i0.cn),
                        s = (0, C.CG)(i0.$4),
                        a = (0, v.useState)(function() {
                            return (null == i ? void 0 : i.title) || ""
                        }),
                        l = a[0],
                        d = a[1],
                        f = (0, v.useState)(function() {
                            return n || ""
                        }),
                        p = f[0],
                        m = f[1],
                        x = (0, S.D1_)(),
                        g = (0, c.Z)(x, 1)[0],
                        j = (0, v.useCallback)(function(e) {
                            i && g({
                                variables: {
                                    id: i.id,
                                    title: e
                                },
                                refetchQueries: r ? ["GetSite"] : void 0
                            })
                        }, [i, r, g]),
                        y = (0, eB.Kt)(j, 300),
                        w = (0, v.useCallback)(function(e) {
                            d(e.target.value.substring(0, i3.S8)), y(e.target.value.substring(0, i3.S8))
                        }, [y]),
                        k = (0, v.useCallback)(function(e) {
                            t("metaDescription", e)
                        }, [t]),
                        I = (0, eB.Kt)(k, 300),
                        E = (0, C.CG)(i0.NN),
                        P = null == E ? void 0 : E.previewUrl,
                        D = (0, el.dU)(null == i ? void 0 : i.organization),
                        T = (0, i1.U)(l || o, D),
                        R = (0, i1.V)(p || s, D);
                    return (0, A.jsxs)(ee.K, {
                        spacing: 4,
                        children: [(0, A.jsxs)(rz.NI, {
                            children: [(0, A.jsxs)(h.U, {
                                justifyContent: "center",
                                children: [(0, A.jsx)(rN.l, {
                                    flex: "1",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "MHrjPM"
                                    })
                                }), (0, A.jsx)(i$.W, {
                                    length: l.length || 0,
                                    idealLength: i3.si,
                                    maxLength: i3.S8
                                })]
                            }), (0, A.jsx)(nm.I, {
                                value: l,
                                placeholder: o || U.ag._({
                                    id: "bTzMt5"
                                }),
                                _placeholder: {
                                    opacity: 1,
                                    color: "gray.500"
                                },
                                onKeyDown: function(e) {
                                    "Enter" === e.key && j(l)
                                },
                                onChange: w,
                                "data-title-input": !0
                            })]
                        }), (0, A.jsx)(i9, {}), (0, A.jsxs)(rz.NI, {
                            children: [(0, A.jsxs)(h.U, {
                                justifyContent: "center",
                                children: [(0, A.jsx)(rN.l, {
                                    flex: "1",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "Nu4oKW"
                                    })
                                }), (0, A.jsx)(i$.W, {
                                    length: p.length || 0,
                                    idealLength: i3.cl,
                                    maxLength: i3.Us
                                })]
                            }), (0, A.jsx)(iQ.g, {
                                bg: "white",
                                rows: 4,
                                value: p,
                                placeholder: s || U.ag._({
                                    id: "2VBqT4"
                                }),
                                onChange: function(e) {
                                    m(e.target.value.substring(0, i3.Us)), I(e.target.value.substring(0, i3.Us))
                                }
                            })]
                        }), (0, A.jsxs)(u.xu, {
                            p: 4,
                            pt: 3,
                            bg: "gray.100",
                            borderRadius: "md",
                            children: [(0, A.jsxs)(ee.K, {
                                spacing: 2,
                                mb: 4,
                                children: [(0, A.jsx)(ei.x, {
                                    size: "sm",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "h8sMnd"
                                    })
                                }), (0, A.jsx)(ot, {
                                    title: T,
                                    description: R,
                                    screenshotUrl: P
                                })]
                            }), (0, A.jsxs)(ee.K, {
                                spacing: 2,
                                children: [(0, A.jsx)(ei.x, {
                                    size: "sm",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "d3xOlk"
                                    })
                                }), (0, A.jsx)(on, {
                                    title: T,
                                    description: R,
                                    screenshotUrl: P
                                }), (0, A.jsx)(ei.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "gkahtG"
                                    })
                                })]
                            })]
                        }), (0, A.jsx)(i5.V, {
                            label: (0, A.jsx)(O.cC, {
                                id: "SDyz5I"
                            }),
                            segmentEvent: i2.AA.GAMMA_PRO_UPSELL_PAGE_SETUP_REMOVE_WATERMARK,
                            doc: i
                        })]
                    })
                },
                ot = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.screenshotUrl;
                    return (0, A.jsxs)(u.xu, {
                        cursor: "not-allowed",
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "md",
                        overflow: "hidden",
                        children: [(0, A.jsx)(iG.o, {
                            ratio: 1200 / 630,
                            bg: "gray.300",
                            borderBottom: "1px solid",
                            borderColor: "gray.200",
                            children: (0, A.jsx)(u.xu, {
                                bgColor: "gray.200",
                                bgImage: "url(".concat(r, ")"),
                                backgroundSize: "cover",
                                position: "relative"
                            })
                        }), (0, A.jsxs)(ee.K, {
                            px: 4,
                            py: 3,
                            spacing: 1,
                            children: [(0, A.jsx)(ei.x, {
                                fontSize: "md",
                                fontWeight: "bold",
                                noOfLines: 2,
                                children: t
                            }), (0, A.jsx)(ei.x, {
                                fontSize: "xs",
                                noOfLines: 2,
                                children: n
                            })]
                        })]
                    })
                },
                on = function(e) {
                    var t = e.title,
                        n = e.description;
                    return (0, A.jsxs)(ee.K, {
                        cursor: "not-allowed",
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "md",
                        overflow: "hidden",
                        px: 4,
                        py: 3,
                        spacing: 1,
                        pos: "relative",
                        children: [(0, A.jsx)(ei.x, {
                            color: "blue.600",
                            fontSize: "lg",
                            lineHeight: 1.3,
                            noOfLines: 2,
                            children: t
                        }), (0, A.jsx)(ei.x, {
                            color: "gray.700",
                            fontSize: "sm",
                            noOfLines: 3,
                            children: n
                        })]
                    })
                },
                or = ["cards", "background", "preview"],
                oi = function(e) {
                    var t = e.editor,
                        n = (0, C.CG)(_.ke),
                        r = (0, nd.M)({
                            id: "pageSetupDisclosure"
                        }),
                        i = r.isOpen,
                        o = r.onClose,
                        a = r.onOpen,
                        c = (0, v.useState)(0),
                        l = c[0],
                        d = c[1];
                    (0, v.useEffect)(function() {
                        var e = function(e) {
                                d(or.indexOf(e)), a()
                            },
                            t = nu.T.on("openPageSetup", e),
                            n = ro.pw.on(ro.TI.OPEN_PAGE_SETUP, e);
                        return function() {
                            t(), n()
                        }
                    }, [a, o]);
                    var f = (0, r9.A)(t),
                        p = (0, v.useCallback)(function(e, n) {
                            null == t || t.commands.updateNestedAttributesAtPos(0, {
                                settings: (0, s.Z)({}, e, n)
                            })
                        }, [t]);
                    return (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(r5.d, {
                            returnFocusOnClose: !1,
                            isOpen: i,
                            placement: "right",
                            onClose: o,
                            size: "md",
                            blockScrollOnMount: !1,
                            children: [(0, A.jsx)(B.Z, {
                                background: "none"
                            }), (0, A.jsxs)(r3.s, {
                                "data-testid": "page-setup-drawer",
                                onKeyDown: f,
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
                                children: [(0, A.jsx)(eO.o, {}), (0, A.jsx)(eC.x, {
                                    children: (0, A.jsx)(O.cC, {
                                        id: "fvaOtb"
                                    })
                                }), (0, A.jsx)($.f, {
                                    overflowX: "hidden",
                                    children: (0, A.jsxs)(ih.m, {
                                        variant: "soft-rounded",
                                        size: "sm",
                                        isFitted: !0,
                                        isLazy: !0,
                                        index: l,
                                        onChange: d,
                                        children: [(0, A.jsxs)(ip.t, {
                                            children: [(0, A.jsxs)(iu.O, {
                                                children: [(0, A.jsx)(u.xu, {
                                                    mr: 2,
                                                    children: (0, A.jsx)(I.G, {
                                                        icon: iA.s2
                                                    })
                                                }), (0, A.jsx)(O.cC, {
                                                    id: "Ccpbzh"
                                                })]
                                            }), (0, A.jsxs)(iu.O, {
                                                children: [(0, A.jsx)(u.xu, {
                                                    mr: 2,
                                                    children: (0, A.jsx)(I.G, {
                                                        icon: iD.UH
                                                    })
                                                }), (0, A.jsx)(O.cC, {
                                                    id: "GtJbUa"
                                                })]
                                            }), (0, A.jsxs)(iu.O, {
                                                children: [(0, A.jsx)(u.xu, {
                                                    mr: 2,
                                                    children: (0, A.jsx)(I.G, {
                                                        icon: iP.g4
                                                    })
                                                }), (0, A.jsx)(O.cC, {
                                                    id: "rdUucN"
                                                })]
                                            })]
                                        }), (0, A.jsxs)(iT.n, {
                                            children: [(0, A.jsx)(iR.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, A.jsx)(iV, {
                                                    editor: t,
                                                    updateDocSetting: p
                                                }, n)
                                            }), (0, A.jsx)(iR.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, A.jsx)(iX, {
                                                    editor: t,
                                                    updateDocSetting: p
                                                }, n)
                                            }), (0, A.jsx)(iR.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, A.jsx)(oe, {
                                                    editor: t,
                                                    updateDocSetting: p
                                                }, n)
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                };

            function oo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function os(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oo(Object(n), !0).forEach(function(t) {
                        (0, s.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oo(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var oa = function(e) {
                    var t, n, r = e.doc,
                        i = e.editorWrapperEl,
                        o = e.scrollingParentSelector,
                        s = (0, D.SE)().user,
                        a = (0, S.$gs)().isConnected,
                        l = (0, ii.e)(),
                        d = (0, nN._i)().editor,
                        f = (0, nx.$)(null == r ? void 0 : r.title),
                        p = (null == r ? void 0 : r.createdTime) && (0, rE.Z)((0, rP.Z)(r.createdTime), "PPP"),
                        x = null == r ? void 0 : r.id,
                        g = (0, nd.M)({
                            id: "snapshotsDrawer"
                        }),
                        j = g.isOpen,
                        y = g.onClose,
                        w = g.onOpen,
                        k = (0, nd.M)({
                            id: "analyticsPanelDisclosure"
                        }),
                        E = k.isOpen,
                        P = k.onClose,
                        T = k.onOpen,
                        R = (0, S.LT4)(),
                        L = (0, c.Z)(R, 1)[0],
                        M = (0, S.iX9)(),
                        z = (0, c.Z)(M, 1)[0],
                        N = (0, ef.z$)(),
                        G = (0, D.py)("view", r) && !!s,
                        U = (0, D.py)("edit", r),
                        V = (0, D.py)("manage", r) && !!s,
                        H = (0, b.ye)("pageSetup") && U,
                        B = !!(s && 0 !== s.workspaceMemberships.length),
                        q = (0, b.ye)("publishing"),
                        K = (0, b.ye)("docFormats"),
                        Y = (0, C.CG)(_.hN),
                        J = (0, v.useCallback)(function() {
                            null == N || N.track(ef.AA.DOC_ANALYTICS_VIEWED, {
                                docId: x,
                                source: "toolbar_doc_menu",
                                type: "personal"
                            }), T()
                        }, [N, x, T]),
                        X = (0, v.useCallback)(function(e) {
                            return function() {
                                if (x) {
                                    var t = {
                                        id: x
                                    };
                                    e ? L({
                                        variables: t,
                                        optimisticResponse: {
                                            archiveDoc: os(os({}, t), {}, {
                                                archived: e,
                                                __typename: "Doc"
                                            })
                                        }
                                    }) : z({
                                        variables: t,
                                        optimisticResponse: {
                                            unarchiveDoc: os(os({}, t), {}, {
                                                archived: e,
                                                __typename: "Doc"
                                            })
                                        }
                                    })
                                }
                            }
                        }, [L, x, z]),
                        Q = (0, v.useCallback)(function() {
                            d && d.commands.undo()
                        }, [d]),
                        $ = (0, nd.M)({
                            id: "codeEditor"
                        }),
                        ee = $.isOpen,
                        et = $.onOpen,
                        en = $.onClose,
                        er = (0, b.ye)("docCustomCode") && U;
                    return (0, A.jsxs)(tT.v, {
                        children: [(0, A.jsx)(tR.j, {
                            as: np.r,
                            borderRadius: "md",
                            isDisabled: j,
                            icon: (0, A.jsx)(I.G, {
                                icon: ny.cN
                            }),
                            onMouseDown: nf.br,
                            "data-testid": "doc-toolbar-menu-button"
                        }), (0, A.jsx)(rt.h, {
                            children: r && (0, A.jsxs)(t_.q, {
                                zIndex: "popover",
                                maxH: "100vh",
                                minW: "280px",
                                overflow: "auto",
                                children: [(0, A.jsxs)(u.xu, {
                                    px: 4,
                                    py: 2,
                                    children: [(0, A.jsx)(ei.x, {
                                        noOfLines: 6,
                                        children: f
                                    }), (0, A.jsx)(ei.x, {
                                        fontSize: "sm",
                                        color: "gray.500",
                                        noOfLines: 1,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "jlWdji",
                                            values: {
                                                createdTime: p
                                            }
                                        })
                                    }), (0, A.jsx)(W.kH, {
                                        label: null == r ? void 0 : null === (t = r.createdBy) || void 0 === t ? void 0 : t.email,
                                        children: (0, A.jsx)(ei.x, {
                                            display: "inline-block",
                                            fontSize: "sm",
                                            color: "gray.500",
                                            noOfLines: 1,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "t490IT",
                                                values: {
                                                    0: null == r ? void 0 : null === (n = r.createdBy) || void 0 === n ? void 0 : n.displayName
                                                }
                                            })
                                        })
                                    }), K && (0, A.jsx)(ir, {})]
                                }), (0, A.jsx)(n1.R, {}), (0, A.jsx)(rD.V, {
                                    label: (0, A.jsx)(O.cC, {
                                        id: "IdcoRx"
                                    }),
                                    isConnected: a,
                                    maxWidth: "300px"
                                }), a && (0, A.jsxs)(A.Fragment, {
                                    children: [!!s && !V && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: F.M,
                                            fixedWidth: !0
                                        }),
                                        onClick: J,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "ZlwDi6"
                                        })
                                    }), q && V && (0, A.jsx)(r2, {
                                        doc: r
                                    }), (0, A.jsx)(il, {
                                        editorWrapperEl: i,
                                        scrollingParentSelector: o
                                    }), B && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rk.kZ,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            d && l({
                                                docId: x,
                                                initialContent: d.getJSON(),
                                                source: "editor_toolbar_doc_menu_duplicate",
                                                newWindow: !(0, Z.Q5)()
                                            })
                                        },
                                        children: (0, A.jsx)(O.cC, {
                                            id: "euc6Ns"
                                        })
                                    }), G && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rO.kw,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            nu.T.emit("openSharePanel", "export")
                                        },
                                        children: (0, A.jsx)(O.cC, {
                                            id: "U8WPSi"
                                        })
                                    }), H && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rw.gr,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            nu.T.emit("openPageSetup", "cards")
                                        },
                                        children: (0, A.jsxs)(h.U, {
                                            children: [(0, A.jsx)(O.cC, {
                                                id: "Kx2GmY"
                                            }), (0, A.jsx)(m.L, {}), (0, A.jsx)(rS.C, {
                                                colorScheme: "green",
                                                ml: 2,
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "isRobC"
                                                })
                                            })]
                                        })
                                    }), er && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rC.dT,
                                            fixedWidth: !0
                                        }),
                                        onClick: et,
                                        children: (0, A.jsxs)(h.U, {
                                            children: [(0, A.jsx)(O.cC, {
                                                id: "cnlGIm"
                                            }), (0, A.jsx)(m.L, {}), (0, A.jsx)(rS.C, {
                                                colorScheme: "green",
                                                ml: 2,
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "YBt9YP"
                                                })
                                            })]
                                        })
                                    }), Y && (0, A.jsx)(n1.R, {}), Y && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: ry.faArrowRotateLeft,
                                            fixedWidth: !0
                                        }),
                                        onClick: Q,
                                        command: (0, W.cE)("Mod+Z"),
                                        children: (0, A.jsx)(O.cC, {
                                            id: "9uI/rE"
                                        })
                                    }), U && (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: eD.SZ,
                                            fixedWidth: !0
                                        }),
                                        onClick: w,
                                        children: (0, A.jsx)(O.cC, {
                                            id: "6Z5x06"
                                        })
                                    }), V && (0, A.jsx)(n1.R, {}), V ? r.archived ? (0, A.jsx)(rI.s, {
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rb.Ze,
                                            fixedWidth: !0
                                        }),
                                        onClick: X(!1),
                                        children: (0, A.jsx)(O.cC, {
                                            id: "yKu/3Y"
                                        })
                                    }) : (0, A.jsx)(rI.s, {
                                        "data-testid": "doc-menu-trash-button",
                                        color: "red.500",
                                        icon: (0, A.jsx)(I.G, {
                                            icon: rj.$,
                                            fixedWidth: !0
                                        }),
                                        onClick: X(!0),
                                        children: (0, A.jsx)(O.cC, {
                                            id: "1C/Yjq"
                                        })
                                    }) : null]
                                })]
                            })
                        }), r && (0, A.jsx)(iE, {
                            doc: r,
                            isOpen: j,
                            onClose: y
                        }), r && E && (0, A.jsx)(nl, {
                            doc: r,
                            isAnalyticsPanelOpen: E,
                            onAnalyticsPanelClose: P,
                            mode: "personal"
                        }), er && (0, A.jsx)(ie, {
                            editor: d,
                            isOpen: ee,
                            onClose: en
                        }), H && (0, A.jsx)(oi, {
                            editor: d
                        })]
                    })
                },
                oc = n(22595),
                ol = n(26886),
                od = n(71528),
                ou = n(26384),
                of = n(91930),
                op = n(7328),
                oh = n(84807),
                om = n(28165),
                ox = n(35931),
                og = {
                    followOnStart: "follow_on_start",
                    followingId: "following_id"
                },
                ov = function(e, t) {
                    var n = t.followOnStart,
                        r = t.followingId,
                        i = new URL(e);
                    return r && i.searchParams.append(og.followingId, r), n && i.searchParams.append(og.followOnStart, "true"), i.toString()
                },
                oj = function(e) {
                    switch (e) {
                        case "edit":
                            return U.ag._({
                                id: "UZN1cZ"
                            });
                        case "comment":
                            return U.ag._({
                                id: "jFTs0A"
                            });
                        case "view":
                            return U.ag._({
                                id: "Ya6CJ0"
                            });
                        default:
                            return U.ag._({
                                id: "Txd1qM"
                            })
                    }
                },
                ob = function(e) {
                    var t, n, r = e.isOpen,
                        i = e.onClose,
                        s = e.accessLinkUrl,
                        a = e.onPlayClick,
                        c = (0, D.SE)().user,
                        l = (0, nM.useRouter)().replace,
                        d = {
                            followOnStart: !0,
                            followingId: null == c ? void 0 : c.id
                        },
                        f = (0, v.useState)(d),
                        p = f[0];
                    f[1];
                    var m = ov(s, p),
                        x = (0, D.SE)(),
                        g = x.user,
                        j = x.color,
                        b = (0, C.CG)(z.yx),
                        y = null == b ? void 0 : null === (t = b.accessLinks) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.permission,
                        w = (0, om.keyframes)(o || (o = (0, op.Z)(["\n    0% { transform: scale(1.0); filter: brightness(1.0);  }\n    3% { transform: scale(1.0); filter: brightness(1.0);  }\n    8% {  transform: scale(0.90); filter: brightness(1.30);  }\n    18% { transform: scale(1.05); filter: brightness(1.0); }\n    30% { transform: scale(1.0); filter: brightness(1.0); }\n  "])));
                    return (0, A.jsx)(W.Wk, {
                        isDark: !1,
                        children: (0, A.jsxs)(H.u_, {
                            isOpen: r,
                            onClose: i,
                            size: "lg",
                            children: [(0, A.jsx)(B.Z, {}), (0, A.jsxs)(q.h, {
                                children: [(0, A.jsx)(eC.x, {
                                    children: (0, A.jsx)(O.cC, {
                                        id: "88XnIQ"
                                    })
                                }), (0, A.jsx)(eO.o, {}), (0, A.jsx)(K.i, {}), (0, A.jsx)($.f, {
                                    pt: "6",
                                    children: (0, A.jsxs)(ee.K, {
                                        spacing: "4",
                                        children: [(0, A.jsx)(ei.x, {
                                            children: (0, A.jsx)(O.cC, {
                                                id: "oYTLJe",
                                                values: {
                                                    0: oj(y),
                                                    GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                                },
                                                components: {
                                                    0: (0, A.jsx)(ei.x, {
                                                        as: "span",
                                                        fontWeight: "bold",
                                                        borderBottom: "1px dashed",
                                                        borderColor: "gray.400",
                                                        display: "inline-block"
                                                    }),
                                                    1: (0, A.jsx)(W.kH, {
                                                        label: U.ag._({
                                                            id: "8LnpqL"
                                                        }),
                                                        placement: "top"
                                                    })
                                                }
                                            })
                                        }), (0, A.jsx)(u.xu, {
                                            mb: "2",
                                            children: (0, A.jsx)(ox.I, {
                                                url: m,
                                                variant: "solid"
                                            })
                                        }), (0, A.jsxs)(eo.b, {
                                            children: [(0, A.jsx)(em.z, {}), (0, A.jsxs)(h.U, {
                                                flexBasis: "100%",
                                                alignItems: "top",
                                                children: [(0, A.jsx)(ei.x, {
                                                    fontSize: "sm",
                                                    width: "100%",
                                                    children: (0, A.jsx)(O.cC, {
                                                        id: "EApNIe"
                                                    })
                                                }), (0, A.jsxs)(u.xu, {
                                                    position: "relative",
                                                    textShadow: "sm",
                                                    children: [(0, A.jsx)(td.q, {
                                                        animation: "".concat(w, " 2s infinite ease-out"),
                                                        name: null == g ? void 0 : g.displayName,
                                                        src: null == g ? void 0 : g.profileImageUrl,
                                                        size: "md",
                                                        border: "solid 3px ".concat(j.value),
                                                        shadow: "lg"
                                                    }), (0, A.jsx)(u.xu, {
                                                        position: "absolute",
                                                        top: "1.75rem",
                                                        left: "1.75rem",
                                                        outline: "0 0 2px rgba(255,255,255,1.0)",
                                                        sx: {
                                                            path: {
                                                                stroke: "white",
                                                                strokeWidth: 48
                                                            }
                                                        },
                                                        color: "black",
                                                        children: (0, A.jsx)(I.G, {
                                                            icon: oh.q,
                                                            fixedWidth: !0
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, A.jsx)(Y.m, {
                                    children: (0, A.jsxs)(nQ.h, {
                                        children: [(0, A.jsx)(k.z, {
                                            variant: "ghost",
                                            colorScheme: "gray",
                                            onClick: function() {
                                                i()
                                            },
                                            children: (0, A.jsx)(O.cC, {
                                                id: "DPfwMq"
                                            })
                                        }), (0, A.jsx)(k.z, {
                                            variant: "solid",
                                            onClick: function() {
                                                i(), a(), l(m, m, {
                                                    shallow: !0
                                                })
                                            },
                                            leftIcon: (0, A.jsx)(I.G, {
                                                icon: is.zc
                                            }),
                                            children: (0, A.jsx)(O.cC, {
                                                id: "tbDuNX"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                oy = function(e) {
                    var t, n, r, i, o = e.doc,
                        s = e.isStaticEditor,
                        a = e.editorWrapperEl,
                        c = e.scrollingParentSelector,
                        l = (0, nd.M)({
                            id: "meetModal"
                        }),
                        d = l.onOpen,
                        f = l.onClose,
                        h = l.isOpen,
                        m = (0, ic.M)({
                            editorWrapperEl: a,
                            scrollingParentSelector: c
                        }),
                        x = m.enterSlideView,
                        g = m.exitSlideView,
                        j = m.setExitedFullscreenByClick,
                        y = m.isFullscreen,
                        w = m.enterFullscreen,
                        k = m.exitFullscreen,
                        S = (0, D.SE)().user,
                        E = (0, C.CG)(_.gh),
                        P = (0, v.useRef)(E);
                    (0, v.useEffect)(function() {
                        P.current = E
                    }, [E]);
                    var T = ia()[E],
                        R = T.shortcutLabel,
                        L = T.shortcutIcon,
                        M = T.shortcutKeys,
                        z = T.buttonLabel,
                        N = null == o ? void 0 : null === (t = o.accessLinks) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.url,
                        Z = !!(null == o ? void 0 : null === (r = o.accessLinks) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.permission),
                        G = (0, D.py)("manage", o || void 0),
                        F = (0, b.ye)("presentFullScreen"),
                        V = "present" === (0, C.CG)(_.e_).primaryAction ? "solid" : "plain";
                    return (0, A.jsxs)(p.k, {
                        children: [(0, A.jsxs)(nQ.h, {
                            isAttached: !0,
                            size: "sm",
                            "data-guider-highlight": "present-button-group",
                            "data-editor-mode": E === ri.q.SLIDE_VIEW ? "slide" : "doc",
                            children: [(0, A.jsx)(W.kH, {
                                closeOnMouseDown: !1,
                                closeOnClick: !1,
                                label: R,
                                shortcut: M,
                                children: (0, A.jsx)(np.h, {
                                    fontWeight: "normal",
                                    size: "sm",
                                    variant: V,
                                    onClick: function() {
                                        E === ri.q.SLIDE_VIEW ? g() : x({
                                            fullscreen: F
                                        })
                                    },
                                    onMouseDown: nf.br,
                                    icon: (0, A.jsx)(I.G, {
                                        icon: L
                                    }),
                                    "data-present-button": !0,
                                    children: z
                                })
                            }), (0, A.jsxs)(tT.v, {
                                children: [(0, A.jsx)(tR.j, {
                                    variant: V,
                                    as: np.r,
                                    icon: (0, A.jsx)(I.G, {
                                        icon: tA.pt
                                    })
                                }), (0, A.jsx)(rt.h, {
                                    children: (0, A.jsxs)(t_.q, {
                                        zIndex: "popover",
                                        children: [E === ri.q.DOC_VIEW && (0, A.jsxs)( of .k, {
                                            title: U.ag._({
                                                id: "9vUn+H"
                                            }),
                                            children: [(0, A.jsx)(rI.s, {
                                                icon: (0, A.jsx)(I.G, {
                                                    icon: rY.Rk,
                                                    fixedWidth: !0
                                                }),
                                                command: (0, W.cE)("Mod+Enter"),
                                                onClick: function() {
                                                    return x({
                                                        fullscreen: !1
                                                    })
                                                },
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "LRFe2O"
                                                })
                                            }), (0, A.jsx)(rI.s, {
                                                icon: (0, A.jsx)(I.G, {
                                                    icon: ou.tc,
                                                    fixedWidth: !0
                                                }),
                                                command: (0, W.cE)("Mod+Shift+Enter"),
                                                onClick: function() {
                                                    return x({
                                                        fullscreen: !0
                                                    })
                                                },
                                                children: (0, A.jsx)(O.cC, {
                                                    id: "OwIqiD"
                                                })
                                            })]
                                        }), E === ri.q.SLIDE_VIEW && (0, A.jsx)(rI.s, {
                                            icon: (0, A.jsx)(I.G, {
                                                icon: io.Bg,
                                                fixedWidth: !0
                                            }),
                                            command: "ESC",
                                            onClick: g,
                                            children: (0, A.jsx)(O.cC, {
                                                id: "5Rfo7J"
                                            })
                                        }), !s && S && G && (0, A.jsxs)(A.Fragment, {
                                            children: [(0, A.jsx)(n1.R, {}), (0, A.jsx)(W.kH, {
                                                isDisabled: Z,
                                                label: (0, A.jsx)(O.cC, {
                                                    id: "zk6wKo"
                                                }),
                                                children: (0, A.jsx)(u.xu, {
                                                    children: (0, A.jsx)(rI.s, {
                                                        onClick: function() {
                                                            var e;
                                                            null != o && null !== (e = o.accessLinks) && void 0 !== e && e[0].permission && d()
                                                        },
                                                        isDisabled: !Z,
                                                        icon: (0, A.jsx)(I.G, {
                                                            icon: od.AS,
                                                            fixedWidth: !0
                                                        }),
                                                        children: (0, A.jsx)(ee.K, {
                                                            spacing: "0",
                                                            children: (0, A.jsx)(O.cC, {
                                                                id: "z7gRub",
                                                                components: {
                                                                    0: (0, A.jsx)(ei.x, {}),
                                                                    1: (0, A.jsx)(ei.x, {
                                                                        fontSize: "sm",
                                                                        color: "gray.600"
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            })]
                                        }), !s && S && N && (0, A.jsx)(ob, {
                                            isOpen: h,
                                            onClose: f,
                                            accessLinkUrl: N,
                                            onPlayClick: function() {
                                                x({
                                                    fullscreen: !1
                                                })
                                            }
                                        })]
                                    })
                                })]
                            })]
                        }), E === ri.q.SLIDE_VIEW && (0, A.jsx)(p.k, {
                            ml: E === ri.q.SLIDE_VIEW ? 2 : 0,
                            children: (0, A.jsx)(W.kH, {
                                label: y ? "Exit full screen" : "Enter full screen",
                                children: (0, A.jsx)(np.r, {
                                    "aria-label": y ? "Exit full screen" : "Enter full screen",
                                    borderRadius: "md",
                                    icon: (0, A.jsx)(I.G, {
                                        icon: y ? ol.Qj : oc.TL
                                    }),
                                    onClick: y ? function() {
                                        j(!0), k()
                                    } : w
                                })
                            })
                        })]
                    })
                },
                oC = n(8763),
                ow = n(66264),
                oO = n(5430),
                ok = n(59974),
                oI = function(e) {
                    var t, n, r = e.doc,
                        i = (0, nd.M)({
                            id: "titleModalDisclosure"
                        }),
                        o = i.isOpen,
                        s = i.onOpen,
                        a = i.onClose,
                        c = (0, nd.M)({
                            id: "analyticsModalDisclosure"
                        }),
                        l = c.isOpen,
                        d = c.onClose,
                        f = c.onOpen,
                        h = (0, ow.y)(),
                        m = h.isSharePanelOpen,
                        x = h.onSharePanelOpen,
                        g = h.onSharePanelClose,
                        j = h.view,
                        b = h.setView;
                    (0, v.useEffect)(function() {
                        return nu.T.on("openSharePanel", function(e) {
                            x(), b(e)
                        })
                    }, [x, b]);
                    var y = (0, D.SE)(),
                        C = y.user,
                        w = y.currentWorkspace,
                        k = (0, nN._i)().editor,
                        I = (0, D.py)("view", r),
                        S = (0, D.py)("edit", r),
                        E = (0, D.py)("manage", r),
                        P = (0, ef.z$)(),
                        T = (0, v.useCallback)(function() {
                            null == P || P.track(ef.AA.DOC_ANALYTICS_VIEWED, {
                                docId: null == r ? void 0 : r.id,
                                source: "share_panel",
                                type: E ? "full" : "personal"
                            }), f()
                        }, [P, E, null == r ? void 0 : r.id, f]);
                    if (!I || !C || !r) return null;
                    var R = r.collaborators || [],
                        _ = r.channels || [],
                        L = (0, ok.Hs)((0, J.Z)(R).sort(function(e, t) {
                            return e.user.id === C.id ? -1 : t.user.id === C.id ? 1 : 0
                        }).map(function(e) {
                            return e.user.id === C.id ? "You" : e.user.displayName || ""
                        }).concat(r.orgAccess ? _.map(function(e) {
                            return e.name || ""
                        }) : [])),
                        M = (0, oO.h_)(r, C),
                        z = M ? (0, oO.Xp)()[M] : null,
                        N = (0, oO.Gi)(r, w);
                    return null === z ? (console.error("[SharePanel] Unknown VisibilityValue for doc", r), null) : (0, A.jsxs)(p.k, {
                        children: [(0, A.jsx)(W.kH, {
                            label: (0, A.jsxs)(A.Fragment, {
                                children: [N && (0, A.jsx)(ei.x, {
                                    fontWeight: "bold",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "OS9x6e",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: tx.Yc
                                        }
                                    })
                                }), z.title(null == r ? void 0 : null === (t = r.organization) || void 0 === t ? void 0 : t.name) ? (0, A.jsx)(ei.x, {
                                    children: z.title(null == r ? void 0 : null === (n = r.organization) || void 0 === n ? void 0 : n.name)
                                }) : null, (0, A.jsx)(ei.x, {
                                    fontSize: "xs",
                                    children: z.subtitle ? z.subtitle(L || "") : ""
                                })]
                            }),
                            children: (0, A.jsx)("span", {
                                children: (0, A.jsx)(np.h, {
                                    "data-guider-highlight": "share-button",
                                    onMouseDown: nf.br,
                                    icon: (0, A.jsx)(u.xu, {
                                        children: (0, A.jsx)(oC.aA, {
                                            visibility: z,
                                            isFromOtherOrg: N
                                        })
                                    }),
                                    isDisabled: !S,
                                    onClick: function() {
                                        r.title && "" !== r.title ? x() : s()
                                    },
                                    children: (0, A.jsx)(O.cC, {
                                        id: "Z8lGw6"
                                    })
                                })
                            })
                        }), o && (0, A.jsx)(ng, {
                            onClose: a,
                            isOpen: o,
                            onSaveSuccess: function() {
                                a(), x()
                            },
                            docId: null == r ? void 0 : r.id
                        }), (0, A.jsx)(oC.WQ, {
                            doc: r,
                            editor: k,
                            isSharePanelOpen: m,
                            onSharePanelOpen: x,
                            onSharePanelClose: g,
                            onAnalyticsPanelOpen: T,
                            view: j,
                            setView: b
                        }), l && (0, A.jsx)(nl, {
                            doc: r,
                            onSharePanelOpen: x,
                            onAnalyticsPanelClose: d,
                            isAnalyticsPanelOpen: l,
                            mode: E ? "full" : "personal"
                        })]
                    })
                },
                oS = n(38621),
                oE = function(e) {
                    var t = e.spotlightingByBlock,
                        n = (0, L._i)().editor,
                        r = (0, v.useCallback)(function() {
                            t ? null == n || n.commands.turnOffSpotlight() : null == n || n.commands.spotlightNextBlock()
                        }, [n, t]);
                    return (0, A.jsx)(p.k, {
                        children: (0, A.jsx)(W.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            label: (0, A.jsxs)(ei.x, {
                                whiteSpace: "nowrap",
                                children: [t ? "Turn off spotlight" : "Turn on spotlight", (0, A.jsx)(ei.x, {
                                    as: "span",
                                    display: "inline",
                                    color: "gray.400",
                                    ml: 2,
                                    children: "S"
                                })]
                            }),
                            children: (0, A.jsx)(np.h, {
                                colorScheme: "trueblue",
                                variant: t ? "solid" : "plain",
                                onClick: function(e) {
                                    r(), e.target.blur()
                                },
                                icon: (0, A.jsx)(I.G, {
                                    icon: oS.QM
                                }),
                                children: "Spotlight"
                            })
                        })
                    })
                },
                oP = n(18504),
                oD = n(94467),
                oA = n(57560),
                oT = n(7752),
                oR = n(76162),
                o_ = (0, v.memo)(function() {
                    var e, t = (0, nh.p)(),
                        n = (0, S.$gs)().isConnected,
                        r = (0, nN._i)(),
                        i = r.docId,
                        o = r.getCollaborativeEditorInstance,
                        s = (0, nd.M)({
                            id: "themeEditor"
                        }),
                        a = s.isOpen,
                        l = s.onOpen,
                        d = s.onClose,
                        f = (0, nd.M)({
                            id: "themeStyleDrawer"
                        }),
                        h = f.isOpen,
                        m = f.onOpen,
                        x = f.onClose,
                        g = null === (e = o()) || void 0 === e ? void 0 : e.state.doc.toJSON(),
                        j = (0, C.CG)(_.Pu),
                        b = (0, oT.g)(),
                        y = (0, c.Z)(b, 2),
                        w = y[0],
                        k = y[1],
                        E = (0, v.useCallback)(function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e ? t ? k({
                                type: "SET_NEW_THEME_FOR_SELECTING",
                                data: {
                                    theme: e
                                }
                            }) : k({
                                type: "SET_THEME_EDITING",
                                data: {
                                    theme: e
                                }
                            }) : k({
                                type: "NEW_BLANK_THEME"
                            }), l()
                        }, [k, l]),
                        P = o();
                    (0, oA.bb)(P, E);
                    var D = (0, ef.z$)(),
                        T = (0, oA.vi)({
                            docId: i,
                            editor: P
                        }).updateDocThemeWithAccentImages,
                        R = (0, v.useCallback)(function(e) {
                            e.id !== j.id && T(e.id).then(function() {
                                null == D || D.track(ef.AA.DOC_THEME_UPDATED, {
                                    doc_id: i,
                                    theme_id: e.id
                                })
                            }).catch(function(e) {
                                console.error(e), t({
                                    title: (0, A.jsx)(O.cC, {
                                        id: "Fulf8b",
                                        values: {
                                            0: e.message
                                        }
                                    }),
                                    position: "top",
                                    status: "error"
                                })
                            })
                        }, [D, j.id, i, t, T]);
                    return (0, v.useEffect)(function() {
                        var e = nu.T.on("toggleThemeBlock", m),
                            t = ro.pw.on(ro.TI.OPEN_THEME_DRAWER, m);
                        return function() {
                            e(), t()
                        }
                    }, [m]), (0, A.jsxs)(p.k, {
                        children: [(0, A.jsx)(W.kH, {
                            label: n ? (0, A.jsx)(O.cC, {
                                id: "JkEyR8"
                            }) : (0, A.jsx)(O.cC, {
                                id: "GvC+mL",
                                components: {
                                    0: (0, A.jsx)(ei.x, {}),
                                    1: (0, A.jsx)(ei.x, {
                                        color: "gray.300"
                                    })
                                }
                            }),
                            "aria-label": U.ag._({
                                id: "JkEyR8"
                            }),
                            children: (0, A.jsx)(u.xu, {
                                children: (0, A.jsx)(np.h, {
                                    "data-guider-highlight": "toolbar-theme-button",
                                    onClick: m,
                                    isDisabled: !n,
                                    icon: (0, A.jsx)(I.G, {
                                        icon: oP.q2
                                    }),
                                    "data-testid": "toolbar-theme-button",
                                    children: (0, A.jsx)(O.cC, {
                                        id: "FEr96N"
                                    })
                                })
                            })
                        }), (0, A.jsx)(oR.G, {
                            isOpen: h && !a,
                            onClose: x,
                            openThemeEditor: E,
                            setDocTheme: R
                        }), (0, A.jsx)(oD.z, {
                            isOpen: a,
                            onClose: d,
                            state: w,
                            dispatch: k,
                            docContent: g,
                            onThemeCreated: R,
                            disableDrawerTransition: !0
                        })]
                    })
                });
            o_.displayName = "ThemeBlock";
            var oL = n(49626),
                oM = n(31997),
                oz = n(74588),
                oN = n(87202),
                oZ = n(31358),
                oG = n(63522),
                oF = n(20325),
                oU = n(78871),
                oW = n(53571),
                oV = n(75393),
                oH = [.5, .8, .9, 1, 1.1, 1.2, 1.5, 2],
                oB = function(e) {
                    return "".concat((100 * e).toFixed(0), "%")
                },
                oq = function() {
                    var e = (0, b.ye)("presentZoom"),
                        t = (0, nN._i)().editor,
                        n = (0, ef.z$)(),
                        r = (0, n5.I0)(),
                        i = (0, C.CG)(_.SU),
                        o = (0, v.useCallback)(function(e) {
                            r((0, _.Ic)({
                                zoomLevel: e
                            })), r((0, _.fT)({
                                enabled: !1
                            })), null == n || n.track(ef.AA.DOC_ZOOMED, {
                                direction: "set",
                                level: e
                            })
                        }, [r, n]),
                        s = (0, v.useCallback)(function() {
                            r((0, _.fT)({
                                enabled: !0
                            }))
                        }, [r]),
                        a = (0, v.useCallback)(function() {
                            var e = Math.min(oF.v4, i + .1);
                            r((0, _.Ic)({
                                zoomLevel: e
                            })), r((0, _.fT)({
                                enabled: !1
                            })), null == n || n.track(ef.AA.DOC_ZOOMED, {
                                direction: "in",
                                level: e
                            })
                        }, [r, n, i]),
                        c = (0, v.useCallback)(function() {
                            var e = Math.max(oF.Ou, i - .1);
                            r((0, _.Ic)({
                                zoomLevel: e
                            })), r((0, _.fT)({
                                enabled: !1
                            })), null == n || n.track(ef.AA.DOC_ZOOMED, {
                                direction: "in",
                                level: e
                            })
                        }, [r, n, i]),
                        l = (0, v.useCallback)(function() {
                            var e = oF.aX;
                            r((0, _.Ic)({
                                zoomLevel: e
                            })), r((0, _.fT)({
                                enabled: !1
                            })), null == n || n.track(ef.AA.DOC_ZOOMED, {
                                direction: "reset",
                                level: e
                            })
                        }, [r, n]),
                        d = (0, C.CG)(oG.C),
                        u = (0, oV.rJ)();
                    return ((0, v.useEffect)(function() {
                        if (e) return oZ.F7.on("keydown", "PRESENT_BLOCK", function(e) {
                            return !(d || !t || (0, oU.KB)(t) || (0, oW.Hx)(e.target)) && ((0, oN.ZP)("=")(e) ? (a(), e.preventDefault(), !0) : (0, oN.ZP)("-")(e) ? (c(), e.preventDefault(), !0) : (0, oN.ZP)("0")(e) ? (l(), e.preventDefault(), !0) : !!(0, oN.ZP)("9")(e) && (s(), e.preventDefault(), !0))
                        })
                    }, [d, e, t, a, c, l, s]), e) ? (0, A.jsxs)(nQ.h, {
                        spacing: "0",
                        size: "sm",
                        variant: "plain",
                        isAttached: !0,
                        children: [(0, A.jsx)(W.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            shortcut: "-",
                            label: U.ag._({
                                id: "FjkaiT"
                            }),
                            children: (0, A.jsx)(eF.h, {
                                "aria-label": U.ag._({
                                    id: "FjkaiT"
                                }),
                                fontWeight: "normal",
                                onClick: c,
                                icon: (0, A.jsx)(I.G, {
                                    icon: oM.Kl
                                })
                            })
                        }), (0, A.jsxs)(tT.v, {
                            closeOnSelect: !0,
                            children: [(0, A.jsx)(W.kH, {
                                label: U.ag._({
                                    id: "VZ3UQG"
                                }),
                                children: (0, A.jsx)(tR.j, {
                                    minW: 20,
                                    as: k.z,
                                    variant: "plain",
                                    size: "sm",
                                    rightIcon: (0, A.jsx)(I.G, {
                                        icon: oz.eW
                                    }),
                                    children: u ? (0, A.jsx)(O.cC, {
                                        id: "R9Khdg"
                                    }) : oB(i)
                                })
                            }), (0, A.jsxs)(t_.q, {
                                maxW: "220px",
                                children: [(0, A.jsx)(tL._, {
                                    value: u ? "auto" : i.toString(),
                                    type: "radio",
                                    children: (0, A.jsx)(tM.i, {
                                        value: "auto",
                                        onClick: s,
                                        children: (0, A.jsxs)(h.U, {
                                            children: [(0, A.jsxs)(ei.x, {
                                                children: [(0, A.jsx)(O.cC, {
                                                    id: "R9Khdg"
                                                }), " ", (0, A.jsx)(ei.x, {
                                                    as: "span",
                                                    color: "gray.500",
                                                    children: (0, A.jsx)(O.cC, {
                                                        id: "P9Cyl9"
                                                    })
                                                })]
                                            }), (0, A.jsx)(m.L, {}), (0, A.jsx)(ei.x, {
                                                as: "span",
                                                opacity: "0.6",
                                                children: "9"
                                            })]
                                        })
                                    })
                                }), (0, A.jsx)(n1.R, {}), (0, A.jsx)(tL._, {
                                    value: u ? "auto" : i.toString(),
                                    type: "radio",
                                    children: oH.map(function(e) {
                                        return (0, A.jsx)(tM.i, {
                                            value: (e / 100).toString(),
                                            onClick: function() {
                                                o(e)
                                            },
                                            children: (0, A.jsxs)(h.U, {
                                                children: [(0, A.jsx)(ei.x, {
                                                    children: oB(e)
                                                }), (0, A.jsx)(m.L, {}), e === oF.aX && (0, A.jsx)(ei.x, {
                                                    as: "span",
                                                    opacity: "0.6",
                                                    children: "0"
                                                })]
                                            })
                                        }, e)
                                    })
                                })]
                            })]
                        }), (0, A.jsx)(W.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            shortcut: "+",
                            label: U.ag._({
                                id: "AWOSPo"
                            }),
                            children: (0, A.jsx)(eF.h, {
                                fontWeight: "normal",
                                "aria-label": U.ag._({
                                    id: "AWOSPo"
                                }),
                                onClick: a,
                                icon: (0, A.jsx)(I.G, {
                                    icon: oL.r8
                                })
                            })
                        })]
                    }) : null
                },
                oK = (0, x.E)(u.xu),
                oY = (0, v.memo)(function(e) {
                    var t, r, i = e.scrollingParentSelector,
                        o = e.toggleCommentsPanel,
                        l = e.isCommentsPanelOpen,
                        u = e.editorWrapperEl,
                        x = e.docEditorType,
                        w = (0, f.a)(["(max-width: 840px)", "(min-width: 841px)"]),
                        O = (0, c.Z)(w, 1)[0],
                        k = (0, N.i)({
                            base: !0,
                            lg: !1
                        }),
                        I = (0, G.LQ)(window.location.href),
                        S = (0, C.CG)(_.gh),
                        E = (0, C.CG)(z.yx),
                        P = (0, L._i)().editor,
                        F = (0, D.py)("comment", E),
                        U = (0, R.g)(P).enabled,
                        W = (0, C.CG)(_.WI),
                        V = (0, C.CG)(_.yn),
                        H = W && V,
                        B = "SLIDE_VIEW" !== S,
                        q = (0, C.CG)(_.hN),
                        K = x !== M.Z.COLLABORATIVE,
                        Y = x === M.Z.PUBLIC_STATIC,
                        J = (0, C.CG)(_.Tf),
                        X = (0, b.ye)("aiChat");
                    (0, b.ye)("pptExport") && (window.exportToPptx = (t = (0, a.Z)(d().mark(function e(t) {
                        var r;
                        return d().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (P) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, Promise.all([n.e(9775), n.e(5743), n.e(9068)]).then(n.bind(n, 54087));
                                case 4:
                                    return r = e.sent.exportToPptx, e.abrupt("return", r(P, t));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }));
                    var Q = (0, y.z)((0, v.useCallback)(function(e) {
                            var t = $.current;
                            return !!t && (!!(t.querySelector("[data-active]") || t.querySelector('[aria-expanded="true"]')) || e.clientY < 100)
                        }, []), !J),
                        $ = (0, v.useRef)(null),
                        ee = !J || J && Q,
                        et = !!(null == E ? void 0 : E.publishedSnapshotId),
                        en = !(0, Z.s2)() && !O && !I;
                    return (0, A.jsxs)(p.k, {
                        "data-editor-toolbar": !0,
                        ref: $,
                        bg: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.1) 100%)",
                        position: "absolute",
                        zIndex: "overlay",
                        top: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        alignItems: "center",
                        pr: 6,
                        marginTop: ee ? 0 : "-100%",
                        pointerEvents: "none",
                        sx: (r = {}, (0, s.Z)(r, "&:focus-within", {
                            marginTop: 0
                        }), (0, s.Z)(r, "> *", {
                            pointerEvents: "auto"
                        }), (0, s.Z)(r, "> #toolbar-spacer", {
                            pointerEvents: "none"
                        }), r),
                        transitionProperty: "margin-top",
                        transitionDuration: "ultra-slow",
                        transitionTimingFunction: "ease-in-out",
                        "data-print-hidden": !0,
                        children: [(0, A.jsx)(g.M, {
                            initial: !1,
                            children: H && (0, A.jsx)(oK, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                position: "absolute",
                                pointerEvents: "none",
                                borderTop: "solid ".concat(4, "px ").concat(null == W ? void 0 : W.color),
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                height: "var(--100vh)"
                            })
                        }), !Y && (0, A.jsx)(h.U, {
                            children: (0, A.jsx)(nV, {
                                doc: E
                            })
                        }), (0, A.jsx)(m.L, {
                            pointerEvents: "none",
                            id: "toolbar-spacer"
                        }), (0, A.jsxs)(h.U, {
                            children: [!O && (0, A.jsx)(n6, {}), !O && !B && (0, A.jsx)(oq, {}), !O && !B && (0, A.jsx)(A.Fragment, {
                                children: (0, A.jsx)(oE, {
                                    spotlightingByBlock: U
                                })
                            }), !O && !K && q && (0, A.jsx)(o_, {}), !O && !K && (0, A.jsx)(oI, {
                                doc: E
                            }), en && !et && (0, A.jsx)(oy, {
                                doc: E,
                                isStaticEditor: K,
                                editorWrapperEl: u,
                                scrollingParentSelector: i
                            }), en && et && (0, A.jsx)(T, {
                                doc: E
                            }), !K && F && (0, A.jsx)(rm, {
                                doc: E,
                                mode: S,
                                isCommentsPanelOpen: l,
                                toggleCommentsPanel: o
                            }), !O && k && !K && q && X && (0, A.jsx)(rv, {}), !O && !K && (0, A.jsx)(nv, {
                                doc: E
                            }), !O && !K && (0, A.jsx)(oa, {
                                doc: E,
                                editorWrapperEl: u,
                                scrollingParentSelector: i
                            }), !Y && (0, A.jsx)(p.k, {
                                children: (0, A.jsx)(j.DY, {
                                    showRing: !0
                                })
                            })]
                        })]
                    })
                })
        },
        69895: function(e, t, n) {
            n.d(t, {
                OM: function() {
                    return O
                },
                Zd: function() {
                    return w
                },
                rU: function() {
                    return k
                }
            });
            var r = n(55452),
                i = n(55479),
                o = n(11919),
                s = n(12221),
                a = n(91012),
                c = n(54073),
                l = n.n(c),
                d = n(18149),
                u = n.n(d),
                f = n(2784),
                p = n(98621),
                h = n.n(p),
                m = n(88164),
                x = n(36157),
                g = n(90090),
                v = n(17349),
                j = n(78871),
                b = n(77869),
                y = n(53571),
                C = n(52322),
                w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body",
                        n = (0, x.TL)(),
                        r = (0, g.As)("editor"),
                        i = (0, m.nO)(),
                        o = (0, x.CG)(v.yn, u()),
                        s = (0, x.CG)(v.k8, u()),
                        a = !!(null == s ? void 0 : s.pos);
                    (0, f.useEffect)(function() {
                        if (e) {
                            var t = l()(function() {
                                    o && n((0, v.Qx)({
                                        attached: !1
                                    }))
                                }, 500, {
                                    leading: !0
                                }),
                                r = (0, y.B$)({
                                    topOffset: 100,
                                    requiredCookie: "spotlightScrollDebug=true"
                                });
                            return document.addEventListener("wheel", t, !0),
                                function() {
                                    r(), t.cancel(), document.removeEventListener("wheel", t, !0)
                                }
                        }
                    }, [e, n, o, a, t]);
                    var c = (0, x.CG)(v.ks, u());
                    (0, f.useEffect)(function() {
                        if (e && !c) {
                            var t = l()(function() {
                                    if (!r.inProgress) {
                                        var t = (0, j.lI)(e, 100, i);
                                        if (!t) {
                                            console.debug("[useHandleScrollAndSelectionChange][handleScroll] Unable to find topPosPct.");
                                            return
                                        }
                                        n((0, v.Us)(t))
                                    }
                                }, 250, {
                                    trailing: !0,
                                    maxWait: 500
                                }),
                                o = l()(function() {
                                    if (!(e.state.selection instanceof b.c)) {
                                        var t = document.querySelector(r.scrollSelector || ""),
                                            i = null == t ? void 0 : t.getBoundingClientRect(),
                                            o = e.state.selection.from,
                                            s = (0, j.Sh)(e, o);
                                        if (!t || !i || !s) {
                                            console.debug("[useHandleScrollAndSelectionChange][handleSelectionChange] missing data", {
                                                domNodeToUse: s
                                            });
                                            return
                                        }
                                        var a = s.getBoundingClientRect(),
                                            c = parseFloat(((e.view.coordsAtPos(o).top - a.y) / a.height).toFixed(2));
                                        n((0, v.Us)({
                                            pos: o,
                                            pct: c
                                        }))
                                    }
                                }, 250, {
                                    trailing: !0,
                                    maxWait: 500
                                });
                            return t(), e.on("selectionUpdate", o), window.addEventListener("scroll", t, !0),
                                function() {
                                    e.off("selectionUpdate", o), window.removeEventListener("scroll", t, !0)
                                }
                        }
                    }, [e, n, r, c, i])
                },
                O = function() {
                    var e = (0, i.p)(),
                        t = (0, x.TL)();
                    return (0, f.useCallback)(function(n) {
                        var i = n.collaborator,
                            c = n.localIsFollowing,
                            l = n.localIsAttached,
                            d = {
                                attached: !0
                            };
                        c ? l ? d.following = null : e.closeAll() : (d.following = i.sessionId, e.closeAll(), e({
                            duration: 2e3,
                            position: "bottom",
                            render: function() {
                                return (0, C.jsxs)(o.k, {
                                    bg: "gray.50",
                                    p: 3,
                                    px: 6,
                                    align: "center",
                                    borderRadius: "md",
                                    shadow: "md",
                                    children: [(0, C.jsx)(s.q, {
                                        size: "sm",
                                        src: i.profileImageUrl,
                                        border: "solid 2px ".concat(i.color),
                                        color: h()(i.color).isDark() ? "white" : "black",
                                        bg: i.color
                                    }), (0, C.jsx)(a.x, {
                                        ml: 2,
                                        children: (0, C.jsx)(r.cC, {
                                            id: "lULvWe",
                                            values: {
                                                0: i.name
                                            }
                                        })
                                    })]
                                })
                            }
                        })), console.debug("[CollaboratorsPanel] Clicked on collaborator ".concat(i.name, ". Setting following to ").concat(d)), t((0, v.Qx)(d))
                    }, [e, t])
                },
                k = function(e) {
                    var t = e.editor,
                        n = e.collaborators,
                        r = e.user,
                        i = (0, f.useRef)(!1),
                        o = O(),
                        s = new URLSearchParams(window.location.search),
                        a = s.get("following_id"),
                        c = s.get("follow_on_start");
                    (0, f.useEffect)(function() {
                        if (!i.current && c && (null == r ? void 0 : r.id) !== a && t) {
                            var e = n.find(function(e) {
                                return e.id === a
                            });
                            e && (o({
                                collaborator: e,
                                localIsAttached: !1,
                                localIsFollowing: !1
                            }), i.current = !0)
                        }
                    }, [a, c, t, n, r, o])
                }
        },
        25015: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return y
                },
                P: function() {
                    return b
                }
            });
            var r = n(55452),
                i = n(55479),
                o = n(87202),
                s = n(2784),
                a = n(36157),
                c = n(90090),
                l = n(26658),
                d = n(37057),
                u = n(49950),
                f = n(96636),
                p = n(17349),
                h = n(78871),
                m = n(86407),
                x = n(53571),
                g = n(52322),
                v = (0, o.ZP)("mod+S"),
                j = (0, o.ZP)("mod+shift+O"),
                b = function() {
                    var e = (0, i.p)();
                    (0, s.useEffect)(function() {
                        var t = function(t) {
                                v(t) && (t.preventDefault(), e.isActive("save_toast") || e({
                                    id: "save_toast",
                                    title: (0, g.jsx)(r.cC, {
                                        id: "4ebE67"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0
                                }))
                            },
                            n = (0, x.B$)({
                                requiredCookie: "cardCollapseDebug=true"
                            });
                        return window.addEventListener("keydown", t),
                            function() {
                                null == n || n(), window.removeEventListener("keydown", t)
                            }
                    }, [e])
                },
                y = function() {
                    var e = (0, a.qr)(),
                        t = (0, a.TL)(),
                        n = (0, m._i)().editor;
                    (0, s.useEffect)(function() {
                        if (n) {
                            var r = function(r) {
                                if (j(r)) {
                                    r.preventDefault();
                                    var i = e.getState(),
                                        o = i.TipTap,
                                        s = o.cardIdMap,
                                        a = o.cardIds,
                                        c = o.memoState.expandedCards,
                                        d = (0, p.i2)(i),
                                        u = a.reduce(function(e, t) {
                                            var n = !0 === c[t],
                                                r = s.parents[t] || [],
                                                i = r.length > 0,
                                                o = !d || r.includes(d);
                                            return i && o && (e.cardIds.push(t), e.total++, e.expanded += n ? 1 : 0), e
                                        }, {
                                            total: 0,
                                            expanded: 0,
                                            cardIds: []
                                        }),
                                        f = u.total,
                                        h = u.expanded,
                                        m = u.cardIds;
                                    t((0, p.bj)({
                                        disable: !0
                                    })), setTimeout(function() {
                                        t((0, p.bj)({
                                            disable: !1
                                        }))
                                    }, 100);
                                    var x = f === h;
                                    C(n, 100, !x), (0, l.Nn)(m, x)
                                }
                            };
                            return window.addEventListener("keydown", r),
                                function() {
                                    window.removeEventListener("keydown", r)
                                }
                        }
                    }, [t, e, n])
                },
                C = function(e, t, n) {
                    for (var r = (0, c.cC)("editor"), i = void 0, o = 200; o > 0; o -= 25) {
                        var s, a = (0, h.Je)(e, r.scrollSelector, o);
                        if (null !== (s = a.pos) && void 0 !== s && s.pos) {
                            var l = void 0;
                            e.state.doc.nodeAt(a.pos.pos) ? l = a.pos.pos : e.state.doc.nodeAt(a.pos.inside) && (l = a.pos.inside), l && (!i || l > i) && (i = l)
                        }
                    }
                    if (!i) {
                        console.warn("[pinPageDuringAnimation] No result for getTopCenterIshNode");
                        return
                    }
                    var d = w(e, i, n);
                    if (!d) {
                        console.warn("[pinPageDuringAnimation] No element for getElementToPin");
                        return
                    }(0, x.wO)({
                        element: d,
                        requiredCookie: "cardCollapseDebug=true"
                    });
                    var u = +new Date,
                        f = r.scroller.scrollTop,
                        p = (0, x.LY)(d, r.scrollSelector),
                        m = f - p,
                        g = m < 0 ? 0 : Math.max(m + 200, 0);
                    ! function e() {
                        if (d) {
                            var n = (0, x.LY)(d, r.scrollSelector);
                            r.scroller.scroll({
                                top: f + (n - p - g)
                            }), +new Date - u < t && requestAnimationFrame(e)
                        }
                    }()
                },
                w = function(e, t, n) {
                    var r, i = e.state.doc.resolve(t),
                        o = e.state.doc.nodeAt(t),
                        s = (0, h.Sh)(e, t);
                    if (!o) {
                        console.warn("[getElementToPin] nodeAt null for $pos", i);
                        return
                    }
                    var a = (0, h.nv)(i, function() {
                        return !0
                    }).reverse();
                    for (a.push({
                            start: i.start(i.depth + 1),
                            pos: t,
                            depth: i.depth,
                            node: o
                        }); a.length;) {
                        var c = a.shift();
                        if (c) {
                            var l = (0, d.KH)(c.node),
                                p = (0, u.SA)(c.node),
                                m = (0, f.CU)(c.node),
                                x = l || c.node.isAtom ? c.pos : c.start;
                            if (s = (0, h.Sh)(e, x), !n && l && c.depth > 2 || p || m) break
                        }
                    }
                    for (;
                        (null === (r = s) || void 0 === r ? void 0 : r.offsetParent) === null && s.parentElement;) s = s.parentElement;
                    return s
                }
        },
        51587: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return h
                }
            });
            var r = n(5632),
                i = n(2784),
                o = n(56969),
                s = n(36157),
                a = n(86482),
                c = n(12452),
                l = n(17349),
                d = n(70173),
                u = n(21875),
                f = n(34972),
                p = n(60883),
                h = function() {
                    var e = (0, f._i)().editor,
                        t = (0, r.useRouter)(),
                        n = (0, s.qr)();
                    (0, i.useEffect)(function() {
                        if (e) {
                            t.beforePopState(function(e) {
                                return !e.as.startsWith("/docs/")
                            });
                            var r = o.fI.on("changed", function(t) {
                                var r, i = (0, p.sY)(t.url).cardId,
                                    o = n.getState(),
                                    s = (0, l.gh)(o);
                                if (console.debug("[useHandleCardHash][handleURLChange]", {
                                        payload: t,
                                        cardId: i
                                    }), s === d.q.DOC_VIEW && null !== (r = t.state) && void 0 !== r && r.fromPos && "pop" === t.method) {
                                    var u = t.state,
                                        f = u.fromPos,
                                        h = u.fromPct;
                                    e.chain().scrollToPositionInCard(f, h || void 0).command(function(e) {
                                        var t = e.tr;
                                        return (0, c.B0)(f)(t), !0
                                    }).run()
                                } else {
                                    var m = (0, l.xb)(o)[0];
                                    (0, a.YS)({
                                        cardId: i || m,
                                        editor: e
                                    })
                                }
                            });
                            return function() {
                                t.beforePopState(function() {
                                    return !0
                                }), r()
                            }
                        }
                    }, [e, t, n]), (0, i.useEffect)(function() {
                        if (e) {
                            var t = (0, p.sY)(window.location.href).cardId;
                            t && (0, u.D)({
                                cardId: t,
                                method: "replace"
                            })
                        }
                    }, [e])
                }
        },
        27486: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return w
                }
            });
            var r = n(16019),
                i = n(87202),
                o = n(2784),
                s = n(25232),
                a = n(31358),
                c = n(63522),
                l = n(69539),
                d = n(36157),
                u = n(36188),
                f = n(26658),
                p = n(68093),
                h = n(17349),
                m = n(70173),
                x = n(77869),
                g = n(34972),
                v = (0, i.ZP)("mod+Enter"),
                j = (0, i.ZP)("Esc"),
                b = (0, i.ZP)("mod+Esc"),
                y = (0, i.ZP)("shift+mod+Enter"),
                C = function(e, t) {
                    var n = document.querySelector(t);
                    if (n) {
                        var r = n.getBoundingClientRect();
                        e.commands.scrollToNodeWithPin(document.elementFromPoint(r.width / 2, 100), 100)
                    }
                },
                w = function(e) {
                    var t = e.editorWrapperEl,
                        n = e.scrollingParentSelector,
                        i = (0, d.TL)(),
                        w = (0, o.useState)(!1),
                        O = w[0],
                        k = w[1],
                        I = (0, o.useState)(!1),
                        S = I[0],
                        E = I[1],
                        P = (0, g._i)().editor,
                        D = (0, d.CG)(h.gh),
                        A = (0, o.useRef)(D);
                    (0, o.useEffect)(function() {
                        A.current = D
                    }, [D]);
                    var T = (0, d.CG)(h.yq),
                        R = (0, d.CG)(h.JA),
                        _ = (0, d.CG)(c.C),
                        L = (0, u.z$)(),
                        M = (0, o.useCallback)(function(e) {
                            P && !P.isDestroyed && (e === m.q.SLIDE_VIEW ? ((0, f.E0)(P.state.doc, i), (0, p.U6)(P, !1), P.commands.spotlightCurrentCard()) : (P.commands.turnOffSpotlight(!0), C(P, n)), i(function(t) {
                                t((0, h.Qx)({
                                    attached: !1
                                })), t((0, h.PM)({
                                    mode: e
                                }))
                            }))
                        }, [i, P, n]),
                        z = (0, o.useCallback)(function() {
                            try {
                                var e, t, n, r;
                                if (null !== (e = document.body) && void 0 !== e && e.requestFullscreen) {
                                    null === (n = document.body) || void 0 === n || n.requestFullscreen();
                                    return
                                }
                                null !== (t = document.body) && void 0 !== t && t.webkitRequestFullscreen && (null === (r = document.body) || void 0 === r || r.webkitRequestFullscreen())
                            } catch (e) {
                                console.debug("[PresentBlock] Error entering fullscreen:", e)
                            }
                        }, []),
                        N = (0, o.useCallback)(function() {
                            try {
                                if (document.fullscreenElement) {
                                    document.exitFullscreen();
                                    return
                                }
                                document.webkitCurrentFullScreenElement && document.webkitExitFullscreen && document.webkitExitFullscreen()
                            } catch (e) {
                                console.debug("[PresentBlock] Error exiting fullscreen:", e)
                            }
                        }, []),
                        Z = (0, s.ye)("realUserMetrics"),
                        G = (0, l.wK)(Z),
                        F = G.recordExitSlideModePerformance,
                        U = G.recordEnterSlideModePerformance,
                        W = (0, o.useCallback)(function(e) {
                            var t = e.fullscreen,
                                n = void 0 !== t && t;
                            A.current !== m.q.SLIDE_VIEW && (M(m.q.SLIDE_VIEW), n && z(), null == L || L.trackDocEvent(u.AA.PRESENT_MODE_ENTERED), U({
                                isFullscreen: n
                            }), setTimeout(function() {
                                document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur()
                            }))
                        }, [M, U, z, A, L]),
                        V = (0, o.useCallback)(function() {
                            A.current !== m.q.DOC_VIEW && (M(m.q.DOC_VIEW), O && N(), null == L || L.trackDocEvent(u.AA.PRESENT_MODE_EXITED), F({
                                isFullscreen: O
                            }))
                        }, [M, O, N, F, A, L]);
                    return (0, o.useEffect)(function() {
                        var e = function() {
                            null !== document.fullscreenElement || S || V(), null !== document.webkitCurrentFullScreenElement || S || V(), k(function(e) {
                                return !e
                            }), E(!1)
                        };
                        return document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e),
                            function() {
                                document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e)
                            }
                    }, [S, V, N]), (0, r.r)(function() {
                        P && !P.isDestroyed && D === m.q.DOC_VIEW && requestAnimationFrame(function() {
                            var e = P.state.selection;
                            e instanceof x.c && P.commands.command(function(t) {
                                return t.tr.setSelection(e.createSelectionNear()), !0
                            })
                        })
                    }, [P, D]), (0, o.useEffect)(function() {
                        return a.F7.on("keydown", "PRESENT_BLOCK", function(e) {
                            var t, n, r, i = A.current === m.q.SLIDE_VIEW;
                            if (!_) {
                                if (v(e)) {
                                    if (null != e && null !== (t = e.target) && void 0 !== t && t.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return e.preventDefault(), W({
                                        fullscreen: !1
                                    }), !0
                                }
                                if (y(e)) {
                                    if (null != e && null !== (n = e.target) && void 0 !== n && n.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return e.preventDefault(), W({
                                        fullscreen: !0
                                    }), !0
                                }
                                if (b(e) && i) return V(), !0;
                                if (j(e) && i && !T && !R) {
                                    if (null != e && null !== (r = e.target) && void 0 !== r && r.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return V(), !0
                                }
                            }
                        })
                    }, [W, V, z, T, R, t, _]), {
                        enterSlideView: W,
                        exitSlideView: V,
                        enterFullscreen: z,
                        exitFullscreen: N,
                        exitedFullscreenByClick: S,
                        isFullscreen: O,
                        setIsFullscreen: k,
                        setExitedFullscreenByClick: E
                    }
                }
        },
        86407: function(e, t, n) {
            n.d(t, {
                dM: function() {
                    return sc
                },
                Ur: function() {
                    return oK
                },
                nz: function() {
                    return sk
                },
                _i: function() {
                    return tR._i
                },
                eT: function() {
                    return tR.eT
                }
            });
            var r, i, o, s = n(93812),
                a = n(55452),
                c = n(87254),
                l = n(11919),
                d = n(91012),
                u = n(53738),
                f = n(34676),
                p = n(49929),
                h = n(97261),
                m = n(97729),
                x = n.n(m),
                g = n(2784),
                v = n(43997),
                j = n(28811),
                b = n(64914),
                y = n(25232),
                C = n(63705),
                w = n(99076),
                O = n(95235),
                k = n(81333),
                I = n(29106),
                S = n(75944),
                E = n(54728),
                P = n(51434),
                D = n(67887),
                A = n(91333),
                T = n(83897),
                R = n(7954),
                _ = n(36157),
                L = n(17349),
                M = n(78739),
                z = n(97526),
                N = n(22467),
                Z = n(25208),
                G = n(35232),
                F = n(63613),
                U = n(80891),
                W = n(61374),
                V = n(8283),
                H = n(96530),
                B = n(71354),
                q = n(50390),
                K = n(5766),
                Y = n(40110),
                J = n(45650),
                X = n(52322),
                Q = function(e) {
                    var t = e.label,
                        n = e.shortcuts;
                    return (0, X.jsxs)(V.U, {
                        children: [n.map(function(e, t) {
                            return (0, X.jsx)(H.T, {
                                padding: 1,
                                children: e
                            }, t)
                        }), (0, X.jsx)(d.x, {
                            fontSize: "sm",
                            fontWeight: "medium",
                            whiteSpace: "nowrap",
                            children: t
                        })]
                    })
                },
                $ = function(e) {
                    var t = e.onClose;
                    return (0, X.jsx)(u.xu, {
                        children: (0, X.jsxs)(B.K, {
                            spacing: 6,
                            children: [(0, X.jsxs)(B.K, {
                                spacing: 1,
                                children: [(0, X.jsxs)(V.U, {
                                    color: "gray.500",
                                    children: [(0, X.jsx)(p.G, {
                                        icon: I.UF
                                    }), " ", (0, X.jsx)(q.X, {
                                        size: "xs",
                                        fontWeight: "normal",
                                        children: (0, X.jsx)(a.cC, {
                                            id: "h7MgpO"
                                        })
                                    })]
                                }), (0, X.jsx)(q.X, {
                                    size: "md",
                                    children: (0, X.jsx)(a.cC, {
                                        id: "UodEcE"
                                    })
                                })]
                            }), (0, X.jsxs)(K.M, {
                                spacing: 3,
                                columns: 1,
                                children: [(0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "9xCxY6"
                                    }),
                                    shortcuts: [(0, X.jsx)(p.G, {
                                        icon: W.ac
                                    }, "left"), (0, X.jsx)(p.G, {
                                        icon: U.eF
                                    }, "right")]
                                }), (0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "IkakN2"
                                    }),
                                    shortcuts: ["Esc"]
                                }), (0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "K0Oq/D"
                                    }),
                                    shortcuts: ["R"]
                                }), (0, X.jsx)(Y.i, {
                                    borderColor: "gray.300"
                                }), (0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "CgmvBu"
                                    }),
                                    shortcuts: ["S"]
                                }), (0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "/5i2oX"
                                    }),
                                    shortcuts: [(0, X.jsx)(p.G, {
                                        icon: F.FP
                                    }, "up"), (0, X.jsx)(p.G, {
                                        icon: G.r5
                                    }, "down")]
                                }), (0, X.jsx)(Q, {
                                    label: (0, X.jsx)(a.cC, {
                                        id: "rEj/lx"
                                    }),
                                    shortcuts: ["Enter"]
                                })]
                            }), (0, X.jsx)(J.z, {
                                size: "sm",
                                variant: "solid",
                                onClick: t,
                                children: (0, X.jsx)(a.cC, {
                                    id: "76gPWk"
                                })
                            })]
                        })
                    }, "coach-bar")
                };

            function ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var en = (0, g.memo)(function() {
                var e = (0, S.q)(),
                    t = e.isOpen,
                    n = e.onToggle,
                    r = e.onClose,
                    i = (0, M._)(z.H.hasSeenCoachBar, !1),
                    o = (0, k.Z)(i, 2),
                    s = o[0],
                    a = o[1],
                    c = (0, _.CG)(L.Tf),
                    l = (0, g.useCallback)(function() {
                        s || a(!0), r()
                    }, [s, r, a]),
                    d = !s || t,
                    u = (0, R.z)((0, g.useCallback)(function(e) {
                        return e.clientX > window.innerWidth - 150 && e.clientY > window.innerHeight - 150
                    }, []));
                return (0, X.jsx)(Z.H, {
                    mr: c && s && !d && !u ? "-100%" : "0px",
                    transitionProperty: "margin-right",
                    transitionDuration: "ultra-slow",
                    transitionTimingFunction: "ease-in-out",
                    children: (0, X.jsxs)(E.J, {
                        returnFocusOnClose: !1,
                        isOpen: d,
                        onClose: l,
                        closeOnBlur: !0,
                        children: [(0, X.jsx)(P.x, {
                            children: (0, X.jsx)(D.h, {
                                onClick: function() {
                                    t && a(!0), n()
                                },
                                "aria-label": "Help",
                                isRound: !0,
                                size: "md",
                                icon: (0, X.jsx)(p.G, {
                                    icon: I.UF
                                })
                            })
                        }), (0, X.jsx)(A.y, et(et({}, N.Ro), {}, {
                            children: (0, X.jsx)(T.b, {
                                children: (0, X.jsx)($, {
                                    onClose: l
                                })
                            })
                        }))]
                    })
                })
            });
            en.displayName = "PresentModeHelpWidget";
            var er = n(95828),
                ei = n(1243),
                eo = n(88164),
                es = n(38797),
                ea = n(70957),
                ec = n(40723),
                el = n(81324),
                ed = n(57560),
                eu = n(58124),
                ef = n(74637),
                ep = n(94301),
                eh = n(35741),
                em = n(82269),
                ex = n(20299),
                eg = n(46974),
                ev = n(48798),
                ej = n(85249),
                eb = n(20176),
                ey = n(36471),
                eC = n(1410),
                ew = n(46510),
                eO = n(80304),
                ek = n(55479),
                eI = n(84103),
                eS = n(49294),
                eE = n(34638),
                eP = n(56143),
                eD = n(47655),
                eA = n(50381),
                eT = n.n(eA),
                eR = n(97705),
                e_ = n(93506),
                eL = n(98841),
                eM = n(25925),
                ez = ["children", "style"];

            function eN(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eZ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eN(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eN(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eG = {
                    enter: {
                        visibility: "visible",
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: .2,
                            ease: [.4, 0, .2, 1]
                        }
                    },
                    exit: {
                        transitionEnd: {
                            visibility: "hidden"
                        },
                        opacity: 0,
                        scale: .8,
                        transition: {
                            duration: .1,
                            easings: "easeOut"
                        }
                    }
                },
                eF = "custom" in eL.E ? eL.E.custom(eR.m.div) : (0, eL.E)(eR.m.div),
                eU = (0, g.forwardRef)(function(e, t) {
                    var n, r, i = e.children,
                        o = e.style,
                        s = (0, em.Z)(e, ez),
                        a = (0, e_.jC)("Menu", s);
                    return (0, X.jsx)(eR.m.div, eZ(eZ({
                        ref: t,
                        __css: {
                            zIndex: null !== (n = e.zIndex) && void 0 !== n ? n : null === (r = a.list) || void 0 === r ? void 0 : r.zIndex
                        },
                        style: eZ({}, o)
                    }, s), {}, {
                        children: (0, X.jsx)(eM.M, {
                            children: (0, X.jsx)(eF, {
                                className: (0, f.cx)("chakra-menu__menu-list"),
                                variants: eG,
                                style: {
                                    transformOrigin: "top left"
                                },
                                initial: eG.exit,
                                animate: eG.enter,
                                exit: eG.exit,
                                __css: eZ({
                                    outline: 0
                                }, a.list),
                                children: i
                            })
                        })
                    }))
                }),
                eW = n(17107),
                eV = ["type"],
                eH = ["icon", "iconSpacing", "command", "commandSpacing", "children"],
                eB = ["className", "children"],
                eq = ["className"];

            function eK(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eY(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eK(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eK(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eJ = (0, eW.G)(function(e, t) {
                    var n = e.type,
                        r = (0, em.Z)(e, eV),
                        i = (0, e_.jC)("Menu", r),
                        o = r.as ? null != n ? n : void 0 : "button",
                        s = eY({
                            textDecoration: "none",
                            color: "inherit",
                            userSelect: "none",
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            textAlign: "start",
                            flex: "0 0 auto",
                            outline: 0
                        }, i.item);
                    return (0, X.jsx)(eR.m.button, eY(eY({
                        ref: t,
                        type: o
                    }, r), {}, {
                        __css: s,
                        _hover: i.item._focus
                    }))
                }),
                eX = (0, eW.G)(function(e, t) {
                    var n = e.icon,
                        r = e.iconSpacing,
                        i = e.command,
                        o = e.commandSpacing,
                        s = e.children,
                        a = (0, em.Z)(e, eH),
                        c = n || i ? (0, X.jsx)("span", {
                            style: {
                                pointerEvents: "none",
                                flex: 1
                            },
                            children: s
                        }) : s;
                    return (0, X.jsxs)(eJ, eY(eY({}, a), {}, {
                        className: (0, f.cx)("chakra-menu__menuitem"),
                        children: [n && (0, X.jsx)(eQ, {
                            fontSize: "0.8em",
                            marginEnd: void 0 === r ? "0.75rem" : r,
                            children: n
                        }), c, i && (0, X.jsx)(e$, {
                            marginStart: void 0 === o ? "0.75rem" : o,
                            children: i
                        })]
                    }))
                });
            eX.displayName = "MenuItem";
            var eQ = function(e) {
                var t = e.className,
                    n = e.children,
                    r = (0, em.Z)(e, eB),
                    i = g.Children.only(n),
                    o = g.isValidElement(i) ? g.cloneElement(i, {
                        focusable: "false",
                        "aria-hidden": !0,
                        className: (0, f.cx)("chakra-menu__icon", i.props.className)
                    }) : null,
                    s = (0, f.cx)("chakra-menu__icon-wrapper", t);
                return (0, X.jsx)(eR.m.span, eY(eY({
                    className: s
                }, r), {}, {
                    __css: {
                        flexShrink: 0
                    },
                    children: o
                }))
            };
            eQ.displayName = "MenuIcon";
            var e$ = (0, eW.G)(function(e, t) {
                var n = (0, e_.jC)("Menu", e);
                return (0, X.jsx)(eR.m.span, eY(eY({
                    ref: t
                }, e), {}, {
                    __css: n.command,
                    className: "chakra-menu__command"
                }))
            });
            e$.displayName = "MenuCommand";
            var e0 = function(e) {
                var t = e.className,
                    n = (0, em.Z)(e, eq),
                    r = (0, e_.jC)("Menu", e);
                return (0, X.jsx)(eR.m.hr, eY(eY({
                    role: "separator",
                    "aria-orientation": "horizontal",
                    className: (0, f.cx)("chakra-menu__divider", t)
                }, n), {}, {
                    __css: r.divider
                }))
            };
            e0.displayName = "MenuDivider";
            var e1 = n(17714),
                e2 = n(81065),
                e5 = n(27442),
                e3 = n(24466),
                e6 = ["editor", "openStyleDrawer", "cardUrl", "getPos", "isNested", "isFirstCard", "isCollapsed", "hasCardBackground", "onClose", "updateAttributes", "previewContent"];

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

            function e8(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e4(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e4(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e7 = (0, X.jsx)(p.G, {
                    icon: eO.TX,
                    fixedWidth: !0
                }),
                e9 = (0, X.jsx)(p.G, {
                    icon: ew.WM,
                    fixedWidth: !0
                }),
                te = (0, X.jsx)(p.G, {
                    icon: eC.O4,
                    fixedWidth: !0
                }),
                tt = (0, X.jsx)(p.G, {
                    icon: ey.$,
                    fixedWidth: !0
                }),
                tn = (0, X.jsx)(p.G, {
                    icon: eb.FP,
                    fixedWidth: !0
                }),
                tr = (0, X.jsx)(p.G, {
                    icon: ej.oK,
                    fixedWidth: !0
                }),
                ti = (0, X.jsx)(p.G, {
                    icon: ev.re,
                    fixedWidth: !0
                }),
                to = (0, X.jsx)(p.G, {
                    icon: eg.z1,
                    fixedWidth: !0
                }),
                ts = (0, X.jsx)(p.G, {
                    icon: ex.UP,
                    fixedWidth: !0
                }),
                ta = (0, g.forwardRef)(function(e, t) {
                    var n = e.editor,
                        r = e.openStyleDrawer,
                        i = e.cardUrl,
                        o = e.getPos,
                        s = e.isNested,
                        u = e.isFirstCard,
                        f = e.isCollapsed,
                        p = e.hasCardBackground,
                        h = e.onClose,
                        m = e.updateAttributes,
                        x = e.previewContent,
                        v = (0, em.Z)(e, e6);
                    console.debug("%c [<ManageCardMenu />] RENDER", "background-color: limegreen");
                    var j = (0, ek.p)(),
                        b = (0, e3.K)(),
                        y = (0, g.useCallback)(function() {
                            m && m({
                                previewContent: null === x ? "" : null
                            })
                        }, [m, x]),
                        C = (0, g.useCallback)(function() {
                            var e = o();
                            if (e && n) {
                                var t = n.state.doc.nodeAt(e),
                                    r = t && (0, eD.getCardTitle)(t.toJSON());
                                n.chain().deleteCard(e).focus().run();
                                var i = c.ag._({
                                        id: "0MWv65",
                                        values: {
                                            displayTitle: r ? '"'.concat(r, '"') : "card"
                                        }
                                    }),
                                    s = c.ag._({
                                        id: "9uI/rE"
                                    }),
                                    a = j({
                                        title: (0, X.jsxs)(V.U, {
                                            children: [(0, X.jsx)(d.x, {
                                                noOfLines: 1,
                                                children: i
                                            }), (0, X.jsx)(eI.r, {
                                                textDecoration: "underline",
                                                onClick: function() {
                                                    (0, eP.Yw)(n.state), j.close(a)
                                                },
                                                children: s
                                            })]
                                        }),
                                        status: "info",
                                        duration: 3e3,
                                        position: "top"
                                    })
                            }
                        }, [n, o, j]),
                        w = (0, g.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.commands.duplicateCard(e))
                        }, [n, o]),
                        O = (0, g.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.commands.unnestCard(e))
                        }, [n, o]),
                        k = (0, g.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.chain().mergeCardsAtPos(e).focus().run())
                        }, [n, o]),
                        I = (0, g.useCallback)(function() {
                            r(0)
                        }, [r]),
                        S = (0, g.useCallback)(function() {
                            r(1)
                        }, [r]),
                        E = (0, _.CG)(L.hN),
                        P = (0, eS.V)(i).onCopy,
                        D = (0, eE.ff)("red.500", "red.300"),
                        A = (0, g.useCallback)(function(e) {
                            var t;
                            if (e.target && null !== (t = e.target) && void 0 !== t && t.closest('[data-testid="open-share"]')) {
                                e.preventDefault();
                                return
                            }
                            P(), j({
                                title: c.ag._({
                                    id: "h5GS+N"
                                }),
                                status: "success",
                                duration: 3e3,
                                position: "top"
                            })
                        }, [P, j]),
                        T = (0, g.useCallback)(function() {
                            var e = o();
                            if (e && n) {
                                var t = (0, e2.PZ)(n, e);
                                if (!t) {
                                    j({
                                        title: c.ag._({
                                            id: "FntfNT"
                                        }),
                                        status: "error",
                                        duration: 3e3,
                                        position: "top"
                                    });
                                    return
                                }
                                eT()(t, {
                                    format: "text/html"
                                }), j({
                                    title: c.ag._({
                                        id: "LHDpRL"
                                    }),
                                    status: "success",
                                    duration: 3e3,
                                    position: "top"
                                })
                            }
                        }, [n, o, j]);
                    return (0, X.jsxs)(eU, e8(e8({}, v), {}, {
                        zIndex: "popover",
                        ref: t,
                        onClick: h,
                        "data-testid": "manage-card-menu",
                        children: [(0, X.jsx)(eX, {
                            icon: (0, X.jsx)(e5.x, {
                                isLocked: !b
                            }),
                            onClick: A,
                            "data-testid": "copy-card-link",
                            children: (0, X.jsx)(a.cC, {
                                id: "F0YmUY"
                            })
                        }), (0, X.jsx)(eX, {
                            icon: te,
                            onClick: T,
                            children: (0, X.jsx)(a.cC, {
                                id: "Bq0HJ4"
                            })
                        }), (0, X.jsxs)(l.k, {
                            direction: "column",
                            display: E ? "flex" : "none",
                            children: [(0, X.jsx)(e0, {}), (0, X.jsx)(eX, {
                                icon: e9,
                                onClick: w,
                                "data-testid": "duplicate-card",
                                children: (0, X.jsx)(a.cC, {
                                    id: "euc6Ns"
                                })
                            }), m && s && f && (0, X.jsx)(eX, {
                                icon: "" === x ? to : ts,
                                onClick: y,
                                "data-testid": "hide-preview",
                                children: "" === x ? (0, X.jsx)(a.cC, {
                                    id: "dK2evu"
                                }) : (0, X.jsx)(a.cC, {
                                    id: "691flv"
                                })
                            }), r && void 0 !== p && !f && (0, X.jsx)(eX, {
                                icon: ti,
                                onClick: I,
                                onMouseDown: e1.br,
                                "data-testid": "card-background",
                                children: p ? (0, X.jsx)(a.cC, {
                                    id: "sIpTuZ"
                                }) : (0, X.jsx)(a.cC, {
                                    id: "T6eZ9z"
                                })
                            }), r && !f && (0, X.jsx)(eX, {
                                icon: e7,
                                onClick: S,
                                onMouseDown: e1.br,
                                "data-testid": "card-style",
                                children: (0, X.jsx)(a.cC, {
                                    id: "k7zVgS"
                                })
                            }), s ? (0, X.jsx)(eX, {
                                icon: tr,
                                onClick: O,
                                "data-testid": "merge-into-parent-card",
                                children: (0, X.jsx)(a.cC, {
                                    id: "b+J8Wt"
                                })
                            }) : !1 != s || u ? null : (0, X.jsx)(eX, {
                                icon: tn,
                                onClick: k,
                                "data-testid": "merge-into-card-above",
                                children: (0, X.jsx)(a.cC, {
                                    id: "kV34zB"
                                })
                            }), (0, X.jsx)(e0, {}), (0, X.jsx)(eX, {
                                icon: tt,
                                color: D,
                                onClick: C,
                                "data-testid": "delete-card",
                                children: (0, X.jsx)(a.cC, {
                                    id: "cnGeoo"
                                })
                            })]
                        })]
                    }))
                }),
                tc = n(76236);

            function tl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function td(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tl(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tu = (0, g.memo)(function(e) {
                    var t = e.editor,
                        n = (0, _.CG)(tc.tk),
                        r = n.isOpen,
                        i = n.ref,
                        o = n.options,
                        s = (0, g.useState)(null),
                        a = s[0],
                        c = s[1],
                        l = (0, eh.D)(i, a, {
                            placement: "bottom-start",
                            modifiers: [{
                                name: "preventOverflow",
                                enabled: !0,
                                options: {
                                    boundary: "clippingParents"
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: [0, 8]
                                }
                            }],
                            strategy: "absolute"
                        }).styles,
                        d = (0, v.I0)(),
                        u = (0, g.useCallback)(function() {
                            d((0, tc.kG)({
                                saveRef: !0
                            }))
                        }, [d]),
                        f = (0, g.useCallback)(function() {
                            d((0, tc.kG)({
                                saveRef: !1
                            }))
                        }, [d]);
                    return (0, ef.O)({
                        ref: {
                            current: a
                        },
                        handler: function() {
                            r && (u(), setTimeout(function() {
                                d((0, tc.gQ)())
                            }, 0))
                        }
                    }), (0, g.useEffect)(function() {
                        return function() {
                            return f()
                        }
                    }, []), (0, X.jsx)(ep.h, {
                        children: r && o && (0, X.jsx)(ta, td(td({}, o), {}, {
                            style: td({}, l.popper),
                            onClose: f,
                            ref: c,
                            editor: t
                        }))
                    })
                }),
                tf = n(42028),
                tp = n(19260),
                th = n(36188),
                tm = n(89089),
                tx = n(84636),
                tg = n.n(tx),
                tv = n(54073),
                tj = n.n(tv),
                tb = n(72338),
                ty = n(90090),
                tC = n(37057),
                tw = n(53571),
                tO = n(70173),
                tk = function(e, t, n, r, i) {
                    var o = r - n,
                        s = Math.max(o - Math.max(e - n, 0) - Math.max(r - t, 0), 0),
                        a = s / o,
                        c = a > 0 && s == t - e;
                    return {
                        overlap: a,
                        viewing: i && (c || a > .5 || s > 400),
                        only: c
                    }
                };

            function tI(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tS = function(e, t) {
                    var n = (0, ty.As)("editor"),
                        r = (0, g.useState)(null),
                        i = r[0],
                        o = r[1],
                        s = (0, g.useRef)({
                            presentingCardId: null,
                            scrollTop: 0,
                            containerHeight: 0,
                            expandedCards: {}
                        }),
                        a = (0, _.CG)(L.gh),
                        c = (0, _.CG)(L.i2);
                    (0, g.useEffect)(function() {
                        s.current.presentingCardId = null != c ? c : null
                    }, [c]);
                    var l = (0, _.CG)(L.Q5);
                    (0, g.useEffect)(function() {
                        s.current.expandedCards = l
                    }, [l]), (0, g.useEffect)(function() {
                        var e = document.querySelector(n.scrollSelector);
                        if (e) {
                            o(e);
                            var t = e.getBoundingClientRect().height;
                            s.current.scrollTop = e.scrollTop, s.current.containerHeight = t
                        }
                    }, [n.scrollSelector, s]), (0, g.useEffect)(function() {
                        var e = tj()(function() {
                            i && (s.current.scrollTop = i.scrollTop)
                        }, 250, {
                            trailing: !0,
                            maxWait: 500
                        });
                        return window.addEventListener("scroll", e, !0),
                            function() {
                                return window.removeEventListener("scroll", e, !0)
                            }
                    }, [i]), (0, g.useEffect)(function() {
                        var e = tj()(function() {
                            i && (s.current.containerHeight = i.getBoundingClientRect().height)
                        }, 250, {
                            trailing: !0,
                            maxWait: 500
                        });
                        return window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }, [i]), (0, g.useEffect)(function() {
                        if (e) {
                            if (a === tO.q.SLIDE_VIEW) {
                                var r = setInterval(function() {
                                    t.emit("cardViewed", {
                                        cardId: s.current.presentingCardId,
                                        interval: 1e3
                                    })
                                }, 1e3);
                                return function() {
                                    return clearInterval(r)
                                }
                            }
                            var i = setInterval(function() {
                                if (!document.hidden) {
                                    var r = s.current,
                                        i = r.scrollTop,
                                        o = r.containerHeight,
                                        a = r.expandedCards,
                                        c = i + o;
                                    tg()((0, tb.N2)(e.state.doc, tC.KH), function(e) {
                                        return e.node.attrs.id
                                    }).map(function(t) {
                                        var r, o = t.node.attrs.id,
                                            s = a[o];
                                        if (!s) return null;
                                        try {
                                            r = e.view.nodeDOM(t.pos)
                                        } catch (e) {
                                            return null
                                        }
                                        if (r instanceof HTMLElement) {
                                            var l = (0, tw.LY)(r, n.scrollSelector),
                                                d = r.offsetHeight + l;
                                            return function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? tI(Object(n), !0).forEach(function(t) {
                                                        (0, O.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tI(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({
                                                id: o
                                            }, tk(i, c, l, d, s))
                                        }
                                        return null
                                    }).filter(function(e) {
                                        return !!(null != e && e.viewing)
                                    }).forEach(function(e) {
                                        t.emit("cardViewed", {
                                            cardId: e.id,
                                            interval: 1e3
                                        })
                                    })
                                }
                            }, 1e3);
                            return function() {
                                return clearInterval(i)
                            }
                        }
                    }, [a, e, s, t, n.scrollSelector])
                },
                tE = function(e) {
                    var t = e.editor,
                        n = e.backoffFactor,
                        r = void 0 === n ? 1 : n,
                        i = (0, th.z$)(),
                        o = (0, g.useState)(15e3),
                        s = o[0],
                        a = o[1];
                    tS(t, tm.f);
                    var c = (0, g.useCallback)(function() {
                        tm.f.flush(), a(Math.min(s * r, 12e4))
                    }, [r, s]);
                    return (0, g.useEffect)(function() {
                        if (i) {
                            tm.f.initialize(), tm.f.on("flush", function(e) {
                                for (var t = e.viewed, n = 0, r = Object.entries(t); n < r.length; n++) {
                                    var o = (0, k.Z)(r[n], 2),
                                        s = o[0],
                                        a = o[1];
                                    i.trackDocEvent(th.AA.CARD_VIEWED, {
                                        card_id: s,
                                        duration: a
                                    })
                                }
                            });
                            var e = setInterval(function() {
                                return c()
                            }, s);
                            return function() {
                                clearInterval(e), tm.f.destroy()
                            }
                        }
                    }, [i, s, c]), null
                },
                tP = n(5945),
                tD = n(13504),
                tA = n(75213),
                tT = n(54714),
                tR = n(34972),
                t_ = n(38404),
                tL = n(20406),
                tM = n(28526),
                tz = n.n(tM),
                tN = n(78116),
                tZ = n(56915),
                tG = n(16796),
                tF = n(64827),
                tU = n(2167),
                tW = n(80353),
                tV = n(76648),
                tH = n(58125),
                tB = n(30764),
                tq = n(68650),
                tK = n(94826),
                tY = n(75245),
                tJ = n(41823),
                tX = n(11204),
                tQ = n(78977),
                t$ = n(74358),
                t0 = n(69663),
                t1 = n(62288),
                t2 = n(15767);

            function t5(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var t3 = g.createContext({
                enabled: !1,
                registerEditor: function(e, t) {},
                getAllCards: function() {
                    return []
                },
                userMessage: "",
                setUserMessage: function(e) {}
            });

            function t6() {
                return (0, g.useContext)(t3)
            }
            var t4 = function(e) {
                    var t = e.children,
                        n = (0, g.useRef)(new Map),
                        r = (0, g.useRef)(""),
                        i = (0, g.useRef)(function(e, t) {
                            n.current.set(e, t)
                        }),
                        o = (0, g.useRef)(function() {
                            return Array.from(n.current.values()).map(function(e) {
                                var t, n;
                                return null === (t = e.state.doc.firstChild) || void 0 === t ? void 0 : null === (n = t.content.toJSON()) || void 0 === n ? void 0 : n[0]
                            }).filter(Boolean)
                        }),
                        s = (0, g.useCallback)(function(e) {
                            r.current = e
                        }, []);
                    return (0, X.jsx)(t3.Provider, {
                        value: {
                            enabled: !0,
                            registerEditor: i.current,
                            getAllCards: o.current,
                            userMessage: r.current,
                            setUserMessage: s
                        },
                        children: t
                    })
                },
                t8 = n(60282),
                t7 = n(12694),
                t9 = n(56581),
                ne = n(27302),
                nt = n(420),
                nn = n(28617),
                nr = function(e) {
                    var t = e.cardId,
                        n = e.onClick,
                        r = (0, _.CG)((0, t8.NB)(t)),
                        i = (0, _.CG)(L.Pu);
                    return r ? (0, X.jsxs)(B.K, {
                        zIndex: 1,
                        mt: "4.5em",
                        width: "180px",
                        bg: "whiteAlpha.500",
                        border: "1px solid",
                        borderColor: "blackAlpha.300",
                        borderRadius: "lg",
                        p: 4,
                        sx: {
                            "*": {
                                "backdrop-filter": "none !important",
                                "-webkit-backdrop-filter": "none !important"
                            }
                        },
                        children: [r.variants.map(function(e) {
                            if (!e) return null;
                            var o = e.label,
                                s = e.card,
                                a = e.id;
                            return (0, X.jsx)(ni, {
                                theme: i,
                                isSelected: r.selected === a,
                                label: o,
                                card: s,
                                onClick: function() {
                                    n({
                                        cardId: t,
                                        variationId: a
                                    })
                                }
                            }, a)
                        }), r.variants.length < 2 && (0, X.jsx)(ne.M, {
                            children: (0, X.jsx)(nt.$, {})
                        })]
                    }) : null
                },
                ni = function(e) {
                    var t = e.label,
                        n = e.card,
                        r = e.theme,
                        i = e.isSelected,
                        o = void 0 !== i && i,
                        s = e.onClick,
                        a = (0, g.useMemo)(function() {
                            return (0, nn.vL)({
                                docFlags: {
                                    cardLayoutsEnabled: !0
                                }
                            }, [n])
                        }, [n]);
                    return (0, X.jsxs)(B.K, {
                        align: "start",
                        children: [(0, X.jsx)(l.k, {
                            borderRadius: "md",
                            bg: "white",
                            shadow: o ? "outline" : "md",
                            overflow: "hidden",
                            cursor: "pointer",
                            _hover: {
                                bg: "trueblue.50"
                            },
                            transitionProperty: "common",
                            transitionDuration: "fast",
                            onClick: void 0 === s ? function() {} : s,
                            children: (0, X.jsx)(l.k, {
                                sx: t$.n,
                                css: {
                                    "--editor-font-size": "0.15rem",
                                    "--editor-width": "150px"
                                },
                                justifyContent: "center",
                                alignItems: "top",
                                pointerEvents: "none",
                                children: (0, X.jsx)(t$.m, {
                                    content: a,
                                    theme: r,
                                    isThumbnail: !0
                                })
                            })
                        }), (0, X.jsxs)(d.x, {
                            fontSize: "sm",
                            children: [o && (0, X.jsx)(t9.n, {
                                boxSize: 3,
                                mr: 2
                            }), t]
                        })]
                    })
                };

            function no(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ns(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? no(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var na = "ai-wizard-editor-root",
                nc = function(e) {
                    var t = e.doc,
                        n = e.cards,
                        r = e.theme,
                        i = void 0 === r ? tY.mU : r,
                        o = (0, t1.R5)(i),
                        s = (0, tJ.wj)(i),
                        a = (0, t1.wh)(o, s),
                        c = (0, _.TL)(),
                        d = t6().registerEditor;
                    return ((0, g.useEffect)(function() {
                        return function() {
                            c((0, t8.mc)())
                        }
                    }, [c]), t) ? (0, X.jsxs)(l.k, ns(ns({
                        bg: "gray.100",
                        overflowY: "auto",
                        overflowX: "hidden",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        direction: "column",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        className: na
                    }, a), {}, {
                        children: [(0, X.jsx)(t0.Y, {}), n.map(function(e, n) {
                            var r, i = null === (r = e.attrs) || void 0 === r ? void 0 : r.id;
                            return i ? (0, X.jsx)(nl, {
                                doc: t,
                                cardId: i,
                                cardIndex: n,
                                cardJSON: e,
                                onCreate: function(e) {
                                    d(i, e)
                                }
                            }, i) : null
                        })]
                    })) : null
                },
                nl = function(e) {
                    var t = e.cardId,
                        n = e.cardIndex,
                        r = e.cardJSON,
                        i = e.doc,
                        o = e.onCreate,
                        s = (0, _.TL)(),
                        a = (0, g.useState)(null),
                        c = a[0],
                        d = a[1],
                        u = t6().userMessage,
                        f = (0, t7.b)({
                            editor: c
                        });
                    (0, g.useEffect)(function() {
                        c && f({
                            doc: c.state.doc,
                            cardId: t,
                            message: u
                        })
                    }, [f, c, t, n, u]);
                    var p = (0, g.useMemo)(function() {
                            return (0, tX.vL)({
                                docFlags: {
                                    cardLayoutsEnabled: !0
                                }
                            }, [r])
                        }, [r]),
                        h = (0, _.CG)((0, t8.a4)(t));
                    (0, t2.vm)(function() {
                        if (c && h) {
                            var e = (0, tC.Bw)(c, t);
                            e && c.commands.command(function(t) {
                                var n = t.tr,
                                    r = tB.NB.fromJSON(c.schema, h.card);
                                return n.replaceWith(e.pos, e.pos + e.node.nodeSize, r), !0
                            })
                        }
                    }, [c, h, t], [h]);
                    var m = (0, g.useCallback)(function(e) {
                        var n = e.cardId,
                            r = e.variationId;
                        c && n === t && s((0, t8.dx)({
                            cardId: t,
                            variantId: r
                        }))
                    }, [s, c, t]);
                    return null != i && i.id ? (0, X.jsxs)(l.k, {
                        className: "ai-variation-editor-".concat(t),
                        alignItems: "flex-start",
                        sx: t$.n,
                        my: -8,
                        children: [(0, X.jsx)(nr, {
                            cardId: t,
                            onClick: m
                        }), (0, X.jsx)(tQ.y, {
                            initialContent: p,
                            onCreate: function(e) {
                                var t = e.editor;
                                d(t), o(t)
                            },
                            doc: i,
                            docId: i.id,
                            scrollingParentSelector: ".".concat(na),
                            readOnly: !0,
                            isStatic: !0,
                            animationsEnabled: !1,
                            extensions: [],
                            shouldSupportMenus: !1
                        })]
                    }) : null
                },
                nd = n(77399);

            function nu(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nf(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nu(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nu(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var np = function(e) {
                    var t = (0, nd.M)({
                            id: "cardSuggestionDrawer"
                        }),
                        n = t.isOpen,
                        r = t.onClose,
                        i = t.onOpen,
                        o = (0, _.CG)(L.Pu),
                        s = (0, g.useState)(function() {
                            return (0, tH.xC)({
                                reducer: _.Ct
                            })
                        })[0];
                    return (0, X.jsx)(v.zt, {
                        store: s,
                        children: (0, X.jsx)(nh, nf(nf({}, e), {}, {
                            isOpen: n,
                            onClose: r,
                            onOpen: i,
                            theme: o
                        }))
                    })
                },
                nh = (r = function(e) {
                    var t, n = e.doc,
                        r = e.editor,
                        i = e.theme,
                        o = e.isOpen,
                        s = e.onClose,
                        c = e.onOpen,
                        l = (0, g.useState)([]),
                        d = l[0],
                        u = l[1],
                        f = (0, g.useState)(null),
                        p = f[0],
                        h = f[1],
                        m = t6(),
                        x = m.getAllCards,
                        v = m.setUserMessage,
                        j = (0, g.useCallback)(function() {
                            s(), u([]), h(null)
                        }, [s]),
                        b = (0, g.useCallback)(function() {
                            if (j(), r) {
                                var e = {
                                    type: "document",
                                    content: x()
                                };
                                console.log("[handleConfirm] contentToUse", e);
                                var t = 1,
                                    n = r.state.doc.nodeSize - 2,
                                    i = (0, tC.Bw)(r, p);
                                if (i) {
                                    n = (t = i.pos) + i.node.nodeSize;
                                    var o = e.content.find(function(e) {
                                        var t;
                                        return (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) === p
                                    });
                                    if (!o) {
                                        console.warn("[handleConfirm] Count not find card to use");
                                        return
                                    }
                                    e = o
                                }
                                r.commands.command(function(i) {
                                    return i.tr.replaceRangeWith(t, n, tB.NB.fromJSON(r.schema, e)), !0
                                })
                            }
                        }, [j, r, p, x]),
                        y = (0, g.useCallback)((t = (0, tL.Z)(tz().mark(function e(t, n, r) {
                            return tz().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        c(), h(n), u(t.toJSON().content[0].content.filter(function(e) {
                                            var t;
                                            return null === n || (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) === n
                                        })), v(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e, n, r) {
                            return t.apply(this, arguments)
                        }), [c, v]);
                    return (0, g.useEffect)(function() {
                        if (r) return tK.T.on("openSuggestionEditor", function(e) {
                            var t = e.cardId,
                                n = e.userMessage;
                            y(r.view.state.doc, t, n)
                        })
                    }, [r, y]), (0, X.jsxs)(tN.d, {
                        placement: "bottom",
                        onClose: s,
                        isOpen: o,
                        trapFocus: !0,
                        isFullHeight: !0,
                        children: [(0, X.jsx)(tZ.Z, {}), (0, X.jsxs)(tG.s, {
                            borderTopRadius: "xl",
                            h: "calc(var(--100vh) - 24px)",
                            transform: "none !important",
                            children: [(0, X.jsx)(tF.o, {
                                zIndex: "10",
                                backgroundColor: "white",
                                mr: 2,
                                shadow: "md"
                            }), (0, X.jsx)(tU.f, {
                                p: 0,
                                h: "100%",
                                children: d.length > 0 && n ? (0, X.jsx)(nc, {
                                    doc: n,
                                    cards: d,
                                    theme: i
                                }) : (0, X.jsx)(tq.AA, {})
                            }), (0, X.jsx)(tW.m, {
                                borderTop: "1px solid #000",
                                borderColor: "gray.200",
                                children: (0, X.jsxs)(tV.h, {
                                    spacing: 4,
                                    children: [(0, X.jsx)(J.z, {
                                        variant: "ghost",
                                        onClick: s,
                                        children: (0, X.jsx)(a.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, X.jsx)(J.z, {
                                        variant: "solid",
                                        onClick: b,
                                        children: (0, X.jsx)(a.cC, {
                                            id: "7VpPHA"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                }, (0, g.memo)(function(e) {
                    return (0, X.jsx)(t4, {
                        children: (0, X.jsx)(r, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? t5(Object(n), !0).forEach(function(t) {
                                    (0, O.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t5(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e))
                    })
                })),
                nm = n(67004),
                nx = n(94603),
                ng = n(31145),
                nv = n(49626),
                nj = n(61751),
                nb = n(49747),
                ny = n(56133),
                nC = n(39097),
                nw = n.n(nC),
                nO = n(63331),
                nk = n(26018),
                nI = n(16673),
                nS = n(42781),
                nE = n(61528),
                nP = n(60883),
                nD = n(76035),
                nA = n(50281),
                nT = n(54119),
                nR = n(77779),
                n_ = n(2046),
                nL = n(70287),
                nM = n(25793),
                nz = n(14304),
                nN = n.n(nz),
                nZ = n(64805),
                nG = [{
                    key: "bad",
                    label: (0, X.jsx)(a.cC, {
                        id: "XSfVsn"
                    }),
                    ariaLabel: function() {
                        return c.ag._({
                            id: "XSfVsn"
                        })
                    },
                    icon: nR.Kf,
                    color: "red"
                }, {
                    key: "meh",
                    label: (0, X.jsx)(a.cC, {
                        id: "0ASQJH"
                    }),
                    ariaLabel: function() {
                        return c.ag._({
                            id: "0ASQJH"
                        })
                    },
                    icon: nT.C4,
                    color: "yellow"
                }, {
                    key: "good",
                    label: (0, X.jsx)(a.cC, {
                        id: "9ZYnL5"
                    }),
                    ariaLabel: function() {
                        return c.ag._({
                            id: "9ZYnL5"
                        })
                    },
                    icon: nA.I3,
                    color: "green"
                }],
                nF = function(e) {
                    var t = e.docId,
                        n = e.isDark,
                        r = e.interactionId,
                        i = (0, g.useState)(null),
                        o = i[0],
                        s = i[1],
                        c = (0, g.useState)(!1),
                        l = c[0],
                        f = c[1],
                        h = (0, g.useState)(""),
                        m = h[0],
                        x = h[1],
                        v = (0, g.useRef)(null),
                        j = (0, ek.p)(),
                        b = (0, g.useCallback)(function(e) {
                            s(e), (0, nZ.fM)({
                                rating: e,
                                doc_id: t,
                                interactionId: r
                            }), j({
                                title: (0, X.jsx)(a.cC, {
                                    id: "2gZOCV"
                                }),
                                status: "success",
                                position: "top",
                                duration: 1e3
                            }), setTimeout(function() {
                                var e;
                                null == v || null === (e = v.current) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 200)
                        }, [t, r, j]),
                        y = (0, g.useCallback)(function(e) {
                            e || ((0, nZ.XH)({
                                feedback: nN().sanitize(m),
                                doc_id: t,
                                interactionId: r
                            }), j({
                                title: (0, X.jsx)(a.cC, {
                                    id: "+Rq0s/"
                                }),
                                status: "success",
                                position: "top",
                                duration: 2e3,
                                isClosable: !0
                            })), f(!0)
                        }, [t, m, r, j]);
                    return (0, X.jsx)(u.xu, {
                        p: 4,
                        borderRadius: "lg",
                        border: "1px solid",
                        borderColor: n ? "whiteAlpha.100" : "gray.200",
                        position: "relative",
                        children: l ? (0, X.jsxs)(d.x, {
                            color: n ? "green.400" : "green.600",
                            textAlign: "center",
                            children: [(0, X.jsx)(p.G, {
                                icon: nD.faCircleCheck
                            }), " ", (0, X.jsx)(a.cC, {
                                id: "SOk0EB"
                            })]
                        }) : (0, X.jsxs)(B.K, {
                            spacing: 4,
                            children: [(0, X.jsxs)(B.K, {
                                alignItems: "center",
                                spacing: "1",
                                children: [(0, X.jsx)(d.x, {
                                    fontSize: "sm",
                                    color: n ? "whiteAlpha.800" : "gray.500",
                                    children: (0, X.jsx)(a.cC, {
                                        id: "TxHdBh"
                                    })
                                }), o ? (0, X.jsxs)(d.x, {
                                    textAlign: "center",
                                    color: n ? "green.400" : "green.600",
                                    children: [(0, X.jsx)(p.G, {
                                        icon: nD.faCircleCheck
                                    }), " ", (0, X.jsx)(a.cC, {
                                        id: "SOk0EB"
                                    })]
                                }) : (0, X.jsx)(d.x, {
                                    children: (0, X.jsx)(a.cC, {
                                        id: "cNzndx"
                                    })
                                })]
                            }), (0, X.jsx)(V.U, {
                                fontSize: "xl",
                                width: "100%",
                                children: nG.map(function(e) {
                                    var t = e.key,
                                        r = e.ariaLabel,
                                        i = e.label,
                                        s = e.icon,
                                        a = e.color,
                                        c = o === t;
                                    return (0, X.jsx)(nU, {
                                        ariaLabel: r,
                                        label: i,
                                        icon: s,
                                        color: a,
                                        onClick: function() {
                                            return b(t)
                                        },
                                        isSelected: c,
                                        isDisabled: !!(o && !c),
                                        isDark: n
                                    }, t)
                                })
                            }), o && (0, X.jsxs)(n_.NI, {
                                textAlign: "center",
                                children: [(0, X.jsx)(nL.l, {
                                    fontSize: "sm",
                                    color: n ? "whiteAlpha.800" : "gray.500",
                                    children: "good" === o ? (0, X.jsx)(a.cC, {
                                        id: "AmM8eQ"
                                    }) : (0, X.jsx)(a.cC, {
                                        id: "8+bwIa"
                                    })
                                }), (0, X.jsx)(nM.g, {
                                    value: m,
                                    onChange: function(e) {
                                        x(e.target.value)
                                    },
                                    placeholder: "",
                                    size: "sm",
                                    mb: "4"
                                }), (0, X.jsxs)(tV.h, {
                                    spacing: "4",
                                    ref: v,
                                    children: [(0, X.jsx)(J.z, {
                                        variant: "text",
                                        onClick: function() {
                                            y(!0)
                                        },
                                        children: (0, X.jsx)(a.cC, {
                                            id: "6Uau97"
                                        })
                                    }), (0, X.jsx)(J.z, {
                                        variant: "solid",
                                        isDisabled: "" === m,
                                        onClick: function() {
                                            return y(!1)
                                        },
                                        children: (0, X.jsx)(a.cC, {
                                            id: "hQRttt"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                nU = function(e) {
                    var t = e.label,
                        n = e.ariaLabel,
                        r = e.icon,
                        i = e.color,
                        o = e.isSelected,
                        s = e.onClick,
                        a = e.isDisabled,
                        c = e.isDark;
                    return (0, X.jsx)(h.kH, {
                        label: t,
                        placement: "top",
                        children: (0, X.jsx)(D.h, {
                            "aria-label": n(),
                            boxShadow: "none",
                            bg: o ? c ? "".concat(i, ".200") : "".concat(i, ".100") : c ? "whiteAlpha.300" : "gray.50",
                            _disabled: {
                                opacity: "".concat(o ? 1 : .5),
                                cursor: "not-allowed"
                            },
                            color: o ? c ? "".concat(i, ".600") : "".concat(i, ".500") : c ? "whiteAlpha.800" : "gray.500",
                            _hover: {
                                backgroundColor: "".concat(i, ".100"),
                                color: "".concat(i, ".500")
                            },
                            flex: 1,
                            icon: (0, X.jsx)(d.x, {
                                fontSize: "2xl",
                                children: (0, X.jsx)(p.G, {
                                    icon: r
                                })
                            }),
                            isDisabled: a,
                            variant: "plain",
                            onClick: s
                        })
                    })
                },
                nW = n(56969),
                nV = n(97907),
                nH = ["90%", "360px"],
                nB = function(e) {
                    var t = e.onClose,
                        n = e.eyebrowText,
                        r = e.mainText,
                        i = e.callsToAction;
                    return (0, X.jsxs)(u.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        p: 4,
                        w: nH,
                        maxW: nH,
                        position: "relative",
                        children: [(0, X.jsx)(nV.P, {
                            size: "sm",
                            onClick: t,
                            position: "absolute",
                            insetEnd: 1,
                            top: 1
                        }), (0, X.jsxs)(B.K, {
                            spacing: 4,
                            children: [(0, X.jsxs)(B.K, {
                                spacing: 1,
                                paddingEnd: 3,
                                children: [!(0, nE.s2)() && (0, X.jsx)(d.x, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: n
                                }), (0, X.jsx)(d.x, {
                                    fontSize: "md",
                                    children: r
                                })]
                            }), (0, X.jsx)(u.xu, {
                                w: "100%",
                                children: i
                            })]
                        })]
                    })
                },
                nq = function(e) {
                    var t = e.onClose,
                        n = e.startTour;
                    return (0, X.jsx)(nB, {
                        eyebrowText: (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)("span", {
                                "aria-label": "Wave",
                                role: "img",
                                children: "\uD83D\uDC4B"
                            }), " ", (0, X.jsx)(a.cC, {
                                id: "IiwaCT",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                }
                            })]
                        }),
                        mainText: (0, X.jsx)(a.cC, {
                            id: "ntWFEH"
                        }),
                        onClose: t,
                        callsToAction: (0, X.jsx)(J.z, {
                            size: "md",
                            w: "100%",
                            variant: "solid",
                            onClick: function() {
                                n(0), t()
                            },
                            children: (0, X.jsx)(a.cC, {
                                id: "VzFYDl"
                            })
                        })
                    })
                },
                nK = n(77245),
                nY = ["90%", "360px"],
                nJ = function(e) {
                    var t = e.onClose,
                        n = (0, g.useState)(!0),
                        r = n[0],
                        i = n[1];
                    return (0, g.useEffect)(function() {
                        setTimeout(function() {
                            i(!1)
                        }, 3e3)
                    }, []), (0, X.jsxs)(u.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        p: 4,
                        w: nY,
                        maxW: nY,
                        position: "relative",
                        children: [(0, X.jsx)(nV.P, {
                            size: "md",
                            onClick: t,
                            position: "absolute",
                            insetEnd: 1,
                            top: 1
                        }), (0, X.jsxs)(B.K, {
                            direction: "row",
                            spacing: 3,
                            justify: "center",
                            w: "100%",
                            alignItems: "center",
                            children: [(0, X.jsx)(u.xu, {
                                color: "trueblue.300",
                                children: (0, X.jsx)(p.G, {
                                    icon: nK.tc,
                                    size: "2x",
                                    className: r ? "fa-bounce" : void 0
                                })
                            }), (0, X.jsxs)(B.K, {
                                spacing: 0,
                                direction: "column",
                                flex: 1,
                                textAlign: "left",
                                children: [(0, X.jsx)(d.x, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: (0, X.jsx)(a.cC, {
                                        id: "eoDgVo"
                                    })
                                }), (0, X.jsx)(d.x, {
                                    fontSize: "md",
                                    children: (0, X.jsx)(a.cC, {
                                        id: "p7dFyi"
                                    })
                                })]
                            })]
                        })]
                    })
                };

            function nX(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nQ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nX(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nX(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var n$ = "source",
                n0 = "desktop-tour-toast",
                n1 = "switch-from-mobile-to-desktop-toast",
                n2 = function(e) {
                    var t, n = e.editor,
                        r = (0, ek.p)(),
                        i = (0, _.CG)(t_.yx),
                        o = (0, C.c8)().startTour,
                        s = (0, tP.SE)(),
                        a = s.user,
                        c = s.setSettings,
                        l = (0, g.useState)(!1),
                        d = l[0],
                        u = l[1],
                        f = (0, g.useRef)(!1),
                        p = !!(null != a && null !== (t = a.settings) && void 0 !== t && t.needsEditorOnboarding),
                        h = (0, _.CG)((0, nO.oH)(null == n ? void 0 : n.gammaDocId)),
                        m = !!h && "running" === h.status,
                        x = !!h && ("complete" === h.status || "error" === h.status),
                        v = (0, ty.As)("editor"),
                        j = (0, g.useState)(null),
                        b = j[0],
                        y = j[1],
                        w = (0, g.useState)(function() {
                            return (0, nP.SJ)()[n$] === nk.VY
                        })[0],
                        k = (0, g.useState)(function() {
                            return w && (0, nE.s2)()
                        })[0],
                        I = w && x;
                    return (0, g.useEffect)(function() {
                        n && u(!m && !(0, nE.s2)() && w && p)
                    }, [n, w, m, p]), (0, g.useEffect)(function() {
                        setTimeout(function() {
                            (0, nW.lO)({
                                query: nQ(nQ({}, (0, nP.SJ)()), {}, (0, O.Z)({}, n$, void 0)),
                                emitChange: !1
                            })
                        })
                    }, []), (0, g.useEffect)(function() {
                        return d && !r.isActive(n0) && setTimeout(function() {
                                r({
                                    id: n0,
                                    position: "bottom-left",
                                    render: function(e) {
                                        var t = e.onClose;
                                        return nq({
                                            onClose: function() {
                                                null == c || c({
                                                    remove: ["needsEditorOnboarding"]
                                                }), t()
                                            },
                                            startTour: o
                                        })
                                    },
                                    isClosable: !0,
                                    duration: null
                                })
                            }, 2e3),
                            function() {
                                r.isActive(n0) && r.close(n0)
                            }
                    }, [c, d, o, r]), (0, g.useEffect)(function() {
                        if ((0, nE.s2)()) {
                            var e = document.querySelector(v.scrollSelector);
                            if (e) {
                                y(e);
                                var t = function() {
                                    b && (0, nE.s2)() && (null == b ? void 0 : b.scrollTop) >= (null == b ? void 0 : b.scrollHeight) / 4 && k && !r.isActive(n1) && !f.current && (f.current = !0, r({
                                        id: n1,
                                        position: "top",
                                        render: function(e) {
                                            return nJ({
                                                onClose: e.onClose
                                            })
                                        },
                                        isClosable: !0,
                                        duration: null,
                                        containerStyle: {
                                            minWidth: "100%",
                                            display: "flex",
                                            justifyContent: "center"
                                        }
                                    }))
                                };
                                return window.addEventListener("scroll", t, !0),
                                    function() {
                                        window.removeEventListener("scroll", t, !0), r.isActive(n1) && r.close(n1)
                                    }
                            }
                        }
                    }, [i, b, v.scrollSelector, k, r]), {
                        showDocWizardFooter: I
                    }
                };

            function n5(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function n3(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n5(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n5(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var n6 = (0, g.memo)(function(e) {
                var t, n = e.interactionId,
                    r = (0, _.CG)(t_.yx),
                    i = null != r && !!r.theme && (0, tY.wj)(null == r ? void 0 : r.theme),
                    o = (0, g.useState)(!1),
                    s = o[0],
                    c = o[1],
                    d = (0, ek.p)(),
                    u = null == r ? void 0 : null === (t = r.accessLinks) || void 0 === t ? void 0 : t[0],
                    f = (0, g.useMemo)(function() {
                        return (0, nP.Gn)({
                            docTitle: null == r ? void 0 : r.title,
                            docId: null == r ? void 0 : r.id,
                            token: null == u ? void 0 : u.token,
                            absolute: !0
                        })
                    }, [r, null == u ? void 0 : u.token]),
                    m = (0, eS.V)(f).onCopy,
                    x = (0, g.useCallback)(function() {
                        (0, nI.J)({
                            docId: null == r ? void 0 : r.id,
                            source: "docWizardFooter",
                            type: "tokenUrl"
                        }), m(), d({
                            title: (0, X.jsx)(a.cC, {
                                id: "pQjjYo"
                            }),
                            status: "success",
                            position: "top",
                            duration: 1e3,
                            isClosable: !1
                        })
                    }, [null == r ? void 0 : r.id, m, d]),
                    v = (0, g.useCallback)(function() {
                        c(!0)
                    }, []);
                return r ? (0, X.jsx)(h.Wk, {
                    isDark: i,
                    children: (0, X.jsx)(l.k, {
                        className: "chakra-dont-set-collapse",
                        "data-doc-wizard-footer": !0,
                        w: "100%",
                        mt: (0, nE.s2)() ? void 0 : "-".concat(nS.m),
                        children: (0, X.jsx)(nb.U, { in: !s,
                            style: {
                                width: "100%"
                            },
                            unmountOnExit: !0,
                            children: (0, X.jsx)(l.k, n3(n3({
                                pt: [10, 10, 20],
                                pb: [4, 4, 8],
                                w: "100%",
                                position: "relative"
                            }, i ? {
                                background: "gray.900",
                                color: "white",
                                borderTop: "2px solid var(--chakra-colors-whiteAlpha-200)"
                            } : {
                                background: "white",
                                color: void 0,
                                borderTop: "2px solid var(--chakra-colors-blackAlpha-200)"
                            }), {}, {
                                children: (0, X.jsx)(ny.W, {
                                    maxW: "420px",
                                    children: (0, X.jsxs)(B.K, {
                                        spacing: 8,
                                        children: [(0, X.jsxs)(B.K, {
                                            spacing: 4,
                                            textAlign: "center",
                                            children: [(0, X.jsx)(q.X, {
                                                size: "md",
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "bB+DHs"
                                                })
                                            }), (0, X.jsx)(J.z, {
                                                leftIcon: (0, X.jsx)(p.G, {
                                                    icon: nj.nN
                                                }),
                                                variant: "solid",
                                                onClick: x,
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "RGCCrg"
                                                })
                                            }), (0, X.jsx)(J.z, {
                                                as: nw(),
                                                target: (0, nE.Q5)() ? "_self" : "_blank",
                                                variant: "plain",
                                                colorScheme: i ? "blackAlpha" : "whiteAlpha",
                                                leftIcon: (0, X.jsx)(p.G, {
                                                    icon: nv.r8
                                                }),
                                                rightIcon: (0, nE.Q5)() ? void 0 : (0, X.jsx)(p.G, {
                                                    icon: ng.faArrowUpRightFromSquare,
                                                    size: "xs"
                                                }),
                                                href: nk.ET,
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "xFxi2V"
                                                })
                                            })]
                                        }), (0, X.jsx)(nF, {
                                            docId: r.id,
                                            isDark: i,
                                            interactionId: n
                                        }), (0, X.jsx)(ne.M, {
                                            pt: [0, 0, 4],
                                            w: "100%",
                                            children: (0, X.jsx)(J.z, {
                                                size: "sm",
                                                onClick: v,
                                                variant: "text",
                                                colorScheme: "blackAlpha",
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "vLyv1R"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }))
                        })
                    })
                }) : null
            });
            n6.displayName = "DocWizardFooterInner";
            var n4 = function(e) {
                    var t = e.editor,
                        n = n2({
                            editor: t
                        }).showDocWizardFooter,
                        r = (0, _.CG)((0, nO.oH)(null == t ? void 0 : t.gammaDocId)),
                        i = null == r ? void 0 : r.id;
                    return n && i ? (0, X.jsx)(n6, {
                        interactionId: i
                    }) : (0, X.jsx)(X.Fragment, {})
                },
                n8 = n(98537),
                n7 = n.n(n8),
                n9 = n(13302),
                re = function(e) {
                    var t = e.onCloneClick,
                        n = e.onSignupClick,
                        r = e.isLoggedIn;
                    return (0, X.jsx)(u.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        display: "column",
                        p: 4,
                        position: "relative",
                        children: r ? (0, X.jsxs)(V.U, {
                            children: [(0, X.jsxs)(d.x, {
                                mr: 1,
                                children: [(0, X.jsx)(a.cC, {
                                    id: "HMsJrS",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    },
                                    components: {
                                        0: (0, X.jsx)("strong", {})
                                    }
                                }), " ", "\uD83D\uDE0D"]
                            }), (0, X.jsx)(J.z, {
                                variant: "solid",
                                onClick: t,
                                children: (0, X.jsx)(a.cC, {
                                    id: "he3ygx"
                                })
                            })]
                        }) : (0, X.jsxs)(V.U, {
                            children: [(0, X.jsxs)(d.x, {
                                mr: 1,
                                children: [(0, X.jsx)(a.cC, {
                                    id: "FEyEJk",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc,
                                        GAMMA_PROPER_NOUN: er.N6
                                    },
                                    components: {
                                        0: (0, X.jsx)("strong", {})
                                    }
                                }), " ", "\uD83D\uDE0D"]
                            }), (0, X.jsx)(nw(), {
                                href: "/signup",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, X.jsx)(J.z, {
                                    as: eI.r,
                                    onClick: n,
                                    variant: "solid",
                                    textDecoration: "none !important",
                                    children: (0, X.jsx)(a.cC, {
                                        id: "e+RpCP"
                                    })
                                })
                            })]
                        })
                    })
                },
                rt = function(e) {
                    var t = !(0, nE.s2)(),
                        n = (0, tP.SE)().user,
                        r = (0, ek.p)(),
                        i = (0, g.useRef)(),
                        o = (0, n9.e)(),
                        s = (0, g.useCallback)(function() {
                            e && (null === th.co || void 0 === th.co || th.co.track(th.AA.EXAMPLE_SIGNUP_CLICKED, {
                                doc_id: e.id,
                                title: e.title
                            }))
                        }, [e]),
                        a = (0, g.useCallback)(function() {
                            o({
                                docId: null == e ? void 0 : e.id,
                                docTitle: null == e ? void 0 : e.title,
                                source: "example_deck_clone_toast"
                            })
                        }, [e, o]);
                    (0, g.useEffect)(function() {
                        return function() {
                            i.current && r.close(i.current)
                        }
                    }, [r]);
                    var c = t && e,
                        l = !!n;
                    (0, t2.vm)(function() {
                        i.current && r.close(i.current), c && (i.current = r({
                            position: "bottom",
                            render: function() {
                                return re({
                                    onCloneClick: a,
                                    isLoggedIn: l,
                                    onSignupClick: s
                                })
                            },
                            isClosable: !0,
                            duration: null
                        }))
                    }, [e, t, a, s, c, n, r, l], [c, l])
                },
                rn = n(73238),
                rr = n(10030),
                ri = n(81510),
                ro = "sessionId1",
                rs = tb.hj.create({
                    addStorage: function() {
                        return {
                            user: {}
                        }
                    },
                    addCommands: function() {
                        var e = this;
                        return {
                            user: function(t) {
                                return function() {
                                    var n = (0, _.bh)();
                                    return e.storage.user = n7()({}, e.storage.user, t), n.dispatch((0, L.MU)({
                                        sessionId: ro
                                    })), n.dispatch((0, L.Tx)({
                                        collaborators: [e.storage.user]
                                    })), !0
                                }
                            }
                        }
                    }
                }),
                ra = function(e) {
                    var t, n = e.docId,
                        r = e.snapshotId,
                        i = e.scrollingParentSelector,
                        o = e.onCreate,
                        s = (0, _.CG)(t_.yx);
                    rt(s);
                    var a = (0, g.useState)(function() {
                            return [rr.$1.configure({
                                scrollerSelector: i
                            }), rs, rn._g]
                        })[0],
                        c = (0, tP.SE)(),
                        d = c.user,
                        f = c.anonymousUser,
                        p = c.isUserLoading,
                        h = c.color,
                        m = (0, g.useState)(),
                        x = m[0],
                        v = m[1],
                        b = (0, j.EDv)({
                            variables: {
                                docId: n,
                                snapshotId: r
                            },
                            skip: !r
                        }),
                        y = b.data,
                        C = b.loading,
                        w = b.error;
                    (0, g.useEffect)(function() {
                        !p && x && x.commands.user({
                            id: (null == d ? void 0 : d.id) || f.id,
                            color: h.value,
                            sessionId: ro,
                            idleSince: null,
                            name: (null == d ? void 0 : d.displayName) || f.displayName || "",
                            profileImageUrl: (null == d ? void 0 : d.profileImageUrl) || "",
                            isReady: !p
                        })
                    }, [x, d, h, p, f]);
                    var O = y && void 0 !== y.snapshot && !C && s;
                    return (0, X.jsxs)(u.xu, {
                        "data-testid": "example-static-editor-wrapper",
                        flex: "1",
                        height: "100%",
                        children: [!O || w ? (0, X.jsxs)(l.k, {
                            direction: "column",
                            height: "100%",
                            flex: "1",
                            bg: "gray.100",
                            alignItems: "center",
                            justifyContent: "center",
                            children: [!O && (0, X.jsx)(nt.$, {}), w && (0, X.jsxs)(ne.M, {
                                h: "100%",
                                children: ["There was an error loading this ", er.Yc, ":", " ", w.message]
                            })]
                        }) : (0, X.jsx)(u.xu, {
                            "data-testid": "example-static-editor-wrapper-inner",
                            transitionProperty: "common",
                            transitionDuration: "750ms",
                            transitionTimingFunction: "ease-out",
                            opacity: O ? 1 : 0,
                            children: (0, X.jsx)(eu.yE, {
                                doc: s,
                                editorId: "main",
                                docId: n,
                                extensions: a,
                                onCreate: function(e) {
                                    var t = e.editor;
                                    v(t), setTimeout(function() {
                                        o && o(t)
                                    }, 10)
                                },
                                readOnly: !0,
                                initialContent: null === (t = y.snapshot) || void 0 === t ? void 0 : t.content.default,
                                scrollingParentSelector: i
                            })
                        }), (0, X.jsx)(ri.m, {})]
                    })
                },
                rc = n(69895),
                rl = "sessionId1",
                rd = tb.hj.create({
                    addStorage: function() {
                        return {
                            user: {}
                        }
                    },
                    addCommands: function() {
                        var e = this;
                        return {
                            user: function(t) {
                                return function() {
                                    var n = (0, _.bh)();
                                    return e.storage.user = n7()({}, e.storage.user, t), n.dispatch((0, L.MU)({
                                        sessionId: rl
                                    })), n.dispatch((0, L.Tx)({
                                        collaborators: [e.storage.user]
                                    })), !0
                                }
                            }
                        }
                    }
                }),
                ru = function(e) {
                    var t, n = e.docId,
                        r = e.snapshotId,
                        i = e.scrollingParentSelector,
                        o = e.onCreate,
                        s = e.theme,
                        a = e.showMadeWithGammaBadge,
                        c = (0, g.useState)(function() {
                            return [rr.$1.configure({
                                scrollerSelector: i
                            }), rd, rn._g]
                        })[0],
                        d = (0, tP.SE)(),
                        f = d.user,
                        p = d.isUserLoading,
                        h = d.anonymousUser,
                        m = d.color,
                        x = (0, g.useState)(),
                        v = x[0],
                        b = x[1],
                        y = (0, j.EDv)({
                            variables: {
                                docId: n,
                                snapshotId: r
                            },
                            skip: !r
                        }),
                        C = y.data,
                        w = y.loading,
                        O = y.error,
                        k = (0, _.CG)(t_.yx);
                    (0, g.useEffect)(function() {
                        !p && v && v.commands.user({
                            id: (null == f ? void 0 : f.id) || h.id,
                            color: m.value,
                            sessionId: rl,
                            idleSince: null,
                            name: (null == f ? void 0 : f.displayName) || h.displayName || "",
                            profileImageUrl: (null == f ? void 0 : f.profileImageUrl) || "",
                            isReady: !p
                        })
                    }, [v, f, m, p, h]);
                    var I = C && void 0 !== C.snapshot && !w && k;
                    return (0, X.jsxs)(u.xu, {
                        "data-testid": "public-static-editor-wrapper",
                        flex: "1",
                        height: "100%",
                        children: [!I || O ? (0, X.jsxs)(l.k, {
                            direction: "column",
                            height: "100%",
                            flex: "1",
                            bg: "gray.100",
                            alignItems: "center",
                            justifyContent: "center",
                            children: [!I && (0, X.jsx)(nt.$, {}), O && (0, X.jsxs)(ne.M, {
                                h: "100%",
                                children: ["There was an error loading this ", er.Yc, ":", " ", O.message]
                            })]
                        }) : (0, X.jsx)(u.xu, {
                            "data-testid": "public-static-editor-wrapper-inner",
                            transitionProperty: "common",
                            transitionDuration: "750ms",
                            transitionTimingFunction: "ease-out",
                            opacity: I ? 1 : 0,
                            children: (0, X.jsx)(eu.yE, {
                                doc: k,
                                editorId: "main",
                                docId: n,
                                theme: s || void 0,
                                extensions: c,
                                onCreate: function(e) {
                                    var t = e.editor;
                                    b(t), setTimeout(function() {
                                        o && o(t)
                                    }, 10)
                                },
                                readOnly: !0,
                                initialContent: null === (t = C.snapshot) || void 0 === t ? void 0 : t.content.default,
                                scrollingParentSelector: i
                            })
                        }), v && (0, X.jsx)(tE, {
                            editor: v,
                            backoffFactor: 2
                        }), (void 0 === a || a) && (0, X.jsx)(ri.m, {})]
                    })
                },
                rf = n(16019);

            function rp(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function rh(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rp(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rp(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var rm = (o = {}, (0, O.Z)(o, tO.q.DOC_VIEW, "doc"), (0, O.Z)(o, tO.q.SLIDE_VIEW, "present"), o),
                rx = function(e) {
                    var t = (0, v.I0)(),
                        n = (0, nP.SJ)().mode,
                        r = (0, _.CG)(L.gh),
                        i = (0, g.useCallback)(function(e) {
                            var t = e || r,
                                n = (0, nP.SJ)().mode,
                                i = rm[t];
                            n !== i && (0, nW.lO)({
                                query: rh(rh({}, (0, nP.SJ)()), {}, {
                                    mode: i
                                }),
                                emitChange: !1
                            })
                        }, [r]);
                    (0, rf.r)(i, [r]), (0, g.useEffect)(function() {
                        return nW.fI.on("changed", function() {
                            return i()
                        })
                    }, [i]), (0, t2.vm)(function() {
                        if (e) {
                            var r = n === rm.SLIDE_VIEW ? tO.q.SLIDE_VIEW : tO.q.DOC_VIEW,
                                o = (0, nP.sY)().cardId;
                            r === tO.q.SLIDE_VIEW && (o ? (console.debug("[useQuerySync] initializeModeFromQuery - Entering slide view -> spotlightCardById:", o), e.commands.spotlightCardById(o)) : (console.debug("[useQuerySync] initializeModeFromQuery - Entering slide view -> spotlightCurrentCard"), e.commands.spotlightCurrentCard())), t((0, L.PM)({
                                mode: r
                            })), i(r)
                        }
                    }, [e, t, n, i], [e])
                },
                rg = n(87202),
                rv = n(31358),
                rj = n(75393),
                rb = n(10469),
                ry = n(27440),
                rC = n(71170),
                rw = n(56241),
                rO = n(63522),
                rk = n(91122),
                rI = n(27231),
                rS = n(68093),
                rE = (0, rg.ZP)("mod+Escape"),
                rP = new Set(["h", "j", "k", "l", "s", "PageUp", "PageDown", "ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Enter", "Escape"]),
                rD = function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = (0, ty.cC)("editor"),
                        i = r.scroller;
                    if (i) {
                        e.commands.turnOffSpotlight();
                        var o = i.scrollHeight - i.offsetHeight;
                        if ("down" === t) {
                            if (!(r.isAtBottom(90) && n && e.commands.spotlightNextCard(!1, "top"))) {
                                var s = i.scrollTop + .5 * i.offsetHeight;
                                s > o - 150 && (s = o), r.scrollTo({
                                    top: s
                                })
                            }
                        } else if (!(r.isAtTop(90) && n && e.commands.spotlightNextCard(!0, "bottom"))) {
                            var a = i.scrollTop - .5 * i.offsetHeight;
                            a < 150 && (a = 0), r.scrollTo({
                                top: a
                            })
                        }
                    }
                },
                rA = function(e) {
                    var t = e.enabled,
                        n = e.setActiveKey,
                        r = (0, th.z$)(),
                        i = (0, _.TL)(),
                        o = (0, tR._i)().editor,
                        s = (0, _.CG)(rO.C),
                        a = (0, rI.g)(o),
                        c = a.enabled,
                        l = a.pos,
                        d = (0, g.useCallback)(function() {
                            c ? null == o || o.commands.turnOffSpotlight() : null == o || o.commands.spotlightNextBlock()
                        }, [null == o ? void 0 : o.commands, c]);
                    return (0, g.useEffect)(function() {
                        if (t) return rv.F7.on("keydown", "NAVIGATION_CONTROLS", function(e) {
                            var t, i, a = (0, _.bh)(),
                                u = e.target,
                                f = Object.keys((0, L.X9)(a.getState()).tree);
                            if (!o || null != u && null !== (t = u.closest) && void 0 !== t && t.call(u, "[data-gamma-child-tiptap-editor]") || null != u && null !== (i = u.closest) && void 0 !== i && i.call(u, "input") || e.metaKey || s) return !1;
                            switch (rP.has(e.key) && ("s" !== e.key && (n(e.key), setTimeout(function() {
                                n(null)
                            }, 100)), e.preventDefault()), e.key) {
                                case "s":
                                    return d(), !0;
                                case "l":
                                case "ArrowRight":
                                    return (0, rk.p7)(), a.dispatch((0, L.Qx)({
                                        attached: !1
                                    })), null == r || r.trackDocEvent(th.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: th.xQ.CARD_NEXT,
                                        method: th.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextCard();
                                case "h":
                                case "ArrowLeft":
                                    return (0, rk.p7)(), a.dispatch((0, L.Qx)({
                                        attached: !1
                                    })), null == r || r.trackDocEvent(th.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: th.xQ.CARD_PREV,
                                        method: th.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextCard(!0);
                                case "j":
                                case "ArrowDown":
                                case "PageDown":
                                    if ((0, rk.p7)(), a.dispatch((0, L.Qx)({
                                            attached: !1
                                        })), !c) {
                                        var p = (0, rn.ei)(o.state.selection);
                                        return o.commands.goToNextExpandableNode() || rD(o, "down", !p), !0
                                    }
                                    return null == r || r.trackDocEvent(th.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: th.xQ.TELEPROMPTER_DOWN,
                                        method: th.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextBlock();
                                case "k":
                                case "ArrowUp":
                                case "PageUp":
                                    if ((0, rk.p7)(), a.dispatch((0, L.Qx)({
                                            attached: !1
                                        })), !c) {
                                        var h = (0, rn.ei)(o.state.selection);
                                        return o.commands.goToNextExpandableNode(!0) || rD(o, "up", !h), !0
                                    }
                                    return null == r || r.trackDocEvent(th.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: th.xQ.TELEPROMPTER_UP,
                                        method: th.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextBlock(!0);
                                case "r":
                                    if (f[0]) return (0, rk.p7)(), o.commands.spotlightCardById(f[0]), a.dispatch((0, L.Qx)({
                                        attached: !1
                                    })), !0;
                                    return !1;
                                case "Escape":
                                    if (rE(e)) return !1;
                                    var m = c && l;
                                    if (o.commands.spotlightCollapseNearestExpandableNode(m ? l : null)) return o.commands.reHighlightExpandableNode(), !0;
                                    if (c) return o.commands.turnOffSpotlight(), !0;
                                    return a.dispatch((0, L.Qx)({
                                        attached: !1
                                    })), null == r || r.track(th.AA.CARD_COLLAPSED, {
                                        is_present_mode: !0,
                                        method: "escape_key"
                                    }), o.commands.ascendUpToParentCard(!1);
                                case "Enter":
                                    var x = c && l;
                                    if (o.commands.expandOrCollapseExpandableNode(x ? l : null)) return !0;
                                    if (x) {
                                        var g = o.state.doc.resolve(l).parent;
                                        if (g && (0, rS.AH)(g)) return (0, rS.xB)(g.attrs.id, !1), o.commands.spotlightNextBlock(!0), !0;
                                        return o.commands.spotlightCollapseNearestExpandableNode(l)
                                    }
                                    return !1;
                                default:
                                    return !1
                            }
                        })
                    }, [o, i, r, t, d, c, l, s, n]), c
                },
                rT = function(e) {
                    var t = new KeyboardEvent("keydown", {
                        key: e
                    });
                    n.g.dispatchEvent(t)
                },
                rR = {
                    ArrowUp: {
                        icon: F.FP,
                        label: (0, X.jsx)(a.cC, {
                            id: "VbggDE"
                        }),
                        ariaLabel: function() {
                            return c.ag._({
                                id: "VbggDE"
                            })
                        },
                        shortcuts: ["↑", "K"],
                        key: "ArrowUp",
                        onClick: function() {
                            rT("ArrowUp")
                        },
                        gridPos: [1, 2]
                    },
                    ArrowLeft: {
                        icon: W.ac,
                        label: (0, X.jsx)(a.cC, {
                            id: "4jciC3"
                        }),
                        ariaLabel: function() {
                            return c.ag._({
                                id: "4jciC3"
                            })
                        },
                        shortcuts: ["←", "H"],
                        key: "ArrowLeft",
                        onClick: function() {
                            rT("ArrowLeft")
                        },
                        gridPos: [2, 1]
                    },
                    ArrowDown: {
                        icon: G.r5,
                        label: (0, X.jsx)(a.cC, {
                            id: "e3GOIZ"
                        }),
                        ariaLabel: function() {
                            return c.ag._({
                                id: "e3GOIZ"
                            })
                        },
                        shortcuts: ["↓", "J"],
                        key: "ArrowDown",
                        onClick: function() {
                            rT("ArrowDown")
                        },
                        gridPos: [2, 2]
                    },
                    ArrowRight: {
                        icon: U.eF,
                        label: (0, X.jsx)(a.cC, {
                            id: "ZjQRVw"
                        }),
                        ariaLabel: function() {
                            return c.ag._({
                                id: "ZjQRVw"
                            })
                        },
                        shortcuts: ["→", "L"],
                        key: "ArrowRight",
                        onClick: function() {
                            rT("ArrowRight")
                        },
                        gridPos: [2, 3]
                    },
                    Spotlight: {
                        icon: rb.GT,
                        label: (0, X.jsx)(a.cC, {
                            id: "Xon9jp"
                        }),
                        ariaLabel: function() {
                            return c.ag._({
                                id: "Xon9jp"
                            })
                        },
                        shortcuts: ["S"],
                        key: "S",
                        onClick: function() {
                            rT("s")
                        },
                        gridPos: [1, 3]
                    }
                },
                r_ = function(e) {
                    var t = e.shortcuts;
                    return (0, X.jsx)(d.x, {
                        as: "span",
                        color: "gray.400",
                        ml: 2,
                        children: t.map(function(e, n) {
                            return (0, X.jsxs)(g.Fragment, {
                                children: [e, n === t.length - 1 ? null : (0, X.jsx)(d.x, {
                                    fontSize: "11px",
                                    as: "span",
                                    color: "gray.500",
                                    mx: 1,
                                    children: "or"
                                })]
                            }, e)
                        })
                    })
                },
                rL = function(e) {
                    var t = e.activeKey,
                        n = e.spotlightingByBlock;
                    return (0, X.jsx)(ep.h, {
                        children: (0, X.jsxs)(u.xu, {
                            position: "absolute",
                            bottom: 4,
                            right: 6,
                            zIndex: "sticky",
                            children: [(0, X.jsx)(q.X, {
                                children: (0, X.jsx)(a.cC, {
                                    id: "wja8aL"
                                })
                            }), (0, X.jsx)(ry.r, {
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gridTemplateRows: "repeat(2, 1fr)",
                                children: Object.values(rR).map(function(e) {
                                    var r = e.gridPos,
                                        i = e.icon,
                                        o = e.label,
                                        s = e.ariaLabel,
                                        a = e.shortcuts,
                                        c = e.key,
                                        l = e.onClick,
                                        u = t === c;
                                    return (0, X.jsx)(rC.P, {
                                        gridColumn: r[1],
                                        gridRow: r[0],
                                        children: (0, X.jsx)(rw.u, {
                                            hasArrow: !0,
                                            placement: "top",
                                            label: (0, X.jsxs)(d.x, {
                                                whiteSpace: "nowrap",
                                                children: [o, (0, X.jsx)(r_, {
                                                    shortcuts: a
                                                })]
                                            }),
                                            children: (0, X.jsx)(D.h, {
                                                m: 1,
                                                shadow: "base",
                                                size: "md",
                                                variant: "S" == c && n ? "solid" : "plain",
                                                isActive: u || "S" === c && n,
                                                onClick: l,
                                                onMouseDown: function(e) {
                                                    return e.preventDefault()
                                                },
                                                "aria-label": s(),
                                                icon: (0, X.jsx)(p.G, {
                                                    icon: i
                                                })
                                            })
                                        })
                                    }, c)
                                })
                            })]
                        })
                    })
                },
                rM = n(5751),
                rz = n(26721),
                rN = n(9088),
                rZ = n(30893),
                rG = n(40771),
                rF = n(8022),
                rU = n(95258),
                rW = n(63849),
                rV = n(2575),
                rH = n(17651),
                rB = n(72466),
                rq = n(6185),
                rK = n.n(rq),
                rY = n(68642),
                rJ = n(27875),
                rX = n.n(rJ),
                rQ = n(18149),
                r$ = n.n(rQ),
                r0 = n(20325),
                r1 = n(68964),
                r2 = {
                    easeOutLinear: r1.gA,
                    easeOutSine: r1.vh,
                    easeOutCubic: r1.w2,
                    easeOutCirc: r1.ei,
                    easeOutQuad: r1.hl,
                    easeOutQuart: r1.Y3,
                    easeOutExpo: r1.ad,
                    bezierCustom1: rK()(.13, .97, .035, .73),
                    bezierCustom2: rK()(.105, 1.15, .15, .355)
                },
                r5 = {
                    UP: "up",
                    DOWN: "down"
                },
                r3 = function(e) {
                    return e ? +new Date - +new Date(e) : 1 / 0
                },
                r6 = function(e, t) {
                    var n = (0, g.useMemo)(function() {
                            return new rY.Lethargy(6, 120, .3, 150)
                        }, []),
                        r = t || {},
                        i = r.easing,
                        o = void 0 === i ? "easeOutCubic" : i,
                        s = r.touchpadFactor,
                        a = void 0 === s ? 1.5 : s,
                        c = r.triggerThreshold,
                        l = void 0 === c ? 1200 : c,
                        d = (0, ty.As)("editor"),
                        u = (0, _.CG)(L.i2),
                        f = (0, g.useRef)(null),
                        p = (0, g.useRef)(null),
                        h = (0, g.useRef)(null),
                        m = (0, g.useRef)(!1),
                        x = (0, g.useRef)(null),
                        v = (0, g.useRef)(null),
                        j = (0, g.useState)(!1),
                        b = j[0],
                        y = j[1],
                        C = (0, g.useState)(!1),
                        w = C[0],
                        O = C[1],
                        k = (0, g.useRef)({
                            counterTarget: 0,
                            counterCurrent: 0,
                            direction: r5.DOWN
                        }),
                        I = (0, g.useCallback)(function() {
                            if (f.current) {
                                var e, t = k.current.counterTarget / l * 100,
                                    n = (null != t ? t : 0) * 2.64,
                                    r = "".concat(n, " ").concat(264 - n),
                                    i = null === (e = f.current.querySelector(".chakra-progress")) || void 0 === e ? void 0 : e.lastElementChild,
                                    o = f.current.querySelector(".chakra-progress__indicator");
                                o && o.setAttribute("stroke-dasharray", r), i && (i.innerHTML = "".concat(t.toFixed(0), "%"))
                            }
                        }, [l]),
                        S = (0, g.useCallback)(function() {
                            var e = h.current,
                                t = p.current;
                            if (t && e) {
                                var n = e.querySelector(".chakra-progress__indicator"),
                                    r = t.querySelector(".chakra-progress__indicator");
                                if (n && r) {
                                    var i = k.current.counterCurrent / l,
                                        s = (550 > r3(v.current) ? 1 : null != i ? i : 0) * 264,
                                        a = "".concat(s, " ").concat(264 - s),
                                        c = Math.max(56 - 56 * r2[o](Math.min(i, 1)), 0);
                                    e.style.transform = "translateY(".concat(c, "px)"), t.style.transform = "translateY(-".concat(c, "px)"), r.setAttribute("stroke-dasharray", a), n.setAttribute("stroke-dasharray", a)
                                }
                            }
                        }, [o, l]),
                        E = (0, g.useCallback)(function() {
                            if (!m.current) {
                                var e;
                                requestAnimationFrame(function t(n) {
                                    var r = e ? n - e : 0;
                                    if (e = n, .1 > Math.abs(k.current.counterTarget - k.current.counterCurrent)) {
                                        k.current.counterCurrent = k.current.counterTarget, S(), m.current = !1;
                                        return
                                    }
                                    k.current.counterCurrent = (0, r1.t7)(k.current.counterCurrent, k.current.counterTarget, rX()(.3 * (60 / (r ? 1e3 / r : 60)), .3, 1)), S(), requestAnimationFrame(t)
                                })
                            }
                        }, [S]),
                        P = (0, g.useCallback)(function() {
                            k.current.counterTarget = 0, y(!1), O(!1), I(), E()
                        }, [E, I]);
                    return (0, g.useEffect)(function() {
                        if (!u || !e) return P();
                        var t, r, i = document.querySelector((0, r0.U8)(u));
                        if (!i) return P();
                        var o = function(t) {
                                if (!t.target.closest("[data-comments-wrapper]")) {
                                    var i = n.check(t);
                                    if (null !== h.current && null !== p.current) {
                                        var o = r3(x.current);
                                        if (!(o < 500) && (!(o < 1e3) || !1 !== i)) {
                                            var s = r3(v.current);
                                            if (!(s < 500) && (!(s < 1e3) || !1 !== i)) {
                                                var c = 0 === Math.abs(t.deltaY) ? k.current.direction : t.deltaY > 0 ? r5.DOWN : r5.UP;
                                                if ("down" === c ? d.isAtBottom() : d.isAtTop()) {
                                                    clearTimeout(r);
                                                    var u = t.wheelDeltaY ? t.wheelDeltaY === -3 * t.deltaY : 0 === t.deltaMode,
                                                        f = Math.abs(void 0 !== t.deltaY ? t.deltaY : 40) * (u ? a : 1);
                                                    if (c !== k.current.direction) {
                                                        k.current.direction = c, P();
                                                        return
                                                    }
                                                    O(c === r5.DOWN), y(c === r5.UP), k.current.counterTarget += f, k.current.direction = c, k.current.counterTarget / l >= 1 ? (e.commands.spotlightNextCard(c === r5.UP, c === r5.UP ? "bottom" : "top"), v.current = +new Date, setTimeout(function() {
                                                        P(), I()
                                                    }, 250), setTimeout(function() {
                                                        v.current = null
                                                    }, 1e3)) : r = setTimeout(P, 500), E(), I()
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            s = function() {
                                x.current = +new Date, clearTimeout(t), P(), t = setTimeout(function() {
                                    x.current = null
                                }, 1e3)
                            };
                        return i.addEventListener("scroll", s), i.addEventListener("wheel", o, {
                                passive: !0
                            }), I(),
                            function() {
                                i.removeEventListener("scroll", s), i.removeEventListener("wheel", o)
                            }
                    }, [e, n, E, o, a, l, d, I, S, P, u]), {
                        debugRef: f,
                        nextCardRef: h,
                        prevCardRef: p,
                        showNextCard: w,
                        showPrevCard: b
                    }
                },
                r4 = function(e) {
                    var t = e.editor,
                        n = (0, y.ye)("debugLogging"),
                        r = (0, g.useState)("easeOutExpo"),
                        i = r[0],
                        o = r[1],
                        s = (0, g.useState)(1.5),
                        a = s[0],
                        c = s[1],
                        l = (0, g.useState)(1200),
                        d = l[0],
                        u = l[1],
                        f = r6(t, {
                            easing: i,
                            touchpadFactor: a,
                            triggerThreshold: d
                        }),
                        p = f.debugRef,
                        h = f.nextCardRef,
                        m = f.prevCardRef,
                        x = f.showNextCard,
                        v = f.showPrevCard,
                        j = (0, _.CG)(function(e) {
                            var t = (0, L.i2)(e) || "",
                                n = (0, L.X9)(e),
                                r = Object.keys((n.parents[t] || []).reduce(function(e, t) {
                                    return e[t]
                                }, n.tree)),
                                i = null,
                                o = null;
                            return r.forEach(function(e, s) {
                                if (e === t) {
                                    var a = n.parents[t];
                                    0 === s ? a.length && (i = {
                                        cardId: a[a.length - 1],
                                        isSibling: !1
                                    }) : i = {
                                        cardId: r[s - 1],
                                        isSibling: !0
                                    }, s === r.length - 1 ? a.length && (o = {
                                        cardId: a[a.length - 1],
                                        isSibling: !1
                                    }) : o = {
                                        cardId: r[s + 1],
                                        isSibling: !0
                                    }
                                }
                            }), {
                                prevCard: i,
                                nextCard: o
                            }
                        }, r$()),
                        b = j.prevCard,
                        C = j.nextCard,
                        w = null == C ? void 0 : C.cardId,
                        O = null == b ? void 0 : b.cardId,
                        k = (0, g.useMemo)(function() {
                            var e = null,
                                n = null;
                            return t && t.state.doc.descendants(function(t) {
                                return !(0, tC.KH)(t) || (t.attrs.id === O ? e = t : t.attrs.id === w && (n = t), !!(!e && O) || !!(!n && w))
                            }), {
                                prev: e,
                                next: n
                            }
                        }, [t, w, O]);
                    return (0, X.jsxs)(X.Fragment, {
                        children: [n && (0, X.jsx)(r8, {
                            ref: p,
                            setEasing: o,
                            setTouchpadFactor: c,
                            setTriggerThreshold: u
                        }), (0, X.jsx)(r7, {
                            ref: m,
                            direction: "up",
                            node: k.prev,
                            enabled: v,
                            offset: 16
                        }), (0, X.jsx)(r7, {
                            ref: h,
                            direction: "down",
                            node: k.next,
                            enabled: x,
                            offset: 24
                        })]
                    })
                },
                r8 = g.forwardRef(function(e, t) {
                    var n = e.setEasing,
                        r = e.setTouchpadFactor,
                        i = e.setTriggerThreshold;
                    return (0, X.jsxs)(l.k, {
                        position: "absolute",
                        alignItems: "center",
                        bg: "gray.100",
                        left: 2,
                        bottom: 16,
                        zIndex: "overlay",
                        borderRadius: "md",
                        border: "solid 2px var(--chakra-colors-trueblue-300)",
                        p: 1,
                        children: [(0, X.jsxs)(rN.v, {
                            closeOnSelect: !1,
                            children: [(0, X.jsx)(rZ.j, {
                                as: J.z,
                                colorScheme: "trueblue",
                                children: "Options"
                            }), (0, X.jsxs)(rG.q, {
                                minWidth: "240px",
                                children: [(0, X.jsx)(h.kH, {
                                    label: "How much total scrolling work do we need to do to trigger next/prev card?",
                                    placement: "right",
                                    children: (0, X.jsxs)(d.x, {
                                        color: "gray",
                                        fontSize: "sm",
                                        fontWeight: "600",
                                        ml: 2,
                                        pb: 2,
                                        children: ["Scroll Threshold", " ", (0, X.jsxs)("i", {
                                            children: ["(default=", 1200, ")"]
                                        })]
                                    })
                                }), (0, X.jsxs)(rF.Y2, {
                                    defaultValue: 1200,
                                    min: 100,
                                    max: 1e4,
                                    precision: 0,
                                    step: 100,
                                    onChange: function(e, t) {
                                        return i(t)
                                    },
                                    children: [(0, X.jsx)(rF.zu, {}), (0, X.jsxs)(rF.Fi, {
                                        children: [(0, X.jsx)(rF.WQ, {}), (0, X.jsx)(rF.Y_, {})]
                                    })]
                                }), (0, X.jsx)(rU.R, {}), (0, X.jsx)(h.kH, {
                                    label: "How much extra weight do we give to touchpad scroll events?",
                                    placement: "right",
                                    children: (0, X.jsxs)(d.x, {
                                        color: "gray",
                                        fontSize: "sm",
                                        fontWeight: "600",
                                        ml: 2,
                                        pb: 2,
                                        children: ["Touchpad Multiplier", " ", (0, X.jsxs)("i", {
                                            children: ["(default=", 1.5, ")"]
                                        })]
                                    })
                                }), (0, X.jsxs)(rF.Y2, {
                                    defaultValue: 1.5,
                                    min: 1,
                                    max: 10,
                                    precision: 1,
                                    step: .1,
                                    onChange: function(e, t) {
                                        return r(t)
                                    },
                                    children: [(0, X.jsx)(rF.zu, {}), (0, X.jsxs)(rF.Fi, {
                                        children: [(0, X.jsx)(rF.WQ, {}), (0, X.jsx)(rF.Y_, {})]
                                    })]
                                }), (0, X.jsx)(rU.R, {}), (0, X.jsxs)(rW._, {
                                    defaultValue: "easeOutExpo",
                                    title: "Easing (of peek element)",
                                    type: "radio",
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    children: [(0, X.jsx)(rV.i, {
                                        value: "easeOutLinear",
                                        children: "easeOutLinear"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutSine",
                                        children: "easeOutSine"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutCubic",
                                        children: "easeOutCubic"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutCirc",
                                        children: "easeOutCirc"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutQuad",
                                        children: "easeOutQuad"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutQuart",
                                        children: "easeOutQuart"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "easeOutExpo",
                                        children: "easeOutExpo"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "bezierCustom1",
                                        children: "bezierCustom1"
                                    }), (0, X.jsx)(rV.i, {
                                        value: "bezierCustom2",
                                        children: "bezierCustom2"
                                    })]
                                })]
                            })]
                        }), (0, X.jsx)(l.k, {
                            ref: t,
                            direction: "column",
                            alignItems: "center",
                            width: "85px",
                            ml: 1,
                            sx: {
                                ".chakra-progress__indicator": {
                                    transition: "none !important",
                                    opacity: 1
                                }
                            },
                            children: (0, X.jsx)(rH.D, {
                                value: 40,
                                color: "trueblue.500",
                                children: (0, X.jsx)(rB.i, {})
                            })
                        })]
                    })
                });
            r8.displayName = "PeekDebugger";
            var r7 = g.forwardRef(function(e, t) {
                var n = e.direction,
                    r = e.enabled,
                    i = e.node,
                    o = e.offset,
                    s = (0, g.useState)(!1),
                    a = s[0],
                    c = s[1],
                    u = (0, g.useState)(i),
                    f = u[0],
                    h = u[1];
                (0, g.useEffect)(function() {
                    c(!0);
                    var e = setTimeout(function() {
                        c(!1), h(i)
                    }, 550);
                    return function() {
                        clearTimeout(e)
                    }
                }, [i]);
                var m = (0, g.useMemo)(function() {
                        return f ? (0, eD.getCardTitle)(f.toJSON()) : ""
                    }, [f]),
                    x = !!f;
                return (0, X.jsx)(l.k, {
                    ref: t,
                    pointerEvents: "none",
                    position: "absolute",
                    justifyContent: "center",
                    width: "100%",
                    zIndex: "overlay",
                    top: "up" === n ? "".concat(o, "px") : "inherit",
                    bottom: "down" === n ? "".concat(o, "px") : "inherit",
                    children: (0, X.jsxs)(l.k, {
                        bg: "gray.100",
                        borderRadius: "md",
                        boxShadow: "md",
                        h: "".concat(40, "px"),
                        maxWidth: "450px",
                        justifyContent: "center",
                        opacity: r ? 1 : 0,
                        transition: "opacity ".concat(300, "ms ease-out"),
                        textAlign: "center",
                        alignItems: "center",
                        direction: "row",
                        px: 2,
                        sx: {
                            ".chakra-progress__indicator": {
                                transition: "none !important",
                                opacity: 1
                            }
                        },
                        children: [(0, X.jsx)(rH.D, {
                            display: x ? "block" : "none",
                            color: "trueblue.500",
                            size: "20px",
                            thickness: "16px",
                            children: (0, X.jsx)(rB.i, {
                                visibility: a ? "visible" : "hidden",
                                children: (0, X.jsx)(p.G, {
                                    icon: nD.faCircleCheck,
                                    fontSize: "14px",
                                    style: {
                                        color: "var(--chakra-colors-gray-100)",
                                        backgroundColor: "var(--chakra-colors-trueblue-500)",
                                        borderRadius: "10px"
                                    }
                                })
                            })
                        }), x || "up" !== n ? x || "down" !== n ? null : (0, X.jsx)(p.G, {
                            icon: rM.m5,
                            size: "xs",
                            color: "var(--chakra-colors-gray-600)"
                        }) : (0, X.jsx)(p.G, {
                            icon: rz.yt,
                            size: "xs",
                            color: "var(--chakra-colors-gray-600)"
                        }), (0, X.jsx)(l.k, {
                            width: 1
                        }), (0, X.jsx)(d.x, {
                            noOfLines: 1,
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                            fontSize: "md",
                            color: x ? "gray.800" : "gray.600",
                            px: 2,
                            children: x ? m : "down" === n ? "End of presentation" : "Start of presentation"
                        })]
                    })
                })
            });
            r7.displayName = "PeekCardTab";
            var r9 = n(12741),
                ie = function() {
                    var e = (0, g.useState)(["", [], {}]),
                        t = e[0],
                        n = e[1],
                        r = (0, _.qr)();
                    return (0, g.useEffect)(function() {
                        return r.subscribe(function() {
                            var e = r.getState(),
                                t = (0, L.X9)(e),
                                i = (0, L.i2)(e) || "",
                                o = t.parents[i] || [],
                                s = {};
                            Object.keys(t.tree).forEach(function(e) {
                                var n = [];
                                (function e(t) {
                                    Object.keys(t).forEach(function(r) {
                                        n.push(r), e(t[r])
                                    })
                                })(t.tree[e]), s[e] = n
                            }), n([i, o, s])
                        })
                    }, [r]), t
                },
                it = function() {
                    var e = ie(),
                        t = (0, k.Z)(e, 3),
                        n = t[0],
                        r = t[1],
                        i = t[2],
                        o = Object.keys(i);
                    return (0, X.jsx)(V.U, {
                        position: "fixed",
                        bottom: 0,
                        w: "100vw",
                        zIndex: 10,
                        background: "blackAlpha.200",
                        px: "6px",
                        py: "2px",
                        align: "end",
                        spacing: "2px",
                        opacity: n ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "normal",
                        children: o.map(function(e, t) {
                            var s = [].concat((0, r9.Z)(r), [n])[0],
                                a = o.indexOf(s),
                                c = i[s],
                                l = 0,
                                d = 100;
                            return n && c && -1 === o.indexOf(n) && (l = (c.indexOf(n) + 1) / c.length * 100, d = 1 / c.length * 100), (0, X.jsx)(io, {
                                cardId: e,
                                state: t === a ? "current" : t <= a ? "prev" : "next",
                                percent: l,
                                unit: d
                            }, e)
                        })
                    })
                },
                ir = "var(--chakra-colors-trueblue-200)",
                ii = "var(--chakra-colors-trueblue-100)",
                io = function(e) {
                    var t = e.cardId,
                        n = e.state,
                        r = e.percent,
                        i = e.unit,
                        o = "linear-gradient(to right, ".concat(ir, " 0% ").concat(r, "%, ").concat("var(--chakra-colors-trueblue-300)", " ").concat(r, "% ").concat(r + i, "%, ").concat(ii, " ").concat(r + i, "% 100%)");
                    return (0, X.jsx)(l.k, {
                        borderRadius: "2px",
                        flex: "1",
                        h: "6px",
                        bg: "current" === n ? o : "prev" === n ? ir : ii
                    }, t)
                },
                is = (0, rg.ZP)("Esc"),
                ia = function(e) {
                    var t = e.editor,
                        n = e.showNavigationControls,
                        r = (0, v.v9)(L.gh) === tO.q.SLIDE_VIEW,
                        i = (0, g.useState)(null),
                        o = i[0],
                        s = i[1],
                        c = (0, v.v9)(L.JA),
                        u = (0, g.useRef)(c),
                        f = (0, v.I0)(),
                        p = rA({
                            enabled: r && !c,
                            setActiveKey: s
                        });
                    return (0, g.useEffect)(function() {
                        f((0, L.e)({
                            isEditingInSlideView: !1
                        }))
                    }, [r, f]), u.current = c, (0, g.useEffect)(function() {
                        return rv.F7.on("keydown", "SLIDE_VIEW", function(e) {
                            return !!(u.current && is(e)) && (f((0, L.e)({
                                isEditingInSlideView: !1
                            })), e.preventDefault(), !0)
                        })
                    }, [f]), (0, rj.us)(), (0, X.jsxs)(X.Fragment, {
                        children: [r && (0, X.jsx)(r4, {
                            editor: t
                        }), r && (0, X.jsx)(it, {}), r && (0, X.jsx)(l.k, {
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            justify: "flex-end",
                            children: (0, X.jsxs)(l.k, {
                                bg: "gray.50",
                                position: "fixed",
                                bottom: 6,
                                right: 6,
                                p: 3,
                                px: 6,
                                justify: "flex-end",
                                align: "center",
                                opacity: c ? 1 : 0,
                                pointerEvents: c ? "auto" : "none",
                                transitionProperty: "opacity, transform",
                                transitionDuration: "normal",
                                transitionTimingFunction: "ease",
                                transform: c ? "translate(0,0)" : "translate(0,100%)",
                                borderRadius: "md",
                                shadow: "md",
                                zIndex: "overlay",
                                children: [(0, X.jsx)(d.x, {
                                    size: "sm",
                                    mr: 3,
                                    children: (0, X.jsx)(a.cC, {
                                        id: "DjD/sG"
                                    })
                                }), (0, X.jsx)(J.z, {
                                    size: "sm",
                                    variant: "solid",
                                    onClick: function() {
                                        return f((0, L.e)({
                                            isEditingInSlideView: !1
                                        }))
                                    },
                                    children: (0, X.jsx)(a.cC, {
                                        id: "DPfwMq"
                                    })
                                })]
                            })
                        }), r && n && (0, X.jsx)(rL, {
                            activeKey: o,
                            spotlightingByBlock: p
                        })]
                    })
                },
                ic = n(85946),
                il = n(13414),
                id = n(28339),
                iu = n(55523),
                ip = n(83484),
                ih = n(6110),
                im = n(75695),
                ix = n(83906),
                ig = n(85745),
                iv = n(93848),
                ij = n(95203),
                ib = n(62142),
                iy = function(e) {
                    var t = e.editor,
                        n = e.start,
                        r = (0, y.ye)("aiRewrite"),
                        i = (0, eE.ff)("gray.100", "gray.700"),
                        o = (0, g.useCallback)(function(e) {
                            var r = (0, ig.zm)(),
                                i = t.view.state.doc.nodeAt(n);
                            if (!i) {
                                console.error("[Filmstrip] Cannot append card. Node unknown");
                                return
                            }
                            var o = n + i.nodeSize,
                                s = ig.e1.blankCard;
                            e && (s = ig.e1[e]);
                            var a = e ? th.fe.FILMSTRIP_DROPDOWN : th.fe.FILMSTRIP,
                                c = e ? r[e] : r.blankCard;
                            (0, ig.ZT)(c, a), t.chain().insertContentAt(o, (0, ib.Zs)(s)).focus().selectInsertedNode().run()
                        }, [t, n]);
                    return (0, X.jsxs)(tV.h, {
                        w: "100%",
                        size: "xs",
                        isAttached: !0,
                        variant: "plain",
                        shadow: "md",
                        borderRadius: "md",
                        children: [(0, X.jsx)(h.kH, {
                            label: (0, X.jsx)(a.cC, {
                                id: "7iE+3N"
                            }),
                            children: (0, X.jsx)(D.h, {
                                flex: 2,
                                className: "insert-card-button",
                                variant: "plain",
                                "aria-label": c.ag._({
                                    id: "g+7nXG"
                                }),
                                icon: (0, X.jsx)(p.G, {
                                    icon: nv.r8
                                }),
                                onClick: function() {
                                    return o()
                                },
                                onMouseDown: e1.Wg,
                                shadow: "none",
                                borderRadius: "md",
                                minW: 12,
                                transitionProperty: "none",
                                borderColor: i
                            })
                        }), r && (0, X.jsx)(h.kH, {
                            label: (0, X.jsx)(a.cC, {
                                id: "kLZLXX"
                            }),
                            children: (0, X.jsx)(D.h, {
                                flex: 2,
                                borderLeft: "none",
                                className: "insert-ai-card-button",
                                variant: "plain",
                                "aria-label": c.ag._({
                                    id: "g+7nXG"
                                }),
                                icon: (0, X.jsx)(V.U, {
                                    spacing: 0,
                                    children: (0, X.jsx)(p.G, {
                                        icon: im.KC
                                    })
                                }),
                                onClick: function() {
                                    iv.pw.emit("queueDesignPartnerTask", {
                                        message: c.ag._({
                                            id: "JoMQgx",
                                            values: {
                                                placeholder: ""
                                            }
                                        }),
                                        submit: !1
                                    })
                                },
                                onMouseDown: e1.Wg,
                                shadow: "none",
                                borderRadius: "md",
                                minW: 12,
                                transitionProperty: "none",
                                borderColor: i
                            })
                        }), (0, X.jsxs)(rN.v, {
                            children: [(0, X.jsx)(h.kH, {
                                label: (0, X.jsx)(a.cC, {
                                    id: "UgOs5x"
                                }),
                                children: (0, X.jsx)(rZ.j, {
                                    borderLeft: "none",
                                    as: D.h,
                                    color: "gray.400",
                                    icon: (0, X.jsx)(ix.v, {}),
                                    fontSize: "md",
                                    shadow: "none",
                                    borderRadius: "md",
                                    minW: "6",
                                    flex: 1,
                                    borderColor: i,
                                    transitionProperty: "none",
                                    "data-guider-highlight": "add-card-template-button",
                                    onMouseDown: e1.Wg
                                })
                            }), (0, X.jsx)(ep.h, {
                                children: (0, X.jsx)(ij.u, {
                                    editor: t,
                                    appendCard: o
                                })
                            })]
                        })]
                    })
                },
                iC = n(64457),
                iw = n(28965);

            function iO(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ik(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? iO(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iO(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var iI = function(e) {
                    var t = (0, iC.i)(e),
                        n = t.content,
                        r = t.selection,
                        i = !!(null != n && n.content),
                        o = (0, g.useMemo)(function() {
                            if (!i) return [];
                            var e, t = n.content,
                                r = (null == t ? void 0 : t[0].content) || [],
                                o = null === (e = n.content) || void 0 === e ? void 0 : e[0].attrs;
                            return r.map(function(e) {
                                var t;
                                return o && null !== (t = e.attrs) && void 0 !== t && t.id ? {
                                    cardId: e.attrs.id,
                                    isDragging: !1,
                                    displayBehavior: "normal",
                                    previewJson: {
                                        type: "doc",
                                        content: [{
                                            type: "document",
                                            content: [e],
                                            attrs: o
                                        }]
                                    }
                                } : null
                            }).filter(function(e) {
                                return null !== e
                            })
                        }, [n, i]),
                        s = (0, _.CG)(iw.ZD).map(function(e) {
                            var t = o.find(function(t) {
                                return t.cardId === e.cardId
                            });
                            return t ? ik(ik({}, e), {}, {
                                previewJson: t.previewJson
                            }) : null
                        }).filter(function(e) {
                            return null !== e
                        }),
                        a = (0, _.CG)(iw.Ae);
                    return {
                        isDragging: a,
                        cards: a ? s : o,
                        selection: r,
                        isLoaded: i
                    }
                },
                iS = n(62642),
                iE = n(29600),
                iP = n(21875),
                iD = (0, g.memo)(function(e) {
                    var t = e.docJson,
                        n = e.theme,
                        r = (0, _.CG)(L.yx),
                        i = (0, g.useMemo)(function() {
                            return {
                                doc: r
                            }
                        }, [r]);
                    return (0, X.jsx)(l.k, {
                        sx: t$.n,
                        css: {
                            "--editor-font-size": "0.125rem",
                            "--editor-width": "125px"
                        },
                        justifyContent: "center",
                        overflow: "hidden",
                        pointerEvents: "none",
                        children: (0, X.jsx)(t$.m, {
                            content: t,
                            theme: n,
                            isThumbnail: !0,
                            reduxData: i
                        })
                    })
                }, function(e, t) {
                    return r$()(e.docJson, t.docJson) && e.theme.updatedTime === t.theme.updatedTime && e.theme.id === t.theme.id
                });
            iD.displayName = "FilmstripPreviewEditor";
            var iA = n(582);

            function iT(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function iR(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? iT(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iT(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var i_ = function(e) {
                    var t = e.card,
                        n = e.index,
                        r = e.isFirst,
                        i = e.isEditorFocused,
                        o = e.currentFocusedCard,
                        s = e.isFilmstripSelected,
                        a = e.theme,
                        c = e.showScreenshots,
                        f = e.screenshotsEnabled,
                        p = e.readOnly,
                        m = e.shouldHide,
                        x = e.isDragInProgress,
                        v = e.useXsFontSize,
                        j = t.cardId,
                        b = t.isDragging,
                        y = t.previewJson,
                        C = (0, _.TL)(),
                        w = (0, iE.c)(j),
                        O = null == w ? void 0 : w.previewUrl,
                        k = (0, g.useMemo)(function() {
                            return {
                                borderWidth: "1px",
                                borderColor: s || i ? "transparent" : "var(--fs-item-border-color)",
                                boxShadow: s ? "var(--fs-item-selected-box-shadow)" : i ? "var(--fs-item-focused-box-shadow)" : "none"
                            }
                        }, [i, s]),
                        I = (0, g.useCallback)(function(e) {
                            if (j) {
                                var t = e.shiftKey,
                                    n = !t && (e.metaKey || e.ctrlKey);
                                if (t && !p) C((0, iA.YC)({
                                    id: j,
                                    currentFocusedCard: o
                                }));
                                else if (n && !p) C((0, iA.sY)({
                                    id: j
                                }));
                                else {
                                    if (x) return;
                                    C((0, iA.Ti)({
                                        id: j
                                    })), C((0, L.Qx)({
                                        attached: !1
                                    }));
                                    var r = (0, nP.sY)().cardId;
                                    (0, iP.D)({
                                        cardId: j,
                                        method: r === j ? "replace" : "push"
                                    })
                                }
                            }
                        }, [p, o, C, j, x]);
                    return (0, X.jsx)(u.xu, {
                        pos: "relative",
                        className: "filmstrip-item",
                        pt: 1,
                        mt: r ? void 0 : 1,
                        onClick: I,
                        cursor: "pointer",
                        userSelect: "none",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        display: m ? "none" : void 0,
                        children: (0, X.jsxs)(l.k, {
                            justifyContent: "space-between",
                            gap: "6px",
                            children: [(0, X.jsx)(d.x, {
                                transitionProperty: "common",
                                transitionDuration: "normal",
                                opacity: b ? 0 : 1,
                                textAlign: "center",
                                color: s ? "var(--fs-item-selected-text-color)" : "inherit",
                                fontSize: v ? "xs" : "sm",
                                w: v ? 6 : 5,
                                children: n
                            }), (0, X.jsx)(u.xu, iR(iR({}, k), {}, {
                                borderRadius: "md",
                                overflow: "hidden",
                                children: c ? (0, X.jsx)(h.qh, {
                                    src: f ? O : iS.Z.src,
                                    fallbackSrc: iS.Z.src,
                                    shouldShow: !!O,
                                    w: "100px",
                                    m: 1
                                }) : (0, X.jsx)(iD, {
                                    theme: a,
                                    docJson: y
                                })
                            }))]
                        })
                    })
                },
                iL = n(16155),
                iM = n(9850),
                iz = n.n(iM),
                iN = n(87936),
                iZ = n(85948),
                iG = n(38105),
                iF = n(47598),
                iU = function(e) {
                    var t = (0, _.CG)(iA.wg),
                        n = (0, _.CG)(iA.zq),
                        r = (0, _.TL)(),
                        i = (0, _.qr)(),
                        o = (0, ek.p)();
                    (0, g.useEffect)(function() {
                        var t = function(t) {
                            var n, r = i.getState();
                            if (e && (0, iL.Cf)() && (0, L.hN)(r)) {
                                var s = null === (n = t.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
                                if (s) {
                                    var c = (0, iZ.T)(s, e.schema).content.content.filter(function(e) {
                                        return (0, tC.KH)(e)
                                    });
                                    if (c.length) {
                                        var l = (0, tC.Bw)(e, (0, iA.zq)(r)),
                                            d = l ? l.pos + l.node.nodeSize : e.state.doc.content.size - 1,
                                            u = c.map(function(e) {
                                                return (0, iF.h)(iz()(e.toJSON()))
                                            }).map(function(e) {
                                                return (0, ib.Zs)(e)
                                            });
                                        e.chain().insertContentAt(d, u, {
                                            updateSelection: !1
                                        }).command(function(e) {
                                            var t = e.tr,
                                                n = (0, iG.t)(t.doc.resolve(d));
                                            return n && (t = t.setSelection(n)), !0
                                        }).scrollIntoView().run(), t.preventDefault(), o({
                                            title: (0, X.jsx)(a.cC, {
                                                id: "3viq5b",
                                                values: {
                                                    0: c.length,
                                                    1: c.length
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top"
                                        })
                                    }
                                }
                            }
                        };
                        return document.addEventListener("paste", t),
                            function() {
                                document.removeEventListener("paste", t)
                            }
                    }, [e, i, o]);
                    var s = (0, g.useCallback)(function(n, r) {
                        if (e) {
                            var i, s = (0, tC.Lz)(e, t);
                            if (s.length) {
                                var c = tB.HY.from(s),
                                    l = (0, e2.G8)(c, e.schema);
                                if (!l) {
                                    o({
                                        title: (0, X.jsx)(a.cC, {
                                            id: "fFgBN7",
                                            values: {
                                                errorMessage: r
                                            }
                                        }),
                                        status: "error",
                                        duration: 3e3,
                                        position: "top"
                                    });
                                    return
                                }
                                null === (i = document.getSelection()) || void 0 === i || i.removeAllRanges(), eT()(l, {
                                    format: "text/html"
                                }), o({
                                    title: (0, X.jsx)(a.cC, {
                                        id: "8p/xVT",
                                        values: {
                                            0: s.length,
                                            1: n.one,
                                            2: n.other
                                        }
                                    }),
                                    status: "success",
                                    duration: 3e3,
                                    position: "top"
                                })
                            }
                        }
                    }, [e, t, o]);
                    return {
                        handleCopy: (0, g.useCallback)(function() {
                            s({
                                one: "Copied card.",
                                other: "Copied ".concat(t.length, " cards.")
                            }, "Error copying card.")
                        }, [s, t]),
                        handleDelete: (0, g.useCallback)(function() {
                            if (e) {
                                r((0, iA.jf)());
                                var n = "";
                                if (1 === t.length) {
                                    var i = (0, tC.Bw)(e, t[0]);
                                    i && (n = (0, eD.getCardTitle)(i.node.toJSON()))
                                }
                                e.commands.deleteCardsById(t);
                                var s = n ? '"'.concat(n, '"') : c.ag._({
                                        id: "FyJPFh"
                                    }),
                                    l = o({
                                        title: (0, X.jsxs)(V.U, {
                                            children: [(0, X.jsx)(d.x, {
                                                noOfLines: 1,
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "OJTPnC",
                                                    values: {
                                                        0: t.length,
                                                        1: t.length,
                                                        displayTitle: s
                                                    }
                                                })
                                            }), (0, X.jsx)(eI.r, {
                                                textDecoration: "underline",
                                                onClick: function() {
                                                    (0, eP.Yw)(e.state), o.close(l)
                                                },
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "9uI/rE"
                                                })
                                            })]
                                        }),
                                        status: "info",
                                        duration: 3e3,
                                        position: "top"
                                    })
                            }
                        }, [e, r, t, o]),
                        handleCut: (0, g.useCallback)(function() {
                            e && (s({
                                one: "Cut card.",
                                other: "Cut ".concat(t.length, " cards")
                            }, "Error cutting card."), r((0, iA.jf)()), e.commands.deleteCardsById(t))
                        }, [e, s, r, t]),
                        handleDuplicate: (0, g.useCallback)(function() {
                            if (e) {
                                var r = (0, tC.Lz)(e, t);
                                if (r.length) {
                                    var i = (0, tC.Bw)(e, n),
                                        s = i ? i.pos + i.node.nodeSize : e.state.doc.content.size - 1,
                                        c = r.map(function(e) {
                                            return (0, iF.h)(iz()(e.toJSON()))
                                        }).map(function(e) {
                                            return (0, ib.Zs)(e)
                                        });
                                    e.chain().insertContentAt(s, c, {
                                        updateSelection: !1
                                    }).command(function(e) {
                                        var t = e.tr,
                                            n = (0, iG.t)(t.doc.resolve(s));
                                        return n && (t = t.setSelection(n)), !0
                                    }).scrollIntoView().run(), o({
                                        title: (0, X.jsx)(a.cC, {
                                            id: "ClnFsQ",
                                            values: {
                                                0: r.length,
                                                1: r.length
                                            }
                                        }),
                                        status: "success",
                                        duration: 3e3,
                                        position: "top"
                                    })
                                }
                            }
                        }, [e, n, o, t])
                    }
                },
                iW = function(e) {
                    var t = e.isFocused,
                        n = e.readOnly,
                        r = e.firstFocusedCardId,
                        i = e.editor,
                        o = e.isDragging,
                        s = iU(i),
                        a = s.handleCopy,
                        c = s.handleDelete,
                        l = s.handleCut,
                        d = s.handleDuplicate,
                        u = (0, _.TL)();
                    (0, g.useEffect)(function() {
                        return iN.F7.on("keydown", "FILMSTRIP", function(e) {
                            if (!t) return !1;
                            switch (e.key) {
                                case "Escape":
                                    if (o) return u((0, iw.vL)()), !0;
                                    return !1;
                                case "Backspace":
                                case "Delete":
                                    if (!n) return c(), !0;
                                    return !1;
                                case "a":
                                case "A":
                                    if (!n && (e.ctrlKey || e.metaKey)) return e.preventDefault(), u((0, iA.td)({
                                        currentFocusedCard: r
                                    })), !0;
                                    return !1;
                                case "c":
                                case "C":
                                    if (!n && (e.ctrlKey || e.metaKey)) return a(), !0;
                                    return !1;
                                case "d":
                                case "D":
                                    if (!n && (e.ctrlKey || e.metaKey)) return e.preventDefault(), d(), !0;
                                    return !1;
                                case "x":
                                case "X":
                                    if (!n && (e.ctrlKey || e.metaKey)) return l(), !0;
                                    return !1;
                                case "ArrowDown":
                                    return u((0, iA.ut)({
                                        direction: "down",
                                        withShift: !n && e.shiftKey,
                                        currentFocusedCard: r
                                    })), !0;
                                case "ArrowUp":
                                    return u((0, iA.ut)({
                                        direction: "up",
                                        withShift: !n && e.shiftKey,
                                        currentFocusedCard: r
                                    })), !0;
                                default:
                                    return !1
                            }
                        })
                    }, [u, r, t, o, c, a, d, l, n])
                };

            function iV(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function iH(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? iV(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iV(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var iB = (0, eL.E)(l.k),
                iq = "data-".concat(id.dh),
                iK = function(e) {
                    var t = e.handleClose,
                        n = e.editor,
                        r = e.readOnly,
                        i = (0, g.useState)(!1),
                        o = i[0],
                        s = i[1],
                        a = (0, g.useRef)(null),
                        c = iI(n),
                        d = c.cards,
                        f = c.isDragging,
                        h = c.selection,
                        m = c.isLoaded,
                        x = (0, g.useMemo)(function() {
                            return (0, iL.HU)(h, n)
                        }, [n, h]),
                        v = x.id,
                        j = x.pos,
                        b = (0, _.TL)(),
                        C = (0, _.CG)(iA.wg),
                        w = (0, _.CG)(iw.pe),
                        k = (0, _.CG)(iw.u9),
                        I = (0, g.useRef)(f),
                        S = (0, g.useCallback)(function(e) {
                            return function() {
                                if (I.current = !0, a.current) {
                                    var t = a.current.getBoundingClientRect().height;
                                    a.current.style.height = "".concat(t, "px")
                                }
                                var n = C.includes(e) ? C : [e];
                                b((0, iA.WF)({
                                    selectedCardIdsToDrag: n
                                })), b((0, iw.CA)({
                                    cardIds: d.map(function(e) {
                                        return e.cardId
                                    }),
                                    leaderCardId: e,
                                    selectedCardIds: n
                                }))
                            }
                        }, [d, b, C]),
                        E = (0, g.useCallback)(function() {
                            n && (b((0, iw.vL)()), n.commands.rearrangeCardsById(d.map(function(e) {
                                return e.cardId
                            }), k))
                        }, [d, b, n, k]),
                        P = (0, g.useCallback)(function() {
                            a.current && (a.current.style.height = "auto"), I.current = !1
                        }, []);
                    iW({
                        isFocused: o,
                        readOnly: r,
                        firstFocusedCardId: v,
                        editor: n,
                        isDragging: f
                    }), (0, ef.O)({
                        ref: a,
                        handler: function() {
                            b((0, iA.Mt)())
                        }
                    });
                    var D = (0, y.ye)("filmstripWithScreenshots"),
                        A = (0, y.ye)("screenshotsEnabled"),
                        T = n && !r,
                        R = (0, _.CG)(L.Pu),
                        M = (0, eE.ff)("gray.200", "gray.700"),
                        z = (0, eE.ff)("whiteAlpha.500", "blackAlpha.500"),
                        N = (0, eE.ff)("gray.800", "gray.200"),
                        Z = (0, eE.ff)("blackAlpha.400", "whiteAlpha.500"),
                        G = (0, eE.ff)("trueblue.500", "trueblue.200"),
                        F = (0, eE.If)().colorMode,
                        U = (0, g.useMemo)(function() {
                            var e;
                            return {
                                "--fs-item-border-color": (e = "dark" === F) ? "var(--chakra-colors-whiteAlpha-300)" : "var(--chakra-colors-gray-200)",
                                "--fs-item-focused-box-shadow": "0 0 0 2px var(--chakra-ring-color)",
                                "--fs-item-selected-box-shadow": "0 0 0 2px var(--chakra-colors-trueblue-300)",
                                "--fs-item-selected-text-color": e ? "var(--chakra-colors-trueblue-200)" : "var(--chakra-colors-trueblue-500)"
                            }
                        }, [F]),
                        W = (0, g.useMemo)(function() {
                            return d.length >= 100
                        }, [d.length]);
                    return (0, X.jsx)(iB, iH(iH({
                        position: "absolute"
                    }, iu.wp), {}, {
                        transition: {
                            duration: .2,
                            delay: .2
                        },
                        direction: "column",
                        left: 2,
                        top: 12,
                        bottom: 2,
                        justifyContent: "center",
                        color: N,
                        zIndex: iu.Xr,
                        _hover: {
                            ".filmstrip-nubbin": {
                                opacity: 1
                            }
                        },
                        children: (0, g.createElement)(l.k, iH(iH({}, (0, O.Z)({}, iq, !0)), {}, {
                            className: iu.sN,
                            key: iu.sN,
                            tabIndex: 0,
                            _focus: {
                                outline: "none"
                            },
                            onFocus: function() {
                                s(!0), null == n || n.commands.blur()
                            },
                            onBlur: function(e) {
                                var t;
                                a.current && null !== (t = a.current) && void 0 !== t && t.contains(e.relatedTarget) || s(!1)
                            },
                            borderRadius: "md",
                            bg: z,
                            backdropFilter: "blur(100px)",
                            borderWidth: "1px",
                            borderColor: M,
                            maxHeight: "100%",
                            alignSelf: "flex-start",
                            ref: a
                        }), T && (0, X.jsx)(l.k, {
                            position: "absolute",
                            top: 3,
                            zIndex: 1,
                            width: "100%",
                            px: 4,
                            children: (0, X.jsx)(iy, {
                                editor: n,
                                start: null != j ? j : 1
                            })
                        }), (0, X.jsx)(iB, {
                            layoutScroll: !0,
                            scrollbarGutter: "stable",
                            overflowY: "auto",
                            position: "relative",
                            sx: {
                                "&::-webkit-scrollbar": {
                                    opacity: 1,
                                    width: "5px"
                                },
                                "&::-webkit-scrollbar-track": {
                                    opacity: 0,
                                    width: "5px"
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    background: Z,
                                    borderRadius: "full"
                                }
                            },
                            css: T ? {
                                "--mask-image-content": "linear-gradient(\n                to bottom,\n                black 0px,\n                transparent 0px,\n                transparent 40px,\n                black 50px,\n                black 100%,\n                transparent 100%\n                )",
                                maskImage: "var(--mask-image-content)"
                            } : void 0,
                            children: (0, X.jsx)(u.xu, {
                                p: 3,
                                css: U,
                                pt: T ? "50px" : void 0,
                                className: "filmstrip-nav-item-container",
                                children: (0, X.jsx)(ih.t.Group, {
                                    onReorder: function(e) {
                                        var t = e.map(function(e) {
                                            return e.cardId
                                        });
                                        b((0, iw.k)({
                                            reorderedCardIds: t
                                        }))
                                    },
                                    values: d,
                                    axis: "y",
                                    children: n && m && d.map(function(e, t) {
                                        var i = e.cardId,
                                            o = e.displayBehavior,
                                            s = C.includes(i);
                                        return (0, X.jsx)(ih.t.Item, {
                                            value: e,
                                            onDragStart: S(i),
                                            onDragEnd: E,
                                            onDragTransitionEnd: P,
                                            style: {
                                                position: "relative",
                                                listStyle: "none"
                                            },
                                            children: (0, X.jsx)(i_, {
                                                readOnly: r,
                                                card: e,
                                                index: f && void 0 !== w[i] ? w[i] : t + 1,
                                                isFirst: 0 === t,
                                                useXsFontSize: W,
                                                shouldHide: "hidden" === o,
                                                theme: R,
                                                isDragInProgress: I.current,
                                                isEditorFocused: v === i && n.isFocused,
                                                isFilmstripSelected: !!s,
                                                currentFocusedCard: v,
                                                showScreenshots: D,
                                                screenshotsEnabled: A
                                            })
                                        }, i)
                                    })
                                })
                            })
                        }), (0, X.jsx)(il.TX, {
                            children: "Close filmstrip"
                        }), (0, X.jsx)(u.xu, {
                            as: J.z,
                            variant: "unstyled",
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translate(calc(100% - 1px), -50%)",
                            onClick: t,
                            h: 14,
                            size: "sm",
                            borderWidth: "1px",
                            borderColor: M,
                            borderLeft: "none",
                            bg: z,
                            borderRadius: "0px 8px 8px 0px",
                            opacity: 0,
                            transitionProperty: "common",
                            transitionDuration: "normal",
                            transitionTimingFunction: "ease",
                            backdropFilter: "blur(100px)",
                            _hover: {
                                color: G
                            },
                            className: "filmstrip-nubbin",
                            children: (0, X.jsx)(p.G, {
                                icon: ip.A3,
                                transform: "grow-2"
                            })
                        }))
                    }))
                };

            function iY(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function iJ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? iY(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iY(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var iX = (0, eL.E)(J.z),
                iQ = (0, g.memo)(function() {
                    var e = (0, tR._i)().editor,
                        t = (0, S.q)({
                            defaultIsOpen: !0
                        }),
                        n = t.isOpen,
                        r = t.onClose,
                        i = t.onOpen,
                        o = (0, _.CG)(L.gh) === tO.q.SLIDE_VIEW,
                        s = (0, id.Br)("comment"),
                        c = (0, id.Br)("edit"),
                        l = (0, ed.Yy)();
                    return !o && s ? (0, X.jsx)(h.Wk, {
                        isDark: l,
                        children: (0, X.jsx)(eM.M, {
                            children: n ? (0, X.jsx)(iK, {
                                handleClose: r,
                                editor: e,
                                readOnly: !c
                            }, "filmstrip") : (0, X.jsxs)(iX, iJ(iJ({}, iu.wp), {}, {
                                transition: {
                                    duration: .2
                                },
                                isolation: "isolate",
                                zIndex: iu.Xr,
                                css: {
                                    "--trigger-height": "var(--chakra-sizes-14)"
                                },
                                tabIndex: -1,
                                position: "fixed",
                                left: 2,
                                top: "calc(50% - (var(--trigger-height) / 2) + var(--chakra-sizes-4))",
                                borderRadius: "xl",
                                "data-guider-highlight": "filmstrip-opener",
                                h: "var(--trigger-height)",
                                w: 8,
                                onClick: i,
                                children: [(0, X.jsx)(il.TX, {
                                    children: (0, X.jsx)(a.cC, {
                                        id: "7ShgZt"
                                    })
                                }), (0, X.jsx)(p.G, {
                                    icon: ic.Cj
                                })]
                            }), "filmstrip-opener")
                        })
                    }) : null
                });
            iQ.displayName = "Filmstrip";
            var i$ = n(32292),
                i0 = n(20023),
                i1 = n(25015),
                i2 = n(72360),
                i5 = n(48322),
                i3 = n(18751),
                i6 = n(95993),
                i4 = n(41202),
                i8 = n(46069),
                i7 = n(47403),
                i9 = n(49299),
                oe = n(98765),
                ot = n(72314),
                on = n(44934),
                or = n(92455),
                oi = n(22681),
                oo = n(82875),
                os = n(95201),
                oa = n(27846),
                oc = n(76041),
                ol = n(10004),
                od = n(89641),
                ou = n(33807),
                of = n(67639),
                op = (i = (0, tL.Z)(tz().mark(function e(t) {
                    var n, r, i, o, s, a, c;
                    return tz().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.editor, r = t.chain, i = t.node, o = t.imageAttrs, s = t.pos, r.updateAttributesAtPos(s, (0, ou.j6)(i, {
                                    uploadStatus: ol.D.Uploading
                                })), a = o.tempUrl, c = o.src, (0, oc.WY)(c, n.storage.mediaUpload.orgId, {
                                    onUploadComplete: function(e) {
                                        (0, ou.Ns)(n, a, e)
                                    },
                                    onUploadFailed: function(e) {
                                        (0, ou.f8)(n, a, e, !0)
                                    }
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                oh = function(e, t) {
                    console.debug("[AIStream processAIImages] for cardId: ", t);
                    var n = e.chain(),
                        r = (0, tb.N2)(e.state.doc, function(e) {
                            return (0, tC.KH)(e) && e.attrs.id === t
                        })[0];
                    if (!r) {
                        console.error("[processAIImages] can not find card with id: ", t);
                        return
                    }
                    var i = r.pos,
                        o = i + r.node.nodeSize;
                    e.state.doc.descendants(function(t, r) {
                        if (r < i || r > o) return !0;
                        var s, a = t.attrs,
                            c = t.type,
                            l = void 0;
                        return "image" === c.name ? l = a : (0, of .E)(t) ? l = a.image : ((0, tC.KH)(t) || (0, od.pt)(t)) && (l = null === (s = a.background) || void 0 === s ? void 0 : s.image), l && l.uploadStatus === ol.D.Queued && (console.debug("[AIStream processAIImages]: ".concat(t.type.name, " node with AI queries at pos ").concat(r, ":"), l), op({
                            editor: e,
                            chain: n,
                            node: t,
                            imageAttrs: l,
                            pos: r
                        })), !0
                    }), n.run()
                },
                om = ["latency"];

            function ox(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function og(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ox(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ox(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ov = "[CONTENT_FILTER]",
                oj = function() {
                    return (0, X.jsxs)(i2.b, {
                        status: "error",
                        variant: "solid",
                        children: [(0, X.jsx)(i5.z, {}), (0, X.jsx)(i3.X, {
                            children: (0, X.jsxs)(B.K, {
                                children: [(0, X.jsx)("strong", {
                                    children: (0, X.jsx)(a.cC, {
                                        id: "7g5s/N"
                                    })
                                }), (0, X.jsx)(d.x, {
                                    children: (0, X.jsx)(a.cC, {
                                        id: "Xp43Ei"
                                    })
                                })]
                            })
                        })]
                    })
                },
                ob = function(e) {
                    var t = e.editor,
                        n = e.chunk,
                        r = e.theme,
                        i = e.docFormatKey,
                        o = n.id,
                        s = n.index,
                        a = (0, ot.a)({
                            chunk: n,
                            theme: r,
                            docFormatKey: i
                        }),
                        c = (0, tb.N2)(t.state.doc, function(e) {
                            return (0, oo.KH)(e)
                        })[0],
                        l = (0, tb.N2)(t.state.doc, function(e) {
                            return (0, oo.KH)(e) && e.attrs.id === o
                        })[0];
                    if (!c) throw Error("Doc does not have a first card");
                    var d = l ? {
                        from: l.pos,
                        to: l.pos + l.node.nodeSize
                    } : 0 === s ? {
                        from: c.pos,
                        to: c.pos + c.node.nodeSize
                    } : t.state.doc.nodeSize - 3;
                    try {
                        if (t.commands.insertContentAt(d, a, {
                                updateSelection: !1
                            }), n.cardComplete && 0 === n.index) {
                            var u = (0, iG.t)(t.state.doc.resolve(c.pos));
                            u && t.commands.command(function(e) {
                                return e.tr.setSelection(u), !0
                            })
                        }
                    } catch (e) {
                        console.warn("[useCreateFromStream] ERROR updating card", a), console.warn(e)
                    }
                },
                oy = function(e) {
                    var t = e.docId,
                        n = e.store,
                        r = e.generateInfo,
                        i = e.editor;
                    if (!r.lastEventId || !r.streamId || !r.interactionId) {
                        console.error("Trying to resume stream for doc (id=".concat(t, ") without lastEventId or streamId or interactionId"), {
                            lastEventId: r.lastEventId,
                            streamId: r.streamId,
                            interactionId: r.interactionId
                        });
                        return
                    }
                    i9.a.trackRequestSent(n, {
                        interface: "wizard",
                        streaming: !0,
                        interactionId: r.interactionId,
                        isResuming: !0
                    });
                    var o = (0, i8.pM)({
                        interactionId: r.interactionId,
                        lastEventId: r.lastEventId,
                        streamId: r.streamId,
                        retries: 3
                    }).stream;
                    return (0, i4.Nl)({
                        stream: o,
                        docId: t,
                        interactionId: r.interactionId,
                        lastCompletedCardId: r.lastCompletedCardId,
                        options: {
                            imageLicense: r.imageLicense,
                            docFormatKey: (0, oi.W3)((0, oi.VA)(i)).key,
                            lastCompletedCardIndex: r.lastCompletedCardIndex
                        },
                        store: n
                    })
                },
                oC = function(e, t) {
                    var n, r = (0, _.qr)(),
                        i = (0, _.TL)(),
                        o = (0, _.CG)(L.KV),
                        s = (0, y.ye)("streamResumingEnabled"),
                        a = (0, g.useRef)(!1),
                        c = ow({
                            docId: e
                        }),
                        l = c.isStreaming,
                        d = c.onStreamData,
                        u = c.onStreamDone,
                        f = c.onStreamError,
                        p = c.onStreamStart,
                        h = c.onAbortStream,
                        m = ok(l),
                        x = (0, g.useCallback)((n = (0, tL.Z)(tz().mark(function n(i) {
                            var o, s, c;
                            return tz().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        p({
                                            editor: t
                                        }), s = oO({
                                            streamResponse: i,
                                            editor: t,
                                            store: r,
                                            docId: e
                                        }).getReader(), n.prev = 5;
                                    case 6:
                                        return n.next = 8, s.read();
                                    case 8:
                                        if ((o = n.sent).done) {
                                            n.next = 18;
                                            break
                                        }
                                        if (o.value) {
                                            n.next = 11;
                                            break
                                        }
                                        return n.abrupt("continue", 6);
                                    case 11:
                                        if (!a.current) {
                                            n.next = 14;
                                            break
                                        }
                                        return console.log("[AIStream] has aborted -- no longer reading stream"), n.abrupt("break", 18);
                                    case 14:
                                        "data" === (c = o.value).event && (d({
                                            value: c.data,
                                            editor: t,
                                            streamResponse: i
                                        }), m()), n.next = 6;
                                        break;
                                    case 18:
                                        n.next = 24;
                                        break;
                                    case 20:
                                        return n.prev = 20, n.t0 = n.catch(5), f({
                                            err: n.t0,
                                            streamResponse: i,
                                            editor: t
                                        }), n.abrupt("return");
                                    case 24:
                                        if (!a.current) {
                                            n.next = 26;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 26:
                                        c && "done" !== c.event && console.error('[AIStream] incomplete stream: last message received is not `event="done"`', {
                                            lastMessage: c
                                        }), u({
                                            editor: t,
                                            streamResponse: i
                                        });
                                    case 28:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, null, [
                                [5, 20]
                            ])
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [e, t, d, u, f, p, m, r]);
                    (0, oa.v)(function() {
                        if (t && o && !l) {
                            var n = (0, nO.oH)(e)(r.getState()),
                                i = (0, nO.nl)(r.getState());
                            if (n) {
                                "running" === n.status && x(n);
                                return
                            }
                            if (s && !i) {
                                var a = (0, oi.VA)(t),
                                    c = a.generateInfo;
                                if ("streaming" === a.generateStatus) {
                                    var d = oy({
                                        docId: e,
                                        generateInfo: c,
                                        editor: t,
                                        store: r
                                    });
                                    d && x(d)
                                }
                            }
                        }
                    }, [e, t, r, o, p, f, d, u, s, x, l], [t, o]), (0, g.useEffect)(function() {
                        return function() {
                            var n = (0, nO.oH)(e)(r.getState());
                            t && n && "running" === n.status && (a.current = !0, h({
                                editor: t,
                                streamResponse: n
                            }))
                        }
                    }, [i, e, h, t, r])
                },
                ow = function(e) {
                    var t = e.docId,
                        n = (0, ek.p)(),
                        r = (0, _.TL)(),
                        i = (0, _.qr)(),
                        o = (0, y.ye)("aiWizardUploadImages"),
                        s = (0, _.CG)(L.Pu),
                        c = (0, g.useState)(!1),
                        l = c[0],
                        d = c[1],
                        u = (0, g.useRef)(null);
                    (0, g.useEffect)(function() {
                        return function() {
                            u.current && (n.close(u.current), u.current = null)
                        }
                    }, [n]);
                    var f = (0, g.useCallback)(function() {
                            u.current || (u.current = n({
                                id: "ai-generating-toast",
                                isClosable: !1,
                                render: function() {
                                    return (0, X.jsxs)(i2.b, {
                                        variant: "light",
                                        children: [(0, X.jsx)(nt.$, {
                                            size: "sm",
                                            mr: 2
                                        }), (0, X.jsxs)(i3.X, {
                                            children: [(0, X.jsx)("strong", {
                                                children: (0, X.jsx)(a.cC, {
                                                    id: "n2cF1o"
                                                })
                                            }), " ", (0, X.jsx)(a.cC, {
                                                id: "BFGwQA"
                                            })]
                                        })]
                                    })
                                },
                                position: "top",
                                duration: null
                            }))
                        }, [n]),
                        p = (0, g.useCallback)(function(e) {
                            var t = e.editor;
                            t && (d(!0), t.commands.setAIGenerationRunning(!0), f())
                        }, [f]),
                        h = (0, g.useCallback)(function(e) {
                            var t = e.editor,
                                n = e.value;
                            if (e.streamResponse && t) {
                                var r = (0, oi.W3)((0, oi.VA)(t)),
                                    i = n.id,
                                    a = n.cardComplete;
                                ob({
                                    chunk: n,
                                    editor: t,
                                    theme: s,
                                    docFormatKey: r.key
                                }), a && o && oh(t, i)
                            }
                        }, [o, s]),
                        m = (0, g.useCallback)(function(e) {
                            var t = e.editor,
                                o = e.streamResponse;
                            if (t && o) {
                                var s = o.id,
                                    c = (0, oi.W3)((0, oi.VA)(t));
                                d(!1), t.commands.setAIGenerationRunning(!1), t.commands.updateAttributesAtPos(0, {
                                    generateStatus: "done"
                                }), (0, oe.rD)(), r((0, nO.G0)({
                                    id: s,
                                    status: "complete"
                                })), i9.a.trackStreamComplete(i, s), (0, on.d)("wizardCreation"), u.current && n.update(u.current, {
                                    title: (0, X.jsx)(a.cC, {
                                        id: "2/LpWt",
                                        values: {
                                            0: c.generationLabel || c.label
                                        }
                                    }),
                                    status: "success",
                                    position: "top",
                                    duration: 3e3,
                                    isClosable: !0
                                })
                            }
                        }, [r, i, n]);
                    return {
                        isStreaming: l,
                        onStreamStart: p,
                        onStreamData: h,
                        onStreamError: (0, g.useCallback)(function(e) {
                            var o = e.err,
                                s = e.editor,
                                c = e.streamResponse,
                                l = c.id,
                                f = (0, i7.uS)(o),
                                p = f.errorMessage,
                                h = f.errorCode;
                            d(!1), s.commands.setAIGenerationRunning(!1), s.commands.updateAttributesAtPos(0, {
                                generateStatus: "done"
                            }), (0, oe.rD)(), r((0, nO.G0)({
                                id: l,
                                status: "error"
                            }));
                            var m = (0, nO.Sn)(l)(i.getState());
                            if (m) {
                                var x = m.latency,
                                    g = (0, em.Z)(m, om);
                                (0, nZ.pQ)(og(og({}, g), {}, {
                                    errorName: "StreamError",
                                    errorMessage: p,
                                    errorCode: h,
                                    outputMessage: "",
                                    latency: x || performance.now() - g.startTime,
                                    isResuming: c.isResuming,
                                    docId: t
                                }))
                            }
                            u.current && (p === ov ? n.update(u.current, {
                                render: oj,
                                position: "top",
                                duration: null,
                                isClosable: !0
                            }) : n.update(u.current, {
                                title: (0, X.jsx)(a.cC, {
                                    id: "sbsGk/"
                                }),
                                status: "error",
                                position: "top",
                                duration: null,
                                isClosable: !0
                            }))
                        }, [r, t, i, n]),
                        onStreamDone: m,
                        onAbortStream: (0, g.useCallback)(function(e) {
                            var t = e.editor,
                                n = e.streamResponse.id;
                            d(!1), t.commands.setAIGenerationRunning(!1), i9.a.trackStreamAbort(i, {
                                interactionId: n,
                                abortReason: "leave-editor"
                            }), r((0, nO.Of)({
                                id: n
                            }))
                        }, [r, i])
                    }
                },
                oO = function(e) {
                    var t = e.streamResponse,
                        n = e.editor,
                        r = e.store,
                        i = e.docId,
                        o = t.id,
                        s = t.stream,
                        a = !0;
                    return s.pipeThrough(new i6.GJ({
                        transform: function(e, t) {
                            if ("done" === e.event && "content_filter" === e.finishReason) {
                                t.error(Error(ov));
                                return
                            }
                            t.enqueue(e)
                        }
                    })).pipeThrough((0, i4.c1)(function(e) {
                        a && "data" === e.event && (i9.a.trackStreamStart(r, {
                            interactionId: o,
                            docId: i
                        }), t.isResuming && n.commands.deleteCardsAfter(t.lastCompletedCardId || null), a = !1), "data" === e.event && e.data.cardComplete && n.commands.updateNestedAttributesAtPos(0, {
                            generateInfo: {
                                lastEventId: e.data.eventId,
                                lastCompletedCardId: e.data.id,
                                lastCompletedCardIndex: e.data.index
                            }
                        })
                    }))
                },
                ok = function(e) {
                    var t = (0, or.As)("editor"),
                        n = (0, g.useRef)(!0);
                    (0, g.useEffect)(function() {
                        if (e) {
                            var r = t.scroller;
                            if (r) {
                                var i = function() {
                                        t.isAtBottom(40) ? n.current = !0 : n.current = !1
                                    },
                                    o = function() {
                                        n.current = !1
                                    };
                                return r.addEventListener("wheel", i, {
                                        passive: !0
                                    }), r.addEventListener("touchend", i, {
                                        passive: !0
                                    }), r.addEventListener("touchstart", o, {
                                        passive: !0
                                    }), r.addEventListener("touchmove", o, {
                                        passive: !0
                                    }),
                                    function() {
                                        r.removeEventListener("wheel", i), r.removeEventListener("touchend", i), r.removeEventListener("touchstart", o), r.removeEventListener("touchmove", o)
                                    }
                            }
                        }
                    }, [t, e]);
                    var r = (0, g.useCallback)(function() {
                        if (n.current) {
                            var e;
                            null === (e = t.scroller) || void 0 === e || e.scrollTo({
                                top: t.scroller.scrollHeight,
                                behavior: "auto"
                            })
                        }
                    }, [t]);
                    return (0, os.Z_)(r, 100)
                },
                oI = n(14198),
                oS = function(e) {
                    var t = e.toggleToCPanel,
                        n = e.initializeToCPanel,
                        r = e.isToCPanelOpen,
                        i = (0, oI.F)().breakpoints.xl,
                        o = (0, _.CG)(L.gh),
                        s = (0, g.useState)(o !== tO.q.SLIDE_VIEW),
                        a = s[0],
                        c = s[1],
                        l = (0, g.useState)(!1),
                        d = l[0];
                    l[1];
                    var u = (0, v.I0)();
                    (0, t2.vm)(function() {
                        n()
                    }, [i, t, n, u], []), (0, t2.vm)(function() {
                        o === tO.q.SLIDE_VIEW ? (c(r), t({
                            disableTransition: !1,
                            override: "closed"
                        })) : d && o === tO.q.DOC_VIEW && t({
                            disableTransition: !1,
                            override: a ? "open" : "closed"
                        })
                    }, [t, r, a, o, d], [o])
                };

            function oE(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function oP(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oE(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oE(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var oD = "doc_archived_warning",
                oA = function(e, t) {
                    var n = (0, ek.p)(),
                        r = (0, j.iX9)(),
                        i = (0, k.Z)(r, 1)[0];
                    (0, g.useEffect)(function() {
                        return function() {
                            n.close(oD)
                        }
                    }, []), (0, g.useEffect)(function() {
                        e && t === tT.Z.COLLABORATIVE && (e.archived && !n.isActive(oD) ? n({
                            id: oD,
                            title: (0, X.jsxs)(d.x, {
                                "data-testid": "trash-confirmation-toast",
                                children: [(0, X.jsx)(a.cC, {
                                    id: "fkHPZu"
                                }), " ", (0, X.jsx)(eI.r, {
                                    textDecoration: "underline",
                                    onClick: function() {
                                        var t = {
                                            id: e.id
                                        };
                                        i({
                                            variables: t,
                                            optimisticResponse: {
                                                unarchiveDoc: oP(oP({}, t), {}, {
                                                    archived: !0,
                                                    __typename: "Doc"
                                                })
                                            }
                                        })
                                    },
                                    children: (0, X.jsx)(a.cC, {
                                        id: "7wfwc0"
                                    })
                                })]
                            }),
                            status: "warning",
                            position: "top",
                            isClosable: !1,
                            duration: null
                        }) : !e.archived && n.isActive(oD) && n.close(oD))
                    }, [e, t, n, i])
                },
                oT = n(51587),
                oR = n(56675),
                o_ = n(53776),
                oL = n(78985);

            function oM(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function oz(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oM(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oM(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var oN = function(e) {
                    var t = (0, oR.x)(),
                        n = (0, _.CG)(oL.cn);
                    (0, g.useEffect)(function() {
                        n && t.cache.updateQuery({
                            query: o_.yE1,
                            variables: {
                                id: e
                            }
                        }, function(e) {
                            if (!(null != e && e.doc)) return e;
                            var t = e.doc;
                            return t.titleEdited ? e : {
                                doc: oz(oz({}, t), {}, {
                                    title: n
                                })
                            }
                        })
                    }, [n, t, e])
                },
                oZ = n(83827),
                oG = n(69539),
                oF = n(48842),
                oU = function(e, t) {
                    var n = (0, oF._)().isUnauthorized;
                    (0, th.If)(function(r) {
                        !0 !== n && void 0 !== n && (r.track(th.AA.DOC_VIEWED, {
                            doc_id: e
                        }), t === tT.Z.EXAMPLE_STATIC && r.track(th.AA.EXAMPLE_VIEWED, {
                            doc_id: e
                        }))
                    }, [e, t, n]), (0, oZ.d)();
                    var r = (0, y.ye)("realUserMetrics"),
                        i = t === tT.Z.COLLABORATIVE && r,
                        o = (0, y.ye)("rumKeystrokeSampleRate");
                    (0, oG.lh)(i, o)
                },
                oW = n(26658),
                oV = function(e) {
                    var t = (0, v.I0)(),
                        n = (0, th.z$)();
                    (0, g.useEffect)(function() {
                        var r, i = function() {
                                var i = (0, _.bh)().getState();
                                r = (0, L.Q5)(i), (0, oW.I7)(e), t((0, L.lx)({
                                    isEditingDisabled: !0
                                })), null == n || n.trackDocEvent(th.AA.DOC_PRINTED)
                            },
                            o = function() {
                                t((0, L.lx)({
                                    isEditingDisabled: !1
                                })), t((0, L.xn)({
                                    expandedCardsMap: r
                                }))
                            };
                        return window.addEventListener("beforeprint", i), window.addEventListener("afterprint", o),
                            function() {
                                window.removeEventListener("beforeprint", i), window.removeEventListener("afterprint", o)
                            }
                    }, [t, e, n])
                },
                oH = "doc-root",
                oB = function(e) {
                    var t = e.isConnected;
                    return (0, X.jsx)(l.k, {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        color: "gray.500",
                        fontSize: "2xl",
                        children: t ? (0, X.jsx)(a.cC, {
                            id: "svObPT",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                            }
                        }) : (0, X.jsxs)(l.k, {
                            m: 8,
                            alignItems: "center",
                            direction: "row",
                            children: [(0, X.jsx)(p.G, {
                                icon: s.bK,
                                size: "4x"
                            }), (0, X.jsx)(d.x, {
                                ml: 8,
                                children: (0, X.jsx)(a.cC, {
                                    id: "qercPA",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    },
                                    components: {
                                        0: (0, X.jsx)("strong", {})
                                    }
                                })
                            })]
                        })
                    })
                },
                oq = function(e) {
                    var t = e.doc,
                        n = e.user,
                        r = e.docEditorType,
                        i = (0, b.$m)(t, n),
                        o = (0, v.v9)(L.gh),
                        s = r === tT.Z.COLLABORATIVE && !i,
                        a = s && o === tO.q.SLIDE_VIEW;
                    return (null == i ? void 0 : i.permission) == "view" ? (0, X.jsx)(ri.m, {}) : a ? (0, X.jsx)(en, {}) : s ? (0, X.jsx)(w.C, {
                        showTourReplay: !0
                    }) : null
                },
                oK = (0, tR.eT)(function(e) {
                    var t = e.docEditorType,
                        n = void 0 === t ? tT.Z.COLLABORATIVE : t,
                        r = (0, tR._i)(),
                        i = r.docId,
                        o = r.isUnauthorized,
                        s = r.setCollaborativeEditorInstance,
                        a = r.editor,
                        d = (0, _.CG)(t_.yx),
                        p = (0, j.$gs)().isConnected,
                        m = (0, tP.SE)().user;
                    (0, C.F3)(), oA(d, n), oC(i, a), oN(i), oU(i, n), (0, oT.j)(), (0, i1.P)(), (0, i1.J)(), (0, rc.Zd)(a, ".".concat(oH)), rx(a), (0, tD.V)(), oV(a), (0, b.DD)(d, n === tT.Z.COLLABORATIVE);
                    var v = (0, g.useRef)(null),
                        w = (0, _.TL)(),
                        O = (0, ed.Yy)(),
                        k = (0, g.useMemo)(function() {
                            return (0, tf.vu)(O)
                        }, [O]);
                    console.debug("%c[DocEditorComponent] RENDER - ".concat(i), "background-color: gold");
                    var I = (0, eo.Pp)(i$.Q),
                        S = I.togglePanel,
                        E = I.isPanelOpen,
                        P = I.initPanel,
                        D = (0, eo.Pp)(nm.s),
                        A = D.togglePanel,
                        T = D.isPanelOpen,
                        R = (0, eo.Pp)(nx.Rr),
                        L = R.togglePanel,
                        M = R.isPanelOpen;
                    (0, nx.QK)({
                        toggleDesignPartnerPanel: L,
                        isDesignPartnerPanelOpen: M,
                        editor: a
                    }), oS({
                        toggleToCPanel: S,
                        isToCPanelOpen: E,
                        initializeToCPanel: P
                    }), (0, g.useEffect)(function() {
                        return function() {
                            w((0, ec.qo)())
                        }
                    }, [w]);
                    var z = (0, g.useCallback)(function() {
                            return !!(a && a.state.selection.empty)
                        }, [a]),
                        N = (0, eo.Xy)(),
                        Z = N.leftPanelLifecycle,
                        G = N.rightPanelLifecycle,
                        F = N.globalPanelLifecycle,
                        U = (0, y.ye)("filmstrip") && n === tT.Z.COLLABORATIVE,
                        W = (0, ei.dU)(null == d ? void 0 : d.organization),
                        V = (0, tA.U)(null == d ? void 0 : d.title, W),
                        H = c.ag._({
                            id: "X6YCwz"
                        }),
                        B = c.ag._({
                            id: "abr3hR"
                        });
                    return (0, X.jsxs)(X.Fragment, {
                        children: [(0, X.jsx)("style", {
                            id: "editorStyleOverride",
                            children: "body {overflow: hidden;}"
                        }), (0, X.jsx)(x(), {
                            children: (0, X.jsx)("title", {
                                children: V
                            })
                        }), (0, X.jsx)(np, {
                            doc: d,
                            editor: a
                        }), (0, X.jsx)(el.H9, {
                            isEnabledFn: z
                        }), o ? (0, X.jsx)(oB, {
                            isConnected: p
                        }) : (0, X.jsxs)(l.k, {
                            id: "doc-main",
                            direction: "row",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: v,
                            children: [(0, X.jsx)(es.Av, {
                                panelLifecycle: Z
                            }), (0, X.jsxs)(l.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                minWidth: "0",
                                h: "100%",
                                children: [(0, X.jsx)(h.Wk, {
                                    isDark: O,
                                    children: (0, X.jsx)(i0.o, {
                                        scrollingParentSelector: ".".concat(oH),
                                        editorWrapperEl: v.current,
                                        docEditorType: n,
                                        isToCPanelOpen: E,
                                        toggleToCPanel: S,
                                        isCommentsPanelOpen: T,
                                        toggleCommentsPanel: A
                                    })
                                }), (0, X.jsxs)(u.xu, {
                                    flex: "1",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    minWidth: "0",
                                    h: "100%",
                                    className: (0, f.cx)(oH, M && "design-partner-panel-open"),
                                    style: {
                                        "--ai-editing-label": "'".concat(H, "'"),
                                        "--ai-generating-label": "'".concat(B, "'")
                                    },
                                    css: k,
                                    children: [n === tT.Z.PUBLIC_STATIC ? (0, X.jsx)(ru, {
                                        docId: i,
                                        snapshotId: null == d ? void 0 : d.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(oH),
                                        onCreate: s
                                    }) : n === tT.Z.EXAMPLE_STATIC ? (0, X.jsx)(ra, {
                                        docId: i,
                                        snapshotId: null == d ? void 0 : d.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(oH),
                                        onCreate: s
                                    }) : (0, X.jsxs)(ea.Mn.Provider, {
                                        value: F,
                                        children: [(0, X.jsx)(eu.Ge, {
                                            doc: d,
                                            docId: i,
                                            readOnly: null == d ? void 0 : d.archived,
                                            onCreate: s,
                                            scrollingParentSelector: ".".concat(oH)
                                        }), a && (0, X.jsx)(tE, {
                                            editor: a
                                        })]
                                    }), (0, X.jsx)(n4, {
                                        editor: a
                                    }), (0, X.jsx)(ia, {
                                        editor: a
                                    })]
                                })]
                            }), (0, X.jsx)(es.U8, {
                                panelLifecycle: G
                            }), (0, X.jsx)(tp.a, {
                                editorId: "main",
                                children: (0, X.jsxs)(X.Fragment, {
                                    children: [(0, X.jsx)(tu, {
                                        editor: a
                                    }), (0, X.jsx)(oq, {
                                        doc: d,
                                        user: m,
                                        docEditorType: n
                                    }), U && (0, X.jsx)(iQ, {})]
                                })
                            })]
                        })]
                    })
                }),
                oY = n(75156),
                oJ = n(56768),
                oX = n(93031),
                oQ = n(59195),
                o$ = n(92488),
                o0 = n(3360),
                o1 = n(38717),
                o2 = n(42353),
                o5 = function(e) {
                    var t = e.theme,
                        n = e.onClick,
                        r = e.isChecked,
                        i = e.index,
                        o = e.startIndex;
                    return (0, X.jsxs)(u.xu, {
                        gridColumnStart: i + 1 - o,
                        display: o > i ? "none" : "block",
                        gridRow: 1,
                        as: o1.f,
                        p: 2,
                        transition: "all 0.2s ease-in-out",
                        bgColor: r ? "trueblue.100" : "linen.50",
                        textAlign: "left",
                        tabIndex: 0,
                        borderRadius: "md",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        _focus: {
                            boxShadow: r ? void 0 : "outline"
                        },
                        outline: "none",
                        onClick: n,
                        _hover: {
                            bgColor: r ? "trueblue.100" : "gray.100"
                        },
                        onKeyDown: function(e) {
                            ("Enter" === e.key || " " === e.key) && n()
                        },
                        "data-theme-id": t.id,
                        "data-testid": r ? "current-theme-preview" : void 0,
                        cursor: "pointer",
                        children: [(0, X.jsx)(o2.n, {
                            theme: t
                        }), (0, X.jsxs)(B.K, {
                            direction: "row",
                            spacing: 1,
                            pt: 1,
                            children: [r && (0, X.jsx)(t9.n, {
                                w: 3,
                                h: "auto",
                                mr: 1,
                                color: "trueblue.700"
                            }), (0, X.jsx)(d.x, {
                                fontSize: "sm",
                                noOfLines: 1,
                                "data-testid": "theme-name",
                                color: r ? "trueblue.700" : void 0,
                                children: t.name
                            })]
                        })]
                    })
                };
            o5.displayName = "DemoDocThemePreview";
            var o3 = "linen.50",
                o6 = function(e) {
                    var t = e.templateTheme,
                        r = e.setTheme,
                        i = e.currentThemeId,
                        o = (0, v.v9)(L.gh) === tO.q.SLIDE_VIEW,
                        s = (0, g.useState)([]),
                        c = s[0],
                        d = s[1],
                        u = (0, g.useState)(!1),
                        f = u[0],
                        h = u[1],
                        m = (0, g.useState)(0),
                        x = m[0],
                        j = m[1],
                        b = (0, o0.i)({
                            base: 3,
                            md: 4,
                            lg: 5
                        }) || 3;
                    (0, g.useEffect)(function() {
                        n.e(866).then(n.bind(n, 20866)).then(function(e) {
                            d(e.GLOBAL_THEMES)
                        })
                    }, []);
                    var y = [].concat((0, r9.Z)(t ? [t] : []), (0, r9.Z)(c.filter(function(e) {
                            return e.id !== (null == t ? void 0 : t.id)
                        }))),
                        C = (0, g.useCallback)(function(e) {
                            1 === e ? j(function(e) {
                                return e + 1
                            }) : j(function(e) {
                                return e - 1
                            })
                        }, []);
                    return o ? (0, X.jsx)(X.Fragment, {}) : (0, X.jsx)(ep.h, {
                        children: (0, X.jsxs)(l.k, {
                            w: "100%",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            bgColor: o3,
                            zIndex: "sticky",
                            direction: "column",
                            borderTop: "3px solid var(--chakra-colors-trueblue-500)",
                            minH: 12,
                            p: 2,
                            justifyContent: "center",
                            children: [(0, X.jsx)(l.k, {
                                alignItems: "flex-end",
                                justify: "flex-end",
                                children: (0, X.jsx)(J.z, {
                                    variant: "ghost",
                                    size: "sm",
                                    rightIcon: (0, X.jsx)(p.G, {
                                        icon: f ? o$.gc : oQ.on
                                    }),
                                    onClick: function() {
                                        return h(function(e) {
                                            return !e
                                        })
                                    },
                                    children: f ? (0, X.jsx)(a.cC, {
                                        id: "yz7wBu"
                                    }) : (0, X.jsx)(a.cC, {
                                        id: "x6tIe+"
                                    })
                                })
                            }), (0, X.jsx)(l.k, {
                                justify: "flex-start",
                                align: "flex-start",
                                bgColor: o3,
                                w: "100%",
                                children: f && (0, X.jsxs)(B.K, {
                                    direction: "row",
                                    align: "center",
                                    justify: "center",
                                    w: "100%",
                                    children: [(0, X.jsx)(D.h, {
                                        "aria-label": "Left",
                                        onClick: function() {
                                            return C(-1)
                                        },
                                        variant: "ghost",
                                        isDisabled: 0 === x,
                                        icon: (0, X.jsx)(p.G, {
                                            icon: oX.Ey
                                        })
                                    }), (0, X.jsx)(ry.r, {
                                        w: "100%",
                                        flex: 1,
                                        overflow: "hidden",
                                        padding: 2,
                                        transition: "all 0.2s ease-in-out",
                                        templateColumns: ["repeat(".concat(b, ", calc(100% / ").concat(b, " - 1em))")],
                                        gap: "0 1em",
                                        bgColor: o3,
                                        children: y.map(function(e, t) {
                                            return (0, X.jsx)(o5, {
                                                index: t,
                                                startIndex: x,
                                                isChecked: e.id === i,
                                                theme: e,
                                                onClick: function() {
                                                    r(e)
                                                }
                                            }, e.id)
                                        })
                                    }), (0, X.jsx)(D.h, {
                                        "aria-label": "Right",
                                        variant: "ghost",
                                        isDisabled: x + b > y.length,
                                        onClick: function() {
                                            return C(1)
                                        },
                                        icon: (0, X.jsx)(p.G, {
                                            icon: oJ.yO
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                o4 = n(22595),
                o8 = n(26886),
                o7 = n(53589),
                o9 = n(68690),
                se = n(10344),
                st = n(70091),
                sn = n(78357),
                sr = n(27486),
                si = [{
                    description: (0, X.jsx)(a.cC, {
                        id: "gtWy3j"
                    }),
                    shortcut: ["←", "→"]
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "UCxK2S"
                    }),
                    shortcut: ["↑", "↓"]
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "IkakN2"
                    }),
                    shortcut: "Esc"
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "CgmvBu"
                    }),
                    shortcut: "S"
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "rEj/lx"
                    }),
                    shortcut: "Enter"
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "dQU33K"
                    }),
                    shortcut: "Mod+Shift+O"
                }, {
                    description: (0, X.jsx)(a.cC, {
                        id: "K0Oq/D"
                    }),
                    shortcut: "R"
                }],
                so = function(e) {
                    var t = e.editorWrapperEl,
                        n = e.scrollingParentSelector,
                        r = (0, sr.M)({
                            editorWrapperEl: t,
                            scrollingParentSelector: n
                        }),
                        i = r.enterSlideView,
                        o = r.exitSlideView,
                        s = r.setExitedFullscreenByClick,
                        l = r.isFullscreen,
                        d = r.enterFullscreen,
                        u = r.exitFullscreen,
                        f = (0, _.CG)(L.gh),
                        m = (0, g.useRef)(f);
                    return (0, g.useEffect)(function() {
                        m.current = f
                    }, [f]), (0, X.jsxs)(V.U, {
                        children: [(0, X.jsxs)(tV.h, {
                            isAttached: !0,
                            size: "sm",
                            children: [(0, X.jsx)(h.kH, {
                                label: f === tO.q.DOC_VIEW ? (0, X.jsx)(a.cC, {
                                    id: "ek5OwP",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    }
                                }) : (0, X.jsx)(a.cC, {
                                    id: "43JI0J",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    }
                                }),
                                children: (0, X.jsx)(J.z, {
                                    variant: f === tO.q.DOC_VIEW ? "solid" : "plain",
                                    cursor: f === tO.q.SLIDE_VIEW ? "pointer" : "auto",
                                    onClick: function() {
                                        f === tO.q.SLIDE_VIEW && o()
                                    },
                                    leftIcon: (0, X.jsx)(p.G, {
                                        icon: o9.cw
                                    }),
                                    children: (0, X.jsx)(a.cC, {
                                        id: "7Zdnlq"
                                    })
                                })
                            }), (0, X.jsx)(h.kH, {
                                label: f === tO.q.SLIDE_VIEW ? (0, X.jsx)(a.cC, {
                                    id: "Zfr5aa",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    }
                                }) : (0, X.jsx)(a.cC, {
                                    id: "rK6Cev",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: er.Yc
                                    }
                                }),
                                children: (0, X.jsx)(J.z, {
                                    variant: f === tO.q.SLIDE_VIEW ? "solid" : "plain",
                                    cursor: f === tO.q.DOC_VIEW ? "pointer" : "auto",
                                    onClick: function() {
                                        f === tO.q.DOC_VIEW && i({
                                            fullscreen: !1
                                        })
                                    },
                                    leftIcon: (0, X.jsx)(p.G, {
                                        icon: o7.bg
                                    }),
                                    children: (0, X.jsx)(a.cC, {
                                        id: "FOoDGS"
                                    })
                                })
                            })]
                        }), f === tO.q.SLIDE_VIEW && (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(Y.i, {
                                orientation: "vertical"
                            }), (0, X.jsx)(h.kH, {
                                label: l ? (0, X.jsx)(a.cC, {
                                    id: "IkOhTI"
                                }) : (0, X.jsx)(a.cC, {
                                    id: "q8ARHN"
                                }),
                                children: (0, X.jsx)(D.h, {
                                    size: "sm",
                                    "aria-label": l ? c.ag._({
                                        id: "IkOhTI"
                                    }) : c.ag._({
                                        id: "q8ARHN"
                                    }),
                                    borderRadius: "md",
                                    icon: (0, X.jsx)(p.G, {
                                        icon: l ? o8.Qj : o4.TL
                                    }),
                                    onClick: l ? function() {
                                        s(!0), u()
                                    } : d
                                })
                            }), (0, X.jsxs)(E.J, {
                                children: [(0, X.jsx)(P.x, {
                                    children: (0, X.jsx)(J.z, {
                                        size: "sm",
                                        variant: "plain",
                                        fontWeight: "normal",
                                        children: (0, X.jsx)(a.cC, {
                                            id: "77Emn0"
                                        })
                                    })
                                }), (0, X.jsxs)(A.y, {
                                    border: "1px solid #eee !important",
                                    children: [(0, X.jsx)(se.Q, {}), (0, X.jsx)(st.u, {}), (0, X.jsx)(T.b, {
                                        children: (0, X.jsx)(sn.A, {
                                            list: si
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                ss = (0, g.memo)(function(e) {
                    var t = e.scrollingParentSelector,
                        n = e.editorWrapperEl;
                    (0, _.CG)(t_.yx);
                    var r = (0, g.useRef)(null);
                    return (0, X.jsx)(l.k, {
                        ref: r,
                        bg: "white",
                        borderBottom: "3px solid var(--chakra-colors-trueblue-600)",
                        position: "absolute",
                        zIndex: "overlay",
                        top: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        pr: 6,
                        children: (0, X.jsx)(l.k, {
                            direction: "column",
                            w: "100%",
                            children: (0, X.jsx)(so, {
                                editorWrapperEl: n,
                                scrollingParentSelector: t
                            })
                        })
                    })
                }),
                sa = "doc-root",
                sc = (0, tR.eT)(function(e) {
                    var t, n = e.docEditorType,
                        r = void 0 === n ? tT.Z.COLLABORATIVE : n,
                        i = (0, tR._i)(),
                        o = i.docId,
                        s = i.setCollaborativeEditorInstance,
                        a = i.editor,
                        c = (0, _.CG)(t_.yx);
                    oU(o, r), (0, oT.j)(), (0, i1.P)(), (0, i1.J)(), (0, rc.Zd)(a, ".".concat(sa)), rx(a), (0, tD.V)(), oV(a), (0, b.DD)(c, r === tT.Z.COLLABORATIVE);
                    var d = (0, g.useRef)(null),
                        f = null == c ? void 0 : c.theme,
                        p = (0, g.useState)(function() {
                            return f
                        }),
                        h = p[0],
                        m = p[1],
                        v = (0, _.TL)(),
                        y = (0, g.useRef)(!1),
                        C = (0, j.EDv)({
                            variables: {
                                docId: o,
                                snapshotId: null == c ? void 0 : c.currentSnapshotId
                            },
                            skip: !(null != c && c.currentSnapshotId)
                        }).data,
                        w = null == C ? void 0 : null === (t = C.snapshot) || void 0 === t ? void 0 : t.content.default;
                    console.debug("%c[DemoDocEditorComponent] RENDER - ".concat(o), "background-color: gold"), (0, g.useEffect)(function() {
                        f && !y.current && (m(f), y.current = !0)
                    }, [f]), (0, g.useEffect)(function() {
                        if (a) {
                            var e = null == h ? void 0 : h.config.accentBackgrounds;
                            if (!e || 0 === e.length) {
                                w && a.commands.setContent(w);
                                return
                            }
                            a.commands.updateThemeAccentImages(e)
                        }
                    }, [a, h, w]);
                    var O = (0, eo.Pp)(i$.Q);
                    oS({
                        toggleToCPanel: O.togglePanel,
                        isToCPanelOpen: O.isPanelOpen,
                        initializeToCPanel: O.initPanel
                    }), (0, g.useEffect)(function() {
                        return function() {
                            v((0, ec.qo)())
                        }
                    }, [v]);
                    var k = (0, eo.Xy)(),
                        I = k.leftPanelLifecycle;
                    return k.globalPanelLifecycle, (0, X.jsxs)(X.Fragment, {
                        children: [(0, X.jsx)("style", {
                            id: "editorStyleOverride",
                            children: "body {overflow: hidden;}"
                        }), (0, X.jsx)(x(), {
                            children: (0, X.jsxs)("title", {
                                children: ["".concat(c ? (0, oY.$)(c.title) + " | " : ""), "Gamma"]
                            })
                        }), (0, X.jsxs)(l.k, {
                            id: "doc-main",
                            direction: "row",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: d,
                            children: [(0, X.jsx)(es.Av, {
                                panelLifecycle: I
                            }), (0, X.jsxs)(l.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                minWidth: "0",
                                h: "100%",
                                children: [a && (0, X.jsx)(ss, {
                                    scrollingParentSelector: ".".concat(sa),
                                    editorWrapperEl: d.current,
                                    setTheme: m,
                                    currentThemeId: (null == h ? void 0 : h.id) || (null == f ? void 0 : f.id),
                                    templateTheme: f
                                }), (0, X.jsxs)(u.xu, {
                                    flex: "1",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    minWidth: "0",
                                    h: "100%",
                                    className: sa,
                                    children: [(0, X.jsx)(ru, {
                                        docId: o,
                                        snapshotId: null == c ? void 0 : c.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(sa),
                                        onCreate: s,
                                        theme: h,
                                        showMadeWithGammaBadge: !1
                                    }), (0, X.jsx)(ia, {
                                        editor: a,
                                        showNavigationControls: !0
                                    })]
                                })]
                            }), (0, X.jsx)(tu, {
                                editor: a
                            }), (0, X.jsx)(o6, {
                                setTheme: m,
                                currentThemeId: (null == h ? void 0 : h.id) || (null == f ? void 0 : f.id),
                                templateTheme: f
                            })]
                        })]
                    })
                }),
                sl = n(28165),
                sd = n(82779),
                su = n(49725),
                sf = "body",
                sp = n(56648),
                sh = n(60670),
                sm = n(24657),
                sx = n(27914),
                sg = n(12436),
                sv = n.n(sg),
                sj = function(e) {
                    var t = (0, or.As)(e),
                        n = (0, g.useState)("up"),
                        r = n[0],
                        i = n[1];
                    return (0, g.useEffect)(function() {
                        var e = document.querySelector(t.scrollSelector);
                        if (e) {
                            var n = (null == e ? void 0 : e.scrollTop) || 0,
                                r = function() {
                                    var t = (null == e ? void 0 : e.scrollTop) || 0;
                                    Math.abs(t - n) > 0 && (i(!(t > n) || n > 0 && 0 === t || t > 0 && 0 === n ? "up" : "down"), n = t > 0 ? t : 0)
                                },
                                o = sv()(function() {
                                    return window.requestAnimationFrame(r)
                                }, 500, {
                                    leading: !0
                                });
                            return null == e || e.addEventListener("scroll", o),
                                function() {
                                    return null == e ? void 0 : e.removeEventListener("scroll", o)
                                }
                        }
                    }, [t.scrollSelector]), r
                },
                sb = n(1153);

            function sy(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function sC(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sy(Object(n), !0).forEach(function(t) {
                        (0, O.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sy(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var sw = function(e) {
                    var t, n, r, i = e.doc,
                        o = e.onCommentFeedOpen,
                        s = e.onTocOpen,
                        a = e.commentsEnabled,
                        c = (0, sb.X)(z.H.lastHomeUrl, "/"),
                        l = (0, k.Z)(c, 1)[0],
                        u = (0, tP.SE)().user,
                        f = (null == i ? void 0 : null === (t = i.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === j.Ux9.Open
                        }).length) || 0,
                        h = sj("editor"),
                        m = (0, v.v9)(L.Pu),
                        x = (0, sx.Jh)(m),
                        g = null !== (n = m.config.bodyColor) && void 0 !== n ? n : (0, tY.wj)(m) ? "white" : "gray.800",
                        b = null !== (r = m.accentColor) && void 0 !== r ? r : (0, tY.wj)(m) ? "trueblue.300" : "trueblue.700";
                    return (0, X.jsxs)(V.U, {
                        p: 1,
                        px: 2,
                        bg: "gray.50",
                        shadow: "lg",
                        position: "sticky",
                        top: 0,
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        transform: "up" == h ? "translate(0px,0px)" : "translate(0px,-100%)",
                        opacity: "up" == h ? 1 : 0,
                        zIndex: "sticky",
                        sx: sC(sC({}, (0, sx.Oj)(x, m)), {}, {
                            border: "none",
                            filter: "none",
                            borderRadius: 0
                        }),
                        color: g,
                        children: [u && (0, X.jsx)(nw(), {
                            href: l,
                            passHref: !0,
                            legacyBehavior: !0,
                            children: (0, X.jsx)(D.h, {
                                as: eI.r,
                                "aria-label": "Home",
                                color: g,
                                _hover: {
                                    bg: "transparent",
                                    color: b
                                },
                                icon: (0, X.jsx)(p.G, {
                                    icon: sm.J9,
                                    size: "1x"
                                }),
                                variant: "ghost"
                            })
                        }), (0, X.jsx)(d.x, {
                            flex: 1,
                            fontSize: "sm",
                            noOfLines: 1,
                            ml: 2,
                            color: g,
                            children: null == i ? void 0 : i.title
                        }), (0, X.jsxs)(tV.h, {
                            variant: "ghost",
                            children: [(void 0 === a || a) && (0, X.jsx)(J.z, {
                                color: g,
                                _hover: {
                                    bg: "transparent",
                                    color: b
                                },
                                fontSize: "sm",
                                onClick: o,
                                leftIcon: (0, X.jsx)(p.G, {
                                    icon: sh.Mz
                                }),
                                children: f
                            }), (0, X.jsx)(D.h, {
                                color: g,
                                "aria-label": "Open table of contents",
                                _hover: {
                                    bg: "transparent",
                                    color: b
                                },
                                onClick: s,
                                icon: (0, X.jsx)(p.G, {
                                    icon: sp.xi
                                })
                            })]
                        })]
                    })
                },
                sO = function(e) {
                    var t = e.doc,
                        n = e.docEditorType,
                        r = e.commentsEnabled,
                        i = void 0 === r || r,
                        o = (0, tR._i)(),
                        s = o.docId,
                        a = o.setCollaborativeEditorInstance,
                        c = o.editor,
                        d = (0, S.q)({
                            id: "mobile-comment-feed-panel-drawer"
                        }),
                        u = d.isOpen,
                        f = d.onOpen,
                        p = d.onClose,
                        m = (0, S.q)({
                            id: "mobile-toc-drawer"
                        }),
                        x = m.isOpen,
                        v = m.onOpen,
                        j = m.onClose,
                        b = (0, g.useState)(null),
                        y = b[0],
                        C = b[1];
                    return console.debug("%c[MobileEditorWrapper] RENDER - ".concat(s), "background-color: gold"), (0, X.jsxs)(l.k, {
                        ref: (0, g.useCallback)(function(e) {
                            return C(e)
                        }, []),
                        direction: "column",
                        flex: 1,
                        children: [(0, X.jsx)(sw, {
                            doc: t,
                            onCommentFeedOpen: f,
                            onTocOpen: v,
                            commentsEnabled: i
                        }), n === tT.Z.PUBLIC_STATIC ? (0, X.jsx)(ru, {
                            docId: s,
                            snapshotId: null == t ? void 0 : t.currentSnapshotId,
                            scrollingParentSelector: sf,
                            onCreate: a
                        }) : n === tT.Z.EXAMPLE_STATIC ? (0, X.jsx)(ra, {
                            docId: s,
                            snapshotId: null == t ? void 0 : t.currentSnapshotId,
                            scrollingParentSelector: sf,
                            onCreate: a
                        }) : (0, X.jsxs)(X.Fragment, {
                            children: [(0, X.jsx)(eu.Ge, {
                                doc: t,
                                docId: s,
                                readOnly: !0,
                                onCreate: a,
                                scrollingParentSelector: sf
                            }), c && (0, X.jsx)(tE, {
                                editor: c
                            })]
                        }), i && u && (0, X.jsx)(h.Aj, {
                            isOpen: u,
                            onClose: p,
                            drawerProps: {
                                autoFocus: !1
                            },
                            children: (0, X.jsx)(sd.m, {
                                onClose: p,
                                editor: c
                            })
                        }), x && (0, X.jsx)(h.Aj, {
                            isOpen: x,
                            onClose: j,
                            children: (0, X.jsx)(su.o, {
                                rootElement: y,
                                handleClose: j
                            })
                        }), (0, X.jsx)(tp.a, {
                            children: (0, X.jsx)(n4, {
                                editor: c
                            })
                        })]
                    })
                },
                sk = (0, tR.eT)(function(e) {
                    var t = e.docEditorType,
                        n = void 0 === t ? tT.Z.COLLABORATIVE : t,
                        r = (0, tR._i)(),
                        i = r.docId,
                        o = r.isUnauthorized,
                        s = r.editor;
                    oU(i, n), oC(i, s), (0, oT.j)();
                    var a = (0, g.useRef)(null),
                        c = (0, v.v9)(t_.yx);
                    console.debug("%c[MobileDocViewerComponent] RENDER - ".concat(i), "background-color: gold");
                    var d = n === tT.Z.COLLABORATIVE;
                    return (0, X.jsxs)(X.Fragment, {
                        children: [(0, X.jsxs)(x(), {
                            children: [(0, X.jsxs)("title", {
                                children: ["".concat(c ? (0, oY.$)(c.title) + " | " : ""), "Gamma"]
                            }), (0, X.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, user-scalable=no"
                            })]
                        }), (0, X.jsx)(sl.Global, {
                            styles: {
                                html: {
                                    overflowX: "hidden"
                                },
                                body: {
                                    overflow: "hidden scroll",
                                    WebkitOverflowScrolling: "touch"
                                }
                            }
                        }), o ? (0, X.jsxs)(l.k, {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            color: "gray.500",
                            fontSize: "2xl",
                            p: 6,
                            textAlign: "center",
                            children: ["It looks like you don't have access to this", " ", er.Yc, "."]
                        }) : (0, X.jsx)(l.k, {
                            id: "doc-main",
                            direction: "column",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: a,
                            flex: "1",
                            children: (0, X.jsx)(sO, {
                                doc: c,
                                docEditorType: n,
                                commentsEnabled: d
                            })
                        })]
                    })
                })
        },
        13504: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return o
                }
            });
            var r = n(2784),
                i = "drag-in-progress",
                o = function() {
                    (0, r.useEffect)(function() {
                        var e = function() {
                                document.body.classList.add(i)
                            },
                            t = function() {
                                document.body.classList.remove(i)
                            };
                        return document.body.addEventListener("dragstart", e, !0), document.body.addEventListener("dragend", t, !0), document.body.addEventListener("drop", t, !0), document.body.addEventListener("mouseup", t, !0),
                            function() {
                                document.body.removeEventListener("dragstart", e, !0), document.body.removeEventListener("dragend", t, !0), document.body.removeEventListener("drop", t, !0), document.body.removeEventListener("mouseup", t, !0)
                            }
                    }, [])
                }
        }
    }
]);
//# sourceMappingURL=6407-1fda472788c45e87.js.map