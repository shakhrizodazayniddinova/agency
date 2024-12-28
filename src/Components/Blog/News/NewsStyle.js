import { lineHeight, styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'grid',
    flexDirection: 'column',
    marginTop: '106px',
    padding: '30px 160px 150px 160px',
    gridTemplateColumns: "repeat(auto-fit, minmax(333px, 1fr))",
    gap: '100px',
  
    '@media (max-width: 450px)': {
        padding: '30px 20px 50px 20px',
    },
});

export const NewsBox = styled('div')({
    width: '333px',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '40px',

    '@media (max-width: 450px)': {
        width: '300px',
        gap: '20px',
    },

    '& > img': {
        width: '100%',
        height: '306px',
        borderRadius: '45px',

        '@media (max-width: 450px)': {
            height: '270px',
        },
    }
});

export const NewText = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',

    '@media (max-width: 450px)': {
        gap: '20px',
    },

    '& > h5': {
        lineHeight: '177.9%',

        '@media (max-width: 450px)': {
            lineHeight: '150%',
            fontSize: '20px',
        },
    },
    '& > p': {
        lineHeight: '210.9%',

        '@media (max-width: 450px)': {
            lineHeight: '180%',
            fontSize: '14px',
        },
    }
})