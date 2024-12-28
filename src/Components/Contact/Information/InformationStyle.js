import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '55px 0',
    backgroundColor: '#E8F4FA',
  
    '@media (max-width: 450px)': {
      padding: '30px 0px',
    },
});

export const FormBox = styled('div')({
    width: '640px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '79px',

    '@media (max-width: 450px)': {
      width: '100%',
    },

    '& > button': {
        textTransform: 'none',
        backgroundColor: '#1090CB',
        color: 'white',
        width: '193px',
        height: '51px',
        borderRadius: '10px',
        fontSize: '16px',
        alignSelf: 'end',
        marginTop: '-30px',

        '@media (max-width: 450px)': {
            width: '85%',
            alignSelf: 'center',
            marginTop: '-40px',
        },
    }
});

export const Title = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',

    '@media (max-width: 450px)': {
      padding: '0 20px',
      textAlign: 'center',
    },

    '& > h6': {
        fontSize: '30px',
    }
});

export const Form = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '20px',

    '& > .inputBox > input': {
        width: '100%',
    },
    '& > .inputBox > textarea': {
        width: '100%',
        border: 'none',
        borderRadius: '9px',
    },
});

export const FullnameBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '27px',

    '@media (max-width: 450px)': {
      flexDirection: 'column',
    },
});

export const InputBox = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '6px',

    '& > label': {
        fontSize: '14px',
        color: '#4F4F4F',

        '@media (max-width: 450px)': {
            fontSize: '12px',
        },
    },
    '& > input': {
        outline: 'none',
        border: 'none',
        width: '322px',
        height: '56px',
        borderRadius: '9px',
        paddingLeft: '20px',
        fontSize: '16px',

        '&::placeholder': {
            fontSize: '16px',
        }
    }
})