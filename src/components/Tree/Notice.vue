<template>
	<div id="container"  
		v-loading="loading"
    	element-loading-text="拼命加载中">
		<div id="title">{{title}}</div>
    <el-card id="content">
  		<div class="column" v-for="item in showDate">
  			<div class="list"><a href="#">{{item.Title}}</a></div>
  		</div>
    </el-card>
	</div>
</template>
<script>
export default{
  name: 'Notice',
  data () {
    return {
      title: '学生',
      student: [],
      teacher: [],
      other: [],
      showDate: [],
      loading: true
    }
  },
  computed: {
    page: function () {
      console.log(this.$route.params.page)
      return this.$route.params.page
    }
  },
  watch: {
    page: function () {
      if (this.page === 'student') {
        this.title = '学生'
        this.showDate = this.student
      } else if (this.page === 'teacher') {
        this.title = '教师'
        this.showDate = this.teacher
      } else {
        this.title = '其他'
        this.showDate = this.other
      }
    }
  },
  created: function () {
    console.log('notice created')
    this.$axios({
      method: 'get',
      url: 'http://118.89.173.108:3000/api/Notice',
      timeout: '3000'})
    .then(res => {
      console.log(res.data)
      this.loading = false
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].Groups === '学生') {
          this.student.push(res.data[i])
        } else if (res.data[i].Groups === '教师') {
          this.teacher.push(res.data[i])
        } else {
          this.other.push(res.data[i])
        }
      }
      this.showDate = this.student
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
#container {
	//height: 550px;
	margin: auto;
	width: 100%;
	//background-color: red;
}
#title{
  color: black;
  font-size: 1.5rem;
  margin:30px 0 0 40px;
  width: 70%;
}
#content{
  //width: 92%;
  margin: 30px;
}
.list{
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.list:hover {
  background-color:  #EEE9E9;
}
.list a{
  margin-left: 30px;
  color: black;
}
</style>
