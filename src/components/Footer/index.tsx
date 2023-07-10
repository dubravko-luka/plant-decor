import React, { memo } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className="container py-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 text-center mb-10">
              <p className="text-2xl text-green-113 mb-5">LIÊN HỆ CHÚNG TÔI</p>
              <p className="text-white">Vui lòng liên hệ với chúng tôi để biết thêm thông tin về dịch vụ hoặc tư vấn về sản phẩm.</p>
            </div>

            <div className="md:col-span-4 col-span-12 mb-5 flex justify-center items-start h-full">
              <div>
                <img className={`${styles.icon}`} src="/images/footer/call-us.svg" alt="" />
                <p className="text-white mb-2">
                  Tel: <Link href={`tel:0929664272`} className="text-white font-bold">092 966 4272</Link>
                </p>
                <p className="text-white mb-2">
                  Zalo: <Link href={'https://zalo.me/0929664272'} className="text-white font-bold">Long Trần</Link>
                </p>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 mb-5 flex justify-center items-start h-full">
              <div>
                <img className={`${styles.icon}`} src="/images/footer/meet-us.svg" alt="" />
                <p className="text-white text-center">Unit 101, Floor 1, Centre Point Building, 106 Nguyen Van Troi Street, Ward 8, Phu Nhuan District, Ho Chi Minh City, Viet Nam</p>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 mb-5 flex justify-center items-start h-full">
              <div>
                <img className={`${styles.icon}`} src="/images/footer/email-us.svg" alt="" />
                <p className="text-white">Email: <Link href={`mailto:longtran@gmail.com`} className="text-white font-bold">longtran@gmail.com</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Footer)