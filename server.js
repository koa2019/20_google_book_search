require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3002;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// connect mongoose to Mongo db
// If deployed, use the deployed database, connect mongoose to remote mongolab database.
// Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.log("Connection worked")
}).catch ((err)=> {
    console.log("there is an err", err)
});

// all routes - API and view
app.use("/", routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
