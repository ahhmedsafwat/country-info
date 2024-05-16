/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./db");
const cors = require("cors");

require("dotenv").config();

// init app & middleware

const app = express();
app.use(express.json());
app.use(cors());

// db connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
    db = getDb();
  }
});

app.get("/countries", async (req, res) => {
  let countries = [];
  const page = req.query.p || 0;
  const bookPerPage = 10;
  try {
    const cursor = await db
      .collection("countries")
      .find()
      .skip(page * bookPerPage)
      .limit(bookPerPage);
    await cursor.forEach((country) => countries.push(country));
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ mssg: "something went wrong" });
  }
});

app.get("/countries/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("countries")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => {
        res.status(500).json({ mssg: "something went wrong" });
      });
  } else {
    res.status(500).json({ error: "not a vild doc id" });
  }
});

app.post("/countries", (req, res) => {
  const book = req.body;
  db.collection("countries")
    .insertOne(book)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(500).json({ err: "could not create a new document" });
    });
});

app.delete("/countries/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("countries")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => {
        res.status(500).json({ err: "could not fetch the document" });
      });
  } else {
    res.status(500).json({ err: "Not a vild doc id" });
  }
});

app.patch("/countries/:id", (req, res) => {
  const update = req.body;
  if (ObjectId.isValid(req.params.id)) {
    db.collection("countries")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $unset: update })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(500).json({ err: "could not update the document" });
      });
  } else {
    res.status(500).json({ err: "not a vild id" });
  }
});

module.exports = { app, db };
