import React, { memo } from "react";
import styles from './styles.module.css'

const OutstandingService: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrap} py-10 container`}>
        <p className="font-bold sm:text-3xl text-2xl mb-10">
          <span className="text-orange-main sm:text-3xl text-2xl font-bold">LONGTRAN</span> DECOR LA NOI :
        </p>
        <div className="grid grid-cols-12 md:gap-10 gap-x-0 gap-y-10">
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/pencil.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm`}>THIẾT KẾ ĐA DẠNG</p>
            </div>
            <p className={`${styles.description} text-base`}>Nhà phố, Biệt thự, Chung cư, nhà hàng-khách sạn, Homestay, Bar/beerclub, Shop, Showroom, Nail,...</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/smile.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm`}>CAM KẾT KHÔNG PHÁT SINH</p>
            </div>
            <p className={`${styles.description} text-base`}>Có bản kế hoạch đầy đủ các hạng mục cần thiết kế và lên chi phí dự trù, từng bước giải quyết theo nhu cầu của khách hàng.</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/smile.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm`}>BÁO GIÁ NHANH NHẤT</p>
            </div>
            <p className={`${styles.description} text-base`}>Có xưởng sản xuất nội thất nên sản phẩm đưa ra đạt chất lượng và giá cả hợp lí.</p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/icons/clock.svg" alt="" />
            <div className={styles.wrapName}>
              <p className={`${styles.name} text-sm`}>ĐƠN VỊ UY TÍN NHẤT VIỆT NAM</p>
            </div>
            <p className={`${styles.description} text-base`}>Có hơn 66,879 khách hàng trong và ngoài nước hài lòng về chất lượng và dịch vụ.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(OutstandingService)