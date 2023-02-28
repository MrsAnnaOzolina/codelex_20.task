import main from "../../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"
import type { NextApiRequest, NextApiResponse } from 'next'


export default  function getRecipes  (req: NextApiRequest, res: NextApiResponse){
     main().catch(err => console.log(err));
     RecipesModel.findOneAndUpdate({_id: req.query._id }, { $set: { description: req.body.description, title: req.body.title, category: req.body.category} })
   .then((data) => res.send(data));
   }


