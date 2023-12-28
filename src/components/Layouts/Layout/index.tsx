import styles from './styles.module.css'
import React, { ReactElement, memo, useEffect } from 'react'
import { KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP } from '@/constants';
import LoadingData from '@/components/Loading/Data';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { useRouter } from 'next/router';
import { AppRoutes } from '@/constants/routes';
import Menu from '../Menu';
import Header from '../Header';

interface LayoutProps {
  children: ReactElement
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  const router = useRouter();
  const loading = useSelector((state: RootState) => state?.global?.loading);
  const { loged } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP)
  }, [])

  useEffect(() => {
    if (loged) {
      router.push(AppRoutes.login)
    }
  }, [loged])

  return (
    <>
      {loading && <LoadingData />}
      <Menu />
      <Header />
      {
        !loged && (
          <div className={`${styles.wrapper}`}>
            <div className={`${styles.container}`}>
              {children}
            </div>
          </div>
        )
      }
    </>
  )
}

export default memo(LayoutComponent)