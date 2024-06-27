import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const StyledCard = styled.div<{ disabled: boolean }>`
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Card: React.FC<CardProps> = ({ children, disabled = false }) => {
  return <StyledCard disabled={disabled}>{children}</StyledCard>;
};

export default Card;
