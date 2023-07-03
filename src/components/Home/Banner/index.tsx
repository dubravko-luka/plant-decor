import React, { memo } from "react";
import styles from './styles.module.css'
import Svg from "@/components/Svg";
import { formatNumberLess } from "@/helpers/numbers";

const Banner: React.FC = () => {
  const date = new Date()

  return (
    <>
      <div className="h-screen w-screen relative">
        <img className="relative w-full h-full object-cover brightness-50" src="/images/page-home/png/banner.png" alt="" />
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-md text-white mb-10">DAPK - OTEMKOWFLNESS & SPA SIESTOOM</p>
          <p className={`${styles.mainText} text-white`}>S-DECOR</p>
          <div className={styles.lineName}></div>
          {/* <p className={`${styles.mainText} text-white`}>DESIGN</p> */}
        </div>
        <div className={`${styles.viewDatePerson} flex items-center gap-5`}>
          <div className="date flex items-center gap-5 px-5">
            <Svg name="calendar" path="icons" />
            <p className={`${styles.textDatePerson} text-[#AE935F] font-bold text-base`}>{formatNumberLess(date.getDate())}-{formatNumberLess(date.getMonth() + 1)}-{formatNumberLess(date.getFullYear())}</p>
          </div>
          <div className="person flex items-center gap-5 px-5">
            <Svg name="person" path="icons" />
            <p className={`${styles.textDatePerson} text-[#AE935F] font-bold text-base`}>TRAN LONG</p>
          </div>
          <div className={styles.iconDatePerson}>
            <Svg path="icons" name="circle-arrow-right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Banner)