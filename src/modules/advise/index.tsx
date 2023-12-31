import React, { memo } from 'react';
import Banner from './components/banner';
import List from './components/list';

type Props = {
  //
};

const AdviseContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <List />
    </>
  );
};

export default memo(AdviseContainer);
