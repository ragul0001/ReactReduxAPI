// const sequelize=require("./Util/database");
// const Customer=require("./Models/Customers");
// const Order=require("./Models/Orders");

// sequelize.sync().then((result)=>{
//      return Customer.create({name:'surya',email:'abc@gmail.com'})
// }).then(customer=>{
//      console.log("1st Customer",customer);
// })
// .catch((err)=>{
  
//     console.log(err);
// })

//API connect method

const express=require("express");
const cors=require("cors");
const apiRoute=require("./Routes/signIn")
const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: true, }));
app.use("/api",apiRoute);
app.get("/",(req,res)=>{
    res.json({message:"Welcome to the React Redux Crud using sequelize"});
})

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})
const db=require("./Models/ServerAPI")
db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.Table Created");
  });

//   const createLabData = require("./Models/ServerAPI");
//   const LabData = createLabData(db.sequelize, db.Sequelize);

//Create the Data
const LabData = require('./Models/Controller')(db.sequelize, db.Sequelize);
app.post("/getdata",(req,res)=>{
    const { LabName, Name, Role, City, Reports, Contact, Email } = req.body;
    console.log("insert data: "+req.body)
    LabData.create({
        LabName,
        Name,
        Role,
        City,
        Reports,
        Contact,
        Email,
      })
     .then((data)=>{
        res.status(201).json(data);
        console.log("Values are inserted")
     }).catch((err)=>{
        res.status(500).json({
             message:err.message || "Some error occurred while creating the lab data",
        })
     })
})
//Select the data
app.get('/showData',(req,res)=>{   
    LabData.findAll().then((data)=>{
        res.status(200).json(data);
        // console.log(data);
    })
    .catch((err)=>{
        res.status(500).json({
        message:err.message || "Some error occurred while creating the lab data",
        })
    })
})

//Delete the data
    app.delete("/delete/:id",(req,res)=>{
        const id=req.params.id;
        console.log("DElete ID :"+id);
        LabData.destroy({
            where:{id:id}
        })
        .then(() => {
            res.status(200).json({ message: "Data deleted successfully" });
        })
        .catch((err) => {
            res.status(500).json({
            message: err.message || "Some error occurred while deleting the lab data",
            });
        });
    })
//Update
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    console.log("UpdateId: " + id);
    const { LabName, Name, Role, City, Reports, Contact, Email } = req.body;
  
    LabData.update(
      { LabName, Name, Role, City, Reports, Contact, Email },
      { where: { id: id } }
    )
      .then((num) => {
        if (num == 1) {
          res.status(200).json({ message: "Data updated successfully" });
        } else {
          res.status(404).json({ message: "Data not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message ||
            "Some error occurred while updating the lab data",
        });
        res.send(err)
      });
  });
  
app.get('/particularData/:id',(req,res)=>{
    const id=req.params.id;
    console.log("Read one"+id);
    LabData.findByPk(id).then((data)=>{
        if (data) {
            res.status(200).json(data);
          } else {
            res.status(404).json({
              message: "Data not found",
            });
          }
    })
    .catch((err)=>{
        res.status(500).json({
        message:err.message || "Some error occurred while creating the lab data",
        })
    })
})