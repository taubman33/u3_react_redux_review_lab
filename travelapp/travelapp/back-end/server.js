const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");
const logger = require("morgan");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send();
});

app.use("/api", routes);

app.listen(PORT, () => console.log(`TRAVEL APP Listening on port: ${PORT}`));
