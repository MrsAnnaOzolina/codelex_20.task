"use client"
import Image from 'next/image'

import styles from './page.module.css'
import Link from "next/link"



export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my favorite recipe page </h1>
      <h6> I have gathered my favorite recipes </h6>
      <img src="https://momenti.lv/pictures/img.php?img=337/momenti-diana-veinberga-20150414-3.jpg" alt="food" style={{ maxWidth: "900px" }} />
    </main>
  )
}
