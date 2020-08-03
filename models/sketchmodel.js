const mongoose = require('mongoose');
const {Schema, model}= mongoose;
const Piece = require('./artmodel');


const sketchSchema = new Schema ({
    description: {type:String},
    url: {type: String}
});

const sketchport = Piece.discriminator('Sketch', sketchSchema)
module.exports = sketchport