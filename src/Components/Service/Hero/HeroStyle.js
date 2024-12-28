import { styled } from "@mui/system";

export const Root = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '71px',
    marginTop: '80px',
    padding: '78px 0',
    backgroundColor: '#E8F4FA',
  
    '@media (max-width: 450px)': {
      marginTop: '60px',
      padding: '50px 20px',
      height: '100vh',
    },

    '& > img': {
        position: 'absolute',
        zIndex: '101',
        top: '56%',
        left: '80%',

        '@media (max-width: 450px)': {
            display: 'none',
        },
    }
});

export const ServiceTitle = styled('div')({
    width: '440px',
    height: '331px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '22px',
});

export const SpeakerBox = styled('div')({
    width: '135px',
    height: '135px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TextsBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '18px',

    '& > h4': {
        fontWeight: 'bold',

        '& > span': {
            color: '#1090CB',
        }
    },
    '& > p': {
        width: '300px',
        lineHeight: '175%',
    }
});

export const ServiceCategory = styled('div')({
    position: 'absolute',
    width: '85%',
    height: '441px',
    backgroundColor: 'white',
    top: '500px',
    zIndex: '100',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.10)',

    '@media (max-width: 450px)': {
      paddingLeft: '10px',
      top: '450px',
    },
});

export const CategoryBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '39px',

    '@media (max-width: 450px)': {
      gap: '10px',
    },
});

export const CategoryTitle = styled('div')({
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',

    '& > h6': {
        fontSize: '20px',

        '@media (max-width: 450px)': {
            fontSize: '14px',
        },
    },
    '& > p': {
        width: '300px',

        '@media (max-width: 450px)': {
            width: '200px',
            fontSize: '12px',
        },
    }
})

export const IconBox = styled('div')({
    width: '81px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',

    '@media (max-width: 450px)': {
        width: '61px',
        height: '60px',
    },

    '& > img': {
        '@media (max-width: 450px)': {
            width: '31px',
            height: '30px',
        },
    },
});