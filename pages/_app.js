import Foot from '../components/footer'
import NavBar from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='gradient overflow-x-hidden' style={{fontFamily: 'cursive'}}>
      <NavBar/>
      <Component {...pageProps} />
      <Foot/>
    </div>
  )
}

export default MyApp
