<template>
	<div id="container">
			<el-menu default-active="/AcademyProfile/index"  theme="light" id="meau" :unique-opened="true" :router="true" >
				<el-submenu index="/" >
					<template slot="title">学院概况</template>
						<el-menu-item index="/AcademyProfile/index">学院简介</el-menu-item>
						<el-menu-item index="/AcademyProfile/leader">学院领导</el-menu-item>
						<el-menu-item index="/AcademyProfile/structure">组织结构</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">机构设置</template>
						<el-menu-item index="1-1">教授委员会</el-menu-item>
						<el-menu-item index="1-2">学术委员会</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">师资情况</template>
						<el-menu-item index="1-1">人才招聘</el-menu-item>
						<el-menu-item index="1-2">教师名单</el-menu-item>
						<el-menu-item index="1-3">招聘英才</el-menu-item>
				</el-submenu>
                <el-submenu index="4">
					<template slot="title">科学研究</template>
						<el-menu-item index="1-1">研究方向</el-menu-item>
						<el-menu-item index="1-2">科研成果</el-menu-item>
						<el-menu-item index="1-3">基地建设</el-menu-item>
				</el-submenu>
				<el-submenu index="/News">
					<template slot="title">新闻动态</template>
						<el-menu-item index="/News/topNews">图片新闻</el-menu-item>
						<el-menu-item index="/News/latestNews">最新动态</el-menu-item>
				</el-submenu>
				<el-submenu index="/Notice">
					<template slot="title">通知公告</template>
						<el-menu-item index="/Notice/student">学生</el-menu-item>
						<el-menu-item index="/Notice/teacher">教师</el-menu-item>
						<el-menu-item index="/Notice/other">其他</el-menu-item>
				</el-submenu>
                <el-submenu index="7">
					<template slot="title">招聘信息</template>
				</el-submenu>
                <el-submenu index="8">
					<template slot="title">招生信息</template>
				</el-submenu>
			</el-menu>
			<el-card id="content" body-style="padding: 0 0 0 0; margin: 0; display: inline;">
				<router-view></router-view>
			</el-card>
	</div>
</template>
<script>
export default{
  name: 'Tree'
}
</script>
<style scoped>
#container{
	margin: auto;
	height: 720px;
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
