import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios.post('/api/users/logout', null, { withCredentials: true }).then(() => {
      // 정보가 false로 바뀜
      revalidate();
    });
  }, []);
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
