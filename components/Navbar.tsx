import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import AuthProviders from './AuthProviders'

export default function Navbar() {
	const session = {}

	return (
		<header className='flexBetween navbar'>
			<div className='flex-1 flexStart gap-10'>
				<Link href='/'>
					<Image
						src='/logo.svg'
						width={119}
						height={31}
						alt='Logo'
						priority
					/>
				</Link>
				<nav>
					<ul className='xl:flex hidden text-small gap-7'>
						{navLinks.map(link => (
							<li key={link.title}>
								<Link href={link.href}>{link.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='flexCenter gap-4'>
				{session ? (
					<>
						UserPhoto
						<Link href='/create-project'>Share Work</Link>
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</header>
	)
}
