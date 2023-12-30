import React, { memo } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';
import Svg from '@/components/Svg';
import Link from 'next/link';

type Props = {
  //
};

const Section4: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <h2 className={`${styles.title}`}>Vườn Trong Nhà</h2>
          <h3 className={`${styles.subtitle}`}>Nơi bạn có thể tìm thấy không gian xanh cho cuộc sống của bạn</h3>
          <div className="grid grid-cols-12 sm:gap-5 ssm:gap-3 gap-y-3">
            <Link href={'/'} className={`${styles.wrapCard} xl:col-span-3 ssm:col-span-6 col-span-12`}>
              <div className={`${styles.wrapImgCard}`}>
                <img className={styles.imgCard} src="/images/jpg/home-image-1.jpg" alt={alt} />
              </div>
              <div className="p-5">
                <p className={`${styles.projectDate}`}>2023/11/13</p>
                <h2 className={`${styles.projectName}`}>Nhà chị Trang Quận 1</h2>
                <p className={`${styles.projectDescription}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias pariatur minima ipsum hic. Dolorum architecto, eius facilis cupiditate ipsa magni optio labore velit quam delectus voluptates. Quidem, odio est?</p>
                <div className={`${styles.projectReadMore}`}>
                  READMORE
                  <Svg
                    name='chev-right-circle'
                    path='icons'
                  />
                </div>
              </div>
            </Link>
            <Link href={"/"} className={`${styles.wrapCard} xl:col-span-3 ssm:col-span-6 col-span-12`}>
              <div className={`${styles.wrapImgCard}`}>
                <img className={styles.imgCard} src="/images/jpg/home-image-2.jpg" alt={alt} />
              </div>
              <div className="p-5">
                <p className={`${styles.projectDate}`}>2023/11/13</p>
                <h2 className={`${styles.projectName}`}>Nhà anh Tuấn Quận 3</h2>
                <p className={`${styles.projectDescription}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias pariatur minima ipsum hic. Dolorum architecto, eius facilis cupiditate ipsa magni optio labore velit quam delectus voluptates. Quidem, odio est?</p>
                <div className={`${styles.projectReadMore}`}>
                  READMORE
                  <Svg
                    name='chev-right-circle'
                    path='icons'
                  />
                </div>
              </div>
            </Link>
            <Link href={'/'} className={`${styles.wrapCard} xl:col-span-3 ssm:col-span-6 col-span-12`}>
              <div className={`${styles.wrapImgCard}`}>
                <img className={styles.imgCard} src="/images/jpg/home-image-3.jpg" alt={alt} />
              </div>
              <div className="p-5">
                <p className={`${styles.projectDate}`}>2023/11/13</p>
                <h2 className={`${styles.projectName}`}>Nhà chị Linh Quận 2</h2>
                <p className={`${styles.projectDescription}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias pariatur minima ipsum hic. Dolorum architecto, eius facilis cupiditate ipsa magni optio labore velit quam delectus voluptates. Quidem, odio est?</p>
                <div className={`${styles.projectReadMore}`}>
                  READMORE
                  <Svg
                    name='chev-right-circle'
                    path='icons'
                  />
                </div>
              </div>
            </Link>
            <Link href={'/'} className={`${styles.wrapCard} xl:col-span-3 ssm:col-span-6 col-span-12`}>
              <div className={`${styles.wrapImgCard}`}>
                <img className={styles.imgCard} src="/images/jpg/home-image-1.jpg" alt={alt} />
              </div>
              <div className="p-5">
                <p className={`${styles.projectDate}`}>2023/11/13</p>
                <h2 className={`${styles.projectName}`}>Nhà chị Trang Quận 1</h2>
                <p className={`${styles.projectDescription}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias pariatur minima ipsum hic. Dolorum architecto, eius facilis cupiditate ipsa magni optio labore velit quam delectus voluptates. Quidem, odio est?</p>
                <div className={`${styles.projectReadMore}`}>
                  READMORE
                  <Svg
                    name='chev-right-circle'
                    path='icons'
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="pt-14 flex justify-center items-center">
            <button className={`${styles.btnReadMore}`}>Xem Tất Cả Dự Án</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Section4);
