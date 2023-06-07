import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { ArrowBackIos } from '@mui/icons-material';
import SearchBox from './searchbox';
import ProductListCard from '@/components/common/card/productListCard';
import { Box, Typography } from '@mui/material';
import useSWR from 'swr';
import { useFormik } from 'formik';
import { fetcher } from '@/lib/fetchers';
import SkeletonCard from '@/components/common/card/productListCard/skeletonCard';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function ProductSearch({ open, onClose }) {
  const formik = useFormik({ initialValues: { search: '' } });
  // const [data, setData] = React.useState([]);

  const { data, isLoading, error } = useSWR(
    () => 'https://dummyjson.com/products/search?q=' + formik.values.search,
    fetcher
  );

  // if (error) console.log('error', error);
  if (error) toast('Fetch product list error');

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
        {data?.products?.map((p, idx) => {
          return (
            <Box display={'flex'} justifyContent={'center'} mt={1} key={idx}>
              <ProductListCard product={p} onCloseDialog={onClose} />
            </Box>
          );
        })}
        {isLoading &&
          [1, 2].map((s, i) => (
            <Box display={'flex'} justifyContent={'center'} mt={1} key={i}>
              <SkeletonCard />
            </Box>
          ))}
        {data?.products?.length === 0 && (
          <Typography textAlign={'center'} variant='h6' mt={3}>
            No matches found
          </Typography>
        )}
      </Dialog>
    </div>
  );
}
