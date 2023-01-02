const styles = {
  formContainer: {
    flex: '0 1 448px',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    padding: (theme) => theme.spacing(5, 8, 11, 8),
    boxShadow: '0px 7px 18px rgba(0, 52, 104, 0.12)',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'primary.main',
      width: '217px',
      height: '7px',
      borderRadius: (theme) => theme.spacing(0, 0, 0.5, 0.5),
      zIndex: 1
    }
  },
  logo: {
    textAlign: 'center',
    marginBottom: (theme) => theme.spacing(4.125)
  },
  heading: {
    color: 'primary.main',
    fontWeight: 700,
    fontSize: '28px',
    letterSpacing: '-1px',
    marginBottom: (theme) => theme.spacing(2.875)
  },
  text: {
    fontSize: '13px',
    color: 'gray.main',
    maxWidth: '255px',
    margin: (theme) => theme.spacing(0, 'auto', 4.625, 'auto')
  }
};

export default styles;
