import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: '234px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '15px',

    '@media (max-width: 450px)': {
        height: 'auto',
        marginTop: '30px',
    },
    '& > h6': {
        fontSize: '18px',
    }
});

export const CompaniesCard = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '115px',

    '@media (max-width: 450px)': {
        flexDirection: 'column',
        gap: '0px',
    },

    '& > img': {
        height: '80px',
    }
})
