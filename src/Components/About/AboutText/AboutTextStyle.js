import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
    gap: '48px',
    padding: '200px 123px',

    '@media (max-width: 450px)': {
        padding: '100px 30px',
        gap: '30px',
    },

    '& > h4':{
        width: '600px',
        lineHeight: '160%', 

        '@media (max-width: 450px)': {
            width: '350px',
            fontSize: '25px',
        },
    },
    '& > p':{
        width: '750px',
        lineHeight: '200%',

        '@media (max-width: 450px)': {
            width: '300px',
            fontSize: '14px'
        },
    }
});

