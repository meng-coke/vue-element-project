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
  </div>
</template>

<script>
    export default {
        name: "login-model",
      data(){
          return{

          }
      },
      created:function () {
        console.log(document.body.clientHeight)
      }
    }
</script>

<style scoped>
  .login-list{
    width: 100%;
    height: 100%;
  }
  .lizi{
    background-image: url("../../assets/img/backImg.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
