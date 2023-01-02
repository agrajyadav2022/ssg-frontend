import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import applicant from '../../assets/images/applicant.png';
import InfoItem from '../InfoItem/InfoItem';
import { styles } from './styles';

function Applicant() {
  return (
    <Paper component="article" sx={styles.container}>
      <Box sx={styles.leftCol}>
        <Avatar sx={{ width: 90, height: 90 }} alt="Photo of Boat" src={applicant} />
        <Typography component="h3" sx={styles.boatName}>
          Cesar Ricardo <span>Alarcón Cardona</span>
        </Typography>
      </Box>
      <Box sx={styles.midCol}>
        <Box>
          <InfoItem label="ID" value="242489" />
          <InfoItem label="Brand" value="NCL" />
        </Box>
        <Box>
          <InfoItem label="DOB" value="09/05/1995" />
          <InfoItem label="Position Approved" value="Rest Stewar" />
        </Box>
        <Box>
          <InfoItem label="Nationality" value="Colombia" />
          <InfoItem label="Lenguage 1" value="Spanish" />
        </Box>
        <Box>
          <InfoItem label="Lenguage 2" value="English" />
          <InfoItem label="Recruiter" value="Pilar Rodríguez" />
        </Box>
        <Box>
          <InfoItem label="Interviewer" value="Beatríz Eguaras" />
          <InfoItem label="Status" status="green" value="Assigned documentation" />
        </Box>
      </Box>
      <Button
        sx={{ width: '148px', padding: '10px', alignSelf: 'center' }}
        disableElevation
        color="secondary"
        variant="contained">
        Ver más
      </Button>
    </Paper>
  );
}

export default Applicant;
