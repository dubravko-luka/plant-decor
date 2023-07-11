import React, { memo } from "react";
import styles from './styles.module.css'

const DesignConsultancyContainer: React.FC = () => {
  return (
    <>
      <div className={`pt-[100px] min-h-screen flex items-center justify-center`}>
        <div className="container py-12 grid grid-cols-12 gap-5">
          <div className="col-span-12 mb-4">
            <p className="text-green-main font-bold text-2xl uppercase text-center">TƯ VẤN THIẾT KẾ THI CÔNG</p>
          </div>
          <div className="list col-span-12">
            <div className="grid grid-cols-12 ssm:gap-5 gap-2">
              {
                new Array(6).fill(null).map((_, index) => (
                  <div className="sm:col-span-6 col-span-12" key={index}>
                    <div className={`${styles.itemProject} grid grid-cols-12 ssm:gap-3 gap-1`}>
                      <div className={`${styles.wrapImgProject} md:col-span-6 sm:col-span-12 sssm:col-span-6 col-span-12 !h-full w-full relative`}>
                        <img className={`${styles.imgProject} object-cover`} src={`/images/page-home/webp/${index + 1}.webp`} alt="" />
                      </div>
                      <div className="md:col-span-6 sm:col-span-12 sssm:col-span-6 col-span-12 flex items-center justify-center ssm:p-4 p-2">
                        <div className="">
                          <p className="text-center font-bold">
                            THỰC TẾ NỘI THẤT CĂN HỘ SUNRISE SOUTH 3 PHÒNG NGỦ – CHỊ HOA
                          </p>
                          <div className="line w-3 h-[2px] bg-slate-400 m-auto my-3"></div>
                          <p className="text-center font-base">Phong cách tân cổ điển là biểu tượng của sự sang trọng và đẳng cấp.</p>
                        </div>
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

export default memo(DesignConsultancyContainer)