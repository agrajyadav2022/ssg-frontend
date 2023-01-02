const styles = {
  container: ({ spacing, breakpoints }) => ({
    padding: spacing(3, 4, 3, 37),
    [breakpoints.down('lg')]: {
      padding: spacing(1.5, 2)
    }
  })
};

export default styles;
