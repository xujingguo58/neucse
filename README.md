# 东北大学计算机学院网站首页

 ## 项目介绍

 ​	本项目是东北大学计算机学院网站的一个非官方版本.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 技术栈

`vue.js`

`vue-router`

`axios`

`element-ui`

`express`

## 实现

### 总体实现

前端页面采用`vue`框架实现,后端采用基于`node.js`的后端框架`express`.

### 前后端的交互

采用前端分离的方式,利用`axios`发送向后端发送ajax请求,后端在收到请求后返回`json`,实现了交互过程.

例如: 前端界面要向获取新闻,需要向后端发送一个请求,利用`axios`发送

```javascript
this.$axios({
      method: 'get',  //请求方法
      url: 'http://118.89.173.108:3000/api/ImNews',  //请求url
      timeout: '3000'})          //设置超时时间为3000ms
    .then(response => {          
      console.log(response.data)
      this.topNews = response.data
    })
    .catch(error => {           //发送失败
      console.log(error)
    })
```

后端收到请求,查询数据库,以json的形式返回结果

```
app.get('/api/latestNews', function (req, res,next) {
		pool.getConnection(function(err, connection) { 
			var resResult=[]
			connection.query('select * from ImageNews',function(err,result1){
				if(result1){
					resResult=result1
				}
			})
			connection.query('select * from News',function(err,result2){
				if(result2){
				//console.log(resResult)
				resResult.push(result2)
				responseJSON(res,resResult)
				connection.release()
			}
		})

		})
	});
```

返回结果:

前端渲染:

```html
<div id="centerList" class="column">
	<div class="list" v-for="item in centerNews"><a href="#" target="_blank">{{item.Title}}</a></div>
</div>
```



### 路由

得益于`vue-router`的强大,我们可以通过它实现强大的路由功能.

#### lazy-load

由于项目含有较多组件,如果在页面首次打开时就需要加载所有组件,无疑无大大减缓加载速度,为此,引入`vue-router`的`lazy-load`功能, 由于在首页加载完成后不需要加载校友组件,所以下面以校友页面为例,说明该过程

```
export default new Router({
  routes: [
  {
      path: '/Alumnus',
      component: resolve => require(['@/components/Identity/Alumnus.vue'], resolve)
    }
  ]
})
```

#### 嵌套路由

父路由下还有子路由,路由之间存在嵌套,定义子路由如下:

```
{
	path: '/',
      name: 'Index',
      component: Index,
      redirect: '/AcademyProfile/index',
      children: [{
        path: '/AcademyProfile/:page',
        name: AcademyProfile,
        component: AcademyProfile
      }]
}
```

#### 默认路由

更改网站打开的默认路由

```
redirect: '/AcademyProfile/index',
```

#### 动态路由

```
{
        path: '/News/:page',
        component: resolve => require(['@/components/Tree/News.vue'], resolve)
}
```

通过`$route.params`传递参数,来匹配不同的路由,然后通过watch来检测变化.



### UI

这里我使用的UI组件库是有饿了么出品的`element-ui`,需要在`main.js`引入组件和样式表

```javascript
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(elementUI)
```

应用主要是左侧的树型结构和新闻页的轮播效果.

### https

由于存在登录,为了更加安全,引入了https,在Apache2中引入开启https的代码如下:

```json
 <VirtualHost *:443>
    ServerName www.neucse.cn
	SSLCertificateFile /etc/apache2/ssl/2_www.neucse.cn.crt   //ssl为存放证书的路径
	SSLCertificateKeyFile /etc/apache2/ssl/3_www.neucse.cn.key
	SSLCertificateChainFile /etc/apache2/ssl/1_root_bundle.crt
>
```

### 数据库操作

数据库选用的是`MySQL`,用express操纵数据库.

### 备案

截止到今天,备案仍然没有通过,不得不吐槽办事效率,从腾讯云开始提交信息再到提交管局,从5月20号到7月5号依旧显示备案中.

## 项目截图

### 首页

![首页](http://oq34prjoz.bkt.clouddn.com/Fn958WIrulhJ0iwSJSkxpL9qckKl)

### 新闻页

![新闻页](http://oq34prjoz.bkt.clouddn.com/Fvlfz6Uq0u3AslHoXb_o0TjIdEYp)

### 通知页

![通知页](http://oq34prjoz.bkt.clouddn.com/FvBhyyg_3sUkHP4mJ5Au_b3CCgq6)

### 校友

![校友](http://oq34prjoz.bkt.clouddn.com/FhLyojuIAkh--zppQRlvWbvk2zvf)

## 项目结构

```
.
├── Footer.vue       //底部栏
├── Identity		 //身份
│   ├── Alumnus.vue  //校友模块
│   └── Student.vue  //学生模块
├── Index.vue		 //首页
├── mobile			 //移动端 
│   ├── bottomFooter.vue   
│   ├── latestNews.vue
│   ├── majorChoice.vue
│   ├── mobileIndex.vue
│   ├── notice.vue
│   └── topStories.vue    
├── Nav.vue	          //导航栏
├── Tree              //树型结构对应的显示界面
│   ├── AcademyProfile.vue		//学院介绍
│   ├── News.vue			    //学院新闻
│   └── Notice.vue				//通知
└── Tree.vue                    //左侧树型结构

3 directories, 16 files

```





For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).?
