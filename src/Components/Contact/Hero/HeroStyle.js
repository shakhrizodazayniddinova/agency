import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '60px',
    marginTop: '80px',
    padding: '78px 0',
  
    '@media (max-width: 450px)': {
      marginTop: '60px',
      height: 'auto',
    },
});

export const LocationBox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '128px',

    '@media (max-width: 450px)': {
      flexDirection: 'column',
      gap: '100px',
    },

    '& > img': {
        '@media (max-width: 450px)': {
            width: '90%',
        },
    }
});

export const TitleBox = styled('div')({
    width: '437px',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '15px',

    '@media (max-width: 450px)': {
      width: '100%',
      alignItems: 'center',
    },

    '& > p': {
      lineHeight: '189.5%',
      fontSize: '20px',
      color: '#777777',

      '@media (max-width: 450px)': {
        fontSize: '15px',
      },
    },
    '& > h4': {
      '@media (max-width: 450px)': {
        fontSize: '25px',
      },
    }
});

export const ContactInformation = styled('div')({
    width: '80%',
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 450px)': {
      gap: '50px',
      flexDirection: 'column',
    },
});

export const SocialBox = styled('div')({
    width: '400px',
    height: '102px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    paddingRight: '97px',
    borderRight: '1px solid #C2C2C2',

    '@media (max-width: 450px)': {
      width: '300px',
      padding: '0',
      border: 'none',
      height: 'auto',
      gap: '0px',
    },
})

export const IconBox = styled('div')({
    height: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',

    '@media (max-width: 450px)': {
      height: '60px',
    },
});
  
export const SocialIcons = styled(IconButton)({
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: 'black',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
});

export const PhoneBox = styled('div')({
    width: '400px',
    height: '102px',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    padding: '0 97px',
    borderRight: '1px solid #C2C2C2',

    '@media (max-width: 450px)': {
      width: '300px',
      padding: '0',
      border: 'none',
      height: 'auto',
    },
});

export const GpsBox = styled('div')({
    width: '400px',
    height: '102px',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    paddingLeft: '97px',

    '@media (max-width: 450px)': {
      width: '300px',
      padding: '0',
      border: 'none',
      height: 'auto',
    },
})