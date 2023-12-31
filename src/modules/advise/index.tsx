import React, { memo } from 'react';
import Banner from './components/banner';

type Props = {
  //
};

const AdviseContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default memo(AdviseContainer);
