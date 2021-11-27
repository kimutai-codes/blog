import Layout from '../components/Layout';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-R8VRLRB0H9`}
			/>

			<Script strategy='lazyOnload'>
				{`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R8VRLRB0H9')
        `}
			</Script>

			<Component {...pageProps} className='child' />
		</Layout>
	);
}

export default MyApp;
