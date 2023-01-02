import { Field, Form, Formik } from 'formik';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageTitle from '../../components/PageTitle/PageTitle';
import * as Yup from 'yup';
import Input from '../../components/Input/Input';
import { Box, Button, Stack } from '@mui/material';

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Required'),
  newPassword: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required')
});

function ChangePassword() {
  return (
    <PageLayout>
      <Box sx={{ maxWidth: '500px', margin: (theme) => theme.spacing(10, 'auto', 0, 'auto') }}>
        <Box mb={5}>
          <PageTitle textAlign="center">Change Password</PageTitle>
        </Box>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => console.log(values)}>
          {({ errors }) => (
            <Form>
              <Stack spacing={3}>
                <Field
                  label="Current Password"
                  name="currentPassword"
                  id="currentPassword"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.currentPassword}
                  helperText={errors.currentPassword}
                />
                <Field
                  label="New Password"
                  name="newPassword"
                  id="newPassword"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword}
                />
                <Field
                  label="Confirm new Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  as={Input}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
                <Button
                  sx={{ height: '50px' }}
                  disableElevation
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained">
                  Update Password
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </PageLayout>
  );
}

export default ChangePassword;
