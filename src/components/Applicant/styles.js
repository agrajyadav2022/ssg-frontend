export const styles = {
  container: ({ spacing, breakpoints }) => ({
    boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.15)',
    borderRadius: spacing(2),
    padding: spacing(2.375, 2),
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gap: spacing(2.75),
    [breakpoints.down('md')]: {
      gridTemplateColumns: '1fr'
    }
  }),
  leftCol: ({ spacing, breakpoints }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(2.75),
    padding: spacing(0, 2.75, 0, 0),
    borderRight: '1px solid #C4C4C4',
    [breakpoints.down('md')]: {
      border: 'none',
      padding: 0
    }
  }),
  midCol: ({ spacing, breakpoints }) => ({
    display: 'grid',
    gridTemplateColumns: '51px 114px 73px 100px 163px',
    gap: spacing(2, 2.75),
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: spacing(2, 2.75)
    },
    '@media(max-width:1350px)': {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }),
  boatName: ({ palette }) => ({
    color: palette.primary.main,
    fontSize: '18px',
    fontWeight: 700,
    '& span': {
      display: 'block',
      color: palette.gray.main,
      fontSize: '13px',
      fontWeight: 600
    }
  }),
  deleteButton: ({ palette, spacing }) => ({
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    borderRadius: spacing(1),
    '&:hover': {
      backgroundColor: 'rgb(25, 84, 126)'
    }
  })
};
