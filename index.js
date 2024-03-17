const { connection } = require("./db");
const mongoose = require("mongoose")
const cors=require("cors")

const express=require("express");
const { userRoute } = require("./Route/UserRoute");
const { productRoute } = require("./Route/ProductRoute");
const { AdminRoute } = require("./Route/AdminRoute");
const { CartRoute } = require("./Route/CartRoute");
const { todoRoute } = require("./Route/todoRoute");

const app= express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
res.send("welcome to ecomerce-8386 backend")
})
app.use("/users",userRoute)
app.use("/admins",AdminRoute)
app.use("/products",productRoute)
app.use("/cart",CartRoute)
app.use("/todo",todoRoute)

app.use((err,req,res,next)=>{
  if(err){
    res.status(404).send({msg:"page not found"})
  }
})
 app.listen(8080,async()=>{
   try {
    await connection
    console.log("server running on port 8080");
    console.log("connected to the database");

   } catch (error) {
    console.log(error)
   }
})