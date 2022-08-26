const mongoose = require('mongoose');
// const errorHandlerLogger = require('../logging/errorHandler');

const dbc = {};

function handleError(err) {
  console.log('Error: ', err);
  errorHandlerLogger.error(err);
}

// Create mongoose db connection
dbc.mongo_connect = () => {
  // const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  const mongoURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

  try {
    // mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log(`Ehrekonto: connected to MongoDB at ${process.env.DB_HOST}`);
  } catch (error) {
    // handleError(error);
    console.error(error);
  }
}

module.exports = dbc;