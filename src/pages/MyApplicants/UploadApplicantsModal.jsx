import { styles } from './styles';
import ModalTitle from '../../components/ModalTitle/ModalTitle';
import { Field, Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Modal, Stack, Typography } from '@mui/material';

function UploadApplicantsModal({ open, onClose }) {
  return (
    <Modal
      sx={{ margin: '20px' }}
      open={open}
      onClose={onClose}
      aria-labelledby="add-applicant-modal-title"
      aria-describedby="add-applicant-modal-description">
      <Box sx={styles.modalContainer}>
        <IconButton sx={styles.closeBtn} onClick={onClose} aria-label="Close add boat modal">
          <CloseIcon />
        </IconButton>
        <ModalTitle textAlign="center" id="add-applicant-modal-title">
          Carga de aspirante
        </ModalTitle>
        <Typography
          id="add-applicant-modal-description"
          sx={{
            maxWidth: '360px',
            textAlign: 'center',
            lineHeight: 1.3,
            margin: (theme) => theme.spacing(3, 'auto', 5, 'auto'),
            color: (theme) => theme.palette.gray.main
          }}>
          A continuación carga tu matriz de excel con los aspirantes que desees subir a tu
          plataforma
        </Typography>
        <Box sx={{ maxWidth: '400px', margin: '0 auto' }}>
          <Formik
            initialValues={{
              data: ''
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values) => console.log(values)}>
            {({ errors }) => (
              <Form>
                <Stack spacing={3}>
                  <Field
                    label="Carga de aspirante"
                    name="data"
                    id="data"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    as={Input}
                    error={!!errors.data}
                    helperText={errors.data}
                  />
                  <Box textAlign="center">
                    <Button
                      color="primary"
                      variant="contained"
                      disableElevation
                      sx={{ padding: '14px', width: '280px' }}>
                      Guardar cambios
                    </Button>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
}

export default UploadApplicantsModal;
