const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const ObjectId = Schema.ObjectId;

var post_list = new Schema({
  id: String,
  title: String,
  body:String,
  email: String
},{collection:"post_list"});
var post_lists = mongoose.model('post_list', post_list);
module.exports=post_lists;
