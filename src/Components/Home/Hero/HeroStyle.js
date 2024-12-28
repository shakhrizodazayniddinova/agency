import { fontSize, styled } from '@mui/system';

export const Root = styled('div')({
  width: '100%',
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '100px',
  backgroundColor: '#E8F4FA',
  marginTop: '80px',

  '@media (max-width: 450px)': {
    marginTop: '60px',
    flexDirection: 'column',
    gap: '30px',
    padding: '50px 20px',
    height: 'auto',
  },
});

export const VectorImg1 = styled('img')({
  position: 'absolute',
  right: 0,
  top: '170px',
  objectFit: 'cover',

  '@media (max-width: 450px)': {
    display: 'none',
  },
});

export const VectorImg2 = styled('img')({
  position: 'absolute',
  left: 0,
  top: '260px',
  objectFit: 'cover',

  '@media (max-width: 450px)': {
    display: 'none',
  },
});

export const LeftBox = styled('div')({
  width: '500px',
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '20px',

  '@media (max-width: 450px)': {
    width: '300px',
    paddingLeft: '15px',
    height: 'auto',
  },

  '& > h4': {
    '@media (max-width: 450px)': {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },

  '& > p': {
    '@media (max-width: 450px)': {
      fontSize: '12px',
    },
  }
});

export const Span = styled('span')({
    color: '#1090CB',
});

export const BtnBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginTop: '50px',

  '@media (max-width: 450px)': {
    marginTop: '20px',
  },

  '& > button': {
    '@media (max-width: 450px)': {
      width: '120px',
      height: '35px',
      borderRadius: '8px',
      fontSize: '14px',
    },
  }
})

export const RightBox = styled('div')({
  width: '597px',
});

export const RightImg = styled('img')({
  '@media (max-width: 450px)': {
    width: '300px',
    marginLeft: '130px',
  },
})

export const CategoryBox = styled('div')({
  width: '100%',
  height: '164px',
  borderBottom: '1px solid #C7C7C7',
  display: 'flex',
  alignItems: 'center',
  padding: '0 123px',

  '@media (max-width: 450px)': {
    height: 'auto',
    padding: '30px 20px',
  },
});

export const CategoryChildBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',

  '& > div > h6': {
    '@media (max-width: 450px)': {
      fontSize: '16px',
    },
  },
  '& > div > p': {
    '@media (max-width: 450px)': {
      fontSize: '13px',
    },
  },
})

export const CategoryIconBox = styled('div')({
  width: '83px',
  height: '83px',
  borderRadius: '20px',
  padding: '22px',

  '@media (max-width: 450px)': {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    padding: '12px',

    '& > img': {
      width: '30px',
    }
  },
});
