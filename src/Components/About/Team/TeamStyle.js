import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '71px',
    marginTop: '140px',
    padding: '0px 0px 100px 123px',
  
    '@media (max-width: 450px)': {
      padding: '0px 40px',
      height: 'auto',
      alignItems: 'start',
    },
});

export const TeamCardBox = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    alignItems: 'center',
    gap: '48px',
});

export const TeamCard = styled('div')({
    width: '332px',
    height: '382px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '22px',
    overflow: 'hidden',
    borderRadius: '15px 15px 0px 0px',

    '@media (max-width: 450px)': {
        width: '300px',
        height: '352px',
        gap: '15px',
    },

    '& > img': {
        width: '100%',
        height: '281px',
        transition: '0.3s',
        borderRadius: '15px',

        '&:hover': {
            transform: 'scale(0.9)',
            transition: '0.3s',
        }
    }
});