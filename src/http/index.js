import Vue from 'vue'
import axios from 'axios'


var instance = axios.create({
    baseURL: 'http://localhost:1010',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

// 请求前的回调（也叫拦截器）
instance.interceptors.request.use(function (config) {
    console.log('请求开始并且成功')
    return config;
}, function (error) {
    console.log('请求开始并且失败功')
    return Promise.reject(error);
});

// 请求后的回调（也叫拦截器）
instance.interceptors.response.use(function (response) {
    console.log('请求结束并且成功')
    return response;
}, function (error) {
    console.log('请求结束并且失败')
    return Promise.reject(error);
});


Vue.prototype.$axios = instance

export default instance
