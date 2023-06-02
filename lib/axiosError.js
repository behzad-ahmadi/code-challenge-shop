import { isAxiosError } from 'axios';

export default function axiosError(error) {
  let message, status;

  if (!isAxiosError(error)) console.log(error);

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    message = error.response.data?.message || error.response.data;
    status = error.response.status;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser
    // and an instance of http.ClientRequest in node.js
    message = error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error);
  }

  return { message, status };
}
