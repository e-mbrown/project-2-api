const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;

const illustr = new Schema ({
    description: {type:String},
    link: {type: String}
})

module.exports = model('Illustration', illustr)