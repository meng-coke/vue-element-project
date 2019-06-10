
import userApi from '@/api/user.js'

export default {
  name: "login-model",
  data(){
    return{
      loginInfo:{
        username:'admin',
        password:'666',
      },
      rules:{

      },
      getCodeImg:'',

    }
  },
  created:function () {
    console.log(document.body.clientHeight)
    this.$data.loginInfo.username = 'admin';
    this.$data.loginInfo.password = '666';
    let _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (key == 13) {
        _this.loginBtn();
      }
    };
  },
  methods:{
    loginBtn(){

      if(this.$data.loginInfo.username === 'admin' && this.$data.loginInfo.password === '666'){
        console.log('登录');

        //调接口测试
        let list = {
          username:'admin',
          password: '666'
        }
        let qs = require('querystring');
        userApi.login(qs.stringify(list)).then((res) => {
          console.log(res);
          // if (res.data.errno === 0) {
          //   localStorage.setItem('knock_knock', res.data.data.access_token);
          //   localStorage.setItem('domain', res.data.data.user.domain);
          //   localStorage.setItem('username', res.data.data.user.username);
          //   localStorage.setItem('store_id', res.data.data.user.store_id);
          //   localStorage.setItem('store_name', res.data.data.user.store_name);
          //   if(res.data.data.user.is_change_pwd == 0){
          //     this.$data.dialogFormVisible = true;
          //   }else{
          //     this.menu();
          //   }
          // }else if(res.data.msg === '此账号被禁用'){
          //   this.$message.error(res.data.msg);
          //   this.$data.status = 0;
          // }
          // else {
          //   this.$message.error(res.data.msg);
          // }
        })

        this.$router.push({ path: '/' })
      }else{
        this.$message({
          type: 'warning',
          message: '密码错误',
        })
      }
    },
  },
}
