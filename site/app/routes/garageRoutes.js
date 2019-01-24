let express = require('express');
let router = express.Router();

const projectRouter = require('./projectRoutes');

router.use('/project', projectRouter);
// router.use('/', staticController.home);

module.exports = router;
