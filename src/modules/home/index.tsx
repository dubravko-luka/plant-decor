import React, { memo } from 'react';
import styles from './styles.module.css'
import Banner from './components/banner';
import Section1 from './components/section-1';

type Props = {
  //
};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Section1 />
    </>
  );
};

export default memo(Home);
