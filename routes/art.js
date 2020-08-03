const {Router} = require('express');
const router = Router()
const {index, create, destroy, indexC, indexI, indexS, updateC, updateI, updateS} = require('../controllers/artcontrollers')


router.get('/', index);
router.get('/comic', indexC)
router.get('/illust', indexI)
router.get('/sketch', indexS)
/////
router.post('/',create);
//////
router.put('/comic/:id', updateC)
router.put('/illust/:id', updateI)
router.put('/sketch/:id', updateS)
//////
router.delete('/:id', destroy)


module.exports = router;