'use strict'; 

const express = require('express'); 

const {UserStat} = require('../models/userStat'); 

const router = express.Router(); 

router.get('/:userId', (req, res, next) => {
  const { userId } = req.params; 
  console.log('this is userId' + userId);

  UserStat.findOne({userId})
    .then(result => { 
      console.log('this is our result:'+result);
      if(result){
        res.json(result);
      }else{
        next(); 
      }
    })
    .catch(err => {
      next(err); 
    });
});



router.get('/', (req, res, next) => {

  UserStat.find() .then(results => { res.json(results); }) 
    .catch(err => { next(err); }); });


// router.put('/', (req, res, next) => {
//   let {
//     _id,
//     emojiId, 
//     currentWeight, 
//     correctCount, 
//     totalGuesses
//   } = req.body; 

//   UserStat.findOneAndUpdate({_id, 'stats.emojiId':emojiId},
//     {$set:
//       {'stats.$.currentWeight': currentWeight, 
//         'stats.$.correctCount': correctCount,
//         'stats.$.totalGuesses': totalGuesses
//       }})
//     .then(userStat => {
//       console.log(userStat);
//       userStat.save(function(err,userStat){
//         if(err)return next(err); 
//         res.status(200).json({message:'we did it lo hicimos'});
//       });
//     }).catch(err=>{
//       console.log('its an error'+ err);
//     }); 
// });





module.exports = router; 

