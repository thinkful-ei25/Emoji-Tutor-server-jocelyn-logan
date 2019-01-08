'use strict'; 

const users = [
  {
    'username':'jojosan',
    'password':'$2a$10$af0saLgnk2QbYYPYO1PMyO66ud8mHaUAdK4o/cxUsdQ7JeVAVMA8S'
  },
  {
    'username': 'samwise',
    'password': '$2a$10$LbiweBXBNRqH6hvrO5Zgl.8lnwnSD6.nGqrWUcs0LuzZ.NTwN2j4u'
  }
]; 

exports.userStats = [
  { 'userId':'',
    'correct':0,
    'incorrect':0, 
    'question':'\u{1F436}'
  }
];


const emojis = [
  {
    'emojiCode':'\u{1F436}', 
    'emojiName':'dog', 
    'currentWeight': 1
  }, 
  {
    'emojiCode':'\u{1F960}', 
    'emojiName':'fortune cookie', 
    'currentWeight':1,
  },
  {
    'emojiCode':'\u{1F997}', 
    'emojiName':'cricket', 
    'currentWeight':1, 
  }, 
  {
    'emojiCode':'\u{1F9DF}', 
    'emojiName':'zombie', 
    'currentWeight':1,
  }, 
  {
    'emojiCode':'\u{1F4A9}',
    'emojiName':'poop',
    'currentWeight':1,
  }
]; 

module.exports = {emojis, users}; 