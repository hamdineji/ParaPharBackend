var express = require('express');
var router = express.Router();
var service = require("../services/usersService")
/* GET users listing. */
router.post('/' , service.getAllUsers);

module.exports = router;
