import React from 'react';
import Transaction from './Transaction';

import { Container } from './styles';
import { ITransaction } from '..';

type IProps = {
  transactions: ITransaction[];
  handleDelete(id: string): void;
};

const TransactionsList = ({ transactions, handleDelete }: IProps) => {
  const orderedTransactions = transactions.sort((a, b) => a.day - b.day);
  return (
    <Container>
      {orderedTransactions?.map(transaction => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default TransactionsList;
