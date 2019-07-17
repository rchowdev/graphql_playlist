const dotenv = require("dotenv");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();

//Allow cross origin requests
app.use(cors());

//Connect to mlab database
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

//Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
