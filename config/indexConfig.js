const { MONGODB_LIVE, JWT_KEY, PORT } = require("./environment");
const MongoConfig = require("./db");

module.exports = {
  PORT,
  MONGODB_LIVE,
  JWT_KEY,
  MongoConfig,
};
