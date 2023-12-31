import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const OutstandingAchievements: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper} sm:px-10 px-5 pb-10 pt-0`}>
        <div className="mt-5 pt-5 relative z-[2]">
          <div className={`grid grid-cols-12 lg:gap-5 gap-y-10`}>
            <div className="col-span-12">
              <div className="llg:col-span-6 col-span-12">
                <h1 className={`text-3xl font-bold text-black ${styles.nameSection}`}>Một số thành tích nổi bật</h1>
              </div>
            </div>
            <div className="col-span-12 mt-5">
              <div className="w-full grid grid-cols-12 ssm:gap-5 gap-y-5">
                <div className={`${styles.achievement} llg:col-span-4 ssm:col-span-6 col-span-12`}>
                  <h2 className={`${styles.titleAchievement}`}>+4 Năm</h2>
                  <h3 className={`${styles.descriptionAchievement}`}>Kinh nghiệm hơn 4 năm hoạt động</h3>
                </div>
                <div className={`${styles.achievement} llg:col-span-4 ssm:col-span-6 col-span-12`}>
                  <h2 className={`${styles.titleAchievement}`}>+1000</h2>
                  <h3 className={`${styles.descriptionAchievement}`}>Hơn 1000 dự án thiết kế, thi công nội thất</h3>
                </div>
                <div className="llg:hidden sm:block hidden col-span-3"></div>
                <div className={`${styles.achievement} llg:col-span-4 sm:col-span-6 col-span-12`}>
                  <h2 className={`${styles.titleAchievement}`}>+1000 m2</h2>
                  <h3 className={`${styles.descriptionAchievement}`}>Nhà máy sản xuất quy mô hơn 1000 m2</h3>
                </div>
                <div className="llg:hidden sm:block hidden col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(OutstandingAchievements);
