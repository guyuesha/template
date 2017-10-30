import axios from 'axios';
import * as api from './api.js';

let httpService = '';
var currentHost = location.host;

if (currentHost == 'localhost:8085') {
   httpService = 'http://test.cn:8383';
} else if ( currentHost == 'dev.cn:8383') {
    httpService = 'http://test.cn:8383';
} else if ( currentHost == 'site.cn'){
  httpService = 'http://site.cn';
}

let http = axios.create({
    baseURL: httpService,
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
http.interceptors.request.use(function (config) {

    return config;
});
http.interceptors.response.use(function (response) {

    let data = response.data || {};
    if (data.code === '0') {
        console.log("请求成功：" +  data.message);
        return response.data.data;
    }
    if (data.code === '3') {

        location.href = 'http://' + currentHost + '/#/login';
    }
    let tipMessage = {
        code: data.code,
        message: data.message
    }
    return Promise.reject(tipMessage);
}, function (error) {

    let tipMessage = {
        code: '-1',
        message: '网络或系统错误'
    }
    return Promise.reject(tipMessage);
});
export default http;

export {api, http, httpService};
