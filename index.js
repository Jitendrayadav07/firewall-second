const http = require("http");
const express = require("express");
const formData = require("express-form-data");
const cors = require("cors");
const os = require("os");

// Import routes
const routes = require("./routes");

const app = express();
const server = http.createServer(app); 

app.use(cors());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.union());

// Sync models with the database
const sequelizeDB = require("./config/db.config");
sequelizeDB.sequelize.sync(sequelizeDB);


// Use routes
app.use("/v2", routes);

const PORT = 4000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
