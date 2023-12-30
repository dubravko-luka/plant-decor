import React, { memo } from 'react';
import Banner from './components/banner';
import Section1 from './components/section-1';
import Section2 from './components/section-2';
import Section3 from './components/section-3';
import Section4 from './components/section-4';
import Section5 from './components/section-5';

type Props = {
  //
};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

export default memo(Home);
