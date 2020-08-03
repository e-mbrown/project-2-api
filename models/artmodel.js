const mongoose = require('../routes/connections');
const {Schema, model} = mongoose;
const sketch = require('./sketchmodel');
const illust = require('./illustrationmodel');
const comic = require('./comicsmodel');




var options = {discriminatoryKey: 'type'}
const artSchema = new Schema({
    name: {type: String, required: true},
    medium: {type: String}
},
{options
},{
    timestamps: true
}
);

module.exports = model('Pieces', artSchema );