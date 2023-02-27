// "use client"
import Link from "next/dist/client/link";
import React from "react";
import Image from 'next/image';
import axios from "axios"
import DeleteRecipe from "./delete"
import EditRecipe from './edit'

type OneRecipe = {
    _id:string
    title: string,
    image: string,
    description: string,
    category: string,
}


async function getData(_id:string): Promise<OneRecipe> {
    const res = await axios.get(`http://localhost:3000/api/${_id}`);

    if (!res){
        throw new Error ("Failed to fetch data");
    }
    return res.data; 
}


type RecipePageProps = { 
    params: {_id:string};
}
const RecipePage = async ({params}:RecipePageProps ) => { 
    // console.log(params)
    const data = await getData(params._id); 
    // const delete = await deleteRecipe(params._id)

    return (

        <div>
            <Link href="/recipes">
                <button className="submit success button" style={{margin:"20px"}}>Back</button>
            </Link>
            <br />
            <EditRecipe title={data.title} description={data.description} category={data.category} image={data.image} _id={data._id} />
            <br />
            <Image
                    alt={data.title}
                    src={data.image}
                    width={700}
                    height={700}
                     />
          
           <h1>{data.title}</h1>
           <p>{data.description}</p>
       <DeleteRecipe _id = {data._id}/>
        </div>
    )
}

export default RecipePage