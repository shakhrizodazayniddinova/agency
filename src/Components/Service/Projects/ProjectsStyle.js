import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '71px',
    marginTop: '180px',
    padding: '0px 0px 100px 123px',
  
    '@media (max-width: 450px)': {
      padding: '0px 45px',
      height: 'auto',
      alignItems: 'start',
      gap: '60px',
      marginTop: '150px',
    },

    '& > h4': {
        fontSize: '25px',
    }
});

export const ProjectCardBox = styled('div')({
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    alignItems: 'center',
    gap: '48px',
});

export const ProjectCard = styled('div')({
    width: '333px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '40px',
    overflow: 'hidden',
    borderRadius: '45px 45px 0px 0px',

    '@media (max-width: 450px)': {
        width: '280px',
        height: 'auto',
        gap: '15px',
    },

    '& > img': {
        width: '100%',
        height: '281px',
        transition: '0.3s',
        borderRadius: '45px',

        '&:hover': {
            transform: 'scale(0.9)',
            transition: '0.3s',
        },

        '@media (max-width: 450px)': {
            width: '100%',
            height: 'auto',
        },
    },
    '& > h5': {
        '@media (max-width: 450px)': {
            fontSize: '20px',
        },
    }
});