require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 3000;

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "passwordmanager";

app.use(bodyParser.json());
app.use(cors());

async function startServer() {
  try {
    await client.connect();

    console.log("MongoDB connected successfully");

    const db = client.db(dbName);
    const collection = db.collection("passwords");

    // GET all passwords
    app.get("/", async (req, res) => {
      try {
        const passwords = await collection.find({}).toArray();

        res.json(passwords);
      } catch (error) {
        res.status(500).json({
          message: "Error getting passwords",
          error: error.message,
        });
      }
    });

    // POST password
    app.post("/", async (req, res) => {
      try {
        const data = req.body;

        const result = await collection.insertOne(data);

        res.status(201).json({
          message: "Password saved successfully",
          password: {
            _id: result.insertedId,
            ...data,
          },
        });
      } catch (error) {
        res.status(500).json({
          message: "Error saving password",
          error: error.message,
        });
      }
    });

    // DELETE password
    app.delete("/:id", async (req, res) => {
      try {
        const result = await collection.deleteOne({
          _id: new ObjectId(req.params.id),
        });

        res.json({
          message: "Password deleted successfully",
          result,
        });
      } catch (error) {
        res.status(500).json({
          message: "Error deleting password",
          error: error.message,
        });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

startServer();