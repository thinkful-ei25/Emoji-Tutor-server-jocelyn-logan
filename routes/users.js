'use strict';

const express = require('express');

const User = require('../models/user');
const Emoji = require('../models/emoji');

const router = express.Router();

/* ========== GET USER BY ID + GET ALL USERS ========== */


router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id })
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

  User.find().sort('name').then(results => { res.json(results); })
    .catch(err => { next(err); });
});

/* ========== CREATE USER, ATTACH LIST ========== */
router.post('/', (req, res, next) => {
  let { username, password } = req.body;

  let list = [];

  return Emoji.find()
    .then(emojis => {
      emojis.forEach(emoji => {
        list.push({
          id: emoji.id,
          weight: 1
        });
      });
      return User.hashPassword(password);
    })
    .then(digest => {
      const newUser = {
        username,
        password: digest,
        list
      };
      return User.create(newUser);
    })
    .then(result => {
      return res.status(201).location(`/api/users/${result.id}`).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The username already exists');
        err.status = 400;
      }
      next(err);
    });
});





module.exports = router;