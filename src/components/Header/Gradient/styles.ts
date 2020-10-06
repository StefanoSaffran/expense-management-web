import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 8.4rem;
    background: ${`linear-gradient(90deg, ${darken(
      0.05,
      theme.colors.primary,
    )} 0%, ${lighten(0.1, theme.colors.primary)} 100%);`};
  `}
`;
