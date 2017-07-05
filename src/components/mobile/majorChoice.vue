<template>
	<div id="container">
		<div id="major">专业动态</div>
		<div class="column">
			<p>本科专业</p>
			<div class="title" v-for="item in undergraduate">{{item.title}}</div>
		</div>
		<div class="column">
			<p>研究所</p>
			<div class="title" v-for="item in graduate">{{item.title}}</div>
		</div>
		<div class="column">
			<p>研究方向</p>
			<div class="title" v-for="item in researchDirection">{{item.title}}</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'majorChoice',
	data () {
		return {
			education: {
				undergraduate: [
					{title: '计算机科学与技术',url:"http://www.baidu.com"},
					{title: '物联网工程',url:"http://www.baidu.com"},
				],
				graduate: [
					{title: "计算机系统研究所",url: "http://www.baidu.com"},
					{title: "计算机软件与理论研究所",url: "http://www.baidu.com"},
				],
				researchDirection:[
					{title: "研究方向",url: "http://www.baidu.com"},
					{title: "在研项目",url: "http://www.baidu.com"},
				]
			}
		}
	},
	computed: {
		undergraduate: function(){
			return this.education.undergraduate
		},
		graduate: function(){
			return this.education.graduate
		},
		researchDirection: function(){
			return this.education.researchDirection
		}
	}
}
</script>
<style scoped>
#container{
	height: 700px;
	width: 100%;
	margin: auto;
	//margin-top: 20px;
	background-color: #C1CDCD;
}
#major{
	margin-left: 2%;
	font-size: 2.5rem;
}
.column{
	margin: auto;
	height: 200px;
	width: 98%;
	margin-top: 10px;
	border-radius: 20px;
	background-color: #363636;
	border: solid 1px blue;
}
.column p{
	font-size: 2rem;
	margin-left: 20px;
	padding-top: 20px;
	text-decoration: underline;
	color: #8B6508;
}
.title{
	text-indent: 4rem;
	font-size: 2rem;
	padding: 10px;
	color: white;
}
</style>
