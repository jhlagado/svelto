const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');
const Customer = require('../models/customer');

const run = async() => {

  try {

    await mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true } );
    const text = await fs.readFile(path.join(__dirname, '../db/customers.json'), 'utf-8');
    const list = JSON.parse(text);
    const doc = await Customer.insertMany(list);
    console.log(doc)
  }
  catch(err) {
    console.error(err)
  }
  finally {
    mongoose.connection.close();
  }
};

run();
