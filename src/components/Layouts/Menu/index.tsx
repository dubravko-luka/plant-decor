import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { IMenuConfig, menu } from './menu.config';
import Link from 'next/link';
import { chevDown, closeMenu, headPhone, openMenu } from '@/assets/images/icon';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { logo } from '@/assets/images/logo';
import { useDispatch } from 'react-redux';
import { setCollapseSidebar } from '@/store/actions/globalAction';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

const renderMenu = (
  menuItems: IMenuConfig[],
  active: number,
  activeLink: number,
  path: string,
  setActive: React.Dispatch<React.SetStateAction<number>>,
  closeSidebar: () => void
): JSX.Element[] => {
  return menuItems.map((menu, index) => {
    return (
      menu?.childs
        ? (
          <div
            key={index}
            className={`${styles.menuItemDropdown} ${active === index ? styles.active : ''}`}
            style={{ "--height": `${(menu.childs?.length * 52) + 52}px` } as any}
          >
            <li
              className={`${styles.menuItem} ${active === index || activeLink === index ? styles.active : ''} flex justify-between items-center`}
              onClick={() => setActive(index === active ? -1 : index)}
            >
              <div className='flex items-center justify-center gap-2'>
                <div className={`${styles.icon}`} dangerouslySetInnerHTML={{ __html: menu.icon ?? '' }} />
                <span className={styles.textMenu}>{menu.name}</span>
              </div>
              <div className={`${styles.iconDropdown}`} dangerouslySetInnerHTML={{ __html: chevDown }}></div>
            </li>
            <ul key={index} className={`${styles.menuListDropdown}`}>
              {
                renderMenu(menu.childs, active, activeLink, path, setActive, closeSidebar)
              }
            </ul>
          </div>
        )
        : (
          <li key={index} className={`${styles.menuItem} ${styles.menuItemSingle} ${path === menu.href ? styles.active : ''}`}>
            <Link className={styles.menuLink} href={menu.href ?? ''} onClick={closeSidebar}>
              <div className={`${styles.icon}`} dangerouslySetInnerHTML={{ __html: menu.icon ?? '' }} />
              <span className={styles.textMenu}>{menu.name}</span>
            </Link>
          </li>
        )
    )
  })
}

type Props = {
  //
};

const Menu: React.FC<Props> = () => {
  const [active, setActive] = useState(0)
  const [activeLink, setActiveLink] = useState(-1)
  const { sidebarCollapse } = useSelector((state: RootState) => state?.global)
  const dispath = useDispatch()

  const router = useRouter()

  function findParentIndexByHref(hrefToFind: string): number {
    const foundParentIndex = _.findIndex(menu, (parentItem) => {
      if (parentItem.href === hrefToFind) {
        return true;
      } else if (parentItem.childs) {
        return !!_.find(parentItem.childs, { 'href': hrefToFind });
      }
      return false;
    });

    return foundParentIndex !== -1 ? foundParentIndex : -1;
  }

  const closeSidebar = () => {
    dispath(setCollapseSidebar(false))
  }

  useEffect(() => {
    if (router.asPath && router.asPath.indexOf('[...slug]') === -1) {
      const index = findParentIndexByHref(router.asPath);
      setActive(index);
      setActiveLink(index)
    }
  }, [router.asPath])

  return (
    <>
      <nav className={`${styles.wrapper} ${sidebarCollapse ? styles.active : ''}`}>
        <div className={`${styles.container}`}>
          <ul className={`${styles.menuList} no-sb`}>
            {
              renderMenu(menu, active, activeLink, router.asPath, setActive, closeSidebar)
            }
          </ul>
          <div className={`${styles.wrapLogo}`}>
            <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
            <div
              onClick={closeSidebar}
              className={`${styles.closeMenu} llg:hidden`}
              dangerouslySetInnerHTML={{ __html: closeMenu }}
            ></div>
          </div>
          <div className={`${styles.support}`}>
            <div className={`${styles.iconSupport}`} dangerouslySetInnerHTML={{ __html: headPhone }}></div>
            <span>Need Support?</span>
          </div>
        </div>
        <div
          onClick={() => dispath(setCollapseSidebar(true))}
          className={`${styles.openMenu}`}
          dangerouslySetInnerHTML={{ __html: openMenu }}
        >
        </div>
      </nav>
    </>
  );
};

export default memo(Menu);
