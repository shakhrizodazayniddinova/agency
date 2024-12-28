import React from 'react';
import { PostBox, PostBy, PostDetails, PostNameData, PostTitle, Root, UserData } from './PostStyle';
import { Box, Button, Typography } from '@mui/material';
import { Slide } from 'react-awesome-reveal';

export default function Post() {
  return (
    <Root>
        <PostBox>
            <Slide>
                <Box>
                    <img src="/post.png" alt="" />
                </Box>
            </Slide>

            <Slide>
                <PostDetails>
                    <PostTitle>
                        <Typography variant='h4' fontWeight={'bold'}>Lorem Ipsum is simply dummy text of the printing.</Typography>
                        <Typography variant='body2' color='#424242'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .</Typography>
                    </PostTitle>

                    <PostBy>
                        <UserData>
                            <img src="/avatar.png" alt="avatar" />

                            <PostNameData>
                                <Typography variant='subtitle1' fontWeight={'bold'}>Name here</Typography>
                                <Typography variant='body2' color='#7B7B7B'>20.12.2020</Typography>
                            </PostNameData>
                        </UserData>

                        <Button>Read More</Button>
                    </PostBy>
                </PostDetails>
            </Slide>
        </PostBox>
    </Root>
  )
}
