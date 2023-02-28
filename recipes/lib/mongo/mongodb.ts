import mongoose from "mongoose";



const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/Recipes');
  console.log("Connected to Database!")
}

export default main

