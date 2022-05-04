const db = require("../models");
function getAllUsers(req, res){
console.log("body", req.body)
    db.User.create(req.body);
    res.status(200).send("user created");
}

module.exports= {
    getAllUsers  
}