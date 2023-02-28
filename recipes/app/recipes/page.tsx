// "use client"
import Link from "next/link"
import styles from './page.module.css'
import Image from 'next/image';
import axios from "axios"
import { useState } from "react"

export interface OneRecipe {

    _id: string
    title: string,
    image: string,
    description: string,
    category: string,
    __v: number,
}

async function getData(): Promise<OneRecipe[]> {
    // console.log(value)
    // if (value.length === 0) {

    //     const res = await axios.get("http://localhost:3000/api/recipes");
    //     if (!res){
    //         throw new Error ("Failed to fetch data");
    //     }
    //     return res.data;
    // } else {
    const res = await axios.get("http://localhost:3000/api/recipes", {
        // params: {
        //     title: value
        // }
    });
    if (!res) {
        throw new Error("Failed to fetch data");
    }
    return res.data;
}
// }

const RecipesPage = async () => {
    // const [searchValue, setSearchValue] = useState("")
    const data = await getData();
    console.log(data)
    return (
        <div className={styles.page}>
            <h1>My  favorite recipes  </h1>
            <div>
                <form
                    style={{ margin: "50px" }}
                >
                    <label htmlFor="">Search your favorite recipe</label>
                    <input
                        type="text"
                        placeholder="search recipe"
                        // onChange={(e) => setSearchValue(e.target.value.trim())}
                    />
                    <button>Search</button>
                </form>
            </div>
            <div className={styles.allRecipes}> {data.map(({ _id, title, image, category}) => {
                return (
                    <div key={_id}>
                        <Image
                            alt={title}
                            src={image}
                            width={400}
                            height={400}
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <h4 className={styles.title}>{title}</h4>
                            <p>{category}</p>
                            <Link href={`/${_id}`} className={styles.button}>
                                <button className="hollow button secondary">Read more about recipe</button>
                            </Link>
                        </div>
                    </div>

                )
            })
            }
            </div>
            <Link href="/" >
                <button className="hollow button alert" style={{ margin: "20px" }}>Go back</button>
            </Link>
        </div>
    )
}

export default RecipesPage