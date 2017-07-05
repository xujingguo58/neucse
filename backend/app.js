var express = require('express');
var app = express();
var mysql = require('mysql')
var sqlOperation = require('./sqlOperation/index.js')
//cros
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});


var bodyParse = require('body-parser')
	//var multer = require('multer')
	app.use(bodyParse.json())
	app.use(bodyParse.urlencoded({
		extended: true
	}))

var db = require('./db/db.js')
// 使用db.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( db.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
	if(typeof ret === 'undefined') { 
		res.json({     code:'-200',     msg: '操作失败'   
	}); 
	} else { 
		res.json(ret); 
	}};



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
//important news
app.get('/api/ImNews',function(req,res,next){
	pool.getConnection(function(err,connection){
		var resResult = []
		connection.query('select * from ImNews',function(err,result){
			if (result) {
				responseJSON(res,result)
				connection.release()
			}
		})
	})
})

//notice
app.get('/api/Notice',function(req,res,next){
	pool.getConnection(function(err,connection){
		var resResult = []
		connection.query('select * from Notice',function(err,result){
			if (result) {
				responseJSON(res,result)
				connection.release()
			}
		})
	})
})

app.get('/admin/Notice',function(req,res,next){
	pool.getConnection(function(err,connection){
		var resResult = []
		connection.query('select * from Notice',function(err,result){
			if (result) {
				responseJSON(res,result)
				connection.release()
			}
		})
	})
})


app.post('/admin/Login',function(req,res,next){
	var Username = req.body.Username
	var sql = "select Password from Admin where Username='"+Username+"'"
	sqlOperation.selectALL(sql,res)
})

app.get('/admin/Alumnus/select',(req,res,next)=>{
	var sql = "select * from Alumnus"
	sqlOperation.selectALL(sql,res)
})
app.post('/admin/Alumnus/delete',(req,res,next)=>{
	var ID = req.body.ID
	sqlOperation.delete(ID,res)
})
app.post('/admin/Alumnus/insert',(req,res,next)=>{
	var form = req.body
	sqlOperation.insert(form,res)
})
app.post('/admin/Alumnus/update',(req,res,next)=>{
	var form = req.body
	var ID = req.body.ID
	sqlOperation.update(ID,form,res)
})

app.get('/admin/ImNews/select', (req, res, next) => {
	var sql = 'select * from ImNews'
	sqlOperation.selectALL(sql, res)
})

app.get('/admin/latestNews/select', (req, res, next) => {
	var sql = 'select * from News'
	sqlOperation.selectALL(sql, res)
})
app.get('/admin/Notice/select', (req, res, next) => {
	var sql = 'select * from Notice'
	sqlOperation.selectALL(sql, res)
})
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});