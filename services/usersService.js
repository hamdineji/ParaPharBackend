const db = require("../models");
const jwt = require("jsonwebtoken");
function signUp(req, res){
    db.User.create(req.body);
    res.status(200).send("user created");
}
let secret = "it's_my_secret";
async function signIn (req , res){
  try {
      console.log("thisIs a user")
    const user = await db.User.findOne({where : {email : req.body.email }})
    console.log("user" , user.password)
   console.log("reeq" , req)
    if (user && user.password == req.body.password){
        console.log("catched");
      const token =  jwt.sign({id : user.id , email : user.email }, secret, { expiresIn: '365d'}) ;
      res.json({token : token, role : "admin",user:user.id })
    }
  }  
  catch (error){
      console.log("error", error)
    res.status(500).send(error);
  }

}
async function getUser (req , res){
  try {
      console.log("thisIs a user",req.body)
    const user = await db.User.findByPk(req.params.id)
    console.log("user" , user)

    if (user){
  
      res.json({user:user })
    }
  }  
  catch (error){
      console.log("error", error)
    res.status(500).send(error);
  }

}
module.exports= {
    signUp  ,
    signIn,
    getUser
}