var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res, next) { 
	var mongoose = require('mongoose');
	UserModel.find({username:req.query.username,psw:req.query.psw},(err,docs)=>{
		var result ={
			code:1
		};
		if(err ||docs.length == 0){
			result.code = -110;
			result.message = "登录失败";
		}
		res.send(JSON.stringify(result));
	});

});

module.exports = router;
