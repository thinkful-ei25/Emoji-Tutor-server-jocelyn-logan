'use strict';

const mongoose = require('mongoose');

const EmojiSchema = mongoose.Schema({
  emojiCode: { type: String, required: true, default: '' },
  emojiName: { type: String, required: true, default: '' }
});

EmojiSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
  }
});

module.exports = mongoose.model('Emoji', EmojiSchema);