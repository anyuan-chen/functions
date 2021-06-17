const express = require("express");
const pool = require("../db.js");

const router = express.Router();

router.post("/add", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json("Bad Request");
  }
  const file = req.files.file;
  const { title, description, user_id } = req.body;
  const fileLocation = `/users/andrewchen/code/functionsdata/${file.name}`;
  file.mv(fileLocation, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    //res.json({ fileName: file.name, filePath: `../files/${file.name}` });
  });

  const newFunction = await pool.query(
    "INSERT INTO functions (title, file_name, description, user_id) VALUES ($1, $2, $3, $4) RETURNING * ",
    [title, fileLocation, description, user_id]
  );
  res.json(newFunction.rows[0]);
});

module.exports = router;
