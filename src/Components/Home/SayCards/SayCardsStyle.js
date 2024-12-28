import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    padding: '100px 0',

    '@media (max-width: 450px)': {
        flexDirection: 'column',
        padding: '60px 0',
    },
});

export const Card = styled('div')({
    width: '572px',
    height: '459px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '40px',
    textAlign: 'center',
    borderRadius: '20px',
    padding: '0 70px',

    '@media (max-width: 450px)': {
        width: '300px',
        height: '350px',
        gap: '20px',
        padding: '20px',
    },

    '& > h5': {
        '@media (max-width: 450px)': {
            fontSize: '18px',
            width: '260px',
        },
    },
    '& > p': {
        '@media (max-width: 450px)': {
            fontSize: '12px',
        },
    },
    '& > button': {
        '@media (max-width: 450px)': {
            width: '130px',
            height: '35px',
            borderRadius: '8px',
            fontSize: '15px',
        },
    }
})