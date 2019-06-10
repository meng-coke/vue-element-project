/**
 * 定义所有的常量
 */
// 接口地址
import apiUrl from './API.js'

const SERVER_IP = apiUrl.apiUrl
const COMMON = 'v1/'


//登录
global.USER_LOGIN = `${SERVER_IP}${COMMON}user/login`