import { IconButton, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: '330px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '50px',
    paddingTop: '25px',

    '@media (max-width: 450px)': {
      height: 'auto',
      paddingTop: '35px',
    },
});
  
export const FooterContainer = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '80px',

    '@media (max-width: 450px)': {
      flexDirection: 'column',
      gap: '40px',
      paddingLeft: '20px',
    },
});
  
export const Logo = styled(Typography)({
    color: '#00329B',
    fontWeight: 'bold',
});
  
export const LogoBox = styled('div')({
    width: '310px',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '25px',

    '@media (max-width: 450px)': {
      gap: '15px',
    },
});
  
export const ListBox = styled('div')({
    width: '200px',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '6px',

    '@media (max-width: 450px)': {
      gap: '2px',
    },
});
  
export const ListItemStyled = styled(ListItem)({
    padding: 0,
    color: '#515151',
    marginTop: '10px',
    fontSize: '14px',
    cursor: 'pointer',
  
    '&:hover': {
      color: '#1090CB',
    },

    '@media (max-width: 450px)': {
      marginTop: '5px',
    },
});
  
export const IconBox = styled('div')({
    height: '160px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',

    '@media (max-width: 450px)': {
      height: '60px',
    },
});
  
export const SocialIcons = styled(IconButton)({
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: 'black',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
});
  
export const FooterBottomContainer = styled('div')({
  width: '100%',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid #D2D2D2',
  paddingTop: '20px',

  '@media (max-width: 450px)': {
    padding: '15px 0',
  },

  '& > p':{
    '@media (max-width: 450px)': {
      fontSize: '10px',
    },
  }
});