import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Svg';

type Props = {
  //
};

const What: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper} sm:px-10 px-5 py-10 `}>
        <div className="mt-5 pt-10 relative z-[2]">
          <div className={`grid grid-cols-12 lg:gap-5 gap-y-10`}>
            <div className="xl:col-span-6 lg:col-span-5 col-span-12 lg:order-2">
              <div className="llg:col-span-6 col-span-12">
                <h1 className={`text-3xl font-bold text-black ${styles.nameSection}`}>Điều gì khiến Vườn Trong Nhà tự hào</h1>
                <p className='text-black text-sm font-light mt-3'>Chúng tôi tự hào với sứ mệnh tạo ra không gian sống xanh - một không gian gần gũi với thiên nhiên, đem lại sự thư giãn và tươi mới cho mọi người. Sự tận tâm và chuyên nghiệp của đội ngũ chúng tôi không chỉ thể hiện qua việc tư vấn, thiết kế và trang trí, mà còn qua việc chăm sóc và hỗ trợ khách hàng mỗi bước đi trong hành trình tạo nên không gian sống xanh độc đáo và tinh tế.</p>
                <div className="mt-5">
                  <div className="pt-5 flex justify-end items-center">
                    <button className={`${styles.btnRegisterAdvise}`}>Đăng ký tư vấn ngay</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-7 col-span-12 lg:order-1">
              <div className="w-full grid grid-cols-12 xl:gap-10 md:gap-x-5 gap-y-10">
                <div className="md:col-span-6 col-span-12 lg:pr-2 md:pr-10">
                  <Svg
                    class={styles.icon}
                    name='customer-access'
                  />
                  <h2 className={styles.title}>Tiếp cận khách hàng</h2>
                  <h3 className={styles.description}>Tiếp cận 300 khách hàng tại đồng bằng sông Cửu Long</h3>
                </div>
                <div className="md:col-span-6 col-span-12 lg:pr-2 md:pr-10">
                  <Svg
                    class={styles.icon}
                    name='analysis'
                  />
                  <h2 className={styles.title}>Hệ thống phân tích</h2>
                  <h3 className={styles.description}>Tối đa hóa vận hành thiết kế và chuyển đổi người dùng</h3>
                </div>
                <div className="md:col-span-6 col-span-12 lg:pr-2 md:pr-10">
                  <Svg
                    class={styles.icon}
                    name='pay'
                  />
                  <h2 className={styles.title}>Thanh toán nội địa</h2>
                  <h3 className={styles.description}>Phương thức thanh toán đa dạng giúp tối đa hóa lợi nhuận</h3>
                </div>
                <div className="md:col-span-6 col-span-12 lg:pr-2 md:pr-10">
                  <Svg
                    class={styles.icon}
                    name='analysis'
                  />
                  <h2 className={styles.title}>Hệ thống CRM & Chăm sóc khách hàng</h2>
                  <h3 className={styles.description}>Tối ưu hóa hành trình của khách hàng với cuộc sống xanh</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(What);
