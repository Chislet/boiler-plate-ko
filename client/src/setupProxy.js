const proxy = require('http-proxy-middleware');
moudule.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};