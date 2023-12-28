import React, { memo } from 'react';
import styles from './styles.module.css'
import { Divider } from 'antd';
import Svg from '@/components/Svg';

type Props = {
  //
};

const List: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        {
          new Array(35).fill(null).map((item, index) => (
            <div
              className={`${styles.wrapper} xl:col-span-3 md:col-span-4 s450:col-span-6 col-span-12`}
              key={index}
            >
              <div className={`${styles.head}`}>
                <p className='text-10 text-center font-bold'>P014 - 079.725.7501</p>
                <div className="flex justify-center items-center gap-5">
                  <p className='text-10 text-center font-bold flex items-center justify-center'>
                    <Svg class={styles.icon} name='bike' />
                    2
                  </p>
                  <p className='text-10 text-center font-bold flex items-center justify-center'>
                    <Svg class={styles.icon} name='person-1' />
                    2
                  </p>
                </div>
                <p className='text-10 text-center font-bold uppercase'>Trương Thị Như Quỳnh</p>
              </div>
              <div className={`${styles.body}`}>
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>Đang ở</p>
                  <p className='text-xs font-bold'>-6(1/1/2024)</p>
                </div>
                <Divider className='my-2 !bg-black opacity-40' />
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>KTHĐ</p>
                  <p className='text-xs font-bold'>-6(1/1/2024)</p>
                </div>
                <Divider className='my-2 !bg-black opacity-40' />
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>Giá thuê</p>
                  <p className='text-xs font-bold'>5.200.000</p>
                </div>
                <Divider className='my-2 !bg-black opacity-40' />
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>Tiền đã cọc</p>
                  <p className='text-xs font-bold'>5.200.000</p>
                </div>
                <Divider className='my-2 !bg-black opacity-40' />
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>Đ-N</p>
                  <p className='text-xs font-bold'>1.200.000</p>
                </div>
                <Divider className='my-2 !bg-black opacity-40' />
                <div className="flex justify-between gap-1 items-center mt-2">
                  <p className='text-xs'>XNĐN T1</p>
                  <p className='text-xs font-bold'>6.636.000</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(List);
