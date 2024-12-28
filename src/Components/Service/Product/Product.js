import React from 'react'
import { ProductTitle, Root } from './ProductStyle'
import { Button, Typography } from '@mui/material'

export default function Product() {
  return (
    <Root>
      <ProductTitle>
          <Typography variant='h5' fontWeight={'bold'}><span>Lorem Ipsum</span> is simply dummy text of the printing. </Typography>
          <Typography variant='body2'>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
              <br />
              <br />
              <br />
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens 
          </Typography>

          <Button variant='outlined'>
              Contact us
          </Button>
      </ProductTitle>

      <img src="/product.png" />
    </Root>
  )
}
