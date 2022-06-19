import type { NextPage } from 'next';
import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import SideBar from '../components/SideBar';
import HomeMain from '../components/Main/HomeMain';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="Twitter" content="Twitter - Home" />
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <GlobalStyles />

      <Layout>
        <MenuBar active="Home" />
        <HomeMain />
        <SideBar />
      </Layout>
      
    </div>
  )
}

export default Home
