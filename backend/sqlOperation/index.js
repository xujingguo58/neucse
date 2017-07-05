var mysql = require('mysql')

var db = require('../db/db.js')
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


module.exports = {
	selectALL: function(sql,res){
		pool.getConnection((err,connection)=>{
			connection.query(sql,(err,result)=>{
				if (result) {
					responseJSON(res,result)
					connection.release()
				}
				else{
					console.log(err)
				}
			})
		})
	},
	insert: function(form,res){
		var sql = "INSERT INTO Alumnus SET ?"
		pool.getConnection((err,connection)=>{
			connection.query(sql,form,(err,result)=>{
				if (result) {
					responseJSON(res,result)
					connection.release()
				}
				else{
					console.log(err)
				}
			})
		})
	},
	delete: function(ID,res){
		var sql = "delete from Alumnus where ID='"+ID+"'"
		pool.getConnection((err,connection)=>{
			connection.query(sql,(err,result)=>{
				if (result) {
					responseJSON(res,result)
					connection.release()
				//callback(err,resullt)
			}
			else{
				//callback(err,result)
			}
			})
		})
	},
	update: function(ID,form,res){
		var sql = "UPDATE Alumnus SET ? where `ID`= "+ID
		pool.getConnection((err,connection)=>{
		connection.query(sql,form,(err,result)=>{
				if (result) {
					responseJSON(res,result)
					connection.release()
				}
				else{
					console.log(err)
				}
			})
	})
	}
}