import React, { PropsWithChildren } from 'react';

import Header from '../../../components/Header';

const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
