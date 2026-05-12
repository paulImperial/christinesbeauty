import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
  border-radius: 4px;
  gap: 0.4rem;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colours.pink};
    outline-offset: 2px;
  }

  &:active {
    opacity: 1;
  }

  span {
    width: 1.75rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.colours.pink};
    border-radius: 10px;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    transform-origin: center;

    :first-child {
      transform: ${({ open }) => open ? 'translateY(10px) rotate(45deg)' : 'translateY(0) rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'scaleX(0)' : 'scaleX(1)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'translateY(-10px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
    }
  }

  @media (min-width: 931px) {
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
    width: 2.75rem;
    height: 2.75rem;

    span {
      width: 1.85rem;
      height: 0.32rem;
    }
  }

  @media (max-width: 440px) {
    width: 2.25rem;
    height: 2.25rem;
    right: 1rem;
    left: auto;

    span {
      width: 1.5rem;
      height: 0.28rem;
    }
  }
`;
