const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

module.exports = (app) => {
  function readJsonFileSync(filepath) {
    let file = fs.readFileSync(filepath);
    return JSON.parse(file);
  }

  function getConfig(file) {
    let filepath = __dirname + "/" + file;
    return readJsonFileSync(filepath);
  }

  function writeJsonFileSync(data) {
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
  }

  let jsonDb = getConfig("../db/db.json");
  //   console.log(jsonDb);

  app.get("/api/notes", (req, res) => {
    res.json(jsonDb);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    jsonDb.push(newNote);
    writeJsonFileSync(jsonDb);
    res.json(jsonDb);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    console.log({ id });
    const indexToDelete = jsonDb.findIndex((note) => note.id === Number(id));
    if (!indexToDelete) {
      return res.status(404).json({ error: "No user with that id" });
    }
    const noteDeleted = jsonDb[indexToDelete];
    jsonDb.splice(indexToDelete, 1);
    writeJsonFileSync(jsonDb);
    res.json(noteDeleted);
  });
};
