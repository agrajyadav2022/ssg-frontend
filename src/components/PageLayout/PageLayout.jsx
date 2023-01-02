import { Box, Drawer, Hidden } from '@mui/material';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SidebarContent from '../Sidebar/SidebarContent';
import TopBar from '../TopBar/TopBar';
import styles from './styles';

function PageLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Box sx={styles.container}>
        <TopBar openDrawer={openDrawer} />
        <Hidden lgDown>
          <Sidebar />
        </Hidden>
        {children}
      </Box>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Box sx={{ padding: (theme) => theme.spacing(2, 2.75) }}>
          <SidebarContent />
        </Box>
      </Drawer>
    </>
  );
}

export default PageLayout;
