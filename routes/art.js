const {Router} = require('express');
const router = Router()
const {index, create, update, destroy} = require('../controllers/artcontrollers')


router.get('/', index);
router.post('/',create);
router.put('/:id', update);
router.delete('/:id', destroy)


module.exports = router;