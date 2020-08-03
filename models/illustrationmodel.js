const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;
const Pieces = require('./artmodel')


const illustrSchema = new Schema ({
    description: {type:String},
    url: {type: String},
    context: {type:String}
},{
    options
})

const illustrexport = Pieces.discriminator('illustrations', illustrSchema)
module.exports = illustrexport