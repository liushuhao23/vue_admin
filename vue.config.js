/*
 * @Author: liushuhao
 * @Date: 2020-08-18 15:39:18
 * @LastEditTime: 2020-08-21 14:27:26
 * @LastEditors: liushuhao
 * @Description: 
 * @FilePath: /vue-manage-system/vue.config.js
 */
module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        // index: 'admin-index.html',
        // https: true,
        proxy: 'http://localhost:3000/', // 运营管理平台
        host: '0.0.0.0',
      },
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':'http://localhost:3000'
    //             }
    //         }
    //     }
    // }
}