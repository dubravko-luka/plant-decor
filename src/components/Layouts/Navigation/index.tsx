import React, { memo } from 'react';
import styles from './styles.module.css'
import { logo } from '@/assets/images/logo';
import Svg from '@/components/Svg';
import Link from 'next/link';
import { menu } from './config';

type Props = {
  //
};

const Navigation: React.FC<Props> = () => {
  return (
    <>
      <header className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
          <div className={`${styles.menu}`}>
            <ul className={`${styles.menuList}`}>
              {
                menu.map((item, index) => (
                  <li className={`${styles.menuItem}`} key={index}>
                    {
                      item.newTab
                        ? <Link className={`${styles.menuLink}`} target='_blank' href={item.href}>{item.name}</Link>
                        : <Link className={`${styles.menuLink}`} href={item.href}>{item.name}</Link>
                    }
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={`${styles.socials}`}>
            <Link href="/" target='_blank'>
              <Svg class={styles.iconSocial} name={"facebook-circle"} />
            </Link>
            <Link href="/" target='_blank'>
              <Svg class={styles.iconSocial} name={"zalo-circle"} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Navigation);
