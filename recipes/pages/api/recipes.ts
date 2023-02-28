import main from "../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"
import type { NextApiRequest, NextApiResponse } from 'next'
import { runInNewContext } from "vm";


export default function getRecipes(req: NextApiRequest, res: NextApiResponse) {
    console.log("my Data", req.query.title?.length)
    if (req.query.title?.length !== 0) {
        main().catch(err => console.log(err));
        RecipesModel.find({ title: { $regex: `/${req.query.title}/` } }).then((data) => {
            res.status(200).json(data)
        })
    }
    RecipesModel.find().then((data) => {
        res.status(200).json(data)
    })

}