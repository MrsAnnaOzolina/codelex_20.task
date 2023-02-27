import main from "../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"
import type { NextApiRequest, NextApiResponse } from 'next'


type GetRecipesProps = { 
    params: {_id:string};
}

export default  function getRecipes  (req: NextApiRequest, res: NextApiResponse){
     main().catch(err => console.log(err));
    RecipesModel.create({ title: req.body.title, image: req.body.image,  description: req.body.description, category: req.body.category})
    .then((data) =>  res.status(200).json(data)
   )
}

  // const create = new RecipesModel({title:"IceScream", image:"test image", description: "test description", category: "desert"})
//    create.save().then(()=>{