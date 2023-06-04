import { ArrowBack, ArrowBackIos, ChevronLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

export default function BackButton({ path }) {
  const router = useRouter();

  const clickHandler = () => router.replace(path);

  return (
    <>
      <IconButton onClick={clickHandler}>
        <ArrowBackIos fontSize='small' />
      </IconButton>
    </>
  );
}
