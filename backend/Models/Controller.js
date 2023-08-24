

const { sequelize, Sequelize } = require("./ServerAPI");

// module.exports=(sequelize,Sequelize)=>{
//      const labData=sequelize.define("LabData",{
//         id:{
//             type:Sequelize.INTEGER,
//             autoIncrement:true,
//             allowNull:false,
//             primaryKey:true,  
//          },
//         LabName:{
//             type:Sequelize.STRING,
//             allowNull:false,
//         },
//         Name:{
//             type:Sequelize.STRING,
//             allowNull:false,
//         },
//         Role:{
//             type:Sequelize.STRING,
//             allowNull:false,
//         },
//         City:{
//             type:Sequelize.STRING,
//             allowNull:false,
//         },
//         Reports:{
//             type:Sequelize.INTEGER,
//             allowNull:false,
//         },
//         Contact:{
//             type:Sequelize.BIGINT,
//             allowNull:false,
//         },
//         Email:{
//             type:Sequelize.STRING,
//             allowNull:false,
//         }
//      });
//      return labData;
// }
module.exports = (sequelize, Sequelize) => {
    const LabData = sequelize.define(
      "LabData",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        LabName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        Name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        Role: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        City: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        Reports: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Contact: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        Email: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        tableName: "LabData",
        freezeTableName: true,
      }
    );
  
    return LabData;
  };
