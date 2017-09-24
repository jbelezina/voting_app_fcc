var express = require('express');
var router = express.Router();
var Poll = require('../models/Poll.js');

router.post('/', function(req,res, next) { 


  console.log(req.body);

  var poll = new Poll({
    userId: req.body.userId,
    pollingQuestion: req.body.pollingQuestion,
    answers: req.body.answers,
  })

  poll.save(function(err){
    if (err) throw err;
    console.log('a new poll added to DB');
  })

  res.json({pollId:poll.id});
})

/* GET all polls listing. */
router.get('/', function(req, res, next) {
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    Poll.find({}, function (err, polls) {
      if (err) return handleError(err);
      res.json(polls) // Space Ghost is a talk show host.
    })
})

/* DELETE poll by id */
router.delete('/:pollId', function(req, res, next) {
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    Poll.findByIdAndRemove(req.params.pollId, (err, todo) => {  
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
        if (err) return handleError(err);
        res.json({removedPollId: req.params.pollId});
    });
})
  
module.exports = router;
