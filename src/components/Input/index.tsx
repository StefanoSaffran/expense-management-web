import React, { InputHTMLAttributes } from 'react';
import { IoMdSearch } from 'react-icons/io';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: boolean;
  containerStyle?: Record<string, unknown>;
}

const Input = ({
  name,
  label,
  icon,
  containerStyle = {},
  ...rest
}: IInputProps) => {
  return (
    <Container style={containerStyle}>
      <input id={name} name={name} {...rest} />
      {label && <label htmlFor={name}>{label}</label>}
      {icon && <IoMdSearch size={20} />}
    </Container>
  );
};

export default Input;
