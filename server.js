//import the modules
const express = require("express");
//create the rest object
const port = process.env.PORT || 8080;
const app = express();

//create rest services
app.get("/demo", (req, res) => {
  res.send({ message: "Welcome to Node.js" });
});

app.listen(port, () => {
  console.log(`server listening at port no. ${port}`);
});
