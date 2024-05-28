const express = require("express");
const { connectToDb, getDb } = require("./connect/db");
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

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/api/countries/", async (req, res) => {
  const { page = 0, name, region } = req.query;
  const countryPerPage = 28;
  const countries = [];

  try {
    if (region) {
      // If region is provided, search for countries by region
      const pageNum = parseInt(page, 10) || 0;

      // Fetch the total count of documents matching the region
      const totalCount = await db
        .collection("countries")
        .countDocuments({ region: region });

      // Fetch the paginated documents by region
      const cursor = db
        .collection("countries")
        .find({ region: region })
        .skip(pageNum * countryPerPage)
        .limit(countryPerPage);

      await cursor.forEach((country) => countries.push(country));

      if (countries.length > 0) {
        res.status(200).json({
          countries: countries,
          totalCount,
          currentPage: pageNum,
          totalPages: Math.ceil(totalCount / countryPerPage - 1),
        });
      } else {
        res.status(404).json({ message: "No countries found in this region" });
      }
    } else if (name) {
      try {
        // Fetch the total count of documents matching the region
        const totalCount = await db
          .collection("countries")
          .countDocuments({ name: { $regex: `^${name}`, $options: "i" } });

        const cursor = await db
          .collection("countries")
          .find({ name: { $regex: `^${name}`, $options: "i" } })
          .limit(7);
        await cursor.forEach((country) => countries.push(country));
        res.status(200).json({
          countries: countries,
          totalCount,
          currentPage: 0,
          totalPages: 0,
        });
      } catch (error) {
        res.status(404).json({ message: "No countries found in this region" });
      }
    } else {
      // If name is not provided, paginate through countries
      const pageNum = parseInt(page, 10) || 0;

      // Fetch the total count of documents
      const totalCount = await db.collection("countries").countDocuments();

      // Fetch the paginated documents
      const cursor = db.collection("countries").find();

      cursor.skip(pageNum * countryPerPage).limit(countryPerPage);

      await cursor.forEach((country) => countries.push(country));

      res.status(200).json({
        countries,
        totalCount,
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / countryPerPage - 1),
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.get("/api/country", async (req, res) => {
  const { name } = req.query;

  try {
    // If name is provided, search for a single country by name
    const country = await db.collection("countries").findOne({ name: name }); // Use findOne() to retrieve a single document

    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// app.post("/api/countries", (req, res) => {
//   const book = req.body;
//   db.collection("countries")
//     .insertOne(book)
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch(() => {
//       res.status(500).json({ err: "could not create a new document" });
//     });
// });

// app.delete("/api/countries/:id", (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection("countries")
//       .deleteOne({ _id: new ObjectId(req.params.id) })
//       .then((doc) => {
//         res.status(200).json(doc);
//       })
//       .catch(() => {
//         res.status(500).json({ err: "could not fetch the document" });
//       });
//   } else {
//     res.status(500).json({ err: "Not a vild doc id" });
//   }
// });

// app.patch("/api/countries/:id", (req, res) => {
//   const update = req.body;
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection("countries")
//       .updateOne({ _id: new ObjectId(req.params.id) }, { $unset: update })
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch(() => {
//         res.status(500).json({ err: "could not update the document" });
//       });
//   } else {
//     res.status(500).json({ err: "not a vild id" });
//   }
// });

module.exports = app;
