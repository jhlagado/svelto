const fs = require('fs').promises;
const path = require('path');
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';

const run = async() => {
  let client;
  try {
    client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db('db');
    const Customers = db.collection('customers');

    const text = await fs.readFile(path.join(__dirname, '../data/customers.json'), 'utf-8');
    const list = JSON.parse(text);
    const doc = await Customers.insertMany(list);

    console.log(doc)
  } catch(err) {
    console.error(err)
  } finally {
    client.close();
  }
};

run();
