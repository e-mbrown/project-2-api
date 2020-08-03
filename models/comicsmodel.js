const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;
const Pieces = require('./artmodel')

const comicSchema = new Schema ({
    description: {type:String},
    page: {type: Number},
    genre: {type: String},
    url: {type: String}
})

const comicexport = Pieces.discriminator('Comic', comicSchema)
module.exports = comicexport
