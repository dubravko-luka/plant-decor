import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { logo, logoShort } from '@/assets/images/logo';
import Svg from '@/components/Svg';
import Link from 'next/link';
import { menu } from './config';
import { Helmet } from 'react-helmet';

type Props = {
  //
};

const Navigation: React.FC<Props> = () => {

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (window.scrollY !== 0) {
      setScrolled(true)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {
        show && (
          <Helmet>
            <style>
              {`
                @media (max-width: 991px) {
                  html, body {
                    overflow: hidden!important;
                  }
                }
              `}
            </style>
          </Helmet>
        )
      }
      <header className={`${styles.wrapper} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
          <div className={styles.mobile}>
            <div className={`${styles.openMenu}`} onClick={() => setShow(true)}>
              <Svg
                name='open-menu'
                path='icons'
              />
            </div>
            <div className={`${styles.logoShort}`} dangerouslySetInnerHTML={{ __html: logoShort }}></div>
          </div>
          {
            show && <div className={`${styles.bgMask}`} onClick={() => setShow(false)}></div>
          }
          <div className={`${styles.menu} ${show ? styles.active : ''}`}>
            <div className={`relative`}>
              <div className={`${styles.logoMobile}`} dangerouslySetInnerHTML={{ __html: logo }}>
              </div>
              <div className={`${styles.closeMenu}`} onClick={() => setShow(false)}>
                <Svg
                  name='close-menu'
                  path='icons'
                />
              </div>
            </div>
            <ul className={`${styles.menuList} no-sb`}>
              {
                menu.map((item, index) => (
                  item.newTab
                    ? <Link className={`${styles.menuItem}`} target='_blank' href={item.href} key={index}>{item.name}</Link>
                    : <Link className={`${styles.menuItem}`} href={item.href} key={index}>{item.name}</Link>
                ))
              }
            </ul>
          </div>
          <div className={`${styles.socials}`}>
            <Link className={styles.socialLink} href="/" target='_blank'>
              <Svg class={styles.iconSocial} name={"phone-circle"} />
            </Link>
            <Link className={styles.socialLink} href="/" target='_blank'>
              <Svg class={styles.iconSocial} name={"zalo-circle"} />
            </Link>
            <Link className={styles.socialLink} href="/" target='_blank'>
              <Svg class={styles.iconSocial} name={"facebook-circle"} />
            </Link>
            <Link className={styles.socialLink} href="https://sdecor.space" target='_blank'>
              <Svg class={styles.iconSocial} name={"sdecor-circle"} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Navigation);
