

const express = require("express");
const {Op}=require('sequelize')
const router = express.Router();
//Connections of Database
const { sequelize, Sequelize } = require('../Models/ServerAPI');
const { where } = require("sequelize");
//Connections of Table
const LoginUser=require('../Models/SignIn')(sequelize,Sequelize);


router.post('/logindata',async (req,res)=>{
     const {userName,email,password}=req.body;
     const existingUser=await LoginUser.findAll({where:{
        [Op.and]:[{
            userName:{
                [Op.eq]:userName             
            },
        },
            {
                email:{
                    [Op.eq]:email  
                }
            }         
        ]       
    }});
     if(existingUser){
        res.send({message:"true"} ); 
     }
     else{
     LoginUser.create({
          userName,email,password
     }).
     then((data)=>{
        res.status(201).json(data);
        console.log("Values are inserted")
    }).catch((err)=>{
        res.status(500).json({
            message:err.message || "Some error occurred while creating the lab data",
       })
    })
   }
})

module.exports =router;