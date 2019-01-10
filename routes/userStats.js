'use strict';

const express = require('express');

const UserStat = require('../models/userStat');

const router = express.Router();

/* ========== GET USERSTAT BY ID ========== */

router.get('/', (req, res, next) => {
  const userId = req.user._id;

  UserStat.findOne({ userId })
    .then(stats => {
      res.json({
        score: stats.score,
        correct: stats.correct,
        incorrect: stats.incorrect
      });
    })
    .catch(err => {
      next(err);
    });
});

/* ========== CREATE USERSTAT ========== */

// {
//   '_id': '333333333333333333333301',
//   'correct':0, 
//   'incorrect':0,
//   'totalAnswered':0
// }

router.post('/', (req, res, next) => {
  const userId = req.user._id;
  const { correct, incorrect, score } = req.body;

  UserStat.findOne({ userId })
    .then(userStat => {
      if (userStat) {
        userStat.correct = correct;
        userStat.incorrect = incorrect;
        userStat.score = score;
        userStat.save();
        console.log(userStat);
      } else {
        return UserStat.create({ userId, correct, incorrect, score });
      }
    })
    .then(userStat => {
      res.sendStatus(204);
    });
});
module.exports = router; 