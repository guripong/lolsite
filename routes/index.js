var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('main', {
    title: 'LOL site'
  });
});

router.post('/getdata', function (req, res, next) {

  console.log('가져옴:', req.body.searchid);

  /*
  lol rest api를 호출해서
  데이터를 얻어서
  data 부분에 넣어서
  front로 보내주면 ㅇㅋ
  */

  return res.json({
    'searchid': req.body.searchid,
    'data': '더럽게못합니다'
  });


});

module.exports = router;
