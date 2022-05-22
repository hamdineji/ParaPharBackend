const db = require("../models");

async function  create(req, res){
    const p = await db.Product.findByPk(1);
    const u = await db.User.findByPk(1);
    let object = req.body
    console.log("this is object",object );
    var products = [] 
    object.products.forEach(element => {
        for (var i=0 ; i < element.qty ; i++){
            products.push(element.id);
        }
    });
   const c= await db.Commande.create({adresse : object.commande.address ,
    phone : object.commande.phone ,
    lastName : object.commande.lastName ,
    firstName : object.commande.firstName,
    ProductId : products });
    object.products.forEach(async element=>{
        c.addProduct(element.id);
    });
    res.json({success :true})
}
async function  getAllCommandes(req,res){
   const commandes = await db.Commande.findAll();
    res.status(200).send(commandes);
}
module.exports= {
    create ,
    getAllCommandes
}