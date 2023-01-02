import { Avatar, Box, IconButton, Paper, Typography } from '@mui/material';
import boatImage from '../../assets/images/boat.png';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoItem from '../InfoItem/InfoItem';
import { styles } from './styles';

function Boat() {
  return (
    <Paper component="article" sx={styles.container}>
      <Box sx={styles.leftCol}>
        <Avatar sx={{ width: 90, height: 90 }} alt="Photo of Boat" src={boatImage} />
        <Typography component="h3" sx={styles.boatName}>
          Barco 00000 <span>Getaway</span>
        </Typography>
      </Box>
      <Box sx={styles.midCol}>
        <InfoItem label="Fabricante" value="Nombre del fabricante" />
        <InfoItem label="Modelo" value="2022" />
        <InfoItem label="País de Origen" value="Estados Unidos" />
        <InfoItem label="Ruta" value="Caribe, Atlántico" />
        <InfoItem label="Millas naúticas" value="00000000" />
      </Box>
      <IconButton sx={styles.deleteButton} size="medium">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default Boat;
