import styled from 'styled-components';

export const StyledMobileMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: start;
	background: #000;
	text-align: left;
	padding: 2rem;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	transition: transform 0.5s ease-in-out;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

	a {
		padding: 0.5rem 0;
		font-weight: bold;
		color: #ffff;
		text-decoration: none;
		text-align: left;
		:first-child {
			transition: transform 0.40s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(2) {
			transition: transform 0.45s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(3) {
			transition: transform 0.50s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(4) {
			transition: transform 0.55s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(5) {
			transition: transform 0.60s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(6) {
			transition: transform 0.65s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}

		:nth-child(7) {
			transition: transform 0.70s ease-in-out;
			transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		}
	}

	div {
		margin: 2rem 0;
		width: 2rem;
		background: #fff;
		height: 0.1rem;
	}
`;
