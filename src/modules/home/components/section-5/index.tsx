import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Svg';
import Link from 'next/link';

type Props = {
  //
};

const Section5: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <h2 className={`${styles.title}`}>LIÊN HỆ</h2>
          <div className="pt-16">
            <div className="grid grid-cols-12 sm:gap-5 gap-y-5">
              <div className={`${styles.item} sm:col-span-6 col-span-12`}>
                <Svg name="phone" />
                <Link className={`${styles.itemLink}`} href={`tel:0907777709`} target='_blank'>
                  <p className={`${styles.textContact}`}>0907.777.709</p>
                </Link>
              </div>
              <div className={`${styles.item} sm:col-span-6 col-span-12`}>
                <Svg name="zalo" />
                <Link className={`${styles.itemLink}`} href={`https://zalo.me/0907777709`} target='_blank'>
                  <p className={`${styles.textContact}`}>Xưởng Vườn Trong Nhà</p>
                </Link>
              </div>
              <div className={`${styles.item} sm:col-span-6 col-span-12`}>
                <Svg name="location" />
                <p className={`${styles.itemLink}`}>
                  <p className={`${styles.textContact}`}>CN1: 11/25 Nguyễn Thái Sơn, P3, Gò Vấp</p>
                </p>
              </div>
              <div className={`${styles.item} sm:col-span-6 col-span-12`}>
                <Svg name="location" />
                <p className={`${styles.itemLink}`}>
                  <p className={`${styles.textContact}`}>CN2: F1 Mậu Thân, An Phú, Ninh Kiều, Cần Thơ</p>
                </p>
              </div>
              <div className={`${styles.item} sm:col-span-6 col-span-12`}>
                <Svg name="email" />
                <Link className={`${styles.itemLink}`} href={`mailto:vuontrongnha@gmail.com`} target='_blank'>
                  <p className={`${styles.textContact}`}>vuontrongnha@gmail.com</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Section5);
