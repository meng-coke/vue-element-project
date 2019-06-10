<template>
	<div class="sidebar fixed">
		<div class="sidebar-inner scrollable-sidebar">
			<div class="main-menu">

				<!--<el-menu :default-active="defaultActive" :default-openeds="openeds" class="el-menu-vertical-demo" @select="handleSelect">-->
					<!--<template v-for="(item,index) in tableData">-->
						<!--<el-menu-item class="leftIcon" :index="item.front_url" :key="index" v-if="item.no_child">-->
							<!--<div>-->
								<!--<i :class="item.front_icon"></i>-->
								<!--<span slot="title">{{item.name}}</span>-->
							<!--</div>-->
						<!--</el-menu-item>-->

						<!--<el-submenu v-else :key="index" :index="item.front_url">-->
							<!--<template slot="title">-->
								<!--<i :class="item.front_icon"></i>-->
								<!--<span slot="title">{{item.name}}</span>-->
							<!--</template>-->
							<!--<template v-for="(item1,index1) in item.children">-->
								<!---->
								<!--<el-submenu v-if='item1.children' :key="index1"  :index="item1.front_url">-->
									<!--<template slot="title">{{item1.name}}</template>-->
									<!--<el-menu-item v-for='(item2,index2) in item1.children' :key="index2" :index="item2.front_url">-->
										<!--<div  style="padding-left:13px;">-->
											<!--{{item2.name}}-->
										<!--</div>-->
										<!---->
									<!--</el-menu-item>-->
								<!--</el-submenu>-->
								<!---->
								<!--<el-menu-item v-else :index="item1.front_url" :key="index1" >-->
									<!--<div>-->
										<!--{{item1.name}}-->
									<!--</div>-->
								<!--</el-menu-item>							-->
								<!---->
								<!---->
							<!--</template>-->
						<!--</el-submenu>-->
					<!--</template>-->
				<!--</el-menu>-->





				<!--menu start -->
				<el-menu :default-active="defaultActive"
				:default-openeds="openeds"
				class="el-menu-vertical-demo"
				@select="handleSelect">

				<!--<el-submenu index="1">-->
					<!--<template slot="title"><i class="iconfont icon-shangjia"></i>商家</template>-->
					<!--<el-menu-item index="1-1"><router-link :to="{name: 'business'}" replace>商家管理</router-link></el-menu-item>-->
				<!--</el-submenu>-->

				<el-menu-item index="1">

					<router-link :to="{name: 'business'}" ><i class="iconfont icon-tongji"></i>商家管理</router-link>
				</el-menu-item>

				<!--<el-submenu index="8">-->
				<!--<template slot="title"><img src="static/images/main/myqc.png">监控数据</template>-->
				<!--<el-menu-item index="8-1"><router-link :to="{name: 'EyeDataList'}" replace>数据列表</router-link></el-menu-item>-->
				<!--</el-submenu>-->




				</el-menu>
				<!-- menu end -->
			</div>
			<!-- /main-menu -->
			<div class="footer">
				<div class="info">
					杭州知己科技有限公司<br/> 版权所有
				</div>
				<div class="version">版本号：1.0.0</div>
			</div>
		</div>
		<!-- /sidebar-inner -->
	</div>
</template>

<script>
	import userApi from '../../api/user'
	export default {
		name: 'sidebar',
		data() {
			return {
				defaultActive: '1',
				openeds: ['2', '3', '4', '5', '8'],
				imgSrcHome: 'static/images/main/home_active.png',
				tableData: [],
			}
		},

		created: function() {
			// this.menu();
		},

		methods: {
			menu() {
				let qs = require('querystring');
				userApi.menu(qs.stringify()).then((res) => {
					this.$data.tableData = res.data.data;
				})

			},
			handleSelect(key, keyPath) {
				console.log(key)
				// 设置默认 active 为当前的 index 就是这里的参数 key
				this.defaultActive = key;
				let path;
				console.log(this.defaultActive)


				this.$router.replace({
					name: path
				})
			}
		}
	}
</script>

<style scoped>
	.el-menu-vertical-demo i {
		width: 16px;
		height: 16px;
		font-size: 16px;
		/*color: #fff;*/
		margin-right: 8px;
	}
	
	.sidebar {
		overflow-x: hidden;
		overflow-y: auto;
		text-align: left;
		position: fixed;
		display: block;
		width: 180px;
		z-index: 100;
		left: 0;
		bottom: 0;
		top: 70px;
		height: 100% - 45px;
		background-color: #495b6c;
	}
	
	.sidebar .sidebar-inner {
		background-color: #495b6c;
	}
	
	.sidebar .sidebar-inner .user-block {
		padding: 10px 0px 6px 16px;
		box-shadow: 0 1px 0 #34364a;
		-moz-box-shadow: 0 1px 0 #34364a;
		-webkit-box-shadow: 0 1px 0 #34364a;
		height: 50px;
	}
	
	.sidebar .sidebar-inner .user-block img {
		float: left;
		width: 40px;
		height: 40px;
		border-radius: 50em;
		-moz-border-radius: 50em;
		-webkit-border-radius: 50em;
		animation: fadeInRotate 0.9s ease;
		-webkit-animation: fadeInRotate 0.9s ease;
		-moz-animation: fadeInRotate 0.9s ease;
		-ms-animation: fadeInRotate 0.9s ease;
		-o-animation: fadeInRotate 0.9s ease;
		border: solid 1px #979797;
	}
	
	.sidebar .sidebar-inner .user-block .detail {
		float: left;
		color: #e6f1f7;
		margin-left: 10px;
		padding-top: 10px;
		text-align: left;
	}
	
	.sidebar .sidebar-inner .user-block .detail .name {
		font-size: 13px;
		color: #ffffff;
		text-align: center;
		max-width: 80px;
	}
	
	.sidebar .sidebar-inner .user-block .detail .grade {
		font-size: 11px;
		color: #ffffff;
		opacity: 0.5;
	}
	
	.sidebar .main-menu {
		width: 250px;
		height: 100%;
	}
	
	.sidebar .footer {
		background-color: #495b6c;
		margin-top: 40px;
	}
	
	.sidebar .footer .logo {
		text-align: center;
	}
	
	.sidebar .footer img {
		width: 40px;
		height: 40px;
	}
	
	.sidebar .footer .info {
		padding: 3px;
		font-size: 11px;
		text-align: center;
		color: #99a9bf;
	}
	
	.sidebar .footer .version {
		margin-top: 20px;
		font-size: 11px;
		text-align: center;
		color: #99a9bf;
	}
	
	.sidebar .el-menu-item.is-active a {
		color: #4a4a4a;
	}
	
	.sidebar a {
		display: block;
		width: 150px;
	}
</style>