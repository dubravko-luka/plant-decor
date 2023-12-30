import React, { memo } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';
import { logo } from '@/assets/images/logo';

type Props = {
  //
};

const Banner: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <img className={styles.bannerImg} src="/images/jpg/introduce-banner.jpg" alt={alt} />
        <img className={styles.bannerWave} src="/images/png/wave.png" alt={alt} />
        <div className={`${styles.container}`}>
          <div className={`${styles.slogan}`}>
            <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
            <h3 className={`${styles.description}`}>KIẾN TRÚC - XÂY DỰNG - NỘI THẤT - SÂN VƯỜN</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
