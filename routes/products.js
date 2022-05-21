var express = require('express');
var router = express.Router();
var service = require("../services/productsService")
const middleware = require("../middleware/auth")
router.post('/' ,middleware.authenticateToken, service.create);
router.get('/', middleware.authenticateToken, service.getAllProducts );
module.exports = router;
