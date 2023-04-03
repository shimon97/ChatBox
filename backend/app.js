const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const compression = require("compression");
const HttpError = require("./models/http-error");
const cors = require("cors");
const app = express();
const messagesRoutes = require("./routes/messages-routes");
const { initializeSocketIO } = require("./socket");

app.use(bodyParser.json());
app.use(compression());

app.use(cors({ origin: "*", credentials: true }));

app.use("/api/messages", messagesRoutes);

// any other route throws error
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

// catch errors and send response of error object
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(`mongodb://localhost:27017/chat`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const server = app.listen(7000);
    initializeSocketIO(server);
    console.log("Server listening on port 7000");
  })
  .catch((err) => {
    console.log(err);
  });
