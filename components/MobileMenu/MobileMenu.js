import { StyledMobileMenu } from './MobileMenu.styled';

const MobileMenu = ({ className, open, setOpen, ...props }) => {
	return (
		<StyledMobileMenu className={className} open={open} onClick={() => setOpen(!open)} {...props}>
			<a href="#" className="text-3xl">
				About us
			</a>
			<a href="#" className="text-3xl">
				Pricing
			</a>
			<a href="#" className="text-3xl">
				Contact
			</a>

			<div />

			<a href="#" className="text-xl">
				Sign up
			</a>
			<a href="#" className="text-xl mb-5">
				Log In
			</a>

            <a href="#" className="mt-auto flex items-center text-white text-lg">
				<img src="img/hnk-inverse-white.png" className="h-10 w-10" />
				<h1 className="px-3">HNK.tech</h1>
			</a>
		</StyledMobileMenu>
	);
};

export default MobileMenu;
