import useUser from '@/hooks/useUser';
import { apiBaseUrl, getProducts, login } from '@/lib/api-utils';
import axiosError from '@/lib/axiosError';
import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

// const fetcher = (url) =>
//   axios.get(url).then((res) => {
//     console.log('url', url);
//     return res.data;
//   });

export default function Home() {
  // const { user } = useUser();
  // const { data, error, isLoading } = useSWR('products', () =>
  //   getProducts({ authToken: 's' })
  // );

  // useEffect(() => {
  //   console.log('productss', data);
  //   console.log('error', error);
  //   console.log('isLoading', isLoading);
  // }, [data, error, isLoading]);

  useEffect(() => {
    // console.log('Home USer', user);
    (async () => {
      try {
        // const result = await getProducts({ authToken: '' });
        // const user = await login({
        //   username: 'atuny0',
        //   password: '9uQFF1Lh',
        // });
        // const result = await resources({ authToken: user.token });
        // console.log('result', user);
      } catch (error) {
        const { message, status } = axiosError(error);

        console.log('err message', message);
        console.log('err status', status);
      }
    })();
  }, []);

  return <>Home</>;
}
