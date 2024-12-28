import React, { useState } from 'react';
import { ContactButton, Logo, MenuBox, Root, StyledList, StyledListItem, StyledMenu } from './HeaderStyle';
import { Box, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderData } from './HeaderData';
import { useRouter } from 'next/router';
import { Slide } from 'react-awesome-reveal';

export default function Header() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    setAnchorEl(null); 
    router.push(path); 
  };

  return (
    <Root>
      <Slide direction='down'>
        <Logo variant='button' onClick={() => router.push('/')}>Agency</Logo>

        <nav>
            <StyledList>
                {HeaderData.map((item) => (
                  <StyledListItem key={item.path} onClick={() => router.push(item.path)} className={router.pathname === item.path && 'active'}>
                    <Box sx={{width: '8px', height: '8px', borderRadius: '100%', bgcolor: '#08D3BB', position: 'absolute', left: '-10px', top: '-1px', visibility: item.path === router.pathname ? 'visible' : 'hidden'}}></Box>
                    {item.label}
                  </StyledListItem>
                ))}
                <StyledListItem>
                  <ContactButton variant='contain' onClick={() => router.push('/contact')}>Contact us</ContactButton>
                </StyledListItem>
            </StyledList>
        </nav>
      </Slide>

      <MenuBox>
          <MenuIcon onClick={handleClick} color='black'/>
          
          <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} disableScrollLock
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>

              {HeaderData.map((item, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(item.path)}>{item.label}</MenuItem>
              ))}
              <ContactButton variant='contain' onClick={() => router.push('/contact')}>Contact us</ContactButton>
          </StyledMenu>
      </MenuBox>
    </Root>
  )
}
