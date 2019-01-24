let express = require('express');
let router = express.Router();

const staticController = require('../controllers/staticController');
// const authController = require('../controllers/authController');

router.get('/home', staticController.home);
router.get('/about', staticController.about);
// router.get('/login', staticController.login);
// router.get('/auth', staticController.auth);
// router.get('/signup', staticController.signup);
router.get('/', staticController.home);

module.exports = router;
