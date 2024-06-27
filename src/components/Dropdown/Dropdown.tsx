import React from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const StyledSelect = styled.select<{ disabled: boolean }>`
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  color: black;
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, onChange }) => {
  return (
    <StyledSelect disabled={disabled} onChange={(e) => onChange?.(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
