import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Button from '../../../components/Button';

import { Container } from './styles';

interface IProps {
  filter: string;
  handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Actions = ({ filter, handleChangeFilter }: IProps) => {
  return (
    <Container>
      <Button variant="secondary" onClick={() => {}}>
        <FiPlus /> Novo lançamento
      </Button>

      <input type="text" value={filter} onChange={handleChangeFilter} />
    </Container>
  );
};

export default Actions;
