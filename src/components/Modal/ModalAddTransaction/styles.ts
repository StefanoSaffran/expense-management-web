import styled, { css } from 'styled-components';
import Button from '../../Button';

export const Form = styled.form`
  ${({ theme }) => css`

  width: 100%;

  > fieldset {
    border: 0;
    padding: 0 2.4rem;

    > legend {
      font: bold 2.4rem Roboto;
      width: 100%;
      margin-bottom: 1.6rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${theme.colors.greyLowerOpacity}
      display: flex;
      align-items: center;
    }

    > div + div {
      margin-top: 1.5rem;
    }
  }
`}
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    margin-left: 1rem;
  }
`;

export const ConfirmButton = styled(Button)`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    width: 100%;

    :hover(:disabled) {
      color: ${({ theme }) => theme.colors.label};
      border-color: ${theme.colors.primary};
      background: transparent;
    }
  `}
`;
