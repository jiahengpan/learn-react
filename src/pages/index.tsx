// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Gallery from './qcomps/gallery_props'
// import List from './qcomps/list_keys_id'
// import RecipeList from './qcomps/recipes'

// export default function Home() {
//   return (
//     <div>

//       {/* <div className={styles.main}>
//           <Gallery />
//       </div> */}

//       {/* <div className={styles.main}>
//       <List />
//       </div> */}
      
//       <div className={styles.main}>
//       <RecipeList />
//       </div>

//     </div>
//   )
// }


import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Gallery from './qcomps/gallery_props';
import List from './qcomps/list_keys_id';
import RecipeList from './qcomps/recipes';
import BucketList from './qcomps/arrObj'; // Import the BucketList component

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Art Bucket List</title>
        <meta name="description" content="Art Bucket List App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Render the BucketList component */}
        <BucketList />

        {/* Uncomment the following sections if you want to render other components */}
        {/* <div className={styles.main}>
          <Gallery />
        </div> */}

        {/* <div className={styles.main}>
          <List />
        </div> */}

        {/* <div className={styles.main}>
          <RecipeList />
        </div> */}
      </main>
    </div>
  );
}