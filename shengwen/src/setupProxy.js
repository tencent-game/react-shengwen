const { createProxyMiddleware } = require('http-proxy-middleware');
  
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'http://4iiqdx.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    )
  );
};
// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:9000',
//       changeOrigin: true
//     })
//   );
// };