const express = require('express');
const cors = require('cors');
const app = express();
const {PORT , MongoConfig} = require('./config/indexConfig');
const localPort = PORT || 3000;
// controller
const routes = require('./routes/indexRoute');

// Bypass Public URL
app.use(cors());
// Hello Machine, we are express!
app.use(express.json());

app.get("/" , (req,res)=>{
    res.send("hello sur")
});

app.use(routes)

if (MongoConfig) {
    app.listen(PORT, () => {
      console.log("Our Port", PORT);
      console.log("Berhasil, MongoDB Active");
    });
  } else {
    console.log("Terjadi Kesalahan, MongoDB Connection Failed");
  }
