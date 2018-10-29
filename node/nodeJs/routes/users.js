var express = require('express');
//var router = express.Router();
var mysql_dbc = require('./config/db_con')();
var connection = mysql_dbc.init();
var app = express();
mysql_dbc.test_open(connection);
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음
app.use(bodyParser.urlencoded({ extended: true })); // qs모듈로 쿼리스트링 파싱

/*router.get('/', function(req, res){
  var stmt = 'select * from member';
  connection.query(stmt, function (err, result){
    //console.log(result);
    //res.render("users",{data : result});
    res.send(result);
  })
});*/


exports.deleteusers = function (req, res) {

    connection.query('select * from schedule', function(err, rows, fields){
      if(err){
        console.log(err);
      } else {
        console.log("success");
        res.json(rows);
      }
    });

};
exports.users = function (req, res) {
  var activepage = req.query['activepage'];
  var itemsCountPerPage = req.query['itemsCountPerPage'];

  var activepage = parseInt(activepage);
  var itemsCountPerPage = parseInt(itemsCountPerPage);


  var start = ((activepage - 1) * itemsCountPerPage) ;
  var end = itemsCountPerPage;
  var value = { start,
                end
              }
  console.log("activePage***",activepage);
  console.log("LIMIT",value);

    connection.query('select * from schedule order by flag asc limit ? , ?', [ start , end], function(err, rows, fields){
      if(err){
        console.log(err);
      } else {
        console.log("success");
        console.log(rows);
        //res.json(rows);
        res.send(rows);
      }
    });

};



exports.insert = function (req,res) {
    var value = {'type' : req.body.type,
                'content' : req.body.content,
                'flag' : req.body.flag
                };

    var type = req.body.type;
    var content = req.body.content;
    var flag = req.body.flag;
    var query = connection.query('insert into schedule set ?', value,function(err,result){

      if(err){
        console.log(err);
      } else {
        console.log("success");
        res.send("success");
      }
    });
};

exports.update = function (req,res) {
    var value = {'idx' : req.body.idx,
                'flag' : req.body.flag
                };
    var idx = req.body.idx;
    var flag = req.body.flag;
    var query = connection.query('update schedule set ? WHERE idx = ?', [{ flag: flag}, idx], function(err,result){

      if(err){
        console.log(err);
      } else {
        console.log("success");
        res.send("success");
      }
    });
};

exports.delete = function (req,res) {
    var value = {'idx' : req.body.idx
                };
    var idx = req.body.idx;
    console.log(idx);
    var query = connection.query('delete from schedule WHERE idx = ?', idx, function(err,result){

      if(err){
        console.log(err);
      } else {
        console.log("success");
        res.send("success");
      }
    });
};

//module.exports = router;
