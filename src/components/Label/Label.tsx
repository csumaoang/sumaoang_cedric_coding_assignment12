import React from 'react';
import styled from 'styled-components';

export type LabelProps = {
  children: React.ReactNode;
};

const StyledLabel = styled.label`
  font-size: 14px;
  color: black;
`;

const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
