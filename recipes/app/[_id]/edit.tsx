"use client"
import axios from "axios";
import { type } from "os";
import { useRouter } from 'next/navigation';
import { useState } from "react"
import styles from '../recipes/page.module.css'


type OneRecipe = {
    _id: string
    title: string,
    image: string,
    description: string,
    category: string,
}
type EditedData = {
    _id: string
    title: string,
    description: string,
    category: string,
}

async function updateRecipe(data: EditedData): Promise<OneRecipe> {
    const res = await axios.put(`http://localhost:3000/api/editRecipe/${data._id}`,{
        title: data.title,
        description: data.description,
        category: data.category
    });
    if (!res) {
        throw new Error("Failed to fetch data");
    }
    return res.data;
}


function EditRecipe(title: any, description: any, category: any, _id: any) {
    const [showEditFields, setShowEditFields] = useState(false)
    const [editedFieldsNewValues, setEditedFieldsNewValues] = useState({
        title: title.title,
        description: title.description,
        category: title.category,
        _id: title._id
    })
    const router = useRouter();
    const changeEditedInputFiels = (e: React.FormEvent<HTMLInputElement>): void => {
        setEditedFieldsNewValues({
            ...editedFieldsNewValues,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    }

    const submitChanges = (e: React.FormEvent<HTMLInputElement>):void => { 
        e.preventDefault();

        if (editedFieldsNewValues.title.length < 3 || editedFieldsNewValues.title.length > 20 ){
            alert("Name should contain atleast 3 characters and should be longer then 20 characters")
          } 
          else if (!editedFieldsNewValues.title.match(/^[A-Za-z]/)) {
            alert("Title should contain letters")
           }
           else if (editedFieldsNewValues.description.length < 50 || editedFieldsNewValues.description.length > 1000 ){
            alert("Description should contain atleast 50 characters and should be longer then 1000 characters")
          } 
          else if (editedFieldsNewValues.category.length < 5 || editedFieldsNewValues.category.length > 30 ){
            alert("Category should contain atleast 5 characters and should be longer then 30 characters")
          } 
           else {
            updateRecipe(editedFieldsNewValues);
            setShowEditFields(false)
            router.push(`${title._id}`)
           }
       
    }

    return (
        <div className={styles.recipedetailsEditButton}>
            <div>
            <button
                className="button secondary"
                onClick={() => setShowEditFields(!showEditFields)}
            >Edit post
            </button>
            </div>
            <div >
            {showEditFields &&
                <form
                className={styles.recipedetailsEditFields}
                    onSubmit={(e) => {submitChanges(e)}}
                >
                    <label>Edit title</label>
                    <input
                        type="text"
                        defaultValue={editedFieldsNewValues.title}
                        id="title"
                        onChange={(e) => changeEditedInputFiels(e)}
                    />
                    <label htmlFor="">Edit recipes description/ingredients</label>
                    <input
                        type="text"
                        defaultValue={editedFieldsNewValues.description}
                        id="description"
                        onChange={(e) => changeEditedInputFiels(e)}
                    />
                    <label htmlFor="">Change category</label>
                    <input
                        type="text"
                        defaultValue={editedFieldsNewValues.category}
                        id="category"
                        onChange={(e) => changeEditedInputFiels(e)}
                    />
                    <button
                       className="button warning"
                    >
                        save changes
                    </button>
                </form>
            }
            </div>
        </div>
    )
}

export default EditRecipe