import styled, { css } from 'styled-components';

const EARNING_COLOR = css`
  ${({ theme }) => theme.colors.earning};
`;
const EXPENSE_COLOR = css`
  ${({ theme }) => theme.colors.expense};
`;

interface IContainerProps {
  isIncome: boolean;
}

export const Container = styled.li<IContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props =>
    props.isIncome ? EARNING_COLOR : EXPENSE_COLOR};

  > strong {
    margin-right: 15px;
  }

  & + li {
    margin-top: 8px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > strong {
    font-weight: 600;
  }
`;

export const Price = styled.span``;

export const ActionButtonsContainer = styled.div`
  display: flex;

  margin-left: 15px;
`;
