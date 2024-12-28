import { styled } from '@mui/system';

export const Root = styled('div')({
  position: 'relative',
  width: '100%',
  height: '578px',
  display: 'flex',
  alignItems: 'flex-end',

  '@media (max-width: 450px)': {
    height: '450px',
  },
});

export const FormBox = styled('div')({
  width: '100%',
  height: '530px',
  backgroundColor: '#E8F4FA',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',

  '@media (max-width: 450px)': {
    flexDirection: 'column',
    gap: '50px',
    height: '400px',
  },

  '& > h4': {
    '@media (max-width: 450px)': {
      fontSize: '20px',
      width: '300px',
    },
  }
});

export const StarImg = styled('img')({
  position: 'absolute',
  top: 0,
  left: '167px',
  objectFit: 'cover',

  '@media (max-width: 450px)': {
    display: 'none',
  },
});

export const PaiImg = styled('img')({
  position: 'absolute',
  top: '138px',
  right: '397px',
  objectFit: 'cover',

  '@media (max-width: 450px)': {
    display: 'none',
  },
});

export const EmailBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',

  '@media (max-width: 450px)': {
    flexDirection: 'column',
  },
});

export const EmailInput = styled('input')({
  width: '532px',
  height: '67px',
  backgroundColor: 'white',
  borderRadius: '10px',
  border: 'none',
  paddingLeft: '36px',
  outline: 'none',
  fontSize: '16px',

  '&::placeholder': {
    fontSize: '16px',
  },

  '@media (max-width: 450px)': {
    width: '300px',
    height: '55px',
  },
});

export const SubBtn = styled('button')({
  width: '173px',
  height: '67px',
  backgroundColor: '#000',
  color: 'white',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: '#002',
  },

  '@media (max-width: 450px)': {
    width: '300px',
    height: '55px',
  },
});
