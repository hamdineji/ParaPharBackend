const db = require("../models");

async function  create(req, res){
    const p = await db.Product.findByPk(1);
    const u = await db.User.findByPk(1);
   const c= await db.Commande.create({adresse : "this is adresse" , UserId : u.id , ProductId : [p.id] });
    // await db.CommandeProduct.create({CommandeId : c.id , ProductId : p.id});
    c.addProduct(p );
    res.status(200).send("user created");
}
async function  getAllCommandes(req,res){
   const commandes = await db.Commande.findAll();
    res.status(200).send(commandes);
}
module.exports= {
    create ,
    getAllCommandes
}