import React from 'react'
import { ImgBox, InfoName, InfoTheme, LabelSelectText, Root } from './InfoStyle';
import { Typography } from '@mui/material';

export default function Info({bgcolor}) {
  return (
    <Root>
      <InfoTheme>
          <ImgBox sx={{backgroundColor: bgcolor}}>
            <img src="/happy.png" alt="happy" />
          </ImgBox>

          <InfoName>
            <Typography variant='subtitle1' fontWeight={'bold'}>Lorem Ipsum is simply dummy text</Typography>
            <Typography variant='body2' color='#868686'>Lorem Ipsum is simply dummy text</Typography>
          </InfoName>
      </InfoTheme>

      <Typography variant='h5' fontWeight={'bold'} fontSize={'30px'}><LabelSelectText>Lorem Ipsum</LabelSelectText> is simply dummy text of the printing. </Typography>

      <Typography variant='body1' color='#545454' lineHeight={'170%'} mt={'10px'}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </Typography>
    </Root>
  )
}
