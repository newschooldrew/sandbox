const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/send-email"],
    createProxyMiddleware({
        target: "http://localhost:5000",
      })
    );
  };