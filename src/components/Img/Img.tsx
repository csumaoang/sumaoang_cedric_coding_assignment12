import React from 'react';
import styled from 'styled-components';

export type ImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
};

const StyledImg = styled.img<{ disabled: boolean }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
