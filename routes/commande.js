var express = require('express');
var router = express.Router();
var service = require("../services/commandeService.js")
const middleware = require("../middleware/auth")
router.post('/' , service.create);
// router.get('/', service.getAllProducts );
module.exports = router;
