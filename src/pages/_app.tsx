import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '@/components/Layouts/Layout'
import WindowResizeHandler from '@/handlers/WindowResizeHandler'
import store from '@/store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import 'antd/dist/antd.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <WindowResizeHandler />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          icon={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </>
  )
}
