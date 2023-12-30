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
        <img className={styles.bannerImg} src="/images/jpg/contact-banner.jpg" alt={alt} />
        <img className={styles.bannerWave} src="/images/png/wave.png" alt={alt} />
        <div className={`${styles.container}`}>
          <div className={`${styles.slogan}`}>
            <h2 className={`${styles.title}`}>Liên hệ chúng tôi</h2>
            <h3 className={`${styles.description}`}>Chúng tôi luôn lắng nghe, thấu hiểu và mang lại cho không gian sống trở nên xanh hơn</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
