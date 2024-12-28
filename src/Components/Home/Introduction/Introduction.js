import React from 'react';
import { IntroductionChildBox, Root, Title } from './IntroductionStyle';
import { Typography } from '@mui/material';
import Info from '../Info/Info';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Introduction() {
  return (
    <Root>
        <Fade>
            <Title>
                <Typography variant='h5' fontWeight={'bold'} fontSize={'33px'}>Lorem Ipsum is simply dummy text of the printing. </Typography>
                <Typography variant='body2' color='#868686' fontSize={'18px'} width={'650px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Typography>
            </Title>
        </Fade>

        <Slide direction='left'>
            <IntroductionChildBox>
                    <Info bgcolor={'#08D3BB'}/>
                    <img src="/phone.png" alt="intro img" />
            </IntroductionChildBox>
        </Slide>

        <Slide direction='right'>
            <IntroductionChildBox>
                <img src="/mockup.png" alt="intro img" />
                <Info bgcolor={'#1090CB'}/>
            </IntroductionChildBox>
        </Slide>

        <Slide direction='left'>
            <IntroductionChildBox>
                <Info bgcolor={'#9208D3'}/>
                <img src="/focus.png" alt="intro img" />
            </IntroductionChildBox>
        </Slide>
    </Root>
  )
}
