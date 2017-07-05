<template>
	<div >
		<Navigation></Navigation>
		<div id="container">
			<el-menu default-active="1" theme="light" id="meau" :unique-opened="true" @open="handleOpen">
				<el-submenu index="1" >
					<template slot="title">发展动态</template>
				</el-submenu>
                <el-submenu index="2" >
					<template slot="title">杰出校友</template>
				</el-submenu>
                <el-submenu index="3" >
					<template slot="title">通知公告</template>
				</el-submenu>
                <el-submenu index="4" >
					<template slot="title">捐赠渠道</template>
				</el-submenu>
			</el-menu>	
			<div id="content">
				<div id="title_container">
					<div id="title">{{title}}</div>
					<div id="login" @click="dialogVisible = true">{{loginText}}</div>
				</div>
				<hr>
				<el-card class="cardStyle">
				<div  v-if="ifShowDevelopment">
					<div class="column">
						<div class="list" v-for="i in 4">
							<a href="#">东北大学与香港新华集团签署全面战略合作框架协议</a>
						</div>
					</div>
					<div class="column">
						<div class="list" v-for="i in 4">
							<a href="#">做“连心桥”上的一块砖——我校赴昌宁扶贫干部高大鲲的故事
</a>
						</div>
					</div>
				</div>
				<div class="image" v-if="ifShowFamousAlumni">
					<div class="column">
						<div class="left_image" :style="{backgroundImage:'url(http://upload.iceo.com.cn/2015/0324/1427157479501.jpg)'}"></div>
						<div class="description">全国政协委员，东软集团有限公司董事长、总裁.....</div>
					</div>
					<div class="column"> 
						<div class="right_image" :style="{backgroundImage:'url(http://upload.iceo.com.cn/2015/0324/1427157479501.jpg)'}"></div>
						<div class="description">全国政协委员，东软集团有限公司董事长、总裁</div>
					</div>
				</div>
				<div  v-if="ifShowNotice">
					<div class="column">
						<div class="list" v-for="i in 4">
							<a href="#">长春市常务副市长王路一行访问东北大学</a>
						</div>
					</div>
					<div class="column">
						<div class="list" v-for="i in 4">
							<a href="#">【华商晨报】东北大学今年新增机器人工程专业
</a>
						</div>
					</div>
				</div>
				<div class="image" v-if="ifShowDonateContent">
				<div class="column">
					<div class="left_image"></div>
				</div>
				<div class="column">
					<div class="right_image"></div>
				</div>
				</div>
				</el-card>
			</div>
		</div>
		<FooterMessage></FooterMessage>
		<el-dialog
		
		title="登录"
		:visible.sync="dialogVisible"
		size="tiny">
			<table v-loading.body="loading">
			<tr>
			<td class="input_tips">用户名</td>
			<td width="50%"><el-input v-model="UserName"></el-input></td>
			</tr><tr>
			<td class="input_tips">密码</td>
			<td><el-input v-model="Password" @keyup.enter="login"></el-input></td>
			</tr>	
			</table>
			<span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="login">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import Nav from '../Nav'
import Footer from '../Footer'
export default{
  name: 'Alumnuns',
  data () {
    return {
      title: '发展动态',
      content: '',
      dialogVisible: false,
      ifShowDevelopment: true,
      ifShowFamousAlumni: false,
      ifShowNotice: false,
      ifShowDonateContent: false,
      UserName: '',
      Password: '',
      UsernameFromServer: '',
      passwordFromServer: '',
      loginText: '登录',
      loading: false
    }
  },
  methods: {
    handleOpen: function (key, keypath) {
      // console.log(key)
      if (key === '1') {
        this.title = '发展动态'
        this.ifShowDevelopment = true
        this.ifShowFamousAlumni = this.ifShowNotice = this.ifShowDonateContent = false
      } else if (key === '4') {
        this.title = '捐赠渠道'
        this.ifShowDonateContent = true
        this.ifShowDevelopment = this.ifShowNotice = this.ifShowFamousAlumni = false
      } else if (key === '2') {
        this.title = '杰出校友'
        this.ifShowFamousAlumni = true
        this.ifShowDevelopment = this.ifShowNotice = this.ifShowDonateContent = false
      } else if (key === '3') {
        this.title = '通知公告'
        this.ifShowNotice = true
        this.ifShowDevelopment = this.ifShowFamousAlumni = this.ifShowDonateContent = false
      }
    },
    login: function () {
      if (this.UserName !='' && this.Password !='') {
      	this.loading = true
        // alert(this.UserName + '' + this.Password)
        this.$axios({
        	url:'http://118.89.173.108:3000/admin/Login',
        	method: 'post',
        	timeout: '3000',
        	data: {Username: this.UserName, Password: this.Password}
        })
        .then(response=>{
        	console.log(response.data)
        	this.passwordFromServer = response.data[0]['Password']
        	if(this.Password === this.passwordFromServer) {
        		this.loginText = '欢迎,'+this.UserName
        		this.loading = false
        		this.dialogVisible = false
        	}
        	else{
        		this.$alert('用户名和密码错误', '登录失败', {
        			confirmButtonText: '确定'
        		})
        		this.Password = ''
        	}
        })
        .catch(error=>{
        	this.loading = false
        	this.$message.error('连接超时')
        	console.log(error)
        })
      } else {
        this.$message({
          type: 'error',
          message: '用户名和密码不能为空'
        })
      }
    }
  },
  components: {
    Navigation: Nav,
    FooterMessage: Footer
  }
}
</script>
<style scoped>
#container{
	margin: auto;
	width: 100%;
	height: 700px;
	border-right: solid 1px #E8E8E8;
	border-bottom: solid 1px #E8E8E8;
	margin-bottom: 20px;
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
}
#title{
	font-size: 2rem;
	text-align: center;
	//float: left;
}
#login{
	float: right;
	font-size: 1.2rem;
}
#login:hover{
	cursor: pointer;
}
.input_tips{
	text-align: right;
	padding-right: 20px;
	//background-color: red;
}
table{
	border-collapse: separate;
	border-spacing: 20px;
}
hr{
	width: 70%;
}
.cardStyle{
	height: 550px;
}
.column{
	margin-left: 3%;
	float: left;
	width: 45%;
	height: 450px;
	border-radius: 10px;
	border: solid 1px #EEEEEE;
	padding: 10px;
}
.list{
	margin: 20px 30px 0 30px;
	padding-top: 10px;
	//background-color: red;
	height: 70px;
	border-radius: 5px;
}
.list:hover{
	background-color: #EEEEEE;
}
.list a{
	margin: 30px;
	font-size: 1.1rem;
	text-decoration: underline;
}
.image{
	width: 80%;
	height: 500px;
	text-align: center;
	margin:  0 auto;
	padding-top: 20px;	
}
.description{
	text-indent: 1rem;
	height: 30px;
	width: 100%;
	line-height: 30px;
}
.left_image{
	float: left;
	width: 100%;
	height: 400px;
	background-image: url(../../assets/donate.png);
	background-size: 100% 400px;
	background-repeat: no-repeat;
	background-color: white;
}
.right_image{
	float: right;
	width: 100%;
	height: 400px;
	margin-left: 5%;
	background-image: url(../../assets/donateForWechat.png);
	background-size: 100% 400px;
	background-repeat: no-repeat;
}
iframe{
	width: 100%;
	height: 100%;
}
@media screen and (min-width: 1366px){
	#container{
		width: 1359px;
	}
	#content{
		width: 1100px;
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
