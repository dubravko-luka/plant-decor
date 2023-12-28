import React, { memo } from 'react';
import styles from './styles.module.css'
import { AppRoutes } from '@/constants/routes';
import { alt } from '@/constants';

type Props = {
  // 
};

const NotFoundData: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className='px-2'>
          <img className={styles.img} src="/images/png/not-found.png" alt={alt} />
          <h1 className='s410:text-xl text-base text-white text-center mt-10 uppercase'>Không tìm thấy dữ liệu!</h1>
        </div>
      </div>
    </>
  );
};

export default memo(NotFoundData);
