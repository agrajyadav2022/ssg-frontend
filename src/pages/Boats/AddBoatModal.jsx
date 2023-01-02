import { Box, Button, FormControl, IconButton, MenuItem, Modal, Typography } from '@mui/material';

import ModalTitle from '../../components/ModalTitle/ModalTitle';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input/Input';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';
import SelectInput from '../../components/SelectInput/SelectInput';

const validationSchema = Yup.object().shape({
  shipNumber: Yup.string().required('Required'),
  originCountry: Yup.string().required('Required'),
  shipName: Yup.string().required('Required'),
  passengerCapacity: Yup.string().required('Required'),
  crewCapacity: Yup.string().required('Required'),
  manufactureYear: Yup.string().required('Required'),
  boatPicture: Yup.string().required('Required')
});

function AddBoatModal({ open, onClose }) {
  return (
    <Modal
      sx={{ margin: '20px' }}
      open={open}
      onClose={onClose}
      aria-labelledby="add-boat-modal-title"
      aria-describedby="add-boat-modal-description">
      <Box sx={styles.modalContainer}>
        <IconButton sx={styles.closeBtn} onClick={onClose} aria-label="Close add boat modal">
          <CloseIcon />
        </IconButton>
        <ModalTitle textAlign="center" id="add-boat-modal-title">
          Agregar nuevo barco
        </ModalTitle>
        <Typography
          id="add-boat-modal-description"
          sx={{
            maxWidth: '320px',
            textAlign: 'center',
            lineHeight: 1.3,
            margin: (theme) => theme.spacing(3, 'auto', 5, 'auto'),
            color: (theme) => theme.palette.gray.main
          }}>
          A continuación diligencia la información del barco que deseas agregar a tu plataforma
        </Typography>
        <Formik
          initialValues={{
            shipNumber: '',
            originCountry: 'London',
            shipName: '',
            passengerCapacity: '',
            crewCapacity: '',
            manufactureYear: '2021',
            boatPicture: ''
          }}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values) => console.log(values)}>
          {({ errors, values, handleChange }) => (
            <Form>
              <Box sx={styles.formContainer}>
                <Field
                  label="Número de barco"
                  name="shipNumber"
                  id="shipNumber"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.shipNumber}
                  helperText={errors.shipNumber}
                />
                <Box>
                  <FormControl fullWidth>
                    <SelectInput
                      value={values.originCountry}
                      onChange={handleChange}
                      id="originCountry"
                      name="originCountry"
                      label="País de origen"
                      labelId="originCountry">
                      <MenuItem value="Texas">Texas</MenuItem>
                      <MenuItem value="London">London</MenuItem>
                      <MenuItem value="Las Vegas">Las Vegas</MenuItem>
                    </SelectInput>
                  </FormControl>
                </Box>
                <Field
                  label="Nombre del barco"
                  name="shipName"
                  id="shipName"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.shipNumber}
                  helperText={errors.shipNumber}
                />
                <Field
                  label="Capacidad de pasajeros"
                  name="passengerCapacity"
                  id="passengerCapacity"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.shipNumber}
                  helperText={errors.shipNumber}
                />
                <Field
                  label="Capacidad de tripulación"
                  name="crewCapacity"
                  id="crewCapacity"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.shipNumber}
                  helperText={errors.shipNumber}
                />
                <Box>
                  <FormControl fullWidth>
                    <SelectInput
                      value={values.manufactureYear}
                      onChange={handleChange}
                      id="manufactureYear"
                      name="manufactureYear"
                      label="Año de fabricado"
                      labelId="manufactureYear">
                      <MenuItem value="2021">2021</MenuItem>
                      <MenuItem value="2023">2023</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                    </SelectInput>
                  </FormControl>
                </Box>
                <Field
                  label="Imagen del barco"
                  name="boatPicture"
                  id="boatPicture"
                  type="text"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.shipNumber}
                  helperText={errors.shipNumber}
                />
                <Button
                  sx={{ height: '50px' }}
                  disableElevation
                  type="submit"
                  variant="contained"
                  color="primary">
                  Guardar cambios
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default AddBoatModal;
