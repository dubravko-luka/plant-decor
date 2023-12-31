import React, { memo } from 'react';
import styles from './styles.module.css'
import Banner from './components/banner';
import List from './components/list';

type Props = {
  //
};

const ProjectContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <List />
    </>
  );
};

export default memo(ProjectContainer);
