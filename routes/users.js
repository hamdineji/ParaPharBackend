var express = require('express');
var router = express.Router();
var service = require("../services/usersService")
/* GET users listing. */
router.post('/',  service.signUp);
router.post('/signIn' , service.signIn);
module.exports = router;