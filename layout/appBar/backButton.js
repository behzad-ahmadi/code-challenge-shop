import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

export default function BackButton({ path }) {
  const router = useRouter();

  const clickHandler = () => {
    if (!path) router.back();
    else router.replace(path);
  };

  return (
    <>
      <IconButton onClick={clickHandler} sx={{ mr: 1 }}>
        <ArrowBackIos fontSize='small' />
      </IconButton>
    </>
  );
}
