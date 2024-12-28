import React from 'react';
import Layout from '@/Components/Layout/Layout';
import Service from '@/Components/Service/Hero/Hero';
import Product from '@/Components/Service/Product/Product';
import Statistics from '@/Components/Service/Statistics/Statistics';
import Projects from '@/Components/Service/Projects/Projects';
import { Fade } from 'react-awesome-reveal';

export default function service() {
  return (
    <Layout>
      <Fade duration={1500}>
        <Service/>
        <Product/>
        <Statistics/>
        <Projects/>
      </Fade>
    </Layout>
  )
}
