import { Box, Button, Stack, Link } from '@mui/material';
import styles from '../../styles/FormSubmitBtn';
import Input from '../../components/Input/Input';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import FormCard from '../../components/FormCard/FormCard';
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout';
import { Link as RouterLink } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required')
});

const initialValues = {
  email: '',
  password: ''
};

function Home() {
  return (
    <FormPageLayout>
      <FormCard
        heading="Inicio de sesión"
        subHeading="Bienvenido, ingresa tus credenciales para iniciar sesión">
        <Formik
          initialValues={initialValues}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}>
          {({ errors }) => (
            <Form>
              <Stack spacing={4}>
                <Field
                  label="Correo electrónico"
                  placeholder="Escribe tu correo electrónico"
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
                  label="Contraseña"
                  placeholder="Escribe tu contraseña"
                  name="password"
                  id="password"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <Box>
                  <Button
                    sx={styles.submitBtn}
                    disableElevation
                    variant="contained"
                    type="submit"
                    color="primary">
                    Ingresa ahora
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
        <Box sx={{ marginTop: (theme) => theme.spacing(2), textAlign: 'center' }}>
          <Link
            sx={{ fontSize: '14px' }}
            underline="hover"
            component={RouterLink}
            to="/reset-password">
            Forgot password?
          </Link>
        </Box>
      </FormCard>
    </FormPageLayout>
  );
}

export default Home;
