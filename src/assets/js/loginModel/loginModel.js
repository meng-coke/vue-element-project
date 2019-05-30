

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
