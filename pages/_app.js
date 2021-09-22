import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // add layouts here, eg. header and footer to appear on every page
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
