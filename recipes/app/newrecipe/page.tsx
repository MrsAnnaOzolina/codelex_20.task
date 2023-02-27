"use client"

import axios from "axios"
import { useRouter } from 'next/navigation';
import { useState } from "react";
import styles from '../page.module.css'



export type OneRecipe = {
    _id:string
    title: string,
    image: string,
    description: string,
    category: string,
}

async function postdata(newRecipeData:OneRecipe) {
    // : Promise<OneRecipe>
// console.log(newRecipeData.title)

    const res = await axios.post(`http://localhost:3000/api/newrecipe`,{
        title: newRecipeData.title, 
        image: newRecipeData.image,
        description: newRecipeData.description,
        category: newRecipeData.category
    });
    if (!res){
        throw new Error ("Failed to fetch data");
    }
    return res.data; 
}

 const RecipesPage = () => { 
    const [newRecipeData, setNewRecipeData] = useState<OneRecipe | {}>();
    const router = useRouter();

const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setNewRecipeData({
      ...newRecipeData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, newRecipeData: OneRecipe | any) => {
    e.preventDefault();
     const data = postdata(newRecipeData); 
     router.push('/recipes')
  };

    return (
        <div
        className={styles.addRecipe}>
            <h1>Add new recipe:</h1>
    <form 
    action=""
    onSubmit={(e) => handleSaveTodo(e, newRecipeData)}
    >
        <label htmlFor="">Add recipe title</label>
        <input 
        type="text" 
        placeholder="Recipe - title"
         id="title" 
        //  value={newRecipeData?.title}
        onChange={handleForm}/>
        <label htmlFor="">Add image </label>
        <input 
        type="text" 
        placeholder="image"
        id="image"
        onChange={handleForm}
        />
        <label htmlFor="">Add recipe and ingredients</label>
        <input 
        type="text"  
        placeholder="Recipe/ Ingredients"
        id="description"
        onChange={handleForm}
        />
          <label htmlFor="">Add category</label>
        <input 
        type="text"  
        placeholder="category"
        id="category"
        onChange={handleForm}
        />
       
        <button 
        className="hollow button alert"> Add</button>
        
        </form>            
        </div>
    )
}

export default RecipesPage