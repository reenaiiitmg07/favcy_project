var express = require('express');
var router = express.Router();
var Comment=require('../model/comment');
var passport =require('passport');
const passportService = require('../services/passport');

/* GET users listing. */
const requireAuth = passport.authenticate('jwt', { session: false });
router.get('/',requireAuth, function(req, res, next) {
    Comment.find({}, function (err, docs) {
    res.send(docs);
  if(err!=null)
  console.log(err);
});
});

router.post('/', function(req, res, next) {
  var comment=new Comment(req.body);
  Comment.save(function(err) {
   if(err!=null)
  res.send({msg:"unsuccess",status:400});
  res.send({msg:"success",status:200});
  });
});
router.put('/', function(req, res, next) {
  var comment=new Comment(req.body);
  Comment.update({id:req.body.id}, {$set:{description:req.body.description}}, function (err,result) {
  res.send(result);
});
});
router.delete('/', function(req, res, next) {
    Comment.find({ id:req.body.id }).remove( function(err,result){
    res.send(result);
  });
});

module.exports = router;
