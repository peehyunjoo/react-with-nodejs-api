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

exports.users = function (req, res) {
    connection.query('select * from member', function (err, rows, fields) {
        res.json(rows);
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
      }
    });
};


//module.exports = router;
