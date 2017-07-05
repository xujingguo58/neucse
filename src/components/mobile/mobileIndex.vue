<template>
	<div id="mobileIndex">
	<div id="header">
		<div id="bars" @click="openLeftSlide"><n3-icon type="bars" size="80px" ></n3-icon></div>
		<div id="name">计算机科学与工程学院</div>
	</div>
	<topStories></topStories>
	<majorChoice></majorChoice>
	<latestNews></latestNews>
	<notice></notice>
	<bottomFooter></bottomFooter>
	<n3-aside id="aside"  placement="left" title="Title" width="60%" ref="asideLeft" :header="false">
		<div id="welcome">计算机学院欢迎您!</div>
		<div id="icon"></div>
		<div id="title">功能选择</div>
		<div class="meauList">学院概况</div>
		<div class="meauList">机构设置</div>
		<div class="meauList">招生信息</div>
		<div class="meauList">招聘信息</div>
		<div class="meauList">师资状况</div>
		<div class="meauList">科学研究</div>
		<div class="meauList">学生活动</div>
		<div class="meauList">新闻动态</div>
	</n3-aside>

	</div>
</template>
<script>
import topStories from './topStories'
import majorChoice from './majorChoice'
import latestNews from './latestNews'
import notice from './notice'
import  bottomFooter from './bottomFooter'
export default{
	name: 'mobileIndex',
	components: {
		topStories: topStories,
		majorChoice: majorChoice,
		latestNews: latestNews,
		notice: notice,
		bottomFooter:bottomFooter
	},
	methods: {
		openLeftSlide: function(){
			this.$refs.asideLeft.open()
		}
	}
}
</script>
<style scoped>
	#mobileIndex{
		background-color: gray;
	}
	#header{
		height: 150px;
		width: 100%;
		background-color: #363636;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	#bars{
		float: left;
		padding-left: 5%;
		padding-top: 40px;
	}
	#name{
		margin-left: 15%;
		line-height: 150px;
		font-size: 3rem;
	}
	#aside{
		background-color: #363636;
		color: #E0FFFF;
	}
	#welcome{
		height: 136px;
		font-size: 3rem;
		color: #E0FFFF;
		padding-left: 20px;
		line-height: 136px;
	}
	#title{
		width: 80%;
		height: 80px;
		line-height: 80px;
		font-size: 2.5rem;
		border-bottom: solid 1px white;
	}
	#icon{
		//padding-top: 100px;
		width: 105%;
		margin-left: -2.5%;
		//margin-top: 136px;
		height: 400px;
		background-image: url('../../assets/img_04.png');
		background-size: 100% 400px;
	}
	.meauList{
		margin-left: 20px;
		height: 100px;
		width: 40%;
		border-bottom:solid 1px #9E9E9E;
		line-height: 80px;
		font-size: 2.5rem;
	}
</style>