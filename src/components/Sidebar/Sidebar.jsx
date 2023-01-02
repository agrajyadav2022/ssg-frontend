import { Paper } from '@mui/material';
import SidebarContent from './SidebarContent';
import styles from './styles';

function Sidebar() {
  return (
    <Paper elevation={3} sx={styles.container}>
      <SidebarContent />
    </Paper>
  );
}

export default Sidebar;
