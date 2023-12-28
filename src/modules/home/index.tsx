import React, { memo } from 'react';
import styles from './styles.module.css'
import Banner from './components/banner';

type Props = {
  //
};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default memo(Home);
