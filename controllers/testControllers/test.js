const db = require('../../routes/connections');
const Art = require('../../models/artmodel');
const illust = require('../../models/illustrationmodel');
const comics = require('../../models/comicsmodel');
const sketch = require('../../models/sketchmodel');
const data = require('../../routes/seedData.json');

const run = async () => {console.log(await Art.find({}))}

Art.insertMany(data);

run();