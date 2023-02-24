import main from "../../lib/mongo/mongodb"
import RecipesModel from "@/lib/mongo/schema"

export default function getRecipes (req: Request, res: Response){

    main().catch(err => console.log(err));

    const create = new RecipesModel({title:"IceScream", image:"test image", description: "test description", category: "desert"})
   create.save().then(()=>{
    res.status(200).json(create)
   })
}