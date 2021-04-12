import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);
// swr은 data가 존재하지 않으면 로딩중이다.

export default fetcher;
