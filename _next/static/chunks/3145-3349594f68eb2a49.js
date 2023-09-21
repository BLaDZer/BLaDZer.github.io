"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3145], {
        88125: function(e, n, i) {
            i.d(n, {
                W: function() {
                    return c
                }
            });
            var t = i(47457),
                r = i(91012),
                s = i(49929),
                o = i(52322),
                c = function(e) {
                    var n = e.length,
                        i = e.idealLength,
                        c = e.maxLength;
                    return (0, o.jsxs)(r.x, {
                        fontSize: "xs",
                        color: n >= c ? "red.400" : "gray.500",
                        children: [n >= c && (0, o.jsx)(s.G, {
                            icon: t.e7
                        }), " ", n, "/", i]
                    })
                }
        },
        48453: function(e, n, i) {
            i.d(n, {
                T: function() {
                    return W
                }
            });
            var t = i(20406),
                r = i(81333),
                s = i(28526),
                o = i.n(s),
                c = i(55452),
                a = i(87254),
                l = i(55479),
                u = i(75944),
                d = i(71354),
                x = i(76360),
                h = i(75342),
                p = i(2046),
                f = i(70287),
                j = i(8283),
                m = i(27777),
                v = i(45650),
                b = i(97261),
                g = i(2784),
                C = i(28811),
                k = i(20010),
                S = i(56915),
                w = i(48273),
                y = i(92619),
                D = i(91012),
                E = i(2167),
                z = i(80353),
                O = i(76648),
                Z = i(52322),
                T = function(e) {
                    var n = e.onClose,
                        i = e.domainName,
                        t = e.onDelete,
                        r = e.isDeleting;
                    return (0, Z.jsxs)(k.u_, {
                        isOpen: !0,
                        onClose: n,
                        trapFocus: !1,
                        size: "xl",
                        isCentered: !0,
                        closeOnOverlayClick: !1,
                        children: [(0, Z.jsx)(S.Z, {}), (0, Z.jsxs)(w.h, {
                            children: [(0, Z.jsx)(y.x, {
                                children: (0, Z.jsx)(d.K, {
                                    spacing: 0,
                                    children: (0, Z.jsx)(D.x, {
                                        children: (0, Z.jsx)(c.cC, {
                                            id: "T3exbL",
                                            values: {
                                                domainName: i
                                            }
                                        })
                                    })
                                })
                            }), (0, Z.jsx)(E.f, {
                                children: (0, Z.jsx)(d.K, {
                                    spacing: 4,
                                    children: (0, Z.jsx)(D.x, {
                                        children: (0, Z.jsx)(c.cC, {
                                            id: "DkFGZj"
                                        })
                                    })
                                })
                            }), (0, Z.jsx)(z.m, {
                                children: (0, Z.jsxs)(O.h, {
                                    children: [(0, Z.jsx)(v.z, {
                                        isDisabled: r,
                                        variant: "ghost",
                                        colorScheme: "gray",
                                        onClick: n,
                                        children: (0, Z.jsx)(c.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, Z.jsx)(v.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        isLoading: r,
                                        onClick: t,
                                        loadingText: a.ag._({
                                            id: "EF2EU9"
                                        }),
                                        children: (0, Z.jsx)(c.cC, {
                                            id: "cnGeoo"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                A = i(12662),
                I = i(40130),
                N = i(31145),
                _ = i(4036),
                q = i(84103),
                G = i(93319),
                H = i(67887),
                L = i(49929),
                P = i(65987),
                U = {
                    pending: {
                        tooltip: (0, Z.jsx)(c.cC, {
                            id: "/BjVEU"
                        }),
                        badgeText: (0, Z.jsx)(c.cC, {
                            id: "bl9677"
                        }),
                        badgeColorScheme: "yellow"
                    },
                    failed: {
                        tooltip: (0, Z.jsx)(c.cC, {
                            id: "7Bj3x9"
                        }),
                        badgeText: (0, Z.jsx)(c.cC, {
                            id: "7Bj3x9"
                        }),
                        badgeColorScheme: "red"
                    }
                },
                K = function(e) {
                    var n = e.status,
                        i = e.onClick;
                    if ("verified" === n) return null;
                    var t = U[n],
                        r = t.tooltip,
                        s = t.badgeText,
                        o = t.badgeColorScheme;
                    return (0, Z.jsx)(b.kH, {
                        label: r,
                        placement: "top",
                        children: (0, Z.jsx)(_.C, {
                            display: "flex",
                            justifyContent: "center",
                            colorScheme: o,
                            cursor: i ? "pointer" : "default",
                            onClick: i || void 0,
                            children: s
                        })
                    })
                },
                M = function(e) {
                    var n = e.domain,
                        i = e.onDomainSetupClick,
                        s = e.path,
                        u = e.onDeleteClick,
                        d = e.numDomains,
                        p = (0, P.mn)({
                            domain: n,
                            path: s
                        }),
                        f = (0, l.p)(),
                        m = "verified" !== n.status || "verified" === n.status && d > 1,
                        k = (0, C.NEQ)(),
                        S = (0, r.Z)(k, 1)[0],
                        w = (0, g.useCallback)((0, t.Z)(o().mark(function e() {
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, S({
                                            variables: {
                                                id: n.id
                                            }
                                        });
                                    case 2:
                                        f({
                                            title: (0, Z.jsx)(c.cC, {
                                                id: "LIAJwx"
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [S, n.id, f]);
                    return (0, Z.jsx)(x.Z, {
                        children: (0, Z.jsx)(h.e, {
                            children: (0, Z.jsxs)(j.U, {
                                children: ["verified" === n.status ? (0, Z.jsx)(b.kH, {
                                    label: p,
                                    placement: "top",
                                    children: (0, Z.jsx)(v.z, {
                                        as: q.r,
                                        variant: "link",
                                        href: p,
                                        target: "_blank",
                                        rightIcon: (0, Z.jsx)(L.G, {
                                            icon: N.faArrowUpRightFromSquare
                                        }),
                                        children: n.name
                                    })
                                }) : (0, Z.jsx)(D.x, {
                                    children: n.name
                                }), (0, Z.jsx)(G.L, {}), (0, Z.jsx)(K, {
                                    status: n.status,
                                    onClick: "failed" === n.status ? w : null
                                }), (0, Z.jsxs)(O.h, {
                                    children: [(0, Z.jsx)(b.kH, {
                                        label: (0, Z.jsx)(c.cC, {
                                            id: "UqSZMD"
                                        }),
                                        placement: "top",
                                        children: (0, Z.jsx)(H.h, {
                                            onClick: function() {
                                                i(n.name)
                                            },
                                            "aria-label": a.ag._({
                                                id: "UqSZMD"
                                            }),
                                            size: "sm",
                                            variant: "ghost",
                                            colorScheme: "blackAlpha",
                                            icon: (0, Z.jsx)(L.G, {
                                                icon: I.faCircleInfo
                                            })
                                        })
                                    }), m && (0, Z.jsx)(b.kH, {
                                        label: (0, Z.jsx)(c.cC, {
                                            id: "C2YqXi"
                                        }),
                                        placement: "top",
                                        children: (0, Z.jsx)(H.h, {
                                            onClick: function() {
                                                u(null == n ? void 0 : n.id)
                                            },
                                            "aria-label": a.ag._({
                                                id: "C2YqXi"
                                            }),
                                            size: "sm",
                                            variant: "ghost",
                                            colorScheme: "red",
                                            icon: (0, Z.jsx)(L.G, {
                                                icon: A.faTrashCan
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                R = i(15767),
                W = function(e) {
                    var n, i = e.site,
                        s = e.path,
                        k = e.onDomainSetupClick,
                        S = e.onAddDomain,
                        w = e.isAddingDomain,
                        y = e.refetchSites,
                        D = (0, l.p)(),
                        E = (0, g.useState)(),
                        z = E[0],
                        O = E[1],
                        A = (0, g.useState)(""),
                        I = A[0],
                        N = A[1],
                        _ = (0, u.q)({
                            id: "delete-domain-modal"
                        }),
                        q = _.isOpen,
                        G = _.onOpen,
                        H = _.onClose,
                        L = i.domains.find(function(e) {
                            return e.id === z
                        }),
                        U = (0, P.m6)(I),
                        K = (0, C.Yqv)(),
                        W = (0, r.Z)(K, 2),
                        F = W[0],
                        Y = W[1].loading,
                        Q = (0, g.useState)(void 0),
                        B = Q[0],
                        V = Q[1];
                    (0, R.vm)(function() {
                        z ? V(null == L ? void 0 : L.name) : V(void 0)
                    }, [z, null == L ? void 0 : L.name], [z]);
                    var X = (0, g.useCallback)(function() {
                            H(), O(function() {})
                        }, [H]),
                        J = (0, g.useCallback)((0, t.Z)(o().mark(function e() {
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (L) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, F({
                                            variables: {
                                                id: z
                                            }
                                        });
                                    case 4:
                                        return e.next = 6, y();
                                    case 6:
                                        D({
                                            title: (0, Z.jsx)(c.cC, {
                                                id: "V4fbcv",
                                                values: {
                                                    0: L.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), X();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [y, F, z, L, X, D]);
                    return (0, Z.jsxs)(d.K, {
                        spacing: 4,
                        children: [(0, Z.jsx)(x.Z, {
                            variant: "filled",
                            children: (0, Z.jsx)(h.e, {
                                children: (0, Z.jsxs)(d.K, {
                                    spacing: 4,
                                    children: [(0, Z.jsxs)(p.NI, {
                                        children: [(0, Z.jsx)(f.l, {
                                            children: (0, Z.jsx)(c.cC, {
                                                id: "AZ4xlc"
                                            })
                                        }), (0, Z.jsxs)(j.U, {
                                            children: [(0, Z.jsx)(m.I, {
                                                bg: "white",
                                                placeholder: (null == i ? void 0 : null === (n = i.domains) || void 0 === n ? void 0 : n.length) ? a.ag._({
                                                    id: "B6e4xs"
                                                }) : a.ag._({
                                                    id: "1y9z1r"
                                                }),
                                                value: I,
                                                onChange: function(e) {
                                                    return N(e.target.value)
                                                },
                                                onKeyDown: function(e) {
                                                    "Enter" === e.key && U && (e.preventDefault(), S(I), N(""))
                                                }
                                            }), (0, Z.jsx)(d.K, {
                                                children: (0, Z.jsx)(b.kH, {
                                                    label: (0, Z.jsx)(c.cC, {
                                                        id: "aUB5ST"
                                                    }),
                                                    placement: "top",
                                                    shouldWrapChildren: !0,
                                                    isDisabled: U,
                                                    children: (0, Z.jsx)(v.z, {
                                                        isDisabled: !U,
                                                        variant: "plain",
                                                        onClick: function() {
                                                            S(I), N("")
                                                        },
                                                        isLoading: w,
                                                        children: (0, Z.jsx)(c.cC, {
                                                            id: "EdEpYN"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    }), i.domains.map(function(e) {
                                        return (0, Z.jsx)(M, {
                                            domain: e,
                                            onDomainSetupClick: k,
                                            path: s,
                                            onDeleteClick: function(e) {
                                                O(e), G()
                                            },
                                            numDomains: i.domains.length || 0
                                        }, e.id)
                                    })]
                                })
                            })
                        }), q && (0, Z.jsx)(T, {
                            onClose: X,
                            onDelete: J,
                            domainName: B,
                            isDeleting: Y
                        })]
                    })
                }
        },
        86554: function(e, n, i) {
            i.d(n, {
                w: function() {
                    return M
                }
            });
            var t, r = i(60697),
                s = i(55452),
                o = i(55479),
                c = i(20010),
                a = i(56915),
                l = i(48273),
                u = i(92619),
                d = i(64827),
                x = i(2167),
                h = i(76360),
                p = i(75342),
                f = i(71354),
                j = i(91012),
                m = i(11919),
                v = i(45650),
                b = i(8283),
                g = i(40110),
                C = i(74642),
                k = i(73851),
                S = i(36258),
                w = i(19875),
                y = i(35319),
                D = i(27912),
                E = i(72360),
                z = i(48322),
                O = i(35837),
                Z = i(58499),
                T = i(80353),
                A = i(49929),
                I = i(97261),
                N = i(2784),
                _ = i(15767),
                q = i(56613),
                G = i(20406),
                H = i(28526),
                L = i.n(H),
                P = i(65987),
                U = (t = (0, G.Z)(L().mark(function e(n) {
                    var i, t, r;
                    return L().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/domains/connectToken").then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    if (!e.auth_token) throw Error("No auth token returned");
                                    return e.auth_token
                                });
                            case 2:
                                if (i = e.sent, window.entri) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("Entri not found");
                            case 5:
                                return console.log("[launchEntri] Launching Entri with config", r = {
                                    applicationId: "gamma",
                                    token: i,
                                    prefilledDomain: (t = (0, P.Yd)(n)).domain,
                                    dnsRecords: t.dnsRecords
                                }), window.entri.showEntri(r), e.abrupt("return", new Promise(function(e, n) {
                                    var i = function i(t) {
                                        console.log("onEntriClose: event", t), window.removeEventListener("onEntriClose", i), t.detail.success ? e(t.detail) : n(t.detail)
                                    };
                                    window.addEventListener("onEntriClose", i, !1)
                                }));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return t.apply(this, arguments)
                }),
                K = i(52322),
                M = function(e) {
                    var n = e.isOpen,
                        i = e.onClose,
                        t = e.domainName,
                        G = e.onDomainConfirmed,
                        H = (0, N.useState)("initial"),
                        L = H[0],
                        M = H[1],
                        R = (0, N.useRef)(!1),
                        W = (0, N.useState)(function() {
                            return void 0 !== window.entri
                        }),
                        F = W[0],
                        Y = W[1],
                        Q = (0, N.useState)(!1),
                        B = Q[0],
                        V = Q[1],
                        X = (0, o.p)();
                    (0, _.Gq)(q.oc, {
                        predicate: function() {
                            return void 0 === window.entri
                        },
                        onload: function() {
                            Y(!0), R.current = !0
                        }
                    });
                    var J = (0, N.useMemo)(function() {
                            return (0, P.Yd)(t || "")
                        }, [t]),
                        $ = J.dnsRecords,
                        ee = J.isRootDomain,
                        en = J.subdomain;
                    return (0, K.jsx)(I.Wk, {
                        isDark: !1,
                        children: (0, K.jsxs)(c.u_, {
                            isOpen: n,
                            onClose: i,
                            size: "3xl",
                            children: [(0, K.jsx)(a.Z, {}), (0, K.jsxs)(l.h, {
                                children: [(0, K.jsx)(u.x, {
                                    children: (0, K.jsx)(s.cC, {
                                        id: "xQMU8T",
                                        values: {
                                            domainName: t
                                        }
                                    })
                                }), (0, K.jsx)(d.o, {}), (0, K.jsxs)(x.f, {
                                    children: ["initial" === L && (0, K.jsx)(h.Z, {
                                        variant: "filled",
                                        children: (0, K.jsx)(p.e, {
                                            children: (0, K.jsxs)(f.K, {
                                                spacing: 4,
                                                py: 4,
                                                mx: "auto",
                                                children: [(0, K.jsxs)(f.K, {
                                                    spacing: 2,
                                                    children: [(0, K.jsxs)(f.K, {
                                                        spacing: 1,
                                                        children: [(0, K.jsx)(j.x, {
                                                            textAlign: "center",
                                                            fontSize: "2xl",
                                                            children: (0, K.jsx)(A.G, {
                                                                icon: r.g4,
                                                                size: "lg"
                                                            })
                                                        }), (0, K.jsx)(j.x, {
                                                            fontWeight: "semibold",
                                                            fontSize: "lg",
                                                            textAlign: "center",
                                                            children: (0, K.jsx)(s.cC, {
                                                                id: "w5l5pM"
                                                            })
                                                        })]
                                                    }), (0, K.jsx)(j.x, {
                                                        textAlign: "center",
                                                        maxW: "unset",
                                                        children: (0, K.jsx)(s.cC, {
                                                            id: "MhdvBQ"
                                                        })
                                                    })]
                                                }), (0, K.jsx)(m.k, {
                                                    align: "center",
                                                    justify: "center",
                                                    w: "100%",
                                                    children: (0, K.jsxs)(f.K, {
                                                        w: 64,
                                                        maxW: "100%",
                                                        children: [(0, K.jsx)(v.z, {
                                                            size: "md",
                                                            variant: "solid",
                                                            isDisabled: !F,
                                                            isLoading: B,
                                                            onClick: function() {
                                                                t && (V(!0), U(t).then(function(e) {
                                                                    console.log("[ENTRI] Successfully setup domain", e), X({
                                                                        title: (0, K.jsx)(s.cC, {
                                                                            id: "p8Oc6N"
                                                                        }),
                                                                        description: (0, K.jsx)(s.cC, {
                                                                            id: "HqV46b"
                                                                        }),
                                                                        status: "success",
                                                                        duration: 3e3,
                                                                        isClosable: !0,
                                                                        position: "top"
                                                                    }), null == G || G(t)
                                                                }).catch(function(e) {
                                                                    X({
                                                                        title: (0, K.jsx)(s.cC, {
                                                                            id: "l/2jzv"
                                                                        }),
                                                                        description: e.message,
                                                                        status: "error",
                                                                        duration: 3e3,
                                                                        isClosable: !0,
                                                                        position: "top"
                                                                    })
                                                                }).finally(function() {
                                                                    V(!1)
                                                                }))
                                                            },
                                                            children: (0, K.jsx)(s.cC, {
                                                                id: "qu+sXe"
                                                            })
                                                        }), (0, K.jsxs)(b.U, {
                                                            children: [(0, K.jsx)(g.i, {}), (0, K.jsx)(j.x, {
                                                                color: "gray.600",
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "BzEFor"
                                                                })
                                                            }), (0, K.jsx)(g.i, {})]
                                                        }), (0, K.jsx)(v.z, {
                                                            size: "md",
                                                            variant: "plain",
                                                            onClick: function() {
                                                                M("manualSetup")
                                                            },
                                                            children: (0, K.jsx)(s.cC, {
                                                                id: "ANIrop"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    }), "manualSetup" === L && (0, K.jsx)(h.Z, {
                                        variant: "filled",
                                        children: (0, K.jsx)(p.e, {
                                            children: (0, K.jsxs)(f.K, {
                                                spacing: 6,
                                                children: [(0, K.jsx)(j.x, {
                                                    fontWeight: "semibold",
                                                    fontSize: "lg",
                                                    children: (0, K.jsx)(s.cC, {
                                                        id: "L5N7HX"
                                                    })
                                                }), (0, K.jsxs)(C.i, {
                                                    variant: "simple",
                                                    children: [(0, K.jsx)(k.h, {
                                                        children: (0, K.jsxs)(S.Tr, {
                                                            children: [(0, K.jsx)(w.Th, {
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "6YtxFj"
                                                                })
                                                            }), (0, K.jsx)(w.Th, {
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "+zy2Nq"
                                                                })
                                                            }), (0, K.jsx)(w.Th, {
                                                                isNumeric: !0,
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "HKH+W+"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, K.jsx)(y.p, {
                                                        children: ($ || []).map(function(e) {
                                                            return (0, K.jsxs)(S.Tr, {
                                                                children: [(0, K.jsx)(D.Td, {
                                                                    fontFamily: "mono",
                                                                    children: e.host
                                                                }), (0, K.jsx)(D.Td, {
                                                                    fontFamily: "mono",
                                                                    children: e.type
                                                                }), (0, K.jsx)(D.Td, {
                                                                    isNumeric: !0,
                                                                    fontFamily: "mono",
                                                                    children: e.value
                                                                })]
                                                            }, e.value)
                                                        })
                                                    })]
                                                }), (0, K.jsxs)(E.b, {
                                                    status: "info",
                                                    colorScheme: "orange",
                                                    children: [(0, K.jsx)(z.z, {}), (0, K.jsxs)(f.K, {
                                                        children: [(0, K.jsx)(j.x, {
                                                            fontWeight: "bold",
                                                            fontSize: "md",
                                                            children: (0, K.jsx)(s.cC, {
                                                                id: "NxHkkp"
                                                            })
                                                        }), (0, K.jsxs)(O.GS, {
                                                            pl: "4",
                                                            spacing: "2",
                                                            children: [ee ? 1 === q.Co.length ? (0, K.jsx)(O.HC, {
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "YMrXdT",
                                                                    values: {
                                                                        0: q.Co[0]
                                                                    },
                                                                    components: {
                                                                        0: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        2: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            }) : (0, K.jsx)(O.HC, {
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "FM+LNW",
                                                                    values: {
                                                                        0: q.Co.slice(0, -1).map(function(e) {
                                                                            return (0, K.jsx)(Z.E, {
                                                                                colorScheme: "gray",
                                                                                children: e
                                                                            }, e)
                                                                        }),
                                                                        1: q.Co.slice(-1)[0]
                                                                    },
                                                                    components: {
                                                                        0: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, K.jsx)(b.U, {
                                                                            display: "inline",
                                                                            divider: (0, K.jsx)("span", {
                                                                                children: ", "
                                                                            })
                                                                        }),
                                                                        2: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        3: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            }) : null, (0, K.jsx)(O.HC, {
                                                                children: (0, K.jsx)(s.cC, {
                                                                    id: "Jmb6Yp",
                                                                    values: {
                                                                        subdomain: en,
                                                                        GAMMA_SITES_HOST: q.ax
                                                                    },
                                                                    components: {
                                                                        0: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        2: (0, K.jsx)(Z.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), G && (0, K.jsxs)(b.U, {
                                                    justifyContent: "space-between",
                                                    children: [(0, K.jsx)(v.z, {
                                                        variant: "plain",
                                                        onClick: function() {
                                                            return M("initial")
                                                        },
                                                        children: (0, K.jsx)(s.cC, {
                                                            id: "iH8pgl"
                                                        })
                                                    }), (0, K.jsx)(v.z, {
                                                        variant: "solid",
                                                        onClick: function() {
                                                            i(), null == G || G(t)
                                                        },
                                                        size: "md",
                                                        mx: "auto",
                                                        children: (0, K.jsx)(s.cC, {
                                                            id: "RyhVuk"
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                }), (0, K.jsx)(T.m, {})]
                            })]
                        })
                    })
                }
        },
        33837: function(e, n, i) {
            i.d(n, {
                q: function() {
                    return w
                }
            });
            var t = i(95235),
                r = i(20406),
                s = i(81333),
                o = i(31145),
                c = i(76035),
                a = i(28526),
                l = i.n(a),
                u = i(55452),
                d = i(55479),
                x = i(53738),
                h = i(8283),
                p = i(91012),
                f = i(45650),
                j = i(97907),
                m = i(49929),
                v = i(2784),
                b = i(53776),
                g = i(65987),
                C = i(52322);

            function k(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function S(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? k(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : k(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var w = function(e) {
                var n, i, t, a, k = e.doc,
                    w = e.site,
                    y = e.path,
                    D = (0, d.p)(),
                    E = (0, b.sIg)(),
                    z = (0, s.Z)(E, 1)[0],
                    O = (0, b.sR8)(),
                    Z = (0, s.Z)(O, 1)[0],
                    T = (0, b.odt)(),
                    A = (0, s.Z)(T, 1)[0],
                    I = (0, b.L24)(),
                    N = (0, s.Z)(I, 1)[0],
                    _ = (0, b.kui)(),
                    q = (0, s.Z)(_, 2),
                    G = q[0],
                    H = q[1].loading,
                    L = (0, b.V$$)(),
                    P = (0, s.Z)(L, 2),
                    U = P[0],
                    K = P[1].loading,
                    M = null == k ? void 0 : k.id,
                    R = null == k ? void 0 : null === (t = k.organization) || void 0 === t ? void 0 : t.id,
                    W = (0, g.mn)({
                        domain: null == w ? void 0 : null === (a = w.domains) || void 0 === a ? void 0 : a[0],
                        path: y
                    }),
                    F = null == w ? void 0 : w.id;
                return {
                    publishAndDeploy: (0, v.useCallback)((0, r.Z)(l().mark(function e() {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (M) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, (0, g.iL)(M);
                                case 4:
                                    return e.next = 6, z({
                                        variables: {
                                            id: M
                                        },
                                        update: function(e, n) {
                                            var i = n.data,
                                                t = null == i ? void 0 : i.publishDoc;
                                            t && e.updateQuery({
                                                query: b.yE1,
                                                variables: {
                                                    id: t.id
                                                }
                                            }, function(e) {
                                                var n;
                                                return (e || console.log("%c Publish doc _data is undefined or null", "color: red; font-size: 16px"), null != e && e.doc) ? {
                                                    doc: S(S({}, e.doc), {}, {
                                                        publishedTime: t.publishedTime,
                                                        publishedSnapshotId: null === (n = t.publishedSnapshot) || void 0 === n ? void 0 : n.id
                                                    })
                                                } : e
                                            })
                                        }
                                    }).then(function() {
                                        return Z({
                                            variables: {
                                                siteId: null == w ? void 0 : w.id
                                            }
                                        })
                                    }).then(function() {
                                        D({
                                            render: function() {
                                                return (0, C.jsx)(x.xu, {
                                                    color: "white",
                                                    p: 3,
                                                    bg: "green.500",
                                                    shadow: "md",
                                                    borderRadius: "md",
                                                    children: (0, C.jsxs)(h.U, {
                                                        spacing: 4,
                                                        children: [(0, C.jsx)(x.xu, {
                                                            children: (0, C.jsx)(m.G, {
                                                                icon: c.faCircleCheck
                                                            })
                                                        }), (0, C.jsx)(p.x, {
                                                            fontWeight: "semibold",
                                                            children: "Your changes have been published."
                                                        }), W && (0, C.jsx)(f.z, {
                                                            variant: "plain",
                                                            as: "a",
                                                            target: "_blank",
                                                            _hover: {
                                                                textDecoration: "none",
                                                                color: "trueblue.500"
                                                            },
                                                            href: W,
                                                            rightIcon: (0, C.jsx)(m.G, {
                                                                icon: o.faArrowUpRightFromSquare
                                                            }),
                                                            children: "View site"
                                                        }), (0, C.jsx)(j.P, {
                                                            onClick: function() {
                                                                return D.closeAll()
                                                            }
                                                        })]
                                                    })
                                                })
                                            },
                                            status: "success",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        })
                                    }).catch(function(e) {
                                        D({
                                            title: (0, C.jsx)(u.cC, {
                                                id: "DD5mqk"
                                            }),
                                            status: "error",
                                            position: "top",
                                            isClosable: !0
                                        }), console.error("Error publishing site:", e.message)
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [M, z, Z, null == w ? void 0 : w.id, D, W]),
                    addDomain: (0, v.useCallback)((n = (0, r.Z)(l().mark(function e(n) {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!F || !M)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2, e.next = 5, G({
                                        variables: {
                                            input: {
                                                siteId: F,
                                                name: n
                                            }
                                        },
                                        refetchQueries: ["GetSites", "GetDoc"]
                                    });
                                case 5:
                                    e.next = 11;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(2), console.error("Error adding domain:", e.t0), D({
                                        status: "error",
                                        title: (0, C.jsx)(u.cC, {
                                            id: "HugOMA"
                                        }),
                                        isClosable: !0,
                                        position: "top"
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [2, 7]
                        ])
                    })), function(e) {
                        return n.apply(this, arguments)
                    }), [G, M, F, D]),
                    isAddingDomain: H,
                    createSite: (0, v.useCallback)((i = (0, r.Z)(l().mark(function e(n) {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (M) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    U({
                                        variables: {
                                            input: {
                                                workspaceId: R,
                                                name: n,
                                                domains: [{
                                                    name: n
                                                }],
                                                routes: []
                                            }
                                        },
                                        refetchQueries: ["GetSites", "GetDoc"]
                                    }).catch(function(e) {
                                        console.error("Error creating site:", e.message)
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return i.apply(this, arguments)
                    }), [M, R, U]),
                    isCreatingSite: K,
                    unpublishAndDeploy: (0, v.useCallback)((0, r.Z)(l().mark(function e() {
                        var n;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!F || !M)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, N({
                                        variables: {
                                            id: M
                                        },
                                        update: function(e, n) {
                                            var i = n.data,
                                                t = null == i ? void 0 : i.unpublishDoc;
                                            t && e.updateQuery({
                                                query: b.yE1,
                                                variables: {
                                                    id: t.id
                                                }
                                            }, function(e) {
                                                return null != e && e.doc ? {
                                                    doc: S(S({}, e.doc), {}, {
                                                        publishedSnapshotId: null
                                                    })
                                                } : e
                                            })
                                        }
                                    }).then(function() {
                                        return A({
                                            variables: {
                                                input: {
                                                    siteId: F,
                                                    routes: (0, g.kj)({
                                                        docId: M,
                                                        routes: (null == w ? void 0 : w.routes) || [],
                                                        path: null
                                                    })
                                                }
                                            }
                                        })
                                    }).then(function() {
                                        return Z({
                                            variables: {
                                                siteId: null == w ? void 0 : w.id
                                            }
                                        })
                                    }).then(function() {
                                        D({
                                            description: null != w && w.name ? (0, C.jsx)(u.cC, {
                                                id: "Qv0Wgn",
                                                values: {
                                                    0: null == w ? void 0 : w.name
                                                }
                                            }) : (0, C.jsx)(u.cC, {
                                                id: "3fkTmP"
                                            }),
                                            status: "success",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        })
                                    }).catch(function(e) {
                                        D({
                                            title: (0, C.jsx)(u.cC, {
                                                id: "uMOlnl"
                                            }),
                                            status: "error",
                                            position: "top",
                                            isClosable: !0
                                        }), console.error("Error unpublishing site:", e.message)
                                    });
                                case 4:
                                    return n = e.sent, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [F, M, N, null == w ? void 0 : w.routes, null == w ? void 0 : w.id, null == w ? void 0 : w.name, A, Z, D]),
                    updateRoutes: (0, v.useCallback)((0, r.Z)(l().mark(function e() {
                        var n;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!M || !F)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return n = (0, g.kj)({
                                        routes: (null == w ? void 0 : w.routes) || [],
                                        docId: M,
                                        path: y
                                    }), e.next = 5, A({
                                        variables: {
                                            input: {
                                                siteId: F,
                                                routes: n
                                            }
                                        }
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [A, M, null == w ? void 0 : w.routes, F, y])
                }
            }
        },
        11943: function(e, n, i) {
            i.d(n, {
                m: function() {
                    return o
                }
            });
            var t = i(11919);
            i(2784);
            var r = i(69663),
                s = i(52322),
                o = function(e) {
                    var n = e.children;
                    return (0, s.jsxs)(t.k, {
                        alignSelf: "stretch",
                        position: "relative",
                        height: "var(--100vh)",
                        direction: "column",
                        children: [(0, s.jsx)(r.Y, {}), n]
                    })
                }
        },
        88550: function(e, n, i) {
            i.d(n, {
                T: function() {
                    return t
                }
            });
            var t = new(i(37438)).v
        },
        8709: function(e, n, i) {
            i.d(n, {
                AA: function() {
                    return p
                },
                DN: function() {
                    return x
                },
                mb: function() {
                    return h
                }
            });
            var t = i(20406),
                r = i(28526),
                s = i.n(r),
                o = i(5632),
                c = i(2784),
                a = i(36157),
                l = i(65987),
                u = i(17349),
                d = i(88550),
                x = (0, c.createContext)({
                    openPageSetup: function(e, n) {}
                }),
                h = function(e, n) {
                    var i = (0, o.useRouter)().push,
                        r = (0, a.qr)();
                    return (0, c.useMemo)(function() {
                        var o;
                        return {
                            openPageSetup: (o = (0, t.Z)(s().mark(function t(o, c) {
                                var a, x;
                                return s().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (a = function() {
                                                    return d.T.emit("openPageSetup", c)
                                                }, !(o !== e)) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.next = 6, i((0, l.as)(n, o));
                                        case 6:
                                            x = r.subscribe(function() {
                                                (0, u.ke)(r.getState()) === o && (a(), x())
                                            }), t.next = 10;
                                            break;
                                        case 9:
                                            a();
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(e, n) {
                                return o.apply(this, arguments)
                            })
                        }
                    }, [e, i, n, r])
                },
                p = function() {
                    return (0, c.useContext)(x)
                }
        }
    }
]);
//# sourceMappingURL=3145-3349594f68eb2a49.js.map