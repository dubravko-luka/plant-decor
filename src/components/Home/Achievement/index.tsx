import React, { memo } from "react";
import styles from './styles.module.css'

const Achievement: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container py-12 grid grid-cols-12 gap-5">
          <div className="col-span-12 mb-4">
            <p className="text-white font-bold text-2xl uppercase text-center">Thành tựu của chúng tôi</p>
          </div>
          <div className="list col-span-12">
            <div className="grid grid-cols-12 ssm:gap-5 gap-2">
              {
                new Array(6).fill(null).map((_, index) => (
                  <div className="sm:col-span-6 col-span-12" key={index}>
                    <div className={`${styles.itemProject} grid grid-cols-12 ssm:gap-3 gap-1`}>
                      <div className={`${styles.wrapImgProject} md:col-span-6 sm:col-span-12 sssm:col-span-6 col-span-12 h-full w-full relative`}>
                        <img className={`${styles.imgProject} object-cover`} src={`/images/page-home/webp/${index + 1}.webp`} alt="" />
                      </div>
                      <div className="md:col-span-6 sm:col-span-12 sssm:col-span-6 col-span-12 flex items-center justify-center ssm:p-4 p-2">
                        <p className="text-center font-bold">
                          THỰC TẾ NỘI THẤT CĂN HỘ SUNRISE SOUTH 3 PHÒNG NGỦ – CHỊ HOA
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Achievement)