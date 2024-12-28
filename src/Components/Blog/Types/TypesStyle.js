import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TypesBox = styled('div')({
    width: '65%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(162px, 1fr))",
    columnGap: '34px',
    rowGap: '20px',

    '@media (max-width: 450px)': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    '& > button': {
        width: '162px',
        height: '48px',
        backgroundColor: '#E7EFF3',
        color: '#1090CB',
        borderRadius: '30px',
        textTransform: 'none',

        '@media (max-width: 450px)': {
          width: '300px',
          height: '48px',
        },
    },
    '& > .active': {
        backgroundColor: '#1090CB',
        color: '#fff',
    }
});