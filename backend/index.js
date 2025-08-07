const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "https://itransition-task6-full.netlify.app",
  })
);

app.get("/", (req, res) => {
  res.send("This message is coming from the server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
