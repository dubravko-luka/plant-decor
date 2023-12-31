import React, { memo } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';
import Svg from '@/components/Svg';
import Link from 'next/link';

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
            <h2 className={`${styles.title}`}>Liên Hệ Để Được Tư Vấn</h2>
            <div className="flex justify-center item-center gap-5 flex-wrap">
              <div className={`${styles.description}`}>
                <Svg
                  class={styles.icon}
                  name='phone-circle'
                />
                <Link href="tel:0907777709" className={`${styles.descriptionText}`}>0907.777.709</Link>
              </div>
              <div className={`${styles.description}`}>
                <Svg
                  class={styles.icon}
                  name='zalo-circle'
                />
                <Link href="https://zalo.me/0907777709" className={`${styles.descriptionText}`}>Xưởng Cây Cảnh</Link>
              </div>
              <div className={`${styles.description}`}>
                <Svg
                  class={styles.icon}
                  name='facebook-circle'
                />
                <Link href="https://www.facebook.com/sdecorhochiminh" className={`${styles.descriptionText}`}>Fanpage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
