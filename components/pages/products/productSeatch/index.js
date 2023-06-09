import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import SearchBox from './searchbox';
import ProductListCard from '@/components/common/card/productListCard';
import { Alert, Box, Container } from '@mui/material';
import useSWR from 'swr';
import { useFormik } from 'formik';
import { fetcher } from '@/lib/fetchers';
import SkeletonCard from '@/components/common/card/productListCard/skeletonCard';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function ProductSearch({ open, onClose }) {
  const formik = useFormik({ initialValues: { search: '' } });

  const { data, isLoading, error } = useSWR(
    ['/api/products/search', { q: formik.values.search }],
    fetcher,
    { revalidateOnFocus: false, errorRetryCount: 2, refreshInterval: 0 }
  );

  if (error) console.log('error', error);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'sticky' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={onClose}>
              <ArrowBackIos />
            </IconButton>

            <SearchBox formik={formik} />
          </Toolbar>
        </AppBar>
        {/* Search result */}
        {data?.products?.map((p, idx) => {
          return (
            <Box display={'flex'} justifyContent={'center'} mt={1} key={idx}>
              <ProductListCard product={p} onCloseDialog={onClose} />
            </Box>
          );
        })}
        {/* Loading state */}
        {isLoading &&
          [1, 2].map((s, i) => (
            <Box display={'flex'} justifyContent={'center'} mt={1} key={i}>
              <SkeletonCard />
            </Box>
          ))}
        {/* No matches message */}
        {data?.products?.length === 0 && (
          <Container sx={{ mt: 5 }}>
            <Alert severity='info' variant='filled'>
              No matches found
            </Alert>
          </Container>
        )}

        {/* Error */}
        {error && (
          <Container sx={{ mt: 5 }}>
            <Alert severity='error' variant='filled'>
              {`Something's wrong, plese try again`}
            </Alert>
          </Container>
        )}
      </Dialog>
    </div>
  );
}
