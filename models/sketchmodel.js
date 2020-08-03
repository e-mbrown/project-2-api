const mongoose = require('mongoose');
const {Schema, model}= mongoose;
const Pieces = require('./artmodel');


const sketchSchema = new Schema ({
    description: {type:String},
    medium: {type: String},
    url: {type: String}
},{
    options
});

const sketchport = Pieces.discriminator('sketches', sketchSchema)
module.exports = sketchport