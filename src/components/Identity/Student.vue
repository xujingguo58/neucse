<template>
	<div >
		<Navigation></Navigation>
		<div id="container">
			<el-menu default-active="/AcademyProfile/index"  theme="light" id="meau" :unique-opened="true" >
				<el-submenu index="1" >
					<template slot="title">查询信息</template>
						<el-menu-item index="1-1">查询课表</el-menu-item>
						<el-menu-item index="1-2">查询成绩</el-menu-item>
						<el-menu-item index="1-3">查询培养计划</el-menu-item>
				</el-submenu>
                <el-submenu index="2" >
					<template slot="title">办理业务</template>
						<el-menu-item index="2-1">赛事报名</el-menu-item>
						<el-menu-item index="2-2">选课</el-menu-item>
						<el-menu-item index="2-3">奖励登记</el-menu-item>
				</el-submenu>
                <el-submenu index="3" >
					<template slot="title">相关信息</template>
						<el-menu-item index="3-1">讲座信息</el-menu-item>
						<el-menu-item index="2">科研项目</el-menu-item>
						<el-menu-item index="3">就业信息</el-menu-item>
                        <el-menu-item index="3">竞赛信息</el-menu-item>
				</el-submenu>
			</el-menu>	
			<div id="content">
				<router-view></router-view>
			</div>
		</div>
		<FooterMessage></FooterMessage>
	</div>
</template>
<script>
import Nav from '../Nav'
import Footer from '../Footer'
export default{
  name: 'Student',
  components: {
    Navigation: Nav,
    FooterMessage: Footer
  }
}
</script>
<style scoped>
#container{
	margin: auto;
	height: 700px;
	border-right: solid 1px #E8E8E8;
}
#meau{
	float: left;
	height: 700px;
	width: 200px;
}
#content{
	margin: 20px 0 0 20px;
	float: left;
	height: 660px;
	//padding: 10px;
}
@media screen and (min-width: 1366px){
	#container{
		width: 1359px;
	}
	#content{
		width: 1120px;
	}
}
@media screen and (max-width: 1365px){
	#container{
		width: 1099px;
	}
	#content{
		width: 860px;
	}
}
@media screen and (max-width: 1150px){
	#container{
		width: 899px;
	}
	#content{
		width: 660px;
	}
}
</style>
