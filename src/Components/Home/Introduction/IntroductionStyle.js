import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '150px',
    padding: '120px 0px',

    '@media (max-width: 450px)': {
        padding: '100px 20px 60px 20px',
        gap: '100px',
    },
});

export const Title = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    textAlign: 'center',

    '@media (max-width: 450px)': {
        width: '100%',
        padding: '0 5px',
    },
    '& > h5': {
        '@media (max-width: 450px)': {
            fontSize: '18px',
        },
    },
    '& > p': {
        '@media (max-width: 450px)': {
            fontSize: '14px',
            width: '100%',
        },
    },
});

export const IntroductionChildBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '100px',

    '@media (max-width: 450px)': {
        flexDirection: 'column',
    },

    '& > img': {
        '@media (max-width: 450px)': {
            display: 'none',
        },
    },
});
