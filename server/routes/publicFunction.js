const express = require("express");

const router = express.Router();

router.get("/", async(req,res) => {

})

router.post("/", async(req,res) => {
    if (req.files === null){
        return res.status(400).json("Bad Request")
    }
    const file = req.files.file;
    file.mv(`/users/andrewchen/code/functionsdata/${file.name}`, err => {
        if (err){
            console.error(err)
            return res.status(500).send(err)
        }
        res.json({fileName: file.name, filePath : `../files/${file.name}`})
    })
})

module.exports = router;