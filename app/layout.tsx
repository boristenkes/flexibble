import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export const metadata = {
	title: 'Flexibble',
	description: 'Dribbble for developers'
}

type RootLayoutProps = {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
