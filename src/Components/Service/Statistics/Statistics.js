import React from 'react';
import { Root, StatisBox } from './StatisticsStyle';
import { Grid, Typography } from '@mui/material';
import { StatisData } from './StatisData';

export default function Statistics() {
  return (
    <Root>
        <img src="/bell.png" alt="bell" className='bell' />

        <Grid container sx={{'@media (max-width: 450px)': { rowGap: '30px' }}}>
            {StatisData.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <StatisBox>
                        <Typography variant='h2' fontWeight={'bold'}>{item.count}</Typography>
                        <Typography variant='body2'>{item.statisName}</Typography>
                    </StatisBox>
                </Grid>
            ))}
        </Grid>

        <img src="/succlent2.png" alt="succlent" className='succlent' />
    </Root>
  )
}
