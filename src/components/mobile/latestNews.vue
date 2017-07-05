<template>
	<div id="container">
		<div id="name">新闻</div>
		<div id="latestNews">
			<div id="topicNews" :style="{backgroundImage: 'url('+topicNews.image+')'}">
				<div id="title">{{topicNews.title}}</div>
				<div id="description">{{topicNews.description}}</div>
			</div>
			<div class="column" v-for="item in News">
				{{item.title}}
			</div>
		</div>
	</div>
</template>
<script>
export default{
  name: 'latestNews',
  data () {
    return {
      latestNews: {
        topicNews: {
          url: 'http://www.baidu.com',image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493921340010&di=9f86200999f0acf5cd48938290bb696e&imgtype=0&src=http%3A%2F%2Fimage24.360doc.com%2FDownloadImg%2F2011%2F03%2F0214%2F9617936_2.JPG",url: "https://www.baidu.com",title: "计算机学院开展植树活动",description: "4月26日，计算机学院组织学生志愿者在浑南区廊桥社区开展植树志愿服务活动"
						},
						News:[
							{title: "计算机学院组织党校第三期培训 05-08",url: "http://www.baidu.com"},
							{title: "校计算中心荣获两项荣誉称号 05-08",url: "http://www.baidu.com"},
							{title: "计算机学院召开学风建设座谈会 05-04",url: "http://www.baidu.com"},
						]
			}
		}
	},
	computed: {
		topicNews: function(){
			return this.latestNews.topicNews
		},
		News: function(){
			return this.latestNews.News
		}
	}
}
</script>
<style scoped>
#container{
	height: 900px;
	width: 100%;
	background-color: #C1CDCD;
}
#name{
	margin-left: 2%;
	font-size: 2.5rem;
}
#latestNews{
	margin: auto;
	width: 98%;
	height: 520px;
	border: solid 1px white;
}
#topicNews{
	height: 300px;
	width: 100%;
	color: white;
	border-radius: 10px;
}
#title{
	font-size: 2.5rem;
}
#description{
	font-size: 1.5rem;
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
	text-indent: 4rem;
}
</style>