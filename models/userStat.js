'use strict'; 

const mongoose = require('mongoose'); 

const UserStatSchema = mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}, 
  stats:[
    {
      'emojiId':{type:mongoose.Schema.Types.ObjectId, ref:'Emoji', required: true}, 
      'currentWeight': {type:Number},
      'correctCount':{type:Number},
      'totalGuesses':{type:Number}
    }
  ]
});

UserStatSchema.set('toJSON', {
  virtuals:true, 
  transform: (doc, result) => {
    delete result._id; 
    delete result.__v; 
  }
}); 

const UserStat = mongoose.model('UserStat', UserStatSchema);

module.exports = {UserStat};