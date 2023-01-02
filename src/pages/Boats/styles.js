export const styles = {
  addBtn: ({ spacing, breakpoints }) => ({
    width: '215px',
    padding: spacing(1.75),
    marginLeft: 'auto',
    display: 'flex',
    [breakpoints.down('sm')]: {
      padding: spacing(1.1),
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
  formContainer: ({ spacing, breakpoints }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing(3),
    maxWidth: '590px',
    margin: '0 auto',
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
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
