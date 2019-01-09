'use strict';

const express = require('express');

const Emoji = require('../models/emoji');


const router = express.Router();

router.get('/next', (req, res, next) => {
  Emoji.findOne()
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.get('/', (req, res, next) => {

  Emoji.find().sort('name').then(results => { res.json(results); })
    .catch(err => { next(err); });
});

/* =========PUT/UPDATE AN EMOJI========== */

// router.put('/:id', (req, res, next)=>{

// } 


module.exports = router;