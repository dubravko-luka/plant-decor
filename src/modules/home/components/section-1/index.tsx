import React, { memo } from 'react';
import styles from './styles.module.css'
import { tick } from '@/assets/images/icon';
import { alt } from '@/constants';

type Props = {
  //
};

const WeAre: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container} grid grid-cols-12`}>
          <div className="md:col-span-6 col-span-12 flex items-center justify-center">
            <div>
              <h2 className={`${styles.title}`}>Vườn Trong Nhà</h2>
              <h3 className={`${styles.shortTitle}`}>CHÚNG TÔI CUNG CẤP DỊCH VỤ THIẾT KẾ VƯỜN TRONG NHÀ TOÀN DIỆN NHẤT TẠI VIỆT NAM</h3>
              <p className={`${styles.description}`}>{`"Vườn Trong Nhà" - Một không gian xanh tươi mới ngay tại căn nhà của bạn! Tận hưởng không gian tươi mát và thư giãn với việc trang trí và thiết kế vườn trong nhà. Lựa chọn cẩn thận cây xanh, chậu và vị trí phù hợp để tạo ra một không gian sống gần gũi với thiên nhiên, mang lại sự tươi mới và sự thư thái cho không gian sống hàng ngày của bạn.`}</p>
              <ul className={`${styles.listFeature}`}>
                <li className={`${styles.itemFeature}`}>
                  <div className={`${styles.iconTick}`} dangerouslySetInnerHTML={{ __html: tick }}></div>
                  <span>+6 năm kinh nghiệm</span>
                </li>
                <li className={`${styles.itemFeature}`}>
                  <div className={`${styles.iconTick}`} dangerouslySetInnerHTML={{ __html: tick }}></div>
                  <span>+1000 khách hàng</span>
                </li>
                <li className={`${styles.itemFeature}`}>
                  <div className={`${styles.iconTick}`} dangerouslySetInnerHTML={{ __html: tick }}></div>
                  <span>+1000 công trình đã hoàn thành</span>
                </li>
              </ul>
              <button className={`${styles.btnRegisterAdvise}`}>Đăng ký tư vấn ngay</button>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:pt-0 pt-10">
            <div className={`${styles.product} grid grid-cols-12`}>
              <div className={`${styles.wrapProduct} col-span-6`}>
                <img className={`${styles.imgProduct}`} src="/images/jpg/home-image-1.jpg" alt={alt} />
              </div>
              <div className={`${styles.wrapProduct} col-span-6`}>
                <img className={`${styles.imgProduct}`} src="/images/jpg/home-image-2.jpg" alt={alt} />
              </div>
              <div className={`${styles.wrapProduct} col-span-6`}>
                <img className={`${styles.imgProduct}`} src="/images/jpg/home-image-3.jpg" alt={alt} />
              </div>
              <div className={`${styles.wrapProduct} col-span-6`}>
                <img className={`${styles.imgProduct}`} src="/images/jpg/home-image-4.jpg" alt={alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(WeAre);
