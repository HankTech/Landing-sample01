import Link from 'next/link';

export default function Footer() {
	const socialLinks = [
		{ href: '#', label: 'Instagram', icon: 'fab fa-instagram' },
		{ href: '#', label: 'Twitter', icon: 'fab fa-twitter' },
		{ href: '#', label: 'Facebook', icon: 'fab fa-facebook-f' },
	];

	const legalLinks = [
		{ href: '#', label: 'Legal' },
		{ href: '#', label: 'Privacity Center' },
		{ href: '#', label: 'Privacity Policy' },
		{ href: '#', label: 'Cookies' },
		{ href: '#', label: 'About Ads' },
	];

	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-4 md:px-10 mt-10 bg-black">
			<div className="grid grid-cols-1 md:grid-cols-5 text-base md:text-sm pt-10 text-white">
				{/* Brand */}
				<div className="col-span-1">
					<Link href="/">
						<a className="flex items-center text-white text-lg pt-10">
							<img src="img/hnk-inverse-white.png" className="h-8 w-8 md:h-10 md:w-10" />
							<div className="px-3">HNK.tech</div>
						</a>
					</Link>
				</div>

				{/* Company */}
				<div className="col-span-1 pt-10">
					<h3 className="font-bold text-gray-600 uppercase mb-5">Company</h3>
					<ul>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								About
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Jobs
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								For the Record
							</a>
						</li>
					</ul>
				</div>

				{/* Communities */}
				<div className="col-span-1 pt-10">
					<h3 className="font-bold text-gray-600 uppercase mb-5">Communities</h3>
					<ul className="text-white">
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								For Artist
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Developers
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Brands
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Inventors
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Vendors
							</a>
						</li>
					</ul>
				</div>

				{/* Useful Links */}
				<div className="col-span-1 pt-10">
					<h3 className="font-bold text-gray-600 uppercase mb-5">Useful Links</h3>
					<ul className="text-white">
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Help
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Web Player
							</a>
						</li>
						<li className="mb-5">
							<a href="#" className="hover:text-green-500">
								Free Mobile App
							</a>
						</li>
					</ul>
				</div>

				{/* Redes Sociales */}
				<div className="col-span-1 pt-24 md:pt-10">
					<ul className="flex justify-center items-center space-x-4">
						{socialLinks.map(({ href, label, icon }) => (
							<li key={`${href}${label}`}>
								<a
									href={href}
									className="flex justify-center items-center rounded-full w-1 h-1 font-bold no-underline bg-gray-900 hover:text-green-500 text-white text-xl p-6"
								>
									<i className={icon} aria-hidden="true"></i>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Copyright */}
			<div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-10 text-gray-600 text-xs">
				<div className="col-span-1">
					<ul className="flex flex-row justify-around flex-wrap space-x-4">
						{legalLinks.map(({ href, label, icon }) => (
							<li key={`${href}${label}`} className="mb-4">
								<a href={href} className="no-underline hover:text-green-500">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="col-span-1 text-center md:text-right my-5 md:my-0 ">
					{'Copyright ©  '}
					<a /*href="https://hnk.inc.com/"*/> Hnk.inc</a>
					{'  '}
					{currentYear}
				</div>
			</div>
		</footer>
	);
}
