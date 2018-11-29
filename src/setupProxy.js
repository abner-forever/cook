const proxy = require('http-proxy-middleware')
//设置代理
module.exports = function(app) {
    app.use(
        proxy('/bwl', { 
            target: 'http://120.77.17.44',
            changeOrigin: true,
            pathRewrite:{
                '^/bwl': ''
            }
            }
        )
    )
}