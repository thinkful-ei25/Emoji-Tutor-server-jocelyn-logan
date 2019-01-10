'use strict';

const users = [
  {
    '_id': '333333333333333333333301',
    'username': 'jojosan',
    'password': '$2a$10$af0saLgnk2QbYYPYO1PMyO66ud8mHaUAdK4o/cxUsdQ7JeVAVMA8S',
    'list': [
      {
        'emoji': '222222222222222222222200',
        'weight': 1,
        'next': 1
      },
      {
        'emoji': '222222222222222222222201',
        'weight': 1,
        'next': 2
      },
      {
        'emoji': '222222222222222222222202',
        'weight': 1,
        'next': 3
      },
      {
        'emoji': '222222222222222222222203',
        'weight': 1,
        'next': 4
      },
      {
        'emoji': '222222222222222222222204',
        'weight': 1,
        'next': null
      },
    ],
    'head': 0
  },
  {
    '_id': '333333333333333333333302',
    'username': 'samwise',
    'password': '$2a$10$LbiweBXBNRqH6hvrO5Zgl.8lnwnSD6.nGqrWUcs0LuzZ.NTwN2j4u',
    'list': [
      {
        'emoji': '222222222222222222222200',
        'weight': 1,
        'next': 1
      },
      {
        'emoji': '222222222222222222222201',
        'weight': 1,
        'next': 2
      },
      {
        'emoji': '222222222222222222222202',
        'weight': 1,
        'next': 3
      },
      {
        'emoji': '222222222222222222222203',
        'weight': 1,
        'next': 4
      },
      {
        'emoji': '222222222222222222222204',
        'weight': 1,
        'next': null
      },
    ],
    'head': 0
  }
];

const userStats = [
  {
    '_id': '333333333333333333333301',
    'correct':0, 
    'totalAnswered':0
  }, 
  {
    '_id': '333333333333333333333302',
    'correct': 0, 
    'totalAnswered':0
  }
]; 

const emojis = [
  {
    '_id': '222222222222222222222200',
    'emojiCode': '\u{1F436}',
    'emojiName': 'dog',
  },
  {
    '_id': '222222222222222222222201',
    'emojiCode': '\u{1F960}',
    'emojiName': 'fortune cookie',
  },
  {
    '_id': '222222222222222222222202',
    'emojiCode': '\u{1F997}',
    'emojiName': 'cricket',
  },
  {
    '_id': '222222222222222222222203',
    'emojiCode': '\u{1F9DF}',
    'emojiName': 'zombie',
  },
  {
    '_id': '222222222222222222222204',
    'emojiCode': '\u{1F4A9}',
    'emojiName': 'poop',
  }
];

module.exports = { users, emojis }; 