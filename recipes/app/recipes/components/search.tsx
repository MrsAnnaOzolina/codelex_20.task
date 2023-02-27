"use client"
import axios from "axios";
import { useRouter } from 'next/navigation';
import {useState} from "react"; 
import getData from "../../recipes/page"
import styles from '../../../app/recipes/page.module.css'

 export const SearchValueFunction = (searchValue:string) => {
    return searchValue

 }
   


function SearchRecipe() {
 const [searchValue, setSearchValue] = useState("")


    return (
       <form 
      className={styles.input}
       onSubmit={(e)=> {
        e.preventDefault();
      //   console.log(searchValue)
      //   SearchValueFunction(searchValue)
     
      //   getData({value: searchValue})
       }
       }
       >
        <label> <h5>Find your favorite recipe: </h5></label>
        <input type="text"  placeholder="search recipe" onChange={(e)=> setSearchValue(e.target.value)}/>
        <button className="hollow button warning">Search</button>
       </form>
    )
  }

  export default SearchRecipe;
