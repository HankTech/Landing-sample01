import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function IndexPage() {
	const socialLinks = [
		{ href: '#', label: 'Instagram', icon: 'fab fa-instagram' },
		{ href: '#', label: 'Twitter', icon: 'fab fa-twitter' },
		{ href: '#', label: 'Facebook', icon: 'fab fa-facebook-f' },
	];

	return (
		<Fragment>
			<NextSeo title="Sample Layout 01" description="This is a sample of layout 01" />
			{/* Menu Navigation */}
			<Nav />
			<main className="">
				<div
					className="bg-cover bg-center h-auto text-white px-4 md:px-10 py-10"
					style={{ backgroundImage: `url(img/hero-lg.jpg)`,}}
				>
					<div className="grid grid-cols-1 md:grid-cols-6 py-10 mt-10">
						<div className="col-start-2 col-span-4 text-center">
							<h1 className="font-bold uppercase text-4xl">
								Lorem ipsum dolor sit consectetur adipiscing elit.
							</h1>
							<h3 className="font-bold text-2xl mt-10">
								Proin vehicula euismod gravida donec.
							</h3>

							{/* Redes Sociales */}
							<ul className="flex justify-center items-center space-x-4 pb-8 mt-20">
								{socialLinks.map(({ href, label, icon }) => (
									<li key={`${href}${label}`}>
										<a
											href={href}
											className="flex justify-center items-center rounded-full w-1 h-1 font-bold no-underline bg-white text-black hover:text-green-500 text-xl p-6"
										>
											<i className={icon} aria-hidden="true"></i>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* section 01 */}
				<section className="px-4 md:px-10 mt-10">
					<h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
						Integer feugiat diam et erat tincidunt faucibus. Sed ornare lorem vel mattis
						pretium, Curabitur vestibulum nisi ut feugiat iaculis.
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 text-center">
						<div className="mb-5 md:mb-0">
							<img src="img/img-01.jpg" className="w-full h-40" />
							<div className="mt-2">
								<h3 className="font-bold text-base  text-gray-900 mb-2">
									Sit amet pulvinar
								</h3>
								<p className="text-base">
									Cras pellentesque tortor pretium ornare consectetur fusce vehicula.
								</p>
							</div>
						</div>

						<div className="mb-5 md:mb-0">
							<img src="img/img-02.jpg" className="w-full h-40" />
							<div className="mt-2">
								<h3 className="font-bold text-base  text-gray-900 mb-2">
									Duis quis leo vitae
								</h3>
								<p className="text-base">
									Leo porttitor ornare eget sed dolor, mauris blandit dictum.
								</p>
							</div>
						</div>

						<div className="mb-5 md:mb-0">
							<img src="img/img-03.jpg" className="w-full h-40" />
							<div className="mt-2">
								<h3 className="font-bold text-base  text-gray-900 mb-2">
									Lorem vel egestas ut risus elit
								</h3>
								<p className="text-base">Rutrum sed cursus non, luctus faucibus nullam.</p>
							</div>
						</div>

						<div className="mb-5 md:mb-0">
							<img src="img/img-04.jpg" className="w-full h-40" />
							<div className="mt-2">
								<h3 className="font-bold text-base text-gray-900 mb-2">
									Vulputate Aliquam nibh
								</h3>
								<p className="text-base">Posuere eu elit ultrices accumsan.</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* Footer */}
			<Footer />
		</Fragment>
	);
}
