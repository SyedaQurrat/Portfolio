import { AppProps } from 'next/app';
import Navbar from '../component/navbar';
import Footer from '../component/footer'; 
import Head from 'next/head';
import '@styles/global.css';
import { useEffect } from 'react';
import AOS from 'aos'; 

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
         // Initialize AOS
        AOS.init({ offset: 0 });
    }, []);

    return (
        <>
            <Navbar /> 
            <Head>
                <title>Syeda Qurrat's Portfolio</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;

