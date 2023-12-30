import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { alt } from '@/helpers/common';
import Svg from '@/components/Svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { IItem } from './config';
import { hasValue } from '@/utils';
import { logo } from '@/assets/images/logo';

type Props = {
  //
};

const Footer: React.FC<Props> = () => {

  const [setting] = useState(
    {
      fanpage: {
        value: "https://facebook.com"
      },
      tiktok: {
        value: '',
      },
      youtube: {
        value: '',
      }
    }
  )

  const [socials, setSocials] = useState<IItem[]>([])

  useEffect(() => {
    if (setting) {
      let _socials = []
      if (hasValue(setting.fanpage.value)) {
        _socials.push({
          icon: 'facebook',
          name: "",
          iconColor: "#2a9ef1",
          href: setting?.fanpage?.value,
          newTab: true,
        })
      }
      if (hasValue(setting.tiktok.value)) {
        _socials.push({
          icon: 'tiktok',
          name: "",
          iconColor: "#fff",
          href: setting.tiktok?.value,
          newTab: true,
        })
      }
      if (hasValue(setting.youtube.value)) {
        _socials.push({
          icon: 'youtube',
          name: "",
          iconColor: "#ff1512",
          href: setting.youtube?.value,
          newTab: true,
        })
      }
      setSocials(_socials)
    }
  }, [setting])

  return (
    <>
      <div className={`${styles.bg}`}>
        <div className={`${styles.container}`}>
          <Link href={'/'} className="flex justify-center mb-7">
            {/* <img className="llg:m-0 m-auto mb-5" width={50} src="/images/logos/logo-vertical.svg" alt={alt} /> */}
            <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
          </Link>

          <p className='sssm:text-base text-xs text-white text-center'>KIẾN TRÚC - XÂY DỰNG - NỘI THẤT - SÂN VƯỜN</p>

          <div className={`${styles.icons}`}>
            {
              socials.map((social, index) => (
                <Link
                  style={{
                    '--iconColor': social?.iconColor
                  } as any}
                  key={index}
                  className={`${styles.linkFooter}`}
                  href={social?.href}
                  target={'_blank'}
                >
                  <Svg name={social?.icon ?? ''} />
                </Link>
              ))
            }
          </div>

          <div className={`${styles.wrapCopyRight} flex items-end llg:justify-start justify-center w-full mt-24`}>
            <p className={`${styles.copyRight} italic text-xs text-center`}>{`© 2023 Công Ty TNHH Kiến Trúc Sân Vườn Vuòn Trong Nhà`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
