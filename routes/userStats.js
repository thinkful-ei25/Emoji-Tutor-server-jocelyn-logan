'use strict'; 

const express = require('express'); 

const UserStat = require('../models/userStat'); 

const router = express.Router(); 

/* ========== GET USERSTAT BY ID ========== */

router.get('/:id', (req, res, next) => {
  const {id} = req.params; 

  UserStat.findOne({_id: id})
    .then(stats => {
      if(stats) {
        res.json(stats); 
      }else{
        next(); 
      }
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
  const{_id, correct , incorrect, totalAnswered} = req.body; 

  UserStat.findOne({_id})
    .then(userStat => {
      if(userStat){
        userStat.correct = correct;
        userStat.incorrect = incorrect; 
        userStat.totalAnswered = totalAnswered; 
        userStat.save(); 
        console.log(userStat); 
      }else{
        return UserStat.create({_id,correct,incorrect,totalAnswered});
      }
    })
    .then(userStat => {
      res.sendStatus(204);
    });
});
module.exports = router; 