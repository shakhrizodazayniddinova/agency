import { List, ListItem, Menu } from "@mui/material";
import { styled } from "@mui/system";

export const Root = styled('div')({
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '32px',
    position: 'fixed',
    top: 0,
    zIndex: 999,
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.10);',

    '@media (max-width: 450px)': {
        padding: '16px',
        height: '60px',
    },
});

export const Logo = styled('div')({
    fontSize: '29px',
    fontWeight: 'bold',
    color: '#1090CB',
    cursor: 'pointer',
});

export const ContactButton = styled('button')({
    width: '125px',
    textTransform: 'none',
    backgroundColor: '#1090CB',
    borderRadius: '6px',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    cursor: 'pointer',
    fontSize: '16px',

    '&:hover': {
        backgroundColor: '#0d7ab8', // darker shade of blue
    },
});

export const StyledList = styled(List)({
    width: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    gap: '70px',
    padding: 0,

    '@media (max-width: 450px)': {
        display: 'none',
    },
    '& > .active': {
        color: '#1090CB',
    }
});

export const StyledListItem = styled(ListItem)({
    width: 'auto',
    padding: 0,
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.3s ease',

    '&:hover': {
        color: '#1090CB',
    },
});

export const MenuBox = styled('div')({
    display: 'none',

    '@media (max-width: 450px)': {
        display: 'block',
    },
});

export const StyledMenu = styled(Menu)({
    display: 'none',
    
    '@media (max-width: 450px)': {
        display: 'block',
    },
    
    '& .MuiPaper-root': {
        width: '130px',
        padding: '0 3px',
        backdropFilter: 'blur(2px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
});