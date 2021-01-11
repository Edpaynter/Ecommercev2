var express = require("express");
var mongoose = require("mongoose");
const helmet = require('helmet');
const path = require('path');
// const routes = require("./routes/config");
// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@cluster0-shard-00-00.tqmtz.mongodb.net:27017,cluster0-shard-00-01.tqmtz.mongodb.net:27017,cluster0-shard-00-02.tqmtz.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-nmsert-shard-0&authSource=admin&retryWrites=true&w=majority`,
// { useNewUrlParser: true, useFindAndModify: false},  function (err) {
//     if(err) {
//       console.log('Some problem with the connection ' + err);
//     } else {
//       console.log('The Mongoose connection is ready');
//     }
// });

const app = express()
app.use(helmet())
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 3000);

console.log("listening on port ")