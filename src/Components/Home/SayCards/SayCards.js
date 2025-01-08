import React from 'react';
import { Card, Root } from './SayCardsStyle';
import { Button, Typography } from '@mui/material';
import CardsData from './CardsData';
import { Zoom } from 'react-awesome-reveal';

export default function SayCards() {
  return (
    <Root>
        {CardsData.map((item, index) => (
          <Zoom key={index}>
            <Card sx={{bgcolor: item.bgColor, color: item.color}}>
                <Typography variant='h5' fontWeight={"bold"} fontSize={'25px'} width={'365px'}>Lorem Ipsum is simply dummy text.</Typography>
                <Typography variant='body2' color={item.color ? item.color : '#545454'} lineHeight={'220%'}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </Typography>
                <Button sx={{width: '153px', height: '49px', borderRadius: '10px', textTransform: 'none', fontSize: '16px', bgcolor: item.btnBgColor, color: item.btnColor,}}>View More</Button>
            </Card>
          </Zoom>
        ))}
    </Root>
  )
}
