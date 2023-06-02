import { getProducts, login, resources } from '@/lib/api-utils';
import axiosError from '@/lib/axiosError';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        // const result = await getProducts({ authToken: '' });

        const user = await login({
          username: 'atuny0',
          password: '9uQFF1Lh',
        });

        // const result = await resources({ authToken: user.token });

        console.log('result', user);
      } catch (error) {
        const { message, status } = axiosError(error);

        console.log('err message', message);
        console.log('err status', status);
      }
    })();
  }, []);

  return <>Home</>;
}
