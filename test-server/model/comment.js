const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const ObjectId = Schema.ObjectId;

var comment_list = new Schema({
  id: String,
  title: String,
  body:String,
  email: String,
  postid:String
},{collection:"comment_list"});
var comment_lists = mongoose.model('comment_list', comment_list);
module.exports=comment_lists;
