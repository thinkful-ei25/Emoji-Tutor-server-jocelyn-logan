'use strict'; 
const {emojis} = require('../db/data'); 

const emojiList = emojis.map(emoji => emoji.emojiCode);

console.log(emojiList); 
