import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import SideBar from '../components/SideBar'
import NotificationsMain from '../components/Main/NotificationsMain'

const Notifications: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="Twitter" content="Twitter - Home" />
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <GlobalStyles />

      <Layout>
        <MenuBar active="Notifications" />
        <NotificationsMain />
        <SideBar />
      </Layout>
      
    </div>
  )
}

export default Notifications
