import React from 'react'
import { CompaniesCard, Root } from './CompaniesStyle'
import { Typography } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

export default function Companies() {
  return (
    <Root>
      <Fade>
        <Typography variant='h6' fontWeight={'bold'}>You will be in good Company</Typography>

        <CompaniesCard>
            <img src="/beneoshop.png" alt="shop" />
            <img src="/caspio.png" alt="shop" />
            <img src="/HyperGrid.png" alt="shop" />
            <img src="/leotrippi.png" alt="shop" />
        </CompaniesCard>
      </Fade>
    </Root>
  )
}
