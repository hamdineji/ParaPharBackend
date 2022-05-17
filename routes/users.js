var express = require('express');
var router = express.Router();
var service = require("../services/usersService")
const middleware = require("../middleware/auth")
/* GET users listing. */
router.post('/' ,middleware.authenticateToken,  service.signUp);
router.post('/signIn' , service.signIn);
module.exports = router;
