
const express = require("express");
const { AppointmentModel } = require("../Model/Appointment");

// const { AppointmentModel } = require("../Model/Todo.model");

const AppointmentRoute = express.Router();

AppointmentRoute.get("/", async (req, res) => {
    try {
        const appointmentData = await AppointmentModel.find()
        res.status(200).json({
            appointmentData
        });
      } 
    
   catch (error) {
    res.status(404).send({ message: error });
  }
});

// AdminAuth
AppointmentRoute.post("/add", async (req, res) => {
  const addedAppointment = req.body;
  // console.log(addedProduct);
  try {
    const addedappointment = new AppointmentModel(addedAppointment);
    await addedappointment.save();
    res.status(200).send({ message: "New appointment added successfully" });
  } catch (error) {
    res.status(200).send(error);
  }
});

AppointmentRoute.patch("/update/:appointmentId", async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const Post = await AppointmentModel.findOne({ _id: appointmentId });
 if(Post){
    await AppointmentModel.findByIdAndUpdate({ _id: appointmentId }, req.body);
    res
      .status(200)
      .send({ message: `meet ${appointmentId} updated successfully` });
 }
 else{
    res.status(404).send({ message: "appointment not fount", error});
 }
  }
   catch (error) {
    res.status(404).send({ message: "errror" });
  }
});
AppointmentRoute.delete("/delete/:appointmentId",  async (req, res) => {
  try {
    const { appointmentId } = req.params;
    let todo = await AppointmentModel.findByIdAndDelete({ _id: appointmentId });
    if(todo){

    
    res
      .status(200)
      .send({ message: `todo ${appointmentId} deleted successfully` });
    }
    else{
        res.status(404).send({ message: "appointment not fount", error});
    }
  }
   catch (error) {
    res.status(404).send({ message: "errror" });
  }
});

module.exports = {
  AppointmentRoute
};
