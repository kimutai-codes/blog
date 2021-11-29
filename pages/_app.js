import Layout from '../components/Layout';
import '../styles/globals.css';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }) {
	return (
		<TinaEditProvider
			editMode={
				<TinaCMS {...pageProps}>
					{(livePageProps) => <Component {...livePageProps} />}
				</TinaCMS>
			}
		>
			<Layout>
				<Script
					strategy='lazyOnload'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MY_GOOGLE_ANNALYTICS}`}
				/>

				<Script strategy='lazyOnload'>
					{`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config',${process.env.MY_GOOGLE_ANNALYTICS})
        `}
				</Script>

				<Component {...pageProps} className='child' />
			</Layout>
		</TinaEditProvider>
	);
}

export default MyApp;
