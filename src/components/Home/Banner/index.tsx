import React, { memo } from "react";
import styles from './styles.module.css'
import Svg from "@/components/Svg";
import { formatNumberLess } from "@/helpers/numbers";
import Link from "next/link";

const Banner: React.FC = () => {
  const date = new Date()

  return (
    <>
      <div className="h-screen w-screen relative">
        <img className="relative w-full h-full object-cover brightness-50" src="/images/page-home/png/banner.png" alt="" />
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <img className="w-80" src="/images/page-home/png/logo.png" alt="" />
        </div>
        <div className={`${styles.viewDatePerson} flex items-center gap-5`}>
          <Link href={'tel:0904407775'}>
            <div className="date flex items-center gap-5 px-5">
              <Svg name="phone" path="icons" />
              <p className={`${styles.textDatePerson} text-[#AE935F] font-bold text-base`}>09 04 407 775</p>
            </div>
          </Link>
          <Link href={'/'}>
            <div className="person flex items-center gap-5 px-5">
              <Svg name="person" path="icons" />
              <p className={`${styles.textDatePerson} text-[#AE935F] font-bold text-base`}>TRAN LONG (ZALO)</p>
            </div>
          </Link>
          <div className={styles.iconDatePerson}>
            <Svg path="icons" name="circle-arrow-right" />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Banner)