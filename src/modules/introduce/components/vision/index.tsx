import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';

type Props = {
  //
};

const Vision: React.FC<Props> = () => {

  const [vision] = useState(
    [
      {
        title: "S-Decor phấn đấu trong thời gian ngắn nhất trở thành thương hiệu thiết kế thi công nội thất hàng đầu tại Việt Nam",
        vision: [
          "Đặt chữ Tín lên vị trí hàng đầu",
          "Lấy chữ Tâm làm gốc để phát triển",
          "Coi sáng tạo là sức sống, là đòn bẩy phát triển doanh nghiệp.",
          "Xây dựng đội ngũ nhân sự tâm huyết có đủ cả Đức và Tài."
        ]
      }
    ]
  )

  return (
    <>
      <div className={`${styles.wrapper} sm:px-10 px-5 py-10 `}>
        <div className="mt-5 px-5 sm:px-10 pt-20">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="llg:col-span-6 col-span-12">
              <h1 className={`text-3xl font-bold text-black ${styles.nameSection}`}>Tầm nhìn & Giá trị cốt lõi</h1>
              <p className='text-black text-sm font-light mt-3'>{vision[0]?.title ?? ''}</p>

              <div className="mt-5">
                {
                  vision[0]?.vision?.map((item: any, index: any) => (
                    <div key={index} className={`${styles.item}`}>
                      <span className='text-black'>{item}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="llg:col-span-6 col-span-12 flex justify-center">
              <img className={styles.vision} src={'/images/png/introduce-team.png'} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Vision);
