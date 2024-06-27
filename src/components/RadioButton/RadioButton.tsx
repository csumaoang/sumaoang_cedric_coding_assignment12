import React from 'react';
import styled from 'styled-components';

export type RadioButtonProps = {
  name: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const StyledRadio = styled.input<{ disabled: boolean }>`
  margin: 0 10px 0 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, disabled = false, onChange }) => {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <StyledRadio
            type="radio"
            name={name}
            value={option.value}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
