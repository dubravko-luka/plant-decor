import React, { memo, useEffect, useState } from "react";
import styles from './styles.module.css'
import Link from "next/link";
import { useAppState } from "@/contexts";
import Svg from "@/components/Svg";
import { Helmet } from "react-helmet";

const Navigation: React.FC = () => {

  const { appState } = useAppState()

  // Handle the scroll event to hide and show navigation
  const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 124) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      setIsHidden(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // End handle the scroll event to hide and show navigation

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Helmet>
        {
          showMenu && <style>{`html, body { overflow: hidden; }`}</style>
        }
      </Helmet>
      <header
        className={`
          ${styles.menu}
          ${showMenu ? styles.active : ''}
          ${scrolled ? styles.scrolled : ''}
          ${isHidden && Number(appState.widthClient) >= 992 ? styles.hidden : ''}
          justify-between flex`}
      >
        {
          Number(appState.widthClient) <= 991 && showMenu
            ? (
              <>
                <div className={styles.bgMask}></div>
                <div className={`${styles.closeMenu} llg:hidden`} onClick={() => setShowMenu(false)}>
                  <Svg name='close-menu' path='icons' />
                </div>
              </>
            ) : (
              <></>
            )
        }
        <ul className={`${styles.itemWrapMenu} ${styles.itemWrapMenuTop} flex items-center lg:gap-20 gap-10`}>
          <li className={styles.itemMenu}>
            <Link onClick={() => setShowMenu(false)} className="text-white font-bold text-base" href="/">Trang chu</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link onClick={() => setShowMenu(false)} className="text-white font-bold text-base" href="/">San pham</Link>
          </li>
        </ul>
        <ul className={`${styles.itemWrapMenu} flex items-center lg:gap-20 gap-10`}>
          <li className={styles.itemMenu}>
            <Link onClick={() => setShowMenu(false)} className="text-white font-bold text-base" href="/">Tu van & Thiet ke</Link>
          </li>
          <li className={styles.itemMenu}>
            <Link onClick={() => setShowMenu(false)} className="text-white font-bold text-base" href="/" target="_blank">Lien he</Link>
          </li>
        </ul>
        <div className={`${styles.logo} text-center`}>
          <div className={`${styles.name} text-3xl text-white font-bold tracking-wider`}>VUONTRONGNHA</div>
          <p className="description ssm:text-base text-xs text-white font-medium uppercase tracking-wider">Architecture & Interior Design</p>
        </div>
        {
          Number(appState?.widthClient) <= 991
            ? (
              <>
                <div className={styles.openMenu} onClick={() => setShowMenu(true)}>
                  <Svg path="icons" name="menu-open" />
                </div>
              </>
            ) : (
              <></>
            )
        }
      </header>
    </>
  )
}

export default memo(Navigation)