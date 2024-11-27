import {
  __async,
  __asyncGenerator,
  __await,
  __spreadProps,
  __spreadValues,
  __yieldStar
} from "./chunk-AHKVINJW.js";

// node_modules/@directus/sdk/dist/index.js
function F(e) {
  return e ? `/auth/login/${e}` : "/auth/login";
}
var E = "/";
var L = (e, t) => (e.endsWith(E) && (e = e.slice(0, -1)), t.startsWith(E) || (t = E + t), e + t);
var g = (e, t, r) => {
  let a = e.pathname === E ? t : L(e.pathname, t), s = new globalThis.URL(a, e);
  if (r) for (let [c, i] of Object.entries(J(r))) if (i && typeof i == "object" && !Array.isArray(i)) for (let [p, u] of Object.entries(i)) s.searchParams.set(`${c}[${p}]`, String(u));
  else s.searchParams.set(c, i);
  return s;
};
function $(e) {
  return typeof e != "object" || !e ? false : "headers" in e && "ok" in e && "json" in e && typeof e.json == "function" && "text" in e && typeof e.json == "function";
}
function k(e) {
  return __async(this, null, function* () {
    if (!(typeof e != "object" || !e)) {
      if ($(e)) {
        let t = e.headers.get("Content-Type")?.toLowerCase();
        if (t?.startsWith("application/json") || t?.startsWith("application/health+json")) {
          let r = yield e.json();
          if (!e.ok) throw r;
          return "data" in r ? r.data : r;
        }
        if (t?.startsWith("text/html") || t?.startsWith("text/plain")) {
          let r = yield e.text();
          if (!e.ok) throw r;
          return r;
        }
        return e;
      }
      return "data" in e ? e.data : e;
    }
  });
}
var b = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (e, t, r = globalThis.fetch) {
  return t.headers = typeof t.headers == "object" && !Array.isArray(t.headers) ? t.headers : {}, r(e, t).then((a) => k(a).catch((s) => {
    let c = typeof s == "object" && "errors" in s ? s.errors : s;
    return Promise.reject({
      errors: c,
      response: a
    });
  }));
});
var G = () => {
  let e = null;
  return {
    get: () => __async(void 0, null, function* () {
      return e;
    }),
    set: (t) => __async(void 0, null, function* () {
      e = t;
    })
  };
};
var H = {
  msRefreshBeforeExpires: 3e4,
  autoRefresh: true
};
var _ = 2 ** 31 - 1;
var ne = (e = "cookie", t = {}) => (r) => {
  let a = __spreadValues(__spreadValues({}, H), t), s = null, c = null, i = a.storage ?? G(), p = () => __async(void 0, null, function* () {
    return i.set({
      access_token: null,
      refresh_token: null,
      expires: null,
      expires_at: null
    });
  }), u = () => __async(void 0, null, function* () {
    try {
      yield s;
    } finally {
      s = null;
    }
  }), f = () => __async(void 0, null, function* () {
    let h = yield i.get();
    return s || !h?.expires_at || h.expires_at < (/* @__PURE__ */ new Date()).getTime() + a.msRefreshBeforeExpires && I().catch((l) => {
    }), u();
  }), D = (h) => __async(void 0, null, function* () {
    let l = h.expires ?? 0;
    h.expires_at = (/* @__PURE__ */ new Date()).getTime() + l, yield i.set(h), a.autoRefresh && l > a.msRefreshBeforeExpires && l < _ && (c && clearTimeout(c), c = setTimeout(() => {
      c = null, I().catch((Q) => {
      });
    }, l - a.msRefreshBeforeExpires));
  }), I = () => __async(void 0, null, function* () {
    return s = (() => __async(void 0, null, function* () {
      let l = yield i.get();
      yield p();
      let Q = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
      "credentials" in a && (Q.credentials = a.credentials);
      let C = {
        mode: e
      };
      e === "json" && l?.refresh_token && (C.refresh_token = l.refresh_token), Q.body = JSON.stringify(C);
      let m = g(r.url, "/auth/refresh");
      return b(m.toString(), Q, r.globals.fetch).then((n) => D(n).then(() => n));
    }))(), s;
  });
  return {
    refresh: I,
    login(_0, _1) {
      return __async(this, arguments, function* (h, l, Q = {}) {
        yield p();
        let C = {
          email: h,
          password: l
        };
        "otp" in Q && (C.otp = Q.otp), C.mode = Q.mode ?? e;
        let m = F(Q.provider), n = g(r.url, m), y = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(C)
        };
        "credentials" in a && (y.credentials = a.credentials);
        let d = yield b(n.toString(), y, r.globals.fetch);
        return yield D(d), d;
      });
    },
    logout() {
      return __async(this, null, function* () {
        let h = yield i.get(), l = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        };
        "credentials" in a && (l.credentials = a.credentials);
        let Q = {
          mode: e
        };
        e === "json" && h?.refresh_token && (Q.refresh_token = h.refresh_token), l.body = JSON.stringify(Q);
        let C = g(r.url, "/auth/logout");
        yield b(C.toString(), l, r.globals.fetch), this.stopRefreshing(), yield p();
      });
    },
    stopRefreshing() {
      c && clearTimeout(c);
    },
    getToken() {
      return __async(this, null, function* () {
        return yield f().catch(() => {
        }), (yield i.get())?.access_token ?? null;
      });
    },
    setToken(h) {
      return __async(this, null, function* () {
        return i.set({
          access_token: h,
          refresh_token: null,
          expires: null,
          expires_at: null
        });
      });
    }
  };
};
var pe = (e) => (t) => {
  let r = e ?? null;
  return {
    getToken() {
      return __async(this, null, function* () {
        return r;
      });
    },
    setToken(a) {
      return __async(this, null, function* () {
        r = a;
      });
    }
  };
};
var K = {
  fetch: globalThis.fetch,
  WebSocket: globalThis.WebSocket,
  URL: globalThis.URL,
  logger: globalThis.console
};
var le = (e, t = {}) => {
  let r = t.globals ? __spreadValues(__spreadValues({}, K), t.globals) : K;
  return {
    globals: r,
    url: new r.URL(e),
    with(a) {
      return __spreadValues(__spreadValues({}, this), a(this));
    }
  };
};
var V = {};
var Te = (e = {}) => (t) => {
  let r = __spreadValues(__spreadValues({}, V), e);
  return {
    query(a, s, c = "items") {
      return __async(this, null, function* () {
        let i = {
          method: "POST",
          body: JSON.stringify({
            query: a,
            variables: s
          })
        };
        "credentials" in r && (i.credentials = r.credentials);
        let p = {};
        if ("getToken" in this) {
          let D = yield this.getToken();
          D && (p.Authorization = `Bearer ${D}`);
        }
        "Content-Type" in p || (p["Content-Type"] = "application/json"), i.headers = p;
        let u = c === "items" ? "/graphql" : "/graphql/system", f = g(t.url, u);
        return yield b(f.toString(), i, t.globals.fetch);
      });
    }
  };
};
function N(e) {
  return JSON.stringify(__spreadProps(__spreadValues({}, e), {
    type: "auth"
  }));
}
var W = () => JSON.stringify({
  type: "pong"
});
function* v() {
  let e = 1;
  for (; ; ) yield String(e), e++;
}
var w = (e, t = 1e3) => new Promise((r, a) => {
  let s = (u) => {
    try {
      let f = JSON.parse(u.data);
      typeof f == "object" && !Array.isArray(f) && f !== null ? (i(), r(f)) : (i(), c());
    } catch {
      i(), r(u);
    }
  }, c = () => a(), i = () => {
    clearTimeout(p), e.removeEventListener("message", s), e.removeEventListener("error", c), e.removeEventListener("close", c);
  };
  e.addEventListener("message", s), e.addEventListener("error", c), e.addEventListener("close", c);
  let p = setTimeout(() => {
    i(), r(void 0);
  }, t);
});
var M = {
  authMode: "handshake",
  heartbeat: true,
  debug: false,
  reconnect: {
    delay: 1e3,
    retries: 10
  }
};
function ve(e = {}) {
  return (t) => {
    e = __spreadValues(__spreadValues({}, M), e);
    let r = v(), a = {
      code: "closed"
    }, s = {
      attempts: 0,
      active: false
    }, c = false, i = /* @__PURE__ */ new Set(), p = (m) => "getToken" in m, u = (m, ...n) => e.debug && t.globals.logger[m]("[Directus SDK]", ...n), f = (m, n) => __async(this, null, function* () {
      let y = new t.globals.URL(m);
      if (e.authMode === "strict" && p(n)) {
        let d = yield n.getToken();
        d && y.searchParams.set("access_token", d);
      }
      return y.toString();
    }), D = (m) => __async(this, null, function* () {
      if ("url" in e) return yield f(e.url, m);
      if (["ws:", "wss:"].includes(t.url.protocol)) return yield f(t.url, m);
      let n = new t.globals.URL(t.url.toString());
      return n.protocol = t.url.protocol === "https:" ? "wss:" : "ws:", n.pathname = "/websocket", yield f(n, m);
    }), I = (m) => {
      let n = new Promise((y, d) => {
        if (!e.reconnect || c) return d();
        if (u("info", `reconnect #${s.attempts} ` + (s.attempts >= e.reconnect.retries ? "maximum retries reached" : `trying again in ${Math.max(100, e.reconnect.delay)}ms`)), s.active) return s.active;
        if (s.attempts >= e.reconnect.retries) return s.attempts = -1, d();
        setTimeout(() => m.connect().then((O) => (i.forEach((S) => {
          m.sendMessage(S);
        }), O)).then(y).catch(d), Math.max(100, e.reconnect.delay));
      });
      s.attempts += 1, s.active = n.catch(() => {
      }).finally(() => {
        s.active = false;
      });
    }, h = {
      open: /* @__PURE__ */ new Set([]),
      error: /* @__PURE__ */ new Set([]),
      close: /* @__PURE__ */ new Set([]),
      message: /* @__PURE__ */ new Set([])
    };
    function l(m) {
      return "type" in m && "status" in m && "error" in m && "code" in m.error && "message" in m.error && m.type === "auth" && m.status === "error";
    }
    function Q(m, n) {
      return __async(this, null, function* () {
        if (a.code === "open") {
          if (m.error.code === "TOKEN_EXPIRED" && (u("warn", "Authentication token expired!"), p(n))) {
            let y = yield n.getToken();
            if (!y) throw Error("No token for re-authenticating the websocket");
            a.connection.send(N({
              access_token: y
            }));
          }
          if (m.error.code === "AUTH_TIMEOUT") return a.firstMessage && e.authMode === "public" ? (u("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e.reconnect = false) : u("warn", "Authentication timed out!"), a.connection.close();
          if (m.error.code === "AUTH_FAILED") {
            if (a.firstMessage && e.authMode === "public") return u("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e.reconnect = false, a.connection.close();
            u("warn", "Authentication failed!");
          }
        }
      });
    }
    let C = (m) => __async(this, null, function* () {
      for (; a.code === "open"; ) {
        let n = yield w(a.connection).catch(() => {
        });
        if (n) {
          if (l(n)) {
            yield Q(n, m), a.firstMessage = false;
            continue;
          }
          if (e.heartbeat && n.type === "ping") {
            a.connection.send(W()), a.firstMessage = false;
            continue;
          }
          h.message.forEach((y) => {
            a.code === "open" && y.call(a.connection, n);
          }), a.firstMessage = false;
        }
      }
    });
    return {
      connect() {
        return __async(this, null, function* () {
          if (c = false, a.code === "connecting") return yield a.connection;
          if (a.code !== "closed") throw new Error(`Cannot connect when state is "${a.code}"`);
          let m = this, n = yield D(m);
          u("info", `Connecting to ${n}...`);
          let y = new Promise((d, O) => {
            let S = false, T = new t.globals.WebSocket(n);
            T.addEventListener("open", (P) => __async(this, null, function* () {
              if (u("info", "Connection open."), a = {
                code: "open",
                connection: T,
                firstMessage: true
              }, s.attempts = 0, s.active = false, C(m), e.authMode === "handshake" && p(m)) {
                let R = yield m.getToken();
                if (!R) throw Error("No token for authenticating the websocket. Make sure to provide one or call the login() function beforehand.");
                T.send(N({
                  access_token: R
                }));
                let A = yield w(T);
                if (A && "type" in A && "status" in A && A.type === "auth" && A.status === "ok") u("info", "Authentication successful!");
                else return O("Authentication failed while opening websocket connection");
              }
              h.open.forEach((R) => R.call(T, P)), S = true, d(T);
            })), T.addEventListener("error", (P) => {
              u("warn", "Connection errored."), h.error.forEach((R) => R.call(T, P)), T.close(), a = {
                code: "error"
              }, S || O(P);
            }), T.addEventListener("close", (P) => {
              u("info", "Connection closed."), h.close.forEach((R) => R.call(T, P)), r = v(), a = {
                code: "closed"
              }, I(this), S || O(P);
            });
          });
          return a = {
            code: "connecting",
            connection: y
          }, y;
        });
      },
      disconnect() {
        c = true, a.code === "open" && a.connection.close();
      },
      onWebSocket(m, n) {
        if (m === "message") {
          let y = function(d) {
            if (typeof d.data != "string") return n.call(this, d);
            try {
              return n.call(this, JSON.parse(d.data));
            } catch {
              return n.call(this, d);
            }
          };
          return h[m].add(y), () => h[m].delete(y);
        }
        return h[m].add(n), () => h[m].delete(n);
      },
      sendMessage(m) {
        if (a.code !== "open") throw new Error('Cannot send messages without an open connection. Make sure you are calling "await client.connect()".');
        if (typeof m == "string") return a.connection.send(m);
        "uid" in m || (m.uid = r.next().value), a.connection.send(JSON.stringify(m));
      },
      subscribe(_0) {
        return __async(this, arguments, function* (m, n = {}) {
          "uid" in n || (n.uid = r.next().value), i.add(__spreadProps(__spreadValues({}, n), {
            collection: m,
            type: "subscribe"
          })), a.code !== "open" && (u("info", "No connection available for subscribing!"), yield this.connect()), this.sendMessage(__spreadProps(__spreadValues({}, n), {
            collection: m,
            type: "subscribe"
          }));
          let y = true;
          function d() {
            return __asyncGenerator(this, null, function* () {
              for (; y && a.code === "open"; ) {
                let S = yield new __await(w(a.connection).catch(() => {
                }));
                if (S) {
                  if ("type" in S && "status" in S && S.type === "subscribe" && S.status === "error") throw S;
                  "type" in S && "uid" in S && S.type === "subscription" && S.uid === n.uid && (yield S);
                }
              }
              e.reconnect && s.active && (yield new __await(s.active), a.code === "open" && (a.connection.send(JSON.stringify(__spreadProps(__spreadValues({}, n), {
                collection: m,
                type: "subscribe"
              }))), yield* __yieldStar(d())));
            });
          }
          let O = () => {
            i.delete(__spreadProps(__spreadValues({}, n), {
              collection: m,
              type: "subscribe"
            })), this.sendMessage({
              uid: n.uid,
              type: "unsubscribe"
            }), y = false;
          };
          return {
            subscription: d(),
            unsubscribe: O
          };
        });
      }
    };
  };
}
var Je = (e) => new Promise((t) => setTimeout(() => t(), e));
var qe = (e, t, r = {}) => () => {
  let a = F(r.provider), s = {
    email: e,
    password: t
  };
  return "otp" in r && (s.otp = r.otp), s.mode = r.mode ?? "cookie", {
    path: a,
    method: "POST",
    body: JSON.stringify(s)
  };
};
var Xe = (e, t = "cookie") => () => ({
  path: "/auth/logout",
  method: "POST",
  body: JSON.stringify(e ? {
    refresh_token: e,
    mode: t
  } : {
    mode: t
  })
});
var Ze = (e, t) => () => ({
  path: "/auth/password/request",
  method: "POST",
  body: JSON.stringify(__spreadValues({
    email: e
  }, t ? {
    reset_url: t
  } : {}))
});
var tt = (e, t) => () => ({
  path: "/auth/password/reset",
  method: "POST",
  body: JSON.stringify({
    token: e,
    password: t
  })
});
var ot = (e = false) => () => ({
  path: e ? "/auth?sessionOnly" : "/auth",
  method: "GET"
});
var st = (e = "cookie", t) => () => ({
  path: "/auth/refresh",
  method: "POST",
  body: JSON.stringify(e === "json" ? {
    refresh_token: t,
    mode: e
  } : {
    mode: e
  })
});
var dt = (e, t) => () => ({
  path: "/activity/comment",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var lt = (e, t) => () => ({
  path: "/collections",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Qt = (e, t) => () => ({
  path: "/dashboards",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var xt = (e, t) => () => ({
  path: "/dashboards",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Ct = (e, t, r) => () => ({
  path: `/fields/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "POST"
});
var gt = (e, t) => () => ({
  path: "/files",
  method: "POST",
  body: e,
  params: t ?? {},
  headers: {
    "Content-Type": "multipart/form-data"
  }
});
var bt = (e, t = {}, r) => () => ({
  path: "/files/import",
  method: "POST",
  body: JSON.stringify({
    url: e,
    data: t
  }),
  params: r ?? {}
});
var Ot = (e, t) => () => ({
  path: "/flows",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Pt = (e, t) => () => ({
  path: "/flows",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var It = (e, t) => () => ({
  path: "/folders",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var At = (e, t) => () => ({
  path: "/folders",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
function j(e) {
  return ["directus_access", "directus_activity", "directus_collections", "directus_fields", "directus_files", "directus_folders", "directus_migrations", "directus_permissions", "directus_policies", "directus_presets", "directus_relations", "directus_revisions", "directus_roles", "directus_sessions", "directus_settings", "directus_users", "directus_webhooks", "directus_dashboards", "directus_panels", "directus_notifications", "directus_shares", "directus_flows", "directus_operations", "directus_translations", "directus_versions", "directus_extensions"].includes(e);
}
var Nt = (e, t, r) => () => {
  let a = String(e);
  if (j(a)) throw new Error("Cannot use createItems for core collections");
  return {
    path: `/items/${a}`,
    params: r ?? {},
    body: JSON.stringify(t),
    method: "POST"
  };
};
var vt = (e, t, r) => () => {
  let a = String(e);
  if (j(a)) throw new Error("Cannot use createItem for core collections");
  return {
    path: `/items/${a}`,
    params: r ?? {},
    body: JSON.stringify(t),
    method: "POST"
  };
};
var Jt = (e, t) => () => ({
  path: "/notifications",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var $t = (e, t) => () => ({
  path: "/notifications",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Gt = (e, t) => () => ({
  path: "/operations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Kt = (e, t) => () => ({
  path: "/operations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Lt = (e, t) => () => ({
  path: "/panels",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Ht = (e, t) => () => ({
  path: "/panels",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Vt = (e, t) => () => ({
  path: "/permissions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Mt = (e, t) => () => ({
  path: "/permissions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var qt = (e, t) => () => ({
  path: "/policies",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var zt = (e, t) => () => ({
  path: "/policies",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Yt = (e, t) => () => ({
  path: "/presets",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Zt = (e, t) => () => ({
  path: "/presets",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var tr = (e) => () => ({
  path: "/relations",
  body: JSON.stringify(e),
  method: "POST"
});
var or = (e, t) => () => ({
  path: "/roles",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var ar = (e, t) => () => ({
  path: "/roles",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var mr = (e, t) => () => ({
  path: "/shares",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var ir = (e, t) => () => ({
  path: "/shares",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var cr = (e, t) => () => ({
  path: "/translations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var pr = (e, t) => () => ({
  path: "/translations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var hr = (e, t) => () => ({
  path: "/users",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var yr = (e, t) => () => ({
  path: "/users",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Sr = (e, t) => () => ({
  path: "/versions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var lr = (e, t) => () => ({
  path: "/versions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Qr = (e, t) => () => ({
  path: "/webhooks",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var xr = (e, t) => () => ({
  path: "/webhooks",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "POST"
});
var Lr = (e) => () => ({
  path: `/activity/comment/${e}`,
  method: "DELETE"
});
var _r = (e) => () => ({
  path: `/collections/${e}`,
  method: "DELETE"
});
var U = (e) => {
  let t = (r, a = []) => {
    if (typeof r == "object") {
      let s = [];
      for (let c in r) {
        let i = r[c] ?? [];
        if (Array.isArray(i)) for (let p of i) s.push(t(p, [...a, c]));
        else if (typeof i == "object") for (let p of Object.keys(i)) {
          let u = i[p];
          for (let f of u) s.push(t(f, [...a, `${c}:${p}`]));
        }
      }
      return s.flatMap((c) => c);
    }
    return [...a, String(r)].join(".");
  };
  return e.flatMap((r) => t(r));
};
var J = (e) => {
  let t = {};
  Array.isArray(e.fields) && e.fields.length > 0 && (t.fields = U(e.fields).join(",")), e.filter && Object.keys(e.filter).length > 0 && (t.filter = JSON.stringify(e.filter)), e.search && (t.search = e.search), "sort" in e && e.sort && (t.sort = typeof e.sort == "string" ? e.sort : e.sort.join(",")), typeof e.limit == "number" && e.limit >= -1 && (t.limit = String(e.limit)), typeof e.offset == "number" && e.offset >= 0 && (t.offset = String(e.offset)), typeof e.page == "number" && e.page >= 1 && (t.page = String(e.page)), e.deep && Object.keys(e.deep).length > 0 && (t.deep = JSON.stringify(e.deep)), e.alias && Object.keys(e.alias).length > 0 && (t.alias = JSON.stringify(e.alias)), e.aggregate && Object.keys(e.aggregate).length > 0 && (t.aggregate = JSON.stringify(e.aggregate)), e.groupBy && e.groupBy.length > 0 && (t.groupBy = e.groupBy.join(","));
  for (let [r, a] of Object.entries(e)) r in t || (typeof a == "string" || typeof a == "number" || typeof a == "boolean" ? t[r] = String(a) : t[r] = JSON.stringify(a));
  return t;
};
var o = (e, t) => {
  if (e.length === 0) throw new Error(t);
};
var x = (e, t) => {
  if (j(String(e))) throw new Error(t);
};
var oo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/dashboards",
  body: JSON.stringify(e),
  method: "DELETE"
});
var ao = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/dashboards/${e}`,
  method: "DELETE"
});
var io = (e, t) => () => (o(e, "Collection cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/fields/${e}/${t}`,
  method: "DELETE"
});
var po = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/files",
  body: JSON.stringify(e),
  method: "DELETE"
});
var uo = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/files/${e}`,
  method: "DELETE"
});
var So = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/flows",
  body: JSON.stringify(e),
  method: "DELETE"
});
var lo = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/flows/${e}`,
  method: "DELETE"
});
var xo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/folders",
  body: JSON.stringify(e),
  method: "DELETE"
});
var To = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/folders/${e}`,
  method: "DELETE"
});
var go = (e, t) => () => {
  let r = {};
  return o(String(e), "Collection cannot be empty"), x(e, "Cannot use deleteItems for core collections"), Array.isArray(t) ? (o(t, "keysOrQuery cannot be empty"), r = {
    keys: t
  }) : (o(Object.keys(t), "keysOrQuery cannot be empty"), r = {
    query: t
  }), {
    path: `/items/${e}`,
    body: JSON.stringify(r),
    method: "DELETE"
  };
};
var bo = (e, t) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use deleteItem for core collections"), o(String(t), "Key cannot be empty"), {
  path: `/items/${e}/${t}`,
  method: "DELETE"
});
var Po = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/notifications",
  body: JSON.stringify(e),
  method: "DELETE"
});
var jo = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/notifications/${e}`,
  method: "DELETE"
});
var Fo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/operations",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Eo = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/operations/${e}`,
  method: "DELETE"
});
var vo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/panels",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Uo = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/panels/${e}`,
  method: "DELETE"
});
var ko = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/permissions",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Go = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/permissions/${e}`,
  method: "DELETE"
});
var Lo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/policies",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Ho = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/policies/${e}`,
  method: "DELETE"
});
var Mo = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/presets",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Bo = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/presets/${e}`,
  method: "DELETE"
});
var Xo = (e, t) => () => (o(e, "Collection cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/relations/${e}/${t}`,
  method: "DELETE"
});
var ea = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/roles",
  body: JSON.stringify(e),
  method: "DELETE"
});
var ta = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/roles/${e}`,
  method: "DELETE"
});
var aa = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/shares",
  body: JSON.stringify(e),
  method: "DELETE"
});
var sa = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/shares/${e}`,
  method: "DELETE"
});
var na = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/translations",
  body: JSON.stringify(e),
  method: "DELETE"
});
var ca = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/translations/${e}`,
  method: "DELETE"
});
var ha = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/users",
  body: JSON.stringify(e),
  method: "DELETE"
});
var ya = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/users/${e}`,
  method: "DELETE"
});
var la = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/versions",
  body: JSON.stringify(e),
  method: "DELETE"
});
var fa = (e) => () => (o(e, "Key cannot be empty"), {
  path: `/versions/${e}`,
  method: "DELETE"
});
var Ta = (e) => () => (o(e, "Keys cannot be empty"), {
  path: "/webhooks",
  body: JSON.stringify(e),
  method: "DELETE"
});
var Ca = (e) => () => (o(String(e), "Key cannot be empty"), {
  path: `/webhooks/${e}`,
  method: "DELETE"
});
var Va = (e) => () => ({
  path: "/activity",
  params: e ?? {},
  method: "GET"
});
var Ma = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/activity/${e}`,
  params: t ?? {},
  method: "GET"
});
var Ya = (e, t) => () => {
  let r = String(e);
  return o(r, "Collection cannot be empty"), {
    path: j(r) ? `/${r.substring(9)}` : `/items/${r}`,
    method: "GET",
    params: __spreadProps(__spreadValues(__spreadValues({}, t.query ?? {}), t.groupBy ? {
      groupBy: t.groupBy
    } : {}), {
      aggregate: t.aggregate
    })
  };
};
var ts = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/assets/${e}`,
  params: t ?? {},
  method: "GET",
  onResponse: (r) => r.body
});
var rs = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/assets/${e}`,
  params: t ?? {},
  method: "GET",
  onResponse: (r) => r.blob()
});
var os = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/assets/${e}`,
  params: t ?? {},
  method: "GET",
  onResponse: (r) => r.arrayBuffer()
});
var ms = () => () => ({
  path: "/collections",
  method: "GET"
});
var is = (e) => () => (o(e, "Collection cannot be empty"), {
  path: `/collections/${e}`,
  method: "GET"
});
var ps = (e) => () => ({
  path: "/dashboards",
  params: e ?? {},
  method: "GET"
});
var us = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/dashboards/${e}`,
  params: t ?? {},
  method: "GET"
});
var ys = () => () => ({
  path: "/extensions/",
  method: "GET"
});
var ls = () => () => ({
  path: "/fields",
  method: "GET"
});
var fs = (e) => () => (o(e, "Collection cannot be empty"), {
  path: `/fields/${e}`,
  method: "GET"
});
var Qs = (e, t) => () => (o(e, "Collection cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/fields/${e}/${t}`,
  method: "GET"
});
var Cs = (e) => () => ({
  path: "/files",
  params: e ?? {},
  method: "GET"
});
var Rs = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/files/${e}`,
  params: t ?? {},
  method: "GET"
});
var Ds = (e) => () => ({
  path: "/flows",
  params: e ?? {},
  method: "GET"
});
var Os = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/flows/${e}`,
  params: t ?? {},
  method: "GET"
});
var Is = (e) => () => ({
  path: "/folders",
  params: e ?? {},
  method: "GET"
});
var As = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/folders/${e}`,
  params: t ?? {},
  method: "GET"
});
var ws = (e, t) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use readItems for core collections"), {
  path: `/items/${e}`,
  params: t ?? {},
  method: "GET"
});
var Ns = (e, t, r) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use readItem for core collections"), o(String(t), "Key cannot be empty"), {
  path: `/items/${e}/${t}`,
  params: r ?? {},
  method: "GET"
});
var Js = (e) => () => ({
  path: "/notifications",
  params: e ?? {},
  method: "GET"
});
var $s = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/notifications/${e}`,
  params: t ?? {},
  method: "GET"
});
var Ks = (e) => () => ({
  path: "/operations",
  params: e ?? {},
  method: "GET"
});
var Ws = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/operations/${e}`,
  params: t ?? {},
  method: "GET"
});
var _s = (e) => () => ({
  path: "/panels",
  params: e ?? {},
  method: "GET"
});
var Vs = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/panels/${e}`,
  params: t ?? {},
  method: "GET"
});
var qs = (e) => () => ({
  path: "/permissions",
  params: e ?? {},
  method: "GET"
});
var zs = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/permissions/${e}`,
  params: t ?? {},
  method: "GET"
});
var Xs = (e, t) => () => (o(String(e), "Collection cannot be empty"), {
  path: `/permissions/me/${t ? `${e}/${t}` : `${e}`}`,
  method: "GET"
});
var Ys = () => () => ({
  path: "/permissions/me",
  method: "GET"
});
var tm = (e) => () => ({
  path: "/policies",
  params: e ?? {},
  method: "GET"
});
var rm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/policies/${e}`,
  params: t ?? {},
  method: "GET"
});
var om = () => () => ({
  path: "/policies/me/globals",
  method: "GET"
});
var mm = (e) => () => ({
  path: "/presets",
  params: e ?? {},
  method: "GET"
});
var im = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/presets/${e}`,
  params: t ?? {},
  method: "GET"
});
var pm = () => () => ({
  path: "/relations",
  method: "GET"
});
var um = (e) => () => ({
  path: `/relations/${e}`,
  method: "GET"
});
var hm = (e, t) => () => (o(e, "Collection cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/relations/${e}/${t}`,
  method: "GET"
});
var Sm = (e) => () => ({
  path: "/revisions",
  params: e ?? {},
  method: "GET"
});
var lm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/revisions/${e}`,
  params: t ?? {},
  method: "GET"
});
var xm = (e) => () => ({
  path: "/roles",
  params: e ?? {},
  method: "GET"
});
var Tm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/roles/${e}`,
  params: t ?? {},
  method: "GET"
});
var Cm = (e) => () => ({
  path: "/roles/me",
  params: e ?? {},
  method: "GET"
});
var gm = (e) => () => ({
  path: "/settings",
  params: e ?? {},
  method: "GET"
});
var Om = (e) => () => ({
  path: "/shares",
  params: e ?? {},
  method: "GET"
});
var Pm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/shares/${e}`,
  params: t ?? {},
  method: "GET"
});
var Am = (e, t) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use readSingleton for core collections"), {
  path: `/items/${e}`,
  params: t ?? {},
  method: "GET"
});
var wm = (e) => () => ({
  path: "/translations",
  params: e ?? {},
  method: "GET"
});
var Nm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/translations/${e}`,
  params: t ?? {},
  method: "GET"
});
var Jm = (e) => () => ({
  path: "/users",
  params: e ?? {},
  method: "GET"
});
var $m = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/users/${e}`,
  params: t ?? {},
  method: "GET"
});
var km = (e) => () => ({
  path: "/users/me",
  params: e ?? {},
  method: "GET"
});
var Wm = (e) => () => ({
  path: "/versions",
  params: e ?? {},
  method: "GET"
});
var Lm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/versions/${e}`,
  params: t ?? {},
  method: "GET"
});
var Vm = (e) => () => ({
  path: "/webhooks",
  params: e ?? {},
  method: "GET"
});
var Mm = (e, t) => () => (o(String(e), "Key cannot be empty"), {
  path: `/webhooks/${e}`,
  params: t ?? {},
  method: "GET"
});
var gi = (e) => () => ({
  method: "POST",
  path: "/schema/apply",
  body: JSON.stringify(e)
});
var Di = (e, t = false) => () => ({
  method: "POST",
  path: "/schema/diff",
  params: t ? {
    force: t
  } : {},
  body: JSON.stringify(e)
});
var Pi = () => () => ({
  method: "GET",
  path: "/schema/snapshot"
});
var wi = (e = "item") => () => ({
  method: "GET",
  path: e === "item" ? "/server/specs/graphql" : "/server/specs/graphql/system"
});
var vi = () => () => ({
  method: "GET",
  path: "/server/health"
});
var Ji = () => () => ({
  method: "GET",
  path: "/server/info"
});
var ki = () => () => ({
  method: "GET",
  path: "/server/specs/oas"
});
var Ki = () => () => ({
  method: "GET",
  path: "/server/ping"
});
var zi = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/activity/comment/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Zi = (e, t, r) => () => (o(e, "Collection cannot be empty"), {
  path: `/collections/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var en = (e, t) => () => ({
  path: "/collections",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var on = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/dashboards",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var an = (e, t) => () => ({
  path: "/dashboards",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var sn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/dashboards/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var cn = (e, t, r) => () => (e !== null && o(e, "Bundle cannot be an empty string"), o(t, "Name cannot be empty"), {
  path: e ? `/extensions/${e}/${t}` : `/extensions/${t}`,
  params: {},
  body: JSON.stringify(r),
  method: "PATCH"
});
var hn = (e, t, r, a) => () => (o(e, "Keys cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/fields/${e}/${t}`,
  params: a ?? {},
  body: JSON.stringify(r),
  method: "PATCH"
});
var Sn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/files",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var ln = (e, t) => () => ({
  path: "/files",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var fn = (e, t, r) => () => (o(e, "Key cannot be empty"), t instanceof FormData ? {
  path: `/files/${e}`,
  params: r ?? {},
  body: t,
  method: "PATCH",
  headers: {
    "Content-Type": "multipart/form-data"
  }
} : {
  path: `/files/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Tn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/flows",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Cn = (e, t) => () => ({
  path: "/flows",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Rn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/flows/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Dn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/folders",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var On = (e, t) => () => ({
  path: "/folders",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Pn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/folders/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var An = (e, t, r, a) => () => {
  let s = {};
  return o(String(e), "Collection cannot be empty"), x(e, "Cannot use updateItems for core collections"), Array.isArray(t) ? (o(t, "keysOrQuery cannot be empty"), s = {
    keys: t
  }) : (o(Object.keys(t), "keysOrQuery cannot be empty"), s = {
    query: t
  }), s.data = r, {
    path: `/items/${e}`,
    params: a ?? {},
    body: JSON.stringify(s),
    method: "PATCH"
  };
};
var Fn = (e, t, r) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use updateItems for core collections"), {
  path: `/items/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var En = (e, t, r, a) => () => (o(String(t), "Key cannot be empty"), o(String(e), "Collection cannot be empty"), x(e, "Cannot use updateItem for core collections"), {
  path: `/items/${e}/${t}`,
  params: a ?? {},
  body: JSON.stringify(r),
  method: "PATCH"
});
var vn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/notifications",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Un = (e, t) => () => ({
  path: "/notifications",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Jn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/notifications/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Gn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/operations",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Kn = (e, t) => () => ({
  path: "/operations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Wn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/operations/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var _n = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/panels",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Vn = (e, t) => () => ({
  path: "/panels",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Mn = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/panels/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var zn = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/permissions",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Xn = (e, t) => () => ({
  path: "/permissions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Yn = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/permissions/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var tc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/policies",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var rc = (e, t) => () => ({
  path: "/policies",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var oc = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/policies/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var mc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/presets",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var ic = (e, t) => () => ({
  path: "/presets",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var nc = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/presets/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var uc = (e, t, r, a) => () => (o(e, "Collection cannot be empty"), o(t, "Field cannot be empty"), {
  path: `/relations/${e}/${t}`,
  params: a ?? {},
  body: JSON.stringify(r),
  method: "PATCH"
});
var dc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/roles",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Sc = (e, t) => () => ({
  path: "/roles",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var lc = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/roles/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Qc = (e, t) => () => ({
  path: "/settings",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Cc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/shares",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Rc = (e, t) => () => ({
  path: "/shares",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var gc = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/shares/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Oc = (e, t, r) => () => (o(String(e), "Collection cannot be empty"), x(e, "Cannot use updateSingleton for core collections"), {
  path: `/items/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Ic = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/translations",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Ac = (e, t) => () => ({
  path: "/translations",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Fc = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/translations/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Nc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/users",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var vc = (e, t) => () => ({
  path: "/users",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Uc = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/users/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var Jc = (e, t) => () => ({
  path: "/users/me",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Gc = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/versions",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Kc = (e, t) => () => ({
  path: "/versions",
  params: t ?? {},
  body: JSON.stringify(e),
  method: "PATCH"
});
var Wc = (e, t, r) => () => (o(e, "Key cannot be empty"), {
  path: `/versions/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var _c = (e, t, r) => () => (o(e, "Keys cannot be empty"), {
  path: "/webhooks",
  params: r ?? {},
  body: JSON.stringify({
    keys: e,
    data: t
  }),
  method: "PATCH"
});
var Vc = (e, t, r) => () => (o(String(e), "Key cannot be empty"), {
  path: `/webhooks/${e}`,
  params: r ?? {},
  body: JSON.stringify(t),
  method: "PATCH"
});
var xp = () => () => ({
  method: "POST",
  path: "/utils/cache/clear"
});
var Cp = (e, t, r, a) => () => ({
  method: "POST",
  path: `/utils/export/${e}`,
  body: JSON.stringify({
    format: t,
    query: r,
    file: a
  })
});
var gp = (e, t, r) => () => e === "GET" ? {
  path: `/flows/trigger/${t}`,
  params: r ?? {},
  method: "GET"
} : {
  path: `/flows/trigger/${t}`,
  body: JSON.stringify(r ?? {}),
  method: "POST"
};
var Dp = (e) => () => ({
  method: "POST",
  path: "/utils/hash/generate",
  body: JSON.stringify({
    string: e
  })
});
var Op = (e, t) => () => ({
  method: "POST",
  path: "/utils/hash/verify",
  body: JSON.stringify({
    string: e,
    hash: t
  })
});
var jp = (e, t) => () => ({
  path: `/utils/import/${e}`,
  method: "POST",
  body: t,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});
var Ap = (e, t) => () => ({
  path: `/operations/trigger/${e}`,
  body: JSON.stringify(t ?? {}),
  method: "POST"
});
var Ep = (e, t, r = "cookie") => () => ({
  path: "/shares/auth",
  method: "POST",
  body: JSON.stringify({
    share: e,
    password: t,
    mode: r
  })
});
var wp = (e, t) => () => ({
  path: "/shares/invite",
  method: "POST",
  body: JSON.stringify({
    share: e,
    emails: t
  })
});
var Np = (e) => () => ({
  path: `/shares/info/${e}`,
  method: "GET"
});
var Up = (e, t, r) => () => ({
  method: "POST",
  path: `/utils/sort/${e}`,
  body: JSON.stringify({
    item: t,
    to: r
  })
});
var $p = (e, t, r) => () => ({
  path: "/users/invite",
  method: "POST",
  body: JSON.stringify(__spreadValues({
    email: e,
    role: t
  }, r ? {
    invite_url: r
  } : {}))
});
var kp = (e, t) => () => ({
  path: "/users/invite/accept",
  method: "POST",
  body: JSON.stringify({
    token: e,
    password: t
  })
});
var Gp = (e, t, r = {}) => () => ({
  path: "/users/register",
  method: "POST",
  body: JSON.stringify(__spreadValues({
    email: e,
    password: t
  }, r))
});
var Kp = (e) => () => ({
  path: "/users/register/verify-email",
  params: {
    token: e
  },
  method: "GET"
});
var Wp = (e) => () => ({
  path: "/users/me/tfa/generate",
  method: "POST",
  body: JSON.stringify({
    password: e
  })
});
var Lp = (e, t) => () => ({
  path: "/users/me/tfa/enable",
  method: "POST",
  body: JSON.stringify({
    secret: e,
    otp: t
  })
});
var Hp = (e) => () => ({
  path: "/users/me/tfa/disable",
  method: "POST",
  body: JSON.stringify({
    otp: e
  })
});
var Mp = (e, t) => () => (o(e, "ID cannot be empty"), {
  path: `/versions/${e}/save`,
  method: "POST",
  body: JSON.stringify(t)
});
var Bp = (e) => () => (o(e, "ID cannot be empty"), {
  path: `/versions/${e}/compare`,
  method: "GET"
});
var qp = (e, t, r) => () => (o(e, "ID cannot be empty"), {
  path: `/versions/${e}/promote`,
  method: "POST",
  body: JSON.stringify(r ? {
    mainHash: t,
    fields: r
  } : {
    mainHash: t
  })
});
var Xp = (e) => () => ({
  method: "GET",
  path: "/utils/random/string",
  params: e !== void 0 ? {
    length: e
  } : {}
});
var B = {};
var Ru = (e = {}) => (t) => {
  let r = __spreadValues(__spreadValues({}, B), e);
  return {
    request(a) {
      return __async(this, null, function* () {
        let s = a();
        if (s.headers || (s.headers = {}), "Content-Type" in s.headers ? s.headers["Content-Type"] === "multipart/form-data" && delete s.headers["Content-Type"] : s.headers["Content-Type"] = "application/json", "getToken" in this) {
          let u = yield this.getToken();
          u && (s.headers || (s.headers = {}), s.headers.Authorization = `Bearer ${u}`);
        }
        let c = g(t.url, s.path, s.params), i = {
          method: s.method ?? "GET",
          headers: s.headers ?? {}
        };
        "credentials" in r && (i.credentials = r.credentials), s.body && (i.body = s.body), s.onRequest && (i = yield s.onRequest(i)), r.onRequest && (i = yield r.onRequest(i));
        let p = yield b(c.toString(), i, t.globals.fetch);
        return "onResponse" in s && (p = yield s.onResponse(p, i)), "onResponse" in e && (p = yield e.onResponse(p, i)), p;
      });
    }
  };
};
function bu(e, t) {
  return () => {
    let r = e();
    return typeof t == "function" ? r.onRequest = t : r.onRequest = (a) => __spreadValues(__spreadValues({}, a), t), r;
  };
}
function Pu(e) {
  return () => {
    let t = e();
    return t.method === "GET" && t.params && (t.method = "SEARCH", t.body = JSON.stringify({
      query: __spreadProps(__spreadValues({}, t.params), {
        fields: U(t.params.fields ?? [])
      })
    }), delete t.params), t;
  };
}
function Iu(e, t) {
  return () => {
    let r = t();
    return e && (r.headers || (r.headers = {}), r.headers.Authorization = `Bearer ${e}`), r;
  };
}
function Fu(e) {
  return () => e;
}
export {
  kp as acceptUserInvite,
  Ya as aggregate,
  N as auth,
  Ep as authenticateShare,
  ne as authentication,
  xp as clearCache,
  Bp as compareContentVersion,
  lt as createCollection,
  dt as createComment,
  lr as createContentVersion,
  Sr as createContentVersions,
  xt as createDashboard,
  Qt as createDashboards,
  le as createDirectus,
  Ct as createField,
  Pt as createFlow,
  Ot as createFlows,
  At as createFolder,
  It as createFolders,
  vt as createItem,
  Nt as createItems,
  $t as createNotification,
  Jt as createNotifications,
  Kt as createOperation,
  Gt as createOperations,
  Ht as createPanel,
  Lt as createPanels,
  Mt as createPermission,
  Vt as createPermissions,
  qt as createPolicies,
  zt as createPolicy,
  Zt as createPreset,
  Yt as createPresets,
  tr as createRelation,
  ar as createRole,
  or as createRoles,
  ir as createShare,
  mr as createShares,
  pr as createTranslation,
  cr as createTranslations,
  yr as createUser,
  hr as createUsers,
  xr as createWebhook,
  Qr as createWebhooks,
  Fu as customEndpoint,
  _r as deleteCollection,
  Lr as deleteComment,
  fa as deleteContentVersion,
  la as deleteContentVersions,
  ao as deleteDashboard,
  oo as deleteDashboards,
  io as deleteField,
  uo as deleteFile,
  po as deleteFiles,
  lo as deleteFlow,
  So as deleteFlows,
  To as deleteFolder,
  xo as deleteFolders,
  bo as deleteItem,
  go as deleteItems,
  jo as deleteNotification,
  Po as deleteNotifications,
  Eo as deleteOperation,
  Fo as deleteOperations,
  Uo as deletePanel,
  vo as deletePanels,
  Go as deletePermission,
  ko as deletePermissions,
  Lo as deletePolicies,
  Ho as deletePolicy,
  Bo as deletePreset,
  Mo as deletePresets,
  Xo as deleteRelation,
  ta as deleteRole,
  ea as deleteRoles,
  sa as deleteShare,
  aa as deleteShares,
  ca as deleteTranslation,
  na as deleteTranslations,
  ya as deleteUser,
  ha as deleteUsers,
  Ca as deleteWebhook,
  Ta as deleteWebhooks,
  Hp as disableTwoFactor,
  Lp as enableTwoFactor,
  U as formatFields,
  Dp as generateHash,
  Wp as generateTwoFactorSecret,
  v as generateUid,
  F as getAuthEndpoint,
  Te as graphql,
  bt as importFile,
  wp as inviteShare,
  $p as inviteUser,
  qe as login,
  Xe as logout,
  G as memoryStorage,
  w as messageCallback,
  Ze as passwordRequest,
  tt as passwordReset,
  W as pong,
  qp as promoteContentVersion,
  J as queryToParams,
  Xp as randomString,
  Va as readActivities,
  Ma as readActivity,
  os as readAssetArrayBuffer,
  rs as readAssetBlob,
  ts as readAssetRaw,
  is as readCollection,
  ms as readCollections,
  Lm as readContentVersion,
  Wm as readContentVersions,
  us as readDashboard,
  ps as readDashboards,
  ys as readExtensions,
  Qs as readField,
  ls as readFields,
  fs as readFieldsByCollection,
  Rs as readFile,
  Cs as readFiles,
  Os as readFlow,
  Ds as readFlows,
  As as readFolder,
  Is as readFolders,
  wi as readGraphqlSdl,
  Ns as readItem,
  Xs as readItemPermissions,
  ws as readItems,
  km as readMe,
  $s as readNotification,
  Js as readNotifications,
  ki as readOpenApiSpec,
  Ws as readOperation,
  Ks as readOperations,
  Vs as readPanel,
  _s as readPanels,
  zs as readPermission,
  qs as readPermissions,
  tm as readPolicies,
  rm as readPolicy,
  om as readPolicyGlobals,
  im as readPreset,
  mm as readPresets,
  ot as readProviders,
  hm as readRelation,
  um as readRelationByCollection,
  pm as readRelations,
  lm as readRevision,
  Sm as readRevisions,
  Tm as readRole,
  xm as readRoles,
  Cm as readRolesMe,
  gm as readSettings,
  Pm as readShare,
  Np as readShareInfo,
  Om as readShares,
  Am as readSingleton,
  Nm as readTranslation,
  wm as readTranslations,
  $m as readUser,
  Ys as readUserPermissions,
  Jm as readUsers,
  Mm as readWebhook,
  Vm as readWebhooks,
  ve as realtime,
  st as refresh,
  Gp as registerUser,
  Kp as registerUserVerify,
  Ru as rest,
  Mp as saveToContentVersion,
  gi as schemaApply,
  Di as schemaDiff,
  Pi as schemaSnapshot,
  vi as serverHealth,
  Ji as serverInfo,
  Ki as serverPing,
  Je as sleep,
  pe as staticToken,
  x as throwIfCoreCollection,
  o as throwIfEmpty,
  gp as triggerFlow,
  Ap as triggerOperation,
  Zi as updateCollection,
  en as updateCollectionsBatch,
  zi as updateComment,
  Wc as updateContentVersion,
  Gc as updateContentVersions,
  Kc as updateContentVersionsBatch,
  sn as updateDashboard,
  on as updateDashboards,
  an as updateDashboardsBatch,
  cn as updateExtension,
  hn as updateField,
  fn as updateFile,
  Sn as updateFiles,
  ln as updateFilesBatch,
  Rn as updateFlow,
  Tn as updateFlows,
  Cn as updateFlowsBatch,
  Pn as updateFolder,
  Dn as updateFolders,
  On as updateFoldersBatch,
  En as updateItem,
  An as updateItems,
  Fn as updateItemsBatch,
  Jc as updateMe,
  Jn as updateNotification,
  vn as updateNotifications,
  Un as updateNotificationsBatch,
  Wn as updateOperation,
  Gn as updateOperations,
  Kn as updateOperationsBatch,
  Mn as updatePanel,
  _n as updatePanels,
  Vn as updatePanelsBatch,
  Yn as updatePermission,
  zn as updatePermissions,
  Xn as updatePermissionsBatch,
  tc as updatePolicies,
  rc as updatePoliciesBatch,
  oc as updatePolicy,
  nc as updatePreset,
  mc as updatePresets,
  ic as updatePresetsBatch,
  uc as updateRelation,
  lc as updateRole,
  dc as updateRoles,
  Sc as updateRolesBatch,
  Qc as updateSettings,
  gc as updateShare,
  Cc as updateShares,
  Rc as updateSharesBatch,
  Oc as updateSingleton,
  Fc as updateTranslation,
  Ic as updateTranslations,
  Ac as updateTranslationsBatch,
  Uc as updateUser,
  Nc as updateUsers,
  vc as updateUsersBatch,
  Vc as updateWebhook,
  _c as updateWebhooks,
  gt as uploadFiles,
  Up as utilitySort,
  Cp as utilsExport,
  jp as utilsImport,
  Op as verifyHash,
  bu as withOptions,
  Pu as withSearch,
  Iu as withToken
};
//# sourceMappingURL=@directus_sdk.js.map
