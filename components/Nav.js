import { useEffect, useState } from 'react';
import Link from 'next/link';

//	UI
import BurgerButton from '@/components/BurgerButton';
import Menu from '@/components/MobileMenu';

const links = [
	{ href: 'https://github.com/HankTech', label: 'GitHub' },
	{ href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
	useEffect(() => {
		//	BG scroll effect
		onscroll = function () {
			var nav = document.getElementById('navMd');
			if (window.pageYOffset > 100) {
				nav.classList.add('opacity-75');
				nav.classList.add('bg-black');
			} else {
				nav.classList.remove('opacity-75');
				nav.classList.remove('bg-black');
			}
		};
	}, []);

	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-black md:bg-transparent">
			<div className="px-4 md:hidden flex items-center justify-between py-4">
				<div>
					<Link href="/">
						<a className="flex items-center text-white text-lg">
							<img src="img/hnk-inverse-white.png" className="h-8 w-8" />
							<div className="px-3">HNK.tech</div>
						</a>
					</Link>
				</div>
				<div className="md:hidden">
					{/* Nota: modifique el modulo para que el styledComponent genere un div
						en ves de un button, para que no de error. la direccion del archivo editado es:
						node_modules\react-animated-burgers\lib\components\Button\StyledButton.d.ts
						
					<HamburgerSliderReverse
						type="button"
						className="focus:outline-none relative z-10"
						isActive={open}
						onClick={handleOpen}
						buttonWidth={23}
						barColor="white"
					/> */}	
					<BurgerButton open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
				
			</div>
			
			{/* Nav sm */}
			<nav id="navMd" className="hidden md:block px-4 md:px-10 sticky top-0 z-50 py-4 -mb-20">
				<ul className="flex justify-between items-center text-white">
					<li>
						<Link href="/">
							<a className="flex items-center text-white text-lg">
								<img src="img/hnk-inverse-white.png" className="h-8 w-8 md:h-10 md:w-10" />
								<div className="px-3">HNK.tech</div>
							</a>
						</Link>
					</li>
					<ul className="flex justify-between items-center space-x-4">
						{links.map(({ href, label }) => (
							<li key={`${href}${label}`}>
								<a href={href} target="_blank" className="font-bold no-underline hover:text-green-500">
									{label}
								</a>
							</li>
						))}
					</ul>
				</ul>
			</nav>
		</header>
	);
}
