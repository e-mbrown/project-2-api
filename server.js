const express = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT

router.get('/', (req,res) => {
    res.send('Hello World')
});

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})