const express = require("express");
const app = express();
const cors = require("cors")
const fileUpload = require("express-fileupload")


app.use(cors())
app.use(express.json())
app.use(fileUpload())

//routes

//register + login
app.use("/auth" , require("./routes/jwtAuth"))
app.use("/dashboard", require("./routes/dashboard"))
app.use("/functions", require("./routes/publicFunction"))
app.listen(5000, () => {
  console.log("working");
});
