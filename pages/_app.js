import HomeLayout from '@/components/Layout/HomeLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <HomeLayout>
    <Component {...pageProps} />
  </HomeLayout>
}

export default MyApp
