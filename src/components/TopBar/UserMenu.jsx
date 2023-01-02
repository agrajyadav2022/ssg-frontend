import { Avatar, Button, Divider, Hidden, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import userAvatar from '../../assets/images/avatar.png';
import { useState } from 'react';
import styles from './styles';
import ProfileIcon from '../Icons/ProfileIcon';
import KeyPadIcon from '../Icons/KeyPadIcon';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="user-menu-button"
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={styles.userMenuBtn}>
        <Avatar sx={styles.avatar} alt="Photo of Remy Sharp" src={userAvatar} />
        <Hidden smDown>Leidy Hincapié Cardona</Hidden>
      </Button>
      <Menu
        PaperProps={{
          sx: styles.menuPaper
        }}
        id="user-menu"
        anchorEl={anchorEl}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-menu-button'
        }}>
        <Hidden smUp>
          <MenuItem sx={styles.menuItem} onClick={handleClose}>
            <PersonIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} /> Leidy Hincapié Cardona
          </MenuItem>
          <Divider />
        </Hidden>
        <MenuItem component={Link} to="/my-profile" sx={styles.menuItem} onClick={handleClose}>
          <ProfileIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} /> Mi perfil
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/change-password" sx={styles.menuItem} onClick={handleClose}>
          <KeyPadIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} /> Cambiar mi contraseña
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
