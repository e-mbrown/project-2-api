const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;


const artSchema = new Schema({
    name: {type: String, required: true},
    type: {type: Schema.Types.ObjectId,
        ref: 'x'},
    medium: {type: String}
});

module.exports = model('pieces', artSchema );