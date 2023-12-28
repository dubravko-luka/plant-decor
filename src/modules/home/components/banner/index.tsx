import React, { memo } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';

type Props = {
  //
};

const Banner: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <img className={styles.bannerImg} src="/images/jpg/banner.jpg" alt={alt} />
        <img className={styles.bannerWave} src="/images/png/wave.png" alt={alt} />
        <div className={`${styles.container}`}>
          <div className={`${styles.slogan}`}>
            <h2 className={`${styles.title}`}>Đem lại trải nghiệm không gian chất lượng cao</h2>
            <h3 className={`${styles.description}`}>VUONTRONGNHA là công ty chuyên thiết kế vườn trong nhà với hơn 5 năm trong lĩnh vực thiết kế</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
