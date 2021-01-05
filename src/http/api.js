import { get, post } from './index'

// 登陆
export const Login = query => post('/users/login', query)
// 注册
export const Regist = query => post('/users/add', query)
// 用户列表
export const GetUserList = query => post('/users/userList', query)
// 更新用户数据
export const SetUserInfo = query => post('/users/updata', query)