import { Header } from '../components/Header'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Header />
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

