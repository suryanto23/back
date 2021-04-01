const mongoose = require("mongoose");
const { MONGODB_LIVE } = require("./environment");

mongoose.connect(MONGODB_LIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((val)=>{})

const MongoConfig = mongoose.connection;
module.exports = MongoConfig;
