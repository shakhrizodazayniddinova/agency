import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Root, VectorImg1, VectorImg2, CategoryBox, LeftBox, RightBox, Span, BtnBox, CategoryIconBox, CategoryChildBox, RightImg } from './HeroStyle';
import { HeroData } from './HeroData';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
      <VectorImg1 src="/herovector.png" alt="vector" />
      <VectorImg2 src="/herovector2.png" alt="vector" />

      <Root>
        <Slide direction='left'>
          <LeftBox>
            <Typography variant='h4' fontWeight={'bold'} sx={{lineHeight: '50px'}}>Experienced <Span>mobile and web</Span> applications and website builders measuring.</Typography>
            <Typography variant='body2' color='#5C5C5C' lineHeight={'204.3%'}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </Typography>

            <BtnBox>
              <Button variant='contained' sx={{textTransform: 'none', borderRadius: '10px', bgcolor: '#1090CB', color: 'white', boxShadow: 'none', width: '193px', height: '51px', fontSize: '16px'}}>
                Contact us
              </Button>
              <Button variant='contained' sx={{textTransform: 'none', borderRadius: '10px', bgcolor: 'white', border: '1px solid #1090CB', color: '#1090CB', boxShadow: 'none', width: '193px', height: '51px', fontSize: '16px'}}>
                View more
              </Button>
            </BtnBox>
          </LeftBox>
        </Slide>

        <RightBox>
          <RightImg src="/man.png" alt="man" />
        </RightBox>
      </Root>

      <Fade>
        <CategoryBox>
          <Grid container rowGap={2}>
            {HeroData.map((item) => (
              <Grid item xs={12} md={3} sm={6}>
                <CategoryChildBox>
                  <CategoryIconBox sx={{bgcolor: item.bgcolor}}>
                    <img src={item.img} alt="img1" width={'41px'}/>
                  </CategoryIconBox>

                  <Box>
                    <Typography variant='h6'>{item.title}</Typography>
                    <Typography variant='body2' color='#969696'>Lorem Ipsum is simply</Typography>
                  </Box>
                </CategoryChildBox>
              </Grid>
            ))}
          </Grid>
        </CategoryBox>
      </Fade>
    </Box>
  );
}
