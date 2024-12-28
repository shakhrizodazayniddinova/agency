import React from 'react';
import { ContactInformation, GpsBox, IconBox, LocationBox, PhoneBox, Root, SocialBox, SocialIcons, TitleBox } from './HeroStyle';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '@mui/material';

export default function Hero() {
  return (
    <Root>
        <LocationBox>
            <TitleBox>
                <img src="/contact.png" alt="contact" />
                <Typography variant='h4' fontWeight={'bold'}>Let’s Collaborate</Typography>
                <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing .</Typography>
            </TitleBox>

            <img src="/location.png" alt="location" />
        </LocationBox>

        <ContactInformation>
            <SocialBox>
                <Typography>Follow us</Typography>

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
            </SocialBox>

            <PhoneBox>
                <img src="/contactPhone.png" alt="phone" />
                <Typography>+94 4444 5555 6</Typography>
            </PhoneBox>

            <GpsBox>
                <img src="/gps.png" alt="gps" />
                <Typography>but also the leap into electronic typesetting</Typography>
            </GpsBox>
        </ContactInformation>
    </Root>
  )
}
