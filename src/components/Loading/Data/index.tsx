import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const LoadingData: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}></div>
      </div>
    </>
  );
};

export default memo(LoadingData);
