import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

async function logoutRoute(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false });
}
