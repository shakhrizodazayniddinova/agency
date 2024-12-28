import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px',
    marginTop: '80px',
    padding: '80px 0',
  
    '@media (max-width: 450px)': {
      marginTop: '60px',
      padding: '50px 20px',
      height: 'auto',
    },
});

export const Vector1 = styled('img')({
    position: 'absolute',
    top: '-200px',
    right: 0,

    '@media (max-width: 450px)': {
      display: 'none',
    },
});
export const Vector2 = styled('img')({
    position: 'absolute',
    top: '430px',
    left: 0,
    zIndex: '100',

    '@media (max-width: 450px)': {
      display: 'none',
    },
});

export const HeroBox = styled('div')({
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '60px',
});

export const Aboutus = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '69px',

    '@media (max-width: 450px)': {
      flexDirection: 'column',
    },
});

export const AboutusImgsBox = styled('div')({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '50px',

    '@media (max-width: 450px)': {
      gap: '20px',
    },

    '& > img': {
        transition: '0.3s',

        '@media (max-width: 450px)': {
            width: '150px',
        },

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '0.3s',
        }
    }
});

export const AboutusText = styled('div')({
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    '@media (max-width: 450px)': {
      width: '300px',
    },

    '& > h4': {
        lineHeight: '170%',

        '@media (max-width: 450px)': {
            lineHeight: '120%',
            fontSize: '20px',
        },
    },
    '& > h6': {
        fontSize: '25px',

        '@media (max-width: 450px)': {
            fontSize: '20px',
        },
    },
    '& > p': {
        width: '320px',
        lineHeight: '200%',

        '@media (max-width: 450px)': {
            fontSize: '14px',
        },
    },
});

export const HeroImgsBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '51px',

    '@media (max-width: 450px)': {
        flexDirection: 'column',
    },

    '& > img': {
        transition: '0.3s',

        '@media (max-width: 450px)': {
            width: '300px',
        },

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '0.3s',
        }
    }
})