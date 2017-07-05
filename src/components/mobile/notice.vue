<template>
	<div id="container">
	<div id="name">通知</div>
		<div class="column" v-for="item in notice">{{item.title}}</div>
	</div>
</template>
<script>
export default{
	name: 'notice',
	data () {
		return {
				notice:[
					{title: '关于开展东北大学第二届创新创业教学大赛的通知     04-20',url:"www.baidu.com"},
					{title: '关于推荐学生参加2017年AC21国际研究生暑期学校的通知 3-22',url:"www.baidu.com"},
					{title: '关于教育部党组第四巡视组巡视东北大学公告 3-22',url:"www.baidu.com"},
				],
		}
	}
}
</script>
<style scoped>
#container{
	width: 100%;
	height: 620px;
	background-color: #C1CDCD;
}
#name{
	margin-left: 2%;
	font-size: 2.5rem;
}
.column{
	margin: auto;
	height: 150px;
	width: 98%;
	font-size: 2rem;
	color: white;
	margin-top: 20px;
	padding-top: 50px;
	border-radius: 20px;
	background-color: #363636;
	border: solid 1px blue;
	text-indent: 3rem;
}
</style>