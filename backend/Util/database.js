const Sequelize=require('sequelize');

const sequelize=new Sequelize("ReduxDB","root","",{
        dialect:"mysql",
        host:"localhost",
     
});
sequelize.authenticate().then(()=>{
       console.log("Connections SucessFull")
}).catch((err)=>{
    console.log("Error Connecting to database")
})

module.exports=sequelize;