import { styled } from "@mui/system";

export const Root = styled('div')({
    position: 'relative',
    width: '100%',
    minHeight: '388px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1090CB',
    padding: '0 100px',
    marginTop: '130px',
  
    '@media (max-width: 450px)': {
      padding: '50px 40px',
      height: 'auto',
    },

    '& > .bell, .succlent': {
        position: 'absolute',
    },
    '& > .bell': {
        top: '-70px',
        right: '150px',

        '@media (max-width: 450px)': {
            width: '90px',
            right: '10px',
            top: '-50px',
        },
    },
    '& > .succlent': {
        bottom: '-50px',
        left: '300px',

        '@media (max-width: 450px)': {
            width: '90px',
            left: '10px',
            bottom: '-40px',
        },
    }
});

export const StatisBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
    color: 'white',

    '@media (max-width: 450px)': {
      gap: '5px',
    },

    '& > h2': {
        fontSize: '45px',
    }
});