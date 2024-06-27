import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  text: string;
  disabled?: boolean;
};

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
`;

const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};

export default Text;
