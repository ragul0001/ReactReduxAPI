const Sequelize=require("sequelize");
const sequelize=require('../Util/database');

const Cutomer=sequelize.define("customer",{
    id:{
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true,  
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})
module.exports=Cutomer;