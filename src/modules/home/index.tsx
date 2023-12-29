import React, { memo } from 'react';
import styles from './styles.module.css'
import Banner from './components/banner';
import Section1 from './components/section-1';
import Section2 from './components/section-2';
import Section3 from './components/section-3';
import Section4 from './components/section-4';

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
    </>
  );
};

export default memo(Home);
