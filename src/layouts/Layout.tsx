import { FC, PropsWithChildren } from 'react';

import { Navbar } from '@/components';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
