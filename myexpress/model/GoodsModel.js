
var mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var GoodsM = new Schema({
    goodsname     : String,
    price      : Number,
    img_url  :String,
    create_date     : {type: Date, default: Date.now}
}); 

var GoodsModel = mongoose.model('goods', GoodsM);

module.exports =GoodsModel;

