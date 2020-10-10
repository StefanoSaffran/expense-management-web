/* eslint-disable no-param-reassign */
import React, { useState, useEffect, FC, useMemo, useCallback } from 'react';

import api from '../../services/api';

import Summary from './Summary';
import TransactionsList from './TransactionsList';
import Actions from './Actions';
import PeriodSelector from './PeriodSelector';
import DefaultLayout from '../_layouts/default';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal/ModalAddTransaction';

import generatePeriods, { IPeriod } from '../../utils/generate-periods';

import { Container, Wrapper } from './styles';

export interface ITransaction {
  id: string;
  category: string;
  description: string;
  value: number;
  yearMonth: string;
  day: number;
  type: '-' | '+';
}

const Dashboard: FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [filter, setFilter] = useState('');
  const [allPeriods, setAllPeriods] = useState<IPeriod[]>([]);
  const [period, setPeriod] = useState({} as IPeriod);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getAllPeriods = (): void => {
      const data = generatePeriods();
      setAllPeriods(data);

      const currentDate = new Date();

      const month =
        currentDate.getMonth() < 9
          ? `0${currentDate.getMonth() + 1}`
          : currentDate.getMonth() + 1;

      const yearMonth = `${currentDate.getFullYear()}-${month}`;
      const currentPeriod = allPeriods.find(({ id }) => id === yearMonth);

      setPeriod(currentPeriod || { ...allPeriods[0] });
    };

    getAllPeriods();
  }, [allPeriods]);

  useEffect(() => {
    if (period.id) {
      api
        .get('/api/transaction', {
          params: {
            period: period.id,
          },
        })
        .then(({ data }) => {
          setTransactions(data.transactions);
        });
    }
  }, [period]);

  const handleDeleteTransaction = useCallback(async (id: string) => {
    await api.delete(`/api/transaction/${id}`);

    setTransactions(oldState =>
      oldState.filter(transaction => transaction.id !== id),
    );
  }, []);

  const handleChangeFilter = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(target?.value);
    },
    [],
  );

  const handleChangePeriod = useCallback((newPeriod: IPeriod) => {
    setPeriod(newPeriod);
  }, []);

  const filteredTransactions = filter
    ? transactions.filter(transaction => {
        const regex = new RegExp(filter, 'i');
        return regex.test(transaction.description);
      })
    : transactions;

  const balanceValues = useMemo(() => {
    const result = filteredTransactions.reduce(
      (acc, next) => {
        switch (next.type) {
          case '+':
            acc.income += next.value;
            break;
          case '-':
            acc.outcome += next.value;
            break;
          default:
            break;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        balance: 0,
      },
    );

    result.balance = result.income - result.outcome;

    return result;
  }, [filteredTransactions]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleAddTransaction = useCallback(async newTransaction => {
    const { data } = await api.post('/api/transaction', newTransaction);

    setTransactions(oldState => [...oldState, data]);
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Modal
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          onSave={handleAddTransaction}
        />
        <Wrapper>
          {transactions.length ? (
            <>
              <h1>Desafio Final do Bootcamp Full Stack</h1>

              <PeriodSelector
                allPeriods={allPeriods}
                selectedPeriod={period}
                handleChangePeriod={handleChangePeriod}
              />

              <Summary
                totalTransactions={filteredTransactions.length}
                balanceValues={balanceValues}
              />

              <Actions
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                openModal={toggleModal}
              />

              <TransactionsList
                transactions={filteredTransactions}
                handleDelete={handleDeleteTransaction}
              />
            </>
          ) : (
            <Loading />
          )}
        </Wrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
