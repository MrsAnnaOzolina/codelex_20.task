"use client"
import axios from "axios";
import { useRouter } from 'next/navigation';
import styles from '../recipes/page.module.css'

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
        <div
        className={styles.recipedetailsDeletesbutton}
        >
        <button 
        className="button alert"
        onClick={()=>{
         deleteRecipe(id); 
         router.push('/recipes')
        }}
        >Delete recipe</button>
        </div>
    )
  }

  export default DeleteRecipe