import { get, post } from './index'

// 登陆
export const Login = query => post('/users/login', query)
// 注册
export const Regist = query => post('/users/add', query)
// 用户列表
export const GetUserList = query => post('/users/userList', query)
// 更新用户数据
export const SetUserInfo = query => post('/users/updata', query)

// 添加歌曲
export const AddMusic = query => post('/music/add', query)
// 获取歌曲列表
export const GetMusic = query => post('/music/query', query)

// 获取角色列表
export const GetRole = query => post('/role/query', query)
// 添加角色
export const AddRole = query => post('/role/add', query)
// 删除角色
export const DelRole = query => get('/role/del', query)