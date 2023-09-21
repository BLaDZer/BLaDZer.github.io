"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [507], {
        53316: function(t, e, n) {
            var i, r, o, s = n(34406);
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = n(2784),
                l = n(9340),
                u = n(19900),
                h = a && "object" == typeof a && "default" in a ? a : {
                    default: a
                },
                c = function(t) {
                    if (t && t.__esModule) return t;
                    var e = Object.create(null);
                    return t && Object.keys(t).forEach(function(n) {
                        if ("default" !== n) {
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, i.get ? i : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }), e.default = t, Object.freeze(e)
                }(a);
            let d = a.createContext({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                p = a.createContext({});

            function f() {
                return a.useContext(p).visualElement
            }
            let m = a.createContext(null),
                v = "undefined" != typeof document,
                g = v ? a.useLayoutEffect : a.useEffect,
                y = a.createContext({
                    strict: !1
                });

            function x(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function w(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function b(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let A = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function E(t) {
                return b(t.animate) || A.some(e => w(t[e]))
            }

            function T(t) {
                return !!(E(t) || t.variants)
            }

            function V(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let P = t => ({
                    isEnabled: e => t.some(t => !!e[t])
                }),
                S = {
                    measureLayout: P(["layout", "layoutId", "drag"]),
                    animation: P(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: P(["exit"]),
                    drag: P(["drag", "dragControls"]),
                    focus: P(["whileFocus"]),
                    hover: P(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: P(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: P(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: P(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function C(t) {
                for (let e in t) "projectionNodeConstructor" === e ? S.projectionNodeConstructor = t[e] : S[e].Component = t[e]
            }

            function M(t) {
                let e = a.useRef(null);
                return null === e.current && (e.current = t()), e.current
            }
            let R = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                k = 1,
                D = a.createContext({});
            class L extends h.default.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: t,
                        props: e
                    } = this.props;
                    return t && t.setProps(e), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let F = a.createContext({}),
                B = Symbol.for("motionComponentSymbol");

            function j({
                preloadedFeatures: t,
                createVisualElement: e,
                projectionNodeConstructor: n,
                useRender: i,
                useVisualState: r,
                Component: o
            }) {
                t && C(t);
                let s = a.forwardRef(function(s, l) {
                    var u;
                    let h = { ...a.useContext(d),
                            ...s,
                            layoutId: function({
                                layoutId: t
                            }) {
                                let e = a.useContext(D).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        },
                        {
                            isStatic: b
                        } = h,
                        A = null,
                        T = function(t) {
                            let {
                                initial: e,
                                animate: n
                            } = function(t, e) {
                                if (E(t)) {
                                    let {
                                        initial: e,
                                        animate: n
                                    } = t;
                                    return {
                                        initial: !1 === e || w(e) ? e : void 0,
                                        animate: w(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, a.useContext(p));
                            return a.useMemo(() => ({
                                initial: e,
                                animate: n
                            }), [V(e), V(n)])
                        }(s),
                        P = b ? void 0 : M(() => {
                            if (R.hasEverUpdated) return k++
                        }),
                        C = r(s, b);
                    if (!b && v) {
                        T.visualElement = function(t, e, n, i) {
                            let r = f(),
                                o = a.useContext(y),
                                s = a.useContext(m),
                                l = a.useContext(d).reducedMotion,
                                u = a.useRef();
                            i = i || o.renderer, !u.current && i && (u.current = i(t, {
                                visualState: e,
                                parent: r,
                                props: n,
                                presenceId: s ? s.id : void 0,
                                blockInitialAnimation: !!s && !1 === s.initial,
                                reducedMotionConfig: l
                            }));
                            let h = u.current;
                            return g(() => {
                                h && h.render()
                            }), g(() => {
                                h && h.animationState && h.animationState.animateChanges()
                            }), g(() => () => h && h.notify("Unmount"), []), h
                        }(o, C, h, e);
                        let i = a.useContext(y).strict,
                            r = a.useContext(F);
                        T.visualElement && (A = T.visualElement.loadFeatures(h, i, t, P, n || S.projectionNodeConstructor, r))
                    }
                    return c.createElement(L, {
                        visualElement: T.visualElement,
                        props: h
                    }, A, c.createElement(p.Provider, {
                        value: T
                    }, i(o, s, P, (u = T.visualElement, a.useCallback(t => {
                        t && C.mount && C.mount(t), u && (t ? u.mount(t) : u.unmount()), l && ("function" == typeof l ? l(t) : x(l) && (l.current = t))
                    }, [u])), C, b, T.visualElement)))
                });
                return s[B] = o, s
            }

            function I(t) {
                function e(e, n = {}) {
                    return j(t(e, n))
                }
                if ("undefined" == typeof Proxy) return e;
                let n = new Map;
                return new Proxy(e, {
                    get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
                })
            }
            let O = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function U(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (O.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let N = {};

            function $(t) {
                Object.assign(N, t)
            }
            let z = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                W = new Set(z);

            function Y(t, {
                layout: e,
                layoutId: n
            }) {
                return W.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!N[t] || "opacity" === t)
            }
            let H = t => !!(null == t ? void 0 : t.getVelocity),
                X = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                G = (t, e) => z.indexOf(t) - z.indexOf(e);

            function q({
                transform: t,
                transformKeys: e
            }, {
                enableHardwareAcceleration: n = !0,
                allowTransformNone: i = !0
            }, r, o) {
                let s = "";
                for (let n of (e.sort(G), e)) s += `${X[n]||n}(${t[n]}) `;
                return n && !t.z && (s += "translateZ(0)"), s = s.trim(), o ? s = o(t, r ? "" : s) : i && r && (s = "none"), s
            }

            function Z(t) {
                return t.startsWith("--")
            }
            let _ = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                K = (t, e, n) => Math.min(Math.max(n, t), e),
                J = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                Q = { ...J,
                    transform: t => K(0, 1, t)
                },
                tt = { ...J,
                    default: 1
                },
                te = t => Math.round(1e5 * t) / 1e5,
                tn = /(-)?([\d]*\.?[\d])+/g,
                ti = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                tr = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function to(t) {
                return "string" == typeof t
            }
            let ts = t => ({
                    test: e => to(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                ta = ts("deg"),
                tl = ts("%"),
                tu = ts("px"),
                th = ts("vh"),
                tc = ts("vw"),
                td = { ...tl,
                    parse: t => tl.parse(t) / 100,
                    transform: t => tl.transform(100 * t)
                },
                tp = { ...J,
                    transform: Math.round
                },
                tf = {
                    borderWidth: tu,
                    borderTopWidth: tu,
                    borderRightWidth: tu,
                    borderBottomWidth: tu,
                    borderLeftWidth: tu,
                    borderRadius: tu,
                    radius: tu,
                    borderTopLeftRadius: tu,
                    borderTopRightRadius: tu,
                    borderBottomRightRadius: tu,
                    borderBottomLeftRadius: tu,
                    width: tu,
                    maxWidth: tu,
                    height: tu,
                    maxHeight: tu,
                    size: tu,
                    top: tu,
                    right: tu,
                    bottom: tu,
                    left: tu,
                    padding: tu,
                    paddingTop: tu,
                    paddingRight: tu,
                    paddingBottom: tu,
                    paddingLeft: tu,
                    margin: tu,
                    marginTop: tu,
                    marginRight: tu,
                    marginBottom: tu,
                    marginLeft: tu,
                    rotate: ta,
                    rotateX: ta,
                    rotateY: ta,
                    rotateZ: ta,
                    scale: tt,
                    scaleX: tt,
                    scaleY: tt,
                    scaleZ: tt,
                    skew: ta,
                    skewX: ta,
                    skewY: ta,
                    distance: tu,
                    translateX: tu,
                    translateY: tu,
                    translateZ: tu,
                    x: tu,
                    y: tu,
                    z: tu,
                    perspective: tu,
                    transformPerspective: tu,
                    opacity: Q,
                    originX: td,
                    originY: td,
                    originZ: tu,
                    zIndex: tp,
                    fillOpacity: Q,
                    strokeOpacity: Q,
                    numOctaves: tp
                };

            function tm(t, e, n, i) {
                let {
                    style: r,
                    vars: o,
                    transform: s,
                    transformKeys: a,
                    transformOrigin: l
                } = t;
                a.length = 0;
                let u = !1,
                    h = !1,
                    c = !0;
                for (let t in e) {
                    let n = e[t];
                    if (Z(t)) {
                        o[t] = n;
                        continue
                    }
                    let i = tf[t],
                        d = _(n, i);
                    if (W.has(t)) {
                        if (u = !0, s[t] = d, a.push(t), !c) continue;
                        n !== (i.default || 0) && (c = !1)
                    } else t.startsWith("origin") ? (h = !0, l[t] = d) : r[t] = d
                }
                if (!e.transform && (u || i ? r.transform = q(t, n, c, i) : r.transform && (r.transform = "none")), h) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: n = 0
                    } = l;
                    r.transformOrigin = `${t} ${e} ${n}`
                }
            }
            let tv = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function tg(t, e, n) {
                for (let i in e) H(e[i]) || Y(i, n) || (t[i] = e[i])
            }

            function ty(t, e, n) {
                let i = {},
                    r = function(t, e, n) {
                        let i = t.style || {},
                            r = {};
                        return tg(r, i, t), Object.assign(r, function({
                            transformTemplate: t
                        }, e, n) {
                            return a.useMemo(() => {
                                let i = tv();
                                return tm(i, e, {
                                    enableHardwareAcceleration: !n
                                }, t), Object.assign({}, i.vars, i.style)
                            }, [e])
                        }(t, e, n)), t.transformValues ? t.transformValues(r) : r
                    }(t, e, n);
                return t.drag && !1 !== t.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), i.style = r, i
            }
            let tx = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

            function tw(t) {
                return tx.has(t)
            }
            let tb = t => !tw(t);

            function tA(t) {
                t && (tb = e => e.startsWith("on") ? !tw(e) : t(e))
            }
            try {
                tA(n(99362).Z)
            } catch (t) {}

            function tE(t, e, n) {
                let i = {};
                for (let r in t)(tb(r) || !0 === n && tw(r) || !e && !tw(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                return i
            }

            function tT(t, e, n) {
                return "string" == typeof t ? t : tu.transform(e + n * t)
            }
            let tV = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tP = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tS(t, {
                attrX: e,
                attrY: n,
                originX: i,
                originY: r,
                pathLength: o,
                pathSpacing: s = 1,
                pathOffset: a = 0,
                ...l
            }, u, h, c) {
                if (tm(t, l, u, c), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: p,
                    dimensions: f
                } = t;
                d.transform && (f && (p.transform = d.transform), delete d.transform), f && (void 0 !== i || void 0 !== r || p.transform) && (p.transformOrigin = function(t, e, n) {
                    let i = tT(e, t.x, t.width),
                        r = tT(n, t.y, t.height);
                    return `${i} ${r}`
                }(f, void 0 !== i ? i : .5, void 0 !== r ? r : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== o && function(t, e, n = 1, i = 0, r = !0) {
                    t.pathLength = 1;
                    let o = r ? tV : tP;
                    t[o.offset] = tu.transform(-i);
                    let s = tu.transform(e),
                        a = tu.transform(n);
                    t[o.array] = `${s} ${a}`
                }(d, o, s, a, !1)
            }
            let tC = () => ({ ...tv(),
                    attrs: {}
                }),
                tM = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tR(t, e, n, i) {
                let r = a.useMemo(() => {
                    let n = tC();
                    return tS(n, e, {
                        enableHardwareAcceleration: !1
                    }, tM(i), t.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    tg(e, t.style, t), r.style = { ...e,
                        ...r.style
                    }
                }
                return r
            }
            let tk = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tD(t, {
                style: e,
                vars: n
            }, i, r) {
                for (let o in Object.assign(t.style, e, r && r.getProjectionStyles(i)), n) t.style.setProperty(o, n[o])
            }
            let tL = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tF(t, e, n, i) {
                for (let n in tD(t, e, void 0, i), e.attrs) t.setAttribute(tL.has(n) ? n : tk(n), e.attrs[n])
            }

            function tB(t) {
                let {
                    style: e
                } = t, n = {};
                for (let i in e)(H(e[i]) || Y(i, t)) && (n[i] = e[i]);
                return n
            }

            function tj(t) {
                let e = tB(t);
                for (let n in t)
                    if (H(t[n])) {
                        let i = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
                        e[i] = t[n]
                    }
                return e
            }

            function tI(t, e, n, i = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), e
            }
            let tO = t => Array.isArray(t),
                tU = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tN = t => tO(t) ? t[t.length - 1] || 0 : t;

            function t$(t) {
                let e = H(t) ? t.get() : t;
                return tU(e) ? e.toValue() : e
            }
            let tz = t => (e, n) => {
                    let i = a.useContext(p),
                        r = a.useContext(m),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: n
                        }, i, r, o) {
                            let s = {
                                latestValues: function(t, e, n, i) {
                                    let r = {},
                                        o = i(t);
                                    for (let t in o) r[t] = t$(o[t]);
                                    let {
                                        initial: s,
                                        animate: a
                                    } = t, l = E(t), u = T(t);
                                    e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
                                    let h = !!n && !1 === n.initial;
                                    h = h || !1 === s;
                                    let c = h ? a : s;
                                    if (c && "boolean" != typeof c && !b(c)) {
                                        let e = Array.isArray(c) ? c : [c];
                                        e.forEach(e => {
                                            let n = tI(t, e);
                                            if (!n) return;
                                            let {
                                                transitionEnd: i,
                                                transition: o,
                                                ...s
                                            } = n;
                                            for (let t in s) {
                                                let e = s[t];
                                                if (Array.isArray(e)) {
                                                    let t = h ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (r[t] = e)
                                            }
                                            for (let t in i) r[t] = i[t]
                                        })
                                    }
                                    return r
                                }(i, r, o, t),
                                renderState: e()
                            };
                            return n && (s.mount = t => n(i, t, s)), s
                        })(t, e, i, r);
                    return n ? o() : M(o)
                },
                tW = {
                    useVisualState: tz({
                        scrapeMotionValuesFromProps: tj,
                        createRenderState: tC,
                        onMount: (t, e, {
                            renderState: n,
                            latestValues: i
                        }) => {
                            try {
                                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tS(n, i, {
                                enableHardwareAcceleration: !1
                            }, tM(e.tagName), t.transformTemplate), tF(e, n)
                        }
                    })
                },
                tY = {
                    useVisualState: tz({
                        scrapeMotionValuesFromProps: tB,
                        createRenderState: tv
                    })
                };

            function tH(t, {
                forwardMotionProps: e = !1
            }, n, i, r) {
                let o = U(t) ? tW : tY;
                return { ...o,
                    preloadedFeatures: n,
                    useRender: function(t = !1) {
                        return (e, n, i, r, {
                            latestValues: o
                        }, s) => {
                            let l = U(e) ? tR : ty,
                                u = l(n, o, s, e),
                                h = tE(n, "string" == typeof e, t),
                                c = { ...h,
                                    ...u,
                                    ref: r
                                };
                            return i && (c["data-projection-id"] = i), a.createElement(e, c)
                        }
                    }(e),
                    createVisualElement: i,
                    projectionNodeConstructor: r,
                    Component: t
                }
            }

            function tX(t, e, n, i = {
                passive: !0
            }) {
                return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
            }

            function tG(t, e, n, i) {
                a.useEffect(() => {
                    let r = t.current;
                    if (n && r) return tX(r, e, n, i)
                }, [t, e, n, i])
            }

            function tq(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function tZ(t) {
                let e = !!t.touches;
                return e
            }
            e.AnimationType = void 0, (i = e.AnimationType || (e.AnimationType = {})).Animate = "animate", i.Hover = "whileHover", i.Tap = "whileTap", i.Drag = "whileDrag", i.Focus = "whileFocus", i.InView = "whileInView", i.Exit = "exit";
            let t_ = {
                pageX: 0,
                pageY: 0
            };

            function tK(t, e = "page") {
                return {
                    point: tZ(t) ? function(t, e = "page") {
                        let n = t.touches[0] || t.changedTouches[0],
                            i = n || t_;
                        return {
                            x: i[e + "X"],
                            y: i[e + "Y"]
                        }
                    }(t, e) : function(t, e = "page") {
                        return {
                            x: t[e + "X"],
                            y: t[e + "Y"]
                        }
                    }(t, e)
                }
            }
            let tJ = (t, e = !1) => {
                    let n = e => t(e, tK(e));
                    return e ? t => {
                        let e = t instanceof MouseEvent,
                            i = !e || e && 0 === t.button;
                        i && n(t)
                    } : n
                },
                tQ = () => v && null === window.onpointerdown,
                t0 = () => v && null === window.ontouchstart,
                t1 = () => v && null === window.onmousedown,
                t5 = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                t3 = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function t2(t) {
                if (tQ());
                else if (t0()) return t3[t];
                else if (t1()) return t5[t];
                return t
            }

            function t9(t, e, n, i) {
                return tX(t, t2(e), tJ(n, "pointerdown" === e), i)
            }

            function t4(t, e, n, i) {
                return tG(t, t2(e), n && tJ(n, "pointerdown" === e), i)
            }

            function t6(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let t7 = t6("dragHorizontal"),
                t8 = t6("dragVertical");

            function et(t) {
                let e = !1;
                if ("y" === t) e = t8();
                else if ("x" === t) e = t7();
                else {
                    let t = t7(),
                        n = t8();
                    t && n ? e = () => {
                        t(), n()
                    } : (t && t(), n && n())
                }
                return e
            }

            function ee() {
                let t = et(!0);
                return !t || (t(), !1)
            }

            function en(t, n, i) {
                return (r, o) => {
                    !(!tq(r) || ee()) && (t.animationState && t.animationState.setActive(e.AnimationType.Hover, n), i && i(r, o))
                }
            }
            let ei = (t, e) => !!e && (t === e || ei(t, e.parentElement));

            function er(t) {
                return a.useEffect(() => () => t(), [])
            }
            let eo = (t, e) => n => e(t(n)),
                es = (...t) => t.reduce(eo),
                ea = (void 0 === s || s.env, "production"),
                el = new Set;

            function eu(t, e, n) {
                t || el.has(e) || (console.warn(e), n && console.warn(n), el.add(e))
            }
            let eh = new WeakMap,
                ec = new WeakMap,
                ed = t => {
                    let e = eh.get(t.target);
                    e && e(t)
                },
                ep = t => {
                    t.forEach(ed)
                },
                ef = {
                    some: 0,
                    all: 1
                };

            function em(t, n, i, {
                root: r,
                margin: o,
                amount: s = "some",
                once: l
            }) {
                a.useEffect(() => {
                    if (!t || !i.current) return;
                    let a = {
                        root: null == r ? void 0 : r.current,
                        rootMargin: o,
                        threshold: "number" == typeof s ? s : ef[s]
                    };
                    return function(t, e, n) {
                        let i = function({
                            root: t,
                            ...e
                        }) {
                            let n = t || document;
                            ec.has(n) || ec.set(n, {});
                            let i = ec.get(n),
                                r = JSON.stringify(e);
                            return i[r] || (i[r] = new IntersectionObserver(ep, {
                                root: t,
                                ...e
                            })), i[r]
                        }(e);
                        return eh.set(t, n), i.observe(t), () => {
                            eh.delete(t), i.unobserve(t)
                        }
                    }(i.current, a, t => {
                        let {
                            isIntersecting: r
                        } = t;
                        if (n.isInView === r || (n.isInView = r, l && !r && n.hasEnteredView)) return;
                        r && (n.hasEnteredView = !0), i.animationState && i.animationState.setActive(e.AnimationType.InView, r);
                        let o = i.getProps(),
                            s = r ? o.onViewportEnter : o.onViewportLeave;
                        s && s(t)
                    })
                }, [t, r, o, s])
            }

            function ev(t, n, i, {
                fallback: r = !0
            }) {
                a.useEffect(() => {
                    t && r && ("production" !== ea && eu(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
                        n.hasEnteredView = !0;
                        let {
                            onViewportEnter: t
                        } = i.getProps();
                        t && t(null), i.animationState && i.animationState.setActive(e.AnimationType.InView, !0)
                    }))
                }, [t])
            }
            let eg = t => e => (t(e), null),
                ey = {
                    inView: eg(function({
                        visualElement: t,
                        whileInView: e,
                        onViewportEnter: n,
                        onViewportLeave: i,
                        viewport: r = {}
                    }) {
                        let o = a.useRef({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            s = !!(e || n || i);
                        r.once && o.current.hasEnteredView && (s = !1);
                        let l = "undefined" == typeof IntersectionObserver ? ev : em;
                        l(s, o.current, t, r)
                    }),
                    tap: eg(function({
                        onTap: t,
                        onTapStart: n,
                        onTapCancel: i,
                        whileTap: r,
                        visualElement: o
                    }) {
                        let s = t || n || i || r,
                            l = a.useRef(!1),
                            u = a.useRef(null),
                            h = {
                                passive: !(n || t || i || m)
                            };

                        function c() {
                            u.current && u.current(), u.current = null
                        }

                        function d() {
                            return c(), l.current = !1, o.animationState && o.animationState.setActive(e.AnimationType.Tap, !1), !ee()
                        }

                        function p(e, n) {
                            d() && (ei(o.current, e.target) ? t && t(e, n) : i && i(e, n))
                        }

                        function f(t, e) {
                            d() && i && i(t, e)
                        }

                        function m(t, i) {
                            c(), !l.current && (l.current = !0, u.current = es(t9(window, "pointerup", p, h), t9(window, "pointercancel", f, h)), o.animationState && o.animationState.setActive(e.AnimationType.Tap, !0), n && n(t, i))
                        }
                        t4(o, "pointerdown", s ? m : void 0, h), er(c)
                    }),
                    focus: eg(function({
                        whileFocus: t,
                        visualElement: n
                    }) {
                        let {
                            animationState: i
                        } = n;
                        tG(n, "focus", t ? () => {
                            i && i.setActive(e.AnimationType.Focus, !0)
                        } : void 0), tG(n, "blur", t ? () => {
                            i && i.setActive(e.AnimationType.Focus, !1)
                        } : void 0)
                    }),
                    hover: eg(function({
                        onHoverStart: t,
                        onHoverEnd: e,
                        whileHover: n,
                        visualElement: i
                    }) {
                        t4(i, "pointerenter", t || n ? en(i, !0, t) : void 0, {
                            passive: !t
                        }), t4(i, "pointerleave", e || n ? en(i, !1, e) : void 0, {
                            passive: !e
                        })
                    })
                };

            function ex() {
                let t = a.useContext(m);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: n,
                    register: i
                } = t, r = a.useId();
                return a.useEffect(() => i(r), []), !e && n ? [!1, () => n && n(r)] : [!0]
            }

            function ew(t, e) {
                if (!Array.isArray(e)) return !1;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let i = 0; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }
            let eb = t => /^\-?\d*\.?\d+$/.test(t),
                eA = t => /^0[^.\s]+$/.test(t),
                eE = {
                    delta: 0,
                    timestamp: 0
                },
                eT = 1 / 60 * 1e3,
                eV = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                eP = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(() => t(eV()), eT),
                eS = !0,
                eC = !1,
                eM = !1,
                eR = ["read", "update", "preRender", "render", "postRender"],
                ek = eR.reduce((t, e) => (t[e] = function(t) {
                    let e = [],
                        n = [],
                        i = 0,
                        r = !1,
                        o = !1,
                        s = new WeakSet,
                        a = {
                            schedule: (t, o = !1, a = !1) => {
                                let l = a && r,
                                    u = l ? e : n;
                                return o && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (i = e.length)), t
                            },
                            cancel: t => {
                                let e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
                            },
                            process: l => {
                                if (r) {
                                    o = !0;
                                    return
                                }
                                if (r = !0, [e, n] = [n, e], n.length = 0, i = e.length)
                                    for (let n = 0; n < i; n++) {
                                        let i = e[n];
                                        i(l), s.has(i) && (a.schedule(i), t())
                                    }
                                r = !1, o && (o = !1, a.process(l))
                            }
                        };
                    return a
                }(() => eC = !0), t), {}),
                eD = eR.reduce((t, e) => {
                    let n = ek[e];
                    return t[e] = (t, e = !1, i = !1) => (eC || eI(), n.schedule(t, e, i)), t
                }, {}),
                eL = eR.reduce((t, e) => (t[e] = ek[e].cancel, t), {}),
                eF = eR.reduce((t, e) => (t[e] = () => ek[e].process(eE), t), {}),
                eB = t => ek[t].process(eE),
                ej = t => {
                    eC = !1, eE.delta = eS ? eT : Math.max(Math.min(t - eE.timestamp, 40), 1), eE.timestamp = t, eM = !0, eR.forEach(eB), eM = !1, eC && (eS = !1, eP(ej))
                },
                eI = () => {
                    eC = !0, eS = !0, eM || eP(ej)
                };

            function eO(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function eU(t, e) {
                let n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            class eN {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return eO(this.subscriptions, t), () => eU(this.subscriptions, t)
                }
                notify(t, e, n) {
                    let i = this.subscriptions.length;
                    if (i) {
                        if (1 === i) this.subscriptions[0](t, e, n);
                        else
                            for (let r = 0; r < i; r++) {
                                let i = this.subscriptions[r];
                                i && i(t, e, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function e$(t, e) {
                return e ? t * (1e3 / e) : 0
            }
            let ez = t => !isNaN(parseFloat(t));
            class eW {
                constructor(t, e = {}) {
                    this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: n,
                            timestamp: i
                        } = eE;
                        this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, eD.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => eD.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = ez(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eN), this.events[t].add(e)
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t) {
                    this.passiveEffect = t
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, n) {
                    this.set(e), this.prev = t, this.timeDelta = n
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? e$(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.clearListeners(), this.stop()
                }
            }

            function eY(t, e) {
                return new eW(t, e)
            }
            let eH = (t, e) => n => !!(to(n) && tr.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                eX = (t, e, n) => i => {
                    if (!to(i)) return i;
                    let [r, o, s, a] = i.match(tn);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(o),
                        [n]: parseFloat(s),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                eG = t => K(0, 255, t),
                eq = { ...J,
                    transform: t => Math.round(eG(t))
                },
                eZ = {
                    test: eH("rgb", "red"),
                    parse: eX("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: i = 1
                    }) => "rgba(" + eq.transform(t) + ", " + eq.transform(e) + ", " + eq.transform(n) + ", " + te(Q.transform(i)) + ")"
                },
                e_ = {
                    test: eH("#"),
                    parse: function(t) {
                        let e = "",
                            n = "",
                            i = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, i += i, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(i, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: eZ.transform
                },
                eK = {
                    test: eH("hsl", "hue"),
                    parse: eX("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: n,
                        alpha: i = 1
                    }) => "hsla(" + Math.round(t) + ", " + tl.transform(te(e)) + ", " + tl.transform(te(n)) + ", " + te(Q.transform(i)) + ")"
                },
                eJ = {
                    test: t => eZ.test(t) || e_.test(t) || eK.test(t),
                    parse: t => eZ.test(t) ? eZ.parse(t) : eK.test(t) ? eK.parse(t) : e_.parse(t),
                    transform: t => to(t) ? t : t.hasOwnProperty("red") ? eZ.transform(t) : eK.transform(t)
                },
                eQ = "${c}",
                e0 = "${n}";

            function e1(t) {
                "number" == typeof t && (t = `${t}`);
                let e = [],
                    n = 0,
                    i = 0,
                    r = t.match(ti);
                r && (n = r.length, t = t.replace(ti, eQ), e.push(...r.map(eJ.parse)));
                let o = t.match(tn);
                return o && (i = o.length, t = t.replace(tn, e0), e.push(...o.map(J.parse))), {
                    values: e,
                    numColors: n,
                    numNumbers: i,
                    tokenised: t
                }
            }

            function e5(t) {
                return e1(t).values
            }

            function e3(t) {
                let {
                    values: e,
                    numColors: n,
                    tokenised: i
                } = e1(t), r = e.length;
                return t => {
                    let e = i;
                    for (let i = 0; i < r; i++) e = e.replace(i < n ? eQ : e0, i < n ? eJ.transform(t[i]) : te(t[i]));
                    return e
                }
            }
            let e2 = t => "number" == typeof t ? 0 : t,
                e9 = {
                    test: function(t) {
                        var e, n;
                        return isNaN(t) && to(t) && ((null === (e = t.match(tn)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(ti)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: e5,
                    createTransformer: e3,
                    getAnimatableNone: function(t) {
                        let e = e5(t),
                            n = e3(t);
                        return n(e.map(e2))
                    }
                },
                e4 = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function e6(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = n.match(tn) || [];
                if (!i) return t;
                let r = n.replace(i, ""),
                    o = e4.has(e) ? 1 : 0;
                return i !== n && (o *= 100), e + "(" + o + r + ")"
            }
            let e7 = /([a-z-]*)\(.*?\)/g,
                e8 = { ...e9,
                    getAnimatableNone: t => {
                        let e = t.match(e7);
                        return e ? e.map(e6).join(" ") : t
                    }
                },
                nt = { ...tf,
                    color: eJ,
                    backgroundColor: eJ,
                    outlineColor: eJ,
                    fill: eJ,
                    stroke: eJ,
                    borderColor: eJ,
                    borderTopColor: eJ,
                    borderRightColor: eJ,
                    borderBottomColor: eJ,
                    borderLeftColor: eJ,
                    filter: e8,
                    WebkitFilter: e8
                },
                ne = t => nt[t];

            function nn(t, e) {
                var n;
                let i = ne(t);
                return i !== e8 && (i = e9), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, e)
            }
            let ni = t => e => e.test(t),
                nr = [J, tu, tl, ta, tc, th, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                no = t => nr.find(ni(t)),
                ns = [...nr, eJ, e9],
                na = t => ns.find(ni(t));

            function nl(t, e, n) {
                let i = t.getProps();
                return tI(i, e, void 0 !== n ? n : i.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, n) => e[n] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, n) => e[n] = t.getVelocity()), e
                }(t))
            }

            function nu(t, e) {
                let n = nl(t, e),
                    {
                        transitionEnd: i = {},
                        transition: r = {},
                        ...o
                    } = n ? t.makeTargetAnimatable(n, !1) : {};
                for (let e in o = { ...o,
                        ...i
                    }) {
                    let n = tN(o[e]);
                    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, eY(n))
                }
            }

            function nh(t, e) {
                let n = [...e].reverse();
                n.forEach(n => {
                    var i;
                    let r = t.getVariant(n);
                    r && nu(t, r), null === (i = t.variantChildren) || void 0 === i || i.forEach(t => {
                        nh(t, e)
                    })
                })
            }

            function nc(t, e, n) {
                var i, r;
                let o = Object.keys(e).filter(e => !t.hasValue(e)),
                    s = o.length;
                if (s)
                    for (let a = 0; a < s; a++) {
                        let s = o[a],
                            l = e[s],
                            u = null;
                        Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (i = n[s]) && void 0 !== i ? i : t.readValue(s)) && void 0 !== r ? r : e[s]), null != u && ("string" == typeof u && (eb(u) || eA(u)) ? u = parseFloat(u) : !na(u) && e9.test(l) && (u = nn(s, l)), t.addValue(s, eY(u, {
                            owner: t
                        })), void 0 === n[s] && (n[s] = u), null !== u && t.setBaseTarget(s, u))
                    }
            }

            function nd(t, e, n) {
                var i;
                let r = {};
                for (let o in t) {
                    let t = function(t, e) {
                        if (!e) return;
                        let n = e[t] || e.default || e;
                        return n.from
                    }(o, e);
                    r[o] = void 0 !== t ? t : null === (i = n.getValue(o)) || void 0 === i ? void 0 : i.get()
                }
                return r
            }

            function np(t) {
                return !!(H(t) && t.add)
            }
            let nf = (t, e) => `${t}: ${e}`,
                nm = "framerAppearId",
                nv = "data-" + tk(nm),
                ng = t => 1e3 * t,
                ny = {
                    current: !1
                },
                nx = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                nw = t => e => 1 - t(1 - e),
                nb = t => t * t,
                nA = nw(nb),
                nE = nx(nb),
                nT = (t, e, n) => -n * t + n * e + t;

            function nV(t, e, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            let nP = (t, e, n) => {
                    let i = t * t;
                    return Math.sqrt(Math.max(0, n * (e * e - i) + i))
                },
                nS = [e_, eZ, eK],
                nC = t => nS.find(e => e.test(t));

            function nM(t) {
                let e = nC(t);
                l.invariant(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let n = e.parse(t);
                return e === eK && (n = function({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: i
                }) {
                    t /= 360, n /= 100;
                    let r = 0,
                        o = 0,
                        s = 0;
                    if (e /= 100) {
                        let i = n < .5 ? n * (1 + e) : n + e - n * e,
                            a = 2 * n - i;
                        r = nV(a, i, t + 1 / 3), o = nV(a, i, t), s = nV(a, i, t - 1 / 3)
                    } else r = o = s = n;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * s),
                        alpha: i
                    }
                }(n)), n
            }
            let nR = (t, e) => {
                let n = nM(t),
                    i = nM(e),
                    r = { ...n
                    };
                return t => (r.red = nP(n.red, i.red, t), r.green = nP(n.green, i.green, t), r.blue = nP(n.blue, i.blue, t), r.alpha = nT(n.alpha, i.alpha, t), eZ.transform(r))
            };

            function nk(t, e) {
                return "number" == typeof t ? n => nT(t, e, n) : eJ.test(t) ? nR(t, e) : nF(t, e)
            }
            let nD = (t, e) => {
                    let n = [...t],
                        i = n.length,
                        r = t.map((t, n) => nk(t, e[n]));
                    return t => {
                        for (let e = 0; e < i; e++) n[e] = r[e](t);
                        return n
                    }
                },
                nL = (t, e) => {
                    let n = { ...t,
                            ...e
                        },
                        i = {};
                    for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = nk(t[r], e[r]));
                    return t => {
                        for (let e in i) n[e] = i[e](t);
                        return n
                    }
                },
                nF = (t, e) => {
                    let n = e9.createTransformer(e),
                        i = e1(t),
                        r = e1(e),
                        o = i.numColors === r.numColors && i.numNumbers >= r.numNumbers;
                    return o ? es(nD(i.values, r.values), n) : (l.warning(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
                },
                nB = (t, e, n) => {
                    let i = e - t;
                    return 0 === i ? 1 : (n - t) / i
                },
                nj = (t, e) => n => nT(t, e, n);

            function nI(t, e, {
                clamp: n = !0,
                ease: i,
                mixer: r
            } = {}) {
                let o = t.length;
                l.invariant(o === e.length, "Both input and output ranges must be the same length"), l.invariant(!i || !Array.isArray(i) || i.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let s = function(t, e, n) {
                        let i = [],
                            r = n || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return eJ.test(t) ? nR : nF;
                                else if (Array.isArray(t)) return nD;
                                else if ("object" == typeof t) return nL;
                                return nj
                            }(t[0]),
                            o = t.length - 1;
                        for (let n = 0; n < o; n++) {
                            let o = r(t[n], t[n + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[n] : e;
                                o = es(t, o)
                            }
                            i.push(o)
                        }
                        return i
                    }(e, i, r),
                    a = s.length,
                    u = e => {
                        let n = 0;
                        if (a > 1)
                            for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                        let i = nB(t[n], t[n + 1], e);
                        return s[n](i)
                    };
                return n ? e => u(K(t[0], t[o - 1], e)) : u
            }
            let nO = t => t,
                nU = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

            function nN(t, e, n, i) {
                if (t === e && n === i) return nO;
                let r = e => (function(t, e, n, i, r) {
                    let o, s;
                    let a = 0;
                    do(o = nU(s = e + (n - e) / 2, i, r) - t) > 0 ? n = s : e = s; while (Math.abs(o) > 1e-7 && ++a < 12);
                    return s
                })(e, 0, 1, t, n);
                return t => 0 === t || 1 === t ? t : nU(r(t), e, i)
            }
            let n$ = t => 1 - Math.sin(Math.acos(t)),
                nz = nw(n$),
                nW = nx(nz),
                nY = nN(.33, 1.53, .69, .99),
                nH = nw(nY),
                nX = nx(nH),
                nG = {
                    linear: nO,
                    easeIn: nb,
                    easeInOut: nE,
                    easeOut: nA,
                    circIn: n$,
                    circInOut: nW,
                    circOut: nz,
                    backIn: nH,
                    backInOut: nX,
                    backOut: nY,
                    anticipate: t => (t *= 2) < 1 ? .5 * nH(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                nq = t => {
                    if (Array.isArray(t)) {
                        l.invariant(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, n, i, r] = t;
                        return nN(e, n, i, r)
                    }
                    return "string" == typeof t ? (l.invariant(void 0 !== nG[t], `Invalid easing type '${t}'`), nG[t]) : t
                },
                nZ = t => Array.isArray(t) && "number" != typeof t[0];

            function n_({
                keyframes: t,
                ease: e = nE,
                times: n,
                duration: i = 300
            }) {
                t = [...t];
                let r = n_[0],
                    o = nZ(e) ? e.map(nq) : nq(e),
                    s = {
                        done: !1,
                        value: r
                    },
                    a = (n && n.length === n_.length ? n : function(t) {
                        let e = t.length;
                        return t.map((t, n) => 0 !== n ? n / (e - 1) : 0)
                    }(t)).map(t => t * i);

                function l() {
                    var e;
                    return nI(a, t, {
                        ease: Array.isArray(o) ? o : (e = t).map(() => o || nE).splice(0, e.length - 1)
                    })
                }
                let u = l();
                return {
                    next: t => (s.value = u(t), s.done = t >= i, s),
                    flipTarget: () => {
                        t.reverse(), u = l()
                    }
                }
            }

            function nK(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let nJ = ["duration", "bounce"],
                nQ = ["stiffness", "damping", "mass"];

            function n0(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function n1({
                keyframes: t,
                restSpeed: e = 2,
                restDelta: n = .01,
                ...i
            }) {
                let r = t[0],
                    o = t[t.length - 1],
                    s = {
                        done: !1,
                        value: r
                    },
                    {
                        stiffness: a,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!n0(t, nQ) && n0(t, nJ)) {
                            let n = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: n = 0,
                                mass: i = 1
                            }) {
                                let r, o;
                                l.warning(t <= 1e4, "Spring duration must be 10 seconds or less");
                                let s = 1 - e;
                                s = K(.05, 1, s), t = K(.01, 10, t / 1e3), s < 1 ? (r = e => {
                                    let i = e * s,
                                        r = i * t,
                                        o = nK(e, s);
                                    return .001 - (i - n) / o * Math.exp(-r)
                                }, o = e => {
                                    let i = e * s,
                                        o = i * t,
                                        a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                                        l = nK(Math.pow(e, 2), s),
                                        u = -r(e) + .001 > 0 ? -1 : 1;
                                    return u * ((o * n + n - a) * Math.exp(-o)) / l
                                }) : (r = e => {
                                    let i = Math.exp(-e * t),
                                        r = (e - n) * t + 1;
                                    return -.001 + i * r
                                }, o = e => {
                                    let i = Math.exp(-e * t),
                                        r = (n - e) * (t * t);
                                    return i * r
                                });
                                let a = 5 / t,
                                    u = function(t, e, n) {
                                        let i = n;
                                        for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                                        return i
                                    }(r, o, a);
                                if (t *= 1e3, isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(u, 2) * i;
                                    return {
                                        stiffness: e,
                                        damping: 2 * s * Math.sqrt(i * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(i),
                    f = n5,
                    m = c ? -(c / 1e3) : 0,
                    v = u / (2 * Math.sqrt(a * h));

                function g() {
                    let t = o - r,
                        e = Math.sqrt(a / h) / 1e3;
                    if (void 0 === n && (n = Math.min(Math.abs(o - r) / 100, .4)), v < 1) {
                        let n = nK(e, v);
                        f = i => {
                            let r = Math.exp(-v * e * i);
                            return o - r * ((m + v * e * t) / n * Math.sin(n * i) + t * Math.cos(n * i))
                        }
                    } else if (1 === v) f = n => o - Math.exp(-e * n) * (t + (m + e * t) * n);
                    else {
                        let n = e * Math.sqrt(v * v - 1);
                        f = i => {
                            let r = Math.exp(-v * e * i),
                                s = Math.min(n * i, 300);
                            return o - r * ((m + v * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
                        }
                    }
                }
                return g(), {
                    next: t => {
                        let i = f(t);
                        if (p) s.done = t >= d;
                        else {
                            let r = m;
                            if (0 !== t) {
                                if (v < 1) {
                                    let e = Math.max(0, t - 5);
                                    r = e$(i - f(e), t - e)
                                } else r = 0
                            }
                            let a = Math.abs(r) <= e,
                                l = Math.abs(o - i) <= n;
                            s.done = a && l
                        }
                        return s.value = s.done ? o : i, s
                    },
                    flipTarget: () => {
                        m = -m, [r, o] = [o, r], g()
                    }
                }
            }
            n1.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
            let n5 = t => 0,
                n3 = {
                    decay: function({
                        keyframes: t = [0],
                        velocity: e = 0,
                        power: n = .8,
                        timeConstant: i = 350,
                        restDelta: r = .5,
                        modifyTarget: o
                    }) {
                        let s = t[0],
                            a = {
                                done: !1,
                                value: s
                            },
                            l = n * e,
                            u = s + l,
                            h = void 0 === o ? u : o(u);
                        return h !== u && (l = h - s), {
                            next: t => {
                                let e = -l * Math.exp(-t / i);
                                return a.done = !(e > r || e < -r), a.value = a.done ? h : h + e, a
                            },
                            flipTarget: () => {}
                        }
                    },
                    keyframes: n_,
                    tween: n_,
                    spring: n1
                };

            function n2(t, e, n = 0) {
                return t - e - n
            }
            let n9 = t => {
                let e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => eD.update(e, !0),
                    stop: () => eL.update(e)
                }
            };

            function n4({
                duration: t,
                driver: e = n9,
                elapsed: n = 0,
                repeat: i = 0,
                repeatType: r = "loop",
                repeatDelay: o = 0,
                keyframes: s,
                autoplay: a = !0,
                onPlay: l,
                onStop: u,
                onComplete: h,
                onRepeat: c,
                onUpdate: d,
                type: p = "keyframes",
                ...f
            }) {
                var m;
                let v, g, y;
                let x = 0,
                    w = t,
                    b = !1,
                    A = !0,
                    E = n3[s.length > 2 ? "keyframes" : p],
                    T = s[0],
                    V = s[s.length - 1];
                (null === (m = E.needsInterpolation) || void 0 === m ? void 0 : m.call(E, T, V)) && (y = nI([0, 100], [T, V], {
                    clamp: !1
                }), s = [0, 100]);
                let P = E({ ...f,
                    duration: t,
                    keyframes: s
                });
                return a && (l && l(), (v = e(function(t) {
                    if (A || (t = -t), n += t, !b) {
                        let t = P.next(Math.max(0, n));
                        g = t.value, y && (g = y(g)), b = A ? t.done : n <= 0
                    }
                    if (d && d(g), b) {
                        if (0 === x && (w = void 0 !== w ? w : n), x < i) {
                            var e, s;
                            e = n, s = w, (A ? e >= s + o : e <= -o) && (x++, "reverse" === r ? n = function(t, e = 0, n = 0, i = !0) {
                                return i ? n2(e + -t, e, n) : e - (t - e) + n
                            }(n, w, o, A = x % 2 == 0) : (n = n2(n, w, o), "mirror" === r && P.flipTarget()), b = !1, c && c())
                        } else v.stop(), h && h()
                    }
                })).start()), {
                    stop: () => {
                        u && u(), v.stop()
                    },
                    sample: t => P.next(Math.max(0, t))
                }
            }
            let n6 = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
                n7 = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: n6([0, .65, .55, 1]),
                    circOut: n6([.55, 0, 1, .45]),
                    backIn: n6([.31, .01, .66, -.59]),
                    backOut: n6([.33, 1.53, .69, .99])
                };

            function n8(t, e, n, {
                delay: i = 0,
                duration: r,
                repeat: o = 0,
                repeatType: s = "loop",
                ease: a,
                times: l
            } = {}) {
                return t.animate({
                    [e]: n,
                    offset: l
                }, {
                    delay: i,
                    duration: r,
                    easing: function(t) {
                        if (t) return Array.isArray(t) ? n6(t) : n7[t]
                    }(a),
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === s ? "alternate" : "normal"
                })
            }

            function it(t, e) {
                let n = performance.now(),
                    i = ({
                        timestamp: r
                    }) => {
                        let o = r - n;
                        o >= e && (eL.read(i), t(o - e))
                    };
                return eD.read(i, !0), () => eL.read(i)
            }
            let ie = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                ii = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                ir = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                io = {
                    type: "keyframes",
                    duration: .8
                },
                is = {
                    x: ie,
                    y: ie,
                    z: ie,
                    rotate: ie,
                    rotateX: ie,
                    rotateY: ie,
                    rotateZ: ie,
                    scaleX: ii,
                    scaleY: ii,
                    scale: ii,
                    opacity: ir,
                    backgroundColor: ir,
                    color: ir,
                    default: ii
                },
                ia = (t, {
                    keyframes: e
                }) => {
                    if (e.length > 2) return io; {
                        let n = is[t] || is.default;
                        return n(e[1])
                    }
                },
                il = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && e9.test(e) && !e.startsWith("url("));

            function iu(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function ih(t) {
                return "number" == typeof t ? 0 : nn("", t)
            }

            function ic(t, e) {
                return t[e] || t.default || t
            }
            let id = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                ip = {},
                im = {};
            for (let t in id) im[t] = () => (void 0 === ip[t] && (ip[t] = id[t]()), ip[t]);
            let iv = new Set(["opacity"]),
                ig = (t, e, n, i = {}) => r => {
                    let o = ic(i, t) || {},
                        s = o.delay || i.delay || 0,
                        {
                            elapsed: a = 0
                        } = i;
                    a -= ng(s);
                    let u = function(t, e, n, i) {
                            let r = il(e, n),
                                o = void 0 !== i.from ? i.from : t.get();
                            return ("none" === o && r && "string" == typeof n ? o = nn(e, n) : iu(o) && "string" == typeof n ? o = ih(n) : !Array.isArray(n) && iu(n) && "string" == typeof o && (n = ih(o)), Array.isArray(n)) ? (null === n[0] && (n[0] = o), n) : [o, n]
                        }(e, t, n, o),
                        h = u[0],
                        c = u[u.length - 1],
                        d = il(t, h),
                        p = il(t, c);
                    l.warning(d === p, `You are trying to animate ${t} from "${h}" to "${c}". ${h} is not an animatable value - to enable this animation set ${h} to a value animatable to ${c} via the \`style\` property.`);
                    let f = {
                        keyframes: u,
                        velocity: e.getVelocity(),
                        ...o,
                        elapsed: a,
                        onUpdate: t => {
                            e.set(t), o.onUpdate && o.onUpdate(t)
                        },
                        onComplete: () => {
                            r(), o.onComplete && o.onComplete()
                        }
                    };
                    if (!d || !p || ny.current || !1 === o.type) return function({
                        keyframes: t,
                        elapsed: e,
                        onUpdate: n,
                        onComplete: i
                    }) {
                        let r = () => (n && n(t[t.length - 1]), i && i(), () => {});
                        return e ? it(r, -e) : r()
                    }(f);
                    if ("inertia" === o.type) {
                        let t = function({
                            keyframes: t,
                            velocity: e = 0,
                            min: n,
                            max: i,
                            power: r = .8,
                            timeConstant: o = 750,
                            bounceStiffness: s = 500,
                            bounceDamping: a = 10,
                            restDelta: l = 1,
                            modifyTarget: u,
                            driver: h,
                            onUpdate: c,
                            onComplete: d,
                            onStop: p
                        }) {
                            let f;
                            let m = t[0];

                            function v(t) {
                                return void 0 !== n && t < n || void 0 !== i && t > i
                            }

                            function g(t) {
                                return void 0 === n ? i : void 0 === i ? n : Math.abs(n - t) < Math.abs(i - t) ? n : i
                            }

                            function y(t) {
                                null == f || f.stop(), f = n4({
                                    keyframes: [0, 1],
                                    velocity: 0,
                                    ...t,
                                    driver: h,
                                    onUpdate: e => {
                                        var n;
                                        null == c || c(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                    },
                                    onComplete: d,
                                    onStop: p
                                })
                            }

                            function x(t) {
                                y({
                                    type: "spring",
                                    stiffness: s,
                                    damping: a,
                                    restDelta: l,
                                    ...t
                                })
                            }
                            if (v(m)) x({
                                velocity: e,
                                keyframes: [m, g(m)]
                            });
                            else {
                                let t, i, s = r * e + m;
                                void 0 !== u && (s = u(s));
                                let a = g(s),
                                    h = a === n ? -1 : 1;
                                y({
                                    type: "decay",
                                    keyframes: [m, 0],
                                    velocity: e,
                                    timeConstant: o,
                                    power: r,
                                    restDelta: l,
                                    modifyTarget: u,
                                    onUpdate: v(s) ? n => {
                                        t = i, i = n, e = e$(n - t, eE.delta), (1 === h && n > a || -1 === h && n < a) && x({
                                            keyframes: [n, a],
                                            velocity: e
                                        })
                                    } : void 0
                                })
                            }
                            return {
                                stop: () => null == f ? void 0 : f.stop()
                            }
                        }(f);
                        return () => t.stop()
                    }! function({
                        when: t,
                        delay: e,
                        delayChildren: n,
                        staggerChildren: i,
                        staggerDirection: r,
                        repeat: o,
                        repeatType: s,
                        repeatDelay: a,
                        from: l,
                        ...u
                    }) {
                        return !!Object.keys(u).length
                    }(o) && (f = { ...f,
                        ...ia(t, f)
                    }), f.duration && (f.duration = ng(f.duration)), f.repeatDelay && (f.repeatDelay = ng(f.repeatDelay));
                    let m = e.owner,
                        v = m && m.current,
                        g = im.waapi() && iv.has(t) && !f.repeatDelay && "mirror" !== f.repeatType && 0 !== f.damping && m && v instanceof HTMLElement && !m.getProps().onUpdate;
                    if (g) return function(t, e, {
                        onUpdate: n,
                        onComplete: i,
                        ...r
                    }) {
                        var o;
                        let {
                            keyframes: s,
                            duration: a = .3,
                            elapsed: l = 0,
                            ease: u
                        } = r;
                        if ("spring" === r.type || !(!(o = r.ease) || Array.isArray(o) || "string" == typeof o && n7[o])) {
                            let t = n4(r),
                                e = {
                                    done: !1,
                                    value: s[0]
                                },
                                n = [],
                                i = 0;
                            for (; !e.done;) n.push((e = t.sample(i)).value), i += 10;
                            s = n, a = i - 10, u = "linear"
                        }
                        let h = n8(t.owner.current, e, s, { ...r,
                            delay: -l,
                            duration: a,
                            ease: u
                        });
                        return h.onfinish = () => {
                            t.set(s[s.length - 1]), i && i()
                        }, () => {
                            let {
                                currentTime: e
                            } = h;
                            if (e) {
                                let n = n4(r);
                                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                            }
                            eD.update(() => h.cancel())
                        }
                    }(e, t, f); {
                        let t = n4(f);
                        return () => t.stop()
                    }
                };

            function iy(t, e, n = {}) {
                let i;
                if (t.notify("AnimationStart", e), Array.isArray(e)) {
                    let r = e.map(e => ix(t, e, n));
                    i = Promise.all(r)
                } else if ("string" == typeof e) i = ix(t, e, n);
                else {
                    let r = "function" == typeof e ? nl(t, e, n.custom) : e;
                    i = iw(t, r, n)
                }
                return i.then(() => t.notify("AnimationComplete", e))
            }

            function ix(t, e, n = {}) {
                var i;
                let r = nl(t, e, n.custom),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = r || {};
                n.transitionOverride && (o = n.transitionOverride);
                let s = r ? () => iw(t, r, n) : () => Promise.resolve(),
                    a = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: s,
                            staggerDirection: a
                        } = o;
                        return function(t, e, n = 0, i = 0, r = 1, o) {
                            let s = [],
                                a = (t.variantChildren.size - 1) * i,
                                l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                            return Array.from(t.variantChildren).sort(ib).forEach((t, i) => {
                                s.push(ix(t, e, { ...o,
                                    delay: n + l(i)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(s)
                        }(t, e, r + i, s, a, n)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (!l) return Promise.all([s(), a(n.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
                    return t().then(e)
                }
            }

            function iw(t, e, {
                delay: n = 0,
                transitionOverride: i,
                type: r
            } = {}) {
                var o;
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = t.makeTargetAnimatable(e), u = t.getValue("willChange");
                i && (s = i);
                let h = [],
                    c = r && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[r]);
                for (let e in l) {
                    let i = t.getValue(e),
                        r = l[e];
                    if (!i || void 0 === r || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, n) {
                            let i = t.hasOwnProperty(n) && !0 !== e[n];
                            return e[n] = !1, i
                        }(c, e)) continue;
                    let o = {
                        delay: n,
                        elapsed: 0,
                        ...s
                    };
                    if (t.shouldReduceMotion && W.has(e) && (o = { ...o,
                            type: !1,
                            delay: 0
                        }), !i.hasAnimated) {
                        let n = t.getProps()[nv];
                        n && (o.elapsed = function(t, e) {
                            let {
                                MotionAppearAnimations: n
                            } = window, i = nf(t, W.has(e) ? "transform" : e), r = n && n.get(i);
                            return r ? (eD.render(() => {
                                try {
                                    r.cancel(), n.delete(i)
                                } catch (t) {}
                            }), r.currentTime || 0) : 0
                        }(n, e))
                    }
                    let a = i.start(ig(e, i, r, o));
                    np(u) && (u.add(e), a = a.then(() => u.remove(e))), h.push(a)
                }
                return Promise.all(h).then(() => {
                    a && nu(t, a)
                })
            }

            function ib(t, e) {
                return t.sortNodePosition(e)
            }
            let iA = [e.AnimationType.Animate, e.AnimationType.InView, e.AnimationType.Focus, e.AnimationType.Hover, e.AnimationType.Tap, e.AnimationType.Drag, e.AnimationType.Exit],
                iE = [...iA].reverse(),
                iT = iA.length;

            function iV(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let iP = {
                    animation: eg(({
                        visualElement: t,
                        animate: n
                    }) => {
                        t.animationState || (t.animationState = function(t) {
                            let n = e => Promise.all(e.map(({
                                    animation: e,
                                    options: n
                                }) => iy(t, e, n))),
                                i = {
                                    [e.AnimationType.Animate]: iV(!0),
                                    [e.AnimationType.InView]: iV(),
                                    [e.AnimationType.Hover]: iV(),
                                    [e.AnimationType.Tap]: iV(),
                                    [e.AnimationType.Drag]: iV(),
                                    [e.AnimationType.Focus]: iV(),
                                    [e.AnimationType.Exit]: iV()
                                },
                                r = !0,
                                o = (e, n) => {
                                    let i = nl(t, n);
                                    if (i) {
                                        let {
                                            transition: t,
                                            transitionEnd: n,
                                            ...r
                                        } = i;
                                        e = { ...e,
                                            ...r,
                                            ...n
                                        }
                                    }
                                    return e
                                };

                            function s(e, s) {
                                let a = t.getProps(),
                                    l = t.getVariantContext(!0) || {},
                                    u = [],
                                    h = new Set,
                                    c = {},
                                    d = 1 / 0;
                                for (let n = 0; n < iT; n++) {
                                    var p;
                                    let f = iE[n],
                                        m = i[f],
                                        v = void 0 !== a[f] ? a[f] : l[f],
                                        g = w(v),
                                        y = f === s ? m.isActive : null;
                                    !1 === y && (d = n);
                                    let x = v === l[f] && v !== a[f] && g;
                                    if (x && r && t.manuallyAnimateOnMount && (x = !1), m.protectedKeys = { ...c
                                        }, !m.isActive && null === y || !v && !m.prevProp || b(v) || "boolean" == typeof v) continue;
                                    let A = (p = m.prevProp, "string" == typeof v ? v !== p : !!Array.isArray(v) && !ew(v, p)),
                                        E = A || f === s && m.isActive && !x && g || n > d && g,
                                        T = Array.isArray(v) ? v : [v],
                                        V = T.reduce(o, {});
                                    !1 === y && (V = {});
                                    let {
                                        prevResolvedValues: P = {}
                                    } = m, S = { ...P,
                                        ...V
                                    }, C = t => {
                                        E = !0, h.delete(t), m.needsAnimating[t] = !0
                                    };
                                    for (let t in S) {
                                        let e = V[t],
                                            n = P[t];
                                        c.hasOwnProperty(t) || (e !== n ? tO(e) && tO(n) ? !ew(e, n) || A ? C(t) : m.protectedKeys[t] = !0 : void 0 !== e ? C(t) : h.add(t) : void 0 !== e && h.has(t) ? C(t) : m.protectedKeys[t] = !0)
                                    }
                                    m.prevProp = v, m.prevResolvedValues = V, m.isActive && (c = { ...c,
                                        ...V
                                    }), r && t.blockInitialAnimation && (E = !1), E && !x && u.push(...T.map(t => ({
                                        animation: t,
                                        options: {
                                            type: f,
                                            ...e
                                        }
                                    })))
                                }
                                if (h.size) {
                                    let e = {};
                                    h.forEach(n => {
                                        let i = t.getBaseTarget(n);
                                        void 0 !== i && (e[n] = i)
                                    }), u.push({
                                        animation: e
                                    })
                                }
                                let f = !!u.length;
                                return r && !1 === a.initial && !t.manuallyAnimateOnMount && (f = !1), r = !1, f ? n(u) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(e, n, r) {
                                    var o;
                                    if (i[e].isActive === n) return Promise.resolve();
                                    null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                        var i;
                                        return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                    }), i[e].isActive = n;
                                    let a = s(r, e);
                                    for (let t in i) i[t].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(e) {
                                    n = e(t)
                                },
                                getState: () => i
                            }
                        }(t)), b(n) && a.useEffect(() => n.subscribe(t), [n])
                    }),
                    exit: eg(t => {
                        let {
                            custom: n,
                            visualElement: i
                        } = t, [r, o] = ex(), s = a.useContext(m);
                        a.useEffect(() => {
                            i.isPresent = r;
                            let t = i.animationState && i.animationState.setActive(e.AnimationType.Exit, !r, {
                                custom: s && s.custom || n
                            });
                            t && !r && t.then(o)
                        }, [r])
                    })
                },
                iS = (t, e) => Math.abs(t - e);

            function iC(t, e) {
                let n = iS(t.x, e.x),
                    i = iS(t.y, e.y);
                return Math.sqrt(n ** 2 + i ** 2)
            }
            class iM {
                constructor(t, e, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = iD(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                n = iC(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !n) return;
                            let {
                                point: i
                            } = t, {
                                timestamp: r
                            } = eE;
                            this.history.push({ ...i,
                                timestamp: r
                            });
                            let {
                                onStart: o,
                                onMove: s
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            if (this.lastMoveEvent = t, this.lastMoveEventInfo = iR(e, this.transformPagePoint), tq(t) && 0 === t.buttons) {
                                this.handlePointerUp(t, e);
                                return
                            }
                            eD.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: i
                            } = this.handlers, r = iD(iR(e, this.transformPagePoint), this.history);
                            this.startEvent && n && n(t, r), i && i(t, r)
                        }, tZ(t) && t.touches.length > 1) return;
                    this.handlers = e, this.transformPagePoint = n;
                    let i = tK(t),
                        r = iR(i, this.transformPagePoint),
                        {
                            point: o
                        } = r,
                        {
                            timestamp: s
                        } = eE;
                    this.history = [{ ...o,
                        timestamp: s
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, iD(r, this.history)), this.removeListeners = es(t9(window, "pointermove", this.handlePointerMove), t9(window, "pointerup", this.handlePointerUp), t9(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), eL.update(this.updatePoint)
                }
            }

            function iR(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function ik(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iD({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: ik(t, iL(e)),
                    offset: ik(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = t.length - 1,
                            i = null,
                            r = iL(t);
                        for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > ng(.1)));) n--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let o = (r.timestamp - i.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let s = {
                            x: (r.x - i.x) / o,
                            y: (r.y - i.y) / o
                        };
                        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
                    }(e, 0)
                }
            }

            function iL(t) {
                return t[t.length - 1]
            }

            function iF(t) {
                return t.max - t.min
            }

            function iB(t, e = 0, n = .01) {
                return Math.abs(t - e) <= n
            }

            function ij(t, e, n, i = .5) {
                t.origin = i, t.originPoint = nT(e.min, e.max, t.origin), t.scale = iF(n) / iF(e), (iB(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = nT(n.min, n.max, t.origin) - t.originPoint, (iB(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function iI(t, e, n, i) {
                ij(t.x, e.x, n.x, null == i ? void 0 : i.originX), ij(t.y, e.y, n.y, null == i ? void 0 : i.originY)
            }

            function iO(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + iF(e)
            }

            function iU(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + iF(e)
            }

            function iN(t, e, n) {
                iU(t.x, e.x, n.x), iU(t.y, e.y, n.y)
            }

            function i$(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function iz(t, e) {
                let n = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
                    min: n,
                    max: i
                }
            }

            function iW(t, e, n) {
                return {
                    min: iY(t, e),
                    max: iY(t, n)
                }
            }

            function iY(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let iH = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iX = () => ({
                    x: iH(),
                    y: iH()
                }),
                iG = () => ({
                    min: 0,
                    max: 0
                }),
                iq = () => ({
                    x: iG(),
                    y: iG()
                });

            function iZ(t) {
                return [t("x"), t("y")]
            }

            function i_({
                top: t,
                left: e,
                right: n,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: n
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function iK(t) {
                return void 0 === t || 1 === t
            }

            function iJ({
                scale: t,
                scaleX: e,
                scaleY: n
            }) {
                return !iK(t) || !iK(e) || !iK(n)
            }

            function iQ(t) {
                return iJ(t) || i0(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function i0(t) {
                var e, n;
                return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
            }

            function i1(t, e, n, i, r) {
                return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
            }

            function i5(t, e = 0, n = 1, i, r) {
                t.min = i1(t.min, e, n, i, r), t.max = i1(t.max, e, n, i, r)
            }

            function i3(t, {
                x: e,
                y: n
            }) {
                i5(t.x, e.translate, e.scale, e.originPoint), i5(t.y, n.translate, n.scale, n.originPoint)
            }

            function i2(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function i9(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function i4(t, e, [n, i, r]) {
                let o = void 0 !== e[r] ? e[r] : .5,
                    s = nT(t.min, t.max, o);
                i5(t, e[n], e[i], s, e.scale)
            }
            let i6 = ["x", "scaleX", "originX"],
                i7 = ["y", "scaleY", "originY"];

            function i8(t, e) {
                i4(t.x, e, i6), i4(t.y, e, i7)
            }

            function rt(t, e) {
                return i_(function(t, e) {
                    if (!e) return t;
                    let n = e({
                            x: t.left,
                            y: t.top
                        }),
                        i = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: i.y,
                        right: i.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let re = new WeakMap;
            class rn {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iq(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: n = !1
                } = {}) {
                    !1 !== this.visualElement.isPresent && (this.panSession = new iM(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), n && this.snapToCursor(tK(t, "page").point)
                        },
                        onStart: (t, n) => {
                            var i;
                            let {
                                drag: r,
                                dragPropagation: o,
                                onDragStart: s
                            } = this.getProps();
                            (!r || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = et(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iZ(t => {
                                var e, n;
                                let i = this.getAxisMotionValue(t).get() || 0;
                                if (tl.test(i)) {
                                    let r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                                    if (r) {
                                        let t = iF(r);
                                        i = t * (parseFloat(i) / 100)
                                    }
                                }
                                this.originPoint[t] = i
                            }), null == s || s(t, n), null === (i = this.visualElement.animationState) || void 0 === i || i.setActive(e.AnimationType.Drag, !0))
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: i,
                                onDirectionLock: r,
                                onDrag: o
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: s
                            } = e;
                            if (i && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let n = null;
                                    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                                }(s), null !== this.currentDirection && (null == r || r(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == o || o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: i
                    } = e;
                    this.startAnimation(i);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    null == r || r(t, e)
                }
                cancel() {
                    var t, n;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(e.AnimationType.Drag, !1)
                }
                updateAxis(t, e, n) {
                    let {
                        drag: i
                    } = this.getProps();
                    if (!n || !ri(t, i, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: n
                    }, i) {
                        return void 0 !== e && t < e ? t = i ? nT(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? nT(n, t, i.max) : Math.min(t, n)), t
                    }(o, this.constraints[t], this.elastic[t])), r.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, i = this.constraints;
                    t && x(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {
                        top: e,
                        left: n,
                        bottom: i,
                        right: r
                    }) {
                        return {
                            x: i$(t.x, n, r),
                            y: i$(t.y, e, i)
                        }
                    }(n.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: iW(t, "left", "right"),
                            y: iW(t, "top", "bottom")
                        }
                    }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iZ(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let n = {};
                            return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!e || !x(e)) return !1;
                    let i = e.current;
                    l.invariant(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let o = function(t, e, n) {
                            let i = rt(t, n),
                                {
                                    scroll: r
                                } = e;
                            return r && (i9(i.x, r.offset.x), i9(i.y, r.offset.y)), i
                        }(i, r.root, this.visualElement.getTransformPagePoint()),
                        s = {
                            x: iz((t = r.layout.layoutBox).x, o.x),
                            y: iz(t.y, o.y)
                        };
                    if (n) {
                        let t = n(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(s));
                        this.hasMutatedConstraints = !!t, t && (s = i_(t))
                    }
                    return s
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: n,
                        dragElastic: i,
                        dragTransition: r,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: s
                    } = this.getProps(), a = this.constraints || {}, l = iZ(s => {
                        if (!ri(s, e, this.currentDirection)) return;
                        let l = (null == a ? void 0 : a[s]) || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? t[s] : 0,
                            bounceStiffness: i ? 200 : 1e6,
                            bounceDamping: i ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(s, u)
                    });
                    return Promise.all(l).then(s)
                }
                startAxisValueAnimation(t, e) {
                    let n = this.getAxisMotionValue(t);
                    return n.start(ig(t, n, 0, e))
                }
                stopAnimation() {
                    iZ(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    var e;
                    let n = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps()[n];
                    return i || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
                }
                snapToCursor(t) {
                    iZ(e => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!ri(e, n, this.currentDirection)) return;
                        let {
                            projection: i
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (i && i.layout) {
                            let {
                                min: n,
                                max: o
                            } = i.layout.layoutBox[e];
                            r.set(t[e] - nT(n, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var t;
                    if (!this.visualElement.current) return;
                    let {
                        drag: e,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!x(n) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    iZ(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let n = e.get();
                            r[t] = function(t, e) {
                                let n = .5,
                                    i = iF(t),
                                    r = iF(e);
                                return r > i ? n = nB(e.min, e.max - i, t.min) : i > r && (n = nB(t.min, t.max - r, e.min)), K(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), iZ(t => {
                        if (!ri(t, e, null)) return;
                        let n = this.getAxisMotionValue(t),
                            {
                                min: i,
                                max: o
                            } = this.constraints[t];
                        n.set(nT(i, o, r[t]))
                    })
                }
                addListeners() {
                    var t;
                    if (!this.visualElement.current) return;
                    re.set(this.visualElement, this);
                    let e = this.visualElement.current,
                        n = t9(e, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: n = !0
                            } = this.getProps();
                            e && n && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            x(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        o = r.addEventListener("measure", i);
                    r && !r.layout && (null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout()), i();
                    let s = tX(window, "resize", () => this.scalePositionWithinConstraints()),
                        a = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (iZ(e => {
                                let n = this.getAxisMotionValue(e);
                                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        s(), n(), o(), null == a || a()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: i = !1,
                            dragConstraints: r = !1,
                            dragElastic: o = .35,
                            dragMomentum: s = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: n,
                        dragPropagation: i,
                        dragConstraints: r,
                        dragElastic: o,
                        dragMomentum: s
                    }
                }
            }

            function ri(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            let rr = {
                pan: eg(function({
                    onPan: t,
                    onPanStart: e,
                    onPanEnd: n,
                    onPanSessionStart: i,
                    visualElement: r
                }) {
                    let o = t || e || n || i,
                        s = a.useRef(null),
                        {
                            transformPagePoint: l
                        } = a.useContext(d),
                        u = {
                            onSessionStart: i,
                            onStart: e,
                            onMove: t,
                            onEnd: (t, e) => {
                                s.current = null, n && n(t, e)
                            }
                        };
                    a.useEffect(() => {
                        null !== s.current && s.current.updateHandlers(u)
                    }), t4(r, "pointerdown", o && function(t) {
                        s.current = new iM(t, u, {
                            transformPagePoint: l
                        })
                    }), er(() => s.current && s.current.end())
                }),
                drag: eg(function(t) {
                    let {
                        dragControls: e,
                        visualElement: n
                    } = t, i = M(() => new rn(n));
                    a.useEffect(() => e && e.subscribe(i), [i, e]), a.useEffect(() => i.addListeners(), [i])
                })
            };

            function ro(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            let rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function ra(t, e, n = 1) {
                l.invariant(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [i, r] = function(t) {
                    let e = rs.exec(t);
                    if (!e) return [, ];
                    let [, n, i] = e;
                    return [n, i]
                }(t);
                if (!i) return;
                let o = window.getComputedStyle(e).getPropertyValue(i);
                return o ? o.trim() : ro(r) ? ra(r, e, n + 1) : r
            }
            let rl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                ru = t => rl.has(t),
                rh = t => Object.keys(t).some(ru),
                rc = (t, e) => {
                    t.set(e, !1), t.set(e)
                },
                rd = t => t === J || t === tu;
            (r = o || (o = {})).width = "width", r.height = "height", r.left = "left", r.right = "right", r.top = "top", r.bottom = "bottom";
            let rp = (t, e) => parseFloat(t.split(", ")[e]),
                rf = (t, e) => (n, {
                    transform: i
                }) => {
                    if ("none" === i || !i) return 0;
                    let r = i.match(/^matrix3d\((.+)\)$/);
                    if (r) return rp(r[1], e); {
                        let e = i.match(/^matrix\((.+)\)$/);
                        return e ? rp(e[1], t) : 0
                    }
                },
                rm = new Set(["x", "y", "z"]),
                rv = z.filter(t => !rm.has(t)),
                rg = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: rf(4, 13),
                    y: rf(5, 14)
                },
                ry = (t, e, n) => {
                    let i = e.measureViewportBox(),
                        r = e.current,
                        o = getComputedStyle(r),
                        {
                            display: s
                        } = o,
                        a = {};
                    "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach(t => {
                        a[t] = rg[t](i, o)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return n.forEach(n => {
                        let i = e.getValue(n);
                        rc(i, a[n]), t[n] = rg[n](l, o)
                    }), t
                },
                rx = (t, e, n = {}, i = {}) => {
                    e = { ...e
                    }, i = { ...i
                    };
                    let r = Object.keys(e).filter(ru),
                        o = [],
                        s = !1,
                        a = [];
                    if (r.forEach(r => {
                            let u;
                            let h = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let c = n[r],
                                d = no(c),
                                p = e[r];
                            if (tO(p)) {
                                let t = p.length,
                                    e = null === p[0] ? 1 : 0;
                                d = no(c = p[e]);
                                for (let n = e; n < t; n++) u ? l.invariant(no(p[n]) === u, "All keyframes must be of the same type") : (u = no(p[n]), l.invariant(u === d || rd(d) && rd(u), "Keyframes must be of the same dimension as the current value"))
                            } else u = no(p);
                            if (d !== u) {
                                if (rd(d) && rd(u)) {
                                    let t = h.get();
                                    "string" == typeof t && h.set(parseFloat(t)), "string" == typeof p ? e[r] = parseFloat(p) : Array.isArray(p) && u === tu && (e[r] = p.map(parseFloat))
                                } else(null == d ? void 0 : d.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === p) ? 0 === c ? h.set(u.transform(c)) : e[r] = d.transform(p) : (s || (o = function(t) {
                                    let e = [];
                                    return rv.forEach(n => {
                                        let i = t.getValue(n);
                                        void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), s = !0), a.push(r), i[r] = void 0 !== i[r] ? i[r] : e[r], rc(h, p))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: i
                    }; {
                        let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = ry(e, t, a);
                        return o.length && o.forEach(([e, n]) => {
                            t.getValue(e).set(n)
                        }), t.render(), v && null !== n && window.scrollTo({
                            top: n
                        }), {
                            target: r,
                            transitionEnd: i
                        }
                    }
                },
                rw = (t, e, n, i) => {
                    var r, o;
                    let s = function(t, { ...e
                    }, n) {
                        let i = t.current;
                        if (!(i instanceof Element)) return {
                            target: e,
                            transitionEnd: n
                        };
                        for (let r in n && (n = { ...n
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!ro(e)) return;
                                let n = ra(e, i);
                                n && t.set(n)
                            }), e) {
                            let t = e[r];
                            if (!ro(t)) continue;
                            let o = ra(t, i);
                            o && (e[r] = o, n && void 0 === n[r] && (n[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: n
                        }
                    }(t, e, i);
                    return e = s.target, i = s.transitionEnd, r = e, o = i, rh(r) ? rx(t, r, n, o) : {
                        target: r,
                        transitionEnd: o
                    }
                },
                rb = {
                    current: null
                },
                rA = {
                    current: !1
                };

            function rE() {
                if (rA.current = !0, v) {
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => rb.current = t.matches;
                        t.addListener(e), e()
                    } else rb.current = !1
                }
            }
            let rT = Object.keys(S),
                rV = rT.length,
                rP = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rS {
                constructor({
                    parent: t,
                    props: e,
                    reducedMotionConfig: n,
                    visualState: i
                }, r = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => eD.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: s
                    } = i;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = s, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = r, this.isControllingVariants = E(e), this.isVariantNode = T(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: a,
                        ...l
                    } = this.scrapeMotionValuesFromProps(e);
                    for (let t in l) {
                        let e = l[t];
                        void 0 !== o[t] && H(e) && (e.set(o[t], !1), np(a) && a.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t) {
                    return {}
                }
                mount(t) {
                    var e;
                    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), rA.current || rE(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rb.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
                }
                unmount() {
                    var t, e, n;
                    for (let i in null === (t = this.projection) || void 0 === t || t.unmount(), eL.update(this.notifyUpdate), eL.render(this.render), this.valueSubscriptions.forEach(t => t()), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[i].clear();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let n = W.has(t),
                        i = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && eD.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        i(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures(t, e, n, i, r, o) {
                    let s = [];
                    "production" !== ea && n && e && l.invariant(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                    for (let e = 0; e < rV; e++) {
                        let n = rT[e],
                            {
                                isEnabled: i,
                                Component: r
                            } = S[n];
                        i(t) && r && s.push(a.createElement(r, {
                            key: n,
                            ...t,
                            visualElement: this
                        }))
                    }
                    if (!this.projection && r) {
                        this.projection = new r(i, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: s,
                            dragConstraints: a,
                            layoutScroll: l
                        } = t;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: !!s || a && x(a),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: o,
                            layoutScroll: l
                        })
                    }
                    return s
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iq()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                setProps(t) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
                    for (let e = 0; e < rP.length; e++) {
                        let n = rP[e];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let i = t["on" + n];
                        i && (this.propEventSubscriptions[n] = this.on(n, i))
                    }
                    this.prevMotionValues = function(t, e, n) {
                        let {
                            willChange: i
                        } = e;
                        for (let r in e) {
                            let o = e[r],
                                s = n[r];
                            if (H(o)) t.addValue(r, o), np(i) && i.add(r);
                            else if (H(s)) t.addValue(r, eY(o, {
                                owner: t
                            })), np(i) && i.remove(r);
                            else if (s !== o) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(o)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, eY(void 0 !== e ? e : o))
                                }
                            }
                        }
                        for (let i in n) void 0 === e[i] && t.removeValue(i);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    var e;
                    return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    var t;
                    return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
                }
                getVariantContext(t = !1) {
                    var e, n;
                    if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
                    if (!this.isControllingVariants) {
                        let t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let i = {};
                    for (let t = 0; t < rM; t++) {
                        let e = rC[t],
                            n = this.props[e];
                        (w(n) || !1 === n) && (i[e] = n)
                    }
                    return i
                }
                addVariantChild(t) {
                    var e;
                    let n = this.getClosestVariantNode();
                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
                }
                addValue(t, e) {
                    this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
                }
                removeValue(t) {
                    var e;
                    this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let n = this.values.get(t);
                    return void 0 === n && void 0 !== e && (n = eY(e, {
                        owner: this
                    }), this.addValue(t, n)), n
                }
                readValue(t) {
                    return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: n
                    } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = tI(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || H(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eN), this.events[t].add(e)
                }
                notify(t, ...e) {
                    var n;
                    null === (n = this.events[t]) || void 0 === n || n.notify(...e)
                }
            }
            let rC = ["initial", ...iA],
                rM = rC.length;
            class rR extends rS {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    var n;
                    return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: n
                }) {
                    delete e[t], delete n[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...n
                }, {
                    transformValues: i
                }, r) {
                    let o = nd(n, t || {}, this);
                    if (i && (e && (e = i(e)), n && (n = i(n)), o && (o = i(o))), r) {
                        nc(this, n, o);
                        let t = rw(this, n, o, e);
                        e = t.transitionEnd, n = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...n
                    }
                }
            }
            class rk extends rR {
                readValueFromInstance(t, e) {
                    if (W.has(e)) {
                        let t = ne(e);
                        return t && t.default || 0
                    } {
                        let n = window.getComputedStyle(t),
                            i = (Z(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return rt(t, e)
                }
                build(t, e, n, i) {
                    tm(t, e, n, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t) {
                    return tB(t)
                }
                renderInstance(t, e, n, i) {
                    tD(t, e, n, i)
                }
            }
            class rD extends rR {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    var n;
                    return W.has(e) ? (null === (n = ne(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tL.has(e) ? e : tk(e), t.getAttribute(e))
                }
                measureInstanceViewportBox() {
                    return iq()
                }
                scrapeMotionValuesFromProps(t) {
                    return tj(t)
                }
                build(t, e, n, i) {
                    tS(t, e, n, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, n, i) {
                    tF(t, e, n, i)
                }
                mount(t) {
                    this.isSVGTag = tM(t.tagName), super.mount(t)
                }
            }
            let rL = (t, e) => U(t) ? new rD(e, {
                enableHardwareAcceleration: !1
            }) : new rk(e, {
                enableHardwareAcceleration: !0
            });

            function rF(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let rB = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!tu.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let n = rF(t, e.target.x),
                            i = rF(t, e.target.y);
                        return `${n}% ${i}%`
                    }
                },
                rj = "_$css",
                rI = {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: n
                    }) => {
                        let i = t,
                            r = t.includes("var("),
                            o = [];
                        r && (t = t.replace(rs, t => (o.push(t), rj)));
                        let s = e9.parse(t);
                        if (s.length > 5) return i;
                        let a = e9.createTransformer(t),
                            l = "number" != typeof s[0] ? 1 : 0,
                            u = n.x.scale * e.x,
                            h = n.y.scale * e.y;
                        s[0 + l] /= u, s[1 + l] /= h;
                        let c = nT(u, h, .5);
                        "number" == typeof s[2 + l] && (s[2 + l] /= c), "number" == typeof s[3 + l] && (s[3 + l] /= c);
                        let d = a(s);
                        if (r) {
                            let t = 0;
                            d = d.replace(rj, () => {
                                let e = o[t];
                                return t++, e
                            })
                        }
                        return d
                    }
                };
            class rO extends h.default.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n,
                        layoutId: i
                    } = this.props, {
                        projection: r
                    } = t;
                    $(rU), r && (e.group && e.group.add(r), n && n.register && i && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), R.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: n,
                        drag: i,
                        isPresent: r
                    } = this.props, o = n.projection;
                    return o && (o.isPresent = r, i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? o.promote() : o.relegate() || eD.postRender(() => {
                        var t;
                        (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: i
                    } = t;
                    i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    null == t || t()
                }
                render() {
                    return null
                }
            }
            let rU = {
                    borderRadius: { ...rB,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rB,
                    borderTopRightRadius: rB,
                    borderBottomLeftRadius: rB,
                    borderBottomRightRadius: rB,
                    boxShadow: rI
                },
                rN = {
                    measureLayout: function(t) {
                        let [e, n] = ex(), i = a.useContext(D);
                        return h.default.createElement(rO, { ...t,
                            layoutGroup: i,
                            switchLayoutGroup: a.useContext(F),
                            isPresent: e,
                            safeToRemove: n
                        })
                    }
                };

            function r$(t, e, n = {}) {
                let i = H(t) ? t : eY(t);
                return i.start(ig("", i, e, n)), {
                    stop: () => i.stop(),
                    isAnimating: () => i.isAnimating()
                }
            }
            let rz = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rW = rz.length,
                rY = t => "string" == typeof t ? parseFloat(t) : t,
                rH = t => "number" == typeof t || tu.test(t);

            function rX(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let rG = rZ(0, .5, nz),
                rq = rZ(.5, .95, nO);

            function rZ(t, e, n) {
                return i => i < t ? 0 : i > e ? 1 : n(nB(t, e, i))
            }

            function r_(t, e) {
                t.min = e.min, t.max = e.max
            }

            function rK(t, e) {
                r_(t.x, e.x), r_(t.y, e.y)
            }

            function rJ(t, e, n, i, r) {
                return t -= e, t = i + 1 / n * (t - i), void 0 !== r && (t = i + 1 / r * (t - i)), t
            }

            function rQ(t, e, [n, i, r], o, s) {
                ! function(t, e = 0, n = 1, i = .5, r, o = t, s = t) {
                    if (tl.test(e)) {
                        e = parseFloat(e);
                        let t = nT(s.min, s.max, e / 100);
                        e = t - s.min
                    }
                    if ("number" != typeof e) return;
                    let a = nT(o.min, o.max, i);
                    t === o && (a -= e), t.min = rJ(t.min, e, n, a, r), t.max = rJ(t.max, e, n, a, r)
                }(t, e[n], e[i], e[r], e.scale, o, s)
            }
            let r0 = ["x", "scaleX", "originX"],
                r1 = ["y", "scaleY", "originY"];

            function r5(t, e, n, i) {
                rQ(t.x, e, r0, null == n ? void 0 : n.x, null == i ? void 0 : i.x), rQ(t.y, e, r1, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
            }

            function r3(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function r2(t) {
                return r3(t.x) && r3(t.y)
            }

            function r9(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function r4(t) {
                return iF(t.x) / iF(t.y)
            }
            class r6 {
                constructor() {
                    this.members = []
                }
                add(t) {
                    eO(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (eU(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let n = this.members.findIndex(e => t === e);
                    if (0 === n) return !1;
                    for (let t = n; t >= 0; t--) {
                        let n = this.members[t];
                        if (!1 !== n.isPresent) {
                            e = n;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    var n;
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = t.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        var e, n, i, r, o;
                        null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (o = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (r = i.options).onExitComplete) || void 0 === o || o.call(r)
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function r7(t, e, n) {
                let i = "",
                    r = t.x.translate / e.x,
                    o = t.y.translate / e.y;
                if ((r || o) && (i = `translate3d(${r}px, ${o}px, 0) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = n;
                    t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), r && (i += `rotateY(${r}deg) `)
                }
                let s = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== s || 1 !== a) && (i += `scale(${s}, ${a})`), i || "none"
            }
            let r8 = (t, e) => t.depth - e.depth;
            class ot {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    eO(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    eU(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(r8), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let oe = ["", "X", "Y", "Z"],
                on = 0;

            function oi({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: n,
                checkIsScrollRoot: i,
                resetTransform: r
            }) {
                return class {
                    constructor(t, n = {}, i = null == e ? void 0 : e()) {
                        this.id = on++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(os), this.nodes.forEach(oc), this.nodes.forEach(od)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ot)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eN), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let n = this.eventHandlers.get(t);
                        null == n || n.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    registerPotentialNode(t, e) {
                        this.potentialNodes.set(t, e)
                    }
                    mount(e, n = !1) {
                        var i;
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: o,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (o || r) && (this.isLayoutDirty = !0), t) {
                            let n;
                            let i = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = it(i, 250), R.hasAnimatedSinceResize && (R.hasAnimatedSinceResize = !1, this.nodes.forEach(oh))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: n,
                            layout: i
                        }) => {
                            var r, o, a, l, u;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let h = null !== (o = null !== (r = this.options.transition) && void 0 !== r ? r : s.getDefaultTransition()) && void 0 !== o ? o : oy,
                                {
                                    onLayoutAnimationStart: c,
                                    onLayoutAnimationComplete: d
                                } = s.getProps(),
                                p = !this.targetLayout || !r9(this.targetLayout, i) || n,
                                f = !e && n;
                            if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                                let e = { ...ic(h, "layout"),
                                    onPlay: c,
                                    onComplete: d
                                };
                                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || 0 !== this.animationProgress || oh(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                            this.targetLayout = i
                        })
                    }
                    unmount() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, eL.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var t;
                        !this.isUpdateBlocked() && (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(op), this.animationId++)
                    }
                    willUpdate(t = !0) {
                        var e, n, i;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot")
                        }
                        let {
                            layoutId: r,
                            layout: o
                        } = this.options;
                        if (void 0 === r && !o) return;
                        let s = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ol);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ox), this.potentialNodes.clear()), this.nodes.forEach(ou), this.nodes.forEach(or), this.nodes.forEach(oo), this.clearAllSnapshots(), eF.update(), eF.preRender(), eF.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(oa), this.sharedNodes.forEach( of )
                    }
                    scheduleUpdateProjection() {
                        eD.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        eD.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        var t;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let e = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iq(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: i(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        var t;
                        if (!r) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !r2(this.projectionDelta),
                            i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                            o = null == i ? void 0 : i(this.latestValues, ""),
                            s = o !== this.prevTransformTemplateValue;
                        e && (n || iQ(this.latestValues) || s) && (r(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let n = this.measurePageBox(),
                            i = this.removeElementScroll(n);
                        return t && (i = this.removeTransform(i)), ow((e = i).x), ow(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: i,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return iq();
                        let e = t.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (i9(e.x, n.offset.x), i9(e.y, n.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = iq();
                        rK(e, t);
                        for (let n = 0; n < this.path.length; n++) {
                            let i = this.path[n],
                                {
                                    scroll: r,
                                    options: o
                                } = i;
                            if (i !== this.root && r && o.layoutScroll) {
                                if (r.isRoot) {
                                    rK(e, t);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && (i9(e.x, -n.offset.x), i9(e.y, -n.offset.y))
                                }
                                i9(e.x, r.offset.x), i9(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let n = iq();
                        rK(n, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            !e && i.options.layoutScroll && i.scroll && i !== i.root && i8(n, {
                                x: -i.scroll.offset.x,
                                y: -i.scroll.offset.y
                            }), iQ(i.latestValues) && i8(n, i.latestValues)
                        }
                        return iQ(this.latestValues) && i8(n, this.latestValues), n
                    }
                    removeTransform(t) {
                        var e;
                        let n = iq();
                        rK(n, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !iQ(i.latestValues)) continue;
                            iJ(i.latestValues) && i.updateSnapshot();
                            let r = iq(),
                                o = i.measurePageBox();
                            rK(r, o), r5(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, r)
                        }
                        return iQ(this.latestValues) && r5(n, this.latestValues), n
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var t, e, n, i;
                        let r = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                        let {
                            layout: o,
                            layoutId: s
                        } = this.options;
                        if (this.layout && (o || s)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout ? (this.relativeParent = t, this.relativeTarget = iq(), this.relativeTargetOrigin = iq(), iN(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), rK(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = iq(), this.targetWithTransforms = iq()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)) ? (e = this.target, n = this.relativeTarget, i = this.relativeParent.target, iO(e.x, n.x, i.x), iO(e.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rK(this.target, this.layout.layoutBox), i3(this.target, this.targetDelta)) : rK(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = iq(), this.relativeTargetOrigin = iq(), iN(this.relativeTargetOrigin, this.target, t.target), rK(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || iJ(this.parent.latestValues) || i0(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var t;
                        let {
                            isProjectionDirty: e,
                            isTransformDirty: n
                        } = this;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        let i = this.getLead(),
                            r = !!this.resumingFrom || this !== i,
                            o = !0;
                        if (e && (o = !1), r && n && (o = !1), o) return;
                        let {
                            layout: s,
                            layoutId: a
                        } = this.options;
                        if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || a)) return;
                        rK(this.layoutCorrected, this.layout.layoutBox),
                            function(t, e, n, i = !1) {
                                var r, o;
                                let s, a;
                                let l = n.length;
                                if (l) {
                                    e.x = e.y = 1;
                                    for (let u = 0; u < l; u++) a = (s = n[u]).projectionDelta, (null === (o = null === (r = s.instance) || void 0 === r ? void 0 : r.style) || void 0 === o ? void 0 : o.display) !== "contents" && (i && s.options.layoutScroll && s.scroll && s !== s.root && i8(t, {
                                        x: -s.scroll.offset.x,
                                        y: -s.scroll.offset.y
                                    }), a && (e.x *= a.x.scale, e.y *= a.y.scale, i3(t, a)), i && iQ(s.latestValues) && i8(t, s.latestValues));
                                    e.x = i2(e.x), e.y = i2(e.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, r);
                        let {
                            target: l
                        } = i;
                        if (!l) return;
                        this.projectionDelta || (this.projectionDelta = iX(), this.projectionDeltaWithTransform = iX());
                        let u = this.treeScale.x,
                            h = this.treeScale.y,
                            c = this.projectionTransform;
                        iI(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = r7(this.projectionDelta, this.treeScale), (this.projectionTransform !== c || this.treeScale.x !== u || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e, n, i;
                        null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        var n, i;
                        let r = this.snapshot,
                            o = (null == r ? void 0 : r.latestValues) || {},
                            s = { ...this.latestValues
                            },
                            a = iX();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        let l = iq(),
                            u = (null == r ? void 0 : r.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                            h = 1 >= ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0),
                            c = !!(u && !h && !0 === this.options.crossfade && !this.path.some(og));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var n, i, r;
                            let d = e / 1e3;
                            om(a.x, t.x, d), om(a.y, t.y, d), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (iN(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, r = this.relativeTargetOrigin, ov(i.x, r.x, l.x, d), ov(i.y, r.y, l.y, d)), u && (this.animationValues = s, function(t, e, n, i, r, o) {
                                r ? (t.opacity = nT(0, void 0 !== n.opacity ? n.opacity : 1, rG(i)), t.opacityExit = nT(void 0 !== e.opacity ? e.opacity : 1, 0, rq(i))) : o && (t.opacity = nT(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                                for (let r = 0; r < rW; r++) {
                                    let o = `border${rz[r]}Radius`,
                                        s = rX(e, o),
                                        a = rX(n, o);
                                    if (void 0 === s && void 0 === a) continue;
                                    s || (s = 0), a || (a = 0);
                                    let l = 0 === s || 0 === a || rH(s) === rH(a);
                                    l ? (t[o] = Math.max(nT(rY(s), rY(a), i), 0), (tl.test(a) || tl.test(s)) && (t[o] += "%")) : t[o] = a
                                }(e.rotate || n.rotate) && (t.rotate = nT(e.rotate || 0, n.rotate || 0, i))
                            }(s, o, this.latestValues, d, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = d
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(t) {
                        var e, n;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (eL.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = eD.update(() => {
                            R.hasAnimatedSinceResize = !0, this.currentAnimation = r$(0, 1e3, { ...t,
                                onUpdate: e => {
                                    var n;
                                    this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: () => {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: n,
                                layout: i,
                                latestValues: r
                            } = t;
                        if (e && n && i) {
                            if (this !== t && this.layout && i && ob(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                                n = this.target || iq();
                                let e = iF(this.layout.layoutBox.x);
                                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                                let i = iF(this.layout.layoutBox.y);
                                n.y.min = t.target.y.min, n.y.max = n.y.min + i
                            }
                            rK(e, n), i8(e, r), iI(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        var n, i, r;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new r6);
                        let o = this.sharedNodes.get(t);
                        o.add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (r = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === r ? void 0 : r.call(i, e)
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: n
                    } = {}) {
                        let i = this.getStack();
                        i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: n
                            } = t;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
                        let i = {};
                        for (let e = 0; e < oe.length; e++) {
                            let r = "rotate" + oe[e];
                            n[r] && (i[r] = n[r], t.setStaticValue(r, 0))
                        }
                        for (let e in null == t || t.render(), i) t.setStaticValue(e, i[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, n, i;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = t$(t.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = t$(t.pointerEvents) || ""), this.hasProjected && !iQ(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = r7(this.projectionDeltaWithTransform, this.treeScale, a), o && (r.transform = o(a, r.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let t in r.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, N) {
                            if (void 0 === a[t]) continue;
                            let {
                                correct: e,
                                applyTo: n
                            } = N[t], i = e(a[t], s);
                            if (n) {
                                let t = n.length;
                                for (let e = 0; e < t; e++) r[n[e]] = i
                            } else r[t] = i
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? t$(t.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ol), this.root.sharedNodes.clear()
                    }
                }
            }

            function or(t) {
                t.updateLayout()
            }

            function oo(t) {
                var e, n, i;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: i
                    } = t.options, o = r.source !== t.layout.source;
                    "size" === i ? iZ(t => {
                        let n = o ? r.measuredBox[t] : r.layoutBox[t],
                            i = iF(n);
                        n.min = e[t].min, n.max = n.min + i
                    }) : ob(i, r.layoutBox, e) && iZ(t => {
                        let n = o ? r.measuredBox[t] : r.layoutBox[t],
                            i = iF(e[t]);
                        n.max = n.min + i
                    });
                    let s = iX();
                    iI(s, e, r.layoutBox);
                    let a = iX();
                    o ? iI(a, t.applyTransform(n, !0), r.measuredBox) : iI(a, e, r.layoutBox);
                    let l = !r2(s),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: t,
                                layout: i
                            } = n;
                            if (t && i) {
                                let n = iq();
                                iN(n, r.layoutBox, t.layoutBox);
                                let o = iq();
                                iN(o, e, i.layoutBox), r9(n, o) || (u = !0)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: r,
                        delta: a,
                        layoutDelta: s,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
                t.options.transition = void 0
            }

            function os(t) {
                t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty))
            }

            function oa(t) {
                t.clearSnapshot()
            }

            function ol(t) {
                t.clearMeasurements()
            }

            function ou(t) {
                let {
                    visualElement: e
                } = t.options;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function oh(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function oc(t) {
                t.resolveTargetDelta()
            }

            function od(t) {
                t.calcProjection()
            }

            function op(t) {
                t.resetRotation()
            }

            function of (t) {
                t.removeLeadSnapshot()
            }

            function om(t, e, n) {
                t.translate = nT(e.translate, 0, n), t.scale = nT(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function ov(t, e, n, i) {
                t.min = nT(e.min, n.min, i), t.max = nT(e.max, n.max, i)
            }

            function og(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let oy = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function ox(t, e) {
                let n = t.root;
                for (let e = t.path.length - 1; e >= 0; e--)
                    if (t.path[e].instance) {
                        n = t.path[e];
                        break
                    }
                let i = n && n !== t.root ? n.instance : document,
                    r = i.querySelector(`[data-projection-id="${e}"]`);
                r && t.mount(r, !0)
            }

            function ow(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function ob(t, e, n) {
                return "position" === t || "preserve-aspect" === t && !iB(r4(e), r4(n), .2)
            }
            let oA = oi({
                    attachResizeListener: (t, e) => tX(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                oE = {
                    current: void 0
                },
                oT = oi({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!oE.current) {
                            let t = new oA(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), oE.current = t
                        }
                        return oE.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                oV = { ...iP,
                    ...ey,
                    ...rr,
                    ...rN
                },
                oP = I((t, e) => tH(t, e, oV, rL, oT)),
                oS = I(tH);

            function oC() {
                let t = a.useRef(!1);
                return g(() => (t.current = !0, () => {
                    t.current = !1
                }), []), t
            }

            function oM() {
                let t = oC(),
                    [e, n] = a.useState(0),
                    i = a.useCallback(() => {
                        t.current && n(e + 1)
                    }, [e]),
                    r = a.useCallback(() => eD.postRender(i), [i]);
                return [r, e]
            }
            class oR extends c.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function ok({
                children: t,
                isPresent: e
            }) {
                let n = a.useId(),
                    i = a.useRef(null),
                    r = a.useRef({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return a.useInsertionEffect(() => {
                    let {
                        width: t,
                        height: o,
                        top: s,
                        left: a
                    } = r.current;
                    if (e || !i.current || !t || !o) return;
                    i.current.dataset.motionPopId = n;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [e]), c.createElement(oR, {
                    isPresent: e,
                    childRef: i,
                    sizeRef: r
                }, c.cloneElement(t, {
                    ref: i
                }))
            }
            let oD = ({
                children: t,
                initial: e,
                isPresent: n,
                onExitComplete: i,
                custom: r,
                presenceAffectsLayout: o,
                mode: s
            }) => {
                let l = M(oL),
                    u = a.useId(),
                    h = a.useMemo(() => ({
                        id: u,
                        initial: e,
                        isPresent: n,
                        custom: r,
                        onExitComplete: t => {
                            for (let e of (l.set(t, !0), l.values()))
                                if (!e) return;
                            i && i()
                        },
                        register: t => (l.set(t, !1), () => l.delete(t))
                    }), o ? void 0 : [n]);
                return a.useMemo(() => {
                    l.forEach((t, e) => l.set(e, !1))
                }, [n]), c.useEffect(() => {
                    n || l.size || !i || i()
                }, [n]), "popLayout" === s && (t = c.createElement(ok, {
                    isPresent: n
                }, t)), c.createElement(m.Provider, {
                    value: h
                }, t)
            };

            function oL() {
                return new Map
            }
            let oF = t => t.key || "",
                oB = a.createContext(null),
                oj = t => !t.isLayoutDirty && t.willUpdate(!1),
                oI = t => !0 === t,
                oO = t => oI(!0 === t) || "id" === t,
                oU = ({
                    children: t,
                    id: e,
                    inheritId: n,
                    inherit: i = !0
                }) => {
                    void 0 !== n && (i = n);
                    let r = a.useContext(D),
                        o = a.useContext(oB),
                        [s, l] = oM(),
                        u = a.useRef(null),
                        h = r.id || o;
                    null === u.current && (oO(i) && h && (e = e ? h + "-" + e : h), u.current = {
                        id: e,
                        group: oI(i) && r.group || function() {
                            let t = new Set,
                                e = new WeakMap,
                                n = () => t.forEach(oj);
                            return {
                                add: i => {
                                    t.add(i), e.set(i, i.addEventListener("willUpdate", n))
                                },
                                remove: i => {
                                    var r;
                                    t.delete(i), null === (r = e.get(i)) || void 0 === r || r(), e.delete(i), n()
                                },
                                dirty: n
                            }
                        }()
                    });
                    let d = a.useMemo(() => ({ ...u.current,
                        forceRender: s
                    }), [l]);
                    return c.createElement(D.Provider, {
                        value: d
                    }, t)
                },
                oN = 0;

            function o$(t) {
                return "function" == typeof t
            }
            let oz = a.createContext(null),
                oW = a.forwardRef(function({
                    children: t,
                    as: e = "ul",
                    axis: n = "y",
                    onReorder: i,
                    values: r,
                    ...o
                }, s) {
                    let u = M(() => oP(e)),
                        h = [],
                        d = a.useRef(!1);
                    return l.invariant(!!r, "Reorder.Group must be provided a values prop"), a.useEffect(() => {
                        d.current = !1
                    }), c.createElement(u, { ...o,
                        ref: s
                    }, c.createElement(oz.Provider, {
                        value: {
                            axis: n,
                            registerItem: (t, e) => {
                                e && -1 === h.findIndex(e => t === e.value) && (h.push({
                                    value: t,
                                    layout: e[n]
                                }), h.sort(oH))
                            },
                            updateOrder: (t, e, n) => {
                                if (d.current) return;
                                let o = function(t, e, n, i) {
                                    if (!i) return t;
                                    let r = t.findIndex(t => t.value === e);
                                    if (-1 === r) return t;
                                    let o = i > 0 ? 1 : -1,
                                        s = t[r + o];
                                    if (!s) return t;
                                    let a = t[r],
                                        l = s.layout,
                                        u = nT(l.min, l.max, .5);
                                    return 1 === o && a.layout.max + n > u || -1 === o && a.layout.min + n < u ? function([...t], e, n) {
                                        let i = e < 0 ? t.length + e : e;
                                        if (i >= 0 && i < t.length) {
                                            let i = n < 0 ? t.length + n : n,
                                                [r] = t.splice(e, 1);
                                            t.splice(i, 0, r)
                                        }
                                        return t
                                    }(t, r, r + o) : t
                                }(h, t, e, n);
                                h !== o && (d.current = !0, i(o.map(oY).filter(t => -1 !== r.indexOf(t))))
                            }
                        }
                    }, t))
                });

            function oY(t) {
                return t.value
            }

            function oH(t, e) {
                return t.layout.min - e.layout.min
            }

            function oX(t) {
                let e = M(() => eY(t)),
                    {
                        isStatic: n
                    } = a.useContext(d);
                if (n) {
                    let [, n] = a.useState(t);
                    a.useEffect(() => e.on("change", n), [])
                }
                return e
            }
            let oG = t => "object" == typeof t && t.mix,
                oq = t => oG(t) ? t.mix : void 0;

            function oZ(...t) {
                let e = !Array.isArray(t[0]),
                    n = e ? 0 : -1,
                    i = t[0 + n],
                    r = t[1 + n],
                    o = t[2 + n],
                    s = t[3 + n],
                    a = nI(r, o, {
                        mixer: oq(o[0]),
                        ...s
                    });
                return e ? a(i) : a
            }

            function o_(t, e) {
                var n, i;
                let r = oX(e()),
                    o = () => r.set(e());
                return o(), n = () => eD.update(o, !1, !0), i = () => eL.update(o), g(() => {
                    let e = t.map(t => t.on("change", n));
                    return () => {
                        e.forEach(t => t()), i()
                    }
                }), r
            }

            function oK(t, e, n, i) {
                let r = "function" == typeof e ? e : oZ(e, n, i);
                return Array.isArray(t) ? oJ(t, r) : oJ([t], ([t]) => r(t))
            }

            function oJ(t, e) {
                let n = M(() => []);
                return o_(t, () => {
                    n.length = 0;
                    let i = t.length;
                    for (let e = 0; e < i; e++) n[e] = t[e].get();
                    return e(n)
                })
            }

            function oQ(t, e = 0) {
                return H(t) ? t : oX(e)
            }
            let o0 = a.forwardRef(function({
                    children: t,
                    style: e = {},
                    value: n,
                    as: i = "li",
                    onDrag: r,
                    layout: o = !0,
                    ...s
                }, u) {
                    let h = M(() => oP(i)),
                        d = a.useContext(oz),
                        p = {
                            x: oQ(e.x),
                            y: oQ(e.y)
                        },
                        f = oK([p.x, p.y], ([t, e]) => t || e ? 1 : "unset"),
                        m = a.useRef(null);
                    l.invariant(!!d, "Reorder.Item must be a child of Reorder.Group");
                    let {
                        axis: v,
                        registerItem: g,
                        updateOrder: y
                    } = d;
                    return a.useEffect(() => {
                        g(n, m.current)
                    }, [d]), c.createElement(h, {
                        drag: v,
                        ...s,
                        dragSnapToOrigin: !0,
                        style: { ...e,
                            x: p.x,
                            y: p.y,
                            zIndex: f
                        },
                        layout: o,
                        onDrag: (t, e) => {
                            let {
                                velocity: i
                            } = e;
                            i[v] && y(n, p[v].get(), i[v]), r && r(t, e)
                        },
                        onLayoutMeasure: t => {
                            m.current = t
                        },
                        ref: u
                    }, t)
                }),
                o1 = {
                    renderer: rL,
                    ...iP,
                    ...ey
                },
                o5 = { ...o1,
                    ...rr,
                    ...rN,
                    projectionNodeConstructor: oT
                },
                o3 = () => ({
                    scrollX: eY(0),
                    scrollY: eY(0),
                    scrollXProgress: eY(0),
                    scrollYProgress: eY(0)
                });

            function o2({
                container: t,
                target: e,
                layoutEffect: n = !0,
                ...i
            } = {}) {
                let r = M(o3),
                    o = n ? g : a.useEffect;
                return o(() => u.scroll(({
                    x: t,
                    y: e
                }) => {
                    r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(e.current), r.scrollYProgress.set(e.progress)
                }, { ...i,
                    container: (null == t ? void 0 : t.current) || void 0,
                    target: (null == e ? void 0 : e.current) || void 0
                }), []), r
            }

            function o9(t) {
                let e = a.useRef(0),
                    {
                        isStatic: n
                    } = a.useContext(d);
                a.useEffect(() => {
                    if (n) return;
                    let i = ({
                        timestamp: n,
                        delta: i
                    }) => {
                        e.current || (e.current = n), t(n - e.current, i)
                    };
                    return eD.update(i, !0), () => eL.update(i)
                }, [t])
            }
            class o4 extends eW {
                constructor() {
                    super(...arguments), this.members = [], this.transforms = new Set
                }
                add(t) {
                    let e;
                    W.has(t) ? (this.transforms.add(t), e = "transform") : t.startsWith("origin") || Z(t) || "willChange" === t || (e = tk(t)), e && (eO(this.members, e), this.update())
                }
                remove(t) {
                    W.has(t) ? (this.transforms.delete(t), this.transforms.size || eU(this.members, "transform")) : eU(this.members, tk(t)), this.update()
                }
                update() {
                    this.set(this.members.length ? this.members.join(", ") : "auto")
                }
            }

            function o6() {
                rA.current || rE();
                let [t] = a.useState(rb.current);
                return t
            }

            function o7() {
                let t = !1,
                    e = [],
                    n = new Set,
                    i = {
                        subscribe: t => (n.add(t), () => void n.delete(t)),
                        start(i, r) {
                            if (!t) return new Promise(t => {
                                e.push({
                                    animation: [i, r],
                                    resolve: t
                                })
                            }); {
                                let t = [];
                                return n.forEach(e => {
                                    t.push(iy(e, i, {
                                        transitionOverride: r
                                    }))
                                }), Promise.all(t)
                            }
                        },
                        set: e => (l.invariant(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), n.forEach(t => {
                            Array.isArray(e) ? nh(t, e) : "string" == typeof e ? nh(t, [e]) : nu(t, e)
                        })),
                        stop() {
                            n.forEach(t => {
                                ! function(t) {
                                    t.values.forEach(t => t.stop())
                                }(t)
                            })
                        },
                        mount: () => (t = !0, e.forEach(({
                            animation: t,
                            resolve: e
                        }) => {
                            i.start(...t).then(e)
                        }), () => {
                            t = !1, i.stop()
                        })
                    };
                return i
            }

            function o8() {
                let t = M(o7);
                return a.useEffect(t.mount, []), t
            }
            let st = (t, e, n) => {
                let i = e - t;
                return ((n - t) % i + i) % i + t
            };
            class se {
                constructor() {
                    this.componentControls = new Set
                }
                subscribe(t) {
                    return this.componentControls.add(t), () => this.componentControls.delete(t)
                }
                start(t, e) {
                    this.componentControls.forEach(n => {
                        n.start(t.nativeEvent || t, e)
                    })
                }
            }
            let sn = () => new se;

            function si(t) {
                return null !== t && "object" == typeof t && B in t
            }

            function sr(t) {
                oE.current && (oE.current.isUpdating = !1, oE.current.blockUpdate(), t && t())
            }
            let so = () => ({});
            class ss extends rS {
                build() {}
                measureInstanceViewportBox() {
                    return iq()
                }
                resetTransform() {}
                restoreTransform() {}
                removeValueFromRenderState() {}
                renderInstance() {}
                scrapeMotionValuesFromProps() {
                    return so()
                }
                getBaseTargetFromProps() {}
                readValueFromInstance(t, e, n) {
                    return n.initialState[e] || 0
                }
                sortInstanceNodePosition() {
                    return 0
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...n
                }) {
                    let i = nd(n, t || {}, this);
                    return nc(this, n, i), {
                        transition: t,
                        transitionEnd: e,
                        ...n
                    }
                }
            }
            let sa = tz({
                    scrapeMotionValuesFromProps: so,
                    createRenderState: so
                }),
                sl = t => t > .001 ? 1 / t : 1e5,
                su = !1;
            e.AnimatePresence = ({
                children: t,
                custom: e,
                initial: n = !0,
                onExitComplete: i,
                exitBeforeEnter: r,
                presenceAffectsLayout: o = !0,
                mode: s = "sync"
            }) => {
                r && (s = "wait", eu(!1, "Replace exitBeforeEnter with mode='wait'"));
                let [l] = oM(), u = a.useContext(D).forceRender;
                u && (l = u);
                let h = oC(),
                    d = function(t) {
                        let e = [];
                        return a.Children.forEach(t, t => {
                            a.isValidElement(t) && e.push(t)
                        }), e
                    }(t),
                    p = d,
                    f = new Set,
                    m = a.useRef(p),
                    v = a.useRef(new Map).current,
                    y = a.useRef(!0);
                if (g(() => {
                        y.current = !1,
                            function(t, e) {
                                t.forEach(t => {
                                    let n = oF(t);
                                    e.set(n, t)
                                })
                            }(d, v), m.current = p
                    }), er(() => {
                        y.current = !0, v.clear(), f.clear()
                    }), y.current) return c.createElement(c.Fragment, null, p.map(t => c.createElement(oD, {
                    key: oF(t),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: o,
                    mode: s
                }, t)));
                p = [...p];
                let x = m.current.map(oF),
                    w = d.map(oF),
                    b = x.length;
                for (let t = 0; t < b; t++) {
                    let e = x[t]; - 1 === w.indexOf(e) && f.add(e)
                }
                return "wait" === s && f.size && (p = []), f.forEach(t => {
                    if (-1 !== w.indexOf(t)) return;
                    let n = v.get(t);
                    if (!n) return;
                    let r = x.indexOf(t);
                    p.splice(r, 0, c.createElement(oD, {
                        key: oF(n),
                        isPresent: !1,
                        onExitComplete: () => {
                            v.delete(t), f.delete(t);
                            let e = m.current.findIndex(e => e.key === t);
                            if (m.current.splice(e, 1), !f.size) {
                                if (m.current = d, !1 === h.current) return;
                                l(), i && i()
                            }
                        },
                        custom: e,
                        presenceAffectsLayout: o,
                        mode: s
                    }, n))
                }), p = p.map(t => {
                    let e = t.key;
                    return f.has(e) ? t : c.createElement(oD, {
                        key: oF(t),
                        isPresent: !0,
                        presenceAffectsLayout: o,
                        mode: s
                    }, t)
                }), "production" !== ea && "wait" === s && p.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), c.createElement(c.Fragment, null, f.size ? p : p.map(t => a.cloneElement(t)))
            }, e.AnimateSharedLayout = ({
                children: t
            }) => (c.useEffect(() => {
                l.warning(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
            }, []), c.createElement(oU, {
                id: M(() => `asl-${oN++}`)
            }, t)), e.DeprecatedLayoutGroupContext = oB, e.DragControls = se, e.FlatTree = ot, e.LayoutGroup = oU, e.LayoutGroupContext = D, e.LazyMotion = function({
                children: t,
                features: e,
                strict: n = !1
            }) {
                let [, i] = a.useState(!o$(e)), r = a.useRef(void 0);
                if (!o$(e)) {
                    let {
                        renderer: t,
                        ...n
                    } = e;
                    r.current = t, C(n)
                }
                return a.useEffect(() => {
                    o$(e) && e().then(({
                        renderer: t,
                        ...e
                    }) => {
                        C(e), r.current = t, i(!0)
                    })
                }, []), c.createElement(y.Provider, {
                    value: {
                        renderer: r.current,
                        strict: n
                    }
                }, t)
            }, e.MotionConfig = function({
                children: t,
                isValidProp: e,
                ...n
            }) {
                e && tA(e), (n = { ...a.useContext(d),
                    ...n
                }).isStatic = M(() => n.isStatic);
                let i = a.useMemo(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
                return c.createElement(d.Provider, {
                    value: i
                }, t)
            }, e.MotionConfigContext = d, e.MotionContext = p, e.MotionValue = eW, e.PresenceContext = m, e.Reorder = {
                Group: oW,
                Item: o0
            }, e.SwitchLayoutGroupContext = F, e.VisualElement = rS, e.addPointerEvent = t9, e.addScaleCorrector = $, e.animate = r$, e.animateVisualElement = iy, e.animationControls = o7, e.animations = iP, e.buildTransform = q, e.calcLength = iF, e.checkTargetForNewValues = nc, e.clamp = K, e.createBox = iq, e.createDomMotionComponent = function(t) {
                return j(tH(t, {
                    forwardMotionProps: !1
                }, oV, rL, oT))
            }, e.createMotionComponent = j, e.delay = it, e.distance = iS, e.distance2D = iC, e.domAnimation = o1, e.domMax = o5, e.filterProps = tE, e.isBrowser = v, e.isDragActive = ee, e.isMotionComponent = si, e.isMotionValue = H, e.isValidMotionProp = tw, e.m = oS, e.makeUseVisualState = tz, e.mix = nT, e.motion = oP, e.motionValue = eY, e.optimizedAppearDataAttribute = nv, e.pipe = es, e.resolveMotionValue = t$, e.spring = n1, e.startOptimizedAppearAnimation = function(t, e, n, i) {
                window.MotionAppearAnimations || (window.MotionAppearAnimations = new Map);
                let r = t.dataset[nm],
                    o = n8(t, e, n, i);
                return r && o && window.MotionAppearAnimations.set(nf(r, e), o), o
            }, e.transform = oZ, e.unwrapMotionComponent = function(t) {
                if (si(t)) return t[B]
            }, e.useAnimation = o8, e.useAnimationControls = o8, e.useAnimationFrame = o9, e.useCycle = function(...t) {
                let e = a.useRef(0),
                    [n, i] = a.useState(t[e.current]),
                    r = a.useCallback(n => {
                        e.current = "number" != typeof n ? st(0, t.length, e.current + 1) : n, i(t[e.current])
                    }, [t.length, ...t]);
                return [n, r]
            }, e.useDeprecatedAnimatedState = function(t) {
                let [e, n] = a.useState(t), i = sa({}, !1), r = M(() => new ss({
                    props: {},
                    visualState: i
                }, {
                    initialState: t
                }));
                a.useEffect(() => (r.mount({}), () => r.unmount()), [r]), a.useEffect(() => {
                    r.setProps({
                        onUpdate: t => {
                            n({ ...t
                            })
                        }
                    })
                }, [n, r]);
                let o = M(() => t => iy(r, t));
                return [e, o]
            }, e.useDeprecatedInvertedScale = function(t) {
                let e = oX(1),
                    n = oX(1),
                    i = f();
                l.invariant(!!(t || i), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), l.warning(su, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), su = !0, t ? (e = t.scaleX || e, n = t.scaleY || n) : i && (e = i.getValue("scaleX", 1), n = i.getValue("scaleY", 1));
                let r = oK(e, sl),
                    o = oK(n, sl);
                return {
                    scaleX: r,
                    scaleY: o
                }
            }, e.useDomEvent = tG, e.useDragControls = function() {
                return M(sn)
            }, e.useElementScroll = function(t) {
                return eu(!1, "useElementScroll is deprecated. Convert to useScroll({ container: ref })."), o2({
                    container: t
                })
            }, e.useForceUpdate = oM, e.useInView = function(t, {
                root: e,
                margin: n,
                amount: i,
                once: r = !1
            } = {}) {
                let [o, s] = a.useState(!1);
                return a.useEffect(() => {
                    if (!t.current || r && o) return;
                    let a = {
                        root: e && e.current || void 0,
                        margin: n,
                        amount: "some" === i ? "any" : i
                    };
                    return u.inView(t.current, () => (s(!0), r ? void 0 : () => s(!1)), a)
                }, [e, t, n, r]), o
            }, e.useInstantLayoutTransition = function() {
                return sr
            }, e.useInstantTransition = function() {
                let [t, e] = oM();
                return a.useEffect(() => {
                    eD.postRender(() => eD.postRender(() => ny.current = !1))
                }, [e]), e => {
                    sr(() => {
                        ny.current = !0, t(), e()
                    })
                }
            }, e.useIsPresent = function() {
                var t;
                return null === (t = a.useContext(m)) || t.isPresent
            }, e.useIsomorphicLayoutEffect = g, e.useMotionTemplate = function(t, ...e) {
                let n = t.length;
                return o_(e, function() {
                    let i = "";
                    for (let r = 0; r < n; r++) {
                        i += t[r];
                        let n = e[r];
                        n && (i += e[r].get())
                    }
                    return i
                })
            }, e.useMotionValue = oX, e.useMotionValueEvent = function(t, e, n) {
                g(() => t.on(e, n), [t, e, n])
            }, e.usePresence = ex, e.useReducedMotion = o6, e.useReducedMotionConfig = function() {
                let t = o6(),
                    {
                        reducedMotion: e
                    } = a.useContext(d);
                return "never" !== e && ("always" === e || t)
            }, e.useResetProjection = function() {
                let t = c.useCallback(() => {
                    let t = oE.current;
                    t && t.resetTree()
                }, []);
                return t
            }, e.useScroll = o2, e.useSpring = function(t, e = {}) {
                var n, i;
                let {
                    isStatic: r
                } = a.useContext(d), o = a.useRef(null), s = oX(H(t) ? t.get() : t);
                return a.useMemo(() => s.attach((t, n) => r ? n(t) : (o.current && o.current.stop(), o.current = n4({
                    keyframes: [s.get(), t],
                    velocity: s.getVelocity(),
                    type: "spring",
                    ...e,
                    onUpdate: n
                }), s.get())), [JSON.stringify(e)]), g(() => {
                    if (H(n)) return i(n.get()), n.on("change", i)
                }, [n = t, i = t => s.set(parseFloat(t))]), s
            }, e.useTime = function() {
                let t = oX(0);
                return o9(e => t.set(e)), t
            }, e.useTransform = oK, e.useUnmountEffect = er, e.useVelocity = function(t) {
                let e = oX(t.getVelocity());
                return a.useEffect(() => t.on("velocityChange", t => {
                    e.set(t)
                }), [t]), e
            }, e.useViewportScroll = function() {
                return eu(!1, "useViewportScroll is deprecated. Convert to useScroll()."), o2()
            }, e.useVisualElementContext = f, e.useWillChange = function() {
                return M(() => new o4("auto"))
            }, e.wrap = st, e.wrapHandler = tJ
        }
    }
]);
//# sourceMappingURL=e13d4e3c-1a621d31351d2409.js.map