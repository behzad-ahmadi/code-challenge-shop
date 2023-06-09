import { getProduct } from '@/lib/api-utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Test() {
  const [data, setData] = useState();

  useEffect(() => {
    setData('MYS');
    (async () => {
      const res = await getProduct({ productId: 1 });

      setData(res);
    })();
  }, []);

  useEffect(() => {
    console.log('Data', data);

    if (data) toast(data.title);
  }, [data]);
  return <>TEST {data?.title}</>;
}
