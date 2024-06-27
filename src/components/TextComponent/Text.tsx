import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  children: React.ReactNode;
};

const StyledText = styled.p`
  font-size: 16px;
  color: black;
`;

const Text: React.FC<TextProps> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
