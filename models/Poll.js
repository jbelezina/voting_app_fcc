var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var pollSchema = new Schema({
        "userId": String,
        "pollingQuestion": String,
        "answers": Array,
});

var Poll = mongoose.model('poll', pollSchema);

module.exports = Poll;