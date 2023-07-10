import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/contexts'
import WindowResizeHandler from '@/handlers/WindowResizeHandler'
import Head from '@/components/Head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <WindowResizeHandler />
      <Head />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </AppContextProvider>
  )
}
