import main from "../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"
import type { NextApiRequest, NextApiResponse } from 'next'


// type GetRecipesProps = { 
//     params: {_id:string};
// }

export default  function getRecipes  (req: NextApiRequest, res: NextApiResponse){
// console.log("data",req.referrer)
     main().catch(err => console.log(err));
     RecipesModel.findOne({ _id: req.query._id }).then((data)=>{
    res.status(200).json(data)
    console.log("Yes", data)
   })
}


// TodolistModel.findByIdAndDelete(req.params.id)
// .then((data) =>  res.send(data));