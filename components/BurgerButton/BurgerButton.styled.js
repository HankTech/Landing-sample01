import styled from 'styled-components';

export const StyledBurgerButton = styled.button`
	position: relative;
	top: 5%;
	/* right: 2rem; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/* width: 1rem; */
	height: 1.25rem;
	background: transparent;
	/* border: none; */
	cursor: pointer;
	/* padding: 0; */
	z-index: 10;

	&:focus {
		outline: none;
	}

    div {
    width: 1.5rem;
    height: 0.17rem;
    background: #EFFFFA;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
	transform-origin: 1px;
	:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(0px)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
