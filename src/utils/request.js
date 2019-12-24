import Axios from "axios";

const serviceHost = process.env.REACT_APP_SERVICE_HOST;
const port = process.env.REACT_APP_PORT;

const req = Axios.create({ baseURL: `${serviceHost}:${port}` });

export default function request(url = '', options = {}) {
  return () => {
    // 请求拦截 
    if (!url.includes('index')) {
      const isLogin = JSON.parse(window.sessionStorage.getItem('user') || false);
      if (!isLogin) return Promise.reject(new Error('未登录!'));
    }
    if (url === '') return Promise.reject(new Error('必须传递url'));
    // 设置默认的 请求方式get, 请求头'Content-Type': 'application/json; charset=utf-8'
    return req({
      url,
      method: 'get',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      ...options
    });
  }
}
