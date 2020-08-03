const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;
// const sketch = require('./sketchmodel');

// const comic = require('./comicsmodel');


const artSchema = new Schema({
    name: {type: String, required: true},
    medium: {type: String}
},
{
    timestamps: true, discriminatorKey: 'artType'
}
);

module.exports = model('Piece', artSchema );