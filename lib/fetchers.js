import axios from 'axios';

export const fetcher = async (url) => {
  const res = await axios.get(url, {
    headers: {
      headers: {
        Accept: '*/*',
      },
    },
  });
  return res.data;
};
