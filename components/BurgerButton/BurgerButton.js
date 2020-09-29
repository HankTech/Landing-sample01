import { StyledBurgerButton } from './BurgerButton.styled';

const BurgerButton = ({ className, open, setOpen, ...props }) => {
	return (
		<StyledBurgerButton	className={className} open={open} onClick={() => setOpen(!open)} {...props}>
			<div />
			<div />
			<div />
		</StyledBurgerButton>
	);
};

export default BurgerButton;
