import React from 'react';
import { Typography } from '@mui/material';
import Carousel from "react-material-ui-carousel";
import { Root, TeamCard, TeamCardBox } from './TeamStyle';
import { teamMembers } from './TeamData';

function groupMembers(members, groupsize){
    const groupped = [];

    for (let i = 0; i < members.length; i+= groupsize) {
        groupped.push(members.slice(i, i + groupsize));
    }
    return groupped;
}

export default function Team() {
  const groupedMembers = groupMembers(teamMembers, 3);

  return (
    <Root>
        <Typography variant='h6' fontWeight={'bold'}>Our Team</Typography>

        <Carousel indicators={true} autoPlay={true} animation="slide" navButtonsAlwaysVisible={false} sx={{width: '100%'}}>
            {groupedMembers.map((group, index) => (
                <TeamCardBox key={index}>
                    {group.map((item, index) => (
                        <TeamCard key={index}>
                            <img src={item.image} alt="team" />
                            <Typography variant='body1' color='#6A6A6A'>{item.role}</Typography>
                            <Typography variant='body1' fontSize={'18px'} fontWeight={'bold'}>{item.name}</Typography>
                        </TeamCard>
                    ))}
                </TeamCardBox>
            ))}
        </Carousel>
    </Root>
  )
}
