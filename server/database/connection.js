const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

async function connect() {
  const mongodb = await MongoMemoryServer.create();
  const getUri = mongodb.getUri();

  mongoose.set('strictQuery', true);
  const db = await mongoose.connect(getUri);
  console.log('Database Connection Successful');
  return db;
}

module.exports = connect;
