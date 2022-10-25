import { Toaster } from 'react-hot-toast'
import { DrawerMenu } from '../components/Layouts/DrawerMenu'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <DrawerMenu>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            className: 'bg-brand-blue-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
      </DrawerMenu>
    </GlobalContextProvider>
  )
}

