import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Root, FormBox, StarImg, PaiImg, EmailBox, EmailInput, SubBtn } from './EmailStyle';
import { Fade } from 'react-awesome-reveal';

export default function Email() {
  return (
    <Root>
      <StarImg src="/star.png" alt="star" />
      <PaiImg src="/pai.png" alt="pie" />

      <FormBox>
        <Typography variant='h4' fontWeight={'bold'} width={'516px'} textAlign={'center'}>
          Lorem Ipsum is simply dummy text of the printing.
        </Typography>

        <Fade>
          <EmailBox>
            <EmailInput placeholder='Enter your email' />
            <SubBtn>subscribe</SubBtn>
          </EmailBox>
        </Fade>
      </FormBox>
    </Root>
  );
}
