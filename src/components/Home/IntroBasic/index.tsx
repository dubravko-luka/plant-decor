import Link from "next/link";
import React, { memo } from "react";
import styles from './styles.module.css'

const IntroBasic: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrapper} grid grid-cols-12 llg:gap-10 gap-3 py-12 container`}>
        <div className={`${styles.wrapReview} llg:col-span-6 col-span-12 h-full w-full relative`}>
          <img className={`${styles.imgReview} w-full object-cover`} src="/images/page-home/png/1.png" alt="" />
        </div>
        <div className="llg:col-span-6 col-span-12 flex items-center">
          <div className="detail">
            <div className="title text-center mb-3">
              <p className="text-green-main font-bold text-2xl">{`ĐƠN VỊ KIẾN TRÚC "VƯỜN TRONG NHÀ"`}</p>
            </div>
            <div className="description">
              <p className="mb-2">Là đơn vị chuyên thiết kế - thi công sân vườn, cung cấp cây cảnh, chế tác hòn non bộ, thi công thác nước, thiết kế quán cafe…</p>
              <p className="mb-2">&quot;
                <Link className="text-green-main" href="/">Vườn trong nhà</Link>
                &quot; tự hào mang đến khách hàng những không gian đẹp và lãng mạng nhất, tạo cảm giác thư thái cho khách hàng mỗi sáng thức dậy, hay là nơi thư giãn và nghỉ dưỡng sau những giờ làm việc mệt nhọc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(IntroBasic)