import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container } from './styles';

interface IProps {
  filter: string;
  handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>): void;
  openModal(): void;
}

const Actions = ({ filter, handleChangeFilter, openModal }: IProps) => {
  return (
    <Container>
      <Button variant="secondary" onClick={openModal}>
        <FiPlus /> Novo lançamento
      </Button>

      <Input
        required
        containerStyle={{ marginLeft: 16 }}
        label="Filtro"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Container>
  );
};

export default Actions;
