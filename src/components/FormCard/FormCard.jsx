import { Box, Paper, Typography } from '@mui/material';
import logo from '../../assets/images/logo.jpg';
import styles from './styles';

function FormCard({ heading, subHeading, children }) {
  return (
    <Paper sx={styles.formContainer}>
      <Box sx={styles.logo}>
        <img src={logo} width="239" height="133" alt="The Seven Seas group logo" />
      </Box>
      <Typography sx={styles.heading} align="center" component="h1">
        {heading}
      </Typography>
      <Typography sx={styles.text} align="center">
        {subHeading}
      </Typography>
      {children}
    </Paper>
  );
}

export default FormCard;
