var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

    res.json([
  {
    "pollId": 123,
    "userId": "qwe",
    "pollingQuestion": "What is your favourite color?",
    "answers": [
      {
        "answer": "Redish",
        "key": "111",
        "votes": 10
      },
      {
        "answer": "Yellow",
        "key": "432",
        "votes": 45
      },
      {
        "answer": "Green",
        "key": "222",
        "votes": 20
      },
      {
        "answer": "Blue",
        "key": "333",
        "votes": 30
      }
    ]
  },
  {
    "pollId": 234,
    "userId": "asgfqeg",
    "pollingQuestion": "What is your favourite game?",
    "answers": [
      {
        "answer": "Chess",
        "key": "112",
        "votes": 10
      },
      {
        "answer": "Marbles",
        "key": "223",
        "votes": 40
      },
      {
        "answer": "of Thrones",
        "key": "334",
        "votes": 80
      }
    ]
  }
])
    
});

module.exports = router;
