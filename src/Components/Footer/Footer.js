import React from 'react';
import { List, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FooterBottomContainer, FooterContainer, IconBox, ListBox, ListItemStyled, Logo, LogoBox, Root, SocialIcons } from './FooterStyle';
import { ListData } from './footerData';
import { Fade } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <Root>
      <Fade>
        <FooterContainer>
          <LogoBox>
            <Logo variant='button'>Agency</Logo>
            <Typography variant='body2' color='#515151'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant='subtitle2' color='#515151'>
              @Lorem
            </Typography>
          </LogoBox>

          <ListBox>
            <Typography variant='body1' fontWeight={'bold'}>About us</Typography>
            <List>
              {ListData.map((item) => (
                <ListItemStyled key={item.label}>{item.label}</ListItemStyled>
              ))}
            </List>
          </ListBox>

          <LogoBox>
            <Typography variant='body1' fontWeight={'bold'}>Contact us</Typography>
            <Typography variant='body2' color='#515151'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant='body2' color='#515151'>
              +908 89097 890
            </Typography>
          </LogoBox>

          <IconBox>
            <SocialIcons sx={{ fontSize: '16px' }}>
              <FontAwesomeIcon icon={faFacebookF} fontSize={'16px'} />
            </SocialIcons>
            <SocialIcons sx={{ fontSize: '18px' }}>
              <InstagramIcon fontSize='12px' />
            </SocialIcons>
            <SocialIcons sx={{ fontSize: '19px' }}>
              <TwitterIcon fontSize='12px' />
            </SocialIcons>
            <SocialIcons sx={{ fontSize: '16px' }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialIcons>
          </IconBox>
        </FooterContainer>
      </Fade>

      <FooterBottomContainer>
        <Typography fontSize={'13px'} color='#515151'>
          Copyright ® 2021 Lorem All rights Reserved
        </Typography>
      </FooterBottomContainer>
    </Root>
  );
}
