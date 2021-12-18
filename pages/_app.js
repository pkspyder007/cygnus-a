import HomeLayout from '@/components/Layout/HomeLayout'
import '../styles/globals.css'
// import '@assets/prism-coldark-dark.css'
// import '@styles/prism-one-dark.css'
import '@styles/prism-one-light.css'
import '@styles/extra-syntax.css'


function MyApp({ Component, pageProps }) {
  return <HomeLayout>
    <Component {...pageProps} />
  </HomeLayout>
}

export default MyApp
