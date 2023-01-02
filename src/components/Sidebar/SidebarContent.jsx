import { v4 as uuid } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import MyAspirantsIcon from '../Icons/MyAspirantsIcon';
import BoatsIcon from '../Icons/BoatsIcon';
import CompanyIcon from '../Icons/CompanyIcon';
import CargoIcon from '../Icons/CargoIcon';
import BuildingIcon from '../Icons/BuildingIcon';
import BillingIcon from '../Icons/BillingIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import MenuItem from '../MenuItem/MenuItem';
import LogoutIcon from '../Icons/LogoutIcon';
import styles from './styles';
import { Box } from '@mui/material';

const menuItems = [
  {
    id: uuid(),
    label: 'Mis aspirantes',
    icon: <MyAspirantsIcon viewBox="0 0 22 18" />,
    link: '/my-applicants'
  },
  {
    id: uuid(),
    label: 'Barcos',
    icon: <BoatsIcon viewBox="0 0 22 21" />,
    link: '/boats'
  },
  {
    id: uuid(),
    label: 'Compañías',
    icon: <CompanyIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} />,
    link: '/companies'
  },
  {
    id: uuid(),
    label: 'Cargos',
    icon: <CargoIcon viewBox="0 0 20 22" />,
    link: '/charges'
  },
  {
    id: uuid(),
    label: 'Puertos',
    icon: <BuildingIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} />,
    link: '/ports'
  },
  {
    id: uuid(),
    label: 'Facturación',
    icon: <BillingIcon viewBox="0 0 16 20" sx={{ fontSize: '20px' }} />,
    link: '/billing'
  },
  {
    id: uuid(),
    label: 'Mi perfil',
    icon: <ProfileIcon viewBox="0 0 20 20" sx={{ fontSize: '20px' }} />,
    link: '/my-profile'
  }
];

function SidebarContent() {
  const location = useLocation();

  return (
    <>
      <Box sx={styles.logo}>
        <img src={logo} width="184" height="95" alt="The Seven Seas group logo" />
      </Box>
      <Box sx={styles.menuList} component="ul">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <MenuItem
              isCurrentPage={menuItem.link === location.pathname}
              component={Link}
              to={menuItem.link}
              {...menuItem}
            />
          </li>
        ))}
      </Box>
      <Box sx={styles.logoutBtn}>
        <MenuItem icon={<LogoutIcon />} label="Cerrar sesión" component="span" role="button" />
      </Box>
    </>
  );
}

export default SidebarContent;
