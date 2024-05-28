const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.URI;

let dbConnection;
module.exports = {
  connectToDb: async (cb) => {
    await MongoClient.connect(uri, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })
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
