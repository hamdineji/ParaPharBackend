const db = require("../models");

function create(req, res){
    db.Product.create(req.body);
    res.status(200).send("user created");
}
async function  getAllProducts(req,res){
   const products = await db.Product.findAll();
    res.status(200).send(products);
}
module.exports= {
    create ,
    getAllProducts
}