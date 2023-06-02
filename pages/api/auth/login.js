import { apiBaseUrl } from '@/lib/api-utils';
import axios from 'axios';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';

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

    const user = { isLoggedIn: true, ...data };

    req.session.user = user;

    await req.session.save();

    res.status(200).json({ user });
  } catch (error) {
    console.log('e', error);
    res.json(error);
  }
}, sessionOptions);
