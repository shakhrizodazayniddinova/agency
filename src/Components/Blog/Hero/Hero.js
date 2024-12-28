import React from 'react'
import { NewsTitle, Root } from './HeroStyle'
import { Typography } from '@mui/material'

export default function Hero() {
  return (
    <Root>
        <NewsTitle>
            <Typography variant='h3'>Latest news <br /> <span>Updates</span></Typography>
            <Typography variant='body1' color='#777777'>Lorem Ipsum is simply dummy text of the printing .</Typography>
            <input type="text" placeholder='Search' />
        </NewsTitle>
    </Root>
  )
}
