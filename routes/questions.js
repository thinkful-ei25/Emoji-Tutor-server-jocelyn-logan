'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();


const list =
  [
    {
      'weight': 1,
      '_id': '222222222222222222222200',
      'emoji': {
        'emojiCode': '\u{1F436}',
        'emojiName': 'dog'
      }
    },
    {
      'weight': 1,
      '_id': '222222222222222222222201',
      'emoji': {
        'emojiCode': '\u{1F960}',
        'emojiName': 'fortune cookie',
      }
    },
    {
      'weight': 1,
      '_id': '222222222222222222222202',
      'emoji': {
        'emojiCode': '\u{1F997}',
        'emojiName': 'cricket',
      }
    },
    {
      'weight': 1,
      '_id': '222222222222222222222203',
      'emoji': {
        'emojiCode': '\u{1F9DF}',
        'emojiName': 'zombie',
      }
    },
    {
      'weight': 1,
      '_id': '222222222222222222222204',
      'emoji': {
        'emojiCode': '\u{1F4A9}',
        'emojiName': 'poop',
      }
    }
  ];

router.get('/', (req, res, next) => {
  const question = list.shift();
  list.push(question);
  res.json(question);
});

module.exports = router;