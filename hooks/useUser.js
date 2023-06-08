import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import { getUser } from '@/lib/api-utils';
import { toast } from 'react-toastify';
import { fetcher } from '@/lib/fetchers';
import axios from 'axios';

export default function useUser({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  // const {
  //   data: user,
  //   mutate: mutateUser,
  //   error,
  // } = useSWR('/api/user', fetcher);
  const {
    data: { data: user } = {},
    mutate: mutateUser,
    error,
  } = useSWR(
    '/api/user',
    (url) =>
      axios
        .get(url)
        .then((res) => res)
        .catch((e) => console.log(e)),
    { refreshInterval: 0, revalidateOnFocus: true, errorRetryCount: 3 }
  );

  useEffect(() => {
    console.log('us', user);
    // if (error) toast('Error in getting user info', { type: 'error' });
    if (error) console.log('Error in getting user info', error);
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo, error]);

  return { user, mutateUser };
}
