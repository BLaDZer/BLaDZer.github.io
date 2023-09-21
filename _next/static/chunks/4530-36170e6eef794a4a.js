"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4530], {
        77263: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return j
                },
                c: function() {
                    return w
                }
            });
            var n = r(20406),
                o = r(95235),
                c = r(81333),
                i = r(28526),
                a = r.n(i),
                u = r(55452),
                d = r(55479),
                s = r(5632),
                l = r(2784),
                p = r(28811),
                f = r(25232),
                v = r(16673),
                m = r(58124),
                b = r(12899),
                g = r(47598),
                h = r(5945),
                O = r(52322);

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var j = {
                    example_deck_clone_toast: p.L17.DuplicateInspiration,
                    import: p.L17.ImportGoogleDoc,
                    blank: p.L17.Blank,
                    template_browser: p.L17.DuplicateTemplate,
                    get_started_modal: p.L17.Blank,
                    template_modal_griditem: p.L17.DuplicateTemplate,
                    template_dashboard_griditem: p.L17.DuplicateTemplate,
                    template_modal_preview: p.L17.DuplicateTemplate,
                    template_modal_preview_create_theme: p.L17.DuplicateTemplate,
                    "slash-new": p.L17.SlashNew,
                    editor_toolbar_doc_menu_duplicate: p.L17.DuplicateDoc,
                    dashboard_docs_view_duplicate: p.L17.DuplicateDoc,
                    ai_generated: p.L17.AiGenerated,
                    ai_generated_advanced: p.L17.AiGenerated,
                    sites_add_page: p.L17.SitesAddPage
                },
                w = function() {
                    var e = (0, h.SE)(),
                        t = e.user,
                        r = e.currentWorkspace,
                        i = (0, f.ye)("cardLayoutsEnabled"),
                        w = (0, p.CsQ)(),
                        D = (0, c.Z)(w, 2),
                        _ = D[0],
                        x = D[1],
                        P = x.data,
                        E = x.loading,
                        k = (0, s.useRouter)(),
                        C = k.push,
                        A = k.replace,
                        S = (0, d.p)();
                    return [(0, l.useCallback)(function(e) {
                        var c, d, s = null == t ? void 0 : null === (d = t.settings) || void 0 === d ? void 0 : d.needsEditorOnboarding,
                            l = e.source,
                            p = null == e ? void 0 : e.channelId,
                            f = (null == e ? void 0 : e.historyFn) === "replace" ? A : C;
                        if (!(null != r && r.id)) {
                            console.error("[createDocAndNavigate] No currentWorkspace found");
                            return
                        }
                        var h = {
                                cardLayoutsEnabled: i
                            },
                            w = null != e && e.document ? e.document : "empty" == (s ? "quickstart" : "empty") ? (0, m.R$)(t, {
                                docFlags: h
                            }) : (0, m.VK)(t, {
                                docFlags: h
                            }),
                            D = (0, g.q)(w);
                        return console.debug("[createDocAndNavigate] Creating doc", {
                            document: w,
                            encodedDocument: D
                        }), _({
                            variables: function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? y(Object(r), !0).forEach(function(t) {
                                        (0, o.Z)(e, t, r[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({
                                workspaceId: null == r ? void 0 : r.id,
                                title: (null == e ? void 0 : e.title) || "",
                                source: j[e.source],
                                initialContent: {
                                    ydoc: D,
                                    schemaVersion: b.bI,
                                    editors: [null == t ? void 0 : t.id]
                                }
                            }, p ? {
                                channels: [{
                                    channelId: p
                                }]
                            } : {})
                        }).then((c = (0, n.Z)(a().mark(function e(t) {
                            var r;
                            return a().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = t.data, (0, v.Q)({
                                            doc_id: null == r ? void 0 : r.createDoc.id,
                                            source: l,
                                            channel: p || null
                                        }), console.debug("[createDocAndNavigate] Doc created. Navigating to Editor", null == r ? void 0 : r.createDoc.id), f("/docs/".concat(null == r ? void 0 : r.createDoc.id).concat(s ? "?tour=true" : ""));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return c.apply(this, arguments)
                        })).catch(function(e) {
                            console.error("[createDocAndNavigate]", e), S({
                                title: (0, O.jsx)(u.cC, {
                                    id: "0jT1fA"
                                }),
                                description: e.message,
                                position: "top",
                                status: "error",
                                isClosable: !0,
                                duration: null
                            })
                        })
                    }, [i, _, null == r ? void 0 : r.id, C, A, S, t]), {
                        data: P,
                        loading: E
                    }]
                }
        },
        57848: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return v
                }
            });
            var n = r(95235),
                o = r(47655),
                c = r(54073),
                i = r.n(c),
                a = r(30764),
                u = r(2784),
                d = r(25232),
                s = r(36157),
                l = r(82875),
                p = r(78985);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = (0, s.TL)(),
                        n = (0, d.ye)("cardTextComputedEnabled");
                    (0, u.useEffect)(function() {
                        if (t && n) {
                            var e = i()(function() {
                                var e = {};
                                t.state.doc.descendants(function(r, n) {
                                    if ((0, l.KH)(r) && r.attrs.id) {
                                        var c = r.toJSON(),
                                            i = (0, o.getCardTitle)(c),
                                            a = t.state.doc.resolve(n),
                                            u = 0 === a.parentOffset && 1 === a.depth;
                                        e[r.attrs.id] = {
                                            title: i,
                                            text: m(t.schema, c, i),
                                            isFirstCard: u
                                        }
                                    }
                                    return !0
                                }), r((0, p.uD)({
                                    localCardTextMap: e
                                }))
                            }, 1e3);
                            return e(), t.on("update", e),
                                function() {
                                    t.off("update", e)
                                }
                        }
                    }, [t, r, n]), (0, u.useEffect)(function() {
                        e && r((0, p.eJ)({
                            cards: e
                        }))
                    }, [r, e]), (0, u.useEffect)(function() {
                        return function() {
                            r((0, p.mc)())
                        }
                    }, [])
                },
                m = function(e, t, r) {
                    var c, i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(r), !0).forEach(function(t) {
                                (0, n.Z)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, t);
                    i.content = null === (c = i.content) || void 0 === c ? void 0 : c.map(function(e) {
                        if ("card" !== e.type) return e;
                        var t = (0, o.getCardTitle)(e);
                        return {
                            type: "paragraph",
                            content: t ? [{
                                type: "text",
                                text: t
                            }] : []
                        }
                    });
                    var u = a.NB.fromJSON(e, i),
                        d = u.textBetween(0, u.content.size, "\n\n", function(e) {
                            var t = e.type.name;
                            return b[t] && b[t](e) || " "
                        });
                    return r ? (0, o.removeTitle)(d, r) : d
                },
                b = {
                    text: function(e) {
                        return e.text
                    },
                    emoji: function(e) {
                        return e.attrs.native
                    },
                    embed: function(e) {
                        var t = e.attrs,
                            r = t.meta,
                            n = t.sourceUrl,
                            o = t.url;
                        return (null == r ? void 0 : r.title) || n || o || void 0
                    },
                    mention: function(e) {
                        return "@" + e.attrs.label
                    },
                    video: function(e) {
                        var t = e.attrs,
                            r = t.meta,
                            n = t.sourceUrl,
                            o = t.embedUrl;
                        return (null == r ? void 0 : r.title) || n || o || void 0
                    }
                }
        },
        1243: function(e, t, r) {
            r.d(t, {
                R4: function() {
                    return n.R
                },
                dU: function() {
                    return o.dU
                },
                Y: function() {
                    return o.Y
                },
                Yt: function() {
                    return o.Yt
                },
                hA: function() {
                    return o.hA
                }
            }), r(39882);
            var n = r(46241),
                o = r(22550)
        },
        16673: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return i
                },
                Q: function() {
                    return c
                }
            });
            var n = r(36188),
                o = r(96575),
                c = function(e) {
                    var t = e.doc_id,
                        r = e.source,
                        c = e.source_doc_id,
                        i = e.channel;
                    null === n.co || void 0 === n.co || n.co.track(o.AA.DOC_CREATED, {
                        doc_id: t,
                        source_doc_id: c,
                        source: r,
                        channel: i
                    })
                },
                i = function(e) {
                    var t = e.docId,
                        r = e.type,
                        c = e.source;
                    if (!t) {
                        console.debug("[trackDocShareLinkCopiedEvent]: doc_id is required");
                        return
                    }
                    null === n.co || void 0 === n.co || n.co.track(o.AA.DOC_SHARELINK_COPIED, {
                        doc_id: t,
                        source: c,
                        type: r
                    })
                }
        },
        42353: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return j
                }
            });
            var n = r(95235),
                o = r(55452),
                c = r(53738),
                i = r(11919),
                a = r(91012),
                u = r(34676),
                d = r(2784),
                s = r(75245),
                l = r(44645),
                p = r(86482),
                f = r(62288),
                v = r(76602),
                m = r(76200),
                b = r(41565),
                g = r(94067),
                h = r(52322);

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var j = (0, d.memo)(function(e) {
                var t, r = e.theme,
                    n = e.variant,
                    d = r.config.contentStyles,
                    O = (0, f.R5)(r),
                    j = (0, s.wj)(r),
                    w = (0, b.l)(r),
                    D = (0, v.J)(r, !1),
                    _ = (0, g.c)(r),
                    x = (0, f.wh)(O, j, !0),
                    P = null === (t = r.config.accentBackgrounds) || void 0 === t ? void 0 : t[0],
                    E = P ? (0, f.wh)(P, j, !0) : {},
                    k = P ? {
                        display: "grid",
                        gridTemplateRows: "minmax(2.5em, auto) auto",
                        gridTemplateAreas: '"accent" "body"',
                        gridTemplateColumns: "1fr",
                        overflow: "hidden"
                    } : {};
                return (0, h.jsx)(c.xu, {
                    css: w,
                    sx: D,
                    w: "100%",
                    children: (0, h.jsxs)(i.k, y(y({
                        borderTopRadius: "ghost" === (void 0 === n ? "outline" : n) ? "none" : "md",
                        boxShadow: "sm",
                        _focus: {
                            boxShadow: "outline"
                        },
                        p: 4,
                        minH: "9em",
                        maxH: "9em",
                        transitionProperty: "common",
                        transitionDuration: "normal"
                    }, x), {}, {
                        backgroundAttachment: "initial",
                        direction: "row",
                        align: "center",
                        children: [(0, h.jsx)(l.P, {
                            theme: r
                        }), (0, h.jsxs)(c.xu, y(y({
                            sx: y(y({}, _.cardSx), d)
                        }, k), {}, {
                            borderRadius: "base",
                            className: "".concat(p.pL, " ").concat(j ? "is-dark" : ""),
                            color: j ? "white" : "gray.900",
                            flex: 1,
                            pointerEvents: "none",
                            children: [P && (0, h.jsx)(c.xu, y({
                                gridArea: '"accent"'
                            }, E)), (0, h.jsxs)(c.xu, {
                                gridArea: P ? '"body"' : void 0,
                                py: P ? 2 : 4,
                                px: 4,
                                children: [(0, h.jsx)(a.x, {
                                    className: "block-title",
                                    mt: "0 !important",
                                    mb: "".concat(P ? "0" : "var(--chakra-space-1)", " !important"),
                                    children: (0, h.jsx)(a.x, {
                                        as: "span",
                                        className: (0, u.cx)("title", m.A8),
                                        fontSize: "1.6em !important",
                                        paddingBottom: "0 !important",
                                        children: (0, h.jsx)(o.cC, {
                                            id: "MHrjPM"
                                        })
                                    })
                                }), (0, h.jsx)(a.x, {
                                    fontSize: "var(--chakra-fontSizes-sm) !important",
                                    noOfLines: 3,
                                    className: "block block-paragraph",
                                    my: "0 !important",
                                    children: (0, h.jsx)(o.cC, {
                                        id: "U41VTK",
                                        components: {
                                            0: (0, h.jsx)(a.x, {
                                                as: "a",
                                                className: "link"
                                            })
                                        }
                                    })
                                })]
                            })]
                        }))]
                    }))
                })
            });
            j.displayName = "ThemePreviewThumbnail"
        },
        13302: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return h
                }
            });
            var n = r(95235),
                o = r(81333),
                c = r(55452),
                i = r(55479),
                a = r(5632),
                u = r(2784),
                d = r(28811),
                s = r(77263),
                l = r(36188),
                p = r(16673),
                f = r(5945),
                v = r(12899),
                m = r(47598),
                b = r(52322);

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var h = function() {
                var e = (0, d.So6)({
                        refetchQueries: ["GetDocs"]
                    }),
                    t = (0, o.Z)(e, 1)[0],
                    r = (0, a.useRouter)().push,
                    h = (0, i.p)(),
                    O = (0, f.SE)(),
                    y = O.user,
                    j = O.currentWorkspace,
                    w = (0, l.z$)();
                return (0, u.useCallback)(function(e) {
                    var o, i = e.docId,
                        a = e.docTitle,
                        u = e.initialContent,
                        d = e.channelId,
                        f = e.source,
                        O = e.openThemeEditor,
                        D = e.onSuccess,
                        _ = e.newWindow,
                        x = null == y ? void 0 : null === (o = y.settings) || void 0 === o ? void 0 : o.needsEditorOnboarding;
                    if (!i) return Promise.reject(Error("Cannot duplicate without a docId"));
                    var P = h({
                        id: "duplicate-toast-".concat(i),
                        isClosable: !1,
                        position: "top",
                        status: "loading",
                        variant: "light",
                        duration: null,
                        title: (0, b.jsx)(c.cC, {
                            id: "OvEjsP"
                        })
                    });
                    return y && null != j && j.id ? t({
                        variables: {
                            duplicateDocInput: function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? g(Object(r), !0).forEach(function(t) {
                                        (0, n.Z)(e, t, r[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({
                                orgId: null == j ? void 0 : j.id,
                                sourceDocId: i,
                                source: s.R[f],
                                initialContent: u ? {
                                    ydoc: (0, m.q)(u),
                                    schemaVersion: v.bI,
                                    editors: [null == y ? void 0 : y.id]
                                } : void 0
                            }, d ? {
                                channels: [{
                                    channelId: d
                                }]
                            } : {})
                        }
                    }).then(function(e) {
                        if (!(null != e && null !== (t = e.data) && void 0 !== t && t.duplicateDoc)) throw Error("No data received");
                        null == w || w.track(l.AA.EXAMPLE_DUPLICATED, {
                            doc_id: i,
                            title: a,
                            source: f
                        });
                        var t, n, o = (null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.duplicateDoc).id;
                        (0, p.Q)({
                            doc_id: o,
                            source: f,
                            source_doc_id: i
                        }), console.debug("[Duplicate.".concat(f, "] Doc duplicated New doc id (").concat(o, "). Navigating to Editor")), h.update(P, {
                            status: "success",
                            description: (0, b.jsx)(c.cC, {
                                id: "zzDlyQ"
                            }),
                            duration: 5e3,
                            isClosable: !0
                        });
                        var u = O ? "/docs/".concat(o).concat(O ? "?openThemeEditor=true" : "") : x ? "/docs/".concat(o, "?tour=true") : "/docs/".concat(o);
                        _ ? window.open(u, "_blank") : r(u), D && o && D(o)
                    }, function(e) {
                        console.error("[Duplicate.".concat(f, "] Error duplicating doc:"), e.message), h.update(P, {
                            title: (0, b.jsx)(c.cC, {
                                id: "ADJtFi"
                            }),
                            description: e.message,
                            status: "error",
                            duration: null,
                            isClosable: !0
                        })
                    }).catch(function(e) {
                        console.error("[Duplicate.".concat(f, "] Error duplicating doc:"), e.message), h.update(P, {
                            title: (0, b.jsx)(c.cC, {
                                id: "ADJtFi"
                            }),
                            description: e.message,
                            status: "error",
                            duration: null,
                            isClosable: !0
                        })
                    }) : (console.error("[Duplicate.".concat(f, "] Cannot duplicate without a user or workspace"), {
                        user: y
                    }), Promise.reject(Error("Cannot duplicate without a user or workspace")))
                }, [null == j ? void 0 : j.id, y, h, t, w, r])
            }
        },
        55803: function(e, t) {
            t.Z = {
                src: "/_next/static/media/Sal-Spray.5abcbf19.svg",
                height: 1657,
                width: 2161,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    }
]);
//# sourceMappingURL=4530-36170e6eef794a4a.js.map