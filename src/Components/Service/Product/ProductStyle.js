import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '200px',
    marginTop: '300px',
    padding: '0px 0px 100px 0px',
  
    '@media (max-width: 450px)': {
      padding: '0px 40px',
      height: 'auto',
      flexDirection: 'column',
      marginTop: '300px',
    },

    '& > img': {
        '@media (max-width: 450px)': {
            display: 'none',
        },
    }
});

export const ProductTitle = styled('div')({
    maxWidth: '380px',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '56px',

    '& > h5': {
        lineHeight: '170%',

        '& > span': {
            color: '#1090CB',
        }
    },
    '& > p': {
        lineHeight: '180%',
        color: '#545454',
    },
    '& > button': {
        textTransform: 'none',
        color: '#1090CB',
        borderColor: '#1090CB',
        borderRadius: '10px',
    }
});