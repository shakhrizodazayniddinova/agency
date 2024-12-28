import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '490px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    gap: '43px',

    '@media (max-width: 450px)': {
      width: '300px',
      gap: '30px',
    },

    '& > h5': {
        '@media (max-width: 450px)': {
            fontSize: '20px',
        },
    },
    '& > p': {
        '@media (max-width: 450px)': {
            fontSize: '14px',
        },
    },
});

export const InfoTheme = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '25px',

    '@media (max-width: 450px)': {
      gap: '10px',
    },
});

export const ImgBox = styled('div')({
    padding: '16px',
    width: '58px',
    height: '58px',
    borderRadius: '50%',

    '@media (max-width: 450px)': {
        width: '50px',
        height: '50px',
        padding: '12px',
    },
});

export const InfoName = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '5px',

    '& > h6': {
        '@media (max-width: 450px)': {
            fontSize: '14px',
        },
    },
    '& > p': {
        '@media (max-width: 450px)': {
            fontSize: '12px',
        },
    },
});

export const LabelSelectText = styled('span')({
    color: '#1090CB',
})