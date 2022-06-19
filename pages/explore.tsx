import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import ExploreMain from '../components/Main/ExploreMain'
import SideBar from '../components/SideBar'

const Explore: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="Twitter" content="Twitter - Explore" />
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <GlobalStyles />

      <Layout>
        <MenuBar active="Explore" />
        <ExploreMain />
        <SideBar />
      </Layout>
      
    </div>
  )
}

export default Explore
