import '../styles/globals.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import React from 'react';





function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS para que cargue el css de MUI antes!
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
    )
}
  
export default MyApp;
