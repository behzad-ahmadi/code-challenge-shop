import { ArrowBack, ArrowBackIos, ChevronLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
