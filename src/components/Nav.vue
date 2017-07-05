<template>
	<div id="header">
		<div id="top_panel" >
			<div class="identity hvr-overline-from-center">
				<router-link to="/">首页</router-link>
			</div>
			<div class="identity hvr-overline-from-center">
				<router-link to="/Student">学生</router-link>
			</div>
			<div class="identity hvr-overline-from-center"><a href="#" >教师</a></div>
			<div class="identity hvr-overline-from-center"><a href="#" >职工</a></div>
			<div class="identity hvr-overline-from-center">
				<router-link to="/Alumnus">校友</router-link>></div>
			<div id="search" >
				<el-input
				  placeholder="请输入搜索的内容"
				  icon="search"
				  v-model="query_content"
				  :on-icon-click="search"
				  @keyup.enter="search">
				</el-input>
			</div>
		</div>
		<div id="content">
			<ul id="nav">
				<li class="item"> <a href="http://www.neu.edu.cn/intro_info.html" class="">东大简介</a>
					<ul >
						<li> <a href="http://www.neu.edu.cn/intro_info.html">东大简介</a> </li>
						<li> <a href="http://www.neu.edu.cn/history_zhangxueliang.html">张学良老校长</a> </li>
						<li> <a href="http://www.neu.edu.cn/intro_leader.html">现任领导</a> </li>
						<li> <a href="http://www.neu.edu.cn/intro_academician.html">院士风采</a> </li>
						<li> <a href="http://www.neu.edu.cn/constitution/">东北大学章程</a> </li>
						<li> <a href="http://www.neu.edu.cn/intro_guide.html">校园导游</a> </li>
						<li> <a href="http://www.neu.edu.cn/info_title.html">校标校名校训校风校歌</a> </li>
					</ul>
				</li>
				<li class="item"><a href="http://www.neu.edu.cn/org_index.html">机构设置</a>
					<ul>
						<li><a href="http://www.neu.edu.cn/org_index.html#collegeNav">院系设置</a></li>
						<li><a href="http://www.neu.edu.cn/org_index.html#controlDepart">管理部门</a></li>
						<li><a href="http://www.neu.edu.cn/org_index.html#straightDepart">直属部门</a></li>
						<li><a href="http://www.neu.edu.cn/org_index.html#industry">产业</a></li>
						<li><a href="http://www.neu.edu.cn/research_index.html">研究机构</a></li>
					</ul>
				</li>
				<li class="item"> <a href="http://www.neu.edu.cn/edu_manage.html">教学科研</a>
					<ul>
						<li> <a href="http://www.neu.edu.cn/edu_manage.html" target="_self">教务系统</a> </li>
						<li> <a href="http://www.neu.edu.cn/indexsource/2009_course.htm" target="_blank">精品课程</a> </li>
						<li> <a href="http://aao.neu.edu.cn" target="_blank">教学研究</a> </li>
						<li> <a href="http://kjc.neu.edu.cn" target="_blank">科研项目</a> </li>
						<li> <a href="http://cxzx.neu.edu.cn" target="_blank">创新基地</a> </li>
						<li> <a href="http://www.neu.edu.cn/edu_lab.html" target="_self">国家重点实验室</a> </li>
						<li> <a href="http://www.neu.edu.cn/edu_evaluation.html" target="_self">本科教学质量报告</a> </li>
						<li> <a href="http://www.neu.edu.cn/2014_teachingachievement.html" target="_self">2014年教学成果奖申报</a> </li>
					</ul>
				</li>
				<li class="item"> <a href="http://www.neu.edu.cn/teachers_intr.html">师资队伍</a>
					<ul>
						<li> <a href="http://www.neu.edu.cn/teachers_intr.html">师资介绍</a> </li>
						<li> <a href="http://www.neu.edu.cn/indexsource/2015High-levelJobs.htm" target="_blank">人才招聘</a> </li>
					</ul>
				</li>
				<li class="item"> <a href="#">国际合作</a>
					<ul>
						<li> <a href="http://int.neu.edu.cn/cn/index.asp" target="_blank">交流合作</a> </li>
						<li> <a href="http://www.sie.neu.edu.cn/en/index.asp" target="_blank">来华留学</a> </li>
						<li> <a href="http://int.neu.edu.cn/cn/html/n_20134221042182426.asp" target="_blank">双百计划</a> </li>
						<li> <a href="http://int.neu.edu.cn/cn/pages/Agreement_schools.asp" target="_blank">协议院校</a> </li>
					</ul>
				</li>
				<li class="item"> <a href="http://www.neu.edu.cn/map_index.html#direct">快速链接</a>
					<ul>
						<li> <a href="http://www.neualumni.org.cn/" target="_blank">校友总会</a> </li>
						<li> <a href="http://xdh.neualumni.org.cn/" target="_blank">校董会</a> </li>
						<li> <a href="http://www.chlef.org/" target="_blank">张学良教育基金会</a> </li>
						<li> <a href="http://www.lib.neu.edu.cn" target="_blank">图书馆</a> </li>
						<li> <a href="http://neunews.neu.edu.cn" target="_blank">东大新闻网</a> </li>
						<li> <a href="http://weekly.neu.edu.cn" target="_blank">东北大学报</a> </li>
						<li> <a href="http://online.neu.edu.cn/" target="_blank">广播电视网</a> </li>
						<li> <a href="http://www.neupioneer.com/" target="_blank">先锋网</a> </li>
						<li> <a href="http://zs.neu.edu.cn" target="_blank">招生信息网</a> </li>
						<li> <a href="http://study.neu.edu.cn" target="_blank">研究生院网上办公系统</a> </li>
						<li> <a href="http://job.neu.edu.cn" target="_blank">就业信息网</a> </li>
						<!-- <li> <a href="http://xkjs.neu.edu.cn/xuefeng/" target="_blank">学风建设专题网</a> </li> -->
						<!-- <li> <a href="http://job.graduate.neu.edu.cn/" target="_blank">研究生就业信息网</a> </li> -->
						<li> <a href="http://psy.neu.edu.cn" target="_blank">心理健康港湾</a> </li>
						<li> <a href="http://qzzx.neu.edu.cn" target="_blank">勤助在线网</a> </li>
						<li> <a href="http://www.neucy.cn" target="_blank">科技产业集团</a> </li>
						<li> <a href="http://www.neusoft.com" target="_blank">东软集团</a> </li>
						<li> <a href="http://www.neusoft.edu.cn" target="_blank">东软信息学院</a> </li>
						<li> <a href="http://www.neu.edu.cn/network/" target="_blank">校园网服务</a> </li>
						<li> <a href="http://www.synet.edu.cn" target="_blank">CERNET东北地区网络中心</a> </li>
						<li> <a href="http://www.bntu.by" target="_blank">白俄罗斯国立技术大学</a> </li>
						<li> <a href="http://www.qncx.cn" target="_blank">昌宁新闻网</a> </li>
						<li> <a href="http://president.neu.edu.cn" target="_blank">校长信箱</a> </li>
					</ul>
				</li>
				<li class="item"><a href="./map_index.html#resources">校内资源</a>
					<ul>
						<li> <a href="http://network.neu.edu.cn/portal/" target="_blank">校园网络IT服务门户</a> </li>
						<li> <a href="http://ipgw.neu.edu.cn" target="_blank">校园网IP控制网关</a> </li>
						<li> <a href="http://ipgw.neu.edu.cn:8800" target="_blank">校园网用户管理</a> </li>
						<li> <a href="http://ecard.neu.edu.cn/selfsearch/login.aspx" target="_blank">校园卡自助查询平台</a> </li>
						<li> <a href="http://mail.neu.edu.cn" target="_blank">邮件服务[教工]</a> </li>
						<li> <a href="http://stu.neu.edu.cn" target="_blank">邮件服务[学生]</a> </li>
						<li> <a href="http://vpn.neu.edu.cn" target="_blank">VPN服务</a> </li>
						<li> <a href="http://faculty.neu.edu.cn/" target="_blank">教师主页</a> </li>
						<li> <a href="http://conf.neu.edu.cn/" target="_blank">学术会议</a> </li>
						<li> <a href="http://blog.neu.edu.cn/" target="_blank">东大博客</a> </li>
						<li> <a href="http://neucert.neu.edu.cn" target="_blank">网络应急响应NETCERT</a> </li>
						<li> <a href="http://antivirus.neu.edu.cn" target="_blank">校内防病毒服务</a> </li>
						<li> <a href="http://wsus.neu.edu.cn/" target="_blank">Windows补丁升级</a> </li>
						<li> <a href="http://mirror.neu.edu.cn/" target="_blank">开源软件镜像</a> </li>
						<li> <a href="http://hpc.neu.edu.cn/" target="_blank">高性能计算平台</a> </li>
						<li> <a href="http://ntp.neu.edu.cn/" target="_blank">网络授时服务</a> </li>
						<li> <a href="http://search.neu.edu.cn/" target="_blank">Web搜索引擎</a> </li>
						<li> <a href="http://202.118.1.125/" target="_blank">FTP搜索引擎</a> </li>
						<li> <a href="./info_calender.html">校历</a> </li>
						<li> <a href="ftp://ftp.neu.edu.cn/" target="_blank">校内FTP</a> </li>
						<li> <a href="http://geoip.neu.edu.cn/" target="_blank">IP地址归属查询</a> </li>
						<li> <a href="http://219.216.96.35/" target="_blank">校园地图[导游]</a> </li>
						<li> <a href="http://network.neu.edu.cn" target="_blank">网络中心黑板报</a> </li>
						<li> <a href="http://ecard.neu.edu.cn/" target="_blank">校园卡服务中心</a> </li>
						<li> <a href="./about_index.html">关于我们</a> </li>
					</ul>
				</li>
				<li class="item"> 
					<a href="http://english.neu.edu.cn">English</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
  name: 'Nav',
  data () {
    return {
      query_content: ''
    }
  },
  methods: {
    search () {
      alert(this.query_content)
    }
  }
}
</script>
<style scoped>
#header{
	position: relative;
	z-index: 10;
	margin: auto;
	height: 290px;
}
#top_panel{
    height: 50px;
    background-color: #363636;
}
.identity{
	width: 70px;
	float: left;
	padding-left: 30px;
	//margin-left: 30px;
}
.identity a{
	line-height: 50px;
	display: block;
	color: white;
	text-decoration-line: none;
}
#search{
	margin-top: 10px;
	margin-right: 20px;
	height: 30px;
	float: right;
}
#content{
	background-image: url('./../assets/top.jpg');
	height: 240px;
}
#nav{
	background-color: rgba(0,0,0,0.7);
	float: right;
	height: 40px;
	margin-top: 0px;
}
.item{
	width: 80px;
	display: block;
	float: left;
	line-height: 40px;
	margin-right: 10px;
}
#nav ul{
	display: none;
	width: 200px;
	background-color: rgba(0,0,0,0.7);
	margin: 0;
	padding: 0 0 10px 5px;
}
#nav ul li{
	display: block;
	height: 25px;
	text-align: left;
}
#nav li:hover ul{
	display: block;
}
#nav li a{
	color: white;
	text-decoration-line: none;
	font-size: 1rem;
	//padding-bottom: 5px;

}
@media screen and (min-width: 1366px){
	#header{
		width: 1360px;
	}
	#top_panel{
		width: 1360px;
	}
}
@media screen and (max-width: 1365px){
	#header{
		width: 1100px;
	}
}
@media screen and (max-width: 1150px){
	#header{
		width: 900px;
	}
}
</style>
