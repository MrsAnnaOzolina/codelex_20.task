"use client"
import axios from "axios";
import { type } from "os";
import { useRouter } from 'next/navigation';
import { useState } from "react"

type OneRecipe = {
    _id:string
    title: string,
    image: string,
    description: string,
    category: string,
}
type EditedData = {
    _id:string
    title: string,
    description: string,
    category: string,
}
async function updateRecipe(data:EditedData ): Promise<OneRecipe> {
    const res = await axios.put(`http://localhost:3000/api/editRecipe/${data._id}`, {
        title: data.title,
        description: data.description,
        category: data.category
    });

    if (!res){
        throw new Error ("Failed to fetch data");
    }
    return res.data; 

}

function EditRecipe(title:any, description:any, category:any, _id:any ) {
    const [showEditFields, setShowEditFields] = useState(false)
    const [editedFieldsNewValues, setEditedFieldsNewValues] = useState({
        title: title.title,
    description: title.description,
    category: title.category,
    _id: title._id
    })
    const router = useRouter();
 const changeEditedInputFiels =  (e: React.FormEvent<HTMLInputElement>): void => { 
    setEditedFieldsNewValues({
        ...editedFieldsNewValues,
        [e.currentTarget.id]: e.currentTarget.value,
      });
 }

    return (
        <div>
        <button
        className="submit success button"
        onClick={()=> setShowEditFields(!showEditFields)}
        >Edit post</button>
     {showEditFields && 
       <form 
       action=""
       style={{margin:"50px"}}
       onSubmit={(e)=> {
        e.preventDefault();
       updateRecipe(editedFieldsNewValues); 
       setShowEditFields(false)
        
    }}
       >
        <label htmlFor="">Edit title</label>
        <input 
        type="text" 
        defaultValue={editedFieldsNewValues.title} 
        id="title"
        onChange={(e)=>changeEditedInputFiels(e) }
        />
        <label htmlFor="">Edit recipes description/ingredients</label>
        <input 
        type="text" 
        defaultValue={editedFieldsNewValues.description}
        // value={title.description}
        id="description"
        onChange={(e)=>changeEditedInputFiels(e) }
        />
        <label htmlFor="">Change category</label>
        <input 
        type="text" 
        defaultValue={editedFieldsNewValues.category}
        id="category"
        onChange={(e)=>changeEditedInputFiels(e) }
         />
        <button className="submit success button"> save changes</button>
       </form>
       }
       </div>
    )
  }

  export default EditRecipe