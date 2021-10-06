const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/api',
      createProxyMiddleware({
          target: 'http://j5d102.p.ssafy.io:8080',
          changeOrigin: true,
      })
  );
};
