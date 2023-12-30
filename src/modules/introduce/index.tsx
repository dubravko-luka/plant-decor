import React, { memo } from 'react';
import Banner from './components/banner';
import Service from './components/service';
import Vision from './components/vision';

type Props = {
  //
};

const IntroduceContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Service />
      <Vision />
    </>
  );
};

export default memo(IntroduceContainer);
