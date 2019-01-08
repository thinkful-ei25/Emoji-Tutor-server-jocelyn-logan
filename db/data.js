'use strict'; 

const users = [
  { 
    '_id':'333333333333333333333301' ,
    'username':'jojosan',
    'password':'$2a$10$af0saLgnk2QbYYPYO1PMyO66ud8mHaUAdK4o/cxUsdQ7JeVAVMA8S'
  },
  {
    '_id':'333333333333333333333302',
    'username': 'samwise',
    'password': '$2a$10$LbiweBXBNRqH6hvrO5Zgl.8lnwnSD6.nGqrWUcs0LuzZ.NTwN2j4u'
  }
]; 

const userStats = [
  {
    'userId':'333333333333333333333301', 
    'stats':[
      {
        'emojiId':'222222222222222222222200', 
        'currentWeight':1, 
        'correctCount':0,
        'totalGuesses':0
      }
    ]
  },
  {
    'userId':'333333333333333333333302', 
    'stats':[
      {
        'emojiId':'222222222222222222222201', 
        'currentWeight':1, 
        'correctCount':0,
        'totalGuesses':0
      }
    ]
  }
];


const emojis = [
  {
    '_id':'222222222222222222222200',
    'emojiCode':'\u{1F436}', 
    'emojiName':'dog', 
  }, 
  {
    '_id':'222222222222222222222201',
    'emojiCode':'\u{1F960}', 
    'emojiName':'fortune cookie', 
  },
  {
    '_id':'222222222222222222222202',
    'emojiCode':'\u{1F997}', 
    'emojiName':'cricket', 
  }, 
  {
    '_id':'222222222222222222222203',
    'emojiCode':'\u{1F9DF}', 
    'emojiName':'zombie', 
  }, 
  {
    '_id':'222222222222222222222204',
    'emojiCode':'\u{1F4A9}',
    'emojiName':'poop',
  }
]; 

module.exports = {emojis, users, userStats}; 