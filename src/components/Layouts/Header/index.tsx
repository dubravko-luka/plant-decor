import React, { memo, useRef, useState } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';
import { menu } from './config';
import { useRefCustom } from '@/hooks/useRefCustom';

type Props = {
  //
};

const Header: React.FC<Props> = () => {

  const [active, setActive] = useState(false)
  const infoUserRef = useRef(null)
  useRefCustom(infoUserRef, setActive)

  return (
    <>
      <header className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.user}`} ref={infoUserRef}>
            <div className="relative">
              <div className={`${styles.iconUser}`} onClick={() => setActive(!active)}>
                <img src="/images/svg/person.svg" alt={alt} />
              </div>
              <div className={`${styles.userInfo} ${active ? styles.active : ''}`}>
                <ul className={`${styles.menuList}`}>
                  {
                    menu?.map((item, index) => (
                      <li
                        key={index}
                        className={`${styles.menuItem} ${item.danger ? styles.danger : ''}`}
                      >
                        {item.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
