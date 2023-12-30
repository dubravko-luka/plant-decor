import styles from './styles.module.css'
import React, { ReactElement, memo, useEffect, useState } from 'react'
import { KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP } from '@/constants';
import LoadingData from '@/components/Loading/Data';
import LoadingPage from '@/components/Loading/Page';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import BackTop from '@/components/BackTop';

interface LayoutProps {
  children: ReactElement
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  const [loadingPage, setLoadingPage] = useState(true)
  const loading = useSelector((state: RootState) => state?.global?.loading);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE_VERSION_APP, VERSION_APP)
  }, [])

  return (
    <>
      {loading && <LoadingData />}
      <Navigation />
      <BackTop />
      {
        loadingPage && <LoadingPage loading={loadingPage} setLoading={setLoadingPage} />
      }
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