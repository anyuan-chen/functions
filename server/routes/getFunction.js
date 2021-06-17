const express = require("express");
const pool = require("../db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const addFile = async (value) => {
        console.log(value)
    }
    const {rows} = await pool.query(
      "SELECT f.title, f.file_name, f.description, u.user_name FROM functions f , users u  WHERE f.user_id = u.user_id ORDER BY f.user_id, f.title; "
    );
    rows.forEach(addFile)
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

module.exports = router;
