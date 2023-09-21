"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2397], {
        22397: function(n, e, t) {
            t.r(e), t.d(e, {
                Tiktoken: function() {
                    return r.Tiktoken
                },
                __wbg_parse_3ac95b51fc312db8: function() {
                    return r.__wbg_parse_3ac95b51fc312db8
                },
                __wbg_set_wasm: function() {
                    return r.__wbg_set_wasm
                },
                __wbg_stringify_029a979dfb73aa17: function() {
                    return r.__wbg_stringify_029a979dfb73aa17
                },
                __wbindgen_error_new: function() {
                    return r.__wbindgen_error_new
                },
                __wbindgen_is_undefined: function() {
                    return r.__wbindgen_is_undefined
                },
                __wbindgen_object_drop_ref: function() {
                    return r.__wbindgen_object_drop_ref
                },
                __wbindgen_string_get: function() {
                    return r.__wbindgen_string_get
                },
                __wbindgen_throw: function() {
                    return r.__wbindgen_throw
                },
                encoding_for_model: function() {
                    return r.encoding_for_model
                },
                get_encoding: function() {
                    return r.get_encoding
                },
                init: function() {
                    return i
                }
            });
            var r = t(31367);
            let _ = !1;
            async function i(n) {
                if (_) return r;
                let e = await n({
                        "./tiktoken_bg.js": r
                    }),
                    t = "instance" in e && e.instance instanceof WebAssembly.Instance ? e.instance : e instanceof WebAssembly.Instance ? e : null;
                if (null == t) throw Error("Missing instance");
                return r.__wbg_set_wasm(t.exports), _ = !0, r
            }
        },
        31367: function(n, e, t) {
            let r;

            function _(n) {
                r = n
            }
            t.r(e), t.d(e, {
                Tiktoken: function() {
                    return S
                },
                __wbg_parse_3ac95b51fc312db8: function() {
                    return N
                },
                __wbg_set_wasm: function() {
                    return _
                },
                __wbg_stringify_029a979dfb73aa17: function() {
                    return T
                },
                __wbindgen_error_new: function() {
                    return I
                },
                __wbindgen_is_undefined: function() {
                    return z
                },
                __wbindgen_object_drop_ref: function() {
                    return W
                },
                __wbindgen_string_get: function() {
                    return j
                },
                __wbindgen_throw: function() {
                    return O
                },
                encoding_for_model: function() {
                    return q
                },
                get_encoding: function() {
                    return v
                }
            }), n = t.hmd(n);
            let i = Array(128).fill(void 0);
            i.push(void 0, null, !0, !1);
            let o = i.length;

            function d(n) {
                let e = i[n];
                return n < 132 || (i[n] = o, o = n), e
            }
            let u = 0,
                a = null;

            function l() {
                return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a
            }
            let b = "undefined" == typeof TextEncoder ? (0, n.require)("util").TextEncoder : TextEncoder,
                c = new b("utf-8"),
                f = "function" == typeof c.encodeInto ? function(n, e) {
                    return c.encodeInto(n, e)
                } : function(n, e) {
                    let t = c.encode(n);
                    return e.set(t), {
                        read: n.length,
                        written: t.length
                    }
                };

            function s(n, e, t) {
                if (void 0 === t) {
                    let t = c.encode(n),
                        r = e(t.length);
                    return l().subarray(r, r + t.length).set(t), u = t.length, r
                }
                let r = n.length,
                    _ = e(r),
                    i = l(),
                    o = 0;
                for (; o < r; o++) {
                    let e = n.charCodeAt(o);
                    if (e > 127) break;
                    i[_ + o] = e
                }
                if (o !== r) {
                    0 !== o && (n = n.slice(o)), _ = t(_, r, r = o + 3 * n.length);
                    let e = l().subarray(_ + o, _ + r),
                        i = f(n, e);
                    o += i.written
                }
                return u = o, _
            }
            let g = null;

            function w() {
                return (null === g || 0 === g.byteLength) && (g = new Int32Array(r.memory.buffer)), g
            }
            let p = "undefined" == typeof TextDecoder ? (0, n.require)("util").TextDecoder : TextDecoder,
                k = new p("utf-8", {
                    ignoreBOM: !0,
                    fatal: !0
                });

            function y(n, e) {
                return k.decode(l().subarray(n, n + e))
            }

            function h(n) {
                o === i.length && i.push(i.length + 1);
                let e = o;
                return o = i[e], i[e] = n, e
            }
            k.decode();
            let x = null;

            function E() {
                return (null === x || 0 === x.byteLength) && (x = new Uint32Array(r.memory.buffer)), x
            }

            function m(n, e) {
                return E().subarray(n / 4, n / 4 + e)
            }

            function A(n, e) {
                return l().subarray(n / 1, n / 1 + e)
            }

            function v(n, e) {
                if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                try {
                    let i = r.__wbindgen_add_to_stack_pointer(-16),
                        o = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                        a = u;
                    r.get_encoding(i, o, a, h(e));
                    var t = w()[i / 4 + 0],
                        _ = w()[i / 4 + 1];
                    if (w()[i / 4 + 2]) throw d(_);
                    return S.__wrap(t)
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }

            function q(n, e) {
                if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                try {
                    let i = r.__wbindgen_add_to_stack_pointer(-16),
                        o = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                        a = u;
                    r.encoding_for_model(i, o, a, h(e));
                    var t = w()[i / 4 + 0],
                        _ = w()[i / 4 + 1];
                    if (w()[i / 4 + 2]) throw d(_);
                    return S.__wrap(t)
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }

            function M(n, e) {
                try {
                    return n.apply(this, e)
                } catch (n) {
                    r.__wbindgen_export_3(h(n))
                }
            }
            class S {
                static __wrap(n) {
                    let e = Object.create(S.prototype);
                    return e.ptr = n, e
                }
                __destroy_into_raw() {
                    let n = this.ptr;
                    return this.ptr = 0, n
                }
                free() {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    let n = this.__destroy_into_raw();
                    r.__wbg_tiktoken_free(n)
                }
                constructor(n, e, t) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    let _ = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                        i = u,
                        o = s(t, r.__wbindgen_export_0, r.__wbindgen_export_1),
                        d = u,
                        a = r.tiktoken_new(_, i, h(e), o, d);
                    return S.__wrap(a)
                }
                get name() {
                    try {
                        let t;
                        let _ = r.__wbindgen_add_to_stack_pointer(-16);
                        r.tiktoken_name(_, this.ptr);
                        var n = w()[_ / 4 + 0],
                            e = w()[_ / 4 + 1];
                        return 0 !== n && (t = y(n, e).slice(), r.__wbindgen_export_2(n, 1 * e)), t
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                encode(n, e, t) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    try {
                        let l = r.__wbindgen_add_to_stack_pointer(-16),
                            b = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                            c = u;
                        r.tiktoken_encode(l, this.ptr, b, c, h(e), h(t));
                        var _ = w()[l / 4 + 0],
                            i = w()[l / 4 + 1],
                            o = w()[l / 4 + 2];
                        if (w()[l / 4 + 3]) throw d(o);
                        var a = m(_, i).slice();
                        return r.__wbindgen_export_2(_, 4 * i), a
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                encode_ordinary(n) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    try {
                        let i = r.__wbindgen_add_to_stack_pointer(-16),
                            o = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                            d = u;
                        r.tiktoken_encode_ordinary(i, this.ptr, o, d);
                        var e = w()[i / 4 + 0],
                            t = w()[i / 4 + 1],
                            _ = m(e, t).slice();
                        return r.__wbindgen_export_2(e, 4 * t), _
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                encode_with_unstable(n, e, t) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    try {
                        let o = r.__wbindgen_add_to_stack_pointer(-16),
                            a = s(n, r.__wbindgen_export_0, r.__wbindgen_export_1),
                            l = u;
                        r.tiktoken_encode_with_unstable(o, this.ptr, a, l, h(e), h(t));
                        var _ = w()[o / 4 + 0],
                            i = w()[o / 4 + 1];
                        if (w()[o / 4 + 2]) throw d(i);
                        return d(_)
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                encode_single_token(n) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    let e = function(n, e) {
                            let t = e(1 * n.length);
                            return l().set(n, t / 1), u = n.length, t
                        }(n, r.__wbindgen_export_0),
                        t = u,
                        _ = r.tiktoken_encode_single_token(this.ptr, e, t);
                    return _ >>> 0
                }
                decode(n) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    try {
                        let i = r.__wbindgen_add_to_stack_pointer(-16),
                            o = function(n, e) {
                                let t = e(4 * n.length);
                                return E().set(n, t / 4), u = n.length, t
                            }(n, r.__wbindgen_export_0),
                            d = u;
                        r.tiktoken_decode(i, this.ptr, o, d);
                        var e = w()[i / 4 + 0],
                            t = w()[i / 4 + 1],
                            _ = A(e, t).slice();
                        return r.__wbindgen_export_2(e, 1 * t), _
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                decode_single_token_bytes(n) {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    try {
                        let i = r.__wbindgen_add_to_stack_pointer(-16);
                        r.tiktoken_decode_single_token_bytes(i, this.ptr, n);
                        var e = w()[i / 4 + 0],
                            t = w()[i / 4 + 1],
                            _ = A(e, t).slice();
                        return r.__wbindgen_export_2(e, 1 * t), _
                    } finally {
                        r.__wbindgen_add_to_stack_pointer(16)
                    }
                }
                token_byte_values() {
                    if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                    let n = r.tiktoken_token_byte_values(this.ptr);
                    return d(n)
                }
            }

            function W(n) {
                d(n)
            }

            function z(n) {
                let e = void 0 === i[n];
                return e
            }

            function T() {
                return M(function(n) {
                    let e = JSON.stringify(i[n]);
                    return h(e)
                }, arguments)
            }

            function j(n, e) {
                if (null == r) throw Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
                let t = i[e],
                    _ = "string" == typeof t ? t : void 0;
                var o = null == _ ? 0 : s(_, r.__wbindgen_export_0, r.__wbindgen_export_1),
                    d = u;
                w()[n / 4 + 1] = d, w()[n / 4 + 0] = o
            }

            function I(n, e) {
                let t = Error(y(n, e));
                return h(t)
            }

            function N() {
                return M(function(n, e) {
                    let t = JSON.parse(y(n, e));
                    return h(t)
                }, arguments)
            }

            function O(n, e) {
                throw Error(y(n, e))
            }
        }
    }
]);
//# sourceMappingURL=2397.89871635daf69b02.js.map