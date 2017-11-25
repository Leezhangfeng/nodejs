var express = require('express');
var router = express.Router();
var GoodsModel = require("../model/GoodsModel");
/* GET home page. */
router.get('/', function(req, res, next) {
	GoodsModel.find({},(err,docs)=>{
		if(err ||docs.length == 0){
			res.render('menu', {goodsList:[]});
		}else{
			res.render('menu', {goodsList:docs});
		}
	})
  
});

router.get('/edit', function(req, res, next) {
	GoodsModel.find({_id:req.query.id},(err,docs)=>{
		if(err ||docs.length == 0){
			res.send("商品不存在")
		}else{
			res.render('goods_edit', {data:docs[0],id:req.query.id});
		}
	})
  
});

module.exports = router;
