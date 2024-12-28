import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    marginTop: '80px',
    padding: '78px 0',
  
    '@media (max-width: 450px)': {
      marginTop: '60px',
      padding: '70px 20px',
      height: 'auto',
    },
});

export const NewsTitle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '41px',
    width: '100%',

    '& > h3': {
        lineHeight: '150%',
        fontWeight: '800',

        '@media (max-width: 450px)': {
            fontSize: '40px',
        },

        '& > span': {
            color: '#1090CB',
        }
    },
    '& > p': {
        fontSize: '20px',
        maxWidth: '432px',

        '@media (max-width: 450px)': {
            fontSize: '16px',
        },
    },
    '& > input': {
        width: '400px',
        height: '49px',
        backgroundColor: '#F1F1F1',
        border: 'none',
        borderRadius: '10px',
        outline: 'none',
        fontSize: '16px',
        paddingLeft: '25px',

        '&::placeholder': {
            fontSize: '16px',
        },
        '@media (max-width: 450px)': {
            width: '300px',
            height: '45px',
        },
    }
})