import React, { memo } from 'react';
import styles from './styles.module.css'
import Banner from './components/banner';
import Section1 from './components/section-1';
import Section2 from './components/section-2';

type Props = {
  //
};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Section1 />
      <Section2 />
    </>
  );
};

export default memo(Home);
