import Login from '@/components/pages/auth/login';
import useAppBar from '@/hooks/useAppBar';

export default function LoginPage() {
  useAppBar().setTitle('Login');

  return <Login />;
}
