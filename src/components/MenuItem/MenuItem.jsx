import { Box, Link } from '@mui/material';
import styles from './styles';

function MenuItem({ label, icon, isCurrentPage, ...props }) {
  return (
    <Link
      sx={styles.menuItem}
      className={isCurrentPage ? 'current-page' : ''}
      underline="none"
      {...props}>
      <Box
        sx={styles.menuItemIcon}
        className={isCurrentPage ? 'current-page-icon' : ''}
        component="span">
        {icon}
      </Box>
      <span>{label}</span>
    </Link>
  );
}

export default MenuItem;
