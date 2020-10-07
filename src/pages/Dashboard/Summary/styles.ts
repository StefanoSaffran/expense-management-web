import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${darken(0.1, theme.colors.lightGrey)};
    padding: 0.8rem;
    border-radius: ${theme.radii.tiny};

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      > strong {
        margin-right: 6px;
        font-weight: 500;
      }
    }

    @media (min-width: 700px) {
    }
  `}
`;
