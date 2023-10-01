import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from '@/components/header'
import Footer from '@/components/footer'
import styles from "../styles/layout.module.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <main className={styles.container}>
        {<Component {...pageProps} />}
      </main>
      <Footer />
    </>
  )


}
