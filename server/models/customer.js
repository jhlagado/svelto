const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  ip_address: {
    type: String
  },
});

const Customer = mongoose.model('Customer', schema);

module.exports = Customer;
