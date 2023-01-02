const styles = {
  menuItem: ({ palette }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#989898',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
      color: palette.primary.main
    },
    '&.current-page': {
      color: palette.primary.main
    }
  }),
  menuItemIcon: ({ palette, spacing }) => ({
    backgroundColor: palette.common.white,
    color: palette.primary.main,
    width: '36px',
    height: '36px',
    borderRadius: spacing(1),
    marginRight: spacing(1.5),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: spacing(0.25),
    '&.current-page-icon': {
      backgroundColor: palette.primary.main,
      color: palette.common.white
    }
  })
};

export default styles;
