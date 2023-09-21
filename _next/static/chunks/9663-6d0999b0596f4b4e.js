"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9663], {
        69663: function(e, o, t) {
            t.d(o, {
                Y: function() {
                    return G
                }
            });
            var r, a, n, i, l, d = t(95235),
                c = t(84586),
                s = t(28165),
                p = t(2784),
                m = t(86482),
                b = t(48150);

            function g(e, o) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter(function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function u(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? g(Object(t), !0).forEach(function(o) {
                        (0, d.Z)(e, o, t[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
                    })
                }
                return e
            }
            var h = {
                    fontSize: "var(--chakra-fontSizes-sm) !important",
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: "500 !important",
                    lineHeight: "1.5 !important",
                    textTransform: "none",
                    letterSpacing: "normal !important",
                    textAlign: "left !important",
                    margin: "0 !important",
                    color: "var(--chakra-colors-gray-900) !important",
                    background: "none !important",
                    blockquote: {
                        borderLeftWidth: "0px !important",
                        borderLeftStyle: "solid !important",
                        borderLeftColor: "transparent !important",
                        padding: "0 !important",
                        color: "var(--chakra-colors-gray-900) !important",
                        fontStyle: "normal !important"
                    },
                    border: "0 none !important",
                    padding: "0 !important",
                    content: '""'
                },
                v = u(u({}, h), {}, {
                    color: "var(--chakra-colors-blue-500) !important",
                    "&:hover": {
                        textDecoration: "underline"
                    },
                    cursor: "pointer"
                }),
                f = {
                    "p,h1,h2,h3,h4,h5,h6, .title, .section-title": u(u({}, h), {}, {
                        margin: 0
                    }),
                    a: v,
                    "ul, ol": {
                        marginLeft: "1.2em"
                    },
                    blockquote: {
                        borderLeft: "3px solid var(--chakra-colors-gray-200)",
                        paddingLeft: "0.5em"
                    },
                    color: "var(--chakra-colors-gray-900) !important",
                    wordBreak: "break-word",
                    lineHeight: "1.5 !important",
                    letterSpacing: "normal !important",
                    ".mention": {
                        bgColor: "trueblue.50",
                        whiteSpace: "break-spaces"
                    }
                },
                y = {
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: "500",
                    "@media screen and (max-width: 30rem)": {
                        ".controls-wrapper": {}
                    },
                    "@media screen and (min-width: 30rem)": {
                        ".controls-wrapper": {
                            paddingLeft: "var(--comment-padding)"
                        },
                        ".controls-wrapper__gridLayout, .controls-wrapper__gallery": {
                            paddingLeft: "calc(-1 * var(--grid-padding) + var(--comment-padding))"
                        }
                    },
                    ".comments-list": {
                        ".comments-sign-up": {
                            a: u(u(u({}, h), v), {}, {
                                fontSize: "xs",
                                color: "gray.500",
                                fontWeight: "bold",
                                "&:hover": {
                                    color: "gray.500",
                                    textDecoration: "underline"
                                }
                            })
                        },
                        ".comment": u({
                            ".reactions-row ul": {
                                marginLeft: "auto"
                            },
                            ".comment-date": {
                                fontSize: "var(--chakra-fontSizes-xs) !important",
                                color: "var(--chakra-colors-gray-500) !important"
                            }
                        }, f),
                        ".block-image": {
                            "&.is-focused": {
                                "img, .image, .placeholder": {
                                    boxShadow: "var(--chakra-shadows-outline)"
                                }
                            }
                        },
                        ".block-target-html": {
                            "p,h1,h2,h3,h4,h5,h6,blockquote,ol,ul,li, .title, .section-title": u(u({}, h), {}, {
                                "::after": h
                            }),
                            a: u({}, v),
                            li: {
                                margin: "0 !important",
                                padding: "0 !important",
                                listStyle: "none !important",
                                p: {
                                    margin: 0
                                }
                            },
                            img: {
                                maxWidth: "200px",
                                maxHeight: "80px"
                            }
                        }
                    },
                    ".comment-editor .ProseMirror": u(u({}, f), {}, (r = {}, (0, d.Z)(r, "\n      @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2),\n      @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3),\n      @media only screen and (max-device-width: 640px) and (-webkit-min-device-pixel-ratio: 4)\n    ", {
                        fontSize: "16px  !important"
                    }), (0, d.Z)(r, "padding", "12px"), (0, d.Z)(r, "borderRadius", "5px"), (0, d.Z)(r, "&.focus-visible", {
                        boxShadow: "0 0 0 2px rgb(49, 130, 206)"
                    }), (0, d.Z)(r, "a.image-link", {
                        pointerEvents: "none"
                    }), r))
                },
                k = t(7328),
                w = t(56974),
                x = t.n(w),
                L = t(61528),
                O = t(76134),
                S = t(20325),
                C = t(3497),
                j = "0 0 0 0 rgba(0, 0, 0, 0.0)",
                P = (0, s.keyframes)(a || (a = (0, k.Z)(["\n  0% {\n    box-shadow: ", ";\n  }\n  7%,\n  60% {\n    box-shadow: var(--link-box-shadow);\n  }\n  100% {\n    box-shadow: ", ";\n  }\n"])), j, j),
                Z = (0, s.keyframes)(n || (n = (0, k.Z)(["\n  0% \n  100% {\n    box-shadow: ", ";\n  }\n"])), j),
                W = t(12133),
                D = {
                    ".block-smartLayout": (0, d.Z)({
                        '[data-node-view-content-outer="smartLayout"]': {
                            display: "contents"
                        },
                        '[data-node-view-content-inner="smartLayout"]': {
                            display: "contents"
                        },
                        "[data-selection-ring]": {
                            outlineStyle: "none",
                            outlineWidth: "1px",
                            outlineColor: "var(--grid-outline-color)"
                        },
                        '[data-selection-ring="padded"]': {
                            outlineOffset: "0.25em",
                            ".add-button": {
                                m: "-0.25em"
                            }
                        }
                    }, "&.is-focused, &:hover, &[".concat(C.r, "]"), {
                        ".is-editable": {
                            "[data-selection-ring]": {
                                outlineStyle: "solid"
                            },
                            ".add-button": {
                                opacity: 1
                            }
                        }
                    }),
                    ".node-smartLayoutCell": {
                        display: "contents",
                        "> [data-node-view-wrapper]": {
                            display: "contents"
                        },
                        '[data-node-view-content-inner="smartLayoutCell"] > .first-block': {
                            mt: [0, 0]
                        },
                        '[data-node-view-content-inner="smartLayoutCell"] > .last-block': {
                            mb: [0, 0]
                        },
                        ".slash-menu-prompt": {
                            display: "none"
                        }
                    }
                },
                _ = t(32103),
                E = t(46737),
                z = t(12162),
                I = t(9307);

            function A(e, o) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter(function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function q(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? A(Object(t), !0).forEach(function(o) {
                        (0, d.Z)(e, o, t[o])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
                    })
                }
                return e
            }
            var R = {
                    content: "attr(placeholder)",
                    position: "absolute",
                    top: 0,
                    opacity: .3,
                    pointerEvents: "none",
                    left: 0,
                    width: "100%",
                    color: "var(--heading-color)",
                    lineClamp: 1,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    boxOrient: "vertical",
                    wordBreak: "break-all",
                    height: "100%",
                    whiteSpace: "nowrap"
                },
                X = (0, s.keyframes)(i || (i = (0, k.Z)(["\n  0% {\n    align-items: flex-start;\n    grid-template-rows: 0.2fr;\n    overflow: hidden;\n  }\n  99% {\n    align-items: flex-start;\n    overflow: hidden;\n  }\n  100% {\n    align-items: initial;\n    grid-template-rows: 1fr;\n    overflow: visible;\n  }\n"]))),
                B = {
                    "@media screen and (max-width: 30rem)": {
                        ".insert-card-button": {
                            height: 6,
                            width: 6,
                            minW: 6,
                            fontSize: "xs"
                        }
                    }
                },
                Y = q(q(q(q(q(q(q({
                    height: "100%",
                    outlineWidth: "0px",
                    lineHeight: (0, L.s2)() ? "1.6 !important" : W.I0,
                    "--box-border-color": "var(--chakra-colors-blackAlpha-200)",
                    "--grid-outline-color": "var(--chakra-colors-gray-200)",
                    "--grid-border": "1px",
                    "--grid-padding": "1.22em",
                    "&.is-dark": q(q({
                        "--grid-outline-color": "var(--chakra-colors-gray-700)",
                        "--box-border-color": "var(--chakra-colors-whiteAlpha-400)",
                        ".block-blockquote": {
                            blockquote: {
                                borderLeftColor: "var(--accent-color)"
                            }
                        }
                    }, _.KX.dark), E.E_.dark),
                    ".block-card": {
                        "&.expandable-node": {
                            "&-selected .expandable-selected": {
                                animation: "".concat(P, " 3000ms ease-in-out forwards")
                            },
                            "&-reset .expandable-selected": {
                                animation: "".concat(Z)
                            }
                        }
                    },
                    ".block": {
                        my: z.l1,
                        fontFamily: "var(--body-font)",
                        fontWeight: "var(--body-font-weight)",
                        color: "var(--body-color)"
                    },
                    "&.is-nested": {
                        display: "grid",
                        animation: "".concat(X, " ").concat(S.nY, "ms ease-out forwards")
                    },
                    "&.is-full-width": {
                        ".block.is-full-width": {
                            width: "var(--full-width)",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }
                    },
                    "&.is-borderless": (0, L.s2)() ? {} : {
                        '> [data-node-view-content-inner="card"] > .node-cardAccentLayoutItem': {
                            "> [data-node-view-wrapper]": {
                                display: "flex"
                            },
                            '.card-layout-cell-bg:not([data-card-layout="behind"], [data-card-layout="top"])': {
                                margin: "1em",
                                borderRadius: "var(--box-border-radius)",
                                height: "auto"
                            },
                            '.card-layout-cell-bg:is([data-card-layout="behind"], [data-card-layout="top"])': {
                                width: "var(--editor-width)",
                                position: "absolute",
                                transform: "translateX(-50%)",
                                left: "50%"
                            }
                        }
                    },
                    '[data-node-view-content-inner="cardLayoutItem"], [data-node-view-content-inner="card"]': {
                        "> .first-block": {
                            mt: "0em"
                        },
                        "> .last-block": {
                            mb: "0em"
                        }
                    },
                    "a.link": {
                        color: "var(--text-color, var(--link-color))",
                        cursor: "pointer",
                        fontWeight: "bold",
                        textDecoration: "underline",
                        '&[href=""]': {
                            textDecorationStyle: "dashed"
                        },
                        "&:hover": {
                            color: "var(--link-color-hover)"
                        },
                        "&:active": {
                            color: "var(--link-color-hover)"
                        }
                    },
                    ".block-toggle": {
                        "&.expandable-node": {
                            "&-selected .toggle": {
                                animation: "".concat(P, " 3000ms ease-in-out forwards")
                            },
                            "&-reset .toggle": {
                                animation: "".concat(Z)
                            }
                        },
                        ".node-toggleSummary": {
                            "&.is-empty": {
                                "[placeholder]": {
                                    _before: R
                                }
                            }
                        },
                        '[data-open="false"]': {
                            '[data-node-view-content-inner="toggle"]': {
                                "> :not(:first-child)": {
                                    display: "none"
                                }
                            }
                        }
                    }
                }, W.g6), _.KX.default), E.E_.default), I.dE), {
                    "math-display": {
                        fontSize: "1.125em",
                        ".katex": {
                            whiteSpace: "normal"
                        }
                    },
                    "math-inline": {
                        "&.ProseMirror-selectednode": {
                            marginY: "-0.25em"
                        }
                    },
                    "math-display, math-inline": {
                        "&.ProseMirror-selectednode": {
                            boxShadow: "outline",
                            borderRadius: "var(--box-border-radius)",
                            backgroundColor: "gray.100",
                            padding: ".25em",
                            marginX: "3px",
                            ".math-src": {
                                color: "gray.700"
                            }
                        }
                    }
                }), {}, {
                    ".block-codeBlock": {
                        pre: {
                            fontFamily: "mono",
                            fontSize: z.um.codeBlock,
                            "@media print": {
                                fontSize: x()(z.um.codeBlock)
                            },
                            color: "var(--body-color)",
                            background: "var(--accent-color-background-muted)",
                            borderRadius: "var(--box-border-radius)",
                            overflow: "hidden",
                            code: {
                                display: "block",
                                padding: ".75em 1em"
                            }
                        }
                    },
                    code: q({
                        backgroundColor: "var(--accent-color-background-muted)",
                        color: "var(--body-color)"
                    }, _.FC),
                    ".block-blockquote": {
                        blockquote: {
                            pl: "1.5em"
                        }
                    },
                    ".block-embed, .block-video": {
                        "&.expandable-node": {
                            "&-selected": {
                                ".embed-preview, .embed-viewer, .video-player": {
                                    animation: "".concat(P, " 3000ms ease-in-out forwards")
                                }
                            },
                            "&-reset": {
                                ".embed-preview, .embed-viewer, .video-player": {
                                    animation: "".concat(Z)
                                }
                            }
                        }
                    },
                    ".block-image": {
                        "&.expandable-node": {
                            "&-selected": {
                                "[data-selection-ring]": {
                                    animation: "".concat(P, " 3000ms ease-in-out forwards")
                                }
                            },
                            "&-reset ": {
                                "[data-selection-ring]": {
                                    animation: "".concat(Z)
                                }
                            }
                        }
                    },
                    ".block-contributors": {
                        ".contributors-list": {
                            fontSize: "1.25em",
                            fontWeight: "bold"
                        }
                    },
                    ".mention": {
                        bgColor: "var(--accent-color-100)"
                    },
                    ".block-gallery": (l = {
                        mx: "calc(-1 * var(--grid-padding))",
                        my: "calc(-0.25 * var(--grid-padding))",
                        ".gallery": (0, d.Z)({
                            px: "var(--grid-padding)",
                            py: "calc(0.75 * var(--grid-padding))",
                            border: "1px solid",
                            borderColor: "transparent",
                            borderRadius: "var(--box-border-radius)",
                            ".add-image": {
                                mb: "calc(0.75 * var(--grid-padding))"
                            }
                        }, "&.".concat(O.A), {
                            border: "1px dashed var(--chakra-colors-trueblue-300) !important",
                            backgroundColor: "var(--chakra-colors-trueblue-50) !important",
                            ".gallery-placeholder": {
                                pointerEvents: "none"
                            }
                        }),
                        "&.is-focused, &.is-empty": {
                            ".gallery": {
                                backgroundColor: "blackAlpha.50"
                            }
                        }
                    }, (0, d.Z)(l, "&.is-focused, &:hover, &[".concat(C.r, "]"), {
                        ".gallery": {
                            borderColor: "var(--grid-outline-color)"
                        },
                        ".add-image": {
                            opacity: 1
                        }
                    }), (0, d.Z)(l, "&.expandable-node", {
                        "&-selected .gallery": {
                            animation: "".concat(P, " 3000ms ease-in-out forwards")
                        },
                        "&-reset .gallery": {
                            animation: "".concat(Z)
                        }
                    }), l)
                }, D), {}, {
                    ".block-gridLayout": (0, d.Z)({
                        mx: "calc(-1 * var(--grid-padding))",
                        ".layout-content": {
                            display: "contents",
                            "> div": {
                                display: "contents"
                            }
                        },
                        ".grid-cell": {
                            position: "relative",
                            height: "100%",
                            paddingX: "var(--grid-padding)",
                            display: "flex",
                            flexDirection: "column",
                            outlineWidth: "1px",
                            outlineStyle: "none",
                            outlineColor: "var(--grid-outline-color)",
                            ".block-gallery": {
                                my: "0"
                            }
                        }
                    }, "&.is-focused, &:hover, &[".concat(C.r, "]"), {
                        ".is-editable": {
                            ".grid-cell": {
                                outlineStyle: "solid"
                            }
                        },
                        ".add-column": {
                            opacity: 1
                        }
                    }),
                    ".node-cardLayoutItem, .node-cardAccentLayoutItem": {
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "stretch",
                        minWidth: 0,
                        minHeight: 0,
                        "> [data-node-view-wrapper]": {
                            position: "relative",
                            height: "100%",
                            width: "100%"
                        }
                    },
                    ".block-table": {
                        table: {
                            '[data-node-view-content-inner="table"]': {
                                display: "contents",
                                '[data-node-view-content-inner="tableRow"]': {
                                    display: "contents"
                                },
                                td: {
                                    verticalAlign: "top",
                                    ".block-heading [placeholder]::before": {
                                        display: "none"
                                    }
                                }
                            }
                        },
                        td: {
                            minWidth: "3em",
                            paddingX: "1em",
                            position: "relative",
                            ".block": {
                                maxWidth: (0, L.s2)() ? "75vw" : void 0
                            },
                            "&:not(:first-of-type)": {
                                borderLeft: "1px solid transparent"
                            }
                        },
                        ".selectedCell:after": {
                            zIndex: 2,
                            position: "absolute",
                            content: '""',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: "trueblue.100",
                            pointerEvents: "none",
                            opacity: .4
                        },
                        "&.is-focused, &:hover": {
                            "td:not(:first-of-type)": {
                                borderLeft: "1px solid var(--grid-outline-color)"
                            }
                        }
                    },
                    ".tippy-arrow": {
                        borderLeftColor: "red"
                    },
                    ".footnote-label": {
                        textDecoration: "underline",
                        textDecorationColor: "var(--link-color)",
                        _hover: {
                            bgColor: "var(--accent-color-100)",
                            color: "gray.800",
                            borderRadius: "sm"
                        }
                    },
                    ".footnote": {
                        color: "var(--link-color)",
                        _hover: {
                            _after: {
                                bgColor: "var(--accent-color-100)",
                                color: "gray.800"
                            }
                        }
                    },
                    ".node-emoji": {
                        color: "initial"
                    },
                    ".block-paragraph": (0, W.v0)("default"),
                    ".block-heading": q(q({}, z.iL.default), {}, {
                        ".heading": {
                            position: "relative"
                        },
                        '.heading[level="1"]': (0, W.v0)("h1"),
                        '.heading[level="2"]': (0, W.v0)("h2"),
                        '.heading[level="3"]': (0, W.v0)("h3"),
                        '.heading[level="4"]': (0, W.v0)("h4"),
                        "&.is-focused-inside.is-empty": {
                            ".heading": {
                                "&[placeholder]::before": R
                            }
                        }
                    }),
                    ".block-title": q(q({}, z.iL.default), {}, {
                        "&.is-focused-inside.is-empty": {
                            ".title": {
                                "&[placeholder]::before": R
                            }
                        },
                        ".title": q({
                            position: "relative"
                        }, (0, W.v0)("title"))
                    }),
                    ".node-gridLayout, .node-calloutBox, .node-smartLayoutCell": {
                        ".block-heading, .block-title": q({}, z.iL.compact),
                        ".block-paragraph": q({}, z.YW.compact)
                    },
                    ".block-table td": {
                        ".block": q({}, z.YW.tight),
                        ".block-heading, .block-title": q({}, z.iL.compact)
                    },
                    '[data-node-view-content-inner="card"]:not(:has(> .node-cardAccentLayoutItem)) [data-node-view-content-inner="cardLayoutItem"] > .first-block:not(.last-block)': {
                        "&.block-heading, &.block-title": {
                            "&:not(:has(+ .block-heading, + .block-title, + .node-gridLayout))": {
                                mb: z.iL.relaxed.mb
                            }
                        }
                    },
                    '[data-node-view-content-inner="cardLayoutItem"] > .first-block:not(.last-block)': {
                        "&.block-paragraph": q(q({}, z.YW.compact), {}, {
                            "+ .block-heading, + .block-title": {
                                mt: z.iL.compact.mt
                            }
                        }),
                        '&.block-heading:has([level="2"], [level="3"], [level="4"])': {
                            mb: z.iL.compact.mb,
                            "+ .block-heading, + .block-title": {
                                mt: z.iL.compact.mt
                            }
                        }
                    }
                }),
                F = t(43512),
                H = t(52322),
                G = (0, p.memo)(function() {
                    return (0, H.jsx)(s.Global, {
                        styles: function(e) {
                            var o, t = (o = {}, (0, d.Z)(o, ".".concat(m.pL), Y), (0, d.Z)(o, ".".concat(m.vD), B), (0, d.Z)(o, ".".concat(F.G), y), (0, d.Z)(o, ".".concat(b.d), b.l), o);
                            if (t) return (0, c.iv)(t)(e)
                        }
                    })
                });
            G.displayName = "GlobalCardStyles"
        }
    }
]);
//# sourceMappingURL=9663-6d0999b0596f4b4e.js.map