import React, { FC, useMemo, useCallback } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { ITransaction } from '../..';
import { formatNumber } from '../../../../utils';
import Button from '../../../../components/Button';

import { Container, Details, ActionButtonsContainer, Price } from './styles';

interface IProps {
  transaction: ITransaction;
  handleDelete(id: string): void;
}

const Transaction: FC<IProps> = ({ transaction, handleDelete }) => {
  const formattedValue = useMemo(() => formatNumber(transaction.value), [
    transaction.value,
  ]);

  const onDelete = useCallback(() => handleDelete(transaction.id), [
    transaction,
    handleDelete,
  ]);

  return (
    <Container isIncome={transaction.type === '+'}>
      <strong>
        {transaction.day < 10 ? `0${transaction.day}` : transaction.day}
      </strong>

      <Details>
        <strong>{transaction.category}</strong>
        <span>{transaction.description}</span>
      </Details>

      <Price>{formattedValue}</Price>

      <ActionButtonsContainer>
        <Button variant="transparent" color="#333" onClick={onDelete}>
          <FiEdit3 />
        </Button>
        <Button variant="transparent" color="red" onClick={onDelete}>
          <FiTrash />
        </Button>
      </ActionButtonsContainer>
    </Container>
  );
};

export default Transaction;
