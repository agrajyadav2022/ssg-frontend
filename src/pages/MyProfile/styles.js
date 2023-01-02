export const styles = {
  container: ({ spacing, breakpoints }) => ({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    maxWidth: '1000px',
    alignItems: 'flex-start',
    margin: spacing(10, 'auto', 0, 'auto'),
    [breakpoints.down('md')]: {
      gridTemplateColumns: '1fr'
    }
  }),
  rhsCol: ({ breakpoints }) => ({
    marginTop: (theme) => theme.spacing(4),
    paddingLeft: (theme) => theme.spacing(7),
    [breakpoints.down('md')]: {
      paddingLeft: 0,
      textAlign: 'center'
    }
  }),
  avatarContainer: ({ breakpoints }) => ({
    position: 'relative',
    [breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }),
  uploadPicBtn: ({ palette }) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '50px',
    height: '50px',
    color: palette.common.white,
    backgroundColor: palette.secondary.main,
    zIndex: 10,
    '&:hover': {
      backgroundColor: 'rgb(34, 121, 159)'
    }
  }),
  name: ({ spacing }) => ({
    fontSize: '22px',
    margin: spacing(1.5, 0, 3.25, 0)
  }),
  editBtn: ({ spacing, breakpoints }) => ({
    padding: spacing(1.5),
    width: '216px',
    [breakpoints.down('md')]: {
      margin: '0 auto',
      display: 'flex'
    }
  }),
  formContainer: ({ spacing, breakpoints }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing(2.5),
    alignItems: 'flex-start',
    marginTop: spacing(10),
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  })
};
