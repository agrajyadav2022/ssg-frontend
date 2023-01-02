import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import avatar from '../../assets/images/avatar.png';
import { Field, Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import * as Yup from 'yup';
import { styles } from './styles';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  contract: Yup.string().required('Required'),
  contactNumber: Yup.string().required('Required'),
  bankAccount: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  bank: Yup.string().required('Required'),
  identificationDocument: Yup.string().required('Required')
});

function MyProfile() {
  return (
    <PageLayout>
      <Box sx={styles.container}>
        <Box sx={styles.avatarContainer}>
          <IconButton
            sx={styles.uploadPicBtn}
            color="secondary"
            variant="contained"
            aria-label="Upload profile picture">
            <EditOutlinedIcon />
          </IconButton>
          <Avatar sx={{ width: 208, height: 208 }} alt="Remy Sharp" src={avatar} />
        </Box>
        <Box>
          <Box sx={styles.rhsCol}>
            <PageTitle>Mi perfil</PageTitle>
            <Typography component="h2" sx={styles.name}>
              Leidy Hincapié Cardona
            </Typography>
            <Button disableElevation sx={styles.editBtn} color="secondary" variant="contained">
              Editar mi información
            </Button>
            <Formik
              initialValues={{
                fullName: '',
                contract: '',
                contactNumber: '',
                bankAccount: '',
                email: '',
                bank: '',
                identificationDocument: ''
              }}
              validateOnBlur={false}
              validateOnChange={false}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}>
              {({ errors }) => (
                <Form>
                  <Box sx={styles.formContainer}>
                    <Field
                      label="Nombre completo"
                      name="fullName"
                      id="fullName"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                    />
                    <Field
                      label="Contrato"
                      name="contract"
                      id="contract"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.contract}
                      helperText={errors.contract}
                    />
                    <Field
                      label="Número de contacto"
                      name="contactNumber"
                      id="contactNumber"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber}
                    />
                    <Field
                      label="Cuenta Bancaria"
                      name="bankAccount"
                      id="bankAccount"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.bankAccount}
                      helperText={errors.bankAccount}
                    />
                    <Field
                      label="Correo electrónico"
                      name="email"
                      id="email"
                      type="email"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                    <Field
                      label="Banco"
                      name="bank"
                      id="bank"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.bank}
                      helperText={errors.bank}
                    />
                    <Field
                      label="Documento de identidad"
                      name="identificationDocument"
                      id="identificationDocument"
                      type="text"
                      InputLabelProps={{
                        shrink: true
                      }}
                      fullWidth
                      as={Input}
                      error={!!errors.identificationDocument}
                      helperText={errors.identificationDocument}
                    />
                    <Button
                      disableElevation
                      fullWidth
                      type="submit"
                      color="primary"
                      variant="contained"
                      sx={{ minHeight: '52px' }}>
                      Guardar cambios
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default MyProfile;
