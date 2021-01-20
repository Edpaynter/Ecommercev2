require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { MONGODB_URI } = require("./config");
const userRoutes = require("./routes/user");
const contactFormRoutes = require("./routes/contactFormRoutes");
const app = express();
app.use(express.json());

// Serve public folder (front-end build folder)
// app.use(express.static(path.join("public")));

// Set CORS header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  // Allow client to set headers with Content-Type
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Register Route
app.use(contactFormRoutes);
// app.use((req, res, next) => {
//   // Handles React router--for combined app production
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

// Error Handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data; // Passing original error data
  res.status(status).json({ message: message, data: data });
});

// DB connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    const port = process.env.PORT || 8080;
    app.use(express.static(path.join(__dirname, './front-end/build')))
    // app.get('/', (req, res) => {
    //   res.sendFile(path.join(__dirname, './front-end/build', 'index.html'))
    // })
    //  app.use(express.static(__dirname + 'front-end/build'))
    //  app.use('/contact', express.static(path.join(__dirname, 'front-end/build')));
    //  app.use('/', express.static(path.join(__dirname, 'front-end/build')));
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch((err) => {
    // Handle error
    console.log(err);
  });
