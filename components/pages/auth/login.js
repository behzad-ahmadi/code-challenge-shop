import useUser from '@/hooks/useUser';
import { login } from '@/lib/api-utils';
import axiosError from '@/lib/axiosError';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useEffect } from 'react';

export default function Login() {
  const { mutateUser, user: myUser } = useUser({
    redirectIfFound: true,
    redirectTo: '/',
  });

  const formik = useFormik({
    initialValues: { username: ' ', password: ' ' },

    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),

    onSubmit: async (values) => {
      console.log('values', values);

      try {
        const { user } = await login({
          username: values.username,
          password: values.password,
        });

        mutateUser();

        toast('Dear ' + user.firstName + ' successfully logged in', {
          type: 'success',
        });
      } catch (error) {
        const err = axiosError(error);
        console.log('Error', err.message);

        // notify the error
        toast(err.message, { type: 'error' });
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue('username', 'fokillq');
    formik.setFieldValue('password', 'xZnWSWnqH');
  }, []);

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' fontWeight='bold' variant='h5'>
          Login To Site
        </Typography>

        <Typography component='label' variant='body2' mt={2}>
          Please enter your username and password
        </Typography>

        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin='normal'
            fullWidth
            id='username'
            label='Email address'
            placeholder='Enter your email address'
            name='username'
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            error={formik.errors.username && formik.touched.username}
          />

          <TextField
            margin='normal'
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.errors.password && formik.touched.password}
          />

          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            loading={formik.isSubmitting}
          >
            Log in
          </LoadingButton>

          <Grid container>
            <Grid item xs textAlign={'end'}>
              <Link href='/' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
