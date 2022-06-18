import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/Layout'
import IndexExplore from '../components/IndexExplore'
import IndexSignUp from '../components/IndexSignUp'
import IndexPage from '../components/IndexPage/IndexPage'


// export async function getServerSideProps(context: any) {
//   return {
//     redirect: {
//       destination: '/profile',
//       permanent: false,
//     }
//   }
// }

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/twitter.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyles />

      <IndexPage />
    </div>
  )
}

export default Home
