const styles = {
  container: ({ spacing, breakpoints }) => ({
    padding: spacing(0.625, 3),
    borderRadius: spacing(2),
    boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(2),
    marginBottom: spacing(4),
    [breakpoints.down('lg')]: {
      padding: spacing(0.625, 1.5)
    }
  }),
  currentDate: ({ palette, spacing }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(1.5),
    color: palette.primary.main,
    fontWeight: 700
  }),

  avatar: ({ spacing, breakpoints }) => ({
    width: 47,
    height: 47,
    marginRight: spacing(2),
    [breakpoints.down('sm')]: {
      margin: 0
    }
  }),
  userMenuBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontWeight: 700,
    color: '#000',
    textTransform: 'none',
    fontSize: '16px',
    marginLeft: 'auto'
  },
  menuPaper: ({ spacing }) => ({
    minWidth: 290,
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: spacing(1),
    padding: spacing(0, 1.875, 1, 1.875)
  }),
  menuItem: ({ palette, spacing }) => ({
    padding: 0,
    color: '#797A7D',
    padding: spacing(1, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(1.5),
    fontWeight: 600,
    '&:hover': {
      background: 'transparent',
      color: palette.primary.main
    }
  })
};

export default styles;
