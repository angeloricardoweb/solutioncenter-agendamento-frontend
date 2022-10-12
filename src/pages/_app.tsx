import { DrawerMenu } from '../components/Layouts/DrawerMenu'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <DrawerMenu>
        <Component {...pageProps} />
      </DrawerMenu>
    </GlobalContextProvider>
  )
}

