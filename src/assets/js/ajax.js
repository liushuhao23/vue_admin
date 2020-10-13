/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2020-03-19 09:57:30
 * @LastEditors: liushuhao
 * @LastEditTime: 2020-10-12 17:16:48
 */
import Axios from 'axios'

let Http = Axios;

// 设置超时
Http.defaults.timeout = 500000
console.log( process.env, ' process.env' );
Http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Http.defaults.baseURL = process.env.VUE_APP_BASE_API

// axios 请求返回的 拦截器

Http.interceptors.response.use(function(r) {
    if(r.data.code== 200 || r.data.code== 406 || r.data.code== 400 ){
        return r.data
    }
   else {
        // if(r.data.errorUrl != ""){
        //     window.location.href=r.data.errorUrl
        // }else{
        //     window.location.href="./errorMessage.html"+ "#/?errorMessage="+ r.data.errorMessage
        // }
    }
}, function(err) {
    return Promise.reject(err);
})
Http.interceptors.request.use (
    (config) => {
        let COMPLETEURL = window.location.href;
        config.headers.COMPLETEURL = COMPLETEURL;
        return config;
    },
    (err) => {
        return Promise.reject (err);
    }
);

if(process.env.NODE_ENV =="development"){
    // console.log("本地开发")
}else{
    
    Http.interceptors.request.use (
        (config) => {
            let COMPLETEURL = window.location.href;
            config.headers.COMPLETEURL = COMPLETEURL;
            if (config.url.includes('index/userLogout')) {
                
                config.baseURL = "./"
            } else {
                config.baseURL = "./api"
            }
            return config;
        },
        (err) => {
            return Promise.reject (err);
        }
    );
}

export default Http
