const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;
const Pieces = require('./artmodel')

const comicSchema = new Schema ({
    description: {type:String},
    pagecount: {type: Number},
    genre: {type: String},
    url: {type: String}
},{
    options
})

const comicexport = Pieces.discriminator('comics', comicSchema)
module.exports = comicexport
