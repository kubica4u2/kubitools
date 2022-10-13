import Transitions from '../components/Transitions';
import '../styles/globals.css'
import '../styles/transitions.css'

function MyApp({ Component, pageProps }) {
  return (
    <Transitions>
       <Component {...pageProps} />
    </Transitions>
  )
}

export default MyApp