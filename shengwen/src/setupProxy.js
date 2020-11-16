const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'http://10.9.63.251:8805',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    )
  );
};