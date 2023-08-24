const {sequelize,Sequelize, LoginUser}=require('./ServerAPI')

const bcrypt = require('bcrypt');
module.exports=(sequelize,Sequelize)=>{
     const LoginUser=sequelize.define(
          "LoginUser",{
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
             userName:{
                type: Sequelize.STRING(255),
                allowNull: false,
             },
             email:{
                type: Sequelize.STRING(255),
                allowNull: false,
             },
             password:{
                type: Sequelize.STRING,
                allowNull: true , 
                set(value) {
                    const hash = bcrypt.hashSync(value, 10);
                    this.setDataValue('password', hash);
                  },     
             },
             refresh_token: {
               type: Sequelize.STRING,
               allowNull: true,
           },           
          },
          
            {
               tableName: "LoginUser",
               freezeTableName: true,
            }, 
     );
     return LoginUser;
}


