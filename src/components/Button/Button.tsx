import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${(props) => (props.disabled ? 'grey' : 'darkblue')};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
