import React from 'react'
import { Categories, CategoryBox, CategoryInfo, IconBox, Root } from './CategoryStyle'
import { Button, Grid, Typography } from '@mui/material'
import { CategoryData } from './CategoryData'
import { Fade, Slide } from 'react-awesome-reveal'

export default function Category() {
  return (
    <Root>
        <CategoryInfo>
            <span></span>

            <Typography variant='h6' fontWeight={'bold'}>Lorem Ipsum is simply dummy text of the printing. </Typography>
            <Typography variant='body2' color='#585858'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</Typography>
            <Button variant='outlined'>Contact Us</Button>
        </CategoryInfo>

        <Slide direction='right'>
          <Categories>
            <Grid container sx={{justifyContent: 'flex-end', '@media (max-width: 450px)': { rowGap: 2 }}} rowGap={6} columnGap={5}>
              {CategoryData.map((item, index) => (
                <Grid key={index} item xs={12} sm={8} md={5} minWidth={'280px'}>
                  <CategoryBox>
                    <IconBox sx={{bgcolor: item.bgcolor}}>
                      <img src={item.icon} />
                    </IconBox>
                    <Typography variant='h6'>{item.title}</Typography>
                  </CategoryBox>
                </Grid>
              ))}
            </Grid>
          </Categories>
        </Slide>
    </Root>
  )
}
