
/**
 * 登录
 * **/


import axios from 'axios'

export default {

    //登录
    login (list) {
        return new Promise((resolve, reject) => {
            axios.post(global.USER_LOGIN, list).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },

}