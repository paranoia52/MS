import { get, post } from './index'

export const Login = query => post('/adduser', query)
export const Home = query => get('/', query)