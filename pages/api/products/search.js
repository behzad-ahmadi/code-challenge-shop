import { apiBaseUrl } from '@/lib/api-utils';
import axios from 'axios';

export default async function handler(req, res) {
  const { q } = req.query;
  console.log('req', q);

  const { data } = await axios.get(apiBaseUrl + '/products/search', {
    params: { q: q },
  });

  res.send(data);
}
