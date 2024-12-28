import React from 'react';
import Layout from '@/Components/Layout/Layout';
import Hero from '@/Components/Home/Hero/Hero';
import Introduction from '@/Components/Home/Introduction/Introduction';
import SayCards from '@/Components/Home/SayCards/SayCards';
import Companies from '@/Components/Home/Companies/Companies';

export default function index() {
  return (
    <Layout>
      <Hero/>
      <Introduction/>
      <SayCards/>
      <Companies/>
    </Layout>
  )
}
