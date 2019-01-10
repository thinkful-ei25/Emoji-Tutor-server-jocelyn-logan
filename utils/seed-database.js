'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

const User = require('../models/user');
const Emoji = require('../models/emoji');
const UserStats = require('../models/userStat'); 

const { users, emojis, userStats} = require('../db/data');

console.log(`Connecting to mongodb at ${DATABASE_URL}`);
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.info('Deleting Data...');
    return Promise.all([
      User.deleteMany(),
      Emoji.deleteMany(), 
      UserStats.deleteMany()
    ]);
  })
  .then(() => {
    console.info('Seeding Database...');
    return Promise.all([
      User.insertMany(users),
      Emoji.insertMany(emojis), 
      UserStats.insertMany(userStats)
    ]);
  })
  .then(results => {
    console.log('Inserted', results);
    console.info('Disconnecting...');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });
