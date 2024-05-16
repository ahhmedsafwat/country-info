/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.URI;

let dbConnection;
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db("countryinfo");
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
