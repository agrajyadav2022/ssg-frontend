import { Box, Button, ButtonBase, InputBase, Stack, Tooltip } from '@mui/material';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import FiltersIcon from '../../components/Icons/FiltersIcon';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useState } from 'react';
import { styles } from './styles';
import UploadApplicantsModal from './UploadApplicantsModal';
import Applicant from '../../components/Applicant/Applicant';

function MyAspirants() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PageLayout>
        <Box sx={styles.topRow}>
          <PageTitle>Mis aspirantes</PageTitle>
          <InputBase aria-label="Search applicants" placeholder="Buscar" sx={styles.searchInput} />
          <ButtonBase sx={styles.downloadBtn}>
            <FiltersIcon viewBox="0 0 24 24" />
          </ButtonBase>
          <Tooltip arrow placement="top" title="Download">
            <ButtonBase sx={styles.downloadBtn}>
              <DownloadIcon viewBox="0 0 20 24" />
            </ButtonBase>
          </Tooltip>
          <Button disableElevation sx={styles.btn} variant="contained" color="secondary">
            Añadir aspirante
          </Button>
          <Button
            onClick={openModal}
            disableElevation
            sx={styles.btn}
            variant="contained"
            color="primary">
            Cargar aspirantes
          </Button>
        </Box>
        <Stack sx={{ marginTop: '22px' }} spacing={2}>
          {Array.from({ length: 20 }).map((val, index) => (
            <Applicant key={index} />
          ))}
        </Stack>
      </PageLayout>
      <UploadApplicantsModal open={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default MyAspirants;
