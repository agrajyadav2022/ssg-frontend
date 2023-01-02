import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { Button, Grid, Stack } from '@mui/material';
import { useState } from 'react';
import AddBoatModal from './AddBoatModal';
import Boat from '../../components/Boat/Boat';
import { styles } from './styles';

function Boats() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PageLayout>
        <Grid alignItems="center" container spacing={2}>
          <Grid item sm={6} xs={12}>
            <PageTitle>Boats</PageTitle>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button
              onClick={openModal}
              variant="contained"
              color="primary"
              disableElevation
              sx={styles.addBtn}
              startIcon={<ControlPointOutlinedIcon />}>
              Agregar barco
            </Button>
          </Grid>
        </Grid>
        <Stack sx={{ marginTop: '22px' }} spacing={2}>
          {Array.from({ length: 20 }).map((val, index) => (
            <Boat key={index} />
          ))}
        </Stack>
      </PageLayout>
      <AddBoatModal open={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Boats;
