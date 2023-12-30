import React, { memo } from 'react';
import Banner from './components/banner';
import Service from './components/service';
import Vision from './components/vision';
import What from './components/what';
import OutstandingAchievements from './components/outstanding-achievements';

type Props = {
  //
};

const IntroduceContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Service />
      <Vision />
      <What />
      <OutstandingAchievements />
    </>
  );
};

export default memo(IntroduceContainer);
