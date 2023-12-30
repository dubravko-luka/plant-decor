import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Svg';
import { alt } from '@/constants';

type Props = {
  //
};

const Service: React.FC<Props> = () => {

  const [service] = useState(
    [
      {
        title: "Tư vấn, thiết kế nội thất",
        content: "Mang đến giải pháp tối ưu công năng thẩm mỹ - tiết kiệm ngân sách.",
      },
      {
        title: "Thi công nội thất",
        content: "Thi công lắp đặt đúng tiến độ, đảm bảo chất lượng không phát sinh chi phí",
      },
      {
        title: "Xây dựng cải tạo & sửa chữa nhà",
        content: "Xử lý bong tróc tường, trần, sàn nhà, thiết bị nội thất xuống cấp...",
      },
      {
        title: "Sản xuất nội thất tại xưởng",
        content: "Sản xuất trực tiếp không qua trung gian tiết kiệm 20-30% chi phí",
      },
      {
        title: "Thi công sân vườn - cảnh quan",
        content: "Thi công sân vườn, chế tác hòn non bộ, thi công thác nước, thiết kế quán cafe…",
      }
    ]
  )

  return (
    <>
      <div className={`${styles.wrapper} sm:px-10 px-5 py-10 `}>
        <img className={styles.bgSectionWave} src="/images/png/wave-2.png" alt={alt} />
        <div className='relative'>
          <h1 className={`text-3xl font-bold text-black text-center ${styles.nameSection}`}>Dịch vụ chúng tôi cung cấp</h1>
          <div className={`${styles.wrapperService} flex-wrap flex gap-5 mt-10 justify-center`}>
            {
              service?.map((item: any, index: any) => (
                <div key={index} className={`${styles.serviceItem}`}>
                  <div className={`${styles.head} flex items-start justify-start gap-3`}>
                    <div className={`${styles.wrapNumber}`}>
                      <div className={`${styles.number}`}>{index + 1}</div>
                      <p></p>
                      <Svg name='bg-number' />
                    </div>
                    <h1 className={`${styles.name} font-bold text-lg`}>{item.title}</h1>
                  </div>

                  <p className="mt-5 leading-6 text-sm">{item.content}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Service);
