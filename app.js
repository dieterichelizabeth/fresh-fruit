// Imports
const express = require("express");
const path = require("path");
const routes = require("./routes");

// App setup
const app = express();
const PORT = process.env.PORT || 3001;

// App Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// serve the React Application wildcard route
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Start the app
app.listen(PORT, () => console.log("Now listening"));
