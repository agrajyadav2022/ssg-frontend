export const styles = {
  container: ({ spacing, breakpoints }) => ({
    boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.15)',
    borderRadius: spacing(2),
    padding: spacing(2.375, 2),
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
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
  midCol: ({ spacing }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing(2, 4.75),
    flexWrap: 'wrap'
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
  deleteButton: ({ palette, spacing, breakpoints }) => ({
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    borderRadius: spacing(1),
    '&:hover': {
      backgroundColor: 'rgb(25, 84, 126)'
    },
    [breakpoints.down('md')]: {
      justifySelf: 'flex-start'
    }
  })
};
