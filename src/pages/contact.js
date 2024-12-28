import React from 'react';
import Layout from '@/Components/Layout/Layout';
import Hero from '@/Components/Contact/Hero/Hero';
import Information from '@/Components/Contact/Information/Information';
import { Fade } from 'react-awesome-reveal';

export default function contact() {
  return (
    <Layout>
      <Fade duration={1500}>
        <Hero/>
        <Information/>
      </Fade>
    </Layout>
  )
}
