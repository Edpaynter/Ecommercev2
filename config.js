require('dotenv').config()
module.exports = {
  MONGODB_URI: `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@cluster0-shard-00-00.tqmtz.mongodb.net:27017,cluster0-shard-00-01.tqmtz.mongodb.net:27017,cluster0-shard-00-02.tqmtz.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-nmsert-shard-0&authSource=admin&retryWrites=true&w=majority`
};
