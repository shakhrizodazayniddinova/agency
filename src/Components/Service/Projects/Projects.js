import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography } from '@mui/material';
import { ProjectCard, ProjectCardBox, Root } from './ProjectsStyle';
import { ProjectData } from './ProjectData';

function groupMembers(members, groupsize){
    const groupped = [];

    for (let i = 0; i < members.length; i+= groupsize) {
        groupped.push(members.slice(i, i + groupsize));
    }
    return groupped;
}

export default function Projects() {
  const groupedMembers = groupMembers(ProjectData, 3);

  return (
    <Root>
        <Typography variant='h4' fontWeight={'bold'}>Our latest Projects</Typography>
        
        <Carousel indicators={true} autoPlay={true} animation="slide" navButtonsAlwaysVisible={false} sx={{width: '100%', justifyContent: 'center'}}>
            {groupedMembers.map((group, index) => (
                <ProjectCardBox key={index}>
                    {group.map((item, index) => (
                        <ProjectCard key={index}>
                            <img src={item.img} alt="team" />
                            <Typography variant='h5' fontWeight={'bold'}>{item.title}</Typography>
                            <Typography variant='body1' fontSize={'16px'} color='#424242'>{item.description}</Typography>
                        </ProjectCard>
                    ))}
                </ProjectCardBox>
            ))}
        </Carousel>
    </Root>
  )
}
