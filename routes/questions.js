'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();


// {
//   '_id': '333333333333333333333301',
//   'username': 'jojosan',
//   'password': '$2a$10$af0saLgnk2QbYYPYO1PMyO66ud8mHaUAdK4o/cxUsdQ7JeVAVMA8S',
//   'list': [
//     {
//       'emoji': '222222222222222222222200',
//       'weight': 1, 
//       'next': 1
//     },
//     {
//       'emoji': '222222222222222222222201',
//       'weight': 1, 
//       'next': 2
//     },
//     {
//       'emoji': '222222222222222222222202',
//       'weight': 1,
//       'next': 3
//     },
//     {
//       'emoji': '222222222222222222222203',
//       'weight': 1, 
//       'next':4
//     },
//     {
//       'emoji': '222222222222222222222204',
//       'weight': 1, 
//       'next': 0
//     },
//   ],
//   'head':0
// }

router.get('/next', (req, res, next) => {
  const userId = req.user.id; 
  // list.push(question);
  // res.json(question);
  User.findOne({userId})
    .populate('emoji')
    .then(result => {
      console.log('this is result', result); 
      if(result){
        const head = result.head; 
        const nextEmoji = result.list[head]; 
        res.json(nextEmoji); 
      }else{
        next();
      }
    })
    .catch(err => {
      next(err); 
    });
});

router.post('/answer', (req, res, next) => {
  //algorithm implementation boiiii
});

module.exports = router;