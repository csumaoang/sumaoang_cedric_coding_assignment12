import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  text: string;
  disabled?: boolean;
};

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
