import Link from 'next/link'
import './globals.css'
import styles from './page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header 
        className={styles.header}
        >
          <Link href="/" style={{margin:"20px", color: "black"}}>
            Home page
          </Link>
       
          <Link href="/recipes" style={{margin:"20px", color: "black"}}>
           All recipes
          </Link>
    
          <Link href="/newrecipe"  style={{margin:"20px", color: "black"}}>
          Add new recipe
          </Link>
        </header>
        {children}</body>
    </html>
  )
}
