import axios from 'axios';

export const fetcher = async ([url, args]) => {
  // console.log('arrg', args.q);
  const res = await axios.get(url, {
    headers: {
      headers: {
        Accept: '*/*',
      },
    },
    params: { q: args?.q },
  });
  return res.data;
};
