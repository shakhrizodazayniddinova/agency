import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    // '@media (max-width: 450px)': {
    //   marginTop: '60px',
    //   padding: '50px 20px',
    //   height: '100vh',
    // },
});

export const PostBox = styled('div')({
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px',
    marginTop: '109px',

    '@media (max-width: 450px)': {
      flexDirection: 'column',
      gap: '30px',
    },
});

export const PostDetails = styled('div')({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '20px',
})

export const PostTitle = styled('div')({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '33px',

    '@media (max-width: 450px)': {
        gap: '24px',
    },

    '& > h4': {
        lineHeight: '177.9%',
        fontSize: '32px',

        '@media (max-width: 450px)': {
            fontSize: '24px',
            lineHeight: '150%',
        },
    },
    '& > p': {
        maxWidth: '525px',
        fontSize: '16px',
        lineHeight: '210.9%',

        '@media (max-width: 450px)': {
            fontSize: '14px',
            lineHeight: '190%',
        },
    }
});

export const PostBy = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > button': {
        color: '#1090CB',
        textTransform: 'none',

        '@media (max-width: 450px)': {
            fontSize: '12px',
        },
    }
});

export const UserData = styled('div')({
    display: 'flex',
    alignItems: 'start',
    gap: '21px',

    '@media (max-width: 450px)': {
        gap: '15px',
    },

    '& > img': {
        borderRadius: '100%',
        width: '54px',
        height: '54px',

        '@media (max-width: 450px)': {
            width: '45px',
            height: '45px',
        },
    }
})

export const PostNameData = styled('div')({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '5px',

    '@media (max-width: 450px)': {
        gap: '2px',
    },

    '& > h6': {
        '@media (max-width: 450px)': {
            fontSize: '15px',
        },
    },
    '& > p': {
        '@media (max-width: 450px)': {
            fontSize: '12px',
        },
    },
})