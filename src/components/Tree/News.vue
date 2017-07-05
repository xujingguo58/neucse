<template>
	<div id="container" 
		v-loading="loading"
    	element-loading-text="拼命加载中">
		<div v-if="ifShowTopNews">
		<div class="title" style="float:none">图片新闻</div>
		<div style="width:94%;margin:auto">
		<el-carousel :interval="2000" height="500px"  arrow="always">
		    <el-carousel-item v-for="item in topNews">
				<div class="picture" :style="{backgroundImage: 'url('+item.Pic+')'}">
					<div class="newsTitle">{{ item.Title }}</div>
				</div>
				
			</el-carousel-item>
		</el-carousel>
		</div>
		</div>
		<div v-if="ifShowLatestNews">
			<div class="title">最新动态</div>
			<div id="more"><a href="#">more>></a></div>
			 <div id="leftList" class="column" >
			 	<div id="image" :style="{backgroundImage: 'url('+topicNews.Image+')'}"></div>
			 	<div id="topic"><b>{{topicNews.Title}}</b></div>
			 	<div id="description">{{topicNews.Description}}</div>
			 </div>
			 <div id="centerList" class="column">
			 	<div class="list" v-for="item in centerNews"><a href="#" target="_blank">{{item.Title}}</a></div>
			 </div>

		</div>
	</div>
</template>
<script>
export default{
  name: 'News',
  data () {
    return {
      topNews: '',
      latestNews: '',
      ifShowTopNews: true,
      ifShowLatestNews: false,
      topicNews: '',
      centerNews: [],
      loading: true
    }
  },
  computed: {
    News: function () {
      // console.log(this.$route.params.page)
      return this.$route.params.page
    }
  },
  watch: {
    News: function () {
      if (this.News === 'topNews') {
        this.ifShowTopNews = true
        this.ifShowLatestNews = false
      } else if (this.News === 'latestNews') {
        this.ifShowTopNews = false
        this.ifShowLatestNews = true
      }
    }
  },
  created: function () {
    console.log('news created')
    this.$axios({
      method: 'get',
      url: 'http://118.89.173.108:3000/api/ImNews',
      timeout: '3000'})
    .then(response => {
      console.log(response.data)
      this.topNews = response.data
    })
    .catch(error => {
      console.log(error)
    })
    this.$axios({
      method: 'get',
      url: 'http://118.89.173.108:3000/api/latestNews',
      timeout: '3000'})
    .then(res => {
      console.log(res.data)
      this.loading = false
      this.topicNews = res.data[0]
      for (let i = 0; i < 6; i++) {
        this.centerNews.push(res.data[1][i])
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
#container{
	width: 100%;
}
.picture{
	margin-top: 20px;
	width: 100%;
	height: 500px;
	background-size: 100% 500px;

}
.newsTitle{
	font-size: 1.8rem;
	float: right;
	margin: 410px 30px 0 0;
	color: white;
}
.title{
	color: black;
	float: left;
	font-size: 1.5rem;
	margin:10px 0 0 20px;
	width: 70%;
}
.column{
	height: 500px;
	float: left;
	margin: 10px;
	width: 45%;
	color: black;
	border-radius: 10px;
	border: solid 1px #EDEDED;
}
#leftList{
	margin-left: 3%;
}
#leftList:hover{
	cursor:pointer;
}
#leftList #image{
	width: 90%;
	height: 340px;
	margin: 5% 0 0 5%; 
	background-color: gray;
	background-size: 100% 340px;
}
#leftList #topic{
	padding-left: 5%;
	font-size: 1.3rem;
}
#leftList #description{
	font-size: 1rem;
	padding-left: 5%;
	text-indent: 2rem;
}
#centerList{
	height: 500px;
}
.list{
	height: 60px;
	margin: 20px 20px 0 20px;
	border-bottom: solid 1px #CAE1FF;
	text-indent: 2rem;
}
.list a{
	color: black;
}
#more{
	float: right;
	width: 10%;
	margin: 5px 10px 0 0 ;
	font-size: 1.5rem;
}
#more a{
	color: red;
}
</style>
