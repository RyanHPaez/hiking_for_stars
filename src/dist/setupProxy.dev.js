"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware(["/api",, "/otherApi"], {
    target: "3005"
  }));
};