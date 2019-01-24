let express = require('express');
let router = express.Router();

const projectController = require('../controllers/projectController');


// router.get('/:project', projectController.getProject_Name);
router.get('/add', projectController.addProject);
router.post('/add', projectController.create);
//
// router.get('/delete/:_id', projectController.delete);
router.post('/delete/:_id', projectController.confirmDelete);
// router.post('/delete/', projectController.delete);
router.get('/edit/:_id', projectController.getProject);
router.post('/edit/', projectController.commitEdit);

router.get('/', projectController.showProjects); // Project List

// router.get('/:project', projectController.getProject); // Project Profile
// router.get('/:project/git', projectController.getGit); // Project git

module.exports = router;
