import Http from '../utils/request.js'

//账号注册
export const Register = (params) => new Http().post('/api/account', params, {});
//账号登录
export const Login = (params) => new Http().post('/api/authorization', params, {});
//账号注销登录
export const Logout = (params) => new Http().post('/apt/logout', params, {});
//获取短信验证码
export const GetVerifyCode = (params) => new Http().post('/api/verify', params, {});
//找回密码
export const FindPassword = (params) => new Http().put('/api/password', params, {});
//修改密码
export const ChangePassword = (params) => new Http().put('/apt/password', params, {});

