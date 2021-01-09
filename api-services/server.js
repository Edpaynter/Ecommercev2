require('dotenv').config()
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  ContactForm = require('./services/contactForm/model/ContactForm'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PW}@cluster0-shard-00-00.tqmtz.mongodb.net:27017,cluster0-shard-00-01.tqmtz.mongodb.net:27017,cluster0-shard-00-02.tqmtz.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-nmsert-shard-0&authSource=admin&retryWrites=true&w=majority`,
{ useNewUrlParser: true, useFindAndModify: false},  function (err) {
    if(err) {
      console.log('Some problem with the connection ' + err);
    } else {
      console.log('The Mongoose connection is ready');
    }
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./services/contactForm/routes/contactFormRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);