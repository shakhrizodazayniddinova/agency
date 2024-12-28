import React from 'react';
import { NewsBox, NewText, Root } from './NewsStyle';
import { Typography } from '@mui/material';
import { PostNameData, UserData } from '../Post/PostStyle';
import { NewsData } from './NewsData';

export default function News() {
  return (
    <Root>
        {NewsData.map((item, index) => (
            <NewsBox key={index}>
                <img src={item.img} alt="img" />

                <NewText>
                    <Typography variant='h5' fontWeight={'bold'}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                    <Typography variant='body1' color='#424242'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .</Typography>
                </NewText>

                <UserData>
                    <img src={item.avatar} alt="avatar" />

                    <PostNameData>
                        <Typography variant='subtitle1' fontWeight={'bold'}>Name here</Typography>
                        <Typography variant='body2' color='#7B7B7B'>20.12.2020</Typography>
                    </PostNameData>
                </UserData>
            </NewsBox>
        ))}
    </Root>
  )
}
