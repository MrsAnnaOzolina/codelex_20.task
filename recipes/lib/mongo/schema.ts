import mongoose from "mongoose";

const { Schema } = mongoose;


const MyRecipes = new Schema({
    title: String,
    image: String,
    description: String,
    category: String,

},{collection: "MyRecipes"})
  
  const RecipesModel = mongoose.model("MyRecipes") || mongoose.model("MyRecipes",MyRecipes)

  export default RecipesModel
//   module.exports = RecipesModel
  