"use client"
import axios from "axios";
import { useRouter } from 'next/navigation';


type OneRecipe = {
    _id:string
    title: string,
    image: string,
    description: string,
    category: string,
}

async function deleteRecipe(id:string): Promise<OneRecipe> {

    const res = await axios.delete(`http://localhost:3000/api/delete/${id._id}`);

    if (!res){
        throw new Error ("Failed to fetch data");
    }
    return res.data; 

}


function DeleteRecipe(id: string) {
    const router = useRouter();

    return (
        <button 
        className="submit success button"
        onClick={()=>{
         deleteRecipe(id); 
         router.push('/recipes')
        }}
        >Delete recipe</button>
    )
  }

  export default DeleteRecipe