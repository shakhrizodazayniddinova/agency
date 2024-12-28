import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CategoryBox, CategoryTitle, IconBox, Root, ServiceCategory, ServiceTitle, SpeakerBox, TextsBox } from './HeroStyle';
import { ServiceCategoryData } from './HeroData';

export default function Service() {
  return (
    <Root>
        <ServiceTitle>
            <SpeakerBox>
                <img src="/speaker.png" alt="" />
            </SpeakerBox>

            <TextsBox>
                <Typography variant='h4'>Our <span>Services</span></Typography>
                <Typography variant='body2' color='#696969'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Typography>
            </TextsBox>
        </ServiceTitle>

        <img src="/succlen.png" />

        <ServiceCategory>
            <Grid container justifyContent={'center'} sx={{rowGap: '72px', '@media (max-width: 450px)': { rowGap: '30px' }}}>
                {ServiceCategoryData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index}>
                        <CategoryBox>
                            <IconBox sx={{bgcolor: item.bgcolor}}>
                                <img src={item.icon} alt="icon" />
                            </IconBox>
                            <CategoryTitle>
                                <Typography variant='h6'>{item.title}</Typography>
                                <Typography variant='body2' color='#797979'>{item.description}</Typography>
                            </CategoryTitle>
                        </CategoryBox>
                    </Grid>
                ))}
            </Grid>
        </ServiceCategory>
    </Root>
  )
}
