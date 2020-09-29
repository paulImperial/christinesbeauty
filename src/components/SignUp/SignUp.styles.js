import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  height: 40px;
  font-size: 1.5rem;
  line-height: 2rem;
  border: none;
`;

export const Button = styled.button`
  background: ${(props) => `${props.theme.colours.pink}`};
  border: none;
  padding: 20px 30px;
  width: 30%;
  color: ${(props) => `${props.theme.colours.baseWhite}`};
  border-radius: 3px;
  @media (max-width: 800px) {
    width: 50%;
    border-bottom: 1px solid ${(props) => props.theme.colours.baseWhite};
    padding-bottom: 20px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 1px;
  }
`;
