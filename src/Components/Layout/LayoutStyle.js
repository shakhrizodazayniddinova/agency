import { styled } from '@mui/system';

export const Root = styled('div')({
  width: '100%',
  height: 'auto',

  '@media (max-width: 450px)': {
    overflowX: 'hidden',
  },
});
