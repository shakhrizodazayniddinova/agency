import React from 'react'
import { Aboutus, AboutusImgsBox, AboutusText, HeroBox, HeroImgsBox, Root, Vector1, Vector2 } from './HeroStyle'
import { Typography } from '@mui/material'

export default function Hero() {
  return (
    <Root>
        <HeroBox>
            <Vector1 src="/vector3.png" alt="vector" />
            <Vector2 src="/vector4.png" alt="vector" />

            <Aboutus>
                <AboutusImgsBox>
                    <img src="/aboutHero1.png" alt="heroImg" />
                    <img src="/aboutHero2.png" alt="heroImg" />
                </AboutusImgsBox>

                <AboutusText>
                    <Typography variant='subtitle1' color='#1090CB'>About us</Typography>
                    <Typography variant='h4' fontWeight={'bold'}>Lorem Ipsum is simply dummy text of the printing. </Typography>
                    <Typography variant='body2' color='#868686'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Typography>
                </AboutusText>
            </Aboutus>

            <HeroImgsBox>
                <img src="/aboutHero3.png" alt="heroImg" />
                <img src="/aboutHero4.png" alt="heroImg" />
            </HeroImgsBox>
        </HeroBox>
    </Root>
  )
}
