import React from 'react';
import { useRouter } from 'next/router';
import { Box, CssBaseline } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Email from '../Email/Email';
import { Root } from './LayoutStyle';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <Root>
      <CssBaseline />

      <header>
        <Header />
      </header>

      <main>
        {children}
      </main>

      <footer>
        {router.pathname !== '/contact' && <Email />}
        <Footer />
      </footer>
    </Root>
  );
}
