import { type AppType } from 'next/app'

import '@/styles/index.css'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
	return <Component {...pageProps} />
}

export default MyApp
