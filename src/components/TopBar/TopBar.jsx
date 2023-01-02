import styles from './styles';
import CalendarIcon from '../Icons/CalendarIcon';
import { Box, Hidden, IconButton, Paper, Typography } from '@mui/material';
import UserMenu from './UserMenu';
import MenuIcon from '@mui/icons-material/Menu';

function TopBar({ openDrawer }) {
  return (
    <Paper sx={styles.container}>
      <Hidden lgUp>
        <IconButton onClick={openDrawer} aria-label="Open menu">
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <Box sx={styles.currentDate}>
          <CalendarIcon />
          <Typography sx={{ fontWeight: 700 }}>Dic 31, 2022</Typography>
        </Box>
      </Hidden>
      <UserMenu />
    </Paper>
  );
}

export default TopBar;
