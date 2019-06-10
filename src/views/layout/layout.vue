<template>
    <div class="main-box">
        <navbar ref="header"></navbar>
        <sidebar ref="leftmenu"></sidebar>
        <div class="content" ref="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from '../../components/main/Navbar'
    import Sidebar from '../../components/main/Sidebar'
    export default {
        name: "layout",
        components: {
            Navbar,
            Sidebar
        },
        data(){
            return{

            }
        },
        created:function () {

        },
        methods:{

        },
    }
</script>

<style scoped>
    .main-box {
        /*background-color: #495b6c;*/
        min-width: 1200px;
    }

    .main-box .sidebar {
        width: 180px;
        min-width: 180px;
    }

    .main-box .content {
        color: black;
        margin: 80px 10px 0 190px;
        background-color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .main-box .content > div {
        padding: 30px 30px 0;
    }

    .main-box .customer-service {
        width: 40px;
        height: 40px;
        position: fixed;
        right: 40px;
        bottom: 30px;
        line-height: 40px;
        z-index: 9991;
        cursor: pointer;
    }

    .main-box .customer-servic img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        padding: 65px 20px 0px 20px;
    }
</style>
