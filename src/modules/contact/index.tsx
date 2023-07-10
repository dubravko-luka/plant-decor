import Svg from "@/components/Svg";
import Link from "next/link";
import React, { memo } from "react";
import styles from './styles.module.css'

const ContactContainer: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrapper} pt-[100px] min-h-screen flex items-center justify-center`}>
        <div className="py-10 container">
          <div className="bg-green-113 grid grid-cols-12 gap-0">
            <div className="llg:col-span-6 col-span-12 text-white p-5 flex items-center justify-center min-h-[400px]">
              <div className="">
                <p className="text-2xl font-bold text-center mb-5">VƯỜN TRONG NHÀ</p>
                <p className="mb-3">
                  <span className="font-bold">
                    - Địa chỉ:
                  </span>
                  &nbsp;Số 01, Đường 05, Phường Hiệp Bình Phước, Quận Thủ Đức, Tp.HCM
                </p>
                <p className="mb-3">
                  <span className="font-bold">
                    - Điện thoại:
                  </span>
                  &nbsp;092 966 4272
                </p>
                <p className="mb-3">
                  <span className="font-bold">
                    - Email:
                  </span>
                  &nbsp;vuontrongnha@gmail.com
                </p>
                <p className="mb-3">Chuyên tư vấn, thiết kế - thi công các công trình về: Cảnh quan, Sân vườn, Hồ cá Koi, Đài phun nước, Sân vườn cafe…</p>
                <div className="flex">
                  <Link href="tel:0904407775" className="hot-line flex items-center gap-2 rounded-3xl bg-red-700 px-5 py-2">
                    <Svg name="phone-white" path="icons" />
                    <p className="text-sm">HOTLINE: 092 966 4272</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="llg:col-span-6 col-span-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2129159000883!2d106.71924657549374!3d10.794998458849998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sT%C3%B2a%20nh%C3%A0%20The%20Landmark%2081!5e0!3m2!1svi!2s!4v1688977066388!5m2!1svi!2s"
                style={{
                  border: 0,
                  width: '100%',
                  height: '500px'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(ContactContainer)