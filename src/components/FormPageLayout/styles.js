import loginBg from '../../assets/images/login-bg.jpg';

const styles = {
  bg: {
    backgroundColor: 'primary.main',
    backgroundImage: `url(${loginBg})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundPosition: 'fixed',
    position: 'fixed',
    inset: 0
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: (theme) => theme.spacing(2)
  }
};

export default styles;
