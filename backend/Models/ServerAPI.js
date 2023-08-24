//Import DataBase Configurations
const  dbConfig=require("../Confi-API/db_config");
const Sequelize=require("sequelize");


const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    opertorsAliases:false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

//1.Table Connections
db.controller=require("./Controller")(sequelize,Sequelize);
//2.Table Connections
db.LoginUser = require('./SignIn')(sequelize, Sequelize);

module.exports=db;  