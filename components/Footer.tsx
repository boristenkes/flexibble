import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='flexStart footer'>
			<div className='flex flex-col gap-12 w-full'>
				<div className='flex items-start flex-col'>
					<Image
						width={119}
						height={31}
						src='/logo-purple.svg'
						alt='logo'
					/>
					<p className='text-start text-sm font-normal mt-5 max-w-xs'>
						Flexibble is the world's leading community for creatives to share,
						grow and get hired.
					</p>
				</div>
				<div className='flex flex-wrap gap-12'>
					{footerLinks.map(linkGroup => (
						<FooterColumn
							key={linkGroup.title}
							title={linkGroup.title}
							links={linkGroup.links}
						/>
					))}
				</div>
			</div>

			<div className='flexBetween footer_copyright'>
				<p>&copy; {new Date().getFullYear()} Flexibble. All rights reserved.</p>
				<p className='text-gray'>
					<span className='text-black font-semibold'>
						{numberWithCommas(Math.floor(Math.random() * 50000))} projects
						submitted
					</span>
				</p>
			</div>
		</footer>
	)
}

type FooterColumnProps = {
	title: string
	links: Array<string>
}

function FooterColumn({ title, links }: FooterColumnProps) {
	return (
		<div className='footer_column'>
			<h4 className='font-semibold title'>{title}</h4>
			<ul className='flex flex-col gap-2 font-normal'>
				{links.map(link => (
					<li key={link}>
						<Link href='#'>{link}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

function numberWithCommas(number: number) {
	return number.toLocaleString().replaceAll('.', ',')
}
