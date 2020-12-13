import { get, post } from './index'

export const Login = query => post('/users/login', query)
export const Regist = query => post('/users/add', query)