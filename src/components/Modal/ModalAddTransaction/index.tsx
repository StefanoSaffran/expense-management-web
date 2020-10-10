import React, { useCallback, useState, FormEvent } from 'react';

import Input from '../../Input';

import { Form, TypeContainer, ConfirmButton } from './styles';

import Modal from '..';
import api from '../../../services/api';
import { ITransaction } from '../../../pages/Dashboard';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  onSave(transaction: Record<string, unknown>): void;
}

function today() {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const todayDate = `${year}-${month}-${day}`;
  return todayDate;
}

const ModalAddTransaction = ({ isOpen, setIsOpen, onSave }: IModalProps) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(today());
  const [type, setType] = useState('-');

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const year = +date.substring(0, 4);
      const month = +date.substring(5, 7);
      const day = +date.substring(8, 10);

      const newTransaction = {
        description,
        value,
        category,
        year,
        month,
        day,
        type,
      };

      onSave(newTransaction);
      setIsOpen();
    },
    [date, description, value, category, type, onSave, setIsOpen],
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  /*  const canSave = () => {
    return description.trim() !== '' && category.trim() !== '';
  }; */

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Novo lançamento</legend>

          <TypeContainer>
            <label>
              <input
                name="expense-earning"
                type="radio"
                value="-"
                checked={type === '-'}
                onChange={({ target }) => setType(target.value)}
              />
              <span>Despesa</span>
            </label>

            <label>
              <input
                name="expense-earning"
                type="radio"
                value="+"
                checked={type === '+'}
                onChange={({ target }) => setType(target.value)}
              />
              <span>Receita</span>
            </label>
          </TypeContainer>

          <Input
            required
            label="Descrição"
            name="description"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />

          <Input
            required
            label="Categoria"
            name="category"
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          />

          <Input
            required
            containerStyle={{ marginTop: 15 }}
            label="Valor"
            name="value"
            min="0"
            step="0.01"
            type="number"
            value={value}
            onChange={({ target }) => setValue(Number(target.value))}
          />

          <Input
            required
            label="Data"
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
          />

          <ConfirmButton
            type="submit"
            variant="secondary"
            /* disabled={!canSave()} */
          >
            Criar
          </ConfirmButton>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default ModalAddTransaction;
