import main from "../../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"
import type { NextApiRequest, NextApiResponse } from 'next'


export default function getRecipes(req: NextApiRequest, res: NextApiResponse) {
  main().catch(err => console.log(err));
  RecipesModel.findOneAndDelete({ _id: req.query._id })
    .then((data) => res.send(data));
}



