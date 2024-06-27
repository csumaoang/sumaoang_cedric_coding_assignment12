import React from 'react';
import styled from 'styled-components';

export type HeroImageProps = {
  src: string;
  alt: string;
  disabled?: boolean;
};

const StyledHeroImage = styled.div<{ src: string; disabled: boolean }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled = false }) => {
  return <StyledHeroImage src={src} aria-label={alt} disabled={disabled} />;
};

export default HeroImage;
