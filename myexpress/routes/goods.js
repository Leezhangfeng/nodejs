var express = require('express');
var router = express.Router();
var GoodsModel = require("../model/GoodsModel");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('goods', {});
});
router.get('/create', function(req, res, next) {
  var goodsM  = new GoodsModel();
  goodsM.goodsname = req.query.goodsname;
  goodsM.price = req.query.price;
  goodsM.img_url = req.query.img_url;
  goodsM.save((err)=>{

  	if (err) {
  		res.send("商品保存失败");
  	}else{
  		res.send("商品保存成功");
  	}
  })
});

module.exports = router;
