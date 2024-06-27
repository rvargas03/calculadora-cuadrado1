const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://puxxbfkxxqqbjiogv3alfciuuy0dpgos.lambda-url.us-east-1.on.aws',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Eliminar el prefijo /api al redirigir
      },
    })
  );
};
