let mongoose = require('mongoose')
const mongoURI = process.env.mongoURI;
const db = mongoose.connection;
mongoose.promise = Promise;

mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log('Connected to Mongoo')
});


db.on("error", (err) => console.log(err.message + "Is Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

module.exports = mongoose;