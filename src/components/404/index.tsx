import React, { memo } from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { AppRoutes } from '@/constants/routes';
import { alt } from '@/constants';

type Props = {
  // 
};

const CommingSoon: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className='px-2'>
          <img className={styles.img} src="/images/png/not-found.png" alt={alt} />
          <h1 className='s410:text-xl text-base text-white text-center mt-10 uppercase'>Không tìm thấy trang yêu cầu</h1>
          <Link href={AppRoutes.home} className='flex justify-center mt-10'>
            <div className={styles.btnHome}>
              Quay về trang chủ
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(CommingSoon);
