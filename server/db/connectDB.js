const mongoose = require('mongoose');

const connect = async (URI) => {
  await mongoose.connect(URI);
};

module.exports = connect;
