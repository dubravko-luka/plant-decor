import React, { memo } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';

type Props = {
  //
};

const Section2: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <img className={styles.bgSectionWave} src="/images/png/wave-2.png" alt={alt} />
        <div className={`${styles.container}`}>
          <h2 className={`${styles.subtitle}`}>Vườn Trong Nhà</h2>
          <h2 className={`${styles.title}`}>KHÔNG GIAN XANH CHO CĂN NHÀ CỦA BẠN</h2>
          <div className="pt-16">
            <div className="grid grid-cols-12 lg:gap-20 llg:gap-10 md:gap-7 gap-x-0 gap-y-16">
              <div className="md:col-span-4 col-span-12">
                <div className={styles.iconService}>
                  <img className={styles.imgIconService} src="/images/png/home-design.png" alt={alt} />
                </div>
                <p className={`${styles.titleService}`}>Thiết Kế và Tư Vấn</p>
                <p className={`${styles.descriptionService}`}>
                  {`Chúng tôi chuyên cung cấp dịch vụ thiết kế và tư vấn sáng tạo, giúp tạo ra không gian xanh tươi mới ngay trong không gian sống của bạn. Tận dụng kiến thức chuyên sâu, chúng tôi hỗ trợ bạn xây dựng và chăm sóc một không gian xanh độc đáo và thư giãn.`}
                </p>
              </div>
              <div className="md:col-span-4 col-span-12">
                <div className={styles.iconService}>
                  <img className={styles.imgIconService} src="/images/png/home-construction.png" alt={alt} />
                </div>
                <p className={`${styles.titleService}`}>Trang Trí và Thi Công</p>
                <p className={`${styles.descriptionService}`}>
                  {`Đội ngũ chuyên gia của chúng tôi không chỉ thi công mà còn mang đến sự tinh tế trong trang trí cây xanh và các yếu tố thiên nhiên. Chúng tôi đảm bảo mọi chi tiết được chăm chút, tạo điểm nhấn tuyệt vời cho không gian sống của bạn.`}
                </p>
              </div>
              <div className="md:col-span-4 col-span-12">
                <div className={styles.iconService}>
                  <img className={styles.imgIconService} src="/images/png/home-advise.png" alt={alt} />
                </div>
                <p className={`${styles.titleService}`}>Tư Vấn Nội Thất Xanh</p>
                <p className={`${styles.descriptionService}`}>
                  {`Với sự hiểu biết sâu rộng về việc kết hợp không gian sống với cây xanh, chúng tôi cung cấp dịch vụ tư vấn nội thất xanh, giúp bạn tạo ra không gian sống thân thiện với thiên nhiên và tạo điểm nhấn độc đáo cho ngôi nhà của bạn.`}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-14 flex justify-center items-center">
            <button className={`${styles.btnRegisterAdvise}`}>Đăng ký tư vấn ngay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Section2);
