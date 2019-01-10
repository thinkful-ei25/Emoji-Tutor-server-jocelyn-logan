'use strict'; 

const mongoose = require('mongoose'); 

const UserStatSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, 
  correct: {type: Number}, 
  totalAnswered: {type: Number}
}); 

module.exports = mongoose.model('UserStat', UserStatSchema); 