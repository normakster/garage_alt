let express = require('express');
let router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/', projectController.list);
router.post('/', projectController.create);
router.get('/:_id', projectController.read);
router.put('/:_id', projectController.update);
router.post('/:_id', projectController.delete);
router.delete('/:_id', projectController.delete);
// router.get('/delete/:_id', projectController.delete);

module.exports = router;
