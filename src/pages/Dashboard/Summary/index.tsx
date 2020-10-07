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

const EARNING_COLOR = '#16a085';
const EXPENSE_COLOR = '#c0392b';

const Summary: FC<IProps> = ({ totalTransactions, balanceValues }) => {
  const formattedIncome = formatNumber(balanceValues.income);
  const formattedOutcome = formatNumber(balanceValues.outcome);
  const formattedBalance = formatNumber(balanceValues.balance);
  const BALANCE_COLOR =
    balanceValues.balance >= 0 ? EARNING_COLOR : EXPENSE_COLOR;

  return (
    <Container>
      <div>
        <strong>Lançamentos: </strong>
        <span>{totalTransactions}</span>
      </div>
      <div>
        <strong>Receitas: </strong>
        <span style={{ color: `${EARNING_COLOR}` }}>{formattedIncome}</span>
      </div>
      <div>
        <strong>Despesas: </strong>
        <span style={{ color: `${EXPENSE_COLOR}` }}>{formattedOutcome}</span>
      </div>
      <div>
        <strong>Saldo: </strong>
        <span style={{ color: `${BALANCE_COLOR}` }}>{formattedBalance}</span>
      </div>
    </Container>
  );
};

export default Summary;
