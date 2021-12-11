import '../styles/globals.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';





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
      <Head>
        <title>Javier Prieto's site!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
    )
}
  
export default MyApp;
