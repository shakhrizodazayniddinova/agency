import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    gap: '300px',
    padding: '0px 0px 0px 123px',

    '@media (max-width: 450px)': {
        padding: '0px 0px 0px 30px',
        gap: '50px',
        flexDirection: 'column',
    },
});

export const CategoryInfo = styled('div')({
    width: '450px',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '30px',

    '& > span':{
        width: '54px',
        height: '5px',
        backgroundColor: '#4628A4',
    },
    '& > h6':{
        fontSize: '30px',
        lineHeight: '160%',

        '@media (max-width: 450px)': {
            width: '350px',
            fontSize: '25px',
        },
    },
    '& > p':{
        fontSize: '20px',
        lineHeight: '200%',

        '@media (max-width: 450px)': {
            width: '300px',
            fontSize: '14px'
        },
    },
    '& > h4':{
        width: '600px',
        lineHeight: '160%',
    },
    '& > button':{
        color: '#1090CB',
        textTransform: 'none',
        borderRadius: '10px',
        border: '1px solid #1090CB',
    }
});

export const Categories = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    height: '350px',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',

    '@media (max-width: 450px)': {
        boxShadow: 'none',
    },
});

export const CategoryBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '22px',

    '& > h6': {
        color: '#2E0D64',
        fontSize: '20px',

        '@media (max-width: 450px)': {
            fontSize: '16px',
        },
    }
});

export const IconBox = styled('div')({
    width: '81px',
    height: '80px',
    backgroundColor: '#F1E8FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',

    '@media (max-width: 450px)': {
        width: '71px',
        height: '70px',
    },

    '& > img': {
        '@media (max-width: 450px)': {
            width: '31px',
            height: '30px',
        },
    },
});