import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import BookmarksMain from '../components/Main/BookmarksMain'
import SideBar from '../components/SideBar'

const Bookmarks: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="Twitter" content="Twitter - Home" />
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <GlobalStyles />

      <Layout>
        <MenuBar active="Bookmarks" />
        <BookmarksMain />
        <SideBar />
      </Layout>
      
    </div>
  )
}

export default Bookmarks
