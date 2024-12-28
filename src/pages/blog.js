import React from 'react';
import Hero from '@/Components/Blog/Hero/Hero';
import Types from '@/Components/Blog/Types/Types';
import Layout from '@/Components/Layout/Layout';
import Post from '@/Components/Blog/Post/Post';
import News from '@/Components/Blog/News/News';
import { Fade } from 'react-awesome-reveal';

export default function blog() {
  return (
    <Layout>
      <Fade duration={1500}>
        <Hero/>
        <Types/>
        <Post/>
        <News/>
      </Fade>
    </Layout>
  )
}
