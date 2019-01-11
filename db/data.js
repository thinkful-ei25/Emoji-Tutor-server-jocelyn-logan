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
        'next': 5
      },
      {
        'emoji': '222222222222222222222205',
        'weight': 1,
        'next': 6
      },
      {
        'emoji': '222222222222222222222206',
        'weight': 1,
        'next': 7
      },
      {
        'emoji': '222222222222222222222207',
        'weight': 1,
        'next': 8
      },
      {
        'emoji': '222222222222222222222208',
        'weight': 1,
        'next': 9
      },
      {
        'emoji': '222222222222222222222209',
        'weight': 1,
        'next': 10
      },
      {
        'emoji': '222222222222222222222210',
        'weight': 1,
        'next': 11
      },
      {
        'emoji': '222222222222222222222211',
        'weight': 1,
        'next': 12
      },
      {
        'emoji': '222222222222222222222212',
        'weight': 1,
        'next': 13
      },
      {
        'emoji': '222222222222222222222213',
        'weight': 1,
        'next': 14
      },
      {
        'emoji': '222222222222222222222214',
        'weight': 1,
        'next': 15
      },
      {
        'emoji': '222222222222222222222215',
        'weight': 1,
        'next': 16
      },
      {
        'emoji': '222222222222222222222216',
        'weight': 1,
        'next': 17
      },
      {
        'emoji': '222222222222222222222217',
        'weight': 1,
        'next': 18
      },
      {
        'emoji': '222222222222222222222218',
        'weight': 1,
        'next': 19
      },
      {
        'emoji': '222222222222222222222219',
        'weight': 1,
        'next': 20
      },
      {
        'emoji': '222222222222222222222220',
        'weight': 1,
        'next': null
      }
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
        'next': 5
      },
      {
        'emoji': '222222222222222222222205',
        'weight': 1,
        'next': 6
      },
      {
        'emoji': '222222222222222222222206',
        'weight': 1,
        'next': 7
      },
      {
        'emoji': '222222222222222222222207',
        'weight': 1,
        'next': 8
      },
      {
        'emoji': '222222222222222222222208',
        'weight': 1,
        'next': 9
      },
      {
        'emoji': '222222222222222222222209',
        'weight': 1,
        'next': 10
      },
      {
        'emoji': '222222222222222222222210',
        'weight': 1,
        'next': 11
      },
      {
        'emoji': '222222222222222222222211',
        'weight': 1,
        'next': 12
      },
      {
        'emoji': '222222222222222222222212',
        'weight': 1,
        'next': 13
      },
      {
        'emoji': '222222222222222222222213',
        'weight': 1,
        'next': 14
      },
      {
        'emoji': '222222222222222222222214',
        'weight': 1,
        'next': 15
      },
      {
        'emoji': '222222222222222222222215',
        'weight': 1,
        'next': 16
      },
      {
        'emoji': '222222222222222222222216',
        'weight': 1,
        'next': 17
      },
      {
        'emoji': '222222222222222222222217',
        'weight': 1,
        'next': 18
      },
      {
        'emoji': '222222222222222222222218',
        'weight': 1,
        'next': 19
      },
      {
        'emoji': '222222222222222222222219',
        'weight': 1,
        'next': 20
      },
      {
        'emoji': '222222222222222222222220',
        'weight': 1,
        'next': null
      }
    ],
    'head': 0
  }
];

const userStats = [
  {
    '_id': '433333333333333333333301',
    'correct': 0,
    'incorrect': 0,
    'score': 0,
    'userId': '333333333333333333333301'
  },
  {
    '_id': '433333333333333333333302',
    'correct': 0,
    'incorrect': 0,
    'score': 0,
    'userId': '333333333333333333333302'
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
  },
  {
    '_id': '222222222222222222222205',
    'emojiCode': '\u{1F9DD}',
    'emojiName': 'elf',
  },
  {
    '_id': '222222222222222222222206',
    'emojiCode': '\u{1F9DB}',
    'emojiName': 'vampire',
  },
  {
    '_id': '222222222222222222222207',
    'emojiCode': '\u{1F9DE}',
    'emojiName': 'genie',
  },
  {
    '_id': '222222222222222222222208',
    'emojiCode': '\u{1F483}',
    'emojiName': 'woman dancing',
  },
  {
    '_id': '222222222222222222222209',
    'emojiCode': '\u{1F574}',
    'emojiName': 'man levitating',
  },
  {
    '_id': '222222222222222222222210',
    'emojiCode': '\u{1F939}',
    'emojiName': 'person juggling',
  },
  {
    '_id': '222222222222222222222211',
    'emojiCode': '\u{1F6C0}',
    'emojiName': 'person taking a bath',
  },
  {
    '_id': '222222222222222222222212',
    'emojiCode': '\u{1F5E3}',
    'emojiName': 'speaking head',
  },
  {
    '_id': '222222222222222222222213',
    'emojiCode': '\u{1F412}',
    'emojiName': 'monkey',
  },
  {
    '_id': '222222222222222222222214',
    'emojiCode': '\u{1F429}',
    'emojiName': 'poodle',
  },
  {
    '_id': '222222222222222222222215',
    'emojiCode': '\u{1F984}',
    'emojiName': 'unicorn',
  },
  {
    '_id': '222222222222222222222216',
    'emojiCode': '\u{1F417}',
    'emojiName': 'boar',
  },
  {
    '_id': '222222222222222222222217',
    'emojiCode': '\u{1F432}',
    'emojiName': 'dragon',
  }, 
  {
    '_id': '222222222222222222222218',
    'emojiCode': '\u{1F4E0}',
    'emojiName': 'fax machine',
  },
  {
    '_id': '222222222222222222222219',
    'emojiCode': '\u{1F4BE}',
    'emojiName': 'floppy disk',
  },
  {
    '_id': '222222222222222222222220',
    'emojiCode': '\u{1F9EE}',
    'emojiName': 'abacus',
  }
  
  

];

module.exports = { users, emojis, userStats }; 