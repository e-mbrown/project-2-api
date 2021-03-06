require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/art');
////
const port = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

///CORS SECURITY
const whitelist = ["http://localhost:3000/"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(
                new Error("Not allowed by CORS; origin domain needs to be added to whitelist.")
            );
        }
    },
};

//////MIDDLEWARE
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

///Route

app.use('/art', routes)
app.get("/", (req, res) => {
    res.send("If you see this then the server is working!");
  });
////listener
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});
