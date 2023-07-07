import React, { memo } from "react";
import styles from './styles.module.css'
import Link from "next/link";

const OutstandingService: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrap} py-10 container`}>
        <p className="font-bold sm:text-2xl text-xl mb-10">
          TẠI SAO CHỌN &quot;
          <span>
            <Link className="text-green-main sm:text-2xl text-xl font-bold" href="/">
              VƯỜN TRONG NHÀ
            </Link>
          </span>
          &quot;? THẾ MẠNH CỦA CHÚNG TÔI LÀ GÌ ?
        </p>
        <div className="grid grid-cols-12 md:gap-10 gap-x-0 gap-y-10">
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/pencil.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm uppercase`}>Sản phẩm sáng tạo</p>
            </div>
            <p className={`${styles.description} text-base`}>Không ngừng đổi mới, cải tiến và nâng cao chất lượng sản phẩm để phục vụ nhu cầu đa dạng của thị trường.</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/smile.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm uppercase`}>Giá cả cạnh tranh</p>
            </div>
            <p className={`${styles.description} text-base`}>Chúng tôi tự tin rằng sẽ mang đến cho khách hàng những sản phẩm tốt nhất với giá cạnh tranh thị trường nhất.</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/clock.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm uppercase`}>Tiến độ chính xác</p>
            </div>
            <p className={`${styles.description} text-base`}>Luôn hoàn thành sản phẩm đúng tiến độ khi thống nhất với khách hàng, không delay làm trễ tiến độ công trình.</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/smile.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm uppercase`}>Phục vụ tận tâm</p>
            </div>
            <p className={`${styles.description} text-base`}>Có hơn 66,879 khách hàng trong và ngoài nước hài lòng về chất lượng và dịch vụ.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(OutstandingService)