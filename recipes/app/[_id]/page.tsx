// "use client"
import Link from "next/dist/client/link";
import React from "react";
import Image from 'next/image';
import axios from "axios"
import DeleteRecipe from "./delete"
import EditRecipe from './edit'
import styles from '../recipes/page.module.css'

type OneRecipe = {
    _id: string
    title: string,
    image: string,
    description: string,
    category: string,
}

async function getData(_id: string): Promise<OneRecipe> {
    const res = await axios.get(`http://localhost:3000/api/${_id}`);
    if (!res) {
        throw new Error("Failed to fetch data");
    }
    return res.data;
}

type RecipePageProps = {
    params: { _id: string };
}

const RecipePage = async ({ params }: RecipePageProps) => {
    const data = await getData(params._id);

    return (
        <div className={styles.recipedetailsContainer}>
        <div className={styles.recipedetails}>
            <div
            className={styles.recipedetailsBackButton}
            >
            <Link href="/recipes">
                <button className="hollow button secondary">Back</button>
            </Link>
            </div>
            <EditRecipe title={data.title} description={data.description} category={data.category} image={data.image} _id={data._id} />
            <Image
        className={styles.recipedetailsImage}
                alt={data.title}
                src={data.image}
                width={700}
                height={700}
            />
            <h1>{data.title}</h1>
            <p className={styles.recipedetailsDescription}>{data.description}</p>
            <DeleteRecipe id={data._id}  />
        </div>
        </div>
    )
}

export default RecipePage