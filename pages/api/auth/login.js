import { apiBaseUrl } from '@/lib/api-utils';
import { sessionOptions } from '@/lib/session';
import axios from 'axios';
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(async (req, res) => {
  const { username, password } = req.body;

  try {
    const { data } = await axios.post(
      apiBaseUrl + '/auth/login',
      { username, password },
      {
        headers: { 'Content-Type': 'application/json', timeout: 5000 },
      }
    );
    console.log('user', data);
    const user = { isLoggedIn: true, ...data };

    req.session.user = user;

    await req.session.save();

    res.status(200).json({ user });
  } catch (error) {
    console.log('e', error);
    res.json(error);
  }
}, sessionOptions);
