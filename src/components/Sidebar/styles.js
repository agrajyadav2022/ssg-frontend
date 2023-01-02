import { spacing } from '@mui/system';

const styles = {
  container: ({ spacing, zIndex }) => ({
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    left: spacing(4),
    width: '232px',
    height: 'calc(100% - 48px)',
    padding: spacing(2, 2.75),
    borderRadius: spacing(2),
    boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.15)',
    zIndex: zIndex.appBar + 10
  }),
  logo: ({ spacing }) => ({
    marginBottom: spacing(5.75)
  }),
  menuList: ({ spacing }) => ({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '& li': {
      marginBottom: spacing(2)
    }
  }),
  logoutBtn: ({ spacing }) => ({
    position: 'absolute',
    bottom: spacing(2.75)
  })
};

export default styles;
