var express = require('express');
var request = require('request');
var router = express.Router();
var utf8 = require('utf8');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('main', {
    title: 'LOL site'
  });
});

router.post('/getdata', function (req, res, next) {

  console.log('가져옴:', req.body.searchid);

  /*
  request 모듈을 사용해서
  get 메시지를 lol 서버에 보내서
  해당 레벨을 얻어와서
  프론트페이지에 대시 리턴해주자

  */
 //https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/
 //%EB%B3%B5%EB%93%95%EC%9D%B4?
 //api_key=RGAPI-d28901ad-4a40-4e5c-9bc9-171b2b4cf9e9
  var myrequest = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/`;
  //var myid =`%EB%B3%B5%EB%93%95%EC%9D%B4`;
  var myid = utf8.encode(req.body.searchid);
  console.log("myid 잘바껴쌰?"+myid);

  var mykey=`?api_key=RGAPI-d28901ad-4a40-4e5c-9bc9-171b2b4cf9e9`;

  request(myrequest+myid+mykey, function (error, response, body) {
    console.log("아 성공했습니다");
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
    body = JSON.parse(body);
    console.log('body:', body); // Print the HTML for the Google homepage.

    return res.json({
      'searchid': req.body.searchid,
      'data': '더럽게못합니다',
      'level': body.summonerLevel,
      'name': body.name,
    });
  });  




});

module.exports = router;
