const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.URI;

let dbConnection;
module.exports = {
  connectToDb: async (cb) => {
    await MongoClient.connect(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
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
