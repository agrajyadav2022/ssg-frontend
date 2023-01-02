import { Box, Button, Stack, Link } from '@mui/material';
import styles from '../../styles/FormSubmitBtn';
import Input from '../../components/Input/Input';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import FormCard from '../../components/FormCard/FormCard';
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout';
import { Link as RouterLink } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required')
});

const initialValues = {
  email: ''
};

function ResetPassword() {
  return (
    <FormPageLayout>
      <FormCard
        heading="Reset Password"
        subHeading="Please enter your email and new password will be sent to your email">
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
                <Box>
                  <Button
                    sx={styles.submitBtn}
                    disableElevation
                    variant="contained"
                    type="submit"
                    color="primary">
                    Submit
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
        <Box sx={{ marginTop: (theme) => theme.spacing(2), textAlign: 'center' }}>
          <Link sx={{ fontSize: '14px' }} underline="hover" component={RouterLink} to="/">
            Back to login
          </Link>
        </Box>
      </FormCard>
    </FormPageLayout>
  );
}

export default ResetPassword;
