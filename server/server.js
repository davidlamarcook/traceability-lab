const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd2e3a70e955342bd94dcd607711e8b56',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`We livin on port ${port}`);
});