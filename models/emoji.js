'use strict'; 

const mongoose = require('mongoose'); 

const EmojiSchema = mongoose.Schema({
  emojiCode: {type: String, required: true},
  emojiName:{type: String},
  currentWeight:{type: Number}
});

EmojiSchema.set('toJSON', {
  virtuals: true, 
  transform: (doc, result) => {
    delete result._id; 
    delete result.__v; 
  }
}); 

const Emoji = mongoose.model('Emoji', EmojiSchema); 
module.exports = {Emoji};