<template>
	<div id="container">
	<n3-carousel :indicators="false">
 		<n3-slide v-for="item in top_stories">
 			<div id="image" :style="{backgroundImage: 'url('+item.image+')'}">
				<div id="title"><a :href="item.url" target="_blank">{{item.title}}</a></div>
 			</div>
 		</n3-slide>
 	</n3-carousel>
	</div>
</template>
<script>
export default{
	name: 'topStories',
	data () {
		return {
			top_stories: [
						 {title:'东大学子摘得第26届中国金鸡百花电影节标识设计一等奖',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494078031459&di=7a30cb1ade9de215e99243b3b5c390a0&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F16218%2F16217091.jpg',url: 'https://www.baidu.com'},
						 {title:'东北大学KAB俱乐部： 梦想家和行动派的完美结合',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493921340010&di=9f86200999f0acf5cd48938290bb696e&imgtype=0&src=http%3A%2F%2Fimage24.360doc.com%2FDownloadImg%2F2011%2F03%2F0214%2F9617936_2.JPG',url: 'https://www.baidu.com'},
						 {title:'东北大学师生热议总书记考察中国政法大学时的重要讲话',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494078031459&di=7a30cb1ade9de215e99243b3b5c390a0&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F16218%2F16217091.jpg',url: 'https://www.baidu.com'},
						 {title:'教育部党组书记、部长陈宝生到东北大学调研',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494078031459&di=7a30cb1ade9de215e99243b3b5c390a0&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F16218%2F16217091.jpg',url: 'https://www.baidu.com'},
						 {title:'东大学子摘得第26届中国金鸡百花电影节标识设计一等奖',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493921340010&di=9f86200999f0acf5cd48938290bb696e&imgtype=0&src=http%3A%2F%2Fimage24.360doc.com%2FDownloadImg%2F2011%2F03%2F0214%2F9617936_2.JPG',url: 'https://www.baidu.com'},
						 ]
		}
	}
}
</script>
<style scoped>
#container{
	margin-top: 150px;
	height: 400px;
	width: 100%;
	background-color: red;
}
#image{
	height: 400px;
	width: 100%;
}
#title{
	padding-left: 60px;
	text-indent: 6rem;
	padding-bottom: 40px;
	text-align: left;
	height: 400px;
	background-color: rgba(00,00,00,0.3);
}
#title a{
	position: relative;
	top: 250px;
	bottom: 20px;
	color: white;
	font-size: 3rem;
	right: 5%;
}
</style>