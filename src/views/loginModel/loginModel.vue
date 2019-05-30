<template>
  <div class="login-list" >
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >



    </vue-particles>


    <div class="loginHome">
      <div class="loginHome_title">TRE ELEMENT USER</div>
      <div class="loginHome_subTitle">once in a life time</div>
      <div class="loginHome_input">
        <div class="loginHome_oneBorder">
          <img src="../../assets/images/index-1.png" alt="" class="loginHome_img">
          <input type="text" class="loginHome_leInput" v-model="loginInfo.username">
        </div>
        <div class="loginHome_oneBorder">
          <img src="../../assets/images/index-2.png" alt="" class="loginHome_img">
          <input type="password" class="loginHome_leInput" v-model="loginInfo.password">
        </div>
      </div>
      <div class="loginHome_btn">

        <div class="loginBtn_right" @click="loginBtn">
          <a class="loginBtn_right_a">登录</a>
        </div>
      </div>

      <!--备注-->
      <div class="remarkBorder" style="width: 200px;margin: 0 auto;margin-top: 30px">
        <a href="https://github.com/Velg03961485" class="remark_a">TIM</a>
      </div>

    </div>

  </div>
</template>

<script src="@/assets/js/loginModel/loginModel.js"></script>

<style >
  .login-list{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .lizi{
    background-image: url("../../assets/images/bg2.png");
    /*background-color: #68A2E5;*/
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<style type="text/css" src="@/assets/css/loginModel/loginModel.scss" scoped></style>
