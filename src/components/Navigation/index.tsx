import React, { memo, useEffect, useState } from "react";
import styles from './styles.module.css'

const Navigation: React.FC = () => {

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

  return (
    <>
      <header className={`${styles.navigation} ${isHidden ? styles.hidden : ''} ${scrolled ? styles.active : ''} relative justify-between flex z-9`}>
        <ul className="flex items-center gap-20">
          <li className={styles.itemMenu}>
            <a className="text-white font-bold text-base" href="/">Trang chu</a>
          </li>
          <li className={styles.itemMenu}>
            <a className="text-white font-bold text-base" href="/">Tu van & Thiet ke</a>
          </li>
        </ul>
        <ul className="flex items-center gap-20">
          <li className={styles.itemMenu}>
            <a className="text-white font-bold text-base" href="/">San pham</a>
          </li>
          <li className={styles.itemMenu}>
            <a className="text-white font-bold text-base" href="/" target="_blank">Lien he</a>
          </li>
        </ul>
        <div className={`${styles.logo} text-center`}>
          <p className="name text-3xl text-white font-bold tracking-wider">S-DECOR</p>
          <p className="description text-base text-white font-medium uppercase tracking-wider">Architecture & Interior Design</p>
        </div>
      </header>
    </>
  )
}

export default memo(Navigation)