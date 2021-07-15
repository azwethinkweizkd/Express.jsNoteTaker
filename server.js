const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
// const db = require("./db");

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const savedNotes = [{}];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
