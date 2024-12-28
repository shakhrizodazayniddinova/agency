import React from 'react';
import Layout from '@/Components/Layout/Layout';
import Hero from '@/Components/About/Hero/Hero';
import AboutText from '@/Components/About/AboutText/AboutText';
import Category from '@/Components/About/Category/Category';
import Team from '@/Components/About/Team/Team';
import { Fade } from 'react-awesome-reveal';

export default function about() {
  return (
    <Layout>
      <Fade duration={1500}>
        <Hero/>
        <AboutText/>
        <Category/>
        <Team/>
      </Fade>
    </Layout>
  )
}
