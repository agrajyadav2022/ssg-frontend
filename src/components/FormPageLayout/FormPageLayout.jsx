import { Box } from '@mui/material';
import styles from './styles';

function FormPageLayout({ children }) {
  return (
    <>
      <Box sx={styles.bg}></Box>
      <Box sx={styles.container}>{children}</Box>
    </>
  );
}

export default FormPageLayout;
