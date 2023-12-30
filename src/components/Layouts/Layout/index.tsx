import styles from './styles.module.css'
import React, { ReactElement, memo, useEffect } from 'react'
import { KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP } from '@/constants';
import LoadingData from '@/components/Loading/Data';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Navigation from '../Navigation';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactElement
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  const loading = useSelector((state: RootState) => state?.global?.loading);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP)
  }, [])

  return (
    <>
      {loading && <LoadingData />}
      <Navigation />
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default memo(LayoutComponent)