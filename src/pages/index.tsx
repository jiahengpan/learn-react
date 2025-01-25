import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <div>

      {/* <div className={styles.main}>
          <Gallery />
      </div> */}

      {/* <div className={styles.main}>
      <List />
      </div> */}
      
      <div className={styles.main}>
      <RecipeList />
      </div>

    </div>
  )
}
