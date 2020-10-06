import React, { FC } from 'react';

import { formatNumber } from '../../../utils';

import { Container } from './styles';

interface IProps {
  totalTransactions: number;
  balanceValues: {
    income: number;
    outcome: number;
    balance: number;
  };
}

const Summary: FC<IProps> = ({ totalTransactions, balanceValues }) => {
  const formattedIncome = formatNumber(balanceValues.income);
  const formattedOutcome = formatNumber(balanceValues.outcome);
  const formattedBalance = formatNumber(balanceValues.balance);

  return (
    <Container>
      <div>
        <strong>Lançamentos: </strong>
        <span>{totalTransactions}</span>
      </div>
      <div>
        <strong>Lançamentos</strong>
        <span>{formattedIncome}</span>
      </div>
      <div>
        <strong>Lançamentos</strong>
        <span>{formattedOutcome}</span>
      </div>
      <div>
        <strong>Lançamentos</strong>
        <span>{formattedBalance}</span>
      </div>
    </Container>
  );
};

export default Summary;
