import type { NextPage } from 'next';
import Head from 'next/head';

import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import ProfileMain from '../components/Main/ProfileMain';
import MenuBar from '../components/MenuBar';
import SideBar from '../components/SideBar';

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/twitter.ico" />
      </Head>

      <GlobalStyles />
      
      <Layout>
        <MenuBar active="Profile"/>
        <ProfileMain />
        <SideBar />
      </Layout>
      
    </div>
  )
}

export default Profile
