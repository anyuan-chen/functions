const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())

//routes

//register + login
app.use("/auth" , require("./routes/jwtAuth"))

app.listen(5000, () => {
  console.log("working");
});
