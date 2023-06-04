import { Typography } from '@mui/material';

export default function Title({ title }) {
  return (
    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
      {title}
    </Typography>
  );
}
