const db = require('../../routes/connections');
const Art = require('../../models/artmodel');
const illust = require('../../models/illustrationmodel');

let piece = {
    "name": "Welcome to tree town",
    "medium": "x2",
    "artType":"Illustration",
    "description":" Tree home",
    "url": "https://costa-rica-guide.com/wp-content/uploads/2014/12/P2270102.jpg",
    "context": "Friends of Mountain"
}

const run = async () => {console.log(await illust.find({}))}

run()
// console.log(Art.create(piece))
;