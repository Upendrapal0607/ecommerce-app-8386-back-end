const mongoose=require("mongoose");

const AppointmentSchema=mongoose.Schema({
  visit_date:String,
  visit_time: String,
  passcode:String,
  employee_name: String,
  visit_department: String,
  whome_visit:String,
  userId:String,
  isScheduled:Boolean,
},{versionKey:false})
const AppointmentModel=mongoose.model("AppointmentData",AppointmentSchema);
module.exports={
  AppointmentModel
}