require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/art');
const indexRouter = require('./routes/index');
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


///Route
app.use('/api', indexRouter)
app.use('/art', routes)

////listener
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});
