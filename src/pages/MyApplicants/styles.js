export const styles = {
  topRow: ({ spacing, breakpoints }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(2.25),
    [breakpoints.down('lg')]: {
      flexWrap: 'wrap',
      '& h1': {
        flexBasis: '100%'
      }
    }
  }),
  btn: ({ spacing, breakpoints }) => ({
    padding: spacing(1.75, 2.625),
    [breakpoints.down('lg')]: {
      padding: spacing(1.2, 2)
    }
  }),
  downloadBtn: ({ palette, spacing }) => ({
    borderRadius: spacing(1),
    backgroundColor: palette.common.white,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15))'
  }),
  searchInput: ({ spacing, palette, breakpoints }) => ({
    flex: '0 1 388px',
    border: '1px solid #c4c4c4',
    borderRadius: spacing(1.25),
    padding: spacing(1, 1.75),
    fontSize: '13px',
    marginLeft: 'auto',
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.87)'
    },
    '&:focus-within': {
      borderColor: palette.primary.main
    },
    [breakpoints.down('lg')]: {
      flex: '1 1 auto',
      marginLeft: 0
    }
  }),
  modalContainer: ({ palette, spacing, breakpoints }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    bgcolor: 'background.paper',
    boxShadow: '0px 7px 18px rgba(0, 52, 104, 0.12)',
    width: '100%',
    maxWidth: '690px',
    padding: spacing(16.25, 4),
    '&::before': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
      backgroundColor: palette.primary.main,
      borderRadius: spacing(0, 0, 0.5, 0.5),
      width: '217px',
      height: '7px'
    },
    [breakpoints.down('md')]: {
      padding: spacing(4)
    }
  }),
  closeBtn: ({ spacing, palette }) => ({
    position: 'absolute',
    top: spacing(3),
    right: spacing(3),
    color: palette.common.black,
    zIndex: 1
  })
};
